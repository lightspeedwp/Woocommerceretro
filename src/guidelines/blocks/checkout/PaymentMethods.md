# PaymentMethods

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-12

---

## 📋 Overview

The `PaymentMethods` component displays available payment options (credit card, PayPal, bank transfer) with expandable form fields for selected methods. It includes visual icons, conditional form fields, and an optional "save payment method" checkbox for logged-in users.

---

## 🎯 Purpose

Use `PaymentMethods` to:
- Display multiple payment options with icons
- Show/hide payment-specific form fields based on selection
- Allow logged-in users to save payment methods
- Provide a "Place Order" submit button

**When to use:**
- Checkout pages (payment step)
- Subscription payment setup
- One-click checkout flows
- Account payment method management

---

## 📐 Structure

```
PaymentMethods
├── Title ("Payment Method")
├── Payment Options (radio buttons)
│   ├── Option 1 (e.g., Credit Card)
│   │   ├── Radio input + label + icon
│   │   └── Expandable fields (card number, expiry, CVV)
│   ├── Option 2 (e.g., PayPal)
│   │   └── Radio input + label + icon
│   └── Option 3 (e.g., Bank Transfer)
│       ├── Radio input + label + icon
│       └── Expandable fields (account info)
├── Save Payment Checkbox (logged-in users only)
└── "Place Order" Button
```

**File Location:** `/src/app/components/blocks/checkout/PaymentMethods.tsx`  
**Data Source:** `/src/app/data/checkout.ts` (`paymentMethods` array)  
**CSS Location:** 
- `/src/styles/blocks/checkout/checkout.css`
- `/src/styles/sections/cart-checkout-funky.css` (funky theme)

---

## 💻 Implementation

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isLoggedIn` | `boolean` | No | `false` | Shows "Save payment method" checkbox if `true` |

### **Code Example**

```tsx
import { PaymentMethods } from '@/components/blocks/checkout/PaymentMethods';

// Basic usage (guest checkout)
<PaymentMethods />

// Logged-in user (shows save checkbox)
<PaymentMethods isLoggedIn={true} />
```

### **Payment Methods Data Structure**

The component reads from `/src/app/data/checkout.ts`:

```ts
interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  fields?: PaymentField[];
}

interface PaymentField {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Credit / Debit Card',
    icon: CreditCard,
    fields: [
      { name: 'cardNumber', label: 'Card Number', placeholder: '1234 5678 9012 3456', required: true },
      { name: 'expiry', label: 'Expiry Date', placeholder: 'MM/YY', required: true },
      { name: 'cvv', label: 'CVV', placeholder: '123', required: true },
    ],
  },
  {
    id: 'paypal',
    name: 'PayPal',
    icon: Wallet,
    // No fields - redirects to PayPal on submit
  },
  {
    id: 'bank',
    name: 'Bank Transfer',
    icon: Banknote,
    fields: [
      { name: 'accountName', label: 'Account Name', required: true },
      { name: 'accountNumber', label: 'Account Number', required: true },
    ],
  },
];
```

---

## 🎨 Styling

### **WordPress BEM Classes**

```css
/* Container */
.wp-payment-methods {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

/* Title */
.wp-payment-methods__title {
  margin-bottom: var(--wp--preset--spacing--20);
}

/* Options container */
.wp-payment-methods__options {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--30);
}

/* Individual payment option card */
.wp-payment-methods__option {
  border: 2px solid var(--wp--preset--color--border);
  border-radius: var(--wp--custom--border-radius--md);
  padding: var(--wp--preset--spacing--40);
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Active/selected option */
.wp-payment-methods__option--active {
  border-color: var(--wp--preset--color--primary);
  background-color: var(--wp--preset--color--surface-elevated);
}

/* Radio input (visually hidden, but accessible) */
.wp-payment-methods__radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

/* Label group (method name + icon) */
.wp-payment-methods__label-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Method name */
.wp-payment-methods__label {
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--foreground);
}

/* Icon */
.wp-payment-methods__icon {
  color: var(--wp--preset--color--muted-foreground);
}

/* Expandable details (shown when active) */
.wp-payment-methods__details {
  margin-top: var(--wp--preset--spacing--40);
  padding-top: var(--wp--preset--spacing--40);
  border-top: 1px solid var(--wp--preset--color--border);
}

/* Form fields grid */
.wp-payment-methods__fields {
  display: grid;
  gap: var(--wp--preset--spacing--30);
}

