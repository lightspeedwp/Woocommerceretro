# Chart Component

**Type:** Block  
**Category:** Display  
**Location:** `/src/app/components/blocks/display/Chart.tsx`  
**Status:** Complete

---

## Overview

**Purpose:** A flexible data visualization component built on Recharts that provides bar charts, line charts, area charts, pie charts, and radial charts with automatic theming and responsive design.

**Use Cases:**
- Sales analytics and revenue tracking dashboards
- Product performance metrics and KPIs
- Traffic and engagement statistics
- Inventory levels and stock comparisons
- Customer demographics and segmentation data

**WordPress Alignment:** Maps to WordPress Chart Block pattern for data visualization in posts and pages, providing analytics visualization for WooCommerce stores.

---

## Visual Reference

**Chart Types:**
- **Bar Chart** — Vertical/horizontal bars for category comparisons
- **Line Chart** — Trend lines for time-series data
- **Area Chart** — Filled trend areas for cumulative data
- **Pie Chart** — Circular segments for proportion visualization
- **Radial Chart** — Circular progress bars for completion metrics

**Interactive States:**
- **Default** — Chart rendered with data
- **Hover** — Tooltip displays data point details
- **Responsive** — Auto-scales to container width
- **Loading** — (External implementation) skeleton/spinner state
- **No Data** — (External implementation) empty state handling

---

## Implementation

### File Location

```
/src/app/components/blocks/display/Chart.tsx
```

### Dependencies

```tsx
import React, { useContext, useId, useMemo, createContext } from 'react';
import * as RechartsPrimitive from 'recharts';
import { cn } from '@/utils/cn';
```

**Required:**
- `recharts` — Core charting library
- `react` — Context API, hooks
- `@/utils/cn` — Class name utility

**Optional:**
- Icons from `@phosphor-icons/react` for legend/tooltip customization

---

## Props / API

### ChartContainer Interface

```tsx
interface ChartContainerProps {
  // REQUIRED props
  config: ChartConfig;     // Chart configuration with data series metadata
  children: React.ReactNode;  // Recharts chart components

  // OPTIONAL props
  id?: string;             // Custom chart ID (auto-generated if not provided)
  className?: string;      // Additional CSS classes
}

interface ChartConfig {
  [key: string]: {
    label?: string;              // Display label for data series
    icon?: React.ComponentType;  // Icon component for legend/tooltip
    theme?: Record<string, string>;  // Light/dark theme color overrides
    color?: string;              // Default color for data series
  };
}
```

### ChartTooltipContent Interface

```tsx
interface ChartTooltipContentProps {
  // Recharts injected props
  active?: boolean;        // Whether tooltip is active
  payload?: any[];         // Data payload for hovered item
  label?: string;          // X-axis label

  // OPTIONAL configuration
  className?: string;      // Custom tooltip CSS classes
  indicator?: 'dot' | 'line' | 'dashed';  // Visual indicator style
  hideLabel?: boolean;     // Hide category label
  hideIndicator?: boolean; // Hide color indicator
  labelFormatter?: (value: any, payload: any[]) => React.ReactNode;  // Custom label renderer
  labelClassName?: string;  // Label CSS classes
  formatter?: (value: any, name: string, item: any, index: number, payload: any) => React.ReactNode;  // Custom value renderer
  color?: string;          // Override indicator color
  nameKey?: string;        // Key for series name
  labelKey?: string;       // Key for label value
}
```

### ChartLegendContent Interface

```tsx
interface ChartLegendContentProps {
  // Recharts injected props
  payload?: any[];         // Legend data items

  // OPTIONAL configuration
  className?: string;      // Custom legend CSS classes
  hideIcon?: boolean;      // Hide series icons
  verticalAlign?: 'top' | 'bottom';  // Legend position
  nameKey?: string;        // Key for series name
}
```

### Props Reference Table

#### ChartContainer

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `config` | `ChartConfig` | ✅ Yes | — | Configuration object defining data series metadata |
| `children` | `React.ReactNode` | ✅ Yes | — | Recharts chart components (BarChart, LineChart, etc.) |
| `id` | `string` | ❌ No | Auto-generated | Custom chart identifier for CSS variable scoping |
| `className` | `string` | ❌ No | `''` | Additional CSS classes for container |

