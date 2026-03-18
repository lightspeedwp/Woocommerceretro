# Typography design tokens

**Component Type:** Design System
**Scope:** WordPress theme.json aligned typography scale
**Related:** [Colors.md](./Colors.md), [Spacing.md](./Spacing.md), [Dark-Mode.md](./Dark-Mode.md)
**Canonical Source:** `/src/styles/theme-variables.css`
**Last Updated:** 2026-03-17
**Version:** 3.0

---

## Overview

Fluid typography using `clamp()` across a numeric 100-900 scale, aligned to WordPress theme.json conventions. All components must use `<Heading>` or `<Typography>` components for headings -- no bare `<h1>`-`<h6>` tags.

---

## Font families

| Token | Value | CSS Variable |
|-------|-------|-------------|
| Base | System sans-serif stack | `--wp--preset--font-family--base` |
| Heading | System sans-serif stack | `--wp--preset--font-family--heading` |
| Mono | System monospace stack | `--wp--preset--font-family--mono` |

```css
--wp--preset--font-family--base: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
--wp--preset--font-family--mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

---

## Numeric font size scale (100-900)

| Slug | Fluid clamp() | Px Range | CSS Variable | Usage |
|------|--------------|----------|-------------|-------|
| `xs` | `clamp(0.6rem, 0.4vw + 0.5rem, 0.7rem)` | 9.6-11.2px | `--wp--preset--font-size--xs` | Keyboard shortcuts, captions |
| `100` | `clamp(0.65rem, 0.5vw + 0.55rem, 0.75rem)` | 10.4-12px | `--wp--preset--font-size--100` | Labels, badges, meta |
| `200` | `clamp(0.875rem, 0.5vw + 0.75rem, 1rem)` | 14-16px | `--wp--preset--font-size--200` | Body text (base) |
| `300` | `clamp(1rem, 1vw + 0.75rem, 1.25rem)` | 16-20px | `--wp--preset--font-size--300` | Emphasized body |
| `400` | `clamp(1.25rem, 1.5vw + 0.875rem, 1.5rem)` | 20-24px | `--wp--preset--font-size--400` | H6, minor headings |
| `500` | `clamp(1.5rem, 2vw + 1rem, 2rem)` | 24-32px | `--wp--preset--font-size--500` | H5, sub-sections |
| `600` | `clamp(2rem, 2.5vw + 1.25rem, 2.5rem)` | 32-40px | `--wp--preset--font-size--600` | H4, widget titles |
| `700` | `clamp(2.5rem, 3vw + 1.5rem, 3rem)` | 40-48px | `--wp--preset--font-size--700` | H3, card titles |
| `800` | `clamp(3rem, 4vw + 2rem, 4rem)` | 48-64px | `--wp--preset--font-size--800` | H2, section headings |
| `900` | `clamp(3.5rem, 5vw + 2.5rem, 5rem)` | 56-80px | `--wp--preset--font-size--900` | H1, hero titles |

### Named aliases

These map to the numeric scale for backward compatibility:

| Alias | Maps To | CSS Variable |
|-------|---------|-------------|
| `small` | `100` | `--wp--preset--font-size--small` |
| `medium` | `200` | `--wp--preset--font-size--medium` |
| `normal` | `200` | `--wp--preset--font-size--normal` |
| `large` | `300` | `--wp--preset--font-size--large` |
| `x-large` | `400` | `--wp--preset--font-size--x-large` |
| `xx-large` | `500` | `--wp--preset--font-size--xx-large` |
| `xxx-large` | `600` | `--wp--preset--font-size--xxx-large` |
| `huge` | `800` | `--wp--preset--font-size--huge` |
| `gigantic` | `900` | `--wp--preset--font-size--gigantic` |

---

## Font weights

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| Light | 300 | `--wp--preset--font-weight--light` | De-emphasized text |
| Normal | 400 | `--wp--preset--font-weight--normal` | Body text |
| Medium | 500 | `--wp--preset--font-weight--medium` | Labels, emphasized text |
| Semibold | 600 | `--wp--preset--font-weight--semibold` | H2-H3, subheadings |
| Bold | 700 | `--wp--preset--font-weight--bold` | H1, prices, CTAs |
| Black | 900 | `--wp--preset--font-weight--black` | Display text, badges |

---

## Line heights

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| Tight | 1.15 | `--wp--preset--line-height--tight` | Large headings (H1-H2) |
| Snug | 1.3 | `--wp--preset--line-height--snug` | Medium headings (H3-H4) |
| Normal | 1.5 | `--wp--preset--line-height--normal` | Body text |
| Relaxed | 1.625 | `--wp--preset--line-height--relaxed` | Long-form content |
| Loose | 1.8 | `--wp--preset--line-height--loose` | Spaced text blocks |

---

## Letter spacing

| Token | Value | CSS Variable | Usage |
|-------|-------|-------------|-------|
| Tight | -0.02em | `--wp--preset--letter-spacing--tight` | Large headings |
| Normal | 0 | `--wp--preset--letter-spacing--normal` | Body text |
| Wide | 0.05em | `--wp--preset--letter-spacing--wide` | Labels, uppercase text |

---

## Heading component (mandatory)

All headings **must** use the `<Heading>` component. No bare `<h1>`-`<h6>` tags.

```tsx
import { Heading } from '@/components/common/Heading';

<Heading level={1}>Hero title</Heading>
<Heading level={2}>Section heading</Heading>
<Heading level={3}>Card title</Heading>
```

### Rules

1. **Sentence case**: Capitalise only the first word and proper nouns
2. **Never skip levels**: h1 to h2 to h3 (no h1 to h3)
3. **One H1 per page**: Each template has exactly one `<h1>`
4. **No manual sizing**: Do not override Heading sizes with CSS classes

---

## Hierarchy rules

| Element | Slug | Px Range | Weight | Line Height |
|---------|------|----------|--------|------------|
| `<h1>` | `900` | 56-80px | Bold (700) | Tight (1.15) |
| `<h2>` | `800` | 48-64px | Semibold (600) | Tight (1.15) |
| `<h3>` | `700` | 40-48px | Semibold (600) | Snug (1.3) |
| `<h4>` | `600` | 32-40px | Medium (500) | Snug (1.3) |
| `<h5>` | `500` | 24-32px | Medium (500) | Normal (1.5) |
| `<h6>` | `400` | 20-24px | Medium (500) | Normal (1.5) |
| `<p>` | `200` | 14-16px | Normal (400) | Normal (1.5) |
| `<small>` | `100` | 10.4-12px | Normal (400) | Normal (1.5) |

---

## Related documentation

- **Canonical source:** `/src/styles/theme-variables.css`
- **Heading component:** `/src/app/components/common/Heading.tsx`
- **Typography component:** `/src/app/components/common/Typography.tsx`
- **Colours:** `/guidelines/design-tokens/Colors.md`
- **Spacing:** `/guidelines/design-tokens/Spacing.md`

---

**Version:** 3.0
**Last Updated:** 2026-03-17
