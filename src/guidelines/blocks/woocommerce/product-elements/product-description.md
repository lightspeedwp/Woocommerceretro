# Product Description

**WooCommerce Block:** `woocommerce/product-description`
**Category:** `woocommerce-product-elements`
**React Component:** `ProductTabs` (description tab)
**File Location:** `/src/app/components/blocks/single-product/ProductTabs.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-description`
- **Description:** Displays the description of the product.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Parent:** None
- **Supports:**
  - `align` (full, wide)
  - `background` (backgroundImage, backgroundSize)
  - `color` (background, gradients, heading, link, text)
  - `dimensions` (minHeight)
  - `interactivity` (clientNavigation)
  - `layout`
  - `spacing` (blockGap, margin, padding)
  - `typography` (fontSize, lineHeight)
  - `html`

---

## WordPress CSS Classes

```css
.wc-block-components-product-description { }
.wc-block-components-product-description__content { }
```

---

## React Component Mapping

The full product description renders inside the "Description" tab of `ProductTabs`:

```tsx
// Inside ProductTabs component
<div className="wc-block-components-product-description">
  <Typography variant="body">{product.description}</Typography>
</div>
```

---

## Difference from Product Summary

| Block | Content | Context |
|-------|---------|---------|
| `product-summary` | Short description (excerpt) | Archive cards, above fold on single product |
| `product-description` | Full description (long content) | Description tab on single product |