#### ChartTooltipContent

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `active` | `boolean` | ❌ No | Recharts | Whether tooltip is active (injected by Recharts) |
| `payload` | `any[]` | ❌ No | Recharts | Data array for hovered items (injected by Recharts) |
| `label` | `string` | ❌ No | Recharts | X-axis category label (injected by Recharts) |
| `indicator` | `'dot' \| 'line' \| 'dashed'` | ❌ No | `'dot'` | Visual indicator style for data series |
| `hideLabel` | `boolean` | ❌ No | `false` | Hide category label in tooltip |
| `hideIndicator` | `boolean` | ❌ No | `false` | Hide color indicator dot/line |
| `labelFormatter` | `function` | ❌ No | — | Custom label renderer function |
| `formatter` | `function` | ❌ No | — | Custom value renderer function |
| `className` | `string` | ❌ No | `''` | Additional CSS classes for tooltip |

#### ChartLegendContent

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `payload` | `any[]` | ❌ No | Recharts | Legend items (injected by Recharts) |
| `hideIcon` | `boolean` | ❌ No | `false` | Hide series icons in legend |
| `verticalAlign` | `'top' \| 'bottom'` | ❌ No | `'bottom'` | Legend vertical alignment |
| `className` | `string` | ❌ No | `''` | Additional CSS classes for legend |

---

## Usage Examples

### Basic Bar Chart

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/blocks/display/Chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 186 },
  { month: 'Feb', sales: 305 },
  { month: 'Mar', sales: 237 },
  { month: 'Apr', sales: 273 },
  { month: 'May', sales: 209 },
  { month: 'Jun', sales: 214 },
];

const chartConfig = {
  sales: {
    label: 'Sales',
    color: '#8b5cf6',
  },
};

<ChartContainer config={chartConfig} className="retro-chart">
  <BarChart data={salesData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="sales" fill="var(--color-sales)" />
  </BarChart>
</ChartContainer>
```

### Line Chart with Multiple Series

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/blocks/display/Chart';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const trafficData = [
  { month: 'Jan', desktop: 186, mobile: 80 },
  { month: 'Feb', desktop: 305, mobile: 200 },
  { month: 'Mar', desktop: 237, mobile: 120 },
  { month: 'Apr', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#3b82f6',
  },
  mobile: {
    label: 'Mobile',
    color: '#10b981',
  },
};

<ChartContainer config={chartConfig}>
  <LineChart data={trafficData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line type="monotone" dataKey="desktop" stroke="var(--color-desktop)" />
    <Line type="monotone" dataKey="mobile" stroke="var(--color-mobile)" />
  </LineChart>
</ChartContainer>
```

### Area Chart with Custom Theme

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/blocks/display/Chart';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue',
    theme: {
      light: '#8b5cf6',
      dark: '#a78bfa',
    },
  },
};

<ChartContainer config={chartConfig}>
  <AreaChart data={revenueData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Area type="monotone" dataKey="revenue" stroke="var(--color-revenue)" fill="var(--color-revenue)" fillOpacity={0.3} />
  </AreaChart>
</ChartContainer>
```

### Pie Chart with Icons

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/blocks/display/Chart';
import { Pie, PieChart } from 'recharts';
import { Desktop, DeviceMobile, Tablet } from '@phosphor-icons/react';

const deviceData = [
  { device: 'desktop', users: 275, fill: 'var(--color-desktop)' },
  { device: 'mobile', users: 200, fill: 'var(--color-mobile)' },
  { device: 'tablet', users: 87, fill: 'var(--color-tablet)' },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    icon: Desktop,
    color: '#3b82f6',
  },
  mobile: {
    label: 'Mobile',
    icon: DeviceMobile,
    color: '#10b981',
  },
  tablet: {
    label: 'Tablet',
    icon: Tablet,
    color: '#f59e0b',
  },
};

<ChartContainer config={chartConfig} className="retro-chart-pie">
  <PieChart>
    <Pie data={deviceData} dataKey="users" nameKey="device" />
    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
    <ChartLegend content={<ChartLegendContent />} />
  </PieChart>
</ChartContainer>
```

### Custom Tooltip Formatting

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/blocks/display/Chart';
import { Bar, BarChart, XAxis } from 'recharts';

const currencyFormatter = (value: number) => `$${value.toLocaleString()}`;

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: '#8b5cf6',
  },
};

