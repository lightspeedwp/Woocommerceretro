# Spacing Design Tokens

**Component Type:** Design System  
**Scope:** WordPress theme.json Aligned Spacing Scale  
**Related:** [/guidelines/design-tokens/Typography.md], [/guidelines/mobile/spacing.md]  
**Last Updated:** 2026-03-17

---

## Overview

This document defines the spacing system for the WooCommerce prototype, aligned with WordPress theme.json standards using **numeric slugs (10-100)** for predictable scaling and design tool integration.

**Philosophy:** Consistent rhythm creates visual hierarchy. A numeric scale ensures predictable progression and mathematical relationships between spacing values.

---

## WordPress Spacing Scale

### Numeric Spacing Slugs (10-100)

| Slug | Size (rem) | Size (px) | CSS Variable | Usage |
|------|-----------|-----------|--------------|-------|
| `10` | 0.625rem | 10px | `--wp--preset--spacing--10` | Tight spacing, icon gaps |
| `20` | 1.25rem | 20px | `--wp--preset--spacing--20` | Related elements, small gaps |
| `30` | 1.875rem | 30px | `--wp--preset--spacing--30` | Compact card padding |
| `40` | 2.5rem | 40px | `--wp--preset--spacing--40` | **Default spacing**, standard gaps |
| `50` | 3.125rem | 50px | `--wp--preset--spacing--50` | Card padding, section spacing |
| `60` | 3.75rem | 60px | `--wp--preset--spacing--60` | Large card padding |
| `70` | 4.375rem | 70px | `--wp--preset--spacing--70` | Section padding (tablet) |
| `80` | 5rem | 80px | `--wp--preset--spacing--80` | Large section spacing |
| `90` | 5.625rem | 90px | `--wp--preset--spacing--90` | Extra large sections |
| `100` | 6.25rem | 100px | `--wp--preset--spacing--100` | Hero section, maximum spacing |

### Extended Scale

| Slug | Size (rem) | Size (px) | CSS Variable | Usage |
|------|-----------|-----------|--------------|-------|
| `56` | 3.5rem | 56px | `--wp--preset--spacing--56` | Touch target minimum (mobile) |
| `64` | 4rem | 64px | `--wp--preset--spacing--64` | Large touch targets |
| `72` | 4.5rem | 72px | `--wp--preset--spacing--72` | Section headers |

---

## CSS Variable Usage

```css
.container {
  padding: var(--wp--preset--spacing--40);
  margin-block: var(--wp--preset--spacing--20);
  gap: var(--wp--preset--spacing--30);
}
```

---

## Spacing Categories

### 1. Component Internal Spacing (Padding)

| Use Case | Mobile | Desktop | WordPress Variables |
|----------|--------|---------|---------------------|
| **Button padding** | 30 x 40 | 30 x 50 | `--wp--preset--spacing--30` `--wp--preset--spacing--40` |
| **Standard card** | 40 | 50 | `--wp--preset--spacing--40` to `--wp--preset--spacing--50` |
| **Input padding** | 30 | 30 | `--wp--preset--spacing--30` |

### 2. Component External Spacing (Margin)

**Prefer `gap` over `margin` for grids and flex containers.**

**WARNING:** When migrating from margins to gap, the parent container MUST have `display: flex` or `display: grid`. Removing margins without adding a layout context will collapse all spacing. See [Margin Removal Guidelines](/guidelines/development/margin-removal-guidelines.md) for complete edge cases and decision tree.

| Use Case | Spacing | WordPress Variable |
|----------|---------|-------------------|
| **Tight elements** | 20px | `--wp--preset--spacing--20` |
| **Related elements** | 40px | `--wp--preset--spacing--40` |
| **Sections** | 50-60px | `--wp--preset--spacing--50` to `--wp--preset--spacing--60` |
| **Major sections** | 80-100px | `--wp--preset--spacing--80` to `--wp--preset--spacing--100` |

### 3. Section Spacing (Vertical Rhythm)

| Section Type | Mobile | Tablet | Desktop |
|--------------|--------|--------|---------|
| **Compact** | 60px | 70px | 80px |
| **Standard** | 70px | 80px | 90px |
| **Large** | 80px | 90px | 100px |
| **Hero** | 90px | 100px | 100px |

### 4. Container Spacing (Horizontal Padding)

| Device | Spacing | WordPress Variable |
|--------|---------|-------------------|
| **Mobile** | 20px | `--wp--preset--spacing--20` |
| **Tablet** | 40px | `--wp--preset--spacing--40` |
| **Desktop** | 50px | `--wp--preset--spacing--50` |

---

## Touch Target Spacing (Mobile)

Minimum touch target size: **44px x 44px** (WCAG 2.2 Level AAA)

| Element | Size | WordPress Variables |
|---------|------|---------------------|
| **Button** | 56px height | `height: var(--wp--preset--spacing--56)` |
| **Icon button** | 56px x 56px | `width/height: var(--wp--preset--spacing--56)` |
| **Nav link** | 56px height | `min-height: var(--wp--preset--spacing--56)` |

---

## Quick Reference

| Size | Slug | rem | px | Use Case |
|------|------|-----|----|----------|
| **XS** | `10` | 0.625rem | 10px | Icon gaps |
| **SM** | `20` | 1.25rem | 20px | Related elements |
| **MD** | `40` | 2.5rem | 40px | **Default spacing** |
| **LG** | `60` | 3.75rem | 60px | Card padding |
| **XL** | `80` | 5rem | 80px | Section spacing |
| **2XL** | `100` | 6.25rem | 100px | Hero/Maximum |

---

## Retro theme spacing

### Glass panel padding

| Panel type | Padding | Variable |
|------------|---------|----------|
| **Compact card** | `--wp--preset--spacing--30` | 30px |
| **Standard glass panel** | `--wp--preset--spacing--40` | 40px |
| **Feature glass panel** | `--wp--preset--spacing--50` | 50px |
| **Hero glass overlay** | `--wp--preset--spacing--60` | 60px |

### Floating orb positioning

Orbs use percentage-based positioning (`top`, `left`, `right`) — not spacing tokens. Orb sizes use `clamp()` for fluid scaling:

```css
.section__orb {
  width: clamp(8rem, 20vw, 20rem);
  height: clamp(8rem, 20vw, 20rem);
  top: -10%;
  right: -5%;
}
```

### Neon glow offsets

Box-shadow glow values are decorative and use raw pixel values (not spacing tokens):

```css
/* Acceptable — decorative glow, not layout spacing */
box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
```

---

## Gap-first layout rule

**Always prefer `gap` over `margin` for spacing between siblings.**

```css
/* Correct — gap on flex/grid parent */
.card-grid {
  display: grid;
  gap: var(--wp--preset--spacing--40);
}

/* Incorrect — margin on children */
.card-grid__item {
  margin-bottom: var(--wp--preset--spacing--40);
}
```

Exceptions where margin is acceptable:
- `margin-block` on `<body>`, `<main>`, or page-level wrappers
- `margin: 0 auto` for centering
- Negative margins for bleed/overlap effects

---

## Changelog

### v3.0 - 2026-03-17
- Added retro theme spacing (glass panels, orbs, glow offsets)
- Added gap-first layout rule with examples and exceptions
- Updated to v3.0

### v2.2 - 2026-03-11
- Added cross-reference to Margin Removal Guidelines
- Added warning about layout context requirement when migrating margin to gap

### v2.1 - 2026-02-22
- Renamed from `spacing.md` to `Spacing.md` (naming convention enforcement)
- No content changes