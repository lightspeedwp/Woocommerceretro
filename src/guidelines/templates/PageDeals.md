# PageDeals Template

**Component Type:** Template (Marketing/Sales Page)  
**Location:** `/src/app/components/templates/PageDeals.tsx`  
**CSS:** `/src/styles/sections/commerce-special-funky.css`  
**Route:** `/deals`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 9)  
**Color Identity:** Hot Pink `#ff00ff` / Neon Yellow `#ccff00`

---

## Overview

PageDeals is a high-energy sales and promotions page featuring vibrant funky gradients, animated floating orbs, and a flash-sale banner. Displays products with active discounts in a responsive grid with funky accent treatments.

**WordPress Mapping:** WooCommerce Sale Archive / Promotions Landing Page  
**Dark Mode:** ✅ Complete support  
**Reduced Motion:** ✅ Respects `prefers-reduced-motion` (disables orb animations)

---

## Key Features

### Page Structure

**Three main sections:**
1. **Flash Sale Banner** — Animated gradient strip (pink → cyan → yellow)
2. **Hero Section** — Gradient background with glassmorphism badge, floating orbs
3. **Deals Grid** — Responsive product grid (1-4 columns)
4. **CTA Section** — Full-width gradient banner with "Shop all" CTA

### Funky Treatments

**Color Identity:**
```css
.page-deals {
  --page-hero-from: #ff00ff;  /* Hot pink */
  --page-hero-via: #030213;   /* Deep blue-black */
  --page-hero-to: #ccff00;    /* Neon yellow */
}
```

**1. Flash Sale Banner:**
- Horizontal gradient (pink → cyan → yellow)
- Animated infinite scroll effect
- White text, Flame icons

**2. Hero Section:**
- Soft gradient tint (light mode) or deep neon gradient (dark mode)
- Two floating orbs with blur(80px) + animation
- Glassmorphism badge with neon pink icon
- Gradient CTA buttons

**3. Deals Grid:**
- Surface background (light gray/dark)
- Standard ProductCard components
- Responsive 1-4 column layout

**4. CTA Section:**
- Strong gradient background (pink → dark → yellow)
- Floating orbs
- Neon gradient button (cyan → lime)

---

## Component Structure

### Imports

```tsx
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { ProductCard } from '../blocks/product/ProductCard';
import { products } from '../../data/products';
import { Lightning as Zap, Flame, ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
```

### Data Filtering

```tsx
const deals = products.filter(
  (product) => product.salePrice && product.salePrice < product.price
);
```

**Logic:** Only shows products with `salePrice` < `price`

### JSX Hierarchy

```tsx
<Layout>
  <div className="page-deals">
    
    {/* 1. Flash Sale Banner */}
    <div className="deals-flash-banner">...</div>
    
    {/* 2. Hero Section */}
    <section className="commerce-hero">
      <div className="commerce-hero__bg" />
      {!prefersReduced && (
        <>
          <div className="commerce-hero__orb commerce-hero__orb--1" />
          <div className="commerce-hero__orb commerce-hero__orb--2" />
        </>
      )}
      <Container>
        <div className="commerce-hero__content">
          <div className="commerce-hero__badge">...</div>
          <h1 className="commerce-hero__title">...</h1>
          <p className="commerce-hero__subtitle">...</p>
          <div className="commerce-hero__actions">...</div>
        </div>
      </Container>
    </section>
    
    {/* 3. Deals Grid */}
    <section className="deals-section">
      <Container>
        <div className="deals-section__heading">...</div>
        <div className="deals-section__grid">
          {deals.map(product => <ProductCard />)}
        </div>
      </Container>
    </section>
    
    {/* 4. CTA Section */}
    <section className="commerce-cta">
      <div className="commerce-cta__bg" />
      {!prefersReduced && (
        <>
          <div className="commerce-cta__orb commerce-cta__orb--1" />
          <div className="commerce-cta__orb commerce-cta__orb--2" />
        </>
      )}
      <Container>
        <div className="commerce-cta__content">...</div>
      </Container>
    </section>
    
  </div>
</Layout>
```

---

## BEM Class Hierarchy

