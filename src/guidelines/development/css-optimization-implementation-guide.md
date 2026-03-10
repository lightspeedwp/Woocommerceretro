# CSS Optimization — Implementation Guide

**Version:** 1.0  
**Date:** 2026-03-06  
**Purpose:** Step-by-step process for implementing CSS optimization as a memory reduction strategy

---

## 📖 Document Hierarchy

This implementation guide is part of a comprehensive CSS optimization system:

### **1. Reference Standards**
- **[css-optimization-guidelines.md](./css-optimization-guidelines.md)** - Complete standards (800+ lines)
  - Token-first architecture
  - BEM naming conventions
  - Accessibility requirements (WCAG 2.1 AA/AAA)
  - File structure recommendations
  - Migration strategy

### **2. Quick Start** (You are here)
- **[css-optimization-quick-reference.md](./css-optimization-quick-reference.md)** - Fast lookup guide
  - Common CSS memory issues & fixes
  - Memory impact calculation formula
  - Quick validation checklists

### **3. Implementation** ⭐ THIS DOCUMENT
- **Step-by-step process** for executing CSS optimization tasks
- Planning, execution, testing, and validation workflows
- Integration with memory optimization prompts

### **4. Real Example**
- **[implementation-example.md](./implementation-example.md)** - WooCommerce Demo P0.1
  - Before/after code examples
  - Actual results and metrics
  - Lessons learned

### **5. Audit Tools**
- **[/prompts/memory-optimization/orchestrator_enhanced-css-memory.md](/prompts/memory-optimization/orchestrator_enhanced-css-memory.md)** - Enhanced orchestrator
- **[/prompts/memory-optimization/sub-prompt_css-architecture-audit.md](/prompts/memory-optimization/sub-prompt_css-architecture-audit.md)** - CSS audit sub-prompt

---

## 🎯 Implementation Workflow Overview

The CSS optimization implementation follows a 5-phase approach:

```
Phase 1: Discovery & Planning (Figma → CSS → Code audits)
    ↓
Phase 2: Task Prioritization (Memory impact + ROI calculation)
    ↓
Phase 3: Implementation (Token migration + BEM refactoring)
    ↓
Phase 4: Testing & Validation (Accessibility + Visual regression)
    ↓
Phase 5: Documentation & Metrics (Results tracking + Guidelines updates)
```

Each phase produces specific outputs that feed into the next phase.

---

## Phase 1: Discovery & Planning

### **1.1 Run Enhanced Orchestrator Prompt**

**Prompt:** `/prompts/memory-optimization/orchestrator_enhanced-css-memory.md`

**Execution:**
```bash
# Read the orchestrator prompt
cat /prompts/memory-optimization/orchestrator_enhanced-css-memory.md

# Execute via Figma Make (copy full prompt into AI chat)
# The orchestrator will:
# 1. Run Figma memory audit (identify high-memory components)
# 2. Run CSS architecture audit (10 sub-audits A-J)
# 3. Run codebase memory audit (component optimization)
# 4. Consolidate findings into prioritized task list
```

**Output Files:**
- `/reports/memory-optimization/YYYY-MM-DD_figma-memory-audit.md`
- `/reports/memory-optimization/YYYY-MM-DD_css-architecture-audit.md`
- `/reports/memory-optimization/YYYY-MM-DD_memory-optimization-consolidated-report.md`
- `/tasks/memory-optimization-tasks.md`

**Expected Findings:**
- High-memory Figma components (> 50 MB)
- CSS files with hardcoded values (> 20 instances)
- BEM naming violations (< 70% compliance)
- Missing design tokens (unused CSS variables)
- Duplicate selectors (> 5 duplicates)
- Long selector chains (> 4 levels)

---

### **1.2 Analyze Audit Results**

**Review Reports:**

Open `/reports/memory-optimization/YYYY-MM-DD_memory-optimization-consolidated-report.md`

**Key Sections to Review:**

#### **A. High-Priority Components (Figma Memory > 50 MB)**
```markdown
Example findings:
- ProductArchive template (78 MB) - ProductGrid pattern (heavy images)
- SingleProduct template (62 MB) - ProductGallery block (12 images)
- CheckoutPage template (54 MB) - CheckoutForm pattern (complex layout)
```

**Action:** These components get priority CSS optimization (largest ROI).

---

#### **B. CSS Architecture Issues**

**Hardcoded Values:**
```css
/* Example from audit report */
File: /src/styles/globals.css
Lines: 28-100
Issues: 15 hardcoded colors (#000, #fff, #0ff)
Impact: Cannot be themed, breaks dark mode
```

**BEM Compliance:**
```markdown
Current compliance: 62%
Target: 95%
Gap: 38 classes need refactoring
Examples:
  .funky-select          → .wp-element-select--funky
  .checkout-form         → .wc-block-checkout__form
  .product-card-image    → .wc-block-product-card__image
```

**Design Token Gaps:**
```markdown
Missing tokens:
- Focus ring color/width/offset
- Error/warning/success backgrounds
- Disabled state opacity/cursor
- Border radius variants (sm/md/lg/xl)
```

---

#### **C. Memory Impact Estimates**

**Formula (from audit report):**
```
Memory Saved = (CSS_Size_KB × 0.003) + (Selectors × 0.0001)
              + (Tokens_Replaced × 0.0002) + (BEM_Classes × 0.00015)
```

