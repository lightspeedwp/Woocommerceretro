# Mobile Typography Guidelines

**Category**: Mobile Design  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Overview

Mobile typography requires careful attention to readability, legibility, and usability on smaller screens with varying pixel densities. This guide covers fluid typography using `clamp()`, viewport units, and responsive type scales to ensure text is readable and scales beautifully across all devices.

---

## Fluid Typography with clamp()

### clamp() Syntax for Typography

```css
/* clamp(MIN, PREFERRED, MAX) */
font-size: clamp(1rem, 2.5vw, 2rem);

/* Breakdown:
   MIN: 1rem (16px) - smallest size on mobile
   PREFERRED: 2.5vw - scales with viewport width
   MAX: 2rem (32px) - largest size on desktop
*/
```

### How clamp() Scales Typography

| Viewport Width | 2.5vw | Actual Font Size | Reason |
|----------------|-------|------------------|--------|
| 320px | 8px | **16px** | 8px < MIN (16px), use MIN |
| 640px | 16px | **16px** | Within range, use PREFERRED |
| 1024px | 25.6px | **25.6px** | Within range, use PREFERRED |
| 1440px | 36px | **32px** | 36px > MAX (32px), use MAX |

---

## Fluid Type Scale

### Complete Fluid Typography System

```css
:root {
  /* Body Text: 16px mobile → 18px desktop */
  --text-base: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
  
  /* Small Text: 14px mobile → 16px desktop */
  --text-sm: clamp(0.875rem, 0.5vw + 0.75rem, 1rem);
  
  /* Extra Small: 12px mobile → 14px desktop */
  --text-xs: clamp(0.75rem, 0.5vw + 0.625rem, 0.875rem);
  
  /* Large Text: 18px mobile → 20px desktop */
  --text-lg: clamp(1.125rem, 0.5vw + 1rem, 1.25rem);
  
  /* XL: 20px mobile → 24px desktop */
  --text-xl: clamp(1.25rem, 1vw + 0.875rem, 1.5rem);
  
  /* 2XL: 24px mobile → 30px desktop */
  --text-2xl: clamp(1.5rem, 1.5vw + 1rem, 1.875rem);
  
  /* 3XL (H3): 30px mobile → 36px desktop */
  --text-3xl: clamp(1.875rem, 2vw + 1.25rem, 2.25rem);
  
  /* 4XL (H2): 36px mobile → 48px desktop */
  --text-4xl: clamp(2.25rem, 3vw + 1.5rem, 3rem);
  
  /* 5XL (H1): 48px mobile → 60px desktop */
  --text-5xl: clamp(3rem, 4vw + 2rem, 3.75rem);
  
  /* 6XL (Hero): 56px mobile → 72px desktop */
  --text-6xl: clamp(3.5rem, 5vw + 2.5rem, 4.5rem);
}
```

### Tailwind CSS Integration

```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
        // Fluid font sizes
        'fluid-xs': 'clamp(0.75rem, 0.5vw + 0.625rem, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.5vw + 0.75rem, 1rem)',
        'fluid-base': 'clamp(1rem, 0.5vw + 0.875rem, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 0.5vw + 1rem, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1vw + 0.875rem, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.5vw + 1rem, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 2vw + 1.25rem, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 3vw + 1.5rem, 3rem)',
        'fluid-5xl': 'clamp(3rem, 4vw + 2rem, 3.75rem)',
        'fluid-6xl': 'clamp(3.5rem, 5vw + 2.5rem, 4.5rem)',
      }
    }
  }
}

// Usage in React
<h1 className="text-fluid-5xl">Page Title</h1>
<h2 className="text-fluid-4xl">Section Heading</h2>
<p className="text-fluid-base">Body text that scales smoothly</p>
```

---

## Core Principles

### 1. Minimum Font Size: 16px

**Why 16px?**
- Prevents mobile browsers from auto-zooming on input focus
- Ensures readability without manual zoom
- Meets WCAG accessibility standards
- Optimal for reading at arm's length (25-40cm)

```css
/* ✅ DO */
body {
  font-size: 16px;
  /* Or fluid */
  font-size: clamp(1rem, 0.5vw + 0.875rem, 1.125rem);
}

input, textarea, select {
  font-size: 16px; /* Critical for iOS */
}

/* ❌ DON'T */
body {
  font-size: 14px; /* Too small, forces zooming */
}
```

### 2. Line Height for Readability

Optimal line height varies by font size:

