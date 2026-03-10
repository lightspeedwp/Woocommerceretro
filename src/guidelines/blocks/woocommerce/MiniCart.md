# MiniCart Component

**Type**: Part (Global Region)  
**Location**: `/components/parts/MiniCart.tsx`  
**Category**: Commerce/Cart

---

## Purpose

The MiniCart is a slide-out drawer that displays cart contents, provides quick cart management, and allows users to proceed to checkout without leaving the current page.

**Use MiniCart for:**
- Quick cart preview
- Adding/removing items without page navigation
- Viewing cart totals
- Quick access to checkout
- Mobile cart interface

---

## Visual Structure

```
┌─────────────────────────┐
│ Cart (3)            [×] │ ← Header with count and close
├─────────────────────────┤
│                         │
│ ┌─────────────────────┐ │
│ │ [Img] Product 1   × │ │ ← Cart item with remove
│ │       Qty: 2        │ │
│ │       $99.99        │ │
│ └─────────────────────┘ │
│                         │
│ [Scrollable area]       │
│                         │
├─────────────────────────┤
│ Subtotal:      $249.97  │ ← Totals (sticky bottom)
│ Shipping:       $10.00  │
│ Total:         $259.97  │
│                         │
│ [View Cart]             │ ← Action buttons
│ [Checkout]              │
└─────────────────────────┘
```

---

## Component API

```tsx
interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
