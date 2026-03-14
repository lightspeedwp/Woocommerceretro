# Table Component

**Type:** Block  
**Category:** Display  
**Location:** `/src/app/components/blocks/display/Table.tsx`  
**Status:** Complete

---

## Overview

**Purpose:** A semantic HTML table component system providing accessible data tables with composable parts (header, body, footer, rows, cells, caption) for displaying structured data.

**Use Cases:**
- Product comparison tables (features, specs, pricing)
- Order history and transaction logs
- Inventory listings and stock levels
- Pricing plans and feature matrices
- Specifications tables (technical details)
- User account data (subscriptions, downloads)

**WordPress Alignment:** Maps to WordPress Core Table Block for structured data presentation, commonly used in WooCommerce product pages and documentation.

---

## Visual Reference

**Table Structure:**
```
Caption (optional)
┌─────────────┬─────────────┬─────────────┐
│ Header Cell │ Header Cell │ Header Cell │  ← TableHeader
├─────────────┼─────────────┼─────────────┤
│ Data Cell   │ Data Cell   │ Data Cell   │  ← TableBody
│ Data Cell   │ Data Cell   │ Data Cell   │
│ Data Cell   │ Data Cell   │ Data Cell   │
├─────────────┼─────────────┼─────────────┤
│ Footer Cell │ Footer Cell │ Footer Cell │  ← TableFooter (optional)
└─────────────┴─────────────┴─────────────┘
```

**Interactive States:**
- **Default** — Static table display
- **Hover** — Row background highlight on hover
- **Responsive** — Horizontal scroll on narrow screens
- **Sortable** — Column headers with sort indicators (external implementation)

**Visual Variants:**
- **Default** — Standard bordered table
- **Striped** — Alternating row backgrounds (via className)
- **Compact** — Reduced padding for dense data
- **Borderless** — No row borders (via className)

---

## Implementation

### File Location

```
/src/app/components/blocks/display/Table.tsx
```

### Dependencies

```tsx
import React from 'react';
```

**Required:**
- `react` — React.ReactNode for children

**Optional:**
- External sorting libraries (e.g., `react-table`, custom hooks)
- Pagination components

---

## Props / API

### Shared Interface (All Components)

```tsx
interface TablePartProps {
  className?: string;            // Additional CSS classes
  children?: React.ReactNode;    // Table content
  id?: string;                   // HTML id attribute
  style?: React.CSSProperties;   // Inline styles (use sparingly)
}
```

### Components

**Table** — Main container wrapper
**TableHeader** — `<thead>` wrapper for header rows
**TableBody** — `<tbody>` wrapper for data rows
**TableFooter** — `<tfoot>` wrapper for footer rows (optional)
**TableRow** — `<tr>` wrapper for table rows
**TableHead** — `<th>` wrapper for header cells
**TableCell** — `<td>` wrapper for data cells
**TableCaption** — `<caption>` wrapper for table caption

### Props Reference Table

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | ❌ No | `''` | Additional CSS classes for styling variants |
| `children` | `React.ReactNode` | ❌ No | `undefined` | Child elements (rows, cells, etc.) |
| `id` | `string` | ❌ No | `undefined` | HTML id attribute for linking/anchoring |
| `style` | `React.CSSProperties` | ❌ No | `undefined` | Inline styles (avoid when possible, use classes) |

**Note:** All 8 components share the same props interface for consistency.

---

## Usage Examples

### Basic Product Comparison Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/blocks/display/Table';

<Table>
  <TableCaption>Product Comparison</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Feature</TableHead>
      <TableHead>Basic</TableHead>
      <TableHead>Pro</TableHead>
      <TableHead>Enterprise</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Storage</TableCell>
      <TableCell>10 GB</TableCell>
      <TableCell>100 GB</TableCell>
      <TableCell>Unlimited</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Users</TableCell>
      <TableCell>1</TableCell>
      <TableCell>5</TableCell>
      <TableCell>Unlimited</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Support</TableCell>
      <TableCell>Email</TableCell>
      <TableCell>Priority Email</TableCell>
      <TableCell>24/7 Phone</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

### Order History Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/blocks/display/Table';

