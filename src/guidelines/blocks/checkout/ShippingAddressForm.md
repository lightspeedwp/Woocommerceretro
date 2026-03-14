# ShippingAddressForm

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-13

---

## Overview

The `ShippingAddressForm` component captures the shipping address during checkout. It provides a complete address form with country/state dropdowns, field validation, optional apartment line toggle, and a "use same for billing" checkbox.

---

## Purpose

Use `ShippingAddressForm` to collect the delivery address in checkout flows. It handles:
- Pre-populated fields from user account data
- Country-dependent state/province dropdown
- Field-level validation on blur
- Optional apartment/suite line (progressive disclosure)
- "Use same address for billing" toggle

**When to use:**
- WooCommerce checkout page (shipping step)
- Account address management
- Order address editing

---

## Structure

```
ShippingAddressForm
├── Header
│   └── Description text
└── Form Grid
    ├── Country / Region (select dropdown)
    ├── Row: First name + Last name (text inputs)
    ├── Company (optional text input)
    ├── Address (text input)
    ├── Apartment toggle / input (progressive disclosure)
    ├── Row: City + State/Province (text + select/text)
    ├── Row: Postal code + Phone (text inputs)
    └── Footer (conditional)
        └── "Use same address for billing" checkbox
```

**File Location:** `/src/app/components/blocks/checkout/ShippingAddressForm.tsx`  
**CSS Location:**
- `/src/styles/blocks/checkout/checkout.css` (base styles)
- `/src/styles/sections/cart-checkout-funky.css` (retro theme)

---

## Implementation

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `useSameBilling` | `boolean` | No | `true` | Whether billing address matches shipping |
| `onToggleSameBilling` | `(checked: boolean) => void` | No | - | Callback when "same billing" checkbox toggled. If omitted, checkbox is hidden. |

### Dependencies

- `CheckoutInput` from `./ui/CheckoutInput` - floating label text inputs
- `Checkbox` from `./ui/Checkbox` - styled checkbox component
- `countries`, `getStatesForCountry` from `@/data/checkout` - country/state data
- `mockUserProfile`, `mockAddresses` from `@/data/account` - pre-fill data

### State Management

```tsx
const [data, setData] = useState(INITIAL_DATA);       // Form field values
const [errors, setErrors] = useState({});              // Validation error messages
const [touched, setTouched] = useState({});            // Tracks which fields were blurred
const [showApartment, setShowApartment] = useState(false); // Apartment field visibility
```

### Code Example

```tsx
import { ShippingAddressForm } from '@/components/blocks/checkout/ShippingAddressForm';

// Basic usage (no billing toggle)
<ShippingAddressForm />

// With billing toggle
<ShippingAddressForm
  useSameBilling={useSameBilling}
  onToggleSameBilling={(checked) => setUseSameBilling(checked)}
/>

// Inside a CheckoutStep
<CheckoutStep number={2} title="Shipping Address">
  <ShippingAddressForm
    useSameBilling={useSameBilling}
    onToggleSameBilling={setUseSameBilling}
  />
</CheckoutStep>
```

---

## Styling

### WordPress BEM Classes

```css
/* Form container */
.wp-checkout-form {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

/* Header with description */
.wp-checkout-form__header { }

.wp-checkout-form__description {
  color: var(--wp--preset--color--text-secondary);
  font-size: var(--wp--preset--font-size--normal);
}

/* Grid layout for fields */
.wp-checkout-form__grid {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

/* Two-column row (first/last name, city/state, etc.) */
.wp-checkout-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--wp--preset--spacing--40);
}

/* Individual field wrapper */
.wp-checkout-form__field { }

/* Select dropdown wrapper */
.wp-checkout-form__field--select { }

.wp-checkout-form__label {
  display: block;
  margin-bottom: var(--wp--preset--spacing--20);
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
}

.wp-checkout-form__select-wrapper {
  position: relative;
}

.wp-checkout-form__select {
  width: 100%;
  appearance: none;
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--40);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--md);
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--foreground);
}

.wp-checkout-form__select-icon {
  position: absolute;
  right: var(--wp--preset--spacing--30);
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--wp--preset--color--text-muted);
}

/* Apartment toggle link */
.wp-checkout-form__link-button {
  background: none;
  border: none;
  color: var(--wp--preset--color--primary);
  cursor: pointer;
  font-size: var(--wp--preset--font-size--small);
  padding: 0;
  text-decoration: underline;
}

/* Footer with checkbox */
.wp-checkout-form__footer {
  margin-top: var(--wp--preset--spacing--30);
}

.wp-checkout-form__checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
}

.wp-checkout-form__checkbox-label {
  font-size: var(--wp--preset--font-size--normal);
  color: var(--wp--preset--color--foreground);
  cursor: pointer;
}
```

### Retro Theme Enhancements

