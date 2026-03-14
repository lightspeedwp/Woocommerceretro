# DeliveryMethodSelector

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-13

---

## Overview

The `DeliveryMethodSelector` component provides a toggle between "Ship" and "Pickup" delivery methods during checkout. It renders two option buttons with icons, allowing the customer to choose how they receive their order.

---

## Purpose

Use `DeliveryMethodSelector` to let customers select their preferred delivery method. It handles:
- Toggle between Ship and Pickup options
- Visual active state on selected method
- Icon-based option identification (Truck / Store)
- Controlled component pattern (parent manages state)

**When to use:**
- Checkout page (delivery step, before shipping address)
- Cart page (delivery method selection)
- Order edit flows

---

## Structure

```
DeliveryMethodSelector
├── Description text ("Select how you would like to receive your order.")
└── Toggle group
    ├── Ship option
    │   ├── Truck icon
    │   └── "Ship" label
    └── Pickup option
        ├── Store icon
        └── "Pickup" label
```

**File Location:** `/src/app/components/blocks/checkout/DeliveryMethodSelector.tsx`  
**CSS Location:**
- `/src/styles/blocks/checkout/checkout.css` (base styles)
- `/src/styles/sections/cart-checkout-funky.css` (retro theme)

---

## Implementation

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `method` | `string` | **Yes** | - | Currently selected method (`'ship'` or `'pickup'`) |
| `setMethod` | `(method: string) => void` | **Yes** | - | Callback to update selected method |

### Dependencies

- `Truck`, `Storefront` (as `Store`) from `@phosphor-icons/react` - delivery icons
- `Typography` from `@/components/common/Typography` - description text

### State Management

This is a **controlled component**. The parent manages state:

```tsx
const [deliveryMethod, setDeliveryMethod] = useState('ship');

<DeliveryMethodSelector
  method={deliveryMethod}
  setMethod={setDeliveryMethod}
/>
```

### Code Example

```tsx
import { DeliveryMethodSelector } from '@/components/blocks/checkout/DeliveryMethodSelector';

// Basic usage
const [method, setMethod] = useState('ship');

<DeliveryMethodSelector method={method} setMethod={setMethod} />

// Inside a CheckoutStep
<CheckoutStep number={2} title="Delivery Method">
  <DeliveryMethodSelector method={method} setMethod={setMethod} />
  {method === 'ship' && <ShippingAddressForm />}
  {method === 'pickup' && <PickupLocationSelect />}
</CheckoutStep>
```

---

## Styling

### WordPress BEM Classes

```css
/* Container */
.wp-delivery-method {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

/* Description text */
.wp-delivery-method__description {
  color: var(--wp--preset--color--text-secondary);
  font-size: var(--wp--preset--font-size--normal);
  margin: 0;
}

/* Toggle group (button container) */
.wp-checkout-toggle-group {
  display: flex;
  gap: var(--wp--preset--spacing--30);
}

/* Individual option button */
.wp-checkout-toggle-option {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--50);
  border: 2px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--md);
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--text-secondary);
  cursor: pointer;
  transition: all var(--wp--preset--transition--base) ease;
  font-size: var(--wp--preset--font-size--normal);
}

.wp-checkout-toggle-option:hover {
  border-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--foreground);
}

/* Active state */
.wp-checkout-toggle-option.is-active {
  border-color: var(--wp--preset--color--primary);
  background: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
}

/* Icon */
.wp-delivery-method__icon {
  flex-shrink: 0;
}

/* Label */
.wp-delivery-method__label {
  white-space: nowrap;
}
```

### Retro Theme Enhancements

```css
/* Retro container */
.funky-delivery-selector {
  /* Inherits container styles */
}

/* Retro toggle group */
.funky-toggle-group {
  /* Glass-morphism background on group */
}

/* Retro option button */
.funky-toggle-option {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--wp--preset--color--text-secondary);
}

.funky-toggle-option:hover {
  border-color: rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.15);
}

/* Active option - neon glow border */
.funky-toggle--active {
  border-color: var(--wp--preset--color--neon-cyan) !important;
  background: rgba(0, 255, 255, 0.08);
  color: var(--wp--preset--color--neon-cyan);
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.2);
}

.funky-toggle--active .wp-delivery-method__icon {
  color: var(--wp--preset--color--neon-cyan);
  filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.4));
}

.funky-toggle--active .wp-delivery-method__label {
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.3);
}
```

### CSS Variables Used

- `--wp--preset--spacing--20` (8px) - icon/label gap
- `--wp--preset--spacing--30` (12px) - button padding vertical, toggle gap
- `--wp--preset--spacing--40` (16px) - container gap
- `--wp--preset--spacing--50` (24px) - button padding horizontal
- `--wp--preset--color--border` - default button border
- `--wp--preset--color--surface` - button background
- `--wp--preset--color--primary` - active border/background
- `--wp--preset--color--primary-foreground` - active text
- `--wp--preset--color--text-secondary` - description, inactive text
- `--wp--preset--color--neon-cyan` - retro active glow

