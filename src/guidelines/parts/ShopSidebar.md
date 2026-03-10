# ShopSidebar Component

**Category**: Parts  
**Location**: `/src/app/components/parts/ShopSidebar.tsx`  
**WordPress Mapping**: WooCommerce Product Filter Sidebar  
**Version**: 2.6 (Funky Redesign — Phase 4)

---

## Purpose

Filter sidebar for the shop/product archive page. Provides expandable filter groups for category, brand, color, price range, and ratings. Used alongside the product grid in `ShopWithSidebar` template.

> **Note:** The primary filter sidebar in use is `ShopFilterSidebar` (pattern). This `ShopSidebar` (part) is an earlier implementation. Both serve similar purposes — check which one the current templates import.

---

## Structure

```
ShopSidebar
├── Active Filters Display:
│   ├── Active filter chips (removable)
│   └── "Clear All" button
├── Filter Groups (FilterGroup sub-component):
│   ├── Category (checkboxes from SHOP_FILTERS data)
│   ├── Brand (checkboxes)
│   ├── Color (checkboxes)
│   ├── Price Range (range slider)
│   └── Rating (star-based filter)
```

---

## Data Sources

| Data | Import | File |
|------|--------|------|
| Filter options | `SHOP_FILTERS` | `@/data/filters` |

---

## Internal State

```tsx
const [activeFilters, setActiveFilters] = useState([
  { type: 'Category', value: 'Tshirts' }
]);
```

---

## Composed Components

| Component | Type | Import |
|-----------|------|--------|
| `Typography` | Common | `../common/Typography` |
| `Checkbox` | Block/Forms | `../blocks/forms/Checkbox` |

---

## Funky Treatments

| Element | Treatment | CSS Class |
|---------|-----------|-----------|
| Sidebar panel | Glassmorphism background | `.wp-filter-sidebar` |
| Active filter chips | Neon border on hover, interactive remove | chip styles |
| Checkboxes | Neon checked state | via Checkbox component |
| Price slider | Neon accent track | via range input styles |
| Rating stars | Neon fill on active | via star styles |

**CSS:** `/src/styles/sections/shop-funky.css`

---

## BEM Classes

```css
.wp-filter-section { }
.wp-filter-section__trigger { }
.wp-filter-section__content { }
```

---

## Accessibility

- Filter groups use heading hierarchy (h4 titles)
- Checkboxes are keyboard accessible
- Active filter chips have accessible remove buttons
- Price range slider supports keyboard input

---

## Dark Mode

Handled via CSS variables — sidebar background, text, borders all adapt automatically.
