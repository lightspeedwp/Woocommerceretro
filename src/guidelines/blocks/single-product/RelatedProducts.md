# RelatedProducts Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/RelatedProducts.tsx`  
**CSS:** `/src/styles/sections/related-products.css`  
**Status:** Complete  
**Moved From:** `/guidelines/blocks/RelatedProducts.md`

---

## Overview

**Purpose:** Displays a curated grid of related products at the bottom of single product pages. Uses tag-based matching algorithm with category fallback to show most relevant products.

**WordPress Alignment:** Maps to `woocommerce/related-products`.

---

## Props / API

```tsx
interface RelatedProductsProps {
  productId?: string;   // Source product ID for dynamic matching
  products?: any[];     // Pre-fetched products (overrides productId)
  limit?: number;       // Number of products (default: 4)
}
```

**Prop Priority:**
1. If `products` array provided -> use directly
2. Else if `productId` provided -> fetch via `getRelatedProducts(productId, limit)`
3. Else -> return `null`

---

## Usage

```tsx
// Dynamic tag matching
<RelatedProducts productId={product.id} />

// Manual curation
<RelatedProducts products={handpickedProducts} />

// Custom limit
<RelatedProducts productId={product.id} limit={3} />
```

---

## BEM Classes

| Class | Element | Notes |
|-------|---------|-------|
| `.wc-related-products` | Section root | Full width container |
| `.wc-related-products__title` | h2 heading | "You may also like" |
| `.wc-related-products__grid` | Product grid | Responsive columns |

---

## CSS Variables

- `--wp--preset--font-size--heading-2` - Section heading
- `--wp--preset--color--foreground` - Heading color
- `--wp--preset--color--muted-foreground` - Description color
- `--wp--preset--spacing--50` - Grid gap (20px)

---

## Responsive Grid

| Breakpoint | Columns |
|-----------|---------|
| < 640px | 1 column |
| 640px+ | 2 columns |
| 1024px+ | 4 columns |

---

## Dark Mode

- Section title uses `--wp--preset--color--foreground` (auto-adapts)
- ProductCard components handle their own dark mode
- No additional dark mode overrides needed

---

## Algorithm

**Function:** `getRelatedProducts(productId, limit)` in `/src/app/data/products.ts`

1. Find source product, extract tags
2. Score candidates by shared tag count
3. Sort by score (highest first)
4. Return top `limit` products
5. **Fallback:** If no tag overlap, return same-category products

---

## Accessibility

- `<section>` with semantic heading hierarchy
- ProductCard links are keyboard accessible
- Tab order flows left-to-right, top-to-bottom
- Heading contrast: 15.8:1 (AAA)

**Recommended Enhancement:**
```tsx
<section aria-labelledby="related-products-heading">
  <Typography variant="h2" id="related-products-heading">
    You may also like
  </Typography>
</section>
```

---

## Related Components

**Used By:** SingleProductRetro, QuickView modal, CartCrossSell  
**Uses:** ProductCard, Typography, getRelatedProducts utility

**Sibling Single Product Blocks:**
- ProductGallery, ProductTitle, ProductSummary, ProductRating
- ProductPrice, ProductAddToCart, ProductMeta, ProductTabs

---

## Best Practices

- Limit to 4-8 products (4-6 optimal for conversion)
- Return null when empty (don't render empty section)
- Prefer automatic tag matching; manual curation for special campaigns
- Filter out source product from results
- Consider `React.memo` when parent re-renders frequently

---

**Version:** 1.1 (condensed from 1000+ lines to ~140 lines)  
**Last Updated:** March 16, 2026