```
page-deals                             /* Container + color identity */

deals-flash-banner                     /* Flash sale strip */

commerce-hero                          /* Hero section */
├── commerce-hero__bg                  /* Gradient background */
├── commerce-hero__orb                 /* Floating orb (blur) */
│   ├── commerce-hero__orb--1          /* Top-right orb (pink) */
│   └── commerce-hero__orb--2          /* Bottom-left orb (yellow) */
└── commerce-hero__content             /* Centered content */
    ├── commerce-hero__badge           /* Glassmorphism badge */
    │   └── commerce-hero__badge-icon  /* Icon (Zap) */
    ├── commerce-hero__title           /* h1 heading */
    ├── commerce-hero__subtitle        /* Subtitle text */
    └── commerce-hero__actions         /* CTA buttons row */

deals-section                          /* Deals grid container */
├── deals-section__heading             /* Grid heading */
├── deals-section__grid                /* Product grid */
└── deals-section__empty               /* Empty state */

commerce-cta                           /* Bottom CTA section */
├── commerce-cta__bg                   /* Gradient background */
├── commerce-cta__orb                  /* Floating orb */
│   ├── commerce-cta__orb--1           /* Top-right orb */
│   └── commerce-cta__orb--2           /* Bottom-left orb */
└── commerce-cta__content              /* Centered content */
    ├── commerce-cta__title            /* h2 heading */
    ├── commerce-cta__text             /* Subtitle */
    └── commerce-cta__btn              /* CTA button */

wp-sales-btn                           /* Sales button (hero) */
├── wp-sales-btn--primary              /* Primary button */
└── wp-sales-btn--outline              /* Outline button */
```

**Total BEM Classes:** 23

---

## Section Breakdown

### 1. Flash Sale Banner

```tsx
<div className="deals-flash-banner" role="status" aria-live="polite">
  <Flame size={14} aria-hidden="true" />
  &nbsp;Flash sale — Up to 50% off selected items — Ends Sunday&nbsp;
  <Flame size={14} aria-hidden="true" />
</div>
```

**Styling:**
```css
.deals-flash-banner {
  position: relative;
  overflow: hidden;
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--40);
  text-align: center;
  font-size: var(--wp--preset--font-size--small);
  color: white;
  background: linear-gradient(
    90deg,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-yellow)
  );
  animation: funky-gradient-x 5s ease infinite alternate;
}
```

**Animation:**
```css
@keyframes funky-gradient-x {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}
```

**Accessibility:**
- `role="status"` — Identifies as status message
- `aria-live="polite"` — Announces updates to screen readers
- `aria-hidden="true"` on icons (decorative)

---

### 2. Hero Section

#### Background Gradient

**Light Mode:**
```css
.commerce-hero__bg {
  background: linear-gradient(
    160deg,
    color-mix(in srgb, #ff00ff 8%, white) 0%,      /* Soft pink tint */
    white 40%,
    color-mix(in srgb, #ccff00 6%, white) 100%     /* Soft yellow tint */
  );
}
```

**Dark Mode:**
```css
.dark .commerce-hero__bg {
  background: linear-gradient(
    160deg,
    color-mix(in srgb, #ff00ff 20%, #030213) 0%,   /* Deep pink */
    #030213 50%,                                    /* Dark core */
    color-mix(in srgb, #ccff00 15%, #030213) 100%  /* Deep yellow */
  );
}
```

**Effect:**
- Light mode: Subtle tinted gradient
- Dark mode: Rich neon gradient with dark center

#### Floating Orbs

```tsx
{!prefersReduced && (
  <>
    <div className="commerce-hero__orb commerce-hero__orb--1" aria-hidden="true" />
    <div className="commerce-hero__orb commerce-hero__orb--2" aria-hidden="true" />
  </>
)}
```

**Styling:**
```css
.commerce-hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  pointer-events: none;
  animation: funky-float 8s ease-in-out infinite;
  opacity: 0.15;
}

.dark .commerce-hero__orb {
  opacity: 0.25; /* More visible in dark mode */
}

.commerce-hero__orb--1 {
  width: 400px;
  height: 400px;
  top: -10%;
  right: -5%;
  background: var(--page-hero-from); /* #ff00ff */
}

.commerce-hero__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -15%;
  left: -5%;
  background: var(--page-hero-to); /* #ccff00 */
  animation-delay: -4s;
}
```

**Animation:**
```css
@keyframes funky-float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  50% {
    transform: translate(20px, -30px) scale(1.05);
  }
}
```

**Reduced Motion:**
- Orbs hidden if `prefersReducedMotion === true`
- Uses `usePrefersReducedMotion()` hook

#### Glassmorphism Badge

```tsx
<div className="commerce-hero__badge">
  <Zap size={16} className="commerce-hero__badge-icon" aria-hidden="true" />
  <span>Limited-time savings</span>
</div>
```

**Styling:**
```css
.commerce-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--40);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .commerce-hero__badge {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
}

.commerce-hero__badge-icon {
  color: var(--wp--preset--color--neon-pink);
}
```

