# PageWishlist

**Component Type:** Template (Wishlist Page - Funky Phase 10)  
**Location:** `/src/app/components/templates/PageWishlist.tsx`  
**CSS:** `/src/styles/sections/account-auth-funky.css`  
**Route:** `/wishlist`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 10)  
**Color Identity:** Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

PageWishlist is a wishlist management template displaying saved products with actions to move items to cart or remove them. Features empty state with gradient heart icon, product cards with hover glow, bulk actions (move all/clear all), and individual item actions. Uses WishlistContext for state management and CartContext for add-to-cart functionality.

**Page Purpose:** Display and manage saved products  
**Target Audience:** Logged-in users managing wishlists  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Page Header → Wishlist Grid (or Empty State)

**Note:** Shows empty state when no items, product grid when items exist. Uses contexts for wishlist and cart state.

---

## Key Features

### Visual Elements

**Empty State:**
- Gradient heart icon circle
- "Your wishlist is empty" heading
- Description text
- "Start Shopping" CTA

**Filled State:**
- Page header with title + item count
- Bulk actions (Clear All, Move All to Cart)
- Product grid (3 columns desktop, responsive)
- Product cards with:
  - Remove button (X icon, top-right)
  - Product image with badges
  - Brand name
  - Product title (linked)
  - Price (sale/regular)
  - Add to Cart button

**Product Cards:**
- Glassmorphism with hover glow
- Image with link overlay
- Sale/Out of Stock badges
- Neon remove button
- Gradient CTA button

### Funky Treatments

**Page Title:** Gradient text (pink → cyan)  
**Empty Heart Icon:** Gradient circle (pink → cyan) with glow  
**Product Cards:** Glassmorphism with neon glow on hover  
**Remove Button:** Neon red X with glow  
**Sale Badge:** Gradient (cyan → lime)  
**Out of Stock Badge:** Red with opacity  
**Add to Cart Button:** Gradient (cyan → lime) with glow  
**Move All Button:** Gradient (cyan → lime)

---

## Data Structure

### Wishlist Context

```tsx
import { useWishlist } from '../../contexts/WishlistContext';
import { useCart } from '../../contexts/CartContext';

const { 
  items,                    // Array of wishlist products
  removeFromWishlist,       // Remove single item
  clearWishlist,            // Clear all items
  getWishlistCount          // Get total count
} = useWishlist();

const { addToCart } = useCart();

// Product structure
interface WishlistProduct {
  id: string;
  name: string;
  brand?: string;
  image: string;
  price: number;
  salePrice?: number;
  inStock?: boolean;
}
```

### Actions

```tsx
// Add to cart
const handleAddToCart = (product: any) => {
  addToCart(product, 1);
  toast.success(`${product.name} added to cart!`);
};

// Remove from wishlist
const handleRemove = (productId: string) => {
  removeFromWishlist(productId);
  toast.info('Removed from wishlist');
};

// Clear all items
const handleClearAll = () => {
  if (confirm('Are you sure you want to clear your entire wishlist?')) {
    clearWishlist();
    toast.success('Wishlist cleared');
  }
};

// Move all to cart
const handleMoveAllToCart = () => {
  items.forEach(product => {
    if (product.inStock !== false) {
      addToCart(product, 1);
    }
  });
  clearWishlist();
  toast.success(`${items.length} items moved to cart!`);
};
```

---

## Component Structure

### Empty State Pattern

```tsx
{items.length === 0 && (
  <Layout>
    <Container variant="content">
      <div className="wishlist-empty">
        <div className="wishlist-empty__icon-wrapper">
          <Heart size={48} className="wishlist-empty__icon" strokeWidth={2} />
        </div>

        <Typography variant="h2">Your wishlist is empty</Typography>
        <p className="wishlist-empty__text">
          Save items you love by clicking the heart icon on any product
        </p>

        <Button variant="primary" to="/shop">
          Start Shopping
        </Button>
      </div>
    </Container>
  </Layout>
)}
```

### Filled State Pattern

