# WordPress Block Theme - Block Mapping Guide

**Version:** 1.0
**Updated:** March 3, 2026
**Purpose:** Maps WooCommerce and WordPress blocks to React prototype components

---

## Overview

This guide provides a complete mapping between WordPress block theme blocks and the React prototype components. Use this when:

- Converting React components to WordPress block markup
- Understanding which React component corresponds to which WooCommerce block
- Planning template migration from prototype to WordPress theme
- Identifying implementation gaps

---

## Quick Reference: Template Mapping

### WordPress Templates to React Templates

| WordPress Template | React Template | Route |
|-------------------|----------------|-------|
| `front-page.html` | `FrontPage.tsx` | `/` |
| `archive-product.html` | `ProductArchive.tsx` | `/shop` |
| `single-product.html` | `SingleProduct.tsx` | `/product/:slug` |
| `page-cart.html` | `PageCart.tsx` | `/cart` |
| `page-checkout.html` | `PageCheckout.tsx` | `/checkout` |
| `order-confirmation.html` | `PageOrderConfirmation.tsx` | `/order-confirmation` |
| `page-account.html` | `PageAccount.tsx` | `/account` |
| `archive.html` | `BlogArchive.tsx` | `/blog` |
| `single.html` | `SinglePost.tsx` | `/blog/:slug` |
| `page-about.html` | `PageAbout.tsx` | `/about` |
| `page-contact.html` | `PageContact.tsx` | `/contact` |
| `page-faq.html` | `PageFAQ.tsx` | `/faq` |
| `404.html` | `Page404.tsx` | `*` |

### WordPress Template Parts to React Parts

| WordPress Part | React Component | Location |
|---------------|-----------------|----------|
| `header.html` | `MainHeader` | `/src/app/components/parts/Header.tsx` |
| `footer.html` | `MainFooter` | `/src/app/components/parts/Footer.tsx` |
| `sidebar.html` | `FilterSidebar` | `/components/blocks/archive/FilterSidebar.tsx` |
| `mini-cart.html` | `MiniCart` | `/src/app/components/parts/MiniCart.tsx` |

---

## WooCommerce Block to React Component Mapping

### Product Elements

| WooCommerce Block | React Component | Props | Status |
|-------------------|-----------------|-------|--------|
| `woocommerce/product-button` | `AddToCartButton` | `product`, `variant` | Implemented |
| `woocommerce/product-image` | `ProductCard` (image) | `product.image` | Implemented |
| `woocommerce/product-price` | `PriceDisplay` | `price`, `salePrice` | Implemented |
| `woocommerce/product-title` | `ProductCard` (title) | `product.name` | Implemented |
| `woocommerce/product-summary` | `ProductCard` (desc) | `product.shortDescription` | Implemented |
| `woocommerce/product-rating` | Star rating display | `product.rating` | Implemented |
| `woocommerce/product-sale-badge` | Sale badge | `product.onSale` | Implemented |
| `woocommerce/product-sku` | Meta section | `product.sku` | Implemented |
| `woocommerce/product-stock-indicator` | Stock badge | `product.stockStatus` | Implemented |
| `woocommerce/product-meta` | Meta section | `product.categories`, `tags` | Implemented |
| `woocommerce/product-description` | `ProductTabs` (desc tab) | `product.description` | Implemented |
| `woocommerce/product-details` | `ProductTabs` | `product` | Implemented |
| `woocommerce/product-specifications` | `ProductTabs` (info tab) | `product.attributes` | Implemented |
| `woocommerce/product-average-rating` | Rating display | `product.rating` | Implemented |
| `woocommerce/product-rating-stars` | Star icons | `product.rating` | Implemented |
| `woocommerce/product-rating-counter` | Review count | `product.reviewCount` | Implemented |

### Product Collections

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/product-collection` | `ProductGrid` | Implemented |
| `woocommerce/product-template` | `ProductCard` (wrapper) | Implemented |
| `woocommerce/product-collection-no-results` | Empty state | Implemented |
| `woocommerce/all-products` | `ProductGrid` | Implemented |
| `woocommerce/single-product` | `SingleProduct` template | Implemented |
| `woocommerce/featured-product` | `Hero` (product) | Implemented |
| `woocommerce/featured-category` | `Hero` (category) | Implemented |
| `woocommerce/product-best-sellers` | `ProductGrid` (filtered) | Implemented |
| `woocommerce/product-new` | `ProductGrid` (filtered) | Implemented |
| `woocommerce/product-on-sale` | `ProductGrid` (filtered) | Implemented |
| `woocommerce/product-top-rated` | `ProductGrid` (filtered) | Implemented |
| `woocommerce/product-category` | `ProductGrid` (filtered) | Implemented |
| `woocommerce/product-tag` | `ProductGrid` (filtered) | Implemented |
| `woocommerce/products-by-attribute` | `ProductGrid` (filtered) | Implemented |
| `woocommerce/handpicked-products` | `ProductGrid` (manual) | Implemented |
| `woocommerce/related-products` | `RelatedProducts` | Implemented |
| `woocommerce/product-categories` | `CategoryGrid` | Implemented |

### Product Gallery

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/product-gallery` | `ProductGallery` | Implemented |
| `woocommerce/product-gallery-large-image` | Main image display | Implemented |
| `woocommerce/product-gallery-thumbnails` | Thumbnail strip | Implemented |
| `woocommerce/product-gallery-large-image-next-previous` | Nav arrows | Implemented |
| `woocommerce/product-image-gallery` | `ProductGallery` (legacy) | Implemented |

