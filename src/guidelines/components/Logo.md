# Logo Component

**Category**: UI Component - Branding  
**Location**: `/components/common/Logo.tsx`  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Purpose

The Logo component displays the official WooCommerce logo as the site's primary branding element. It's an inline SVG that scales perfectly at any size and supports color variants for different contexts (default purple or white for dark backgrounds).

---

## Usage

### Basic Usage

```tsx
import { Logo } from './components/common/Logo';

// Default purple logo
<Logo />

// Custom sized logo
<Logo className="h-10 w-auto" />

// White logo for dark backgrounds
<Logo variant="white" className="h-8 w-auto" />
```

### Legacy Aliases (Backward Compatibility)

```tsx
import { ShopLogo, MainLogo } from './components/common/Logo';

// ShopLogo and MainLogo are aliases for Logo
<ShopLogo className="h-8 w-auto" />
<MainLogo className="h-10 w-auto" />
```

### Using External SVG Files

```tsx
import { Logo } from './components/common/Logo';

// Load logo from /public/woocommerce-logo.svg
<Logo useExternalSVG className="h-10 w-auto" />

// Load white logo from /public/woocommerce-logo-white.svg
<Logo useExternalSVG variant="white" className="h-10 w-auto" />
```

**When to use external SVG**:
- Email templates (need external URL)
- Third-party integrations
- CMS-based logo management
- Separate caching requirements

**Why inline SVG is default**:
- ✅ Better performance (no HTTP request)
- ✅ Faster rendering
- ✅ No flash on load
- ✅ Can be styled dynamically

---

## Props Interface

```tsx
interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  useExternalSVG?: boolean;
}
```

