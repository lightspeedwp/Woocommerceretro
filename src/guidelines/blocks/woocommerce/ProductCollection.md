# ProductCollection Component

**Type**: Pattern (Reusable Section)  
**Location**: `/components/patterns/ProductCollection.tsx`  
**Category**: Product Display

---

## Purpose

The ProductCollection is a complete section that displays a grid or carousel of products with a heading and optional view-all link. It's designed for homepage features, category showcases, and related product sections.

**Use ProductCollection for:**
- Featured products on homepage
- "You may also like" sections
- Category highlights
- New arrivals showcase
- Sale product sections

**Do NOT use ProductCollection for:**
- Main shop/archive pages (use ProductGrid pattern)
- Search results (use ProductGrid pattern)
- Single product display (use ProductCard block)

---

## Component API

### Props Interface

```tsx
interface ProductCollectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  products: Product[];
  viewAllLink?: string;
  viewAllText?: string;
  layout?: 'grid' | 'carousel';
  columns?: 2 | 3 | 4 | 5;
  showAddToCart?: boolean;
  showQuickView?: boolean;
  loading?: boolean;
  emptyMessage?: string;
  className?: string;
}
```

---

## Layout Options

### Grid Layout (Default)

Best for:
- Homepage sections
- Category showcases
- Most product collections

```tsx
<ProductCollection
  title="Featured Products"
  products={products}
  layout="grid"
  columns={4}
/>
```

**Responsive Behavior:**
- Mobile (< 640px): 2 columns
- Tablet (640px - 1024px): 3 columns
- Desktop (≥ 1024px): 4 columns (or specified)

### Carousel Layout

Best for:
- Related products
- "You may also like"
- Limited space sections
- Mobile-first designs

```tsx
<ProductCollection
  title="You May Also Like"
  products={products}
  layout="carousel"
/>
```

---

## Common Patterns

### Homepage Featured Products

```tsx
<ProductCollection
  title="Featured Products"
  subtitle="Staff Picks"
  description="Handpicked products we think you'll love"
  products={featuredProducts}
  viewAllLink="/shop/featured"
  columns={4}
/>
```

---

**Last Updated:** December 27, 2024  
**Maintainer:** WooCommerce Prototype Team  
**Status:** ✅ Production Ready
