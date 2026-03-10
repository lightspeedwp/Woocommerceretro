# Mobile Button Guidelines

**Category**: Mobile Design  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Overview

Buttons are critical interactive elements on mobile devices. Proper sizing, spacing, and layout ensure buttons are easy to tap and provide clear feedback on touch-based interfaces.

---

## Core Principles

### 1. Minimum Touch Target: 44×44px

**Standards:**
- **Apple iOS**: 44×44px minimum (iOS Human Interface Guidelines)
- **Android Material**: 48×48dp minimum
- **WCAG Level AAA**: 44×44px minimum

```tsx
// ✅ DO: Adequate touch target
<button className="min-h-[44px] px-6 py-3">
  Add to Cart
</button>

// ❌ DON'T: Too small
<button className="px-2 py-1 text-sm">
  Add to Cart
</button>
```

### 2. Font Size: 16px Minimum

Prevents iOS auto-zoom and ensures readability:

```tsx
// ✅ DO: 16px or larger
<button className="text-base">  {/* 16px */}
  Continue
</button>

// ❌ DON'T: Smaller than 16px
<button className="text-sm">  {/* 14px - too small */}
  Continue
</button>
```

### 3. Full Width on Mobile

Maximize touch target and visual prominence:

```tsx
// ✅ DO: Full width within container padding
<div className="px-4">  {/* Container padding */}
  <button className="w-full py-3">
    Add to Cart
  </button>
</div>

// Desktop: Auto width or max-width
<button className="w-full md:w-auto px-8 py-3">
  Add to Cart
</button>
```

---

## Button Sizing

### Size Variants

```tsx
// Small: 40px height (use sparingly on mobile)
<button className="min-h-[40px] px-4 py-2 text-sm">
  Small Button
</button>

// Medium (Default): 44px height
<button className="min-h-[44px] px-6 py-3 text-base">
  Medium Button
</button>

// Large: 48-52px height (recommended for primary actions)
<button className="min-h-[48px] px-8 py-3 text-base">
  Large Button
</button>

// Extra Large: 56px height (for prominent CTAs)
<button className="min-h-[56px] px-8 py-4 text-lg">
  Extra Large Button
</button>
```

### Fluid Button Heights with clamp()

```tsx
// Scales from 44px mobile to 52px desktop
<button className="px-6 py-[clamp(0.75rem,1.5vw,1rem)] text-base">
  Fluid Button
</button>

// CSS variable approach
<style>
  :root {
    --btn-padding-y: clamp(0.75rem, 1.5vw, 1rem);  /* 12px → 16px */
    --btn-padding-x: clamp(1.5rem, 3vw, 2rem);     /* 24px → 32px */
  }
  
  .btn {
    padding: var(--btn-padding-y) var(--btn-padding-x);
  }
</style>
```

---

## Mobile Layout Patterns

### Pattern 1: Full Width Mobile, Auto Desktop

```tsx
<button className="
  w-full               {/* Full width on mobile */}
  md:w-auto           {/* Auto width on desktop */}
  px-8 py-3
  text-base
  font-medium
">
  Continue Shopping
</button>
```

### Pattern 2: Full Width with Container Padding

```tsx
{/* Container provides padding */}
<div className="px-4 md:px-6">
  <button className="w-full min-h-[48px] py-3 text-base">
    Add to Cart
  </button>
</div>
```

### Pattern 3: Stacked Mobile, Horizontal Desktop

```tsx
<div className="
  flex
  flex-col              {/* Stack on mobile */}
  md:flex-row          {/* Horizontal on desktop */}
  gap-3                {/* 12px gap */}
">
  <button className="
    flex-1              {/* Equal width on desktop */}
    min-h-[48px]
    px-6 py-3
    bg-black text-white
  ">
    Checkout
  </button>
  
  <button className="
    flex-1
    min-h-[48px]
    px-6 py-3
    border-2 border-gray-900 text-gray-900
  ">
    Continue Shopping
  </button>
</div>
```

---

## Button Spacing

### Vertical Spacing (Mobile Stack)

