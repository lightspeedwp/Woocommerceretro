# Apply BEM — Full BEM Compliance Audit & Fix Workflow

**Purpose:** Audit all `.tsx` files for BEM violations, apply fixes using 100% CSS variables, and perform a token gap analysis.

**Trigger Word:** `apply bem`

**Version:** 1.0
**Created:** 2026-03-16
**Environment:** Figma Make (in-browser preview, no file system access)
**Duration:** 30-60 min (depending on violation count)

---

## CRITICAL: Figma Make Environment Notice

**You are running in Figma Make, NOT a local development environment.**

**DO NOT suggest:**
- "Refresh your browser"
- "Clear your cache"
- "Restart your dev server"
- "Run npm install"

**Instead:**
- Make code changes directly
- Update files in place
- Verify via code inspection
- Use grep/search to validate

---

## Overview

This prompt executes a multi-step workflow that:

1. Audits every `.tsx` component for BEM violations
2. Matches violations against the existing `/src/styles/` CSS inventory
3. Applies fixes using 100% CSS variables (never hardcoded values)
4. Ensures light/dark mode compliance on every new class
5. Verifies WCAG 2.2 AA/AAA colour contrast ratios
6. Performs a token gap analysis with follow-up audit recommendations

**Output:** Direct code fixes to `.tsx` and `.css` files. No reports or task lists (this is a *fix* trigger, not an *audit* trigger).

---

## Required Guidelines (Read Before Executing)

Before starting, the AI MUST read and internalise these guidelines:

| File | Reason |
|------|--------|
| `/guidelines/Guidelines.md` | Project vision, critical rules |
| `/guidelines/development/modern-react-coding-standards.md` | Section 9: BEM naming, CSS architecture |
| `/guidelines/design-tokens/Playpocket-Tokens.md` | Canonical token map, light/dark values |
| `/guidelines/design-tokens/Dark-Mode.md` | Dark mode implementation, `.dark` class system |
| `/guidelines/design-tokens/Colors.md` | Colour palette, contrast ratios |
| `/guidelines/design-tokens/Typography.md` | Font tokens, fluid scaling |
| `/guidelines/design-tokens/Spacing.md` | Spacing scale |
| `/guidelines/development/bem-methodology.md` | BEM naming rules, retro prefixes |
| `/guidelines/styles/section-styles.md` | Section presets (if applicable) |
| `/guidelines/components/SectionPresets.md` | WordPress BEM section class patterns |

---

## Phase 1: CSS Inventory Scan (5-10 min)

### Step 1.1: Build the Existing Class Map

Scan ALL CSS files imported through `/styles/globals.css` to build a complete map of available BEM classes:

```
Scan targets:
  /src/styles/blocks/**/*.css     (130+ block CSS files)
  /src/styles/sections/*.css      (42+ section CSS files)
  /src/styles/wordpress-core.css
  /src/styles/woocommerce-core.css
  /styles/globals.css             (inlined critical styles)
```

For each file, record:
- **Block name** (e.g., `wp-block-breadcrumb`, `retro-blog-card`, `wc-block-product-card`)
- **Element classes** (e.g., `__title`, `__meta`, `__img`)
- **Modifier classes** (e.g., `--active`, `--compact`, `--dark`)
- **CSS variables used** (e.g., `var(--color-ink)`, `var(--wp--preset--color--foreground)`)
- **Dark mode handling** (auto via semantic tokens, `.dark` overrides, or missing)

### Step 1.2: Build the Available Token Map

Scan token definition files to build the complete available token list:

```
Token sources:
  /src/styles/tokens/color.ref.light.css
  /src/styles/tokens/color.ref.dark.css
  /src/styles/tokens/color.semantic.css
  /src/styles/theme-variables.css
  /src/styles/retro-theme.css
```

Record every `--wp--preset--*` and `--color-*` variable with its light/dark values.

---

## Phase 2: Component Violation Scan (10-20 min)

### Step 2.1: Scan All .tsx Files

Scan every `.tsx` file under `/src/app/` (excluding protected files in `/src/app/components/figma/`).

For each file, check for the following **6 violation types:**

