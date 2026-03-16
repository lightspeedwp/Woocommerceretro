# ProductSummary Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ProductSummary.tsx`  
**Stylesheet:** `/src/styles/blocks/product/single-product-blocks.css` (lines 76-89)  
**Status:** Complete  
**Moved From:** `/guidelines/blocks/ProductSummary.md`

---

## Overview

**Purpose:** Displays the product's short description (summary text) below the product title and price. Provides key selling points in a scannable format. This is distinct from the full product description shown in ProductTabs.

**WordPress Alignment:** Maps to `woocommerce/product-summary`. Short description field.

---

## Props / API

```tsx
interface ProductSummaryProps {
  summary: string;  // Product short description (plain text or basic HTML)
}
```

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `summary` | `string` | Yes | — | Short description. Render conditionally (skip if empty). |

---

## Usage

```tsx
import { ProductSummary } from '@/components/blocks/single-product/ProductSummary';

<ProductSummary 
  summary="Premium wireless headphones with active noise cancellation and 30-hour battery life." 
/>
```

**Empty Handling:** Always check before rendering:
```tsx
{product.shortDescription && <ProductSummary summary={product.shortDescription} />}
```

---

## BEM Class Structure

```
.wc-product-summary               // Container
  p.typography-body                // Paragraph text (via Typography component)
```

### CSS Token Usage

| Property | Token | Notes |
|----------|-------|-------|
| Bottom margin | `--wp--preset--spacing--60` | 24px |
| Font size | `--wp--preset--font-size--200` | 16px body text |
| Text color | `--wp--preset--color--muted-foreground` | Muted gray |
| Line height | `--wp--preset--line-height--relaxed` | 1.6 for readability |

---

## Dark Mode

**Status: Complete**

Uses `--wp--preset--color--muted-foreground` which automatically adapts:
- Light: `#6b7280` (medium gray) — **4.8:1** (AA)
- Dark: `#9ca3af` (lighter gray) — **7.1:1** (AA)

No additional CSS rules needed — Typography component handles switching.

---

## Accessibility

- Uses `<p>` tag (semantic paragraph)
- Typography component provides consistent styling
- Not interactive (no focus required)
- Text is selectable and screen-reader friendly
- No ARIA needed (semantic `<p>` provides full context)

---

## Dependencies

```tsx
import { Typography } from '../../common/Typography';
```

Always use Typography component — never render raw `<p>` tags for product descriptions.

---

## Content Guidelines

- **Ideal length:** 150-250 characters (2-3 sentences)
- **Structure:** [Key Benefit]. [Feature]. [Use Case].
- **Don't repeat:** Product title should NOT appear in summary
- **Don't duplicate:** Full specs belong in ProductTabs, not summary

---

## Responsive Design

No media queries needed. Text wraps naturally. Optimal line length (~65ch / 800px) controlled by parent container. Consistent 16px font and 1.6 line-height across all viewports.

---

## Related Components

**Used By:** `SingleProduct`, `QuickView`, `ProductComparison`  
**Uses:** `Typography` component  
**Siblings:** `ProductTitle`, `ProductPrice`, `ProductRating`, `ProductMeta`, `ProductAddToCart`

---

**Version:** 2.0 (condensed from 1.0)  
**Created:** 2026-03-15  
**Moved:** 2026-03-15 (from `/guidelines/blocks/ProductSummary.md`)  
**Lines:** ~100
