# Mobile Form Guidelines

**Category**: Mobile Design  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Overview

Mobile forms require special attention to usability, as users are interacting with smaller screens and touch-based input. These guidelines ensure forms are easy to complete on mobile devices, reducing friction and increasing conversion rates.

---

## Core Principles

### 1. Minimum Input Size: 44×44px

**Touch Target Size:**
- Apple: **44×44px** minimum (iOS Human Interface Guidelines)
- Android: **48×48dp** minimum (Material Design)
- WCAG: **44×44px** minimum (Level AAA)

```tsx
// ✅ DO: Adequate touch target
<button className="px-6 py-3 min-h-[44px]">
  Submit
</button>

// ❌ DON'T: Too small
<button className="px-2 py-1 text-sm">
  Submit
</button>
```

### 2. Font Size: 16px Minimum

**Critical:** 16px prevents iOS auto-zoom on input focus

```tsx
// ✅ DO: 16px or larger
<input
  type="text"
  className="text-base px-4 py-3"
  placeholder="Email"
/>

// ❌ DON'T: Smaller than 16px
<input
  type="text"
  className="text-sm px-3 py-2"
  placeholder="Email"
/>
```

### 3. Input Spacing

Adequate spacing prevents miss-taps:

```tsx
// Vertical spacing between inputs
<div className="space-y-4">
  <input type="text" />
  <input type="email" />
  <input type="tel" />
</div>
```

---

## Input Types & Keyboard Optimization

### Use Correct Input Types

The right `type` attribute triggers the appropriate mobile keyboard:

```tsx
// Text (default keyboard)
<input type="text" placeholder="Name" />

// Email (keyboard with @ and .)
<input type="email" placeholder="email@example.com" />

// Tel (numeric keypad)
<input type="tel" placeholder="(555) 123-4567" />

// Number (numeric keyboard with +/-)
<input type="number" placeholder="Quantity" />

// URL (keyboard with .com, /, etc.)
<input type="url" placeholder="https://example.com" />

// Search (includes search button)
<input type="search" placeholder="Search products..." />

// Password (obscures text)
<input type="password" placeholder="Password" />

// Date (date picker)
<input type="date" />

// Time (time picker)
<input type="time" />
```

### Input Modes

Fine-tune keyboards with `inputMode`:

```tsx
// Numeric keypad (no +/-)
<input type="text" inputMode="numeric" placeholder="ZIP code" />

// Decimal keyboard (includes decimal point)
<input type="text" inputMode="decimal" placeholder="0.00" />

// Email keyboard
<input type="text" inputMode="email" placeholder="Email" />

// Telephone keypad
<input type="text" inputMode="tel" placeholder="Phone" />

// URL keyboard
<input type="text" inputMode="url" placeholder="Website" />
```

### Autocomplete Attributes

Help browsers autofill forms:

```tsx
// Name
<input type="text" autoComplete="name" placeholder="Full Name" />
<input type="text" autoComplete="given-name" placeholder="First Name" />
<input type="text" autoComplete="family-name" placeholder="Last Name" />

// Email
<input type="email" autoComplete="email" placeholder="Email" />

// Phone
<input type="tel" autoComplete="tel" placeholder="Phone" />

// Address
<input type="text" autoComplete="street-address" placeholder="Street Address" />
<input type="text" autoComplete="address-line1" placeholder="Address Line 1" />
<input type="text" autoComplete="address-line2" placeholder="Address Line 2" />
<input type="text" autoComplete="address-level2" placeholder="City" />
<input type="text" autoComplete="address-level1" placeholder="State" />
<input type="text" autoComplete="postal-code" placeholder="ZIP Code" />
<input type="text" autoComplete="country-name" placeholder="Country" />

// Credit card
<input type="text" autoComplete="cc-name" placeholder="Name on Card" />
<input type="text" autoComplete="cc-number" placeholder="Card Number" />
<input type="text" autoComplete="cc-exp" placeholder="MM/YY" />
<input type="text" autoComplete="cc-csc" placeholder="CVV" />
```

