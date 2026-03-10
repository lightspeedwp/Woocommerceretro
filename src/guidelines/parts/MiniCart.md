# MiniCart Component

**Type**: Part (Global Region)  
**Location**: `/src/app/components/parts/MiniCart.tsx`  
**Category**: Commerce / Cart  
**Version**: 2.6 (Funky Redesign — Phase 2)

---

## Purpose

Slide-out shopping cart drawer accessible from the header on all pages. Displays cart items with quantity controls, subtotal, and checkout actions. The primary quick-access interface for cart management without leaving the current page.

**MiniCart appears on:** All pages (via MainHeader trigger button)

---

## Component Structure

```
Drawer (block/layout)
  |-- DrawerTrigger
  |     |-- Shopping bag icon button
  |     |-- Badge (item count, neon gradient)
  |-- DrawerContent (side="right")
        |-- DrawerHeader
        |     |-- Title: "Cart (N)" or "Cart"
        |     |-- Close button (X icon)
        |     |-- Description (sr-only)
        |-- Content Area
        |     |-- Empty State (when no items)
        |     |     |-- Message: "Your cart is currently empty"
        |     |     |-- "Start shopping" CTA
        |     |-- Item List (when items exist)
        |           |-- Cart Item × N
        |                 |-- Product image (ImageWithFallback)
        |                 |-- Product name (Link to product page)
        |                 |-- Brand (if available)
        |                 |-- Price
        |                 |-- Quantity selector (−/+)
        |                 |-- Remove button
        |-- Footer (when items exist)
              |-- Subtotal (label + amount)
              |-- Shipping notice text
              |-- "View cart" button (Link to /cart)
              |-- "Checkout" button (Link to /checkout)
```

---

## State & Context

```tsx
const { items, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart();
const [isOpen, setIsOpen] = useState(false);
```

- Cart state from `CartContext` (global)
- Local `isOpen` state for drawer visibility
- Quantity updates happen immediately (optimistic)
- Removing last item shows empty state

---

## BEM Classes

| Element | Class | Notes |
|---------|-------|-------|
| Trigger button | `.woocommerce-mini-cart__trigger` | + `funky-spring-hover` |
| Badge | `.woocommerce-mini-cart__badge--funky` | Neon gradient |
| Drawer | `.woocommerce-mini-cart--funky` | Glass panel |
| Header | `.woocommerce-mini-cart__header--funky` | Gradient divider |
| Close button | `.woocommerce-mini-cart__close` | |
| Content | `.woocommerce-mini-cart__content` | Scrollable |
| Empty state | `.woocommerce-mini-cart__empty` | |
| Item | `.woocommerce-mini-cart-item` | |
| Item image | `.woocommerce-mini-cart-item__image--funky` | Glow hover |
| Item name | `.woocommerce-mini-cart-item__name` | Link to product |
| Item price | `.woocommerce-mini-cart-item__price` | |
| Quantity | `.woocommerce-quantity-selector` | Shared block |
| Remove | `.woocommerce-mini-cart-item__remove` | + `funky-spring-hover` |
| Footer | `.woocommerce-mini-cart__footer--funky` | Glass surface |
| Subtotal | `.woocommerce-mini-cart__subtotal-amount--funky` | Neon glow in dark |
| Actions | `.woocommerce-mini-cart__actions` | View cart + Checkout |

---

## Funky Treatments

| Element | Treatment | CSS Source |
|---------|-----------|-----------|
| Drawer panel | Glassmorphism, `backdrop-blur(16px)` | `parts-funky.css` |
| Badge | Neon gradient bg (pink→cyan) | `parts-funky.css` |
| Header divider | Gradient pseudo-element (pink→cyan) | `parts-funky.css` |
| Item images | Subtle glow on hover | `parts-funky.css` |
| Subtotal | Neon glow text in dark mode | `parts-funky.css` |
| Footer | Glass surface with blurred backdrop | `parts-funky.css` |
| Checkout CTA | Primary neon glow button | `parts-funky.css` |
| Remove/CTA | Spring hover animation | `.funky-spring-hover` |

**CSS File:** `/src/styles/blocks/theme/parts-funky.css`

---

## Composed Components

| Component | Type | Import |
|-----------|------|--------|
| `Drawer` (+ sub-components) | Block | `../blocks/layout/Drawer` |
| `Button` | Block | `../blocks/design/Buttons` |
| `Typography` | Common | `../common/Typography` |
| `ImageWithFallback` | Utility | `../figma/ImageWithFallback` |

---

## Accessibility

- Drawer uses `role="dialog"` with `aria-label`
- Close button has `aria-label="Close cart"`
- Quantity buttons have descriptive `aria-label` per item
- Remove buttons have descriptive `aria-label` per item
- Focus trap inside drawer when open
- Escape key closes drawer
- Badge count announced to screen readers
- `DrawerDescription` is `sr-only` for context

---

## Dark Mode

Handled via CSS variables:
- Drawer glass panel adjusts bg opacity for dark
- Badge gradient remains consistent (pink→cyan)
- Subtotal gets neon cyan glow text-shadow
- Footer glass effect intensifies in dark
- All text meets WCAG AA contrast

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<640px) | Full-width drawer, touch-friendly quantity buttons |
| Tablet (640-1024px) | ~380px wide drawer |
| Desktop (>1024px) | ~400px wide drawer, right-side slide |

---

## Related Components

- `PageCart` — Full cart page (linked via "View cart")
- `PageCheckout` — Checkout page (linked via "Checkout")
- `CartContext` — Global cart state provider
- `MainHeader` — Parent that renders MiniCart trigger
