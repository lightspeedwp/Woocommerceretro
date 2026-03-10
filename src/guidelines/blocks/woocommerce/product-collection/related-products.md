# Related Products

**WooCommerce Block:** `woocommerce/related-products`
**Category:** `woocommerce`
**React Component:** `RelatedProducts`
**File Location:** `/src/app/components/blocks/single-product/RelatedProducts.tsx`

---

## Block Definition

- **Name:** `woocommerce/related-products`
- **Description:** Display related products.
- **Category:** `woocommerce`
- **Supports:**
  - `align`
  - `interactivity` (clientNavigation)
  - `inserter`
  - `reusable`

---

## WordPress CSS Classes

```css
.wp-block-woocommerce-related-products { }
.wc-block-related-products { }
.wc-block-related-products__heading { }
.wc-block-related-products__grid { }
```

---

## React Component Mapping

```tsx
function RelatedProducts(props) {
  var products = props.products;

  return React.createElement('section', { className: 'wc-block-related-products' },
    React.createElement(Heading, { level: '2', className: 'wc-block-related-products__heading' }, 'Related Products'),
    React.createElement('div', { className: 'wc-block-related-products__grid' },
      products.map(function(product) {
        return React.createElement(ProductCard, { key: product.id, product: product });
      })
    )
  );
}
```

---

## Usage in Templates

Appears at the bottom of the `SingleProduct` template, showing products from the same category.

### WordPress Block Theme
```html
<!-- wp:woocommerce/related-products -->
  <!-- wp:woocommerce/product-template -->
    <!-- wp:woocommerce/product-image /-->
    <!-- wp:woocommerce/product-title /-->
    <!-- wp:woocommerce/product-price /-->
    <!-- wp:woocommerce/product-button /-->
  <!-- /wp:woocommerce/product-template -->
<!-- /wp:woocommerce/related-products -->
```
