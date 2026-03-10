# Layout Component

**Type**: Part (Global Region)  
**Location**: `/src/app/components/parts/Layout.tsx`  
**Category**: Page Structure  
**Version**: 2.6 (Funky Redesign — Phase 2)

---

## Purpose

Primary layout wrapper for the entire application. Provides consistent page structure (header, breadcrumbs, main content, footer) and accessibility features (skip navigation, back-to-top, cookie consent) across all pages.

**Use Layout for:** All standard pages (homepage, shop, product, cart, account, blog, info)  
**Do NOT use Layout for:** Checkout pages (use `CheckoutLayout` instead)

---

## Component Structure

```
Layout (.wp-site-layout)
  |-- SkipNavigation (common) — "Skip to main content" link
  |-- BackToTopButton (common) — Floating scroll-to-top
  |-- Header (part) — Smart switcher (MainHeader or CheckoutHeader)
  |-- <main #main-content .wp-site-main>
  |     |-- BreadcrumbsBar (part) — Auto-generated path breadcrumbs
  |     |-- {children} — Page template content
  |-- Footer (part) — Smart switcher (MainFooter or CheckoutFooter)
  |-- CookieConsent (common) — GDPR cookie banner
```

---

## Props

```tsx
interface LayoutProps {
  children: React.ReactNode;
  variant?: 'corporate' | 'shop' | 'experiences' | 'events'; // Legacy, unused
}
```

**Note:** The `variant` prop is deprecated and has no effect. Kept for backward compatibility.

---

## BEM Classes

| Element | Class |
|---------|-------|
| Wrapper | `.wp-site-layout` |
| Main content | `.wp-site-main` |

---

## Funky Treatments

Layout itself is a thin wrapper — funky treatments are inherited from child parts:

| Child | Funky Treatment | Source |
|-------|----------------|--------|
| Header | Glassmorphism navbar, neon nav underlines, mega menu glass | `parts-funky.css` |
| BreadcrumbsBar | Gradient bottom border, neon link hovers | `parts-funky.css` |
| Footer | Gradient top divider, glow orbs, neon social icons | `parts-funky.css` |
| Theme toggle | Smooth dark mode transition (bg/color/border 0.3s) | `parts-funky.css` |

**CSS:** `.wp-site-layout` in `/src/styles/globals.css`

---

## Accessibility

- `<main>` element with `id="main-content"`, `role="main"`, `aria-label="Main content"`
- `tabIndex={-1}` on main for programmatic focus management
- `SkipNavigation` component provides "Skip to main content" link
- Proper landmark structure (header → main → footer)
- BackToTopButton provides scroll navigation
- CookieConsent is non-blocking (banner, not modal)

---

## Usage

```tsx
import { Layout } from '../parts/Layout';

export const FrontPage = () => (
  <Layout>
    <section className="front-page__hero">...</section>
    <section className="front-page__features">...</section>
    <section className="front-page__products">...</section>
  </Layout>
);
```

All templates wrap their content in `<Layout>` — no template should render Header/Footer directly.

---

## Dark Mode

Layout provides the structural container for dark mode transitions. The `body` element has CSS transitions on `background-color` and `color` (0.3s ease) so theme changes feel smooth.

---

## Related Components

- `CheckoutLayout` — Alternative wrapper for checkout flow
- `Header` — Smart header switcher (rendered by Layout)
- `Footer` — Smart footer switcher (rendered by Layout)
- `BreadcrumbsBar` — Breadcrumb navigation (rendered by Layout)
- `SkipNavigation` — Accessibility skip link (rendered by Layout)
- `BackToTopButton` — Scroll-to-top button (rendered by Layout)
- `CookieConsent` — GDPR consent banner (rendered by Layout)

---

**Last Updated:** February 2026  
**Status:** ✅ Production Ready (Funky Redesign Complete)
