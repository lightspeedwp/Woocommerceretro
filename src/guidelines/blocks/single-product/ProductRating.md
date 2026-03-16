# ProductRating Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ProductRating.tsx`  
**Stylesheet:** `/src/styles/blocks/product/single-product-blocks.css` (lines 40-74)  
**Status:** Complete  
**Moved From:** `/guidelines/blocks/ProductRating.md`

---

## Overview

**Purpose:** Displays a visual 5-star rating system with customer review count, providing social proof and quality indication. Uses Phosphor-compat icons for star rendering with filled/empty states and CSS custom properties for dark mode support.

**WordPress Alignment:** Maps to `woocommerce/product-rating`. Displays aggregated customer feedback.

---

## Props / API

```tsx
interface ProductRatingProps {
  rating: number;      // Average rating (0-5, decimals allowed)
  reviewCount: number; // Number of customer reviews
}
```

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `rating` | `number` | Yes | — | Average rating (0-5). Math.floor() for star display (4.9 -> 4 stars) |
| `reviewCount` | `number` | Yes | — | Total reviews. Displayed as "(N customer reviews)" |

---

## Usage

```tsx
import { ProductRating } from '@/components/blocks/single-product/ProductRating';

<ProductRating rating={4.5} reviewCount={24} />
```

**Zero Reviews:** Don't render component. Show "No reviews yet" message instead.

---

## BEM Class Structure

```
.wc-product-rating                        // Container (flex row)
  .wc-product-rating__stars               // Stars container (flex row)
    .wc-product-rating__star--filled      // Filled star (amber)
    .wc-product-rating__star--empty       // Empty star (gray outline)
  .wc-product-rating__count              // Review count text (interactive)
```

### CSS Token Usage

| Property | Token | Notes |
|----------|-------|-------|
| Stars/count gap | `--wp--preset--spacing--10` | 4px |
| Count left margin | `--wp--preset--spacing--20` | 8px |
| Bottom margin | `--wp--preset--spacing--50` | 20px |
| Count font size | `--wp--preset--font-size--100` | 14px |
| Count weight | `--wp--preset--font-weight--medium` | 500 |
| Count color | `--wp--preset--color--muted-foreground` | Muted gray |
| Filled star | `--wp--preset--color--luminous-vivid-amber` | Gold/amber |
| Empty star (light) | `--wp--preset--color--neutral-300` | Light gray |
| Empty star (dark) | `--wp--preset--color--neutral-500` | Medium gray |
| Hover (light) | `--wp--preset--color--accent` | Purple |
| Hover (dark) | `--wp--preset--color--neon-cyan` | Cyan with glow |
| Count border | `--wp--preset--color--border` | Subtle underline |
| Transition | `--wp--preset--transition--base` | 200ms |

### CSS Custom Properties

```css
.wc-product-rating__stars {
  --wc-star-filled: var(--wp--preset--color--luminous-vivid-amber);
  --wc-star-empty: var(--wp--preset--color--neutral-300);
}

.dark .wc-product-rating__stars {
  --wc-star-empty: var(--wp--preset--color--neutral-500);
}
```

---

## Dark Mode

**Status: Complete**

- Filled stars: Amber in both modes (sufficient contrast)
- Empty stars: Lighter gray in dark mode for visibility
- Review count: Lighter gray text with cyan hover + neon glow
- All via CSS variables — no JS changes needed

---

## Accessibility

### Current State
- Visual stars (decorative icons)
- Review count has cursor: pointer

### Required Improvements
1. **`role="img"`** on stars container with `aria-label="Rated X out of 5 stars"`
2. **`tabIndex={0}`** on review count for keyboard focus
3. **`role="button"`** on review count
4. **`onKeyDown`** handler for Enter/Space on review count
5. **`aria-hidden="true"`** on individual star SVGs (decorative when container has label)

### Color Contrast
- Review count light: **7.2:1** (AA) | Dark: **11.4:1** (AAA)
- Filled stars: Amber on both backgrounds (sufficient)

---

## Responsive Design

No media queries needed — flexbox handles all viewports. Star size (16px) is consistent across devices. Review count wraps if container is narrow.

---

## Star Icon Integration

```tsx
import { Star } from '@/utils/phosphor-compat';

// Filled star
<Star size={16} className="wc-product-rating__star--filled" />

// Empty star
<Star size={16} className="wc-product-rating__star--empty" />
```

CSS controls fill via `color`/`fill` properties on each modifier class.

---

## Related Components

**Used By:** `SingleProduct`, `ProductCard`, `QuickView`, `ReviewsTab`, `ProductComparison`  
**Uses:** `Star` icon from phosphor-compat  
**Siblings:** `ProductTitle`, `ProductPrice`, `ProductSummary`, `ProductMeta`

---

**Version:** 2.0 (condensed from 1.0)  
**Created:** 2026-03-15  
**Moved:** 2026-03-15 (from `/guidelines/blocks/ProductRating.md`)  
**Lines:** ~130
