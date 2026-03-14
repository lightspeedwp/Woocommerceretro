# BillingAddressForm

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-13

---

## Overview

The `BillingAddressForm` component captures the billing address during checkout. It shares the same form pattern as `ShippingAddressForm` but is used when the customer opts for a different billing address. It pre-populates from the user's saved billing address.

---

## Purpose

Use `BillingAddressForm` when the customer unchecks "Use same address for billing" on the shipping step. It handles:
- Pre-populated fields from saved billing address data
- Country-dependent state/province dropdown
- Field-level validation on blur
- Optional apartment/suite line (progressive disclosure)

**When to use:**
- Checkout page when billing differs from shipping
- Account billing address management
- Order billing address editing

---

## Structure

```
BillingAddressForm
├── Header
│   └── Description text ("Enter the billing address that matches your payment method.")
└── Form Grid
    ├── Country / Region (select dropdown)
    ├── Row: First name + Last name (text inputs)
    ├── Company (optional text input)
    ├── Address (text input)
    ├── Apartment toggle / input (progressive disclosure)
    ├── Row: City + State/Province (text + select/text)
    └── Row: Postal code + Phone (text inputs)
```

**File Location:** `/src/app/components/blocks/checkout/BillingAddressForm.tsx`  
**CSS Location:**
- `/src/styles/blocks/checkout/checkout.css` (base styles)
- `/src/styles/sections/cart-checkout-funky.css` (retro theme)

---

## Implementation

### Props

The `BillingAddressForm` takes no props. It manages its own internal state and pre-populates from mock billing address data.

### Dependencies

- `CheckoutInput` from `./ui/CheckoutInput` - floating label text inputs
- `countries`, `getStatesForCountry` from `@/data/checkout` - country/state data
- `mockUserProfile`, `mockAddresses` from `@/data/account` - pre-fill data (billing type)

### State Management

```tsx
const [data, setData] = useState(INITIAL_DATA);       // Form field values
const [errors, setErrors] = useState({});              // Validation error messages
const [touched, setTouched] = useState({});            // Tracks which fields were blurred
const [showApartment, setShowApartment] = useState(false); // Apartment field visibility
```

### Data Pre-Population

```tsx
// Looks for billing-type address first, falls back to 'both' type
const defaultAddress = mockAddresses.find((a) => a.type === 'billing' || a.type === 'both');
```

### Code Example

```tsx
import { BillingAddressForm } from '@/components/blocks/checkout/BillingAddressForm';

// Basic usage
<BillingAddressForm />

// Inside a CheckoutStep (conditional on billing toggle)
{!useSameBilling && (
  <CheckoutStep number={3} title="Billing Address">
    <BillingAddressForm />
  </CheckoutStep>
)}
```

---

## Styling

### WordPress BEM Classes

The `BillingAddressForm` uses the same `wp-checkout-form` BEM classes as `ShippingAddressForm`. Both share the checkout form pattern:

```css
.wp-checkout-form              /* Form container */
.wp-checkout-form__header      /* Header section */
.wp-checkout-form__description /* Description text */
.wp-checkout-form__grid        /* Fields grid layout */
.wp-checkout-form__row         /* Two-column field row */
.wp-checkout-form__field       /* Individual field wrapper */
.wp-checkout-form__field--select /* Select dropdown field */
.wp-checkout-form__label       /* Field label */
.wp-checkout-form__select-wrapper /* Select wrapper (for icon) */
.wp-checkout-form__select      /* Select element */
.wp-checkout-form__select-icon /* Chevron icon in select */
.wp-checkout-form__input       /* Text input */
.wp-checkout-form__link-button /* Apartment toggle link */
```

### Retro Theme Enhancements

Same retro classes as `ShippingAddressForm`:
- `funky-checkout-form` - glass panel container
- `funky-select` - dark select background
- `funky-input` - neon cyan focus ring
- `funky-link-btn` - neon link button

### Shared Form Pattern (BEM: `.wc-billing-form__*`)

The task spec defines `wc-billing-form__*` as the target BEM prefix. Currently the component uses shared `wp-checkout-form__*` classes. When billing-specific styling is needed:

```css
/* Billing-specific overrides */
.wc-billing-form { }
.wc-billing-form__header { }
.wc-billing-form__description {
  /* Could differ from shipping description styling */
}
```

---

## Differences from ShippingAddressForm

| Feature | ShippingAddressForm | BillingAddressForm |
|---------|--------------------|--------------------|
| Props | `useSameBilling`, `onToggleSameBilling` | None |
| Description | "Enter the address where you'd like to receive your order." | "Enter the billing address that matches your payment method." |
| Default address | `type === 'shipping'` or `'both'` | `type === 'billing'` or `'both'` |
| Billing checkbox | Yes (conditional) | No |
| Visibility | Always shown | Only when `useSameBilling === false` |

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- All inputs reachable via Tab
- Select dropdowns operable via Arrow keys
- Apartment toggle button focusable

**Labels:**
- All inputs have associated labels
- Floating labels via `CheckoutInput` component
- Select fields have explicit `<label>` tags

**Validation:**
- Error messages appear on blur
- Required fields: firstName, lastName, street, city, province, postcode
- Optional fields marked: "Company (optional)", "Phone (optional)"

**Color Contrast:**
- All text meets 4.5:1 contrast (AA)
- Neon focus rings are decorative enhancements

---

## Dark Mode

All styles support dark mode via CSS variables. No component changes needed.

Same dark mode behavior as `ShippingAddressForm`:
- Glass-morphism form container
- Neon cyan focus rings
- Dark input backgrounds with light text

---

## Responsive Behavior

**Mobile (< 640px):**
- Two-column rows stack to single column
- Full-width inputs
- 44px minimum touch targets

**Tablet+ (>= 640px):**
- Two-column rows for name, city/state, postal/phone

---

## Common Patterns

### Pattern 1: Conditional Billing Step

```tsx
const [useSameBilling, setUseSameBilling] = useState(true);

<CheckoutStep number={2} title="Shipping Address">
  <ShippingAddressForm
    useSameBilling={useSameBilling}
    onToggleSameBilling={setUseSameBilling}
  />
</CheckoutStep>

{!useSameBilling && (
  <CheckoutStep number={3} title="Billing Address">
    <BillingAddressForm />
  </CheckoutStep>
)}
```

### Pattern 2: Account Address Management

```tsx
<section className="wp-account-addresses">
  <h2>Billing Address</h2>
  <BillingAddressForm />
</section>
```

---

## Testing Checklist

- [ ] All fields render with pre-populated billing data
- [ ] Country dropdown changes reset state/province
- [ ] State dropdown shows for countries with states
- [ ] Text input shows for countries without predefined states
- [ ] Apartment toggle reveals input field
- [ ] Required field validation triggers on blur
- [ ] Error messages display and clear correctly
- [ ] Component only visible when `useSameBilling === false`
- [ ] Dark mode retro styling displays correctly
- [ ] Mobile responsive layout (single column)
- [ ] All inputs keyboard accessible
- [ ] Focus rings visible on all interactive elements

---

## Related Components

- **ShippingAddressForm** - `/guidelines/blocks/checkout/ShippingAddressForm.md`
- **CheckoutStep** - `/guidelines/blocks/checkout/CheckoutStep.md`
- **CheckoutInput** - `/src/app/components/blocks/checkout/ui/CheckoutInput.tsx`
- **PaymentMethods** - `/guidelines/blocks/checkout/PaymentMethods.md`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-13 | Initial guideline created |

---

**Status:** Complete  
**Next Review:** 2026-06-13  
**Maintainer:** Development Team
