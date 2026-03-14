# CouponInput

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-13

---

## Overview

The `CouponInput` component provides an expandable coupon code input with apply/remove functionality. It integrates with `CartContext` for coupon state management and transitions through three visual states: collapsed toggle, expanded form, and applied success.

---

## Purpose

Use `CouponInput` to allow customers to apply promotional codes during checkout or in the cart. It handles:
- Expandable disclosure (click to reveal input)
- Coupon code validation via `CartContext.applyCoupon()`
- Loading state during async validation
- Error display for invalid codes
- Applied coupon display with remove action

**When to use:**
- Checkout page (within OrderSummary or as standalone step)
- Cart page (above or below totals)
- Promotional landing pages

---

## Structure

### State 1: Collapsed (Default)
```
CouponInput (collapsed)
└── Toggle button: "Have a coupon? Click here to enter your code"
```

### State 2: Expanded (Input Visible)
```
CouponInput (expanded)
└── Form row
    ├── FloatingLabelInput ("Coupon code")
    ├── Apply button
    └── Error message (conditional)
```

### State 3: Applied (Coupon Active)
```
CouponInput (applied)
├── Success message: "Coupon {CODE} applied"
└── Remove button
```

**File Location:** `/src/app/components/blocks/checkout/CouponInput.tsx`  
**CSS Location:**
- `/src/styles/blocks/checkout/checkout.css` (base styles)
- `/src/styles/sections/cart-checkout-funky.css` (retro theme)

---

## Implementation

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | No | `''` | Additional CSS classes |

### Dependencies

- `Button` from `@/components/blocks/design/Buttons` - apply/remove buttons
- `FloatingLabelInput` from `./ui/FloatingLabelInput` - coupon code input
- `Typography` from `@/components/common/Typography` - text elements
- `useCart` from `@/contexts/CartContext` - `applyCoupon`, `appliedCoupon`, `removeCoupon`

### State Management

```tsx
const [isOpen, setIsOpen] = useState(false);      // Toggle expanded form
const [code, setCode] = useState('');              // Input value
const [error, setError] = useState('');            // Validation error message
const [isLoading, setIsLoading] = useState(false); // Loading during apply
```

### Validation Flow

```
User enters code → clicks "Apply"
  → setIsLoading(true)
  → 600ms delay (simulated API call)
  → applyCoupon(code)
    → Success: clear input, close form, show applied state
    → Failure: show error message
  → setIsLoading(false)
```

### Code Example

```tsx
import { CouponInput } from '@/components/blocks/checkout/CouponInput';

// Basic usage
<CouponInput />

// With custom class
<CouponInput className="wp-order-summary__coupon" />

// Inside OrderSummary
<div className="wp-order-summary__section">
  <CouponInput />
</div>
```

---

## Styling

### WordPress BEM Classes

```css
/* Base container */
.wp-coupon-input { }

/* Applied state modifier */
.wp-coupon-input--applied {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--wp--preset--spacing--30);
}

/* Toggle button (collapsed state) */
.wp-coupon-input__toggle {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-size: var(--wp--preset--font-size--normal);
  color: var(--wp--preset--color--text-secondary);
}

.wp-coupon-input__toggle-link {
  color: var(--wp--preset--color--primary);
  text-decoration: underline;
}

/* Form container (expanded state) */
.wp-coupon-input__form {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--30);
}

/* Input + button row */
.wp-coupon-input__fields {
  display: flex;
  gap: var(--wp--preset--spacing--30);
  align-items: flex-start;
}

/* Coupon input field */
.wp-coupon-input__field {
  flex: 1;
}

/* Submit button */
.wp-coupon-input__submit {
  flex-shrink: 0;
}

/* Error message */
.wp-coupon-input__error {
  color: var(--wp--preset--color--error);
  font-size: var(--wp--preset--font-size--small);
}

/* Applied state: success message */
.wp-coupon-input__success-message {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
}

.wp-coupon-input__icon {
  font-size: var(--wp--preset--font-size--large);
}

.wp-coupon-input__text {
  margin: 0;
}

/* Remove button */
.wp-coupon-input__remove-btn {
  flex-shrink: 0;
}
```

### Retro Theme Enhancements

```css
/* Applied state - neon lime success */
.funky-coupon-applied {
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid rgba(0, 255, 0, 0.2);
  border-radius: var(--wp--preset--border-radius--md);
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--40);
}

.funky-coupon-applied .wp-coupon-input__text strong {
  color: var(--wp--preset--color--neon-lime);
  text-shadow: 0 0 6px rgba(0, 255, 0, 0.3);
}

/* Toggle button neon accent */
.funky-toggle-btn .wp-coupon-input__toggle-link {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 4px rgba(0, 255, 255, 0.2);
}

/* Coupon form glass panel */
.funky-coupon-form {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: var(--wp--preset--border-radius--md);
  padding: var(--wp--preset--spacing--40);
}

/* Neon focus input */
.funky-coupon-form .funky-input:focus {
  border-color: var(--wp--preset--color--neon-cyan);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}

/* Glow Apply button */
.funky-secondary-btn:hover {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

/* Error text neon pink */
.funky-error-text {
  color: var(--wp--preset--color--neon-pink);
  text-shadow: 0 0 4px rgba(255, 0, 128, 0.3);
}

/* Remove button neon link */
.funky-link-btn {
  color: var(--wp--preset--color--neon-cyan);
}
```

