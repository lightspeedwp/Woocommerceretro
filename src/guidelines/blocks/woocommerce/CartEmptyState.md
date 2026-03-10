# CartEmptyState Pattern

**Version:** 1.0  
**Type:** Pattern (Empty State Display)  
**WordPress Mapping:** Empty Cart Block Pattern  
**File:** `/components/patterns/CartEmptyState.tsx`

---

## Overview

The CartEmptyState pattern displays a user-friendly empty state when the shopping cart contains no items. It provides helpful messaging, visual elements, and actionable CTAs to guide users back to shopping.

**Purpose:**
- Show friendly empty cart message
- Provide clear call-to-action
- Suggest next steps for users
- Maintain positive user experience

**WordPress Equivalent:**
- WooCommerce Empty Cart Template
- Empty State Block Pattern
- Cart Notice Block

---

## Component Structure

```
CartEmptyState (Pattern)
└── Empty State Container
    ├── Icon/Illustration
    ├── Heading
    ├── Description Text
    ├── CTA Button (Continue Shopping)
    └── Optional: Popular Products
```

---

## Props Interface

```typescript
interface CartEmptyStateProps {
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  showPopularProducts?: boolean;
  showRecentlyViewed?: boolean;
  icon?: React.ReactNode;
  secondaryCTA?: {
    text: string;
    link: string;
  };
}
```

---

## WordPress FSE Mapping

### Block Equivalent
```html
<!-- wp:woocommerce/cart -->
<div class="wp-block-woocommerce-cart">
  
  <!-- wp:woocommerce/empty-cart-block -->
  <div class="wc-block-cart__empty-cart">
    
    <!-- wp:image -->
    <figure class="wp-block-image">
      <img src="empty-cart-icon.svg" alt="Empty Cart" />
    </figure>
    <!-- /wp:image -->
    
    <!-- wp:heading -->
    <h2>Your cart is empty</h2>
    <!-- /wp:heading -->
    
    <!-- wp:paragraph -->
    <p>Start shopping to fill your cart</p>
    <!-- /wp:paragraph -->
    
    <!-- wp:button -->
    <div class="wp-block-button">
      <a href="/shop" class="wp-block-button__link">Continue Shopping</a>
    </div>
    <!-- /wp:button -->
    
  </div>
  <!-- /wp:woocommerce/empty-cart-block -->
  
</div>
<!-- /wp:woocommerce/cart -->
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
