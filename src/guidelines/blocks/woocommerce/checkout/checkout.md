# Checkout Block

**WooCommerce Block:** `woocommerce/checkout`
**Category:** `woocommerce`
**React Component:** `PageCheckout` template
**File Location:** `/src/app/templates/PageCheckout.tsx`

---

## Overview

The Checkout block is the most complex WooCommerce block, containing all steps needed to complete a purchase: contact info, shipping, billing, payment, and order summary.

---

## Block Hierarchy

```
woocommerce/checkout
|-- woocommerce/checkout-fields-block              # Left column (form fields)
|   |-- woocommerce/checkout-express-payment-block  # Express payment (Apple Pay, etc.)
|   |-- woocommerce/checkout-contact-information-block  # Email, phone
|   |-- woocommerce/checkout-shipping-method-block  # Shipping vs pickup toggle
|   |-- woocommerce/checkout-shipping-address-block # Shipping address form
|   |-- woocommerce/checkout-billing-address-block  # Billing address form
|   |-- woocommerce/checkout-shipping-methods-block # Shipping rate selection
|   |-- woocommerce/checkout-pickup-options-block   # Local pickup locations
|   |-- woocommerce/checkout-payment-block          # Payment method selection
|   |-- woocommerce/checkout-order-note-block       # Order notes textarea
|   |-- woocommerce/checkout-terms-block            # Terms & conditions checkbox
|   |-- woocommerce/checkout-additional-information-block  # Custom fields
|   |-- woocommerce/checkout-actions-block          # Place order button
|-- woocommerce/checkout-totals-block               # Right column (order summary)
    |-- woocommerce/checkout-order-summary-block
        |-- woocommerce/checkout-order-summary-cart-items-block
        |-- woocommerce/checkout-order-summary-coupon-form-block
        |-- woocommerce/checkout-order-summary-totals-block
            |-- woocommerce/checkout-order-summary-subtotal-block
            |-- woocommerce/checkout-order-summary-fee-block
            |-- woocommerce/checkout-order-summary-discount-block
            |-- woocommerce/checkout-order-summary-shipping-block
            |-- woocommerce/checkout-order-summary-taxes-block
```

---

## Root Block Definition

- **Name:** `woocommerce/checkout`
- **Description:** Display a checkout form so your customers can submit orders.
- **Supports:** `align` (wide), `html`, `multiple`
- **Attributes:**
  - `align` - Block alignment
  - `isPreview` - Editor preview mode
  - `showFormStepNumbers` - Show step numbers (1, 2, 3...)

---

## Child Block Definitions

### Checkout Fields (Left Column)
- **Name:** `woocommerce/checkout-fields-block`
- **Parent:** `woocommerce/checkout`

### Contact Information
- **Name:** `woocommerce/checkout-contact-information-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** `CheckoutStep` (contact section)
- **Fields:** Email, phone number, create account option

### Shipping Address
- **Name:** `woocommerce/checkout-shipping-address-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** `ShippingAddress` component
- **Fields:** Name, address line 1 & 2, city, state, postcode, country

### Billing Address
- **Name:** `woocommerce/checkout-billing-address-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** `BillingAddress` component
- **Fields:** Same as shipping + "same as shipping" checkbox

### Delivery Method
- **Name:** `woocommerce/checkout-shipping-method-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** Shipping/pickup toggle
- **Description:** Select between shipping or local pickup

### Shipping Options
- **Name:** `woocommerce/checkout-shipping-methods-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** `ShippingMethods` component
- **Description:** Display shipping rate options

### Pickup Method
- **Name:** `woocommerce/checkout-pickup-options-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** Not yet implemented
- **Description:** Shows local pickup locations

### Payment Options
- **Name:** `woocommerce/checkout-payment-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** `PaymentMethods` component
- **Description:** Payment method selection (credit card, PayPal, etc.)

### Express Checkout
- **Name:** `woocommerce/checkout-express-payment-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **Attributes:** `buttonBorderRadius`, `buttonHeight`, `showButtonStyles`

### Order Note
- **Name:** `woocommerce/checkout-order-note-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **React:** Order notes textarea

### Terms and Conditions
- **Name:** `woocommerce/checkout-terms-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **Attributes:** `checkbox`, `text`, `showSeparator`

### Additional Information
- **Name:** `woocommerce/checkout-additional-information-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **Description:** Custom fields from extensions

### Actions (Place Order)
- **Name:** `woocommerce/checkout-actions-block`
- **Parent:** `woocommerce/checkout-fields-block`
- **Attributes:** `cartPageId`, `showReturnToCart`, `priceSeparator`

### Checkout Totals (Right Column)
- **Name:** `woocommerce/checkout-totals-block`
- **Parent:** `woocommerce/checkout`
- **Attributes:** `checkbox`, `text`

### Order Summary Sub-blocks
Same structure as cart order summary (subtotal, fees, discount, shipping, taxes).

---

## WordPress CSS Classes

```css
/* Checkout wrapper */
.wp-block-woocommerce-checkout { }
.wc-block-checkout { }

/* Two-column layout */
.wc-block-checkout__form { }
.wc-block-checkout__sidebar { }

/* Step containers */
.wc-block-checkout__contact-fields { }
.wc-block-checkout__shipping-fields { }
.wc-block-checkout__billing-fields { }
.wc-block-checkout__payment-method { }

/* Step numbers */
.wc-block-checkout__form-step { }
.wc-block-checkout__form-step-number { }
.wc-block-checkout__form-step-heading { }
.wc-block-checkout__form-step-content { }

/* Actions */
.wc-block-checkout__actions { }
.wc-block-checkout__actions-place-order { }
.wc-block-checkout__actions-return-to-cart { }

/* Order summary */
.wc-block-checkout__order-summary { }

/* Terms */
.wc-block-checkout__terms { }
.wc-block-checkout__terms-checkbox { }
```

---

## React Component Mapping

```tsx
function PageCheckout() {
  return React.createElement('div', { className: 'wc-block-checkout' },
    // Left column: Form fields
    React.createElement('div', { className: 'wc-block-checkout__form' },
      React.createElement(CheckoutStep, { step: 1, title: 'Contact Information' }),
      React.createElement(CheckoutStep, { step: 2, title: 'Shipping Address' }),
      React.createElement(CheckoutStep, { step: 3, title: 'Shipping Method' }),
      React.createElement(CheckoutStep, { step: 4, title: 'Payment' }),
      React.createElement('div', { className: 'wc-block-checkout__actions' },
        React.createElement('button', {
          className: 'wc-block-checkout__actions-place-order'
        }, 'Place Order')
      )
    ),
    // Right column: Order summary
    React.createElement('div', { className: 'wc-block-checkout__sidebar' },
      React.createElement(CartTotals, { context: 'checkout' })
    )
  );
}
```

---

## Accessibility

- Form steps use proper `fieldset` and `legend` elements
- Required fields marked with `aria-required="true"`
- Validation errors linked via `aria-describedby`
- Payment method selection uses `role="radiogroup"`
- Order summary uses `aria-live="polite"` for dynamic updates
- Focus management between steps
