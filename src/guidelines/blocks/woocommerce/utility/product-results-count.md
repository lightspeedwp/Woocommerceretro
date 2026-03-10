# Product Results Count

**WooCommerce Block:** `woocommerce/product-results-count`
**Category:** `woocommerce`
**React Component:** Results count display in archive templates

---

## Block Definition

- **Name:** `woocommerce/product-results-count`
- **Description:** Display the number of products on the archive page or search result page.
- **Supports:** `color` (text, background), `interactivity` (clientNavigation), `typography` (fontSize)

---

## WordPress CSS Classes

```css
.woocommerce-result-count { }
```

---

## React Component Mapping

```tsx
<p className="woocommerce-result-count">
  Showing 1-12 of {totalProducts} results
</p>
```
