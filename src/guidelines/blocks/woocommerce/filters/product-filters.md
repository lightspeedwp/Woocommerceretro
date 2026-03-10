# Product Filters

**WooCommerce Block:** `woocommerce/product-filters`
**Category:** `woocommerce`
**React Component:** `FilterSidebar`
**File Location:** `/src/app/components/blocks/archive/FilterSidebar.tsx`

---

## Overview

The Product Filters block is the modern, unified filtering system in WooCommerce. It replaces legacy individual filter blocks (`active-filters`, `attribute-filter`, `price-filter`, `rating-filter`, `stock-filter`) with a single composable block.

---

## Block Definition

- **Name:** `woocommerce/product-filters`
- **Description:** Let shoppers filter products displayed on the page.
- **Category:** `woocommerce`
- **Supports:**
  - `align`
  - `color` (background, button, heading, text, enableContrastChecker)
  - `inserter`
  - `interactivity`
  - `layout` (default, allowEditing)
  - `multiple`
  - `spacing` (blockGap)
  - `typography` (fontSize)

---

## Block Hierarchy

```
woocommerce/product-filters
|-- woocommerce/product-filter-active                    # Active filters display
|   |-- woocommerce/product-filter-removable-chips       # Removable filter chips
|   |-- woocommerce/product-filter-clear-button          # Clear all button
|-- woocommerce/product-filter-attribute                 # Attribute filter (color, size, etc.)
|   |-- woocommerce/product-filter-checkbox-list         # Checkbox display
|   |-- woocommerce/product-filter-chips                 # Chip display
|-- woocommerce/product-filter-price                     # Price filter
|   |-- woocommerce/product-filter-price-slider          # Price range slider
|-- woocommerce/product-filter-rating                    # Rating filter
|-- woocommerce/product-filter-status                    # Stock status filter
|   |-- woocommerce/product-filter-checkbox-list
|   |-- woocommerce/product-filter-chips
|-- woocommerce/product-filter-taxonomy                  # Taxonomy filter (categories, brands)
    |-- woocommerce/product-filter-checkbox-list
    |-- woocommerce/product-filter-chips
```

---

## Child Block Definitions

### Active Filters
- **Name:** `woocommerce/product-filter-active`
- **Ancestor:** `woocommerce/product-filters`
- **Supports:** `interactivity`, `spacing` (margin, padding, blockGap)
- **React:** `ActiveFilters` component

### Attribute Filter
- **Name:** `woocommerce/product-filter-attribute`
- **Ancestor:** `woocommerce/product-filters`
- **Supports:** `color` (text, background), `interactivity`, `spacing`, `typography`
- **Attributes:** `attributeId`, `displayStyle`, `hideEmpty`, `queryType`, `selectType`, `showCounts`, `sortOrder`
- **React:** `FilterSidebar` attribute section

### Price Filter
- **Name:** `woocommerce/product-filter-price`
- **Ancestor:** `woocommerce/product-filters`
- **Supports:** `interactivity`, `html`
- **React:** `FilterSidebar` price range section

### Price Slider
- **Name:** `woocommerce/product-filter-price-slider`
- **Ancestor:** `woocommerce/product-filter-price`
- **Supports:** `color` (background, text), `interactivity`
- **Attributes:** `inlineInput`, `showInputFields`, `slider`, `sliderHandle`, `sliderHandleBorder`
- **React:** Price range slider input

### Rating Filter
- **Name:** `woocommerce/product-filter-rating`
- **Ancestor:** `woocommerce/product-filters`
- **Supports:** `color` (text, background), `interactivity`
- **Attributes:** `minRating`, `showCounts`
- **React:** `FilterSidebar` rating section

### Status Filter
- **Name:** `woocommerce/product-filter-status`
- **Ancestor:** `woocommerce/product-filters`
- **Supports:** `color`, `interactivity`, `spacing`, `typography`
- **Attributes:** `displayStyle`, `hideEmpty`, `showCounts`
- **React:** `FilterSidebar` stock status section

### Taxonomy Filter
- **Name:** `woocommerce/product-filter-taxonomy`
- **Ancestor:** `woocommerce/product-filters`
- **Supports:** `color`, `interactivity`, `spacing`, `typography`
- **Attributes:** `displayStyle`, `hideEmpty`, `showCounts`, `sortOrder`, `taxonomy`
- **React:** `FilterSidebar` category/tag section

### Display Components (Shared)

#### Checkbox List
- **Name:** `woocommerce/product-filter-checkbox-list`
- **Used by:** attribute, status, taxonomy filters
- **Attributes:** `labelElement`, `optionElement`, `optionElementBorder`, `optionElementSelected`

#### Chips
- **Name:** `woocommerce/product-filter-chips`
- **Used by:** attribute, taxonomy, status filters
- **Attributes:** `chipBackground`, `chipBorder`, `chipText`, `selectedChipBackground`, `selectedChipBorder`, `selectedChipText`

#### Removable Chips
- **Name:** `woocommerce/product-filter-removable-chips`
- **Used by:** active filters
- **Supports:** `interactivity`, `layout`

#### Clear Button
- **Name:** `woocommerce/product-filter-clear-button`
- **Used by:** active filters

---

## WordPress CSS Classes

```css
/* Filters wrapper */
.wc-block-product-filters { }

/* Active filters */
.wc-block-product-filter-active { }
.wc-block-product-filter-active__chips { }
.wc-block-product-filter-active__clear { }

/* Attribute filter */
.wc-block-product-filter-attribute { }
.wc-block-product-filter-attribute__heading { }
.wc-block-product-filter-attribute__list { }

/* Price filter */
.wc-block-product-filter-price { }
.wc-block-product-filter-price-slider { }
.wc-block-product-filter-price-slider__range { }
.wc-block-product-filter-price-slider__handle { }

/* Rating filter */
.wc-block-product-filter-rating { }

/* Stock status filter */
.wc-block-product-filter-status { }

/* Taxonomy filter */
.wc-block-product-filter-taxonomy { }

/* Shared display components */
.wc-block-product-filter-checkbox-list { }
.wc-block-product-filter-checkbox-list__item { }
.wc-block-product-filter-checkbox-list__checkbox { }
.wc-block-product-filter-checkbox-list__label { }
.wc-block-product-filter-checkbox-list__count { }

.wc-block-product-filter-chips { }
.wc-block-product-filter-chips__chip { }
.wc-block-product-filter-chips__chip--selected { }
```

---

## React Component Mapping

```tsx
function FilterSidebar(props) {
  return React.createElement('aside', { className: 'wc-block-product-filters' },
    // Active filters
    React.createElement(ActiveFilters, { filters: props.activeFilters }),
    // Price range
    React.createElement(PriceRangeFilter, { min: 0, max: 500 }),
    // Categories
    React.createElement(TaxonomyFilter, { taxonomy: 'category', items: props.categories }),
    // Attributes (size, color)
    React.createElement(AttributeFilter, { attribute: 'color', options: props.colors }),
    React.createElement(AttributeFilter, { attribute: 'size', options: props.sizes }),
    // Rating
    React.createElement(RatingFilter, null),
    // Stock status
    React.createElement(StatusFilter, null)
  );
}
```

---

## Accessibility

- Filter sections use `role="group"` with `aria-labelledby`
- Checkboxes have proper labels
- Price slider uses `aria-valuemin`, `aria-valuemax`, `aria-valuenow`
- Active filter chips have `aria-label` for removal
- Filter changes announced via `aria-live="polite"`
