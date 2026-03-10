# Mobile Spacing & Layout Guidelines

**Category**: Mobile Design  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Overview

Fluid spacing ensures consistent, proportional layouts across all screen sizes. This guide focuses on using `clamp()`, viewport units (`vw`, `vh`), and responsive spacing patterns for mobile-first design.

---

## Fluid Spacing with clamp()

### clamp() Syntax

```css
/* clamp(MIN, PREFERRED, MAX) */
padding: clamp(1rem, 5vw, 3rem);

/* Breakdown:
   MIN: 1rem (16px) - smallest value on tiny screens
   PREFERRED: 5vw - scales with viewport width
   MAX: 3rem (48px) - largest value on wide screens
*/
```

### How clamp() Works

| Viewport | 5vw Value | Actual Value | Reason |
|----------|-----------|--------------|--------|
| 320px | 16px | **16px** | 16px < MIN (16px), use MIN |
| 640px | 32px | **32px** | Within range, use PREFERRED |
| 1200px | 60px | **48px** | 60px > MAX (48px), use MAX |

---

## Spacing Scale with clamp()

### Base Spacing Tokens

```css
:root {
  /* Extra Small: 4px → 8px */
  --space-xs: clamp(0.25rem, 0.5vw, 0.5rem);
  
  /* Small: 8px → 12px */
  --space-sm: clamp(0.5rem, 1vw, 0.75rem);
  
  /* Medium: 12px → 16px */
  --space-md: clamp(0.75rem, 1.5vw, 1rem);
  
  /* Base: 16px → 24px */
  --space-base: clamp(1rem, 2vw, 1.5rem);
  
  /* Large: 24px → 32px */
  --space-lg: clamp(1.5rem, 3vw, 2rem);
  
  /* Extra Large: 32px → 48px */
  --space-xl: clamp(2rem, 4vw, 3rem);
  
  /* 2XL: 48px → 64px */
  --space-2xl: clamp(3rem, 6vw, 4rem);
  
  /* 3XL: 64px → 96px */
  --space-3xl: clamp(4rem, 8vw, 6rem);
  
  /* 4XL: 96px → 128px */
  --space-4xl: clamp(6rem, 10vw, 8rem);
}
```

### Tailwind CSS Custom Spacing

```tsx
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        'fluid-xs': 'clamp(0.25rem, 0.5vw, 0.5rem)',
        'fluid-sm': 'clamp(0.5rem, 1vw, 0.75rem)',
        'fluid-md': 'clamp(0.75rem, 1.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2vw, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 3vw, 2rem)',
        'fluid-xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-2xl': 'clamp(3rem, 6vw, 4rem)',
        'fluid-3xl': 'clamp(4rem, 8vw, 6rem)',
        'fluid-4xl': 'clamp(6rem, 10vw, 8rem)',
      }
    }
  }
}

// Usage
<div className="py-fluid-xl px-fluid-lg">
  <h1 className="mb-fluid-md">Title</h1>
  <p className="mb-fluid-base">Content</p>
</div>
```

---

## Container Padding

### Horizontal Padding (Edges)

```css
/* Mobile-first container padding */
.container {
  /* 16px mobile → 32px tablet → 48px desktop */
  padding-left: clamp(1rem, 3vw, 3rem);
  padding-right: clamp(1rem, 3vw, 3rem);
}
```

**Breakdown:**

| Screen Size | Viewport | 3vw | Actual Padding |
|-------------|----------|-----|----------------|
| Mobile | 375px | 11.25px | **16px** (MIN) |
| Tablet | 768px | 23.04px | **23px** (PREFERRED) |
| Desktop | 1440px | 43.2px | **43px** (PREFERRED) |
| Wide | 1920px | 57.6px | **48px** (MAX) |

### Vertical Spacing (Sections)

```css
/* Section spacing: 48px mobile → 96px desktop */
.section {
  padding-top: clamp(3rem, 8vw, 6rem);
  padding-bottom: clamp(3rem, 8vw, 6rem);
}
```

**Breakdown:**

| Screen Size | Viewport | 8vw | Actual Padding |
|-------------|----------|-----|----------------|
| Mobile | 375px | 30px | **48px** (MIN) |
| Tablet | 768px | 61.44px | **61px** |
| Desktop | 1440px | 115.2px | **96px** (MAX) |

