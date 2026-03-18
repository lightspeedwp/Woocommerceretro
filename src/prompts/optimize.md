# Optimize — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-15
**Type:** Single Prompt
**Trigger Word:** `optimize`
**Duration:** 20-40 minutes

---

## Objective

Identify and fix performance bottlenecks: oversized files, redundant CSS, large components, and memory-heavy patterns.

---

## Prerequisites

1. Read `/guidelines/development/css-optimization-guidelines.md`
2. Read `/guidelines/development/css-optimization-quick-reference.md`
3. Read `/guidelines/Guidelines.md` Section 4 (CSS Architecture), Section 6.2 (File Size Limits)
4. Verify design tokens are current in `/guidelines/design-tokens/`

---

## Execution Steps

### Phase 1: File Size Scan (5 min)

- [ ] Find all `.tsx` files > 300 lines — flag for splitting
- [ ] Find all `.css` files > 200 lines — flag for splitting
- [ ] Find all `.ts` data files > 250 lines — flag for splitting
- [ ] Find all guideline `.md` files > 500 lines — flag for chunking

### Phase 2: CSS Optimization (10 min)

- [ ] Identify duplicate CSS rules across files
- [ ] Find unused CSS classes (not referenced in any `.tsx`)
- [ ] Check for hardcoded values that should use CSS variables
- [ ] Verify dark mode is handled via CSS variables (not inline classes)

### Phase 3: Component Optimization (10 min)

- [ ] Check for components with multiple responsibilities (split candidates)
- [ ] Identify inline styles that should be CSS classes
- [ ] Find missing React.memo, useMemo, or useCallback opportunities
- [ ] Verify lazy loading for route-level components

### Phase 4: Report & Tasks (5-10 min)

- [ ] Create report at `/reports/optimization/YYYY-MM-DD_optimization-scan.md`
- [ ] After report is complete, create task list at `/tasks/optimization-task-list.md`
- [ ] Add summary to `/tasks/task-list.md`

---

## File Size Guidelines

| File Type | Target Max Lines | Action if Over |
|-----------|-----------------|----------------|
| `.tsx` component | 300 lines | Split into sub-components |
| `.css` stylesheet | 200 lines | Split by BEM block |
| `.ts` data file | 250 lines | Split by data category |
| `.md` guideline | 500 lines | Split into sub-guidelines |

---

## Success Criteria

- [ ] All oversized files identified
- [ ] Report created with actionable items
- [ ] Task list created (after report)
- [ ] No new files created in root directory

---

## Suggested Follow-Up Triggers

After optimization, consider running:
- `audit css` — if CSS issues were found but not fully resolved
- `audit styles` — if hardcoded values were detected
- `audit responsive` — if layout issues were identified
- `audit icons` — if icon import issues were noticed

## Guidelines Referenced

- `/guidelines/development/css-optimization-guidelines.md`
- `/guidelines/development/css-optimization-quick-reference.md`
- `/guidelines/Guidelines.md` Sections 4, 6.2