# Catalog Sorting

**WooCommerce Block:** `woocommerce/catalog-sorting`
**Category:** `woocommerce`
**React Component:** Sort dropdown in archive templates
**File Location:** `/src/app/templates/ProductArchive.tsx`

---

## Block Definition

- **Name:** `woocommerce/catalog-sorting`
- **Description:** Enable customers to change the sorting order of the products.
- **Supports:**
  - `color` (text, background)
  - `interactivity` (clientNavigation)
  - `typography` (fontSize)
- **Attributes:** `fontSize`, `useLabel`

---

## WordPress CSS Classes

```css
.woocommerce-ordering { }
.woocommerce-ordering__label { }
.woocommerce-ordering__select { }
```

---

## Sort Options

| Value | Label |
|-------|-------|
| `menu_order` | Default sorting |
| `popularity` | Sort by popularity |
| `rating` | Sort by average rating |
| `date` | Sort by latest |
| `price` | Sort by price: low to high |
| `price-desc` | Sort by price: high to low |

---

## React Component Mapping

```tsx
<div className="woocommerce-ordering">
  <label className="woocommerce-ordering__label">Sort by:</label>
  <select className="woocommerce-ordering__select" value={sortBy} onChange={handleSort}>
    <option value="menu_order">Default sorting</option>
    <option value="popularity">Sort by popularity</option>
    <option value="rating">Sort by average rating</option>
    <option value="date">Sort by latest</option>
    <option value="price">Sort by price: low to high</option>
    <option value="price-desc">Sort by price: high to low</option>
  </select>
</div>
```
