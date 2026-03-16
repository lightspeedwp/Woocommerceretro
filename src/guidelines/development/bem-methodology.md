# BEM Methodology — PlayPocket Retro Theme

**Category:** Development / CSS Architecture
**Version:** 1.0
**Last Updated:** March 16, 2026
**Related:** [/guidelines/development/modern-react-coding-standards.md] Section 9, [/guidelines/design-tokens/Playpocket-Tokens.md], [/guidelines/design-tokens/Dark-Mode.md]
**Trigger:** `apply bem` (see [/guidelines/PROMPT-TRIGGERS.md])

---

## Overview

This guideline defines the BEM (Block Element Modifier) naming methodology for the PlayPocket retro theme. It extends the rules in `modern-react-coding-standards.md` Section 9 with retro-specific conventions, prefix allocation, dark mode requirements, and WCAG contrast rules for new BEM classes.

---

## 1. BEM Naming Convention

### 1.1 Syntax

```
.[prefix]-[block]__[element]--[modifier]
```

- **Block:** Standalone entity (e.g., `retro-blog-card`)
- **Element:** Part of a block, separated by `__` (e.g., `retro-blog-card__title`)
- **Modifier:** Variation or state, separated by `--` (e.g., `retro-blog-card--compact`)

### 1.2 Prefix Allocation

| Prefix | Scope | When to Use | Example |
|--------|-------|-------------|---------|
| `retro-` | Retro theme components | All PlayPocket retro design components | `retro-blog-card__body` |
| `pp-` | PlayPocket brand elements | Logo, brand-specific decorative elements | `pp-logo__keycap` |
| `wp-block-` | WordPress core blocks | Breadcrumbs, navigation, pagination, buttons | `wp-block-breadcrumb__link` |
| `wc-block-` | WooCommerce blocks | Product cards, cart items, checkout fields | `wc-block-product-card__price` |
| `wp-` | WordPress utilities | Layout utilities, alignment classes | `wp-heading--1` |

**Rule:** Never mix prefixes within the same BEM block. A `retro-` block's elements must all be `retro-` prefixed.

### 1.3 Naming Rules

| Rule | Correct | Incorrect |
|------|---------|-----------|
| Kebab-case only | `retro-blog-card` | `retroBlogCard`, `Retro_Blog_Card` |
| Double underscore for elements | `retro-card__title` | `retro-card-title` (ambiguous) |
| Double dash for modifiers | `retro-card--active` | `retro-card-active` (ambiguous) |
| Descriptive block names | `retro-author-header` | `retro-section-1`, `retro-box` |
| No nesting beyond 1 level | `retro-card__meta` | `retro-card__meta__date` (too deep) |

### 1.4 Handling Deep Nesting

If you need to style a child of an element, flatten the name:

```css
/* WRONG: nested elements */
.retro-card__meta__date { }

/* CORRECT: flattened */
.retro-card__meta-date { }
/* or create a new block if it's complex enough */
.retro-card-meta__date { }
```

---

## 2. Retro Design Style Rules for New BEM Classes

Every new BEM class MUST comply with the PlayPocket retro aesthetic:

### 2.1 Borders

```css
/* Standard card/container border */
border: 2px solid var(--color-ink);     /* Light */
border: 3px solid var(--color-ink);     /* Prominent elements */

/* NEVER use: */
border: 1px solid #e5e7eb;             /* Too thin, hardcoded */
border-radius: 8px;                     /* Retro = sharp corners */
```

### 2.2 Shadows

```css
/* Standard retro shadow */
box-shadow: 4px 4px 0px var(--color-ink);

/* Large retro shadow (hero cards, featured sections) */
box-shadow: 6px 6px 0px var(--color-ink);

/* NEVER use: */
box-shadow: 0 4px 6px rgba(0,0,0,0.1);  /* Soft shadow is not retro */
```

### 2.3 Colours (Variables Only)

| Purpose | Variable | Fallback |
|---------|----------|----------|
| Primary text | `var(--color-ink)` | — |
| Secondary text | `var(--color-muted)` | — |
| Page background | `var(--color-paper)` | — |
| Card/panel background | `var(--color-panel)` | — |
| Accent/CTA | `var(--color-signal)` | — |
| Borders/dividers | `var(--color-border)` | — |
| Focus rings | `var(--color-focus)` | — |

For WordPress-prefixed equivalents, see `/guidelines/design-tokens/Playpocket-Tokens.md`.

### 2.4 Typography Classes

```tsx
// Display text (headings, labels, badges)
<h2 className="retro-[block]__title retro-font-display retro-bold">TITLE</h2>

// Body text (paragraphs, descriptions)
<p className="retro-font-body retro-[block]__description">Description text.</p>
```

| Class | Purpose | Notes |
|-------|---------|-------|
| `retro-font-display` | Display/heading typeface | Monospace/pixel-style |
| `retro-font-body` | Body text typeface | Readable sans-serif |
| `retro-bold` | Bold weight | Pairs with `retro-font-display` |

### 2.5 Border Radius

```css
/* Cards, containers, sections: NO radius */
border-radius: 0;

/* Small inner elements (input fields, screen areas): minimal radius */
border-radius: 2px;
border-radius: 3px;

/* NEVER use on retro components: */
border-radius: 8px;
border-radius: var(--wp--preset--radius--md);
```

### 2.6 Scanline / CRT Effects (Decorative Only)

```css
/* Scanline overlay — use on hero images and dark sections */
.retro-[block]__scanline {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(255,255,255,0.03) 2px,
    rgba(255,255,255,0.03) 4px
  );
  pointer-events: none;
}
```

