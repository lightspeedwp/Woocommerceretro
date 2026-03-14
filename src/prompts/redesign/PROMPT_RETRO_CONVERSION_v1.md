# 🎮 PROMPT: Retro Design Conversion - Funky to Retro Migration

**Version:** 1.0  
**Created:** March 12, 2026  
**Purpose:** Convert funky-styled templates to retro handheld gaming aesthetic  
**Scope:** 18 templates requiring conversion  
**Estimated Time:** 22-30 hours total (batches of 4-5 templates)

---

## 📋 Context & Background

### **Project Overview**

PlayPocket is a WooCommerce prototype with a retro handheld gaming aesthetic inspired by Game Boy, Nintendo DS, and PlayStation Portable. The project has been transitioning from "funky" neon design to a cohesive retro design system.

**Current State:**
- 33 templates already converted to retro design
- 18 templates still using FunkyHero and funky styling
- Complete retro design system established
- Retro components (HeaderRetro, FooterRetro, HeroRetro) available

**Target State:**
- All 18 funky templates converted to retro design
- Consistent retro aesthetic across entire site
- All templates use retro BEM classes
- Full WCAG AA 2.2 compliance maintained

---

## 🎯 Objective

**Convert the following 18 templates from funky design to retro design:**

### **Batch 1: High-Priority E-commerce (4 templates)**
1. MembershipLanding.tsx → MembershipLandingRetro.tsx
2. PageDeals.tsx → PageDealsRetro.tsx
3. SubscriptionLanding.tsx → SubscriptionLandingRetro.tsx
4. PageRewardProgram.tsx → PageRewardProgramRetro.tsx

### **Batch 2: High-Priority Information (5 templates)**
5. PageOurStory.tsx → PageOurStoryRetro.tsx
6. PageTeam.tsx → PageTeamRetro.tsx
7. PageCareers.tsx → PageCareersRetro.tsx
8. PageHelpCenter.tsx → PageHelpCenterRetro.tsx
9. PageReviews.tsx → PageReviewsRetro.tsx

### **Batch 3: Medium-Priority Support (6 templates)**
10. PageSizeGuide.tsx → PageSizeGuideRetro.tsx
11. PageBuyingGuide.tsx → PageBuyingGuideRetro.tsx
12. PageSustainability.tsx → PageSustainabilityRetro.tsx
13. PageAccessibilityStatement.tsx → PageAccessibilityStatementRetro.tsx
14. PagePressMedia.tsx → PagePressMediaRetro.tsx
15. PageRefunds.tsx → PageRefundsRetro.tsx

### **Batch 4: Low-Priority Utility (3 templates)**
16. PageCareInstructions.tsx → PageCareInstructionsRetro.tsx
17. PageWarranty.tsx → PageWarrantyRetro.tsx
18. PageAffiliateProgram.tsx → PageAffiliateProgramRetro.tsx

---

## 📐 Conversion Architecture

### **Before: Funky Pattern**

```tsx
// PageExample.tsx (BEFORE - FUNKY)
import React from 'react';
import { Layout } from '../parts/Layout';
import { FunkyHero } from '../parts/FunkyHero';
import { Container } from '../common/Container';
import { exampleHero } from '../../data/heroData';

export const PageExample = () => {
  return (
    <Layout>
      <FunkyHero config={exampleHero} />
      
      <section className="py-16 bg-white dark:bg-gray-900">
        <Container>
          <h2 className="text-3xl font-bold mb-8">Section Title</h2>
          <p className="text-gray-600 dark:text-gray-400">Content here.</p>
          <button className="bg-purple-600 text-white px-6 py-3 rounded">
            Click Me
          </button>
        </Container>
      </section>
    </Layout>
  );
};
```

### **After: Retro Pattern**

