# CSS Migration: Tailwind to WordPress Classes

**Version:** v2.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-03-11  
**Category:** Refactoring  
**Status:** Active  
**Supersedes:** v1.0

---

## Changelog (v2.0)

- **NEW:** Section 6 - Margin Removal & Gap Migration Rules (6 rules from `/guidelines/development/margin-removal-guidelines.md`)
- **NEW:** `space-y-*` to `flex + gap` migration pattern
- **NEW:** Inline `style={{}}` to BEM CSS class migration (critical for account/retro components)
- **UPDATED:** Spacing mapping table now uses WordPress numeric scale (10-100) per `/guidelines/design-tokens/Spacing.md`
- **UPDATED:** Verification checklist includes parent layout context and mobile stacking checks
- **UPDATED:** Added common edge cases (margin collapse, mixed spacing, absolute positioning)

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | CSS Refactoring |
| **Target** | Component files with Tailwind classes, inline styles, and margin-based spacing |
| **Complexity** | Medium-High |
| **Estimated Time** | 60-90 minutes per component |
| **Prerequisites** | Guidelines.md, Spacing.md, margin-removal-guidelines.md |
| **Output Files** | Refactored component + new/updated CSS file in `/src/styles/blocks/` or `/src/styles/sections/` |

---

## 🎯 Objective

Systematically migrate components from Tailwind utility classes AND inline styles to WordPress/WooCommerce semantic class names with modular CSS files, while correctly handling margin-to-gap spacing transitions.

### What This Prompt Does:
- ✅ Identifies Tailwind classes in component
- ✅ Identifies inline `style={{}}` attributes
- ✅ Identifies margin-based spacing that should become gap-based
- ✅ Creates semantic WordPress BEM class names
- ✅ Writes modular CSS with WordPress variables
- ✅ Ensures parent containers have layout context when removing margins
- ✅ Implements mobile-friendly stacking patterns
- ✅ Preserves dark mode functionality
- ✅ Maintains accessibility features

### What This Prompt Does NOT Do:
- ❌ Remove Tailwind from project (gradual migration)
- ❌ Migrate all components at once
- ❌ Change component functionality
- ❌ Alter component structure

---

## 📚 Pre-Read (Required)

```
/guidelines/Guidelines.md                              — Section 4.1: NO TAILWIND CSS
/guidelines/design-tokens/Spacing.md                   — WordPress spacing scale (10-100)
/guidelines/development/margin-removal-guidelines.md   — Margin removal rules & edge cases
/guidelines/design-tokens/Colors.md                    — WordPress color system
/guidelines/design-tokens/Typography.md                — WordPress typography system
/src/styles/theme-variables.css                        — Canonical WordPress tokens
```

---

## 🔧 Implementation Instructions

### Step 1: Analyze Current Component

**Action:** Identify ALL styling violations

**Process:**
1. Open component file
2. List all `className` attributes containing Tailwind utilities
3. List all `style={{}}` inline style attributes
4. Identify margin-based spacing between siblings (candidates for gap)
5. Identify `space-y-*` or `space-x-*` usage
6. Note responsive variants and dark mode classes
7. Check if parent containers have `display: flex/grid`

**Example Analysis:**
```tsx
// VIOLATION 1: Tailwind utility classes
className="flex flex-col gap-4 mb-8"

// VIOLATION 2: Inline styles
style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--30)' }}

// VIOLATION 3: Margin-based sibling spacing (no parent gap)
<div>
  <p className="mb-4">First</p>
  <p className="mb-4">Second</p>
  <p>Third</p>
</div>

// VIOLATION 4: space-y-* usage
<div className="space-y-4">...</div>
```

---

### Step 2: Create Semantic Class Names

**Naming Convention:**
```
[prefix]-[block]__[element]--[modifier]
```

**Prefixes:**
- `wc-block-` — WooCommerce blocks
- `wp-block-` — WordPress blocks
- `prototype-block-` — Custom blocks

---

### Step 3: Write Modular CSS

**Action:** Create CSS file in `/src/styles/blocks/[category]/` or `/src/styles/sections/`

**CRITICAL:** Add `@import` to `/styles/globals.css` for any new CSS file.

**Template:**
```css
/* ============================================
   COMPONENT NAME
   Block: .wc-block-component-name
   File: /src/styles/blocks/[category]/component-name.css
   ============================================ */

.wc-block-component-name {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
  padding: var(--wp--preset--spacing--50);
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--lg);
}

.wc-block-component-name__title {
  font-size: var(--wp--preset--font-size--large);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
  /* NO margin-bottom needed — parent gap handles spacing */
}

/* Dark Mode */
.dark .wc-block-component-name {
  background: var(--wp--preset--color--surface-dark);
  border-color: var(--wp--preset--color--border-dark);
}
```

