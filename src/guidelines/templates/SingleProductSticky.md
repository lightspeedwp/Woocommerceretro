# SingleProductSticky Template

**Component Type:** Template (Product Detail Page)  
**Location:** `/src/app/components/templates/SingleProductSticky.tsx`  
**CSS:** `/src/styles/sections/shop-funky.css` (sp-sticky section)  
**Route:** `/product/:slug/sticky`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 4)

---

## Overview

SingleProductSticky is an alternative product detail page layout featuring a two-column design with a sticky purchase panel. The left column contains scrollable product images and collapsible details, while the right column displays a fixed add-to-cart panel that remains visible during scroll.

**WordPress Mapping:** WooCommerce Single Product Template (Sticky Layout Variation)  
**Dark Mode:** ✅ Complete support  
**Responsive:** ✅ Mobile-first with sticky behavior on desktop

---

## Key Features

### Layout Structure

**Desktop (≥ 1024px):**
- Two-column grid (60% / 40% split)
- Left: Scrollable gallery + accordions
- Right: Sticky purchase panel (position: sticky)

**Mobile (< 1024px):**
- Single column stack
- Gallery → Purchase panel → Details accordions
- No sticky behavior (natural flow)

### Funky Treatments

1. **Gallery:**
   - Glow frame on main image
   - Neon active thumbnail border (cyan)
   - Glass thumbnails container

2. **Sticky Panel:**
   - Glassmorphism container (`backdrop-filter: blur(16px)`)
   - Neon accent borders (cyan/lime gradient)
   - Floating shadow effect

3. **Add to Cart Button:**
   - Gradient background (cyan → lime)
   - Neon glow on hover
   - Success state with checkmark

4. **Price:**
   - Gradient accent on sale price
   - Strikethrough original price

5. **Trust Badges:**
   - Glass panel with subtle neon icons
   - Cyan icon glow on hover

---

## Component Structure

### File Organization

```tsx
// Imports
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Breadcrumbs } from '../parts/Breadcrumbs';
import { RelatedProductsSection } from '../patterns/RelatedProductsSection';
import { products } from '../../data/products';

// State management
const [selectedImage, setSelectedImage] = useState(0);
const [quantity, setQuantity] = useState(1);
const [isAddedToCart, setIsAddedToCart] = useState(false);

// Product data
const product = products[0]; // Get from route params in production

// Handlers
handleAddToCart();
handleAddToWishlist();
```

### JSX Hierarchy

```tsx
<Layout>
  <Breadcrumbs items={[...]} />
  
  <Container>
    <div className="sp-sticky">
      <div className="sp-sticky__layout">
        
        {/* Left Column: Gallery + Details */}
        <div className="sp-sticky__gallery">
          <div className="sp-sticky__main-image">...</div>
          <div className="sp-sticky__thumbs">...</div>
          <div className="sp-sticky__details sp-sticky__details--desktop">
            <details className="sp-sticky__accordion">...</details>
          </div>
        </div>
        
        {/* Right Column: Sticky Purchase Panel */}
        <div className="sp-sticky__sidebar">
          <div className="sp-sticky__sidebar-sticky">
            <div className="sp-sticky__panel">
              <div className="sp-sticky__info">...</div>
              <div className="sp-sticky__quantity">...</div>
              <div className="sp-sticky__actions">...</div>
              <div className="sp-sticky__trust">...</div>
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Mobile Details */}
      <div className="sp-sticky__details sp-sticky__details--mobile">...</div>
      
      {/* Related Products */}
      <div className="sp-sticky__related">
        <RelatedProductsSection products={relatedProducts} />
      </div>
    </div>
  </Container>
</Layout>
```

---

## BEM Class Hierarchy

