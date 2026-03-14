# OrderSummary

**Type:** Block Component  
**Category:** WooCommerce Checkout  
**Status:** Complete  
**Last Updated:** 2026-03-12

---

## 📋 Overview

The `OrderSummary` component displays the checkout sidebar with cart items (images, names, quantities, prices), cost breakdown (subtotal, discounts, shipping, tax), total, and coupon input. It's the primary conversion element that summarizes the entire order before final submission.

---

## 🎯 Purpose

Use `OrderSummary` to:
- Display all cart items in checkout sidebar
- Show order cost breakdown (subtotal → tax → total)
- Allow users to apply discount coupons
- Provide "Edit cart" quick link
- Display prominent total price (conversion focus)

**When to use:**
- Checkout pages (sticky right sidebar)
- Order review screens
- Account order history
- Email order confirmations

---

## 📐 Structure

```
OrderSummary
├── Header
│   ├── Title ("Order summary")
│   └── "Edit cart" link
├── Item List
│   └── Each Item
│       ├── Thumbnail image + quantity badge
│       └── Details (name, price, meta)
├── Totals Section
│   ├── Subtotal row
│   ├── Discount row (conditional)
│   ├── Shipping row
│   ├── Tax row
│   ├── Divider
│   └── Total row (prominent)
└── Coupon Input
```

**File Location:** `/src/app/components/blocks/checkout/OrderSummary.tsx`  
**Dependencies:** 
- `CartContext` - provides `items`, `getCartTotal()`, `getFinalTotal()`, etc.
- `CouponInput` - coupon application component
- `ImageWithFallback` - product thumbnails

**CSS Location:** 
- `/src/styles/blocks/checkout/checkout.css`
- `/src/styles/sections/cart-checkout-funky.css` (funky theme)

---

## 💻 Implementation

### **Props**

The component has **no props** - it reads cart state from `CartContext`.

### **Code Example**

```tsx
import { OrderSummary } from '@/components/blocks/checkout/OrderSummary';

// Basic usage (reads from CartContext)
<OrderSummary />

// Typical checkout layout
<div className="checkout-layout">
  <div className="checkout-layout__main">
    <CheckoutSteps />
  </div>
  <aside className="checkout-layout__sidebar">
    <OrderSummary />
  </aside>
</div>
```

### **CartContext Methods Used**

```tsx
const {
  items,              // CartItem[] - all cart items
  getCartTotal,       // () => number - subtotal
  getShippingCost,    // () => number - shipping fee
  getDiscount,        // () => number - discount amount
  getFinalTotal,      // () => number - final total
  appliedCoupon,      // Coupon | null - active coupon
} = useCart();
```

---

## 🎨 Styling

### **WordPress BEM Classes**

```css
/* Container */
.wp-order-summary {
  background-color: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--custom--border-radius--lg);
  padding: var(--wp--preset--spacing--60);
}

/* Empty state */
.wp-order-summary--empty {
  text-align: center;
  padding: var(--wp--preset--spacing--80);
}

/* Header */
.wp-order-summary__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--wp--preset--spacing--40);
}

.wp-order-summary__title {
  font-size: var(--wp--preset--font-size--500);
  margin: 0;
}

.wp-order-summary__edit-link {
  color: var(--wp--preset--color--primary);
  font-size: var(--wp--preset--font-size--200);
  text-decoration: underline;
}

/* Items list */
.wp-order-summary__items {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
  margin-bottom: var(--wp--preset--spacing--50);
}

/* Individual item */
.wp-order-summary__item {
  display: flex;
  gap: var(--wp--preset--spacing--30);
}

/* Item image wrapper (relative positioning for badge) */
.wp-order-summary__item-image-wrapper {
  position: relative;
  flex-shrink: 0;
}

.wp-order-summary__item-image {
  width: 64px;
  height: 64px;
  border-radius: var(--wp--custom--border-radius--sm);
  overflow: hidden;
}

.wp-order-summary__item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Quantity badge */
.wp-order-summary__item-quantity {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--wp--preset--font-size--100);
  font-weight: var(--wp--preset--font-weight--bold);
}

/* Item details */
.wp-order-summary__item-details {
  flex: 1;
  min-width: 0;
}

.wp-order-summary__item-header {
  display: flex;
  justify-content: space-between;
  gap: var(--wp--preset--spacing--20);
}

.wp-order-summary__item-name {
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--foreground);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.wp-order-summary__item-price {
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
}

.wp-order-summary__item-meta {
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--muted-foreground);
  margin: 0;
}

/* Totals section */
.wp-order-summary__totals {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--30);
  margin-bottom: var(--wp--preset--spacing--50);
}

/* Individual total row */
.wp-order-summary__row {
  display: flex;
  justify-content: space-between;
  font-size: var(--wp--preset--font-size--300);
}

.wp-order-summary__label {
  color: var(--wp--preset--color--muted-foreground);
}

.wp-order-summary__value {
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--foreground);
}

/* Discount row (green text) */
.wp-order-summary__row--discount .wp-order-summary__value {
  color: var(--wp--preset--color--success);
}

/* Divider */
.wp-order-summary__divider {
  height: 1px;
  background-color: var(--wp--preset--color--border);
  margin: var(--wp--preset--spacing--20) 0;
}

/* Total row (prominent) */
.wp-order-summary__row--total {
  font-size: var(--wp--preset--font-size--500);
}

.wp-order-summary__row--total .wp-order-summary__label {
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
}

.wp-order-summary__value--large {
  font-size: var(--wp--preset--font-size--600);
  font-weight: var(--wp--preset--font-weight--bold);
}

/* Coupon section */
.wp-order-summary__coupon {
  margin-top: var(--wp--preset--spacing--40);
}
```