### Violation Type 1: Missing BEM Block

**Definition:** An element renders with no `className` at all, or uses only generic names like `"container"`, `"wrapper"`, `"content"`.

**Detection:**
- JSX elements with no `className` prop (except `<React.Fragment>`, `<>`, semantic HTML that inherits styles)
- `className` values that are generic non-BEM names (no block prefix, no `__` element separator)

**Severity:** P1 (High) if the element has visual significance; P3 (Low) if purely structural.

**Fix Pattern:**
```tsx
// BEFORE (missing BEM)
<div>
  <h2>Title</h2>
  <p>Description</p>
</div>

// AFTER (BEM applied)
<div className="retro-[block-name]">
  <h2 className="retro-[block-name]__title retro-font-display retro-bold">Title</h2>
  <p className="retro-font-body retro-[block-name]__description">Description</p>
</div>
```

---

### Violation Type 2: Inline Styles Replacing CSS Variables

**Definition:** `style={{}}` attributes that set values which should be CSS variables (colour, spacing, typography, borders).

**Detection:**
- Any `style={{ color: '...', background: '...', border: '...', padding: '...', margin: '...', fontSize: '...' }}`
- Exception: `style={{}}` is ALLOWED for dynamic/computed values (e.g., `style={{ transform: \`translateX(${x}px)\` }}`) and animation values

**Severity:** P0 (Critical) for colour/background; P1 (High) for spacing/typography.

**Inline Style to CSS Variable Mapping Table:**

| Inline Style Property | Replacement CSS Variable Pattern | Example |
|-----------------------|----------------------------------|---------|
| `color: '#...'` | `color: var(--color-ink)` or `var(--wp--preset--color--foreground)` | Text colour |
| `backgroundColor: '#...'` | `background: var(--color-paper)` or `var(--wp--preset--color--surface)` | Background |
| `borderColor: '#...'` | `border-color: var(--color-border)` or `var(--wp--preset--color--border)` | Border |
| `padding: 'Npx'` | `padding: var(--wp--preset--spacing--*)` | Spacing |
| `margin: 'Npx'` | `margin: var(--wp--preset--spacing--*)` | Spacing |
| `gap: 'Npx'` | `gap: var(--wp--preset--spacing--*)` | Flex/Grid gap |
| `fontSize: 'Npx'` | `font-size: var(--wp--preset--font-size--*)` | Typography |
| `fontFamily: '...'` | `font-family: var(--font-display)` or `var(--font-body)` | Typography |
| `borderRadius: 'Npx'` | `border-radius: 0` (retro = no radius) or token | Corners |
| `boxShadow: '...'` | `box-shadow: 4px 4px 0px var(--color-ink)` | Retro shadow |

**Fix:** Move the declaration to a CSS file under the element's BEM class, using the appropriate CSS variable.

---

### Violation Type 3: Tailwind Classes Instead of BEM

**Definition:** Any Tailwind utility class in a `className` attribute.

**Detection:**
- Classes matching Tailwind patterns: `flex`, `grid`, `p-*`, `m-*`, `text-*`, `bg-*`, `border-*`, `rounded-*`, `shadow-*`, `gap-*`, `w-*`, `h-*`, `items-*`, `justify-*`, `hidden`, `block`, `inline`, `relative`, `absolute`, `fixed`, `overflow-*`, `dark:*`
- Use `/guidelines/TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md` as migration lookup

**Severity:** P0 (Critical) -- Tailwind is banned in this codebase.

**Fix:** Replace with the appropriate WordPress/WooCommerce BEM class or create a new BEM class with CSS variable values.

---

### Violation Type 4: Inconsistent BEM Naming

**Definition:** BEM classes that don't follow the project naming convention.

**Detection:**
- Missing prefix (`retro-`, `wp-block-`, `wc-block-`, `pp-`)
- Wrong separator (using `-` instead of `__` for elements, or single `-` instead of `--` for modifiers)
- CamelCase or PascalCase in class names (should be kebab-case)
- Mixing BEM prefixes within the same component (e.g., `retro-` and `wp-block-` for the same block)