```tsx
// PageExampleRetro.tsx (AFTER - RETRO)
import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';

export const PageExampleRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">
        <HeroRetro
          titleLines={['EXAMPLE', 'PAGE']}
          highlight="HIGHLIGHT!"
          description="Short description of the page purpose."
          images={{
            main: 'https://images.unsplash.com/photo-...',
            sub1: 'https://images.unsplash.com/photo-...',
            sub2: 'https://images.unsplash.com/photo-...'
          }}
        />
        
        <section className="retro-section">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              SECTION TITLE
            </h2>
            <p className="retro-font-body retro-section-desc">
              Content here.
            </p>
            <Link to="/path" className="retro-button retro-font-display">
              CLICK ME <ArrowRight size={20} weight="bold" />
            </Link>
          </div>
        </section>
      </main>
      <FooterRetro />
    </>
  );
};
```

---

## 🔧 Detailed Conversion Steps

### **Step 1: File Setup**

**1.1 Create New Retro File**
```bash
# Copy the funky template
cp src/app/components/templates/PageExample.tsx \
   src/app/components/templates/PageExampleRetro.tsx
```

**1.2 Update File Header Comment**
```tsx
/**
 * PageExampleRetro - Retro-Styled Example Page
 *
 * [Brief description of page purpose]
 *
 * **Features:**
 * - Retro handheld gaming aesthetic
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes in /src/styles/sections/[page]-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */
```

---

### **Step 2: Update Imports**

**2.1 Replace Layout Imports**
```tsx
// ❌ REMOVE
import { Layout } from '../parts/Layout';
import { FunkyHero } from '../parts/FunkyHero';

// ✅ ADD
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
```

**2.2 Add Icon Imports (if needed)**
```tsx
import { ArrowRight } from '@phosphor-icons/react';
```

**2.3 Remove Hero Data Import**
```tsx
// ❌ REMOVE (if using FunkyHero with data)
import { exampleHero } from '../../data/heroData';
```

---

### **Step 3: Convert Layout Structure**

**3.1 Replace Layout Wrapper**
```tsx
// ❌ BEFORE
export const PageExample = () => {
  return (
    <Layout>
      {/* Content */}
    </Layout>
  );
};

// ✅ AFTER
export const PageExampleRetro = () => {
  return (
    <>
      <HeaderRetro />
      <main className="retro-main">
        {/* Content */}
      </main>
      <FooterRetro />
    </>
  );
};
```

**3.2 Update Component Name**
```tsx
// ❌ BEFORE
export const PageExample = () => { ... };

// ✅ AFTER
export const PageExampleRetro = () => { ... };
```

---

### **Step 4: Convert Hero Section**

**4.1 Extract Hero Content from FunkyHero Data**

If the template uses FunkyHero with hero data:
```tsx
// ❌ BEFORE
import { exampleHero } from '../../data/heroData';

<FunkyHero config={exampleHero} />
```

Review the hero data file to extract:
- Title (convert to titleLines array)
- Subtitle (use as description)
- Button labels (convert to retro buttons in content)

**4.2 Create HeroRetro Component**
```tsx
// ✅ AFTER
<HeroRetro
  titleLines={['FIRST LINE', 'SECOND LINE']}
  highlight="OPTIONAL HIGHLIGHT"
  description="Short, punchy description (1-2 sentences max)."
  images={{
    main: 'https://images.unsplash.com/photo-...',
    sub1: 'https://images.unsplash.com/photo-...',
    sub2: 'https://images.unsplash.com/photo-...'
  }}
/>
```

**4.3 Image Sourcing Strategy**

**Option A: Use Unsplash API**
```tsx
// Use relevant search terms for the page
images={{
  main: 'https://images.unsplash.com/photo-[id]?w=1080',
  sub1: 'https://images.unsplash.com/photo-[id]?w=1080',
  sub2: 'https://images.unsplash.com/photo-[id]?w=1080'
}}
```

**Search Terms by Page Type:**
- E-commerce: "shopping", "retail", "products", "merchandise"
- Info pages: "team", "office", "people", "workspace"
- Support: "help", "customer service", "support", "assistance"
- Legal: "documents", "legal", "policy", "compliance"