### **Funky/Retro Theme Enhancements**

```css
/* Glass panel background */
.dark .funky-order-summary {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  box-shadow: 
    0 0 20px rgba(0, 255, 255, 0.1),
    inset 0 0 30px rgba(0, 255, 255, 0.02);
}

/* Neon cyan title glow */
.dark .funky-title {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
}

/* Neon edit link */
.dark .funky-link:hover {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.6);
}

/* Item hover glow */
.dark .funky-summary-item:hover {
  background: rgba(0, 255, 255, 0.05);
  border-radius: var(--wp--custom--border-radius--sm);
  transition: background 0.2s ease;
}

/* Quantity badge - neon gradient */
.dark .funky-badge {
  background: linear-gradient(135deg, 
    var(--wp--preset--color--neon-pink), 
    var(--wp--preset--color--neon-cyan)
  );
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
}

/* Gradient divider */
.dark .funky-divider {
  background: linear-gradient(90deg, 
    transparent, 
    rgba(0, 255, 255, 0.3), 
    transparent
  );
  height: 2px;
}

/* Total row - gradient text */
.dark .funky-total-row .funky-price {
  background: linear-gradient(135deg, 
    var(--wp--preset--color--neon-pink), 
    var(--wp--preset--color--neon-cyan)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));
}
```

### **CSS Variables Used**

- `--wp--preset--spacing--20` (8px) - divider margin, header gap
- `--wp--preset--spacing--30` (12px) - item gap, totals gap
- `--wp--preset--spacing--40` (16px) - margins, coupon spacing
- `--wp--preset--spacing--50` (20px) - section spacing
- `--wp--preset--spacing--60` (24px) - container padding
- `--wp--preset--spacing--80` (32px) - empty state padding
- `--wp--preset--color--surface` - container background
- `--wp--preset--color--border` - container border, divider
- `--wp--preset--color--primary` - quantity badge, links
- `--wp--preset--color--success` - discount amount (green)
- `--wp--preset--font-weight--medium` (500) - prices, labels
- `--wp--preset--font-weight--semibold` (600) - total label
- `--wp--preset--font-weight--bold` (700) - quantity, total value
- `--wp--custom--border-radius--sm` - item image
- `--wp--custom--border-radius--lg` - container
- `--wp--preset--color--neon-cyan` - funky title, badge, price
- `--wp--preset--color--neon-pink` - funky gradient accent

---

## ♿ Accessibility

### **WCAG 2.1 AA Compliance**

✅ **Semantic HTML:**
- Use `<aside>` for sidebar containing OrderSummary
- Proper heading hierarchy (h3 for "Order summary")
- List semantics for items:
  ```tsx
  <ul className="wp-order-summary__items" aria-label="Cart items">
    <li className="wp-order-summary__item">...</li>
  </ul>
  ```

✅ **Visual Indicators:**
- Total price is larger and bolder (prominent conversion focus)
- Discount in green color (+ numerical "-" prefix)
- Quantity badge overlays thumbnail (clear visual count)

✅ **Color Contrast:**
- Item names: 7:1 contrast (AAA)
- Prices: 7:1 contrast (AAA)
- Total price: 7:1 contrast + size differentiation

✅ **Screen Reader Support:**
- Add `aria-label` for price formatting:
  ```tsx
  <span aria-label="Total: 149 pounds 99 pence">
    GBP 149.99
  </span>
  ```

### **Empty State Accessibility**

```tsx
{items.length === 0 && (
  <div role="status" aria-live="polite">
    <Typography variant="h3">Your cart is empty</Typography>
    <Button to="/shop">Return to Shop</Button>
  </div>
)}
```

---

## 🌙 Dark Mode

All styles support dark mode via CSS variables.

**Key dark mode features:**
- Glass panel background with blur effect
- Neon cyan title glow
- Gradient quantity badges (pink → cyan)
- Gradient total price text
- Gradient divider line
- Item hover glow effect

---

## 📱 Responsive Behavior

**Mobile (< 768px):**
- Full-width layout (order summary below checkout steps)
- Reduced padding (--spacing--40 instead of --spacing--60)
- Smaller item thumbnails (48px instead of 64px)

**Tablet (768px - 1024px):**
- Sidebar layout (30% width)
- Standard padding

