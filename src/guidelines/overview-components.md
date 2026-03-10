# Component Overview

**Category**: Architecture  
**Version**: 2.1  
**Last Updated**: December 2024

This file provides a comprehensive overview of all available components in the WooCommerce prototype, organized by architectural type. Always prefer using existing components over creating new ones.

---

## React Component Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         App.tsx (Root)                           │
│                       Router + Providers                         │
└────────────┬────────────────────────────────────────────────────┘
             │
             ├─► Templates (Pages)
             │   ├─ FrontPage
             │   ├─ ArchiveProduct
             │   ├─ SingleProduct
             │   ├─ PageCart
             │   ├─ PageCheckout
             │   └─ PageContact
             │
             │   Each Template composes ↓
             │
             ├─► Parts (Global Regions)
             │   ├─ Header            ◄── Appears across multiple pages
             │   ├─ Footer            ◄── Synced globally
             │   ├─ MiniCart
             │   ├─ MobileMenu
             │   └─ CheckoutHeader
             │
             │   Parts compose ↓
             │
             ├─► Patterns (Reusable Sections)
             │   ├─ Hero
             │   ├─ ProductCollection
             │   ├─ CartTable
             │   ├─ CheckoutSteps
             │   ├─ FeaturesGrid
             │   └─ TestimonialSlider
             │
             │   Patterns compose ↓
             │
             ├─► Blocks (Functional Units)
             │   ├─ ProductCard       ◄── Smallest logic unit
             │   ├─ SearchInput
             │   ├─ FilterDropdown
             │   ├─ QuantitySelector
             │   ├─ CartLineItem
             │   └─ AddToCartButton
             │
             │   Blocks compose ↓
             │
             └─► UI (Atoms - ShadCN)
                 ├─ Button            ◄── Dumb components
                 ├─ Input             ◄── No business logic
                 ├─ Badge
                 ├─ Select
                 ├─ Dialog
                 └─ Skeleton

Composition Rules (Enforced):
═══════════════════════════════════════════════════════
Templates    →  Can import: Parts, Patterns
Parts        →  Can import: Blocks, UI
Patterns     →  Can import: Blocks, UI
Blocks       →  Can import: UI only
UI           →  Cannot import: Blocks, Patterns, Parts
═══════════════════════════════════════════════════════
```

---

## Component Architecture Rules

**CRITICAL**: Follow these strict rules to maintain WordPress FSE architecture parity:

### Composition Hierarchy

1. **Templates** compose **Parts** and **Patterns** only
   - ✅ `import { Header } from './components/parts/Header'`
   - ✅ `import { Hero } from './components/patterns/Hero'`
   - ❌ `import { ProductCard } from './components/blocks/ProductCard'`

2. **Parts** compose **Blocks** and **UI** components
   - ✅ `import { SearchInput } from './components/blocks/SearchInput'`
   - ✅ `import { Button } from './components/ui/button'`
   - ❌ `import { Hero } from './components/patterns/Hero'`

3. **Patterns** compose **Blocks** and **UI** components
   - ✅ `import { ProductCard } from './components/blocks/ProductCard'`
   - ✅ `import { Badge } from './components/ui/badge'`
   - ❌ `import { Header } from './components/parts/Header'`

4. **Blocks** compose **UI** components only
   - ✅ `import { Button } from './components/ui/button'`
   - ✅ `import { Input } from './components/ui/input'`
   - ❌ `import { ProductCard } from './components/blocks/ProductCard'`

5. **UI** components never import Blocks, Patterns, or Parts
   - ✅ Pure, reusable components
   - ✅ Can import other UI components
   - ❌ No business logic or domain knowledge

### Import Direction Flow

```
Templates
    ↓ (imports)
Parts & Patterns
    ↓ (imports)
Blocks
    ↓ (imports)
UI Components

↑ NEVER import upwards (causes circular dependencies)
```

---

## Directory Structure Reference

```
/templates/               → Full page layouts
  FrontPage.tsx
  ArchiveProduct.tsx
  SingleProduct.tsx
  PageCart.tsx
  PageCheckout.tsx

