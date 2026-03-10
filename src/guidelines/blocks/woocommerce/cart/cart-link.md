# Cart Link

**WooCommerce Block:** `woocommerce/cart-link`
**Category:** `woocommerce`
**React Component:** Header cart icon
**File Location:** `/src/app/components/parts/Header.tsx`

---

## Block Definition

- **Name:** `woocommerce/cart-link`
- **Description:** Display a link to the cart.
- **Category:** `woocommerce`
- **Supports:**
  - `color` (background, link, text)
  - `interactivity` (clientNavigation)
  - `spacing` (padding)
  - `typography` (fontSize)
  - `html`, `multiple`
- **Attributes:**
  - `cartIcon` - Icon style to display
  - `content` - Link text content
  - `isPreview` - Editor preview mode

---

## WordPress CSS Classes

```css
.wc-block-cart-link { }
.wc-block-cart-link__icon { }
.wc-block-cart-link__count { }
.wc-block-cart-link__text { }
```

---

## React Component Mapping

```tsx
// Simple cart link (alternative to mini-cart trigger)
<Link to="/cart" className="wc-block-cart-link" aria-label="View cart">
  <CartIcon className="wc-block-cart-link__icon" />
  <span className="wc-block-cart-link__count">{cart.itemCount}</span>
</Link>
```

---

## Difference from Mini-Cart

| Feature | Cart Link | Mini-Cart |
|---------|-----------|-----------|
| Behaviour | Navigates to cart page | Opens drawer |
| Complexity | Simple link | Full drawer with items |
| Use case | Traditional cart flow | Quick cart preview |
