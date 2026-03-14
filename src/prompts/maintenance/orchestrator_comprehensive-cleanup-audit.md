# Comprehensive Cleanup & Audit Orchestrator

**Purpose:** Regular maintenance audit that cleans up the file system, validates routes/imports, updates documentation, and synchronizes status across all project files.

**Type:** Single-session orchestrator (completes in one go)

**Frequency:** Run weekly or before major releases

**Outputs:** Clean file system, updated documentation, validated routes, broken import report

---

## Phase 1: File System Audit & Cleanup (20 min)

### 1.1 Root Directory Cleanup

**Scan root directory for violations:**

```bash
# List all files in root (exclude allowed files)
ls -la / | grep -v "^d" | grep -v "package.json" | grep -v "tsconfig.json" | grep -v "vite.config.ts" | grep -v "vercel.json" | grep -v "index.html" | grep -v "README.md" | grep -v "CHANGELOG.md" | grep -v "COMPLETION-SUMMARY.md" | grep -v "WHATS-NEXT.md" | grep -v ".gitignore" | grep -v ".eslintrc" | grep -v "vitest.config.ts"
```

**Allowed in root ONLY:**
- `package.json`, `package-lock.json`
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- `vite.config.ts`, `vitest.config.ts`, `vercel.json`
- `.eslintrc.cjs`, `.gitignore`, `.prettierrc`
- `index.html` (entry point)
- `README.md`, `CHANGELOG.md`, `COMPLETION-SUMMARY.md`, `WHATS-NEXT.md`

**Actions:**
1. **Identify orphaned files:**
   - `.md` files not in allowed list → Move to `/docs/` or delete
   - `.sh` scripts → Move to `/scripts/`
   - `.py` scripts → Move to `/scripts/`
   - Prompt files (`.md` with prompts) → Move to `/prompts/`
   - Report files → Move to `/reports/`
   - Task files → Move to `/tasks/`

2. **Clean up:**
   - Delete duplicate files
   - Delete empty files
   - Delete `.DS_Store`, `Thumbs.db`, temp files
   - Archive old completion summaries (> 7 days) to `/reports/sessions/`

**Output:** List of moved/deleted files

---

### 1.2 Reports Folder Cleanup

**Scan `/reports/` for stale content:**

```bash
# Find reports older than 30 days
find /reports -name "*.md" -mtime +30
```

**Actions:**
1. **Delete reports older than 30 days** (unless marked `[KEEP]` in filename)
2. **Archive important historical reports** to `/reports/archive/`
3. **Organize by category:**
   - `/reports/css-stability/` - CSS-related
   - `/reports/sessions/` - Session summaries
   - `/reports/audits/` - Audit reports
   - `/reports/archive/` - Historical (> 30 days, marked important)

**Output:** Number of reports deleted, number archived

---

### 1.3 Tasks Folder Cleanup

**Scan `/tasks/` for completed task files:**

**Actions:**
1. **Identify 100% complete task files:**
   - Check if all tasks marked `[x]` or `✅ COMPLETE`
   - Archive to `/tasks/archive/YYYY-MM-DD_original-name.md`
   - Delete from `/tasks/` root

2. **Update master task list (`/tasks/task-list.md`):**
   - Remove completed sections
   - Update "Active Task Files" table
   - Add completion dates to "Completed Task Files" section

**Output:** List of archived task files

---

## Phase 2: Route Validation & Sync (15 min)

### 2.1 Discover All Route Files

**Scan for route definitions:**

```bash
# Find all template files
find /src/app/templates -name "*.tsx"

# Find all page components
find /src/app/components/pages -name "*.tsx"

# Check routes.tsx
cat /routes.tsx
```

**Actions:**
1. **Extract all template names** from `/src/app/templates/`
2. **Extract all page components** from `/src/app/components/pages/`
3. **Extract all routes** from `/routes.tsx`

---

### 2.2 Identify Missing Routes

**Compare template files vs. registered routes:**

**Logic:**
```typescript
// Templates that should have routes
const templateFiles = [
  'FrontPage.tsx',
  'ArchiveProduct.tsx',
  'SingleProduct.tsx',
  'PageCart.tsx',
  // ... etc
];

// Routes registered in routes.tsx
const registeredRoutes = [
  { path: '/', component: 'FrontPage' },
  { path: '/shop', component: 'ArchiveProduct' },
  // ... etc
];

// Find templates without routes
const missingRoutes = templateFiles.filter(template => 
  !registeredRoutes.some(route => route.component === template)
);
```

**Output:**
- List of templates WITHOUT routes (need to be added)
- List of routes WITHOUT templates (broken, need to be fixed or removed)

---

### 2.3 Update routes.tsx

**If missing routes found:**

