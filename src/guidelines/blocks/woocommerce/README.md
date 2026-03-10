# WooCommerce Blocks Reference

**Version:** 1.0
**Updated:** March 3, 2026
**Source:** WooCommerce Blocks package (`block.json` definitions)
**Scope:** Complete mapping of all WooCommerce blocks to React prototype components

---

## Overview

This directory contains individual guideline files for every WooCommerce block used in the prototype. Each file documents:

- **Block Definition** - Name, category, ancestry, supported features, attributes
- **React Component Mapping** - Corresponding React component in the prototype
- **WordPress CSS Classes** - BEM-structured class names for styling
- **Template Usage** - Which WordPress/React templates use the block
- **Child Blocks** - Nested blocks that compose the parent

---

## Directory Structure

```
/guidelines/blocks/woocommerce/
|-- README.md                          # This file (master index)
|-- product-elements/                  # Individual product data blocks
|   |-- product-button.md             # Add to Cart Button
|   |-- product-image.md              # Product Image
|   |-- product-price.md              # Product Price
|   |-- product-title.md              # Product Title
|   |-- product-summary.md            # Product Summary / Short Description
|   |-- product-rating.md             # Rating (stars, counter, average)
|   |-- product-sku.md                # Product SKU
|   |-- product-stock-indicator.md    # Stock Indicator
|   |-- product-sale-badge.md         # On-Sale Badge
|   |-- product-meta.md               # Product Meta (SKU, categories, tags)
|   |-- product-description.md        # Full Product Description
|   |-- product-details.md            # Product Details (tabs)
|   |-- product-specifications.md     # Product Specifications
|-- product-collection/                # Grid and listing blocks
|   |-- product-collection.md         # Product Collection (modern query)
|   |-- all-products.md               # All Products grid
|   |-- single-product.md             # Single Product display
|   |-- featured-product.md           # Featured Product hero
|   |-- featured-category.md          # Featured Category hero
|   |-- product-best-sellers.md       # Best Selling Products
|   |-- product-new.md                # Newest Products
|   |-- product-on-sale.md            # On Sale Products
|   |-- product-top-rated.md          # Top Rated Products
|   |-- product-category.md           # Products by Category
|   |-- product-tag.md                # Products by Tag
|   |-- products-by-attribute.md      # Products by Attribute
|   |-- handpicked-products.md        # Hand-picked Products
|   |-- related-products.md           # Related Products
|   |-- product-categories.md         # Product Categories List
|-- product-gallery/                   # Product image gallery blocks
|   |-- product-gallery.md            # Gallery (large image, thumbnails, nav)
|   |-- product-image-gallery.md      # Legacy Image Gallery
|-- cart/                              # Cart blocks
|   |-- cart.md                        # Cart (filled/empty, items, totals, order summary)
|   |-- mini-cart.md                   # Mini-Cart (drawer, buttons, items, footer)
|   |-- cart-link.md                   # Cart Link
|-- checkout/                          # Checkout blocks
|   |-- checkout.md                    # Checkout (fields, totals, all sub-blocks)
|-- order-confirmation/                # Order confirmation blocks
|   |-- order-confirmation.md          # Order Confirmation (status, summary, totals, addresses)
|-- filters/                           # Product filter blocks
|   |-- product-filters.md            # Product Filters (modern, includes sub-blocks)
|   |-- legacy-filters.md             # Legacy filter controls (attribute, price, rating, stock)
|-- reviews/                           # Product review blocks
|   |-- product-reviews.md            # Product Reviews (template, pagination, form)
|   |-- legacy-reviews.md             # Legacy review blocks (all-reviews, by-category, by-product)
|-- add-to-cart/                       # Add to Cart blocks
|   |-- add-to-cart-form.md           # Add to Cart Form
|   |-- add-to-cart-with-options.md   # Add to Cart with Options (variations, grouped, quantity)
|-- utility/                           # Utility and navigation blocks
|   |-- breadcrumbs.md                # Store Breadcrumbs
|   |-- catalog-sorting.md            # Catalog Sorting
|   |-- product-results-count.md      # Product Results Count
|   |-- customer-account.md           # Customer Account
|   |-- store-notices.md              # Store Notices
|   |-- category-title.md            # Product Category Title
|   |-- category-description.md      # Product Category Description
|   |-- accordion.md                  # Accordion (group, header, item, panel)
|   |-- payment-method-icons.md       # Payment Method Icons
|   |-- coming-soon.md                # Coming Soon page
```

