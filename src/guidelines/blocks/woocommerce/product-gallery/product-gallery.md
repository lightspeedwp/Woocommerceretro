# Product Gallery

**WooCommerce Block:** `woocommerce/product-gallery`
**Category:** `woocommerce`
**React Component:** `ProductGallery`
**File Location:** `/src/app/components/blocks/single-product/ProductGallery.tsx`

---

## Overview

The Product Gallery block is the modern gallery system for single product pages. It provides a large image display with thumbnail navigation and optional next/previous controls.

---

## Block Definition

- **Name:** `woocommerce/product-gallery`
- **Description:** Showcase your products relevant images and media.
- **Category:** `woocommerce`
- **Ancestor:** `woocommerce/single-product`
- **Supports:**
  - `align`
  - `email`
  - `interactivity`
  - `layout` (allowEditing, allowOrientation, default, allowJustification)
- **Attributes:**
  - `fullScreenOnClick` - Enable full-screen image on click
  - `hoverZoom` - Enable hover zoom effect

---

## Block Hierarchy

```
woocommerce/product-gallery
|-- woocommerce/product-gallery-large-image          # Main product image
|   |-- woocommerce/product-gallery-large-image-next-previous  # Nav arrows
|   |-- woocommerce/product-sale-badge               # Sale badge overlay
|-- woocommerce/product-gallery-thumbnails           # Thumbnail strip
```

---

## Child Blocks

### Large Image
- **Name:** `woocommerce/product-gallery-large-image`
- **Ancestor:** `woocommerce/product-gallery`
- **Supports:** `interactivity`
- **React:** Main image display

### Next/Previous Buttons
- **Name:** `woocommerce/product-gallery-large-image-next-previous`
- **Ancestor:** `woocommerce/product-gallery-large-image`
- **Supports:** `align`, `color` (background, text), `interactivity`, `layout`, `shadow`, `spacing` (margin)
- **React:** Arrow navigation buttons

### Thumbnails
- **Name:** `woocommerce/product-gallery-thumbnails`
- **Ancestor:** `woocommerce/product-gallery`
- **Supports:** `interactivity`, `spacing` (margin)
- **Attributes:** `aspectRatio`, `thumbnailSize`
- **React:** Thumbnail strip below main image

---

## WordPress CSS Classes

```css
/* Gallery wrapper */
.wc-block-product-gallery { }

/* Large image */
.wc-block-product-gallery-large-image { }
.wc-block-product-gallery-large-image__image { }

/* Navigation arrows */
.wc-block-product-gallery-large-image-next-previous { }
.wc-block-product-gallery-large-image-next-previous__button { }
.wc-block-product-gallery-large-image-next-previous__button--previous { }
.wc-block-product-gallery-large-image-next-previous__button--next { }

/* Thumbnails */
.wc-block-product-gallery-thumbnails { }
.wc-block-product-gallery-thumbnails__thumbnail { }
.wc-block-product-gallery-thumbnails__thumbnail--active { }
```

---

## React Component Mapping

```tsx
function ProductGallery(props) {
  var images = props.images;
  var activeIndex = 0; // managed via state

  return React.createElement('div', { className: 'wc-block-product-gallery' },
    // Main image with nav arrows
    React.createElement('div', { className: 'wc-block-product-gallery-large-image' },
      React.createElement('img', {
        src: images[activeIndex],
        className: 'wc-block-product-gallery-large-image__image',
        alt: props.productName
      }),
      React.createElement('button', {
        className: 'wc-block-product-gallery-large-image-next-previous__button--previous',
        'aria-label': 'Previous image'
      }),
      React.createElement('button', {
        className: 'wc-block-product-gallery-large-image-next-previous__button--next',
        'aria-label': 'Next image'
      })
    ),
    // Thumbnail strip
    React.createElement('div', { className: 'wc-block-product-gallery-thumbnails' },
      images.map(function(img, index) {
        var isActive = index === activeIndex;
        return React.createElement('button', {
          key: index,
          className: 'wc-block-product-gallery-thumbnails__thumbnail' + (isActive ? ' wc-block-product-gallery-thumbnails__thumbnail--active' : ''),
          'aria-label': 'View image ' + (index + 1)
        },
          React.createElement('img', { src: img, alt: '' })
        );
      })
    )
  );
}
```

---

## Legacy Block: Product Image Gallery

- **Name:** `woocommerce/product-image-gallery`
- **Description:** Display a product's images (older, simpler gallery).
- **Supports:** `align`, `interactivity`, `multiple`
- **CSS:** `.wc-block-product-image-gallery`
- **Note:** Being replaced by `woocommerce/product-gallery`
