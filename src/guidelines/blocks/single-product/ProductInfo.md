# ProductInfo Block

**Component:** `ProductInfo`  
**Path:** `/src/app/components/blocks/single-product/ProductInfo.tsx`  
**Category:** Single Product Blocks  
**Used In:** Single Product templates (SingleProduct, VariableProduct)

---

## Overview

The ProductInfo block displays essential product information at the top of single product pages, including the product title, star rating with review count, pricing (with sale price support), and a short description. This block establishes the product's value proposition and provides key decision-making information for customers.

**Core Features:**
- Product title (h1 heading)
- Star rating display (5-star visual)
- Review count with link to reviews section
- Price display (supports regular and sale pricing)
- Short product description
- Retro design with clean typography and dark mode support

---

## Component Structure

```tsx
ProductInfo
├── Product Title (h1)
├── Rating Row
│   ├── Star icons (5 stars, filled/empty)
│   └── Review count text
├── Price Display
│   ├── Sale price (if applicable)
│   └── Regular/current price
└── Short Description
```

---

## Props Interface

```tsx
interface ProductInfoProps {
  // Product identification
  title: string;
  
  // Pricing
  price: number;
  salePrice?: number;
  
  // Rating & reviews
  rating: number; // 0-5 (e.g., 4.5)
  reviewCount: number;
  
  // Product description
  shortDescription: string;
}
```

---

## Usage Examples

### Basic Product (No Sale)

```tsx
<ProductInfo
  title="Premium Wireless Headphones"
  price={149.99}
  rating={4.5}
  reviewCount={127}
  shortDescription="Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation and 40-hour battery life."
/>
```

**Renders:**
- Title: "Premium Wireless Headphones"
- Rating: 4.5 stars (4 filled, 1 empty)
- Review count: "(127 reviews)"
- Price: £149.99 (regular price styling)
- Description paragraph

---

### Product on Sale

```tsx
<ProductInfo
  title="Mechanical Gaming Keyboard"
  price={129.99}
  salePrice={99.99}
  rating={5}
  reviewCount={342}
  shortDescription="RGB backlit mechanical keyboard with Cherry MX switches, programmable keys, and premium aluminum frame."
/>
```

**Renders:**
- Title: "Mechanical Gaming Keyboard"
- Rating: 5 stars (all filled)
- Review count: "(342 reviews)"
- **Sale price:** £99.99 (large, red accent)
- **Regular price:** £129.99 (struck through, smaller, muted)
- Description paragraph

---

### Low Rating Product

```tsx
<ProductInfo
  title="Budget Earbuds"
  price={19.99}
  rating={2.5}
  reviewCount={8}
  shortDescription="Affordable wired earbuds for everyday listening."
/>
```

**Renders:**
- Title: "Budget Earbuds"
- Rating: 2.5 stars (2 filled, 3 empty)
- Review count: "(8 reviews)"
- Price: £19.99
- Description paragraph

---

## BEM Class Structure

### Base Component

```css
.wc-product-info {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--60); /* ~32px between sections */
}
```

---

### Product Title

```css
.wc-product-info__title {
  /* Typography handled by Typography component (variant="h1") */
  color: var(--wp--preset--color--foreground);
}
```

**HTML Output:**
```html
<h1 class="wc-product-info__title">Premium Wireless Headphones</h1>
```

---

### Rating Row

```css
.wc-product-info__rating {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20); /* 8px between stars and count */
}

.wc-product-info__stars {
  display: flex;
  color: #eab308; /* yellow-400 - star fill color */
}

.wc-product-info__star--empty {
  color: var(--wp--preset--color--border-medium); /* Light mode: #d1d5db */
}

.wc-product-info__review-count {
  font-size: var(--wp--preset--font-size--small); /* ~14px */
  color: var(--wp--preset--color--muted-foreground);
  font-weight: var(--wp--preset--font-weight--medium);
}
```

**HTML Output:**
```html
<div class="wc-product-info__rating">
  <div class="wc-product-info__stars">
    <svg><!-- Star 1: filled --></svg>
    <svg><!-- Star 2: filled --></svg>
    <svg><!-- Star 3: filled --></svg>
    <svg><!-- Star 4: filled --></svg>
    <svg class="wc-product-info__star--empty"><!-- Star 5: empty --></svg>
  </div>
  <span class="wc-product-info__review-count">(127 reviews)</span>
</div>
```

---

### Price Display

