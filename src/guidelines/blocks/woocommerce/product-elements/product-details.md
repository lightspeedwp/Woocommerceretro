# Product Details

**WooCommerce Block:** `woocommerce/product-details`
**Category:** `woocommerce-product-elements`
**React Component:** `ProductTabs`
**File Location:** `/src/app/components/blocks/single-product/ProductTabs.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-details`
- **Description:** Display a product's description, attributes, and reviews.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** None
- **Parent:** None
- **Supports:**
  - `align` (full, wide)
  - `interactivity` (clientNavigation)
- **Attributes:**
  - `align` - Block alignment
  - `hideTabTitle` - Whether to hide tab headings

---

## WordPress CSS Classes

```css
.wc-block-components-product-details { }
.wc-block-components-product-details__tabs { }
.wc-block-components-product-details__tab { }
.wc-block-components-product-details__tab--active { }
.wc-block-components-product-details__panel { }
```

---

## Tab Structure

This block renders a tabbed interface containing:

1. **Description** - Full product description (`woocommerce/product-description`)
2. **Additional Information** - Product attributes/specifications (`woocommerce/product-specifications`)
3. **Reviews** - Product reviews (`woocommerce/product-reviews`)

---

## React Component Mapping

```tsx
function ProductTabs(props) {
  var product = props.product;
  var tabs = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'additional', label: 'Additional Information', content: renderSpecs(product) },
    { id: 'reviews', label: 'Reviews (' + product.reviewCount + ')', content: renderReviews(product) }
  ];

  return React.createElement('div', { className: 'wc-block-components-product-details' },
    React.createElement('div', { className: 'wc-block-components-product-details__tabs' },
      tabs.map(function(tab) { /* render tab buttons */ })
    ),
    React.createElement('div', { className: 'wc-block-components-product-details__panel' },
      /* render active tab content */
    )
  );
}
```

---

## Accessibility

- Tabs use `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Active tab: `aria-selected="true"`
- Tab panels: `aria-labelledby` references tab button
- Arrow key navigation between tabs