```tsx
{/* Single button */}
<div className="mt-6">  {/* 24px top margin */}
  <button className="w-full">Submit</button>
</div>

{/* Multiple buttons */}
<div className="flex flex-col gap-3">  {/* 12px gap */}
  <button className="w-full">Primary Action</button>
  <button className="w-full">Secondary Action</button>
</div>

{/* Fluid spacing */}
<div className="flex flex-col gap-[clamp(0.75rem,1.5vw,1rem)]">
  <button className="w-full">Button 1</button>
  <button className="w-full">Button 2</button>
</div>
```

### Horizontal Spacing (Desktop)

```tsx
{/* Desktop: Side by side with 12px gap */}
<div className="flex flex-col md:flex-row gap-3">
  <button className="flex-1 md:flex-initial md:px-8">
    Primary
  </button>
  <button className="flex-1 md:flex-initial md:px-8">
    Secondary
  </button>
</div>

{/* Fixed gap on desktop */}
<div className="flex gap-4">  {/* 16px gap */}
  <button className="px-8 py-3">Cancel</button>
  <button className="px-8 py-3">Continue</button>
</div>
```

### Standard Button Group Spacing

**Recommended gaps:**

| Layout | Gap Size | Usage |
|--------|----------|-------|
| Vertical (mobile) | 12px (0.75rem) | Stacked primary + secondary |
| Horizontal (desktop) | 12px (0.75rem) | Related actions |
| Horizontal (desktop) | 16px (1rem) | Distinct actions |
| Form buttons | 16px (1rem) | Submit + cancel |

```tsx
// Standard patterns
const buttonGaps = {
  tight: '0.5rem',    // 8px - compact layouts
  default: '0.75rem', // 12px - most cases
  relaxed: '1rem',    // 16px - important actions
};

<div className="flex gap-3">  {/* 12px - default */}
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

---

## Button Padding

### Mobile Padding Guidelines

```tsx
// Minimum padding for 44px height with 16px font
<button className="px-6 py-3 text-base">
  {/* 
    px-6 = 24px horizontal padding
    py-3 = 12px vertical padding
    Total height: 12 + 16 + 12 = 40px (need min-h-[44px])
  */}
  Button Text
</button>

// Recommended: Add min-h to ensure 44px
<button className="min-h-[44px] px-6 py-3 text-base">
  Button Text
</button>
```

### Padding by Button Size

| Size | Height | Horizontal Padding | Vertical Padding | Font Size |
|------|--------|-------------------|------------------|-----------|
| **Small** | 40px | 16px (px-4) | 8px (py-2) | 14px (text-sm) |
| **Medium** | 44px | 24px (px-6) | 12px (py-3) | 16px (text-base) |
| **Large** | 48px | 32px (px-8) | 12px (py-3) | 16px (text-base) |
| **XL** | 56px | 32px (px-8) | 16px (py-4) | 18px (text-lg) |

### Icon + Text Padding

```tsx
// Icon with text
<button className="min-h-[44px] px-6 py-3 flex items-center justify-center gap-2">
  <ShoppingCart size={20} />
  <span>Add to Cart</span>
</button>

// Icon only (square)
<button className="w-11 h-11 flex items-center justify-center">
  <Heart size={20} />
</button>
```

---

## Button Text Sizing

### Mobile Font Sizes

```tsx
// Small button text (use sparingly)
<button className="text-sm">  {/* 14px */}
  Small Action
</button>

// Default button text (recommended)
<button className="text-base">  {/* 16px */}
  Add to Cart
</button>

// Large button text (primary CTAs)
<button className="text-lg">  {/* 18px */}
  Proceed to Checkout
</button>

// Extra large (hero CTAs)
<button className="text-xl">  {/* 20px */}
  Shop Now
</button>
```

### Font Weight

```tsx
// Regular weight (400) - secondary actions
<button className="font-normal">
  Cancel
</button>

// Medium weight (500) - default
<button className="font-medium">
  Continue
</button>

// Semibold (600) - primary actions
<button className="font-semibold">
  Add to Cart
</button>

// Bold (700) - urgent CTAs
<button className="font-bold">
  Buy Now