```tsx
{items.length > 0 && (
  <Layout>
    <Container variant="content">
      <div className="wishlist-page">
        {/* Header */}
        <div className="wishlist-page__header">
          <div>
            <Typography variant="h1">Wishlist</Typography>
            <p className="wishlist-page__count">
              {getWishlistCount()} {getWishlistCount() === 1 ? 'item' : 'items'}
            </p>
          </div>
          
          <div className="wishlist-page__actions">
            <Button variant="outline" onClick={handleClearAll}>
              Clear All
            </Button>
            <Button variant="primary" onClick={handleMoveAllToCart}>
              <ShoppingCart size={18} />
              Move All to Cart
            </Button>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="wishlist-grid">
          {items.map(product => {
            const isSale = !!product.salePrice;
            const isOutOfStock = product.inStock === false;
            const price = product.salePrice || product.price;

            return (
              <div key={product.id} className="wishlist-card">
                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="wishlist-card__remove"
                  aria-label="Remove from wishlist"
                >
                  <X size={16} />
                </button>

                {/* Product Image */}
                <Link to={`/product/${product.id}`} className="wishlist-card__image-link">
                  <ImageWithFallback 
                    src={product.image} 
                    alt={product.name} 
                    className={`wishlist-card__image ${isOutOfStock ? 'wishlist-card__image--oos' : ''}`}
                  />
                  
                  {/* Badges */}
                  <div className="wishlist-card__badges">
                    {isSale && !isOutOfStock && (
                      <strong className="wishlist-card__badge wishlist-card__badge--sale">
                        SALE
                      </strong>
                    )}
                    {isOutOfStock && (
                      <strong className="wishlist-card__badge wishlist-card__badge--oos">
                        OUT OF STOCK
                      </strong>
                    )}
                  </div>
                </Link>

                {/* Product Info */}
                <div className="wishlist-card__info">
                  {/* Brand */}
                  {product.brand && (
                    <small className="wishlist-card__brand">{product.brand}</small>
                  )}

                  {/* Title */}
                  <h3 className="wishlist-card__title">
                    <Link to={`/product/${product.id}`} className="wishlist-card__title-link">
                      {product.name}
                    </Link>
                  </h3>

                  {/* Price */}
                  <div className="wishlist-card__price">
                    {isSale ? (
                      <div className="wishlist-card__price-row">
                        <span className="wishlist-card__price--sale">£{price.toFixed(2)}</span>
                        <small className="wishlist-card__price--original">£{product.price.toFixed(2)}</small>
                      </div>
                    ) : (
                      <span className="wishlist-card__price--current">£{price.toFixed(2)}</span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    fullWidth
                    variant={isOutOfStock ? 'outline' : 'primary'}
                    disabled={isOutOfStock}
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart size={16} />
                    {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  </Layout>
)}
```

---

## BEM Class Hierarchy

```
.wishlist-empty (Empty state container)
├── .wishlist-empty__icon-wrapper (Gradient circle)
│   └── .wishlist-empty__icon (Heart icon)
├── Typography h2 (Heading)
├── .wishlist-empty__text (Description)
└── Button (CTA)

.wishlist-page (Filled state container)
├── .wishlist-page__header (Page header)
│   ├── Typography h1 (Title - gradient text)
│   ├── .wishlist-page__count (Item count)
│   └── .wishlist-page__actions (Bulk actions)
│       ├── Button outline (Clear All)
│       └── Button primary (Move All - gradient)
└── .wishlist-grid (Product grid)
    └── .wishlist-card (Individual product card)
        ├── .wishlist-card__remove (Remove button - neon X)
        ├── .wishlist-card__image-link (<a>)
        │   ├── .wishlist-card__image (Product image)
        │   │   └── .wishlist-card__image--oos (Out of stock modifier)
        │   └── .wishlist-card__badges
        │       ├── .wishlist-card__badge--sale (Sale badge)
        │       └── .wishlist-card__badge--oos (Out of stock badge)
        └── .wishlist-card__info (Product details)
            ├── .wishlist-card__brand (<small>)
            ├── .wishlist-card__title (h3)
            │   └── .wishlist-card__title-link (<a>)
            ├── .wishlist-card__price
            │   ├── .wishlist-card__price-row (Sale price container)
            │   ├── .wishlist-card__price--sale (Sale price)
            │   ├── .wishlist-card__price--original (Original price)
            │   └── .wishlist-card__price--current (Regular price)
            └── Button (Add to Cart - gradient)
```