**Option B: Use Placeholder**
```tsx
// Omit images prop to use HeroRetro defaults
<HeroRetro
  titleLines={['PAGE', 'TITLE']}
  description="Description here."
/>
```

---

### **Step 5: Convert Content Sections**

**5.1 Replace Generic Sections with Retro Sections**

```tsx
// ❌ BEFORE
<section className="py-16 bg-white dark:bg-gray-900">
  <Container>
    <h2 className="text-3xl font-bold mb-8">Section Title</h2>
    <p className="text-gray-600 dark:text-gray-400">Content</p>
  </Container>
</section>

// ✅ AFTER
<section className="retro-section">
  <div className="retro-container">
    <h2 className="retro-font-display retro-bold retro-section-title">
      SECTION TITLE
    </h2>
    <p className="retro-font-body retro-section-desc">
      Content
    </p>
  </div>
</section>
```

**5.2 Typography Classes**

| Element | Retro Classes |
|---------|---------------|
| **Display headings** | `.retro-font-display .retro-bold` |
| **Section headings** | `.retro-font-display .retro-bold .retro-section-title` |
| **Body text** | `.retro-font-body` |
| **Descriptions** | `.retro-font-body .retro-section-desc` |
| **Labels** | `.retro-font-body .retro-uppercase` |

**5.3 Grid Layouts**

```tsx
// ❌ BEFORE
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {items.map(item => (...))}
</div>

// ✅ AFTER
<div className="retro-grid retro-grid-3">
  {items.map(item => (...))}
</div>
```

**Available Retro Grid Classes:**
- `.retro-grid-2` - 2-column grid
- `.retro-grid-3` - 3-column grid
- `.retro-grid-4` - 4-column grid
- `.retro-grid-auto` - Auto-fit grid

---

### **Step 6: Convert Interactive Elements**

**6.1 Buttons**

```tsx
// ❌ BEFORE
<button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
  Click Me
</button>

// ✅ AFTER
<Link to="/path" className="retro-button retro-font-display">
  CLICK ME <ArrowRight size={20} weight="bold" />
</Link>
```

**Button Variants:**
- `.retro-button` - Primary button
- `.retro-button-secondary` - Secondary button
- `.retro-button-outline` - Outline button

**6.2 Links**

```tsx
// ❌ BEFORE
<a href="/path" className="text-purple-600 hover:underline">
  Learn More
</a>

// ✅ AFTER
<Link to="/path" className="retro-link">
  LEARN MORE <ArrowRight size={16} weight="bold" />
</Link>
```

**6.3 Form Inputs (if applicable)**

```tsx
// ❌ BEFORE
<input
  type="text"
  className="border border-gray-300 rounded px-4 py-2"
  placeholder="Enter text"
/>

// ✅ AFTER
<input
  type="text"
  className="retro-input"
  placeholder="ENTER TEXT..."
/>
```

---

### **Step 7: Convert Card Components**

**7.1 Generic Cards to Retro Cards**

```tsx
// ❌ BEFORE
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow">
  <h3 className="text-xl font-bold mb-4">Card Title</h3>
  <p className="text-gray-600 dark:text-gray-400">Card content.</p>
</div>

// ✅ AFTER
<div className="retro-card">
  <h3 className="retro-card-title retro-font-display retro-bold">
    CARD TITLE
  </h3>
  <p className="retro-card-desc retro-font-body">
    Card content.
  </p>
</div>
```

**Retro Card Classes:**
- `.retro-card` - Base card component
- `.retro-card-title` - Card heading
- `.retro-card-desc` - Card description
- `.retro-card-highlight` - Highlighted card variant
- `.retro-card-glow` - Card with neon glow effect

---

### **Step 8: Convert Special Components**

**8.1 Stats/Metrics**