---

## Complete Block Index

### Product Elements (`woocommerce-product-elements`)

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Add to Cart Button | `woocommerce/product-button` | `AddToCartButton` | [product-button.md](product-elements/product-button.md) |
| Product Image | `woocommerce/product-image` | `ProductCard` (image portion) | [product-image.md](product-elements/product-image.md) |
| Product Price | `woocommerce/product-price` | `PriceDisplay` | [product-price.md](product-elements/product-price.md) |
| Product Title | `woocommerce/product-title` | `ProductCard` (title portion) | [product-title.md](product-elements/product-title.md) |
| Product Summary | `woocommerce/product-summary` | `ProductCard` (description) | [product-summary.md](product-elements/product-summary.md) |
| Product Average Rating | `woocommerce/product-average-rating` | `ProductCard` (rating) | [product-rating.md](product-elements/product-rating.md) |
| Product Rating | `woocommerce/product-rating` | `ProductCard` (rating) | [product-rating.md](product-elements/product-rating.md) |
| Product Rating Stars | `woocommerce/product-rating-stars` | `ProductCard` (stars) | [product-rating.md](product-elements/product-rating.md) |
| Product Rating Counter | `woocommerce/product-rating-counter` | `ProductCard` (count) | [product-rating.md](product-elements/product-rating.md) |
| Product SKU | `woocommerce/product-sku` | `ProductMeta` | [product-sku.md](product-elements/product-sku.md) |
| Product Stock Indicator | `woocommerce/product-stock-indicator` | `StockBadge` | [product-stock-indicator.md](product-elements/product-stock-indicator.md) |
| On-Sale Badge | `woocommerce/product-sale-badge` | `ProductCard` (badge) | [product-sale-badge.md](product-elements/product-sale-badge.md) |
| Product Meta | `woocommerce/product-meta` | `ProductMeta` | [product-meta.md](product-elements/product-meta.md) |
| Product Description | `woocommerce/product-description` | `ProductTabs` (description tab) | [product-description.md](product-elements/product-description.md) |
| Product Details | `woocommerce/product-details` | `ProductTabs` | [product-details.md](product-elements/product-details.md) |
| Product Specifications | `woocommerce/product-specifications` | `ProductTabs` (additional info) | [product-specifications.md](product-elements/product-specifications.md) |

