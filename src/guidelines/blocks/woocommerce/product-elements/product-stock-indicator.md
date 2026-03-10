# Product Stock Indicator

**WooCommerce Block:** `woocommerce/product-stock-indicator`
**Category:** `woocommerce-product-elements`
**React Component:** Stock badge in `SingleProduct` template
**File Location:** `/src/app/templates/SingleProduct.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-stock-indicator`
- **Description:** Let shoppers know when products are out of stock or on backorder. This block is hidden when products are in stock.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Parent:** None
- **Supports:**
  - `color` (background, text)
  - `interactivity`
  - `spacing` (margin, padding)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:**
  - `isDescendantOfAllProducts`

---

## WordPress CSS Classes

```css
.wc-block-components-product-stock-indicator { }
.wc-block-components-product-stock-indicator--in-stock { }
.wc-block-components-product-stock-indicator--low-stock { }
.wc-block-components-product-stock-indicator--out-of-stock { }
.wc-block-components-product-stock-indicator--on-backorder { }
```

---

## React Component Mapping

```tsx
function StockIndicator(props) {
  var product = props.product;
  if (product.stockStatus === 'instock' && !product.lowStock) {
    return null; // Hidden when in stock (default WooCommerce behavior)
  }

  var statusClass = 'wc-block-components-product-stock-indicator--' + product.stockStatus;

  return React.createElement('span', {
    className: 'wc-block-components-product-stock-indicator ' + statusClass
  }, product.stockLabel);
}
```

---

## Stock Status Values

| Status | CSS Modifier | Display Text | Color |
|--------|-------------|-------------|-------|
| `instock` | `--in-stock` | "In stock" | `--wp--preset--color--success` |
| `lowstock` | `--low-stock` | "Only X left" | `--wp--preset--color--warning` |
| `outofstock` | `--out-of-stock` | "Out of stock" | `--wp--preset--color--error` |
| `onbackorder` | `--on-backorder` | "Available on backorder" | `--wp--preset--color--warning` |