```css
/* Retro form container */
.funky-checkout-form {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: var(--wp--preset--border-radius--lg);
  padding: var(--wp--preset--spacing--50);
}

/* Neon cyan focus ring on inputs */
.funky-checkout-form .wp-checkout-form__input:focus,
.funky-checkout-form .wp-checkout-form__select:focus {
  border-color: var(--wp--preset--color--neon-cyan);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
  outline: none;
}

/* Retro select styling */
.funky-select {
  background: rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--wp--preset--color--foreground);
}

/* Link button neon accent */
.funky-link-btn {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.3);
}

.funky-link-btn:hover {
  text-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
}

/* Checkbox wrapper retro glow */
.funky-checkbox-wrapper input:checked {
  accent-color: var(--wp--preset--color--neon-cyan);
}
```

### CSS Variables Used

- `--wp--preset--spacing--20` (8px) - label margin, checkbox gap
- `--wp--preset--spacing--30` (12px) - input padding, footer margin
- `--wp--preset--spacing--40` (16px) - grid gap, row gap
- `--wp--preset--spacing--50` (24px) - form container padding
- `--wp--preset--color--border` - input/select border
- `--wp--preset--color--surface` - input background
- `--wp--preset--color--foreground` - input text
- `--wp--preset--color--text-secondary` - labels, description
- `--wp--preset--color--text-muted` - select icon
- `--wp--preset--color--primary` - link button color
- `--wp--preset--color--neon-cyan` - retro focus ring, link accent

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- All inputs reachable via Tab
- Select dropdowns keyboard-operable (Arrow keys)
- Checkbox toggleable via Space
- Apartment toggle button focusable

**Labels:**
- All inputs have associated `<label>` elements
- Floating labels via `CheckoutInput` component
- Select fields have explicit `<label>` tags

**Validation:**
- Error messages appear on blur (not on change)
- Errors associated with fields via `CheckoutInput` error prop
- Required fields validated: firstName, lastName, street, city, province, postcode
- Optional fields clearly marked: "Company (optional)", "Phone (optional)"

**Color Contrast:**
- Error text: 4.5:1 contrast minimum (AA)
- Label text: 4.5:1 contrast minimum (AA)
- Neon focus rings: decorative enhancement, not sole indicator

### Screen Reader Considerations

```tsx
<ShippingAddressForm
  aria-label="Shipping address form"
/>

{/* Error messages are announced via CheckoutInput aria-describedby */}
{/* Required fields indicated by validation, not visual-only asterisks */}
```

---

## Dark Mode

All styles support dark mode via CSS variables. No component changes needed.

**Key dark mode features:**
- Glass-morphism form container (retro theme)
- Neon cyan focus rings on inputs
- Neon cyan link button glow
- Dark input backgrounds with light text

---

## Responsive Behavior

**Mobile (< 640px):**
- Two-column rows stack to single column
- Full-width inputs
- Touch-friendly input sizing (44px minimum height)

**Tablet+ (>= 640px):**
- Two-column rows for name, city/state, postal/phone
- Standard input spacing

```css
@media (max-width: 639px) {
  .wp-checkout-form__row {
    grid-template-columns: 1fr;
  }
}
```

---

## Common Patterns

### Pattern 1: Checkout Flow with Billing Toggle

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

### Pattern 2: Standalone Form (Account Page)

```tsx
<ShippingAddressForm />
{/* No billing toggle - used independently */}
```

---

## Common Mistakes

### Mistake 1: Forgetting onToggleSameBilling

```tsx
// WRONG - checkbox never appears
<ShippingAddressForm useSameBilling={true} />
```

**Correct:**
```tsx
<ShippingAddressForm
  useSameBilling={useSameBilling}
  onToggleSameBilling={setUseSameBilling}
/>
```

### Mistake 2: Not handling country change

The component automatically resets the province/state field when country changes. Do not override this behavior externally.

---

## Testing Checklist

- [ ] All fields render with pre-populated data
- [ ] Country dropdown changes reset state/province
- [ ] State dropdown shows for countries with states (US, CA)
- [ ] Text input shows for countries without predefined states
- [ ] Apartment toggle reveals input field
- [ ] Required field validation triggers on blur
- [ ] Error messages display and clear correctly
- [ ] "Use same for billing" checkbox toggles correctly
- [ ] Checkbox hidden when `onToggleSameBilling` not provided
- [ ] Dark mode retro styling displays correctly
- [ ] Mobile responsive layout (single column)
- [ ] All inputs keyboard accessible
- [ ] Focus rings visible on all interactive elements

---

## Related Components

- **BillingAddressForm** - `/guidelines/blocks/checkout/BillingAddressForm.md`
- **CheckoutStep** - `/guidelines/blocks/checkout/CheckoutStep.md`
- **CheckoutInput** - `/src/app/components/blocks/checkout/ui/CheckoutInput.tsx`
- **ContactInfo** - `/guidelines/blocks/checkout/ContactInfo.md`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-13 | Initial guideline created |

---

**Status:** Complete  
**Next Review:** 2026-06-13  
**Maintainer:** Development Team