---

## Section Breakdown

### 1. Empty State (`.wishlist-empty`)

```css
.wishlist-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: var(--space--1000) var(--space--700);
  text-align: center;
}

.wishlist-empty__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--pink) 0%, var(--cyan) 100%);
  margin-bottom: var(--space--800);
}

.dark .wishlist-empty__icon-wrapper {
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.4);
}

.wishlist-empty__icon {
  color: var(--white);
}

.wishlist-empty h2 {
  margin-bottom: var(--space--500);
}

.wishlist-empty__text {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  max-width: 32rem;
  margin-bottom: var(--space--800);
}

@media (max-width: 640px) {
  .wishlist-empty {
    min-height: 50vh;
    padding: var(--space--800) var(--space--500);
  }
  
  .wishlist-empty__icon-wrapper {
    width: 96px;
    height: 96px;
  }
}
```

**Icon Circle:** Gradient (pink → cyan) with glow  
**Min Height:** 60vh (50vh mobile)

---

### 2. Page Header (`.wishlist-page__header`)

```css
.wishlist-page {
  padding: var(--space--800) 0;
}

.wishlist-page__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space--700);
  margin-bottom: var(--space--900);
  padding-bottom: var(--space--700);
  border-bottom: 1px solid var(--border);
}

.dark .wishlist-page__header {
  border-color: rgba(0, 255, 255, 0.1);
}

.wishlist-page h1 {
  background: linear-gradient(135deg, var(--pink) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space--300);
}

.wishlist-page__count {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  margin: 0;
}

.wishlist-page__actions {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .wishlist-page__header {
    flex-direction: column;
    align-items: stretch;
  }
  
  .wishlist-page__actions {
    width: 100%;
  }
  
  .wishlist-page__actions button {
    flex: 1;
  }
}
```

**Title:** Gradient text (pink → cyan)  
**Actions:** Horizontal flex (vertical on mobile)

---

### 3. Wishlist Grid (`.wishlist-grid`)

```css
.wishlist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space--700);
}

@media (min-width: 641px) and (max-width: 1024px) {
  .wishlist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .wishlist-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .wishlist-grid {
    grid-template-columns: 1fr;
  }
}
```

**Grid:** 3 columns (desktop), 2 (tablet), 1 (mobile)  
**Auto-fill:** Min 280px per card

---

### 4. Wishlist Card (`.wishlist-card`)

```css
.wishlist-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.dark .wishlist-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wishlist-card:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.dark .wishlist-card:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}
```

**Glassmorphism:** Backdrop-blur 8px  
**Hover:** Neon cyan glow

---

### 5. Remove Button (`.wishlist-card__remove`)

```css
.wishlist-card__remove {
  position: absolute;
  top: var(--space--400);
  right: var(--space--400);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(220, 38, 38, 0.9);
  border: none;
  color: var(--white);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.wishlist-card__remove:hover {
  transform: scale(1.1);
  box-shadow: 0 0 15px rgba(220, 38, 38, 0.6);
}

.dark .wishlist-card__remove {
  background: rgba(239, 68, 68, 0.9);
}

.dark .wishlist-card__remove:hover {
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
}

.wishlist-card__remove:focus-visible {
  outline: 2px solid var(--red);
  outline-offset: 2px;
}
```

**Position:** Top-right corner  
**Color:** Red with neon glow  
**Hover:** Scale + glow

---

### 6. Product Image (`.wishlist-card__image`)

```css
.wishlist-card__image-link {
  position: relative;
  display: block;
  aspect-ratio: 1 / 1;
  overflow: hidden;
}

.wishlist-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s, opacity 0.2s;
}

.wishlist-card:hover .wishlist-card__image {
  transform: scale(1.05);
}

.wishlist-card__image--oos {
  opacity: 0.5;
  filter: grayscale(100%);
}

.wishlist-card__badges {
  position: absolute;
  top: var(--space--400);
  left: var(--space--400);
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space--300);
}

.wishlist-card__badge {
  padding: var(--space--200) var(--space--400);
  border-radius: var(--radius--full);
  font-size: var(--font-size--75);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wishlist-card__badge--sale {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
}

.dark .wishlist-card__badge--sale {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.wishlist-card__badge--oos {
  background: rgba(220, 38, 38, 0.9);
  color: var(--white);
}

.dark .wishlist-card__badge--oos {
  background: rgba(239, 68, 68, 0.9);
}
```

