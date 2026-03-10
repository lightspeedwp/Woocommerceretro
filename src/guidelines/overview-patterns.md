# Patterns Overview

**Category**: Architecture - Reusable Sections  
**Version**: 3.0 (WordPress FSE Aligned)  
**Last Updated**: December 27, 2024

---

## Purpose

Patterns are reusable, content-agnostic sections that can be composed into templates. They represent complete UI sections (like a hero banner, product grid, or testimonial slider) but don't contain hardcoded content.

In WordPress FSE, Patterns are pre-designed block compositions that users can insert into pages.

---

## Pattern Architecture

### Core Principles

**Content-Agnostic**: Patterns accept data as props; they don't contain hardcoded content.

**Reusable**: Patterns can be used in multiple templates and contexts.

**WordPress Parity**: Patterns map directly to WordPress Block Patterns.

**Composition Rules**: Patterns can import Blocks and UI components, but NOT Parts or other Patterns (to avoid deep nesting).

**Group Block Based**: All patterns use the Group block as their foundation for WordPress FSE alignment.

---

## Pattern Categories

### Section Patterns (NEW - WordPress FSE Aligned)

**Location:** `/components/patterns/sections/`  
**Documentation:** [Section Patterns README](/guidelines/patterns/sections/README.md)

Section patterns are the foundational layout patterns that replace manual section classes. They use the WordPress Group block internally.

| Pattern | Purpose | Style | Guidelines |
|---------|---------|-------|------------|
| **ContentSection** | Standard white/dark sections | `default` | [ContentSection.md](/guidelines/patterns/sections/ContentSection.md) ✅ |
| **DarkSection** | High-contrast dark backgrounds | `dark` | [DarkSection.md](/guidelines/patterns/sections/DarkSection.md) ✅ |
| **AccentSection** | Brand-colored promotions | `accent` | [AccentSection.md](/guidelines/patterns/sections/AccentSection.md) ✅ |
| **MutedSection** | Subtle gray backgrounds | `muted` | [MutedSection.md](/guidelines/patterns/sections/MutedSection.md) ✅ |
| **HeroSection** | Full-height hero banners | `hero` | [HeroSection.md](/guidelines/patterns/sections/HeroSection.md) ✅ |
| **BorderedSection** | Sections with borders | `bordered` | [BorderedSection.md](/guidelines/patterns/sections/BorderedSection.md) ✅ |
| **FullWidthSection** | Edge-to-edge layouts | `full-width` | [FullWidthSection.md](/guidelines/patterns/sections/FullWidthSection.md) ✅ |
| **CompactSection** | Reduced padding sections | `compact` | [CompactSection.md](/guidelines/patterns/sections/CompactSection.md) ✅ |

**Usage Example:**
```tsx
import { ContentSection, DarkSection, HeroSection } from '@/components/patterns/sections';

<HeroSection heading="Welcome" minHeight="80vh" />
<ContentSection heading="Products" content={<ProductGrid />} />
<DarkSection heading="Newsletter" cta={{ label: "Subscribe", href: "/newsletter" }} />
```

---

### Hero & Header Patterns

| Pattern | Purpose | Guidelines |
|---------|---------|------------|
| **Hero** | Full-width hero banner | [patterns/Hero.md](patterns/Hero.md) |
| **ShopHero** | Shop-specific hero | Coming soon |
| **ArchiveHeader** | Archive page header | [patterns/ArchiveHeader.md](patterns/ArchiveHeader.md) ✅ |

### Navigation & Pagination Patterns

| Pattern | Purpose | Guidelines |
|---------|---------|------------|
| **ArchivePagination** | Archive page navigation | [patterns/ArchivePagination.md](patterns/ArchivePagination.md) ✅ |
| **ResultsCount** | Results count display | [patterns/ResultsCount.md](patterns/ResultsCount.md) ✅ |

### Product Patterns

| Pattern | Purpose | Guidelines |
|---------|---------|------------|
| **ProductCollection** | Product grid with heading | [patterns/ProductCollection.md](patterns/ProductCollection.md) |
| **CollectionRow** | Horizontal product row | [components/CollectionRow.md](/guidelines/components/CollectionRow.md) ✅ |
| **ProductTabsSection** | Tabbed product info | [patterns/ProductTabsSection.md](/guidelines/patterns/ProductTabsSection.md) ✅ |
| **RelatedProducts** | "You may also like" section | Coming soon |

### Cart & Checkout Patterns

| Pattern | Purpose | Guidelines |
|---------|---------|------------|
| **CartTable** | Cart items list (conceptual) | [patterns/CartTable.md](patterns/CartTable.md) |
| **CartFilled** | Cart page with items | Coming soon |
| **CartEmptyState** | Empty cart message | Coming soon |

