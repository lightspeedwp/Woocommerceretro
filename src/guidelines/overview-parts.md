# Parts Overview

**Category**: Architecture - Global Regions  
**Version**: 2.2  
**Last Updated**: December 27, 2024

---

## Purpose

Template Parts (or simply "Parts") are global sections that appear across multiple pages. In WordPress FSE, these are synced components—changes to a Part affect ALL pages where it appears.

Parts represent critical navigation and structural elements like headers, footers, and sidebars.

---

## Part Architecture

### Core Principles

**Global & Synced**: Parts are the same across the entire site. Editing a Part updates it everywhere.

**Structural Role**: Parts define site-wide navigation, branding, and layout structure.

**WordPress Parity**: Parts map directly to WordPress Template Parts (`header.html`, `footer.html`, etc.).

**Composition Rules**: Parts can import Blocks and UI components, but NOT Patterns or other Parts.

---

## Part Inventory

### Navigation Parts

| Part | Location | Guidelines |
|------|----------|------------|
| **Header** (MainHeader) | `/components/parts/Header.tsx` | [parts/Header.md](parts/Header.md) ✅ |
| **CheckoutHeader** | `/components/CheckoutHeader.md` | [components/CheckoutHeader.md](components/CheckoutHeader.md) |
| **MobileMenu** | `/components/parts/MobileMenu.tsx` | [parts/MobileMenu.md](parts/MobileMenu.md) ✅ |
| **Breadcrumbs** | `/components/parts/Breadcrumbs.tsx` | Coming soon |

### Footer Parts

| Part | Location | Guidelines |
|------|----------|------------|
| **Footer** (MainFooter) | `/components/parts/Footer.tsx` | [parts/Footer.md](parts/Footer.md) ✅ |
| **CheckoutFooter** | `/components/parts/CheckoutFooter.tsx` | Coming soon |

### Layout Parts

| Part | Location | Guidelines |
|------|----------|------------|
| **Layout** | `/components/Layout.md` | [components/Layout.md](components/Layout.md) |
| **CheckoutLayout** | `/components/parts/CheckoutLayout.tsx` | Coming soon |

### Drawer/Overlay Parts

| Part | Location | Guidelines |
|------|----------|------------|
| **MiniCart** | `/components/MiniCart.md` | [components/MiniCart.md](components/MiniCart.md) |

---

## Part Composition Rules

### ✅ Parts CAN Import:

- **Blocks** (functional units like ProductCard, SearchInput)
- **UI components** (Button, Input, Badge, etc.)
- **Common utilities** (Container, Logo, etc.)
- **Icons** (Phosphor Icons React)
- **Other Parts** (only in special cases like Layout)

```tsx
// ✅ CORRECT
import { SearchInput } from '../blocks/SearchInput';
import { Button } from '../ui/button';
import { Container } from '../common/Container';
import { ShoppingCart } from '@phosphor-icons/react';
```

### ❌ Parts CANNOT Import:

- **Patterns** (reusable sections belong in templates, not parts)
- **Templates** (circular dependency)

```tsx
// ❌ WRONG
import { Hero } from '../patterns/Hero';
import { ProductCollection } from '../patterns/ProductCollection';
```

---

## Standard Part Structure

```tsx
import React from 'react';
import { Container } from '../common/Container';
import { SearchInput } from '../blocks/SearchInput';
import { Button } from '../ui/button';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo />
          <nav>...</nav>
          <SearchInput />
          <Button variant="ghost"><ShoppingCart /></Button>
        </div>
      </Container>
    </header>
  );
};
```

---

## Part Categories

### Header Parts

Site navigation and branding:

- [Header](parts/Header.md) - Main site header with logo, nav, search, cart
- [CheckoutHeader](components/CheckoutHeader.md) - Simplified checkout header
- [MobileMenu](parts/MobileMenu.md) - Mobile navigation drawer

### Footer Parts

Site footer content:

- [Footer](parts/Footer.md) - Main footer with links, newsletter, social
- CheckoutFooter - Minimal checkout footer

### Layout Wrappers

Page structure wrappers:

- [Layout](components/Layout.md) - Standard page wrapper (Header + Footer)
- CheckoutLayout - Checkout page wrapper

### Interactive Overlays

Drawers and modals:

- [MiniCart](components/MiniCart.md) - Slide-over cart drawer
- [MobileMenu](parts/MobileMenu.md) - Mobile navigation overlay

---

## Responsive Behavior

### Mobile (< 768px)

**Header**:
- Hide desktop navigation
- Show hamburger menu icon
- Collapse search (icon only)
- Show cart icon with badge

**Footer**:
- Stack columns vertically
- Reduce padding
- Center align text

---

## WordPress Block Theme Mapping

Parts map directly to WordPress Template Parts:

| React Part | WordPress Part | Location |
|------------|----------------|----------|
| `Header.tsx` | `header.html` | `/parts/header.html` |
| `Footer.tsx` | `footer.html` | `/parts/footer.html` |
| `CheckoutHeader.tsx` | `checkout-header.html` | `/parts/checkout-header.html` |
| `MiniCart.tsx` | Custom part | `/parts/mini-cart.html` |

In WordPress, these are inserted using:
```html
<!-- wp:template-part {"slug":"header"} /-->
```

---

## Part Development Checklist

When creating a new Part:

- [ ] Determine WordPress equivalent part name
- [ ] Use semantic HTML (`<header>`, `<footer>`, `<nav>`, `<aside>`)
- [ ] Import only Blocks and UI (not Patterns)
- [ ] Make responsive (mobile-first)
- [ ] Add sticky positioning if needed (Header)
- [ ] Implement accessibility (ARIA labels, keyboard nav)
- [ ] Use z-index appropriately (sticky headers, overlays)
- [ ] Test on all breakpoints
- [ ] Add to Layout or appropriate template
- [ ] Create guidelines file in `/guidelines/parts/`

---

## Related Guidelines

- [Overview: Components](overview-components.md) - Full architecture
- [Overview: Templates](overview-templates.md) - Page layouts
- [Overview: Blocks](overview-blocks.md) - Functional units
- [Header Guidelines](parts/Header.md) - Header part details
- [Footer Guidelines](parts/Footer.md) - Footer part details

---

## Summary

Template Parts are:
- **Global & Synced**: Changes affect all pages
- **Structural**: Define site-wide navigation and layout
- **WordPress-aligned**: Map to WordPress Template Parts
- **Composition-limited**: Can import Blocks and UI only (not Patterns)
- **Reusable**: Used across multiple templates

Parts form the backbone of site structure, ensuring consistent navigation, branding, and layout across all pages.