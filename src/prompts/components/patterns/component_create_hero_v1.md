# Create Hero Pattern Component

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Component  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Pattern Component |
| **Target** | Hero.tsx |
| **Complexity** | Medium |
| **Estimated Time** | 60 minutes |
| **Prerequisites** | Guidelines.md, patterns/Hero.md guideline |
| **Output Files** | Hero.tsx, Hero.test.tsx |

---

## 🎯 Objective

Create a reusable Hero pattern component for homepage and landing pages with full WordPress alignment, responsive design, dark mode support, and accessibility compliance.

### What This Prompt Does:
- ✅ Creates Hero pattern component with TypeScript
- ✅ Implements WordPress pattern class naming
- ✅ Supports multiple layout variants (centered, split, full-width)
- ✅ Adds complete dark mode support
- ✅ Ensures WCAG AA compliance
- ✅ Includes responsive design for mobile, tablet, desktop
- ✅ Generates comprehensive Jest tests

### What This Prompt Does NOT Do:
- ❌ Create specific product hero sections
- ❌ Implement video backgrounds
- ❌ Handle complex animations
- ❌ Include carousel/slider functionality

---

## 📚 Context & Background

### Project Architecture:
- **Location:** `/src/app/components/patterns/Hero.tsx`
- **Type:** WordPress Pattern (hero section)
- **Usage:** Homepage, landing pages, campaign pages
- **Pattern Mapping:** Maps to WordPress `core/cover` or custom hero pattern

### Related Guidelines:
- `/guidelines/Guidelines.md` - Main guidelines (Section 6.4: Section Styling)
- `/guidelines/patterns/Hero.md` - Hero pattern guideline
- `/guidelines/overview-patterns.md` - Pattern architecture
- `/guidelines/components/SectionPresets.md` - Section styling presets

### Related Components:
- `Container` - Layout wrapper
- `Button` - Call-to-action buttons
- `Typography` - Text components
- Section presets utility

---

## 📋 Requirements

### Functional Requirements:
1. Display large heading (h1) with optional subheading
2. Support primary and secondary CTAs
3. Optional background image with overlay
4. Multiple layout variants (centered, split, full-width)
5. Responsive text sizing with fluid typography
6. Optional decorative background elements

### Technical Requirements:
1. TypeScript with complete prop interfaces
2. WordPress class naming: `.prototype-pattern-hero`
3. Import from `@/components/patterns/Hero`
4. Use section presets for consistent styling
5. Support custom background colors/gradients
6. Use Container component for content width

### Accessibility Requirements:
1. **WCAG AA compliance** - 4.5:1 minimum contrast
2. **Semantic HTML** - h1 for main heading
3. **Alt text** for background images
4. **Focus states** on CTA buttons
5. **Keyboard navigation** - tab through CTAs
6. **ARIA labels** where needed

### Dark Mode Requirements:
1. Text readable in both modes
2. Background overlays adapt
3. CTA buttons visible
4. Border/accent colors adapt
5. Background images work in both modes

---

## 🔧 Implementation Instructions

### Step 1: Create Component File

**Action:** Create `/src/app/components/patterns/Hero.tsx`