```
sp-sticky                              /* Container */
├── sp-sticky__layout                  /* Two-column grid */
│   ├── sp-sticky__gallery             /* Left column */
│   │   ├── sp-sticky__main-image      /* Main product image container */
│   │   │   └── sp-sticky__main-img    /* <img> element */
│   │   ├── sp-sticky__thumbs          /* Thumbnail grid */
│   │   │   ├── sp-sticky__thumb       /* Thumbnail button */
│   │   │   │   ├── sp-sticky__thumb--active  /* Active thumbnail */
│   │   │   │   └── sp-sticky__thumb-img      /* Thumbnail <img> */
│   │   └── sp-sticky__details         /* Details accordions */
│   │       ├── sp-sticky__details--desktop   /* Desktop-only */
│   │       ├── sp-sticky__details--mobile    /* Mobile-only */
│   │       ├── sp-sticky__accordion   /* Single accordion */
│   │       ├── sp-sticky__accordion-trigger  /* Summary button */
│   │       ├── sp-sticky__accordion-icon--closed  /* Plus icon */
│   │       ├── sp-sticky__accordion-icon--open    /* Minus icon */
│   │       ├── sp-sticky__accordion-content  /* Details content */
│   │       ├── sp-sticky__accordion-text     /* Paragraph text */
│   │       ├── sp-sticky__specs       /* Specifications list */
│   │       ├── sp-sticky__spec-row    /* Spec row */
│   │       ├── sp-sticky__spec-label  /* Spec label (dt) */
│   │       └── sp-sticky__spec-value  /* Spec value (dd) */
│   │
│   └── sp-sticky__sidebar             /* Right column */
│       └── sp-sticky__sidebar-sticky  /* Sticky wrapper (position: sticky) */
│           └── sp-sticky__panel       /* Glassmorphism panel */
│               ├── sp-sticky__info    /* Product info section */
│               │   ├── sp-sticky__badge       /* Badge (e.g., "New") */
│               │   ├── sp-sticky__rating      /* Rating container */
│               │   │   ├── sp-sticky__stars   /* Stars container */
│               │   │   ├── sp-sticky__star--filled    /* Filled star */
│               │   │   ├── sp-sticky__star--empty     /* Empty star */
│               │   │   └── sp-sticky__review-count    /* Review count */
│               │   ├── sp-sticky__price-block /* Price section */
│               │   │   ├── sp-sticky__price-row       /* Price row */
│               │   │   ├── sp-sticky__price           /* Current price */
│               │   │   ├── sp-sticky__price--original /* Original price */
│               │   │   └── sp-sticky__savings         /* Savings amount */
│               │   └── sp-sticky__stock       /* Stock status */
│               │       ├── sp-sticky__stock-icon--in  /* In-stock icon */
│               │       ├── sp-sticky__stock-text--in  /* In-stock text */
│               │       └── sp-sticky__stock-text--out /* Out-of-stock text */
│               ├── sp-sticky__quantity       /* Quantity selector */
│               │   ├── sp-sticky__quantity-label      /* Label */
│               │   ├── sp-sticky__quantity-controls   /* Controls container */
│               │   ├── sp-sticky__qty-btn             /* +/- buttons */
│               │   └── sp-sticky__qty-input           /* Number input */
│               ├── sp-sticky__actions        /* Action buttons */
│               │   ├── sp-sticky__add-to-cart         /* Primary button */
│               │   ├── sp-sticky__secondary-actions   /* Wishlist/Share */
│               │   ├── sp-sticky__action-btn          /* Secondary button */
│               │   └── sp-sticky__heart--active       /* Active wishlist */
│               └── sp-sticky__trust          /* Trust badges */
│                   ├── sp-sticky__trust-item  /* Single badge */
│                   ├── sp-sticky__trust-icon  /* Badge icon */
│                   ├── sp-sticky__trust-title /* Badge title */
│                   └── sp-sticky__trust-desc  /* Badge description */
└── sp-sticky__related                 /* Related products section */
```

**Total BEM Classes:** 47

---

## State Management

### Local State

```tsx
const [selectedImage, setSelectedImage] = useState(0);
```
**Purpose:** Track which image is displayed in main gallery  
**Type:** `number` (index of productImages array)

```tsx
const [quantity, setQuantity] = useState(1);
```
**Purpose:** Track selected quantity for add to cart  
**Type:** `number` (min: 1, no max enforced)

```tsx
const [isAddedToCart, setIsAddedToCart] = useState(false);
```
**Purpose:** Show success state after adding to cart  
**Type:** `boolean` (auto-resets after 2 seconds)

### Context Hooks

```tsx
const { addItem } = useCart();
```
**Purpose:** Add product to cart  
**Method:** `addItem({ id, name, price, image, quantity })`

```tsx
const { addItem: addToWishlist, isInWishlist } = useWishlist();
```
**Purpose:** Add product to wishlist + check if already in wishlist  
**Methods:**
- `addToWishlist({ id, name, price, image })`
- `isInWishlist(productId): boolean`

### Route Params

```tsx
const { slug } = useParams<{ slug: string }>();
```
**Purpose:** Get product slug from URL  
**Note:** Currently hardcoded to `products[0]` — production should fetch by slug

---

## Sections Breakdown

### 1. Gallery Section

