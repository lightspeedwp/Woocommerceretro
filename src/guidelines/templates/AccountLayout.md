# AccountLayout Template

**Category**: Templates  
**Route**: `/account/*`  
**WordPress**: `woocommerce/myaccount/my-account.php`  
**Version**: 2.0 (BEM Refactor)

---

## 1. Purpose

The wrapper template for all "My Account" pages. It provides the persistent sidebar navigation and content area structure.

---

## 2. Structure

```
Layout (Part)
  └─ Container (wp-account-page)
      ├─ Title (H1)
      └─ Grid Layout (wp-account-page__layout)
          ├─ Sidebar (wp-account-sidebar)
          │   └─ Navigation (wp-account-nav)
          └─ Main Content (wp-account-content)
              └─ Outlet (Dynamic Sub-page)
```

---

## 3. Implementation

```tsx
import { AccountLayout } from '@/components/templates/AccountLayout';

// Used in Router
<Route path="/account" element={<AccountLayout />}>
  <Route path="dashboard" element={<Dashboard />} />
  {/* ... other routes */}
</Route>
```

---

## 4. CSS Architecture

Uses BEM-style classes defined in `/src/styles/globals.css`.

| Element | Class Name | Description |
|---------|------------|-------------|
| **Container** | `.wp-account-page` | Main wrapper |
| **Grid** | `.wp-account-page__layout` | Sidebar + Content grid |
| **Sidebar** | `.wp-account-sidebar` | Left column |
| **Nav Item** | `.wp-account-nav__item` | Navigation link |
| **Active Nav** | `.wp-account-nav__item--active` | Current page state |
| **Content** | `.wp-account-content` | Right column area |

---

## 5. Responsive Behavior

### Mobile (< 1024px)
- Stacked layout (Sidebar top, Content bottom).
- Navigation often collapses or becomes horizontal tabs (depending on specific mobile CSS implementation).

### Desktop (≥ 1024px)
- 2-column grid layout.
- Sidebar fixed width (e.g., 250px), Content takes remaining space.

---

## 6. Related Patterns

- [AccountDashboard](AccountDashboard.md)
- [AccountOrders](AccountOrders.md)
- [AccountAddresses](AccountAddresses.md)
- [AccountDetails](AccountDetails.md)
