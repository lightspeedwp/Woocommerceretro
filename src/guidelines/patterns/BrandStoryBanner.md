# BrandStoryBanner Pattern

**Version:** 1.0
**Type:** Pattern (Brand Narrative)
**WordPress Mapping:** Cover Block + Content Pattern
**File:** `/src/app/components/patterns/BrandStoryBanner.tsx`
**BEM:** `.wp-brand-story__*`

---

## Overview

Full-width narrative banner telling the brand story with background treatment, heading, body text, and CTA. Used on the homepage.

---

## Component structure

```
BrandStoryBanner (Pattern)
├── Background treatment (image/gradient)
├── Floating orbs (decorative)
├── Glass content panel
│   ├── Heading
│   ├── Story text
│   └── CTA button ("Our story" / "Learn more")
```

---

## BEM class map

| Element | Class |
|---------|-------|
| Root | `.wp-brand-story` |
| Background | `.wp-brand-story__background` |
| Panel | `.wp-brand-story__panel` |
| Heading | `.wp-brand-story__heading` |
| Text | `.wp-brand-story__text` |
| CTA | `.wp-brand-story__cta` |
| Orb | `.wp-brand-story__orb` |

---

## Retro / funky spec

- Commerce gradient background (`--wp--preset--gradient--commerce`)
- Glass content panel overlay with `backdrop-filter: blur(12px)`
- 2 floating orbs (cyan + pink, subtle animation)
- Gradient text on heading
- Glow CTA button
- Respect `prefers-reduced-motion`: disable orb animation

---

## Data source

- `/src/app/data/homepage.ts` (`brandStory` export)

---

## Used in

- `FrontPageRetro` (via BrandStoryBanner pattern)

---

**Version:** 1.0 (March 2026)
