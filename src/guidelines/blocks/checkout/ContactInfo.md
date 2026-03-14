# ContactInfo

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-13

---

## Overview

The `ContactInfo` component handles the contact information step in checkout. It renders two distinct views: a logged-in user preview showing name and email, or a guest email input form with an optional newsletter signup checkbox.

---

## Purpose

Use `ContactInfo` as the first step in the checkout flow to capture or display the customer's contact details. It handles:
- Logged-in user: displays saved profile info (name + email)
- Guest user: email/phone input with floating label
- Newsletter opt-in checkbox

**When to use:**
- Checkout page (first step - contact information)
- Express checkout flows
- Order confirmation contact display

---

## Structure

### Logged-In State
```
ContactInfo
└── Preview
    ├── "Logged in as" label
    ├── Full name (bold)
    └── Email (in parentheses)
```

### Guest State
```
ContactInfo
└── Form
    ├── FloatingLabelInput ("Email or mobile phone number")
    └── Newsletter checkbox
        ├── Checkbox input
        └── Label: "Email me with news and offers"
```

**File Location:** `/src/app/components/blocks/checkout/ContactInfo.tsx`  
**CSS Location:**
- `/src/styles/blocks/checkout/checkout.css` (base styles)
- `/src/styles/sections/cart-checkout-funky.css` (retro theme)

---

## Implementation

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isLoggedIn` | `boolean` | No | `undefined` | When true, shows user preview. When false/undefined, shows guest form. |

### Dependencies

- `FloatingLabelInput` from `./ui/FloatingLabelInput` - email input with floating label
- `mockUserProfile` from `@/data/account` - logged-in user data

### Code Example

```tsx
import { ContactInfo } from '@/components/blocks/checkout/ContactInfo';

// Guest checkout
<ContactInfo />

// Logged-in user
<ContactInfo isLoggedIn={true} />

// Inside a CheckoutStep
<CheckoutStep number={1} title="Contact Information">
  <ContactInfo isLoggedIn={user !== null} />
</CheckoutStep>
```

---

## Styling

### WordPress BEM Classes

```css
/* Container */
.wp-checkout-contact { }

/* Logged-in preview */
.wp-checkout-contact__preview {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--normal);
}

.wp-checkout-contact__label {
  color: var(--wp--preset--color--text-secondary);
}

.wp-checkout-contact__name {
  color: var(--wp--preset--color--foreground);
}

.wp-checkout-contact__email {
  color: var(--wp--preset--color--text-muted);
}

/* Guest form */
.wp-checkout-contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

.wp-checkout-contact__input { }

/* Newsletter checkbox */
.wp-checkout-contact__newsletter {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
}

.wp-checkout-contact__checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.wp-checkout-contact__checkbox-label {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
  cursor: pointer;
}
```

### Retro Theme Enhancements

```css
/* Retro container */
.funky-checkout-contact {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 255, 255, 0.1);
  border-radius: var(--wp--preset--border-radius--md);
  padding: var(--wp--preset--spacing--40);
}

/* Logged-in preview retro styling */
.funky-contact-preview .wp-checkout-contact__name {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 4px rgba(0, 255, 255, 0.2);
}

.funky-contact-preview .wp-checkout-contact__email {
  color: var(--wp--preset--color--text-muted);
}

/* Guest form neon focus */
.funky-checkout-contact .funky-input:focus {
  border-color: var(--wp--preset--color--neon-cyan);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
  outline: none;
}

