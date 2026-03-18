# Dark mode design standards

**Type:** Design Tokens
**Category:** Dark Mode
**Version:** 7.0
**Status:** MANDATORY FOR ALL COMPONENTS
**WCAG Compliance:** AA (4.5:1 for text, 3:1 for UI)
**Last Updated:** 2026-03-17

---

## Philosophy

Dark mode is a **first-class citizen**. Every component must support both light and dark modes using CSS variables. We do not use utility classes (like `dark:bg-black`) in markup. Instead, we use semantic variables that automatically adapt when the `.dark` class is applied to the `<html>` element.

### Core principles

1. **Semantic variables**: Use `--wp--preset--color--*` variables. They switch values automatically when `.dark` is on `<html>`.
2. **No markup changes**: React components should not need to know which mode is active.
3. **Dual-layer architecture**: Retro `--color-*` tokens (source of truth) map into `--wp--preset--color--*` tokens (consumed by components).

---

## Architecture

### Token flow

```
retro-theme.css        theme-variables.css          Component CSS
(--color-*)    --->    (--wp--preset--color--*)  --->  background-color: var(--wp--preset--color--surface)
 .dark overrides        .dark overrides
```

### Source files

| File | Role |
|------|------|
| `/src/styles/retro-theme.css` | Defines `--color-*` tokens with `.dark` overrides |
| `/src/styles/theme-variables.css` | Maps `--wp--preset--color--*` tokens to `--color-*` values |
| `/src/styles/theme-variables.css` (`.dark` block) | Dark mode overrides for WP preset tokens |

---

## Toggle mechanism

The dark mode toggle:
- Adds/removes `.dark` class on `<html>`
- Persists preference via `localStorage`
- Respects `prefers-color-scheme: dark` as initial default
- Uses `ThemeContext` (`/src/app/contexts/ThemeContext.tsx`)

```tsx
// Components access theme via context
const { isDark, toggleTheme } = useTheme();
```

---

## Colour mapping: light vs dark

### Surface tokens

| Semantic Token | Light Value | Dark Value | CSS Variable |
|---------------|-------------|------------|-------------|
| Background | `#F2EEE6` (paper) | `#151A1E` (paper) | `--wp--preset--color--background` |
| Surface | `#F7F3EB` (panel) | `#232A32` (panel) | `--wp--preset--color--surface` |
| Secondary | `#E6E0D3` (paper-deep) | `#2A333C` (panel-alt) | `--wp--preset--color--secondary` |
| Muted | `#DDD6C8` (panel-alt) | `#2A333C` (panel-alt) | `--wp--preset--color--muted` |

### Text tokens

| Semantic Token | Light Value | Dark Value | CSS Variable |
|---------------|-------------|------------|-------------|
| Foreground | `#1E2630` (ink) | `#E8E2D8` (text) | `--wp--preset--color--foreground` |
| Muted foreground | `#495565` (ink-soft) | `#9FAAAF` (text-muted) | `--wp--preset--color--muted-foreground` |
| Text secondary | `#495565` (ink-soft) | `#C4CBC3` (text-soft) | `--wp--preset--color--text-secondary` |

### Border tokens

| Semantic Token | Light Value | Dark Value | CSS Variable |
|---------------|-------------|------------|-------------|
| Border | `#8F998F` (line) | `#3E4A52` (border) | `--wp--preset--color--border` |
| Border light | `#BCC3B5` (line-soft) | `#2E3840` (border-soft) | `--wp--preset--color--border-light` |

### State tokens

| Semantic Token | Light Value | Dark Value | CSS Variable |
|---------------|-------------|------------|-------------|
| Success | `#065f46` | `#4ade80` | `--wp--preset--color--success` |
| Warning | `#92400e` | `#fbbf24` | `--wp--preset--color--warning` |
| Error | `#991b1b` | `#f87171` | `--wp--preset--color--error` |
| Info | `#1e40af` | `#8AAFC0` (sky) | `--wp--preset--color--info` |

---

## Implementation standards

### Correct: semantic variables

```css
.wp-block-card {
  background-color: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--foreground);
  border: 1px solid var(--wp--preset--color--border);
}
```

### Wrong: hardcoded values

```css
/* Never do this */
.wp-block-card {
  background-color: white;
  color: #333;
}
```

### Wrong: utility classes

```tsx
/* Never do this */
<div className="bg-white dark:bg-gray-900">...</div>
```

### When `.dark` scoping is needed

For elements that need dark-mode-specific styling beyond variable swaps:

```css
.dark .wp-block-card {
  box-shadow: 0 0 0 1px var(--wp--preset--color--border);
}
```

---

## Do / don't rules

### DO

- Use `--wp--preset--color--*` for all colours
- Use `.dark` class scoping for dark-mode-specific overrides
- Provide fallback values: `var(--wp--preset--color--surface, #F7F3EB)`
- Test every component in both modes
- Use the retro `--color-*` tokens only in `theme-variables.css` mapping layer

### DON'T

- Hardcode hex values in component CSS
- Use `!important` for dark mode overrides
- Use Tailwind `dark:` utility classes
- Reference `--color-*` tokens directly in component CSS (use `--wp--preset--color--*` instead)
- Assume light mode as default without variable fallback

---

## Accessibility requirements

### Colour contrast (WCAG AA)

| Element | Light Mode | Dark Mode | Ratio |
|---------|-----------|-----------|-------|
| Primary text | `#1E2630` on `#F2EEE6` | `#E8E2D8` on `#151A1E` | 12.1:1 / 11.8:1 (AAA) |
| Muted text | `#495565` on `#F2EEE6` | `#9FAAAF` on `#151A1E` | 5.2:1 / 5.8:1 (AA) |
| Success | `#065f46` on `#F2EEE6` | `#4ade80` on `#151A1E` | 7.1:1 / 8.2:1 (AAA) |
| Error | `#991b1b` on `#F2EEE6` | `#f87171` on `#151A1E` | 7.1:1 / 5.1:1 (AA) |

### Focus ring

```css
--wp--preset--focus-ring--width: 2px;
--wp--preset--focus-ring--color: var(--wp--preset--color--primary);
--wp--preset--focus-ring--offset: 2px;
```

---

## Related documentation

- **Colour tokens:** `/guidelines/design-tokens/Colors.md`
- **Theme variables:** `/src/styles/theme-variables.css`
- **Retro theme:** `/src/styles/retro-theme.css`
- **Typography:** `/guidelines/design-tokens/Typography.md`

---

**Status:** MANDATORY
**Maintained by:** Design System Team
**Review Schedule:** Quarterly
