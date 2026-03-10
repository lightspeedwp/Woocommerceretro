# Cart Block

**WooCommerce Block:** `woocommerce/cart`
**Category:** `woocommerce`
**React Component:** `PageCart` template
**File Location:** `/src/app/templates/PageCart.tsx`

---

## Overview

The Cart block is a complex composite block that manages the entire cart experience. It contains two main states: filled cart (with items) and empty cart (no items).

---

## Block Hierarchy

```
woocommerce/cart
|-- woocommerce/filled-cart-block
|   |-- woocommerce/cart-items-block
|   |   |-- woocommerce/cart-line-items-block
|   |   |-- woocommerce/cart-cross-sells-block
|   |       |-- woocommerce/cart-cross-sells-products-block
|   |-- woocommerce/cart-totals-block
|       |-- woocommerce/cart-order-summary-block
|       |   |-- woocommerce/cart-order-summary-heading-block
|       |   |-- woocommerce/cart-order-summary-coupon-form-block
|       |   |-- woocommerce/cart-order-summary-totals-block
|       |       |-- woocommerce/cart-order-summary-subtotal-block
|       |       |-- woocommerce/cart-order-summary-fee-block
|       |       |-- woocommerce/cart-order-summary-discount-block
|       |       |-- woocommerce/cart-order-summary-shipping-block
|       |       |-- woocommerce/cart-order-summary-taxes-block
|       |-- woocommerce/cart-express-payment-block
|       |-- woocommerce/proceed-to-checkout-block
|       |-- woocommerce/cart-accepted-payment-methods-block
|-- woocommerce/empty-cart-block
```

---

## Child Block Definitions

### Cart (Root)
- **Name:** `woocommerce/cart`
- **Supports:** `align` (wide), `html`, `multiple`
- **Attributes:** `align`, `isPreview`, `hasDarkControls`

### Filled Cart
- **Name:** `woocommerce/filled-cart-block`
- **Parent:** `woocommerce/cart`
- **React:** `CartFilled` pattern

### Empty Cart
- **Name:** `woocommerce/empty-cart-block`
- **Parent:** `woocommerce/cart`
- **React:** `CartEmpty` pattern

### Cart Items
- **Name:** `woocommerce/cart-items-block`
- **Parent:** `woocommerce/filled-cart-block`
- **React:** `CartTable` component

### Cart Line Items
- **Name:** `woocommerce/cart-line-items-block`
- **Parent:** `woocommerce/cart-items-block`
- **React:** `CartItem` component (rendered per line)

### Cart Cross-Sells
- **Name:** `woocommerce/cart-cross-sells-block`
- **Parent:** `woocommerce/cart-items-block`
- **React:** Not yet implemented
- **Attributes:** None

### Cart Totals
- **Name:** `woocommerce/cart-totals-block`
- **Parent:** `woocommerce/filled-cart-block`
- **React:** `CartTotals` component
- **Attributes:** `checkbox`, `text`

### Order Summary
- **Name:** `woocommerce/cart-order-summary-block`
- **Parent:** `woocommerce/cart-totals-block`
- **React:** `CartTotals` (summary section)

### Order Summary Sub-blocks

| Block | Name | Parent | React |
|-------|------|--------|-------|
| Heading | `cart-order-summary-heading-block` | `cart-order-summary-block` | Summary title |
| Coupon Form | `cart-order-summary-coupon-form-block` | `cart-order-summary-block` | Coupon input |
| Totals | `cart-order-summary-totals-block` | `cart-order-summary-block` | Totals wrapper |
| Subtotal | `cart-order-summary-subtotal-block` | `cart-order-summary-totals-block` | Subtotal row |
| Fees | `cart-order-summary-fee-block` | `cart-order-summary-totals-block` | Fee row |
| Discount | `cart-order-summary-discount-block` | `cart-order-summary-totals-block` | Discount row |
| Shipping | `cart-order-summary-shipping-block` | `cart-order-summary-totals-block` | Shipping row |
| Taxes | `cart-order-summary-taxes-block` | `cart-order-summary-totals-block` | Tax row |

### Express Checkout
- **Name:** `woocommerce/cart-express-payment-block`
- **Parent:** `woocommerce/cart-totals-block`
- **React:** Not yet implemented
- **Attributes:** `buttonBorderRadius`, `buttonHeight`, `showButtonStyles`

### Proceed to Checkout
- **Name:** `woocommerce/proceed-to-checkout-block`
- **Parent:** `woocommerce/cart-totals-block`
- **React:** Checkout button in `CartTotals`

### Accepted Payment Methods
- **Name:** `woocommerce/cart-accepted-payment-methods-block`
- **Parent:** `woocommerce/cart-totals-block`
- **React:** Payment icons display

---

## WordPress CSS Classes

```css
/* Cart wrapper */
.wp-block-woocommerce-cart { }
.wc-block-cart { }

/* Filled cart */
.wc-block-cart__filled { }

/* Empty cart */
.wc-block-cart__empty { }

/* Cart items column */
.wc-block-cart__items { }

/* Cart totals column */
.wc-block-cart__totals { }

/* Line items */
.wc-block-cart-items { }
.wc-block-cart-items__row { }
.wc-block-cart-items__row-image { }
.wc-block-cart-items__row-product { }
.wc-block-cart-items__row-quantity { }
.wc-block-cart-items__row-total { }

/* Order summary */
.wc-block-components-order-summary { }
.wc-block-components-order-summary__content { }

/* Totals */
.wc-block-components-totals-wrapper { }
.wc-block-components-totals-item { }
.wc-block-components-totals-item__label { }
.wc-block-components-totals-item__value { }

/* Checkout button */
.wc-block-cart__submit-button { }

/* Coupon */
.wc-block-components-totals-coupon { }
```

---

## React Component Mapping

```tsx
// PageCart template structure
function PageCart() {
  var cart = useCart();

  if (cart.items.length === 0) {
    return React.createElement(CartEmpty);
  }

  return React.createElement('div', { className: 'wc-block-cart' },
    // Left column: Cart items
    React.createElement('div', { className: 'wc-block-cart__items' },
      React.createElement(CartTable, { items: cart.items })
    ),
    // Right column: Totals
    React.createElement('div', { className: 'wc-block-cart__totals' },
      React.createElement(CartTotals, { cart: cart })
    )
  );
}
```

---

## Layout

Two-column layout on desktop, stacked on mobile:

```css
.wc-block-cart {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--60);
}

@media (min-width: 768px) {
  .wc-block-cart {
    grid-template-columns: 2fr 1fr;
  }
}
```

---

## Accessibility

- Cart items use `role="table"` with proper headers
- Quantity changes announced via `aria-live="polite"`
- Remove button has `aria-label="Remove [Product Name] from cart"`
- Totals section uses `aria-live="polite"` for dynamic updates
