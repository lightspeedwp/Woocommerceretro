# Create Product Archive Template

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Template  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Page Template (Archive) |
| **Target** | ArchiveProduct.tsx |
| **Complexity** | High |
| **Estimated Time** | 90 minutes |
| **Prerequisites** | Guidelines.md, templates/, patterns/, blocks/ |
| **Output Files** | ArchiveProduct.tsx, ArchiveProduct.test.tsx |

---

## 🎯 Objective

Create a comprehensive product archive template for shop/category pages with product grid, filters, sorting, pagination, and full WordPress alignment.

### What This Prompt Does:
- ✅ Creates complete archive template
- ✅ Implements product grid layout
- ✅ Adds filter sidebar with multiple filters
- ✅ Includes sort dropdown
- ✅ Implements pagination
- ✅ Ensures WCAG AA compliance
- ✅ Generates comprehensive tests

### What This Prompt Does NOT Do:
- ❌ Implement real product search API
- ❌ Handle product variations
- ❌ Include wishlist functionality
- ❌ Manage inventory tracking

---

## 📚 Context & Background

### Project Architecture:
- **Location:** `/src/app/templates/ArchiveProduct.tsx`
- **Type:** WordPress Archive Template
- **Usage:** Shop page, category pages, search results
- **Template Mapping:** Maps to WordPress `archive-product.html`

### Related Components:
- `ArchiveHeader` - Page title and description
- `ProductGrid` - Product card grid
- `FilterSidebar` - Filter controls
- `ArchivePagination` - Pagination
- `ProductCard` - Individual product

---

## 📋 Requirements

### Functional Requirements:
1. Display grid of products (responsive: 2/3/4 columns)
2. Filter sidebar (category, price, rating, attributes)
3. Sort dropdown (price, popularity, newest)
4. Active filters display with clear buttons
5. Pagination with page numbers
6. Results count ("Showing X of Y products")
7. Empty state ("No products found")
8. Loading state with skeleton loaders

### Technical Requirements:
1. TypeScript with complete interfaces
2. WordPress template structure
3. Use ProductCard component
4. Implement filter/sort state management
5. URL parameters for filters
6. Responsive grid layout
7. ≥70% test coverage

### Accessibility Requirements:
1. **WCAG AA compliance**
2. **Keyboard navigation** for filters
3. **ARIA labels** for controls
4. **Focus management**
5. **Screen reader announcements**
6. **Skip to results** link

---

## 🔧 Implementation Instructions

### Step 1: Create Template File

**Action:** Create `/src/app/templates/ArchiveProduct.tsx`

**Code:**
```tsx
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { ProductCard } from '@/components/blocks/ProductCard';
import { FilterSidebar } from '@/components/blocks/archive/FilterSidebar';
import { ArchiveHeader } from '@/components/patterns/ArchiveHeader';
import { ArchivePagination } from '@/components/patterns/ArchivePagination';

/**
 * ArchiveProduct Template
 * 
 * WordPress archive template for product listings
 * Includes filters, sorting, pagination
 * 
 * @example
 * <ArchiveProduct />
 */

interface Product {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  onSale: boolean;
  featured?: boolean;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  rating: number;
  inStock: boolean;
}

interface SortOption {
  value: string;
  label: string;
}

const sortOptions: SortOption[] = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
];

export const ArchiveProduct: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    rating: 0,
    inStock: false,
  });
  const [sortBy, setSortBy] = useState('popularity');

  const productsPerPage = 12;

  // Fetch products
  useEffect(() => {
    // Simulate API call
    setLoading(true);
    setTimeout(() => {
      // Mock products data
      const mockProducts: Product[] = [
        // ... (would fetch from API)
      ];
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setLoading(false);
    }, 500);
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (filters.categories.length > 0) {
      result = result.filter(p => 
        filters.categories.includes(p.category)
      );
    }

    // Filter by price
    result = result.filter(p => {
      const price = p.salePrice || p.price;
      return price >= filters.priceRange[0] && price <= filters.priceRange[1];
    });

    // Filter by rating
    if (filters.rating > 0) {
      result = result.filter(p => p.rating >= filters.rating);
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => 
          (a.salePrice || a.price) - (b.salePrice || b.price)
        );
        break;
      case 'price-high':
        result.sort((a, b) => 
          (b.salePrice || b.price) - (a.salePrice || a.price)
        );
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Would sort by date if available
        break;
      default:
        // popularity - default order
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [products, filters, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <main id="main-content" className="wp-template--archive-product">
      {/* Archive Header */}
      <ArchiveHeader
        title="Shop"
        description="Browse our collection of quality products"
        resultCount={filteredProducts.length}
      />

      {/* Main Content */}
      <section className="py-12 bg-white dark:bg-[#0f0f0f]">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="wp-template--archive-sidebar">
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
              />
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="wp-template--archive-toolbar">
                {/* Results Count */}
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {startIndex + 1}–{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
                </p>

                {/* Sort Dropdown */}
                <div className="flex items-center gap-2">
                  <label 
                    htmlFor="sort-select"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Sort by:
                  </label>
                  <select
                    id="sort-select"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="wp-block-select"
                    aria-label="Sort products"
                  >
                    {sortOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filters */}
              {(filters.categories.length > 0 || filters.rating > 0) && (
                <div className="wp-template--archive-active-filters">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Active filters:
                  </span>
                  {filters.categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setFilters({
                        ...filters,
                        categories: filters.categories.filter(c => c !== category),
                      })}
                      className="wp-template--archive-filter-tag"
                      aria-label={`Remove ${category} filter`}
                    >
                      {category}
                      <span aria-hidden="true">×</span>
                    </button>
                  ))}
                  {filters.rating > 0 && (
                    <button
                      onClick={() => setFilters({ ...filters, rating: 0 })}
                      className="wp-template--archive-filter-tag"
                      aria-label="Remove rating filter"
                    >
                      {filters.rating}+ stars
                      <span aria-hidden="true">×</span>
                    </button>
                  )}
                </div>
              )}

              {/* Loading State */}
              {loading ? (
                <div className="woocommerce-products-grid" aria-live="polite" aria-busy="true">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="woocommerce-product-skeleton">
                      {/* Skeleton loader */}
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {/* Empty State */}
                  {filteredProducts.length === 0 ? (
                    <div className="wp-template--archive-empty" role="status">
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        No products found matching your criteria.
                      </p>
                      <button
                        onClick={() => setFilters({
                          categories: [],
                          priceRange: [0, 1000],
                          rating: 0,
                          inStock: false,
                        })}
                        className="mt-4 wp-block-button wp-block-button--primary"
                      >
                        Clear all filters
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Product Grid */}
                      <div 
                        className="woocommerce-products-grid"
                        role="list"
                        aria-label="Product results"
                      >
                        {currentProducts.map(product => (
                          <ProductCard 
                            key={product.id} 
                            product={product}
                            role="listitem"
                          />
                        ))}
                      </div>

                      {/* Pagination */}
                      {totalPages > 1 && (
                        <ArchivePagination
                          currentPage={currentPage}
                          totalPages={totalPages}
                          onPageChange={setCurrentPage}
                        />
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default ArchiveProduct;
```

