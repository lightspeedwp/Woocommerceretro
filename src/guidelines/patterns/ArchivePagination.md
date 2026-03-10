# ArchivePagination Pattern

**Version:** 1.0  
**Type:** Pattern (Pagination Navigation)  
**WordPress Mapping:** Query Pagination Block  
**File:** `/components/patterns/ArchivePagination.tsx`

---

## Overview

The ArchivePagination pattern provides accessible, user-friendly pagination navigation for archive templates with ellipsis support, keyboard navigation, and WordPress Query Pagination Block alignment.

**Purpose:**
- Navigate between pages of results
- Show current page visually
- Provide accessible navigation
- Handle large page counts gracefully
- Maintain consistency across archives

**WordPress Equivalent:**
- Query Pagination Block
- Posts Pagination Block
- Page Numbers Block

---

## Component Structure

```
ArchivePagination (Pattern)
└── Navigation Container
    ├── Previous Button
    ├── Page Numbers
    │   ├── First Page
    │   ├── Ellipsis (if needed)
    │   ├── Current Page Range
    │   ├── Ellipsis (if needed)
    │   └── Last Page
    └── Next Button
```

---

## Props Interface

```typescript
interface ArchivePaginationProps {
  /**
   * Current active page (1-indexed)
   */
  currentPage: number;

  /**
   * Total number of pages
   */
  totalPages: number;

  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;

  /**
   * Scroll to top on change
   * @default true
   */
  scrollToTop?: boolean;

  /**
   * ARIA label
   * @default 'Pagination'
   */
  ariaLabel?: string;

  /**
   * Max visible page numbers
   * @default 5
   */
  maxVisible?: number;

  /**
   * Custom CSS classes
   */
  className?: string;
}
```

---

## Usage Examples

### Example 1: Basic Blog Pagination

```tsx
import { ArchivePagination } from '@/components/patterns/ArchivePagination';

const [currentPage, setCurrentPage] = useState(1);
const totalPages = Math.ceil(posts.length / postsPerPage);

<ArchivePagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>
```

### Example 2: Product Archive Pagination

```tsx
const [page, setPage] = useState(1);

const handlePageChange = (newPage: number) => {
  setPage(newPage);
  // Optionally refetch data
  fetchProducts(newPage);
};

<ArchivePagination
  currentPage={page}
  totalPages={20}
  onPageChange={handlePageChange}
  ariaLabel="Product pagination"
/>
```

### Example 3: With Scroll Disabled

```tsx
<ArchivePagination
  currentPage={currentPage}
  totalPages={15}
  onPageChange={setCurrentPage}
  scrollToTop={false} // Don't scroll on page change
/>
```

### Example 4: Custom Max Visible Pages

```tsx
<ArchivePagination
  currentPage={currentPage}
  totalPages={50}
  onPageChange={setCurrentPage}
  maxVisible={7} // Show more page numbers before ellipsis
/>
```

---

## Features & Capabilities

### Page Number Display
- **Small counts (≤5 pages):** Show all pages
- **Large counts (>5 pages):** Smart ellipsis placement
- **Current page highlighting**
- **First/last always visible**

### Ellipsis Logic
- **Near start (page 1-3):** [1] [2] [3] [4] ... [10]
- **In middle (page 5):** [1] ... [4] [5] [6] ... [10]
- **Near end (page 8-10):** [1] ... [7] [8] [9] [10]

### Navigation
- **Previous/Next buttons:** Arrow icons + text
- **Disabled states:** When at first/last page
- **Scroll to top:** Smooth scroll on page change
- **Keyboard support:** Tab, Enter, Space

### Accessibility
- ARIA labels for all buttons
- Current page indicated with aria-current="page"
- Disabled button states
- Screen reader friendly text

---

## WordPress FSE Mapping

