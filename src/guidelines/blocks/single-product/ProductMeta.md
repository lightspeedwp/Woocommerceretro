# ProductMeta Component

**Type:** Block  
**Category:** Single Product  
**Location:** `/src/app/components/blocks/single-product/ProductMeta.tsx`  
**Stylesheet:** `/src/styles/blocks/product/info.css` (lines 42-77)  
**Status:** Complete  
**Moved From:** `/guidelines/blocks/ProductMeta.md`

---

## Overview

**Purpose:** Displays technical product metadata including SKU, categories, and tags in a standardized label-value format. Provides essential product information for inventory tracking, navigation, and SEO.

**WordPress Alignment:** Maps to `woocommerce/product-meta`. Shows SKU, product categories, and product tags.

---

## Props / API

```tsx
interface ProductMetaProps {
  sku: string;           // Stock Keeping Unit (e.g., "APP-001")
  categories?: string[]; // Product categories
  tags?: string[];       // Product tags
}
```

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `sku` | `string` | Yes | — | Unique product code (format: "APP-001", "ACC-042") |
| `categories` | `string[]` | No | `undefined` | Category names (row hidden if empty) |
| `tags` | `string[]` | No | `undefined` | Tag names (row hidden if empty) |

---

## Usage

```tsx
import { ProductMeta } from '@/components/blocks/single-product/ProductMeta';

<ProductMeta 
  sku="APP-001" 
  categories={['Apparel', 'Clothing']} 
  tags={['retro', 'pixel-art', 'unisex', 'best-seller']} 
/>
```

**SKU Only:** `<ProductMeta sku="APP-001" />`

---

## BEM Class Structure

```
.wc-product-meta                    // Container (flex column)
  .wc-product-meta__row             // Individual row (flex row)
    .wc-product-meta__label          // Bold label ("SKU:", "Category:", "Tags:")
    .wc-product-meta__value          // Value text or links
      .wc-product-meta__link         // Interactive category/tag link
```

### CSS Token Usage

| Property | Token | Notes |
|----------|-------|-------|
| Gap (rows) | `--wp--preset--spacing--20` | 8px between rows |
| Gap (label-value) | `--wp--preset--spacing--20` | 8px between label and value |
| Font size | `--wp--preset--font-size--small` | 14px |
| Label color | `--wp--preset--color--foreground` | Prominent label text |
| Value color | `--wp--preset--color--muted-foreground` | Muted value text |
| Label weight | `--wp--preset--font-weight--bold` | 700 |
| Label min-width | `5rem` | Fixed alignment (80px) |
| Link transition | `--wp--preset--transition--base` | Smooth hover |
| Hover color | `#8B0000` | **Hardcoded** — needs tokenization |

---

## Dark Mode

**Status: Partially complete**

Base colors use CSS variables that adapt automatically. However, the hover state uses hardcoded `#8B0000` which does not change in dark mode.

### Required Fix

```css
.dark .wc-product-meta__link:hover {
  color: var(--wp--preset--color--neon-cyan);
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.3);
}
```

**Tracked in:** `/tasks/tokens-task-list.md`

---

## Accessibility

### Current State
- Uses `<div>` for layout (semantic structure)
- Labels are `<span>` elements with descriptive text

### Required Improvements
1. **`<dl>/<dt>/<dd>` structure** — Label-value pairs should use definition lists
2. **ARIA labels** — Add `role="region" aria-label="Product Metadata"` to container
3. **Keyboard accessibility** — Category/tag links need `tabIndex={0}` or proper `<Link>` elements
4. **Touch targets** — Links should be 44x44px minimum for mobile

### Color Contrast
- Label light: **15.8:1** (AAA) | Label dark: **16.1:1** (AAA)
- Value light: **7.2:1** (AA) | Value dark: **11.4:1** (AAA)
- Hover contrast needs verification (`#8B0000` may not meet AA)

---

## Responsive Design

No media queries needed — component is inherently responsive via flexbox and text wrapping. Values wrap naturally on narrow screens while `min-width: 5rem` on labels maintains alignment.

---

## Related Components

**Used By:** `SingleProduct`, `SingleProductRetro`, `QuickView`, `ProductCard` (advanced)  
**Uses:** None (standalone)  
**Siblings:** `ProductTitle`, `ProductPrice`, `ProductRating`, `ProductSummary`, `ProductGallery`

---

## Data Integration

```tsx
const product = {
  sku: "APP-001",
  category: "Apparel",
  tags: ["retro", "pixel-art", "unisex", "best-seller"],
};

<ProductMeta 
  sku={product.sku} 
  categories={[product.category]} 
  tags={product.tags} 
/>
```

---

**Version:** 2.0 (condensed from 1.0)  
**Created:** 2026-03-15  
**Moved:** 2026-03-15 (from `/guidelines/blocks/ProductMeta.md`)  
**Lines:** ~130
