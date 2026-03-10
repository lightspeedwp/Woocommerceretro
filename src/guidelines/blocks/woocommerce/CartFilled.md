# CartFilled Pattern

**Version:** 1.0  
**Type:** Pattern (Cart Display)  
**WordPress Mapping:** WooCommerce Cart Block Pattern  
**File:** `/components/patterns/CartFilled.tsx`

---

## Overview

The CartFilled pattern displays a populated shopping cart with line items, quantities, pricing, and cart totals. It provides full cart management functionality including item removal, quantity updates, and checkout navigation.

**Purpose:**
- Display cart items with full details
- Allow quantity adjustments
- Show pricing and totals
- Provide checkout navigation
- Handle cart updates and removals

**WordPress Equivalent:**
- WooCommerce Cart Block
- Cart Table Pattern
- Cart Totals Block
- Cart Items List

---

## Component Structure

```
CartFilled (Pattern)
└── Cart Container
    ├── Cart Items Section
    │   └── CartLineItem × N
    ├── Cart Totals Section
    │   ├── Subtotal
    │   ├── Shipping
    │   ├── Tax
    │   ├── Discount (optional)
    │   └── Total
    └── Checkout Actions
        ├── Continue Shopping Link
        ├── Update Cart Button
        └── Proceed to Checkout Button
```

---

## Props Interface

```typescript
interface CartFilledProps {
  items: CartItem[];
  totals: CartTotals;
  onQuantityChange: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onUpdateCart?: () => void;
  isUpdating?: boolean;
  showShippingCalculator?: boolean;
  showCouponForm?: boolean;
}
```

---

## WordPress FSE Mapping

### Block Equivalent
```html
<!-- wp:woocommerce/cart -->
<div class="wp-block-woocommerce-cart">
  
  <!-- wp:woocommerce/filled-cart-block -->
  <div class="wc-block-cart">
    
    <!-- wp:woocommerce/cart-items-block -->
    <table class="wc-block-cart-items">
      <!-- ... -->
    </table>
    <!-- /wp:woocommerce/cart-items-block -->
    
    <!-- wp:woocommerce/cart-totals-block -->
    <div class="wc-block-cart-totals">
      <!-- ... -->
    </div>
    <!-- /wp:woocommerce/cart-totals-block -->
    
  </div>
  <!-- /wp:woocommerce/filled-cart-block -->
  
</div>
<!-- /wp:woocommerce/cart -->
```

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Full cart item display
- Quantity management
- Cart totals calculation
- Responsive design
- Dark mode support
