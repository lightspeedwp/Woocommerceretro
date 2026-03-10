# Account Patterns

**Category**: Patterns  
**Usage**: Inside `AccountLayout`  
**Version**: 2.0 (BEM Refactor)

---

## 1. AccountDashboard

**Component**: `Dashboard.tsx`  
**BEM Block**: `.wp-account-dashboard`

Overview page displaying a welcome message and quick links to other sections.

### Structure
```html
<div class="wp-account-dashboard">
  <div class="wp-account-dashboard__intro">...</div>
  <div class="wp-account-dashboard__grid">
    <div class="wp-account-card">...</div>
    <div class="wp-account-card">...</div>
    <div class="wp-account-card">...</div>
  </div>
</div>
```

---

## 2. AccountOrders

**Component**: `Orders.tsx`  
**BEM Block**: `.wp-account-orders`

Displays a list of recent orders in a responsive table.

### Structure
```html
<div class="wp-account-orders">
  <h2 class="wp-account-orders__title">Recent Orders</h2>
  <table class="wp-account-table">
    <thead class="wp-account-table__head">...</thead>
    <tbody class="wp-account-table__body">
      <tr class="wp-account-table__tr">...</tr>
    </tbody>
  </table>
</div>
```

---

## 3. AccountAddresses

**Component**: `Addresses.tsx`  
**BEM Block**: `.wp-account-addresses`

Manages billing and shipping addresses.

### Structure
```html
<div class="wp-account-addresses">
  <div class="wp-account-addresses__header">...</div>
  <div class="wp-account-addresses__grid">
    <div class="wp-address-card">...</div>
    <div class="wp-address-card">...</div>
  </div>
</div>
```

---

## 4. AccountDetails

**Component**: `AccountDetails.tsx`  
**BEM Block**: `.wp-account-details`

Form to edit personal information and password.

### Structure
```html
<div class="wp-account-details">
  <form class="wp-account-form">
    <div class="wp-account-form__row">...</div>
    <div class="wp-account-form__field">...</div>
    <div class="wp-account-form__actions">...</div>
  </form>
</div>
```