**Success Criteria:**
- ✅ Template file created
- ✅ All features implemented
- ✅ TypeScript types complete
- ✅ Responsive layout

---

### Step 2: Add CSS Styles

**Action:** Add styles to `/src/styles/globals.css`

**Code:**
```css
/* ============================================
   ARCHIVE PRODUCT TEMPLATE
   ============================================ */

.wp-template--archive-product {
  min-height: 100vh;
}

/* Sidebar */
.wp-template--archive-sidebar {
  width: 100%;
}

@media (min-width: 1024px) {
  .wp-template--archive-sidebar {
    width: 280px;
    flex-shrink: 0;
  }
}

/* Toolbar */
.wp-template--archive-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: var(--wp--preset--spacing--md);
  padding-bottom: var(--wp--preset--spacing--lg);
  border-bottom: 1px solid var(--wp--preset--color--border);
  margin-bottom: var(--wp--preset--spacing--lg);
}

/* Active Filters */
.wp-template--archive-active-filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--sm);
  align-items: center;
  padding: var(--wp--preset--spacing--md);
  background: var(--wp--preset--color--muted);
  border-radius: var(--wp--preset--border-radius--md);
  margin-bottom: var(--wp--preset--spacing--lg);
}

.wp-template--archive-filter-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--xs);
  padding: 4px 12px;
  background: var(--wp--preset--color--background);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--full);
  font-size: var(--wp--preset--font-size--sm);
  color: var(--wp--preset--color--foreground);
  cursor: pointer;
  transition: all var(--wp--preset--transition--base) ease;
}

.wp-template--archive-filter-tag:hover {
  background: var(--wp--preset--color--error);
  color: white;
  border-color: var(--wp--preset--color--error);
}

/* Empty State */
.wp-template--archive-empty {
  text-align: center;
  padding: var(--wp--preset--spacing--2xl) var(--wp--preset--spacing--xl);
}
```

---

### Step 3: Create Test File

**Action:** Create test file with workflow tests

**Code:**
```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ArchiveProduct } from './ArchiveProduct';

describe('ArchiveProduct', () => {
  it('renders archive header', async () => {
    render(
      <BrowserRouter>
        <ArchiveProduct />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Shop')).toBeInTheDocument();
    });
  });

  it('displays products in grid', async () => {
    render(
      <BrowserRouter>
        <ArchiveProduct />
      </BrowserRouter>
    );

    await waitFor(() => {
      const grid = screen.getByRole('list', { name: /product results/i });
      expect(grid).toBeInTheDocument();
    });
  });

  it('filters products by category', async () => {
    render(
      <BrowserRouter>
        <ArchiveProduct />
      </BrowserRouter>
    );

    // Wait for products to load
    await waitFor(() => {
      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    // Apply category filter
    const categoryCheckbox = screen.getByLabelText('Electronics');
    fireEvent.click(categoryCheckbox);

    // Verify filter tag appears
    await waitFor(() => {
      expect(screen.getByText('Electronics')).toBeInTheDocument();
    });
  });

  it('sorts products', async () => {
    render(
      <BrowserRouter>
        <ArchiveProduct />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByLabelText('Sort products')).toBeInTheDocument();
    });

    const sortSelect = screen.getByLabelText('Sort products');
    fireEvent.change(sortSelect, { target: { value: 'price-low' } });

    expect(sortSelect).toHaveValue('price-low');
  });
});
```

---

## ✅ Verification Checklist

- [ ] Template renders correctly
- [ ] Product grid displays
- [ ] Filters work
- [ ] Sorting works
- [ ] Pagination works
- [ ] Empty state shows
- [ ] Loading state shows
- [ ] Dark mode supported
- [ ] Responsive layout
- [ ] Tests pass

---

**Status:** ✅ Active  
**Created:** 2026-01-10
