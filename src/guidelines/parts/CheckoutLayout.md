# CheckoutLayout Template

**Category**: Templates  
**Route**: `/checkout`  
**WordPress**: `checkout-layout.php`  
**Version**: 2.0 (BEM Refactor)

---

## 1. Purpose

A specialized, distraction-free layout wrapper for the checkout flow. It removes the standard header/footer and navigation to optimize for conversion.

---

## 2. Structure

```
CheckoutLayout (Part)
  └─ Container (wp-checkout-layout)
      ├─ Header (wp-checkout-header)
      │   └─ Logo + Secure Badge
      ├─ Main (wp-checkout-layout__main)
      │   └─ {children} (Checkout Steps)
      └─ Footer (wp-checkout-footer)
          ├─ Copyright
          ├─ Legal Links
          └─ Trust Badges
```

---

## 3. CSS Architecture

Uses BEM-style classes defined in `/src/styles/globals.css`.

| Element | Class Name | Description |
|---------|------------|-------------|
| **Container** | `.wp-checkout-layout` | Main wrapper with light background |
| **Header** | `.wp-checkout-header` | Minimal header |
| **Main** | `.wp-checkout-layout__main` | Content area |
| **Footer** | `.wp-checkout-footer` | Minimal footer |

---

## 4. Components

- **CheckoutHeader**: Displays only the logo and a "Secure Checkout" badge.
- **CheckoutFooter**: Displays copyright, legal links, and payment icons.

---

## 5. Responsive Behavior

- **Mobile**: Stacked layout.
- **Desktop**: Full width layout with centered container.
