# Button Block Component

**Component Type:** Block  
**WordPress Equivalent:** `core/button`  
**Category:** Design  
**Status:** ✅ Production Ready

---

## Overview

Enhanced button component that extends ShadCN Button with WooCommerce-specific features and WordPress block parity. Supports 8 visual variants, multiple sizes, icons, loading states, and full accessibility.

---

## Quick Start

```tsx
import { Button } from '../components/blocks/design';

// Basic button
<Button variant="primary" size="lg">
  Click Me
</Button>

// With link
<Button variant="cta" to="/shop">
  Shop Now
</Button>

// With icon
<Button variant="outline" icon={<ShoppingCart />}>
  Add to Cart
</Button>
```

---

## Variants

### **CTA (Call-to-Action)**
```tsx
<Button variant="cta" size="lg" to="/shop">
  Shop All Products
</Button>
```
- **Use Case:** High-impact hero sections, landing pages, primary conversions
- **Style:** Gradient background with elevated shadow
- **Colors:** Uses `--wp--preset--color--primary` gradient
- **When to Use:** Main CTAs that need maximum visual impact

---

### **Default / Primary**
```tsx
<Button variant="default" size="default">
  Get Started
</Button>
```
- **Use Case:** Standard primary actions
- **Style:** Filled with primary color
- **When to Use:** Main actions, standard CTAs

---

### **Outline** ✨ **RECOMMENDED FOR SECONDARY ACTIONS**
```tsx
<Button variant="outline" to="/learn-more">
  Learn More
</Button>
```
- **Use Case:** Secondary CTAs, alternative actions
- **Style:** **2px border, transparent background**
- **Hover:** Inverts to filled button
- **When to Use:** Pair with primary buttons for secondary actions

---

### **Secondary**
```tsx
<Button variant="secondary">
  View Details
</Button>
```
- **Use Case:** Supporting actions
- **Style:** Gray filled background
- **When to Use:** Less important actions

---

### **Ghost**
```tsx
<Button variant="ghost">
  Cancel
</Button>
```
- **Use Case:** Tertiary actions, subtle interactions
- **Style:** Transparent, shows background on hover only
- **When to Use:** Navigation, dismissals, less important actions

---

### **Link**
```tsx
<Button variant="link" to="/terms">
  Terms & Conditions
</Button>
```
- **Use Case:** Inline text links
- **Style:** Text-only with underline on hover
- **When to Use:** Links that should look like text

---

### **Destructive**
```tsx
<Button variant="destructive" onClick={handleDelete}>
  Delete Account
</Button>
```
- **Use Case:** Dangerous/permanent actions
- **Style:** Red filled button
- **When to Use:** Delete, remove, irreversible actions

---

## Sizes

```tsx
<Button size="sm">Small</Button>      {/* h-8 px-3 py-1.5 */}
<Button size="default">Default</Button> {/* h-9 px-4 py-2 */}
<Button size="lg">Large</Button>      {/* h-10 px-6 py-3 */}
<Button size="icon"><X /></Button>    {/* size-9 */}
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'outline' \| 'cta' \| 'secondary' \| 'ghost' \| 'link' \| 'destructive'` | `'default'` | Visual style |
| `size` | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Button size |
| `to` | `string` | - | Internal route (React Router Link) |
| `href` | `string` | - | External URL (anchor tag) |
| `icon` | `ReactNode` | - | Icon element |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `loading` | `boolean` | `false` | Show loading spinner |
| `fullWidth` | `boolean` | `false` | Button takes full width |
| `ariaLabel` | `string` | - | Accessible label (required for icon-only) |
| `target` | `'_blank' \| '_self' \| '_parent' \| '_top'` | - | Link target |
| `disabled` | `boolean` | `false` | Disable button |
| `className` | `string` | - | Additional CSS classes |

---

## Examples

### **Hero Section (Recommended Pattern)**
```tsx
import { Buttons, Button } from '../components/blocks/design';

<Buttons orientation="horizontal" gap="md" align="center">
  <Button variant="cta" size="lg" to="/shop">
    Shop All Products
  </Button>
  <Button variant="outline" size="lg" to="/new-arrivals">
    View New Arrivals
  </Button>
</Buttons>
```

**Result:**
- CTA button: Maximum visual impact (gradient + shadow)
- Outline button: Clear secondary action
- Perfect visual hierarchy

---

### **Product Card**
```tsx
<Buttons orientation="vertical" gap="sm">
  <Button variant="primary" fullWidth icon={<ShoppingCart />}>
    Add to Cart
  </Button>
  <Button variant="outline" fullWidth icon={<Heart />}>
    Add to Wishlist
  </Button>
</Buttons>
```

---

### **With Loading State**
```tsx
<Button 
  variant="primary" 
  loading 
  disabled
  onClick={handleSubmit}
>
  Processing...
</Button>
```