/* Save payment checkbox */
.wp-payment-methods__save {
  margin-top: var(--wp--preset--spacing--30);
}

/* Submit button */
.wp-payment-methods__submit {
  width: 100%;
  padding: var(--wp--preset--spacing--40) var(--wp--preset--spacing--60);
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
  border: none;
  border-radius: var(--wp--custom--border-radius--md);
  font-size: var(--wp--preset--font-size--400);
  font-weight: var(--wp--preset--font-weight--semibold);
  cursor: pointer;
  transition: all 0.2s ease;
}

.wp-payment-methods__submit:hover {
  background-color: var(--wp--preset--color--primary-hover);
  transform: translateY(-1px);
}
```

### **Funky/Retro Theme Enhancements**

```css
/* Neon glow on active payment card */
.dark .funky-payment-active {
  border-color: var(--wp--preset--color--neon-cyan);
  box-shadow: 
    0 0 10px rgba(0, 255, 255, 0.2),
    inset 0 0 20px rgba(0, 255, 255, 0.05);
}

/* Neon icon glow on hover */
.dark .funky-payment-option:hover .wp-payment-methods__icon {
  color: var(--wp--preset--color--neon-cyan);
  filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.6));
}

/* Neon submit button */
.dark .funky-submit-btn {
  background: linear-gradient(135deg, 
    var(--wp--preset--color--neon-pink), 
    var(--wp--preset--color--neon-cyan)
  );
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.dark .funky-submit-btn:hover {
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
}

/* Fade-in animation for expanded fields */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20` (8px) - title margin
- `--wp--preset--spacing--30` (12px) - option gap, field gap
- `--wp--preset--spacing--40` (16px) - padding, margins
- `--wp--preset--spacing--60` (24px) - button padding
- `--wp--preset--color--border` - default card border
- `--wp--preset--color--primary` - active card border, button bg
- `--wp--preset--color--surface-elevated` - active card background
- `--wp--preset--font-weight--medium` (500) - method name
- `--wp--preset--font-weight--semibold` (600) - button text
- `--wp--custom--border-radius--md` - card/button corners
- `--wp--preset--color--neon-cyan` - funky active glow
- `--wp--preset--color--neon-pink` - funky gradient accent

---

## ♿ Accessibility

### **WCAG 2.1 AA Compliance**

✅ **Keyboard Navigation:**
- Radio buttons are natively focusable
- Tab through payment options
- Space/Enter to select

✅ **ARIA Attributes:**
- Native `<input type="radio">` provides built-in semantics
- Consider adding `aria-describedby` for additional context:
  ```tsx
  <label>
    <input 
      type="radio"
      aria-describedby="card-description"
    />
    <span id="card-description">
      Visa, Mastercard, Amex accepted
    </span>
  </label>
  ```

✅ **Visual Indicators:**
- Border color change on selection (not just glow)
- Icon + text label (not icon alone)
- Focus ring visible on radio inputs

✅ **Color Contrast:**
- Method labels: 7:1 contrast (AAA)
- Active border: 3:1 contrast (AA for UI components)
- Neon glow: decorative enhancement only

### **Form Validation**

Ensure payment fields have proper validation:

```tsx
<CheckoutInput
  label="Card Number"
  name="cardNumber"
  type="text"
  required={true}
  pattern="[0-9\s]{13,19}"
  aria-invalid={hasError}
  aria-describedby="card-error"
/>
{hasError && (
  <span id="card-error" className="error-message">
    Please enter a valid card number
  </span>
)}
```

---

## 🌙 Dark Mode

All styles support dark mode via CSS variables.

**Key dark mode features:**
- Neon cyan glow on active payment cards
- Gradient "Place Order" button (pink → cyan)
- Enhanced icon glow on hover
- Glass panel effect on active cards

---

## 📱 Responsive Behavior

**Mobile (< 640px):**
- Full-width payment cards
- Stacked field layout
- Touch-friendly tap targets (48px minimum)

**Tablet+ (≥ 640px):**
- Wider payment cards with more spacing
- Grid layout for card fields (number, expiry, CVV in row)

**Example responsive field layout:**

```css
@media (min-width: 640px) {
  .wp-payment-methods__fields {
    grid-template-columns: 2fr 1fr 1fr; /* Card #, Expiry, CVV */
  }
}
```

---

## 🔧 Common Patterns

### **Pattern 1: Dynamic Payment Methods**

```tsx
// Load payment methods from backend
const [availableMethods, setAvailableMethods] = useState([]);

useEffect(() => {
  fetchPaymentMethods().then(setAvailableMethods);
}, []);

// Pass to component data layer
<PaymentMethods methods={availableMethods} />
```

### **Pattern 2: Controlled State (Parent Manages Selection)**

```tsx
const [paymentMethod, setPaymentMethod] = useState('card');

<PaymentMethods
  selectedMethod={paymentMethod}
  onMethodChange={setPaymentMethod}
/>
```

### **Pattern 3: Validation Before Submit**

```tsx
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (selectedMethod === 'card') {
    if (!validateCardNumber(cardNumber)) {
      setError('Invalid card number');
      return;
    }
  }
  
  processPayment();
};
```

### **Pattern 4: Saved Payment Methods (Returning Users)**

```tsx
const savedMethods = [
  { id: 'visa-1234', type: 'card', last4: '1234', isDefault: true },
  { id: 'paypal-john', type: 'paypal', email: 'john@example.com' },
];