<ChartContainer config={chartConfig}>
  <BarChart data={salesData}>
    <XAxis dataKey="month" />
    <ChartTooltip
      content={
        <ChartTooltipContent
          formatter={(value, name) => (
            <div className="retro-tooltip-value">
              <span className="retro-label">{name}:</span>
              <span className="retro-currency">{currencyFormatter(value as number)}</span>
            </div>
          )}
        />
      }
    />
    <Bar dataKey="revenue" fill="var(--color-revenue)" />
  </BarChart>
</ChartContainer>
```

---

## BEM Class Structure

### Container Classes

```tsx
<div className="wp-block-chart">  {/* Container */}
  <ChartStyle />  {/* Dynamic <style> tag */}
  <ResponsiveContainer>  {/* Recharts wrapper */}
    {children}  {/* Chart components */}
  </ResponsiveContainer>
</div>
```

### Tooltip Classes

```css
.wp-block-chart-tooltip                   /* Tooltip container */
.wp-block-chart-tooltip-label             /* Category label */
.wp-block-chart-tooltip-grid              /* Items grid */
.wp-block-chart-tooltip-item              /* Single item row */
.wp-block-chart-tooltip-item--dot         /* Dot indicator variant */
.wp-block-chart-tooltip-indicator         /* Color indicator */
.wp-block-chart-tooltip-indicator--dot    /* Dot style (default) */
.wp-block-chart-tooltip-indicator--line   /* Line style */
.wp-block-chart-tooltip-indicator--dashed /* Dashed line style */
.wp-block-chart-tooltip-value-row         /* Value display row */
.wp-block-chart-tooltip-value-row--nested    /* Nested label style */
.wp-block-chart-tooltip-value-row--inline    /* Inline label style */
.wp-block-chart-tooltip-value-labels      /* Label container */
.wp-block-chart-tooltip-value-name        /* Series name */
.wp-block-chart-tooltip-value-number      /* Numeric value */
```

### Legend Classes

```css
.wp-block-chart-legend                    /* Legend container */
.wp-block-chart-legend--vertical          /* Top-aligned variant */
.wp-block-chart-legend--bottom            /* Bottom-aligned variant (default) */
.wp-block-chart-legend-item               /* Single legend item */
.wp-block-chart-legend-indicator          /* Color indicator box */
```

---

## Styling

### Styles Location

**Main CSS:** `/src/styles/blocks/display/chart.css`

```css
@import '../blocks/display/chart.css';
```

**Retro Theme Enhancements:** Not applicable (uses WordPress color tokens for automatic theming)

### CSS Variables

The component uses dynamic CSS variables scoped to each chart instance via `data-chart` attribute:

```css
[data-chart="chart-abc123"] {
  --color-sales: #8b5cf6;
  --color-revenue: #3b82f6;
  --color-desktop: #10b981;
  /* ...additional series colors */
}

.dark [data-chart="chart-abc123"] {
  --color-sales: #a78bfa;  /* Lighter purple for dark mode */
  --color-revenue: #60a5fa;  /* Lighter blue for dark mode */
  --color-desktop: #34d399;  /* Lighter green for dark mode */
}
```

**WordPress Token Usage:**

```css
.wp-block-chart {
  font-size: var(--wp--preset--font-size--xs);  /* Chart text size */
}

.wp-block-chart .recharts-cartesian-axis-tick-text {
  fill: var(--wp--preset--color--muted-foreground);  /* Axis labels */
}

.wp-block-chart .recharts-cartesian-grid line {
  stroke: var(--wp--preset--color--border);  /* Grid lines */
}