**Example Calculations:**
```
Task P0.1 (Funky CSS Variables):
  CSS reduction: 170 lines ≈ 7 KB
  Selectors consolidated: 15
  Tokens added: 12
  BEM classes: 0 (deferred to P1)
  
  Memory = (7 × 0.003) + (15 × 0.0001) + (12 × 0.0002) + (0 × 0.00015)
         = 0.021 + 0.0015 + 0.0024 + 0
         = 0.0249 MB (~25 KB)
  
  ROI: Medium (enables future optimizations, fixes dark mode)
```

---

### **1.3 Create Prioritized Task List**

**Task Structure:**

```markdown
## P0 Tasks (Critical - Do First)

### P0.1 - Define Funky CSS Variables and Migrate Hardcoded Colors
- **File:** `/src/styles/theme-funky.css`, `/src/styles/globals.css`
- **Issue:** 15+ hardcoded colors bypass token system, breaks dark mode
- **Effort:** 1-2 hours
- **Memory Impact:** 25 KB
- **Dependencies:** None
- **Output:** 12 new CSS variables, 170 lines migrated

### P0.2 - Add Missing Design Tokens to theme-variables.css
- **File:** `/src/styles/theme-variables.css`
- **Issue:** Missing focus, disabled, and state tokens
- **Effort:** 1 hour
- **Memory Impact:** 15 KB
- **Dependencies:** P0.1 complete
- **Output:** 8 new token sets (40+ variables)

## P1 Tasks (High Priority - Next Sprint)

### P1.1 - Migrate All .funky-* Classes to BEM Modifiers
- **Files:** All files using `.funky-*` classes (23 files)
- **Issue:** 38 classes violate BEM naming
- **Effort:** 4-6 hours
- **Memory Impact:** 45 KB
- **Dependencies:** P0.2 complete
- **Output:** 38 classes refactored to BEM

### P1.2 - Split blog-format-archives-funky.css
- **File:** `/src/styles/blog-format-archives-funky.css` (979 lines)
- **Issue:** Single large file, hard to maintain
- **Effort:** 2-3 hours
- **Memory Impact:** 60 KB (via code splitting)
- **Dependencies:** None
- **Output:** 5 smaller files (by format)

## P2 Tasks (Medium Priority - Future Sprints)

### P2.1 - Extract Reusable Pattern CSS
- **Files:** Multiple pattern components
- **Issue:** Duplicate CSS across patterns
- **Effort:** 6-8 hours
- **Memory Impact:** 80 KB
- **Dependencies:** P1.2 complete
- **Output:** New `/src/styles/patterns/` directory
```

**Task List File:** `/tasks/memory-optimization-tasks.md`

---

## Phase 2: Task Prioritization

### **2.1 Calculate Memory Impact & ROI**

**For Each Task:**

1. **Estimate CSS size reduction** (lines → KB)
2. **Count selectors consolidated** (duplicates removed)
3. **Count tokens added/replaced** (hardcoded → variables)
4. **Count BEM classes refactored** (naming improvements)
5. **Apply formula** to calculate memory saved
6. **Estimate effort** (hours)
7. **Calculate ROI** = Memory Saved / Effort Hours

**Example:**

```markdown
Task: P0.1 - Funky CSS Variables

Metrics:
- CSS reduction: 170 lines = 7 KB
- Selectors consolidated: 15
- Tokens added: 12
- BEM classes: 0
- Effort: 2 hours

Calculation:
Memory = (7 × 0.003) + (15 × 0.0001) + (12 × 0.0002) + (0 × 0.00015)
       = 0.021 + 0.0015 + 0.0024 + 0
       = 0.0249 MB (~25 KB)

ROI = 25 KB / 2 hours = 12.5 KB/hour

Priority: P0 (fixes dark mode bug, enables future optimizations)
```

---

### **2.2 Prioritization Matrix**

**Priority Criteria:**

| Priority | Criteria | Memory Impact | Effort | ROI | Examples |
|----------|----------|---------------|--------|-----|----------|
| **P0** | Critical bugs, blockers | > 20 KB | < 3 hours | High | Dark mode bugs, accessibility fails |
| **P1** | High value, architectural | > 40 KB | < 6 hours | Medium-High | BEM migration, token consolidation |
| **P2** | Medium value, nice-to-have | > 60 KB | < 8 hours | Medium | Code splitting, pattern extraction |
| **P3** | Low value, future work | > 10 KB | Any | Low | Documentation, edge case fixes |

**Sort Tasks:**
1. P0 tasks first (critical path)
2. Within priority, sort by ROI (highest first)
3. Consider dependencies (some tasks require others to complete first)

---

## Phase 3: Implementation

### **3.1 Pre-Implementation Checklist**

**Before Starting a Task:**

- [ ] Read relevant guideline sections:
  - [ ] `/guidelines/development/css-optimization-guidelines.md`
  - [ ] `/guidelines/design-tokens/[relevant-token-type].md`
  - [ ] `/guidelines/Guidelines.md` Section 4 (WordPress CSS Architecture)

- [ ] Review implementation example:
  - [ ] `/guidelines/development/implementation-example.md`

- [ ] Check dependencies:
  - [ ] Are prerequisite tasks complete?
  - [ ] Are required tokens already defined?

- [ ] Set up testing environment:
  - [ ] Browser DevTools open
  - [ ] Dark mode toggle ready
  - [ ] Lighthouse accessibility tab ready

---

### **3.2 Implementation Steps (Standard Workflow)**

#### **Step 1: Analyze Current State**

**Create "Before" snapshot:**

