# Color Design Tokens v5.0

**Version:** 5.0  
**Status:** WordPress CSS Variables Only (No Tailwind)  
**Dark Mode:** Mandatory via CSS Variables  
**Source of Truth:** `/src/styles/presets/colors.css`

This document defines the semantic color system for the WooCommerce prototype, strictly aligned with WordPress `theme.json` standards and CSS variables.

---

## Global Color System

### Philosophy
- **CSS Variables First**: All styling must use `--wp--preset--color--*` variables.
- **No Utility Classes**: Do not use `bg-blue-500` or `text-white`. Use BEM classes with CSS variables.
- **Automatic Dark Mode**: Variables automatically switch values based on the theme context (`.dark` or `[data-theme="dark"]`).

### Core Variables

These variables are defined in `/src/styles/presets/colors.css`.

| Semantic Role | CSS Variable | Light Value | Dark Value | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary** | `--wp--preset--color--primary` | `#0A84FF` (Blue) | *(Same)* | Main brand color, primary buttons, links |
| **Brand** | `--wp--preset--color--brand` | `#0A84FF` | *(Same)* | Brand identity |
| **CTA** | `--wp--preset--color--cta` | `#0066CC` | *(Same)* | Call to action backgrounds |
| **Base** | `--wp--preset--color--base` | `#ffffff` | `#0f0f0f` | Main page background |
| **Contrast** | `--wp--preset--color--contrast` | `#111111` | `#f9fafb` | High contrast text |
| **Background** | `--wp--preset--color--background` | `#ffffff` | `#0f0f0f` | Component backgrounds |
| **Foreground** | `--wp--preset--color--foreground` | `#111111` | `#f9fafb` | Primary text |
| **Surface** | `--wp--preset--color--surface` | *(Variable)* | `#1a1a1a` | Cards, panels, sidebars |
| **Muted** | `--wp--preset--color--muted` | `#ececf0` | `#1f2937` | Secondary backgrounds |
| **Border** | `--wp--preset--color--border` | `rgba(0,0,0,0.1)` | `#374151` | Default borders |

---

## Neutral Ramp

Used for text, borders, and subtle backgrounds.

| variable | Light Value | Dark Value |
| :--- | :--- | :--- |
| `--wp--preset--color--neutral-100` | `#F9FAFB` | `#1a1a1a` |
| `--wp--preset--color--neutral-200` | `#F3F4F6` | *(Auto)* |
| `--wp--preset--color--neutral-300` | `#E5E7EB` | *(Auto)* |
| `--wp--preset--color--neutral-400` | `#D1D5DB` | *(Auto)* |
| `--wp--preset--color--neutral-500` | `#9CA3AF` | *(Auto)* |
| `--wp--preset--color--neutral-600` | `#6B7280` | *(Auto)* |
| `--wp--preset--color--neutral-700` | `#4B5563` | *(Auto)* |
| `--wp--preset--color--neutral-800` | `#374151` | *(Auto)* |
| `--wp--preset--color--neutral-900` | `#111827` | `#f9fafb` |

---

## State Colors

| Role | Variable | Light Value | Usage |
| :--- | :--- | :--- | :--- |
| **Success** | `--wp--preset--color--success` | `#065f46` | Success messages, badges |
| **Warning** | `--wp--preset--color--warning` | `#92400e` | Warning alerts |
| **Error** | `--wp--preset--color--error` | `#d4183d` | Error states, destructive actions |

---

## Usage Examples

### 1. Standard Component Styling (BEM)

**React Component:**
```tsx
<div className="wp-block-card">
  <h2 className="wp-block-card__title">Title</h2>
</div>
```

**CSS (`/src/styles/blocks/card.css`):**
```css
.wp-block-card {
  background-color: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  padding: var(--wp--preset--spacing--40);
}

.wp-block-card__title {
  color: var(--wp--preset--color--foreground);
}
```

### 2. Text Colors

- **Headings/Primary Text:** `var(--wp--preset--color--foreground)`
- **Secondary Text:** `var(--wp--preset--color--neutral-600)`
- **Muted Text:** `var(--wp--preset--color--neutral-500)`

---

## Accessibility

All color combinations must meet WCAG 2.1 AA standards.
- **Text:** 4.5:1 contrast ratio against background.
- **UI Components:** 3:1 contrast ratio against background.

---

## Changelog

### v5.0 - 2026-02-22
- Renamed from `colors.md` to `Colors.md` (naming convention enforcement)
- No content changes