**Naming Convention for Retro Theme:**

| Component Type | Prefix | Example |
|----------------|--------|---------|
| Retro theme components | `retro-` | `retro-blog-card__title` |
| WordPress core blocks | `wp-block-` | `wp-block-breadcrumb__link` |
| WooCommerce blocks | `wc-block-` | `wc-block-product-card__price` |
| PlayPocket brand | `pp-` | `pp-logo__keycap` |
| Global layout | `retro-` | `retro-container`, `retro-home` |

**Severity:** P2 (Medium).

**Fix:** Rename to follow the correct convention. Update both `.tsx` and `.css` files.

---

### Violation Type 5: Orphan BEM Classes (CSS Without Component Usage)

**Definition:** CSS classes defined in stylesheets but never referenced in any `.tsx` component.

**Detection:**
- Grep each `.css` class selector against all `.tsx` files
- Exclude WordPress/WooCommerce core classes that may be used by CMS injection

**Severity:** P3 (Low) -- not a functional bug, but increases CSS bundle size.

**Fix:** Comment out or remove orphan classes. Add `/* UNUSED */` comment if keeping for future use.

---

### Violation Type 6: Missing Dark Mode Coverage

**Definition:** BEM classes that define colour/background values without corresponding dark mode adaptation.

**Detection:**
- CSS rules using `var(--color-*)` retro tokens without verifying they auto-switch (they do if defined in `retro-theme.css`)
- CSS rules using hardcoded hex/rgb values (these NEVER auto-switch)
- CSS rules using `var(--funky-*)` tokens (legacy, may not switch properly)
- Missing `.dark` overrides for custom colour declarations

**Severity:** P1 (High) -- dark mode is mandatory.

**Fix:**
- Replace hardcoded values with semantic CSS variables
- Verify the variable has a dark mode counterpart in the token files
- If using `var(--color-*)` retro tokens: verify they are defined in both `:root` and `.dark` scopes in `/src/styles/retro-theme.css`

---

## Phase 3: Apply Fixes (10-20 min)

### Step 3.1: Prioritise Fixes

Apply fixes in this order:

1. **P0 Critical:** Tailwind classes, inline colour/background styles
2. **P1 High:** Missing BEM blocks on visible elements, dark mode gaps
3. **P2 Medium:** Naming inconsistencies
4. **P3 Low:** Orphan classes (mark only, do not delete)

### Step 3.2: Fix Execution Rules

For each fix:

1. **Check the CSS inventory first** -- does a matching BEM class already exist?
   - YES: Use it. Do not create a duplicate.
   - NO: Create a new class in the appropriate CSS file.

2. **New CSS classes MUST:**
   - Follow BEM naming with the correct prefix (`retro-`, `wp-block-`, etc.)
   - Use 100% CSS variables for ALL values (no hardcoded hex, px, rem)
   - Support dark mode (use semantic tokens that auto-switch, or add `.dark` overrides)
   - Include adequate contrast ratios (4.5:1 AA for text, 3:1 for UI components)
   - Add `@import` to `/styles/globals.css` if creating a new CSS file

3. **New CSS files MUST:**
   - Live in `/src/styles/blocks/[category]/` or `/src/styles/sections/`
   - Stay under 200 lines (split if needed)
   - Include a file header comment with BEM block name and component path

4. **Retro design compliance for new classes:**
   - Borders: `2-3px solid var(--color-ink)` (not rounded, not 1px)
   - Box shadows: `4px 4px 0px var(--color-ink)` (hard pixel shadow, no blur)
   - Backgrounds: `var(--color-paper)` for cards, `var(--color-panel)` for secondary surfaces
   - Text: `var(--color-ink)` primary, `var(--color-muted)` secondary
   - Signal/accent: `var(--color-signal)` for CTAs, badges, active states
   - No `border-radius` on cards/containers (retro = sharp corners); small radius (`2-3px`) only for inner elements like screens, inputs
   - Typography: `retro-font-display retro-bold` for headings, `retro-font-body` for body text
   - Uppercase for display text, normal case for body text
   - Letter-spacing: `0.04-0.12em` for display text

