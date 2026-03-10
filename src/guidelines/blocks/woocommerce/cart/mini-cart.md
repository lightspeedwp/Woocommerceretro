# Mini-Cart Block

**WooCommerce Block:** `woocommerce/mini-cart`
**Category:** `woocommerce`
**React Component:** `MiniCart`
**File Location:** `/src/app/components/parts/MiniCart.tsx`

---

## Overview

The Mini-Cart block displays a cart icon/button in the header that opens a slide-out drawer showing cart contents. It provides quick cart management without leaving the current page.

---

## Block Hierarchy

```
woocommerce/mini-cart                          # Trigger button (icon + count)
|-- woocommerce/mini-cart-contents             # Drawer container
    |-- woocommerce/filled-mini-cart-contents-block
    |   |-- woocommerce/mini-cart-title-block
    |   |   |-- woocommerce/mini-cart-title-label-block      # "Your cart" text
    |   |   |-- woocommerce/mini-cart-title-items-counter-block  # "(3 items)"
    |   |-- woocommerce/mini-cart-items-block
    |   |   |-- woocommerce/mini-cart-products-table-block    # Product rows
    |   |-- woocommerce/mini-cart-footer-block
    |       |-- woocommerce/mini-cart-cart-button-block       # "View Cart"
    |       |-- woocommerce/mini-cart-checkout-button-block   # "Checkout"
    |-- woocommerce/empty-mini-cart-contents-block
        |-- woocommerce/mini-cart-shopping-button-block       # "Start Shopping"
```

---

## Trigger Button Definition

- **Name:** `woocommerce/mini-cart`
- **Supports:** `spacing` (margin, padding), `typography` (fontSize), `html`, `multiple`
- **Attributes:**
  - `addToCartBehaviour` - Behaviour after adding to cart (`open_drawer`)
  - `cartAndCheckoutRenderStyle` - Render style
  - `hasHiddenPrice` - Hide price in trigger
  - `iconColor` / `iconColorValue` - Cart icon color
  - `miniCartIcon` - Icon style
  - `onCartClickBehaviour` - Behaviour on cart icon click
  - `priceColor` / `priceColorValue` - Price text color
  - `productCountColor` / `productCountColorValue` - Badge color
  - `productCountVisibility` - When to show count badge

---

## Child Block Definitions

### Mini-Cart Contents
- **Name:** `woocommerce/mini-cart-contents`
- **Supports:** `color` (background, link, text), `align`
- **Attributes:** `width`

### Title Block
- **Name:** `woocommerce/mini-cart-title-block`
- **Parent:** `woocommerce/filled-mini-cart-contents-block`
- **Supports:** `color` (text, background), `typography` (fontSize)

### Title Label
- **Name:** `woocommerce/mini-cart-title-label-block`
- **Parent:** `woocommerce/mini-cart-title-block`
- **Attributes:** `label` (default: "Your cart")

### Title Items Counter
- **Name:** `woocommerce/mini-cart-title-items-counter-block`
- **Parent:** `woocommerce/mini-cart-title-block`
- **Supports:** `color` (background, text), `spacing` (padding), `typography` (fontSize)

### Items Block
- **Name:** `woocommerce/mini-cart-items-block`
- **Parent:** `woocommerce/filled-mini-cart-contents-block`
- **Supports:** `interactivity` (clientNavigation)

### Products Table
- **Name:** `woocommerce/mini-cart-products-table-block`
- **Parent:** `woocommerce/mini-cart-items-block`

### Footer Block
- **Name:** `woocommerce/mini-cart-footer-block`
- **Parent:** `woocommerce/filled-mini-cart-contents-block`

### Cart Button
- **Name:** `woocommerce/mini-cart-cart-button-block`
- **Parent:** `woocommerce/mini-cart-footer-block`
- **Supports:** `color` (background, text)
- **Attributes:** `cartButtonLabel`

### Checkout Button
- **Name:** `woocommerce/mini-cart-checkout-button-block`
- **Parent:** `woocommerce/mini-cart-footer-block`
- **Supports:** `color` (background, text)
- **Attributes:** `checkoutButtonLabel`

### Shopping Button (Empty State)
- **Name:** `woocommerce/mini-cart-shopping-button-block`
- **Parent:** `woocommerce/empty-mini-cart-contents-block`
- **Supports:** `color` (background, text)
- **Attributes:** `startShoppingButtonLabel`

---

## WordPress CSS Classes

```css
/* Trigger button */
.wc-block-mini-cart { }
.wc-block-mini-cart__button { }
.wc-block-mini-cart__badge { }
.wc-block-mini-cart__amount { }
.wc-block-mini-cart__icon { }

/* Drawer */
.wc-block-mini-cart__drawer { }
.wc-block-mini-cart__drawer--open { }

/* Contents */
.wc-block-mini-cart__contents { }
.wc-block-mini-cart__contents--filled { }
.wc-block-mini-cart__contents--empty { }

/* Title */
.wc-block-mini-cart__title { }
.wc-block-mini-cart__title-label { }
.wc-block-mini-cart__title-counter { }

/* Items */
.wc-block-mini-cart__items { }
.wc-block-mini-cart__products-table { }

/* Footer */
.wc-block-mini-cart__footer { }
.wc-block-mini-cart__footer-subtotal { }
.wc-block-mini-cart__footer-actions { }

/* Buttons */
.wc-block-mini-cart__cart-button { }
.wc-block-mini-cart__checkout-button { }
.wc-block-mini-cart__shopping-button { }
```

---

## React Component Mapping

```tsx
function MiniCart(props) {
  var isOpen = props.isOpen;
  var cart = useCart();

  return React.createElement('div', {
    className: 'wc-block-mini-cart__drawer' + (isOpen ? ' wc-block-mini-cart__drawer--open' : ''),
    role: 'dialog',
    'aria-label': 'Shopping cart'
  },
    // Header with title and close button
    React.createElement('div', { className: 'wc-block-mini-cart__title' },
      React.createElement('span', { className: 'wc-block-mini-cart__title-label' }, 'Your cart'),
      React.createElement('span', { className: 'wc-block-mini-cart__title-counter' },
        '(' + cart.itemCount + ' items)'
      )
    ),
    // Items list or empty state
    cart.items.length > 0
      ? React.createElement('div', { className: 'wc-block-mini-cart__items' }, /* items */)
      : React.createElement('div', { className: 'wc-block-mini-cart__contents--empty' }, /* empty */),
    // Footer with buttons
    React.createElement('div', { className: 'wc-block-mini-cart__footer' },
      React.createElement(Link, { to: '/cart', className: 'wc-block-mini-cart__cart-button' }, 'View Cart'),
      React.createElement(Link, { to: '/checkout', className: 'wc-block-mini-cart__checkout-button' }, 'Checkout')
    )
  );
}
```

---

## Accessibility

- Drawer uses `role="dialog"` with `aria-label`
- Focus trapped inside drawer when open
- Escape key closes drawer
- Focus returns to trigger button on close
- Cart count announced via `aria-live="polite"`