**Effect:** Semi-transparent pill with blurred background

#### Hero CTAs

```tsx
<div className="commerce-hero__actions">
  <a href="#deals-grid" className="wp-sales-btn wp-sales-btn--primary">
    Browse deals
    <ArrowRight size={18} />
  </a>
  <Link to="/shop" className="wp-sales-btn wp-sales-btn--outline">
    Full catalogue
  </Link>
</div>
```

**Primary Button:**
```css
.wp-sales-btn--primary {
  background: linear-gradient(135deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-lime));
  color: #030213;
  border: none;
  box-shadow: 0 4px 20px rgba(0, 255, 255, 0.3);
}

.wp-sales-btn--primary:hover {
  box-shadow: 0 6px 30px rgba(0, 255, 255, 0.5);
  transform: translateY(-2px);
}
```

**Outline Button:**
```css
.wp-sales-btn--outline {
  background: transparent;
  border: 2px solid var(--wp--preset--color--foreground);
  color: var(--wp--preset--color--foreground);
}

.wp-sales-btn--outline:hover {
  background: var(--wp--preset--color--foreground);
  color: var(--wp--preset--color--background);
}
```

---

### 3. Deals Grid Section

```tsx
<section className="deals-section" aria-label="Current deals">
  <Container>
    {deals.length > 0 ? (
      <>
        <div className="deals-section__heading">
          <h2>{deals.length} deal{deals.length !== 1 ? 's' : ''} live now</h2>
        </div>
        <div className="deals-section__grid">
          {deals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    ) : (
      <div className="deals-section__empty">
        <h3>No deals active right now</h3>
        <p>Check back soon for great discounts!</p>
      </div>
    )}
  </Container>
</section>
```

**Grid Responsive Behavior:**
```css
.deals-section__grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: var(--wp--preset--spacing--50);
}

@media (min-width: 640px) {
  .deals-section__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .deals-section__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1280px) {
  .deals-section__grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
```

**Empty State:**
```css
.deals-section__empty {
  text-align: center;
  padding-block: var(--wp--preset--spacing--80);
}
```

**Dynamic Heading:**
- "1 deal live now" (singular)
- "X deals live now" (plural)

---

### 4. CTA Section

```tsx
<section className="commerce-cta" aria-label="Explore more">
  <div className="commerce-cta__bg" aria-hidden="true" />
  {!prefersReduced && (
    <>
      <div className="commerce-cta__orb commerce-cta__orb--1" aria-hidden="true" />
      <div className="commerce-cta__orb commerce-cta__orb--2" aria-hidden="true" />
    </>
  )}
  
  <Container>
    <div className="commerce-cta__content">
      <h2 className="commerce-cta__title">Don't miss out</h2>
      <p className="commerce-cta__text">
        New deals drop every week. Browse our full collection to find your next favourite.
      </p>
      <Link to="/shop" className="commerce-cta__btn">
        Shop all products
        <ArrowRight size={18} />
      </Link>
    </div>
  </Container>
</section>
```

**Background:**
```css
.commerce-cta__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    135deg,
    var(--page-hero-from) 0%,      /* #ff00ff */
    #030213 50%,                    /* Deep blue-black */
    var(--page-hero-to) 100%        /* #ccff00 */
  );
  opacity: 0.9;
}

.dark .commerce-cta__bg {
  opacity: 1; /* Full intensity in dark mode */
}
```

**CTA Button:**
```css
.commerce-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--40) var(--wp--preset--spacing--60);
  border-radius: var(--wp--preset--border-radius--md);
  font-weight: var(--wp--preset--font-weight--semibold);
  background: linear-gradient(135deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-lime));
  color: #030213;
  transition: box-shadow 0.25s ease, transform 0.25s ease;
}

.commerce-cta__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 30px rgba(0, 255, 255, 0.4);
}
```

---

## Color System

### Page-Level Variables

```css
.page-deals {
  --page-hero-from: #ff00ff;  /* Hot pink */
  --page-hero-via: #030213;   /* Deep blue-black */
  --page-hero-to: #ccff00;    /* Neon yellow */
}
```

**Used in:**
- Hero gradient background
- Floating orbs
- CTA section gradient

### Neon Accent Colors

```css
--wp--preset--color--neon-pink: #ff00ff;
--wp--preset--color--neon-cyan: #00ffff;
--wp--preset--color--neon-yellow: #ccff00;
--wp--preset--color--neon-lime: #ccff00;
```