/* Neon checkbox accent */
.funky-checkout-contact .wp-checkout-contact__checkbox:checked {
  accent-color: var(--wp--preset--color--neon-cyan);
}
```

### CSS Variables Used

- `--wp--preset--spacing--10` (4px) - preview gap
- `--wp--preset--spacing--20` (8px) - checkbox gap
- `--wp--preset--spacing--40` (16px) - form gap, container padding
- `--wp--preset--color--foreground` - name text
- `--wp--preset--color--text-secondary` - label, checkbox label
- `--wp--preset--color--text-muted` - email text
- `--wp--preset--color--neon-cyan` - retro name highlight, focus ring

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- Email input focusable via Tab
- Newsletter checkbox toggleable via Space
- All interactive elements in logical tab order

**Labels:**
- Email input has floating label via `FloatingLabelInput`
- `id="email"` and `type="email"` on email input for autocomplete
- Newsletter checkbox has `<label htmlFor="newsletter">` association

**Screen Reader:**
- Logged-in preview reads naturally: "Logged in as Jane Doe (jane@example.com)"
- Consider adding `role="status"` on preview for dynamic updates

**Validation:**
- Email input uses `type="email"` for native browser validation
- Consider adding `required` attribute and `aria-required="true"`

**Color Contrast:**
- Label text: 4.5:1 minimum (AA)
- Name text: 7:1 minimum (AAA)
- Neon highlights are decorative

### Recommended Enhancements

```tsx
{/* Add autocomplete for faster checkout */}
<FloatingLabelInput
  label="Email or mobile phone number"
  type="email"
  id="email"
  autoComplete="email"
  required
  aria-required="true"
/>
```

---

## Dark Mode

All styles support dark mode via CSS variables. No component changes needed.

**Key dark mode features:**
- Glass-morphism container (retro theme)
- Neon cyan name highlight for logged-in users
- Neon cyan input focus rings
- Neon checkbox accent color

---

## Responsive Behavior

**Mobile (< 640px):**
- Full-width email input
- Newsletter checkbox and label wrap naturally
- Touch-friendly checkbox size (18px)

**Tablet+ (>= 640px):**
- Same layout, more breathing room via container padding

---

## Common Patterns

### Pattern 1: First Checkout Step

```tsx
<CheckoutStep
  number={1}
  title="Contact Information"
  isCompleted={contactCompleted}
  isOpen={currentStep === 1}
  onToggle={() => setCurrentStep(1)}
>
  <ContactInfo isLoggedIn={isAuthenticated} />
</CheckoutStep>
```

### Pattern 2: Completed Step Summary

```tsx
{/* When step is completed and collapsed, show summary */}
<CheckoutStep
  number={1}
  title="Contact Information"
  isCompleted={true}
  isOpen={false}
  onToggle={() => setCurrentStep(1)}
  headerRight={<button>Edit</button>}
>
  <span className="screen-reader-text">
    Email: {userEmail}
  </span>
</CheckoutStep>
```

### Pattern 3: Conditional Login Prompt

```tsx
<ContactInfo isLoggedIn={false} />
<div className="wp-checkout-contact__login-prompt">
  <Link to="/account/login">Already have an account? Log in</Link>
</div>
```

---

## Common Mistakes

### Mistake 1: Not passing isLoggedIn

```tsx
// Renders guest form even for logged-in users
<ContactInfo />
```

**Correct:**
```tsx
<ContactInfo isLoggedIn={!!currentUser} />
```

### Mistake 2: Missing htmlFor on checkbox

The component correctly associates the checkbox label using `htmlFor="newsletter"` matching `id="newsletter"`. Do not break this association.

---

## Testing Checklist

- [ ] Guest form renders email input and newsletter checkbox
- [ ] Logged-in preview shows name and email from mock data
- [ ] Email input has floating label animation
- [ ] Newsletter checkbox toggles correctly
- [ ] `isLoggedIn={true}` shows preview, not form
- [ ] `isLoggedIn={false}` or omitted shows form
- [ ] Dark mode retro styling (neon accents)
- [ ] Mobile responsive layout
- [ ] Keyboard accessible (Tab, Space for checkbox)
- [ ] Label associations correct (htmlFor/id)
- [ ] Email input type triggers email keyboard on mobile

---

## Related Components

- **CheckoutStep** - `/guidelines/blocks/checkout/CheckoutStep.md`
- **FloatingLabelInput** - `/src/app/components/blocks/checkout/ui/FloatingLabelInput.tsx`
- **ShippingAddressForm** - `/guidelines/blocks/checkout/ShippingAddressForm.md`
- **CheckoutContact** - `/src/app/components/blocks/checkout/CheckoutContact.tsx`

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-13 | Initial guideline created |

---

**Status:** Complete  
**Next Review:** 2026-06-13  
**Maintainer:** Development Team
