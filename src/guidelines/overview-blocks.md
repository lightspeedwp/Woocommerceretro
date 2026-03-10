# Blocks Overview

**Category**: Architecture - Functional Units  
**Version**: 2.2  
**Last Updated**: December 27, 2024

---

## Purpose

Blocks are the smallest functional components that contain business logic and handle specific features. They represent discrete units of functionality like a product card, search input, or quantity selector.

In WordPress, Blocks are individual content elements that can be combined to build pages (Gutenberg blocks).

---

## Block Architecture

### Core Principles

**Single Responsibility**: Each block does one thing well.

**Business Logic**: Blocks contain feature-specific logic (form validation, cart updates, search, etc.).

**Functional Units**: Blocks are the atomic units of functionality in the application.

**WordPress Parity**: Blocks map to WooCommerce and custom Gutenberg blocks.

**Composition Rules**: Blocks can import UI components only (no Parts, Patterns, or other Blocks).

---

## Block Categories

### Design Blocks

**WordPress Core Layout Blocks** - Foundation for page structure and content organization.

| Block | Location | Guidelines |
|-------|----------|------------|
| **Buttons** | `/components/blocks/design/Buttons.tsx` | [blocks/design/buttons.md](blocks/design/buttons.md) |
| **Button** | `/components/blocks/design/Button.tsx` | [blocks/design/buttons.md](blocks/design/buttons.md) |
| **Group** | `/components/blocks/design/Group.tsx` | [blocks/design/group.md](blocks/design/group.md) |
| **Grid** | `/components/blocks/design/Grid.tsx` | [blocks/design/grid.md](blocks/design/grid.md) |
| **Stack** | `/components/blocks/design/Stack.tsx` | [blocks/design/stack.md](blocks/design/stack.md) |
| **Row** | `/components/blocks/design/Row.tsx` | [blocks/design/row.md](blocks/design/row.md) |
| **Columns** | `/components/blocks/design/Columns.tsx` | [blocks/design/columns.md](blocks/design/columns.md) |

**Implementation Status:**
- ✅ **Buttons/Button:** Implemented and integrated into FrontPage
- ✅ **Container Blocks (Group, Grid, Stack, Row, Columns):** Implemented and integrated
- 📝 **Additional Design Blocks:** Planned (Separator, Spacer, Cover)

### Theme Blocks

**WordPress Core Theme Blocks** - Site identity, navigation, and structural elements.

| Block | Location | Guidelines |
|-------|----------|------------|
| **Site Logo** | `/components/blocks/theme/SiteLogo.tsx` | [blocks/theme/site-logo.md](blocks/theme/site-logo.md) |
| **Site Title** | `/components/blocks/theme/SiteTitle.tsx` | [blocks/theme/site-title.md](blocks/theme/site-title.md) |
| **Site Tagline** | `/components/blocks/theme/SiteTagline.tsx` | [blocks/theme/site-tagline.md](blocks/theme/site-tagline.md) |
| **Navigation** | `/components/blocks/theme/Navigation.tsx` | [blocks/theme/navigation.md](blocks/theme/navigation.md) |
| **Search** | `/components/blocks/theme/Search.tsx` | [blocks/theme/search.md](blocks/theme/search.md) |
| **Template Part** | `/components/blocks/theme/TemplatePart.tsx` | [blocks/theme/template-part.md](blocks/theme/template-part.md) |

**Implementation Status:**
- ✅ **All Theme Blocks:** Implemented with WordPress parity
- 📝 **Integration:** Ready for use in header/footer templates

### Product Blocks

| Block | Location | Guidelines |
|-------|----------|------------|
| **ProductCard** | `/components/blocks/ProductCard.tsx` | [blocks/ProductCard.md](blocks/ProductCard.md) |
| **ProductSkeleton** | `/components/blocks/ProductSkeleton.tsx` | Coming soon |
| **ProductSearch** | `/components/blocks/ProductSearch.tsx` | Coming soon |

### Single Product Blocks

| Block | Purpose | Guidelines |
|-------|---------|------------|
| **ProductGallery** | Image gallery with thumbnails | [blocks/ProductGallery.md](blocks/ProductGallery.md) ✅ |
| **ProductInfo** | Product name, price, description | Coming soon |
| **ProductPrice** | Price display with sale handling | Coming soon |
| **ProductRating** | Star rating display | Coming soon |
| **ProductTabs** | Description, reviews, shipping tabs | Coming soon |

### Cart Blocks

| Block | Purpose | Guidelines |
|-------|---------|------------|
| **CartItem** | Single cart item row | Coming soon |
| **CartTotals** | Subtotal, tax, shipping, total | Coming soon |

### Checkout Blocks

| Block | Purpose | Guidelines |
|-------|---------|------------|
| **CheckoutStep** | Checkout step wrapper | Coming soon |
| **BillingAddressForm** | Billing address form | Coming soon |
| **ShippingAddressForm** | Shipping address form | Coming soon |
| **PaymentMethods** | Payment method selector | Coming soon |

### Order Confirmation Blocks

| Block | Purpose | Guidelines |
|-------|---------|------------|
| **OrderConfirmation** | Complete order confirmation system | [blocks/OrderConfirmation.md](blocks/OrderConfirmation.md) ✅ |

