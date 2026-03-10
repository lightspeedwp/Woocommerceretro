# Customer Account

**WooCommerce Block:** `woocommerce/customer-account`
**Category:** `woocommerce`
**React Component:** `AccountMenu` in header
**File Location:** `/src/app/components/parts/Header.tsx`

---

## Block Definition

- **Name:** `woocommerce/customer-account`
- **Description:** A block that allows customers to log in and out of their accounts.
- **Supports:**
  - `align`
  - `color` (background, text)
  - `interactivity` (clientNavigation)
  - `spacing` (margin, padding)
  - `typography` (fontSize)
- **Attributes:**
  - `displayStyle` - Display mode (`icon_only`, `text_only`, `icon_and_text`)
  - `iconClass` - Custom icon class
  - `iconStyle` - Icon style variant

---

## WordPress CSS Classes

```css
.wc-block-customer-account { }
.wc-block-customer-account__icon { }
.wc-block-customer-account__text { }
.wc-block-customer-account--logged-in { }
.wc-block-customer-account--logged-out { }
```

---

## React Component Mapping

```tsx
<Link to="/account" className="wc-block-customer-account" aria-label="My account">
  <UserIcon className="wc-block-customer-account__icon" />
  <span className="wc-block-customer-account__text">Account</span>
</Link>
```
