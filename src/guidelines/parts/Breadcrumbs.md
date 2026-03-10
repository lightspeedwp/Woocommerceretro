# Breadcrumbs / BreadcrumbsBar Components

**Type**: Part (Global Region)  
**Location**: `/src/app/components/parts/BreadcrumbsBar.tsx` (canonical), `/src/app/components/parts/Breadcrumbs.tsx` (alias/legacy)  
**Category**: Navigation  
**Version**: 2.6 (Funky Redesign — Phase 2)

---

## Purpose

Automatic breadcrumb navigation bar that generates path-based breadcrumbs from the current URL. Improves UX wayfinding and SEO with structured navigation trails.

**`BreadcrumbsBar`** is the canonical component, rendered by `Layout` below the header on most pages.  
**`Breadcrumbs`** is a lighter alias used by some templates directly (e.g., `ShopWithSidebar`).

**Hidden on:** Homepage (`/`), single product pages (`/product/*`)

---

## Component Structure

```
BreadcrumbsBar
  |-- <nav aria-label="Breadcrumb">
        |-- <ol> (breadcrumb list)
              |-- Home icon + "Home" link
              |-- ChevronRight separator
              |-- Intermediate path segments (links or plain text)
              |-- ChevronRight separator
              |-- Current page (aria-current="page", not linked)
```

---

## Path Resolution

### Custom Path Map

```tsx
const PATH_MAP: Record<string, string> = {
  'shop': 'Shop',
  'faq': 'FAQ',
  'contact': 'Contact Us',
  'cart': 'Cart',
  'checkout': 'Checkout',
  'order-confirmation': 'Order Confirmation',
  'shipping-returns': 'Shipping & Returns',
  'product': 'Product',
  'my-account': 'My Account',
  // ...
};
```

### Non-Clickable Paths

Some intermediary segments are not navigable routes:
```tsx
const NON_CLICKABLE_PATHS = ['product', 'shop/tag'];
```

### Segment Formatting

Segments without a custom map entry are auto-formatted:
- Hyphens replaced with spaces
- Each word capitalised

---

## BEM Classes

| Element | Class |
|---------|-------|
| Nav wrapper | `.wp-breadcrumbs` |
| Container | `.wp-breadcrumbs-container` |
| List | `.wp-breadcrumbs__list` |
| Item | `.wp-breadcrumbs__item` |
| Link | `.wp-breadcrumbs__link` |
| Current | `.wp-breadcrumbs__current` |
| Separator | `.wp-breadcrumbs__separator` |
| Home icon | `.wp-breadcrumbs__home-icon` |

---

## Funky Treatments

| Element | Treatment | CSS Source |
|---------|-----------|-----------|
| Container | Gradient bottom border (pink→cyan) | `parts-funky.css` |
| Links | Neon hover color (`--funky-interactive-color`) | `parts-funky.css` |
| Current page | Slightly brighter text, no link styling | `parts-funky.css` |
| Separators | Muted foreground | `parts-funky.css` |
| Dark mode | Cyan text-shadow on link hover | `parts-funky.css` |

**CSS File:** `/src/styles/blocks/theme/parts-funky.css` (Breadcrumbs section)

---

## Accessibility

- `<nav>` element with `aria-label="Breadcrumb"`
- `<ol>` semantic ordered list
- `aria-current="page"` on last (current) item
- Home uses icon + visible "Home" text
- Links meet 44px minimum touch height
- Focus-visible states with neon outline
- Separator icons use `aria-hidden="true"`

---

## Dark Mode

Handled via CSS variables:
- Background adapts to surface color
- Link text uses light foreground
- Gradient border remains consistent
- All text meets WCAG AA contrast

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<640px) | Wrapping allowed, smaller text |
| Desktop (>=640px) | Single-line, full breadcrumb trail |

---

## Related Components

- `Layout` — Parent that renders BreadcrumbsBar
- `Header` — Rendered above breadcrumbs