```markdown
## Current State Analysis

File: /src/styles/globals.css (Lines 28-100)

Problem: Hardcoded colors in funky checkout styles

Current Code:
```css
/* Lines 28-45 */
.funky-checkout-form {
  border: 4px solid #000;           /* ❌ Hardcoded */
  background: #fff;                 /* ❌ Hardcoded */
  box-shadow: 10px 10px 0px #000;   /* ❌ Hardcoded */
}
```

Issues:
1. ❌ 15 hardcoded color instances
2. ❌ Cannot be themed (dark mode broken)
3. ❌ Not maintainable (scattered values)
4. ❌ 170 lines misplaced in globals.css (should be in theme-funky.css)
```

**Document issues clearly** for "before/after" comparison later.

---

#### **Step 2: Define Design Tokens**

**Add tokens to appropriate CSS file:**

**For theme-specific tokens** (funky aesthetic):
- File: `/src/styles/theme-funky.css`
- Location: `:root` block (around line 30)

**For global tokens** (all themes):
- File: `/src/styles/theme-variables.css`
- Location: `:root` block (around line 20)

**Example (theme-specific):**

```css
/* File: /src/styles/theme-funky.css */

:root {
  /* Existing funky variables... */
  
  /* NEW: Funky Glow Colors (Decorative) */
  --funky-glow-primary: #00ffff;      /* Cyan neon */
  --funky-glow-secondary: #ff00ff;    /* Magenta neon */
  --funky-glow-accent: #00ff00;       /* Lime neon */
  
  /* NEW: Funky Shadows */
  --funky-shadow-color: #000000;
  --funky-shadow-offset: 10px;
  --funky-shadow-offset-sm: 4px;
  --funky-shadow-offset-md: 6px;
  --funky-shadow-offset-lg: 12px;
  
  /* NEW: Funky Borders */
  --funky-border-width: 4px;
  --funky-border-width-sm: 2px;
  --funky-border-width-md: 3px;
  --funky-border-color: #000000;
}

.dark {
  /* Dark mode overrides */
  --funky-shadow-color: #ffffff;     /* White shadows in dark mode */
  --funky-border-color: #ffffff;     /* White borders in dark mode */
  /* Neon colors stay same in both modes */
}
```

**Token Naming Conventions:**
- `--[theme]-[category]-[variant]` for theme tokens
- `--wp--preset--[category]--[variant]` for WordPress tokens
- Use semantic names (purpose, not appearance)

**Documentation:**
```css
/* Token Documentation */

/* --funky-glow-primary: #00ffff
   Purpose: Neon cyan glow for focus states and decorative accents
   Usage: .funky-select:focus, .funky-button--neon
   Contrast: 4.5:1 on black, 7:1 on white (AA compliant)
   Dark mode: Same value (neon effect consistent) */

/* --funky-shadow-color: #000000
   Purpose: Drop shadow color for brutalist box shadows
   Usage: All .funky-* components with box-shadow
   Contrast: N/A (decorative)
   Dark mode: #ffffff (inverted for visibility) */
```

---

#### **Step 3: Migrate CSS to Tokens**

**Replace hardcoded values:**

**Before:**
```css
.funky-select {
  border: 3px solid #000;
  background: #fff;
  box-shadow: 4px 4px 0px #000;
}

.funky-select:focus {
  box-shadow: 6px 6px 0px #0ff;
  border-color: #0ff;
  outline: none !important;  /* ❌ Accessibility fail */
}
```

**After:**
```css
.funky-select {
  border: var(--funky-border-width-md) solid var(--funky-border-color);
  background: var(--wp--preset--color--background);
  box-shadow: var(--funky-shadow-offset-sm) var(--funky-shadow-offset-sm) 0px var(--funky-shadow-color);
  color: var(--wp--preset--color--foreground);
  transition: all 0.2s ease;
}

.funky-select:focus-visible {
  transform: translate(-2px, -2px);
  box-shadow: var(--funky-shadow-offset-md) var(--funky-shadow-offset-md) 0px var(--funky-glow-primary);
  border-color: var(--funky-glow-primary);
  /* ✅ Add outline for accessibility (dual indicators) */
  outline: 2px solid var(--funky-glow-primary);
  outline-offset: 2px;
}
```

**Changes:**
- ✅ All `#000` → `var(--funky-shadow-color)` or `var(--funky-border-color)`
- ✅ All `#fff` → `var(--wp--preset--color--background)`
- ✅ All `#0ff` → `var(--funky-glow-primary)`
- ✅ Added explicit `outline` for WCAG 2.1 AAA compliance
- ✅ Changed `:focus` → `:focus-visible` (better UX)
- ✅ Removed `!important` from outline rule (accessibility best practice)

**Apply to all affected selectors:**
- Replace ALL instances in the file
- Search for hexadecimal patterns: `#[0-9a-f]{3,6}`
- Double-check focus states, hover states, active states

---

#### **Step 4: Refactor to BEM Naming (If Required)**

**BEM Pattern:**
```
.block-name__element--modifier
```

**Examples:**

**Before (Non-BEM):**
```css
.funky-select { }
.funky-input { }
.funky-textarea { }
.checkout-form { }
.payment-option { }
.payment-option-active { }
```

**After (BEM):**
```css
/* WooCommerce blocks use 'wc-block-' prefix */
.wc-block-select--funky { }
.wc-block-input--funky { }
.wc-block-textarea--funky { }

/* WordPress elements use 'wp-element-' prefix */
.wp-element-select--funky { }
.wp-element-input--funky { }

/* Checkout specific blocks */
.wc-block-checkout__form { }
.wc-block-checkout__payment-option { }
.wc-block-checkout__payment-option--active { }
```

**Migration Strategy (Dual Classing):**

During transition, support both old and new class names:

```css
/* Support both during migration */
.funky-select,
.wp-element-select--funky {
  /* Shared styles */
}

/* Eventually remove old class after all components updated */
```

