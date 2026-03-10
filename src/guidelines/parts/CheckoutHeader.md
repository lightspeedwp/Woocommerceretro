# CheckoutHeader Component

**Type**: Part (Global Region)  
**Location**: `/components/parts/CheckoutHeader.tsx`  
**Category**: Navigation/Checkout

---

## Purpose

The CheckoutHeader is a simplified, distraction-free header specifically designed for the checkout flow. It removes unnecessary navigation and focuses user attention on completing their purchase.

**Use CheckoutHeader for:**
- Checkout pages
- Payment pages
- Order confirmation pages
- Any sensitive transaction pages

**Do NOT use CheckoutHeader for:**
- Standard pages (use Header/MainHeader)
- Product pages
- Cart page (use MainHeader)
- Account pages

---

## Component API

### Props Interface

```tsx
interface CheckoutHeaderProps {
  showBackLink?: boolean;
  backLinkText?: string;
  backLinkUrl?: string;
  showSecureBadge?: boolean;
  showSteps?: boolean;
  currentStep?: number;
  totalSteps?: number;
  className?: string;
}
```

---

**Last Updated:** December 2024  
**Status:** ✅ Production Ready