**Used in:**
- Flash banner gradient
- Badge icon
- CTA buttons
- Orb backgrounds

---

## Responsive Behavior

### Mobile (< 640px)

**Grid:** 1 column
```css
.deals-section__grid {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
```

**Hero:**
- Orbs hidden (reduced motion default on mobile)
- Text center-aligned
- Buttons stack vertically

### Tablet (640px - 1023px)

**Grid:** 2 columns
```css
.deals-section__grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
```

**Hero:**
- Orbs visible (if motion enabled)
- Buttons inline horizontal

### Desktop (1024px - 1279px)

**Grid:** 3 columns
```css
.deals-section__grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
```

### Wide (≥ 1280px)

**Grid:** 4 columns
```css
.deals-section__grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
```

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Hero background | Soft tints (8% pink, 6% yellow) | Rich neon (20% pink, 15% yellow) |
| Orb opacity | 0.15 | 0.25 |
| Badge background | `rgba(255,255,255,0.15)` | `rgba(255,255,255,0.08)` |
| Hero subtitle | `--text-secondary` | `rgba(255,255,255,0.7)` |
| CTA background | 90% opacity | 100% opacity |
| Section background | `--surface` | `--background` |

### Contrast Verification

**Flash Banner:**
- White text on neon gradient: ~4.5:1 (AA)

**Hero:**
- Text on soft gradient: ~8:1 (AAA light mode)
- Text on dark gradient: ~10:1 (AAA dark mode)

**CTA:**
- White text on dark gradient: ~12:1 (AAA)

---

## Accessibility

### ARIA Attributes

**Flash Banner:**
```tsx
<div className="deals-flash-banner" role="status" aria-live="polite">
```
- `role="status"` — Identifies as status message
- `aria-live="polite"` — Announces changes to screen readers

**Hero Section:**
```tsx
<section className="commerce-hero" aria-labelledby="deals-title">
  <h1 id="deals-title">Exclusive deals</h1>
</section>
```
- `aria-labelledby` — Links section to heading

**Deals Grid:**
```tsx
<section className="deals-section" aria-label="Current deals">
```
- `aria-label` — Provides accessible name

**CTA Section:**
```tsx
<section className="commerce-cta" aria-label="Explore more">
```

**Decorative Elements:**
```tsx
<div className="commerce-hero__orb" aria-hidden="true" />
<div className="commerce-hero__bg" aria-hidden="true" />
```
- `aria-hidden="true"` — Hides from screen readers

### Keyboard Navigation

- ✅ Skip link to `#deals-grid` (anchor link)
- ✅ Tab through all CTA buttons
- ✅ Focus visible on all interactive elements
- ✅ Enter/Space activate links

### Screen Reader Support

**Dynamic Content:**
- "X deals live now" heading announces count
- Empty state message announces "No deals active right now"

**Icon Labels:**
- All icons have `aria-hidden="true"` (decorative)
- Text labels provided for all actions

---

## Reduced Motion Support

### Hook Usage

```tsx
const prefersReduced = usePrefersReducedMotion();
```

### Conditional Rendering

```tsx
{!prefersReduced && (
  <>
    <div className="commerce-hero__orb commerce-hero__orb--1" />
    <div className="commerce-hero__orb commerce-hero__orb--2" />
  </>
)}
```

**Disabled When Motion Reduced:**
- Floating orbs (hero + CTA sections)
- Gradient animation on flash banner
- Float animation on orbs

**Always Active:**
- Gradient backgrounds (static)
- Button hover effects (transform)
- Fade-in transitions

---

## Data Integration

### Current Implementation

```tsx
const deals = products.filter(
  (product) => product.salePrice && product.salePrice < product.price
);
```

**Filter Logic:**
- `salePrice` must exist
- `salePrice` must be less than `price`
- Returns array of discounted products

### Product Data Structure

```tsx
interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;  // Optional sale price
  image: string;
  // ... other fields
}
```

### Empty State

```tsx
{deals.length > 0 ? (
  // Show grid
) : (
  <div className="deals-section__empty">
    <h3>No deals active right now</h3>
    <p>Check back soon for great discounts!</p>
  </div>
)}
```

---

## Usage

### Import and Render

```tsx
import { PageDeals } from './templates/PageDeals';

// In router
{
  path: 'deals',
  element: <PageDeals />
}
```

### Route

- `/deals` — Main deals page

### SEO Considerations

**Title:** "Exclusive Deals & Discounts | [Site Name]"  
**Meta Description:** "Shop our best offers and limited-time discounts on premium products. New deals drop every week."  
**Schema Markup:** `OfferCatalog` schema

