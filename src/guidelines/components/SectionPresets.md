# Section Styling - BEM Class Pattern

**Version:** 2.0.0  
**Status:** ✅ Production Ready  
**Dark Mode:** ✅ Full Support  
**Updated:** March 10, 2026

---

## Overview

This guide documents the **WordPress BEM class naming pattern** used for section styling across all templates in the WooCommerce prototype. All sections use **inline BEM class names** directly in JSX, rather than JavaScript preset objects.

### Philosophy

1. **Consistency** - Same section types use identical BEM class patterns across pages
2. **Accessibility** - All classes support WCAG 2.1 AA standards
3. **Dark Mode First** - Every class includes dark mode variants via CSS
4. **Semantic Naming** - Clear, purpose-based BEM class names
5. **Flexibility** - Easy to customize inline without abstraction layers

---

## Quick Start

### Basic Pattern

```tsx
// Hero section with gradient background
<section className="wp-section-hero-gradient">
  <Container>
    <h1>Welcome to Our Store</h1>
  </Container>
</section>

// Features section with base styling
<section className="wp-section-features-base">
  <Container>
    <FeaturesGrid />
  </Container>
</section>

// CTA section with default styling
<section className="wp-section-cta-base">
  <Container>
    <NewsletterSignup />
  </Container>
</section>
```

### Combining Classes

```tsx
// Multiple BEM classes + custom utilities
<section className="wp-section-hero-gradient relative overflow-hidden">
  <BackgroundPattern />
  <Container>
    <HeroContent />
  </Container>
</section>

// Archive-specific pattern
<section className="wp-archive-cta--centered wp-section-divider">
  <Container>
    <CTAContent />
  </Container>
</section>
```

---

## BEM Naming Convention

All section classes follow this pattern:

```
.wp-section-{type}-{variant}
.wp-section-{type}__{element}
.wp-section-{type}--{modifier}
```

**Examples:**
- `.wp-section-hero-gradient` — Block + variant
- `.wp-section-accent__heading` — Block + element
- `.wp-section-bordered__content` — Block + element
- `.wp-archive-cta--centered` — Block + modifier

---

## Available Section Classes

### 1. Hero Sections

**Purpose:** Large, prominent sections at the top of pages  
**Use Cases:** Landing pages, feature introductions, major page headers