### React/Tailwind Pattern

```tsx
// Container component
function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-[clamp(1rem,3vw,3rem)] ${className}`}>
      {children}
    </div>
  );
}

// Section component
function Section({ children, className = '' }) {
  return (
    <section className={`py-[clamp(3rem,8vw,6rem)] ${className}`}>
      <Container>
        {children}
      </Container>
    </section>
  );
}

// Usage
<Section>
  <h2 className="mb-[clamp(1.5rem,3vw,2rem)]">Featured Products</h2>
  <ProductGrid />
</Section>
```

---

## Component Spacing Patterns

### Card Spacing

```tsx
// Product Card
<div className="rounded-lg border border-gray-200 overflow-hidden">
  {/* Image */}
  <img src={product.image} alt={product.name} className="w-full aspect-square" />
  
  {/* Content padding: 16px mobile → 24px desktop */}
  <div className="p-[clamp(1rem,2vw,1.5rem)] space-y-[clamp(0.5rem,1vw,0.75rem)]">
    <h3>{product.name}</h3>
    <p className="text-gray-600">{product.category}</p>
    <p className="font-bold">${product.price}</p>
  </div>
</div>
```

### Stack Spacing (Vertical)

```tsx
// Using space-y with fluid values
<div className="space-y-[clamp(1rem,2vw,1.5rem)]">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>

// Manual margin-bottom
<div>
  <p className="mb-[clamp(1rem,2vw,1.5rem)]">Paragraph 1</p>
  <p className="mb-[clamp(1rem,2vw,1.5rem)]">Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
```

### Grid Gap

```tsx
// Product grid with fluid gap
<div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(1rem,2vw,1.5rem)]">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

---

## Viewport-Based Spacing

### Full Height Sections (vh)

```tsx
// Hero section: Full viewport height minus header
<section className="h-[calc(100vh-4rem)] flex items-center">
  <Container>
    <h1>Welcome</h1>
  </Container>
</section>

// Minimum height with overflow scroll
<section className="min-h-screen">
  <LongContent />
</section>
```

### Dynamic Viewport Units (dvh)

```css
/* Use dynamic viewport height (accounts for mobile browser chrome) */
.hero {
  height: 100dvh; /* Dynamic viewport height */
  /* Fallback for older browsers */
  height: 100vh;
}

/* Small viewport height (smallest possible) */
.mobile-hero {
  height: 100svh;
}

/* Large viewport height (largest possible) */
.expanded-hero {
  height: 100lvh;
}
```

### Viewport Width Units (vw)

```tsx
// Full-width sections that break out of container
<section className="w-screen relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw]">
  <img src="full-width-image.jpg" className="w-full" />
</section>

// Fluid width based on viewport
<div className="w-[90vw] max-w-7xl mx-auto">
  <Content />
</div>
```

---

## Spacing Formulas

### Calculate clamp() Values

**Formula for fluid spacing:**

```
clamp(MIN, MIN + (MAX - MIN) * ((100vw - MIN_VP) / (MAX_VP - MIN_VP)), MAX)

Simplified to:
clamp(MIN, VW_VALUE, MAX)
```

**Example: 16px (mobile) → 48px (desktop)**

```
MIN: 16px (1rem)
MAX: 48px (3rem)
MIN_VP: 375px (mobile)
MAX_VP: 1440px (desktop)

VW_VALUE = 16 + (48 - 16) * ((100vw - 375) / (1440 - 375))
          = 16 + 32 * ((100vw - 375) / 1065)
          ≈ 16 + 3vw

Result: clamp(1rem, calc(1rem + 3vw), 3rem)
```

### Online Calculator

