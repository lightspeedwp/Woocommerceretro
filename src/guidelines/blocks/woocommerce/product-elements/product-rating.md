# Product Rating

**WooCommerce Blocks:**
- `woocommerce/product-rating` (general rating display)
- `woocommerce/product-average-rating` (average rating - Beta)
- `woocommerce/product-rating-stars` (star display - Beta)
- `woocommerce/product-rating-counter` (review count - Beta)

**Category:** `woocommerce-product-elements`
**React Component:** `ProductCard` (rating section), `StarRating` (standalone)
**File Location:** `/src/app/components/blocks/ProductCard.tsx`

---

## Block Definitions

### Product Rating
- **Name:** `woocommerce/product-rating`
- **Description:** Display the average rating of a product.
- **Ancestor:** `woocommerce/all-products`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Supports:** `color` (text, background, link), `interactivity` (clientNavigation), `spacing` (margin, padding), `typography` (fontSize)
- **Attributes:** `isDescendentOfQueryLoop`, `isDescendentOfSingleProductBlock`, `isDescendentOfSingleProductTemplate`, `productId`, `textAlign`

### Product Average Rating (Beta)
- **Name:** `woocommerce/product-average-rating`
- **Description:** Display the average rating of a product (numeric).
- **Ancestor:** `woocommerce/single-product`
- **Supports:** `color` (background, text), `interactivity` (clientNavigation), `spacing` (margin, padding), `typography` (fontSize)
- **Attributes:** `textAlign`

### Product Rating Stars (Beta)
- **Name:** `woocommerce/product-rating-stars`
- **Description:** Display the average rating of a product with stars.
- **Ancestor:** `woocommerce/single-product`
- **Supports:** `color` (text, background, link), `interactivity` (clientNavigation), `spacing` (margin, padding), `typography` (fontSize)
- **Attributes:** Same as product-rating

### Product Rating Counter (Beta)
- **Name:** `woocommerce/product-rating-counter`
- **Description:** Display the review count of a product.
- **Ancestor:** `woocommerce/single-product`
- **Supports:** `color` (link, background, text), `interactivity` (clientNavigation), `spacing` (margin, padding), `typography` (fontSize)
- **Attributes:** Same as product-rating

---

## WordPress CSS Classes

```css
/* Rating wrapper */
.wc-block-components-product-rating { }

/* Stars container */
.wc-block-components-product-rating__stars { }

/* Individual star */
.wc-block-components-product-rating__star { }

/* Filled star */
.wc-block-components-product-rating__star--filled { }

/* Empty star */
.wc-block-components-product-rating__star--empty { }

/* Half star */
.wc-block-components-product-rating__star--half { }

/* Rating counter */
.wc-block-components-product-rating__counter { }

/* Average rating number */
.wc-block-components-product-rating__average { }
```

---

## React Component Mapping

### In ProductCard
```tsx
<div className="wc-block-product-card__rating">
  {renderStars(product.rating)}
  <span className="wc-block-product-card__review-count">
    ({product.reviewCount})
  </span>
</div>
```

### Star Rendering Pattern
```tsx
function renderStars(rating) {
  var stars = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(/* filled star */);
    } else if (i - 0.5 <= rating) {
      stars.push(/* half star */);
    } else {
      stars.push(/* empty star */);
    }
  }
  return stars;
}
```

---

## Dark Mode

```css
/* Filled stars */
.wc-block-components-product-rating__star--filled {
  color: var(--wp--preset--color--foreground);
  fill: var(--wp--preset--color--foreground);
}

/* Empty stars */
.wc-block-components-product-rating__star--empty {
  color: var(--wp--preset--color--border);
  fill: none;
}
```

---

## Accessibility

- Star rating uses `aria-label="Rated X out of 5"`
- Review count links to reviews section
- Stars are decorative when text alternative is present