| Class Name | Light Mode | Dark Mode | Best For |
|-----------|------------|-----------|----------|
| `wp-section-hero-base` | White background | Dark (#0f0f0f) | Minimal, clean heroes |
| `wp-section-hero-gradient` | Purple-blue gradient | Dark gradient | Feature-rich heroes |
| `wp-section-hero-bordered` | White with border | Dark with border | Separated heroes |
| `wp-section-hero-elevated` | White with shadow | Dark (#1a1a1a) with shadow | Card-style heroes |

**Example:**
```tsx
// Gradient hero
<section className="wp-section-hero-gradient">
  <Container>
    <h1 className="wp-section-hero__heading">Welcome to Our Store</h1>
    <p className="wp-section-hero__subheading">Discover amazing products</p>
    <Button variant="cta">Shop Now</Button>
  </Container>
</section>
```

---

### 2. CTA (Call-to-Action) Sections

**Purpose:** High-impact sections designed to drive user action  
**Use Cases:** Newsletter signups, promotional offers, conversions

| Class Name | Light Mode | Dark Mode | Best For |
|-----------|------------|-----------|----------|
| `wp-section-cta-base` | Purple-blue gradient, white text | Darker gradient | Primary CTAs |
| `wp-section-cta-gradient` | Multi-color gradient | Dark multi-color | Special promotions |
| `wp-section-cta-bordered` | Purple tint with borders | Dark purple with borders | Subtle CTAs |
| `wp-section-cta-elevated` | Gradient with shadow | Darker gradient with shadow | Floating CTAs |

**Example:**
```tsx
// Newsletter CTA
<section className="wp-section-cta-base">
  <Container className="text-center">
    <h2 className="wp-section-cta__heading">Join Our Newsletter</h2>
    <p className="wp-section-cta__subheading">Get exclusive offers and updates</p>
    <NewsletterForm />
  </Container>
</section>
```

---

### 3. Content Sections

**Purpose:** Standard content sections for text and media  
**Use Cases:** Blog content, product descriptions, general text

| Class Name | Light Mode | Dark Mode | Best For |
|-----------|------------|-----------|----------|
| `wp-section-content-base` | White background | Dark (#0f0f0f) | Primary content |
| `wp-section-content-variant` | Gray-50 background | Gray-900 | Alternating sections |
| `wp-section-content-bordered` | White with border | Dark with border | Separated content |

**Example:**
```tsx
// Article content
<section className="wp-section-content-base">
  <Container variant="content">
    <h2 className="wp-section-content__heading">About Our Company</h2>
    <div className="wp-section-content__body">
      We are a leading provider of quality products...
    </div>
  </Container>
</section>
```

---

### 4. Features Sections

**Purpose:** Showcase product features, benefits, or highlights  
**Use Cases:** Feature grids, benefit lists, service showcases

| Class Name | Light Mode | Dark Mode | Best For |
|-----------|------------|-----------|----------|
| `wp-section-features-base` | Gray-50 background | Gray-900 | Standard feature grids |
| `wp-section-features-gradient` | White to gray gradient | Dark gradient | Premium features |
| `wp-section-features-bordered` | White with borders | Dark with borders | Separated features |
| `wp-section-features-elevated` | White with shadow | Dark (#1a1a1a) with shadow | Card-style features |

**Example:**
```tsx
// Features grid
<section className="wp-section-features-base">
  <Container>
    <h2 className="wp-section-features__heading">Why Choose Us</h2>
    <div className="wp-section-features__grid">
      <FeatureCard icon={Truck} title="Fast Shipping" />
      <FeatureCard icon={Shield} title="Secure Checkout" />
      <FeatureCard icon={Heart} title="Quality Guarantee" />
    </div>
  </Container>
</section>
```

---

### 5. Testimonials Sections

**Purpose:** Display customer reviews and social proof  
**Use Cases:** Reviews, quotes, ratings, case studies

| Class Name | Light Mode | Dark Mode | Best For |
|-----------|------------|-----------|----------|
| `wp-section-testimonials-base` | Blue-50 background | Gray-800 | Standard testimonials |
| `wp-section-testimonials-gradient` | Blue-purple gradient | Dark gradient | Premium testimonials |
| `wp-section-testimonials-bordered` | White with borders | Dark with borders | Minimal testimonials |

**Example:**
```tsx
// Testimonials
<section className="wp-section-testimonials-base">
  <Container>
    <h2 className="wp-section-testimonials__heading">What Our Customers Say</h2>
    <TestimonialSlider testimonials={reviews} />
  </Container>
</section>
```

---

### 6. Product Grid Sections

**Purpose:** Display product collections and catalogs  
**Use Cases:** Shop pages, collections, product listings

| Class Name | Light Mode | Dark Mode | Best For |
|-----------|------------|-----------|----------|
| `wp-section-product-grid-base` | White background | Dark (#0f0f0f) | Clean product displays |
| `wp-section-product-grid-variant` | Gray-50 background | Gray-900 | Alternating grids |
| `wp-section-product-grid-bordered` | White with border | Dark with border | Separated grids |

**Example:**
```tsx
// Product collection
<section className="wp-section-product-grid-base">
  <Container>
    <h2 className="wp-section-product-grid__heading">Featured Products</h2>
    <div className="wp-section-product-grid__grid">
      {products.map(function(product) {
        return React.createElement(ProductCard, { 
          key: product.id, 
          product: product 
        });
      })}
    </div>
  </Container>
</section>
```

---

### 7. Newsletter Sections

**Purpose:** Email capture and subscription forms  
**Use Cases:** Newsletter signups, email lists, updates

| Class Name | Light Mode | Dark Mode | Best For |
|-----------|------------|-----------|----------|
| `wp-section-newsletter-base` | Blue-purple gradient, white text | Darker gradient | Primary newsletter |
| `wp-section-newsletter-variant` | Blue-50 background | Gray-800 | Subtle newsletter |
| `wp-section-newsletter-bordered` | White with borders | Dark with borders | Minimal newsletter |

**Example:**
```tsx
// Newsletter signup
<section className="wp-section-newsletter-base">
  <Container className="max-w-2xl mx-auto text-center">
    <h2 className="wp-section-newsletter__heading">Stay Updated</h2>
    <p className="wp-section-newsletter__subheading">
      Subscribe for exclusive offers and product updates
    </p>
    <NewsletterForm />
  </Container>
</section>
```

---

### 8. Accent Sections

**Purpose:** Special highlighted sections with bold styling  
**Use Cases:** Promotions, announcements, special features

**BEM Elements:**
- `.wp-section-accent__heading` — Section heading
- `.wp-section-accent__subheading` — Section subheading
- `.wp-section-accent__content` — Content wrapper
- `.wp-section-accent__cta` — Call-to-action wrapper

**Example:**
```tsx
<section className="wp-section-accent">
  <Container>
    <h2 className="wp-section-accent__heading">Special Offer</h2>
    <p className="wp-section-accent__subheading">Limited time only</p>
    <div className="wp-section-accent__content">
      <PromotionalContent />
    </div>
    <div className="wp-section-accent__cta">
      <Button variant="primary">Shop Now</Button>
    </div>
  </Container>
</section>
```

---

### 9. Bordered Sections

**Purpose:** Sections with distinct visual separation  
**Use Cases:** Content separation, visual hierarchy

**BEM Elements:**
- `.wp-section-bordered__heading` — Section heading
- `.wp-section-bordered__subheading` — Section subheading
- `.wp-section-bordered__content` — Content wrapper

**Example:**
```tsx
<section className="wp-section-bordered">
  <Container>
    <h2 className="wp-section-bordered__heading">Our Services</h2>
    <div className="wp-section-bordered__content">
      <ServicesGrid />
    </div>
  </Container>
</section>
```

---

### 10. Dark Sections

**Purpose:** Dark background sections for contrast  
**Use Cases:** Premium features, special content, visual breaks

**Example:**
```tsx
<section className="wp-section-dark">
  <Container>
    <h2 className="text-white">Premium Features</h2>
    <p className="text-gray-300">
      Unlock exclusive benefits
    </p>
  </Container>
</section>
```

---

### 11. Muted Sections

**Purpose:** Subtle background sections  
**Use Cases:** Secondary content, supporting sections

**Example:**
```tsx
<section className="wp-section-muted">
  <Container>
    <h2>Additional Information</h2>
    <SupportingContent />
  </Container>
</section>
```

---

### 12. Archive Sections

**Purpose:** Archive-specific section styling  
**Use Cases:** Blog archives, product archives, category pages

**Common Modifiers:**
- `wp-archive-cta--centered` — Centered CTA layout
- `wp-section-divider` — Visual separator

**Example:**
```tsx
// Archive CTA
<section className="wp-archive-cta--centered wp-section-divider">
  <Container>
    <h2>Join Our Newsletter</h2>
    <NewsletterForm />
  </Container>
</section>
```

---

## Best Practices

### 1. Consistent BEM Patterns

✅ **DO:**
```tsx
// Use consistent BEM naming
<section className="wp-section-features-base">
  <Container>
    <h2 className="wp-section-features__heading">Features</h2>
    <div className="wp-section-features__grid">
      <FeaturesGrid />
    </div>
  </Container>
</section>
```

❌ **DON'T:**
```tsx
// Don't mix custom utility classes with section base classes
<section className="py-16 bg-gray-50 dark:bg-gray-900">
  <Container><FeaturesGrid /></Container>
</section>
```

### 2. Alternating Sections

```tsx
// Alternate between base and variant for visual interest
<section className="wp-section-content-base">
  <Container>Content 1</Container>
</section>

<section className="wp-section-content-variant">
  <Container>Content 2</Container>
</section>

<section className="wp-section-content-base">
  <Container>Content 3</Container>
</section>
```

### 3. Combining with Utility Classes

```tsx
// Add utility classes AFTER section class
<section className="wp-section-hero-gradient relative overflow-hidden">
  <BackgroundAnimation />
  <Container>
    <HeroContent />
  </Container>
</section>
```

### 4. Semantic HTML

```tsx
// Use appropriate HTML5 semantic elements
<header className="wp-section-hero-gradient">
  <Container><Navigation /></Container>
</header>

<main>
  <section className="wp-section-features-base">
    <Container><Features /></Container>
  </section>
</main>

<footer className="wp-section-content-base border-t border-gray-200 dark:border-gray-700">
  <Container><FooterContent /></Container>
</footer>
```

---

## Pattern Examples from Production

### Homepage Hero (FrontPage.tsx)

```tsx
<section className="wp-section-hero-gradient relative overflow-hidden">
  {/* Background orbs */}
  <div className="funky-orb funky-animate-float" />
  
  <Container>
    <h1 className="wp-section-hero__heading">Welcome</h1>
    <p className="wp-section-hero__subheading">Discover products</p>
    <Button variant="cta">Shop Now</Button>
  </Container>
</section>
```

### Archive CTA (ArchiveCTA.tsx)

```tsx
// Actual pattern from production
var sectionClassName = variant === 'dark' 
  ? "wp-archive-cta--centered wp-section-divider"
  : "wp-archive-cta--centered wp-section-divider";

React.createElement('section', { 
  className: sectionClassName 
}, content);
```

### Section Components (AccentSection.tsx)

```tsx
// BEM elements pattern
React.createElement('h2', { 
  className: "wp-section-accent__heading" 
}, heading);

React.createElement('p', { 
  className: "wp-section-accent__subheading" 
}, subheading);

React.createElement('div', { 
  className: "wp-section-accent__content" 
}, content);
```

---

## CSS Architecture

All section classes are defined in:

- `/src/styles/sections/*.css` — Individual section stylesheets
- `/styles/globals.css` — Global section utilities
- `/src/styles/theme-funky.css` — Funky redesign variants

**Example CSS:**

```css
/* wp-section-hero-gradient */
.wp-section-hero-gradient {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    rgba(139, 92, 246, 0.1) 0%, 
    rgba(59, 130, 246, 0.05) 100%
  );
}

.dark .wp-section-hero-gradient {
  background: linear-gradient(135deg, 
    rgba(139, 92, 246, 0.2) 0%, 
    rgba(59, 130, 246, 0.1) 100%
  );
}

/* BEM elements */
.wp-section-hero__heading {
  font-size: var(--wp--preset--font-size--900);
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}

.dark .wp-section-hero__heading {
  color: var(--wp--preset--color--foreground-dark);
}
```

---

## Migration from Utility Classes

### Before (Custom Utilities)

```tsx
<section className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
  <Container>
    <h2>Features</h2>
    <FeaturesGrid />
  </Container>
</section>
```

### After (BEM Classes)

```tsx
<section className="wp-section-features-base">
  <Container>
    <h2 className="wp-section-features__heading">Features</h2>
    <div className="wp-section-features__grid">
      <FeaturesGrid />
    </div>
  </Container>
</section>
```

### Benefits of BEM Pattern

✅ Consistent naming across all templates  
✅ Easier to maintain and update  
✅ Better dark mode support via CSS variables  
✅ Reduced inline style duplication  
✅ Self-documenting class names  
✅ WordPress-aligned naming convention  
✅ No JavaScript abstraction overhead

---

## Testing

All section classes are validated for:

- ✅ WCAG 2.1 AA color contrast (light and dark modes)
- ✅ Responsive behavior (mobile, tablet, desktop)
- ✅ Dark mode parity
- ✅ Consistent spacing scale
- ✅ Border and shadow consistency

---

## Version History

### v2.0.0 (Current - March 10, 2026)
- **BREAKING:** Removed JavaScript preset objects
- Documented actual BEM class pattern used in production
- Updated all examples to match real codebase usage
- Added production examples from FrontPage, ArchiveCTA, AccentSection
- Aligned with WordPress BEM naming conventions

### v1.0.0 (Deprecated)
- JavaScript preset objects (unused in production)
- `sectionPresets` utility file (deleted)

---

## Related Documentation

- [Color Design Tokens](/guidelines/design-tokens/Colors.md)
- [Spacing Design Tokens](/guidelines/design-tokens/Spacing.md)
- [Typography System](/guidelines/design-tokens/Typography.md)
- [Section Styles Guide](/guidelines/styles/section-styles.md)
- [Container Component](/guidelines/components/Container.md)
- [Funky Theme Guide](/guidelines/design-tokens/Funky-Theme.md)