### Step 3.3: WCAG Contrast Verification

For every new colour pairing introduced, verify:

| Check | Ratio Required | Standard |
|-------|----------------|----------|
| Normal text on background | 4.5:1 minimum | WCAG AA |
| Large text (18px+ bold, 24px+ regular) on background | 3:1 minimum | WCAG AA |
| UI components and graphical objects | 3:1 minimum | WCAG 1.4.11 |
| Normal text on background (target) | 7:1 | WCAG AAA |

**Key retro theme pairings to verify:**

| Foreground | Background | Required Ratio |
|------------|------------|----------------|
| `--color-ink` (#1E2630) | `--color-paper` (#F2EEE6) | 4.5:1+ (text) |
| `--color-ink` (#1E2630) | `--color-panel` | 4.5:1+ (text) |
| `--color-muted` | `--color-paper` | 4.5:1+ (text) |
| `--color-signal` (#FFC533) | `--color-ink` (#1E2630) | 3:1+ (UI) |
| `--color-paper` (#F2EEE6) | `--color-ink` (#1E2630) | 4.5:1+ (reversed text) |
| Dark: `--color-ink` | Dark: `--color-paper` | 4.5:1+ (text) |

If a pairing fails contrast, flag it and suggest the nearest compliant token.

---

## Phase 4: Token Gap Analysis (5-10 min)

### Step 4.1: Identify Missing Tokens

After applying all fixes, check:

1. **Were any new hardcoded values introduced?** (They should not have been, but verify.)
2. **Did any fixes require a CSS variable that doesn't exist yet?**
3. **Are there repeated magic numbers that should become tokens?**
4. **Are there colour pairings used 3+ times without a dedicated semantic token?**

### Step 4.2: Token Expansion Recommendations

If the gap analysis finds unmet needs, output a recommendation block:

```
TOKEN GAP ANALYSIS RESULTS
===========================

New tokens needed: [N]
New CSS classes created: [N]
Existing CSS classes reused: [N]
Dark mode gaps found: [N]
Contrast violations found: [N]

RECOMMENDATION:
- Run `audit tokens` to verify all token definitions are complete and correctly paired
- Run `audit css` to verify CSS architecture health after changes
- [Additional recommendations based on findings]
```

### Step 4.3: Follow-Up Trigger Recommendations

Based on findings, recommend one or more follow-up triggers:

| Condition | Recommended Trigger |
|-----------|-------------------|
| 3+ new tokens needed | `audit tokens` |
| 5+ new CSS classes created | `audit css` |
| Any contrast violations found | `audit a11y` |
| Dark mode gaps remain | `audit styles` |
| Both token and CSS gaps | `audit tokens` AND `audit css` |

---

## Phase 5: Summary Report (2-3 min)

Output a summary to the user:

```
APPLY BEM — COMPLETION SUMMARY
================================

Files scanned: [N]
Violations found: [N]
Violations fixed: [N]
  - P0 Critical: [N] fixed
  - P1 High: [N] fixed
  - P2 Medium: [N] fixed
  - P3 Low: [N] flagged

Violation breakdown:
  - Missing BEM blocks: [N]
  - Inline styles replaced: [N]
  - Tailwind classes removed: [N]
  - Naming fixes: [N]
  - Orphan classes flagged: [N]
  - Dark mode gaps fixed: [N]

CSS changes:
  - New CSS files created: [N]
  - Existing CSS files modified: [N]
  - New BEM classes added: [N]
  - Existing BEM classes reused: [N]
  - @imports added to globals.css: [N]

Token gap analysis:
  - New tokens recommended: [N]
  - Contrast violations: [N]

Suggested next steps:
  - [Follow-up trigger recommendations from Phase 4]
```

---

## Scope Exclusions

Do NOT modify:
- Files in `/src/app/components/figma/` (Figma Make system files)
- Files in `/guidelines/_templates/` (template files)
- `/styles/globals-minimal.css`
- The `style={{}}` attribute when used for dynamic/computed animation values (transforms, transitions, clip-paths)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-03-16 | Initial prompt — 6 violation types, 5 phases, token gap analysis |
