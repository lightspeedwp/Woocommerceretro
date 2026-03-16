# StoreNotices Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/StoreNotices.tsx`  
**Stylesheet:** `/src/styles/blocks/product/single-product-blocks.css` (lines 140-204)  
**Status:** Complete

---

## Overview

**Purpose:** Renders contextual alert banners for store events such as "Added to cart", "Out of stock", or informational notices. Conditionally renders — returns `null` when no notices are present.

**Use Cases:**
- Cart feedback ("Item added to cart successfully")
- Stock warnings ("Only 2 left in stock", "Out of stock")
- Promotional notices ("Free shipping on this item")
- Error states ("Could not add item — try again")

**WordPress Alignment:** Maps to the `woocommerce/store-notices` block from WooCommerce Blocks. In a WordPress FSE theme, this block appears at the top of single product and cart/checkout templates to display WooCommerce flash messages.

**Cross-Reference:** A separate `StoreNotices` part exists at `/src/app/components/parts/StoreNotices.tsx` — that is a **site-wide promotional banner** (template part), not the same component. This guideline covers only the single-product block version.

---

## Visual Reference

**States:**
- Success — Green background, CheckCircle icon
- Error — Red background, WarningCircle icon
- Info — Blue background, Info icon
- Empty — Component returns `null` (no DOM output)

**Dark Mode:**
- Background opacity increases slightly (0.06 -> 0.08)
- Border opacity increases (0.20 -> 0.25)
- Text color shifts to light pastel variant (e.g., `#166534` -> `#86efac`)

---

## Implementation

### File Location

```
/src/app/components/blocks/single-product/StoreNotices.tsx
```

### Dependencies

```tsx
import { WarningCircle, CheckCircle, Info } from '@/utils/phosphor-compat';
```

**Required:**
- `@/utils/phosphor-compat` — Icon compatibility layer (Phosphor names -> Lucide icons)

**Optional:**
- None

---

## Props / API

### TypeScript Interface

```tsx
interface Notice {
  type: 'success' | 'error' | 'info';
  message: string;
}

// Component accepts:
{
  notices: Notice[];
}
```

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `notices` | `Notice[]` | Yes | — | Array of notice objects to display |

### Notice Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | `'success' \| 'error' \| 'info'` | Yes | Determines icon, color scheme, and BEM modifier |
| `message` | `string` | Yes | Notice text content |

---

## Usage Examples

### Basic Usage

```tsx
import { StoreNotices } from '@/components/blocks/single-product/StoreNotices';

function ProductPage() {
  return (
    <StoreNotices
      notices={[
        { type: 'success', message: 'Item added to cart!' },
      ]}
    />
  );
}
```

### Multiple Notices

```tsx
<StoreNotices
  notices={[
    { type: 'info', message: 'Free shipping on orders over $100' },
    { type: 'error', message: 'Only 1 left in stock — order soon' },
  ]}
/>
```

### Conditional Rendering

```tsx
// Empty array or undefined = no DOM output
<StoreNotices notices={[]} />  // renders null
```

---

## BEM Class Structure

```
.wc-store-notices                    // Container (flex column, gap)
  .wc-store-notice                   // Individual notice bar
  .wc-store-notice--success          // Green variant
  .wc-store-notice--error            // Red variant
  .wc-store-notice--info             // Blue variant
    .wc-store-notice__icon           // Icon wrapper (flex-shrink: 0)
    .wc-store-notice__message        // Text content
```

### CSS Token Usage

| Property | Token | Value |
|----------|-------|-------|
| Gap (container) | `--wp--preset--spacing--30` | Between notices |
| Margin bottom | `--wp--preset--spacing--60` | Space below notices stack |
| Gap (notice) | `--wp--preset--spacing--30` | Between icon and message |
| Padding | `--wp--preset--spacing--40` | Internal padding |
| Border radius | `--wp--preset--border-radius--sm` | Rounded corners |
| Font size | `--wp--preset--font-size--100` | Message text size |
| Font weight | `--wp--preset--font-weight--medium` | Message emphasis |

---

## Dark Mode

Dark mode is handled via `.dark` parent class selector in CSS. No JavaScript changes needed.

| Element | Light | Dark |
|---------|-------|------|
| Success bg | `rgba(22, 163, 74, 0.06)` | `rgba(22, 163, 74, 0.08)` |
| Success text | `#166534` | `#86efac` |
| Error bg | `rgba(220, 38, 38, 0.06)` | `rgba(220, 38, 38, 0.08)` |
| Error text | `#991b1b` | `#fca5a5` |
| Info bg | `rgba(37, 99, 235, 0.06)` | `rgba(37, 99, 235, 0.08)` |
| Info text | `#1e40af` | `#93c5fd` |

**Known Issue:** These color values are hardcoded hex/rgba rather than CSS variables. See `/tasks/tokens-task-list.md` for remediation tracking.

---

## Accessibility

### Current State
- Icons are decorative (no `aria-hidden` set — should be added)
- `role="alert"` is **missing** — should be added for screen reader announcement
- No live region — dynamic notices won't be announced automatically

### Required Improvements
1. Add `role="alert"` to each `.wc-store-notice` for screen reader announcement
2. Add `aria-hidden="true"` to `.wc-store-notice__icon` (decorative)
3. Consider `aria-live="polite"` on the container for dynamically added notices
4. Add a dismiss button with `aria-label="Dismiss notice"` for each notice (not yet implemented)

### Keyboard
- No interactive elements currently (view-only notices)
- When dismiss buttons are added: must be focusable, respond to Enter/Space

---

## Responsive Design

- Notices stack vertically (flex column) — naturally responsive
- No breakpoint-specific behavior needed
- Icon size (18px) is fixed — acceptable at all viewports
- Padding uses spacing tokens that scale appropriately

---

## Retro Theme Enhancements (Future)

The current implementation uses standard success/error/info colors. For retro theme parity:
- Consider neon border glow on notices (subtle `box-shadow` with theme colors)
- Pixel-art style icons as alternative to Lucide icons
- CRT scan-line overlay on error notices for dramatic effect
- `prefers-reduced-motion` must disable any glow animations

---

## Testing Checklist

- [ ] Renders nothing when `notices` is empty array
- [ ] Renders nothing when `notices` is undefined/null
- [ ] Success notice shows green styling + CheckCircle icon
- [ ] Error notice shows red styling + WarningCircle icon
- [ ] Info notice shows blue styling + Info icon
- [ ] Multiple notices stack with correct gap
- [ ] Dark mode toggles all variant colors correctly
- [ ] Screen reader announces notices (after `role="alert"` added)
- [ ] No layout shift when notices appear/disappear

---

**Version:** 1.0  
**Created:** 2026-03-15  
**Lines:** ~175
