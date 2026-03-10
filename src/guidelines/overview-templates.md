# Templates Overview

**Category**: Architecture - Page Layouts  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Purpose

Templates are full-page layouts that define the structure and composition of entire pages. They represent the highest level of the component hierarchy and map directly to WordPress Block Theme templates.

---

## Template Architecture

### Core Principles

**One Template Per Page Type**: Each unique page type (homepage, product archive, single product, etc.) has its own template.

**Composition Only**: Templates compose Parts and Patterns but never implement UI directly.

**WordPress Parity**: Template names and structure mirror WordPress Block Theme templates for seamless conversion.

---

## Template Inventory

### Public-Facing Templates

| Template | Route | WordPress | Guidelines |
|----------|-------|-----------|------------|
| **FrontPage** | `/` | `front-page.html` | [templates/FrontPage.md](templates/FrontPage.md) ✅ |
| **ArchiveProduct** | `/shop` | `archive-product.html` | [templates/ArchiveProduct.md](templates/ArchiveProduct.md) ✅ |
| **ArchiveAuthor** | `/author/:name` | `archive-author.html` | [templates/ArchiveAuthor.md](templates/ArchiveAuthor.md) ✅ |
| **SingleProduct** | `/product/:id` | `single-product.html` | [templates/SingleProduct.md](templates/SingleProduct.md) ✅ |
| **VariableProduct** | `/variable-product/:id` | `single-product.html` (Variable) | [templates/VariableProduct.md](templates/VariableProduct.md) ✅ |
| **PageCart** | `/cart` | `page-cart.html` | [templates/PageCart.md](templates/PageCart.md) ✅ |
| **PageCheckout** | `/checkout` | `page-checkout.html` | [templates/PageCheckout.md](templates/PageCheckout.md) ✅ |
| **PageNewsletter** | `/newsletter` | `page-newsletter.html` | Coming soon |
| **PageContact** | `/contact` | `page-contact.html` | Coming soon |

### Account Templates

| Template | Route | WordPress | Guidelines |
|----------|-------|-----------|------------|
| **AccountLayout** | `/account/*` | `page-my-account.html` | [templates/AccountLayout.md](templates/AccountLayout.md) ✅ |
| **OrderConfirmation** | `/order/:id` | `page-order-received.html` | [templates/OrderConfirmation.md](templates/OrderConfirmation.md) ✅ |

---

## Template Composition Rules

### ✅ Templates CAN Import:

- **Parts** (global regions like Header, Footer)
- **Patterns** (reusable sections like Hero, ProductCollection)
- **Common utilities** (Container, Section wrappers)

```tsx
// ✅ CORRECT
import { Layout } from '../components/parts/Layout';
import { Hero } from '../components/patterns/Hero';
import { ProductCollection } from '../components/patterns/ProductCollection';
import { Container } from '../components/common/Container';
```

### ❌ Templates CANNOT Import:

- **Blocks** (use Patterns that compose Blocks instead)
- **UI components directly** (use Patterns that compose UI instead)

```tsx
// ❌ WRONG - Skip Patterns layer
import { ProductCard } from '../components/blocks/ProductCard';
import { Button } from '../components/ui/button';
```

---

## Standard Template Pattern

```tsx
import React from 'react';
import { Layout } from '../components/parts/Layout';
import { Container } from '../components/common/Container';
import { Hero } from '../components/patterns/Hero';

export const FrontPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-hero relative min-h-[80vh]">
        <Hero 
          title="Welcome"
          ctaPrimary={{ text: "Shop Now", href: "/shop" }}
        />
      </section>

      {/* Content Section */}
      <section className="section-default py-[clamp(3rem,8vw,6rem)]">
        <Container>
          {/* Pattern content */}
        </Container>
      </section>
    </Layout>
  );
};
```

---

## Section Usage in Templates

Templates wrap content in semantic `<section>` elements with appropriate section styles.

**See**: [Section Styles Overview](overview-sections.md) for all available section styles

### Common Section Patterns