---

### Step 4: Refactor Component

**Replace all Tailwind/inline with semantic classes:**

**Before:**
```tsx
<div className="flex flex-col gap-4 mb-8" style={{ padding: 'var(--wp--preset--spacing--50)' }}>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
  <p className="text-gray-600 dark:text-gray-400">{description}</p>
</div>
```

**After:**
```tsx
<div className="wc-block-component-name">
  <h3 className="wc-block-component-name__title">{title}</h3>
  <p className="wc-block-component-name__description">{description}</p>
</div>
```

---

## 🚨 Section 6: Margin Removal & Gap Migration Rules (NEW in v2.0)

**Reference:** `/guidelines/development/margin-removal-guidelines.md`

### Rule 1: Parent Containers MUST Have Layout Context

When removing `margin-bottom` or `margin-top` from child elements, the parent **MUST** have `display: flex` or `display: grid` with a `gap` value. Otherwise spacing collapses.

**WRONG (spacing collapses):**
```css
/* Parent has no layout — children have no spacing */
.parent { /* nothing */ }
.child { /* margin removed */ }
```

**CORRECT:**
```css
.parent {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}
.child { /* no margin needed */ }
```

### Rule 2: Use WordPress Spacing Scale (10-100), Not Arbitrary Values

| Tailwind | WordPress Variable | Size |
|----------|-------------------|------|
| `gap-1` / `space-y-1` | `--wp--preset--spacing--10` | 10px |
| `gap-2` / `space-y-2` / `mb-2` | `--wp--preset--spacing--20` | 20px |
| `gap-3` / `mb-3` | `--wp--preset--spacing--30` | 30px |
| `gap-4` / `space-y-4` / `mb-4` | `--wp--preset--spacing--40` | 40px |
| `gap-6` / `mb-6` | `--wp--preset--spacing--50` | 50px |
| `gap-8` / `mb-8` | `--wp--preset--spacing--60` | 60px |
| `gap-10` / `mb-10` | `--wp--preset--spacing--70` | 70px |
| `gap-12` / `mb-12` | `--wp--preset--spacing--80` | 80px |
| `gap-16` / `mb-16` | `--wp--preset--spacing--90` | 90px |
| `gap-20` | `--wp--preset--spacing--100` | 100px |

**NEVER use arbitrary values:**
```css
/* ❌ WRONG */
gap: var(--spacing-gap-lg);    /* non-standard token */
gap: 24px;                     /* hardcoded */

/* ✅ CORRECT */
gap: var(--wp--preset--spacing--40);
```

### Rule 3: Migrate `space-y-*` to `flex + gap`

`space-y-*` applies `margin-top` to children 2+. Replace with `flex-direction: column` + `gap`.

**Before:**
```tsx
<div className="space-y-4">
  <p>First</p>
  <p>Second</p>
</div>
```

**After (CSS):**
```css
.component__list {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}
```

```tsx
<div className="component__list">
  <p>First</p>
  <p>Second</p>
</div>
```

**Caveat:** Verify the parent can accept flex layout without breaking child rendering (e.g., children that rely on block-level width).

### Rule 4: Migrate Inline Styles to CSS Classes

Many components (especially account/retro patterns) use `style={{}}` with WordPress variables. These MUST become CSS classes.

**Before:**
```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--wp--preset--spacing--30)', padding: 'var(--wp--preset--spacing--40)' }}>
```

**After:**
```tsx
<div className="account-details__form-group">
```

```css
.account-details__form-group {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--30);
  padding: var(--wp--preset--spacing--40);
}
```

### Rule 5: Mobile-Friendly Stacking Pattern

When migrating horizontal layouts, ensure mobile stacking:

```css
.component__header {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
}

@media (min-width: 768px) {
  .component__header {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.component__header-action {
  width: 100%;
}

@media (min-width: 768px) {
  .component__header-action {
    width: auto;
    flex-shrink: 0;
  }
}
```

### Rule 6: Edge Cases Checklist

Before finalizing any margin removal:

- [ ] **Margin collapse:** Flex/grid gap does NOT collapse like block margins. If original relied on margin collapse, reduce gap value.
- [ ] **Mixed spacing:** If children need different gaps, use nested groups with different gap values (or keep margin on the exception child).
- [ ] **Absolute children:** `position: absolute` elements are NOT affected by gap. Keep their margins.
- [ ] **Inline elements:** Spans/links within text cannot use gap. Keep their `margin-left`/`margin-right`.
- [ ] **Last-child resets:** When using gap, remove any `:last-child { margin-bottom: 0 }` rules — gap handles this automatically.

---

## 🗺️ Tailwind to WordPress Mapping

