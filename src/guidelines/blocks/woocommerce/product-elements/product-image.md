# Product Image

**WooCommerce Block:** `woocommerce/product-image`
**Category:** `woocommerce-product-elements`
**React Component:** `ProductCard` (image portion), `ProductGallery` (single product)
**File Location:** `/src/app/components/blocks/ProductCard.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-image`
- **Description:** Display the main product image.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Parent:** None
- **Supports:**
  - `dimensions` (aspectRatio)
  - `email`
  - `interactivity` (clientNavigation)
  - `spacing` (margin, padding)
  - `typography` (fontSize)
  - `html`
- **Attributes:**
  - `aspectRatio` - Image aspect ratio
  - `height` - Fixed height
  - `imageSizing` - How the image is sized (`full-size`, `cropped`)
  - `isDescendentOfQueryLoop` - Whether inside a query loop
  - `isDescendentOfSingleProductBlock` - Whether inside a single product block
  - `productId` - The product ID
  - `saleBadgeAlign` - Sale badge position (`left`, `center`, `right`)
  - `scale` - Image scale mode (`cover`, `contain`)
  - `showProductLink` - Whether image links to product page
  - `showSaleBadge` - Whether to display sale badge overlay
  - `width` - Fixed width

---

## WordPress CSS Classes

```css
/* Block wrapper */
.wc-block-components-product-image { }

/* Image element */
.wc-block-components-product-image__image { }

/* Image link wrapper */
.wc-block-components-product-image__image-link { }

/* Sale badge overlay */
.wc-block-components-product-image .wc-block-components-product-sale-badge { }
.wc-block-components-product-image .wc-block-components-product-sale-badge--align-left { }
.wc-block-components-product-image .wc-block-components-product-sale-badge--align-center { }
.wc-block-components-product-image .wc-block-components-product-sale-badge--align-right { }

/* Placeholder (no image) */
.wc-block-components-product-image--placeholder { }
```

---

## React Component Mapping

### In ProductCard (Archive Context)

```tsx
// ProductCard renders the image as part of the card
<div className="wc-block-product-card__image-wrapper">
  <img
    src={product.image}
    alt={product.name}
    className="wc-block-product-card__image"
    loading="lazy"
  />
  {product.onSale && (
    <span className="wc-block-product-card__sale-badge">Sale</span>
  )}
</div>
```

### In SingleProduct (Detail Context)

The `ProductGallery` component handles full product image display with thumbnails and zoom.

---

## Usage in Templates

### WordPress Block Theme
```html
<!-- Default product image -->
<!-- wp:woocommerce/product-image {"showSaleBadge":true,"saleBadgeAlign":"left"} /-->

<!-- With aspect ratio -->
<!-- wp:woocommerce/product-image {"aspectRatio":"1","scale":"cover","showProductLink":true} /-->
```

### React Prototype
```tsx
// In ProductCard component
<div className="wc-block-product-card__image-wrapper">
  <img src={product.images[0]} alt={product.name} loading="lazy" />
</div>
```

---

## Accessibility

- `alt` attribute required (product name as fallback)
- Decorative images use `alt=""`
- `loading="lazy"` for below-the-fold images
- Sale badge uses `aria-label="On sale"` for screen readers
