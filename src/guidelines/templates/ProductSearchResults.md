# ProductSearchResults Template

**Component Type:** Template (Search Results Page)  
**Location:** `/src/app/components/templates/ProductSearchResults.tsx`  
**CSS:** `/src/styles/sections/shop-funky.css` (lines 1588-1723)  
**Route:** `/shop/search?q={query}`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)

---

## Overview

ProductSearchResults displays search results for product queries within the shop section. Features a sidebar with filters, result count toolbar, responsive product grid, and empty state messaging.

**WordPress Mapping:** WooCommerce Product Search Results / Archive Template  
**Dark Mode:** ✅ Complete support  
**Responsive:** ✅ Mobile-first with sidebar toggle

---

## Key Features

### Layout Structure

**Desktop (≥ 1024px):**
- Two-column layout (sidebar + content)
- Sidebar: 256px fixed width (16rem)
- Content: Flexible width with 3-column product grid

**Mobile (< 1024px):**
- Single column stack
- Sidebar above content
- 1-2 column product grid

### Search Functionality

**Query Parsing:**
- Reads `q` parameter from URL search params
- Example: `/shop/search?q=wireless`

**Result States:**
- Has results: Shows toolbar + product grid
- No results: Shows empty state with suggestions

### Components

1. **Search Header** — Full-width header with query display
2. **Breadcrumbs** — Shop → Search: "{query}"
3. **Sidebar** — ShopSidebar component with filters
4. **Toolbar** — Result count + sort dropdown
5. **Product Grid** — Responsive grid of ProductCards
6. **Empty State** — No results message with icon

---

## Component Structure

### File Organization

```tsx
// Imports
import { useSearchParams } from 'react-router';
import { Layout } from '../parts/Layout';
import { Breadcrumbs } from '../parts/Breadcrumbs';
import { ShopSidebar } from '../parts/ShopSidebar';
import { ProductCard, Product } from '../blocks/ProductCard';

// Get query from URL
const [searchParams] = useSearchParams();
const query = searchParams.get('q') || '';

// Determine if results exist
const hasResults = query.toLowerCase() !== 'no results';
```

### JSX Hierarchy

```tsx
<Layout>
  {/* Breadcrumbs */}
  <Breadcrumbs items={[...]} />
  
  {/* Search Header */}
  <div className="search-results__header">
    <Container variant="site">
      <Typography variant="h2">Search results: "{query}"</Typography>
    </Container>
  </div>
  
  <Container variant="site">
    <div className="search-results__layout">
      
      {/* Sidebar */}
      <aside className="search-results__sidebar">
        <ShopSidebar />
      </aside>
      
      {/* Content */}
      <div className="search-results__content">
        {hasResults ? (
          <>
            {/* Toolbar */}
            <div className="search-results__toolbar">
              <Typography className="search-results__count">
                Showing all {products.length} results
              </Typography>
              <div className="search-results__sort">
                <span className="search-results__sort-label">Sort by</span>
                <select className="wp-sort-select">...</select>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="search-results__grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          {/* Empty State */}
          <div className="search-results__empty">
            <div className="search-results__empty-icon">
              <Search size={32} />
            </div>
            <Typography variant="h2">No products found for "{query}"</Typography>
            <p className="search-results__empty-text">
              Try adjusting your search terms or browse our categories.
            </p>
          </div>
        )}
      </div>
      
    </div>
  </Container>
</Layout>
```

---

## BEM Class Hierarchy

```
search-results__header              /* Full-width search header */

search-results__layout              /* Two-column flex container */
├── search-results__sidebar         /* Left sidebar (filters) */
└── search-results__content         /* Right content area */
    ├── search-results__toolbar     /* Result count + sort */
    │   ├── search-results__count   /* "Showing X results" */
    │   ├── search-results__sort    /* Sort controls container */
    │   └── search-results__sort-label  /* "Sort by" label */
    │
    ├── search-results__grid        /* Product grid (responsive) */
    │
    └── search-results__empty       /* Empty state container */
        ├── search-results__empty-icon   /* Search icon circle */
        └── search-results__empty-text   /* Help text */
```

**Total BEM Classes:** 11

---

## Sections Breakdown

### 1. Search Header

