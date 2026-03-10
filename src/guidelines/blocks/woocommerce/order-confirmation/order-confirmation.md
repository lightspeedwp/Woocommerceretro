# Order Confirmation

**WooCommerce Blocks:** `woocommerce/order-confirmation-*`
**Category:** `woocommerce`
**React Component:** `PageOrderConfirmation` template, `OrderStatus`, `OrderDetails`
**File Location:** `/src/app/templates/PageOrderConfirmation.tsx`

---

## Overview

Order confirmation blocks display the "Thank you" page after a successful purchase. They show order status, summary, totals, addresses, downloads, and optional account creation.

---

## Block Definitions

### Order Status
- **Name:** `woocommerce/order-confirmation-status`
- **Description:** Display a "thank you" message or order status.
- **Supports:** `align` (full, wide), `color` (background, gradients, text), `spacing`, `typography`
- **CSS:** `.wc-block-order-confirmation-status`
- **React:** `OrderStatus` component

### Order Summary
- **Name:** `woocommerce/order-confirmation-summary`
- **Description:** Display the order summary (order number, date, email, payment method).
- **Supports:** `align` (full, wide), `color`, `spacing`, `typography`
- **CSS:** `.wc-block-order-confirmation-summary`
- **React:** `OrderDetails` (summary section)

### Order Totals
- **Name:** `woocommerce/order-confirmation-totals`
- **Description:** Display the items purchased and order totals.
- **Supports:** `align` (full, wide), `color` (background, gradients, link, text), `spacing`, `typography`
- **CSS:** `.wc-block-order-confirmation-totals`
- **React:** `OrderDetails` (totals section)

### Order Totals Section (Wrapper)
- **Name:** `woocommerce/order-confirmation-totals-wrapper`
- **Description:** Display the order details section with heading.
- **Supports:** `align` (full, wide), `spacing`
- **Attributes:** `heading`

### Billing Address
- **Name:** `woocommerce/order-confirmation-billing-address`
- **Supports:** `align`, `color`, `spacing`, `typography`
- **CSS:** `.wc-block-order-confirmation-billing-address`

### Billing Address Section (Wrapper)
- **Name:** `woocommerce/order-confirmation-billing-wrapper`
- **Supports:** `align`, `spacing`
- **Attributes:** `heading`

### Shipping Address
- **Name:** `woocommerce/order-confirmation-shipping-address`
- **Supports:** `align`, `color`, `spacing`, `typography`
- **CSS:** `.wc-block-order-confirmation-shipping-address`

### Shipping Address Section (Wrapper)
- **Name:** `woocommerce/order-confirmation-shipping-wrapper`
- **Supports:** `align`, `spacing`
- **Attributes:** `heading`

### Order Downloads
- **Name:** `woocommerce/order-confirmation-downloads`
- **Description:** Display links to purchased downloads.
- **Supports:** `align`, `color` (background, gradients, link, text), `spacing`, `typography`
- **CSS:** `.wc-block-order-confirmation-downloads`

### Downloads Section (Wrapper)
- **Name:** `woocommerce/order-confirmation-downloads-wrapper`
- **Attributes:** `heading`

### Account Creation
- **Name:** `woocommerce/order-confirmation-create-account`
- **Description:** Allow customers to create an account after purchase.
- **Supports:** `align`, `color` (background, button, text), `spacing`
- **Attributes:** `customerEmail`, `hasDarkControls`, `nonceToken`

### Additional Information
- **Name:** `woocommerce/order-confirmation-additional-information`
- **Description:** Additional information from extensions.
- **Supports:** `align`, `spacing`

### Additional Fields
- **Name:** `woocommerce/order-confirmation-additional-fields`
- **Description:** Display additional field values from the order.
- **Supports:** `align`, `spacing`

### Additional Fields Wrapper
- **Name:** `woocommerce/order-confirmation-additional-fields-wrapper`
- **Attributes:** `heading`

---

## WordPress CSS Classes

```css
/* Status message */
.wc-block-order-confirmation-status { }
.wc-block-order-confirmation-status__message { }

/* Order summary */
.wc-block-order-confirmation-summary { }
.wc-block-order-confirmation-summary__row { }
.wc-block-order-confirmation-summary__label { }
.wc-block-order-confirmation-summary__value { }

/* Order totals */
.wc-block-order-confirmation-totals { }
.wc-block-order-confirmation-totals__items { }
.wc-block-order-confirmation-totals__total { }

/* Addresses */
.wc-block-order-confirmation-billing-address { }
.wc-block-order-confirmation-shipping-address { }

/* Downloads */
.wc-block-order-confirmation-downloads { }

/* Account creation */
.wc-block-order-confirmation-create-account { }
```

---

## React Component Mapping

```tsx
function PageOrderConfirmation() {
  return React.createElement('div', { className: 'wc-block-order-confirmation' },
    React.createElement(OrderStatus, { status: 'completed' }),
    React.createElement(OrderSummary, { order: orderData }),
    React.createElement(OrderTotals, { order: orderData }),
    React.createElement('div', { className: 'wc-block-order-confirmation__addresses' },
      React.createElement(BillingAddress, { address: orderData.billing }),
      React.createElement(ShippingAddress, { address: orderData.shipping })
    )
  );
}
```
