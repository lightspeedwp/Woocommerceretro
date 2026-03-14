# CheckoutStep

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-12

---

## 📋 Overview

The `CheckoutStep` component is a layout wrapper for individual steps in a multi-step checkout flow. It provides collapsible sections with step indicators, completion states, and smooth animations for a polished user experience.

---

## 🎯 Purpose

Use `CheckoutStep` to structure checkout processes into logical, manageable steps. It handles:
- Visual step progression (numbered indicators)
- Completion state tracking (checkmark indicators)
- Collapsible content sections
- Keyboard accessibility for expand/collapse

**When to use:**
- Multi-step checkout flows (contact → shipping → payment → review)
- Complex forms requiring progressive disclosure
- Account setup wizards
- Order tracking timelines

---

## 📐 Structure

```
CheckoutStep
├── Indicator column (left side)
│   ├── Circle (number or checkmark icon)
│   └── Vertical connector line
└── Body column (right side)
    ├── Header (clickable if collapsible)
    │   ├── Title + completion summary
    │   └── Actions (custom content + chevron)
    └── Content (collapsible)
        └── Form fields or step content
```

**File Location:** `/src/app/components/blocks/checkout/CheckoutStep.tsx`  
**CSS Location:** 
- `/src/styles/blocks/checkout/checkout.css` (base styles)
- `/src/styles/blocks/woocommerce/checkout.css` (WooCommerce-specific)
- `/src/styles/sections/cart-checkout-funky.css` (funky/retro theme)

---

## 💻 Implementation

### **Props**

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | `number` | No | - | Step number (e.g., 1, 2, 3) - displayed in circle |
| `title` | `string` | **Yes** | - | Step heading (e.g., "Contact Information") |
| `children` | `React.ReactNode` | No | - | Step content (forms, text, etc.) |
| `isLast` | `boolean` | No | `false` | If true, hides vertical connector line |
| `headerRight` | `React.ReactNode` | No | - | Custom content in header (e.g., "Edit" link) |
| `isOpen` | `boolean` | No | `true` | Controls collapse state |
| `isCompleted` | `boolean` | No | `false` | Shows checkmark instead of number |
| `onToggle` | `() => void` | No | - | Click handler for expand/collapse (makes header clickable) |
| `className` | `string` | No | `''` | Additional CSS classes |

### **Code Example**

```tsx
import { CheckoutStep } from '@/components/blocks/checkout/CheckoutStep';

// Basic usage
<CheckoutStep 
  number={1} 
  title="Contact Information"
>
  <input type="email" placeholder="Email" />
</CheckoutStep>

// Collapsible step
<CheckoutStep
  number={2}
  title="Shipping Address"
  isOpen={isShippingOpen}
  onToggle={() => setShippingOpen(!isShippingOpen)}
>
  <ShippingAddressForm />
</CheckoutStep>

// Completed step
<CheckoutStep
  number={1}
  title="Contact Information"
  isCompleted={true}
  isOpen={false}
  onToggle={() => setContactOpen(!contactOpen)}
  headerRight={<button>Edit</button>}
>
  <p>john.doe@example.com</p>
</CheckoutStep>

// Last step (no connector)
<CheckoutStep
  number={4}
  title="Review Order"
  isLast={true}
>
  <OrderReview />
</CheckoutStep>
```

---

## 🎨 Styling

### **WordPress BEM Classes**

```css
/* Base step container */
.wp-checkout-step {
  display: flex;
  gap: var(--wp--preset--spacing--40);
}

/* Last step - hide connector */
.wp-checkout-step--last .wp-checkout-step__connector {
  display: none;
}

/* Indicator column */
.wp-checkout-step__indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Step circle (number/checkmark) */
.wp-checkout-step__circle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid var(--wp--preset--color--border);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Completed state - checkmark circle */
.wp-checkout-step__circle--completed {
  background-color: var(--wp--preset--color--primary);
  border-color: var(--wp--preset--color--primary);
}

/* Vertical connector line */
.wp-checkout-step__connector {
  width: 2px;
  background-color: var(--wp--preset--color--border);
  flex: 1;
  margin-top: var(--wp--preset--spacing--20);
}

/* Body column */
.wp-checkout-step__body {
  flex: 1;
  min-width: 0;
}

/* Header (title + actions) */
.wp-checkout-step__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--wp--preset--spacing--30);
}

/* Clickable header cursor */
.wp-checkout-step__header--clickable {
  cursor: pointer;
}

/* Title */
.wp-checkout-step__title {
  font-size: var(--wp--preset--font-size--400);
  margin: 0;
}

/* Content area (collapsible) */
.wp-checkout-step__content {
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.wp-checkout-step__content--open {
  max-height: 2000px;
  opacity: 1;
}

.wp-checkout-step__content--closed {
  max-height: 0;
  opacity: 0;
}

/* Chevron icon rotation */
.wp-checkout-step__chevron {
  transition: transform 0.3s ease;
}

.wp-checkout-step__chevron--open {
  transform: rotate(180deg);
}
```

### **Funky/Retro Theme Enhancements**

The funky theme adds neon accents and glow effects:

