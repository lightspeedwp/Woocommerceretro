# CheckoutFormSection Pattern

**Version:** 1.0
**Type:** Pattern (Checkout Form)
**WordPress Mapping:** WooCommerce Checkout Block
**File:** `/src/app/components/patterns/CheckoutFormSection.tsx`
**BEM:** `.wc-checkout-form__*`

---

## Overview

Multi-step or single-page checkout form with billing, shipping, payment, and order summary sections. Used in `PageCheckoutRetro`.

---

## Retro / funky spec

- Glass form container
- Neon focus ring on inputs
- Step indicator with gradient active state
- Glow submit/pay button
- Glass order summary sidebar

---

## Accessibility

- `aria-label="Checkout form"` on `<form>`
- Step indicator: `aria-current="step"` on active step
- Required fields: `aria-required="true"`
- Error messages: `role="alert"`, `aria-describedby`
- 44x44px touch targets

---

**Version:** 1.0 (March 2026)