```tsx
// ❌ BEFORE
<div className="flex items-center gap-4">
  <div className="text-4xl font-bold text-purple-600">100+</div>
  <div className="text-gray-600 dark:text-gray-400">Products</div>
</div>

// ✅ AFTER
<div className="retro-stat">
  <div className="retro-stat-value retro-font-display">100+</div>
  <div className="retro-stat-label retro-font-body retro-uppercase">PRODUCTS</div>
</div>
```

**8.2 Badges/Tags**

```tsx
// ❌ BEFORE
<span className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm">
  New
</span>

// ✅ AFTER
<span className="retro-badge">NEW</span>
```

**8.3 Feature Boxes**

```tsx
// ❌ BEFORE
<div className="flex items-start gap-4">
  <Icon size={32} className="text-purple-600" />
  <div>
    <h4 className="font-bold mb-2">Feature Title</h4>
    <p className="text-gray-600">Feature description.</p>
  </div>
</div>

// ✅ AFTER
<div className="retro-feature">
  <div className="retro-feature-icon">
    <Icon size={32} weight="bold" />
  </div>
  <h4 className="retro-feature-title retro-font-display retro-bold">
    FEATURE TITLE
  </h4>
  <p className="retro-feature-desc retro-font-body">
    Feature description.
  </p>
</div>
```

---

### **Step 9: Add Page-Specific CSS (if needed)**

**9.1 Create Page-Specific CSS File**

```bash
# Create new CSS file
touch src/styles/sections/[page-name]-retro.css
```

**9.2 Base Template**

```css
/**
 * [Page Name] Retro - Page-Specific Styles
 *
 * **Dark Mode:** Automatic via CSS variable inheritance
 * **WCAG:** All text meets AA contrast (4.5:1 minimum)
 */

/* Page-specific overrides */
.page-[name]-retro {
  /* Custom styles here */
}

/* Section-specific styles */
.page-[name]-retro .retro-section--custom {
  /* Custom section styles */
}
```

**9.3 Import in globals.css**

```css
/* Add to /styles/globals.css */
@import "../src/styles/sections/[page-name]-retro.css";
```

---

### **Step 10: Testing & Verification**

**10.1 Visual Testing**
- [ ] Test in light mode
- [ ] Test in dark mode
- [ ] Verify retro aesthetic consistency
- [ ] Check typography hierarchy
- [ ] Verify color scheme (neon accents on dark backgrounds)
- [ ] Test responsive layouts (320px, 768px, 1024px, 1920px)

**10.2 Functional Testing**
- [ ] All links navigate correctly
- [ ] All buttons functional
- [ ] Forms submit (if applicable)
- [ ] Images load correctly
- [ ] No console errors
- [ ] No React warnings

**10.3 Accessibility Testing**
- [ ] Keyboard navigation works
- [ ] Tab order logical
- [ ] Focus states visible
- [ ] ARIA labels correct
- [ ] Color contrast WCAG AA (4.5:1 minimum)
- [ ] Screen reader compatible

**10.4 Performance Testing**
- [ ] Lighthouse Performance > 90
- [ ] No layout shifts (CLS < 0.1)
- [ ] Fast paint times (FCP < 1.5s)
- [ ] Optimized images

---

### **Step 11: Route Update (if needed)**

**11.1 Update Route Configuration**

If the page is a new route or renamed:

```tsx
// src/routes.tsx

// Add or update route
{
  path: '/example',
  Component: PageExampleRetro, // Changed from PageExample
},
```

**11.2 Update Navigation Links**

Check if page is linked from:
- HeaderRetro navigation
- FooterRetro links
- Sitemap component
- Other pages

---

### **Step 12: Documentation**

**12.1 Update Component Documentation**

Add JSDoc header with:
- Component description
- Features list
- Styling reference
- Dark mode note
- WCAG compliance note

**12.2 Update CHANGELOG (if part of release)**

```md
### Changed
- Converted PageExample to retro design (PageExampleRetro)
- Replaced FunkyHero with HeroRetro
- Added retro BEM classes
- Improved dark mode support
```

---

