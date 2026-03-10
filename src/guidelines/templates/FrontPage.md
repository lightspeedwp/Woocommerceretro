# FrontPage Template

**Category**: Templates  
**Route**: `/`  
**WordPress**: `front-page.html`  
**Version**: 2.6 (Funky Redesign — Phase 3)

---

## Purpose

Homepage template and main site entry point. Optimized for conversions with a hero banner, feature tiles, category showcase, product collections, brand story, and newsletter signup. Full funky redesign with gradient overlays, floating orbs, glassmorphism, and neon accents.

---

## Structure

```
Layout (Part)
  |-- Hero Section (front-page__hero)
  |     |-- Background image (Unsplash)
  |     |-- Gradient overlay
  |     |-- Glass badge (Sparkles icon + "New Collection")
  |     |-- Title (h1) — gradient text
  |     |-- Subtitle (p)
  |     |-- 2x CTA buttons (primary + secondary)
  |     |-- Scroll indicator
  |     |-- 2x floating orbs (funky-orb)
  |-- Funky Section Divider
  |-- Quick Entry Tiles Grid (Pattern)
  |     |-- Feature tiles with glow cards + icon gradient circles
  |-- Funky Section Divider (subtle)
  |-- Category Showcase Grid (Pattern)
  |     |-- Gradient heading
  |     |-- Category cards with glow border
  |-- Funky Section Divider
  |-- Trending Products Section
  |     |-- Gradient heading + animated divider
  |     |-- ProductGrid (Pattern) — newArrivals(4)
  |-- Funky Section Divider (subtle)
  |-- Brand Story Section
  |     |-- Gradient overlay + orbs
  |     |-- Split layout (image + text)
  |-- Funky Section Divider
  |-- Best Sellers Section
  |     |-- Gradient heading + glow section
  |     |-- ProductGrid (Pattern) — bestSellers(4)
  |-- Funky Section Divider (subtle)
  |-- Newsletter Signup (Pattern)
        |-- Glassmorphism panel
        |-- Neon focus on input
        |-- Gradient background + orbs
```

---

## Data Sources

| Data | Import | File |
|------|--------|------|
| Hero content | `heroContent` | `@/data/homepage` |
| Feature tiles | `featureTiles` | `@/data/homepage` |
| Category showcase | `categoryShowcase` | `@/data/homepage` |
| Newsletter content | `newsletterContent` | `@/data/homepage` |
| Collection row content | `collectionRowContent` | `@/data/homepage` |
| Category heading | `shopByCategoryHeading` | `@/data/homepage` |
| Brand story | `brandStory` | `@/data/homepage` |
| Trending products | `getNewArrivals(4)` | `@/data/products` |
| Best sellers | `getBestSellers(4)` | `@/data/products` |

---

## Funky Treatments by Section

| # | Section | Treatments | CSS Class |
|---|---------|-----------|-----------|
| 1 | Hero | Gradient overlay, floating orbs, glass badge, gradient text | `.front-page__hero` |
| 2 | Features | Glow cards, icon gradient circles, hover lift | via QuickEntryTilesGrid |
| 3 | Categories | Gradient heading, glow border cards | via CategoryShowcaseGrid |
| 4 | Trending | Gradient heading, animated divider | `.funky-section__heading--gradient` |
| 5 | Brand Story | Gradient overlay, floating orbs | `.front-page__brand-story` |
| 6 | Best Sellers | Gradient heading, glow section | `.funky-section__heading--gradient` |
| 7 | Newsletter | Glassmorphism, neon focus, gradient bg, orbs | via NewsletterSignup |

**CSS File:** `/src/styles/sections/front-page-funky.css`

---

## Composed Components

| Component | Type | Import |
|-----------|------|--------|
| `Layout` | Part | `../parts/Layout` |
| `Button` | Block | `../blocks/design/Buttons` |
| `QuickEntryTilesGrid` | Pattern | `../patterns/QuickEntryTilesGrid` |
| `CategoryShowcaseGrid` | Pattern | `../patterns/CategoryShowcaseGrid` |
| `ProductGrid` | Pattern | `../patterns/ProductGrid` |
| `NewsletterSignup` | Pattern | `../patterns/NewsletterSignup` |
| `ImageWithFallback` | Utility | `../figma/ImageWithFallback` |

---

## Hooks

- `usePrefersReducedMotion()` — Disables floating orb animations and scroll indicator when user prefers reduced motion

---

## Accessibility

- Proper heading hierarchy: h1 (hero) -> h2 (sections)
- Hero background image uses descriptive alt text
- CTAs have descriptive text ("Shop Now", "Learn More")
- Scroll indicator hidden from assistive technology
- Decorative orbs use `pointer-events: none`
- `prefers-reduced-motion` respected via hook
- All interactive elements meet 44x44px minimum touch target
- Focus-visible states with neon outline

---

## Dark Mode

Handled via CSS variables in `front-page-funky.css`:
- Hero overlay shifts to darker gradient
- Glass badge adjusts transparency
- Gradient text colors adapt for dark backgrounds
- All section backgrounds use CSS variable tokens
- Orb glow intensity increases in dark mode

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<640px) | Single column, stacked hero, 1-2 col product grids |
| Tablet (640-1024px) | 2-column feature tiles, 2-3 col product grids |
| Desktop (>1024px) | Full layout, 4-col product grids, split brand story |

---

## Performance

- Hero image preloaded for LCP optimization
- Product images use `loading="lazy"` below the fold
- `usePrefersReducedMotion` prevents unnecessary CSS animations
- Safe icon fallbacks prevent broken renders

---

## Related Templates

- [ArchiveProduct](ArchiveProduct.md) — Product listing page
- [SingleProduct](SingleProduct.md) — Product detail page
- [ShopWithSidebar](ShopWithSidebar.md) — Filtered product archive

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

## Back to Overview

[Templates Overview](../overview-templates.md)