**Desktop Layout:**
```tsx
<div className="sp-sticky__gallery">
  {/* Main image with glow frame */}
  <div className="sp-sticky__main-image">
    <img src={productImages[selectedImage]} />
  </div>
  
  {/* Thumbnail grid with neon active state */}
  <div className="sp-sticky__thumbs">
    <button 
      className="sp-sticky__thumb sp-sticky__thumb--active"
      onClick={() => setSelectedImage(index)}
    >
      <img src={image} />
    </button>
  </div>
</div>
```

**Funky Styling:**
- Main image: `box-shadow: 0 0 40px rgba(0, 255, 255, 0.3)` (cyan glow)
- Active thumbnail: `border: 2px solid var(--wp--preset--color--neon-cyan)`
- Thumbnails: Glass background with hover glow

### 2. Sticky Purchase Panel

**Structure:**
```tsx
<div className="sp-sticky__sidebar">
  <div className="sp-sticky__sidebar-sticky">
    <div className="sp-sticky__panel">
      {/* Content */}
    </div>
  </div>
</div>
```

**Sticky Behavior:**
```css
.sp-sticky__sidebar-sticky {
  position: sticky;
  top: var(--wp--preset--spacing--60); /* 32px from viewport top */
  height: fit-content;
}
```

**Glassmorphism Panel:**
```css
.sp-sticky__panel {
  background: rgba(255, 255, 255, 0.05); /* Semi-transparent */
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 255, 255, 0.3); /* Cyan border */
  border-radius: var(--wp--preset--border-radius--lg);
  padding: var(--wp--preset--spacing--60);
}
```

### 3. Product Info Section

**Components:**
- Badge (if present)
- Product title (h2)
- Star rating (1-5 filled stars)
- Review count
- Price (with sale price + savings)
- Stock status (icon + text)

**Sale Price Gradient:**
```css
.sp-sticky__price {
  background: linear-gradient(
    90deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-lime)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: var(--wp--preset--font-weight--bold);
  font-size: var(--wp--preset--font-size--xxx-large);
}
```

### 4. Quantity Selector

**Structure:**
```tsx
<div className="sp-sticky__quantity-controls">
  <button onClick={decreaseQty}>−</button>
  <input type="number" value={quantity} />
  <button onClick={increaseQty}>+</button>
</div>
```

**Validation:**
- Minimum: 1
- No maximum enforced
- Input sanitization: `Math.max(1, parseInt(value) || 1)`

### 5. Add to Cart Button

**States:**

**Default:**
```tsx
<button className="sp-sticky__add-to-cart">
  <span><strong>Add to Cart</strong></span>
</button>
```

**Success (2s):**
```tsx
<button className="sp-sticky__add-to-cart">
  <Check size={20} />
  <span><strong>Added to Cart!</strong></span>
</button>
```

**Disabled (out of stock):**
```tsx
<button className="sp-sticky__add-to-cart" disabled>
  <span><strong>Add to Cart</strong></span>
</button>
```

**Funky Gradient:**
```css
.sp-sticky__add-to-cart {
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-lime)
  );
  color: #000000;
  box-shadow: 0 4px 12px rgba(0, 255, 255, 0.4);
}

.sp-sticky__add-to-cart:hover {
  box-shadow: 0 6px 24px rgba(0, 255, 255, 0.6);
  transform: translateY(-2px);
}
```

### 6. Secondary Actions

**Wishlist Button:**
- Heart icon (filled if in wishlist)
- "Wishlist" label
- Funky cyan glow on active

**Share Button:**
- Share2 icon
- "Share" label
- Placeholder (no functionality)

### 7. Trust Badges

**Three badges in glass panel:**
1. **Free Shipping** — Truck icon, "On orders over $50"
2. **Easy Returns** — RefreshCcw icon, "30-day return policy"
3. **Secure Payment** — Shield icon, "SSL encrypted checkout"

**Styling:**
```css
.sp-sticky__trust {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: var(--wp--preset--border-radius--md);
  padding: var(--wp--preset--spacing--40);
}

.sp-sticky__trust-icon {
  color: var(--wp--preset--color--neon-cyan);
  filter: drop-shadow(0 0 8px rgba(0, 255, 255, 0.5));
}
```

### 8. Collapsible Details (Accordions)

**Three accordions (desktop + mobile):**

1. **Product Description** — Full product description text
2. **Specifications** — Definition list (dl/dt/dd) with specs
3. **Shipping & Returns** — Shipping info + return policy

**Implementation:**
```tsx
<details className="sp-sticky__accordion">
  <summary className="sp-sticky__accordion-trigger">
    <span>Product Description</span>
    <Plus className="sp-sticky__accordion-icon--closed" />
    <Minus className="sp-sticky__accordion-icon--open" />
  </summary>
  <div className="sp-sticky__accordion-content">
    <p className="sp-sticky__accordion-text">...</p>
  </div>
</details>
```