```css
/* Active step - neon cyan glow */
.dark .checkout-page .wp-checkout-step--open .wp-checkout-step__circle {
  border-color: var(--wp--preset--color--neon-cyan);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}

/* Step number - neon cyan */
.dark .checkout-page .wp-checkout-step__number {
  color: var(--wp--preset--color--neon-cyan);
}

/* Completed circle - gradient background */
.checkout-page .wp-checkout-step__circle--completed {
  background: linear-gradient(135deg, 
    var(--wp--preset--color--neon-pink), 
    var(--wp--preset--color--neon-cyan)
  );
  border-color: transparent;
}

.dark .checkout-page .wp-checkout-step__circle--completed {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
}

/* Connector gradient */
.dark .checkout-page .wp-checkout-step__connector {
  background: linear-gradient(180deg, 
    rgba(0, 255, 255, 0.3), 
    rgba(255, 255, 255, 0.05)
  );
}

/* Active title - neon cyan */
.dark .checkout-page .wp-checkout-step--open .wp-checkout-step__title {
  color: var(--wp--preset--color--neon-cyan);
}

/* Chevron - neon when open */
.checkout-page .wp-checkout-step__chevron--open {
  color: var(--wp--preset--color--neon-cyan);
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20` (8px) - connector margin
- `--wp--preset--spacing--30` (12px) - header margin
- `--wp--preset--spacing--40` (16px) - step gap
- `--wp--preset--spacing--60` (24px) - step gap (tablet+)
- `--wp--preset--color--border` - default circle/connector border
- `--wp--preset--color--primary` - completed circle background
- `--wp--preset--color--primary-foreground` - checkmark color
- `--wp--preset--font-size--400` (18px) - title size
- `--wp--preset--color--neon-cyan` - funky active state
- `--wp--preset--color--neon-pink` - funky gradient accent

---

## ♿ Accessibility

### **WCAG 2.1 AA Compliance**

✅ **Keyboard Navigation:**
- `onToggle` handler makes header focusable (`tabIndex={0}`)
- Enter and Space keys trigger expand/collapse
- Focus ring visible on clickable headers

✅ **ARIA Attributes:**
- `role="button"` on clickable headers
- Consider adding `aria-expanded` for screen readers:
  ```tsx
  aria-expanded={isOpen}
  ```

✅ **Visual Indicators:**
- Checkmark icon (✓) for completed steps
- Chevron rotation indicates collapse state
- "Completed" text summary for screen readers

✅ **Color Contrast:**
- Step number: 4.5:1 contrast (AA)
- Title text: 7:1 contrast (AAA)
- Neon cyan glow: decorative, not relied upon for meaning

### **Keyboard Shortcuts**

| Key | Action |
|-----|--------|
| `Tab` | Focus next/previous step header |
| `Enter` | Expand/collapse focused step |
| `Space` | Expand/collapse focused step |

### **Screen Reader Considerations**

```tsx
<CheckoutStep
  number={1}
  title="Contact Information"
  isCompleted={true}
  aria-label="Contact Information - Completed"
>
  {/* Add sr-only summary for screen readers */}
  <span className="screen-reader-text">
    Email: john.doe@example.com
  </span>
</CheckoutStep>
```

---

## 🌙 Dark Mode

All styles support dark mode via CSS variables. No component changes needed.

**Key dark mode features:**
- Neon cyan glow on active steps
- Gradient connector lines (cyan → transparent)
- Enhanced glow on completed circles
- Neon cyan title color for active steps

**Implementation:**
```css
.dark .checkout-page .wp-checkout-step--open .wp-checkout-step__circle {
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}
```

---

## 📱 Responsive Behavior

**Mobile (< 768px):**
- Step gap: 16px (`--wp--preset--spacing--40`)
- Indicator width: 32px (2rem)
- Compact spacing for small screens

**Tablet+ (≥ 768px):**
- Step gap: 24px (`--wp--preset--spacing--60`)
- Indicator width: 40px (2.5rem)
- More breathing room for larger screens

**No horizontal scroll:**
- `min-width: 0` on body ensures long titles wrap

---

## 🔧 Common Patterns

### **Pattern 1: Sequential Checkout Steps**

```tsx
const [currentStep, setCurrentStep] = useState(1);

<CheckoutStep
  number={1}
  title="Contact Information"
  isCompleted={currentStep > 1}
  isOpen={currentStep === 1}
  onToggle={() => setCurrentStep(1)}
>
  <ContactForm onComplete={() => setCurrentStep(2)} />
</CheckoutStep>

<CheckoutStep
  number={2}
  title="Shipping Address"
  isCompleted={currentStep > 2}
  isOpen={currentStep === 2}
  onToggle={() => setCurrentStep(2)}
>
  <ShippingForm onComplete={() => setCurrentStep(3)} />
</CheckoutStep>

<CheckoutStep
  number={3}
  title="Payment Method"
  isOpen={currentStep === 3}
  isLast={true}
>
  <PaymentForm />
</CheckoutStep>
```

### **Pattern 2: All Steps Expanded**