### Prop Details

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `'h-8 w-auto'` | Additional CSS classes for sizing/styling |
| `variant` | `'default' \| 'white'` | `'default'` | Color variant: 'default' (purple #873EFF) or 'white' for dark backgrounds |
| `useExternalSVG` | `boolean` | `false` | Use external SVG file instead of inline SVG |

---

## Implementation

### Current Implementation (SVG)

The Logo component now uses the official WooCommerce logo as an inline SVG:

```tsx
import React from 'react';
import { cn } from '../ui/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  useExternalSVG?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = 'h-8 w-auto',
  variant = 'default',
  useExternalSVG = false
}) => {
  const fillColor = variant === 'white' ? '#FFFFFF' : '#873EFF';
  
  if (useExternalSVG) {
    const svgPath = variant === 'white' ? '/public/woocommerce-logo-white.svg' : '/public/woocommerce-logo.svg';
    return (
      <img 
        src={svgPath} 
        alt="WooCommerce"
        className={cn('max-w-full h-auto', className)}
      />
    );
  }
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      role="img" 
      aria-label="WooCommerce"
      viewBox="0 0 95 26" 
      className={cn('max-w-full h-auto', className)}
      preserveAspectRatio="xMidYMid"
    >
      <title>WooCommerce</title>
      {/* SVG paths for WooCommerce logo */}
      <path d="..." fill={fillColor} />
    </svg>
  );
};

export const ShopLogo = Logo;
export const MainLogo = Logo;
```

**Key Features**:
- **Format**: Inline SVG (perfectly scalable)
- **Default Size**: `h-8 w-auto` (32px height)
- **Colors**: Purple (#873EFF) or white
- **ViewBox**: `0 0 95 26` (aspect ratio ~3.65:1)
- **Accessibility**: Includes `role="img"`, `aria-label`, and `<title>`

---

## Color Variants

### Default (Purple)

```tsx
<Logo className="h-10 w-auto" />
// Renders with fill="#873EFF" (WooCommerce purple)
```

### White (For Dark Backgrounds)

```tsx
<Logo variant="white" className="h-10 w-auto" />
// Renders with fill="#FFFFFF"
```

### Usage Examples

```tsx
// Header on white background - purple logo
<header className="bg-white">
  <Logo className="h-8 w-auto" />
</header>

// Header on dark background - white logo
<header className="bg-gray-900">
  <Logo variant="white" className="h-8 w-auto" />
</header>

// Transparent hero header - white logo
<header className="absolute top-0 left-0 right-0">
  <Logo variant="white" className="h-10 w-auto" />
</header>
```

---

## Usage Patterns

### In Header

```tsx
// Header logo - clickable home link
export const Header = () => {
  return (
    <header className="border-b border-gray-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" aria-label="Go to homepage">
            <MainLogo className="h-10" />
          </Link>
          
          {/* Navigation */}
          <nav>...</nav>
        </div>
      </Container>
    </header>
  );
};
```

---

### In Footer

```tsx
// Footer logo - typically centered, non-clickable or smaller
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <Container>
        <div className="text-center mb-8">
          <MainLogo className="h-8 mx-auto opacity-60" />
        </div>
        {/* Footer links */}
      </Container>
    </footer>
  );
};
```

---

### In Checkout Header

```tsx
// Checkout header - centered, larger
export const CheckoutHeader = () => {
  return (
    <header className="border-b border-gray-200 py-6">
      <Container>
        <div className="flex justify-center">
          <Link to="/" aria-label="Return to store">
            <MainLogo className="h-12" />
          </Link>
        </div>
      </Container>
    </header>
  );
};
```

---

### Mobile Menu

```tsx
// Mobile menu drawer - top of menu
export const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left">
        <div className="mb-8">
          <MainLogo className="h-8" />
        </div>
        <nav>
          {/* Mobile nav links */}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
```

---

## Responsive Sizing

### Mobile vs Desktop

```tsx
// Smaller on mobile, larger on desktop
<MainLogo className="h-8 md:h-10 lg:h-12" />
```

**Common Sizes**:
- **Mobile**: `h-8` (32px) - Compact for small screens
- **Tablet**: `h-10` (40px) - Default size
- **Desktop**: `h-12` (48px) - More prominent

---

### Checkout vs Main Site

```tsx
// Main site header - standard size
<MainLogo className="h-10" />

// Checkout header - larger, centered
<MainLogo className="h-12" />

// Footer - smaller, muted
<MainLogo className="h-6 opacity-50" />
```

---

## Accessibility

### Alt Text

✅ **DO**: Provide descriptive alt text

```tsx
<img 
  src="/logo.png" 
  alt="Store Name - Quality Products for Everyday Life"
  className="h-10"
/>
```

❌ **DON'T**: Use generic alt text

```tsx
<img 
  src="/logo.png" 
  alt="Logo"  // ❌ Not descriptive
  className="h-10"
/>
```

---

### Link Wrapper

When logo is a link, provide aria-label:

```tsx
<Link to="/" aria-label="Go to homepage">
  <MainLogo />
</Link>

// Or use title attribute
<a href="/" title="Return to Store Homepage">
  <MainLogo />
</a>
```

---

### Focus State

Ensure logo link has visible focus state:

```tsx
<Link 
  to="/" 
  className="focus:outline-none focus:ring-2 focus:ring-purple-600 rounded"
  aria-label="Go to homepage"
>
  <MainLogo />
</Link>
```

---

## Brand Customization

### Color Variants

```tsx
// Default (dark)
<MainLogo className="h-10" />

// White/inverted
<MainLogo className="h-10 brightness-0 invert" />

// Brand color tint
<MainLogo className="h-10 text-purple-600" />  // With SVG + currentColor
```

---

### Different Logos for Dark Mode

```tsx
export const AdaptiveLogo = ({ className }) => {
  return (
    <>
      {/* Dark logo for light mode */}
      <img 
        src="/logo-dark.svg" 
        alt="Store Logo"
        className={`h-10 dark:hidden ${className}`}
      />
      
      {/* Light logo for dark mode */}
      <img 
        src="/logo-light.svg" 
        alt="Store Logo"
        className={`h-10 hidden dark:block ${className}`}
      />
    </>
  );
};
```

---

### Logo + Tagline

```tsx
export const LogoWithTagline = ({ className }) => {
  return (
    <div className="flex flex-col">
      <MainLogo className={`h-10 ${className}`} />
      <span className="text-xs text-gray-600 mt-1">
        Quality Products for Everyday Life
      </span>
    </div>
  );
};
```

---

## Performance Optimization

### Image Optimization

1. **Compress Images**: Use tools like TinyPNG or ImageOptim
2. **Correct Size**: Don't use oversized images
3. **WebP Format**: Use modern formats with PNG fallback

```tsx
<picture>
  <source srcSet="/logo.webp" type="image/webp" />
  <img src="/logo.png" alt="Store Logo" className="h-10" />
</picture>
```

---

### Lazy Loading

❌ **DON'T**: Lazy load the logo (it's above fold)

```tsx
// WRONG - logo is critical, should load immediately
<img src="/logo.png" alt="Store Logo" loading="lazy" />
```

✅ **DO**: Preload or inline critical logos

```tsx
// Preload in <head>
<link rel="preload" as="image" href="/logo.png" />

// Or use inline SVG
<svg>...</svg>
```

---

## Common Mistakes

### ❌ Logo too large on mobile

```tsx
// WRONG - 56px too large for mobile
<MainLogo className="h-14" />
```

```tsx
// CORRECT - responsive sizing
<MainLogo className="h-8 md:h-10" />
```

---

### ❌ Logo link without accessible label

```tsx
// WRONG - no context for screen readers
<Link to="/">
  <MainLogo />
</Link>
```

```tsx
// CORRECT - descriptive label
<Link to="/" aria-label="Go to homepage">
  <MainLogo />
</Link>
```

---

### ❌ Using background-image instead of <img>

```tsx
// WRONG - not accessible
<div 
  className="w-32 h-10 bg-contain bg-no-repeat" 
  style={{ backgroundImage: 'url(/logo.png)' }}
/>
```

```tsx
// CORRECT - semantic and accessible
<img src="/logo.png" alt="Store Logo" className="h-10" />
```

---

## WordPress Equivalent

In WordPress block themes, logos are managed through the Site Logo setting or `core/site-logo` block:

```html
<!-- wp:site-logo {"width":160} /-->
```

The logo is typically set in:
- **Appearance** → **Customize** → **Site Identity** → **Logo**
- Or in block theme's `theme.json` settings

---

## Testing Checklist

- [ ] Logo displays correctly at all viewport sizes
- [ ] Logo link navigates to homepage
- [ ] Alt text is descriptive and meaningful
- [ ] Focus state is visible on logo link
- [ ] Logo doesn't appear pixelated (use SVG or 2x PNG)
- [ ] Logo loads quickly (optimized file size)
- [ ] Logo maintains aspect ratio when resized
- [ ] Logo is visible on all background colors used

---

## Related Components

- **Header** - Contains logo in main navigation
- **Footer** - May contain logo in footer
- **CheckoutHeader** - Simplified header with logo
- **Link** - Wraps logo for navigation

---

## Related Guidelines

- [Header Guidelines](Header.md) - Header component
- [Footer Guidelines](Footer.md) - Footer component
- [Design Tokens: Colors](../design-tokens/colors.md) - Brand colors
- [Accessibility Guidelines](../Guidelines.md#accessibility) - WCAG compliance

---

## Summary

The Logo component is a simple but critical branding element that:
- ✅ Displays the site's brand mark
- ✅ Functions as a home link in navigation
- ✅ Supports responsive sizing
- ✅ Provides accessible alt text
- ✅ Can be customized for different contexts (header, footer, checkout)
- ✅ Maps to WordPress site-logo block

Use the Logo component consistently across all pages to maintain brand identity and provide familiar navigation patterns.