### Product Collections (`woocommerce`)

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Product Collection | `woocommerce/product-collection` | `ProductGrid` | [product-collection.md](product-collection/product-collection.md) |
| All Products | `woocommerce/all-products` | `ProductGrid` | [all-products.md](product-collection/all-products.md) |
| Single Product | `woocommerce/single-product` | `SingleProduct` template | [single-product.md](product-collection/single-product.md) |
| Featured Product | `woocommerce/featured-product` | `Hero` (product variant) | [featured-product.md](product-collection/featured-product.md) |
| Featured Category | `woocommerce/featured-category` | `Hero` (category variant) | [featured-category.md](product-collection/featured-category.md) |
| Best Selling Products | `woocommerce/product-best-sellers` | `ProductGrid` | [product-best-sellers.md](product-collection/product-best-sellers.md) |
| Newest Products | `woocommerce/product-new` | `ProductGrid` | [product-new.md](product-collection/product-new.md) |
| On Sale Products | `woocommerce/product-on-sale` | `ProductGrid` | [product-on-sale.md](product-collection/product-on-sale.md) |
| Top Rated Products | `woocommerce/product-top-rated` | `ProductGrid` | [product-top-rated.md](product-collection/product-top-rated.md) |
| Products by Category | `woocommerce/product-category` | `ProductGrid` | [product-category.md](product-collection/product-category.md) |
| Products by Tag | `woocommerce/product-tag` | `ProductGrid` | [product-tag.md](product-collection/product-tag.md) |
| Products by Attribute | `woocommerce/products-by-attribute` | `ProductGrid` | [products-by-attribute.md](product-collection/products-by-attribute.md) |
| Hand-picked Products | `woocommerce/handpicked-products` | `ProductGrid` | [handpicked-products.md](product-collection/handpicked-products.md) |
| Related Products | `woocommerce/related-products` | `RelatedProducts` | [related-products.md](product-collection/related-products.md) |
| Product Categories List | `woocommerce/product-categories` | `CategoryGrid` | [product-categories.md](product-collection/product-categories.md) |
| Product Template | `woocommerce/product-template` | `ProductCard` (wrapper) | [product-collection.md](product-collection/product-collection.md) |
| No Results | `woocommerce/product-collection-no-results` | `EmptyState` | [product-collection.md](product-collection/product-collection.md) |

### Product Gallery

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Product Gallery | `woocommerce/product-gallery` | `ProductGallery` | [product-gallery.md](product-gallery/product-gallery.md) |
| Large Image | `woocommerce/product-gallery-large-image` | `ProductGallery` (main) | [product-gallery.md](product-gallery/product-gallery.md) |
| Thumbnails | `woocommerce/product-gallery-thumbnails` | `ProductGallery` (thumbs) | [product-gallery.md](product-gallery/product-gallery.md) |
| Next/Previous | `woocommerce/product-gallery-large-image-next-previous` | `ProductGallery` (nav) | [product-gallery.md](product-gallery/product-gallery.md) |
| Product Image Gallery | `woocommerce/product-image-gallery` | `ProductGallery` (legacy) | [product-image-gallery.md](product-gallery/product-image-gallery.md) |

### Cart

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Cart | `woocommerce/cart` | `PageCart` template | [cart.md](cart/cart.md) |
| Filled Cart | `woocommerce/filled-cart-block` | `CartFilled` | [cart.md](cart/cart.md) |
| Empty Cart | `woocommerce/empty-cart-block` | `CartEmpty` | [cart.md](cart/cart.md) |
| Cart Items | `woocommerce/cart-items-block` | `CartTable` | [cart.md](cart/cart.md) |
| Cart Line Items | `woocommerce/cart-line-items-block` | `CartItem` | [cart.md](cart/cart.md) |
| Cart Totals | `woocommerce/cart-totals-block` | `CartTotals` | [cart.md](cart/cart.md) |
| Proceed to Checkout | `woocommerce/proceed-to-checkout-block` | `CartTotals` (button) | [cart.md](cart/cart.md) |
| Express Checkout | `woocommerce/cart-express-payment-block` | Not yet implemented | [cart.md](cart/cart.md) |
| Accepted Payment Methods | `woocommerce/cart-accepted-payment-methods-block` | Not yet implemented | [cart.md](cart/cart.md) |
| Cart Cross-Sells | `woocommerce/cart-cross-sells-block` | Not yet implemented | [cart.md](cart/cart.md) |
| Order Summary | `woocommerce/cart-order-summary-block` | `CartTotals` | [cart.md](cart/cart.md) |
| Mini-Cart | `woocommerce/mini-cart` | `MiniCart` | [mini-cart.md](cart/mini-cart.md) |
| Mini-Cart Contents | `woocommerce/mini-cart-contents` | `MiniCart` (drawer) | [mini-cart.md](cart/mini-cart.md) |
| Cart Link | `woocommerce/cart-link` | `Header` (cart icon) | [cart-link.md](cart/cart-link.md) |

