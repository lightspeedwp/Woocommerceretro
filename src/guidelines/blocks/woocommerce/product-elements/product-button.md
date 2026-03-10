# Add to Cart Button

**WooCommerce Block:** `woocommerce/product-button`
**Category:** `woocommerce-product-elements`
**React Component:** `AddToCartButton`
**File Location:** `/src/app/components/blocks/AddToCartButton.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-button`
- **Description:** Display a call to action button which either adds the product to the cart, or links to the product page.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/all-products`, `woocommerce/single-product`, `core/post-template`, `woocommerce/product-template`
- **Parent:** None
- **Supports:**
  - `align` (full, wide)
  - `color` (background, text, link)
  - `email`
  - `interactivity`
  - `spacing` (margin, padding)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:**
  - `isDescendentOfQueryLoop` - Whether inside a query loop
  - `isDescendentOfSingleProductBlock` - Whether inside a single product block
  - `productId` - The product ID
  - `textAlign` - Text alignment
  - `width` - Button width

---

## WordPress CSS Classes

```css
/* Block wrapper */
.wp-block-button.wc-block-components-product-button { }

/* Button element */
.wp-block-button__link.wc-block-components-product-button__button { }

/* Loading state */
.wc-block-components-product-button__button--loading { }

/* Added to cart state */
.wc-block-components-product-button__button--added { }
```

---

## React Component Mapping

### Props to WP Attributes

| WP Attribute | React Prop | Type | Description |
|-------------|------------|------|-------------|
| `productId` | `product` | `Product` | Product object (contains id) |
| `textAlign` | `className` | `string` | Alignment via CSS class |
| `width` | `fullWidth` | `boolean` | Full-width button |

### Component Interface

```tsx
function AddToCartButton(props) {
  // props.product - Product object
  // props.onAddToCart - Callback after adding to cart
  // props.variant - 'primary' | 'secondary' | 'ghost'
  // props.showQuantity - Whether to show quantity selector
  // props.fullWidth - Full-width button
}
```

---

## WordPress Block Styles

### Default Style
Standard WooCommerce "Add to Cart" button with product-type awareness:
- Simple products: Direct add to cart
- Variable products: "Select options" link to product page
- Grouped products: "View products" link
- External products: "Buy product" link to external URL

### Fill Style (`is-style-fill`)
Solid background button (default WooCommerce behavior).

### Outline Style (`is-style-outline`)
Border-only button variant.

---

## Usage in Templates

### WordPress Block Theme
```html
<!-- In product-collection template -->
<!-- wp:woocommerce/product-button /-->

<!-- With alignment -->
<!-- wp:woocommerce/product-button {"textAlign":"center","width":100} /-->
```

### React Prototype
```tsx
import { AddToCartButton } from '@/components/blocks/AddToCartButton';

// In ProductCard
<AddToCartButton product={product} />

// In SingleProduct template
<AddToCartButton product={product} showQuantity={true} fullWidth={true} />
```

---

## Accessibility

- `aria-label` includes product name: "Add [Product Name] to cart"
- Loading state announced via `aria-live="polite"`
- Disabled state uses `aria-disabled="true"`
- Focus management after successful add (focus returns to button)

---

## Dark Mode

Handled via CSS variables. No conditional dark classes needed.

```css
.wc-block-components-product-button__button {
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
}
```