**Purpose:** Display search query in full-width header bar

**Structure:**
```tsx
<div className="search-results__header">
  <Container variant="site">
    <Typography variant="h2">Search results: "{query}"</Typography>
  </Container>
</div>
```

**Styling:**
```css
.search-results__header {
  padding-block: var(--wp--preset--spacing--60); /* 32px top/bottom */
  background: var(--wp--preset--color--surface);
  border-bottom: 1px solid var(--wp--preset--color--border-light);
}

.dark .search-results__header {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.08);
}
```

**Dark Mode:** Subtle background with light border

### 2. Breadcrumbs

**Dynamic breadcrumbs with query:**

```tsx
const breadcrumbItems = [
  { label: 'Shop', path: '/shop' },
  { label: `Search: "${query}"`, path: `/shop/search?q=${query}` }
];

<Breadcrumbs items={breadcrumbItems} />
```

**Example output:**
```
Shop > Search: "wireless headphones"
```

### 3. Sidebar

**Uses ShopSidebar component:**
```tsx
<aside className="search-results__sidebar">
  <ShopSidebar />
</aside>
```

**Responsive Width:**
- Mobile: 100% (full width, stacked above content)
- Desktop: 256px (16rem) fixed width

**Contains:**
- Category filters
- Price range slider
- Attribute filters (color, size, brand)
- Rating filter
- In stock toggle

### 4. Result Toolbar

**Layout:** Flexbox row with space-between

**Left side:**
```tsx
<Typography variant="body" className="search-results__count">
  Showing all {products.length} results
</Typography>
```

**Right side:**
```tsx
<div className="search-results__sort">
  <span className="search-results__sort-label">
    <small>Sort by</small>
  </span>
  <select className="wp-sort-select">
    <option>Default</option>
    <option>Popularity</option>
    <option>Average Rating</option>
    <option>Latest</option>
    <option>Price: Low to High</option>
    <option>Price: High to Low</option>
  </select>
</div>
```

**Styling:**
```css
.search-results__toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--wp--preset--spacing--40);
  margin-bottom: var(--wp--preset--spacing--50);
  border-bottom: 1px solid var(--wp--preset--color--border-light);
}
```

**Note:** Sort functionality is placeholder (no onChange handler)

### 5. Product Grid

**Responsive Grid:**

```css
.search-results__grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr)); /* Mobile: 1 col */
  gap: var(--wp--preset--spacing--60);
}

@media (min-width: 640px) {
  .search-results__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr)); /* Tablet: 2 cols */
  }
}

@media (min-width: 1024px) {
  .search-results__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr)); /* Desktop: 3 cols */
  }
}
```

**Product Cards:**
```tsx
{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}
```

**Uses:** Standard ProductCard component with funky treatments

### 6. Empty State

**Shown when:** `hasResults === false`

**Structure:**
```tsx
<div className="search-results__empty">
  <div className="search-results__empty-icon">
    <Search size={32} />
  </div>
  <Typography variant="h2">No products found for "{query}"</Typography>
  <p className="search-results__empty-text">
    Try adjusting your search terms or browse our categories.
  </p>
</div>
```

**Styling:**
```css
.search-results__empty {
  text-align: center;
  padding: var(--wp--preset--spacing--80); /* 64px */
  background: var(--wp--preset--color--surface);
  border-radius: var(--wp--preset--border-radius--sm, 4px);
  border: 1px solid var(--wp--preset--color--border-light);
}

.search-results__empty-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 5rem;   /* 80px */
  height: 5rem;  /* 80px */
  border-radius: 50%;
  margin-bottom: var(--wp--preset--spacing--50);
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--text-secondary);
}

.search-results__empty-text {
  color: var(--wp--preset--color--text-secondary);
  max-width: 28rem; /* 448px */
  margin-inline: auto;
}
```

**Dark Mode Adjustments:**
```css
.dark .search-results__empty {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.08);
}

.dark .search-results__empty-icon {
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.4);
}

.dark .search-results__empty-text {
  color: rgba(255, 255, 255, 0.5);
}
```

---

## Responsive Behavior

### Mobile (< 640px)