## 🎨 Retro Design System Quick Reference

### **Color Palette**

```css
/* Primary colors (from front-page-funky.css) */
--retro-neon-cyan: #00fff9;
--retro-neon-magenta: #ff00ff;
--retro-neon-yellow: #ffff00;

/* Background colors */
--retro-bg-primary: #0a0a0a; /* Dark mode */
--retro-bg-secondary: #1a1a1a;
--retro-bg-elevated: #2a2a2a;

/* Text colors */
--retro-text-primary: #f9fafb;
--retro-text-secondary: #d1d5db;
--retro-text-muted: #9ca3af;

/* Border colors */
--retro-border-primary: #00fff9;
--retro-border-secondary: #ff00ff;
```

### **Typography**

```css
/* Font families */
--retro-font-display: 'Press Start 2P', monospace;
--retro-font-body: 'Inter', sans-serif;

/* Font sizes */
--retro-text-xs: 0.75rem;    /* 12px */
--retro-text-sm: 0.875rem;   /* 14px */
--retro-text-base: 1rem;     /* 16px */
--retro-text-lg: 1.125rem;   /* 18px */
--retro-text-xl: 1.25rem;    /* 20px */
--retro-text-2xl: 1.5rem;    /* 24px */
--retro-text-3xl: 1.875rem;  /* 30px */
--retro-text-4xl: 2.25rem;   /* 36px */
```

### **Spacing**

```css
/* Spacing scale */
--retro-space-1: 0.25rem;  /* 4px */
--retro-space-2: 0.5rem;   /* 8px */
--retro-space-3: 0.75rem;  /* 12px */
--retro-space-4: 1rem;     /* 16px */
--retro-space-6: 1.5rem;   /* 24px */
--retro-space-8: 2rem;     /* 32px */
--retro-space-12: 3rem;    /* 48px */
--retro-space-16: 4rem;    /* 64px */
```

### **Effects**

```css
/* Glow effects */
--retro-glow-cyan: 0 0 10px var(--retro-neon-cyan);
--retro-glow-magenta: 0 0 10px var(--retro-neon-magenta);
--retro-glow-yellow: 0 0 10px var(--retro-neon-yellow);

/* Box shadows */
--retro-shadow-sm: 0 2px 4px rgba(0, 255, 249, 0.1);
--retro-shadow-md: 0 4px 8px rgba(0, 255, 249, 0.15);
--retro-shadow-lg: 0 8px 16px rgba(0, 255, 249, 0.2);
```

---

## 📚 Available Retro Components

### **Layout Components**

| Component | Import Path | Props |
|-----------|-------------|-------|
| HeaderRetro | `../parts/HeaderRetro` | None (self-contained) |
| FooterRetro | `../parts/FooterRetro` | None (self-contained) |
| MiniCartRetro | `../parts/MiniCartRetro` | None (uses CartContext) |

### **Hero Components**

| Component | Import Path | Props |
|-----------|-------------|-------|
| HeroRetro | `../patterns/HeroRetro` | `images?`, `titleLines?`, `highlight?`, `description?` |

### **Section Components**

| Component | Import Path | Purpose |
|-----------|-------------|---------|
| CategoryRowRetro | `../patterns/CategoryRowRetro` | Category showcase grid |
| FeaturedProductsRetro | `../patterns/FeaturedProductsRetro` | Product showcase section |
| BottomGridRetro | `../patterns/BottomGridRetro` | Bottom content grid |

### **Utility Components**

| Component | Import Path | Purpose |
|-----------|-------------|---------|
| Container | `../common/Container` | Content width constraint |
| ImageWithFallback | `../figma/ImageWithFallback` | Safe image rendering |

---

## ✅ Conversion Checklist (Per Template)

### **Pre-Conversion**
- [ ] Read RETRO_REDESIGN_AUDIT.md
- [ ] Review existing funky template
- [ ] Identify hero content
- [ ] Identify sections and components
- [ ] Plan image strategy

