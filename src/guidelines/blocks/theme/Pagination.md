# Pagination Block

**Category:** Block (Archive Utility)  
**Version:** 1.0  
**Last Updated:** January 2026

---

## Overview

The **Pagination** block is a numeric navigation component for traversing multi-page archive listings. It provides clear visual feedback of the current page and allows users to jump to any page number or navigate sequentially using previous/next controls.

**Location:** `/components/blocks/archive/Pagination.tsx`

---

## Purpose

Essential for product archives, blog listings, search results, and any paginated content where users need to navigate through multiple pages of items.

---

## WordPress/WooCommerce Mapping

| WordPress Block | WooCommerce Function | Template Part |
|-----------------|----------------------|---------------|
| `core/query-pagination` | `woocommerce_pagination()` | Archive pagination pattern |
| `core/query-pagination-previous` | Previous button | Prev control |
| `core/query-pagination-numbers` | Page number buttons | Numeric controls |
| `core/query-pagination-next` | Next button | Next control |

**Template Usage:**
- `archive-product.html` (Shop pagination)
- `home.html` (Blog pagination)
- `category.html` (Category archives)
- `search.html` (Search results)

---

## Visual Structure

```
┌──────────────────────────────────────────────────────┐
│  [<]  [ 1 ]  [ 2 ]  [✓3✓]  [ 4 ]  [ 5 ]  [>]        │
└──────────────────────────────────────────────────────┘
   ↑      ↑      ↑      ↑       ↑      ↑      ↑
  Prev  Page  Page  Current  Page  Page  Next
 Button  1     2    (purple)  4     5   Button
```

**Layout Breakdown:**
1. **Previous Button:** ChevronLeft icon, disabled on page 1
2. **Page Numbers:** Numeric buttons for each page
3. **Current Page:** Highlighted in purple
4. **Next Button:** ChevronRight icon, disabled on last page
5. **Container:** Centered flexbox layout

---

## Component API

### Props

```typescript
interface PaginationProps {
  currentPage: number;     // Currently active page (1-indexed)
  totalPages: number;      // Total number of pages
  onPageChange: (page: number) => void;  // Callback when page changes
}
```

### Prop Details

#### `currentPage` (required)
**Type:** `number`  
**Description:** Currently active page number (1-indexed, not 0-indexed)  
**Valid Range:** 1 to totalPages  
**Example:** `1`, `5`, `10`

#### `totalPages` (required)
**Type:** `number`  
**Description:** Total number of pages available  
**Calculation:** `Math.ceil(totalItems / itemsPerPage)`  
**Behavior:** Component returns `null` if totalPages <= 1  
**Example:** `10`, `25`, `100`

#### `onPageChange` (required)
**Type:** `(page: number) => void`  
**Description:** Callback function triggered when user clicks a page number or prev/next  
**Parameter:** `page` - The new page number to navigate to  
**Side Effects:** Should update state and optionally scroll to top

---

## Usage Examples

### Example 1: Basic Pagination (Product Archive)

```tsx
import { Pagination } from './components/blocks/archive/Pagination';
import { useState } from 'react';

function ProductArchive() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = 100;
  const productsPerPage = 12;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  
  return (
    <div>
      {/* Product grid */}
      <div className="grid grid-cols-4 gap-6">
        {products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination */}
      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
```

---

## Styling & Design Tokens

### Colors (Light Mode)

| Element | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| Current Page | `bg-purple-600` | `text-white` | `border-purple-600` | N/A (no hover on current) |
| Other Pages | `bg-white` | `text-gray-700` | `border-gray-300` | `bg-gray-50` |
| Prev/Next | `bg-white` | `text-gray-500` | `border-gray-300` | `bg-gray-50` |
| Disabled | `bg-white` (50% opacity) | `text-gray-500` | `border-gray-300` | N/A |

### Colors (Dark Mode)

| Element | Background | Text | Border | Hover |
|---------|------------|------|--------|-------|
| Current Page | `dark:bg-purple-500` | `text-white` | `dark:border-purple-500` | N/A |
| Other Pages | `dark:bg-[#1a1a1a]` | `dark:text-gray-300` | `dark:border-gray-600` | `dark:bg-gray-800` |
| Prev/Next | `dark:bg-[#1a1a1a]` | `dark:text-gray-400` | `dark:border-gray-600` | `dark:bg-gray-800` |
| Disabled | `dark:bg-[#1a1a1a]` (50% opacity) | `dark:text-gray-400` | `dark:border-gray-600` | N/A |

---

## Accessibility (WCAG 2.1 AA)

### Semantic HTML
✅ `<nav>` element with `aria-label="Pagination"`  
✅ `<button>` elements for all interactive controls  
✅ `disabled` attribute on prev/next when not available

### ARIA Attributes
✅ `aria-label="Pagination"` on nav landmark  
✅ `aria-label="Previous page"` on prev button  
✅ `aria-label="Next page"` on next button  
✅ `disabled` attribute provides state to assistive tech

### Keyboard Navigation
✅ **Tab:** Move between pagination controls  
✅ **Enter/Space:** Activate focused button  
✅ **Shift+Tab:** Navigate backwards  
✅ **Focus Indicator:** Purple ring around focused button

---

**Document Version:** 1.0  
**Last Updated:** January 2026  
**Status:** ✅ Complete & Production Ready