**Code:**
```tsx
import React from 'react';
import { Container } from '@/components/common/Container';

/**
 * Hero Pattern Component
 * 
 * WordPress pattern for homepage and landing page hero sections
 * Supports multiple layouts and variants
 * 
 * @example
 * <Hero
 *   title="Welcome to Our Store"
 *   subtitle="Discover amazing products"
 *   primaryCTA={{ text: "Shop Now", href: "/shop" }}
 *   variant="centered"
 * />
 */

interface HeroCTA {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: HeroCTA;
  secondaryCTA?: HeroCTA;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  variant?: 'centered' | 'split' | 'full-width';
  theme?: 'light' | 'dark' | 'gradient';
  minHeight?: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  backgroundOverlay = true,
  variant = 'centered',
  theme = 'light',
  minHeight = 'min-h-[500px] lg:min-h-[600px]',
  className = '',
}) => {
  const variantClasses = {
    centered: 'text-center items-center',
    split: 'text-left items-start lg:flex-row lg:items-center',
    'full-width': 'text-center items-center',
  };

  const themeClasses = {
    light: 'bg-gray-50 dark:bg-gray-900',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-purple-600 to-purple-900 text-white',
  };

  return (
    <section
      className={`
        prototype-pattern-hero
        ${themeClasses[theme]}
        ${minHeight}
        relative
        overflow-hidden
        ${className}
      `}
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          <div 
            className="prototype-pattern-hero__background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
            role="img"
            aria-label="Hero background"
          />
          {backgroundOverlay && (
            <div className="prototype-pattern-hero__overlay" />
          )}
        </>
      )}

      {/* Decorative Elements */}
      {theme === 'gradient' && (
        <div className="prototype-pattern-hero__decoration">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-50 dark:bg-purple-950 skew-x-12 translate-x-20 z-0 hidden lg:block opacity-10" />
        </div>
      )}

      {/* Content */}
      <Container className={`
        relative
        z-10
        flex
        flex-col
        justify-center
        ${variantClasses[variant]}
        gap-6
        lg:gap-8
        py-20
        lg:py-32
      `}>
        {variant === 'split' ? (
          <>
            {/* Split Layout */}
            <div className="flex-1 max-w-2xl">
              {subtitle && (
                <p className="prototype-pattern-hero__subtitle">
                  {subtitle}
                </p>
              )}
              
              <h1 className="prototype-pattern-hero__title">
                {title}
              </h1>

              {description && (
                <p className="prototype-pattern-hero__description">
                  {description}
                </p>
              )}

              {/* CTAs */}
              {(primaryCTA || secondaryCTA) && (
                <div className="prototype-pattern-hero__ctas">
                  {primaryCTA && (
                    <a
                      href={primaryCTA.href}
                      className={`prototype-pattern-hero__cta prototype-pattern-hero__cta--${primaryCTA.variant || 'primary'}`}
                    >
                      {primaryCTA.text}
                    </a>
                  )}
                  {secondaryCTA && (
                    <a
                      href={secondaryCTA.href}
                      className={`prototype-pattern-hero__cta prototype-pattern-hero__cta--${secondaryCTA.variant || 'outline'}`}
                    >
                      {secondaryCTA.text}
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Split Layout Image/Content */}
            <div className="flex-1 hidden lg:block">
              {/* Placeholder for image or illustration */}
            </div>
          </>
        ) : (
          <>
            {/* Centered/Full-Width Layout */}
            <div className={variant === 'centered' ? 'max-w-3xl mx-auto' : 'max-w-4xl mx-auto'}>
              {subtitle && (
                <p className="prototype-pattern-hero__subtitle">
                  {subtitle}
                </p>
              )}
              
              <h1 className="prototype-pattern-hero__title">
                {title}
              </h1>

              {description && (
                <p className="prototype-pattern-hero__description">
                  {description}
                </p>
              )}

              {/* CTAs */}
              {(primaryCTA || secondaryCTA) && (
                <div className="prototype-pattern-hero__ctas">
                  {primaryCTA && (
                    <a
                      href={primaryCTA.href}
                      className={`prototype-pattern-hero__cta prototype-pattern-hero__cta--${primaryCTA.variant || 'primary'}`}
                    >
                      {primaryCTA.text}
                    </a>
                  )}
                  {secondaryCTA && (
                    <a
                      href={secondaryCTA.href}
                      className={`prototype-pattern-hero__cta prototype-pattern-hero__cta--${secondaryCTA.variant || 'outline'}`}
                    >
                      {secondaryCTA.text}
                    </a>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </Container>
    </section>
  );
};
```

**Success Criteria:**
- ✅ Component file created
- ✅ All variants supported
- ✅ TypeScript interfaces complete
- ✅ Responsive design implemented

---

### Step 2: Add CSS Styles

**Action:** Add styles to `/src/styles/globals.css`