</button>
```

---

## Complete Button Examples

### Example 1: Primary Action Button

```tsx
<button className="
  w-full                    {/* Full width on mobile */}
  md:w-auto                {/* Auto width on desktop */}
  min-h-[48px]             {/* Minimum 48px height */}
  px-8 py-3                {/* 32px horizontal, 12px vertical */}
  text-base                {/* 16px font size */}
  font-semibold            {/* 600 weight */}
  bg-black                 {/* Black background */}
  text-white               {/* White text */}
  rounded-lg               {/* 8px border radius */}
  hover:bg-gray-800        {/* Hover state */}
  active:scale-98          {/* Active press effect */}
  transition-all           {/* Smooth transitions */}
  disabled:bg-gray-300     {/* Disabled state */}
  disabled:cursor-not-allowed
">
  Add to Cart
</button>
```

### Example 2: Secondary Button

```tsx
<button className="
  w-full
  md:w-auto
  min-h-[48px]
  px-8 py-3
  text-base
  font-medium
  bg-white
  text-gray-900
  border-2 border-gray-900
  rounded-lg
  hover:bg-gray-100
  active:scale-98
  transition-all
">
  Continue Shopping
</button>
```

### Example 3: Ghost/Text Button

```tsx
<button className="
  min-h-[44px]
  px-6 py-3
  text-base
  font-medium
  text-gray-900
  hover:bg-gray-100
  rounded-lg
  transition-colors
">
  View Details
</button>
```

### Example 4: Icon Button

```tsx
<button
  aria-label="Add to wishlist"
  className="
    w-11 h-11              {/* 44px square */}
    flex items-center justify-center
    bg-white
    border border-gray-200
    rounded-full
    hover:bg-gray-50
    active:scale-95
    transition-all
  "
>
  <Heart size={20} />
</button>
```

### Example 5: Loading State

```tsx
function SubmitButton({ isLoading }) {
  return (
    <button
      disabled={isLoading}
      className="
        w-full
        min-h-[48px]
        px-8 py-3
        text-base
        font-semibold
        bg-black text-white
        rounded-lg
        disabled:bg-gray-300
        transition-all
      "
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" size={20} />
          Processing...
        </span>
      ) : (
        'Complete Purchase'
      )}
    </button>
  );
}
```

---

## Button Group Patterns

### Pattern 1: Primary + Secondary (Mobile Stack)

```tsx
<div className="flex flex-col gap-3">
  {/* Primary action */}
  <button className="
    w-full min-h-[48px] px-6 py-3
    bg-black text-white font-semibold
  ">
    Checkout
  </button>
  
  {/* Secondary action */}
  <button className="
    w-full min-h-[48px] px-6 py-3
    border-2 border-gray-900 text-gray-900 font-medium
  ">
    Continue Shopping
  </button>
</div>
```

### Pattern 2: Equal Width Desktop

```tsx
<div className="flex flex-col md:flex-row gap-3">
  <button className="flex-1 min-h-[48px] px-6 py-3 bg-black text-white">
    Save Draft
  </button>
  <button className="flex-1 min-h-[48px] px-6 py-3 bg-purple-600 text-white">
    Publish
  </button>
</div>
```

### Pattern 3: Left/Right Aligned Desktop

```tsx
<div className="flex flex-col md:flex-row md:justify-between gap-3">
  <button className="w-full md:w-auto px-8 py-3 border-2 border-gray-900">
    Cancel
  </button>
  <button className="w-full md:w-auto px-8 py-3 bg-black text-white">
    Continue
  </button>
</div>
```

### Pattern 4: Quantity + Add to Cart

```tsx
<div className="flex gap-3">
  {/* Quantity selector */}
  <div className="flex-shrink-0">
    <QuantitySelector value={qty} onChange={setQty} size="small" />
  </div>
  
  {/* Add to cart button (flexible width) */}
  <button className="flex-1 min-h-[44px] px-6 py-3 bg-black text-white">
    Add to Cart
  </button>
</div>
```

---

## Container Padding Standards

### Standard Container Padding

```tsx
// Mobile: 16px, Desktop: 24-48px
<div className="px-4 md:px-6 lg:px-8">
  <button className="w-full">Button</button>