```tsx
// Non-collapsible steps (no onToggle)
<CheckoutStep number={1} title="Contact Information">
  <ContactForm />
</CheckoutStep>

<CheckoutStep number={2} title="Shipping Address">
  <ShippingForm />
</CheckoutStep>

<CheckoutStep number={3} title="Payment Method" isLast={true}>
  <PaymentForm />
</CheckoutStep>
```

### **Pattern 3: Edit Link on Completed Steps**

```tsx
<CheckoutStep
  number={1}
  title="Contact Information"
  isCompleted={true}
  isOpen={false}
  onToggle={() => setEditingContact(true)}
  headerRight={
    <button 
      className="wp-link-button"
      onClick={(e) => {
        e.stopPropagation(); // Prevent toggle
        setEditingContact(true);
      }}
    >
      Edit
    </button>
  }
>
  <div className="wp-checkout-step__summary">
    <p>john.doe@example.com</p>
    <p>+1 (555) 123-4567</p>
  </div>
</CheckoutStep>
```

### **Pattern 4: Timeline View (Order Tracking)**

```tsx
// Read-only timeline (no onToggle)
<CheckoutStep
  number={1}
  title="Order Placed"
  isCompleted={true}
  headerRight={<time>Mar 10, 2026</time>}
>
  <p>Order #12345 confirmed</p>
</CheckoutStep>

<CheckoutStep
  number={2}
  title="Processing"
  isCompleted={true}
  headerRight={<time>Mar 11, 2026</time>}
>
  <p>Payment received, preparing shipment</p>
</CheckoutStep>

<CheckoutStep
  number={3}
  title="Shipped"
  headerRight={<span className="badge">In Transit</span>}
  isLast={true}
>
  <p>Tracking #: 1Z999AA10123456784</p>
</CheckoutStep>
```

---

## ⚠️ Common Mistakes

### ❌ **Mistake 1: Missing `isLast` on final step**

```tsx
// WRONG - connector line shows on last step
<CheckoutStep number={3} title="Review Order">
  <OrderReview />
</CheckoutStep>
```

**✅ Correct:**
```tsx
<CheckoutStep number={3} title="Review Order" isLast={true}>
  <OrderReview />
</CheckoutStep>
```

---

### ❌ **Mistake 2: Using `isCompleted` without `onToggle`**

```tsx
// WRONG - user can't re-edit completed step
<CheckoutStep 
  number={1} 
  title="Contact" 
  isCompleted={true}
  isOpen={false}
>
  {/* User stuck - can't expand to edit */}
</CheckoutStep>
```

**✅ Correct:**
```tsx
<CheckoutStep
  number={1}
  title="Contact"
  isCompleted={true}
  isOpen={false}
  onToggle={() => setContactOpen(true)}
  headerRight={<button>Edit</button>}
>
  {/* User can click header or Edit to expand */}
</CheckoutStep>
```

---

### ❌ **Mistake 3: Forgetting keyboard handlers**

The component handles this automatically! The `handleKeyDown` function already listens for Enter and Space keys when `onToggle` is provided.

---

### ❌ **Mistake 4: Poor content structure**

```tsx
// WRONG - long content with no scrolling
<CheckoutStep title="Shipping">
  {/* 50 address fields with no internal scrolling */}
</CheckoutStep>
```

**✅ Correct:**
```tsx
<CheckoutStep title="Shipping">
  <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
    {/* Scrollable content area */}
  </div>
</CheckoutStep>
```

---

## 🧪 Testing Checklist

- [ ] Step numbers display correctly (1, 2, 3...)
- [ ] Checkmark icon shows when `isCompleted={true}`
- [ ] Vertical connector hides on last step (`isLast={true}`)
- [ ] Clicking header toggles collapse (when `onToggle` provided)
- [ ] Keyboard (Enter/Space) toggles collapse
- [ ] Chevron rotates on expand/collapse
- [ ] "Completed" summary text shows when step collapsed
- [ ] Custom `headerRight` content renders correctly
- [ ] Content animates smoothly (max-height transition)
- [ ] Dark mode neon glows display correctly
- [ ] Mobile layout (narrow screens) works
- [ ] Focus ring visible on clickable headers
- [ ] No horizontal scroll on long titles

---

## 🔗 Related Components

- **PaymentMethods** - `/guidelines/blocks/checkout/PaymentMethods.md` (TODO)
- **ShippingAddressForm** - `/guidelines/blocks/checkout/ShippingAddressForm.md` (TODO)
- **OrderSummary** - `/guidelines/blocks/checkout/OrderSummary.md` (TODO)
- **CheckoutLayout** - `/guidelines/parts/CheckoutLayout.md` (exists)

---

## 📚 Additional Resources

- **WooCommerce Checkout Blocks:** [Block Reference](https://github.com/woocommerce/woocommerce-blocks)
- **Figma Design:** PlayPocket Checkout Flows (internal)
- **Accessibility:** [WCAG 2.1 AA Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-12 | Initial guideline created - comprehensive documentation with funky theme support |

---

**Status:** ✅ Complete  
**Next Review:** 2026-06-12  
**Maintainer:** Development Team