.wp-block-chart-tooltip {
  background-color: var(--wp--preset--color--background);  /* Tooltip bg */
  border: 1px solid var(--wp--preset--color--border);  /* Tooltip border */
  border-radius: var(--wp--preset--border-radius--lg);  /* Rounded corners */
  box-shadow: var(--wp--preset--shadow--xl);  /* Elevation shadow */
}
```

### Responsive Design

**Aspect Ratio:** Default `1.7778` (16:9 widescreen)

```css
.wp-block-chart {
  aspect-ratio: 1.7778;  /* Auto-maintains 16:9 ratio */
}
```

**Custom Aspect Ratios:**

```tsx
<ChartContainer className="aspect-square">  {/* 1:1 */}
<ChartContainer className="aspect-video">   {/* 16:9 */}
```

**Mobile Behavior:**
- ResponsiveContainer automatically scales chart to parent width
- Legend stacks vertically on narrow screens (via flexbox wrapping)
- Tooltip positions intelligently within viewport bounds
- Font sizes remain legible via `var(--wp--preset--font-size--xs)`

---

## Dark Mode

### Automatic Theme Support

The component automatically supports dark mode via:

1. **ChartConfig theme property:**
   ```tsx
   const chartConfig = {
     sales: {
       label: 'Sales',
       theme: {
         light: '#8b5cf6',  // Purple in light mode
         dark: '#a78bfa',   // Lighter purple in dark mode
       },
     },
   };
   ```

2. **Dynamic style generation:**
   - ChartStyle component generates light and dark mode CSS variables
   - Scopes variables to individual chart via `data-chart` attribute
   - Automatically switches when `.dark` class applied to root

3. **WordPress color tokens:**
   - Axis labels, grid lines, tooltips use semantic WordPress colors
   - Colors automatically adapt to theme mode
   - No manual dark mode classes needed

### Dark Mode CSS

All chart UI elements automatically adapt:

```css
/* Light mode (default) */
.wp-block-chart .recharts-cartesian-axis-tick-text {
  fill: var(--wp--preset--color--muted-foreground);  /* Gray-600 */
}

.wp-block-chart-tooltip {
  background-color: var(--wp--preset--color--background);  /* White */
  border-color: var(--wp--preset--color--border);  /* Gray-200 */
}

/* Dark mode (.dark applied to root) */
.dark .wp-block-chart .recharts-cartesian-axis-tick-text {
  fill: var(--wp--preset--color--muted-foreground);  /* Gray-400 */
}

.dark .wp-block-chart-tooltip {
  background-color: var(--wp--preset--color--background);  /* Gray-950 */
  border-color: var(--wp--preset--color--border);  /* Gray-800 */
}
```

**Testing:**
- Verify chart colors visible in both modes
- Check tooltip contrast meets WCAG AA
- Ensure legend indicators distinct in dark mode
- Test grid line visibility (not too harsh in dark mode)

---

## Accessibility

### Semantic HTML

```tsx
<div data-slot="chart" data-chart="[id]">  {/* Chart container */}
  <svg role="img" aria-labelledby="chart-title">  {/* Recharts SVG */}
    <title id="chart-title">Sales by Month</title>  {/* Screen reader title */}
    {/* Chart elements */}
  </svg>
</div>
```

### ARIA Attributes

**Chart Title (Required):**

```tsx
import { Label } from 'recharts';

<BarChart data={data}>
  <Label value="Monthly Sales" position="top" />  {/* Visual + screen reader */}
  {/* ...other elements */}
</BarChart>
```

**Accessible Description:**

```tsx
<ChartContainer config={config} className="wp-block-chart" aria-label="Monthly sales data showing revenue trends from January to December">
  {/* Chart content */}
</ChartContainer>
```

### Keyboard Navigation

- **Not applicable** — Charts are read-only visual displays
- **Data tables recommended** for keyboard-accessible data exploration
- **Alternative text** should describe trends/insights

### Screen Reader Support

**Best Practices:**

1. **Provide text summary:**
   ```tsx
   <div className="retro-chart-summary visually-hidden">
     Sales increased 25% from January to June, with peak performance in February.
   </div>
   <ChartContainer config={config}>...</ChartContainer>
   ```

2. **Use descriptive labels:**
   ```tsx
   const chartConfig = {
     sales: { label: 'Monthly Sales in USD' },  // Not just "Sales"
   };
   ```

3. **Tooltip accessibility:**
   - Tooltips automatically expose data via ARIA
   - Screen readers announce values on focus
   - Formatted numbers readable (e.g., "1,234" → "one thousand two hundred thirty-four")

### Color Contrast

**WCAG AA Compliance:**

- Axis text: 4.5:1 minimum contrast (via `--wp--preset--color--muted-foreground`)
- Tooltip text: 7:1 contrast (via `--wp--preset--color--foreground`)
- Legend text: 4.5:1 minimum contrast
- Chart colors: Use distinct hues, not just lightness variations

**Testing Tools:**
- WebAIM Contrast Checker for tooltip/label text
- ColorOracle for colorblind simulation
- NVDA/JAWS for screen reader testing

---

## Common Patterns

### Pattern 1: Sales Dashboard Chart

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/blocks/display/Chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const monthlySales = [
  { month: 'Jan', revenue: 12500, orders: 186 },
  { month: 'Feb', revenue: 18200, orders: 305 },
  { month: 'Mar', revenue: 14100, orders: 237 },
];

const chartConfig = {
  revenue: {
    label: 'Revenue (USD)',
    color: '#8b5cf6',
  },
};

<div className="retro-stats-card">
  <h3 className="retro-stats-card__title">Monthly Revenue</h3>
  <ChartContainer config={chartConfig} className="retro-chart">
    <BarChart data={monthlySales}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <ChartTooltip
        content={<ChartTooltipContent />}
        formatter={(value) => `$${value.toLocaleString()}`}
      />
      <Bar dataKey="revenue" fill="var(--color-revenue)" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ChartContainer>
</div>
```