**Component Updates:**
```tsx
/* Before */
<select className="funky-select">

/* After (transition period) */
<select className="funky-select wp-element-select--funky">

/* Final (after migration) */
<select className="wp-element-select--funky">
```

---

#### **Step 5: Consolidate & Organize**

**Move styles to correct file:**

**Source:** `/src/styles/globals.css` (lines 28-100, ~170 lines)
**Destination:** `/src/styles/theme-funky.css` (append at end)

**Process:**
1. Copy styles from globals.css
2. Add section header comment
3. Paste into theme-funky.css
4. Delete from globals.css
5. Add reference comment in globals.css

**Section Header:**
```css
/* ========================================
   FUNKY CHECKOUT & FORM STYLES
   Migrated from globals.css 2026-03-05
   
   All funky aesthetic form controls including:
   - Select dropdowns
   - Text inputs
   - Textareas
   - Checkout form containers
   - Payment option cards
   
   Uses tokens from :root block above.
   ======================================== */
```

**Reference Comment (in globals.css):**
```css
/* ========================================
   FUNKY STYLES
   Moved to theme-funky.css (2026-03-05)
   ======================================== */

/* All funky aesthetic rules now in /src/styles/theme-funky.css
   for better organization and theme switching support.
   
   If you need to add funky styles, add them to theme-funky.css,
   not here. */
```

---

### **3.3 Code Quality Checks**

**Before committing changes:**

#### **CSS Validation**
- [ ] No syntax errors (validate in browser DevTools)
- [ ] All CSS variables defined before use
- [ ] No orphaned selectors (all classes used in components)
- [ ] Consistent formatting (single-line declarations per project standard)

#### **Accessibility Validation**
- [ ] All focus states have visible outline (2px minimum)
- [ ] Focus outline contrast ratio ≥ 3:1 (WCAG 2.1 AA)
- [ ] No `outline: none` without replacement indicator
- [ ] All interactive elements have `:focus-visible` styles

#### **Dark Mode Validation**
- [ ] All colors have dark mode variants
- [ ] Shadows visible in dark mode (inverted colors)
- [ ] Borders visible in dark mode (sufficient contrast)
- [ ] Text readable in dark mode (contrast ≥ 4.5:1)

#### **Token Validation**
- [ ] All hardcoded values replaced with tokens
- [ ] Token names follow naming convention
- [ ] Tokens documented with comments
- [ ] Dark mode token overrides in `.dark` selector

---

## Phase 4: Testing & Validation

### **4.1 Visual Regression Testing**

**Test Matrix:**

| Component | Light Mode | Dark Mode | Mobile | Desktop | Notes |
|-----------|------------|-----------|--------|---------|-------|
| Checkout form | ✅ | ✅ | ✅ | ✅ | Black borders in light, white in dark |
| Select dropdown | ✅ | ✅ | ✅ | ✅ | Focus glow cyan in both modes |
| Text input | ✅ | ✅ | ✅ | ✅ | Shadow visible in both modes |
| Textarea | ✅ | ✅ | ✅ | ✅ | Focus transform works |
| Payment option | ✅ | ✅ | ✅ | ✅ | Active state has accent bg |

**Visual Checklist:**

**Light Mode:**
- [ ] Forms have black borders (4px)
- [ ] Shadows are black (10px offset)
- [ ] Focus states show cyan glow
- [ ] Background is white
- [ ] Text is dark

**Dark Mode:**
- [ ] Forms have white borders (4px)
- [ ] Shadows are white (10px offset)
- [ ] Focus states show cyan glow (same as light)
- [ ] Background is dark
- [ ] Text is light

**Responsive:**
- [ ] No layout breaks at 320px width
- [ ] No horizontal scroll
- [ ] Touch targets ≥ 44×44px
- [ ] Text readable at all sizes

---

### **4.2 Accessibility Testing**

**Focus Indicator Testing:**

**Tool:** Browser keyboard navigation

**Process:**
1. Press Tab to navigate through form
2. Verify each input shows visible focus indicator
3. Check contrast ratio of focus indicator (use DevTools)
4. Verify keyboard navigation order is logical

**Checklist:**
- [ ] Tab key navigates to all interactive elements
- [ ] Focus indicators visible (outline + shadow/glow)
- [ ] Focus outline contrast ≥ 3:1 (WCAG 2.1 AA)
- [ ] No keyboard traps
- [ ] Skip links work
- [ ] Tab order is logical (top to bottom, left to right)

**Color Contrast Testing:**

**Tool:** Chrome DevTools Accessibility Panel or axe DevTools

**Process:**
1. Inspect each text element
2. Check contrast ratio in Accessibility panel
3. Verify meets WCAG 2.1 AA minimum (4.5:1 for normal text, 3:1 for large)
4. Test in both light and dark modes

**Checklist:**
- [ ] Body text ≥ 4.5:1 contrast (AA)
- [ ] Large text ≥ 3:1 contrast (AA)
- [ ] Focus indicators ≥ 3:1 contrast (AA)
- [ ] Error messages ≥ 4.5:1 contrast
- [ ] Disabled states clearly indicated

---

### **4.3 Browser Compatibility Testing**

**Test Browsers:**
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

**CSS Features to Test:**
- [ ] CSS variables (`var()`) work correctly
- [ ] `:focus-visible` pseudo-class supported
- [ ] `translate()` transforms work
- [ ] `box-shadow` renders correctly
- [ ] Dark mode class (`.dark`) applies correctly

**Fallbacks (if needed):**
```css
/* Fallback for browsers without :focus-visible */
.funky-select:focus {
  outline: 2px solid var(--funky-glow-primary);
}

.funky-select:focus:not(:focus-visible) {
  outline: none;
}

.funky-select:focus-visible {
  outline: 2px solid var(--funky-glow-primary);
}
```

