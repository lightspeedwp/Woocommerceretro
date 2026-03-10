# Legacy Filter Blocks

**Status:** Deprecated in favour of `woocommerce/product-filters`
**React Component:** `FilterSidebar` (shared with modern filters)

---

## Overview

These blocks are the older, standalone filter controls. They are being replaced by the unified `woocommerce/product-filters` system but remain for backward compatibility.

---

## Legacy Blocks

### Active Filters Controls
- **Name:** `woocommerce/active-filters`
- **Description:** Display the currently active filters.
- **Supports:** `color` (text, background), `interactivity`, `html`
- **Attributes:** `displayStyle`, `headingLevel`
- **CSS:** `.wc-block-active-filters`
- **Replacement:** `woocommerce/product-filter-active`

### Filter by Attribute Controls
- **Name:** `woocommerce/attribute-filter`
- **Description:** Enable customers to filter by selecting one or more attributes.
- **Supports:** `color` (text, background), `html`, `interactivity`
- **Attributes:** `attributeId`, `displayStyle`, `headingLevel`, `queryType`, `selectType`, `showCounts`, `showFilterButton`
- **CSS:** `.wc-block-attribute-filter`
- **Replacement:** `woocommerce/product-filter-attribute`

### Filter by Price Controls
- **Name:** `woocommerce/price-filter`
- **Description:** Enable customers to filter by choosing a price range.
- **Supports:** `color` (text, background), `interactivity`, `html`
- **Attributes:** `headingLevel`, `inlineInput`, `showFilterButton`, `showInputFields`
- **CSS:** `.wc-block-price-filter`
- **Replacement:** `woocommerce/product-filter-price`

### Filter by Rating Controls
- **Name:** `woocommerce/rating-filter`
- **Description:** Enable customers to filter by rating.
- **Supports:** `color` (background, button, text), `interactivity`, `html`
- **Attributes:** `displayStyle`, `selectType`, `showCounts`, `showFilterButton`
- **CSS:** `.wc-block-rating-filter`
- **Replacement:** `woocommerce/product-filter-rating`

### Filter by Stock Controls
- **Name:** `woocommerce/stock-filter`
- **Description:** Enable customers to filter by stock status.
- **Supports:** `color` (background, button, text), `interactivity`, `html`
- **Attributes:** `displayStyle`, `headingLevel`, `selectType`, `showCounts`, `showFilterButton`
- **CSS:** `.wc-block-stock-filter`
- **Replacement:** `woocommerce/product-filter-status`

### Filter Block Wrapper
- **Name:** `woocommerce/filter-wrapper`
- **Supports:** `interactivity` (clientNavigation)
- **Attributes:** `filterType`, `heading`
- **Description:** Generic wrapper for filter blocks

---

## Migration Path

| Legacy Block | Modern Replacement |
|-------------|-------------------|
| `woocommerce/active-filters` | `woocommerce/product-filter-active` |
| `woocommerce/attribute-filter` | `woocommerce/product-filter-attribute` |
| `woocommerce/price-filter` | `woocommerce/product-filter-price` |
| `woocommerce/rating-filter` | `woocommerce/product-filter-rating` |
| `woocommerce/stock-filter` | `woocommerce/product-filter-status` |
| `woocommerce/filter-wrapper` | `woocommerce/product-filters` |

All legacy blocks are mapped to the same `FilterSidebar` React component.