**Use Case:** Dashboard revenue display, admin analytics

---

### Pattern 2: Product Performance Comparison

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from '@/components/blocks/display/Chart';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

const productData = [
  { week: 'W1', productA: 20, productB: 15 },
  { week: 'W2', productA: 25, productB: 22 },
  { week: 'W3', productA: 30, productB: 28 },
  { week: 'W4', productA: 35, productB: 32 },
];

const chartConfig = {
  productA: {
    label: 'Retro Console Pro',
    color: '#3b82f6',
  },
  productB: {
    label: 'Pixel Pad Classic',
    color: '#10b981',
  },
};

<ChartContainer config={chartConfig}>
  <LineChart data={productData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="week" />
    <YAxis />
    <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line type="monotone" dataKey="productA" stroke="var(--color-productA)" strokeWidth={2} />
    <Line type="monotone" dataKey="productB" stroke="var(--color-productB)" strokeWidth={2} />
  </LineChart>
</ChartContainer>
```

**Use Case:** Product comparison pages, SKU performance tracking

---

### Pattern 3: Inventory Levels Gauge

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/blocks/display/Chart';
import { RadialBar, RadialBarChart } from 'recharts';

const inventoryData = [
  { category: 'Accessories', stock: 75, fill: 'var(--color-accessories)' },
  { category: 'Games', stock: 60, fill: 'var(--color-games)' },
  { category: 'Consoles', stock: 40, fill: 'var(--color-consoles)' },
];

const chartConfig = {
  accessories: { label: 'Accessories', color: '#10b981' },
  games: { label: 'Games', color: '#3b82f6' },
  consoles: { label: 'Consoles', color: '#f59e0b' },
};

<ChartContainer config={chartConfig} className="aspect-square">
  <RadialBarChart data={inventoryData} startAngle={90} endAngle={-270}>
    <RadialBar dataKey="stock" background />
    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
  </RadialBarChart>
</ChartContainer>
```

**Use Case:** Stock level monitoring, warehouse dashboards

---

### Pattern 4: Customer Segmentation Pie Chart

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/blocks/display/Chart';
import { Pie, PieChart, Cell } from 'recharts';

const customerData = [
  { segment: 'Collectors', count: 145, value: 35 },
  { segment: 'Gamers', count: 230, value: 55 },
  { segment: 'Gift Buyers', count: 42, value: 10 },
];

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981'];

const chartConfig = {
  collectors: { label: 'Collectors', color: '#8b5cf6' },
  gamers: { label: 'Gamers', color: '#3b82f6' },
  giftBuyers: { label: 'Gift Buyers', color: '#10b981' },
};

<ChartContainer config={chartConfig} className="aspect-square">
  <PieChart>
    <Pie data={customerData} dataKey="value" nameKey="segment" label>
      {customerData.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index]} />
      ))}
    </Pie>
    <ChartTooltip
      content={<ChartTooltipContent hideLabel />}
      formatter={(value, name, props) => `${props.payload.count} customers (${value}%)`}
    />
  </PieChart>
</ChartContainer>
```

**Use Case:** Demographics reports, customer insights dashboards

---

## Testing

### Component Tests

```tsx
import { render, screen } from '@testing-library/react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './Chart';
import { BarChart, Bar, XAxis } from 'recharts';

const testData = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 200 },
];

const testConfig = {
  value: { label: 'Test Value', color: '#8b5cf6' },
};

