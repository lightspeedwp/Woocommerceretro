# API Reference

**Last Updated:** 2026-03-06  
**Scope:** All contexts, hooks, and services in the WooCommerce FSE prototype

---

## Contexts

### CartContext

**File:** `/src/app/contexts/CartContext.tsx`  
**Hook:** `useCart()`  
**Provider:** `<CartProvider>`  
**Persistence:** `localStorage('cart')`

| Method / Property | Type | Description |
|---|---|---|
| `items` | `Array` | Current cart items (`{ product, quantity }`) |
| `addToCart(product, quantity?)` | `Function` | Add product (default qty: 1). Increments if exists. |
| `removeFromCart(productId)` | `Function` | Remove product by ID |
| `updateQuantity(productId, qty)` | `Function` | Set exact quantity. Removes if qty <= 0. |
| `clearCart()` | `Function` | Empty entire cart |
| `getCartTotal()` | `Function -> number` | Subtotal (uses salePrice if available) |
| `getCartCount()` | `Function -> number` | Total item count |
| `isInCart(productId)` | `Function -> boolean` | Check if product is in cart |
| `applyCoupon(code)` | `Function -> { success, message }` | Apply coupon code |
| `removeCoupon()` | `Function` | Remove applied coupon |
| `appliedCoupon` | `Object or null` | Currently applied coupon |
| `getDiscount()` | `Function -> number` | Calculate discount amount |
| `shippingCountry` | `string` | Current shipping country code |
| `setShippingCountry(code)` | `Function` | Set shipping country |
| `getShippingCost()` | `Function -> number` | Calculate shipping (free above threshold) |
| `getFinalTotal()` | `Function -> number` | `subtotal - discount + shipping` |

**Mock Coupons:** `SAVE10` (10%), `SAVE20` (20%, min 100), `WELCOME` (15 fixed), `FREESHIP`, `SUMMER25` (25%, max 50)

---

### ThemeContext

**File:** `/src/app/contexts/ThemeContext.tsx`  
**Hook:** `useTheme()`  
**Provider:** `<ThemeProvider>`  
**Persistence:** `localStorage('theme-style', 'theme-mode')`

| Method / Property | Type | Description |
|---|---|---|
| `theme` | `{ style, mode }` | Current theme state |
| `theme.style` | `string` | One of: `default`, `blue`, `purple`, `green`, `ocean`, `forest`, `sunset` |
| `theme.mode` | `string` | `light` or `dark` |
| `setThemeStyle(style)` | `Function` | Change theme style |
| `toggleMode()` | `Function` | Toggle light/dark mode |
| `isDark` | `boolean` | Shorthand for `theme.mode === 'dark'` |

**Auto-detection:** Respects `prefers-color-scheme: dark` on first visit.

---

### WishlistContext

**File:** `/src/app/contexts/WishlistContext.tsx`  
**Hook:** `useWishlist()`  
**Provider:** `<WishlistProvider>`  
**Persistence:** `localStorage('wishlist')`

| Method / Property | Type | Description |
|---|---|---|
| `items` | `Array` | Wishlisted products |
| `addToWishlist(product)` | `Function` | Add product (no duplicates) |
| `removeFromWishlist(productId)` | `Function` | Remove product by ID |
| `isInWishlist(productId)` | `Function -> boolean` | Check if product is wishlisted |
| `getWishlistCount()` | `Function -> number` | Total wishlisted items |
| `clearWishlist()` | `Function` | Clear entire wishlist |

---

### ComparisonContext

**File:** `/src/app/contexts/ComparisonContext.tsx`  
**Hook:** `useComparison()`  
**Provider:** `<ComparisonProvider>`  
**Persistence:** `localStorage('productComparison')`  
**Max items:** 4

| Method / Property | Type | Description |
|---|---|---|
| `comparisonItems` | `Array` | Products being compared |
| `addToComparison(product)` | `Function` | Add product (max 4, shows toast) |
| `removeFromComparison(productId)` | `Function` | Remove product by ID |
| `isInComparison(productId)` | `Function -> boolean` | Check if product is in comparison |
| `clearComparison()` | `Function` | Clear all comparison items |

---

### QuickViewContext

**File:** `/src/app/contexts/QuickViewContext.tsx`  
**Hook:** `useQuickView()`  
**Provider:** `<QuickViewProvider>`

| Method / Property | Type | Description |
|---|---|---|
| `product` | `Object or null` | Currently viewed product |
| `isOpen` | `boolean` | Whether quick view modal is open |
| `openQuickView(product)` | `Function` | Open modal with product. Locks body scroll. |
| `closeQuickView()` | `Function` | Close modal. Restores scroll after 300ms. |

---

## Custom Hooks

### useDebounce(value, delay?)

**File:** `/src/app/hooks/useDebounce.ts`

Debounces a value by the specified delay (default: 500ms).

```tsx
var searchTerm = useDebounce(inputValue, 300);
```

---

### useIsMobile()

**File:** `/src/app/hooks/useMobile.ts`  
**Breakpoint:** 768px

Returns `true` when viewport width < 768px. Uses `matchMedia` with event listener.

```tsx
var isMobile = useIsMobile();
```

---

### useClickOutside(ref, handler, ignoreRefs?)

**File:** `/src/app/hooks/useClickOutside.ts`

Calls `handler` when a click occurs outside the referenced element. Optionally ignores clicks on `ignoreRefs` elements.

```tsx
useClickOutside(menuRef, function() { setOpen(false); }, [triggerRef]);
```

---

### usePrefersReducedMotion()

**File:** `/src/app/hooks/usePrefersReducedMotion.ts`

Returns `true` when user has `prefers-reduced-motion: reduce` enabled.

```tsx
var prefersReducedMotion = usePrefersReducedMotion();
```

---

### useRecentSearches()

**File:** `/src/app/hooks/useRecentSearches.ts`  
**Persistence:** `localStorage('recentSearches')`

Manages recent search terms (max 10).

| Method / Property | Type | Description |
|---|---|---|
| `recentSearches` | `Array<string>` | Recent search terms |
| `addSearch(term)` | `Function` | Add term to history |
| `removeSearch(term)` | `Function` | Remove specific term |
| `clearSearches()` | `Function` | Clear all history |

---

### useRecentlyViewed()

**File:** `/src/app/hooks/useRecentlyViewed.ts`  
**Persistence:** `localStorage('recentlyViewed')`

Tracks recently viewed products (max 12).

| Method / Property | Type | Description |
|---|---|---|
| `recentlyViewed` | `Array` | Recently viewed products |
| `addRecentlyViewed(product)` | `Function` | Add product to history |
| `clearRecentlyViewed()` | `Function` | Clear history |

---

### useVariantSelection(product)

**File:** `/src/app/hooks/useVariantSelection.ts`

Manages product variant selection (color, size).

| Method / Property | Type | Description |
|---|---|---|
| `selectedColor` | `string` | Currently selected color |
| `selectedSize` | `string` | Currently selected size |
| `setSelectedColor(color)` | `Function` | Change color selection |
| `setSelectedSize(size)` | `Function` | Change size selection |
| `currentPrice` | `number` | Price based on current variant |
| `isAvailable` | `boolean` | Whether current variant is in stock |

---

## Services

### A/B Testing

**File:** `/src/app/services/abTest.ts`

Pre-configured tests for CTA optimization with persistent user assignment and conversion tracking.

### Form Submission

**File:** `/src/app/services/formSubmission.ts`

Handles enquiry/contact form submissions with validation, loading states, and retry logic.

### Instagram Feed

**File:** `/src/app/services/instagram.ts`

Mock Instagram feed data for social proof sections.
