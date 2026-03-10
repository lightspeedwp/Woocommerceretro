# ShopWithSidebar Template

**Category**: Templates  
**Route**: `/shop/filtered`  
**WordPress**: `archive-product-sidebar.html`  
**Version**: 2.6 (Funky Redesign — Phase 4)

---

## Purpose

Classic eCommerce product archive with a persistent left sidebar for filtering. Desktop shows sidebar inline; mobile uses a slide-out drawer. Supports grid/list view toggle, sorting, and multi-facet filtering.

---

## Structure

```
Layout (Part)
  |-- Breadcrumbs (Part)
  |-- Shop Archive Header
  |     |-- Title (h1): "All Products"
  |     |-- Product count
  |-- Toolbar (shop-sidebar__toolbar)
  |     |-- Mobile filter toggle button (SlidersHorizontal icon)
  |     |-- Active filter chips (removable)
  |     |-- Sort select dropdown
  |     |-- View mode toggle (Grid / List)
  |-- 2-Column Layout (shop-sidebar__layout)
  |     |-- Left: Filter Sidebar (ShopFilterSidebar)
  |     |     |-- Category checkboxes
  |     |     |-- Price range slider
  |     |     |-- Rating filter
  |     |     |-- Brand checkboxes
  |     |     |-- In-stock toggle
  |     |-- Right: Product Grid
  |           |-- ProductCard instances
  |           |-- Empty state (when no matches)
  |-- Mobile Filter Drawer (overlay + slide-in panel)
        |-- Same ShopFilterSidebar content
        |-- Apply / Reset buttons
```

---

## Data Sources

| Data | Import | File |
|------|--------|------|
| Products | `products` | `@/data/products` |

---

## State Management

```tsx
const [filters, setFilters] = useState<FilterValues>({
  categories: [],
  priceRange: [0, 1000],
  ratings: [],
  brands: [],
  inStock: false
});
const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
const [sortBy, setSortBy] = useState<string>('featured');
const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
```

- Filters are applied client-side against the `products` array
- Price range filters using min/max comparison
- In-stock filter is a boolean toggle
- Sorting mutates the filtered array before rendering

---

## Funky Treatments

| Element | Treatment | CSS Class |
|---------|-----------|-----------|
| Filter sidebar | Glassmorphism panel, neon active filter indicators | via ShopFilterSidebar |
| Product cards | Glow hover effect (via ProductCard CSS) | `.wc-block-product-card` |
| View toggle | Neon active indicator on selected view | custom toggle styles |
| Sort select | Neon focus ring | `.info-contact__input`-like focus |
| Empty state | Glass panel, gradient icon accent | glass panel styles |
| Mobile drawer | Glass background, neon close button | drawer + funky glass |
| Active chips | Neon border, interactive remove button | filter chip styles |

**CSS File:** `/src/styles/sections/shop-funky.css` (1850+ lines)

---

## Filter Interface

```tsx
interface FilterValues {
  categories: string[];
  priceRange: [number, number];
  ratings: number[];
  brands: string[];
  inStock: boolean;
}
```

---

## Accessibility

- Filter sidebar has proper form semantics (fieldset/legend pattern)
- Checkboxes and radio buttons are keyboard accessible
- Price range slider supports keyboard input
- Active filter chips have accessible remove buttons with labels
- Mobile drawer traps focus when open
- View toggle uses `aria-pressed` for current state
- Sort select uses native `<select>` element
- Focus-visible states on all interactive elements
- 44x44px minimum touch targets

---

## Dark Mode

Handled via CSS variables:
- Sidebar background shifts to surface color
- Product cards maintain consistent dark styling
- Active filter indicators adjust glow intensity
- Toolbar and sort controls adapt colors
- All text meets WCAG AA contrast requirements

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<768px) | No visible sidebar, filter button opens drawer, 2-column product grid |
| Tablet (768-1024px) | Optional sidebar visibility, 2-3 column product grid |
| Desktop (>1024px) | Persistent left sidebar (280px), 3-column product grid |

---

## Composed Components

| Component | Type | Import |
|-----------|------|--------|
| `Layout` | Part | `../parts/Layout` |
| `Container` | Common | `../common/Container` |
| `Typography` | Common | `../common/Typography` |
| `Breadcrumbs` | Part | `../parts/Breadcrumbs` |
| `ProductCard` | Block | `../blocks/product/ProductCard` |
| `ShopFilterSidebar` | Pattern | `../patterns/ShopFilterSidebar` |

---

## Related Templates

- `ArchiveProduct` — Main shop archive (no sidebar, simpler grid)
- `SingleProduct` — Product detail page
- `ProductSearchResults` — Search results (similar grid layout)
- `VariableProduct` — Variable product detail page