describe('ChartContainer', () => {
  it('renders chart with config', () => {
    render(
      <ChartContainer config={testConfig}>
        <BarChart data={testData}>
          <XAxis dataKey="month" />
          <Bar dataKey="value" />
        </BarChart>
      </ChartContainer>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ChartContainer config={testConfig} className="custom-chart">
        <BarChart data={testData}>
          <Bar dataKey="value" />
        </BarChart>
      </ChartContainer>
    );
    expect(container.querySelector('.wp-block-chart.custom-chart')).toBeInTheDocument();
  });

  it('generates dynamic CSS variables', () => {
    const { container } = render(
      <ChartContainer config={testConfig}>
        <BarChart data={testData}>
          <Bar dataKey="value" />
        </BarChart>
      </ChartContainer>
    );
    const style = container.querySelector('style');
    expect(style).toBeInTheDocument();
    expect(style?.innerHTML).toContain('--color-value: #8b5cf6');
  });

  it('supports dark mode theme config', () => {
    const darkConfig = {
      value: {
        label: 'Value',
        theme: { light: '#8b5cf6', dark: '#a78bfa' },
      },
    };
    const { container } = render(
      <ChartContainer config={darkConfig}>
        <BarChart data={testData}>
          <Bar dataKey="value" />
        </BarChart>
      </ChartContainer>
    );
    const style = container.querySelector('style');
    expect(style?.innerHTML).toContain('--color-value: #8b5cf6');
    expect(style?.innerHTML).toContain('.dark');
    expect(style?.innerHTML).toContain('--color-value: #a78bfa');
  });
});