### Cart

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/cart` | `PageCart` template | Implemented |
| `woocommerce/filled-cart-block` | `CartFilled` pattern | Implemented |
| `woocommerce/empty-cart-block` | `CartEmpty` pattern | Implemented |
| `woocommerce/cart-items-block` | `CartTable` | Implemented |
| `woocommerce/cart-line-items-block` | `CartItem` | Implemented |
| `woocommerce/cart-totals-block` | `CartTotals` | Implemented |
| `woocommerce/proceed-to-checkout-block` | Checkout button | Implemented |
| `woocommerce/cart-order-summary-block` | `CartTotals` (summary) | Implemented |
| `woocommerce/cart-express-payment-block` | N/A | Not implemented |
| `woocommerce/cart-accepted-payment-methods-block` | N/A | Not implemented |
| `woocommerce/cart-cross-sells-block` | N/A | Not implemented |

### Mini-Cart

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/mini-cart` | Header cart icon | Implemented |
| `woocommerce/mini-cart-contents` | `MiniCart` drawer | Implemented |
| `woocommerce/mini-cart-title-block` | Cart title | Implemented |
| `woocommerce/mini-cart-items-block` | Items list | Implemented |
| `woocommerce/mini-cart-footer-block` | Footer buttons | Implemented |
| `woocommerce/mini-cart-cart-button-block` | "View Cart" | Implemented |
| `woocommerce/mini-cart-checkout-button-block` | "Checkout" | Implemented |
| `woocommerce/mini-cart-shopping-button-block` | "Start Shopping" | Implemented |

### Checkout

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/checkout` | `PageCheckout` template | Implemented |
| `woocommerce/checkout-fields-block` | Form column | Implemented |
| `woocommerce/checkout-totals-block` | Summary column | Implemented |
| `woocommerce/checkout-contact-information-block` | Contact step | Implemented |
| `woocommerce/checkout-shipping-address-block` | Shipping form | Implemented |
| `woocommerce/checkout-billing-address-block` | Billing form | Implemented |
| `woocommerce/checkout-shipping-methods-block` | Shipping options | Implemented |
| `woocommerce/checkout-payment-block` | Payment methods | Implemented |
| `woocommerce/checkout-actions-block` | Place order button | Implemented |
| `woocommerce/checkout-terms-block` | Terms checkbox | Implemented |
| `woocommerce/checkout-order-note-block` | Order notes | Implemented |
| `woocommerce/checkout-express-payment-block` | N/A | Not implemented |
| `woocommerce/checkout-pickup-options-block` | N/A | Not implemented |
| `woocommerce/checkout-shipping-method-block` | N/A | Not implemented |

### Filters

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/product-filters` | `FilterSidebar` | Implemented |
| `woocommerce/product-filter-active` | `ActiveFilters` | Implemented |
| `woocommerce/product-filter-attribute` | Attribute section | Implemented |
| `woocommerce/product-filter-price` | Price range section | Implemented |
| `woocommerce/product-filter-rating` | Rating section | Implemented |
| `woocommerce/product-filter-status` | Stock status section | Implemented |
| `woocommerce/product-filter-taxonomy` | Category/tag section | Implemented |

