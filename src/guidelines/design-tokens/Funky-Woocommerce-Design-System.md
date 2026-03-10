# Funky WooCommerce Design System

**Version:** 1.1  
**Created:** February 21, 2026  
**Last Updated:** 2026-02-22  
**Scope:** The definitive guide to the "Funky WooCommerce" design language -- bold gradients, neon accents, glassmorphism, and kinetic interactions layered onto a WordPress Block Theme architecture.  
**Parent System:** WordPress FSE / WooCommerce Theme (Guidelines v2.6)  
**CSS Files:** `/src/styles/theme-variables.css`, `/src/styles/theme-funky.css`

---

## 1. Design Philosophy

The "Funky WooCommerce" aesthetic transforms a neutral ecommerce prototype into a **premium, high-energy shopping experience**. It uses bold gradients, neon accents, and purposeful animation to make every interaction feel intentional and exciting.

### The Three Modes of Funky

1. **Full Funky** -- Hero sections, landing pages, marketing sections (orbs, gradients, glassmorphism, animation)
2. **Subtle Funky** -- Product listings, blog grids, content sections (glow borders, gradient dividers, accent colours)
3. **Clean Funky** -- Cart, checkout, forms, legal pages (neon focus states, minimal animation, readability first)

---

## 2. Colour System

### 2.1 Neon Accent Palette

| Token | CSS Variable | Value | Usage |
|-------|-------------|-------|-------|
| Neon Pink | `--wp--preset--color--neon-pink` | `#ff00ff` | Primary glow, orbs, gradient stops |
| Neon Cyan | `--wp--preset--color--neon-cyan` | `#00ffff` | Secondary glow, borders, input focus |
| Neon Lime | `--wp--preset--color--neon-lime` | `#00ff00` | Success states, sale badges |
| Neon Yellow | `--wp--preset--color--neon-yellow` | `#ffff00` | Warning states, flash sale |
| Deep Purple | `--wp--preset--color--deep-purple` | `#2d0059` | Dark hero overlays |

**Accessibility Rule:** Neon colours are NEVER used as body text colour. They are used ONLY for decorative elements.

### 2.2 Glassmorphism Tokens

| Variable | Light Mode | Dark Mode |
|----------|-----------|-----------| 
| `--funky-glass-bg` | `rgba(255, 255, 255, 0.85)` | `rgba(3, 2, 19, 0.95)` |
| `--funky-glass-border` | `rgba(0, 0, 0, 0.1)` | `rgba(255, 255, 255, 0.1)` |
| `--funky-glass-shadow` | `0 4px 20px rgba(0,0,0,0.05)` | `0 4px 20px rgba(0,255,255,0.15)` |

### 2.3 Gradient Tokens

| Name | Value | Usage |
|------|-------|-------|
| Neon Hero | `linear-gradient(135deg, rgba(255,0,255,0.8), rgba(0,255,255,0.8))` | Hero overlays |
| Neon Glow | `linear-gradient(45deg, neon-pink, neon-cyan)` | Card glow borders |

---

## 3. Typography

Uses the WordPress fluid system exclusively. No hardcoded font sizes. See `/guidelines/design-tokens/Typography.md` for the full scale (100-900).

### Gradient Text

```css
.page-name__title--gradient {
  background: linear-gradient(135deg, var(--wp--preset--color--neon-pink), var(--wp--preset--color--neon-cyan));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 4. Animation System

### Keyframes
| Animation | Class | Duration | Usage |
|-----------|-------|----------|-------|
| Float | `.funky-animate-float` | 6s infinite | Background orbs |
| Glow Pulse | `.funky-animate-glow` | 3s infinite | CTA attention |

### Reduced Motion (MANDATORY)

```css
@media (prefers-reduced-motion: reduce) {
  .funky-animate-float, .funky-animate-glow, .funky-spring-hover {
    animation: none !important;
    transition: none !important;
    transform: none !important;
  }
}
```

---

## 5. Component Patterns

### 5.1 Floating Orbs
- Maximum 3 orbs per section
- Stagger delays: `0s`, `-3s`, `-5s`
- Light mode opacity: 0.1 - 0.2 / Dark mode: 0.15 - 0.35
- Mobile: Reduce to `opacity: 0.08` or `display: none`

### 5.2 Glassmorphism Panels
- Always pair with `backdrop-filter: blur(12px)`
- Use for: header, hero badges, modal backgrounds

### 5.3 Glow Border Cards
- Glow reveals on hover only (opacity 0 to 1)
- Gradient: 45deg (pink to cyan)

### 5.4 Gradient Dividers
- Use between sections instead of plain borders
- Light mode: `opacity: 0.3` / Dark mode: `opacity: 0.5`

---

## 6. Section Scoring Rubric

| Score | Meaning | Criteria |
|-------|---------|----------|
| **FUNKY** | Fully styled | Has 2+ funky elements |
| **PARTIAL** | Some styling | Has 1 funky element |
| **PLAIN** | Generic | No funky treatment |
| **BROKEN** | Issues found | Dark mode fails, hardcoded values |

**Target:** Every section across the site should score FUNKY.

---

## 7. BEM Naming Reference

```css
.front-page { }
.front-page__hero { }
.front-page__hero-overlay { }
.front-page__hero-orb--1 { }
.front-page__features-card { }
.dark .front-page__hero-overlay { }
```

---

## 8. Checklist for New Funky Sections

- [ ] Has 2+ funky treatments
- [ ] All colours use `var(--wp--preset--color--*)` variables
- [ ] All spacing uses `var(--wp--preset--spacing--*)` variables
- [ ] All font sizes use `var(--wp--preset--font-size--*)` variables
- [ ] BEM naming follows `page-name__element--modifier` pattern
- [ ] `.dark` CSS variants for all colour-dependent rules
- [ ] `@media (prefers-reduced-motion: reduce)` guard on all animations
- [ ] Mobile responsive (works at 320px)
- [ ] WCAG 2.1 AA text contrast (4.5:1 normal, 3:1 large)
- [ ] No `!important`, no inline `style={{}}`, no Tailwind

---

## 9. File Locations

| Purpose | Path |
|---------|------|
| WordPress CSS Variables | `/src/styles/theme-variables.css` |
| Funky Tokens & Animations | `/src/styles/theme-funky.css` |
| Dark Mode Overrides | `/src/styles/theme-dark-mode.css` |
| Block CSS (per-block) | `/src/styles/blocks/{category}/{block}.css` |
| Section CSS (per-section) | `/src/styles/sections/{section}.css` |
| This Design System | `/guidelines/design-tokens/Funky-Woocommerce-Design-System.md` |
| Funky Theme Tokens | `/guidelines/design-tokens/Funky-Theme.md` |

---

## Changelog

### v1.1 - 2026-02-22
- Renamed from `funky-woocommerce-design-system.md` to `Funky-Woocommerce-Design-System.md`
- Updated internal file references to use uppercase guideline filenames

### v1.0 - 2026-02-21
- Initial design system document
