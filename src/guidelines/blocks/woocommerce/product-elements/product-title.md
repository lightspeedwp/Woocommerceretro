# Product Title

**WooCommerce Block:** `woocommerce/product-title`
**Category:** `woocommerce-product-elements`
**React Component:** `ProductCard` (title portion), `Typography` (single product)
**File Location:** `/src/app/components/blocks/ProductCard.tsx`

---

## Block Definition

- **Name:** `woocommerce/product-title`
- **Description:** Display the title of a product.
- **Category:** `woocommerce-product-elements`
- **Ancestor:** `woocommerce/all-products`
- **Parent:** None
- **Supports:**
  - `color` (background, gradients, text, link)
  - `interactivity` (clientNavigation)
  - `spacing` (margin)
  - `typography` (fontSize, lineHeight)
  - `html`
- **Attributes:**
  - `align` - Text alignment
  - `headingLevel` - HTML heading level (1-6, default: 2)
  - `linkTarget` - Link target (`_self`, `_blank`)
  - `productId` - The product ID
  - `showProductLink` - Whether title links to product page

---

## WordPress CSS Classes

```css
/* Block wrapper */
.wc-block-components-product-title { }

/* As a link */
a.wc-block-components-product-title { }

/* Heading levels */
h1.wc-block-components-product-title { }
h2.wc-block-components-product-title { }
h3.wc-block-components-product-title { }
```

---

## React Component Mapping

### In ProductCard (Archive)
```tsx
<h3 className="wc-block-product-card__title">
  <a href={'/product/' + product.slug}>{product.name}</a>
</h3>
```

### In SingleProduct (Detail)
```tsx
<Typography variant="h1" className="wc-block-components-product-title">
  {product.name}
</Typography>
```

---

## Usage in Templates

### WordPress Block Theme
```html
<!-- wp:woocommerce/product-title {"headingLevel":3,"showProductLink":true} /-->
```

### React Prototype
```tsx
// Archive context (inside ProductCard)
<h3 className="wc-block-product-card__title">
  <Link to={'/product/' + product.slug}>{product.name}</Link>
</h3>

// Single product context
<Heading level="1">{product.name}</Heading>
```
