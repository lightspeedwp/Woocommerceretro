# Margin Removal & Gap Migration Guidelines

**Category:** Development / CSS Architecture  
**Version:** 1.0  
**Last Updated:** March 11, 2026  
**Related:** [/guidelines/design-tokens/Spacing.md], [/guidelines/mobile/spacing.md], [/guidelines/development/css-optimization-guidelines.md]

---

## Overview

When migrating components from margin-based spacing to gap-based spacing (as part of CSS modularization or optimization), removing `margin` properties introduces subtle layout breakages. This document captures the patterns, edge cases, and corrective strategies discovered during real-world migration.

**Core Principle:** Margins create space *on the element*. Gaps create space *between siblings in a flex/grid parent*. Removing margins without adding a layout context to the parent container **will collapse spacing.**

---

## Rule 1: Parent Containers MUST Have a Layout Context

### The Problem

When child elements use `margin-bottom` (or `margin-top`) for vertical spacing, removing those margins leaves **no spacing mechanism** unless the parent has `display: flex` or `display: grid` with a `gap` value.

### Before (Margin-Based)

```css
/* Each child pushes itself away from the next */
.card { margin-bottom: 1.5rem; }
.card:last-child { margin-bottom: 0; }
```

### After (Gap-Based) -- CORRECT

```css
/* Parent controls spacing between children */
.card-container {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

/* No margin needed on children */
.card { /* no margin */ }
```

### After (Gap-Based) -- WRONG (Common Mistake)

```css
/* Parent has no layout context -- children stack with NO spacing */
.card-container {
  /* missing display: flex/grid and gap */
}

.card { /* margin removed but nothing replaces it */ }
```

### Edge Case: Containers Without Explicit Layout

Some containers (e.g., a plain `<div>` or WordPress `Container` component) rely on **normal flow** where margins create vertical rhythm. If you remove margins from children:

1. **Check if the parent has `display: flex` or `display: grid`** -- if not, ADD it
2. **Add `flex-direction: column`** for vertical stacking
3. **Add `gap` using a fluid design token**

---

## Rule 2: Use Fluid Gap Values, Never Arbitrary CSS Variable References

### The Problem

Arbitrary Tailwind values like `gap-[var(--spacing-gap-lg)]` bypass the design system and create maintenance burden. They also don't scale fluidly across viewports.

### WRONG -- Arbitrary Values

```tsx
{/* These bypass the design system */}
<div className="flex flex-col gap-[var(--spacing-gap-lg)]">
<div className="flex flex-col gap-[var(--spacing-gap-md)]">
<div className="flex flex-col gap-[var(--spacing-gap-sm)]">
```

### CORRECT -- WordPress Fluid Tokens (CSS)

```css
.container {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40); /* 40px default */
}
```

### CORRECT -- Fluid Utility Classes (if defined in theme)

```tsx
<div className="flex flex-col gap-fluid-lg">
<div className="flex flex-col gap-fluid-md">
<div className="flex flex-col gap-fluid-sm">
```

### Migration Table

| Deprecated Pattern | Replacement (CSS) | Replacement (Utility) |
|---|---|---|
| `gap-[var(--spacing-gap-sm)]` | `gap: var(--wp--preset--spacing--20)` | `gap-fluid-sm` |
| `gap-[var(--spacing-gap-md)]` | `gap: var(--wp--preset--spacing--40)` | `gap-fluid-md` |
| `gap-[var(--spacing-gap-lg)]` | `gap: var(--wp--preset--spacing--60)` | `gap-fluid-lg` |
| `gap-[var(--spacing-gap-xl)]` | `gap: var(--wp--preset--spacing--80)` | `gap-fluid-xl` |
| `gap-[var(--spacing-gap-2xl)]` | `gap: var(--wp--preset--spacing--90)` | `gap-fluid-2xl` |
| `gap-[var(--spacing-gap-3xl)]` | `gap: var(--wp--preset--spacing--100)` | `gap-fluid-3xl` |

### Edge Case: Undefined Tokens

If a component uses a token like `--spacing-gap-xl` that **has no corresponding utility class defined**, you must:

1. **Define the CSS variable** in `theme-variables.css` using `clamp()`
2. **Create the utility class** in the appropriate CSS file
3. **Then** migrate the component

Do NOT skip the component or use a different token -- that changes the design intent.

---

## Rule 3: Mobile-Friendly Stacking Pattern

### The Problem

Horizontal layouts (e.g., title + button side-by-side) break on mobile when elements overflow the viewport width. Buttons and secondary elements get pushed off-screen.

### The Pattern: `flex-col` (mobile) to `flex-row` (desktop)

```tsx
{/* Stacks vertically on mobile, horizontal on md+ */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-fluid-sm">
  <div>
    <h2 className="wc-block-section__title">Section Title</h2>
    <p className="wc-block-section__description">Description text</p>
  </div>
  <button className="wc-block-button wc-block-button--primary w-full md:w-auto md:shrink-0">
    Action Button
  </button>
</div>
```

### Key Classes Explained

| Class | Purpose |
|---|---|
| `flex flex-col` | Stack children vertically (mobile default) |
| `md:flex-row` | Switch to horizontal at medium breakpoint |
| `md:items-center` | Vertically center items when side-by-side |
| `md:justify-between` | Push items to opposite ends on desktop |
| `gap-fluid-sm` | Fluid gap between stacked/side-by-side items |
| `w-full md:w-auto` | Button spans full width on mobile, auto on desktop |
| `md:shrink-0` | Prevent button from shrinking on desktop |

### Edge Cases

