# Manual Unused Exports Audit

**Purpose:** Identify potentially unused exported functions, components, and types without installing ts-prune dependency

**Created:** March 10, 2026  
**Approach:** Manual analysis using grep patterns and cross-referencing

---

## Methodology

### Phase 1: Catalog All Exports

**Pattern:** Search for `export` statements in all TypeScript files

**Command:**
```bash
grep -rn "^export " src/app/ --include="*.ts" --include="*.tsx"
```

**Categories:**
- Named exports: `export function`, `export var`, `export interface`
- Default exports: `export default`
- Re-exports: `export * from`, `export { ... } from`

---

### Phase 2: Catalog All Imports

**Pattern:** Search for `import` statements

**Command:**
```bash
grep -rn "^import " src/app/ --include="*.ts" --include="*.tsx"
```

---

### Phase 3: Cross-Reference Analysis

**For each exported item:**
1. Count import occurrences across codebase
2. Flag exports with 0 or 1 import (single-use, potential consolidation)
3. Identify exports never imported (dead code)

---

## Categories to Analyze

### 1. Utility Functions (`/src/app/utils/`)

**Files:**
- `abTest.ts`
- `analytics.ts`
- `checkout.ts`
- `clipboard.ts`
- `cn.ts`
- `performance.ts`
- `priceFormatter.ts`
- `productFetcher.ts`
- `sectionPresets.ts`
- `scrollToSection.ts`

**Check:**
- Are all exported utilities used in components?
- Any single-use utilities that could be inlined?

---

### 2. Type Definitions (`/src/app/types/`)

**Files:**
- `index.ts` (all product/cart/checkout types)

**Check:**
- Are all exported types imported?
- Any duplicate type definitions?

---

### 3. Context Providers (`/src/app/contexts/`)

**Files:**
- `CartContext.tsx`
- `ThemeContext.tsx`
- `WishlistContext.tsx`
- `ComparisonContext.tsx`
- `QuickViewContext.tsx`

**Check:**
- Are all context hooks used?
- Any unused context provider functions?

---

### 4. Services (`/src/app/services/`)

**Files:**
- `abTest.ts`
- `formSubmission.ts`
- `instagram.ts`

**Check:**
- Are all service functions called?
- Any mock functions only used in dev?

---

### 5. Data Files (`/src/app/data/`)

**Files:**
- `products.ts`
- `posts.ts`
- `categories.ts`
- `checkout.ts`
- `account.ts`
- `heroData.ts`
- `archiveCTA.ts`
- `funkyThemes.ts`
- `tags.ts`
- `users.ts`

**Check:**
- Are all exported data arrays used?
- Any redundant mock data?

---

### 6. Common Components (`/src/app/components/common/`)

**Files to check:**
- `Typography.tsx`
- `Heading.tsx`
- `Container.tsx`
- `Logo.tsx`
- `BackToTopButton.tsx`
- `CookieConsent.tsx`
- `PerformanceMonitor.tsx`
- `AccessibilityChecker.tsx`

**Check:**
- Are all component variants used?
- Any prop types never passed?

---

### 7. Blocks (`/src/app/components/blocks/`)

**High-risk for unused exports:**
- Older UI primitives (before funky redesign)
- Helper components in subdirectories
- Variant props never used

**Priority Checks:**
- `/blocks/ui/` — Badge, Avatar, Skeleton variants
- `/blocks/design/` — Button variants, Grid configurations
- `/blocks/forms/` — Input variants

---

## Analysis Strategy

### Step 1: High-Value Targets

**Focus on files likely to have unused exports:**
1. Utility files with many exports
2. Type definition files
3. UI component variants
4. Mock data arrays

---

### Step 2: Export Count per File

**Identify files with 5+ exports** (higher chance of unused items)

---

### Step 3: Cross-Reference Check

**For each export:**
1. Search for import statements: `grep -r "import.*{exportName}" src/app/`
2. Count occurrences
3. Flag if count = 0 (unused) or count = 1 (single-use, consider inlining)

---

## Expected Findings

### Likely Unused Categories

1. **Old utility functions** — From before funky redesign
2. **Unused type variants** — TypeScript types defined but never referenced
3. **Component prop types** — Props defined but never passed
4. **Mock data variants** — Test data arrays never imported
5. **Service functions** — Mock/dev-only functions

---

### Conservative Cleanup Approach

**Only remove exports that are:**
- ✅ Zero imports across entire codebase
- ✅ Not part of public API (not in `/src/app/` root exports)
- ✅ Not used in tests
- ✅ Not dev tools (PerformanceMonitor, etc.)

**Do NOT remove:**
- ❌ Exports with 1 import (might be critical)
- ❌ Type definitions (might be used in type annotations)
- ❌ Context providers (might be used in App.tsx)
- ❌ Dev tools exports

---

## Output Format

```markdown
## Unused Exports Analysis Report

**Date:** YYYY-MM-DD

### Summary

- **Total exports scanned:** X
- **Unused exports found:** Y
- **Single-use exports:** Z
- **Recommended removals:** N

### Category Breakdown

#### Utilities (`/src/app/utils/`)

| File | Export | Imports | Status | Recommendation |
|------|--------|---------|--------|----------------|
| abTest.ts | `getVariant` | 0 | ❌ Unused | Remove |
| analytics.ts | `trackEvent` | 1 | ⚠️ Single-use | Consider inline |

[... continue for all categories ...]

### Recommendations

**High Confidence (Remove):**
1. Export X in file Y — Zero imports
2. Export A in file B — Zero imports

**Medium Confidence (Review):**
1. Export M in file N — Single use in file P (consider inlining)

**Low Confidence (Keep):**
1. Export Q in file R — Part of public API, keep for future use
```

---

## Manual Analysis Workflow

### For each file category:

1. **List all exports:**
   ```bash
   grep "^export " /path/to/file.ts
   ```

2. **For each export, count imports:**
   ```bash
   grep -r "import.*exportName" src/app/ | wc -l
   ```

3. **Document findings** in structured table

4. **Cross-reference with:**
   - Route definitions (might be lazy-loaded)
   - Test files (might be used in tests)
   - Type annotations (types might not show in imports)

---

## Timeline

**Estimated Duration:** 1-2 hours (manual analysis)

**Phases:**
1. Catalog exports (30 min)
2. Cross-reference imports (30 min)
3. Document findings (30 min)
4. Generate recommendations (15 min)

---

## Success Criteria

**Completed when:**
- ✅ All utility files analyzed
- ✅ All data files analyzed
- ✅ High-value component files analyzed
- ✅ Clear removal recommendations documented
- ✅ Conservative cleanup strategy defined

---

## Related Files

- **Verification Report:** `/reports/audits/2026-03-10_post-refactoring-verification.md`
- **Task List:** `/tasks/task-list.md` (T5.6)
- **Guidelines:** `/guidelines/Guidelines.md`

---

**Created:** March 10, 2026  
**Approach:** Manual grep-based analysis (no dependencies)  
**Focus:** High-value cleanup with conservative removal strategy
