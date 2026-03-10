# Layout Grid & Flexbox Utilities

**Version:** 1.0  
**Updated:** January 27, 2026  
**File:** `/src/styles/layout-grid.css`

## Overview

This project uses a dedicated CSS utility system for layout, strictly namespaced with the `wp-` prefix to avoid conflicts and maintain WordPress coding standards. These utilities replace Tailwind CSS functionality for Grid and Flexbox layouts.

## Grid System

### Display
- `.wp-grid` - `display: grid`

### Columns (Responsive)
Use these classes to define column counts. They use `minmax(0, 1fr)` to ensure responsiveness.

| Class | Properties |
|-------|------------|
| `.wp-grid-cols-1` | 1 column |
| `.wp-grid-cols-2` | 2 columns |
| `.wp-grid-cols-3` | 3 columns |
| `.wp-grid-cols-4` | 4 columns |
| `.wp-grid-cols-12` | 12 columns |

**Responsive Variants:**
- `sm:wp-grid-cols-*` (Tablet ≥ 640px)
- `md:wp-grid-cols-*` (Desktop ≥ 768px)
- `lg:wp-grid-cols-*` (Large Desktop ≥ 1024px)
- `xl:wp-grid-cols-*` (Extra Large ≥ 1280px)

*Note: The colon `:` in class names is escaped in CSS but used normally in HTML classes (e.g., `className="wp-grid sm:wp-grid-cols-2"`).*

### Gaps
Define spacing between grid/flex items.

| Class | Size | Pixel Value |
|-------|------|-------------|
| `.wp-gap-0` | 0 | 0px |
| `.wp-gap-1` | 1 | 4px |
| `.wp-gap-2` | 2 | 8px |
| `.wp-gap-4` | 4 | 16px |
| `.wp-gap-6` | 6 | 24px |
| `.wp-gap-8` | 8 | 32px |
| `.wp-gap-12` | 12 | 48px |

**Specific Gaps:**
- `.wp-column-gap-*`
- `.wp-row-gap-*`

## Flexbox System

### Display
- `.wp-flex` - `display: flex`
- `.wp-inline-flex` - `display: inline-flex`

### Direction
- `.wp-flex-row`
- `.wp-flex-col`
- `.wp-flex-row-reverse`
- `.wp-flex-col-reverse`

### Wrap
- `.wp-flex-wrap`
- `.wp-flex-nowrap`

### Alignment (Items)
- `.wp-items-start`
- `.wp-items-center`
- `.wp-items-end`
- `.wp-items-stretch`
- `.wp-items-baseline`

### Justification (Content)
- `.wp-justify-start`
- `.wp-justify-center`
- `.wp-justify-end`
- `.wp-justify-between`
- `.wp-justify-around`

### Sizing (Flex Grow/Shrink)
- `.wp-flex-1`
- `.wp-flex-auto`
- `.wp-flex-none`
- `.wp-grow`
- `.wp-shrink`

## Usage Example

```tsx
<div className="wp-grid wp-grid-cols-1 md:wp-grid-cols-3 wp-gap-6">
  <div className="wp-col-span-1">Sidebar</div>
  <div className="wp-col-span-2">Main Content</div>
</div>

<div className="wp-flex wp-items-center wp-justify-between wp-gap-4">
  <span>Left</span>
  <span>Right</span>
</div>
```

## Migration Guide

If you encounter legacy Tailwind classes, replace them using this mapping:

- `grid` -> `.wp-grid`
- `grid-cols-4` -> `.wp-grid-cols-4`
- `gap-4` -> `.wp-gap-4`
- `flex` -> `.wp-flex`
- `items-center` -> `.wp-items-center`
- `justify-between` -> `.wp-justify-between`
