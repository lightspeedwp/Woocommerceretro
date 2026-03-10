# CartTable Component

**Type**: Pattern (Reusable Section)  
**Location**: `/components/patterns/CartTable.tsx`  
**Category**: Commerce/Cart

---

## Purpose

The CartTable displays the complete list of cart items in a table format with quantity controls, remove options, and item totals. It's the primary component for the cart page.

**Use CartTable for:**
- Cart page (`/cart`)
- Detailed cart editing
- Desktop cart view
- Review before checkout

**Do NOT use CartTable for:**
- MiniCart drawer (use MiniCart component)
- Quick cart preview (use MiniCart)
- Checkout review (use OrderSummary)
- Mobile cart (consider simplified layout)

---

## Component API

### Props Interface

```tsx
interface CartTableProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart?: () => void;
  showContinueShopping?: boolean;
  continueShoppingLink?: string;
  loading?: boolean;
  className?: string;
}
```

---

## Layout Variations

### Desktop Table Layout

```
┌──────────────────────────────────────────────────────────────┐
│ Product              | Price   | Quantity  | Total    | [×] │
├──────────────────────────────────────────────────────────────┤
│ [Img] Product 1      | $99.99  | [- 2 +]   | $199.98  | [×] │
│       Size: Large    |         |           |          |     │
├──────────────────────────────────────────────────────────────┤
│ [Img] Product 2      | $49.99  | [- 1 +]   | $49.99   | [×] │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Card Layout

```
┌─────────────────────────────────┐
│ [Img]  Product 1           [×]  │
│        Size: Large              │
│        [- 2 +]          $199.98 │
│        $99.99 each              │
├─────────────────────────────────┤
│ [Img]  Product 2           [×]  │
│        [- 1 +]          $49.99  │
│        $49.99 each              │
└─────────────────────────────────┘
```

---

## Accessibility Requirements

### Table Semantics

```tsx
// ✅ Use proper table structure
<table>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Total</th>
      <th scope="col">
        <span className="sr-only">Remove</span>
      </th>
    </tr>
  </thead>
  <tbody>
    {/* Rows */}
  </tbody>
</table>
```
