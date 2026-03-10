# QuantitySelector Component

**Type**: Block (Functional Unit)  
**Location**: `/components/blocks/QuantitySelector.tsx`  
**Category**: Form Controls

---

## Purpose

The QuantitySelector is a specialized input control for selecting product quantities. It provides increment/decrement buttons alongside a numeric input, ensuring users can only select valid quantities.

**Use QuantitySelector for:**
- Product quantity selection on product pages
- Cart item quantity adjustment
- Quick add-to-cart forms
- Bulk order forms

---

## Component API

### Props Interface

```tsx
interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;              // Default: 1
  max?: number;              // Default: 99
  step?: number;             // Default: 1
  disabled?: boolean;        // Default: false
  size?: 'small' | 'medium' | 'large';  // Default: 'medium'
  showLabel?: boolean;       // Default: false
  label?: string;            // Default: 'Quantity'
  className?: string;
}
```

---

## Size Variants

| Size | Height | Button Width | Input Width | Icon Size | Use Case |
|------|--------|--------------|-------------|-----------|----------|
| `small` | 32px | 32px | 48px | 14px | Cart line items, compact layouts |
| `medium` | 40px | 40px | 64px | 16px | Product pages, standard forms |
| `large` | 48px | 48px | 80px | 18px | Mobile-first designs, emphasis |

---

## Accessibility Requirements

### ARIA Labels

```tsx
// ✅ Button labels
<button aria-label="Decrease quantity">
  <Minus />
</button>

<button aria-label="Increase quantity">
  <Plus />
</button>

// ✅ Input label
<input
  type="number"
  aria-label="Quantity"
  value={value}
/>
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
