# VariableProduct Template

**Last Updated:** January 27, 2026
**Status:** ✅ Production Ready
**Category:** Template
**Component:** `VariableProduct`
**Location:** `/src/app/components/templates/VariableProduct.tsx`
**Route:** `/variable-product/:id`

---

## 1. Overview

The `VariableProduct` template is a specialized version of the product detail page designed for products with variations (e.g., Size, Color, Material). It handles complex state management for attribute selection, dynamic pricing, stock status updates, and image switching based on the selected variation.

It mirrors the functionality of WooCommerce's variable product type within a WordPress Block Theme context.

## 2. WordPress Parity

| React Template | WordPress Template |
|----------------|-------------------|
| `VariableProduct.tsx` | `single-product.html` (with variation logic) |

In a real WordPress FSE theme, this would often be handled by the same `single-product.html` template using the `Single Product` block, which internally handles variable product logic. However, for this prototype, it is a distinct template to demonstrate the complex interaction states.

## 3. Key Features

- **Attribute Selection:** Dynamic dropdowns for product attributes.
- **Variation Matching:** Logic to find the matching variation based on selected attributes.
- **Dynamic Pricing:** Updates price range or specific price based on selection.
- **Dynamic Stock:** Shows stock status (In Stock, Out of Stock, Low Stock) for specific variations.
- **Image Switching:** Updates the main gallery image when a variation with a specific image is selected.
- **Add to Cart Validation:** Disables the button until a valid variation is selected.
- **Clear Selection:** Ability to reset attributes.

## 4. Component Structure

```tsx
<Layout>
  <Container>
    <Breadcrumb />
    
    {/* Main Grid */}
    <div className="woocommerce-variable-product__layout">
      {/* Left Column */}
      <ProductGallery />
      
      {/* Right Column */}
      <div className="woocommerce-product-info">
        <ProductTitle />
        <Rating />
        <Price />
        <ShortDescription />
        
        {/* Variation Logic */}
        <VariationSelectors />
        <StockStatus />
        <AddToCart />
        
        <ProductMeta />
      </div>
    </div>
    
    {/* Tabs */}
    <ProductTabsSection />
    
    {/* Related */}
    <RelatedProductsSection />
  </Container>
</Layout>
```

## 5. State Management

The template manages several pieces of local state:

- `selectedAttributes`: Object mapping attribute names to selected values.
- `selectedVariation`: The currently matched variation object (or null).
- `quantity`: Current quantity selection.
- `activeTab`: Current active tab in the info section.
- `currentImageIndex`: Index of the currently displayed gallery image.

## 6. CSS Architecture

Uses BEM-style classes defined in `/src/styles/globals.css`:

- `.woocommerce-variable-product`
- `.woocommerce-product-gallery`
- `.woocommerce-product-info`
- `.woocommerce-variation-selectors`
- `.woocommerce-quantity-input`

## 7. Data Requirements

Expects a `VariableProduct` object with:
- `attributes`: Array of available attributes and options.
- `variations`: Array of variation objects, each containing:
  - `attributes`: Map of attribute values for this variation.
  - `price`, `salePrice`, `stockQuantity`, `image`, `sku`.

## 8. Accessibility

- **Forms:** All selectors have associated labels.
- **ARIA:** Breadcrumbs and Tabs use proper ARIA roles.
- **Focus:** Interactive elements have visible focus states.
- **Feedback:** Error messages (e.g., "Out of stock") are clearly visible.