### Checkout

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Checkout | `woocommerce/checkout` | `PageCheckout` template | [checkout.md](checkout/checkout.md) |
| Checkout Fields | `woocommerce/checkout-fields-block` | `CheckoutStep` | [checkout.md](checkout/checkout.md) |
| Checkout Totals | `woocommerce/checkout-totals-block` | `CartTotals` (checkout) | [checkout.md](checkout/checkout.md) |
| Contact Information | `woocommerce/checkout-contact-information-block` | `CheckoutStep` | [checkout.md](checkout/checkout.md) |
| Shipping Address | `woocommerce/checkout-shipping-address-block` | `ShippingAddress` | [checkout.md](checkout/checkout.md) |
| Billing Address | `woocommerce/checkout-billing-address-block` | `BillingAddress` | [checkout.md](checkout/checkout.md) |
| Shipping Options | `woocommerce/checkout-shipping-methods-block` | `ShippingMethods` | [checkout.md](checkout/checkout.md) |
| Payment Options | `woocommerce/checkout-payment-block` | `PaymentMethods` | [checkout.md](checkout/checkout.md) |
| Actions | `woocommerce/checkout-actions-block` | `CheckoutActions` | [checkout.md](checkout/checkout.md) |
| Terms and Conditions | `woocommerce/checkout-terms-block` | `CheckoutTerms` | [checkout.md](checkout/checkout.md) |
| Order Note | `woocommerce/checkout-order-note-block` | `OrderNote` | [checkout.md](checkout/checkout.md) |
| Express Checkout | `woocommerce/checkout-express-payment-block` | Not yet implemented | [checkout.md](checkout/checkout.md) |

### Order Confirmation

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Order Status | `woocommerce/order-confirmation-status` | `OrderStatus` | [order-confirmation.md](order-confirmation/order-confirmation.md) |
| Order Summary | `woocommerce/order-confirmation-summary` | `OrderDetails` | [order-confirmation.md](order-confirmation/order-confirmation.md) |
| Order Totals | `woocommerce/order-confirmation-totals` | `OrderDetails` | [order-confirmation.md](order-confirmation/order-confirmation.md) |
| Billing Address | `woocommerce/order-confirmation-billing-address` | `OrderDetails` | [order-confirmation.md](order-confirmation/order-confirmation.md) |
| Shipping Address | `woocommerce/order-confirmation-shipping-address` | `OrderDetails` | [order-confirmation.md](order-confirmation/order-confirmation.md) |
| Downloads | `woocommerce/order-confirmation-downloads` | Not yet implemented | [order-confirmation.md](order-confirmation/order-confirmation.md) |
| Account Creation | `woocommerce/order-confirmation-create-account` | Not yet implemented | [order-confirmation.md](order-confirmation/order-confirmation.md) |

### Filters

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Product Filters | `woocommerce/product-filters` | `FilterSidebar` | [product-filters.md](filters/product-filters.md) |
| Active Filters | `woocommerce/product-filter-active` | `ActiveFilters` | [product-filters.md](filters/product-filters.md) |
| Attribute Filter | `woocommerce/product-filter-attribute` | `FilterSidebar` (attribute) | [product-filters.md](filters/product-filters.md) |
| Price Filter | `woocommerce/product-filter-price` | `FilterSidebar` (price) | [product-filters.md](filters/product-filters.md) |
| Rating Filter | `woocommerce/product-filter-rating` | `FilterSidebar` (rating) | [product-filters.md](filters/product-filters.md) |
| Status Filter | `woocommerce/product-filter-status` | `FilterSidebar` (stock) | [product-filters.md](filters/product-filters.md) |
| Taxonomy Filter | `woocommerce/product-filter-taxonomy` | `FilterSidebar` (taxonomy) | [product-filters.md](filters/product-filters.md) |
| Legacy Active Filters | `woocommerce/active-filters` | `ActiveFilters` | [legacy-filters.md](filters/legacy-filters.md) |
| Legacy Attribute Filter | `woocommerce/attribute-filter` | `FilterSidebar` | [legacy-filters.md](filters/legacy-filters.md) |
| Legacy Price Filter | `woocommerce/price-filter` | `FilterSidebar` | [legacy-filters.md](filters/legacy-filters.md) |
| Legacy Rating Filter | `woocommerce/rating-filter` | `FilterSidebar` | [legacy-filters.md](filters/legacy-filters.md) |
| Legacy Stock Filter | `woocommerce/stock-filter` | `FilterSidebar` | [legacy-filters.md](filters/legacy-filters.md) |