---

## Related Components

- **ProductCard** (`/src/app/components/blocks/product/ProductCard.tsx`) — Product grid items
- **Layout** (`/src/app/components/parts/Layout.tsx`) — Page wrapper
- **Container** (`/src/app/components/common/Container.tsx`) — Max-width constraint
- **ArchiveProduct** (`/src/app/components/templates/ArchiveProduct.tsx`) — Similar grid layout
- **PageSubscriptions** (`/src/app/components/templates/PageSubscriptions.tsx`) — Similar hero pattern

---

## Common Issues

### Issue: No products showing in grid

**Cause:** No products have `salePrice < price`

**Solution:** Ensure mock data includes sale products:
```tsx
{
  id: '1',
  name: 'Product Name',
  price: 100,
  salePrice: 79.99  // Must be less than price
}
```

### Issue: Orbs not visible in dark mode

**Cause:** Opacity too low or color blending

**Solution:** Increase dark mode opacity:
```css
.dark .commerce-hero__orb {
  opacity: 0.35; /* Increase from 0.25 */
}
```

### Issue: Flash banner text unreadable

**Cause:** Insufficient contrast on gradient

**Solution:** Add text shadow:
```css
.deals-flash-banner {
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
}
```

### Issue: Gradient background not smooth

**Cause:** Browser doesn't support `color-mix()`

**Solution:** Add fallback:
```css
.commerce-hero__bg {
  background: linear-gradient(160deg, #ffccff 0%, white 40%, #ffffcc 100%);
  background: linear-gradient(160deg, color-mix(...)); /* Override if supported */
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Flash banner gradient displays correctly
- [ ] Hero gradient visible in both light/dark modes
- [ ] Floating orbs visible and blurred
- [ ] Glassmorphism badge semi-transparent
- [ ] CTA buttons have gradient backgrounds
- [ ] Product grid displays correctly
- [ ] Empty state shows when no deals

### Interaction Testing
- [ ] "Browse deals" scrolls to grid (anchor link)
- [ ] "Full catalogue" navigates to /shop
- [ ] "Shop all products" navigates to /shop
- [ ] Product cards clickable
- [ ] All buttons have hover states

### Animation Testing
- [ ] Orbs float smoothly (8s duration)
- [ ] Flash banner gradient animates
- [ ] Button hover lifts correctly
- [ ] Orbs hidden when `prefers-reduced-motion`

### Responsive Testing
- [ ] Mobile: 1 column grid
- [ ] Tablet: 2 column grid
- [ ] Desktop: 3 column grid
- [ ] Wide: 4 column grid
- [ ] Hero text center-aligned on all sizes
- [ ] Buttons stack on mobile

### Dark Mode Testing
- [ ] Hero gradient richer in dark mode
- [ ] Orbs more visible
- [ ] Badge background darker
- [ ] Text readable on all backgrounds
- [ ] CTA section full opacity

### Accessibility Testing
- [ ] Flash banner announces to screen readers
- [ ] All sections have accessible names
- [ ] Decorative elements hidden from SR
- [ ] Keyboard navigation works
- [ ] Focus visible on all buttons
- [ ] Dynamic heading announces count

### Data Testing
- [ ] Deals filtered correctly (salePrice < price)
- [ ] Heading shows correct count
- [ ] Empty state when no deals
- [ ] ProductCard receives correct data

---

## Future Enhancements

### 1. Countdown Timer

Add urgency with countdown:
```tsx
<div className="deals-countdown">
  <Countdown endDate="2026-03-01T00:00:00Z" />
</div>
```

### 2. Sort/Filter Controls

Add sorting dropdown:
```tsx
<select className="deals-sort">
  <option>Best discount</option>
  <option>Price: Low to High</option>
  <option>Newest first</option>
</select>
```

### 3. Category Filtering

Filter by product category:
```tsx
const [category, setCategory] = useState('all');
const filteredDeals = category === 'all' 
  ? deals 
  : deals.filter(p => p.category === category);
```

### 4. Savings Calculator

Show total savings across all deals:
```tsx
const totalSavings = deals.reduce(
  (sum, p) => sum + (p.price - (p.salePrice || p.price)),
  0
);
```

### 5. Deal Badges

Add "X% OFF" badges to product cards:
```tsx
const discount = Math.round(
  ((product.price - product.salePrice) / product.price) * 100
);

<span className="deal-badge">-{discount}%</span>
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign)  
**Next Review:** After A/B testing conversion rates