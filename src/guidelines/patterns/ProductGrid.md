# ProductGrid Pattern

**Version:** 1.0  
**Type:** Pattern (Reusable Section)  
**WordPress Mapping:** Product Collection Block Pattern  
**File:** `/components/patterns/ProductGrid.tsx`

---

## Overview

The ProductGrid pattern is a fundamental reusable section for displaying products in a responsive grid layout. It composes ProductCard blocks and handles responsive grid behavior with configurable columns for different viewports.

**Purpose:**
- Display product collections in grid format
- Provide responsive column configurations
- Compose ProductCard blocks consistently
- Handle empty/undefined product arrays safely

**WordPress Equivalent:**
- Product Collection Block Pattern
- WooCommerce Product Grid
- Query Loop with Product Cards

---

## Component Structure

```
ProductGrid (Pattern)
└── ProductCard (Block) × N
    ├── Image
    ├── Product Info
    ├── Price
    ├── Badges
    ├── Rating
    └── Add to Cart Button
```

---

## Usage Examples

### Basic Usage

```tsx
import { ProductGrid } from '@/components/patterns/ProductGrid';
import { PRODUCTS } from '@/data/products';

export const ShopPage = () => {
  return (
    <Container>
      <ProductGrid products={PRODUCTS} />
    </Container>
  );
};
```

---

## WordPress FSE Mapping

### Block Pattern Structure

```html
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group">
  
  <!-- wp:query {"query":{"postType":"product"}} -->
  <div class="wp-block-query">
    
    <!-- wp:post-template {"layout":{"type":"grid","columnCount":4}} -->
    <!-- wp:woocommerce/product-image /-->
    <!-- wp:post-title /-->
    <!-- wp:woocommerce/product-price /-->
    <!-- wp:woocommerce/add-to-cart-button /-->
    <!-- /wp:post-template -->
    
  </div>
  <!-- /wp:query -->
  
</div>
<!-- /wp:group -->
```

---

**Last Updated:** December 27, 2024  
**Maintainer:** WooCommerce Prototype Team  
**Status:** ✅ Production Ready
