---
title: "CSS Architecture & Optimization Guidelines"
version: "2.0"
date: "2026-03-16"
scope: "PlayPocket WooCommerce Prototype"
purpose: "CSS architecture reference, optimization standards, and current file structure"
---

# CSS Architecture & Optimization Guidelines

## Current Architecture Overview

### Entry Point

- **File:** `/styles/globals.css` (auto-loaded by Figma Make)
- **Total @imports:** ~280
- **Strategy:** Single manifest importing all CSS modules in cascade order

### Token System (Single Source of Truth)

| File | Purpose | Selector |
|------|---------|----------|
| `retro-theme.css` | Raw retro tokens (`--color-*`, `--font-*`) | `:root` + `.dark` |
| `theme-variables.css` | WP preset mapping (`--wp--preset--*`) | `:root` + `.dark, :root.dark` |
| `theme-dark-mode.css` | Raw dark tokens (`--retro-dark-*`) + funky glass | `.dark` |
| `theme-light-mode.css` | Light mode overrides (minimal) | `:root` |
| `theme-funky.css` | Legacy funky theme tokens | `:root` |

**Token resolution chain:** `retro-theme.css` → `theme-variables.css` maps `--color-*` to `--wp--preset--*` → Components use `--wp--preset--*`.

### File Structure

```
/src/styles/
├── critical.css                    # Above-the-fold critical styles
├── layout-grid.css                 # Grid and flexbox utility classes
├── retro-theme.css                 # Raw retro design tokens (~388 lines)
├── theme-variables.css             # WP preset mapping (~340 lines)
├── theme-dark-mode.css             # Dark mode raw tokens (~60 lines)
├── theme-light-mode.css            # Light mode overrides
├── theme-funky.css                 # Legacy funky tokens
├── utilities.css                   # Utility classes (~935 lines)
├── utilities-minimal.css           # Minimal utility subset
├── wordpress-core.css              # WP core block styles (~530 lines)
├── woocommerce-core.css            # WC core block styles (~1105 lines)
├── blocks/                         # 20 subdirectories, 130+ files
│   ├── archive/                    # Archive/query loop blocks
│   ├── blog/                       # Blog-specific blocks
│   ├── cart/                       # Cart blocks
│   ├── checkout/                   # Checkout blocks (incl. funky-checkout)
│   ├── design/                     # Card, accordion, separator, etc.
│   ├── display/                    # 3D components, badges, galleries
│   ├── embed/                      # Embedded media blocks
│   ├── feedback/                   # Toast, notifications, alerts
│   ├── forms/                      # Form blocks
│   ├── forms-advanced/             # Complex form patterns
│   ├── interactive/                # Tabs, toggles, carousels
│   ├── layout/                     # Header, footer, sidebar
│   ├── media/                      # Image, video, audio blocks
│   ├── navigation/                 # Nav, mega menu, mobile menu
│   ├── overlay/                    # Dialogs, modals, drawers
│   ├── product/                    # Product card, gallery, meta
│   ├── search/                     # Search overlay, results
│   ├── sections/                   # Section pattern blocks
│   ├── text/                       # Heading, paragraph, list
│   ├── theme/                      # Theme-specific (header, devtools)
│   ├── ui/                         # Button, input, select
│   ├── widgets/                    # Widget blocks
│   └── woocommerce/                # WC-specific (order, reviews)
└── sections/                       # 97 section CSS files
    ├── front-page*.css             # Home page sections
    ├── *-retro.css                 # Retro theme page sections (20+)
    ├── *-funky.css                 # Legacy funky sections (10+)
    ├── sweep-*.css                 # Split from sweep-cleanup (7 files)
    ├── legacy-*.css                # Legacy utility classes (9 files)
    └── [feature].css               # Feature-specific sections (50+)
```

### Naming Conventions

| Convention | Prefix | WordPress Equivalent | Count |
|------------|--------|---------------------|-------|
| WordPress Block | `.wp-block-*` | Core Block | ~45 |
| WordPress Site | `.wp-site-*` | Template Part | ~10 |
| WooCommerce Block | `.wc-block-*` | WC Block | ~15 |
| WooCommerce Page | `.woocommerce-*` | WC Component | ~8 |
| Retro Theme | `.retro-*` | Theme-specific | ~20 |
| PlayPocket Brand | `.pp-*` | Theme home page | ~9 |
| Funky Legacy | `.funky-*` | Legacy theme | ~12 |

### Dark Mode

- Toggle: `.dark` class on `<html>` element
- Token-driven: Components use `--wp--preset--*` variables that auto-switch
- Explicit overrides: `.dark .block-name { }` when auto-switch insufficient
- **Single source:** `theme-variables.css` is the canonical dark mode `--wp--preset--*` definition

### File Size Limits

| File Type | Max Lines | Current Violations |
|-----------|-----------|-------------------|
| Block CSS | 200 | `account-dashboard-widgets.css` (471 lines) |
| Root CSS | N/A | `utilities.css` (935), `woocommerce-core.css` (1105), `wordpress-core.css` (530) |

Root files are exempt from the 200-line limit because they aggregate WordPress/WooCommerce core styles.

---

## Key Principles

### 1. Token-First Architecture

All values must come from CSS variables. No hardcoded hex, px, rem, or font names in component CSS.