### **Layout Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `flex` | `display: flex` |
| `flex-col` | `flex-direction: column` |
| `flex-row` | `flex-direction: row` |
| `flex-wrap` | `flex-wrap: wrap` |
| `items-center` | `align-items: center` |
| `items-start` | `align-items: flex-start` |
| `justify-between` | `justify-content: space-between` |
| `justify-center` | `justify-content: center` |
| `gap-4` | `gap: var(--wp--preset--spacing--40)` |
| `grid grid-cols-3` | `display: grid; grid-template-columns: repeat(3, 1fr)` |
| `inline-flex` | `display: inline-flex` |
| `w-full` | `width: 100%` |
| `mx-auto` | `margin-inline: auto` |

### **Spacing Classes (Updated v2.0 — WordPress Numeric Scale):**

| Tailwind | WordPress CSS | WordPress Variable |
|----------|---------------|--------------------|
| `p-1` | `padding: var(--wp--preset--spacing--10)` | 10px |
| `p-2` | `padding: var(--wp--preset--spacing--20)` | 20px |
| `p-3` | `padding: var(--wp--preset--spacing--30)` | 30px |
| `p-4` | `padding: var(--wp--preset--spacing--40)` | 40px |
| `p-6` | `padding: var(--wp--preset--spacing--50)` | 50px |
| `p-8` | `padding: var(--wp--preset--spacing--60)` | 60px |
| `mb-2` | Convert to parent `gap: var(--wp--preset--spacing--20)` | 20px |
| `mb-4` | Convert to parent `gap: var(--wp--preset--spacing--40)` | 40px |
| `mb-6` | Convert to parent `gap: var(--wp--preset--spacing--50)` | 50px |
| `mb-8` | Convert to parent `gap: var(--wp--preset--spacing--60)` | 60px |
| `mb-12` | Convert to parent `gap: var(--wp--preset--spacing--80)` | 80px |
| `mb-16` | Convert to parent `gap: var(--wp--preset--spacing--90)` | 90px |
| `py-12` | `padding-block: var(--wp--preset--spacing--80)` | 80px |
| `py-16` | `padding-block: var(--wp--preset--spacing--90)` | 90px |

**⚠️ CRITICAL:** When migrating `mb-*` classes, do NOT simply replace with `margin-bottom: var(...)`. Instead:
1. Add `display: flex; flex-direction: column; gap: var(...)` to the **parent** container
2. Remove the margin from the child
3. See Rule 1 above

### **Typography Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `text-xs` | `font-size: var(--wp--preset--font-size--small)` |
| `text-sm` | `font-size: var(--wp--preset--font-size--small)` |
| `text-base` | `font-size: var(--wp--preset--font-size--normal)` |
| `text-lg` | `font-size: var(--wp--preset--font-size--large)` |
| `text-xl` | `font-size: var(--wp--preset--font-size--x-large)` |
| `text-2xl` | `font-size: var(--wp--preset--font-size--xx-large)` |
| `text-3xl` | `font-size: var(--wp--preset--font-size--xxx-large)` |
| `text-4xl` | `font-size: var(--wp--preset--font-size--huge)` |
| `font-normal` | `font-weight: var(--wp--preset--font-weight--normal)` |
| `font-medium` | `font-weight: var(--wp--preset--font-weight--medium)` |
| `font-semibold` | `font-weight: var(--wp--preset--font-weight--semibold)` |
| `font-bold` | `font-weight: var(--wp--preset--font-weight--bold)` |
| `leading-tight` | `line-height: var(--wp--preset--line-height--tight)` |
| `leading-relaxed` | `line-height: var(--wp--preset--line-height--relaxed)` |
| `uppercase` | `text-transform: uppercase` |
| `tracking-wider` | `letter-spacing: 0.05em` |
| `tracking-widest` | `letter-spacing: 0.1em` |

### **Color Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `bg-white` | `background: var(--wp--preset--color--background)` |
| `bg-gray-50` | `background: var(--wp--preset--color--surface)` |
| `bg-gray-800`/`bg-gray-900` | `background: var(--wp--preset--color--surface-dark)` |
| `text-gray-900` | `color: var(--wp--preset--color--foreground)` |
| `text-gray-600`/`text-gray-700` | `color: var(--wp--preset--color--text-secondary)` |
| `text-gray-400`/`text-gray-500` | `color: var(--wp--preset--color--muted-foreground)` |
| `text-white` | `color: var(--wp--preset--color--foreground-light)` |
| `border-gray-200`/`border-gray-300` | `border-color: var(--wp--preset--color--border)` |
| `border-gray-600`/`border-gray-700` | `border-color: var(--wp--preset--color--border-medium)` |
| `bg-blue-600` | `background: var(--wp--preset--color--info)` |
| `bg-green-600` | `background: var(--wp--preset--color--success)` |
| `bg-red-600` | `background: var(--wp--preset--color--error)` |
| `bg-yellow-600` | `background: var(--wp--preset--color--warning)` |

