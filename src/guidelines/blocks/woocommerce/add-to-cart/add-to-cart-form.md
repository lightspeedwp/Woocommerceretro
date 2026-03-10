# Add to Cart Form

**WooCommerce Block:** `woocommerce/add-to-cart-form`
**Category:** `woocommerce-product-elements`
**React Component:** `AddToCartButton` + `QuantitySelector`
**File Location:** `/src/app/components/blocks/AddToCartButton.tsx`, `/src/app/components/blocks/QuantitySelector.tsx`

---

## Block Definition

- **Name:** `woocommerce/add-to-cart-form`
- **Description:** Display a button that lets customers add a product to their cart. Use the added options to optimize for different product types.
- **Category:** `woocommerce-product-elements`
- **Supports:** `interactivity`
- **Attributes:**
  - `quantitySelectorStyle` - Style of the quantity selector

---

## WordPress CSS Classes

```css
.wc-block-add-to-cart-form { }
.wc-block-add-to-cart-form__quantity { }
.wc-block-add-to-cart-form__button { }
```

---

## React Component Mapping

```tsx
// Combines quantity selector and add to cart button
<div className="wc-block-add-to-cart-form">
  <QuantitySelector value={quantity} onChange={setQuantity} />
  <AddToCartButton product={product} quantity={quantity} />
</div>
```

---

## Difference from product-button

| Block | Context | Behaviour |
|-------|---------|-----------|
| `product-button` | Archive/grid cards | Simple button, links to product for variable |
| `add-to-cart-form` | Single product page | Full form with quantity selector, variation options |