| Element | Font Size | Line Height | Ratio |
|---------|-----------|-------------|-------|
| Body text | 16px | 24px | 1.5 |
| Small text | 14px | 20px | 1.43 |
| Large text | 18px | 28px | 1.56 |
| Headings | Variable | 1.2-1.3 | Tighter |

```css
/* Body text */
p {
  font-size: 16px;
  line-height: 1.5; /* 24px */
}

/* Small text (captions, labels) */
.text-sm {
  font-size: 14px;
  line-height: 1.43; /* 20px */
}

/* Headings */
h1, h2, h3 {
  line-height: 1.2;
}
```

### 3. Line Length (Measure)

Optimal line length for mobile:
- **45-65 characters** per line for body text
- **75 characters maximum** for wider viewports
- Use `max-width` to control line length

```css
/* Reading container */
.prose {
  max-width: 65ch; /* ~65 characters */
}

/* Mobile-specific */
@media (max-width: 640px) {
  .prose {
    max-width: 100%; /* Full width on mobile */
    padding: 0 1rem; /* Add horizontal padding */
  }
}
```

---

## Responsive Typography Scale

### Mobile-First Type Scale

```css
/* Base sizes (mobile) */
:root {
  --text-xs: 0.75rem;   /* 12px */
  --text-sm: 0.875rem;  /* 14px */
  --text-base: 1rem;    /* 16px - minimum */
  --text-lg: 1.125rem;  /* 18px */
  --text-xl: 1.25rem;   /* 20px */
  --text-2xl: 1.5rem;   /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem;  /* 36px */
  --text-5xl: 3rem;     /* 48px */
}

/* Desktop adjustments */
@media (min-width: 768px) {
  :root {
    --text-lg: 1.25rem;   /* 20px */
    --text-xl: 1.5rem;    /* 24px */
    --text-2xl: 1.875rem; /* 30px */
    --text-3xl: 2.25rem;  /* 36px */
    --text-4xl: 3rem;     /* 48px */
    --text-5xl: 3.75rem;  /* 60px */
  }
}
```

### Heading Scale (Mobile)

```tsx
// H1 - Page Title
<h1 className="text-3xl md:text-5xl">
  {/* 30px mobile → 60px desktop */}
  Product Name
</h1>

// H2 - Section Heading
<h2 className="text-2xl md:text-4xl">
  {/* 24px mobile → 48px desktop */}
  Featured Products
</h2>

// H3 - Subsection
<h3 className="text-xl md:text-3xl">
  {/* 20px mobile → 36px desktop */}
  New Arrivals
</h3>

// H4 - Card Title
<h4 className="text-lg md:text-2xl">
  {/* 18px mobile → 30px desktop */}
  Product Card Title
</h4>
```

---

## Mobile Typography Patterns

### Pattern 1: Body Text

```tsx
<p className="text-base leading-relaxed">
  {/* 16px font, 24px line-height (1.5) */}
  This is standard body text optimized for mobile reading.
  The line height ensures comfortable reading without strain.
</p>
```

### Pattern 2: Small Text (Labels, Captions)

```tsx
<span className="text-sm text-gray-600">
  {/* 14px - Minimum for secondary text */}
  Product category or metadata
</span>
```

⚠️ **Warning**: Never use text smaller than 12px on mobile. It becomes illegible.

### Pattern 3: Product Card Typography

```tsx
<div className="space-y-2">
  {/* Product name */}
  <h3 className="text-base md:text-lg font-medium">
    Wireless Headphones
  </h3>
  
  {/* Category */}
  <p className="text-sm text-gray-600">
    Electronics
  </p>
  
  {/* Price */}
  <p className="text-lg md:text-xl font-bold">
    $99.99
  </p>
</div>
```

### Pattern 4: Hero Typography

```tsx
<div className="text-center px-4">
  {/* Subtitle */}
  <p className="text-sm md:text-base uppercase tracking-wide text-purple-600 mb-2">
    New Collection
  </p>
  
  {/* Main heading */}
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
    Summer Sale
  </h1>
  
  {/* Description */}
  <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
    Save up to 50% on selected items
  </p>
</div>
```

### Pattern 5: Button Text

```tsx
<button className="px-6 py-3 text-base font-medium">
  {/* 16px minimum for tap targets */}
  Add to Cart
</button>
```

---

## Tailwind CSS Typography Classes

### Font Sizes with Responsive Scaling