<PaymentMethods 
  savedMethods={savedMethods}
  isLoggedIn={true}
/>
```

---

## ⚠️ Common Mistakes

### ❌ **Mistake 1: No visual feedback on selection**

```tsx
// WRONG - only radio input shows checked state
<input type="radio" />
<span>Credit Card</span>
```

**✅ Correct:**
```tsx
<label className={isActive ? 'active' : ''}>
  <input type="radio" />
  <span>Credit Card</span>
  {/* Border/background changes on .active class */}
</label>
```

---

### ❌ **Mistake 2: Showing all fields at once**

```tsx
// WRONG - cluttered, confusing
<div>
  {methods.map(method => (
    <div>
      <input type="radio" />
      {method.fields.map(renderField)} {/* Always visible! */}
    </div>
  ))}
</div>
```

**✅ Correct:**
```tsx
{isActive && method.fields && (
  <div className="expandable-fields">
    {method.fields.map(renderField)}
  </div>
)}
```

---

### ❌ **Mistake 3: Missing icon labels**

```tsx
// WRONG - icon without accessible name
<CreditCard size={20} />
```

**✅ Correct:**
```tsx
<CreditCard 
  size={20} 
  aria-label="Credit card payment"
  role="img"
/>
```

---

### ❌ **Mistake 4: Poor mobile UX**

```tsx
// WRONG - tiny tap targets, horizontal scroll
<div style={{ display: 'flex' }}>
  {methods.map(m => <div style={{ width: '150px' }}>{m.name}</div>)}
</div>
```

**✅ Correct:**
```tsx
<div className="payment-options"> {/* Stacks vertically on mobile */}
  {methods.map(m => (
    <label className="payment-option"> {/* min-height: 48px */}
      {m.name}
    </label>
  ))}
</div>
```

---

## 🧪 Testing Checklist

- [ ] All payment methods display correctly
- [ ] Icons render for each method
- [ ] Selecting a method shows its fields (if applicable)
- [ ] Switching methods hides previous fields
- [ ] "Save payment method" checkbox appears for logged-in users
- [ ] "Place Order" button is always visible
- [ ] Button shows loading state during submission
- [ ] Validation errors display inline
- [ ] Keyboard navigation works (Tab, Space, Enter)
- [ ] Focus indicators visible
- [ ] Dark mode neon glows display correctly
- [ ] Mobile layout stacks vertically
- [ ] Touch targets are 48px minimum
- [ ] Form fields are accessible (labels, error messages)

---

## 🔗 Related Components

- **CheckoutInput** - `/src/app/components/blocks/checkout/ui/CheckoutInput.tsx`
- **Checkbox** - `/src/app/components/blocks/checkout/ui/Checkbox.tsx`
- **CheckoutStep** - `/guidelines/blocks/checkout/CheckoutStep.md`
- **OrderSummary** - `/guidelines/blocks/checkout/OrderSummary.md` (TODO)

---

## 📚 Additional Resources

- **WooCommerce Payment Gateway API:** [Payment Gateways](https://woocommerce.com/document/payment-gateway-api/)
- **Stripe Elements:** [Card Input Design](https://stripe.com/docs/payments/elements)
- **Accessibility:** [WCAG Radio Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-12 | Initial guideline created - comprehensive payment method selection with funky theme |

---

**Status:** ✅ Complete  
**Next Review:** 2026-06-12  
**Maintainer:** Development Team
