# SingleProduct Template

**Category**: Templates  
**Route**: `/product/:id`  
**WordPress**: `single-product.html`  
**Version**: 2.6 (Funky Redesign — Phase 4)

---

## 1. Purpose

The individual product detail page that displays comprehensive product information, images, variants, pricing, and purchase options.

---

## 2. Structure

```
Layout (Part)
  ├─ Breadcrumb (Nav)
  ├─ Product Detail Container (BEM Grid)
  │   ├─ ProductGallery (BEM: .wp-single-product-gallery)
  │   └─ ProductDetails (BEM: .wp-single-product-details)
  │       ├─ Title, Price, Description
  │       ├─ AddToCart Form
  │       └─ Meta (SKU, Category)
  ├─ ProductTabsSection (Pattern)
  ├─ RelatedProductsSection (Pattern)
  └─ RecentlyViewedSection (Pattern)
```

---

## 3. Implementation

```tsx
import React from 'react';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { ProductTabsSection } from '../patterns/ProductTabsSection';
import { RelatedProductsSection } from '../patterns/RelatedProductsSection';
import { RecentlyViewedSection } from '../patterns/RecentlyViewedSection';

export const SingleProduct: React.FC = () => {
  return (
    <Layout>
      <Container className="wp-single-product-container">
        {/* Breadcrumb */}
        <nav className="wp-single-product-breadcrumb">...</nav>

        {/* Main Grid */}
        <div className="wp-single-product-main">
          {/* Gallery */}
          <div className="wp-single-product-gallery">...</div>

          {/* Details */}
          <div className="wp-single-product-details">...</div>
        </div>

        {/* Tabs Pattern */}
        <div className="wp-single-product-tabs">
          <ProductTabsSection ... />
        </div>

        {/* Related Pattern */}
        <RelatedProductsSection ... />
        
        {/* Recent Pattern */}
        <RecentlyViewedSection ... />
      </Container>
    </Layout>
  );
};
```

---

## 4. Key Patterns Used

- **ProductTabsSection**: Reusable tabbed interface for Description, Reviews, etc.
- **RelatedProductsSection**: "You may also like" grid.
- **RecentlyViewedSection**: History of viewed products.

---

## 5. CSS Architecture

Uses BEM-style classes defined in `/src/styles/sections/shop-funky.css`.

| Element | Class Name | Description |
|---------|------------|-------------|
| **Container** | `.wp-single-product-container` | Main wrapper |
| **Grid Layout** | `.wp-single-product-main` | 2-column grid (desktop) |
| **Gallery** | `.wp-single-product-gallery` | Image area |
| **Details** | `.wp-single-product-details` | Info area |
| **Title** | `.wp-single-product-title` | H1 Product title |
| **Price** | `.wp-single-product-price-wrapper` | Price display |
| **Add to Cart** | `.wp-single-product-cart-actions` | Quantity + Button |

---

## 6. Data Requirements

```tsx
interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  image: string;
  description: string;
  shortDescription: string;
  sku: string;
  category: string;
  reviewCount: number;
  inStock: boolean;
  onSale: boolean;
}
```

---

## 7. Responsive Behavior

### Mobile (< 768px)
- Single column layout (stacking).
- Gallery takes full width.
- Tabs collapse or scroll horizontally.

### Desktop (≥ 1024px)
- 2-column layout (50/50 split).
- Gallery on left, Info on right.
- Sticky info column (optional).

---

## 8. Related Templates

- [VariableProduct](VariableProduct.md) - For products with attributes/variations.
- [ArchiveProduct](ArchiveProduct.md) - Main shop listing.

---

## 9. Back to Overview

[← Templates Overview](../overview-templates.md)