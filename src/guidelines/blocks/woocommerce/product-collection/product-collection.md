# Product Collection

**WooCommerce Block:** `woocommerce/product-collection`
**Category:** `woocommerce`
**React Component:** `ProductGrid` pattern
**File Location:** `/src/app/components/patterns/ProductGrid.tsx`

---

## Overview

The Product Collection block is the modern, recommended way to display products in WooCommerce. It replaces older blocks like `all-products`, `product-best-sellers`, etc. with a unified, query-based approach.

---

## Block Definition

- **Name:** `woocommerce/product-collection`
- **Description:** Display a collection of products from your store.
- **Supports:**
  - `align` (full, wide)
  - `anchor`
  - `email`
  - `interactivity`
  - `html`
- **Attributes:**
  - `collection` - Collection type identifier
  - `convertedFromProducts` - Migration flag from older blocks
  - `dimensions` - Layout dimensions
  - `displayLayout` - Grid/list layout configuration
  - `forcePageReload` - Force full page reload on filter
  - `hideControls` - Hide editor UI controls
  - `query` - Query parameters (categories, tags, price range, stock status, etc.)
  - `queryContextIncludes` - Context inheritance
  - `queryId` - Unique query identifier
  - `tagName` - HTML wrapper element

---

## Block Hierarchy

```
woocommerce/product-collection
|-- woocommerce/product-template          # Repeater template for each product
|   |-- woocommerce/product-image         # Product image
|   |-- woocommerce/product-title         # Product title
|   |-- woocommerce/product-price         # Product price
|   |-- woocommerce/product-rating        # Product rating
|   |-- woocommerce/product-button        # Add to cart button
|   |-- woocommerce/product-sale-badge    # Sale badge
|   |-- woocommerce/product-summary       # Short description
|-- woocommerce/product-collection-no-results  # Empty state
```

---

## Child Blocks

### Product Template
- **Name:** `woocommerce/product-template`
- **Description:** Contains the block elements used to render a product.
- **Supports:** `align` (full, wide), `anchor`, `color`, `email`, `interactivity`, `layout`, `typography`
- **React:** Individual `ProductCard` component

### No Results
- **Name:** `woocommerce/product-collection-no-results`
- **Description:** Content displayed when there are no products found.
- **Ancestor:** `woocommerce/product-collection`
- **Supports:** `align`, `color`, `email`, `interactivity`, `typography`
- **React:** Empty state component

---

## WordPress CSS Classes

```css
/* Collection wrapper */
.wp-block-woocommerce-product-collection { }
.wc-block-product-collection { }

/* Product template (grid) */
.wc-block-product-template { }
.wc-block-product-template__product { }

/* Grid layout */
.wc-block-product-template.columns-2 { }
.wc-block-product-template.columns-3 { }
.wc-block-product-template.columns-4 { }

/* No results */
.wc-block-product-collection-no-results { }
```

---

## React Component Mapping

```tsx
function ProductGrid(props) {
  var products = props.products;
  var columns = props.columns || 4;

  if (products.length === 0) {
    return React.createElement('div', {
      className: 'wc-block-product-collection-no-results'
    }, 'No products found.');
  }

  return React.createElement('div', {
    className: 'wc-block-product-template columns-' + columns
  },
    products.map(function(product) {
      return React.createElement(ProductCard, { key: product.id, product: product });
    })
  );
}
```

---

## Query Parameters

The `query` attribute supports:

| Parameter | Type | Description |
|-----------|------|-------------|
| `perPage` | number | Products per page |
| `pages` | number | Number of pages |
| `offset` | number | Skip N products |
| `order` | string | `asc` or `desc` |
| `orderBy` | string | `date`, `price`, `popularity`, `rating`, `title` |
| `search` | string | Search term |
| `exclude` | array | Product IDs to exclude |
| `include` | array | Product IDs to include |
| `featured` | boolean | Only featured products |
| `onSale` | boolean | Only on-sale products |
| `stockStatus` | array | Stock status filter |
| `taxQuery` | object | Category/tag filters |
| `priceRange` | object | Price min/max filter |

---

## Collection Presets

WooCommerce provides named collection presets:

| Collection | Description | Legacy Equivalent |
|-----------|-------------|-------------------|
| `best-sellers` | Best selling products | `woocommerce/product-best-sellers` |
| `new-arrivals` | Newest products | `woocommerce/product-new` |
| `on-sale` | Products on sale | `woocommerce/product-on-sale` |
| `top-rated` | Highest rated products | `woocommerce/product-top-rated` |
| `featured` | Featured products | N/A |
| `cross-sells` | Cross-sell products | N/A |
| `related` | Related products | `woocommerce/related-products` |
