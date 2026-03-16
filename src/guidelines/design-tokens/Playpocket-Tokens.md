# Playpocket Design Tokens

**What this is:** Canonical semantic token map for the Playpocket retro theme.
**Version:** 1.0
**Last updated:** 2026-03-15
**Status:** Active

---

## Goal

Define the single source of truth for all colour, typography, spacing, and motion tokens used in the Playpocket retro prototype. This file governs what values are allowed, where literal values may appear, and how light/dark mode switching works.

This token set MUST NOT contain:
- Tailwind utility references
- Legacy "funky/bento" palette values
- Inline hex/rgb/hsl in any component or section CSS

---

## Canonical Implementation Files

All literal colour values (hex/rgba/hsl) are ONLY allowed in these token ref files:

| File | Purpose | Literals Allowed |
|------|---------|-----------------|
| `/src/styles/tokens/color.ref.light.css` | Light mode literal values | Yes |
| `/src/styles/tokens/color.ref.dark.css` | Dark mode literal values (`.dark` scope) | Yes |
| `/src/styles/tokens/color.semantic.css` | Semantic mapping (`var()` only, no literals) | No |
| `/src/styles/tokens/typography.css` | Font families/sizes as WP variables | Font names only |
| `/src/styles/tokens/spacing.css` | WP spacing tokens | Size values only |
| `/src/styles/tokens/motion.css` | Easings/durations, reduced motion | Duration/easing only |

**Status:** The first three colour token files are **created and active**. Typography, spacing, and motion token files are planned.

**Legacy files to deprecate:** `theme-variables.css` and `theme-dark-mode.css` contain overlapping token definitions that must be consolidated into the canonical files above. Until deprecated, check for conflicts where both old and new files define the same variable.

---

## Semantic Token Map

### Core Tokens

| Semantic Token | Light Value | Dark Value | Usage Rules |
|----------------|-------------|------------|-------------|
| `--wp--preset--color--background` | `#F2EEE6` | `#151A1E` | Page background; never transparent for default pages |
| `--wp--preset--color--foreground` | `#1E2630` | `#F2EEE6` | Primary text; default text colour |
| `--wp--preset--color--surface` | `#FFFFFF` | `#1B2228` | Cards, panels; subtle contrast vs background |
| `--wp--preset--color--surface-2` | `#E7E2D8` | `#232D35` | Secondary surfaces (striped rows, subtle panels) |
| `--wp--preset--color--border` | `#CBD5C9` | `#2A3A46` | Borders/dividers; 3:1 for meaningful boundaries (WCAG 1.4.11) |
| `--wp--preset--color--muted` | `#E7E2D8` | `#232D35` | Muted background fills (chips, subtle panels) |
| `--wp--preset--color--muted-foreground` | `#4B5563` | `#B7C3CC` | Secondary text; must hit 4.5:1 on intended background (WCAG 1.4.3) |

### Brand Tokens

| Semantic Token | Light Value | Dark Value | Usage Rules |
|----------------|-------------|------------|-------------|
| `--wp--preset--color--primary` | `#FFC533` | `#FFC533` | Primary actions/CTAs (retro "signal"); avoid for body text |
| `--wp--preset--color--primary-foreground` | `#1E2630` | `#1E2630` | Text/icons on primary (dark ink both modes) |
| `--wp--preset--color--secondary` | `#6BBF59` | `#6BBF59` | Secondary actions/success-leaning UI |
| `--wp--preset--color--secondary-foreground` | `#1E2630` | `#1E2630` | Text/icons on secondary |
| `--wp--preset--color--accent` | `#D4143D` | `#D4143D` | High-attention accent; sparing use (badges, highlights) |
| `--wp--preset--color--accent-foreground` | `#F2EEE6` | `#F2EEE6` | Text on accent backgrounds |

### Interactive Tokens

| Semantic Token | Light Value | Dark Value | Usage Rules |
|----------------|-------------|------------|-------------|
| `--wp--preset--color--link` | `#0F4C5C` | `#00FFF9` | Links MUST be distinguishable beyond colour (underline or cue) |
| `--wp--preset--color--ring` | `#00FFF9` | `#00FFF9` | Focus rings/outlines; 3:1 vs adjacent colours (WCAG 1.4.11) |

### State Tokens

| Semantic Token | Light Value | Dark Value | Usage Rules |
|----------------|-------------|------------|-------------|
| `--wp--preset--color--success` | `#2ECC71` | `#86EFAC` | Semantic success state |
| `--wp--preset--color--warning` | `#F59E0B` | `#FBBF24` | Semantic warning state |
| `--wp--preset--color--error` | `#DC2626` | `#FCA5A5` | Semantic error state |

### Decorative Neon Tokens (NEVER for body text)

| Semantic Token | Value (both modes) | Usage Rules |
|----------------|-------------------|-------------|
| `--wp--preset--color--neon-cyan` | `#00FFF9` | Decorative only: glows, borders, effects |
| `--wp--preset--color--neon-pink` | `#FF00FF` | Decorative only: highlights, accents |
| `--wp--preset--color--neon-lime` | `#CCFF00` | Decorative only: badges, indicators |
| `--wp--preset--color--neon-yellow` | `#FFC533` | Decorative only: same as primary signal |