### Search & Filter Blocks

| Block | Purpose | Guidelines |
|-------|---------|------------|
| **SearchInput** | Product search | [components/SearchInput.md](components/SearchInput.md) |
| **FilterSidebar** | Combined filter controls | Coming soon |
| **ActiveFilters** | Active filter chips | Coming soon |
| **Pagination** | Page navigation | Coming soon |

### Utility Blocks

| Block | Purpose | Guidelines |
|-------|---------|------------|
| **QuantitySelector** | Quantity +/- control | [components/QuantitySelector.md](components/QuantitySelector.md) |
| **EnquiryModal** | Lead capture modal form | [blocks/EnquiryModal.md](blocks/EnquiryModal.md) ✅ |
| **PageAlert** | Page notification banner | Coming soon |

---

## Block Composition Rules

### ✅ Blocks CAN Import:

- **UI components** (Button, Input, Badge, Card, etc.)
- **Icons** (Phosphor Icons React)
- **Hooks** (useState, useEffect, custom hooks)
- **Utilities** (formatting functions, validation)

```tsx
// ✅ CORRECT
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ShoppingCart } from '@phosphor-icons/react';
import { formatCurrency } from '../utils/format';
import { useCart } from '../hooks/useCart';
```

### ❌ Blocks CANNOT Import:

- **Parts** (global regions like Header, Footer)
- **Patterns** (reusable sections)
- **Other Blocks** (to maintain single responsibility)
- **Templates** (circular dependency)

```tsx
// ❌ WRONG
import { Header } from '../parts/Header';
import { ProductCollection } from '../patterns/ProductCollection';
import { ProductCard } from './ProductCard';  // Block importing block
```

---

## Standard Block Structure

```tsx
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export interface BlockNameProps {
  data: DataType;
  onAction?: (value: string) => void;
  className?: string;
}

export const BlockName: React.FC<BlockNameProps> = ({
  data,
  onAction,
  className = '',
}) => {
  const [value, setValue] = useState('');

  const handleAction = () => {
    if (onAction) {
      onAction(value);
    }
  };

  return (
    <div className={`block-wrapper ${className}`}>
      <Input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleAction}>
        Submit
      </Button>
    </div>
  );
};
```

---

## Block State Management

### Local State

Blocks manage their own UI state:

```tsx
export const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Component logic
};
```

### Context Consumption

Blocks can consume context for global state:

```tsx
export const AddToCartButton: React.FC<{ productId: string }> = ({ productId }) => {
  const { addToCart, isLoading } = useCart();

  // Component logic
};
```

---

## WordPress Block Mapping

Blocks map to WordPress/WooCommerce blocks:

| React Block | WordPress Block | Category |
|-------------|----------------|----------|
| `ProductCard.tsx` | `woocommerce/product` | WooCommerce |
| `ProductSearch.tsx` | `woocommerce/product-search` | WooCommerce |
| `CartItem.tsx` | `woocommerce/cart-line-item` | WooCommerce |
| `FilterSidebar.tsx` | `woocommerce/filter-wrapper` | WooCommerce |

---

## Block Development Checklist

When creating a new block:

- [ ] Determine block category (Product, Cart, Checkout, etc.)
- [ ] Define clear prop interface (TypeScript)
- [ ] Import only UI components (no Blocks, Patterns, Parts)
- [ ] Handle loading and error states
- [ ] Add prop validation
- [ ] Make responsive (mobile-first)
- [ ] Ensure accessibility (semantic HTML, ARIA, keyboard nav)
- [ ] Add JSDoc documentation
- [ ] Test with edge cases (empty data, errors, loading)
- [ ] Create guidelines file in `/guidelines/blocks/`

---

## Common Block Patterns

### Loading State

```tsx
{isLoading ? (
  <Skeleton className="h-20 w-full" />
) : (
  <ActualContent />
)}
```

### Error State

```tsx
{error ? (
  <Alert variant="destructive">
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>{error.message}</AlertDescription>
  </Alert>
) : (
  <ActualContent />
)}
```

### Empty State

```tsx
{items.length === 0 ? (
  <div className="text-center py-12">
    <p className="text-gray-600 mb-4">No items found</p>
    <Button href="/shop">Start Shopping</Button>
  </div>
) : (
  <ItemList items={items} />
)}
```

---

## Related Guidelines

- [Overview: Components](overview-components.md) - Full architecture
- [Overview: Patterns](overview-patterns.md) - Pattern composition
- [ProductCard Guidelines](blocks/ProductCard.md) - ProductCard details
- [ProductGallery Guidelines](blocks/ProductGallery.md) - ProductGallery details
- [EnquiryModal Guidelines](blocks/EnquiryModal.md) - EnquiryModal details
- [SearchInput Guidelines](components/SearchInput.md) - SearchInput details
- [QuantitySelector Guidelines](components/QuantitySelector.md) - QuantitySelector details

---

## Summary

Blocks are:
- **Smallest functional units** with single responsibility
- **Self-contained**: Manage own state and logic
- **WordPress-aligned**: Map to Gutenberg/WooCommerce blocks
- **Composition-limited**: Import UI components only
- **Reusable**: Used in Patterns and Parts

Blocks are the foundation of the component system, providing discrete, testable units of functionality that can be composed into larger patterns and pages.