### Reviews

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Product Reviews | `woocommerce/product-reviews` | `ProductTabs` (reviews tab) | [product-reviews.md](reviews/product-reviews.md) |
| Review Template | `woocommerce/product-review-template` | Review list item | [product-reviews.md](reviews/product-reviews.md) |
| Review Author Name | `woocommerce/product-review-author-name` | Review component | [product-reviews.md](reviews/product-reviews.md) |
| Review Content | `woocommerce/product-review-content` | Review component | [product-reviews.md](reviews/product-reviews.md) |
| Review Date | `woocommerce/product-review-date` | Review component | [product-reviews.md](reviews/product-reviews.md) |
| Review Rating | `woocommerce/product-review-rating` | Review component | [product-reviews.md](reviews/product-reviews.md) |
| Review Form | `woocommerce/product-review-form` | Review form | [product-reviews.md](reviews/product-reviews.md) |
| Reviews Title | `woocommerce/product-reviews-title` | Section heading | [product-reviews.md](reviews/product-reviews.md) |
| All Reviews | `woocommerce/all-reviews` | Not yet implemented | [legacy-reviews.md](reviews/legacy-reviews.md) |
| Reviews by Category | `woocommerce/reviews-by-category` | Not yet implemented | [legacy-reviews.md](reviews/legacy-reviews.md) |
| Reviews by Product | `woocommerce/reviews-by-product` | Not yet implemented | [legacy-reviews.md](reviews/legacy-reviews.md) |

### Add to Cart

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Add to Cart Form | `woocommerce/add-to-cart-form` | `AddToCartButton` + `QuantitySelector` | [add-to-cart-form.md](add-to-cart/add-to-cart-form.md) |
| Add to Cart with Options | `woocommerce/add-to-cart-with-options` | `AddToCartButton` (variable) | [add-to-cart-with-options.md](add-to-cart/add-to-cart-with-options.md) |
| Quantity Selector | `woocommerce/add-to-cart-with-options-quantity-selector` | `QuantitySelector` | [add-to-cart-with-options.md](add-to-cart/add-to-cart-with-options.md) |
| Variation Selector | `woocommerce/add-to-cart-with-options-variation-selector` | Not yet implemented | [add-to-cart-with-options.md](add-to-cart/add-to-cart-with-options.md) |
| Grouped Product Selector | `woocommerce/add-to-cart-with-options-grouped-product-selector` | Not yet implemented | [add-to-cart-with-options.md](add-to-cart/add-to-cart-with-options.md) |

### Utility