**Desktop (≥ 1024px):**
- Sticky sidebar (remains visible while scrolling)
- Full padding and spacing

**Sticky Sidebar CSS:**

```css
@media (min-width: 1024px) {
  .checkout-layout__sidebar {
    position: sticky;
    top: var(--wp--preset--spacing--80);
    align-self: start;
  }
}
```

---

## 🔧 Common Patterns

### **Pattern 1: Sticky Sidebar Layout**

```tsx
<div className="checkout-layout">
  <div className="checkout-layout__main">
    <CheckoutStep number={1} title="Contact">
      <ContactForm />
    </CheckoutStep>
    {/* More steps */}
  </div>
  
  <aside className="checkout-layout__sidebar">
    <OrderSummary /> {/* Sticks to viewport on scroll */}
  </aside>
</div>
```

### **Pattern 2: Collapsible Summary (Mobile)**

```tsx
const [showSummary, setShowSummary] = useState(false);

// Mobile: collapsed by default, toggle button
<div className="mobile-order-summary">
  <button 
    onClick={() => setShowSummary(!showSummary)}
    aria-expanded={showSummary}
  >
    Show order summary ({items.length} items) - GBP {total.toFixed(2)}
  </button>
  
  {showSummary && <OrderSummary />}
</div>
```

### **Pattern 3: Order Confirmation Page**

```tsx
// Read-only summary (no coupon input, no edit link)
<OrderSummary 
  isReadOnly={true}
  orderId="12345"
  orderDate="Mar 12, 2026"
/>
```

### **Pattern 4: Loading State**

```tsx
const { items, isLoading } = useCart();

if (isLoading) {
  return (
    <div className="wp-order-summary">
      <Skeleton height={200} />
    </div>
  );
}

return <OrderSummary />;
```

---

## ⚠️ Common Mistakes

### ❌ **Mistake 1: Not handling empty cart**

```tsx
// WRONG - crashes if cart is empty
const total = items.reduce((sum, item) => sum + item.price, 0);
```

**✅ Correct:**
```tsx
if (items.length === 0) {
  return <EmptyState />;
}

const total = items.reduce(...);
```

---

### ❌ **Mistake 2: Missing price formatting**

```tsx
// WRONG - inconsistent decimal places
<span>{price}</span> // Could be "14.5" or "14.50001"
```

**✅ Correct:**
```tsx
<span>GBP {price.toFixed(2)}</span> // Always "14.50"
```

---

### ❌ **Mistake 3: Not showing conditional rows**

```tsx
// WRONG - always shows discount/shipping even if $0
<div>
  <span>Discount</span>
  <span>GBP 0.00</span> {/* Confusing! */}
</div>
```

**✅ Correct:**
```tsx
{discount > 0 && (
  <div>
    <span>Discount ({couponCode})</span>
    <span>-GBP {discount.toFixed(2)}</span>
  </div>
)}
```

---

### ❌ **Mistake 4: Poor mobile sidebar**

```tsx
// WRONG - sticky sidebar on mobile (overlaps content)
.checkout-layout__sidebar {
  position: sticky; /* Applied to all screen sizes! */
}
```

**✅ Correct:**
```css
@media (min-width: 1024px) {
  .checkout-layout__sidebar {
    position: sticky; /* Only on desktop */
  }
}
```

---

## 🧪 Testing Checklist

- [ ] Displays all cart items with images and quantities
- [ ] Quantity badges show correct numbers
- [ ] Item prices display with 2 decimal places
- [ ] Subtotal calculates correctly
- [ ] Discount row only shows if coupon applied
- [ ] Shipping row shows "Free" when $0
- [ ] Tax calculates correctly
- [ ] Total is bold and prominent
- [ ] "Edit cart" link navigates to cart page
- [ ] Empty state shows when cart has 0 items
- [ ] Coupon input component renders
- [ ] Dark mode glass panel and neon glows work
- [ ] Mobile layout stacks below checkout steps
- [ ] Desktop layout is sticky sidebar
- [ ] Long product names truncate with ellipsis
- [ ] Thumbnail images load correctly

---

## 🔗 Related Components

- **CouponInput** - `/guidelines/blocks/checkout/CouponInput.md` (TODO)
- **CartContext** - `/docs/api-reference.md` (context API)
- **ImageWithFallback** - `/src/app/components/figma/ImageWithFallback.tsx`
- **CheckoutLayout** - `/guidelines/parts/CheckoutLayout.md`

---

## 📚 Additional Resources

- **WooCommerce Order Summary:** [Template Reference](https://woocommerce.com/document/template-structure/)
- **E-commerce UX:** [Checkout Best Practices](https://baymard.com/blog/checkout-flow-average-form-fields)
- **Accessibility:** [WCAG Price Formatting](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)

---

## 📝 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-12 | Initial guideline created - comprehensive order summary with funky theme |

---

**Status:** ✅ Complete  
**Next Review:** 2026-06-12  
**Maintainer:** Development Team