### Content Patterns

| Pattern | Purpose | Guidelines |
|---------|---------|------------|
| **FAQSection** | FAQ accordion list | [patterns/FAQSection.md](patterns/FAQSection.md) ✅ |
| **PostMeta** | Blog post metadata display | [patterns/PostMeta.md](patterns/PostMeta.md) ✅ |
| **ServiceFeaturesSection** | Trust badges/features | Coming soon |
| **ContactFollowSection** | Contact + social | Coming soon |
| **ArchiveCTA** | Conversion CTA for archives | [patterns/ArchiveCTA.md](patterns/ArchiveCTA.md) ✅ |

---

## Pattern Composition Rules

### ✅ Patterns CAN Import:

- **Blocks** (ProductCard, SearchInput, etc.)
- **UI components** (Button, Input, Badge, etc.)
- **Common utilities** (Container, Group, etc.)
- **Icons** (Phosphor Icons React)
- **Other Section Patterns** (for composition)

```tsx
// ✅ CORRECT
import { ProductCard } from '../blocks/ProductCard';
import { Button } from '../ui/button';
import { Container } from '../common/Container';
import { Group } from '../blocks/design/Group';
import { ContentSection } from './sections';
import { ArrowRight } from '@phosphor-icons/react';
```

### ❌ Patterns CANNOT Import:

- **Parts** (global regions like Header, Footer)
- **Templates** (circular dependency)

```tsx
// ❌ WRONG
import { Header } from '../parts/Header';
import { FrontPageTemplate } from '../templates/FrontPage';
```

---

## Standard Pattern Structure

```tsx
import React from 'react';
import { ProductCard } from '../blocks/ProductCard';
import { Button } from '../ui/button';

export interface ProductCollectionProps {
  title: string;
  products: Product[];
  viewAllLink?: string;
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  title,
  products,
  viewAllLink,
}) => {
  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h2>{title}</h2>
        {viewAllLink && (
          <Button variant="ghost" href={viewAllLink}>
            View All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
```

---

## Pattern Props Patterns

### Content Props

Pass all content as props (no hardcoding):

```tsx
interface PatternProps {
  title: string;              // Required heading
  description?: string;       // Optional description
  items: ItemType[];          // Data array
  ctaText?: string;           // Call-to-action text
  ctaLink?: string;           // Call-to-action link
}
```

### Layout Props

Allow layout customization:

```tsx
interface PatternProps {
  columns?: 2 | 3 | 4;        // Grid columns
  gap?: 'sm' | 'md' | 'lg';   // Gap size
  alignment?: 'left' | 'center' | 'right';
  layout?: 'grid' | 'list' | 'carousel';
}
```

---

## WordPress Block Pattern Mapping

Patterns map to WordPress Block Patterns:

| React Pattern | WordPress Pattern | Category |
|---------------|------------------|----------|
| `Hero.tsx` | `hero` | Headers |
| `ProductCollection.tsx` | `product-collection` | Featured |
| `FAQSection.tsx` | `faq` | Text |
| `ServiceFeaturesSection.tsx` | `features` | Call to Action |

---

## Pattern Development Checklist

When creating a new pattern:

- [ ] Determine pattern category (Hero, Products, Content, etc.)
- [ ] Define clear prop interface (TypeScript)
- [ ] Accept all content as props (no hardcoding)
- [ ] Import only Blocks and UI (not Parts or Patterns)
- [ ] Use Container for max-width (if needed)
- [ ] Make responsive (mobile-first)
- [ ] Add JSDoc documentation
- [ ] Test with different data (empty, single item, many items)
- [ ] Ensure accessibility (semantic HTML, ARIA)
- [ ] Create guidelines file in `/guidelines/patterns/`

---

## Related Guidelines

- [Overview: Components](overview-components.md) - Full architecture
- [Overview: Templates](overview-templates.md) - Page layouts
- [Overview: Blocks](overview-blocks.md) - Functional units
- [Hero Guidelines](patterns/Hero.md) - Hero pattern details
- [ProductCollection Guidelines](patterns/ProductCollection.md) - Product grid details

---

## Summary

Patterns are:
- **Reusable sections** that can be inserted into any template
- **Content-agnostic**: Accept data as props
- **WordPress-aligned**: Map to Block Patterns
- **Composition-limited**: Import Blocks and UI only (not Parts or Patterns)
- **Flexible**: Support layout and styling customization

Patterns are the primary building blocks for page layouts, enabling rapid page assembly by composing pre-designed sections.