---

## Form Input Patterns

### Standard Text Input

```tsx
<div className="space-y-2">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    Email Address
  </label>
  <input
    id="email"
    type="email"
    autoComplete="email"
    required
    className="wp-input"
    placeholder="you@example.com"
  />
</div>
```

### Phone Number Input

```tsx
<div className="space-y-2">
  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
    Phone Number
  </label>
  <input
    id="phone"
    type="tel"
    autoComplete="tel"
    inputMode="tel"
    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600"
    placeholder="(555) 123-4567"
  />
</div>
```

### Credit Card Input

```tsx
function CreditCardInput() {
  const [cardNumber, setCardNumber] = useState('');

  const formatCardNumber = (value: string) => {
    // Remove non-digits
    const digits = value.replace(/\D/g, '');
    
    // Add space every 4 digits
    const formatted = digits.match(/.{1,4}/g)?.join(' ') || '';
    
    return formatted;
  };

  return (
    <div className="space-y-2">
      <label htmlFor="card" className="block text-sm font-medium text-gray-700">
        Card Number
      </label>
      <input
        id="card"
        type="text"
        inputMode="numeric"
        autoComplete="cc-number"
        maxLength={19} // 16 digits + 3 spaces
        value={cardNumber}
        onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
        className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg font-mono tracking-wider"
        placeholder="1234 5678 9012 3456"
      />
    </div>
  );
}
```

### Search Input

```tsx
<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
  <input
    type="search"
    inputMode="search"
    className="w-full pl-10 pr-4 py-3 text-base border border-gray-300 rounded-lg"
    placeholder="Search products..."
  />
</div>
```

### Select Dropdown

```tsx
<div className="space-y-2">
  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
    Country
  </label>
  <select
    id="country"
    autoComplete="country-name"
    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 bg-white"
  >
    <option value="">Select a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="UK">United Kingdom</option>
  </select>
</div>
```

### Textarea

```tsx
<div className="space-y-2">
  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
    Message
  </label>
  <textarea
    id="message"
    rows={4}
    className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 resize-y"
    placeholder="Your message here..."
  />
</div>
```

---

## Mobile-Optimized Form Layouts

### Single Column Layout

```tsx
// ✅ DO: Single column on mobile
<form className="space-y-4">
  <div>
    <label htmlFor="name">Name</label>
    <input id="name" type="text" />
  </div>
  
  <div>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" />
  </div>
  
  <div>
    <label htmlFor="phone">Phone</label>
    <input id="phone" type="tel" />
  </div>
  
  <button type="submit">Submit</button>
</form>
```

### Two-Column for Related Fields (Tablet+)

```tsx
<form className="space-y-4">
  {/* Single column on mobile, two columns on tablet+ */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" />
    </div>
    
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" />
    </div>
  </div>
  
  {/* Full width */}
  <div>
    <label htmlFor="email">Email</label>
    <input id="email" type="email" />
  </div>
  
  <button type="submit">Submit</button>
</form>
```

---

## Validation & Error Handling

### Inline Validation

```tsx
function EmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (value: string) => {
    if (!value) {
      setError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={(e) => validateEmail(e.target.value)}
        className={`w-full px-4 py-3 text-base border rounded-lg ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-gray-300 focus:ring-purple-600'
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
      />
      
      {error && (
        <p id="email-error" className="text-sm text-red-600 flex items-center gap-1">
          <AlertCircle size={14} />
          {error}
        </p>
      )}
    </div>
  );
}
```

### Success State

```tsx
<div className="space-y-2">
  <label htmlFor="email">Email</label>
  
  <div className="relative">
    <input
      id="email"
      type="email"
      className="w-full px-4 py-3 pr-10 border-green-500 focus:ring-green-500"
    />
    <CheckCircle
      className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600"
      size={20}
    />
  </div>
  
  <p className="text-sm text-green-600 flex items-center gap-1">
    <CheckCircle size={14} />
    Email is valid
  </p>
