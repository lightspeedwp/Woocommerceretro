# Featured Product

**WooCommerce Block:** `woocommerce/featured-product`
**Category:** `woocommerce`
**React Component:** `Hero` pattern (product variant)
**File Location:** `/src/app/components/patterns/Hero.tsx`

---

## Block Definition

- **Name:** `woocommerce/featured-product`
- **Description:** Highlight a product or variation.
- **Category:** `woocommerce`
- **Supports:**
  - `align` (full, wide)
  - `ariaLabel`
  - `color` (background, text)
  - `filter` (duotone)
  - `interactivity` (clientNavigation)
  - `multiple`
  - `spacing` (padding)
  - `html`
- **Attributes:**
  - `alt` - Image alt text
  - `contentAlign` - Content alignment (`left`, `center`, `right`)
  - `dimRatio` - Background overlay opacity (0-100)
  - `focalPoint` - Image focal point ({x, y})
  - `hasParallax` - Enable parallax effect
  - `imageFit` - Image fit mode (`cover`, `contain`)
  - `isRepeated` - Repeat background image
  - `linkText` - CTA button text
  - `mediaId` - Media library image ID
  - `mediaSrc` - Image source URL
  - `minHeight` - Minimum block height
  - `overlayColor` - Overlay color name
  - `overlayGradient` - Overlay gradient
  - `productId` - The featured product ID

---

## WordPress CSS Classes

```css
.wp-block-woocommerce-featured-product { }
.wc-block-featured-product { }
.wc-block-featured-product__wrapper { }
.wc-block-featured-product__title { }
.wc-block-featured-product__description { }
.wc-block-featured-product__price { }
.wc-block-featured-product__link { }
```

---

## React Component Mapping

The Featured Product block maps to the Hero pattern with product data:

```tsx
<Hero
  title={product.name}
  description={product.shortDescription}
  image={product.image}
  ctaText="Shop Now"
  ctaLink={'/product/' + product.slug}
  overlay={true}
  overlayOpacity={50}
/>
```

---

## Related Block: Featured Category

`woocommerce/featured-category` has identical structure but uses category data instead of product data:
- **Attributes:** `categoryId` instead of `productId`, `previewCategory` instead of `previewProduct`
- **CSS:** `.wc-block-featured-category` instead of `.wc-block-featured-product`