### CSS Variables Used

- `--wp--preset--spacing--20` (8px) - icon gap
- `--wp--preset--spacing--30` (12px) - field gap, applied padding
- `--wp--preset--spacing--40` (16px) - form padding
- `--wp--preset--color--primary` - toggle link color
- `--wp--preset--color--text-secondary` - toggle text
- `--wp--preset--color--error` - error message
- `--wp--preset--color--neon-cyan` - retro focus, links
- `--wp--preset--color--neon-lime` - retro success
- `--wp--preset--color--neon-pink` - retro error

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- Toggle button focusable and activatable via Enter/Space
- Input and Apply button reachable via Tab
- Remove button focusable when coupon applied

**ARIA:**
- Consider `aria-live="polite"` on error/success messages for screen reader announcements
- Apply button disabled state communicated via `disabled` attribute
- Loading state communicated via button text change ("Applying...")

**Visual Indicators:**
- Error text displayed below input
- Success state with tag emoji and bold code
- Loading state disables button and shows "Applying..."

**Color Contrast:**
- Error text: 4.5:1 minimum (AA)
- Toggle link: 4.5:1 minimum (AA)
- Neon accents are decorative, not sole indicators

### Recommended Enhancements

```tsx
{/* Add aria-live for dynamic messages */}
<div aria-live="polite">
  {error && <Typography variant="caption" className="wp-coupon-input__error">{error}</Typography>}
</div>
```

---

## Dark Mode

All styles support dark mode via CSS variables. No component changes needed.

**Key dark mode features:**
- Glass-morphism form container
- Neon cyan input focus rings
- Neon lime success state
- Neon pink error messages
- Dark backgrounds with light text

---

## Responsive Behavior

**Mobile (< 480px):**
- Input and Apply button may stack vertically
- Full-width input field
- Button below input

**Tablet+ (>= 480px):**
- Horizontal row: input + Apply button side by side

```css
@media (max-width: 479px) {
  .wp-coupon-input__fields {
    flex-direction: column;
  }
  
  .wp-coupon-input__submit {
    width: 100%;
  }
}
```

---

## Common Patterns

### Pattern 1: Inside OrderSummary

```tsx
<div className="wp-order-summary">
  <CouponInput />
  <div className="wp-order-summary__totals">
    {/* Subtotal, shipping, tax, total */}
  </div>
</div>
```

### Pattern 2: Cart Page Placement

```tsx
<div className="wp-cart-actions">
  <CouponInput className="wp-cart-actions__coupon" />
  <Button variant="primary">Update Cart</Button>
</div>
```

---

## Common Mistakes

### Mistake 1: Not wrapping in CartProvider

```tsx
// WRONG - CartContext not available
<CouponInput />
// Error: useCart must be used within CartProvider
```

**Correct:** Ensure `CartProvider` wraps the component tree.

### Mistake 2: Custom validation bypassing CartContext

```tsx
// WRONG - validating outside context
if (code === 'VALID') { /* apply */ }
```

**Correct:** Let `CartContext.applyCoupon()` handle validation and return success/failure.

---

## Testing Checklist

- [ ] Toggle button reveals input form
- [ ] Typing coupon code enables Apply button
- [ ] Empty code keeps Apply button disabled
- [ ] Valid code: shows applied state with code name
- [ ] Invalid code: shows error message
- [ ] Loading state: button shows "Applying..." and is disabled
- [ ] Remove button clears applied coupon
- [ ] After removal, toggle returns to collapsed state
- [ ] Animation (fade-in) works on form reveal
- [ ] Dark mode retro styling (neon accents)
- [ ] Error message accessible to screen readers
- [ ] Keyboard navigation through all states
- [ ] Mobile responsive layout

---

## Related Components

- **OrderSummary** - `/guidelines/blocks/checkout/OrderSummary.md`
- **CartContext** - `/src/app/contexts/CartContext.tsx`
- **FloatingLabelInput** - `/src/app/components/blocks/checkout/ui/FloatingLabelInput.tsx`
- **Button** - `/src/app/components/blocks/design/Buttons.tsx`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-13 | Initial guideline created |

---

**Status:** Complete  
**Next Review:** 2026-06-13  
**Maintainer:** Development Team