/components/parts/        → Global sections (synced)
  Header.tsx
  Footer.tsx
  MiniCart.tsx
  MobileMenu.tsx
  CheckoutHeader.tsx
  Layout.tsx

/components/patterns/     → Reusable sections
  Hero.tsx
  ProductCollection.tsx
  CartTable.tsx
  CheckoutSteps.tsx
  FeaturesGrid.tsx
  TestimonialSlider.tsx

/components/blocks/       → Functional units
  ProductCard.tsx
  SearchInput.tsx
  FilterDropdown.tsx
  QuantitySelector.tsx
  CartLineItem.tsx
  AddToCartButton.tsx

/components/ui/           → Atoms (ShadCN)
  button.tsx
  input.tsx
  badge.tsx
  select.tsx
  dialog.tsx
  skeleton.tsx
```

---

## Component Type Definitions

### Templates
**Location**: `/templates/`  
**Purpose**: Full page layouts  
**Rules**: 
- Only import Parts and Patterns
- One template per route/page type
- Handle page-level state management

### Parts
**Location**: `/components/parts/`  
**Purpose**: Global regions that appear across multiple pages  
**Rules**:
- Synced across the site (changes affect all pages)
- Import Blocks and UI only
- Examples: Header, Footer, Sidebar

### Patterns
**Location**: `/components/patterns/`  
**Purpose**: Reusable content-agnostic sections  
**Rules**:
- Can be inserted into any template
- Import Blocks and UI only
- Focus on layout structure, not specific content

### Blocks
**Location**: `/components/blocks/`  
**Purpose**: Smallest functional units with business logic  
**Rules**:
- Single responsibility principle
- Import UI components only
- Handle specific features (search, cart item, product card)

### UI
**Location**: `/components/ui/`  
**Purpose**: Generic reusable interface elements  
**Rules**:
- No business logic or domain knowledge
- Pure components (dumb)
- Can be used anywhere

---

## Detailed Component Inventory

### Templates (Page Layouts)

For detailed template guidelines, see: [overview-templates.md](./overview-templates.md)

| Template | Route | Composes | Guidelines |
|----------|-------|----------|------------|
| **FrontPage** | `/` | Header, Hero, ProductCollection, Footer | Homepage layout |
| **ArchiveProduct** | `/shop`, `/category/*` | Header, FilterSidebar, ProductGrid, Footer | Product archive |
| **SingleProduct** | `/product/:id` | Header, ProductGallery, ProductInfo, Footer | Single product |
| **PageCart** | `/cart` | Header, CartTable, OrderSummary, Footer | Shopping cart |
| **PageCheckout** | `/checkout` | CheckoutHeader, CheckoutSteps, CheckoutFooter | Checkout flow |
| **AccountLayout** | `/account/*` | Header, AccountSidebar, AccountContent, Footer | My Account pages |

---

### Parts (Global Regions)

For detailed part guidelines, see: [overview-parts.md](./overview-parts.md)

| Component | Location | Purpose | Guidelines File |
|-----------|----------|---------|-----------------|
| **Header** | `/components/parts/Header.tsx` | Primary site header with nav, search, cart | [parts/Header.md](parts/Header.md) |
| **Footer** | `/components/parts/Footer.tsx` | Site footer with links, social, newsletter | [parts/Footer.md](parts/Footer.md) |
| **MiniCart** | `/components/parts/MiniCart.tsx` | Slide-over cart drawer | [parts/MiniCart.md](parts/MiniCart.md) |
| **MobileMenu** | `/components/parts/MobileMenu.tsx` | Mobile navigation overlay | [parts/MobileMenu.md](parts/MobileMenu.md) |
| **CheckoutHeader** | `/components/parts/CheckoutHeader.tsx` | Simplified checkout header | [parts/CheckoutHeader.md](parts/CheckoutHeader.md) |
| **CheckoutFooter** | `/components/parts/CheckoutFooter.tsx` | Minimal checkout footer | [parts/CheckoutFooter.md](parts/CheckoutFooter.md) |
| **Layout** | `/components/parts/Layout.tsx` | Base layout wrapper | [parts/Layout.md](parts/Layout.md) |
| **ShopSidebar** | `/components/parts/ShopSidebar.tsx` | Product archive filters | [parts/ShopSidebar.md](parts/ShopSidebar.md) |

---

### Patterns (Reusable Sections)

For detailed pattern guidelines, see: [overview-patterns.md](./overview-patterns.md)

| Component | Purpose | Common Usage | Guidelines File |
|-----------|---------|--------------|-----------------|
| **Hero** | Full-width hero banner | Homepage, landing pages | [patterns/Hero.md](patterns/Hero.md) |
| **ProductCollection** | Grid/carousel of products | Homepage, category pages | [patterns/ProductCollection.md](patterns/ProductCollection.md) |
| **CartTable** | Detailed cart items list | Cart page | [patterns/CartTable.md](patterns/CartTable.md) |
| **CheckoutSteps** | Multi-step checkout form | Checkout page | [patterns/CheckoutSteps.md](patterns/CheckoutSteps.md) |
| **FeaturesGrid** | Icon + title + description grid | Homepage, about page | [patterns/FeaturesGrid.md](patterns/FeaturesGrid.md) |
| **TestimonialSlider** | Customer review carousel | Homepage, product pages | [patterns/TestimonialSlider.md](patterns/TestimonialSlider.md) |
| **CallToAction** | High-contrast CTA section | Between sections | [patterns/CallToAction.md](patterns/CallToAction.md) |
| **FAQSection** | Collapsible Q&A list | Support pages | [patterns/FAQSection.md](patterns/FAQSection.md) |

---

### Blocks (Functional Units)

For detailed block guidelines, see: [overview-blocks.md](./overview-blocks.md)

| Component | Purpose | Props | Guidelines File |
|-----------|---------|-------|-----------------|
| **ProductCard** | Single product display | `product`, `showAddToCart` | [blocks/ProductCard.md](blocks/ProductCard.md) |
| **SearchInput** | Product search with autocomplete | `onSearch`, `placeholder` | [blocks/SearchInput.md](blocks/SearchInput.md) |
| **FilterDropdown** | Single filter control | `label`, `options`, `onChange` | [blocks/FilterDropdown.md](blocks/FilterDropdown.md) |
| **QuantitySelector** | Quantity input with +/- buttons | `value`, `onChange`, `min`, `max` | [blocks/QuantitySelector.md](blocks/QuantitySelector.md) |
| **CartLineItem** | Single cart item row | `item`, `onUpdate`, `onRemove` | [blocks/CartLineItem.md](blocks/CartLineItem.md) |
| **AddToCartButton** | Standalone add to cart button | `productId`, `quantity` | [blocks/AddToCartButton.md](blocks/AddToCartButton.md) |

---

### UI Components (Atoms)

For detailed UI guidelines, see the ShadCN documentation.

**Buttons & Actions**: Button, IconButton, LoadingButton  
**Form Inputs**: Input, TextArea, Select, Checkbox, RadioGroup, Switch, Label  
**Feedback**: Alert, Toast, Dialog, Sheet, Tooltip, Popover, Progress, Spinner, Skeleton  
**Data Display**: Badge, Avatar, Card, Table, Separator, Accordion, Tabs  
**Media**: AspectRatio, ImageWithFallback, Carousel

---

## Component Usage Patterns

### Finding the Right Component

Use this decision tree:

**Building a page?**
→ Start with a **Template** (or create one)

**Need global navigation?**
→ Use **Header** or **Footer** (Parts)

**Need a page section?**
→ Use a **Pattern** (Hero, ProductCollection, etc.)

**Need specific functionality?**
→ Use a **Block** (ProductCard, SearchInput, etc.)

**Need a basic UI element?**
→ Use a **UI component** (Button, Input, etc.)

### Common Composition Examples

**Homepage Template**:
```tsx
<Layout>  {/* Part */}
  <Hero />  {/* Pattern */}
  <ProductCollection />  {/* Pattern */}
  <FeaturesGrid />  {/* Pattern */}
  <CallToAction />  {/* Pattern */}
