# Code Quality Comprehensive Audit Prompt

**Version:** 1.0  
**Created:** 2026-03-04  
**Purpose:** Identify code quality improvements, unused code, and optimization opportunities  
**Target:** Complete codebase audit for production polish

---

## Audit Scope

This audit focuses on identifying:

1. **Unused Imports** - Imported modules that are never referenced
2. **Orphaned Files** - Files that are not imported anywhere
3. **Duplicate Code** - Similar functions/utilities that could be consolidated
4. **CSS Optimization** - Unused CSS files or duplicate styles
5. **Documentation Gaps** - Missing JSDoc comments or incomplete documentation
6. **TypeScript Issues** - Type safety improvements
7. **Performance Opportunities** - Code patterns that could be optimized

---

## Audit Process

### Phase 1: Unused Imports Scan

**Action:** Search for import statements that import modules but never use them.

**Method:**
```bash
# Find all TypeScript files
find src/app -name "*.ts" -o -name "*.tsx"

# For each file, check if imports are used
# Example: import { SomeFunction } from './utils'
# Check if "SomeFunction" appears elsewhere in the file
```

**Report:**
- File path
- Line number
- Unused import name
- Import statement

---

### Phase 2: Orphaned Files Scan

**Action:** Find files that are not imported by any other file.

**Method:**
```bash
# Find all component files
find src/app/components -name "*.tsx"

# For each file, search entire codebase for imports
# If file is never imported, it may be orphaned
```

**Exclusions:**
- Entry points (App.tsx, main.tsx, routes.ts)
- Test files (*.test.ts, *.spec.ts)
- Type definition files (*.d.ts)
- Index files that re-export (index.ts)

**Report:**
- File path
- File size
- Last modified date
- Recommendation (delete, keep, investigate)

---

### Phase 3: Duplicate Code Detection

**Action:** Find similar utility functions, helper methods, or code patterns.

**Areas to Check:**
1. **/src/app/utils/** - Utility functions
2. **/src/app/hooks/** - Custom hooks
3. **/src/app/contexts/** - Context providers
4. **/src/app/components/common/** - Common components

**Report:**
- Function name
- File locations (all instances)
- Similarity score
- Consolidation recommendation

---

### Phase 4: CSS Optimization

**Action:** Identify unused CSS files and duplicate styles.

**Method:**
```bash
# Find all CSS files
find src/styles -name "*.css"

# Check if CSS file is imported in globals.css
grep "@import" src/styles/globals.css

# Find CSS files NOT imported anywhere
```

**Report:**
- CSS file path
- Import status (imported/orphaned)
- File size
- Recommendation

---

### Phase 5: Documentation Gaps

**Action:** Find exported functions/components without JSDoc comments.

**Method:**
```bash
# Find exported functions without JSDoc
grep -B1 "export function" src/app/**/*.ts | grep -v "/**"

# Find exported components without JSDoc
grep -B1 "export var" src/app/**/*.tsx | grep -v "/**"
```

**Report:**
- File path
- Function/component name
- Current documentation status
- Priority (high/medium/low)

---

### Phase 6: TypeScript Type Safety

**Action:** Find any remaining `any` types or missing type annotations.

**Method:**
```bash
# Find 'any' types
grep -rn ": any" src/app

# Find function parameters without types (if any remain)
grep -rn "function.*(" src/app | grep -v ":"
```

**Report:**
- File path
- Line number
- Current type (any)
- Suggested type

---

### Phase 7: Performance Opportunities

**Action:** Identify performance anti-patterns.

**Patterns to Check:**
1. Large inline objects in render functions
2. Unnecessary re-renders
3. Missing React.memo/useMemo/useCallback
4. Large bundle imports (importing entire libraries)

**Report:**
- File path
- Issue description
- Performance impact (high/medium/low)
- Suggested fix

---

## Output Format

### Summary Report Structure

```markdown
# Code Quality Audit Report

**Date:** YYYY-MM-DD  
**Auditor:** [Name/Tool]  
**Status:** Complete/In Progress

---

## Executive Summary

- **Total Issues Found:** [number]
- **Priority Breakdown:**
  - P0 (Critical): [count]
  - P1 (High): [count]
  - P2 (Medium): [count]
  - P3 (Low): [count]

---

## Detailed Findings

### 1. Unused Imports (P2)

**Total:** [count] files with unused imports

| File | Line | Import | Recommendation |
|------|------|--------|----------------|
| path/to/file.ts | 5 | `import { X }` | Remove import |

---

### 2. Orphaned Files (P3)

**Total:** [count] orphaned files

| File | Size | Last Modified | Recommendation |
|------|------|---------------|----------------|
| path/to/file.tsx | 2KB | 2026-02-15 | Delete (unused) |

---

### 3. Duplicate Code (P1)

**Total:** [count] duplications

| Function | Locations | Recommendation |
|----------|-----------|----------------|
| formatCurrency | utils/a.ts, utils/b.ts | Consolidate to utils/currency.ts |

---

### 4. CSS Optimization (P2)

**Total:** [count] orphaned CSS files

| File | Import Status | Size | Recommendation |
|------|---------------|------|----------------|
| old-styles.css | Not imported | 5KB | Delete |

---

### 5. Documentation Gaps (P3)

**Total:** [count] undocumented exports

| File | Function | Priority | Recommendation |
|------|----------|----------|----------------|
| utils/helper.ts | helperFunc | Medium | Add JSDoc |

---

### 6. TypeScript Issues (P2)

**Total:** [count] type safety issues

| File | Line | Issue | Suggested Fix |
|------|------|-------|---------------|
| api.ts | 45 | `any` type | Define proper interface |

---

### 7. Performance Opportunities (P1)

**Total:** [count] performance issues

| File | Issue | Impact | Suggested Fix |
|------|-------|--------|---------------|
| Component.tsx | Large inline object | Medium | Move to constant |

---

## Recommendations

### Immediate Actions (P0/P1)
1. [High priority fix]
2. [High priority fix]

### Short-term Actions (P2)
1. [Medium priority fix]
2. [Medium priority fix]

### Long-term Actions (P3)
1. [Low priority fix]
2. [Low priority fix]

---

## Next Steps

1. Create task list from findings
2. Prioritize fixes
3. Execute cleanup in batches
4. Verify no regressions
5. Update documentation

---

**Related Files:**
- **Task List:** `/tasks/code-quality-cleanup-tasks.md`
- **Guidelines:** `/guidelines/Guidelines.md`
```

---

## Success Criteria

Audit is complete when:

- [x] All 7 phases executed
- [x] Report generated with findings
- [x] Task list created
- [x] Priority levels assigned
- [x] Recommendations documented

---

## Files to Create

1. **Report:** `/reports/audits/YYYY-MM-DD_code-quality-comprehensive-audit.md`
2. **Tasks:** `/tasks/code-quality-cleanup-tasks.md`
3. **Summary:** `/reports/YYYY-MM-DD_session-summary-code-quality-audit.md`

---

## Guidelines Reference

**Code Standards:** `/guidelines/Guidelines.md` Section 12 (Coding Standards)  
**File Organization:** `/guidelines/Guidelines.md` Section 1 (Critical File Organization)  
**Documentation:** `/guidelines/WRITING_GUIDELINES.md`

---

**Prompt Version:** 1.0  
**Last Updated:** 2026-03-04  
**Next Review:** After first execution