```css
.wc-product-info__price {
  display: flex;
  align-items: baseline;
  gap: var(--wp--preset--spacing--30); /* 12px between prices */
}

/* Sale Price (shown first, emphasized) */
.wc-product-info__price-sale {
  font-size: 1.875rem; /* text-3xl - 30px */
  font-weight: var(--wp--preset--font-weight--bold);
  color: #dc2626; /* red-600 - sale accent */
}

/* Regular Price (shown second, struck through) */
.wc-product-info__price-regular {
  font-size: 1.25rem; /* text-xl - 20px */
  color: var(--wp--preset--color--muted-foreground);
  text-decoration: line-through;
}

/* Current Price (no sale - single price) */
.wc-product-info__price-current {
  font-size: 1.875rem; /* text-3xl - 30px */
  font-weight: var(--wp--preset--font-weight--bold);
  color: var(--wp--preset--color--foreground);
}
```

**HTML Output (Sale):**
```html
<div class="wc-product-info__price">
  <span class="wc-product-info__price-sale">£99.99</span>
  <span class="wc-product-info__price-regular">£129.99</span>
</div>
```

**HTML Output (No Sale):**
```html
<div class="wc-product-info__price">
  <span class="wc-product-info__price-current">£149.99</span>
</div>
```

---

### Short Description

```css
.wc-product-info__description {
  font-size: var(--wp--preset--font-size--small); /* ~14px */
  color: var(--wp--preset--color--muted-foreground);
  line-height: var(--wp--preset--line-height--relaxed); /* 1.6 */
}

.wc-product-info__description p {
  margin: 0; /* Remove default paragraph margin */
}
```

**HTML Output:**
```html
<div class="wc-product-info__description">
  <p>Experience crystal-clear audio with our premium wireless headphones.</p>
</div>
```

---

## Retro Design System Integration

### Typography Hierarchy

```tsx
// Product title uses Typography component with h1 variant
<Typography variant="h1" className="wc-product-info__title">
  {title}
</Typography>
```

**Result:**
- Fluid font size: 32px → 56px (mobile → desktop)
- Font weight: 600 (semibold)
- Line height: 1.1 (tight)
- Letter spacing: -0.02em (tight)

---

### Star Rating Visual

**Implementation:**
```tsx
{[0, 1, 2, 3, 4].map((i) => {
  const isFilled = i < Math.floor(rating);
  return (
    <Star
      key={i}
      size={18}
      fill={isFilled ? 'currentColor' : 'none'}
      className={isFilled ? '' : 'wc-product-info__star--empty'}
    />
  );
})}
```

