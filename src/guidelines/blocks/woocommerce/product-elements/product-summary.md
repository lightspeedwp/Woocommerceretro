# Product Summary

**WooCommerce Block:** `woocommerce/product-summary`
**Category:** `woocommerce-product-elements`
**React Component:** `ProductCard` (description), Single Product (short description)
**File Location:** `/src/app/components/blocks/ProductCard.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-summary`
- **Description:** Display a short description about a product.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/featured-product`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Parent:** None
- **Supports:**
  - `color` (background, link, text)
  - `interactivity` (clientNavigation)
  - `spacing` (margin, padding)
  - `typography` (fontSize, lineHeight, textAlign)
- **Attributes:**
  - `isDescendantOfAllProducts` - Inside all-products block
  - `isDescendentOfQueryLoop` - Inside query loop
  - `isDescendentOfSingleProductBlock` - Inside single product
  - `isDescendentOfSingleProductTemplate` - Inside single product template
  - `linkText` - Read more link text
  - `productId` - Product ID
  - `showDescriptionIfEmpty` - Show placeholder if no description
  - `showLink` - Show "read more" link
  - `summaryLength` - Character limit for summary

---

## WordPress CSS Classes

```css
.wc-block-components-product-summary { }
.wc-block-components-product-summary__content { }
.wc-block-components-product-summary__link { }
```

---

## React Component Mapping

```tsx
// In ProductCard (truncated)
<p className="wc-block-product-card__description">
  {truncate(product.shortDescription, 120)}
</p>

// In SingleProduct (full short description)
<div className="wc-block-components-product-summary">
  <Typography variant="body">{product.shortDescription}</Typography>
</div>
```

---

## Usage in Templates

### WordPress Block Theme
```html
<!-- wp:woocommerce/product-summary {"summaryLength":150,"showLink":true} /-->
```