1. **Add missing routes** to `/routes.tsx`
2. **Remove broken routes** (no matching template)
3. **Ensure route structure:**
   ```typescript
   {
     path: '/missing-page',
     Component: lazy(() => import('./src/app/templates/MissingTemplate')),
   }
   ```

**Output:** Updated `/routes.tsx` with all templates registered

---

## Phase 3: Import Validation (15 min)

### 3.1 CSS Import Validation

**Check `/styles/globals-minimal.css`:**

```bash
# Extract all @import statements
grep "@import" /styles/globals-minimal.css

# Check if files exist
for import in $(grep "@import" /styles/globals-minimal.css | sed 's/@import "\(.*\)";/\1/'); do
  if [ ! -f "$import" ]; then
    echo "BROKEN: $import"
  fi
done
```

**Actions:**
1. **Identify broken CSS imports** (files that don't exist)
2. **Fix broken imports:**
   - If file moved: Update import path
   - If file deleted: Remove import or restore file
3. **Identify unused CSS files:**
   - Files in `/src/styles/` NOT imported by `globals-minimal.css`

**Output:**
- List of broken CSS imports (with fixes)
- List of unused CSS files (candidates for deletion)

---

### 3.2 JavaScript/TypeScript Import Validation

**Scan all `.tsx` and `.ts` files for imports:**

```bash
# Find all import statements
grep -r "^import" /src/app --include="*.tsx" --include="*.ts"

# Check for common broken import patterns
grep -r "from '\.\./\.\./\.\./\.\./'" /src/app  # Deep relative imports
grep -r "from '@/components/ui/'" /src/app      # Old UI folder (should be blocks/ui)
```

**Actions:**
1. **Check for broken imports:**
   - Files that don't exist
   - Incorrect path aliases
   - Missing file extensions

2. **Validate path aliases:**
   - `@/components/*` → Verify resolves correctly
   - `@/templates/*` → Verify resolves correctly
   - `@/contexts/*` → Verify resolves correctly
   - `@/data/*` → Verify resolves correctly
   - `@/hooks/*` → Verify resolves correctly
   - `@/utils/*` → Verify resolves correctly

3. **Fix broken imports:**
   - Update incorrect paths
   - Replace old aliases with new ones
   - Fix deep relative imports (../../../../) → Use aliases

**Output:**
- List of broken JS/TS imports (with fixes)
- List of deprecated import patterns (with replacements)

---

## Phase 4: Documentation Updates (20 min)

### 4.1 Update CHANGELOG.md

**Read current `/CHANGELOG.md`:**

**Actions:**
1. **Check if v2.12 entry exists** (current version from Guidelines.md)
2. **If missing, add new version entry:**
   ```markdown
   ## [2.12] - 2026-03-13
   
   ### Added
   - Full CSS restoration (280 imports active)
   - Complete retro design system
   
   ### Fixed
   - IframeMessageAbortError resolution
   - React hooks violations
   - Context provider optimization
   
   ### Changed
   - CSS loading architecture (minimal → full restoration)
   ```

3. **Update "Unreleased" section** with any pending changes

**Output:** Updated CHANGELOG.md

---

### 4.2 Update Guidelines.md

**Read `/guidelines/Guidelines.md`:**

**Actions:**
1. **Update "What's New" section** (if current date > last update)
2. **Update version number** if needed
3. **Update "Status" badges:**
   ```markdown
   **STATUS:** ✅ **PRODUCTION READY**
   **STYLING:** ✅ **COMPLETE** -- 280 CSS imports active
   **JS/TS:** ✅ **COMPLETE** -- Modern React
   **CSS LOADING:** ✅ **COMPLETE** -- Full restoration
   ```

4. **Update statistics:**
   - Total routes (from routes.tsx)
   - Total components (count /src/app/components/)
   - Total templates (count /src/app/templates/)
   - Total CSS files (count /src/styles/)

**Output:** Updated Guidelines.md with current stats

---

### 4.3 Update Task List (/tasks/task-list.md)

**Read `/tasks/task-list.md`:**

**Actions:**
1. **Update "Last Updated" date** to today
2. **Update "Guidelines Version"** to match Guidelines.md
3. **Archive completed sections:**
   - Move to "Completed Task Files" table
   - Add completion date
4. **Update "Active Task Files" table:**
   - Remove archived files
   - Update status for remaining files
5. **Update statistics:**
   - Count remaining open tasks
   - Count completed tasks

**Output:** Updated task-list.md

---

## Phase 5: Live Component Updates (15 min)

### 5.1 Update Sitemap Component

**Read `/src/app/components/pages/Sitemap.tsx`:**

**Compare `ROUTE_SECTIONS` constant vs. actual routes in `/routes.tsx`:**

**Actions:**
1. **Count total routes** from routes.tsx
2. **Update SITEMAP_STATS:**
   ```typescript
   const SITEMAP_STATS = (() => {
     const totalRoutes = ROUTE_SECTIONS.reduce(/* count all routes */);
     const staticRoutes = /* count static routes */;
     const dynamicRoutes = /* count dynamic routes */;
     
     return {
       totalRoutes,
       staticRoutes,
       dynamicRoutes,
       sections: ROUTE_SECTIONS.length,
     };
   })();
   ```

3. **Add missing routes to ROUTE_SECTIONS:**
   - If new templates exist, add them to appropriate section
   - Maintain alphabetical order within sections

4. **Remove broken routes:**
   - If routes reference non-existent templates, remove them

**Output:** Updated Sitemap.tsx with current route count

---

### 5.2 Update DevTools Component

**Read `/src/app/components/pages/DevTools.tsx`:**

**Actions:**
1. **Update system status:**
   ```typescript
   const systemStatus = {
     totalRoutes: /* from routes.tsx */,
     totalComponents: /* count from /src/app/components/ */,
     totalTemplates: /* count from /src/app/templates/ */,
     cssFiles: /* count from /src/styles/ */,
     cssImportsActive: 280,
     darkModeSupport: true,
     strictMode: true,
     productionReady: true,
   };
   ```

2. **Update component counts:**
   - Count all `.tsx` files in `/src/app/components/blocks/`
   - Count all `.tsx` files in `/src/app/components/patterns/`
   - Count all `.tsx` files in `/src/app/components/parts/`

3. **Update recent changes section:**
   - Pull from latest Guidelines.md "What's New"
   - Add today's date if changes made

**Output:** Updated DevTools.tsx with current stats

---

## Phase 6: Final Validation & Report (10 min)

### 6.1 Run Quality Checks

**Execute validation commands:**

```bash
# TypeScript check
npx tsc --noEmit

# ESLint check
npx eslint src/

# Build check
npm run build
```

**Actions:**
1. **Report TypeScript errors** (if any)
2. **Report ESLint warnings** (if any)
3. **Report build failures** (if any)

**Output:** Quality check results

---

### 6.2 Generate Cleanup Report

**Create `/reports/maintenance/YYYY-MM-DD_comprehensive-cleanup-report.md`:**

**Report Structure:**
```markdown
# Comprehensive Cleanup Report

**Date:** YYYY-MM-DD
**Status:** ✅ Complete
**Duration:** ~XX minutes

---

## Executive Summary

- **Files cleaned:** X files moved/deleted from root
- **Reports archived:** X reports (> 30 days)
- **Tasks archived:** X task files (100% complete)
- **Routes validated:** X total routes (Y new, Z broken fixed)
- **CSS imports validated:** 280/280 active, 0 broken
- **JS imports validated:** X checked, Y broken fixed
- **Documentation updated:** 5 files (CHANGELOG, Guidelines, task-list, Sitemap, DevTools)

---

## Phase 1: File System Cleanup

### Root Directory
- Moved: [list files]
- Deleted: [list files]
- Status: ✅ Clean

### Reports Folder
- Deleted: X reports (> 30 days)
- Archived: Y important reports
- Status: ✅ Clean

### Tasks Folder
- Archived: X completed task files
- Active: Y task files remaining
- Status: ✅ Clean

---

## Phase 2: Route Validation

### Routes Summary
- Total routes: X
- New routes added: Y
- Broken routes fixed: Z
- Status: ✅ All templates registered

### Missing Routes (Before)
[list if any]

### Broken Routes (Before)
[list if any]

### Actions Taken
[list route additions/fixes]

---

## Phase 3: Import Validation

### CSS Imports
- Total imports: 280
- Broken imports: X (fixed)
- Unused files: Y (candidates for cleanup)
- Status: ✅ All imports valid

### JS/TS Imports
- Files scanned: X
- Broken imports: Y (fixed)
- Deprecated patterns: Z (updated)
- Status: ✅ All imports valid

---

## Phase 4: Documentation Updates

### Updated Files
1. ✅ CHANGELOG.md (added vX.X entry)
2. ✅ Guidelines.md (updated stats, version)
3. ✅ task-list.md (archived completed, updated status)
4. ✅ Sitemap.tsx (X routes → Y routes)
5. ✅ DevTools.tsx (updated stats)

---

## Phase 5: Quality Checks

### TypeScript
- Errors: X
- Status: [✅ Pass / ❌ Fail]

### ESLint
- Warnings: X
- Status: [✅ Pass / ❌ Fail]

### Build
- Status: [✅ Success / ❌ Failed]

---

## Recommendations

### Immediate
[list any critical issues]

### Short-term
[list minor issues or improvements]

### Long-term
[list optional enhancements]

---

## Next Cleanup

**Recommended:** [date 7 days from now]

---

**Report End**
```

**Output:** Comprehensive cleanup report

---

## Phase 7: Summary & Closure (5 min)

### 7.1 Create Summary

**Display to user:**

```
🎉 Comprehensive Cleanup Complete!

✅ File System Cleaned
   - Root directory: Clean
   - Reports: X archived/deleted
   - Tasks: Y archived

✅ Routes Validated
   - Total routes: X
   - New routes: Y added
   - Broken routes: Z fixed

✅ Imports Validated
   - CSS: 280/280 active, 0 broken
   - JS/TS: X checked, Y fixed

✅ Documentation Updated
   - CHANGELOG.md
   - Guidelines.md
   - task-list.md
   - Sitemap.tsx
   - DevTools.tsx

✅ Quality Checks
   - TypeScript: [Pass/Fail]
   - ESLint: [Pass/Fail]
   - Build: [Pass/Fail]

📊 Full Report: /reports/maintenance/YYYY-MM-DD_comprehensive-cleanup-report.md

Next cleanup recommended: [date]
```

---

## Execution Checklist

**Before running:**
- [ ] Commit any pending changes (cleanup may delete files)
- [ ] Review root directory for important orphaned files
- [ ] Check if any reports should be marked `[KEEP]`

**During execution:**
- [ ] Phase 1: File system cleanup (20 min)
- [ ] Phase 2: Route validation (15 min)
- [ ] Phase 3: Import validation (15 min)
- [ ] Phase 4: Documentation updates (20 min)
- [ ] Phase 5: Component updates (15 min)
- [ ] Phase 6: Quality checks (10 min)
- [ ] Phase 7: Report generation (5 min)

**After completion:**
- [ ] Review cleanup report
- [ ] Verify no critical files deleted
- [ ] Test app in browser
- [ ] Commit changes with message: "chore: comprehensive cleanup and audit [YYYY-MM-DD]"

**Total Duration:** ~100 minutes (1 hour 40 minutes)

---

## Configuration

**Cleanup Rules (Customizable):**

```javascript
const CLEANUP_CONFIG = {
  reports: {
    deleteAfterDays: 30,
    keepPatterns: ['[KEEP]', 'milestone', 'release'],
  },
  tasks: {
    archiveWhenComplete: true,
    archivePath: '/tasks/archive/',
  },
  rootDirectory: {
    allowedFiles: [
      'package.json',
      'package-lock.json',
      'tsconfig*.json',
      'vite.config.ts',
      'vitest.config.ts',
      'vercel.json',
      '.eslintrc.cjs',
      '.gitignore',
      '.prettierrc',
      'index.html',
      'README.md',
      'CHANGELOG.md',
      'COMPLETION-SUMMARY.md',
      'WHATS-NEXT.md',
    ],
  },
  routes: {
    autoAddMissing: true,
    autoRemoveBroken: false, // Manual review recommended
  },
  imports: {
    autoFixBroken: true,
    reportUnused: true,
  },
};
```

---

## Expected Outputs

**Files Created:**
1. `/reports/maintenance/YYYY-MM-DD_comprehensive-cleanup-report.md`

**Files Updated:**
1. `/CHANGELOG.md`
2. `/guidelines/Guidelines.md`
3. `/tasks/task-list.md`
4. `/src/app/components/pages/Sitemap.tsx`
5. `/src/app/components/pages/DevTools.tsx`
6. `/routes.tsx` (if missing routes found)
7. `/styles/globals-minimal.css` (if broken imports found)

**Files Moved:**
- Root orphans → `/docs/`, `/scripts/`, `/prompts/`, `/reports/`, `/tasks/`

**Files Deleted:**
- Stale reports (> 30 days)
- Duplicate files
- Empty files
- Temp files

**Files Archived:**
- Completed task files → `/tasks/archive/`
- Important historical reports → `/reports/archive/`

---

## Success Criteria

**✅ Cleanup successful when:**
1. Root directory contains ONLY allowed files
2. All routes in routes.tsx have matching templates
3. All templates have registered routes
4. Zero broken CSS imports
5. Zero broken JS/TS imports
6. All documentation updated with current stats
7. TypeScript check passes (0 errors)
8. ESLint check passes (0 errors)
9. Build succeeds
10. Cleanup report generated

---

## Prompt End

**This prompt is designed to be run as a single session.** The AI assistant should execute all phases sequentially without requiring user input between phases.

**Estimated total time:** 100 minutes (~1 hour 40 minutes)

**Frequency:** Run weekly or before major releases to keep project clean and synchronized.
