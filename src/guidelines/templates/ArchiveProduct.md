# ArchiveProduct Template

**Category**: Templates  
**Route**: `/shop`, `/category/:slug`  
**WordPress**: `archive-product.html`  
**Version**: 2.6 (Funky Redesign — Phase 4)

> **Funky CSS:** `/src/styles/sections/shop-funky.css` (1850+ lines)  
> **Treatments:** Glassmorphism filter sidebar, glow product cards, gradient sort/view controls, neon active filter indicators.

---

## Purpose

The shop/product archive page template that displays filterable product grids with search, sorting, and pagination. This is the primary product discovery page.

---

## Structure

```
Layout (Part)
  ├─ Breadcrumbs Section (Group)
  ├─ Page Header Section (Group)
  ├─ Filter Bar Section (Group)
  ├─ Main Content Section (Group)
  │   ├─ Sidebar (Filters) - Desktop Only
  │   └─ Product Grid
  └─ Pagination Section (Group)
```

---

## Implementation

```tsx
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../components/parts/Layout';
import { Container } from '../components/common/Container';
import { Breadcrumbs } from '../components/parts/Breadcrumbs';
import { ProductCard } from '../components/blocks/ProductCard';
import { FilterSidebar } from '../components/blocks/FilterSidebar';
import { SearchInput } from '../components/blocks/SearchInput';
import { Pagination } from '../components/blocks/Pagination';

export const ArchiveProduct: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const category = searchParams.get('category');
  const sortBy = searchParams.get('sort') || 'newest';
  const page = parseInt(searchParams.get('page') || '1');

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="wp-block-group has-background has-surface-background-color">
        <Container>
          <Breadcrumbs 
            items={[
              { label: 'Home', href: '/' },
              { label: 'Shop', href: '/shop' },
              ...(category ? [{ label: category }] : [])
            ]}
          />
        </Container>
      </div>

      {/* Page Header */}
      <div className="wp-block-group has-background has-surface-background-color">
        <Container>
          <h1 className="wp-block-post-title">{category || 'All Products'}</h1>
          <p className="has-text-color has-secondary-color">
            Discover our curated collection of quality products
          </p>
        </Container>
      </div>

      {/* Filter/Sort Bar */}
      <div className="wp-block-group has-border-bottom">
        <Container>
          <div className="wp-block-columns are-vertically-aligned-center">
            <div className="wp-block-column">
              <span className="has-small-font-size has-text-color has-secondary-color">
                {totalProducts} products
              </span>
              <ActiveFilters />
            </div>
            
            <div className="wp-block-column">
              <div className="wp-block-buttons">
                <SearchInput placeholder="Search products..." />
                <SortDropdown value={sortBy} onChange={handleSortChange} />
                <LayoutSwitcher value={viewMode} onChange={setViewMode} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="wp-block-group has-global-padding">
        <Container>
          <div className="wp-block-columns">
            {/* Sidebar - Desktop Only */}
            <aside className="wp-block-column wp-block-sidebar hidden-mobile">
              <FilterSidebar 
                filters={availableFilters}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
              />
            </aside>

            {/* Product Grid */}
            <div className="wp-block-column">
              {isLoading ? (
                <ProductGridSkeleton count={12} />
              ) : products.length > 0 ? (
                <div className={`wp-block-post-template ${viewMode === 'grid' ? 'is-layout-grid' : 'is-layout-flex'}`}>
                  {products.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product}
                      layout={viewMode}
                    />
                  ))}
                </div>
              ) : (
                <EmptyResults onReset={handleResetFilters} />
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="wp-block-group has-border-top">
          <Container>
            <Pagination 
              currentPage={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Container>
        </div>
      )}
    </Layout>
  );
};
```

---

## Section Breakdown

### 1. Breadcrumbs (Group)

**Purpose**: Navigation trail  
**Classes**: `wp-block-group has-background`

**Key Features**:
- Shows current location in hierarchy
- Links to parent categories

### 2. Page Header (Group)

**Purpose**: Page title and description  
**Classes**: `wp-block-group has-background`

**Key Features**:
- Dynamic title (category name or "All Products")
- Optional description

### 3. Filter/Sort Bar (Group)

**Purpose**: Product controls  
**Classes**: `wp-block-group has-border-bottom`

**Key Features**:
- Product count
- Active filters with remove chips
- Search input
- Sort dropdown
- Grid/List view toggle

### 4. Main Content (Group)

