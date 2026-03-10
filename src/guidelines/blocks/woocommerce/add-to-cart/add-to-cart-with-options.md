# Add to Cart with Options (Beta)

**WooCommerce Block:** `woocommerce/add-to-cart-with-options`
**Category:** `woocommerce-product-elements`
**React Component:** `AddToCartButton` (variable product support)
**File Location:** `/src/app/components/blocks/AddToCartButton.tsx`

---

## Overview

The Add to Cart with Options block provides a customizable "Add to cart" area optimized for different product types (simple, variable, grouped). It uses child blocks for modularity.

---

## Block Hierarchy

```
woocommerce/add-to-cart-with-options
|-- woocommerce/add-to-cart-with-options-quantity-selector     # Quantity input
|-- woocommerce/add-to-cart-with-options-variation-selector    # Variable product options
|   |-- woocommerce/add-to-cart-with-options-variation-selector-attribute
|       |-- woocommerce/add-to-cart-with-options-variation-selector-attribute-name
|       |-- woocommerce/add-to-cart-with-options-variation-selector-attribute-options
|-- woocommerce/add-to-cart-with-options-variation-description # Variation description
|-- woocommerce/add-to-cart-with-options-grouped-product-selector  # Grouped product
    |-- woocommerce/add-to-cart-with-options-grouped-product-item
        |-- woocommerce/add-to-cart-with-options-grouped-product-item-label
        |-- woocommerce/add-to-cart-with-options-grouped-product-item-selector
```

---

## Child Block Definitions

### Quantity Selector
- **Name:** `woocommerce/add-to-cart-with-options-quantity-selector`
- **Ancestor:** `woocommerce/add-to-cart-with-options`
- **Supports:** `interactivity`
- **React:** `QuantitySelector` component

### Variation Selector
- **Name:** `woocommerce/add-to-cart-with-options-variation-selector`
- **Ancestor:** `woocommerce/add-to-cart-with-options`
- **Supports:** `interactivity`
- **React:** Variation dropdown/swatch selector

### Variation Selector Attribute
- **Name:** `woocommerce/add-to-cart-with-options-variation-selector-attribute`
- **Ancestor:** `woocommerce/add-to-cart-with-options-variation-selector`
- **Description:** Template for attribute name and options

### Attribute Name
- **Name:** `woocommerce/add-to-cart-with-options-variation-selector-attribute-name`
- **Supports:** `color`, `spacing`, `typography`

### Attribute Options
- **Name:** `woocommerce/add-to-cart-with-options-variation-selector-attribute-options`
- **Attributes:** `optionStyle` (dropdown, buttons, swatches)

### Variation Description
- **Name:** `woocommerce/add-to-cart-with-options-variation-description`
- **Ancestor:** `woocommerce/add-to-cart-with-options`
- **Supports:** `color`, `dimensions`, `spacing`, `typography`

### Grouped Product Selector
- **Name:** `woocommerce/add-to-cart-with-options-grouped-product-selector`
- **Ancestor:** `woocommerce/add-to-cart-with-options`
- **Description:** Display grouped products that can be added to cart

### Grouped Product Item
- **Name:** `woocommerce/add-to-cart-with-options-grouped-product-item`
- **Ancestor:** `grouped-product-selector`
- **Description:** Individual grouped product row

### Grouped Product Item Label
- **Name:** `woocommerce/add-to-cart-with-options-grouped-product-item-label`
- **Supports:** `color`, `layout`, `spacing`, `typography`

### Grouped Product Item Selector
- **Name:** `woocommerce/add-to-cart-with-options-grouped-product-item-selector`
- **Description:** Checkbox, button, or link depending on product type

---

## WordPress CSS Classes

```css
/* Add to cart wrapper */
.wc-block-add-to-cart-with-options { }

/* Quantity */
.wc-block-add-to-cart-with-options__quantity { }

/* Variation selector */
.wc-block-add-to-cart-with-options__variation-selector { }
.wc-block-add-to-cart-with-options__attribute { }
.wc-block-add-to-cart-with-options__attribute-name { }
.wc-block-add-to-cart-with-options__attribute-options { }

/* Variation description */
.wc-block-add-to-cart-with-options__variation-description { }

/* Grouped products */
.wc-block-add-to-cart-with-options__grouped-products { }
.wc-block-add-to-cart-with-options__grouped-product-item { }
.wc-block-add-to-cart-with-options__grouped-product-label { }
.wc-block-add-to-cart-with-options__grouped-product-selector { }
```

---

## React Component Mapping

```tsx
function AddToCartWithOptions(props) {
  var product = props.product;

  if (product.type === 'variable') {
    return React.createElement('div', { className: 'wc-block-add-to-cart-with-options' },
      // Variation selectors (color, size, etc.)
      product.attributes.map(function(attr) {
        return React.createElement(VariationSelector, { key: attr.name, attribute: attr });
      }),
      // Variation description (changes with selection)
      React.createElement('div', { className: 'wc-block-add-to-cart-with-options__variation-description' }),
      // Quantity + Add to cart
      React.createElement(QuantitySelector, null),
      React.createElement(AddToCartButton, { product: product })
    );
  }

  if (product.type === 'grouped') {
    return React.createElement('div', { className: 'wc-block-add-to-cart-with-options' },
      React.createElement(GroupedProductSelector, { products: product.groupedProducts }),
      React.createElement(AddToCartButton, { product: product })
    );
  }

  // Simple product
  return React.createElement('div', { className: 'wc-block-add-to-cart-with-options' },
    React.createElement(QuantitySelector, null),
    React.createElement(AddToCartButton, { product: product })
  );
}
```
