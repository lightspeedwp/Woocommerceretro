# ProductGallery Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ProductGallery.tsx`  
**Status:** Complete

---

## Overview

**Purpose:** A responsive image gallery component for displaying product photos with thumbnail navigation and a large main image preview. Features click-to-select thumbnails with active state indicators and retro-themed neon glow effects.

**Use Cases:**
- Display product images on single product pages
- Allow users to browse multiple product photos via thumbnail selection
- Provide visual product details before purchase
- Showcase product variations or multiple angles

**WordPress Alignment:** Maps to `woocommerce/product-image-gallery` block. Provides the primary visual presentation of products in WooCommerce single product templates.

---

## Visual Reference

**States:**
- **Default** - Vertical thumbnail strip on left (desktop), horizontal strip on bottom (mobile), glass panel backgrounds
- **Thumbnail Hover** - Border color changes to `--wp--preset--color--border`, spring scale animation
- **Thumbnail Active** - Neon cyan border (`--wp--preset--color--neon-cyan`) with box-shadow glow in dark mode, primary color in light mode
- **Main Image** - Large display with funky card glow effect, rounded corners, overflow hidden

**Layout:**
- **Desktop (>768px):** Thumbnails on left (80x80px each), main image fills remaining space, flex-row layout
- **Mobile (≤768px):** Thumbnails on bottom (horizontal scrollable row), main image above, flex-column-reverse layout

---

## Implementation

### File Location

```
/src/app/components/blocks/single-product/ProductGallery.tsx
```

### Dependencies

```tsx
import React, { useState } from 'react';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
```

**Required:**
- `react` - useState hook for selected image tracking
- `ImageWithFallback` component for image display with fallback support

**Optional:**
- None

---

## Props / API

### TypeScript Interface

```tsx
interface ProductGalleryProps {
  // REQUIRED props
  images: string[];      // Array of image URLs to display in gallery
  productName: string;   // Product name for alt text generation
}
```

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `images` | `string[]` | ✅ Yes | — | Array of image URLs for the product gallery |
| `productName` | `string` | ✅ Yes | — | Product name used in alt text for accessibility |

---

## Usage Examples

### Basic Usage

```tsx
import { ProductGallery } from '@/components/blocks/single-product/ProductGallery';

function SingleProduct() {
  const images = [
    'https://example.com/product-1.jpg',
    'https://example.com/product-2.jpg',
    'https://example.com/product-3.jpg',
  ];
  
  return (
    <ProductGallery 
      images={images} 
      productName="Wireless Headphones" 
    />
  );
}
```

### With Product Data

```tsx
import { ProductGallery } from '@/components/blocks/single-product/ProductGallery';
import { products } from '@/data/products';

function ProductPage({ productSlug }: { productSlug: string }) {
  const product = products.find(p => p.slug === productSlug);
  
  if (!product) return <div>Product not found</div>;
  
  return (
    <div className="product-page">
      <ProductGallery 
        images={product.images || [product.image]} 
        productName={product.name} 
      />
      {/* Other product details */}
    </div>
  );
}
```

### Empty State Handling

```tsx
// Component automatically returns null if images array is empty
<ProductGallery images={[]} productName="Product" />
// Renders: null (no output)

// Always provide at least one image
<ProductGallery 
  images={[product.image]} 
  productName={product.name} 
/>
```

---

## Styling

### BEM Classes

```css
/* Container */
.wc-product-gallery { }

/* Thumbnail strip (left on desktop, bottom on mobile) */
.wc-product-gallery__thumbnails { }

/* Individual thumbnail button */
.wc-product-gallery__thumbnail { }
.wc-product-gallery__thumbnail--active { }  /* Active state */

/* Thumbnail image */
.wc-product-gallery__thumbnail-image { }

/* Main image container */
.wc-product-gallery__main { }

/* Main image inner wrapper */
.wc-product-gallery__inner { }

/* Main display image */
.wc-product-gallery__image { }
```

### Retro Theme Features

**Glass Panel Backgrounds:**
- Thumbnails have `background: var(--wp--preset--color--surface)`
- Main image wrapper has glass panel with `funky-card-glow` class

**Neon Glow Effects:**
- Active thumbnail: neon cyan border (`--wp--preset--color--neon-cyan`) with `box-shadow: 0 0 8px rgba(0, 255, 255, 0.3)` in dark mode
- Active thumbnail: primary color border in light mode
- Main image: funky card glow effect via utility class

**Interactive States:**
- Thumbnail hover: `border-color` changes to `--wp--preset--color--border`
- Active thumbnail: `funky-spring-hover` spring scale animation (1.0 → 1.05 → 1.0)
- Active thumbnail: `funky-card-glow` neon glow effect