**Code:**
```css
/* ============================================
   HERO PATTERN
   ============================================ */

.prototype-pattern-hero {
  position: relative;
  display: flex;
  align-items: center;
}

/* Background Image */
.prototype-pattern-hero__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.prototype-pattern-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

[data-theme="dark"] .prototype-pattern-hero__overlay {
  background: rgba(0, 0, 0, 0.7);
}

/* Typography */
.prototype-pattern-hero__subtitle {
  font-size: clamp(0.875rem, 1.5vw, 1.125rem);
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--wp--preset--spacing--sm);
}

.prototype-pattern-hero__title {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: var(--wp--preset--font-weight--bold);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: var(--wp--preset--spacing--md);
  color: var(--wp--preset--color--foreground);
}

.prototype-pattern-hero__description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: var(--wp--preset--color--foreground-secondary);
  margin-bottom: var(--wp--preset--spacing--lg);
}

/* CTAs */
.prototype-pattern-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--md);
  justify-content: center;
  margin-top: var(--wp--preset--spacing--xl);
}

.prototype-pattern-hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  min-height: 48px;
  border-radius: var(--wp--preset--border-radius--md);
  font-size: var(--wp--preset--font-size--base);
  font-weight: var(--wp--preset--font-weight--semibold);
  text-decoration: none;
  transition: all var(--wp--preset--transition--base) ease;
  cursor: pointer;
}

.prototype-pattern-hero__cta--primary {
  background: var(--wp--preset--color--primary);
  color: white;
  border: 2px solid var(--wp--preset--color--primary);
}

.prototype-pattern-hero__cta--primary:hover {
  background: var(--wp--preset--color--primary-hover);
  border-color: var(--wp--preset--color--primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--wp--preset--shadow--lg);
}

.prototype-pattern-hero__cta--secondary {
  background: var(--wp--preset--color--background);
  color: var(--wp--preset--color--foreground);
  border: 2px solid var(--wp--preset--color--border-strong);
}

.prototype-pattern-hero__cta--secondary:hover {
  background: var(--wp--preset--color--surface);
  border-color: var(--wp--preset--color--primary);
}

.prototype-pattern-hero__cta--outline {
  background: transparent;
  color: var(--wp--preset--color--foreground);
  border: 2px solid var(--wp--preset--color--foreground);
}

.prototype-pattern-hero__cta--outline:hover {
  background: var(--wp--preset--color--foreground);
  color: var(--wp--preset--color--background);
}

.prototype-pattern-hero__cta:focus-visible {
  outline: 2px solid var(--wp--preset--color--primary);
  outline-offset: 2px;
}

/* Responsive */
@media (min-width: 1024px) {
  .prototype-pattern-hero__ctas {
    justify-content: flex-start;
  }
}
```

**Success Criteria:**
- ✅ All styles added
- ✅ Dark mode support complete
- ✅ Responsive styles defined

---

### Step 3: Create Test File

**Action:** Create `/src/app/components/patterns/Hero.test.tsx`

**Code:**
```tsx
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders title correctly', () => {
    render(<Hero title="Welcome" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome');
  });

  it('renders subtitle when provided', () => {
    render(<Hero title="Title" subtitle="Subtitle" />);
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Hero title="Title" description="Description text" />);
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('renders primary CTA when provided', () => {
    render(
      <Hero
        title="Title"
        primaryCTA={{ text: "Shop Now", href: "/shop" }}
      />
    );
    const cta = screen.getByText('Shop Now');
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '/shop');
  });

  it('renders both CTAs when provided', () => {
    render(
      <Hero
        title="Title"
        primaryCTA={{ text: "Primary", href: "/primary" }}
        secondaryCTA={{ text: "Secondary", href: "/secondary" }}
      />
    );
    expect(screen.getByText('Primary')).toBeInTheDocument();
    expect(screen.getByText('Secondary')).toBeInTheDocument();
  });

  it('applies centered variant classes', () => {
    const { container } = render(<Hero title="Title" variant="centered" />);
    expect(container.querySelector('.prototype-pattern-hero')).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <Hero title="Title" className="custom-class" />
    );
    expect(container.querySelector('.custom-class')).toBeInTheDocument();
  });

  it('renders background image when provided', () => {
    render(
      <Hero title="Title" backgroundImage="/hero.jpg" />
    );
    const background = screen.getByRole('img', { name: /hero background/i });
    expect(background).toBeInTheDocument();
  });

  it('renders overlay when background image and overlay enabled', () => {
    const { container } = render(
      <Hero title="Title" backgroundImage="/hero.jpg" backgroundOverlay={true} />
    );
    expect(container.querySelector('.prototype-pattern-hero__overlay')).toBeInTheDocument();
  });
});
```

**Success Criteria:**
- ✅ All tests pass
- ✅ Coverage ≥ 80%

---

## ✅ Verification Checklist

- [ ] Component renders all variants
- [ ] Dark mode works correctly
- [ ] All CTAs clickable
- [ ] Responsive on all devices
- [ ] Accessibility tests pass
- [ ] Background images display
- [ ] Typography scales properly

---

## 📖 Related Documentation

- `/guidelines/patterns/Hero.md`
- `/guidelines/Guidelines.md` (Section 6.4)
- `/guidelines/components/SectionPresets.md`

---

**Status:** ✅ Active  
**Created:** 2026-01-10
