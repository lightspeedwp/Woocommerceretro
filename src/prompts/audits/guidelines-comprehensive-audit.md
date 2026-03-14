# Guidelines Comprehensive Audit Prompt

**Purpose:** Systematically review EVERY guidelines file in `/guidelines/` directory for completeness, accuracy, consistency, and adherence to standards.

**Version:** 1.0  
**Created:** 2026-03-13  
**Estimated Time:** 4-6 hours (for 170+ files)

---

## Prerequisites

Before starting this audit, you must:

1. **Read these files completely:**
   - [ ] `/guidelines/WRITING_GUIDELINES.md` - Writing standards
   - [ ] `/guidelines/_templates.md` - Template usage guide
   - [ ] `/guidelines/Guidelines.md` - Main project guidelines
   - [ ] `/guidelines/_templates/component-guideline.md` - Component template
   - [ ] `/guidelines/_templates/design-token-guideline.md` - Design token template

2. **Prepare workspace:**
   - [ ] Create `/reports/audits/2026-MM-DD_guidelines-comprehensive-audit/` folder
   - [ ] Create audit tracking spreadsheet/document

3. **Verify access:**
   - [ ] Can read all files in `/guidelines/` directory
   - [ ] Can create reports in `/reports/audits/`
   - [ ] Can create tasks in `/tasks/`

---

## Phase 1: Discovery & Inventory

### Step 1.1: Generate Complete File List

```bash
# List all .md files in guidelines directory
find /guidelines -name "*.md" -type f | sort > guidelines-inventory.txt
```

**Expected count:** 170+ files

**Categorize files by type:**

| Category | Pattern | Example | Count |
|----------|---------|---------|-------|
| Main | `Guidelines.md` | `Guidelines.md` | 1 |
| Process | `*_GUIDELINES.md` | `WRITING_GUIDELINES.md` | 8 |
| Overview | `overview-*.md` | `overview-components.md` | 7 |
| Blocks | `blocks/*.md` | `blocks/ProductCard.md` | 50+ |
| Patterns | `patterns/*.md` | `patterns/Hero.md` | 12+ |
| Parts | `parts/*.md` | `parts/Header.md` | 4+ |
| Components | `components/*.md` | `components/Container.md` | 5+ |
| Design Tokens | `design-tokens/*.md` | `design-tokens/Colors.md` | 6 |
| Mobile | `mobile/*.md` | `mobile/buttons.md` | 7 |
| Templates | `templates/*.md` | `templates/FrontPage.md` | 0-5 |
| Styles | `styles/*.md` | `styles/section-styles.md` | 2 |
| Templates | `_templates/*.md` | `_templates/component-guideline.md` | 2+ |

### Step 1.2: Create Audit Matrix

For EACH file, track:

| File Path | Category | Template Used | Last Updated | Status | Priority Issues |
|-----------|----------|---------------|--------------|--------|-----------------|
| [path] | [category] | [Y/N] | [date] | [Red/Yellow/Green] | [issues] |

**Status Key:**
- 🟢 **Green** - Complete, accurate, follows template
- 🟡 **Yellow** - Missing sections, needs updates
- 🔴 **Red** - Critical issues, outdated, non-compliant

---

## Phase 2: File-by-File Audit

For **EACH** guidelines file, perform this audit:

### Step 2.1: Template Compliance Check

**Question:** Does this file follow the appropriate template?

**Determine expected template:**
- Component file (blocks/patterns/parts) → `component-guideline.md`
- Design token file → `design-token-guideline.md`
- Process file (*_GUIDELINES.md) → (no template yet, note for creation)
- Overview file → (no template yet, note for creation)

**Check for required sections:**

**Component Template Required Sections:**
- [ ] Overview (REQUIRED)
- [ ] Visual Reference (REQUIRED for UI)
- [ ] Implementation (REQUIRED)
- [ ] Props/API (REQUIRED)
- [ ] Usage Examples (REQUIRED)
- [ ] Styling (REQUIRED)
- [ ] Dark Mode Support (REQUIRED)
- [ ] Accessibility (REQUIRED)
- [ ] Responsive Design (REQUIRED)
- [ ] Best Practices (REQUIRED)