```tsx
// Extra Small (12px) - Use sparingly
<span className="text-xs">Fine print</span>

// Small (14px) - Labels, captions
<span className="text-sm">Category</span>

// Base (16px) - Body text, buttons
<p className="text-base">Body text</p>

// Large (18px mobile → 20px desktop)
<p className="text-lg">Emphasis text</p>

// XL (20px mobile → 24px desktop)
<h4 className="text-xl">Card heading</h4>

// 2XL (24px mobile → 30px desktop)
<h3 className="text-2xl">Section heading</h3>

// 3XL (30px mobile → 36px desktop)
<h2 className="text-3xl">Page heading</h2>

// 4XL (36px mobile → 48px desktop)
<h1 className="text-4xl">Hero heading</h1>

// 5XL (48px mobile → 60px desktop)
<h1 className="text-5xl">Large hero</h1>
```

### Line Heights

```tsx
// Tight (1.2) - Headings
<h1 className="leading-tight">Heading</h1>

// Snug (1.375) - Card titles
<h3 className="leading-snug">Card Title</h3>

// Normal (1.5) - Body text
<p className="leading-normal">Body text</p>

// Relaxed (1.625) - Long-form content
<article className="leading-relaxed">Content</article>

// Loose (2) - Poetry, special emphasis
<blockquote className="leading-loose">Quote</blockquote>
```

### Font Weights

```tsx
// Light (300) - Rarely used on mobile
<p className="font-light">Light text</p>

// Normal (400) - Body text
<p className="font-normal">Normal text</p>

// Medium (500) - Subtle emphasis
<p className="font-medium">Medium text</p>

// Semibold (600) - Headings, buttons
<h3 className="font-semibold">Heading</h3>

// Bold (700) - Strong emphasis, prices
<p className="font-bold">$99.99</p>

// Extrabold (800) - Hero headings
<h1 className="font-extrabold">Hero</h1>
```

---

## Mobile-Specific Adjustments

### 1. Reduce Heading Sizes on Mobile

```tsx
// Desktop: 60px → Mobile: 30px (50% reduction)
<h1 className="text-3xl md:text-5xl lg:text-6xl">
  Large Hero Heading
</h1>

// Desktop: 48px → Mobile: 24px (50% reduction)
<h2 className="text-2xl md:text-4xl">
  Section Heading
</h2>
```

**Why?**
- Prevents text from dominating small screens
- Improves visual hierarchy
- Reduces scrolling

### 2. Increase Body Text Spacing on Mobile

```tsx
<div className="space-y-4 md:space-y-6">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  {/* More vertical spacing on mobile for easier reading */}
</div>
```

### 3. Adjust Letter Spacing (Tracking)

```tsx
// Tighter tracking on mobile for space efficiency
<h1 className="tracking-tight md:tracking-normal">
  Heading
</h1>

// Wider tracking for uppercase text
<p className="uppercase tracking-wide">
  Label
</p>
```

---

## Input and Form Typography

### Critical: 16px Minimum for Form Inputs

```tsx
// ✅ DO: Prevents iOS auto-zoom
<input
  type="text"
  className="text-base px-4 py-3 border rounded"
  placeholder="Email"
/>

// ❌ DON'T: Triggers auto-zoom on iOS
<input
  type="text"
  className="text-sm px-3 py-2 border rounded"
  placeholder="Email"
/>
```

### Form Label and Error Typography

```tsx
<div className="space-y-2">
  {/* Label - 14px is acceptable */}
  <label className="block text-sm font-medium text-gray-700">
    Email Address
  </label>
  
  {/* Input - 16px minimum */}
  <input
    type="email"
    className="w-full text-base px-4 py-3 border rounded"
  />
  
  {/* Error - 14px acceptable for secondary info */}
  <p className="text-sm text-red-600">
    Please enter a valid email address
  </p>
</div>
```

---

## Accessibility Requirements

### 1. Color Contrast Ratios

**WCAG 2.1 AA Requirements:**
- Normal text (< 18px): **4.5:1** minimum
- Large text (≥ 18px or ≥ 14px bold): **3:1** minimum

```tsx
// ✅ Good contrast
<p className="text-gray-900 bg-white">
  {/* Black on white: 21:1 ratio */}
  High contrast text
</p>

// ⚠️ Check carefully
<p className="text-gray-600 bg-white">
  {/* Gray on white: May not meet 4.5:1 */}
  Medium gray text
</p>

// ❌ Poor contrast
<p className="text-gray-400 bg-white">
  {/* Light gray: Fails WCAG AA */}
  Too light
</p>
```

### 2. Scalable Text

```tsx
// ✅ Use relative units (rem, em)
<p className="text-base"> {/* 1rem = 16px */}
  Scalable text
</p>

// ❌ Avoid fixed pixel sizes
<p style={{ fontSize: '16px' }}>
  Not scalable with user preferences
</p>
```

