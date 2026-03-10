# Product Reviews

**WooCommerce Block:** `woocommerce/product-reviews`
**Category:** `woocommerce`
**React Component:** `ProductTabs` (reviews tab)
**File Location:** `/src/app/components/blocks/single-product/ProductTabs.tsx`

---

## Overview

The Product Reviews block provides a complete review system with a template-based layout, review form, and pagination. It replaces the older standalone review blocks.

---

## Block Definition

- **Name:** `woocommerce/product-reviews`
- **Description:** Display a product's reviews.
- **Supports:**
  - `align` (full, wide)
  - `color` (background, gradients, heading, link, text)
  - `interactivity`
  - `spacing` (margin, padding)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:** `tagName`

---

## Block Hierarchy

```
woocommerce/product-reviews
|-- woocommerce/product-reviews-title               # "X reviews for Product Name"
|-- woocommerce/product-review-template              # Repeater for each review
|   |-- woocommerce/product-review-rating            # Star rating
|   |-- woocommerce/product-review-author-name       # Reviewer name
|   |-- woocommerce/product-review-date              # Review date
|   |-- woocommerce/product-review-content           # Review text
|-- woocommerce/product-reviews-pagination           # Page navigation
|   |-- woocommerce/product-reviews-pagination-previous
|   |-- woocommerce/product-reviews-pagination-numbers
|   |-- woocommerce/product-reviews-pagination-next
|-- woocommerce/product-review-form                  # Submit review form
```

---

## Child Block Definitions

### Reviews Title
- **Name:** `woocommerce/product-reviews-title`
- **Ancestor:** `woocommerce/product-reviews`
- **Supports:** `align`, `color`, `spacing`, `typography`, `anchor`
- **Attributes:** `level`, `levelOptions`, `showProductTitle`, `showReviewsCount`, `textAlign`

### Review Template
- **Name:** `woocommerce/product-review-template`
- **Ancestor:** `woocommerce/product-reviews`
- **Supports:** `align`, `interactivity`, `spacing`, `typography`

### Review Rating
- **Name:** `woocommerce/product-review-rating`
- **Ancestor:** `woocommerce/product-reviews`
- **Supports:** `color` (background, gradients, text), `interactivity`
- **Attributes:** `textAlign`

### Review Author Name
- **Name:** `woocommerce/product-review-author-name`
- **Ancestor:** `woocommerce/product-reviews`
- **Supports:** `color`, `interactivity`, `spacing`, `typography`
- **Attributes:** `isLink`, `linkTarget`, `textAlign`

### Review Date
- **Name:** `woocommerce/product-review-date`
- **Ancestor:** `woocommerce/product-reviews`
- **Supports:** `color`, `interactivity`, `spacing`, `typography`
- **Attributes:** `format`, `isLink`

### Review Content
- **Name:** `woocommerce/product-review-content`
- **Ancestor:** `woocommerce/product-reviews`
- **Supports:** `color`, `spacing` (padding), `typography`
- **Attributes:** `textAlign`

### Review Form
- **Name:** `woocommerce/product-review-form`
- **Description:** Display a product's reviews form.
- **Supports:** `color`, `interactivity`, `spacing`, `typography`
- **Attributes:** `textAlign`

### Reviews Pagination
- **Name:** `woocommerce/product-reviews-pagination`
- **Ancestor:** `woocommerce/product-reviews`
- **Supports:** `align`, `color`, `interactivity`, `layout`, `typography`
- **Attributes:** `paginationArrow`

---

## WordPress CSS Classes

```css
/* Reviews container */
.wp-block-woocommerce-product-reviews { }
.wc-block-product-reviews { }

/* Reviews title */
.wc-block-product-reviews-title { }

/* Individual review */
.wc-block-product-review-template { }
.wc-block-product-review { }

/* Review components */
.wc-block-product-review-rating { }
.wc-block-product-review-author-name { }
.wc-block-product-review-date { }
.wc-block-product-review-content { }

/* Review form */
.wc-block-product-review-form { }
.wc-block-product-review-form__rating { }
.wc-block-product-review-form__content { }
.wc-block-product-review-form__submit { }

/* Pagination */
.wc-block-product-reviews-pagination { }
.wc-block-product-reviews-pagination__previous { }
.wc-block-product-reviews-pagination__numbers { }
.wc-block-product-reviews-pagination__next { }
```

---

## React Component Mapping

```tsx
function ReviewsSection(props) {
  var reviews = props.reviews;
  var product = props.product;

  return React.createElement('div', { className: 'wc-block-product-reviews' },
    // Title
    React.createElement(Heading, { level: '2' },
      reviews.length + ' reviews for ' + product.name
    ),
    // Review list
    reviews.map(function(review) {
      return React.createElement('div', { key: review.id, className: 'wc-block-product-review' },
        React.createElement('div', { className: 'wc-block-product-review-rating' }, renderStars(review.rating)),
        React.createElement('span', { className: 'wc-block-product-review-author-name' }, review.author),
        React.createElement('span', { className: 'wc-block-product-review-date' }, formatDate(review.date)),
        React.createElement('p', { className: 'wc-block-product-review-content' }, review.content)
      );
    }),
    // Review form
    React.createElement(ReviewForm, { productId: product.id })
  );
}
```