**Aspect Ratio:** 1:1  
**Hover:** Scale image 5%  
**Out of Stock:** Grayscale + 50% opacity  
**Sale Badge:** Gradient (cyan → lime) with glow  
**OOS Badge:** Red background

---

### 7. Product Info (`.wishlist-card__info`)

```css
.wishlist-card__info {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
  padding: var(--space--600);
}

.wishlist-card__brand {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wishlist-card__title {
  margin: 0;
  font-size: var(--font-size--300);
  font-weight: 600;
  line-height: 1.3;
}

.wishlist-card__title-link {
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s;
}

.wishlist-card__title-link:hover {
  color: var(--cyan);
}

.wishlist-card__price {
  font-size: var(--font-size--400);
  font-weight: 700;
}

.wishlist-card__price-row {
  display: flex;
  align-items: center;
  gap: var(--space--400);
}

.wishlist-card__price--sale {
  color: var(--red);
}

.dark .wishlist-card__price--sale {
  color: var(--red-light);
}

.wishlist-card__price--original {
  color: var(--text-muted);
  text-decoration: line-through;
}

.wishlist-card__price--current {
  color: var(--text);
}
```

**Layout:** Vertical flex with gap  
**Title Hover:** Cyan color  
**Sale Price:** Red color

---

## State Management

### Wishlist Context Integration

```tsx
const { 
  items,                    // Wishlist items array
  removeFromWishlist,       // Remove single item
  clearWishlist,            // Remove all items
  getWishlistCount          // Get item count
} = useWishlist();

// Empty state check
if (items.length === 0) {
  return <EmptyState />;
}

// Item count display
<p>{getWishlistCount()} {getWishlistCount() === 1 ? 'item' : 'items'}</p>

// Remove item
<button onClick={() => removeFromWishlist(product.id)}>
  Remove
</button>

// Clear all
<button onClick={() => {
  if (confirm('Clear entire wishlist?')) {
    clearWishlist();
  }
}}>
  Clear All
</button>
```

### Cart Context Integration

```tsx
const { addToCart } = useCart();

// Add to cart
const handleAddToCart = (product: any) => {
  addToCart(product, 1);
  toast.success(`${product.name} added to cart!`);
};

// Move all to cart
const handleMoveAllToCart = () => {
  items.forEach(product => {
    if (product.inStock !== false) {
      addToCart(product, 1);
    }
  });
  clearWishlist();
  toast.success(`${items.length} items moved to cart!`);
};
```

### Toast Notifications

```tsx
import { toast } from 'sonner@2.0.3';

// Success
toast.success('Added to cart!');

// Info
toast.info('Removed from wishlist');

// Confirmation before destructive action
if (confirm('Are you sure?')) {
  clearWishlist();
  toast.success('Wishlist cleared');
}
```

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Empty state: Smaller icon, less padding */
.wishlist-empty {
  min-height: 50vh;
  padding: var(--space--800) var(--space--500);
}

.wishlist-empty__icon-wrapper {
  width: 96px;
  height: 96px;
}

/* Header: Vertical stack */
.wishlist-page__header {
  flex-direction: column;
  align-items: stretch;
}

/* Actions: Full-width buttons */
.wishlist-page__actions {
  width: 100%;
}

.wishlist-page__actions button {
  flex: 1;
}

