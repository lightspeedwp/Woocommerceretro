# Payment Method Icons

**WooCommerce Block:** `woocommerce/payment-method-icons`
**Category:** `woocommerce`
**React Component:** Payment icons display in cart/checkout

---

## Block Definition

- **Name:** `woocommerce/payment-method-icons`
- **Description:** Display icons for available payment methods.
- **Supports:** `spacing` (margin, padding)
- **Attributes:** `numberOfIcons` - Maximum number of icons to display

---

## WordPress CSS Classes

```css
.wc-block-payment-method-icons { }
.wc-block-payment-method-icons__icon { }
```

---

## React Component Mapping

```tsx
<div className="wc-block-payment-method-icons">
  <img src="/icons/visa.svg" alt="Visa" className="wc-block-payment-method-icons__icon" />
  <img src="/icons/mastercard.svg" alt="Mastercard" className="wc-block-payment-method-icons__icon" />
  <img src="/icons/amex.svg" alt="American Express" className="wc-block-payment-method-icons__icon" />
  <img src="/icons/paypal.svg" alt="PayPal" className="wc-block-payment-method-icons__icon" />
</div>
```