Always add `aria-hidden="true"` to scanline overlay elements.

---

## 3. Dark Mode Requirements

### 3.1 Automatic Mode Switching

All retro theme tokens (`--color-ink`, `--color-paper`, `--color-signal`, etc.) are defined in `/src/styles/retro-theme.css` with both `:root` and `.dark` values. Classes using these tokens auto-switch.

**No per-component `.dark` overrides are needed if you use retro tokens exclusively.**

### 3.2 When .dark Overrides ARE Needed

Only add `.dark` overrides when:
- Using a `rgba()` value that needs different alpha in dark mode
- Using decorative gradients that look wrong inverted
- Using `filter` or `opacity` that needs dark mode adjustment

```css
/* Auto-switching (no override needed) */
.retro-card {
  background: var(--color-paper);    /* Switches automatically */
  color: var(--color-ink);           /* Switches automatically */
  border: 2px solid var(--color-ink); /* Switches automatically */
}

/* Manual override needed (decorative alpha) */
.retro-card__overlay {
  background: rgba(0, 0, 0, 0.05);
}
.dark .retro-card__overlay {
  background: rgba(255, 255, 255, 0.03);
}
```

### 3.3 Banned Dark Mode Patterns

| Pattern | Why Banned |
|---------|-----------|
| `dark:bg-gray-900` | Tailwind utility class |
| `className={isDark ? 'dark-class' : 'light-class'}` | Runtime theme detection in markup |
| `style={{ background: isDark ? '#000' : '#fff' }}` | Inline conditional styles |
| Hardcoded hex in `.dark` selectors | Must use CSS variables |

---

## 4. WCAG Contrast Requirements

### 4.1 Minimum Ratios

| Content Type | Minimum Ratio | Standard | Target Ratio |
|-------------|---------------|----------|-------------|
| Normal text (< 18px bold, < 24px regular) | 4.5:1 | WCAG AA | 7:1 (AAA) |
| Large text (>= 18px bold, >= 24px regular) | 3:1 | WCAG AA | 4.5:1 (AAA) |
| UI components, graphical objects | 3:1 | WCAG 1.4.11 | 4.5:1 |
| Focus indicators | 3:1 vs adjacent | WCAG 2.4.11 | — |

### 4.2 Verified Retro Theme Pairings

These pairings have been verified as WCAG AA compliant:

| Foreground | Background | Mode | Approx Ratio | Status |
|------------|------------|------|-------------|--------|
| `--color-ink` (#1E2630) | `--color-paper` (#F2EEE6) | Light | ~11:1 | AAA Pass |
| `--color-ink` (#1E2630) | `--color-panel` | Light | ~9:1 | AAA Pass |
| `--color-paper` (#F2EEE6) | `--color-ink` (#1E2630) | Light | ~11:1 | AAA Pass |
| `--color-signal` (#FFC533) | `--color-ink` (#1E2630) | Light | ~7:1 | AAA Pass |
| `--color-muted` | `--color-paper` | Light | ~5:1 | AA Pass |

**Always verify dark mode pairings separately.** Dark mode tokens have different literal values.

### 4.3 When Adding New Colour Pairings

1. Look up both foreground and background hex values in the token files
2. Calculate contrast ratio (use WebAIM contrast checker formula)
3. If ratio < 4.5:1 for text, choose a different token or recommend a new one
4. Document the pairing and ratio in the CSS file comment

---

## 5. CSS File Placement

### 5.1 Where to Create New CSS

| Component Type | CSS File Location | Naming |
|----------------|-------------------|--------|
| Blog blocks | `/src/styles/sections/retro-blog.css` | Existing file |
| Product blocks | `/src/styles/blocks/single-product/` | Existing directory |
| Navigation blocks | `/src/styles/blocks/navigation/` | Existing directory |
| Layout/structural | `/src/styles/sections/retro-page-layouts.css` | Existing file |
| New retro sections | `/src/styles/sections/retro-[name].css` | New file |
| New retro blocks | `/src/styles/blocks/[category]/retro-[name].css` | New file |

### 5.2 File Header Template

```css
/**
 * [BEM Block Name] — PlayPocket Retro Theme
 *
 * BEM block: .[prefix]-[block-name]
 * Component: /src/app/components/[type]/[ComponentName].tsx
 * 
 * Uses CSS variables from:
 *   - /src/styles/retro-theme.css (--color-*)
 *   - /src/styles/theme-variables.css (--wp--preset--*)
 */
```

### 5.3 @import Registration

After creating a new CSS file, add its `@import` to `/styles/globals.css` in the appropriate section (blocks or sections).

---

## 6. Quick Reference: Violation Type Decision Tree

```
Is there a className? ─── NO ──► Violation Type 1 (Missing BEM)
        │
       YES
        │
Is it a Tailwind class? ─── YES ──► Violation Type 3 (Tailwind)
        │
       NO
        │
Is it BEM with correct prefix? ─── NO ──► Violation Type 4 (Naming)
        │
       YES
        │
Does matching CSS exist? ─── NO ──► Violation Type 5 (Orphan — in reverse)
        │
       YES
        │
Does CSS use variables? ─── NO ──► Violation Type 2 (Inline/hardcoded)
        │
       YES
        │
Does it support dark mode? ─── NO ──► Violation Type 6 (Dark Mode)
        │
       YES
        │
       PASS
```

---

**Version:** 1.0
**Last Updated:** March 16, 2026
**Lines:** ~300