**Purpose**: Filterable product grid  
**Classes**: `wp-block-group has-global-padding`

**Key Features**:
- Responsive grid (Sidebar + Grid)
- Filter sidebar
- Loading states
- Empty state handling

### 5. Pagination (Group)

**Purpose**: Page navigation  
**Classes**: `wp-block-group has-border-top`

---

## Data Requirements

```tsx
interface ArchiveProductData {
  products: Product[];
  totalProducts: number;
  totalPages: number;
  currentPage: number;
  availableFilters: {
    categories: Category[];
    priceRanges: PriceRange[];
    attributes: Attribute[];
  };
  activeFilters: {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    attributes?: Record<string, string[]>;
  };
}
```

---

## Filter Functionality

### URL-Based Filters

```tsx
// Update URL when filters change
const handleFilterChange = (filterKey: string, value: any) => {
  const params = new URLSearchParams(searchParams);
  params.set(filterKey, value);
  params.set('page', '1'); // Reset to page 1
  navigate(`?${params.toString()}`);
};
```

### Active Filter Display

```tsx
<ActiveFilters 
  filters={activeFilters}
  onRemove={(key) => handleRemoveFilter(key)}
  onClearAll={handleClearAllFilters}
/>
```

---

## Responsive Behavior

### Mobile (< 1024px)

- Hide sidebar (filters)
- Show "Filters" button to open drawer
- Single or 2-column grid
- Stacked filter/sort controls

```tsx
{/* Mobile Filter Button */}
<button 
  onClick={() => setIsFilterDrawerOpen(true)}
  className="wp-block-button is-style-outline hidden-desktop"
>
  Filters
</button>

{/* Mobile Filter Drawer */}
<Sheet open={isFilterDrawerOpen} onOpenChange={setIsFilterDrawerOpen}>
  <SheetContent side="left">
    <FilterSidebar />
  </SheetContent>
</Sheet>
```

### Desktop (≥ 1024px)

- Persistent sidebar
- 3-column product grid
- Horizontal filter/sort bar

---

## Loading States

### Skeleton Grid

```tsx
const ProductGridSkeleton = ({ count = 12 }) => (
  <div className="wp-block-post-template is-layout-grid">
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="wp-block-group">
        <Skeleton className="wp-block-image" />
        <Skeleton className="wp-block-post-title" />
        <Skeleton className="wp-block-post-excerpt" />
      </div>
    ))}
  </div>
);
```

---

## Empty State

```tsx
const EmptyResults = ({ onReset }) => (
  <div className="wp-block-group has-text-align-center">
    <Search className="has-text-color has-secondary-color" />
    <h3>No products found</h3>
    <p className="has-text-color has-secondary-color">
      Try adjusting your filters or search terms
    </p>
    <Button onClick={onReset} variant="outline">
      Clear All Filters
    </Button>
  </div>
);
```

---

## SEO Optimization

```tsx
<Helmet>
  <title>{category ? `${category} - Shop` : 'All Products - Shop'}</title>
  <meta name="description" content={`Browse our ${category || 'product'} collection.`} />
  <link rel="canonical" href={`https://example.com/shop${category ? `/${category}` : ''}`} />
</Helmet>
```

---

## Accessibility

- [ ] Breadcrumbs use `<nav aria-label="Breadcrumb">`
- [ ] Filter sidebar is keyboard accessible
- [ ] Product grid has proper heading hierarchy
- [ ] Sort dropdown has accessible label
- [ ] Pagination is keyboard navigable
- [ ] Loading states announce to screen readers
- [ ] Empty state provides clear next steps

---

## WordPress Equivalent

```html
<!-- wp:template-part {"slug":"header"} /-->

<!-- wp:group {"tagName":"section"} -->
  <!-- wp:woocommerce/breadcrumbs /-->
<!-- /wp:group -->

<!-- wp:group {"tagName":"section"} -->
  <h1>Shop</h1>
<!-- /wp:group -->

<!-- wp:group {"layout":{"type":"flex"}} -->
  <!-- wp:woocommerce/product-filter /-->
  <!-- wp:woocommerce/product-collection /-->
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer"} /-->
```

---

## Related Templates

- [SingleProduct](SingleProduct.md) - Individual product page
- [FrontPage](FrontPage.md) - Homepage with featured products
- [PageCart](PageCart.md) - Shopping cart

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

## Back to Overview

[← Templates Overview](../overview-templates.md)