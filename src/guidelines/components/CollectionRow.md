# CollectionRow Pattern

**Version:** 1.0  
**Type:** Pattern (Horizontal Product Display)  
**WordPress Mapping:** Product Carousel Block  
**File:** `/components/patterns/CollectionRow.tsx`

---

## Overview

The CollectionRow pattern displays products in a horizontal scrolling row, perfect for showcasing curated collections, related products, or category previews without taking up excessive vertical space.

**Purpose:**
- Display products in horizontal layout
- Enable smooth horizontal scrolling
- Showcase product collections
- Save vertical page space

**WordPress Equivalent:**
- Product Carousel Block
- Horizontal Product Slider
- Collection Row Pattern

---

## Component Structure

```
CollectionRow (Pattern)
└── Scroll Container
    ├── Collection Header (title, view all link)
    ├── Scroll Wrapper
    │   └── ProductCard × N (horizontal)
    └── Navigation Controls (prev/next arrows)
```

---

## Props Interface

```typescript
interface CollectionRowProps {
  /**
   * Collection title
   */
  title: string;

  /**
   * Products to display
   */
  products: Product[];

  /**
   * Link to view full collection
   */
  viewAllLink?: string;

  /**
   * Number of visible items
   * @default { mobile: 2, tablet: 3, desktop: 4 }
   */
  visibleItems?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };

  /**
   * Enable auto-scroll
   * @default false
   */
  autoScroll?: boolean;

  /**
   * Auto-scroll interval (ms)
   * @default 5000
   */
  autoScrollInterval?: number;

  /**
   * Show navigation arrows
   * @default true
   */
  showNavigation?: boolean;
}
```

---

## Usage Examples

### Example 1: Basic Collection Row

```tsx
import { CollectionRow } from '@/components/patterns/CollectionRow';

<CollectionRow
  title="Best Sellers"
  products={bestSellerProducts}
  viewAllLink="/shop/best-sellers"
/>
```

### Example 2: Related Products

```tsx
<CollectionRow
  title="You Might Also Like"
  products={relatedProducts}
  visibleItems={{ mobile: 1, tablet: 2, desktop: 4 }}
  showNavigation={true}
/>
```

### Example 3: Auto-Scrolling Carousel

```tsx
<CollectionRow
  title="New Arrivals"
  products={newProducts}
  autoScroll={true}
  autoScrollInterval={3000}
/>
```

### Example 4: Recently Viewed

```tsx
<CollectionRow
  title="Recently Viewed"
  products={recentlyViewedProducts}
  viewAllLink="/account/history"
/>
```

---

## Features & Capabilities

### Scrolling Behavior
- Touch/swipe on mobile
- Mouse drag on desktop
- Keyboard navigation (arrow keys)
- Smooth scroll animation

### Navigation
- Previous/Next arrow buttons
- Auto-scroll with pause on hover
- Scroll indicators (dots)

### Responsive Display
- Configurable visible items per breakpoint
- Adaptive card sizing
- Mobile-optimized touch scrolling

---

## WordPress FSE Mapping

```html
<!-- wp:group {"className":"collection-row"} -->
<div class="wp-block-group collection-row">
  
  <!-- wp:heading -->
  <h2>Best Sellers</h2>
  <!-- /wp:heading -->
  
  <!-- wp:woocommerce/product-collection -->
  <div class="wc-block-product-collection horizontal-scroll">
    <!-- Product cards in horizontal layout -->
  </div>
  <!-- /wp:woocommerce/product-collection -->
  
  <!-- wp:button -->
  <a href="/shop/best-sellers">View All</a>
  <!-- /wp:button -->
  
</div>
<!-- /wp:group -->
```

---

## Used In

### Templates
- **FrontPage:** Homepage product showcases
- **SingleProduct:** Related products section

### Patterns
- **RecentlyViewedSection:** User history
- **RelatedProductsSection:** Cross-sells

---

## Styling & Design Tokens

```css
.collection-row {
  padding: var(--spacing-section);
}

.collection-scroll {
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.collection-scroll::-webkit-scrollbar {
  height: 8px;
}

.collection-item {
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: calc((100% - var(--spacing-md)) / 2); /* Mobile: 2 items */
}

@media (min-width: 768px) {
  .collection-item {
    width: calc((100% - var(--spacing-md) * 2) / 3); /* Tablet: 3 items */
  }
}

@media (min-width: 1024px) {
  .collection-item {
    width: calc((100% - var(--spacing-md) * 3) / 4); /* Desktop: 4 items */
  }
}
```