**Typography:**
- N/A (image-only component)

---

## Dark Mode Support

**Background Colors:**
```css
/* Thumbnails - Light mode */
background: var(--wp--preset--color--surface);  /* #f9f9f9 */

/* Thumbnails - Dark mode */
.dark .wc-product-gallery__thumbnail {
  background: var(--wp--preset--color--surface);  /* #1a1a1a */
}
```

**Border Colors:**
```css
/* Active thumbnail - Light mode */
.wc-product-gallery__thumbnail--active {
  border-color: var(--wp--preset--color--primary);  /* #000000 */
}

/* Active thumbnail - Dark mode */
.dark .wc-product-gallery__thumbnail--active {
  border-color: var(--wp--preset--color--neon-cyan);  /* #00d9ff */
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}
```

**Main Image Container:**
- Uses `funky-card-glow` utility class which adapts to theme automatically
- Glass panel background defined by CSS variables

---

## Accessibility

**ARIA Attributes:**
- Thumbnail strip: `role="group"` and `aria-label="Product gallery thumbnails"`
- Thumbnail buttons: `aria-label="View image ${index + 1} of ${images.length}"`
- Active thumbnail: `aria-current="true"`
- Inactive thumbnails: `aria-current="false"`

**Keyboard Navigation:**
- All thumbnails are `<button>` elements (natively focusable)
- Keyboard users can tab through thumbnails
- Enter/Space keys trigger thumbnail selection
- Active thumbnail indicated with `aria-current`

**Screen Reader Support:**
- Main image alt text: `${productName} - View ${selectedIndex + 1}`
- Empty alt on thumbnails (decorative, labeled by button aria-label)
- Thumbnail count announced via aria-label ("View image 2 of 5")

**Focus Indicators:**
- Browser default focus rings on thumbnail buttons
- Active state visually distinct with neon border

