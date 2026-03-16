# ProductTitle Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ProductTitle.tsx`  
**Stylesheet:** `/src/styles/blocks/product/single-product-blocks.css` (lines 91-110)  
**Status:** Complete  
**Moved From:** `/guidelines/blocks/ProductTitle.md`

---

## Overview

**Purpose:** Displays the product name as a semantic h1 heading with optional brand badge, providing SEO-critical page title and product identity.

**WordPress Alignment:** Maps to `woocommerce/product-title`. Ensures proper semantic HTML structure with h1 for accessibility and SEO compliance.

---

## Props / API

```tsx
interface ProductTitleProps {
  title: string;   // Product name (rendered as h1)
  brand?: string;  // Optional brand name badge (displayed above title, uppercase)
}
```

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | — | Product name. SEO-critical h1. Never truncate. |
| `brand` | `string` | No | `undefined` | Brand badge above title. Displayed uppercase. |

---

## Usage

```tsx
import { ProductTitle } from '@/components/blocks/single-product/ProductTitle';

// With brand
<ProductTitle title="Wireless Bluetooth Headphones" brand="Sony" />

// Without brand
<ProductTitle title="Pixel Power Tee" />
```

**Important:** Only ONE h1 per page. ProductTitle should be the ONLY h1 on single product pages.

**Don't duplicate brand:** If product.name already contains brand name, omit brand prop.

---

## BEM Class Structure

```
.wc-product-title                  // Container
  span.wc-product-title__brand     // Brand badge (uppercase, muted)
  h1.typography-h1                 // Product name (via Typography component)
```

### CSS Token Usage

| Property | Token | Notes |
|----------|-------|-------|
| Container margin | `--wp--preset--spacing--40` | 16px bottom |
| Brand font size | `--wp--preset--font-size--100` | 12px small text |
| Brand color | `--wp--preset--color--muted-foreground` | Muted gray |
| Brand letter-spacing | `--wp--preset--letter-spacing--wide` | 0.05em |
| Brand margin | `--wp--preset--spacing--20` | 8px below brand |
| Title font | Typography h1 | `clamp(1.75rem, 2vw + 1rem, 3rem)` (28px-48px) |

---

## Dark Mode

**Status: Complete**

- Brand badge: Uses `--wp--preset--color--muted-foreground` (auto-adapts)
- Title: Uses Typography h1 which switches via `--wp--preset--color--foreground`
- Light brand: **4.6:1** (AA Large) | Dark brand: **8.2:1** (AAA)
- Light title: **16.5:1** (AAA) | Dark title: **18.3:1** (AAA)

---

## Accessibility

- h1 provides proper heading hierarchy (SEO + screen readers)
- Brand badge is `<span>` (decorative, not heading)
- Screen reader output: "heading level 1: Product Title"
- Not interactive (no focus required)
- No ARIA needed — semantic h1 provides full context

---

## Dependencies

```tsx
import { Typography } from '../../common/Typography';
```

Always use Typography component for h1 — never use raw `<h1>` tags with manual sizing.

---

## Responsive Design

No media queries needed. Typography h1 uses fluid `clamp()` function:
- Mobile: 28px (1.75rem)
- Desktop: 48px (3rem)
- Brand badge: Fixed 12px across all viewports

Long titles wrap naturally to multiple lines (never truncate).

---

## SEO

- **One h1 per page** — ProductTitle should be the ONLY h1
- Product name matches `<title>` tag, meta description, and structured data
- Brand enhances Schema.org Product.brand markup
- Early in DOM for crawler priority

---

## Related Components

**Used By:** `SingleProduct`, `QuickView`, `ProductComparison`  
**Uses:** `Typography` component  
**Siblings:** `ProductPrice`, `ProductRating`, `ProductSummary`, `ProductMeta`, `ProductGallery`

---

**Version:** 2.0 (condensed from 1.0)  
**Created:** 2026-03-15  
**Moved:** 2026-03-15 (from `/guidelines/blocks/ProductTitle.md`)  
**Lines:** ~115