---

### **4.4 Performance Testing**

**Metrics to Check:**

**CSS Parse Time:**
- Before: Use DevTools Performance tab to measure CSS parse time
- After: Re-measure and compare
- Target: < 50ms parse time for all stylesheets

**CSS Bundle Size:**
- Before: Check total CSS file size
- After: Check total CSS file size
- Target: ≤ 10% reduction for P0 tasks, > 20% for P1+

**Lighthouse Score:**
- Run Lighthouse audit before changes
- Run Lighthouse audit after changes
- Target: No regression in Performance score

**Memory Usage:**
- Check Chrome Task Manager (Shift+Esc) before changes
- Check after changes
- Target: Measurable reduction (use formula from audit)

---

## Phase 5: Documentation & Metrics

### **5.1 Document Results**

**Create "After" Snapshot:**

```markdown
## Results & Metrics

### Before Optimization

File: /src/styles/globals.css (Lines 28-100, ~170 lines)

Issues:
- 15 hardcoded colors (#000, #fff, #0ff)
- 0 CSS variables used
- No dark mode support (broken)
- No accessibility focus indicators
- BEM compliance: 0%

Code Example:
```css
.funky-select {
  border: 3px solid #000;
  background: #fff;
  box-shadow: 4px 4px 0px #000;
}

.funky-select:focus {
  box-shadow: 6px 6px 0px #0ff;
  outline: none !important;  /* ❌ Accessibility fail */
}
```

### After Optimization

Files Modified:
- `/src/styles/theme-funky.css` (added 170 lines, 12 tokens)
- `/src/styles/globals.css` (removed 170 lines, added comment)

Improvements:
- 0 hardcoded colors (100% elimination)
- 12 new CSS variables
- Full dark mode support
- AAA focus indicators (dual outline + glow)
- BEM compliance: 0% (deferred to P1.1)

Code Example:
```css
.funky-select {
  border: var(--funky-border-width-md) solid var(--funky-border-color);
  background: var(--wp--preset--color--background);
  box-shadow: var(--funky-shadow-offset-sm) var(--funky-shadow-offset-sm) 0px var(--funky-shadow-color);
  color: var(--wp--preset--color--foreground);
}

.funky-select:focus-visible {
  box-shadow: var(--funky-shadow-offset-md) var(--funky-shadow-offset-md) 0px var(--funky-glow-primary);
  outline: 2px solid var(--funky-glow-primary);
  outline-offset: 2px;
}
```

### Metrics Comparison

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Hardcoded colors | 15 | 0 | ✅ 100% |
| CSS variables | 0 | 12 | ✅ +12 tokens |
| Dark mode support | ❌ Broken | ✅ Works | ✅ Fixed |
| Accessibility (focus) | ❌ Fail | ✅ AAA | ✅ Dual indicators |
| globals.css size | 1,000 lines | 830 lines | ✅ 17% reduction |
| theme-funky.css size | 600 lines | 770 lines | ℹ️ Consolidation |
| Total CSS size | ~18,000 lines | ~17,830 lines | ✅ 0.9% reduction |

### Memory Impact Calculation

Formula:
```
Memory = (CSS_KB × 0.003) + (Selectors × 0.0001) + (Tokens × 0.0002)
```

Calculation:
```
CSS reduction: 170 lines ≈ 7 KB
Selectors consolidated: 15
Tokens added: 12

Memory = (7 × 0.003) + (15 × 0.0001) + (12 × 0.0002)
       = 0.021 + 0.0015 + 0.0024
       = 0.0249 MB (~25 KB)
```

ROI:
```
Effort: 2 hours
Memory saved: 25 KB
ROI: 12.5 KB/hour

Additional benefits:
- Dark mode now works (critical bug fix)
- Easier maintenance (centralized tokens)
- Enables future optimizations (token-driven theming)
```
```

---

### **5.2 Update Guidelines (If Needed)**

**When to Update Guidelines:**
- New design tokens added → Update `/guidelines/design-tokens/[category].md`
- New BEM patterns created → Update `/guidelines/development/css-optimization-guidelines.md`
- New best practices discovered → Update quick reference guide

**Example Update:**