**Color Contrast:**
- Active border in dark mode: cyan (#00d9ff) on dark background (high contrast)
- Active border in light mode: black (#000000) on light background (high contrast)

---

## Responsive Design

### Desktop (> 768px)

```css
.wc-product-gallery {
  display: flex;           /* Horizontal layout */
  gap: var(--wp--preset--spacing--40);  /* 16px */
}

.wc-product-gallery__thumbnails {
  flex-direction: column;  /* Vertical thumbnail strip */
  gap: var(--wp--preset--spacing--30);  /* 12px */
}

.wc-product-gallery__thumbnail {
  width: 80px;
  height: 80px;
}
```

**Layout:** Thumbnails on left (80px wide), main image fills remaining horizontal space.

### Mobile (≤ 768px)

```css
.wc-product-gallery {
  flex-direction: column-reverse;  /* Main image on top */
}

.wc-product-gallery__thumbnails {
  flex-direction: row;     /* Horizontal thumbnail row */
  overflow-x: auto;        /* Enable horizontal scrolling */
  padding-bottom: var(--wp--preset--spacing--20);  /* 8px for scrollbar */
}

.wc-product-gallery__thumbnail {
  width: 80px;
  height: 80px;
  flex-shrink: 0;  /* Prevent thumbnail shrinking */
}
```

**Layout:** Main image on top (full width), thumbnails below in horizontal scrollable row.

**Touch Interactions:**
- Horizontal swipe on thumbnail strip to scroll
- Tap thumbnail to select (no hover state on mobile)

---

## State Management

**Internal State:**
```tsx
const [selectedIndex, setSelectedIndex] = useState(0);
```

**State Behavior:**
- Initial state: `selectedIndex = 0` (first image selected)
- Thumbnail click: `setSelectedIndex(index)` updates selected image
- Main image: displays `images[selectedIndex]`
- Active class: applied when `selectedIndex === index`

**No External State:**
- Component is self-contained
- No props for controlling selected index
- No onChange callbacks

**Future Enhancement:** Could add controlled mode with `selectedIndex` and `onIndexChange` props.

---

## Component Patterns

### Defensive Programming

```tsx
// Early return if no images
if (!images || images.length === 0) return null;
```

**Null Safety:**
- Returns `null` if `images` prop is undefined, null, or empty array
- Prevents render errors when product has no images

### Thumbnail Iteration

```tsx
images.map((image, index) => {
  const isActive = selectedIndex === index;
  // ...
})
```

**Pattern:**
- Uses array `map` (modern ES6) instead of `for` loop
- Derives `isActive` boolean from index comparison
- Applies conditional classes based on `isActive`

### Conditional Class Application

```tsx
className={`wc-product-gallery__thumbnail funky-spring-hover ${
  isActive 
    ? 'wc-product-gallery__thumbnail--active funky-card-glow' 
    : ''
}`}
```

**BEM Modifier Pattern:**
- Base class always applied: `wc-product-gallery__thumbnail`
- Utility class always applied: `funky-spring-hover`
- Active modifier: `wc-product-gallery__thumbnail--active` (conditionally)
- Retro glow: `funky-card-glow` (conditionally)

---

## Testing Checklist

### Visual Testing

- [ ] Gallery renders correctly in light mode
- [ ] Gallery renders correctly in dark mode
- [ ] First thumbnail is active on initial render
- [ ] Active thumbnail has neon cyan border (dark mode)
- [ ] Active thumbnail has primary border (light mode)
- [ ] Active thumbnail has glow box-shadow (dark mode)
- [ ] Thumbnail hover changes border color
- [ ] Main image updates when thumbnail clicked
- [ ] Images load with fallback handling (via ImageWithFallback)

### Layout Testing

- [ ] Desktop: thumbnails on left, main image on right
- [ ] Desktop: thumbnails are 80x80px
- [ ] Desktop: gap between thumbnails is 12px
- [ ] Mobile: main image on top, thumbnails on bottom
- [ ] Mobile: thumbnails scroll horizontally
- [ ] Mobile: thumbnails maintain 80x80px size

### Interactive Testing

- [ ] Clicking thumbnail changes main image
- [ ] Active state updates correctly on click
- [ ] Keyboard: Tab focuses each thumbnail
- [ ] Keyboard: Enter/Space selects thumbnail
- [ ] Screen reader announces image count ("View image 2 of 5")
- [ ] Screen reader announces current image on main display

### Edge Cases

- [ ] Empty images array returns null (no render)
- [ ] Single image: gallery still renders (no thumbnail strip visible if length=1)
- [ ] Large image count: thumbnails remain scrollable
- [ ] Product name with special characters in alt text

### Accessibility Audit

- [ ] ARIA labels present and descriptive
- [ ] aria-current attribute toggles correctly
- [ ] Keyboard navigation works as expected
- [ ] Focus indicators visible on all interactive elements
- [ ] Color contrast meets WCAG AA standards

---

## Future Enhancements

### Controlled Mode
```tsx
interface ProductGalleryProps {
  images: string[];
  productName: string;
  selectedIndex?: number;        // Optional controlled index
  onIndexChange?: (index: number) => void;  // Change callback
}
```

Allow parent component to control selected image for external state synchronization (e.g., variant changes update gallery).

### Lightbox Integration
```tsx
const [isLightboxOpen, setIsLightboxOpen] = useState(false);

<button onClick={() => setIsLightboxOpen(true)}>
  {/* Main image */}
</button>
<Lightbox 
  isOpen={isLightboxOpen} 
  images={images} 
  startIndex={selectedIndex}
  onClose={() => setIsLightboxOpen(false)}
/>
```

Add click-to-expand lightbox for full-screen image viewing with carousel navigation.

### Zoom on Hover
```tsx
<div 
  className="wc-product-gallery__image-zoom"
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
>
  <img 
    src={images[selectedIndex]} 
    style={{ transform: `scale(${zoomLevel})` }}
  />
</div>
```

Implement magnifying glass or pan-and-zoom effect for detailed product inspection.

### Lazy Loading
```tsx
<ImageWithFallback 
  src={image} 
  alt={...}
  loading={index === selectedIndex ? 'eager' : 'lazy'}
/>
```

Load only selected image eagerly, lazy-load thumbnails and non-visible images.

### Video Support
```tsx
{images.map((item, index) => {
  const isVideo = item.type === 'video';
  return isVideo ? <VideoThumbnail /> : <ImageThumbnail />;
})}
```

Support video uploads in gallery with play icon overlay on video thumbnails.

---

## Related Components

- **ImageWithFallback** - Used for all image rendering with fallback support
- **ProductCard** - Uses single product image (not gallery)
- **ProductInfo** - Often rendered alongside ProductGallery
- **ProductTabs** - May contain additional product images in tabs

---

## WordPress Block Mapping

**Block Name:** `woocommerce/product-image-gallery`  
**Block Category:** `woocommerce`  
**Template Location:** `woocommerce/single-product.html`

**Block Attributes:**
```json
{
  "images": {
    "type": "array",
    "default": []
  },
  "productName": {
    "type": "string",
    "default": ""
  }
}
```

**Block Variations:**
- Standard gallery (this component)
- Grid gallery (multiple images shown simultaneously)
- Carousel gallery (slider-based navigation)

---

**Last Updated:** 2026-03-15  
**Guideline Status:** Complete  
**Component Status:** Production-ready
