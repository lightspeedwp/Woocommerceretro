# ProductCard Component

**Type**: Block (Functional Unit)  
**Location**: `/components/blocks/ProductCard.tsx`  
**Category**: Product Display

---

## Purpose

The ProductCard is the primary component for displaying individual products in grids, carousels, and lists. It shows product image, name, price, and quick actions like Add to Cart and Wishlist.

**Use ProductCard when:**
- Displaying products in shop/archive pages
- Showing featured products on homepage
- Creating product carousels
- Building related product sections
- Showing search results

**Do NOT use ProductCard for:**
- Full product details (use SingleProduct template instead)
- Cart line items (use CartLineItem block)
- Wishlist items (use dedicated WishlistItem block)

---

## Component API

### Props Interface

```tsx
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    salePrice?: number;
    image: string;
    images?: string[];        // For gallery hover effect
    badges?: string[];        // e.g., ["Sale", "New", "Featured"]
    category?: string;
    rating?: number;          // 0-5
    reviewCount?: number;
    inStock?: boolean;
  };
  showAddToCart?: boolean;    // Default: true
  showQuickView?: boolean;    // Default: false
  showWishlist?: boolean;     // Default: true
  layout?: 'grid' | 'list';   // Default: 'grid'
  className?: string;
}
```

### Default Props

```tsx
const defaultProps = {
  showAddToCart: true,
  showQuickView: false,
  showWishlist: true,
  layout: 'grid',
};
```

---

## Usage Examples

### Basic Product Card

```tsx
import { ProductCard } from '@/components/blocks/ProductCard';

function ProductGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
        product={{
          id: '1',
          name: 'Wireless Headphones',
          price: 99.99,
          salePrice: 79.99,
          image: 'https://example.com/headphones.jpg',
          badges: ['Sale'],
          inStock: true,
        }}
      />
    </div>
  );
}
```

### Card with Quick View

```tsx
<ProductCard
  product={product}
  showQuickView={true}
  showAddToCart={false}
/>
```

### List Layout Variant

```tsx
<ProductCard
  product={product}
  layout="list"
  className="border-b border-gray-200"
/>
```

---

## Visual Structure

### Grid Layout (Default)

```
┌─────────────────────────┐
│                         │
│   [Product Image]       │  ← Aspect ratio 1:1
│   [Badges: Sale, New]   │  ← Top-left overlay
│   [Wishlist Icon]       │  ← Top-right overlay
│                         │
├─────────────────────────┤
│ Product Name            │  ← H3 heading
│ Category                │  ← Small text
│ ★★★★☆ (12 reviews)     │  ← Rating
│ $79.99 $99.99          │  ← Sale price + original
│ [Add to Cart Button]   │  ← Full-width CTA
└─────────────────────────┘
```

### List Layout

```
┌─────────────────────────────────────────────────────┐
│ [Image]  Product Name                    $79.99     │
│          Category                         $99.99     │
│          ★★★★☆ (12 reviews)              [Add to    │
│          Short description...             Cart]     │
└─────────────────────────────────────────────────────┘
```

---

## Implementation Patterns

### Pattern 1: Standard Grid Card