</div>

// Fluid padding with clamp()
<div className="px-[clamp(1rem,3vw,3rem)]">
  <button className="w-full">Button</button>
</div>
```

### Form Container Example

```tsx
<form className="max-w-2xl mx-auto px-4 md:px-6 py-8">
  {/* Form fields */}
  <div className="space-y-4">
    <input type="email" />
    <input type="password" />
  </div>
  
  {/* Button at bottom */}
  <div className="mt-6">
    <button className="w-full min-h-[48px] py-3">
      Sign In
    </button>
  </div>
</form>
```

---

## Accessibility Requirements

### ARIA Labels

```tsx
// Icon-only buttons need aria-label
<button aria-label="Add to wishlist">
  <Heart size={20} />
</button>

// Loading state announcement
<button aria-busy={isLoading}>
  {isLoading ? 'Loading...' : 'Submit'}
</button>

// Disabled state
<button disabled aria-disabled="true">
  Out of Stock
</button>
```

### Focus States

```tsx
<button className="
  focus:outline-none
  focus:ring-2
  focus:ring-purple-600
  focus:ring-offset-2
  rounded-lg
">
  Button Text
</button>
```

### Keyboard Support

- **Enter/Space**: Activate button
- **Tab**: Navigate between buttons
- **Shift + Tab**: Navigate backwards

---

## Common Button Variants

### Variant 1: Solid (Default)

```tsx
<button className="bg-black text-white hover:bg-gray-800">
  Solid Button
</button>
```

### Variant 2: Outline

```tsx
<button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100">
  Outline Button
</button>
```

### Variant 3: Ghost

```tsx
<button className="text-gray-900 hover:bg-gray-100">
  Ghost Button
</button>
```

### Variant 4: Link

```tsx
<button className="text-purple-600 hover:text-purple-700 underline">
  Link Button
</button>
```

---

## Reusable Button Component

```tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  isLoading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-lg transition-all disabled:cursor-not-allowed';
  
  const sizeClasses = {
    small: 'min-h-[40px] px-4 py-2 text-sm',
    medium: 'min-h-[44px] px-6 py-3 text-base',
    large: 'min-h-[48px] px-8 py-3 text-base',
  };
  
  const variantClasses = {
    primary: 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-300',
    secondary: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400',
    ghost: 'text-gray-900 hover:bg-gray-100 disabled:text-gray-400',
  };
  
  const widthClass = fullWidth ? 'w-full' : 'w-full md:w-auto';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${widthClass}
        ${className}
      `}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <Loader2 className="animate-spin" size={16} />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}

// Usage
<Button variant="primary" size="large" fullWidth>
  Add to Cart
</Button>
```

---

## Testing Checklist

- [ ] Minimum height of 44px
- [ ] Font size of 16px or larger
- [ ] Full width on mobile (within container padding)
- [ ] Adequate horizontal padding (24px minimum)
- [ ] Proper spacing between stacked buttons (12px)
- [ ] Focus states visible
- [ ] ARIA labels on icon-only buttons
- [ ] Loading states work correctly
- [ ] Disabled states are clear
- [ ] Works on touch devices
- [ ] Button text doesn't truncate
- [ ] Adequate contrast (WCAG AA)

---

## Common Mistakes

❌ Buttons smaller than 44×44px (hard to tap)  
❌ Font size smaller than 16px (iOS auto-zoom)  
❌ Insufficient padding (cramped appearance)  
❌ Not full width on mobile (small touch target)  
❌ Too much spacing between button groups (> 24px)  
❌ Missing focus states (poor keyboard navigation)  
❌ No ARIA labels on icon buttons  
❌ Missing loading states  
❌ No disabled state styling  
❌ Poor color contrast (fails WCAG)

---

## Resources

- [iOS Human Interface Guidelines - Buttons](https://developer.apple.com/design/human-interface-guidelines/components/menus-and-actions/buttons)
- [Material Design - Buttons](https://m3.material.io/components/buttons)
- [WCAG 2.1 - Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