### **File Setup**
- [ ] Create new file with "Retro" suffix
- [ ] Copy funky template content
- [ ] Update file header comment
- [ ] Update component name

### **Imports**
- [ ] Remove Layout import
- [ ] Remove FunkyHero import
- [ ] Add HeaderRetro import
- [ ] Add FooterRetro import
- [ ] Add HeroRetro import
- [ ] Add icon imports (ArrowRight, etc.)

### **Layout**
- [ ] Replace Layout with HeaderRetro + FooterRetro
- [ ] Add `<main className="retro-main">` wrapper
- [ ] Update component export name

### **Hero**
- [ ] Extract title from hero data
- [ ] Create titleLines array
- [ ] Add description prop
- [ ] Add highlight prop (if applicable)
- [ ] Source or generate images
- [ ] Replace FunkyHero with HeroRetro

### **Content**
- [ ] Convert sections to `.retro-section`
- [ ] Add retro typography classes
- [ ] Convert buttons to `.retro-button`
- [ ] Convert links to `.retro-link`
- [ ] Convert cards to `.retro-card`
- [ ] Convert grids to `.retro-grid-*`

### **Testing**
- [ ] Visual: Light mode
- [ ] Visual: Dark mode
- [ ] Visual: Responsive (4 breakpoints)
- [ ] Functional: All links work
- [ ] Functional: All buttons work
- [ ] Functional: Forms submit (if applicable)
- [ ] Accessibility: Keyboard navigation
- [ ] Accessibility: ARIA labels
- [ ] Accessibility: Color contrast
- [ ] Performance: Lighthouse > 90

### **Documentation**
- [ ] JSDoc comment complete
- [ ] Page-specific CSS created (if needed)
- [ ] CSS imported in globals.css
- [ ] Route updated (if needed)
- [ ] Navigation links updated

### **Cleanup**
- [ ] Remove old funky imports
- [ ] Remove unused code
- [ ] Verify no console errors
- [ ] Verify no React warnings
- [ ] Code formatted and linted

---

## 🚨 Common Pitfalls & Solutions

### **Pitfall 1: Missing Retro Classes**

**Problem:**
```tsx
// Generic classes that won't match retro aesthetic
<h2 className="text-3xl font-bold">Title</h2>
```

**Solution:**
```tsx
// Always use retro typography classes
<h2 className="retro-font-display retro-bold retro-section-title">
  TITLE
</h2>
```

---

### **Pitfall 2: Hardcoded Colors**

**Problem:**
```tsx
// Hardcoded colors break dark mode
<div style={{ backgroundColor: '#ffffff', color: '#000000' }}>
```

**Solution:**
```tsx
// Use retro BEM classes with CSS variables
<div className="retro-card">
```

---

### **Pitfall 3: Missing Icon Arrows**

**Problem:**
```tsx
// Buttons without arrow icons look incomplete
<Link to="/path" className="retro-button">
  CLICK ME
</Link>
```

**Solution:**
```tsx
// Always add ArrowRight icon to buttons
<Link to="/path" className="retro-button retro-font-display">
  CLICK ME <ArrowRight size={20} weight="bold" />
</Link>
```

---

### **Pitfall 4: Lowercase Text**

**Problem:**
```tsx
// Lowercase text doesn't match retro aesthetic
<h1 className="retro-font-display">Page Title</h1>
```

**Solution:**
```tsx
// Use UPPERCASE for display font
<h1 className="retro-font-display retro-bold">PAGE TITLE</h1>
```

---

### **Pitfall 5: Wrong Grid Classes**

**Problem:**
```tsx
// Tailwind grid classes don't work
<div className="grid grid-cols-3 gap-8">
```

**Solution:**
```tsx
// Use retro grid classes
<div className="retro-grid retro-grid-3">
```

---

## 📊 Expected Outcomes

### **Per Template (After Conversion)**