```tsx
<div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
  {/* Image Container */}
  <div className="relative aspect-square bg-gray-50">
    {/* Badges */}
    {product.badges && product.badges.length > 0 && (
      <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
        {product.badges.map((badge) => (
          <span
            key={badge}
            className="bg-yellow-600 text-white text-xs uppercase px-2 py-1 rounded-full font-bold"
          >
            {badge}
          </span>
        ))}
      </div>
    )}

    {/* Wishlist Button */}
    {showWishlist && (
      <button
        aria-label="Add to wishlist"
        className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-gray-50"
      >
        <Heart size={20} className="text-gray-600" />
      </button>
    )}

    {/* Product Image */}
    <Link to={`/product/${product.id}`}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </Link>
  </div>

  {/* Product Info */}
  <div className="p-4">
    {/* Category */}
    {product.category && (
      <p className="text-gray-600 text-sm mb-1">{product.category}</p>
    )}

    {/* Product Name */}
    <h3 className="mb-2">
      <Link
        to={`/product/${product.id}`}
        className="hover:text-purple-600 transition-colors"
      >
        {product.name}
      </Link>
    </h3>

    {/* Rating */}
    {product.rating !== undefined && (
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={14}
              className={
                star <= product.rating
                  ? 'fill-gray-900 text-gray-900'
                  : 'fill-none text-gray-300'
              }
            />
          ))}
        </div>
        {product.reviewCount !== undefined && (
          <span className="text-gray-600 text-sm">
            ({product.reviewCount})
          </span>
        )}
      </div>
    )}

    {/* Price */}
    <div className="mb-3">
      {product.salePrice ? (
        <div className="flex items-center gap-2">
          <span className="text-lg text-gray-900 font-bold">
            ${product.salePrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${product.price.toFixed(2)}
          </span>
        </div>
      ) : (
        <span className="text-lg text-gray-900 font-bold">
          ${product.price.toFixed(2)}
        </span>
      )}
    </div>

    {/* Add to Cart Button */}
    {showAddToCart && (
      <button
        onClick={() => handleAddToCart(product.id)}
        disabled={!product.inStock}
        className={`w-full py-2 rounded transition-colors ${
          product.inStock
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    )}
  </div>
</div>
```

### Pattern 2: Minimal Card (No Borders)

```tsx
<div className="group">
  <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
    <Link to={`/product/${product.id}`}>
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
  </div>
  
  <h3 className="mb-1">
    <Link to={`/product/${product.id}`} className="hover:text-purple-600">
      {product.name}
    </Link>
  </h3>
  
  <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
</div>
```

### Pattern 3: Card with Image Gallery Hover

```tsx
const [currentImage, setCurrentImage] = useState(0);
const images = product.images || [product.image];