</Layout>  {/* Part */}
```

**Product Archive Template**:
```tsx
<Layout>  {/* Part */}
  <section className="flex gap-8">
    <ShopSidebar />  {/* Part */}
    <div className="flex-1">
      {products.map(product => (
        <ProductCard product={product} />  {/* Block */}
      ))}
    </div>
  </section>
</Layout>
```

**ProductCard Block**:
```tsx
<Card>  {/* UI */}
  <img src={product.image} />
  <h3>{product.name}</h3>
  <Badge>{product.badge}</Badge>  {/* UI */}
  <Button onClick={addToCart}>  {/* UI */}
    Add to Cart
  </Button>
</Card>
```

---

## Component Import Examples

```tsx
// Templates (Pages)
import { FrontPage } from './templates/FrontPage';
import { ArchiveProduct } from './templates/ArchiveProduct';

// Parts (Global Regions)
import { Header } from './components/parts/Header';
import { Footer } from './components/parts/Footer';
import { MiniCart } from './components/parts/MiniCart';

// Patterns (Sections)
import { Hero } from './components/patterns/Hero';
import { ProductCollection } from './components/patterns/ProductCollection';
import { CartTable } from './components/patterns/CartTable';

// Blocks (Functional Units)
import { ProductCard } from './components/blocks/ProductCard';
import { SearchInput } from './components/blocks/SearchInput';
import { QuantitySelector } from './components/blocks/QuantitySelector';

