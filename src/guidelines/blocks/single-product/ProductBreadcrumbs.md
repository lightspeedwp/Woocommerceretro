# ProductBreadcrumbs Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ProductBreadcrumbs.tsx`  
**Stylesheet:** `/src/styles/blocks/product/info.css` (lines 5-41)  
**Status:** Complete  
**Replaces:** `/guidelines/blocks/woocommerce/utility/breadcrumbs.md` (outdated BEM classes)

---

## Overview

**Purpose:** Renders a horizontal navigation trail showing the user's position within the store hierarchy (Home > Category > Product). Allows quick navigation back to parent pages.

**Use Cases:**
- Single product page — show Home > Category > Product Name
- Variable product page — same trail with current variant context
- Any page requiring hierarchical navigation context

**WordPress Alignment:** Maps to the `woocommerce/breadcrumbs` block. In WordPress FSE, this block renders inside single product templates and enables customers to navigate back to parent category or shop pages.

---

## Visual Reference

**Layout:** Horizontal flex row with chevron separators between items.

**States:**
- Default — Muted foreground text color, inherits from parent
- Hover (links) — Dark red accent (`#8B0000` — needs tokenization)
- Current (last item) — Dark red, medium weight, truncated with ellipsis

**Dark Mode:** Currently **incomplete** — hardcoded `#8B0000` does not adapt to dark mode. Needs CSS variable migration.

---

## Implementation

### File Location

```
/src/app/components/blocks/single-product/ProductBreadcrumbs.tsx
```

### Dependencies

```tsx
import { Link } from 'react-router';
import { CaretRight as ChevronRight } from '@/utils/phosphor-compat';
```

**Required:**
- `react-router` — `Link` component for navigation
- `@/utils/phosphor-compat` — `CaretRight` (aliased as `ChevronRight`) for separator icon

**Optional:**
- None

---

## Props / API

### TypeScript Interface

```tsx
interface BreadcrumbItem {
  label: string;   // Display text
  href?: string;   // Link URL (omit for current/last item)
}

// Component accepts:
{
  items: BreadcrumbItem[];
}
```

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | `BreadcrumbItem[]` | Yes | — | Array of breadcrumb segments (last item without `href` is current page) |

### BreadcrumbItem Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `label` | `string` | Yes | Display text for the breadcrumb segment |
| `href` | `string` | No | Link URL — omit for the current (last) segment |

---

## Usage Examples

### Basic Usage

```tsx
import { ProductBreadcrumbs } from '@/components/blocks/single-product/ProductBreadcrumbs';

function ProductPage() {
  return (
    <ProductBreadcrumbs
      items={[
        { label: 'Apparel', href: '/shop/category/apparel' },
        { label: 'Pixel Power Tee' },
      ]}
    />
  );
}
```

**Renders:** Home > Apparel > Pixel Power Tee

### Deep Hierarchy

```tsx
<ProductBreadcrumbs
  items={[
    { label: 'Shop', href: '/shop' },
    { label: 'Games', href: '/shop/category/games' },
    { label: 'Board Games', href: '/shop/category/games?sub=board' },
    { label: 'Retro Quest Deluxe' },
  ]}
/>
```

**Renders:** Home > Shop > Games > Board Games > Retro Quest Deluxe

---

## Component Behavior

1. **Home link** is always rendered first (hardcoded `<Link to="/">Home</Link>`)
2. Items are rendered in order with `ChevronRight` separators between each
3. Items with `href` render as `<Link>` (navigable)
4. Items without `href` render as `<span>` (current page, not clickable)
5. Uses `React.Fragment` with `key={index}` for separator + item pairs

---

## BEM Class Structure

```
nav.wc-product-breadcrumbs                  // Container (flex, wrap)
  a.wc-product-breadcrumbs__link            // "Home" and category links
  svg.wc-product-breadcrumbs__separator     // ChevronRight icon (14px)
  a.wc-product-breadcrumbs__link            // Category link
  svg.wc-product-breadcrumbs__separator     // ChevronRight icon
  span.wc-product-breadcrumbs__current      // Current page (non-link)
```