<div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
  <img
    src={images[currentImage]}
    alt={product.name}
    className="w-full h-full object-cover"
  />
  
  {/* Image dots indicator */}
  {images.length > 1 && (
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentImage(index)}
          className={`w-2 h-2 rounded-full ${
            index === currentImage ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label={`View image ${index + 1}`}
        />
      ))}
    </div>
  )}
</div>
```

---

## Interaction States

### Hover Effects

✅ **DO**: Show subtle elevation and reveal actions

```tsx
className="hover:shadow-lg transition-shadow duration-200"
```

✅ **DO**: Reveal wishlist button on hover

```tsx
className="opacity-0 group-hover:opacity-100 transition-opacity"
```

✅ **DO**: Scale image slightly on hover (optional)

```tsx
className="group-hover:scale-105 transition-transform duration-300"
```

❌ **DON'T**: Use jarring animations or excessive scale

```tsx
// ❌ Too aggressive
className="hover:scale-110"  // Breaks layout
```

### Focus States

Always ensure keyboard navigation works:

```tsx
<Link
  to={`/product/${product.id}`}
  className="focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 rounded"
>
  {product.name}
</Link>
```

---

## Responsive Behavior

### Grid Columns by Breakpoint

```tsx
// Recommended grid setup
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Mobile (< 640px) | 2 | 16px |
| Tablet (640px+) | 3 | 24px |
| Desktop (1024px+) | 4 | 24px |
| Wide (1280px+) | 4-5 | 24px |

### Responsive Card Sizing

```tsx
// Card image adjusts automatically with aspect-square
// Text sizes use default typography scaling
// Button padding remains consistent
```

---

## Accessibility Requirements

### Required ARIA Labels

```tsx
// ✅ Icon-only buttons need labels
<button aria-label="Add to wishlist">
  <Heart size={20} />
</button>

// ✅ Quick view button
<button aria-label={`Quick view ${product.name}`}>
  <Eye size={20} />
</button>
```

### Semantic HTML

```tsx
// ✅ Use H3 for product name (assuming H2 is section heading)
<h3>{product.name}</h3>

// ✅ Use proper link for product navigation
<Link to={`/product/${product.id}`}>{product.name}</Link>

// ❌ Don't use divs for clickable elements
<div onClick={...}>{product.name}</div>  // Bad!
```

### Keyboard Navigation

- Product name link must be keyboard focusable
- Add to Cart button must be keyboard accessible
- Wishlist button must be keyboard accessible
- Quick View button must be keyboard accessible
- Focus order: Image → Wishlist → Name → Add to Cart

### Stock Status

```tsx
// ✅ Communicate stock status clearly
<button disabled={!product.inStock} aria-disabled={!product.inStock}>
  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
</button>

// ✅ Visual indicator for screen readers
{!product.inStock && (
  <span className="sr-only">This product is currently out of stock</span>
)}
```

---

## Common Patterns

### 1. Featured Products Section

```tsx
<section className="py-12">
  <Container>
    <h2 className="mb-8">Featured Products</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {featuredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </Container>
</section>
```

### 2. Product Carousel

```tsx
import { Carousel } from '@/components/ui/carousel';

<Carousel>
  {products.map(product => (
    <ProductCard
      key={product.id}
      product={product}
      className="flex-shrink-0"
    />
  ))}
</Carousel>
```

### 3. Product Grid with Filters

```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
  {/* Sidebar filters */}
  <aside className="lg:col-span-1">
    <FilterSidebar />
  </aside>
  
  {/* Product grid */}
  <div className="lg:col-span-3">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
</div>
```

---

## Badge Guidelines

### Standard Badge Types

```tsx
const badges = {
  sale: {
    text: 'Sale',
    className: 'bg-yellow-600 text-white',
  },
  new: {
    text: 'New',
    className: 'bg-purple-600 text-white',
  },
  featured: {
    text: 'Featured',
    className: 'bg-black text-white',
  },
  lowStock: {
    text: 'Low Stock',
    className: 'bg-red-600 text-white',
  },
};
```

### Badge Placement

- **Position**: Top-left corner, 12px from edges
- **Stacking**: Vertical stack if multiple badges
- **Z-index**: Above image, below wishlist button

---

## Performance Considerations

### Image Optimization

```tsx
// ✅ Use lazy loading for images below the fold
<img src={product.image} alt={product.name} loading="lazy" />

// ✅ Use appropriate image sizes
// Mobile: 400px width
// Desktop: 600px width

// ✅ Use modern formats (WebP with JPG fallback)
<picture>
  <source srcSet={`${product.image}.webp`} type="image/webp" />
  <img src={product.image} alt={product.name} />
</picture>
```

### Rendering Large Lists

```tsx
// For very long product lists (100+ items), consider pagination or virtual scrolling
import { useInView } from 'react-intersection-observer';

// Load more on scroll
const { ref, inView } = useInView();

{inView && <ProductCard ... />}
```

---

## Related Components

- **ProductQuickView**: Modal for quick product preview
- **ProductGrid**: Pattern that composes multiple ProductCards
- **ProductCollection**: Pattern with heading + ProductCards
- **AddToCartButton**: Standalone add to cart functionality
- **WishlistButton**: Standalone wishlist functionality

---

## Common Mistakes

❌ Making the entire card clickable (poor UX - interferes with buttons)  
❌ Not providing alt text for product images  
❌ Missing hover states on interactive elements  
❌ Inconsistent spacing between cards in a grid  
❌ Not handling out-of-stock states  
❌ Using `<div>` instead of `<Link>` for product navigation  
❌ Forgetting to add `loading="lazy"` for images below the fold  
❌ Not providing proper ARIA labels for icon-only buttons

---

## Testing Checklist

- [ ] Product name is clickable and navigates to product page
- [ ] Image is clickable and navigates to product page
- [ ] Add to Cart button works and provides feedback
- [ ] Wishlist button toggles state correctly
- [ ] Disabled state shows for out-of-stock products
- [ ] Sale badge appears when salePrice is present
- [ ] Price displays correctly (with/without sale)
- [ ] Rating stars display correctly
- [ ] Card is keyboard accessible (tab through all actions)
- [ ] Focus states are visible
- [ ] Card works on mobile (touch targets are adequate)
- [ ] Images load lazily
- [ ] Hover effects work smoothly