**Visual States:**
- Filled stars: Yellow (#eab308) with fill
- Empty stars: Border only, muted color (#d1d5db light / #374151 dark)
- Size: 18px icons
- No hover effects (static display)

---

### Price Emphasis

**Sale Price Styling:**
- Large size (1.875rem / 30px)
- Bold weight (700)
- Red accent (#dc2626 light / #f87171 dark)
- Shows first (left)

**Regular Price Styling:**
- Smaller size (1.25rem / 20px)
- Muted color
- Struck through (line-through)
- Shows second (right)

**Visual Hierarchy:**
```
£99.99 £129.99
 LARGE   SMALL
  RED    MUTED
        STRIKE
```

---

## Dark Mode Support

### Dark Mode Overrides

```css
/* Empty stars - adjust border color for dark backgrounds */
.dark .wc-product-info__star--empty {
  color: var(--wp--preset--color--border); /* Lighter border */
}

/* Sale price - adjust red for dark mode */
.dark .wc-product-info__price-sale {
  color: #f87171; /* red-400 - softer red for dark backgrounds */
}
```

---

### Dark Mode Color Mapping

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Title** | `#1a1a1a` | `#f9fafb` |
| **Filled Stars** | `#eab308` (yellow) | `#eab308` (yellow) |
| **Empty Stars** | `#d1d5db` (gray-300) | `#374151` (gray-700) |
| **Sale Price** | `#dc2626` (red-600) | `#f87171` (red-400) |
| **Regular Price** | `#6b7280` (gray-500) | `#9ca3af` (gray-400) |
| **Current Price** | `#1a1a1a` | `#f9fafb` |
| **Description** | `#6b7280` (gray-500) | `#9ca3af` (gray-400) |
| **Review Count** | `#6b7280` (gray-500) | `#9ca3af` (gray-400) |

---

## Accessibility

### Semantic HTML

```tsx
// Product title uses h1 (page heading)
<Typography variant="h1" className="wc-product-info__title">
  {title}
</Typography>

// Rating uses descriptive text (not just icons)
<span className="wc-product-info__review-count">
  ({reviewCount} reviews)
</span>

// Price uses semantic spans with descriptive classes
<span className="wc-product-info__price-sale">£{salePrice}</span>
<span className="wc-product-info__price-regular">£{price}</span>

// Description uses paragraph tag
<div className="wc-product-info__description">
  <p>{shortDescription}</p>
</div>
```

---

### ARIA Labels (Optional Enhancement)

**For screen readers, consider adding:**

```tsx
<div className="wc-product-info__rating" aria-label={`Rated ${rating} out of 5 stars`}>
  <div className="wc-product-info__stars" aria-hidden="true">
    {/* Star icons - decorative */}
  </div>
  <span className="wc-product-info__review-count">({reviewCount} reviews)</span>
</div>

<div className="wc-product-info__price" aria-label={salePrice ? `Sale price £${salePrice}, was £${price}` : `Price £${price}`}>
  {/* Price display */}
</div>
```

---

### Focus States

**Interactive elements (future enhancement):**
- Review count could link to reviews section:
  ```tsx
  <a href="#reviews" className="wc-product-info__review-count">
    ({reviewCount} reviews)
  </a>
  ```
- Add focus ring on link: `focus:ring-2 focus:ring-accent`

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* All spacing and typography automatically responsive via CSS variables */
.wc-product-info {
  gap: var(--wp--preset--spacing--60); /* ~32px */
}

.wc-product-info__title {
  /* Typography component handles fluid sizing: 32px → 56px */
}

.wc-product-info__price-sale,
.wc-product-info__price-current {
  font-size: 1.875rem; /* Fixed size - 30px on all screens */
}
```

---

### Tablet (640px - 1024px)

**No changes** - component scales naturally with container width.

---

### Desktop (> 1024px)

**No changes** - component scales naturally with container width.

---

## Content Guidelines

### Product Title

**Best Practices:**
- ✅ Clear, descriptive name (e.g., "Premium Wireless Headphones")
- ✅ Include key feature if relevant (e.g., "40-Hour Battery")
- ✅ Keep under 60 characters for readability
- ❌ Avoid ALL CAPS
- ❌ Avoid excessive punctuation (!!!)

**Examples:**
- ✅ "Mechanical Gaming Keyboard - Cherry MX Red"
- ✅ "Noise-Cancelling Headphones"
- ❌ "BEST HEADPHONES EVER!!!" (too promotional)
- ❌ "HDP-3000-BLK-V2" (too technical)

---

### Short Description

**Best Practices:**
- ✅ 1-2 sentences (max 150 characters)
- ✅ Highlight 2-3 key features
- ✅ Focus on benefits, not just specs
- ✅ Use active voice
- ❌ Don't duplicate full description

**Examples:**
- ✅ "Experience crystal-clear audio with 40-hour battery life and active noise cancellation."
- ✅ "RGB backlit mechanical keyboard with Cherry MX switches and programmable keys."
- ❌ "This is a keyboard. It has keys. You can type with it." (too basic)
- ❌ "Featuring a 6-row ANSI layout with hot-swappable switches..." (too technical for short description)

---

### Price Display

**Formatting Rules:**
- Currency symbol: £ (pound)
- Decimal places: Always 2 (e.g., £99.99, not £99.9 or £99)
- Sale price shows **first** (left/top)
- Regular price shows **second** (right/bottom)

---

### Rating Display

**Logic:**
```tsx
// Only show filled stars up to Math.floor(rating)
const filledStars = Math.floor(rating); // 4.7 → 4 filled stars

// Example: rating = 4.7
// ★ ★ ★ ★ ☆ (4 filled, 1 empty)
```

**Note:** Half-stars not currently supported. Rounds down (4.7 → 4 stars).

---

## Integration Examples

### SingleProduct Template

```tsx
import { ProductInfo } from '@/components/blocks/single-product/ProductInfo';

export const SingleProduct = () => {
  const product = useProduct(productId);
  
  return (
    <div className="product-page">
      <ProductInfo
        title={product.name}
        price={product.price}
        salePrice={product.salePrice}
        rating={product.averageRating}
        reviewCount={product.reviewCount}
        shortDescription={product.shortDescription}
      />
      
      {/* Rest of product page */}
    </div>
  );
};
```

---

### VariableProduct Template

```tsx
import { ProductInfo } from '@/components/blocks/single-product/ProductInfo';

export const VariableProduct = () => {
  const product = useProduct(productId);
  const [selectedVariation, setSelectedVariation] = useState(null);
  
  // Price changes based on selected variation
  const displayPrice = selectedVariation 
    ? selectedVariation.price 
    : product.price;
  
  return (
    <div className="product-page">
      <ProductInfo
        title={product.name}
        price={displayPrice}
        salePrice={selectedVariation?.salePrice}
        rating={product.averageRating}
        reviewCount={product.reviewCount}
        shortDescription={product.shortDescription}
      />
      
      {/* Variation selector */}
      {/* Add to cart */}
    </div>
  );
};
```

---

## State Variations

### No Reviews Yet

```tsx
<ProductInfo
  title="New Product Launch"
  price={49.99}
  rating={0}
  reviewCount={0}
  shortDescription="Be the first to try our latest innovation."
/>
```

**Renders:**
- All 5 stars empty (☆ ☆ ☆ ☆ ☆)
- Review count: "(0 reviews)"

---

### High Rating

```tsx
<ProductInfo
  title="Bestselling Product"
  price={79.99}
  rating={4.9}
  reviewCount={2341}
  shortDescription="Our most popular item with thousands of 5-star reviews."
/>
```

**Renders:**
- 4 filled stars (★ ★ ★ ★ ☆)
- Review count: "(2341 reviews)"

---

## Testing Checklist

### Visual Testing

- [ ] Product title displays correctly (h1, proper sizing)
- [ ] Star rating shows correct number of filled stars
- [ ] Review count displays with parentheses
- [ ] Sale price shows in red, larger size
- [ ] Regular price shows struck through, smaller size
- [ ] Current price (no sale) shows in large size
- [ ] Short description is readable
- [ ] Dark mode: all colors adapt correctly

---

### Responsive Testing

- [ ] Mobile (320px): Title wraps properly, no overflow
- [ ] Mobile (375px): All elements visible, proper spacing
- [ ] Tablet (768px): Layout scales correctly
- [ ] Desktop (1024px+): No excessive spacing

---

### Edge Cases

- [ ] Very long product title (60+ characters)
- [ ] No reviews (rating = 0, reviewCount = 0)
- [ ] Perfect rating (5 stars)
- [ ] Low rating (1-2 stars)
- [ ] Very high review count (1000+)
- [ ] Very long short description (200+ characters)
- [ ] Missing salePrice (undefined)

---

## Common Mistakes

### ❌ Mistake 1: Missing Dark Mode Colors

```tsx
// WRONG - no dark mode support
<span className="text-red-600">£99.99</span>
```

✅ **Correct:**
```tsx
<span className="wc-product-info__price-sale">£99.99</span>
```

**Why:** BEM class handles light/dark modes via CSS.

---

### ❌ Mistake 2: Hardcoded Font Sizes

```tsx
// WRONG - hardcoded text size
<h1 className="text-4xl font-bold">{title}</h1>
```

✅ **Correct:**
```tsx
<Typography variant="h1" className="wc-product-info__title">
  {title}
</Typography>
```

**Why:** Typography component provides fluid sizing (32px → 56px).

---

### ❌ Mistake 3: Missing Review Count Context

```tsx
// WRONG - no context for number
<span>{reviewCount}</span>
```

✅ **Correct:**
```tsx
<span className="wc-product-info__review-count">
  ({reviewCount} reviews)
</span>
```

**Why:** Parentheses and "reviews" label provide context.

---

### ❌ Mistake 4: Sale Price Order

```tsx
// WRONG - regular price shows first
<div>
  <span className="wc-product-info__price-regular">£129.99</span>
  <span className="wc-product-info__price-sale">£99.99</span>
</div>
```

✅ **Correct:**
```tsx
<div className="wc-product-info__price">
  <span className="wc-product-info__price-sale">£99.99</span>
  <span className="wc-product-info__price-regular">£129.99</span>
</div>
```

**Why:** Sale price shows first (more prominent, left/top).

---

## CSS File Location

**Styling defined in:** `/src/styles/blocks/product/info.css`

**Imports in:** `/styles/globals-minimal.css` (Batch 6 - Product blocks)

---

## Related Components

- **ProductAddToCart** - Add to cart controls (quantity, variations, button)
- **ProductTabs** - Description, reviews, additional info tabs
- **ProductPrice** - Standalone price display (used in grids/cards)
- **ProductMeta** - SKU, categories, tags metadata

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-13 | Initial guideline created (T4.10) |

---

**Status:** ✅ Complete  
**Priority:** P0 (Critical)  
**Guidelines Version:** 2.12  
**Last Updated:** March 13, 2026
