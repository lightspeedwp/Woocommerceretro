# Order Confirmation Blocks

**Version:** 1.1  
**Category:** WooCommerce / Order Confirmation  
**Template:** `/pages/shop/OrderConfirmation.tsx`

---

## Overview

The Order Confirmation page is displayed after successful checkout and contains 8 distinct WooCommerce blocks that provide order details, downloadable content, and optional account creation for guest users.

**Key Characteristics:**
- Background: `#f9f9f9` (light gray)
- Container: `max-w-[1368px]`
- Gap between blocks: `48px` (3rem)
- Conditional rendering based on user login state

---

## Block Architecture

### Template Structure

```
OrderConfirmation (Template)
├── OrderStatus (Block)
├── OrderSummary (Block)
├── DownloadsSection (Block - Conditional)
├── AccountCreation (Block - Conditional)
├── OrderDetails (Block)
├── AddressDetails (Block)
├── AdditionalFields (Block - Conditional)
└── AdditionalInformation (Block - Conditional)
```

---

## User State Variations

### Guest User (Logged Out)
```
✓ OrderStatus
✓ OrderSummary
✗ DownloadsSection
✓ AccountCreation ← Unique to Guest
✓ OrderDetails (simpler order)
✓ AddressDetails
✓ AdditionalFields
✓ AdditionalInformation
```

### Logged In User
```
✓ OrderStatus
✓ OrderSummary
✓ DownloadsSection ← Unique to Logged In
✗ AccountCreation
✓ OrderDetails (full order)
✓ AddressDetails
✓ AdditionalFields
✓ AdditionalInformation
```

---

## Accessibility

- All blocks use semantic HTML
- Proper heading hierarchy (h1 → h2)
- Color contrast ratios meet WCAG 2.1 AA
- Links have visible focus states
- Tables have proper header associations
- Form buttons have descriptive labels