</div>
```

### Form-Level Error Summary

```tsx
{errors.length > 0 && (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
    <div className="flex gap-3">
      <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
      <div>
        <h3 className="font-medium text-red-900 mb-2">
          Please fix the following errors:
        </h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)}
```

---

## Buttons & Actions

### Primary Action Button

```tsx
<button
  type="submit"
  disabled={isSubmitting}
  className="w-full min-h-[44px] px-6 py-3 text-base font-medium bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
>
  {isSubmitting ? (
    <span className="flex items-center justify-center gap-2">
      <Loader2 className="animate-spin" size={20} />
      Processing...
    </span>
  ) : (
    'Continue to Payment'
  )}
</button>
```

### Secondary Action Button

```tsx
<button
  type="button"
  className="w-full min-h-[44px] px-6 py-3 text-base font-medium border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
>
  Cancel
</button>
```

### Button Group (Mobile)

```tsx
<div className="flex flex-col gap-3">
  <button className="w-full py-3 bg-black text-white rounded-lg">
    Submit
  </button>
  <button className="w-full py-3 border-2 border-gray-900 text-gray-900 rounded-lg">
    Cancel
  </button>
</div>

{/* Tablet+: Horizontal */}
<div className="flex flex-col md:flex-row gap-3">
  <button className="flex-1 py-3 bg-black text-white rounded-lg">
    Submit
  </button>
  <button className="flex-1 py-3 border-2 border-gray-900 text-gray-900 rounded-lg">
    Cancel
  </button>
</div>
```

---

## Checkboxes & Radio Buttons

### Custom Checkbox (Large Touch Target)

```tsx
<label className="flex items-center gap-3 cursor-pointer min-h-[44px] py-2">
  <input
    type="checkbox"
    className="wp-checkbox"
  />
  <span className="text-base">
    I agree to the terms and conditions
  </span>
</label>
```

### Radio Button Group

```tsx
<fieldset className="space-y-3">
  <legend className="text-sm font-medium text-gray-700 mb-3">
    Shipping Method
  </legend>
  
  {shippingMethods.map((method) => (
    <label
      key={method.id}
      className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-purple-600 transition-colors min-h-[60px]"
    >
      <input
        type="radio"
        name="shipping"
        value={method.id}
        className="w-5 h-5 text-purple-600 focus:ring-2 focus:ring-purple-600"
      />
      <div className="flex-1">
        <div className="font-medium">{method.name}</div>
        <div className="text-sm text-gray-600">{method.time}</div>
      </div>
      <div className="font-semibold">${method.price}</div>
    </label>
  ))}
</fieldset>
```

---

## Progressive Disclosure

### Multi-Step Forms

```tsx
function CheckoutForm() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Step {step} of 3</span>
          <span>{Math.round((step / 3) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* Step Content */}
      {step === 1 && <ShippingForm onNext={() => setStep(2)} />}
      {step === 2 && <PaymentForm onNext={() => setStep(3)} onBack={() => setStep(1)} />}
      {step === 3 && <ReviewOrder onBack={() => setStep(2)} />}
    </div>
  );
}
```

### Conditional Fields

```tsx
function AddressForm() {
  const [showBilling, setShowBilling] = useState(false);

  return (
    <div className="space-y-4">
      {/* Shipping Address */}
      <div>
        <h3>Shipping Address</h3>
        <AddressFields prefix="shipping" />
      </div>

      {/* Billing Address Toggle */}
      <label className="flex items-center gap-3 cursor-pointer min-h-[44px]">
        <input
          type="checkbox"
          checked={showBilling}
          onChange={(e) => setShowBilling(e.target.checked)}
          className="w-5 h-5"
        />
        <span>Use a different billing address</span>
      </label>

      {/* Conditional Billing Address */}
      {showBilling && (
        <div className="mt-4 p-4 border border-gray-200 rounded-lg">
          <h3>Billing Address</h3>
          <AddressFields prefix="billing" />
        </div>
      )}
    </div>
  );
}
```

---

## Accessibility

### ARIA Labels & Descriptions

```tsx
<div>
  <label htmlFor="password" className="block text-sm font-medium mb-2">
    Password
  </label>
  
  <input
    id="password"
    type="password"
    aria-describedby="password-requirements"
    className="w-full px-4 py-3"
  />
  
  <p id="password-requirements" className="text-sm text-gray-600 mt-2">
    Must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.
  </p>