**File:** `/guidelines/design-tokens/funky-aesthetic.md` (create if doesn't exist)

```markdown
# Funky Aesthetic Design Tokens

## Glow Colors (Decorative Neon Effects)

### Primary Glow (Cyan)
- **Token:** `--funky-glow-primary`
- **Value:** `#00ffff`
- **Usage:** Focus states, decorative accents
- **Contrast:** 4.5:1 on black, 7:1 on white
- **Dark Mode:** Same value (neon effect consistent)

### Secondary Glow (Magenta)
- **Token:** `--funky-glow-secondary`
- **Value:** `#ff00ff`
- **Usage:** Hover states, secondary accents
- **Contrast:** 4.0:1 on black, 6.5:1 on white
- **Dark Mode:** Same value

## Shadow System

### Shadow Color
- **Token:** `--funky-shadow-color`
- **Light Mode:** `#000000` (black)
- **Dark Mode:** `#ffffff` (white)
- **Usage:** All box-shadow declarations in funky theme

### Shadow Offsets
- **Small:** `--funky-shadow-offset-sm` = `4px`
- **Medium:** `--funky-shadow-offset-md` = `6px`
- **Default:** `--funky-shadow-offset` = `10px`
- **Large:** `--funky-shadow-offset-lg` = `12px`
```

---

### **5.3 Create Implementation Report**

**Report File:** `/reports/css-optimization/YYYY-MM-DD_task-ID_brief-description.md`

**Example:** `/reports/css-optimization/2026-03-05_P0.1_funky-css-variables.md`

**Report Structure:**
```markdown
# CSS Optimization Report — P0.1 Funky Variables

**Task ID:** P0.1
**Date:** 2026-03-05
**Assignee:** [Your Name]
**Status:** ✅ Complete
**Effort:** 2 hours
**Memory Saved:** 25 KB

---

## Summary

Migrated 15 hardcoded colors in funky checkout styles to CSS variables,
fixed dark mode support, and added AAA-compliant focus indicators.

---

## Changes

### Files Modified (2)
1. `/src/styles/theme-funky.css` (+182 lines)
   - Added 12 new CSS variables
   - Added 170 lines of migrated funky styles
   
2. `/src/styles/globals.css` (-168 lines)
   - Removed 170 lines of funky styles
   - Added reference comment

### Tokens Added (12)
- `--funky-glow-primary` (cyan)
- `--funky-glow-secondary` (magenta)
- `--funky-glow-accent` (lime)
- `--funky-shadow-color` (black → white in dark mode)
- `--funky-shadow-offset` (10px)
- `--funky-shadow-offset-sm` (4px)
- `--funky-shadow-offset-md` (6px)
- `--funky-shadow-offset-lg` (12px)
- `--funky-border-width` (4px)
- `--funky-border-width-sm` (2px)
- `--funky-border-width-md` (3px)
- `--funky-border-color` (black → white in dark mode)

---

## Testing Results

### Visual Regression: ✅ Pass
- Light mode: Black borders, black shadows ✅
- Dark mode: White borders, white shadows ✅
- Focus states: Cyan glow in both modes ✅

### Accessibility: ✅ Pass (AAA)
- Focus indicators visible ✅
- Dual indicators (outline + glow) ✅
- Contrast ratio 7:1 (AAA) ✅
- Keyboard navigation works ✅

### Browser Compatibility: ✅ Pass
- Chrome 121+ ✅
- Firefox 122+ ✅
- Safari 17+ ✅
- Edge 121+ ✅

---

## Metrics

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Hardcoded colors | 15 | 0 | -15 (100%) |
| CSS variables | 0 | 12 | +12 |
| Dark mode | ❌ | ✅ | Fixed |
| Accessibility | ❌ | ✅ | AAA |
| globals.css | 1,000 | 830 | -170 lines |

---

## Lessons Learned

### What Worked Well
1. CSS variables enabled instant theme switching
2. Dual focus indicators (outline + glow) ensure AAA compliance
3. Consolidating funky styles improved organization

### Challenges
1. Testing both themes required checking every component
2. !important usage in funky styles (needs future cleanup)
3. Need better visual regression testing tools

### Recommendations
1. Always test theme switching after token changes
2. Document token purpose in comments
3. Use descriptive token names (context, not appearance)
4. Migrate incrementally to avoid breaking changes

---

## Next Steps

### Immediate
- [ ] Task P0.2: Add missing design tokens to theme-variables.css

### Short-term
- [ ] Task P1.1: Migrate .funky-* classes to BEM modifiers
- [ ] Update component documentation with new class names

---

**Reviewer:** [Reviewer Name]
**Approved:** YYYY-MM-DD
**Deployed:** YYYY-MM-DD
```

---

### **5.4 Update Task List**

**Mark task complete** in `/tasks/memory-optimization-tasks.md`:

```markdown
## P0 Tasks

### ✅ P0.1 - Define Funky CSS Variables and Migrate Hardcoded Colors
- **Status:** ✅ Complete (2026-03-05)
- **Effort:** 2 hours (estimated: 1-2 hours)
- **Memory Saved:** 25 KB (estimated: 25 KB)
- **Report:** `/reports/css-optimization/2026-03-05_P0.1_funky-css-variables.md`
- **Files Modified:** `theme-funky.css`, `globals.css`
- **Tokens Added:** 12 new CSS variables
- **Issues Fixed:** Dark mode broken, no accessibility focus indicators

### 🔄 P0.2 - Add Missing Design Tokens to theme-variables.css
- **Status:** 🔄 In Progress (started 2026-03-06)
- **Effort:** TBD
- **Dependencies:** ✅ P0.1 complete
```

---

## 🔧 Common Implementation Scenarios

### **Scenario 1: Adding New Design Tokens**

**When:** You discover hardcoded values that need tokenization.

**Process:**
1. Identify hardcoded value category (color, spacing, typography, etc.)
2. Check if similar token already exists
3. Choose appropriate CSS file:
   - Theme-specific → `/src/styles/theme-[name].css`
   - Global/WordPress → `/src/styles/theme-variables.css`
4. Add token to `:root` block
5. Add dark mode override to `.dark` block (if needed)
6. Document token with comment
7. Replace hardcoded values with token
8. Test in both modes

**Example:**
```css
/* 1. Found hardcoded value */
.component { background: #f3f4f6; }

/* 2. Check existing tokens */
/* → No exact match for this gray shade */

/* 3. Add to theme-variables.css */
:root {
  --wp--preset--color--surface-subtle: #f3f4f6;
}

.dark {
  --wp--preset--color--surface-subtle: #1f2937;
}

/* 4. Replace hardcoded value */
.component { background: var(--wp--preset--color--surface-subtle); }
```

---

### **Scenario 2: Migrating to BEM Naming**

**When:** Existing classes don't follow BEM convention.

**Process:**
1. Identify non-BEM classes
2. Determine correct BEM structure:
   - Block: Component type (`.wc-block-product-card`)
   - Element: Sub-component (`.wc-block-product-card__image`)
   - Modifier: Variant (`.wc-block-product-card--featured`)
3. Add new BEM class alongside old class (dual classing)
4. Update component JSX to use both classes
5. Test thoroughly
6. Update all component instances
7. Remove old class after migration complete

**Example:**
```css
/* Before */
.product-card-image { }

/* During migration (support both) */
.product-card-image,
.wc-block-product-card__image {
  width: 100%;
  height: auto;
}

/* After migration (remove old class) */
.wc-block-product-card__image {
  width: 100%;
  height: auto;
}
```

```tsx
/* Component update */
// Before
<img className="product-card-image" />

// During migration
<img className="product-card-image wc-block-product-card__image" />

// After migration
<img className="wc-block-product-card__image" />
```

---

### **Scenario 3: Splitting Large CSS Files**

**When:** Single CSS file exceeds 500 lines or serves multiple purposes.

**Process:**
1. Analyze file structure (sections, patterns)
2. Identify logical split points
3. Create new files with descriptive names
4. Move sections to new files
5. Update import order in main stylesheet
6. Test all affected components
7. Update documentation

**Example:**

**Before (single file):**
```
/src/styles/blog-format-archives-funky.css (979 lines)
  - Standard format styles (200 lines)
  - Audio format styles (250 lines)
  - Video format styles (180 lines)
  - Gallery format styles (220 lines)
  - Aside format styles (129 lines)
```

**After (split):**
```
/src/styles/blog/
  ├── blog-archive-base-funky.css (200 lines - shared styles)
  ├── blog-archive-audio-funky.css (250 lines)
  ├── blog-archive-video-funky.css (180 lines)
  ├── blog-archive-gallery-funky.css (220 lines)
  └── blog-archive-aside-funky.css (129 lines)
```

**Update imports:**
```css
/* /src/styles/globals.css */

/* Blog format archives - split for maintainability */
@import './blog/blog-archive-base-funky.css';
@import './blog/blog-archive-audio-funky.css';
@import './blog/blog-archive-video-funky.css';
@import './blog/blog-archive-gallery-funky.css';
@import './blog/blog-archive-aside-funky.css';
```

**Benefits:**
- Code splitting (load only needed format styles)
- Easier maintenance (find relevant code faster)
- Better organization (clear file purpose)
- Memory savings (conditional loading)

---

### **Scenario 4: Extracting Reusable Pattern CSS**

**When:** Same CSS repeated across multiple components.

**Process:**
1. Identify duplicate CSS patterns
2. Extract to utility class or pattern file
3. Create pattern documentation
4. Update components to use pattern
5. Remove duplicate code
6. Test all affected components

**Example:**

**Before (duplicate code):**
```css
/* In multiple files */
.hero-section {
  padding: var(--wp--preset--spacing--60);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
}

.cta-section {
  padding: var(--wp--preset--spacing--60);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
}

.feature-section {
  padding: var(--wp--preset--spacing--60);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  text-align: center;
}
```

**After (extracted pattern):**
```css
/* New file: /src/styles/patterns/gradient-section.css */

/* Gradient Section Pattern
   Reusable section with purple gradient background
   Usage: Add .wp-pattern-gradient-section to any <section> */
.wp-pattern-gradient-section {
  padding: var(--wp--preset--spacing--60);
  background: linear-gradient(135deg, 
    var(--wp--preset--color--accent-primary) 0%, 
    var(--wp--preset--color--accent-secondary) 100%
  );
  text-align: center;
}

/* Variant: Dark gradient */
.wp-pattern-gradient-section--dark {
  background: linear-gradient(135deg, 
    var(--wp--preset--color--background-dark) 0%, 
    var(--wp--preset--color--surface-dark) 100%
  );
}
```

```css
/* Update original files */
.hero-section { /* Remove duplicate styles */ }
.cta-section { /* Remove duplicate styles */ }
.feature-section { /* Remove duplicate styles */ }

/* Components now use pattern class */
<section className="hero-section wp-pattern-gradient-section">
<section className="cta-section wp-pattern-gradient-section">
<section className="feature-section wp-pattern-gradient-section">
```

**Benefits:**
- DRY principle (single source of truth)
- Easier updates (change once, affects all)
- Smaller CSS bundle (removed duplicates)
- Memory savings (fewer selectors)

---

## 📊 Tracking Progress

### **Progress Dashboard Template**

**File:** `/reports/css-optimization/YYYY-MM_progress-dashboard.md`

```markdown
# CSS Optimization Progress Dashboard — March 2026

**Last Updated:** 2026-03-06  
**Sprint:** Sprint 12  
**Focus:** P0 Critical Tasks

---

## Overview

| Metric | Current | Target | Progress |
|--------|---------|--------|----------|
| **Tasks Complete** | 1 / 25 | 25 | 4% |
| **Memory Saved** | 25 KB | 500 KB | 5% |
| **CSS Lines Reduced** | 170 | 2,000 | 8.5% |
| **BEM Compliance** | 62% | 95% | 62% |
| **Token Coverage** | 78% | 100% | 78% |

---

## This Sprint (P0 Tasks)

### ✅ Completed
- P0.1 - Funky CSS Variables (2 hours, 25 KB saved)

### 🔄 In Progress
- P0.2 - Missing Design Tokens (started 2026-03-06)

### ⏳ Planned
- P0.3 - Fix Accessibility Focus States
- P0.4 - Consolidate Color Tokens

---

## Next Sprint (P1 Tasks)

- P1.1 - Migrate .funky-* to BEM
- P1.2 - Split blog-format-archives-funky.css
- P1.3 - Extract reusable patterns

---

## Blockers

None at this time.

---

## Wins This Sprint

1. ✅ Fixed dark mode for funky checkout forms
2. ✅ Achieved AAA accessibility for focus states
3. ✅ Reduced globals.css by 17%

---

## Learnings

1. CSS variables enable instant theme switching
2. Dual focus indicators ensure AAA compliance
3. Testing in both modes is critical

---

**Next Review:** 2026-03-13 (weekly)
```

---

## 🚨 Troubleshooting Common Issues

### **Issue 1: Dark Mode Not Working**

**Symptoms:**
- Colors don't change when toggling dark mode
- Dark mode class applied but styles unchanged

**Diagnosis:**
1. Check if `.dark` class is on `<html>` element
2. Verify CSS variable overrides exist in `.dark` block
3. Check CSS specificity (inline styles override CSS variables)

**Fix:**
```css
/* Missing dark mode override */
:root {
  --color-background: #ffffff;
}

/* Add this: */
.dark {
  --color-background: #0f0f0f;
}
```

---

### **Issue 2: Focus Indicators Not Visible**

**Symptoms:**
- Keyboard navigation shows no visual focus
- Focus outline color doesn't meet contrast requirements

**Diagnosis:**
1. Check if `outline: none` exists without replacement
2. Verify focus indicator contrast ratio (use DevTools)
3. Check if `:focus` or `:focus-visible` is used

**Fix:**
```css
/* Wrong */
.input:focus {
  outline: none;  /* ❌ Removes indicator */
}

/* Right */
.input:focus-visible {
  outline: 2px solid var(--funky-glow-primary);
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(0, 255, 255, 0.2);  /* Additional indicator */
}
```

---

### **Issue 3: CSS Variables Not Resolving**

**Symptoms:**
- Browser shows `var(--token-name)` in DevTools instead of value
- Styles not applying

**Diagnosis:**
1. Check if variable is defined in `:root` block
2. Verify variable name spelling (case-sensitive)
3. Check CSS file import order (variables must load first)

**Fix:**
```css
/* Wrong */
.component {
  color: var(--undefined-token);  /* Variable not defined */
}

/* Right */
:root {
  --defined-token: #000000;
}

.component {
  color: var(--defined-token);  /* ✅ Works */
}
```

**Import Order:**
```css
/* globals.css - correct order */
@import './theme-variables.css';  /* ✅ Load variables FIRST */
@import './theme-funky.css';      /* Then load theme */
@import './components.css';       /* Then load components */
```

---

### **Issue 4: BEM Class Not Applying**

**Symptoms:**
- New BEM class added but styles not working
- Specificity issues

**Diagnosis:**
1. Check if component JSX uses new class name
2. Verify CSS selector specificity (old class may override)
3. Check for typos in class name

**Fix:**
```tsx
/* Wrong */
<select className="funky-select">  {/* Old class */}

/* Right (during migration) */
<select className="funky-select wp-element-select--funky">

/* Right (after migration) */
<select className="wp-element-select--funky">
```

```css
/* Handle specificity during migration */
.funky-select,
.wp-element-select--funky {
  /* Shared styles */
}

/* New BEM-specific styles */
.wp-element-select--funky.wp-element-select--disabled {
  opacity: 0.5;
}
```

---

## 📚 Quick Reference Links

### **Guidelines**
- [Complete CSS Optimization Guidelines](./css-optimization-guidelines.md)
- [Quick Reference](./css-optimization-quick-reference.md)
- [Implementation Example](./implementation-example.md)
- [Project Guidelines - Section 4](../Guidelines.md#4-styling-system-wordpresswoocommerce-css-architecture)

### **Design Tokens**
- [Colors](../design-tokens/colors.md)
- [Typography](../design-tokens/typography.md)
- [Spacing](../design-tokens/spacing.md)
- [Dark Mode](../design-tokens/dark-mode.md)

### **Prompts**
- [Enhanced Orchestrator](/prompts/memory-optimization/orchestrator_enhanced-css-memory.md)
- [Figma Memory Audit](/prompts/memory-optimization/sub-prompt_figma-memory-audit.md)
- [CSS Architecture Audit](/prompts/memory-optimization/sub-prompt_css-architecture-audit.md)

---

## ✅ Final Checklist

**Before marking implementation complete:**

### **Code Quality**
- [ ] All hardcoded values replaced with CSS variables
- [ ] BEM naming conventions followed (or planned for P1)
- [ ] Dark mode support for all new styles
- [ ] Accessibility requirements met (WCAG 2.1 AA minimum)
- [ ] No console errors or warnings
- [ ] CSS validates (no syntax errors)

### **Testing**
- [ ] Visual regression testing complete (light + dark mode)
- [ ] Accessibility testing complete (keyboard nav, contrast)
- [ ] Browser compatibility testing complete (Chrome, Firefox, Safari, Edge)
- [ ] Performance testing complete (no regression)
- [ ] Mobile responsive testing complete (320px → 1920px)

### **Documentation**
- [ ] Implementation report created
- [ ] Task list updated (mark complete)
- [ ] Guidelines updated (if new patterns added)
- [ ] Design tokens documented (if new tokens added)
- [ ] Progress dashboard updated

### **Deployment**
- [ ] Code reviewed by peer
- [ ] Changes merged to main branch
- [ ] Deployed to staging environment
- [ ] Smoke tested in production
- [ ] Monitoring metrics (memory, performance)

---

**Implementation Status:** 📖 Complete Guide  
**Next Steps:** Use this guide for all future CSS optimization tasks  
**Questions?** See [Troubleshooting](#-troubleshooting-common-issues) or contact team lead