| Block Name | WooCommerce Block | React Component | File |
|------------|-------------------|-----------------|------|
| Store Breadcrumbs | `woocommerce/breadcrumbs` | `ProductBreadcrumbs` | [breadcrumbs.md](utility/breadcrumbs.md) |
| Catalog Sorting | `woocommerce/catalog-sorting` | `SortDropdown` | [catalog-sorting.md](utility/catalog-sorting.md) |
| Product Results Count | `woocommerce/product-results-count` | `ResultsCount` | [product-results-count.md](utility/product-results-count.md) |
| Customer Account | `woocommerce/customer-account` | `AccountMenu` | [customer-account.md](utility/customer-account.md) |
| Store Notices | `woocommerce/store-notices` | Toast notifications | [store-notices.md](utility/store-notices.md) |
| Category Title | `woocommerce/category-title` | `ArchiveHeader` | [category-title.md](utility/category-title.md) |
| Category Description | `woocommerce/category-description` | `ArchiveHeader` | [category-description.md](utility/category-description.md) |
| Accordion | `woocommerce/accordion-group` | `FAQSection` / `ProductTabs` | [accordion.md](utility/accordion.md) |
| Payment Method Icons | `woocommerce/payment-method-icons` | `PaymentIcons` | [payment-method-icons.md](utility/payment-method-icons.md) |
| Coming Soon | `woocommerce/coming-soon` | Not yet implemented | [coming-soon.md](utility/coming-soon.md) |

---

## Block Categories

| Category | Count | Description |
|----------|-------|-------------|
| `woocommerce-product-elements` | 16 | Individual product data display blocks |
| `woocommerce` | 100+ | Commerce, cart, checkout, filters, utility blocks |

---

## Block Hierarchy

### Product Display Flow
```
woocommerce/product-collection
  |-- woocommerce/product-template
  |     |-- woocommerce/product-image
  |     |-- woocommerce/product-title
  |     |-- woocommerce/product-price
  |     |-- woocommerce/product-rating
  |     |-- woocommerce/product-button
  |     |-- woocommerce/product-sale-badge
  |-- woocommerce/product-collection-no-results
```

### Single Product Flow
```
woocommerce/single-product
  |-- woocommerce/product-gallery
  |     |-- woocommerce/product-gallery-large-image
  |     |     |-- woocommerce/product-gallery-large-image-next-previous
  |     |     |-- woocommerce/product-sale-badge
  |     |-- woocommerce/product-gallery-thumbnails
  |-- woocommerce/product-title
  |-- woocommerce/product-price
  |-- woocommerce/product-rating
  |-- woocommerce/product-summary
  |-- woocommerce/add-to-cart-with-options
  |     |-- woocommerce/add-to-cart-with-options-quantity-selector
  |     |-- woocommerce/add-to-cart-with-options-variation-selector
  |-- woocommerce/product-meta
  |     |-- woocommerce/product-sku
  |-- woocommerce/product-details
  |-- woocommerce/product-reviews
  |-- woocommerce/related-products
```

### Cart Flow
```
woocommerce/cart
  |-- woocommerce/filled-cart-block
  |     |-- woocommerce/cart-items-block
  |     |     |-- woocommerce/cart-line-items-block
  |     |     |-- woocommerce/cart-cross-sells-block
  |     |-- woocommerce/cart-totals-block
  |     |     |-- woocommerce/cart-order-summary-block
  |     |     |     |-- woocommerce/cart-order-summary-heading-block
  |     |     |     |-- woocommerce/cart-order-summary-coupon-form-block
  |     |     |     |-- woocommerce/cart-order-summary-totals-block
  |     |     |           |-- woocommerce/cart-order-summary-subtotal-block
  |     |     |           |-- woocommerce/cart-order-summary-fee-block
  |     |     |           |-- woocommerce/cart-order-summary-discount-block
  |     |     |           |-- woocommerce/cart-order-summary-shipping-block
  |     |     |           |-- woocommerce/cart-order-summary-taxes-block
  |     |     |-- woocommerce/cart-express-payment-block
  |     |     |-- woocommerce/proceed-to-checkout-block
  |     |     |-- woocommerce/cart-accepted-payment-methods-block
  |-- woocommerce/empty-cart-block
```

