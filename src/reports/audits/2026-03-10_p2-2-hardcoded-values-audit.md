# P2.2 - Hardcoded Values Audit

**Date:** March 10, 2026  
**Task:** T5.5 P2.2 - Replace hardcoded values with CSS variables  
**Status:** 🔄 AUDIT COMPLETE - EXECUTION READY  
**Goal:** Improve design token consistency (no bundle size savings)

---

## Executive Summary

Audited all CSS files for hardcoded values that should use CSS variables.

**Key Findings:**
- **Most hardcoded values are INTENTIONAL** (decorative colors, specific brand accents)
- **Main opportunity:** Replace generic colors (#fff, #000, rgba blacks/whites) with semantic variables
- **Secondary opportunity:** Replace common gray tones with WordPress color presets

**Decision:** Focus on **high-value, low-risk** conversions only

---

## Audit Methodology

### Files Scanned

**Scope:**
- `/src/styles/blocks/**/*.css` (130+ files)
- `/src/styles/sections/*.css` (42 files)
- `/src/styles/theme-*.css` (3 files)

**Excluded:**
- `/src/styles/theme-variables.css` (variable definitions SHOULD have hardcoded values)
- `/src/styles/utilities.css` (utility classes intentionally provide specific values)

### Patterns Searched

1. **Hardcoded hex colors:** `color: #[0-9a-fA-F]{3,6}`
2. **Hardcoded backgrounds:** `background-color: #[0-9a-fA-F]{3,6}`
3. **Hardcoded borders:** `border-color: #[0-9a-fA-F]{3,6}`
4. **Hardcoded spacing:** `padding: [0-9]+px`, `margin: [0-9]+px`
5. **Hardcoded border-radius:** `border-radius: [0-9]+px`

---

## Audit Results by Category

### Category 1: White & Black Generic Colors ✅ HIGH PRIORITY

**Pattern:** `color: #ffffff` or `color: #fff` or `color: #000000`

**Found:**
- `badge.css`: `color: #fff;` (line 28)
- `avatar.css`: `color: #ffffff;` (line 65)
- `mega-menu.css`: `color: #ffffff;` (15+ instances - featured titles, badges, cards)

**Recommended Conversion:**

```css
/* BEFORE */
color: #ffffff;

/* AFTER */
color: var(--wp--preset--color--white);
```

**Impact:**
- Improves semantic meaning
- Makes dark mode overrides clearer
- Low risk (exact value match)

**Files to Update:**
1. `/src/styles/blocks/display/badge.css` (1 instance)
2. `/src/styles/blocks/display/avatar.css` (1 instance)
3. `/src/styles/blocks/navigation/mega-menu.css` (15+ instances)

**Estimated Effort:** 30 minutes

---

### Category 2: Decorative Brand Colors ⚠️ KEEP AS-IS

**Pattern:** Specific brand accent colors for badges, promo tags, contact cards

**Examples:**

```css
/* HOT badge */
.wp-mega-menu__promo-badge--hot {
  color: #dc2626; /* Red-600 */
}

/* DISCOUNT badge */
.wp-mega-menu__promo-badge--discount {
  color: #ea580c; /* Orange-600 */
}

/* CLEARANCE badge */
.wp-mega-menu__promo-badge--clearance {
  color: #ca8a04; /* Yellow-600 */
}

/* Contact card variants */
.wp-mega-menu__contact-card--email {
  border-color: #3b82f6; /* Blue-500 */
}

.wp-mega-menu__contact-card--phone {
  border-color: #22c55e; /* Green-500 */
}

.wp-mega-menu__contact-card--chat {
  border-color: #a855f7; /* Purple-500 */
}
```

**Decision:** **KEEP AS-IS**

**Reasoning:**
1. **Design Intent:** These are specific brand/accent colors for visual hierarchy
2. **Not Theme Colors:** These don't change based on theme (light/dark)
3. **Semantic Purpose:** Badge colors communicate meaning (HOT=red, DISCOUNT=orange)
4. **Low Impact:** Converting would require creating 12+ new CSS variables

**Recommendation:** Document these as intentional design choices

---

### Category 3: Hardcoded Spacing ✅ MEDIUM PRIORITY

**Pattern:** `padding: 16px`, `margin: 8px`, `gap: 12px`

**Approach:** Search for common WordPress spacing values

**Common Conversions:**

| Hardcoded | WordPress Variable |
|-----------|-------------------|
| `4px` | `var(--wp--preset--spacing--10)` |
| `8px` | `var(--wp--preset--spacing--20)` |
| `12px` | `var(--wp--preset--spacing--30)` |
| `16px` | `var(--wp--preset--spacing--40)` |
| `24px` | `var(--wp--preset--spacing--50)` |
| `32px` | `var(--wp--preset--spacing--60)` |
| `48px` | `var(--wp--preset--spacing--70)` |

**Decision:** **DEFER to future task** (requires careful visual QA for each instance)

**Reason:** High effort (100+ instances), medium risk (spacing changes can break layouts)

---

### Category 4: Hardcoded Border Radius ✅ LOW PRIORITY

**Pattern:** `border-radius: 8px`, `border-radius: 4px`

**Common Conversions:**

| Hardcoded | WordPress Variable |
|-----------|-------------------|
| `2px` | `var(--wp--preset--border-radius--sm)` |
| `6px` | `var(--wp--preset--border-radius--md)` |
| `8px` | `var(--wp--preset--border-radius--lg)` |
| `12px` | `var(--wp--preset--border-radius--xl)` |
| `16px` | `var(--wp--preset--border-radius--xxl)` |
| `9999px` | `var(--wp--preset--border-radius--full)` |

**Decision:** **DEFER to future task** (low impact on maintainability)

---

## Recommended P2.2 Scope (Revised)

### ✅ EXECUTE: Category 1 Only (White/Black Colors)

**Why:**
- High impact on semantic clarity
- Low risk (exact value matches)
- Quick to execute (30 minutes)
- Improves dark mode readability

**Files:**
1. `/src/styles/blocks/display/badge.css`
2. `/src/styles/blocks/display/avatar.css`
3. `/src/styles/blocks/navigation/mega-menu.css`

**Changes:**
- `#ffffff` → `var(--wp--preset--color--white)`
- `#fff` → `var(--wp--preset--color--white)`
- `#000000` → `var(--wp--preset--color--black)`
- `#000` → `var(--wp--preset--color--black)`

**Estimated Instances:** 18-20  
**Estimated Time:** 30 minutes  
**Risk:** LOW

---

### ⚠️ DEFER: Categories 2, 3, 4

**Category 2 (Decorative Colors):** Intentional design choices - document as-is  
**Category 3 (Spacing):** High effort, medium risk - future task  
**Category 4 (Border Radius):** Low impact - future task

---

## Detailed Conversion List

### File 1: `/src/styles/blocks/display/badge.css`

**Line 28:**
```css
/* BEFORE */
color: #fff;

/* AFTER */
color: var(--wp--preset--color--white);
```

---

### File 2: `/src/styles/blocks/display/avatar.css`

**Line 65:**
```css
/* BEFORE */
color: #ffffff;

/* AFTER */
color: var(--wp--preset--color--white);
```

---

### File 3: `/src/styles/blocks/navigation/mega-menu.css`

**Lines to Convert (16 instances):**

| Line | Element | Before | After |
|------|---------|--------|-------|
| 307 | `.wp-mega-menu__featured-title` | `color: #ffffff;` | `color: var(--wp--preset--color--white);` |
| 321 | `.wp-mega-menu__featured-text` | `color: #ffffff;` | `color: var(--wp--preset--color--white);` |
| 504 | `.wp-mega-menu__category-icon` | `color: #ffffff;` | `color: var(--wp--preset--color--white);` |
| 746 | `.wp-mega-menu__image-card-title` | `color: #ffffff;` | `color: var(--wp--preset--color--white);` |
| 908 | `.wp-mega-menu__deal-card-title` | `color: #ffffff;` | `color: var(--wp--preset--color--white);` |
| 922 | `.wp-mega-menu__deal-card-label` | `color: #ffffff;` | `color: var(--wp--preset--color--white);` |

**Note:** Mega menu has 10 more instances in promo badges and contact cards - these are intentional brand colors (KEEP)

---

## Testing Plan

### Pre-Conversion

- [x] Document all instances to convert
- [x] Create backup of files

### Post-Conversion

- [ ] Build succeeds (zero errors/warnings)
- [ ] Visual QA mega menu (light mode)
- [ ] Visual QA mega menu (dark mode)
- [ ] Visual QA badge component
- [ ] Visual QA avatar component
- [ ] Verify exact color matches (use DevTools)

---

## Expected Results

### Before

**Total hardcoded `#fff`/`#ffffff`:** 18 instances

### After

**Total hardcoded `#fff`/`#ffffff`:** 0 instances ✅

**Replaced with:** `var(--wp--preset--color--white)`

**Maintainability Improvement:**
- ✅ Semantic variable names
- ✅ Dark mode clarity
- ✅ Easier to update globally

---

## Why NOT Converting More?

### Decision: Focus on High-Value, Low-Risk

**Original P2.2 Goal:**
- Convert 50-80 hardcoded values
- 3 hours effort

**Revised P2.2 Goal:**
- Convert 18 white/black colors
- 30 minutes effort

**Reasoning:**

1. **Most hardcoded values are INTENTIONAL**
   - Decorative brand colors (HOT badge = red, not a theme color)
   - Specific accent colors (email icon = blue, phone icon = green)
   - These SHOULD be hardcoded for design intent

2. **Spacing conversions are HIGH RISK**
   - 100+ instances across 170+ files
   - Each requires careful visual QA
   - Changing `padding: 16px` to `var(--wp--preset--spacing--40)` could break layouts
   - Better suited for dedicated spacing audit task

3. **Border radius conversions are LOW IMPACT**
   - Minimal maintainability benefit
   - Rarely changed
   - Not worth the effort

**Conclusion:** P2.2 should be "Convert semantic colors only" (white/black)

---

## Alternative Recommendation

### Option A: Execute Revised P2.2 (30 minutes)

**Convert:** 18 white/black colors  
**Effort:** 30 minutes  
**Risk:** LOW  
**Benefit:** Improved semantics

### Option B: Skip P2.2 Entirely

**Reasoning:** Most hardcoded values are intentional design choices  
**Alternative:** Document decorative colors as intentional  
**Benefit:** Save time, focus on higher-impact work

### Option C: Execute Full P2.2 (3 hours)

**Convert:** 50-80 instances (colors + spacing + border-radius)  
**Effort:** 3 hours  
**Risk:** MEDIUM (spacing changes could break layouts)  
**Benefit:** Maximum design token consistency

---

## Recommendation: Option A (Revised P2.2)

**Execute:** Convert 18 white/black colors (30 minutes)  
**Defer:** Spacing, border-radius, decorative colors

**Why:**
- Quick win (30 minutes vs. 3 hours)
- Low risk (exact value matches)
- Semantic improvement
- No layout risk

---

## Next Steps

1. **Confirm approach with user**
2. Execute conversions (30 minutes)
3. Test build + visual QA
4. Create completion report
5. Update task list

---

**Audit Completed:** March 10, 2026  
**Decision Needed:** Option A, B, or C?  
**Recommended:** Option A (30 minutes, low risk, semantic improvement)
