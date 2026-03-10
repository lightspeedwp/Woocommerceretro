# PageCart Template

**Last Updated:** February 23, 2026  
**Status:** ✅ Production Ready (Funky Redesign — Phase 5)  
**Category:** Template  
**Component:** `PageCart`  
**Location:** `/src/app/components/templates/PageCart.tsx`  
**Route:** `/cart`

> **Funky CSS:** `/src/styles/sections/cart-checkout-funky.css` (680+ lines)  
> **Treatments:** Glassmorphism cart totals panel, glow item rows, gradient checkout CTA, neon quantity controls, floating orbs, gradient dividers.

---

## 1. Overview

The shopping cart page is the central hub for managing selected products before checkout. It provides functionality to adjust quantities, remove items, apply coupons, and view cost breakdowns including shipping and taxes.

It connects directly to the global `CartContext` for state management.

## 2. WordPress Parity

| React Template | WordPress Template |
|----------------|-------------------|
| `PageCart.tsx` | `page-cart.html` / `woocommerce/cart/cart.php` |

## 3. Key Features

- **Cart Item Management:** Uses `CartItem` block for each row.
- **Quantity Selector:** Uses reusable `QuantitySelector` component.
- **Dynamic Totals:** Real-time calculation of subtotal, discount, tax, and total.
- **Coupon System:** Collapsible coupon input form.
- **Empty State:** Visual feedback when cart is empty, with "New in Store" recommendations.
- **Cross-Selling:** "Recently Viewed" section to encourage additional purchases.
- **FAQ:** Common questions to reduce cart abandonment.

## 4. Component Structure

```tsx
<Layout>
  <Container>
    <Heading>Cart</Heading>
    
    <div className="wp-cart-layout">
      {/* Left Column */}
      <div className="wp-cart-layout__items">
        <CartHeader />
        {items.map(item => <CartItem key={item.id} ... />)}
      </div>
      
      {/* Right Column */}
      <div className="wp-cart-layout__sidebar">
        <CartTotals />
      </div>
    </div>
    
    <RecentlyViewed />
    <FAQSection />
  </Container>
</Layout>
```

## 5. CSS Architecture

Uses BEM-style classes defined in `/src/styles/globals.css` (or `cart.css` imported there):

- `.wp-cart-layout`: Main grid container.
- `.wp-cart-item`: Individual item row.
- `.wp-cart-totals`: Summary card.
- `.wp-cart-empty`: Empty state wrapper.

## 6. Accessibility

- **Quantity Inputs:** Accessible increment/decrement buttons with `aria-label`.
- **Remove Buttons:** Distinct "Remove item" buttons.
- **Focus Management:** Coupon toggle manages focus visibility.
- **Live Updates:** Totals update immediately without page reload (client-side state).

## 7. Responsive Behavior

- **Mobile:**
  - Cart items stack (image left, content right).
  - Quantity selector and remove button accessible on touch.
  - Totals section moves to bottom.
- **Desktop:**
  - 2-column layout (Items left, Totals sticky right).
  - Table-like header for items.

## 8. Data Requirements

Relies on `CartContext` which provides:
- `items`: Array of cart items.
- `updateQuantity`: Function.
- `removeFromCart`: Function.
- `totals`: Calculated values.