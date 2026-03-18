# Section patterns

**Version:** 1.0
**Type:** Pattern (Section Wrappers)
**Directory:** `/src/app/components/patterns/sections/`
**Index:** `/src/app/components/patterns/sections/index.ts`
**CSS:** `/src/styles/sections/section-patterns.css`
**WordPress Block:** `core/group` with style variations

---

## Overview

Eight section wrapper patterns that map to WordPress FSE Group block style variations. Each wraps arbitrary content in a consistent section with heading, subheading, optional CTA, and background treatment. All accept `children` or `content` prop.

---

## Components

| Component | BEM Root | Background | Purpose |
|-----------|----------|------------|---------|
| `ContentSection` | `.wp-section--content` | White / dark surface | Default content wrapper |
| `DarkSection` | `.wp-section--dark` | Dark / commerce gradient | High-contrast sections |
| `AccentSection` | `.wp-section--accent` | Brand accent gradient | Promotional highlights |
| `MutedSection` | `.wp-section--muted` | Subtle grey tint | Secondary content |
| `HeroSection` | `.wp-section--hero` | Full-height gradient | Page hero banners |
| `BorderedSection` | `.wp-section--bordered` | White with top/bottom borders | Visual separation |
| `FullWidthSection` | `.wp-section--full-width` | Edge-to-edge | Full-bleed layouts |
| `CompactSection` | `.wp-section--compact` | White, reduced padding | Dense content areas |

---

## Shared props interface

```typescript
interface SectionProps {
  heading?: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  subheading?: string;
  content?: React.ReactNode;
  cta?: { label: string; href: string; variant?: string };
  id?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}
```

---

## Shared BEM structure

```
Section (any variant)
├── <section> wrapper with variant class
│   ├── Heading (via headingLevel prop)
│   ├── Subheading (optional)
│   ├── Content / children slot
│   └── CTA button (optional)
```

All sections render via the `Group` block component internally.

---

## Retro / funky spec

| Variant | Retro treatment |
|---------|-----------------|
| Content | Funky alternating backgrounds (glass-tinted even sections) |
| Dark | Commerce gradient (`--wp--preset--gradient--commerce`), floating orbs, glass content overlay |
| Accent | Brand gradient background, glass overlay |
| Muted | Subtle `accent-soft` gradient tint |
| Hero | Orbs, gradient overlay, glass badge, spring CTA |
| Bordered | Gradient glow border top/bottom |
| FullWidth | Full-bleed gradient, glass content container |
| Compact | Gradient divider, reduced spacing |

---

## Accessibility

- All render as `<section>` with `aria-label` (from `ariaLabel` prop or derived from `heading`)
- Heading level configurable (default `<h2>`) — maintains page heading hierarchy
- CTA renders as `<a>` with visible label (no icon-only CTAs)
- Background colour contrasts meet 4.5:1 AA against text in all variants

---

## Usage

```tsx
import { ContentSection, DarkSection } from '@/components/patterns/sections';

<ContentSection heading="Featured products" ariaLabel="Featured products section">
  <ProductGrid products={featured} />
</ContentSection>

<DarkSection
  heading="Join our newsletter"
  subheading="Get 10% off your first order"
  cta={{ label: "Subscribe", href: "/newsletter" }}
/>
```

---

## Used in

- All page templates (`FrontPageRetro`, `PageAbout`, `SingleProductRetro`, etc.)
- Composable with any content pattern

---

**Version:** 1.0 (March 2026)