const orders = [
  { id: '#12345', date: '2026-03-10', total: '$125.99', status: 'Delivered' },
  { id: '#12344', date: '2026-03-05', total: '$89.50', status: 'Shipped' },
  { id: '#12343', date: '2026-02-28', total: '$215.00', status: 'Delivered' },
];

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Order ID</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Total</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {orders.map((order) => (
      <TableRow key={order.id}>
        <TableCell>{order.id}</TableCell>
        <TableCell>{order.date}</TableCell>
        <TableCell>{order.total}</TableCell>
        <TableCell>
          <span className={`retro-badge retro-badge--${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

---

### Pricing Table with Footer

```tsx
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell } from '@/components/blocks/display/Table';

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Plan</TableHead>
      <TableHead>Monthly</TableHead>
      <TableHead>Annually</TableHead>
      <TableHead>Savings</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Basic</TableCell>
      <TableCell>$9.99</TableCell>
      <TableCell>$99.99</TableCell>
      <TableCell>$20</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Pro</TableCell>
      <TableCell>$19.99</TableCell>
      <TableCell>$199.99</TableCell>
      <TableCell>$40</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Enterprise</TableCell>
      <TableCell>$49.99</TableCell>
      <TableCell>$499.99</TableCell>
      <TableCell>$100</TableCell>
    </TableRow>
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={4}>All prices in USD. Annual plans billed once per year.</TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

---

### Striped Table with Hover Effects

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/blocks/display/Table';

<Table className="wp-block-table--striped">
  <TableHeader>
    <TableRow>
      <TableHead>Product</TableHead>
      <TableHead>SKU</TableHead>
      <TableHead>Stock</TableHead>
      <TableHead>Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Retro Console Pro</TableCell>
      <TableCell>RCP-001</TableCell>
      <TableCell>25</TableCell>
      <TableCell>$299.99</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Pixel Pad Classic</TableCell>
      <TableCell>PPC-002</TableCell>
      <TableCell>50</TableCell>
      <TableCell>$49.99</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Neon Controller</TableCell>
      <TableCell>NC-003</TableCell>
      <TableCell>100</TableCell>
      <TableCell>$29.99</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**CSS for striped variant:**
```css
.wp-block-table--striped .wp-block-table__body tr:nth-child(even) {
  background-color: var(--wp--preset--color--muted);
}
```

---

### Sortable Table (External Implementation)

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/blocks/display/Table';
import { useState } from 'react';

const ProductTable = () => {
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const products = [
    { name: 'Retro Console Pro', price: 299.99, stock: 25 },
    { name: 'Pixel Pad Classic', price: 49.99, stock: 50 },
    { name: 'Neon Controller', price: 29.99, stock: 100 },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    const multiplier = sortOrder === 'asc' ? 1 : -1;
    if (sortBy === 'name') return a.name.localeCompare(b.name) * multiplier;
    return (a.price - b.price) * multiplier;
  });

  const handleSort = (column: 'name' | 'price') => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <button
              onClick={() => handleSort('name')}
              className="wp-table-sort-button"
              aria-label={`Sort by name ${sortBy === 'name' ? sortOrder : ''}`}
            >
              Product {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </TableHead>
          <TableHead>
            <button
              onClick={() => handleSort('price')}
              className="wp-table-sort-button"
              aria-label={`Sort by price ${sortBy === 'price' ? sortOrder : ''}`}
            >
              Price {sortBy === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </TableHead>
          <TableHead>Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedProducts.map((product) => (
          <TableRow key={product.name}>
            <TableCell>{product.name}</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            <TableCell>{product.stock}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
```

---

## BEM Class Structure

### Container Classes

```css
.wp-block-table-container       /* Wrapper div (overflow scroll) */
.wp-block-table                 /* <table> element */
```

### Structural Classes

```css
.wp-block-table__header         /* <thead> element */
.wp-block-table__body           /* <tbody> element */
.wp-block-table__footer         /* <tfoot> element */
.wp-block-table__row            /* <tr> element */
.wp-block-table__head           /* <th> element */
.wp-block-table__cell           /* <td> element */
.wp-block-table__caption        /* <caption> element */
```

### Modifier Classes (Custom)

```css
.wp-block-table--striped        /* Alternating row backgrounds */
.wp-block-table--compact        /* Reduced padding */
.wp-block-table--borderless     /* No row borders */
.wp-block-table--hover          /* Enhanced hover effects */
.wp-block-table--sortable       /* Sortable columns */
```

### Funky Theme Classes

```css
.funky-table-container          /* Retro theme container */
.funky-table                    /* Retro theme table */
.funky-table-header             /* Retro theme header */
.funky-table-body               /* Retro theme body */
.funky-table-footer             /* Retro theme footer */
.funky-table-row                /* Retro theme row */
.funky-table-head               /* Retro theme header cell */
.funky-table-cell               /* Retro theme data cell */
.funky-table-caption            /* Retro theme caption */
```

---

## Styling

### Styles Location

**Main CSS:** `/src/styles/blocks/display/table.css`

```css
@import '../blocks/display/table.css';
```

**Retro Theme Enhancements:** Uses funky theme classes for pixelated borders and neon effects (optional)

### CSS Variables

**WordPress Token Usage:**

```css
.wp-block-table {
  font-size: var(--wp--preset--font-size--100);  /* Base font size */
  border-collapse: collapse;  /* Merged borders */
}

.wp-block-table__header {
  border-bottom: 1px solid var(--wp--preset--color--border);  /* Header border */
}

.wp-block-table__row {
  border-bottom: 1px solid var(--wp--preset--color--border);  /* Row separator */
  transition: background-color var(--wp--preset--transition--base) ease;  /* Hover transition */
}

.wp-block-table__row:hover {
  background-color: rgba(0, 0, 0, 0.02);  /* Light mode hover */
}

.dark .wp-block-table__row:hover {
  background-color: rgba(255, 255, 255, 0.02);  /* Dark mode hover */
}

.wp-block-table__head {
  height: 3rem;  /* 48px minimum touch target */
  padding: 0 var(--wp--preset--spacing--30);  /* 12px horizontal padding */
  font-weight: var(--wp--preset--font-weight--medium);  /* 500 weight */
  color: var(--wp--preset--color--muted-foreground);  /* Muted text */
}

.wp-block-table__cell {
  padding: var(--wp--preset--spacing--30);  /* 12px all sides */
  color: var(--wp--preset--color--foreground);  /* Primary text color */
}

.wp-block-table__caption {
  padding-top: var(--wp--preset--spacing--30);  /* 12px top spacing */
  font-size: var(--wp--preset--font-size--100);  /* Small font */
  color: var(--wp--preset--color--muted-foreground);  /* Muted caption */
}

.wp-block-table__footer {
  background-color: var(--wp--preset--color--muted);  /* Subtle footer bg */
  font-weight: var(--wp--preset--font-weight--medium);  /* Emphasized footer */
}
```

### Responsive Design

**Mobile Behavior:**

```css
.wp-block-table-container {
  width: 100%;
  overflow: auto;  /* Horizontal scroll on narrow screens */
}

/* Mobile: Reduce padding for narrow tables */
@media (max-width: 640px) {
  .wp-block-table__head,
  .wp-block-table__cell {
    padding: var(--wp--preset--spacing--20);  /* 8px padding */
    font-size: var(--wp--preset--font-size--90);  /* Smaller text */
  }
}
```

**Alternative: Stacked Layout (Advanced)**

For complex tables on mobile, consider converting to stacked cards:

```css
@media (max-width: 640px) {
  .wp-block-table--responsive thead {
    display: none;  /* Hide header row */
  }
  
  .wp-block-table--responsive tr {
    display: block;
    margin-bottom: var(--wp--preset--spacing--40);
    border: 1px solid var(--wp--preset--color--border);
    border-radius: var(--wp--preset--border-radius--lg);
  }
  
  .wp-block-table--responsive td {
    display: block;
    text-align: right;
  }
  
  .wp-block-table--responsive td::before {
    content: attr(data-label);
    float: left;
    font-weight: var(--wp--preset--font-weight--medium);
  }
}
```

**Usage:**
```tsx
<Table className="wp-block-table--responsive">
  <TableBody>
    <TableRow>
      <TableCell data-label="Product">Retro Console</TableCell>
      <TableCell data-label="Price">$299.99</TableCell>
      <TableCell data-label="Stock">25</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

## Dark Mode

### Automatic Theme Support

The component automatically supports dark mode via WordPress color tokens:

**Light Mode:**
```css
.wp-block-table__row:hover {
  background-color: rgba(0, 0, 0, 0.02);  /* Subtle black overlay */
}

.wp-block-table__head {
  color: var(--wp--preset--color--muted-foreground);  /* Gray-600 */
}

.wp-block-table__cell {
  color: var(--wp--preset--color--foreground);  /* Gray-900 */
}
```

**Dark Mode:**
```css
.dark .wp-block-table__row:hover {
  background-color: rgba(255, 255, 255, 0.02);  /* Subtle white overlay */
}

.dark .wp-block-table__head {
  color: var(--wp--preset--color--muted-foreground);  /* Gray-400 */
}

.dark .wp-block-table__cell {
  color: var(--wp--preset--color--foreground);  /* Gray-50 */
}
```

**Border Colors:**
```css
.wp-block-table__header,
.wp-block-table__row {
  border-bottom: 1px solid var(--wp--preset--color--border);
}

/* Light mode: border = gray-200 */
/* Dark mode: border = gray-800 (automatic via CSS variable) */
```

### Testing Dark Mode

**Checklist:**
- ✅ Borders visible in both modes
- ✅ Text contrast meets WCAG AA (4.5:1 minimum)
- ✅ Hover effects visible but not harsh
- ✅ Header text distinct from body text
- ✅ Footer background visible
- ✅ Caption text readable

---

## Accessibility

### Semantic HTML

```tsx
<table>
  <caption>Product Comparison</caption>  {/* Screen reader title */}
  <thead>
    <tr>
      <th scope="col">Feature</th>  {/* Column headers */}
      <th scope="col">Basic</th>
      <th scope="col">Pro</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Storage</th>  {/* Row header */}
      <td>10 GB</td>
      <td>100 GB</td>
    </tr>
  </tbody>
</table>
```

### ARIA Attributes

**Table Caption (Required):**

```tsx
<Table>
  <TableCaption>Monthly Sales by Product Category</TableCaption>
  {/* Table content */}
</Table>
```

**Scope Attribute (Required for Headers):**

```tsx
<TableHeader>
  <TableRow>
    <TableHead scope="col">Product</TableHead>  {/* Column scope */}
    <TableHead scope="col">Price</TableHead>
    <TableHead scope="col">Stock</TableHead>
  </TableRow>
</TableHeader>

<TableBody>
  <TableRow>
    <TableHead scope="row">Retro Console</TableHead>  {/* Row scope */}
    <TableCell>$299.99</TableCell>
    <TableCell>25</TableCell>
  </TableRow>
</TableBody>
```

**Headers Attribute (Complex Tables):**

```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead id="product" scope="col">Product</TableHead>
      <TableHead id="q1" scope="col">Q1 Sales</TableHead>
      <TableHead id="q2" scope="col">Q2 Sales</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableHead id="console" scope="row" headers="product">Console</TableHead>
      <TableCell headers="console q1">150</TableCell>
      <TableCell headers="console q2">200</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

### Keyboard Navigation

- **Tab Navigation** — Cells are not focusable by default
- **Sortable Headers** — Use `<button>` in `<th>` for keyboard access
- **Interactive Cells** — Links/buttons in cells must be keyboard accessible

**Sortable Header Example:**

```tsx
<TableHead>
  <button
    onClick={() => handleSort('price')}
    aria-label="Sort by price ascending"
    aria-sort={sortBy === 'price' ? sortOrder : 'none'}
  >
    Price {sortBy === 'price' && (sortOrder === 'asc' ? '↑' : '↓')}
  </button>
</TableHead>
```

### Screen Reader Support

**Best Practices:**

1. **Always use caption:**
   ```tsx
   <TableCaption>Order History for March 2026</TableCaption>
   ```

2. **Use scope attributes:**
   ```tsx
   <TableHead scope="col">Product</TableHead>
   <TableHead scope="row">Retro Console</TableHead>
   ```

3. **Provide data summary:**
   ```tsx
   <TableCaption>
     Product comparison showing 3 plans across 5 features. Basic plan starts at $9.99/month.
   </TableCaption>
   ```

4. **Avoid nested tables:**
   - Nested tables confuse screen readers
   - Use CSS Grid or Flexbox for complex layouts instead

### Color Contrast

**WCAG AA Compliance:**

- Header text: 4.5:1 minimum (muted-foreground on background)
- Cell text: 4.5:1 minimum (foreground on background)
- Hover background: Subtle (2% alpha) for visual feedback only
- Border contrast: 3:1 minimum (border on background)

**Testing:**
- WebAIM Contrast Checker for text colors
- Verify borders visible in both light/dark modes
- Test with high contrast mode enabled

---

## Common Patterns

### Pattern 1: Product Specifications Table

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/blocks/display/Table';

const specs = [
  { feature: 'Display', value: '7" LCD Screen (800x480)' },
  { feature: 'Processor', value: 'Quad-core ARM Cortex-A53' },
  { feature: 'RAM', value: '2 GB DDR3' },
  { feature: 'Storage', value: '32 GB eMMC (expandable)' },
  { feature: 'Battery', value: '4000 mAh (6 hours gameplay)' },
  { feature: 'Connectivity', value: 'WiFi 5, Bluetooth 5.0' },
];

<div className="retro-product-specs">
  <h3 className="retro-font-display retro-section-title">Technical Specifications</h3>
  <Table>
    <TableCaption>Retro Console Pro - Complete Technical Specifications</TableCaption>
    <TableBody>
      {specs.map((spec) => (
        <TableRow key={spec.feature}>
          <TableHead scope="row" style={{ width: '30%' }}>{spec.feature}</TableHead>
          <TableCell>{spec.value}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
```

**Use Case:** Single product specification display

---

### Pattern 2: Pricing Comparison Matrix

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/blocks/display/Table';

const plans = [
  { feature: 'Storage', basic: '10 GB', pro: '100 GB', enterprise: 'Unlimited' },
  { feature: 'Users', basic: '1', pro: '5', enterprise: 'Unlimited' },
  { feature: 'Support', basic: 'Email', pro: 'Priority', enterprise: '24/7 Phone' },
  { feature: 'Custom Domain', basic: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Analytics', basic: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
];

<div className="retro-pricing-comparison">
  <Table>
    <TableCaption>Compare all features across our pricing plans</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Feature</TableHead>
        <TableHead scope="col">Basic<br /><span className="retro-price">$9.99/mo</span></TableHead>
        <TableHead scope="col">Pro<br /><span className="retro-price">$19.99/mo</span></TableHead>
        <TableHead scope="col">Enterprise<br /><span className="retro-price">$49.99/mo</span></TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {plans.map((plan) => (
        <TableRow key={plan.feature}>
          <TableHead scope="row">{plan.feature}</TableHead>
          <TableCell className="text-center">{plan.basic}</TableCell>
          <TableCell className="text-center">{plan.pro}</TableCell>
          <TableCell className="text-center">{plan.enterprise}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
```

**Use Case:** Subscription plan comparison page

---

### Pattern 3: Order History with Actions

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from '@/components/blocks/display/Table';
import { Eye, Download } from '@phosphor-icons/react';

const orders = [
  { id: '#12345', date: '2026-03-10', items: 3, total: '$125.99', status: 'Delivered' },
  { id: '#12344', date: '2026-03-05', items: 1, total: '$89.50', status: 'Shipped' },
];

<Table>
  <TableCaption>Your recent orders from the past 30 days</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead scope="col">Order</TableHead>
      <TableHead scope="col">Date</TableHead>
      <TableHead scope="col">Items</TableHead>
      <TableHead scope="col">Total</TableHead>
      <TableHead scope="col">Status</TableHead>
      <TableHead scope="col">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {orders.map((order) => (
      <TableRow key={order.id}>
        <TableCell className="retro-font-mono retro-bold">{order.id}</TableCell>
        <TableCell>{order.date}</TableCell>
        <TableCell>{order.items}</TableCell>
        <TableCell className="retro-bold">{order.total}</TableCell>
        <TableCell>
          <span className={`retro-badge retro-badge--${order.status.toLowerCase()}`}>
            {order.status}
          </span>
        </TableCell>
        <TableCell>
          <div className="retro-button-group">
            <button className="retro-button-icon" aria-label="View order details">
              <Eye size={16} />
            </button>
            <button className="retro-button-icon" aria-label="Download invoice">
              <Download size={16} />
            </button>
          </div>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

**Use Case:** Account dashboard order history

---

### Pattern 4: Inventory Management Table

```tsx
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from '@/components/blocks/display/Table';

const inventory = [
  { sku: 'RCP-001', name: 'Retro Console Pro', stock: 25, reorder: 10, status: 'In Stock' },
  { sku: 'PPC-002', name: 'Pixel Pad Classic', stock: 5, reorder: 15, status: 'Low Stock' },
  { sku: 'NC-003', name: 'Neon Controller', stock: 0, reorder: 20, status: 'Out of Stock' },
];

const totalStock = inventory.reduce((sum, item) => sum + item.stock, 0);

<Table>
  <TableCaption>Current inventory levels as of March 14, 2026</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead scope="col">SKU</TableHead>
      <TableHead scope="col">Product</TableHead>
      <TableHead scope="col">Stock</TableHead>
      <TableHead scope="col">Reorder Point</TableHead>
      <TableHead scope="col">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {inventory.map((item) => (
      <TableRow key={item.sku}>
        <TableCell className="retro-font-mono">{item.sku}</TableCell>
        <TableCell>{item.name}</TableCell>
        <TableCell className="retro-bold">{item.stock}</TableCell>
        <TableCell>{item.reorder}</TableCell>
        <TableCell>
          <span
            className={`retro-badge ${
              item.stock === 0 ? 'retro-badge--error' :
              item.stock < item.reorder ? 'retro-badge--warning' :
              'retro-badge--success'
            }`}
          >
            {item.status}
          </span>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total Items in Stock</TableCell>
      <TableCell className="retro-bold">{totalStock}</TableCell>
      <TableCell colSpan={2}></TableCell>
    </TableRow>
  </TableFooter>
</Table>
```

**Use Case:** Admin inventory dashboard

---

### Pattern 5: Responsive Stacked Table (Mobile)

```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/blocks/display/Table';

<Table className="wp-block-table--responsive">
  <TableHeader>
    <TableRow>
      <TableHead scope="col">Product</TableHead>
      <TableHead scope="col">Price</TableHead>
      <TableHead scope="col">Stock</TableHead>
      <TableHead scope="col">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell data-label="Product">Retro Console Pro</TableCell>
      <TableCell data-label="Price">$299.99</TableCell>
      <TableCell data-label="Stock">25</TableCell>
      <TableCell data-label="Status">
        <span className="retro-badge retro-badge--success">In Stock</span>
      </TableCell>
    </TableRow>
    {/* More rows */}
  </TableBody>
</Table>
```

**Mobile Display:**
```
┌──────────────────────────┐
│ Product: Retro Console   │
│ Price: $299.99           │
│ Stock: 25                │
│ Status: In Stock         │
└──────────────────────────┘
```

**CSS Required:** See Responsive Design section for stacked layout CSS

---

## Testing

### Component Tests

```tsx
import { render, screen } from '@testing-library/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption } from './Table';

describe('Table', () => {
  it('renders table with caption', () => {
    render(
      <Table>
        <TableCaption>Test Table</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Test Table')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders header with scope attributes', () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead scope="col">Column 1</TableHead>
            <TableHead scope="col">Column 2</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(2);
    expect(headers[0]).toHaveAttribute('scope', 'col');
  });

  it('renders body with data cells', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText('Cell 1')).toBeInTheDocument();
    expect(screen.getByText('Cell 2')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer Content</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <Table className="custom-table">
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(container.querySelector('.wp-block-table.custom-table')).toBeInTheDocument();
  });

  it('supports id attribute', () => {
    render(
      <Table id="pricing-table">
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByRole('table')).toHaveAttribute('id', 'pricing-table');
  });

  it('renders with colSpan attribute', () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell colSpan={3}>Spanning Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    const cell = screen.getByText('Spanning Cell');
    expect(cell).toHaveAttribute('colSpan', '3');
  });
});
```

### Visual Regression Tests

**Chromatic/Storybook:**

```tsx
export const BasicTable = () => (
  <Table>
    <TableCaption>Product Comparison</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Feature</TableHead>
        <TableHead scope="col">Basic</TableHead>
        <TableHead scope="col">Pro</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Storage</TableCell>
        <TableCell>10 GB</TableCell>
        <TableCell>100 GB</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const StripedTable = () => (
  <Table className="wp-block-table--striped">
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Product</TableHead>
        <TableHead scope="col">Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Item 1</TableCell>
        <TableCell>$99.99</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Item 2</TableCell>
        <TableCell>$49.99</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Item 3</TableCell>
        <TableCell>$29.99</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export const TableWithFooter = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead scope="col">Item</TableHead>
        <TableHead scope="col">Quantity</TableHead>
        <TableHead scope="col">Price</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Product A</TableCell>
        <TableCell>2</TableCell>
        <TableCell>$19.98</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Product B</TableCell>
        <TableCell>1</TableCell>
        <TableCell>$29.99</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={2}>Total</TableCell>
        <TableCell>$49.97</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const DarkModeTable = () => (
  <div className="dark">
    <Table>
      <TableCaption>Dark Mode Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Product</TableHead>
          <TableHead scope="col">Stock</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Console</TableCell>
          <TableCell>25</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Controller</TableCell>
          <TableCell>100</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
```

### Accessibility Tests

```tsx
import { axe } from 'jest-axe';

test('meets WCAG AA accessibility standards', async () => {
  const { container } = render(
    <Table>
      <TableCaption>Accessible Table</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Column 1</TableHead>
          <TableHead scope="col">Column 2</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Data 1</TableCell>
          <TableCell>Data 2</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

test('has proper scope attributes on headers', () => {
  render(
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Product</TableHead>
          <TableHead scope="col">Price</TableHead>
        </TableRow>
      </TableHeader>
    </Table>
  );
  const headers = screen.getAllByRole('columnheader');
  headers.forEach((header) => {
    expect(header).toHaveAttribute('scope', 'col');
  });
});

test('has caption for screen readers', () => {
  render(
    <Table>
      <TableCaption>Product Pricing</TableCaption>
      <TableBody>
        <TableRow>
          <TableCell>Data</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
  expect(screen.getByText('Product Pricing')).toBeInTheDocument();
  expect(screen.getByRole('table')).toHaveAccessibleName('Product Pricing');
});
```

---

## Related Components

**Related Display Blocks:**
- **Badge** (`/src/app/components/blocks/display/Badge.tsx`) — Status badges in table cells
- **Avatar** (`/src/app/components/blocks/display/Avatar.tsx`) — User avatars in tables
- **Chart** (`/src/app/components/blocks/display/Chart.tsx`) — Data visualization alternative

**Related Patterns:**
- **Pagination** (`/src/app/components/patterns/Pagination.tsx`) — Paginate long tables
- **FilterSidebar** (`/src/app/components/blocks/archive/FilterSidebar.tsx`) — Filter table data

**WordPress Blocks:**
- **Table Block** — Direct equivalent in WordPress block editor
- **WooCommerce Product Table** — Product listing tables

---

## Browser Support

**Supported Browsers:**
- ✅ Chrome 90+ (full support)
- ✅ Firefox 88+ (full support)
- ✅ Safari 14+ (full support)
- ✅ Edge 90+ (full support)
- ✅ IE 11 (basic table support, no fancy CSS)

**Polyfills Required:** None (HTML tables universally supported)

**Mobile Support:**
- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+
- ✅ Samsung Internet 14+

**Responsive Behavior:**
- Horizontal scroll on narrow screens (default)
- Stacked layout on mobile (with `wp-block-table--responsive` class)

---

## Performance Considerations

**Optimization Tips:**

1. **Paginate long tables:**
   ```tsx
   // ❌ BAD: 1000 rows in single table (slow render)
   <Table>
     <TableBody>
       {allProducts.map((product) => <TableRow key={product.id}>...</TableRow>)}
     </TableBody>
   </Table>

   // ✅ GOOD: Paginate to 25 rows per page
   <Table>
     <TableBody>
       {paginatedProducts.map((product) => <TableRow key={product.id}>...</TableRow>)}
     </TableBody>
   </Table>
   <Pagination currentPage={page} totalPages={totalPages} />
   ```

2. **Virtualize very large tables:**
   ```tsx
   import { useVirtual } from 'react-virtual';

   // For 10,000+ rows, use virtualization
   const { virtualItems } = useVirtual({
     size: products.length,
     parentRef: tableRef,
   });
   ```

3. **Avoid complex calculations in render:**
   ```tsx
   // ✅ GOOD: Calculate totals once with useMemo
   const totalStock = useMemo(() => 
     inventory.reduce((sum, item) => sum + item.stock, 0),
     [inventory]
   );
   ```

4. **Lazy load images in cells:**
   ```tsx
   <TableCell>
     <img src={product.image} loading="lazy" alt={product.name} />
   </TableCell>
   ```

**Bundle Size:**
- Table component: ~1KB
- Zero external dependencies
- Total impact: ~1KB (minimal)

---

## Known Issues

**Issue 1: Horizontal Scroll on Mobile**

**Symptom:** Table overflows on narrow screens, creates horizontal scroll

**Cause:** Table content wider than viewport

**Solutions:**

1. **Accept horizontal scroll** (default):
   ```css
   .wp-block-table-container {
     overflow: auto;  /* Let user scroll horizontally */
   }
   ```

2. **Use responsive stacked layout:**
   ```tsx
   <Table className="wp-block-table--responsive">
     {/* Stacks rows as cards on mobile */}
   </Table>
   ```

3. **Hide less important columns on mobile:**
   ```css
   @media (max-width: 640px) {
     .wp-block-table th:nth-child(3),
     .wp-block-table td:nth-child(3) {
       display: none;  /* Hide "Stock" column on mobile */
     }
   }
   ```

---

**Issue 2: Long Cell Content Wrapping**

**Symptom:** Cell content wraps awkwardly, breaking table layout

**Cause:** Long unbroken strings (URLs, SKUs)

**Solution:**

```css
.wp-block-table__cell {
  word-break: break-word;  /* Break long words */
  overflow-wrap: break-word;  /* Wrap long content */
}

/* For specific columns (e.g., SKU) */
.wp-block-table__cell--sku {
  font-family: var(--wp--preset--font-family--mono);
  word-break: break-all;  /* Break anywhere if needed */
}
```

---

## Migration Notes

### From Plain HTML Table

**Before:**

```tsx
<table className="custom-table">
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Item 1</td>
      <td>$99.99</td>
    </tr>
  </tbody>
</table>
```

**After:**

```tsx
<Table>
  <TableCaption>Product Pricing</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead scope="col">Product</TableHead>
      <TableHead scope="col">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Item 1</TableCell>
      <TableCell>$99.99</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

**Benefits:**
- Automatic WordPress BEM class names
- Dark mode support built-in
- Accessibility improvements (caption, scope)
- Consistent styling across site
- Responsive container wrapper

---

## Changelog

### v1.0.0 (March 14, 2026)

- ✅ Initial guideline created
- ✅ Complete props documentation (8 components, shared interface)
- ✅ 5 common patterns documented
- ✅ BEM class structure defined (15 classes)
- ✅ Accessibility requirements specified (scope, caption, headers)
- ✅ Dark mode support verified
- ✅ Testing examples provided (component, visual, a11y)
- ✅ Responsive design patterns documented
- ✅ Performance optimization tips added
- ✅ Known issues documented (horizontal scroll, wrapping)

---

## Additional Resources

**HTML Tables:**
- MDN Table Element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
- MDN Table Accessibility: https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced

**Accessibility:**
- W3C Tables Tutorial: https://www.w3.org/WAI/tutorials/tables/
- WCAG Table Requirements: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html

**WordPress:**
- Table Block Documentation: https://wordpress.org/support/article/table-block/
- WooCommerce Product Tables: https://woocommerce.com/document/woocommerce-product-table/

---

**Guideline Version:** 1.0.0  
**Last Updated:** 2026-03-14  
**Author:** AI Assistant  
**Status:** ✅ Complete