**Design Token Template Required Sections:**
- [ ] Overview (REQUIRED)
- [ ] Token Definitions (REQUIRED)
- [ ] Token Reference Table (REQUIRED)
- [ ] Semantic Tokens (REQUIRED)
- [ ] Usage Examples (REQUIRED)
- [ ] Dark Mode Implementation (REQUIRED)
- [ ] Component Application (REQUIRED)
- [ ] Theme Integration (REQUIRED)
- [ ] Accessibility Guidelines (REQUIRED)
- [ ] Best Practices (REQUIRED)

**Scoring:**
- 10/10 sections = 🟢 Green (Complete)
- 7-9/10 sections = 🟡 Yellow (Needs work)
- < 7/10 sections = 🔴 Red (Critical gaps)

---

### Step 2.2: Content Accuracy Check

**Questions to verify:**

1. **Is the information current?**
   - Check file dates vs current codebase
   - Verify file paths are correct
   - Verify component names match current code

2. **Are code examples valid?**
   - Copy code examples
   - Verify syntax is correct
   - Check imports exist
   - Verify props match actual component

3. **Are CSS examples accurate?**
   - Check CSS class names match actual files
   - Verify CSS variables exist in `/src/styles/theme-variables.css`
   - Confirm dark mode patterns are implemented

4. **Are accessibility claims verified?**
   - Check ARIA attributes mentioned
   - Verify contrast ratios claimed
   - Confirm keyboard navigation described

**Verification Method:**

```bash
# Example: Verify ProductCard component props
grep "interface ProductCardProps" src/app/components/blocks/ProductCard.tsx

# Example: Verify CSS class exists
grep "\.wc-block-product-card" src/styles/blocks/product/product-card.css

# Example: Verify CSS variable exists
grep "--wp--preset--color--primary" src/styles/theme-variables.css
```

**Scoring:**
- 100% accurate = 🟢 Green
- 1-3 minor issues = 🟡 Yellow
- 4+ issues or critical error = 🔴 Red

---

### Step 2.3: Completeness Check

**Questions:**

1. **Are all props documented?**
   - Compare guideline props table with actual TypeScript interface
   - Note any undocumented props

2. **Are all CSS classes documented?**
   - Compare guideline CSS section with actual CSS file
   - Note any undocumented classes

3. **Are examples sufficient?**
   - Basic usage example? (REQUIRED)
   - Advanced usage example? (OPTIONAL but recommended)
   - State management example? (if applicable)

4. **Is dark mode fully documented?**
   - Light mode CSS?
   - Dark mode CSS?
   - Checklist completed?

5. **Is accessibility fully documented?**
   - ARIA attributes?
   - Keyboard navigation?
   - Screen reader support?
   - WCAG compliance stated?

**Scoring:**
- All required elements present = 🟢 Green
- Missing 1-2 optional elements = 🟡 Yellow
- Missing required elements = 🔴 Red

---

### Step 2.4: Consistency Check

**Questions:**

1. **Does naming match conventions?**
   - Component files: `PascalCase.md`
   - Design tokens: `kebab-case.md`
   - Process files: `SCREAMING_SNAKE_CASE.md`

2. **Does file location match category?**
   - Blocks in `/guidelines/blocks/`
   - Patterns in `/guidelines/patterns/`
   - Parts in `/guidelines/parts/`
   - Design tokens in `/guidelines/design-tokens/`

3. **Are cross-references valid?**
   - Check all internal links
   - Verify referenced files exist
   - Confirm paths are correct

**Verification:**

```bash
# Example: Check all internal links in a file
grep -o "\[.*\](.*\.md)" /guidelines/blocks/ProductCard.md

# Verify each linked file exists
```

---

### Step 2.5: Standards Compliance Check

**WordPress/WooCommerce Standards:**

1. **Are class names following BEM with WordPress prefixes?**
   - ✅ `wc-block-product-card`
   - ✅ `wp-section-hero`
   - ❌ `product-card` (no prefix)
   - ❌ `flex items-center` (Tailwind, not WordPress)

2. **Are CSS variables using WordPress naming?**
   - ✅ `--wp--preset--color--primary`
   - ✅ `--wp--preset--spacing--40`
   - ❌ `--primary-color` (not WordPress pattern)

