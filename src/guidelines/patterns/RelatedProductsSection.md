# RelatedProductsSection Pattern

**Version:** 1.0
**Type:** Pattern (Product Cross-sell)
**WordPress Mapping:** Related Products Block
**File:** `/src/app/components/patterns/RelatedProductsSection.tsx`
**CSS:** included in single-product section CSS
**BEM:** `.wc-related-products__*`

---

## Overview

Displays a grid of related products on single product pages. Typically shows 4 products based on shared categories or tags. Supports "You may also like" and "Related products" heading variants.

---

## Component structure

```
RelatedProductsSection (Pattern)
├── Gradient divider (above section)
├── Section heading
├── Product grid (4 columns desktop)
│   └── ProductCard x 4
└── Optional "View all" link
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-related-products` | Section wrapper |
| Heading | `.wc-related-products__heading` | Section title |
| Grid | `.wc-related-products__grid` | Product grid |
| Link | `.wc-related-products__view-all` | View all link |

---

## Retro / funky spec

- Gradient section heading text
- Glow product cards (delegates to ProductCard retro styles)
- Subtle gradient divider above section
- Alternating section background (inherits from page context)

---

## Responsive behaviour

| Breakpoint | Columns |
|------------|---------|
| Mobile | 2 |
| Tablet | 3 |
| Desktop | 4 |

---

## Accessibility

- `<section aria-label="Related products">` wrapper
- Heading uses `<Heading level={2}>` component
- Product cards maintain individual keyboard focus

---

## Data source

- `getRelatedProducts()` from `/src/app/data/products.ts`

---

## Used in

- `SingleProductRetro`
- `SingleProductSticky`

---

**Version:** 1.0 (March 2026)