/* Grid: Single column */
.wishlist-grid {
  grid-template-columns: 1fr;
}
```

### Tablet (640px - 1024px)

```css
/* Grid: 2 columns */
.wishlist-grid {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Grid: 3 columns */
.wishlist-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Empty Icon Circle** | Pink → Cyan gradient | Same + pink glow (0.4) |
| **Page Title** | Pink → Cyan gradient | Same |
| **Header Border** | Standard border | Cyan-tinted (0.1) |
| **Product Cards** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Card Borders** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.1)` |
| **Card Hover** | Cyan border (0.3 glow) | Cyan border (0.5 glow) |
| **Remove Button** | Red `rgba(220,38,38,0.9)` | Lighter red `rgba(239,68,68,0.9)` |
| **Remove Hover** | Red glow (0.6) | Red glow (0.8) |
| **Sale Badge** | Cyan → Lime gradient | Same + glow (0.6) |
| **OOS Badge** | Red `rgba(220,38,38,0.9)` | Lighter red `rgba(239,68,68,0.9)` |
| **Sale Price** | Red | Lighter red |

### Dark Mode Enhancements

```css
.dark .wishlist-empty__icon-wrapper {
  box-shadow: 0 0 40px rgba(255, 0, 255, 0.4);
}

.dark .wishlist-page__header {
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wishlist-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wishlist-card:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .wishlist-card__remove {
  background: rgba(239, 68, 68, 0.9);
}

.dark .wishlist-card__remove:hover {
  box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
}

.dark .wishlist-card__badge--sale {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.dark .wishlist-card__badge--oos {
  background: rgba(239, 68, 68, 0.9);
}

.dark .wishlist-card__price--sale {
  color: var(--red-light);
}
```

---

## Accessibility

### Semantic HTML

```tsx
<main className="wishlist-page">
  <div className="wishlist-page__header">
    <div>
      <h1>Wishlist</h1>
      <p>{getWishlistCount()} items</p>
    </div>
    
    <div className="wishlist-page__actions">
      <button onClick={handleClearAll}>Clear All</button>
      <button onClick={handleMoveAllToCart}>
        <ShoppingCart aria-hidden="true" />
        Move All to Cart
      </button>
    </div>
  </div>
  
  <div className="wishlist-grid">
    <article className="wishlist-card">
      <button
        onClick={() => handleRemove(product.id)}
        aria-label="Remove from wishlist"
      >
        <X aria-hidden="true" />
      </button>
      
      <a href={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        
        <div>
          {isSale && (
            <strong>SALE</strong>
          )}
          {isOutOfStock && (
            <strong>OUT OF STOCK</strong>
          )}
        </div>
      </a>
      
      <div>
        {product.brand && (
          <small>{product.brand}</small>
        )}
        
        <h3>
          <a href={`/product/${product.id}`}>
            {product.name}
          </a>
        </h3>
        
        <div>
          {isSale ? (
            <>
              <span>£{salePrice}</span>
              <small>£{originalPrice}</small>
            </>
          ) : (
            <span>£{price}</span>
          )}
        </div>
        
        <button
          disabled={isOutOfStock}
          onClick={() => handleAddToCart(product)}
        >
          <ShoppingCart aria-hidden="true" />
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </article>
  </div>
</main>
```

### ARIA Attributes

```tsx
{/* Remove button with descriptive label */}
<button
  onClick={() => handleRemove(product.id)}
  aria-label="Remove from wishlist"
>
  <X aria-hidden="true" />
</button>

{/* Decorative icons */}
<Heart aria-hidden="true" />
<ShoppingCart aria-hidden="true" />

{/* Disabled state */}
<button
  disabled={isOutOfStock}
  aria-disabled={isOutOfStock}
>
  {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
</button>
```

### Keyboard Navigation

- **Tab Order:** Clear All → Move All → Product cards (image → remove → add to cart) → Next card
- **Remove Button:** Enter/Space to remove item
- **Add to Cart:** Enter/Space to add (if in stock)
- **Bulk Actions:** Enter/Space to trigger

### Focus States

```css
.wishlist-card__remove:focus-visible,
.wishlist-card__image-link:focus-visible,
.wishlist-card__title-link:focus-visible,
button:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Empty Heading | `#1a1a1a` / `#f9fafb` | Page bg | 12.0:1+ | AAA ✅ |
| Empty Text | `#6b7280` | Page bg | 4.6:1+ | AA ✅ |
| Page Title (Gradient) | Pink/Cyan | Page bg | N/A | Decorative ✅ |
| Item Count | `#6b7280` | Page bg | 4.6:1+ | AA ✅ |
| Brand | `#6b7280` | Card bg | 4.5:1+ | AA ✅ |
| Product Title | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| Price | `#1a1a1a` / `#f9fafb` | Card bg | 12.0:1+ | AAA ✅ |
| Remove Button | White | Red bg | 4.5:1+ | AA ✅ |
| Sale Badge | Navy `#030213` | Gradient bg | 8.32:1 | AAA ✅ |
| OOS Badge | White | Red bg | 4.5:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Share Wishlist

```tsx
const [shareUrl, setShareUrl] = useState('');

const handleShare = async () => {
  const url = `${window.location.origin}/wishlist/shared/${userId}`;
  
  if (navigator.share) {
    await navigator.share({
      title: 'My Wishlist',
      text: 'Check out my wishlist!',
      url: url,
    });
  } else {
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard');
  }
};

<Button onClick={handleShare}>
  <Share2 size={18} />
  Share Wishlist
</Button>
```

### 2. Sort Options

```tsx
const [sortBy, setSortBy] = useState<'date' | 'price' | 'name'>('date');

const sortedItems = [...items].sort((a, b) => {
  switch (sortBy) {
    case 'price':
      return (a.salePrice || a.price) - (b.salePrice || b.price);
    case 'name':
      return a.name.localeCompare(b.name);
    default:
      return 0; // Maintain original order (date added)
  }
});

<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
  <option value="date">Date Added</option>
  <option value="price">Price: Low to High</option>
  <option value="name">Name: A-Z</option>
</select>
```

### 3. Filter by Stock Status

```tsx
const [showOutOfStock, setShowOutOfStock] = useState(true);

const filteredItems = showOutOfStock
  ? items
  : items.filter(p => p.inStock !== false);

<label>
  <input
    type="checkbox"
    checked={showOutOfStock}
    onChange={(e) => setShowOutOfStock(e.target.checked)}
  />
  Show out of stock items
</label>
```

### 4. Price Drop Notifications

```tsx
const [priceAlerts, setPriceAlerts] = useState<Set<string>>(new Set());

const togglePriceAlert = (productId: string) => {
  const newAlerts = new Set(priceAlerts);
  if (newAlerts.has(productId)) {
    newAlerts.delete(productId);
    toast.info('Price alert removed');
  } else {
    newAlerts.add(productId);
    toast.success('You\'ll be notified of price drops');
  }
  setPriceAlerts(newAlerts);
};

<button onClick={() => togglePriceAlert(product.id)}>
  <Bell size={16} />
  {priceAlerts.has(product.id) ? 'Alert On' : 'Alert Off'}
</button>
```

### 5. Save for Later (Move to Secondary List)

```tsx
const [savedForLater, setSavedForLater] = useState<Product[]>([]);

const moveToSavedForLater = (product: Product) => {
  removeFromWishlist(product.id);
  setSavedForLater([...savedForLater, product]);
  toast.info('Moved to Saved for Later');
};

<button onClick={() => moveToSavedForLater(product)}>
  Save for Later
</button>
```

### 6. Quick View Modal

```tsx
const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

<button onClick={() => setQuickViewProduct(product)}>
  <Eye size={16} />
  Quick View
</button>

{quickViewProduct && (
  <Modal onClose={() => setQuickViewProduct(null)}>
    <ProductQuickView product={quickViewProduct} />
  </Modal>
)}
```

### 7. Recently Viewed Suggestions

```tsx
<section className="wishlist-suggestions">
  <h2>You might also like</h2>
  <div className="wishlist-suggestions__grid">
    {recentlyViewed
      .filter(p => !items.some(item => item.id === p.id))
      .slice(0, 4)
      .map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
  </div>
</section>
```

### 8. Wishlist Analytics

```tsx
useEffect(() => {
  analytics.track('Wishlist Viewed', {
    item_count: items.length,
    total_value: items.reduce((sum, p) => sum + (p.salePrice || p.price), 0),
    has_sale_items: items.some(p => p.salePrice),
    out_of_stock_count: items.filter(p => p.inStock === false).length,
  });
}, [items]);

const handleAddToCart = (product: Product) => {
  analytics.track('Product Added from Wishlist', {
    product_id: product.id,
    product_name: product.name,
    price: product.salePrice || product.price,
  });
  addToCart(product, 1);
};
```

### 9. Multiple Wishlists

```tsx
const [activeWishlist, setActiveWishlist] = useState('default');
const wishlists = ['Default', 'Gifts', 'Favorites'];

<select value={activeWishlist} onChange={(e) => setActiveWishlist(e.target.value)}>
  {wishlists.map(list => (
    <option key={list} value={list}>{list}</option>
  ))}
</select>
```

### 10. Export Wishlist

```tsx
const handleExport = () => {
  const csv = [
    ['Name', 'Brand', 'Price', 'Sale Price', 'Link'].join(','),
    ...items.map(p => [
      p.name,
      p.brand || '',
      p.price,
      p.salePrice || '',
      `${window.location.origin}/product/${p.id}`
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'wishlist.csv';
  a.click();
};

<Button onClick={handleExport}>
  <Download size={18} />
  Export
</Button>
```

---

## Testing Checklist

### Visual Testing

- [ ] Empty state displays
- [ ] Empty heart icon has gradient circle
- [ ] Empty state CTA displays
- [ ] Page header displays
- [ ] Page title has gradient (pink → cyan)
- [ ] Item count displays correctly
- [ ] Bulk actions display (2 buttons)
- [ ] Product grid displays
- [ ] Grid responsive (3 → 2 → 1 columns)
- [ ] Product cards have glassmorphism
- [ ] Remove button visible (top-right)
- [ ] Product images display
- [ ] Sale badge displays (if applicable)
- [ ] Out of stock badge displays (if applicable)
- [ ] Brand name displays (if exists)
- [ ] Product title displays
- [ ] Price displays correctly
- [ ] Sale price formatting correct
- [ ] Add to cart button displays
- [ ] Out of stock button disabled

### Interaction Testing

- [ ] Remove button removes item
- [ ] Remove shows toast notification
- [ ] Clear All prompts confirmation
- [ ] Clear All clears wishlist
- [ ] Move All adds all to cart (excluding OOS)
- [ ] Move All clears wishlist after adding
- [ ] Add to Cart adds item
- [ ] Add to Cart shows toast
- [ ] Out of stock button not clickable
- [ ] Product image navigates to detail
- [ ] Product title navigates to detail
- [ ] Empty state CTA navigates to shop

### State Testing

- [ ] Empty state shows when no items
- [ ] Filled state shows when items exist
- [ ] Item count updates on add/remove
- [ ] Grid updates when items removed
- [ ] Context updates on actions
- [ ] Toast notifications work

### Responsive Testing

- [ ] Mobile: Empty state smaller icon
- [ ] Mobile: Header stacks vertically
- [ ] Mobile: Actions full-width
- [ ] Mobile: Grid single column
- [ ] Tablet: Grid 2 columns
- [ ] Desktop: Grid 3 columns
- [ ] All breakpoints smooth transitions

### Dark Mode Testing

- [ ] Empty heart icon glow visible
- [ ] Page title gradient visible
- [ ] Header border cyan-tinted
- [ ] Product cards glassmorphism visible
- [ ] Card borders cyan-tinted
- [ ] Card hover glow stronger
- [ ] Remove button red glow
- [ ] Sale badge glow visible
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Remove buttons have aria-label
- [ ] Decorative icons have aria-hidden
- [ ] Disabled buttons have aria-disabled
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA
- [ ] Confirmation dialogs accessible

---

## Related Templates

- **PageCart** — Shopping cart page
- **SingleProduct** — Product detail page
- **ShopWithSidebar** — Shop with filters

### Shared CSS

- `.account-auth-funky.css` — Wishlist page styles
- Shared with login/account pages

### Shared Components

- **Button** — CTA buttons
- **ImageWithFallback** — Product images
- **Typography** — Text elements

### Shared Contexts

- **WishlistContext** — Wishlist state management
- **CartContext** — Cart integration
- **Toast** — Notification system

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