3. **Are semantic HTML tags documented?**
   - Using `<section>`, `<article>`, `<nav>`, `<aside>`?
   - Using `<button>` for actions, `<a>` for navigation?

**Accessibility Standards:**

1. **WCAG 2.1 AA compliance stated?**
   - Contrast ratios documented?
   - Touch targets 44x44px minimum?
   - Keyboard navigation described?

2. **ARIA usage correct?**
   - `aria-label` for icon-only buttons?
   - `aria-expanded` for collapsible elements?
   - `role` attributes appropriate?

---

## Phase 3: Gap Analysis

### Step 3.1: Missing Guidelines

**Check for components WITHOUT guidelines:**

```bash
# List all component files
find /src/app/components/blocks -name "*.tsx" -type f | sed 's/.*\///' | sed 's/\.tsx$//' | sort > components-inventory.txt

# List all guideline files
find /guidelines/blocks -name "*.md" -type f | sed 's/.*\///' | sed 's/\.md$//' | sort > guidelines-inventory.txt

# Find components without guidelines (diff)
comm -23 components-inventory.txt guidelines-inventory.txt
```

**Expected outcome:** List of components needing guidelines

**Create task for each missing guideline:**
```markdown
- [ ] **T#.#** - Create guideline: /guidelines/blocks/[ComponentName].md
```

---

### Step 3.2: Missing Design Token Files

**Required minimum 14 design token files:**

1. `colors.md` - ✅ Exists (verify)
2. `typography.md` - ✅ Exists (verify)
3. `spacing.md` - ✅ Exists (verify)
4. `dark-light-mode.md` - ❓ Check if exists
5. `buttons.md` - ❓ Check if exists
6. `forms.md` - ❓ Check if exists
7. `shadows.md` - ❓ Check if exists
8. `borders.md` - ❓ Check if exists
9. `radii.md` - ❓ Check if exists
10. `iconography.md` - ❓ Check if exists
11. `animations.md` - ❓ Check if exists
12. `responsive.md` - ❓ Check if exists
13. `touch-targets.md` - ❓ Check if exists
14. `navigation.md` - ❓ Check if exists

**Verify each file:**
```bash
ls -1 /guidelines/design-tokens/
```

**Create tasks for missing files:**
```markdown
- [ ] **T#.#** - Create design token guideline: /guidelines/design-tokens/[token-name].md
```

---

## Phase 4: Prioritization & Reporting

### Step 4.1: Categorize Issues

**P0 - Critical (Must fix immediately):**
- Missing required sections in high-traffic guidelines
- Incorrect/outdated code examples that would break if copied
- Critical accessibility violations documented as correct
- Security issues in documented patterns

**P1 - High Priority (Fix this week):**
- Missing design token files (buttons, forms, shadows, etc.)
- Incomplete component guidelines (missing props, examples)
- Broken internal links
- Inconsistent naming/organization

**P2 - Medium Priority (Fix this month):**
- Missing optional sections
- Minor inconsistencies
- Style improvements
- Better examples needed

**P3 - Low Priority (Nice to have):**
- Additional advanced examples
- Performance tips
- Migration notes

---

### Step 4.2: Generate Audit Report

**Report structure:**

```markdown
# Guidelines Comprehensive Audit Report

**Date:** YYYY-MM-DD  
**Files Audited:** [count]  
**Status Distribution:**
- 🟢 Green (Complete): [count] ([percentage]%)
- 🟡 Yellow (Needs work): [count] ([percentage]%)
- 🔴 Red (Critical gaps): [count] ([percentage]%)

## Summary Statistics

| Category | Total Files | Green | Yellow | Red | Completion % |
|----------|-------------|-------|--------|-----|--------------|
| Blocks | 50 | 30 | 15 | 5 | 60% |
| Patterns | 12 | 8 | 3 | 1 | 67% |
| [etc...] | | | | | |

## Critical Issues (P0)

1. **[File]** - [Issue description]
   - **Impact:** [What breaks if not fixed]
   - **Fix:** [Specific action needed]

## High Priority Issues (P1)

[List all P1 issues]

## Detailed Findings

### [Category 1]

#### [File 1]
- **Status:** 🟡 Yellow
- **Template Compliance:** 7/10 sections
- **Missing:** Accessibility section, Dark mode examples
- **Issues:** 
  - Props table doesn't match TypeScript interface
  - CSS class name incorrect
- **Priority:** P1

[Repeat for each file]

## Gap Analysis

### Missing Component Guidelines (13 files)
- ProductPrice
- ProductMeta
- [etc...]

### Missing Design Token Files (8 files)
- buttons.md
- forms.md
- [etc...]

## Recommendations

### Immediate Actions (This Week)
1. Fix all P0 critical issues (3 files)
2. Create missing design token files (8 files)
3. Update incorrect code examples (12 files)

### Short-term Actions (This Month)
1. Fill missing required sections (25 files)
2. Create missing component guidelines (13 files)
3. Fix broken internal links (7 files)

### Long-term Actions (This Quarter)
1. Enhance all Yellow files to Green
2. Add advanced examples
3. Create process guideline templates
```

