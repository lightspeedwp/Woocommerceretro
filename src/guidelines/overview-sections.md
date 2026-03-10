# Section Styles Overview

**Category**: Layout Architecture  
**Version**: 3.0 (WordPress FSE Aligned)  
**Last Updated**: December 27, 2024

---

## ⚠️ **IMPORTANT: Migration to Pattern-Based Architecture**

**This document describes the legacy section class system. The project has migrated to a new WordPress FSE-aligned pattern architecture.**

### **NEW ARCHITECTURE (Recommended):**

```tsx
// ✅ NEW - Pattern Components (WordPress FSE Aligned)
import { ContentSection, DarkSection, HeroSection } from '@/components/patterns/sections';

<ContentSection
  heading="Featured Products"
  content={<ProductGrid />}
/>
```

### **OLD ARCHITECTURE (Deprecated):**

```tsx
// ❌ OLD - Manual Section Classes (Deprecated)
<section className="section-default py-[clamp(3rem,8vw,6rem)] bg-background">
  <Container>
    <h2>Featured Products</h2>
    <ProductGrid />
  </Container>
</section>
```

### **Migration Resources:**
- 📖 [Section Patterns Overview](/guidelines/patterns/sections/README.md)
- 🔧 [Migration Guide](#migration-from-section-classes)
- 📁 [Pattern Components](/components/patterns/sections/)

---

## Purpose

Section styles define the outer container styling for different page regions. They align with WordPress Block Theme section styles, enabling consistent layouts and easy theme customization.

In WordPress FSE, sections are implemented using the **Group Block** with style variations that control:
- Background color/image
- Padding (vertical spacing)
- Maximum width constraints
- Border styling

---

## Section Style Philosophy

**Separation of Concerns**: Section styles handle OUTER appearance (background, spacing), while inner components handle CONTENT layout.

**WordPress Parity**: Each section style maps directly to a WordPress Group Block style variation, ensuring the React prototype accurately represents the final WordPress implementation.

**Easy Customization**: Changing a section style (e.g., from "default" to "dark") updates the entire section's appearance without modifying inner content.

**Pattern-Based**: Section styles are now implemented as React components (patterns) that use the Group block internally.

---

## Available Section Styles

We provide **8 section styles** that cover all common use cases:

| Style | Purpose | Background | Pattern Component | Guidelines |
|-------|---------|------------|-------------------|------------|
| **Default** | Standard white sections | `bg-white` | `ContentSection` | [ContentSection.md](/guidelines/patterns/sections/ContentSection.md) ✅ |
| **Dark** | High-contrast dark sections | `bg-gray-900` | `DarkSection` | [DarkSection.md](/guidelines/patterns/sections/DarkSection.md) ✅ |
| **Accent** | Brand-colored promotional sections | `bg-purple-600` | `AccentSection` | [AccentSection.md](/guidelines/patterns/sections/AccentSection.md) ✅ |
| **Muted** | Subtle gray alternating sections | `bg-gray-50` | `MutedSection` | [MutedSection.md](/guidelines/patterns/sections/MutedSection.md) ✅ |
| **Hero** | Full-height hero banners | Gradient | `HeroSection` | [HeroSection.md](/guidelines/patterns/sections/HeroSection.md) ✅ |
| **Bordered** | Sections with visible borders | `bg-white` + border | `BorderedSection` | [BorderedSection.md](/guidelines/patterns/sections/BorderedSection.md) ✅ |
| **Full-Width** | Edge-to-edge content | Varies | `FullWidthSection` | [FullWidthSection.md](/guidelines/patterns/sections/FullWidthSection.md) ✅ |
| **Compact** | Reduced padding for dense content | Varies | `CompactSection` | [CompactSection.md](/guidelines/patterns/sections/CompactSection.md) ✅ |

---

## Quick Reference

### Modern Usage Pattern (Recommended)

```tsx
import { ContentSection, DarkSection, HeroSection } from '@/components/patterns/sections';

{/* Hero Section */}
<HeroSection
  heading="Welcome to Our Store"
  subheading="Discover quality products"
  cta={{ label: "Shop Now", href: "/shop" }}
  minHeight="80vh"
/>

{/* Content Section */}
<ContentSection
  heading="Featured Products"
  content={<ProductGrid products={featured} />}
/>

{/* Dark Section */}
<DarkSection
  heading="Join Our Newsletter"
  content={<NewsletterForm />}
  cta={{ label: "Subscribe", href: "/newsletter", variant: "secondary" }}
/>
```

### Legacy Usage Pattern (Deprecated)

```tsx
{/* Section (Outer Container - Background & Spacing) */}
<section className="section-[style] py-[spacing] bg-[color]">
  
  {/* Container (Inner Wrapper - Max Width & Padding) */}
  <Container>
    
    {/* Pattern or Blocks (Content) */}
    <ProductCollection products={products} />
    
  </Container>
  
</section>
```

---

## Section Spacing

All sections use fluid spacing with `clamp()`:

| Use Case | Mobile | Desktop | CSS Class | Pattern Prop |
|----------|--------|---------|-----------|--------------|
| **Standard Section** | 48px | 96px | `py-[clamp(3rem,8vw,6rem)]` | `paddingPreset="section"` |
| **Hero Section** | 64px | 128px | `py-[clamp(4rem,10vw,8rem)]` | `paddingPreset="hero"` |
| **Compact Section** | 32px | 64px | `py-[clamp(2rem,5vw,4rem)]` | `paddingPreset="compact"` |

**See**: [Spacing Guidelines](design-tokens/spacing.md) for complete spacing system

---

## WordPress Block Theme Mapping

These section styles map directly to WordPress block theme section styles:

| React Section Class | WordPress Style | Block Theme JSON |
|---------------------|-----------------|------------------|
| `section-default` | `default` | `"slug": "default"` |
| `section-dark` | `dark` | `"slug": "dark"` |
| `section-accent` | `accent` | `"slug": "accent"` |
| `section-muted` | `muted` | `"slug": "muted"` |
| `section-hero` | `hero` | `"slug": "hero"` |
| `section-bordered` | `bordered` | `"slug": "bordered"` |
| `section-fullwidth` | `full-width` | `"slug": "full-width"` |
| `section-compact` | `compact` | `"slug": "compact"` |

---

## Common Section Combinations

### Homepage Pattern

```tsx
{/* Hero */}
<section className="section-hero relative min-h-[80vh] bg-gradient-to-r from-purple-900 to-blue-900">
  <Hero />
</section>

{/* Features (Muted) */}
<section className="section-muted py-16 bg-gray-50 border-b border-gray-200">
  <TrustBadges />
</section>

{/* Product Collection (Default) */}
<section className="section-default py-[clamp(3rem,8vw,6rem)] bg-background">
  <ProductCollection title="New Arrivals" />
</section>

{/* CTA (Dark) */}
<section className="section-dark py-[clamp(4rem,10vw,8rem)] bg-gray-900 text-white">
  <CallToAction />
</section>
```

### Product Archive Pattern

```tsx
{/* Breadcrumbs (Compact) */}
<section className="section-compact py-6 bg-gray-50 border-b border-gray-200">
  <Breadcrumbs />
</section>

{/* Products (Default) */}
<section className="section-default py-[clamp(3rem,8vw,6rem)] bg-background">
  <div className="flex gap-8">
    <FilterSidebar />
    <ProductGrid />
  </div>
</section>
```

---

## Detailed Guidelines

For complete documentation on each section style, see the individual guidelines:

- **[Default Section](sections/default.md)** - Standard white background sections
- **[Dark Section](sections/dark.md)** - High-contrast dark backgrounds
- **[Accent Section](sections/accent.md)** - Brand-colored promotional sections
- **[Muted Section](sections/muted.md)** - Subtle gray backgrounds
- **[Hero Section](sections/hero.md)** - Full-height hero banners
- **[Bordered Section](sections/bordered.md)** - Sections with borders
- **[Full-Width Section](sections/full-width.md)** - Edge-to-edge content
- **[Compact Section](sections/compact.md)** - Reduced padding sections

---

## Related Guidelines

- [Overview: Components](overview-components.md) - Component architecture
- [Overview: Templates](overview-templates.md) - Page layouts
- [Container Component](components/Container.md) - Width constraints
- [Design Tokens: Spacing](design-tokens/spacing.md) - Spacing system
- [Design Tokens: Colors](design-tokens/colors.md) - Color palette

---

## Summary

Section styles provide a consistent, WordPress-aligned approach to page layout:

- **8 distinct section styles** for different use cases
- **Fluid spacing** using clamp() for smooth scaling
- **WordPress FSE parity** for seamless conversion
- **Easy customization** by changing section class only
- **Semantic separation** between layout (sections) and content (patterns/blocks)

When building templates, start with section styles, add Container for width constraints, then compose Patterns and Blocks for content.