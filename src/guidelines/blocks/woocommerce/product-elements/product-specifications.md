# Product Specifications

**WooCommerce Block:** `woocommerce/product-specifications`
**Category:** `woocommerce-product-elements`
**React Component:** `ProductTabs` (additional information tab)
**File Location:** `/src/app/components/blocks/single-product/ProductTabs.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-specifications`
- **Description:** Display product weight, dimensions, and attributes.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Parent:** None
- **Supports:**
  - `align` (full, wide)
  - `spacing` (margin, padding)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:**
  - `showAttributes` - Whether to show product attributes
  - `showDimensions` - Whether to show dimensions
  - `showWeight` - Whether to show weight

---

## WordPress CSS Classes

```css
.wc-block-components-product-specifications { }
.wc-block-components-product-specifications__table { }
.wc-block-components-product-specifications__row { }
.wc-block-components-product-specifications__label { }
.wc-block-components-product-specifications__value { }
```

---

## React Component Mapping

```tsx
<table className="wc-block-components-product-specifications__table">
  <tbody>
    {product.weight && (
      <tr className="wc-block-components-product-specifications__row">
        <th className="wc-block-components-product-specifications__label">Weight</th>
        <td className="wc-block-components-product-specifications__value">{product.weight}</td>
      </tr>
    )}
    {product.dimensions && (
      <tr className="wc-block-components-product-specifications__row">
        <th className="wc-block-components-product-specifications__label">Dimensions</th>
        <td className="wc-block-components-product-specifications__value">{product.dimensions}</td>
      </tr>
    )}
    {product.attributes.map(function(attr) {
      return React.createElement('tr', {
        key: attr.name,
        className: 'wc-block-components-product-specifications__row'
      },
        React.createElement('th', { className: 'wc-block-components-product-specifications__label' }, attr.name),
        React.createElement('td', { className: 'wc-block-components-product-specifications__value' }, attr.values.join(', '))
      );
    })}
  </tbody>
</table>
```
