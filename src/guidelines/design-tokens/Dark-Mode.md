# Dark Mode Design Standards

**Type:** Design Tokens  
**Category:** Dark Mode  
**Version:** 6.0  
**Status:** MANDATORY FOR ALL COMPONENTS  
**WCAG Compliance:** AA (4.5:1 for text, 3:1 for UI)  
**Last Updated:** 2026-02-22

---

## Philosophy

Dark mode is a **first-class citizen**. Every component must support both light and dark modes using CSS variables. We do not use "dark mode classes" (like `dark:bg-black`) in markup. Instead, we use semantic variables that automatically adapt based on the theme context.

### Core Principles

1. **Semantic Variables**: Use `--wp--preset--color--*` variables. They automatically switch values when the `.dark` class (or `[data-theme="dark"]`) is applied to the document.
2. **No Markup Changes**: Your React components should not need to know which mode is active.
3. **True Dark**: We use `#0f0f0f` and `#1a1a1a` for backgrounds, not generic grays.

---

## Implementation Standards

### Mandatory Pattern

**CORRECT: Semantic Variables**
```css
.wp-block-card {
  background-color: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--foreground);
  border: 1px solid var(--wp--preset--color--border);
}
```

**WRONG: Hardcoded Values or Utility Classes**
```css
.wp-block-card {
  background-color: white; /* Breaks in dark mode */
}
```

```tsx
/* DO NOT USE UTILITY CLASSES */
<div className="bg-white dark:bg-gray-900">...</div>
```

---

## Color System: Light vs Dark

The system handles these mappings automatically via `src/styles/presets/colors.css`.

| Semantic Role | Light Value | Dark Value | Usage |
|---------------|-------------|------------|-------|
| **Base** | `#ffffff` | `#0f0f0f` | Main Page Background |
| **Surface** | *(variable)* | `#1a1a1a` | Cards, Panels |
| **Foreground** | `#111111` | `#f9fafb` | Primary Text |
| **Border** | `rgba(0,0,0,0.1)` | `#374151` | Default Borders |
| **Muted** | `#ececf0` | `#1f2937` | Secondary Backgrounds |

---

## Token Naming Conventions

### 1. Semantic Colour Tokens (theme.json palette)

Map to `--wp--preset--color--*`:

```css
/* Light mode defaults */
--wp--preset--color--surface-1: #ffffff;
--wp--preset--color--surface-2: #f9fafb;
--wp--preset--color--text-1: #1a1a1a;
--wp--preset--color--text-2: #4b5563;
--wp--preset--color--text-3: #6b7280;
--wp--preset--color--border-1: #e5e7eb;
--wp--preset--color--border-2: #d1d5db;
--wp--preset--color--accent-1: #7c3aed;
```

### 2. Mode Switch Mapping Layer

Active variables point to mode-specific sources:

```css
/* Light mode (default) */
:root {
  --wp--preset--color--surface-1: var(--wp--preset--color--surface-1--light, #ffffff);
  --wp--preset--color--text-1: var(--wp--preset--color--text-1--light, #1a1a1a);
  --wp--preset--color--border-1: var(--wp--preset--color--border-1--light, #e5e7eb);
}

/* Dark mode */
.theme-dark, .dark {
  --wp--preset--color--surface-1: var(--wp--preset--color--surface-1--dark, #0f0f0f);
  --wp--preset--color--text-1: var(--wp--preset--color--text-1--dark, #f9fafb);
  --wp--preset--color--border-1: var(--wp--preset--color--border-1--dark, #374151);
}
```

---

## Component Patterns

### 1. Card Component
```css
.wp-block-card {
  background-color: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  color: var(--wp--preset--color--foreground);
}
```

### 2. Primary Button
```css
.wp-block-button {
  background-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
}
```

### 3. Inputs
```css
.wp-block-input {
  background-color: var(--wp--preset--color--base);
  color: var(--wp--preset--color--foreground);
  border: 1px solid var(--wp--preset--color--border);
}
```

---

## Dark Mode Toggle Block (Rich Tabor)

### What the Toggle Does

The Dark Mode Toggle block:
- Adds/removes `.theme-dark` class on the `<html>` element (root)
- Persists user preference (localStorage/session)
- Provides accessible toggle UI with keyboard support
- Swaps light/dark icons based on current mode

### DOM Hierarchy

```html
<div class="wp-block-tabor-dark-mode-toggle [is-medium|is-large]">
  <label class="wp-block-tabor-dark-mode-toggle__label">
    <input type="checkbox" class="wp-block-tabor-dark-mode-toggle__input" />
    <span class="wp-block-tabor-dark-mode-toggle__track [has-background]">
      <span class="wp-block-tabor-dark-mode-toggle__selector">
        <svg class="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--light">...</svg>
        <svg class="wp-block-tabor-dark-mode-toggle__icon wp-block-tabor-dark-mode-toggle__icon--dark">...</svg>
      </span>
    </span>
  </label>
</div>
```