### Mini-Cart Flow
```
woocommerce/mini-cart
  |-- woocommerce/mini-cart-contents
        |-- woocommerce/filled-mini-cart-contents-block
        |     |-- woocommerce/mini-cart-title-block
        |     |     |-- woocommerce/mini-cart-title-label-block
        |     |     |-- woocommerce/mini-cart-title-items-counter-block
        |     |-- woocommerce/mini-cart-items-block
        |     |     |-- woocommerce/mini-cart-products-table-block
        |     |-- woocommerce/mini-cart-footer-block
        |           |-- woocommerce/mini-cart-cart-button-block
        |           |-- woocommerce/mini-cart-checkout-button-block
        |-- woocommerce/empty-mini-cart-contents-block
              |-- woocommerce/mini-cart-shopping-button-block
```

### Checkout Flow
```
woocommerce/checkout
  |-- woocommerce/checkout-fields-block
  |     |-- woocommerce/checkout-express-payment-block
  |     |-- woocommerce/checkout-contact-information-block
  |     |-- woocommerce/checkout-shipping-method-block
  |     |-- woocommerce/checkout-shipping-address-block
  |     |-- woocommerce/checkout-billing-address-block
  |     |-- woocommerce/checkout-shipping-methods-block
  |     |-- woocommerce/checkout-payment-block
  |     |-- woocommerce/checkout-order-note-block
  |     |-- woocommerce/checkout-terms-block
  |     |-- woocommerce/checkout-actions-block
  |     |-- woocommerce/checkout-additional-information-block
  |     |-- woocommerce/checkout-pickup-options-block
  |-- woocommerce/checkout-totals-block
        |-- woocommerce/checkout-order-summary-block
              |-- woocommerce/checkout-order-summary-cart-items-block
              |-- woocommerce/checkout-order-summary-coupon-form-block
              |-- woocommerce/checkout-order-summary-totals-block
                    |-- woocommerce/checkout-order-summary-subtotal-block
                    |-- woocommerce/checkout-order-summary-fee-block
                    |-- woocommerce/checkout-order-summary-discount-block
                    |-- woocommerce/checkout-order-summary-shipping-block
                    |-- woocommerce/checkout-order-summary-taxes-block
```

### Filter Flow
```
woocommerce/product-filters
  |-- woocommerce/product-filter-active
  |     |-- woocommerce/product-filter-removable-chips
  |     |-- woocommerce/product-filter-clear-button
  |-- woocommerce/product-filter-attribute
  |     |-- woocommerce/product-filter-checkbox-list
  |     |-- woocommerce/product-filter-chips
  |-- woocommerce/product-filter-price
  |     |-- woocommerce/product-filter-price-slider
  |-- woocommerce/product-filter-rating
  |-- woocommerce/product-filter-status
  |     |-- woocommerce/product-filter-checkbox-list
  |     |-- woocommerce/product-filter-chips
  |-- woocommerce/product-filter-taxonomy
        |-- woocommerce/product-filter-checkbox-list
        |-- woocommerce/product-filter-chips
```

### Reviews Flow
```
woocommerce/product-reviews
  |-- woocommerce/product-reviews-title
  |-- woocommerce/product-review-template
  |     |-- woocommerce/product-review-rating
  |     |-- woocommerce/product-review-author-name
  |     |-- woocommerce/product-review-date
  |     |-- woocommerce/product-review-content
  |-- woocommerce/product-reviews-pagination
  |     |-- woocommerce/product-reviews-pagination-previous
  |     |-- woocommerce/product-reviews-pagination-numbers
  |     |-- woocommerce/product-reviews-pagination-next
  |-- woocommerce/product-review-form
```

---

## Related Documentation

- **Block Mapping Guide**: `/guidelines/wordpress-migration/block-mapping.md`
- **Existing Block Guidelines**: `/guidelines/blocks/woocommerce/*.md`
- **Component Architecture**: `/guidelines/overview-components.md`
- **Overview - Blocks**: `/guidelines/overview-blocks.md`
- **CSS Architecture**: `/guidelines/styles/section-styles.md`

---

**Last Updated:** March 3, 2026
**Total Blocks Documented:** 130+
**React Components Mapped:** 40+