Use [Fluid Type Scale Calculator](https://www.fluid-type-scale.com/) or [Utopia](https://utopia.fyi/space/calculator/)

---

## Safe Area Insets (Mobile Notches)

### iOS Safe Areas

```css
/* Account for iPhone notch and home indicator */
.page {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Combined with custom padding */
.header {
  padding: 
    calc(env(safe-area-inset-top) + 1rem)
    calc(env(safe-area-inset-right) + 1rem)
    1rem
    calc(env(safe-area-inset-left) + 1rem);
}
```

### Tailwind Safe Area Plugin

```tsx
// Install: npm install tailwindcss-safe-area

// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwindcss-safe-area'),
  ],
}

// Usage
<div className="pt-safe pb-safe px-safe">
  <Content />
</div>
```

---

## Practical Examples

### Example 1: Homepage Hero

```tsx
<section className="relative min-h-[100dvh] flex items-center">
  {/* Background Image */}
  <img
    src="hero.jpg"
    className="absolute inset-0 w-full h-full object-cover"
  />
  
  {/* Content with fluid padding */}
  <div className="relative z-10 w-full px-[clamp(1rem,3vw,3rem)] py-[clamp(2rem,5vw,4rem)]">
    <div className="max-w-3xl mx-auto text-center space-y-[clamp(1rem,2vw,1.5rem)]">
      <h1>Welcome to Our Store</h1>
      <p>Discover amazing products</p>
      <button>Shop Now</button>
    </div>
  </div>
</section>
```

### Example 2: Product Grid Section

```tsx
<section className="py-[clamp(3rem,8vw,6rem)]">
  <div className="max-w-7xl mx-auto px-[clamp(1rem,3vw,3rem)]">
    {/* Section Header */}
    <div className="mb-[clamp(2rem,4vw,3rem)]">
      <h2 className="mb-[clamp(0.5rem,1vw,0.75rem)]">Featured Products</h2>
      <p className="text-gray-600">Handpicked selection for you</p>
    </div>
    
    {/* Product Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(1rem,2vw,1.5rem)]">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</section>
```

### Example 3: Form Layout

```tsx
<form className="max-w-2xl mx-auto px-[clamp(1rem,3vw,2rem)] py-[clamp(2rem,4vw,3rem)]">
  {/* Form fields with consistent spacing */}
  <div className="space-y-[clamp(1rem,2vw,1.5rem)]">
    <div>
      <label className="block mb-[clamp(0.5rem,1vw,0.75rem)]">Name</label>
      <input type="text" className="w-full px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.75rem,1.5vw,1rem)]" />
    </div>
    
    <div>
      <label className="block mb-[clamp(0.5rem,1vw,0.75rem)]">Email</label>
      <input type="email" className="w-full px-[clamp(0.75rem,1.5vw,1rem)] py-[clamp(0.75rem,1.5vw,1rem)]" />
    </div>
    
    <button className="w-full mt-[clamp(1.5rem,3vw,2rem)]">
      Submit
    </button>
  </div>
</form>
```

---

## Breakpoint-Specific Spacing

### Using Tailwind Breakpoints + clamp()

```tsx
// Combine breakpoint modifiers with fluid spacing
<div className="
  p-4                                    /* Fixed on mobile */
  md:p-[clamp(1.5rem,3vw,2rem)]         /* Fluid on tablet+ */
  lg:px-[clamp(2rem,4vw,3rem)]          /* Different horizontal on large */
">
  <Content />
</div>

// Vertical rhythm that changes at breakpoints
<div className="
  space-y-4                              /* 16px mobile */
  md:space-y-[clamp(1.5rem,3vw,2rem)]   /* Fluid tablet+ */
">
  <Section />
  <Section />
</div>
```

---

## Common Spacing Patterns

### Pattern 1: Content Section

```css
/* Mobile: 48px top/bottom, 16px sides
   Desktop: 96px top/bottom, 48px sides */
.section-spacing {
  padding: 
    clamp(3rem, 8vw, 6rem)    /* top/bottom */
    clamp(1rem, 3vw, 3rem);   /* left/right */
}
```

### Pattern 2: Card Grid

```css
/* Gap: 16px mobile → 24px desktop */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: clamp(1rem, 2vw, 1.5rem);
}
```

### Pattern 3: Stack (Vertical Rhythm)

```css
/* Consistent vertical spacing between elements */
.stack > * + * {
  margin-top: clamp(1rem, 2vw, 1.5rem);
}

/* Alternative with :not(:last-child) */
.stack > *:not(:last-child) {
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
}
```

### Pattern 4: Sidebar Layout

```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-[clamp(2rem,4vw,3rem)]">
  {/* Sidebar */}
  <aside className="lg:col-span-1">
    <Filters />
  </aside>
  
  {/* Main Content */}
  <main className="lg:col-span-3">
    <ProductGrid />
  </main>
</div>
```

---

## Spacing Reference Table

### Quick Reference

| Use Case | Mobile (Min) | Desktop (Max) | clamp() |
|----------|--------------|---------------|---------|
| **Container Padding** | 16px | 48px | `clamp(1rem, 3vw, 3rem)` |
| **Section Padding** | 48px | 96px | `clamp(3rem, 8vw, 6rem)` |
| **Card Padding** | 16px | 24px | `clamp(1rem, 2vw, 1.5rem)` |
| **Stack Spacing** | 16px | 24px | `clamp(1rem, 2vw, 1.5rem)` |
| **Grid Gap** | 16px | 24px | `clamp(1rem, 2vw, 1.5rem)` |
| **Heading Margin** | 24px | 32px | `clamp(1.5rem, 3vw, 2rem)` |
| **Paragraph Margin** | 16px | 20px | `clamp(1rem, 1.5vw, 1.25rem)` |

---

## CSS Custom Properties Pattern

### Define Once, Use Everywhere

```css
:root {
  /* Spacing scale */
  --space-section: clamp(3rem, 8vw, 6rem);
  --space-container: clamp(1rem, 3vw, 3rem);
  --space-card: clamp(1rem, 2vw, 1.5rem);
  --space-stack: clamp(1rem, 2vw, 1.5rem);
  --space-gap: clamp(1rem, 2vw, 1.5rem);
}

/* Usage */
.section {
  padding: var(--space-section) var(--space-container);
}

.card {
  padding: var(--space-card);
}

.grid {
  gap: var(--space-gap);
}
```

### React Component with CSS Variables

```tsx
function Section({ children, spacing = 'default' }) {
  const spacingValues = {
    tight: 'clamp(2rem, 4vw, 3rem)',
    default: 'clamp(3rem, 8vw, 6rem)',
    loose: 'clamp(4rem, 10vw, 8rem)',
  };

  return (
    <section
      style={{
        paddingTop: spacingValues[spacing],
        paddingBottom: spacingValues[spacing],
      }}
    >
      <div style={{ padding: '0 clamp(1rem, 3vw, 3rem)' }}>
        {children}
      </div>
    </section>
  );
}
```

---

## Debugging Fluid Spacing

### Visual Debugging

```css
/* Show spacing with outlines */
.debug * {
  outline: 1px solid red;
}

/* Show spacing values */
.debug::after {
  content: 'Padding: ' attr(data-padding);
  position: absolute;
  background: rgba(255, 0, 0, 0.8);
  color: white;
  padding: 2px 4px;
  font-size: 10px;
}
```

### Browser DevTools

1. Inspect element
2. Check "Computed" tab for actual values
3. Resize viewport to see values change
4. Use "Layout" panel to visualize spacing

---

## Common Mistakes

❌ Using fixed px values for all spacing  
❌ Not setting MIN and MAX in clamp() (scaling issues)  
❌ Using vw for vertical spacing (breaks on wide screens)  
❌ Forgetting safe area insets on iOS  
❌ Inconsistent spacing scale across components  
❌ Not testing on actual mobile devices  
❌ Using rem without setting html font-size  
❌ Overly complex clamp() formulas  
❌ Not considering container width limits  
❌ Mixing fixed and fluid spacing inconsistently

---

## Testing Checklist

- [ ] Spacing scales smoothly from 320px to 1920px
- [ ] No awkward jumps or breaks at any viewport
- [ ] MIN value works on smallest screens (320px)
- [ ] MAX value doesn't grow too large (1920px+)
- [ ] Safe area insets work on iOS notched devices
- [ ] Spacing is consistent within components
- [ ] Touch targets have adequate space (44px min)
- [ ] Content doesn't touch viewport edges
- [ ] Vertical rhythm is maintained
- [ ] Grid gaps work across all breakpoints

---

## Resources

- [Utopia Fluid Space Calculator](https://utopia.fyi/space/calculator/)
- [Modern Fluid Typography](https://modern-fluid-typography.vercel.app/)
- [MDN clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [CSS Tricks - Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)
- [Every Layout - Stack](https://every-layout.dev/layouts/stack/)