```html
<!-- wp:query-pagination -->
<nav class="wp-block-query-pagination" aria-label="Pagination">
  
  <!-- wp:query-pagination-previous -->
  <div class="wp-block-query-pagination-previous">
    <a href="?page=1">Previous</a>
  </div>
  <!-- /wp:query-pagination-previous -->
  
  <!-- wp:query-pagination-numbers -->
  <div class="wp-block-query-pagination-numbers">
    <a href="?page=1">1</a>
    <span aria-current="page">2</span>
    <a href="?page=3">3</a>
    <span>...</span>
    <a href="?page=10">10</a>
  </div>
  <!-- /wp:query-pagination-numbers -->
  
  <!-- wp:query-pagination-next -->
  <div class="wp-block-query-pagination-next">
    <a href="?page=3">Next</a>
  </div>
  <!-- /wp:query-pagination-next -->
  
</nav>
<!-- /wp:query-pagination -->
```

---

## Used In

### Templates
- **BlogIndex:** Main blog pagination
- **ArchiveAuthor:** Author post pagination
- **ArchiveCategory:** Category post pagination
- **TagArchive:** Tag post pagination
- **ArchiveProduct:** Product pagination (uses separate Pagination block)

### Pages
- **/blog:** Blog landing
- **/blog/author/*:** Author archives
- **/blog/category/*:** Category archives
- **/blog/tag/*:** Tag archives
- **/shop:** Product shop

---

## Styling & Design Tokens

### Navigation Container
```css
.archive-pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; /* gap-2 */
}
```

### Page Number Button
```css
.page-number {
  min-width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-weight: 500;
  transition: all 0.2s;
}

.page-number.active {
  background: var(--color-purple-600);
  border-color: var(--color-purple-600);
  color: white;
}

.page-number:hover:not(.active) {
  background: var(--color-bg-secondary);
}

.dark .page-number {
  background: #1a1a1a;
  border-color: var(--color-border-dark);
}

.dark .page-number.active {
  background: var(--color-purple-500);
  border-color: var(--color-purple-500);
}
```

### Previous/Next Buttons
```css
.pagination-nav-button {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--color-border);
  background: white;
  border-radius: var(--radius-sm);
  font-weight: 500;
  transition: all 0.2s;
}

.pagination-nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dark .pagination-nav-button {
  background: #1a1a1a;
  border-color: var(--color-border-dark);
}
```

---

## Responsive Behavior

### Mobile (< 640px)
- "Previous"/"Next" text hidden (icons only)
- Smaller touch targets acceptable (44x44px minimum maintained)
- Compact spacing

### Desktop (> 640px)
- "Previous"/"Next" text visible
- More generous spacing
- Hover states enabled

---

## Dark Mode Support

All elements adapt to dark mode:
- Backgrounds: white → #1a1a1a
- Borders: gray-300 → gray-600
- Text: gray-700 → gray-300
- Active: purple-600 → purple-500

---

## Accessibility

### ARIA Labels
```tsx
<nav aria-label="Pagination">
  <button aria-label="Previous page" disabled={currentPage === 1}>
    Previous
  </button>
  
  <button aria-current="page" aria-label="Current page, page 2">
    2
  </button>
  
  <button aria-label="Go to page 3">
    3
  </button>
  
  <button aria-label="Next page" disabled={currentPage === totalPages}>
    Next
  </button>
</nav>
```

### Keyboard Navigation
- Tab to focus buttons
- Enter/Space to activate
- Disabled buttons not focusable
- Logical tab order

### Screen Readers
- Current page announced
- Total pages announced
- Page changes announced (via aria-live in parent)

---

## Testing