---

### Step 4.3: Create Task Lists

**File:** `/tasks/guidelines-remediation.md` (update existing or create new)

**Structure:**

```markdown
# Guidelines Remediation Task List

**Created:** YYYY-MM-DD  
**Source:** Comprehensive Guidelines Audit Report  
**Status:** In Progress

## P0 - Critical Fixes

- [ ] **T1.1** - Fix ProductCard props documentation
  - **Issue:** Props table doesn't match TypeScript interface
  - **File:** `/guidelines/blocks/ProductCard.md`
  - **Report:** Section 4.2.1 in audit report

[Continue for all P0 issues]

## P1 - High Priority

### Missing Design Token Files (8 tasks)

- [ ] **T2.1** - Create buttons.md design token guideline
- [ ] **T2.2** - Create forms.md design token guideline
[etc...]

### Incomplete Guidelines (15 tasks)

- [ ] **T3.1** - Add accessibility section to Hero.md
- [ ] **T3.2** - Add dark mode examples to Header.md
[etc...]

## P2 - Medium Priority

[Medium priority tasks]

## P3 - Low Priority

[Low priority tasks]
```

---

## Phase 5: Validation & Quality Check

### Step 5.1: Peer Review

**Before finalizing audit:**

1. **Sample check** 10% of audited files
2. **Verify** scoring is consistent
3. **Confirm** issues are accurately described
4. **Check** tasks are actionable

### Step 5.2: Automated Checks

```bash
# Verify no broken internal links
/scripts/check-internal-links.sh

# Verify all code examples have syntax highlighting
grep -r '```$' /guidelines/ 
# Should return 0 (all code blocks should specify language)

# Verify all files have last updated date
grep -L "Last Updated" /guidelines/**/*.md
```

---

## Deliverables

Upon completion of this audit, you will have created:

1. **Audit Report** - `/reports/audits/YYYY-MM-DD_guidelines-comprehensive-audit.md`
2. **Task List** - `/tasks/guidelines-remediation.md` (updated)
3. **Gap Analysis** - Embedded in audit report
4. **Statistics Dashboard** - Summary of findings
5. **Priority Matrix** - P0/P1/P2/P3 categorization

---

## Timeline Estimate

| Phase | Estimated Time | Notes |
|-------|---------------|-------|
| Phase 1: Discovery | 30 minutes | Automated mostly |
| Phase 2: File Audits | 3-4 hours | ~1-2 min per file × 170 files |
| Phase 3: Gap Analysis | 30 minutes | Scripted checks |
| Phase 4: Reporting | 1 hour | Write report, create tasks |
| Phase 5: Validation | 30 minutes | Quality check |
| **Total** | **5-6 hours** | Can be split across sessions |

---

## Success Criteria

Audit is complete when:

- [ ] All 170+ guidelines files have been reviewed
- [ ] Each file has a status (Green/Yellow/Red)
- [ ] All issues are documented
- [ ] Tasks created for all remediation work
- [ ] Audit report published
- [ ] Task list updated
- [ ] Stakeholders notified

---

## Related Guidelines

- **WRITING_GUIDELINES.md** - Writing standards
- **_templates.md** - Template usage
- **Guidelines.md** - Main project guidelines

---

**Created:** 2026-03-13  
**Author:** Development Team  
**Estimated Duration:** 5-6 hours  
**Next Audit:** Quarterly (June 2026)