**Responsive Visibility:**
- Desktop: Shown below gallery (`.sp-sticky__details--desktop`)
- Mobile: Shown after purchase panel (`.sp-sticky__details--mobile`)

### 9. Related Products Section

```tsx
<div className="sp-sticky__related">
  <RelatedProductsSection products={relatedProducts} />
</div>
```

**Uses:** Existing `RelatedProductsSection` pattern  
**Location:** Below main product content

---

## Responsive Behavior

### Mobile (< 1024px)

**Layout:** Single column stack
```css
.sp-sticky__layout {
  display: block; /* Not grid */
}
```

**Order:**
1. Gallery (main image + thumbnails)
2. Purchase panel (no sticky behavior)
3. Details accordions
4. Related products

**Sticky disabled:** Panel scrolls naturally with content

### Tablet (1024px - 1279px)

**Layout:** Two-column grid
```css
.sp-sticky__layout {
  display: grid;
  grid-template-columns: 1fr 400px; /* Fixed sidebar width */
  gap: var(--wp--preset--spacing--70);
}
```

**Sticky enabled:** Panel sticks to viewport

### Desktop (≥ 1280px)

**Layout:** Two-column grid with wider sidebar
```css
.sp-sticky__layout {
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: var(--wp--preset--spacing--80);
}
```

**Sticky enabled:** Panel sticks with more breathing room

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Panel background | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.3)` |
| Panel border | `rgba(0,255,255,0.3)` | `rgba(0,255,255,0.5)` |
| Price gradient | Cyan → Lime | Same (vibrant in dark) |
| Trust icons | Cyan glow | Brighter cyan glow |
| Accordion text | Gray-900 | Gray-50 |

### Glass Effect in Dark Mode

```css
.dark .sp-sticky__panel {
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(0, 255, 255, 0.5);
}
```

**Blur remains consistent:** `backdrop-filter: blur(16px)` in both modes

---

## Accessibility

### ARIA Attributes

**Quantity buttons:**
```tsx
<button 
  onClick={decreaseQty}
  className="sp-sticky__qty-btn"
  aria-label="Decrease quantity"
>
  <Minus size={18} />
</button>
```

**Image gallery:**
```tsx
<img 
  src={image}
  alt={`${product.name} view ${index + 1}`}
  className="sp-sticky__thumb-img"
/>
```

### Keyboard Navigation

- ✅ Tab through all interactive elements
- ✅ Enter/Space to expand accordions
- ✅ Arrow keys in number input
- ✅ Focus visible on all buttons

### Screen Reader Support

**Accordion semantics:**
- `<details>` element provides native expand/collapse
- `<summary>` automatically announces state

**Stock status:**
```tsx
<span className="sp-sticky__stock-text--in">
  <small><strong>In Stock</strong></small>
</span>
```

**Price savings:**
```tsx
<p className="sp-sticky__savings">
  <small><strong>Save ${savings}</strong></small>
</p>
```

### Focus Management

**Add to cart success:**
- Focus remains on button after click
- Screen reader announces "Added to Cart!" via text change

---

## Data Integration

### Current (Hardcoded)

```tsx
const product = products[0]; // First product in array
```

### Production (Route-Based)

```tsx
const { slug } = useParams<{ slug: string }>();
const product = products.find(p => p.slug === slug);

if (!product) {
  return <NotFound />;
}
```

### Product Data Structure

```tsx
interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  image: string;
  images?: string[];
  description: string;
  badge?: string;
  inStock: boolean;
  rating?: number;
  reviewCount?: number;
  categories?: string[];
  tags?: string[];
}
```

### Related Products

```tsx
const relatedProducts = products
  .filter(p => 
    p.id !== product.id && 
    p.categories?.some(c => product.categories?.includes(c))
  )
  .slice(0, 4);
```

---

## Usage

### Import and Render

```tsx
import { SingleProductSticky } from './templates/SingleProductSticky';

