# ResultsCount Pattern

**Version:** 1.0  
**Type:** Pattern (Results Display)  
**WordPress Mapping:** Query Results Count  
**File:** `/components/patterns/ResultsCount.tsx`

---

## Overview

The ResultsCount pattern displays the current results range and total count for archive/search pages in a user-friendly format with proper pluralization and screen reader support.

**Purpose:**
- Show current page range (e.g., "Showing 1-9 of 24")
- Provide context to users
- Announce updates to screen readers
- Handle pluralization correctly
- Support empty states

**WordPress Equivalent:**
- Query Results Count
- Search Results Count
- WooCommerce Product Count

---

## Component Structure

```
ResultsCount (Pattern)
└── Status Container (aria-live region)
    └── Results Text ("Showing X–Y of Z items")
```

---

## Props Interface

```typescript
interface ResultsCountProps {
  /**
   * Start index (1-indexed)
   */
  start: number;

  /**
   * End index
   */
  end: number;

  /**
   * Total item count
   */
  total: number;

  /**
   * Item type for pluralization
   * @default 'item'
   */
  itemType?: string;

  /**
   * Custom CSS classes
   */
  className?: string;
}
```

---

## Usage Examples

### Example 1: Blog Posts

```tsx
import { ResultsCount } from '@/components/patterns/ResultsCount';

const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;

<ResultsCount
  start={indexOfFirstPost + 1}
  end={Math.min(indexOfLastPost, posts.length)}
  total={posts.length}
  itemType="post"
/>
// Output: "Showing 1–9 of 24 posts"
```

### Example 2: Products

```tsx
<ResultsCount
  start={1}
  end={12}
  total={248}
  itemType="product"
/>
// Output: "Showing 1–12 of 248 products"
```

### Example 3: Search Results

```tsx
<ResultsCount
  start={1}
  end={10}
  total={10}
  itemType="result"
/>
// Output: "Showing 1–10 of 10 results"
```

### Example 4: Single Item

```tsx
<ResultsCount
  start={1}
  end={1}
  total={1}
  itemType="article"
/>
// Output: "Showing 1–1 of 1 article" (singular)
```

### Example 5: No Results

```tsx
<ResultsCount
  start={0}
  end={0}
  total={0}
  itemType="product"
/>
// Output: "No products found"
```

---

## Features & Capabilities

### Text Formatting
- **Range Display:** "Showing 1–12 of 248"
- **En Dash:** Uses proper en dash (–) not hyphen
- **Proper Spacing:** Consistent spacing

### Pluralization
- **Singular:** "1 item", "1 post", "1 product"
- **Plural:** "24 items", "248 products", "10 results"
- **Automatic:** Handles both automatically

### Empty State
- Shows "No {items} found" when total is 0
- Consistent messaging

### Accessibility
- **aria-live="polite":** Announces to screen readers
- **role="status":** Semantic status region
- Updates announced on page change

---

## WordPress FSE Mapping

```html
<!-- wp:query-results-count -->
<div class="wp-block-query-results-count" role="status">
  Showing 1–9 of 24 posts
</div>
<!-- /wp:query-results-count -->
```

---

## Used In

### Templates
- **BlogIndex:** Blog post count
- **ArchiveAuthor:** Author post count
- **ArchiveCategory:** Category post count
- **TagArchive:** Tag post count
- **ArchiveProduct:** Product count
- **ProductSearchResults:** Search results count

### Pages
- **/blog:** Blog posts
- **/blog/author/*:** Author archives
- **/blog/category/*:** Category archives
- **/blog/tag/*:** Tag archives
- **/shop:** Products
- **/search:** Search results

---

## Styling & Design Tokens

### Container
```css
.results-count {
  margin-bottom: 1.5rem; /* mb-6 */
  text-align: center;
  color: var(--color-text-secondary);
}

.dark .results-count {
  color: var(--color-text-secondary-dark);
}
```

### Typography
- Font size: Base (16px / 1rem)
- Color: gray-600 / gray-400 (dark)
- Alignment: Centered
- Weight: Normal (400)

---

## Responsive Behavior

### All Breakpoints
- Same display across all sizes
- Centered text
- No responsive changes needed

---

## Dark Mode Support

```css
.dark .results-count {
  color: var(--color-text-secondary-dark);
}
```

Text color adapts from gray-600 to gray-400.

---

## Accessibility

### ARIA Attributes
```tsx
<div 
  className="results-count"
  role="status"
  aria-live="polite"
>
  Showing 1–12 of 248 products
</div>
```

### Screen Reader Benefits
- **role="status":** Identifies as status region
- **aria-live="polite":** Announces changes after current speech
- **Dynamic updates:** Page changes announced automatically