1. **Multiple buttons:** Wrap buttons in their own `flex flex-col sm:flex-row gap-fluid-sm` container
2. **Long titles:** Add `min-w-0` to the text container to allow text truncation
3. **Icon + title combos:** See Rule 5 below

### CSS Equivalent (for WordPress class approach)

```css
.wc-block-section-header {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
}

@media (min-width: 768px) {
  .wc-block-section-header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.wc-block-section-header__action {
  width: 100%;
}

@media (min-width: 768px) {
  .wc-block-section-header__action {
    width: auto;
    flex-shrink: 0;
  }
}
```

---

## Rule 4: Margin Removal Verification Checklist

After removing margins from any component, verify:

- [ ] **Visual spacing preserved** -- Elements have the same visual gap as before
- [ ] **Parent has layout context** -- `display: flex` or `display: grid` with `gap`
- [ ] **Fluid tokens used** -- Gap uses `clamp()` or WordPress spacing variables
- [ ] **Mobile tested** -- Elements stack properly on 320px viewport
- [ ] **No overflow** -- No elements pushed off-screen on small viewports
- [ ] **Dark mode checked** -- Spacing looks correct in both themes
- [ ] **Last-child handled** -- No extra gap after the last child (gap handles this automatically, unlike margins which needed `:last-child` resets)

---

## Rule 5: Icon-Above-Title Pattern (Mobile-Friendly Headers)

### The Problem

Small icons placed inline next to titles look cramped on mobile and lack visual weight.

### The Pattern

Place the icon above the title inside a styled container:

```tsx
<div className="flex flex-col items-start gap-fluid-sm">
  {/* Icon container with background and hover */}
  <div className="wc-block-icon-container">
    <ShieldIcon className="wc-block-icon-container__icon" />
  </div>
  
  <div>
    <h1 className="wc-block-page__title">Page Title</h1>
    <p className="wc-block-page__description">Description</p>
  </div>
</div>
```

### CSS

```css
.wc-block-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--wp--preset--border-radius--md);
  background-color: color-mix(in srgb, var(--wp--preset--color--primary) 10%, transparent);
  transition: background-color var(--wp--preset--transition--base) ease;
}

.wc-block-icon-container:hover {
  background-color: color-mix(in srgb, var(--wp--preset--color--primary) 20%, transparent);
}

.wc-block-icon-container__icon {
  width: 28px;
  height: 28px;
  color: var(--wp--preset--color--primary);
}
```

---

## Rule 6: Common Edge Cases When Removing Margins

### Edge Case 1: `space-y-*` Utilities

Tailwind's `space-y-*` utilities apply `margin-top` to all children except the first. If you're eliminating these in favor of gap:

```tsx
{/* BEFORE: space-y adds margin-top to 2nd+ children */}
<div className="space-y-4">
  <p>First</p>
  <p>Second (has margin-top: 1rem)</p>
</div>

{/* AFTER: flex + gap -- equivalent spacing, no margins */}
<div className="flex flex-col gap-4">
  <p>First</p>
  <p>Second (no margin, gap handles it)</p>
</div>
```

**Caveat:** `space-y-*` works on **any** display mode (block, inline-block, etc.). Switching to `gap` requires `flex` or `grid`. Verify the parent can accept a flex/grid layout without breaking child rendering.

### Edge Case 2: Margin Collapse

CSS block margins collapse (two adjacent 16px margins become 16px, not 32px). Flex/grid gap does **not** collapse. After migration, total spacing may **increase** if the original relied on margin collapse.

**Fix:** Reduce the `gap` value to match the visually collapsed spacing, not the raw margin value.

### Edge Case 3: Mixed Spacing (Some Children Need Different Gaps)

`gap` applies **uniformly** between all children. If different children need different spacing:

1. **Option A:** Nest groups with different gap values
2. **Option B:** Use margin on the specific child that needs different spacing (acceptable exception)
3. **Option C:** Use CSS `> :nth-child()` selectors with margin overrides

```css
/* Option A: Nested groups */
.parent { display: flex; flex-direction: column; gap: var(--wp--preset--spacing--40); }
.tight-group { display: flex; flex-direction: column; gap: var(--wp--preset--spacing--20); }

/* Option B: Exception margin on specific child */
.parent { display: flex; flex-direction: column; gap: var(--wp--preset--spacing--40); }
.parent > .special-child { margin-top: var(--wp--preset--spacing--60); /* extra space above */ }
```

### Edge Case 4: Absolutely Positioned Children

Elements with `position: absolute` are removed from flow and are **not affected by gap**. If an absolute-positioned element previously had margins for positioning, those margins still serve a purpose and should NOT be removed.

### Edge Case 5: Inline Elements

`gap` only works in flex/grid contexts. Inline elements (spans, links within text) that used `margin-left` or `margin-right` for spacing **cannot** be migrated to gap. Keep their margins.

---

## Decision Tree: Should I Remove This Margin?

```
Is the margin between sibling elements in a container?
  YES -> Can the parent become flex/grid?
    YES -> Does the parent already have flex/grid?
      YES -> Add gap, remove margin
      NO  -> Add display:flex/grid + gap, remove margin
    NO  -> Keep margin (e.g., inline text, complex layout)
  NO  -> Is it margin on an absolutely positioned element?
    YES -> Keep margin (it's for positioning, not spacing)
    NO  -> Is it margin on the container itself (external spacing)?
      YES -> Evaluate case-by-case (may be needed for outer spacing)
      NO  -> Keep margin and document why
```

---

## Changelog

### v1.0 - March 11, 2026
- Initial version extracted from cross-project margin removal discussion
- 6 rules covering parent layout context, fluid tokens, mobile stacking, verification, icon patterns, and edge cases
- Decision tree for margin removal evaluation
