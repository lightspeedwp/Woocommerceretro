# Root Directory Cleanup Audit — Comprehensive

**Type:** Code Quality Audit  
**Category:** File Organization  
**Priority:** P0 (Critical)  
**Created:** 2026-02-25  
**Version:** 1.0

---

## Objective

Perform a comprehensive audit of the project root directory to identify and remove:
1. Misplaced `.md` files (except `README.md` and `CHANGELOG.md`)
2. Orphaned and unused files (`.tsx`, `.ts`, `.css`)
3. Outdated reports and task lists
4. Unused imports and dependencies
5. Script files (`.sh`) not in `/scripts/`

**Goal:** Achieve 100% compliance with file organization guidelines in `/guidelines/Guidelines.md`.

---

## Scope

### In Scope

✅ **Root directory (`/`):**
- All `.md` files (except `README.md`, `CHANGELOG.md`)
- All `.sh` script files
- Unused/orphaned component files
- Old reports and task lists

✅ **Project-wide:**
- Orphaned `.tsx`, `.ts` files (no imports)
- Orphaned `.css` files (not imported)
- Unused utility functions
- Duplicate code

### Out of Scope

❌ **Configuration files** (preserve):
- `package.json`, `tsconfig.json`, `vite.config.ts`, `vercel.json`
- `index.html`, `.gitignore`, `.env` files

❌ **Build artifacts** (preserve):
- `/dist/`, `/build/`, `/node_modules/`

❌ **Active source code** (preserve):
- `/src/`, `/components/`, `/styles/` (active files only)

---

## Audit Steps

### Step 1: Root Directory `.md` Files

**Action:** Identify all `.md` files in project root.

**Rules:**
- ✅ **KEEP:** `README.md`, `CHANGELOG.md`
- ❌ **MOVE or DELETE:** All other `.md` files

**Categorization:**

| File Type | Destination | Action |
|-----------|-------------|--------|
| Task lists | `/tasks/` | Move if active, archive if complete |
| Reports | `/reports/archive/` | Move if <7 days old, delete if older |
| Documentation | `/docs/` | Move if useful, delete if obsolete |
| Guidelines | `/guidelines/` | Move if component spec |
| Status updates | Delete | Obsolete after completion |

**Output:** List of files with recommended action (MOVE, ARCHIVE, DELETE)

---

### Step 2: Script Files (`.sh`)

**Action:** Find all `.sh` files not in `/scripts/`.

**Rules:**
- ❌ **FORBIDDEN:** `.sh` files in root directory
- ✅ **REQUIRED:** All scripts in `/scripts/`

**Output:** List of `.sh` files to move to `/scripts/`

---

### Step 3: Orphaned Component Files

**Action:** Scan for `.tsx` and `.ts` files with zero imports.

**Method:**
```bash
# Pseudo-code
for each .tsx file:
  if no import statements reference this file:
    flag as orphaned
```

**Exclusions:**
- Entry points (`App.tsx`, `main.tsx`)
- Route files (`routes.tsx`)
- Test files (`*.test.tsx`)

**Output:** List of orphaned files with import count

---

### Step 4: Orphaned CSS Files

**Action:** Scan for `.css` files not imported anywhere.

**Method:**
```bash
# Check imports in:
- /src/styles/globals.css
- Component files (*.tsx)
- main.tsx
```

**Output:** List of unused CSS files

---

### Step 5: Unused Imports

**Action:** Identify imported modules/components never used.

**Scope:**
- Check all `.tsx`, `.ts` files
- Find imports with zero references

**Example:**
```tsx
// Unused import (never referenced in file)
import { UnusedComponent } from './UnusedComponent';
```

**Output:** List of files with unused imports

---

### Step 6: Duplicate Code

**Action:** Find duplicate utility functions, components, or styles.

**Targets:**
- Duplicate helper functions
- Multiple copies of same component
- Redundant CSS rules

**Output:** List of duplicates with recommendations for consolidation

---

## Deliverables

### Primary Report

**File:** `/reports/audits/2026-02-25_root-cleanup-comprehensive-audit.md`

**Structure:**
```markdown
# Root Directory Cleanup Audit — Findings

## Executive Summary
- Total files audited: X
- Files to move: X
- Files to delete: X
- Files to archive: X

## 1. Root .md Files
[Detailed findings]

## 2. Script Files
[Detailed findings]

## 3. Orphaned Components
[Detailed findings]

## 4. Orphaned CSS Files
[Detailed findings]

## 5. Unused Imports
[Detailed findings]

## 6. Duplicate Code
[Detailed findings]

## Recommendations
[Action plan]
```

### Task List

**File:** `/tasks/root-cleanup-tasks.md`

**Structure:**
```markdown
# Root Cleanup — Action Items

## P0 (Critical)
- [ ] Move/delete root .md files
- [ ] Move .sh scripts to /scripts/

## P1 (High)
- [ ] Delete orphaned components
- [ ] Remove unused CSS files

## P2 (Medium)
- [ ] Clean up unused imports
- [ ] Consolidate duplicate code
```

---

## Success Criteria

✅ **Zero `.md` files in root** (except `README.md`, `CHANGELOG.md`)  
✅ **Zero `.sh` files in root**  
✅ **Zero orphaned components** (no imports)  
✅ **Zero orphaned CSS files** (not imported)  
✅ **All reports properly organized** in `/reports/`  
✅ **All tasks properly organized** in `/tasks/`  

---

## Guidelines References

- **File Organization:** `/guidelines/Guidelines.md` — Section: "CRITICAL: File Organization Rules"
- **Reporting Standards:** `/guidelines/REPORTING_GUIDELINES.md`
- **Task Management:** `/guidelines/PLANNING_GUIDELINES.md`

---

## Execution Sequence

1. ✅ Create prompt (this file) — `/prompts/audits/root-cleanup-comprehensive-audit.md`
2. ⏳ Run audit — Execute steps 1-6
3. ⏳ Save report — `/reports/audits/2026-02-25_root-cleanup-comprehensive-audit.md`
4. ⏳ Create tasks — `/tasks/root-cleanup-tasks.md`
5. ⏳ Update master task list — `/tasks/task-list.md`

---

**Status:** Ready for execution  
**Estimated Duration:** 30-45 minutes  
**Prerequisites:** None