// In router
{
  path: 'product/:slug/sticky',
  element: <SingleProductSticky />
}
```

### Route Examples

- `/product/wireless-headphones/sticky`
- `/product/smart-watch/sticky`
- `/product/laptop-stand/sticky`

### When to Use

**Use SingleProductSticky when:**
- Product has multiple high-quality images
- Long product descriptions benefit from accordions
- Desktop users want persistent purchase panel
- Visual-first product presentation

**Use SingleProduct instead when:**
- Simpler layout preferred
- Limited product images
- Mobile-first audience
- Tabbed details preferred over accordions

---

## Related Components

- **SingleProduct** (`/src/app/components/templates/SingleProduct.tsx`) — Standard layout
- **VariableProduct** (`/src/app/components/templates/VariableProduct.tsx`) — Variable product with swatches
- **RelatedProductsSection** (`/src/app/components/patterns/RelatedProductsSection.tsx`) — Related products grid
- **Breadcrumbs** (`/src/app/components/parts/Breadcrumbs.tsx`) — Navigation breadcrumbs
- **ProductCard** (`/src/app/components/blocks/product/ProductCard.tsx`) — Product card for grids

---

## Common Issues

### Issue: Sticky panel overlaps footer

**Cause:** No bottom constraint on sticky positioning

**Solution:** Add max height to sticky wrapper:
```css
.sp-sticky__sidebar-sticky {
  max-height: calc(100vh - var(--wp--preset--spacing--80));
  overflow-y: auto;
}
```

### Issue: Gallery images different sizes

**Cause:** Images not constrained to aspect ratio

**Solution:** Use aspect-ratio or fixed height:
```css
.sp-sticky__main-image {
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.sp-sticky__main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Issue: Accordions don't close on mobile

**Cause:** Native `<details>` doesn't auto-close others

**Solution:** Use JavaScript to close other accordions:
```tsx
const handleAccordionClick = (index) => {
  // Close all other accordions
  const details = document.querySelectorAll('.sp-sticky__accordion');
  details.forEach((d, i) => {
    if (i !== index) d.removeAttribute('open');
  });
};
```

### Issue: Quantity input accepts negative numbers

**Cause:** No min attribute on input

**Solution:** Add validation:
```tsx
<input
  type="number"
  min="1"
  value={quantity}
  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
/>
```

---

## Testing Checklist

### Visual Testing
- [ ] Gallery images load correctly
- [ ] Active thumbnail has cyan border
- [ ] Sticky panel stays in viewport
- [ ] Glass panel visible in both light/dark modes
- [ ] Gradient button displays correctly
- [ ] Trust badges aligned properly
- [ ] Accordions expand/collapse smoothly

### Interaction Testing
- [ ] Thumbnail click changes main image
- [ ] Quantity +/- buttons work
- [ ] Manual quantity input validated
- [ ] Add to cart shows success state
- [ ] Wishlist button toggles active state
- [ ] Accordions expand/collapse
- [ ] All accordions work on mobile and desktop

### Sticky Behavior
- [ ] Panel sticks on desktop scroll
- [ ] Panel doesn't stick on mobile
- [ ] Panel stops at footer
- [ ] No layout shift when panel becomes sticky

### Dark Mode Testing
- [ ] Glass panel visible
- [ ] Borders visible
- [ ] Text readable
- [ ] Icons visible
- [ ] Gradient button works
- [ ] Trust icon glow visible

### Responsive Testing
- [ ] Mobile: Single column, no sticky
- [ ] Tablet: Two columns, sticky enabled
- [ ] Desktop: Wide sidebar, sticky enabled
- [ ] Details accordions show in correct location
- [ ] Touch targets 44x44px minimum on mobile

### Accessibility Testing
- [ ] All images have alt text
- [ ] Buttons have aria-labels
- [ ] Keyboard navigation works
- [ ] Focus visible on all elements
- [ ] Accordions announce state
- [ ] Screen reader announces price changes
- [ ] Color contrast passes WCAG AA

---

## Future Enhancements

### 1. Image Zoom

Add click-to-zoom on main image:
```tsx
const [isZoomed, setIsZoomed] = useState(false);

<div 
  className={`sp-sticky__main-image ${isZoomed ? 'sp-sticky__main-image--zoomed' : ''}`}
  onClick={() => setIsZoomed(!isZoomed)}
>
```

### 2. Image Lightbox

Open gallery in fullscreen lightbox:
```tsx
import { Lightbox } from '../blocks/overlay/Lightbox';

const [lightboxOpen, setLightboxOpen] = useState(false);
```

### 3. Variant Swatches

Add color/size swatches to sticky panel:
```tsx
<div className="sp-sticky__variants">
  <VariantSelector
    variants={product.variants}
    onSelect={handleVariantChange}
  />
</div>
```

### 4. Quick View Related Products

Open related products in quick view modal:
```tsx
<ProductCard 
  product={relatedProduct}
  quickView={true}
/>
```

### 5. Social Share Functionality

Implement actual share buttons:
```tsx
const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: product.name,
      url: window.location.href
    });
  }
};
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign)  
**Next Review:** After user testing feedback