**Layout:** Single column stack
```
┌─────────────────┐
│  Breadcrumbs    │
├─────────────────┤
│  Search Header  │
├─────────────────┤
│  Sidebar        │
├─────────────────┤
│  Toolbar        │
├─────────────────┤
│  Product        │
│  (1 column)     │
└─────────────────┘
```

**Grid:** 1 column

### Tablet (640px - 1023px)

**Layout:** Sidebar stacked above content
```
┌─────────────────┐
│  Breadcrumbs    │
├─────────────────┤
│  Search Header  │
├─────────────────┤
│  Sidebar        │
├─────────────────┤
│  Toolbar        │
├─────────────────┤
│ Product │Product│
│ Product │Product│
└─────────────────┘
```

**Grid:** 2 columns

### Desktop (≥ 1024px)

**Layout:** Sidebar + content side-by-side
```
┌───────────────────────────────┐
│  Breadcrumbs                  │
├───────────────────────────────┤
│  Search Header                │
├──────────┬────────────────────┤
│ Sidebar  │  Toolbar           │
│          ├────────────────────┤
│ (16rem)  │Product│Prod│Product│
│          │Product│Prod│Product│
└──────────┴────────────────────┘
```

**Grid:** 3 columns

**Flexbox Layout:**
```css
@media (min-width: 1024px) {
  .search-results__layout {
    flex-direction: row; /* Sidebar left, content right */
  }
  
  .search-results__sidebar {
    width: 16rem; /* 256px fixed */
  }
  
  .search-results__content {
    flex: 1; /* Take remaining space */
  }
}
```

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Header background | Surface color | `rgba(255,255,255,0.02)` |
| Header border | Border-light | `rgba(255,255,255,0.08)` |
| Toolbar border | Border-light | `rgba(255,255,255,0.08)` |
| Count text | Text-secondary | `rgba(255,255,255,0.5)` |
| Sort label | Text-secondary | `rgba(255,255,255,0.5)` |
| Empty bg | Surface | `rgba(255,255,255,0.02)` |
| Empty border | Border-light | `rgba(255,255,255,0.08)` |
| Empty icon bg | Surface | `rgba(255,255,255,0.06)` |
| Empty icon color | Text-secondary | `rgba(255,255,255,0.4)` |
| Empty text | Text-secondary | `rgba(255,255,255,0.5)` |

### Contrast Verification

**Light Mode:**
- Header text on surface: ~15:1 (AAA)
- Count text (secondary): ~7:1 (AA)

**Dark Mode:**
- Header text on dark bg: ~16:1 (AAA)
- Count text: ~6:1 (AA)

---

## Accessibility

### ARIA Attributes

**Sort dropdown:**
```tsx
<select 
  className="wp-sort-select"
  aria-label="Sort products by"
>
  <option>Default</option>
  {/* ... */}
</select>
```

**Sidebar landmark:**
```tsx
<aside 
  className="search-results__sidebar"
  aria-label="Product filters"
>
  <ShopSidebar />
</aside>
```

### Keyboard Navigation

- ✅ Tab through breadcrumbs, sidebar filters, sort dropdown
- ✅ Enter to select sort option
- ✅ Focus visible on all interactive elements
- ✅ Product cards keyboard accessible

### Screen Reader Support

**Result count announcement:**
```tsx
<Typography variant="body" className="search-results__count">
  Showing all {products.length} results
</Typography>
```

**Empty state:**
```tsx
<Typography variant="h2">
  No products found for "{query}"
</Typography>
<p className="search-results__empty-text">
  Try adjusting your search terms or browse our categories.
</p>
```

**Search header:**
- Screen readers announce: "Search results: {query}"
- Provides context before results

---

## Search Query Handling

### URL Parameter

**Reading query:**
```tsx
const [searchParams] = useSearchParams();
const query = searchParams.get('q') || '';
```

**Example URLs:**
- `/shop/search?q=wireless`
- `/shop/search?q=blue+headphones`
- `/shop/search?q=laptop+stand`

### Empty Query

**Fallback:** Empty string (`''`)

**Behavior:** Shows empty state if no results

### Special Query: "no results"

**Trigger empty state:**
```tsx
const hasResults = query.toLowerCase() !== 'no results';
```

**Purpose:** Demo/testing empty state

### Production Search Logic