### **Border & Radius Classes:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `rounded` | `border-radius: var(--wp--preset--border-radius--sm)` |
| `rounded-md` | `border-radius: var(--wp--preset--border-radius--md)` |
| `rounded-lg` | `border-radius: var(--wp--preset--border-radius--lg)` |
| `rounded-full` | `border-radius: var(--wp--preset--border-radius--full)` |
| `border` | `border: 1px solid var(--wp--preset--color--border)` |
| `border-t` | `border-top: 1px solid var(--wp--preset--color--border)` |
| `border-b` | `border-bottom: 1px solid var(--wp--preset--color--border)` |
| `border-l-4` | `border-left: 4px solid` |

### **Shadow & Effects:**

| Tailwind | WordPress CSS |
|----------|---------------|
| `shadow-sm` | `box-shadow: var(--wp--preset--shadow--sm)` |
| `shadow-md` | `box-shadow: var(--wp--preset--shadow--md)` |
| `shadow-lg` | `box-shadow: var(--wp--preset--shadow--lg)` |
| `shadow-xl` | `box-shadow: var(--wp--preset--shadow--xl)` |
| `shadow-2xl` | `box-shadow: var(--wp--preset--shadow--2xl)` |
| `transition-colors` | `transition: color var(--wp--preset--transition--base) ease, background-color var(--wp--preset--transition--base) ease` |
| `opacity-50` | `opacity: 0.5` |

---

## ✅ Verification Checklist (Updated v2.0)

### Before Migration:
- [ ] Component works correctly
- [ ] Take screenshots (light + dark)
- [ ] Document current behavior
- [ ] Note all Tailwind classes
- [ ] Note all inline styles
- [ ] Identify parent-child margin relationships

### During Migration:
- [ ] Create semantic BEM class names
- [ ] Write complete CSS in modular file
- [ ] Add `@import` to `/styles/globals.css`
- [ ] **Parent containers have layout context** (flex/grid + gap)
- [ ] **Margins converted to parent gap** (not just renamed)
- [ ] **Mobile stacking implemented** (flex-col → md:flex-row)
- [ ] Include dark mode styles
- [ ] Add hover/focus states

### After Migration:
- [ ] Component renders identically
- [ ] Light mode matches
- [ ] Dark mode matches
- [ ] Hover states work
- [ ] Focus states work
- [ ] Responsive design intact
- [ ] **Mobile tested at 320px** — no overflow/off-screen elements
- [ ] **Spacing preserved** — visual gaps match original
- [ ] No Tailwind classes remain
- [ ] No inline styles remain (except approved exceptions)
- [ ] Tests still pass

### Approved Inline Style Exceptions:
- CSS-in-JS animation libraries (Motion)
- Dynamic runtime values (scroll position, calculated transforms)
- Canvas/WebGL elements
- Color values from data (e.g., chart colors, user-selected colors)

---

## 📖 Related Documentation

- `/guidelines/Guidelines.md` (Section 4: Styling System)
- `/guidelines/development/margin-removal-guidelines.md` (Margin → Gap rules)
- `/guidelines/design-tokens/Spacing.md` (WordPress spacing scale)
- `/src/styles/theme-variables.css` — WordPress CSS variables
- `/styles/globals.css` — Main stylesheet entry point

---

## 📝 Notes & Tips

### Best Practices:

💡 **Migrate one component at a time** — Easier to test and verify

💡 **Always check the parent** — Before removing margins, ensure parent has flex/grid + gap

💡 **Use the WordPress numeric scale** — spacing--10 through spacing--100

💡 **Create modular CSS files** — Put CSS in `/src/styles/blocks/[category]/` not directly in globals.css

💡 **Mobile-first** — Start with `flex-direction: column`, add `@media` for row layout

### Common Mistakes:

⚠️ **Removing margins without adding parent gap** — Spacing collapses silently

⚠️ **Using arbitrary gap values** — `gap-[var(--spacing-*)]` bypasses the design system

⚠️ **Forgetting margin collapse differences** — flex/grid gap doesn't collapse like block margins

⚠️ **Not testing on mobile** — Buttons overflow the viewport without stacking pattern

⚠️ **Hardcoding values** — Use CSS variables, not fixed px values

⚠️ **Inline styles with WP variables** — Still violations; move to CSS classes

---

**Status:** ✅ Active  
**Created:** 2026-01-10  
**Updated:** 2026-03-11 (v2.0 — Spacing/margin rules)