**Visual:**
- ✅ Consistent retro handheld gaming aesthetic
- ✅ Neon cyan/magenta/yellow accent colors
- ✅ Press Start 2P display font for headings
- ✅ Inter body font for readability
- ✅ Scanline effects and CRT-style elements
- ✅ Full dark mode support

**Functional:**
- ✅ All interactive elements functional
- ✅ Smooth page transitions
- ✅ Fast load times (< 2s)
- ✅ Responsive across all devices
- ✅ Zero console errors
- ✅ Zero React warnings

**Accessibility:**
- ✅ WCAG AA 2.2 compliant
- ✅ Keyboard navigable
- ✅ Screen reader compatible
- ✅ High contrast (4.5:1 minimum)
- ✅ Focus states visible
- ✅ ARIA labels correct

**Code Quality:**
- ✅ WordPress BEM naming conventions
- ✅ Modern React patterns (hooks, functional components)
- ✅ TypeScript strict mode compliant
- ✅ ESLint clean
- ✅ Well-documented (JSDoc)
- ✅ Maintainable and scalable

---

## 🎯 Success Criteria

**Conversion is complete when:**

- [ ] All 18 templates converted to retro design
- [ ] All templates renamed with "Retro" suffix
- [ ] All templates use HeaderRetro + FooterRetro
- [ ] All templates use HeroRetro (where applicable)
- [ ] All templates use retro BEM classes (no Tailwind)
- [ ] All templates tested in light/dark mode
- [ ] All templates WCAG AA 2.2 compliant
- [ ] All templates responsive (320px - 1920px)
- [ ] All routes updated to use retro templates
- [ ] All navigation links point to retro templates
- [ ] Zero console errors across all pages
- [ ] All documentation updated
- [ ] Lighthouse scores > 90 for all pages

---

## 📖 Related Documentation

**Required Reading:**
1. [RETRO_REDESIGN_AUDIT.md](/RETRO_REDESIGN_AUDIT.md) - Complete audit and analysis
2. [Guidelines Section 4](/guidelines/Guidelines.md#4-styling-system-wordpresswoocommerce-css-architecture) - Styling standards
3. [modern-react-coding-standards.md Section 9](/guidelines/development/modern-react-coding-standards.md) - CSS replacement

**Reference:**
4. [Guidelines Section 5](/guidelines/Guidelines.md#5-typography-system) - Typography standards
5. [Dark-Mode.md](/guidelines/design-tokens/Dark-Mode.md) - Dark mode implementation
6. [NAVIGATION_QUICK_REFERENCE.md](/guidelines/NAVIGATION_QUICK_REFERENCE.md) - Navigation standards

---

## 🚀 Execution Plan

### **Recommended Batches**

**Week 1: Batch 1 (E-commerce - 4 templates)**
- Day 1-2: MembershipLandingRetro, PageDealsRetro
- Day 3-4: SubscriptionLandingRetro, PageRewardProgramRetro
- Day 5: Testing and QA

**Week 2: Batch 2 (Information - 5 templates)**
- Day 1-2: PageOurStoryRetro, PageTeamRetro
- Day 3-4: PageCareersRetro, PageHelpCenterRetro
- Day 5: PageReviewsRetro + Testing

**Week 3: Batch 3 (Support - 6 templates)**
- Day 1-2: PageSizeGuideRetro, PageBuyingGuideRetro
- Day 3-4: PageSustainabilityRetro, PageAccessibilityStatementRetro
- Day 5: PagePressMediaRetro, PageRefundsRetro + Testing

**Week 4: Batch 4 (Utility - 3 templates) + Final QA**
- Day 1: PageCareInstructionsRetro, PageWarrantyRetro
- Day 2: PageAffiliateProgramRetro
- Day 3-5: Complete testing, documentation, deployment

---

**Prompt Version:** 1.0  
**Last Updated:** March 12, 2026  
**Estimated Completion Time:** 22-30 hours (4 batches)  
**Status:** ✅ Ready to Execute

**Let's convert to retro!** 🎮✨
