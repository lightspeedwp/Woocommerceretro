# Hero Pattern

**Category**: Patterns  
**Component**: Hero Banner Section  
**File Location**: `/components/patterns/Hero.tsx`  
**WordPress**: Hero Block Pattern  
**Version**: 2.1

---

## Purpose

Full-width hero banner with background image/video, headline, description, and call-to-action buttons. Used as the primary visual introduction on homepages and landing pages.

---

## File Location

**Code**: `/components/patterns/Hero.tsx`

**Usage**:
```tsx
import { Hero } from '../components/patterns/Hero';
```

---

## Component Interface

```tsx
interface HeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  alignment?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
}
```

---

## Example Implementation

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { cn } from '../ui/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaPrimary?: {
    text: string;
    href: string;
  };
  ctaSecondary?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  alignment?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large' | 'full';
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
  backgroundVideo,
  overlay = true,
  overlayOpacity = 50,
  alignment = 'center',
  height = 'large',
  className = '',
}) => {
  const heightClasses = {
    small: 'min-h-[50vh] md:min-h-[60vh]',
    medium: 'min-h-[60vh] md:min-h-[70vh]',
    large: 'min-h-[60vh] md:min-h-[80vh]',
    full: 'min-h-screen',
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <section 
      className={cn(
        "relative flex",
        heightClasses[height],
        alignmentClasses[alignment],
        className
      )}
    >
      {/* Background Image */}
      {backgroundImage && !backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Background Video */}
      {backgroundVideo && (
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 z-0 bg-black"
          style={{ opacity: overlayOpacity / 100 }}
        />
      )}

      {/* Content */}
      <Container className={cn(
        "relative z-10 flex flex-col justify-center flex-1",
        alignment === 'center' && "items-center",
        alignment === 'left' && "items-start",
        alignment === 'right' && "items-end"
      )}>
        <div className={cn(
          "text-white",
          alignment === 'center' ? "max-w-3xl mx-auto" : "max-w-2xl"
        )}>
          <h1 className="mb-6">{title}</h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              {subtitle}
            </p>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className={cn(
              "flex flex-col sm:flex-row gap-4",
              alignment === 'center' && "justify-center",
              alignment === 'right' && "justify-end"
            )}>
              {ctaPrimary && (
                <Button 
                  as={Link} 
                  to={ctaPrimary.href}
                  variant="hero"
                  size="xl"
                >
                  {ctaPrimary.text}
                </Button>
              )}
              
              {ctaSecondary && (
                <Button 
                  as={Link} 
                  to={ctaSecondary.href}
                  variant="heroGold"
                  size="xl"
                >
                  {ctaSecondary.text}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};
```

---

## Usage Examples

### Basic Hero with Image

```tsx
<Hero 
  title="Welcome to Our Store"
  subtitle="Discover quality products for your everyday life"
  ctaPrimary={{ text: "Shop Now", href: "/shop" }}
  backgroundImage="/hero-bg.jpg"
/>
```

### Hero with Video Background

```tsx
<Hero 
  title="Experience the Difference"
  ctaPrimary={{ text: "Explore Collection", href: "/shop" }}
  backgroundVideo="/hero-video.mp4"
  overlay={true}
  overlayOpacity={40}
/>
```

### Left-Aligned Hero

```tsx
<Hero 
  title="New Collection"
  subtitle="Explore our latest arrivals"
  ctaPrimary={{ text: "Shop Collection", href: "/new-arrivals" }}
  ctaSecondary={{ text: "Learn More", href: "/about" }}
  backgroundImage="/new-collection.jpg"
  alignment="left"
/>
```

### Full-Screen Hero

```tsx
<Hero 
  title="Summer Sale"
  subtitle="Up to 50% off selected items"
  ctaPrimary={{ text: "Shop Sale", href: "/sale" }}
  backgroundImage="/summer-sale.jpg"
  height="full"
/>
```

---

## Height Variants

| Variant | Mobile | Desktop | Use Case |
|---------|--------|---------|----------|
| `small` | 50vh | 60vh | Secondary pages |
| `medium` | 60vh | 70vh | Category pages |
| `large` | 60vh | 80vh | Homepage (default) |
| `full` | 100vh | 100vh | Landing pages |

---

## Alignment Options

### Center (Default)

- Content centered horizontally and vertically
- Best for short, impactful messages
- Most common alignment

### Left

- Content aligned to left
- More editorial/magazine feel
- Good for longer content

### Right

- Content aligned to right
- Less common, unique layout
- Can balance left-weighted imagery

---

## Accessibility

### Image Alt Text

```tsx
<img src={backgroundImage} alt="" />  {/* Empty for decorative */}
```

Background images are decorative, use empty alt text.

### Text Contrast

Ensure sufficient contrast with overlay:

```tsx
// ✅ GOOD - Dark overlay ensures readability
overlay={true}
overlayOpacity={50}

// ❌ BAD - No overlay, text may be unreadable
overlay={false}
```

### Focus States

```tsx
<Button className="focus:ring-2 focus:ring-white focus:ring-offset-2">
  Call to Action
</Button>
```

---

## Performance

### Image Optimization

```tsx
// Preload hero image for LCP
<link rel="preload" as="image" href="/hero-bg.jpg" />

// Use optimized formats
backgroundImage="/hero-bg.webp"
```

### Video Optimization

```tsx
<video 
  autoPlay 
  muted 
  loop 
  playsInline
  preload="metadata"  // Faster load
  poster="/hero-poster.jpg"  // Fallback
>
```

---

## WordPress Pattern

```html
<!-- wp:cover {"url":"/hero-bg.jpg","minHeight":"80vh","align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:80vh">
  <span class="wp-block-cover__background has-background-dim-50"></span>
  <img class="wp-block-cover__image-background" src="/hero-bg.jpg" />
  
  <div class="wp-block-cover__inner-container">
    <!-- wp:heading {"level":1} -->
    <h1>Welcome to Our Store</h1>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Discover quality products</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:buttons -->
    <div class="wp-block-buttons">
      <div class="wp-block-button">
        <a class="wp-block-button__link" href="/shop">Shop Now</a>
      </div>
    </div>
    <!-- /wp:buttons -->
  </div>
</div>
<!-- /wp:cover -->
```

---

## Related Components

- [ShopHero](../patterns/shop/ShopHero.md) - Shop-specific hero variant
- [Container](../components/Container.md) - Layout wrapper
- [Button](../components/Button.md) - CTA buttons

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

## Back to Overview

[← Patterns Overview](../overview-patterns.md)