**Note:** The old guideline at `/guidelines/blocks/woocommerce/utility/breadcrumbs.md` references `.woocommerce-breadcrumb` classes — these are **outdated** and do not match the actual component. The correct BEM prefix is `.wc-product-breadcrumbs`.

### CSS Token Usage

| Property | Token / Value | Notes |
|----------|---------------|-------|
| Gap | `--wp--preset--spacing--20` | Between items and separators |
| Font size | `--wp--preset--font-size--small` | Small text |
| Text color | `--wp--preset--color--muted-foreground` | Subdued default |
| Link transition | `--wp--preset--transition--base` | Smooth hover color change |
| Font weight (current) | `--wp--preset--font-weight--medium` | Emphasizes current page |
| Hover color | `#8B0000` | **Hardcoded** — needs tokenization |
| Current color | `#8B0000` | **Hardcoded** — needs tokenization |

---

## Dark Mode

**Status: Incomplete**

The component inherits `--wp--preset--color--muted-foreground` for base text (which adapts in dark mode), but the hover and current states use hardcoded `#8B0000` which does not change.

### Required Fix

Add dark mode overrides to `/src/styles/blocks/product/info.css`:

```css
.dark .wc-product-breadcrumbs__link:hover {
  color: var(--color-neon-pink);  /* or appropriate retro dark token */
}

.dark .wc-product-breadcrumbs__current {
  color: var(--color-neon-pink);
}
```

**Tracked in:** `/tasks/tokens-task-list.md` TK2

---

## Accessibility

### Current State
- Uses `<nav>` element (semantic landmark)
- Links use `<Link>` for keyboard navigation
- Current page uses `<span>` (not interactive — correct)

### Missing (Required Improvements)
1. **`aria-label="Breadcrumb"`** on `<nav>` — required for screen readers to identify the landmark
2. **`aria-current="page"`** on the current (last) item `<span>` — required by WCAG
3. **`aria-hidden="true"`** on `ChevronRight` separator icons — they are decorative
4. **Structured data** — Consider adding `itemscope itemtype="https://schema.org/BreadcrumbList"` for SEO

### Recommended Fix

```tsx
<nav className="wc-product-breadcrumbs" aria-label="Breadcrumb">
  {/* ... */}
  <ChevronRight size={14} className="wc-product-breadcrumbs__separator" aria-hidden="true" />
  {/* ... */}
  <span className="wc-product-breadcrumbs__current" aria-current="page">{item.label}</span>
</nav>
```

---

## Responsive Design

- `flex-wrap: wrap` ensures items wrap on narrow screens
- Text truncation on current item: `-webkit-line-clamp: 1` with `text-overflow: ellipsis`
- Chevron icon (14px) is appropriately sized for mobile
- No breakpoint-specific behavior needed — flexbox handles all widths

---

## Retro Theme Enhancements (Future)

- Replace `#8B0000` with retro neon accent (e.g., `--color-neon-pink` or `--color-neon-cyan`)
- Add subtle glow on hover for links
- Consider pixel-arrow separator instead of ChevronRight
- `prefers-reduced-motion` must disable any glow/transition effects

---

## Testing Checklist

- [ ] Renders Home link as first item always
- [ ] Each item with `href` renders as navigable `<Link>`
- [ ] Last item without `href` renders as `<span>` (current page)
- [ ] ChevronRight separator appears between each item
- [ ] Hover state changes link color
- [ ] Current item shows medium font weight and truncation
- [ ] Wraps correctly on narrow viewports (< 400px)
- [ ] Dark mode adapts base text color (after fix applied)
- [ ] `aria-label="Breadcrumb"` present on `<nav>` (after fix)
- [ ] `aria-current="page"` present on current item (after fix)
- [ ] Separator icons have `aria-hidden="true"` (after fix)

---

**Version:** 1.0  
**Created:** 2026-03-15  
**Lines:** ~190
