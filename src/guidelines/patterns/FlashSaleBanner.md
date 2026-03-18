# FlashSaleBanner Pattern

**Version:** 1.0
**Type:** Pattern (Promotional Banner)
**WordPress Mapping:** Sale Banner Block Pattern
**File:** `/src/app/components/patterns/FlashSaleBanner.tsx`
**CSS:** `/src/styles/sections/flash-sale.css`
**BEM:** `.wc-flash-sale__*`

---

## Overview

Countdown-driven promotional banner for flash sales and limited-time offers. Displays countdown timer, sale headline, description, and CTA. Used on deals pages and optionally on the homepage or archive.

---

## Component structure

```
FlashSaleBanner (Pattern)
├── Background treatment (gradient)
├── Content container
│   ├── Sale headline
│   ├── Sale description
│   ├── Countdown timer
│   │   ├── Days
│   │   ├── Hours
│   │   ├── Minutes
│   │   └── Seconds
│   └── CTA button
└── Decorative elements (orbs)
```

---

## BEM class map

| Element | Class | Purpose |
|---------|-------|---------|
| Root | `.wc-flash-sale` | Banner wrapper |
| Content | `.wc-flash-sale__content` | Text + CTA container |
| Headline | `.wc-flash-sale__headline` | Sale title |
| Description | `.wc-flash-sale__description` | Supporting text |
| Timer | `.wc-flash-sale__timer` | Countdown container |
| Digit | `.wc-flash-sale__digit` | Individual time unit |
| Label | `.wc-flash-sale__label` | "Days" / "Hours" etc. |
| Separator | `.wc-flash-sale__separator` | Colon between units |
| CTA | `.wc-flash-sale__cta` | Action button |

### Modifiers

| Modifier | Purpose |
|----------|---------|
| `.wc-flash-sale--expired` | Sale ended state |
| `.wc-flash-sale--compact` | Inline banner variant |
| `.wc-flash-sale--urgent` | Under 1 hour remaining |

---

## Retro / funky spec

- Sale gradient background: `--wp--preset--gradient--sale` (pink to orange to yellow)
- Neon countdown digits with glow effect
- Glowing separator colons (pulse animation)
- Glass CTA button with hover glow
- 1-2 small floating orbs (animated)
- Spring animation on countdown tick (digit change)
- Pixel-font variant for countdown digits
- Respect `prefers-reduced-motion`: disable orb animation, pulse, spring

---

## Accessibility

- `role="timer"` on countdown container
- `aria-live="polite"` for countdown updates (throttled to 1/min for screen readers)
- `aria-label` on banner describing the sale
- CTA button: 44x44px minimum touch target
- Colour contrast: sale text against gradient background meets 4.5:1 AA
- Countdown digits must be readable without colour alone

---

## Data source

- `/src/app/data/homepage.ts` or dedicated `sales.ts` (flash sale end time, headline, CTA)

---

## Used in

- `PageDeals`
- `FrontPageRetro` (optional)
- `ArchiveProductRetro` (optional)

---

## Related

- [TrustBand](/guidelines/patterns/TrustBand.md) -- trust signals often paired below sales
- [CollectionRow](/guidelines/patterns/CollectionRow.md) -- sale product row

---

**Version:** 1.0 (March 2026)