---

## Responsive Behavior

### Mobile (< 640px)
- 1-2 items visible
- Touch swipe enabled
- Hidden scrollbar
- No navigation arrows

### Tablet (640px - 1024px)
- 2-3 items visible
- Optional arrows
- Partial next item visible

### Desktop (> 1024px)
- 4-5 items visible
- Navigation arrows
- Mouse drag enabled
- Hover controls

---

## Accessibility

```tsx
<section aria-label={title}>
  <div className="collection-header">
    <h2>{title}</h2>
    <a href={viewAllLink}>View All</a>
  </div>
  
  <div 
    className="collection-scroll"
    role="region"
    aria-label={`${title} products`}
    tabIndex={0}
  >
    {products.map(product => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
  
  <button
    onClick={scrollPrev}
    aria-label="Previous products"
  >
    <ChevronLeft />
  </button>
  
  <button
    onClick={scrollNext}
    aria-label="Next products"
  >
    <ChevronRight />
  </button>
</section>
```

---

## Testing

```typescript
describe('CollectionRow', () => {
  it('renders collection title', () => {
    render(<CollectionRow title="Best Sellers" products={mockProducts} />);
    expect(screen.getByText('Best Sellers')).toBeInTheDocument();
  });

  it('renders all products', () => {
    render(<CollectionRow title="Test" products={mockProducts} />);
    expect(screen.getAllByRole('article')).toHaveLength(mockProducts.length);
  });

  it('scrolls to next items on arrow click', async () => {
    render(<CollectionRow title="Test" products={mockProducts} showNavigation={true} />);
    const nextButton = screen.getByLabelText(/next products/i);
    await userEvent.click(nextButton);
    // Assert scroll position changed
  });

  it('shows view all link when provided', () => {
    render(
      <CollectionRow 
        title="Test" 
        products={mockProducts}
        viewAllLink="/shop/all"
      />
    );
    const link = screen.getByRole('link', { name: /view all/i });
    expect(link).toHaveAttribute('href', '/shop/all');
  });
});
```

---

## Performance Considerations

### Lazy Loading
```tsx
<div className="collection-scroll">
  {products.map((product, index) => (
    <ProductCard
      key={product.id}
      {...product}
      loading={index < 4 ? 'eager' : 'lazy'}
    />
  ))}
</div>
```

### Virtual Scrolling
- For 50+ products, implement virtual scrolling
- Use react-window or similar library
- Render only visible items + buffer

---

## Common Patterns

### Homepage Collection
```tsx
<Section>
  <Container>
    <CollectionRow
      title="Featured Products"
      products={featuredProducts}
      viewAllLink="/shop/featured"
    />
  </Container>
</Section>
```

### Product Page Upsells
```tsx
<CollectionRow
  title="Complete the Look"
  products={upsellProducts}
  visibleItems={{ mobile: 1, tablet: 2, desktop: 3 }}
/>
```

---

## Related Components

- **ProductGrid:** Vertical grid layout
- **ProductCard:** Individual product display
- **RecentlyViewedSection:** User product history

---

## Best Practices

### Do's ✅
- ✅ Show partial next item (peek)
- ✅ Enable touch/swipe on mobile
- ✅ Provide keyboard navigation
- ✅ Lazy load off-screen items

### Don'ts ❌
- ❌ Don't auto-scroll too fast (< 3s)
- ❌ Don't hide navigation completely
- ❌ Don't show too many items at once
- ❌ Don't forget mobile optimization

---

## FAQ

### Q: How many products should I show?
**A:** 4-6 visible items on desktop, 2-3 on mobile. Total 8-20 products per row.

### Q: Should I enable auto-scroll?
**A:** Only for promotional content. Pause on hover and provide clear controls.

### Q: How do I handle mobile scrolling?
**A:** Use native scroll with `overflow-x: auto` and `-webkit-overflow-scrolling: touch`.

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Horizontal scrolling
- Navigation controls
- Responsive design

---

## See Also

- [ProductGrid Pattern](/guidelines/components/ProductGrid.md)
- [ProductCard Block](/guidelines/components/ProductCard.md)
- [RelatedProductsSection Pattern](/guidelines/patterns/RelatedProductsSection.md)