### Keyboard Navigation
- Not focusable (informational only)
- No interaction required

---

## Testing

```typescript
describe('ResultsCount', () => {
  it('displays results range', () => {
    render(
      <ResultsCount 
        start={1}
        end={9}
        total={24}
        itemType="post"
      />
    );
    expect(screen.getByText(/showing 1–9 of 24 posts/i)).toBeInTheDocument();
  });

  it('pluralizes correctly for multiple items', () => {
    render(
      <ResultsCount 
        start={1}
        end={10}
        total={10}
        itemType="product"
      />
    );
    expect(screen.getByText(/10 products/i)).toBeInTheDocument();
  });

  it('uses singular form for one item', () => {
    render(
      <ResultsCount 
        start={1}
        end={1}
        total={1}
        itemType="result"
      />
    );
    expect(screen.getByText(/1 result/i)).toBeInTheDocument();
  });

  it('shows empty state for no results', () => {
    render(
      <ResultsCount 
        start={0}
        end={0}
        total={0}
        itemType="product"
      />
    );
    expect(screen.getByText(/no products found/i)).toBeInTheDocument();
  });

  it('has proper ARIA attributes', () => {
    const { container } = render(
      <ResultsCount 
        start={1}
        end={9}
        total={24}
        itemType="post"
      />
    );
    const element = container.firstChild;
    expect(element).toHaveAttribute('role', 'status');
    expect(element).toHaveAttribute('aria-live', 'polite');
  });

  it('applies custom className', () => {
    const { container } = render(
      <ResultsCount 
        start={1}
        end={9}
        total={24}
        itemType="post"
        className="custom-class"
      />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
```

---

## Performance Considerations

### Lightweight
- Minimal DOM (single div)
- No state management
- Pure function component
- Fast render (< 1ms)

### No Re-renders
- No internal state
- No side effects
- Props-only rendering

---

## Common Patterns

### With Pagination
```tsx
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

return (
  <>
    <ResultsCount
      start={indexOfFirstPost + 1}
      end={Math.min(indexOfLastPost, posts.length)}
      total={posts.length}
      itemType="post"
    />
    
    <PostGrid posts={currentPosts} />
    
    <ArchivePagination
      currentPage={currentPage}
      totalPages={Math.ceil(posts.length / postsPerPage)}
      onPageChange={setCurrentPage}
    />
  </>
);
```

### With Filtering
```tsx
const filteredProducts = products.filter(/* filter logic */);

{filteredProducts.length > 0 && (
  <ResultsCount
    start={1}
    end={Math.min(12, filteredProducts.length)}
    total={filteredProducts.length}
    itemType="product"
  />
)}
```

### Conditional Display
```tsx
{!isLoading && products.length > 0 && (
  <ResultsCount
    start={indexOfFirstProduct + 1}
    end={Math.min(indexOfLastProduct, products.length)}
    total={products.length}
    itemType="product"
  />
)}
```

---

## Related Components

- **ArchivePagination:** Page navigation
- **ArchiveHeader:** Archive title/description
- **PostGrid:** Post listing
- **ProductGrid:** Product listing

---

## Best Practices

### Do's ✅
- ✅ Use 1-indexed start values (not 0)
- ✅ Calculate end correctly with Math.min()
- ✅ Provide appropriate itemType
- ✅ Include role="status" and aria-live
- ✅ Show only when results exist (or handle empty state)

### Don'ts ❌
- ❌ Don't use 0-indexed start values
- ❌ Don't forget to handle empty state
- ❌ Don't use hyphens instead of en dashes
- ❌ Don't hardcode pluralization
- ❌ Don't skip ARIA attributes

---

## FAQ

### Q: Should I always show ResultsCount?
**A:** Show it when you have pagination or filtering. Hide during loading states.

### Q: What if end > total?
**A:** Use `Math.min(end, total)` to ensure end never exceeds total.

### Q: How do I handle 0-indexed arrays?
**A:** Add 1 to indexOfFirstPost for the display value.

### Q: Can I customize the text format?
**A:** Currently fixed format. Fork component if custom format needed.

### Q: Should it be above or below the grid?
**A:** Above the grid, below filters/sorting. Provides context before content.

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Automatic pluralization
- Empty state handling
- Screen reader support
- Dark mode support

---

## See Also

- [ArchiveHeader Pattern](/guidelines/patterns/ArchiveHeader.md)
- [ArchivePagination Pattern](/guidelines/patterns/ArchivePagination.md)
- [PostGrid Pattern](/guidelines/components/PostGrid.md)
- [ProductGrid Pattern](/guidelines/components/ProductGrid.md)