</div>
```

### Error Announcements

```tsx
<div>
  <input
    type="email"
    aria-invalid={!!error}
    aria-describedby={error ? 'email-error' : undefined}
  />
  
  {error && (
    <p
      id="email-error"
      role="alert"
      className="text-sm text-red-600 mt-1"
    >
      {error}
    </p>
  )}
</div>
```

### Required Fields

```tsx
<label htmlFor="email">
  Email Address
  <span className="text-red-600" aria-label="required">*</span>
</label>
<input
  id="email"
  type="email"
  required
  aria-required="true"
/>
```

---

## Common Patterns

### Login Form

```tsx
<form className="space-y-4">
  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email
    </label>
    <input
      id="email"
      type="email"
      autoComplete="email"
      className="w-full px-4 py-3 text-base border rounded-lg"
      placeholder="you@example.com"
    />
  </div>

  <div>
    <label htmlFor="password" className="block text-sm font-medium mb-2">
      Password
    </label>
    <input
      id="password"
      type="password"
      autoComplete="current-password"
      className="w-full px-4 py-3 text-base border rounded-lg"
    />
  </div>

  <button
    type="submit"
    className="w-full py-3 bg-black text-white rounded-lg font-medium"
  >
    Sign In
  </button>
</form>
```

### Shipping Address Form

```tsx
<form className="space-y-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" autoComplete="given-name" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" autoComplete="family-name" />
    </div>
  </div>

  <div>
    <label htmlFor="address">Street Address</label>
    <input id="address" type="text" autoComplete="street-address" />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="md:col-span-1">
      <label htmlFor="city">City</label>
      <input id="city" type="text" autoComplete="address-level2" />
    </div>
    <div>
      <label htmlFor="state">State</label>
      <input id="state" type="text" autoComplete="address-level1" />
    </div>
    <div>
      <label htmlFor="zip">ZIP</label>
      <input id="zip" type="text" inputMode="numeric" autoComplete="postal-code" />
    </div>
  </div>
</form>
```

---

## Testing Checklist

- [ ] All inputs have 16px or larger font size
- [ ] Touch targets are at least 44×44px
- [ ] Correct `type` attribute for keyboard optimization
- [ ] `autocomplete` attributes for common fields
- [ ] Labels associated with inputs (`for` attribute)
- [ ] Error messages are clear and actionable
- [ ] Form validates before submission
- [ ] Success states clearly indicated
- [ ] Loading states shown during submission
- [ ] Disabled state prevents double submission
- [ ] Required fields marked clearly
- [ ] Tab order is logical
- [ ] Works with screen readers
- [ ] Tested on iOS Safari and Chrome Android

---

## Common Mistakes

❌ Input font size < 16px (triggers iOS auto-zoom)  
❌ Touch targets < 44×44px (hard to tap)  
❌ Using `type="text"` for email/phone (wrong keyboard)  
❌ No `autocomplete` attributes (prevents autofill)  
❌ Multi-column layout on mobile (hard to scan)  
❌ Error messages not associated with inputs (ARIA)  
❌ No loading state on submit (unclear if working)  
❌ Labels not clickable (no `for` attribute)  
❌ Insufficient spacing between inputs (miss-taps)  
❌ No validation feedback until form submission

---

## Resources

- [MDN Input Types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [HTML AutoComplete Values](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
- [iOS Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/ios)
- [Material Design Touch Targets](https://material.io/design/usability/accessibility.html#layout-and-typography)
- [WCAG Form Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/input-purposes.html)