### Toggle CSS (Complete)

```css
.wp-block-tabor-dark-mode-toggle {
  --icon-size: 16px;
  display: inline-block;
}

.wp-block-tabor-dark-mode-toggle.is-medium { --icon-size: 18px; }
.wp-block-tabor-dark-mode-toggle.is-large { --icon-size: 20px; }

.wp-block-tabor-dark-mode-toggle__track {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: calc(var(--icon-size) * 2.5);
  height: calc(var(--icon-size) * 1.5);
  border-radius: calc(var(--icon-size) * 0.75);
  transition: background-color 0.2s ease;
}

.wp-block-tabor-dark-mode-toggle__track:not(.has-background) {
  background-color: var(--wp--custom--dark-mode-toggle--track--background,
                        var(--wp--preset--color--border-2, #d1d5db));
}

.wp-block-tabor-dark-mode-toggle__selector {
  position: absolute;
  left: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--icon-size) * 1.25);
  height: calc(var(--icon-size) * 1.25);
  background-color: var(--wp--custom--dark-mode-toggle--selector--background,
                        var(--wp--preset--color--surface-1, #ffffff));
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease;
}

.theme-dark .wp-block-tabor-dark-mode-toggle__selector {
  transform: translateX(calc(var(--icon-size) * 1.25));
}

.wp-block-tabor-dark-mode-toggle__input:focus-visible + .wp-block-tabor-dark-mode-toggle__track {
  outline: 2px solid var(--wp--preset--color--accent-1, #7c3aed);
  outline-offset: 2px;
}
```

---

## Do / Don't Rules

### DO
- Use token-first styling — All colours from `--wp--preset--color--*`
- Respect `.has-background` — Only apply default backgrounds when `:not(.has-background)`
- Use `.theme-dark` or `.dark` scoping — All dark mode styles under these selectors
- Provide safe fallbacks — Default values for all CSS variables
- Use semantic token names — E.g., `surface-1`, `text-1`, `border-1`, `accent-1`

### DON'T
- Hard-code hex values — Never `background: #ffffff` in component CSS
- Use `!important` — Avoid unless absolutely necessary for override
- Use Tailwind dark: utilities — e.g., `dark:bg-gray-900`
- Duplicate CSS — Use CSS variable mapping instead of duplicate rulesets

---

## Common Mistakes to Avoid

### Mistake 1: Hardcoded Hex Codes
Never use hex codes in your component CSS. Always use variables.

### Mistake 2: Assuming Light Mode Default
Don't write `background: white` and then try to override it. Start with `background: var(--wp--preset--color--background)`.

### Mistake 3: Inconsistent Hover States
Ensure your hover states (`:hover`) use variables that provide visible contrast in both modes.

---

## Accessibility Requirements

### Colour Contrast (WCAG AA)

All states must meet WCAG AA minimum:

| Element | Light Mode | Dark Mode | Contrast |
|---------|-----------|-----------|----------|
| Primary text | #1a1a1a on #ffffff | #f9fafb on #0f0f0f | 15.8:1 (AAA) |
| Secondary text | #4b5563 on #ffffff | #d1d5db on #0f0f0f | 11.4:1 (AAA) |
| Muted text | #6b7280 on #ffffff | #9ca3af on #0f0f0f | 4.5:1 (AA) |
| Accent | #7c3aed on #ffffff | #a78bfa on #0f0f0f | 5.2:1 (AAA) |
| Focus outline | #7c3aed | #a78bfa | 3:1 (UI) |

### Keyboard & Screen Reader Support
- Toggle must be keyboard accessible (Tab, Space/Enter)
- Focus ring must be visible (2px minimum)
- Screen reader must announce toggle state

---

## Checklist: Dark Mode Completion

### Site-Wide
- [ ] All components respond to `.theme-dark` / `.dark` class
- [ ] All backgrounds have dark mode variants
- [ ] All text colours have dark mode variants
- [ ] All borders have dark mode variants
- [ ] All interactive states work in both modes
- [ ] No white flashes or jarring transitions

### Testing
- [ ] Toggle switches between light/dark modes
- [ ] Preference persists on page reload
- [ ] All pages tested in both modes
- [ ] Mobile responsive in both modes
- [ ] Keyboard navigation works in both modes
- [ ] No console errors when toggling

---

## Related Documentation

- **Colour Tokens:** `/guidelines/design-tokens/colors.md`
- **Funky Design System:** `/guidelines/design-tokens/funky-woocommerce-design-system.md`
- **WordPress CSS Variables:** `/src/styles/theme-variables.css`
- **Global Stylesheet:** `/src/styles/globals.css`

---

**Status:** MANDATORY  
**Maintained by:** Design System Team  
**Review Schedule:** Quarterly