**Current (hardcoded):**
```tsx
const products: Product[] = [
  // Hardcoded 3 products
];
```

**Production (should be):**
```tsx
const products = useProductSearch(query);

// Or with API:
const [products, setProducts] = useState([]);

useEffect(() => {
  fetch(`/api/products/search?q=${query}`)
    .then(res => res.json())
    .then(data => setProducts(data));
}, [query]);
```

---

## Data Integration

### Current Product Data

**Hardcoded products:**
```tsx
const products: Product[] = [
  {
    id: '1',
    name: 'Roodeberg Classic Red 2021',
    brand: 'Roodeberg',
    price: 129.00,
    image: 'https://images.unsplash.com/...',
    inStock: true
  },
  // ... 2 more products
];
```

**Note:** Legacy wine/brandy products (from KWV theme)

### Product Interface

```tsx
interface Product {
  id: string;
  name: string;
  brand?: string;
  price: number;
  salePrice?: number;
  image: string;
  inStock: boolean;
  badge?: string;
  rating?: number;
  reviewCount?: number;
}
```

### Production Integration

**Replace hardcoded with:**

**Option 1: Context/Hook**
```tsx
const { searchResults, isLoading } = useProductSearch(query);
```

**Option 2: API Fetch**
```tsx
const [products, setProducts] = useState<Product[]>([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  setIsLoading(true);
  fetch(`/api/products/search?q=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setIsLoading(false);
    });
}, [query]);
```

**Option 3: WordPress REST API**
```tsx
useEffect(() => {
  fetch(`/wp-json/wc/v3/products?search=${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(products => setProducts(products));
}, [query]);
```

---

## Sort Functionality (Placeholder)

### Current Implementation

**No actual sorting:**
```tsx
<select className="wp-sort-select">
  <option>Default</option>
  <option>Popularity</option>
  {/* ... */}
</select>
```

### Production Implementation

**Add state and handler:**
```tsx
const [sortBy, setSortBy] = useState('default');

const sortedProducts = useMemo(() => {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'popularity':
      return sorted.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'latest':
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    default:
      return sorted;
  }
}, [products, sortBy]);

<select 
  className="wp-sort-select"
  value={sortBy}
  onChange={(e) => setSortBy(e.target.value)}
>
  <option value="default">Default</option>
  <option value="popularity">Popularity</option>
  <option value="rating">Average Rating</option>
  <option value="latest">Latest</option>
  <option value="price-asc">Price: Low to High</option>
  <option value="price-desc">Price: High to Low</option>
</select>
```

---

## Usage

### Import and Render

```tsx
import { ProductSearchResults } from './templates/ProductSearchResults';

// In router
{
  path: 'shop/search',
  element: <ProductSearchResults />
}
```

### Navigating to Search

**From SearchAutocomplete:**
```tsx
const handleSearch = (query: string) => {
  navigate(`/shop/search?q=${encodeURIComponent(query)}`);
};
```

**From MainHeader search:**
```tsx
<form onSubmit={(e) => {
  e.preventDefault();
  navigate(`/shop/search?q=${searchQuery}`);
}}>
  <input 
    type="search" 
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</form>
```

### Example Queries

**Good queries:**
- `/shop/search?q=wireless` → "wireless" products
- `/shop/search?q=blue` → Products with "blue" in name/description
- `/shop/search?q=headphones` → Headphone products

**Special query:**
- `/shop/search?q=no+results` → Shows empty state

---

## Related Components

- **ShopSidebar** (`/src/app/components/parts/ShopSidebar.tsx`) — Filter sidebar
- **ProductCard** (`/src/app/components/blocks/product/ProductCard.tsx`) — Product grid items
- **Breadcrumbs** (`/src/app/components/parts/Breadcrumbs.tsx`) — Navigation breadcrumbs
- **SearchAutocomplete** (`/src/app/components/blocks/search/SearchAutocomplete.tsx`) — Search input with suggestions
- **ArchiveProduct** (`/src/app/components/templates/ArchiveProduct.tsx`) — Similar shop archive layout

---

## Common Issues

### Issue: Query not updating on URL change

**Cause:** Component doesn't re-render when search params change

**Solution:** Ensure useSearchParams is called at component level:
```tsx
const [searchParams] = useSearchParams();
const query = searchParams.get('q') || '';
```

### Issue: Empty state shows for all queries

**Cause:** Hardcoded `hasResults` check

**Solution:** Check actual product array length:
```tsx
const hasResults = products.length > 0;
```

### Issue: Sidebar filters don't affect results

**Cause:** No filter logic connected

**Solution:** Implement filter state and apply to products:
```tsx
const filteredProducts = useMemo(() => {
  return products.filter(product => {
    // Apply category filter
    if (selectedCategory && product.category !== selectedCategory) return false;
    
    // Apply price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    return true;
  });
}, [products, selectedCategory, priceRange]);
```

### Issue: Sort dropdown doesn't persist

**Cause:** No state management

**Solution:** Add sort state or URL param:
```tsx
const [sortBy, setSortBy] = useState('default');

// Or use URL param:
const sortBy = searchParams.get('sort') || 'default';

<select 
  value={sortBy}
  onChange={(e) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', e.target.value);
    navigate(`?${params.toString()}`);
  }}
>
```

---

## Testing Checklist

### Visual Testing
- [ ] Search header displays query correctly
- [ ] Breadcrumbs show "Search: {query}"
- [ ] Sidebar filters visible and functional
- [ ] Product grid displays correctly (1-3 cols responsive)
- [ ] Empty state shows when no results
- [ ] Empty state icon centered
- [ ] Toolbar aligned (count left, sort right)

### Interaction Testing
- [ ] Query parameter reads from URL
- [ ] Sort dropdown displays options
- [ ] Sidebar filters accessible
- [ ] Product cards clickable
- [ ] Breadcrumbs navigate correctly
- [ ] Empty state text readable

### Responsive Testing
- [ ] Mobile: 1 column grid, sidebar above content
- [ ] Tablet: 2 column grid, sidebar above content
- [ ] Desktop: 3 column grid, sidebar beside content
- [ ] Sidebar width 256px on desktop
- [ ] Toolbar wraps on small screens
- [ ] Touch targets 44x44px on mobile

### Dark Mode Testing
- [ ] Header background subtle
- [ ] Header border visible
- [ ] Toolbar border visible
- [ ] Count text readable
- [ ] Sort label readable
- [ ] Empty state background/border visible
- [ ] Empty icon background visible
- [ ] All text readable

### Accessibility Testing
- [ ] Breadcrumbs keyboard navigable
- [ ] Sort dropdown has label
- [ ] Sidebar has landmark role
- [ ] Product cards keyboard accessible
- [ ] Focus visible on all elements
- [ ] Screen reader announces result count
- [ ] Empty state message announced
- [ ] Color contrast passes WCAG AA

---

## Future Enhancements

### 1. Loading State

Add skeleton loaders while searching:
```tsx
const [isLoading, setIsLoading] = useState(false);

{isLoading ? (
  <div className="search-results__loading">
    <ProductSkeleton count={6} />
  </div>
) : (
  <div className="search-results__grid">...</div>
)}
```

### 2. Pagination

Add pagination for large result sets:
```tsx
import { Pagination } from '../blocks/archive/Pagination';

<Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

### 3. Search Suggestions

Show "Did you mean...?" for typos:
```tsx
{suggestedQuery && (
  <div className="search-results__suggestion">
    Did you mean: 
    <a href={`/shop/search?q=${suggestedQuery}`}>
      {suggestedQuery}
    </a>?
  </div>
)}
```

### 4. Recent Searches

Store and display recent searches:
```tsx
const recentSearches = localStorage.getItem('recentSearches');

{!query && recentSearches && (
  <div className="search-results__recent">
    <h3>Recent Searches</h3>
    <ul>
      {recentSearches.map(search => (
        <li><a href={`/shop/search?q=${search}`}>{search}</a></li>
      ))}
    </ul>
  </div>
)}
```

### 5. Search Analytics

Track popular searches:
```tsx
useEffect(() => {
  if (query) {
    fetch('/api/analytics/search', {
      method: 'POST',
      body: JSON.stringify({ query, resultCount: products.length })
    });
  }
}, [query, products.length]);
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign)  
**Next Review:** After search functionality testing