---

### **Icon-Only Button**
```tsx
<Button 
  variant="ghost" 
  size="icon" 
  ariaLabel="Close dialog"
>
  <X size={16} />
</Button>
```

---

### **External Link**
```tsx
<Button 
  variant="link" 
  href="https://example.com"
  target="_blank"
>
  Visit Website
</Button>
```

---

## Visual Hierarchy Guide

### **Priority Levels:**

1. **Primary CTA (Hero)** - `variant="cta"` - Maximum impact
2. **Primary Action** - `variant="default"` or `variant="primary"` - High impact
3. **Secondary Action** - `variant="outline"` - Medium impact
4. **Supporting Action** - `variant="secondary"` - Medium impact
5. **Tertiary Action** - `variant="ghost"` - Low impact
6. **Text Link** - `variant="link"` - Minimal impact
7. **Destructive Action** - `variant="destructive"` - High impact (red)

---

## Accessibility

### **WCAG 2.1 AA Compliance:**
- ✅ All variants have ≥ 4.5:1 contrast ratio
- ✅ Touch targets ≥ 44×44px (size lg meets WCAG AAA)
- ✅ Visible focus ring on all variants
- ✅ Disabled state properly communicated
- ✅ Icon-only buttons require `ariaLabel`

### **Keyboard Navigation:**
- ✅ Tab to focus
- ✅ Enter/Space to activate
- ✅ Focus ring visible

---

## Dark Mode

All variants fully support dark mode with proper contrast:

```tsx
{/* Automatically adapts to theme */}
<Button variant="cta">Shop Now</Button>
<Button variant="outline">Learn More</Button>
```

**Dark Mode Adjustments:**
- CTA gradient: Uses `--wp--preset--color--primary` with lightened variant in dark mode
- Outline border: Uses `var(--wp--preset--color--foreground)` for maximum contrast
- All colors use CSS custom properties that auto-adapt via `.dark` class

---

## Best Practices

### **✅ DO:**
- Use `variant="cta"` for hero section primary CTAs
- Pair `cta` or `primary` with `outline` for visual hierarchy
- Use `fullWidth` on mobile for better touch targets
- Always provide `ariaLabel` for icon-only buttons
- Use `loading` state during async operations

### **❌ DON'T:**
- Don't use multiple CTA buttons in the same section (visual confusion)
- Don't use `destructive` variant for non-dangerous actions
- Don't forget `ariaLabel` on icon-only buttons
- Don't use text-only buttons for primary CTAs
- Don't mix too many variants in one button group

---

## Common Patterns

### **1. Two-Button Hero**
```tsx
<Buttons orientation="horizontal" gap="md">
  <Button variant="cta" size="lg">Primary Action</Button>
  <Button variant="outline" size="lg">Secondary Action</Button>
</Buttons>
```

### **2. Product Actions**
```tsx
<Buttons orientation="vertical" gap="sm">
  <Button variant="primary" fullWidth>Add to Cart</Button>
  <Button variant="outline" fullWidth>Wishlist</Button>
</Buttons>
```

### **3. Form Actions**
```tsx
<Buttons orientation="horizontal" gap="sm" align="end">
  <Button variant="ghost" onClick={handleCancel}>Cancel</Button>
  <Button variant="primary" type="submit">Save Changes</Button>
</Buttons>
```

### **4. Delete Confirmation**
```tsx
<Buttons orientation="horizontal" gap="sm">
  <Button variant="ghost">Cancel</Button>
  <Button variant="destructive">Delete Permanently</Button>
</Buttons>
```

---

## Implementation Notes

### **Internal vs External Links:**
- Use `to="/path"` for React Router navigation (internal pages)
- Use `href="https://..."` for external links
- External links with `target="_blank"` automatically get `rel="noopener noreferrer"`

### **Loading State:**
- Replaces icon with spinner
- Automatically disables button
- Preserves button size

### **CSS Classes:**
- Uses WordPress/WooCommerce BEM classes defined in `/src/styles/blocks/design/button.css`
- Supports custom className for extensions
- All variants use consistent spacing/sizing via CSS variables

---

## Related Components

- **Buttons** - Container for button groups (`/components/blocks/design/Buttons.tsx`)
- **Base Button** - ShadCN base button (`/components/ui/button.tsx`)

---

## File Location

`/components/blocks/design/Buttons.tsx`

---

## Version History

- **v2.1** (Feb 22, 2026) - Removed Tailwind references, aligned with WordPress CSS architecture
- **v2.0** (Dec 26, 2024) - Added `cta` and enhanced `outline` variants
- **v1.0** - Initial implementation with 6 variants

---

**Status:** ✅ Production Ready  
**Tested:** ✅ All variants, sizes, and states  
**Accessibility:** ✅ WCAG 2.1 AA compliant  
**Dark Mode:** ✅ Full support