```typescript
describe('ArchivePagination', () => {
  it('renders page numbers', () => {
    render(
      <ArchivePagination 
        currentPage={1}
        totalPages={5}
        onPageChange={vi.fn()}
      />
    );
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('highlights current page', () => {
    render(
      <ArchivePagination 
        currentPage={3}
        totalPages={5}
        onPageChange={vi.fn()}
      />
    );
    const currentPage = screen.getByLabelText(/current page/i);
    expect(currentPage).toHaveTextContent('3');
    expect(currentPage).toHaveClass('bg-purple-600');
  });

  it('disables previous on first page', () => {
    render(
      <ArchivePagination 
        currentPage={1}
        totalPages={5}
        onPageChange={vi.fn()}
      />
    );
    const prevButton = screen.getByLabelText('Previous page');
    expect(prevButton).toBeDisabled();
  });

  it('disables next on last page', () => {
    render(
      <ArchivePagination 
        currentPage={5}
        totalPages={5}
        onPageChange={vi.fn()}
      />
    );
    const nextButton = screen.getByLabelText('Next page');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange when page clicked', async () => {
    const onPageChange = vi.fn();
    render(
      <ArchivePagination 
        currentPage={1}
        totalPages={5}
        onPageChange={onPageChange}
      />
    );
    
    await userEvent.click(screen.getByText('3'));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it('shows ellipsis for large page counts', () => {
    render(
      <ArchivePagination 
        currentPage={1}
        totalPages={20}
        onPageChange={vi.fn()}
      />
    );
    expect(screen.getByText('...')).toBeInTheDocument();
  });

  it('scrolls to top by default', async () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo');
    render(
      <ArchivePagination 
        currentPage={1}
        totalPages={5}
        onPageChange={vi.fn()}
      />
    );
    
    await userEvent.click(screen.getByText('2'));
    expect(scrollToSpy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('skips scroll when disabled', async () => {
    const scrollToSpy = vi.spyOn(window, 'scrollTo');
    render(
      <ArchivePagination 
        currentPage={1}
        totalPages={5}
        onPageChange={vi.fn()}
        scrollToTop={false}
      />
    );
    
    await userEvent.click(screen.getByText('2'));
    expect(scrollToSpy).not.toHaveBeenCalled();
  });
});
```

---

## Performance Considerations

### Optimization
- Pure component (memo-izable)
- Minimal state
- No external API calls
- Lightweight DOM

### Page Number Generation
- Calculated on-demand
- No unnecessary re-renders
- O(1) complexity for small counts

---

## Common Patterns

### Blog Pagination
```tsx
const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 9;
const totalPages = Math.ceil(posts.length / postsPerPage);

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

return (
  <>
    <PostGrid posts={currentPosts} />
    <ArchivePagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
      ariaLabel="Blog pagination"
    />
  </>
);
```

### Product Pagination with API
```tsx
const [page, setPage] = useState(1);
const { data, isLoading } = useQuery(['products', page], () =>
  fetchProducts({ page, limit: 12 })
);

return (
  <>
    {isLoading ? (
      <ProductSkeleton count={12} />
    ) : (
      <ProductGrid products={data.products} />
    )}
    
    <ArchivePagination
      currentPage={page}
      totalPages={data.totalPages}
      onPageChange={setPage}
    />
  </>
);
```

---

## Related Components

- **ArchiveHeader:** Archive page header
- **ResultsCount:** Results count display
- **Pagination (Block):** WooCommerce product pagination
- **PostGrid:** Post listing
- **ProductGrid:** Product listing

---

## Best Practices

### Do's ✅
- ✅ Always show first and last page
- ✅ Use ellipsis for large page counts
- ✅ Provide ARIA labels
- ✅ Disable prev/next at boundaries
- ✅ Highlight current page
- ✅ Use 44x44px minimum touch targets

### Don'ts ❌
- ❌ Don't show pagination for single page
- ❌ Don't forget disabled states
- ❌ Don't skip ARIA labels
- ❌ Don't use too many visible pages (>7)
- ❌ Don't forget keyboard support

---

## FAQ

### Q: How many page numbers should be visible?
**A:** Default is 5 (maxVisible=5). For very wide layouts, you can use 7, but avoid more than that.

### Q: When should I show ellipsis?
**A:** When totalPages > maxVisible (default 5). The component handles this automatically.

### Q: Should I scroll to top on page change?
**A:** Yes (default), unless you have a specific UX reason not to (e.g., infinite scroll).

### Q: How do I customize the ellipsis character?
**A:** Currently uses "...", but you can modify the component to use a custom character.

### Q: Can I use this with URL-based pagination?
**A:** Yes, update URL params in onPageChange callback:
```tsx
onPageChange={(page) => {
  navigate(`?page=${page}`);
}}
```

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Ellipsis support
- Scroll to top
- Accessibility features
- Dark mode support

---

## See Also

- [ArchiveHeader Pattern](/guidelines/patterns/ArchiveHeader.md)
- [ResultsCount Pattern](/guidelines/patterns/ResultsCount.md)
- [Pagination Block](/guidelines/blocks/archive/Pagination.md)
- [PostGrid Pattern](/guidelines/components/PostGrid.md)