### Reviews

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/product-reviews` | Reviews tab | Implemented |
| `woocommerce/product-review-form` | Review form | Implemented |
| `woocommerce/product-reviews-title` | Section heading | Implemented |
| `woocommerce/all-reviews` | N/A | Not implemented |
| `woocommerce/reviews-by-category` | N/A | Not implemented |

### Utility

| WooCommerce Block | React Component | Status |
|-------------------|-----------------|--------|
| `woocommerce/breadcrumbs` | `ProductBreadcrumbs` | Implemented |
| `woocommerce/catalog-sorting` | Sort dropdown | Implemented |
| `woocommerce/product-results-count` | Results count | Implemented |
| `woocommerce/customer-account` | Account icon | Implemented |
| `woocommerce/store-notices` | Toast system | Implemented |
| `woocommerce/category-title` | `ArchiveHeader` | Implemented |
| `woocommerce/category-description` | `ArchiveHeader` | Implemented |
| `woocommerce/accordion-group` | `FAQSection` | Implemented |
| `woocommerce/cart-link` | Cart icon link | Implemented |
| `woocommerce/payment-method-icons` | Payment icons | Implemented |
| `woocommerce/coming-soon` | N/A | Not implemented |
| `woocommerce/classic-shortcode` | N/A | Not applicable |
| `woocommerce/page-content-wrapper` | N/A | Not applicable |
| `woocommerce/email-content` | N/A | Not applicable |

---

## WordPress Core Block to React Mapping

These WordPress core blocks are used alongside WooCommerce blocks:

| WordPress Block | React Component | Usage |
|----------------|-----------------|-------|
| `core/post-template` | Loop/map over items | Blog archives |
| `core/post-title` | `Typography` h1/h2 | Blog post title |
| `core/post-content` | Content area | Blog post body |
| `core/post-excerpt` | Summary text | Blog card |
| `core/post-featured-image` | Featured image | Blog card |
| `core/post-date` | Date display | Blog meta |
| `core/post-author` | Author display | Blog meta |
| `core/post-terms` | Category/tag links | Blog meta |
| `core/navigation` | `Navigation` | Header nav |
| `core/site-logo` | `SiteLogo` | Header logo |
| `core/site-title` | `SiteTitle` | Header title |
| `core/search` | `SearchInput` | Header search |
| `core/query` | Data fetching | Archive queries |
| `core/query-pagination` | `Pagination` | Archive pagination |
| `core/group` | `div` wrapper | Layout grouping |
| `core/columns` | Grid layout | Multi-column layouts |
| `core/column` | Grid item | Individual column |
| `core/buttons` | Button group | CTA sections |
| `core/button` | `Button` | Individual button |

---

## CSS Class Mapping

### WooCommerce Block Classes to React Classes

| WooCommerce Class | React BEM Class | Component |
|------------------|-----------------|-----------|
| `.wc-block-components-product-*` | `.wc-block-product-card__*` | ProductCard |
| `.wc-block-cart` | `.wc-block-cart` | PageCart |
| `.wc-block-checkout` | `.wc-block-checkout` | PageCheckout |
| `.wc-block-mini-cart` | `.wc-block-mini-cart` | MiniCart |
| `.wc-block-product-filters` | `.wc-block-product-filters` | FilterSidebar |
| `.woocommerce-breadcrumb` | `.woocommerce-breadcrumb` | ProductBreadcrumbs |
| `.woocommerce-ordering` | `.woocommerce-ordering` | CatalogSorting |

---

## Implementation Gaps

### Not Yet Implemented

These WooCommerce blocks do not have React prototype equivalents:

1. **Express Payment** - Apple Pay, Google Pay integration
2. **Cart Cross-Sells** - Product recommendations in cart
3. **Pickup Options** - Local pickup location selection
4. **Coming Soon** - Coming soon page mode
5. **Email Content** - WooCommerce email templates
6. **All Reviews Page** - Standalone reviews page
7. **Reviews by Category** - Category-filtered reviews
8. **Classic Shortcode** - Legacy shortcode renderer

### Planned Implementations

| Block | Priority | Target |
|-------|----------|--------|
| Cart Cross-Sells | P1 | Q1 2026 |
| Express Payment | P2 | Q2 2026 |
| Pickup Options | P3 | Q2 2026 |
| All Reviews Page | P3 | Q2 2026 |

---

## Migration Workflow

### React to WordPress Block Theme

1. **Identify React template** - Find the template file
2. **Map to WP template** - Determine WordPress template name
3. **Convert JSX to block markup** - Replace React components with `<!-- wp:block -->` comments
4. **Map CSS classes** - Ensure WooCommerce classes are used
5. **Test in Site Editor** - Verify in WordPress block editor
6. **Validate block nesting** - Ensure parent/child relationships are correct

### Example: Product Archive

**React (ProductArchive.tsx):**
```tsx
<FilterSidebar />
<ProductGrid products={products} columns={4} />
<Pagination />
```

**WordPress (archive-product.html):**
```html
<!-- wp:woocommerce/product-filters /-->
<!-- wp:woocommerce/product-collection {"columns":4} -->
  <!-- wp:woocommerce/product-template -->
    <!-- wp:woocommerce/product-image /-->
    <!-- wp:woocommerce/product-title /-->
    <!-- wp:woocommerce/product-price /-->
    <!-- wp:woocommerce/product-rating /-->
    <!-- wp:woocommerce/product-button /-->
  <!-- /wp:woocommerce/product-template -->
  <!-- wp:woocommerce/product-collection-no-results /-->
<!-- /wp:woocommerce/product-collection -->
<!-- wp:query-pagination /-->
```

---

## Related Documentation

- **WooCommerce Blocks Index:** `/guidelines/blocks/woocommerce/README.md`
- **Component Architecture:** `/guidelines/overview-components.md`
- **CSS Architecture:** `/guidelines/styles/section-styles.md`
- **Template Overview:** `/guidelines/overview-templates.md`

---

**Last Updated:** March 3, 2026