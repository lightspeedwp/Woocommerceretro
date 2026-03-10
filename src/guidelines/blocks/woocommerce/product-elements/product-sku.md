# Product SKU

**WooCommerce Block:** `woocommerce/product-sku`
**Category:** `woocommerce-product-elements`
**React Component:** Product meta section in `SingleProduct` template
**File Location:** `/src/app/templates/SingleProduct.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-sku`
- **Description:** Displays the SKU of a product.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/product-meta`, `woocommerce/all-products`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Parent:** None
- **Supports:**
  - `color` (background, text)
  - `interactivity` (clientNavigation)
  - `spacing` (margin, padding)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:**
  - `isDescendantOfAllProducts`
  - `prefix` - Text before SKU value
  - `productId`
  - `showProductSelector`
  - `suffix` - Text after SKU value

---

## WordPress CSS Classes

```css
.wc-block-components-product-sku { }
.wc-block-components-product-sku__prefix { }
.wc-block-components-product-sku__value { }
.wc-block-components-product-sku__suffix { }
```

---

## React Component Mapping

```tsx
<span className="wc-block-components-product-sku">
  <span className="wc-block-components-product-sku__prefix">SKU: </span>
  <span className="wc-block-components-product-sku__value">{product.sku}</span>
</span>
```
