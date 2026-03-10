# Header / MainHeader Components

**Type**: Part (Global Region)  
**Location**: `/src/app/components/parts/Header.tsx` (switcher), `/src/app/components/parts/MainHeader.tsx` (implementation)  
**Category**: Navigation  
**Version**: 2.6 (Funky Redesign — Phase 2)

---

## Purpose

The Header is a global template part that appears on all pages except checkout. Provides primary navigation, search, account access, theme toggle, and cart visibility.

`Header.tsx` is a **smart switcher** — it reads the current route and renders either `MainHeader` (default) or `CheckoutHeader` (for `/checkout` and `/order-confirmation` routes).

**Header appears on:** Homepage, Shop/Archive, Single Product, Cart, Account, Blog, Info pages  
**Header does NOT appear on:** Checkout, Order Confirmation (uses CheckoutHeader)

---

## Architecture

```
Header (smart switcher)
  |-- if checkout route  → CheckoutHeader
  |-- else               → MainHeader
```

### MainHeader Composition

```
MainHeader
  |-- Container (common)
  |-- ShopLogo (common)
  |-- Navigation (block/theme)
  |     |-- MAIN_MENU items (from data/navigation)
  |     |-- 5x Mega Menu components (on hover)
  |-- ThemeToggle (block/theme) — dark/light
  |-- Search input (collapsible)
  |-- MiniCart (part) — trigger + drawer
  |-- User account icon link
  |-- MobileMenu trigger (hamburger, mobile only)
```

---

## Component Structure

### Desktop Layout (>= 1024px)

```
+--------------------------------------------------------------------+
|  [Logo]    [Shop | Blog | About | Contact | ...]    [🔍] [🌗] [👤] [🛒] |
+--------------------------------------------------------------------+
```

### Mobile Layout (< 1024px)

```
+--------------------------------------+
|  [☰]  [Logo]           [🔍] [🛒]     |
+--------------------------------------+
```

---

## Data Sources

| Data | Import | File |
|------|--------|------|
| Main menu | `MAIN_MENU` | `@/data/navigation` |

---

## Funky Treatments

| Element | Treatment | CSS |
|---------|-----------|-----|
| Navbar | Glassmorphism, `backdrop-blur(16px)`, semi-transparent bg | `.wp-site-header--funky` |
| Nav links | Gradient underline on hover (pink→cyan), `scaleX(0→1)` | `parts-funky.css` |
| Action buttons | Neon hover color + `--funky-interactive-bg` | `parts-funky.css` |
| Search focus | Neon cyan ring with glow shadow | `parts-funky.css` |
| Logo | Subtle opacity transition on hover | `parts-funky.css` |
| Cart badge | Neon gradient (via MiniCart) | `parts-funky.css` |
| Mega menus | Glass panels, gradient section titles, neon badges | `parts-funky.css` |
| Dark mode | `rgba(3,2,19,0.92)` glass, cyan text-shadows on hover | `parts-funky.css` |
| Sticky scroll | Glass effect preserved | `parts-funky.css` |
| Focus rings | AA-compliant `--funky-interactive-focus` | `parts-funky.css` |
| Reduced motion | Nav underline transition disabled | `parts-funky.css` |

**CSS Files:**
- Base: `/src/styles/blocks/layout/header.css`
- Funky: `/src/styles/blocks/theme/parts-funky.css`

---

## Mega Menu Components

| Menu | Component | Triggered By |
|------|-----------|-------------|
| Shop | `ShopMegaMenu` | Shop nav item hover |
| Blog | `BlogMegaMenu` | Blog nav item hover |
| About | `AboutMegaMenu` | About nav item hover |
| Contact | `ContactMegaMenu` | Contact nav item hover |
| Promotions | `PromotionsMegaMenu` | Promotions nav item hover |

All mega menus share glass panel treatment from `parts-funky.css`.

---

## Accessibility

- Skip navigation link targets `#main-content`
- `aria-label` on icon-only buttons (search, cart, account, menu)
- `aria-expanded` on mobile menu and search toggles
- Focus-visible states with neon outline on all interactive elements
- 44x44px minimum touch targets on all buttons
- Mega menus accessible via keyboard (Enter to open, Escape to close)
- `aria-current="page"` on active navigation item

---

## Dark Mode

Handled via CSS variables:
- Glass navbar uses stronger `rgba(3,2,19,0.92)` in dark
- Nav link text shifts to light colors
- Hover states use cyan text-shadow
- Search input uses surface bg with lighter border
- All text meets WCAG AA contrast

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<1024px) | Hamburger menu, hidden nav links, compact layout |
| Desktop (>=1024px) | Full inline navigation, mega menus, visible search |

---

## Related Components

- `CheckoutHeader` — Minimal header for checkout flow
- `MobileMenu` — Full-screen mobile navigation overlay
- `MiniCart` — Slide-out cart drawer
- `Navigation` — Reusable navigation block
- `Layout` — Parent wrapper that renders Header

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

**Last Updated:** February 2026  
**Status:** ✅ Production Ready (Funky Redesign Complete)