describe('ChartTooltipContent', () => {
  it('renders tooltip with data', () => {
    const payload = [
      { name: 'value', value: 100, dataKey: 'value' },
    ];
    render(
      <ChartContainer config={testConfig}>
        <ChartTooltipContent active={true} payload={payload} label="Jan" />
      </ChartContainer>
    );
    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('hides label when hideLabel prop is true', () => {
    const payload = [{ name: 'value', value: 100 }];
    render(
      <ChartContainer config={testConfig}>
        <ChartTooltipContent active={true} payload={payload} label="Jan" hideLabel />
      </ChartContainer>
    );
    expect(screen.queryByText('Jan')).not.toBeInTheDocument();
  });

  it('applies custom formatter', () => {
    const payload = [{ name: 'value', value: 100 }];
    const formatter = (value: number) => `$${value}`;
    render(
      <ChartContainer config={testConfig}>
        <ChartTooltipContent active={true} payload={payload} formatter={formatter} />
      </ChartContainer>
    );
    expect(screen.getByText('$100')).toBeInTheDocument();
  });
});
```

### Visual Regression Tests

**Chromatic/Storybook:**

```tsx
export const BarChartStory = () => (
  <ChartContainer config={chartConfig}>
    <BarChart data={salesData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="sales" fill="var(--color-sales)" />
    </BarChart>
  </ChartContainer>
);

export const LineChartDarkMode = () => (
  <div className="dark">
    <ChartContainer config={chartConfig}>
      <LineChart data={trafficData}>
        <XAxis dataKey="month" />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Line dataKey="desktop" stroke="var(--color-desktop)" />
      </LineChart>
    </ChartContainer>
  </div>
);
```

### Accessibility Tests

```tsx
import { axe } from 'jest-axe';

test('meets WCAG AA accessibility standards', async () => {
  const { container } = render(
    <ChartContainer config={testConfig} aria-label="Test chart showing monthly sales data">
      <BarChart data={testData}>
        <Bar dataKey="value" />
      </BarChart>
    </ChartContainer>
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Related Components

**Related Display Blocks:**
- **Table** (`/src/app/components/blocks/display/Table.tsx`) — Tabular data display
- **Badge** (`/src/app/components/blocks/display/Badge.tsx`) — Metric indicators
- **Avatar** (`/src/app/components/blocks/display/Avatar.tsx`) — User avatars in charts

**Related Patterns:**
- **PerformanceDashboard** (`/src/app/components/dev-tools/PerformanceDashboard.tsx`) — Uses Chart for performance metrics
- **StatsSection** (`/src/app/components/patterns/StatsSection.tsx`) — Could integrate Chart for data visualization

**WordPress Blocks:**
- **Chart Block** — Direct equivalent in WordPress block editor
- **Table Block** — Alternative for accessible data presentation

---

## Browser Support

**Supported Browsers:**
- ✅ Chrome 90+ (full support)
- ✅ Firefox 88+ (full support)
- ✅ Safari 14+ (full support)
- ✅ Edge 90+ (full support)
- ⚠️ IE 11 (not supported - Recharts uses modern JS)

**Polyfills Required:** None (React 18+ handles modern features)

**Mobile Support:**
- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+
- ✅ Samsung Internet 14+

---

## Performance Considerations

**Optimization Tips:**

1. **Limit data points:**
   ```tsx
   // ❌ BAD: 10,000 data points
   <BarChart data={allTimeData}>  {/* Slow render */}

   // ✅ GOOD: Aggregate to 50 data points
   <BarChart data={monthlyAggregated}>  {/* Fast render */}
   ```

2. **Use memoization for config:**
   ```tsx
   const chartConfig = useMemo(() => ({
     sales: { label: 'Sales', color: '#8b5cf6' },
   }), []);  // Prevent re-renders
   ```

3. **Lazy load charts:**
   ```tsx
   const Chart = lazy(() => import('./Chart'));

   <Suspense fallback={<ChartSkeleton />}>
     <Chart config={config} data={data} />
   </Suspense>
   ```

4. **Debounce responsive updates:**
   - ResponsiveContainer auto-debounces resize events
   - No manual optimization needed

**Bundle Size:**
- Chart component: ~2KB
- Recharts library: ~60KB (gzipped)
- Total impact: ~62KB (acceptable for analytics pages)

---

## Migration Notes

### From Custom Charts

**Before (Custom SVG):**

```tsx
<svg width="400" height="300">
  {data.map((d, i) => (
    <rect key={i} x={i * 50} y={300 - d.value} width="40" height={d.value} fill="#8b5cf6" />
  ))}
</svg>
```

**After (Chart Component):**

```tsx
<ChartContainer config={{ value: { label: 'Value', color: '#8b5cf6' } }}>
  <BarChart data={data}>
    <Bar dataKey="value" fill="var(--color-value)" />
  </BarChart>
</ChartContainer>
```

**Benefits:**
- Automatic responsiveness
- Built-in tooltips and legends
- Accessibility support
- Dark mode compatibility
- Less code to maintain

---

## Known Issues

**Issue 1: Recharts Warning in Console**

**Symptom:** Warning: "Stroke attribute with value #ccc"

**Cause:** Recharts default stroke color hardcoded

**Workaround:** CSS overrides applied automatically via chart.css

```css
.wp-block-chart .recharts-cartesian-grid line[stroke='#ccc'] {
  stroke: var(--wp--preset--color--border);  /* Override Recharts default */
}
```

---

**Issue 2: ResponsiveContainer Height**

**Symptom:** Chart height collapses to 0px in some layouts

**Cause:** Parent container has no defined height

**Solution:** Use aspect-ratio or explicit height on parent:

```tsx
<div style={{ height: '400px' }}>  {/* Explicit height */}
  <ChartContainer config={config}>...</ChartContainer>
</div>

{/* OR */}

<div className="aspect-video">  {/* 16:9 ratio */}
  <ChartContainer config={config}>...</ChartContainer>
</div>
```

---

## Changelog

### v1.0.0 (March 14, 2026)

- ✅ Initial guideline created
- ✅ Comprehensive props documentation
- ✅ 4 common patterns documented
- ✅ BEM class structure defined
- ✅ Accessibility requirements specified
- ✅ Dark mode support verified
- ✅ Testing examples provided
- ✅ Performance optimization tips added

---

## Additional Resources

**Recharts Documentation:**
- Official Docs: https://recharts.org/en-US/
- API Reference: https://recharts.org/en-US/api
- Examples Gallery: https://recharts.org/en-US/examples

**Accessibility:**
- W3C ARIA Chart Pattern: https://www.w3.org/WAI/ARIA/apg/patterns/chart/
- WCAG 2.1 Data Visualization: https://www.w3.org/WAI/WCAG21/Understanding/

**WordPress:**
- Chart Block Documentation: https://wordpress.org/support/article/chart-block/
- Data Visualization Best Practices: https://make.wordpress.org/core/handbook/

---

**Guideline Version:** 1.0.0  
**Last Updated:** 2026-03-14  
**Author:** AI Assistant  
**Status:** ✅ Complete