### 3. User Font Size Preferences

```css
/* Respect user's browser font size settings */
html {
  font-size: 100%; /* 16px by default, scales with user preference */
}

body {
  font-size: 1rem; /* Inherits from html */
}
```

---

## Performance Considerations

### 1. Font Loading Strategy

```tsx
// Preload critical fonts
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>

// Use font-display for faster rendering
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-display: swap; /* Show fallback until custom font loads */
}
```

### 2. Limit Font Weights

```tsx
// ❌ DON'T: Load all weights
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900');

// ✅ DO: Load only needed weights
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700');
```

### 3. System Font Stack Fallback

```css
body {
  font-family: 
    'Inter', 
    -apple-system, 
    BlinkMacSystemFont, 
    'Segoe UI', 
    'Roboto', 
    'Oxygen', 
    'Ubuntu', 
    sans-serif;
}
```

---

## Common Patterns

### Pattern 1: Product List Typography

```tsx
<div className="grid grid-cols-2 gap-4">
  {products.map(product => (
    <div key={product.id} className="space-y-2">
      <h3 className="text-base md:text-lg font-medium line-clamp-2">
        {/* 16px mobile, max 2 lines */}
        {product.name}
      </h3>
      <p className="text-sm text-gray-600">
        {product.category}
      </p>
      <p className="text-lg font-bold">
        ${product.price}
      </p>
    </div>
  ))}
</div>
```

### Pattern 2: Article Typography

```tsx
<article className="prose prose-base max-w-none px-4">
  <h1 className="text-3xl md:text-4xl mb-4">
    Article Title
  </h1>
  
  <p className="text-base md:text-lg text-gray-600 mb-8">
    Introduction paragraph with larger text for emphasis
  </p>
  
  <div className="space-y-4">
    <p className="text-base leading-relaxed">
      Body paragraph 1
    </p>
    <p className="text-base leading-relaxed">
      Body paragraph 2
    </p>
  </div>
</article>
```

### Pattern 3: E-commerce Cart Typography

```tsx
<div className="space-y-4">
  {/* Cart item */}
  <div className="flex gap-4">
    <img src={item.image} className="w-20 h-20" />
    <div className="flex-1 space-y-1">
      <h4 className="text-base font-medium">
        {item.name}
      </h4>
      <p className="text-sm text-gray-600">
        Qty: {item.quantity}
      </p>
      <p className="text-base font-bold">
        ${item.price}
      </p>
    </div>
  </div>
</div>
```

---

## Testing Typography on Mobile

### Device Testing Checklist

- [ ] iPhone SE (375px width) - Smallest modern iPhone
- [ ] iPhone 12/13/14 (390px width) - Common size
- [ ] iPhone 14 Pro Max (430px width) - Large iPhone
- [ ] Samsung Galaxy S21 (360px width) - Android
- [ ] iPad Mini (768px width) - Tablet

### Browser Testing

- [ ] Safari iOS (test auto-zoom behavior)
- [ ] Chrome Android
- [ ] Firefox Android
- [ ] Samsung Internet

### Accessibility Testing

- [ ] Text scales properly when browser font size increased
- [ ] Color contrast meets WCAG AA (4.5:1 for body text)
- [ ] Text remains readable at 200% zoom
- [ ] No horizontal scrolling at any zoom level

---

## Common Mistakes

❌ Using text smaller than 16px for inputs (causes iOS auto-zoom)  
❌ Font sizes too small for mobile screens (14px body text)  
❌ Insufficient line height (leading to cramped text)  
❌ Lines too long on mobile (no max-width)  
❌ Not scaling headings down for mobile  
❌ Using fixed pixel values instead of rem/em  
❌ Poor color contrast (fails WCAG AA)  
❌ Loading unnecessary font weights  
❌ No fallback fonts during web font loading  
❌ Text not selectable on mobile

---

## Quick Reference

### Mobile Typography Checklist

✅ Body text minimum: **16px**  
✅ Input text minimum: **16px** (critical for iOS)  
✅ Small text minimum: **14px**  
✅ Line height for body: **1.5** (24px)  
✅ Line length maximum: **65ch**  
✅ Color contrast: **4.5:1** minimum  
✅ Use rem/em units for scalability  
✅ Load only needed font weights  
✅ Include system font fallbacks  
✅ Test on actual devices

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Modular Scale Calculator](https://www.modularscale.com/)
- [Type Scale Generator](https://type-scale.com/)