```tsx
// Default white background
<section className="section-default py-[clamp(3rem,8vw,6rem)] bg-background">

// Dark background (hero, CTA)
<section className="section-dark py-[clamp(4rem,10vw,8rem)] bg-gray-900 text-white">

// Muted background (trust badges, alternating)
<section className="section-muted py-16 bg-gray-50">

// Hero section (full height)
<section className="section-hero relative min-h-[80vh] flex items-center">

// Compact section (breadcrumbs, notices)
<section className="section-compact py-6 border-b border-gray-200">
```

---

## Template Categories

### Shop Templates

Core ecommerce page layouts:

- [FrontPage](templates/FrontPage.md) - Homepage with hero + products
- [ArchiveProduct](templates/ArchiveProduct.md) - Product listing with filters
- [SingleProduct](templates/SingleProduct.md) - Product detail page
- [PageCart](templates/PageCart.md) - Shopping cart
- [PageCheckout](templates/PageCheckout.md) - Checkout flow

### Account Templates

User account pages:

- [AccountLayout](templates/AccountLayout.md) - Account dashboard wrapper
- [OrderConfirmation](templates/OrderConfirmation.md) - Post-purchase confirmation

### Content Templates

Standard content pages:

- PageAbout - About us page
- PageContact - Contact form page

### Blog Templates

Blog and content archive pages:

| Template | Route | WordPress | Guidelines |
|----------|-------|-----------|------------|
| **BlogIndex** | `/blog` | `home.html` or `index.html` | Coming soon |
| **SinglePost** | `/blog/:slug` | `single.html` | Coming soon |
| **ArchiveCategory** | `/blog/category/:slug` | `category.html` | Coming soon |
| **ArchiveAuthor** | `/blog/author/:slug` | `author.html` | [templates/ArchiveAuthor.md](templates/ArchiveAuthor.md) ✅ |
| **TagArchive** | `/blog/tag/:slug` | `tag.html` | Coming soon |

---

## Responsive Template Patterns

### Mobile Layout (< 768px)

- Single column layout
- Sidebar filters in drawer/sheet
- Stacked content sections
- Full-width CTAs

### Desktop Layout (≥ 1024px)

- Multi-column grids
- Persistent sidebars
- Full hero sections
- Side-by-side layouts

---

## WordPress Conversion Mapping

When converting to WordPress Block Theme:

| React Template | WordPress Template File | Location |
|----------------|------------------------|----------|
| `FrontPage.tsx` | `front-page.html` | `/templates/front-page.html` |
| `ArchiveProduct.tsx` | `archive-product.html` | `/templates/archive-product.html` |
| `SingleProduct.tsx` | `single-product.html` | `/templates/single-product.html` |
| `PageCart.tsx` | `page-cart.html` | `/templates/page-cart.html` |
| `PageCheckout.tsx` | `page-checkout.html` | `/templates/page-checkout.html` |

---

## Template Development Checklist

When creating a new template:

- [ ] Determine WordPress equivalent template name
- [ ] Use Layout or CheckoutLayout wrapper
- [ ] Compose only Parts and Patterns (not Blocks/UI directly)
- [ ] Use semantic `<section>` elements with section styles
- [ ] Use Container for max-width constraints
- [ ] Implement responsive breakpoints (mobile-first)
- [ ] Add JSDoc documentation
- [ ] Test on all viewports (375px, 768px, 1440px, 1920px)
- [ ] Ensure accessibility (semantic HTML, keyboard nav)
- [ ] Add to router in App.tsx
- [ ] Create template guidelines file in `/guidelines/templates/`

---

## Related Guidelines

- [Overview: Components](overview-components.md) - Full architecture
- [Overview: Parts](overview-parts.md) - Global regions
- [Overview: Patterns](overview-patterns.md) - Reusable sections
- [Overview: Sections](overview-sections.md) - Section styles
- [Container Component](components/Container.md) - Width constraints

---

## Summary

Templates are the top-level page layouts that:
- Map 1:1 with WordPress Block Theme templates
- Compose Parts and Patterns only (no Blocks/UI directly)
- Define page structure and section arrangement
- Handle page-level state and routing
- Use semantic `<section>` elements with section styles
- Follow mobile-first responsive patterns

Always create templates that accurately represent their WordPress equivalents to ensure seamless prototype → theme conversion.