---

## Accessibility

### WCAG 2.1 AA Compliance

**Keyboard Navigation:**
- Both option buttons focusable via Tab
- Activatable via Enter or Space
- `type="button"` prevents form submission

**ARIA Recommendations:**
```tsx
{/* Enhanced accessibility */}
<div 
  className="wp-checkout-toggle-group" 
  role="radiogroup" 
  aria-label="Delivery method"
>
  <button
    role="radio"
    aria-checked={method === 'ship'}
    onClick={() => setMethod('ship')}
    className={shipClasses}
    type="button"
  >
    <Truck size={20} aria-hidden="true" />
    <span>Ship</span>
  </button>

  <button
    role="radio"
    aria-checked={method === 'pickup'}
    onClick={() => setMethod('pickup')}
    className={pickupClasses}
    type="button"
  >
    <Store size={20} aria-hidden="true" />
    <span>Pickup</span>
  </button>
</div>
```

**Visual Indicators:**
- Active state has distinct border, background, and color changes
- Neon glow in retro theme provides additional visual emphasis
- Icons reinforce meaning (not sole indicator)

**Color Contrast:**
- Active text on active background: 4.5:1 minimum (AA)
- Inactive text: 4.5:1 minimum (AA)
- Neon glow is decorative enhancement

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Move focus between options |
| `Enter` | Select focused option |
| `Space` | Select focused option |

---

## Dark Mode

All styles support dark mode via CSS variables. No component changes needed.

**Key dark mode features:**
- Glass-morphism option buttons
- Neon cyan glow border on active option
- Neon cyan icon glow
- Neon text shadow on active label

---

## Responsive Behavior

**Mobile (< 480px):**
- Buttons stack vertically or fill container width
- Touch-friendly sizing (44px minimum height)

**Tablet+ (>= 480px):**
- Horizontal button row
- Buttons sized to content

```css
@media (max-width: 479px) {
  .wp-checkout-toggle-group {
    flex-direction: column;
  }
  
  .wp-checkout-toggle-option {
    justify-content: center;
  }
}
```

---

## Common Patterns

### Pattern 1: Conditional Content Based on Method

```tsx
const [method, setMethod] = useState('ship');

<CheckoutStep number={2} title="Delivery">
  <DeliveryMethodSelector method={method} setMethod={setMethod} />
  
  {method === 'ship' && (
    <ShippingAddressForm
      useSameBilling={useSameBilling}
      onToggleSameBilling={setUseSameBilling}
    />
  )}
  
  {method === 'pickup' && (
    <PickupLocationSelect />
  )}
</CheckoutStep>
```

### Pattern 2: With Shipping Rate Display

```tsx
<DeliveryMethodSelector method={method} setMethod={setMethod} />

{method === 'ship' && (
  <div className="wp-shipping-rates">
    <label>
      <input type="radio" name="rate" value="standard" />
      Standard Shipping - $5.99 (5-7 days)
    </label>
    <label>
      <input type="radio" name="rate" value="express" />
      Express Shipping - $12.99 (2-3 days)
    </label>
  </div>
)}
```

---

## Common Mistakes

### Mistake 1: Uncontrolled usage

```tsx
// WRONG - no state management
<DeliveryMethodSelector />
```

**Correct:**
```tsx
const [method, setMethod] = useState('ship');
<DeliveryMethodSelector method={method} setMethod={setMethod} />
```

### Mistake 2: Using non-string method values

```tsx
// WRONG - boolean or number
<DeliveryMethodSelector method={true} setMethod={...} />
```

**Correct:** Always use string values `'ship'` or `'pickup'`.

### Mistake 3: Missing type="button"

The component correctly uses `type="button"` on both buttons. Without this, buttons inside a `<form>` would trigger form submission.

---

## Testing Checklist

- [ ] "Ship" option selected by default (when `method='ship'`)
- [ ] Clicking "Pickup" switches active state
- [ ] Clicking "Ship" switches back
- [ ] Active option has distinct visual styling
- [ ] Icons render correctly (Truck, Store)
- [ ] Description text displays
- [ ] `setMethod` callback fires with correct value
- [ ] Dark mode retro styling (neon glow)
- [ ] Keyboard navigation (Tab between, Enter/Space to select)
- [ ] Mobile responsive layout
- [ ] Focus ring visible on buttons
- [ ] Buttons do not submit parent form

---

## Related Components

- **CheckoutStep** - `/guidelines/blocks/checkout/CheckoutStep.md`
- **ShippingAddressForm** - `/guidelines/blocks/checkout/ShippingAddressForm.md`
- **PickupLocationSelect** - `/src/app/components/blocks/checkout/PickupLocationSelect.tsx`
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