// UI Components (Atoms)
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Badge } from './components/ui/badge';
```

---

## Component Development Guidelines

When creating new components:

1. **Determine the correct type**
   - Is it a full page? → Template
   - Is it global/synced? → Part
   - Is it a reusable section? → Pattern
   - Is it a functional unit? → Block
   - Is it a basic UI element? → UI component

2. **Follow composition rules**
   - Check which types you can import
   - Never import "upwards" in the hierarchy
   - Avoid circular dependencies

3. **Create documentation**
   - Add to the appropriate overview file
   - Create a detailed guidelines file if complex
   - Add JSDoc comments to the component

4. **Use design tokens**
   - Colors: Use CSS variables (`--primary`, `--foreground`)
   - Spacing: Use clamp() for fluid spacing
   - Typography: Use semantic HTML (let CSS handle sizing)
   - Buttons: Follow mobile-first guidelines (44px minimum)

5. **Ensure accessibility**
   - WCAG 2.1 AA minimum
   - Semantic HTML
   - Keyboard navigation
   - ARIA labels where needed
   - Color contrast (4.5:1 for text)

6. **Test responsively**
   - Mobile: 375px (iPhone SE)
   - Tablet: 768px (iPad)
   - Desktop: 1440px (Common laptop)
   - Wide: 1920px (Desktop monitor)

---

## Related Guidelines

- [Overview: Templates](./overview-templates.md) - Template architecture
- [Overview: Parts](./overview-parts.md) - Global parts architecture
- [Overview: Patterns](./overview-patterns.md) - Pattern architecture
- [Overview: Blocks](./overview-blocks.md) - Block architecture
- [Overview: Sections](./overview-sections.md) - Section styling

---

## Summary

The component architecture mirrors WordPress FSE structure:
- **5 component types**: Templates, Parts, Patterns, Blocks, UI
- **Strict composition rules** prevent circular dependencies
- **Clear hierarchy** makes the system predictable
- **WordPress parity** ensures accurate prototype → theme conversion
- **Reusability** through proper component separation

Always consult this overview before creating new components to avoid duplication and maintain architectural consistency.