---

## Rules

### MUST

- All component/section CSS MUST use `var(--wp--preset--color--*)` for colours
- All spacing MUST use `var(--wp--preset--spacing--*)` tokens
- All font sizes MUST use `var(--wp--preset--font-size--*)` tokens
- Dark mode MUST be toggled via `.dark` class on `<html>`
- Neon tokens MUST only be used for decorative purposes (never body text)
- Text on primary/secondary/accent backgrounds MUST use the corresponding `-foreground` token
- Link colour MUST be paired with a non-colour distinguishing cue (underline)

### MUST NOT

- No literal hex/rgb/hsl values in component CSS, section CSS, or inline styles
- No `dark:` prefix classes (Tailwind pattern)
- No inline `style={{ color: '#...' }}` in components
- No `!important` overrides on token values
- No legacy funky/bento palette references

### SHOULD

- Components SHOULD rely on semantic tokens auto-switching via `.dark` (no per-component `.dark` overrides unless necessary)
- New tokens SHOULD follow the `--wp--preset--color--{semantic-name}` naming pattern
- Token additions SHOULD be documented in this file before implementation

---

## Mode Switch Architecture

### Single Pattern

```
:root { color-scheme: light; }        /* color.ref.light.css */
.dark { color-scheme: dark; }          /* color.ref.dark.css */
:root { --wp--preset--color--*: var(--wp--custom--color--*); }  /* color.semantic.css */
```

### How It Works

1. `color.ref.light.css` defines `--wp--custom--color--*` literals under `:root`
2. `color.ref.dark.css` overrides the same `--wp--custom--color--*` literals under `.dark`
3. `color.semantic.css` maps `--wp--preset--color--*` to `var(--wp--custom--color--*)`
4. Components use only `var(--wp--preset--color--*)` -- they never know which mode is active

---

## Examples

### Correct

```css
.retro-card {
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--foreground);
  border: 1px solid var(--wp--preset--color--border);
}

.retro-card__badge {
  background: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--primary-foreground);
}
```

### Incorrect

```css
/* WRONG: literal colour */
.retro-card { background: #FFFFFF; }

/* WRONG: Tailwind dark mode */
.retro-card { @apply dark:bg-gray-800; }

/* WRONG: inline style */
<div style={{ color: '#1E2630' }} />
```

---

## Audit Checklist

Use this checklist when auditing components against this guideline:

- [ ] No hex/rgb/hsl literals in component or section CSS
- [ ] All colours reference `--wp--preset--color--*` tokens
- [ ] Neon colours used decoratively only (not for text)
- [ ] Link text has non-colour distinguishing cue
- [ ] Text contrast meets 4.5:1 (WCAG 1.4.3)
- [ ] UI boundaries meet 3:1 (WCAG 1.4.11)
- [ ] Focus ring uses `--wp--preset--color--ring`
- [ ] No Tailwind colour utilities
- [ ] No inline style colour overrides
- [ ] Token values match this table (no drift)

---

## Typography Tokens

### Font Families

| Token | Value | Usage |
|-------|-------|-------|
| `--wp--preset--font-family--brand` | `'Space Grotesk', sans-serif` | Logo wordmark, display headings |
| `--wp--preset--font-family--body` | `'Inter', sans-serif` | Body text, UI labels |
| `--wp--preset--font-family--mono` | `'JetBrains Mono', monospace` | Code, prices, SKUs, counters |

### Font Sizes

Follow WordPress fluid typography scale. See `/guidelines/design-tokens/Typography.md` for the complete scale.

---

## Spacing Tokens

Follow WordPress spacing preset scale. See `/guidelines/design-tokens/Spacing.md` for the complete scale.

---

## Motion Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--wp--custom--motion--duration-fast` | `150ms` | Micro-interactions (hover, focus) |
| `--wp--custom--motion--duration-normal` | `300ms` | Standard transitions |
| `--wp--custom--motion--duration-slow` | `500ms` | Page transitions, reveals |
| `--wp--custom--motion--easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |
| `--wp--custom--motion--easing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful retro bounce |

All motion MUST respect `prefers-reduced-motion: reduce`. See `/guidelines/REDUCED_MOTION_GUIDELINES.md`.

---

## Changelog

- 2026-03-15 v1.0 -- Initial creation from playpocket-tokens analysis

---

## Related Documentation

- `/guidelines/design-tokens/Colors.md` -- General colour system
- `/guidelines/design-tokens/Dark-Mode.md` -- Dark mode implementation
- `/guidelines/design-tokens/Typography.md` -- Typography scale
- `/guidelines/design-tokens/Spacing.md` -- Spacing scale
- `/guidelines/REDUCED_MOTION_GUIDELINES.md` -- Motion accessibility
- `/guidelines/development/modern-react-coding-standards.md` -- Section 9 (styling rules)