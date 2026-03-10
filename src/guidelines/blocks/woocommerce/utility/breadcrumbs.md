# Store Breadcrumbs

**WooCommerce Block:** `woocommerce/breadcrumbs`
**Category:** `woocommerce`
**React Component:** `ProductBreadcrumbs`
**File Location:** `/src/app/components/blocks/single-product/ProductBreadcrumbs.tsx`

---

## Block Definition

- **Name:** `woocommerce/breadcrumbs`
- **Description:** Enable customers to keep track of their location within the store and navigate back to parent pages.
- **Supports:**
  - `align` (full, wide)
  - `color` (link, text, background)
  - `interactivity` (clientNavigation)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:** `align`, `contentJustification`, `fontSize`

---

## WordPress CSS Classes

```css
.woocommerce-breadcrumb { }
.woocommerce-breadcrumb__separator { }
.woocommerce-breadcrumb__link { }
.woocommerce-breadcrumb__current { }
```

---

## React Component Mapping

```tsx
function ProductBreadcrumbs(props) {
  var items = props.items; // [{label, href}, ...]

  return React.createElement('nav', {
    className: 'woocommerce-breadcrumb',
    'aria-label': 'Breadcrumb'
  },
    items.map(function(item, index) {
      var isLast = index === items.length - 1;
      if (isLast) {
        return React.createElement('span', {
          key: index,
          className: 'woocommerce-breadcrumb__current',
          'aria-current': 'page'
        }, item.label);
      }
      return React.createElement(React.Fragment, { key: index },
        React.createElement(Link, {
          to: item.href,
          className: 'woocommerce-breadcrumb__link'
        }, item.label),
        React.createElement('span', {
          className: 'woocommerce-breadcrumb__separator',
          'aria-hidden': 'true'
        }, ' / ')
      );
    })
  );
}
```

---

## Accessibility

- Uses `nav` element with `aria-label="Breadcrumb"`
- Current page marked with `aria-current="page"`
- Separators marked `aria-hidden="true"`
