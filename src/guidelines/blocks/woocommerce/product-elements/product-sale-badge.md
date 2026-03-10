# On-Sale Badge

**WooCommerce Block:** `woocommerce/product-sale-badge`
**Category:** `woocommerce-product-elements`
**React Component:** `ProductCard` (badge overlay)
**File Location:** `/src/app/components/blocks/ProductCard.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-sale-badge`
- **Description:** Displays an on-sale badge if the product is on-sale.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`, `woocommerce/product-gallery`
- **Parent:** None
- **Supports:**
  - `align`
  - `color` (background, gradients, text, link)
  - `email`
  - `interactivity` (clientNavigation)
  - `spacing` (margin)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:**
  - `isDescendentOfQueryLoop`
  - `isDescendentOfSingleProductBlock`
  - `isDescendentOfSingleProductTemplate`
  - `productId`

---

## WordPress CSS Classes

```css
.wc-block-components-product-sale-badge { }
.wc-block-components-product-sale-badge--align-left { }
.wc-block-components-product-sale-badge--align-center { }
.wc-block-components-product-sale-badge--align-right { }
```

---

## React Component Mapping

```tsx
{product.onSale && (
  <span className="wc-block-product-card__sale-badge">Sale</span>
)}
```

---

## Dark Mode

```css
.wc-block-components-product-sale-badge {
  background-color: var(--wp--preset--color--error);
  color: var(--wp--preset--color--background);
}
```
