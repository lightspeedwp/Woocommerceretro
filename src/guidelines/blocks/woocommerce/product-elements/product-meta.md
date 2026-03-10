# Product Meta

**WooCommerce Block:** `woocommerce/product-meta`
**Category:** `woocommerce-product-elements`
**React Component:** Product meta section in `SingleProduct` template
**File Location:** `/src/app/templates/SingleProduct.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-meta`
- **Description:** Display a product's SKU, categories, tags, and more.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** None
- **Parent:** None
- **Supports:**
  - `align`
  - `interactivity` (clientNavigation)
  - `reusable`

---

## WordPress CSS Classes

```css
.wc-block-components-product-meta { }
.wc-block-components-product-meta__sku { }
.wc-block-components-product-meta__categories { }
.wc-block-components-product-meta__tags { }
```

---

## Child Blocks

This is a **container block** that holds:
- `woocommerce/product-sku` - SKU display
- WordPress core blocks for categories and tags

---

## React Component Mapping

```tsx
<div className="wc-block-components-product-meta">
  <div className="wc-block-components-product-meta__row">
    <span className="wc-block-components-product-meta__label">SKU:</span>
    <span className="wc-block-components-product-meta__value">{product.sku}</span>
  </div>
  <div className="wc-block-components-product-meta__row">
    <span className="wc-block-components-product-meta__label">Categories:</span>
    <span className="wc-block-components-product-meta__value">
      {product.categories.map(function(cat) {
        return React.createElement(Link, { to: '/shop/category/' + cat.slug, key: cat.id }, cat.name);
      })}
    </span>
  </div>
  <div className="wc-block-components-product-meta__row">
    <span className="wc-block-components-product-meta__label">Tags:</span>
    <span className="wc-block-components-product-meta__value">
      {product.tags.join(', ')}
    </span>
  </div>
</div>
```