| Property | Token Pattern | Example |
|----------|--------------|---------|
| Color | `var(--wp--preset--color--*)` | `var(--wp--preset--color--foreground)` |
| Spacing | `var(--wp--preset--spacing--*)` | `var(--wp--preset--spacing--40)` |
| Font size | `var(--wp--preset--font-size--*)` | `var(--wp--preset--font-size--small)` |
| Font weight | `var(--wp--preset--font-weight--*)` | `var(--wp--preset--font-weight--bold)` |
| Border radius | `var(--wp--preset--border-radius--*)` | `var(--wp--preset--border-radius--sm)` |
| Shadow | `var(--wp--preset--shadow--*)` | `var(--wp--preset--shadow--md)` |
| Transition | `var(--wp--preset--transition--*)` | `var(--wp--preset--transition--base)` |

### 2. No Tailwind in Markup

All utility classes (`flex`, `p-4`, `text-center`, `bg-*`, `dark:*`) are banned in `className` attributes. Replace with BEM classes backed by CSS variables.

```tsx
// ❌ Tailwind
<div className="bg-white dark:bg-gray-900 p-4 rounded-lg">

// ✅ BEM + tokens
<div className="wp-block-card">
```

### 3. BEM Naming

Use Block-Element-Modifier with appropriate prefix:

```css
/* Block */
.wp-block-card { }
/* Element */
.wp-block-card__title { }
/* Modifier */
.wp-block-card--featured { }
/* State */
.wp-block-card.is-loading { }
```

### 4. Gap Over Margin

Use `gap` in flex/grid containers instead of margins. Only exception: `margin: 0 auto` for centering.

```css
/* ❌ Margin spacing */
.card { margin-bottom: 16px; }

/* ✅ Gap spacing */
.card-grid { display: grid; gap: var(--wp--preset--spacing--40); }
```

### 5. Per-Block CSS Files

Each component gets its own CSS file under `/src/styles/blocks/[category]/`. Max 200 lines per file.

### 6. No `!important`

Organize imports and keep selectors flat. Acceptable exceptions:
- Accessibility overrides (`.sr-only`)
- Third-party library overrides (last resort)

### 7. Flat Selectors

Avoid deep descendant chains. Prefer single BEM class selectors.

```css
/* ❌ Deep nesting */
.page .container .sidebar .widget .title { }

/* ✅ Flat BEM */
.wp-block-widget__title { }
```

---

## Accessibility Requirements

### Contrast

| Check | Ratio | Standard |
|-------|-------|----------|
| Normal text on background | 4.5:1 minimum | WCAG AA |
| Large text (18px+ bold, 24px+) | 3:1 minimum | WCAG AA |
| UI components and graphics | 3:1 minimum | WCAG 1.4.11 |
| Normal text target | 7:1 | WCAG AAA |

### Focus Visibility

Every interactive element must have visible `:focus-visible` styles using token-based outline.

### Reduced Motion

Honour `prefers-reduced-motion: reduce`. Use `var(--wp--preset--transition--base)` for all transitions — it resolves to `0ms` when reduced motion is active.

### Touch Targets

All interactive elements: minimum 44×44px touch target area.

---

## Dark Mode Implementation

- **Selector:** `.dark` class on `<html>` (not `[data-theme="dark"]`)
- **Token source:** `theme-variables.css` `.dark, :root.dark` block
- **Raw tokens:** `theme-dark-mode.css` `.dark` block (`--retro-dark-*`)
- **Components:** Use `--wp--preset--*` variables (auto-switch). Add explicit `.dark .block { }` only when needed.

**Rules:**
1. Never use hardcoded hex in `.dark` overrides
2. Never use `dark:` prefix classes (Tailwind pattern)
3. Test every component in both light and dark modes
4. Use semantic tokens that auto-switch whenever possible

---

## Adding New Styles

### New Block CSS File

1. Create in `/src/styles/blocks/[category]/[block-name].css`
2. Add BEM header comment with block name and component path
3. Use `--wp--preset--*` tokens for all values
4. Add `.dark` overrides if auto-switch is insufficient
5. Add `@import` to `/styles/globals.css`
6. Keep under 200 lines

### New Section CSS File

1. Create in `/src/styles/sections/[section-name].css`
2. Follow same rules as block CSS
3. Add `@import` to `/styles/globals.css`

### Retro Design Compliance

New classes for retro-themed components must follow:

| Property | Retro Standard |
|----------|---------------|
| Borders | `2-3px solid var(--color-ink)` |
| Box shadows | `4px 4px 0px var(--color-ink)` (hard pixel, no blur) |
| Border radius | `0` on cards/containers; `2-3px` on inputs/screens |
| Backgrounds | `var(--color-paper)` cards, `var(--color-panel)` secondary |
| Text | `var(--color-ink)` primary, `var(--color-muted)` secondary |
| CTAs/badges | `var(--color-signal)` |

---

## Validation Checklist

- [ ] All CSS values use tokens (no hardcoded hex/px/rem)
- [ ] BEM naming with correct prefix
- [ ] Dark mode works via auto-switching tokens
- [ ] File under 200 lines (blocks/sections)
- [ ] `@import` added to globals.css
- [ ] Focus-visible styles on interactive elements
- [ ] Touch targets ≥ 44×44px
- [ ] Contrast ratios meet WCAG AA

---

**Version:** 2.0  
**Last Updated:** March 16, 2026  
**Lines:** ~280  
**Related:** `/guidelines/development/css-optimization-quick-reference.md`
