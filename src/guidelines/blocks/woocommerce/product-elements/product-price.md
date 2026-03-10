# Product Price

**WooCommerce Block:** `woocommerce/product-price`
**Category:** `woocommerce-product-elements`
**React Component:** `PriceDisplay`
**File Location:** `/src/app/components/blocks/PriceDisplay.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-price`
- **Description:** Display the price of a product.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/featured-product`, `woocommerce/single-product`, `woocommerce/product-template`, `core/post-template`
- **Parent:** None
- **Supports:**
  - `color` (background, text, link)
  - `email`
  - `interactivity`
  - `spacing` (margin, padding)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:**
  - `isDescendentOfQueryLoop` - Whether inside a query loop
  - `isDescendentOfSingleProductBlock` - Whether inside single product
  - `isDescendentOfSingleProductTemplate` - Whether inside single product template
  - `productId` - The product ID
  - `textAlign` - Text alignment

---

## WordPress CSS Classes

```css
/* Block wrapper */
.wc-block-components-product-price { }

/* Price element */
.wc-block-components-product-price__value { }

/* Regular price (when on sale) */
.wc-block-components-product-price__regular { }

/* Sale price */
.wc-block-components-product-price__sale { }

/* Price range (variable products) */
.wc-block-components-product-price__range { }

/* Strikethrough original price */
.wc-block-components-product-price del { }

/* Current/sale price */
.wc-block-components-product-price ins { }
```

---

## React Component Mapping

### Props to WP Attributes

| WP Attribute | React Prop | Type | Description |
|-------------|------------|------|-------------|
| `productId` | `price` | `number` | Regular price |
| N/A | `salePrice` | `number` | Sale price (optional) |
| N/A | `priceRange` | `{min, max}` | Variable product range |
| `textAlign` | `align` | `string` | Text alignment |

### Component Interface

```tsx
function PriceDisplay(props) {
  // props.price - Regular price
  // props.salePrice - Sale price (shows strikethrough on regular)
  // props.currency - Currency symbol (default: '$')
  // props.priceRange - Min/max for variable products
}
```

---

## Price Display Patterns

### Simple Product
```html
<span class="wc-block-components-product-price">
  <span class="wc-block-components-product-price__value">$29.99</span>
</span>
```

### Product on Sale
```html
<span class="wc-block-components-product-price">
  <del><span class="wc-block-components-product-price__regular">$39.99</span></del>
  <ins><span class="wc-block-components-product-price__sale">$29.99</span></ins>
</span>
```

### Variable Product (Price Range)
```html
<span class="wc-block-components-product-price">
  <span class="wc-block-components-product-price__range">$19.99 - $49.99</span>
</span>
```

---

## Usage in Templates

### WordPress Block Theme
```html
<!-- wp:woocommerce/product-price {"textAlign":"left"} /-->
```

### React Prototype
```tsx
import { PriceDisplay } from '@/components/blocks/PriceDisplay';

<PriceDisplay price={29.99} />
<PriceDisplay price={39.99} salePrice={29.99} />
```

---

## Dark Mode

```css
.wc-block-components-product-price__value {
  color: var(--wp--preset--color--foreground);
}

.wc-block-components-product-price del {
  color: var(--wp--preset--color--text-muted);
}

.wc-block-components-product-price ins {
  color: var(--wp--preset--color--foreground);
}
```
