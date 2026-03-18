# Funky form controls (shared patterns)

**Version:** 1.0
**Type:** Block (Forms — Shared Design Language)
**Applies to:** Input, Select, Checkbox, RadioGroup, QuantitySelector, Textarea, Switch
**CSS:** `/src/styles/blocks/forms/funky-form-controls.css`

---

## Overview

All form controls in the PlayPocket retro theme share a common visual language: glass backgrounds, neon focus rings, spring animations, and consistent state styling. This guideline documents the shared patterns to avoid duplication across individual component guidelines.

---

## Shared visual tokens

| Token | Value | Used for |
|-------|-------|----------|
| `--retro-color-neon-cyan` | `#00e5ff` | Focus ring, checked/selected state |
| `--retro-color-neon-pink` | `#ff2d78` | Error state, light-mode checked accent |
| `--color-glass-bg` | `rgba(255,255,255,0.05)` | Control background |
| `--color-glass-border` | `rgba(255,255,255,0.1)` | Control border |

---

## Shared states

### Focus

All form controls use the same neon focus ring:

```css
/* Shared focus pattern */
.form-control:focus-visible {
  outline: 2px solid var(--retro-color-neon-cyan);
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.25),
              0 0 20px rgba(0, 229, 255, 0.15);
}
```

### Error

```css
.form-control.is-error {
  border-color: var(--retro-color-neon-pink);
  box-shadow: 0 0 0 3px rgba(255, 45, 120, 0.25);
}
```

### Disabled

```css
.form-control.is-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

---

## Spring animation

Toggle controls (Checkbox, RadioGroup, Switch) share a spring cubic-bezier:

```css
/* Shared spring easing */
transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

Used for:
- Checkbox check mark appearance
- Radio dot appearance
- Switch thumb slide
- QuantitySelector button press

---

## Glass background

All text inputs (Input, Select trigger, Textarea) use glass morphism:

```css
background: var(--color-glass-bg);
backdrop-filter: blur(8px);
border: 1px solid var(--color-glass-border);
border-radius: var(--wp--preset--spacing--20);
```

---

## Dark mode

All controls auto-adapt via CSS variables — no `.dark` class overrides needed per component. The glass background becomes more visible in dark mode due to higher contrast against dark surfaces.

---

## Accessibility (shared)

- All controls must have associated `<label>` elements (or `aria-label`)
- Error states require `aria-describedby` pointing to error message
- Disabled controls use `aria-disabled="true"` (not just visual styling)
- Focus ring visible in both light and dark modes (neon cyan passes 3:1 against both)
- 44x44px minimum touch target on all controls

---

## Component-specific guidelines

| Component | Additional guideline |
|-----------|---------------------|
| Input | `/guidelines/blocks/forms/Input.md` |
| Select | `/guidelines/blocks/forms/Select.md` |
| Checkbox | `/guidelines/blocks/forms/Checkbox.md` |
| RadioGroup | `/guidelines/blocks/forms/RadioGroup.md` |
| QuantitySelector | `/guidelines/blocks/forms/QuantitySelector.md` |

---

**Version:** 1.0 (March 2026)
