# Cleanup Prompt — Comprehensive Project Maintenance

**Purpose:** Single-session comprehensive cleanup of file system, imports, routes, tasks, and documentation.

**Trigger Word:** `cleanup`

**Version:** 1.0  
**Created:** 2026-03-13  
**Environment:** Figma Make (in-browser preview, no file system access)

---

## ⚠️ CRITICAL: Figma Make Environment Notice

**You are running in Figma Make, NOT a local development environment.**

**DO NOT suggest:**
- ❌ "Refresh your browser"
- ❌ "Clear your cache"
- ❌ "Restart your dev server"
- ❌ "Run npm install"
- ❌ "Check your file system"

**Instead:**
- ✅ Make code changes directly
- ✅ Update files in place
- ✅ Verify via code inspection
- ✅ Use grep/search to validate

---

## Execution Overview

**This is a SINGLE-SESSION cleanup.** Execute all phases in sequence without stopping.

**Phases:**
1. File System Audit
2. Import Verification
3. Route Validation
4. Root Folder Cleanup
5. Task List Maintenance
6. Report Processing
7. Documentation Updates
8. Final Verification

**Expected Duration:** 20-30 minutes

---

## Phase 1: File System Audit

### Step 1.1: Identify Orphaned Files

**Check for files not imported anywhere:**

```bash
# Find TypeScript/TSX files
find /src/app -name "*.tsx" -o -name "*.ts" | while read file; do
  filename=$(basename "$file" .tsx)
  filename=$(basename "$filename" .ts)
  
  # Search for imports of this file
  grep -r "from.*$filename" /src/app/ > /dev/null
  if [ $? -ne 0 ]; then
    echo "Orphaned: $file"
  fi
done
```

**Action:** Create list of orphaned files for review.

---

### Step 1.2: Identify Duplicate Files

**Check for duplicate component names:**

```bash
# Find duplicate filenames
find /src/app -name "*.tsx" -printf "%f\n" | sort | uniq -d
```

**Action:** Document duplicates, determine which to keep.

---

## Phase 2: Import Verification

### Step 2.1: Check CSS Imports

**Verify all CSS files are imported:**

```bash
# List all CSS files
find /src/styles -name "*.css" | sort > /tmp/css-files.txt

# Check if imported in main.tsx or globals-minimal.css
while read cssfile; do
  grep -r "$(basename $cssfile)" /src/main.tsx /styles/globals-minimal.css > /dev/null
  if [ $? -ne 0 ]; then
    echo "Not imported: $cssfile"
  fi
done < /tmp/css-files.txt
```

**Action:** 
- Add missing CSS imports to `/styles/globals-minimal.css`
- Document unused CSS files for deletion consideration

---

### Step 2.2: Check JavaScript/TypeScript Imports

**Find broken imports:**

```bash
# Check for imports that don't resolve
grep -r "from ['\"]" /src/app/ | while read line; do
  # Extract import path
  importpath=$(echo "$line" | sed -E "s/.*from ['\"]([^'\"]+)['\"].*/\1/")
  
  # Check if path exists (simplified check)
  if [[ $importpath == ./* ]] || [[ $importpath == ../* ]]; then
    # Relative import - needs file system check
    echo "Check: $line"
  fi
done
```

**Action:**
- Fix broken relative imports
- Update to use path aliases where appropriate
- Document missing files

---

## Phase 3: Route Validation

### Step 3.1: Identify Missing Routes

**Compare templates to routes:**

```bash
# List all template files
find /src/app/templates -name "*.tsx" | sed 's/.*\///' | sed 's/\.tsx$//' | sort > /tmp/templates.txt

# List all routes in routes.ts
grep "Component:" /routes.ts | sed 's/.*Component: //' | sed 's/,$//' | sort > /tmp/routes.txt

# Find templates without routes
comm -23 /tmp/templates.txt /tmp/routes.txt
```

**Action:**
- Add missing routes to `/routes.ts`
- Follow route naming conventions
- Add to appropriate route group

---

### Step 3.2: Verify Route Imports

**Check all routes have valid component imports:**

```typescript
// Read routes.ts
// For each Component reference, verify:
// 1. Import statement exists at top
// 2. Component file exists
// 3. Component has default export
```

**Action:**
- Fix missing imports
- Add missing default exports
- Document orphaned routes

---

## Phase 4: Root Folder Cleanup

### Step 4.1: Review Root Directory

**Files allowed in root:**
- Configuration files (package.json, tsconfig.json, vite.config.ts, etc.)
- README.md
- CHANGELOG.md
- index.html
- Build output (dist/, build/)

**Files NOT allowed:**
- Task lists (.md files except README/CHANGELOG)
- Reports (.md files)
- Scripts (.sh files - should be in /scripts/)
- Prompts (.md files - should be in /prompts/)
- Documentation (.md files - should be in /docs/ or /guidelines/)

**Scan root:**

```bash
# Find prohibited files
ls -1 / | grep -E "\.(md|sh)$" | grep -v "README.md" | grep -v "CHANGELOG.md"
```

**Action:**
- Move task files to `/tasks/`
- Move reports to `/reports/`
- Move scripts to `/scripts/`
- Move docs to `/docs/` or `/guidelines/`
- Delete obsolete files

---

### Step 4.2: Update CHANGELOG.md

**Add entry for this cleanup session:**

```markdown
## [Version] - YYYY-MM-DD

### Maintenance
- Comprehensive project cleanup executed
- [X] orphaned files removed
- [X] broken imports fixed
- [X] missing routes added
- [X] root folder organized
- [X] task lists updated
- [X] reports archived
- [X] documentation synchronized

### Files Changed
- Updated: [list key files]
- Added: [list new files]
- Removed: [list removed files]
```

---

## Phase 5: Task List Maintenance

### Step 5.1: Process Completed Tasks

**Read `/tasks/task-list.md`:**

1. **Identify completed tasks** (marked with ✅)
2. **Archive completed sections** to `/tasks/archive/completed-YYYY-MM.md`
3. **Remove from active list**
4. **Update completion percentages**

**Template for archival:**

```markdown
# Completed Tasks — [Month] 2026

**Archived:** YYYY-MM-DD  
**Source:** task-list.md

## [Section Name]

[Completed tasks here]

---

**Total Completed:** [X] tasks  
**Archive Reason:** Session cleanup on YYYY-MM-DD
```

---

### Step 5.2: Update Task File Status

**For each task file in `/tasks/`:**

1. **Count total tasks:** `grep -c "^- \[" file.md`
2. **Count completed:** `grep -c "^- \[x\]" file.md`
3. **Calculate percentage:** `(completed / total) * 100`
4. **Update master task list:**

```markdown
| File | Status | Priority | Completion |
|------|--------|----------|------------|
| blocks-guidelines-gaps.md | IN PROGRESS | P0 | 11/13 (85%) |
```

---

### Step 5.3: Delete Completed Task Files

**Criteria for deletion:**
- 100% of tasks checked off ✅
- All work verified complete
- Archived to `/tasks/archive/`

**Action:**
1. Verify 100% completion
2. Move to `/tasks/archive/completed-YYYY-MM/`
3. Update master task list to remove reference
4. Add archive note in README

---

## Phase 6: Report Processing

### Step 6.1: Review Reports Older Than 7 Days

**Calculate cutoff date:** Today (YYYY-MM-DD) - 7 days = YYYY-MM-DD

**For each report in `/reports/` subdirectories:**

1. **Extract date from filename:** `2026-03-06_report-name.md` → March 6
2. **Calculate age:** Days since report date
3. **If age > 7 days:**
   - Read report contents
   - Verify issues are resolved
   - Check related tasks
   - Classify: Complete, Partial, or Active

---

### Step 6.2: Verify Report Completion

**For each old report, verify in codebase:**

**Example: CSS Optimization Report**
```bash
# If report says "P0.1 completed"
# Verify the actual changes exist
grep -r "specific-code-mentioned" /src/

# Check related task is marked complete
grep "P0.1" /tasks/task-list.md | grep "\[x\]"
```

**Outcomes:**
- ✅ **Complete** - All work done, code verified → Archive
- ⏳ **Partial** - Some work done, more needed → Keep active
- ❌ **Superseded** - Replaced by newer report → Delete (document in archive README)
- 🔄 **Active** - Still in progress → Keep active even if >7 days

---

### Step 6.3: Archive or Delete Reports

**Archive (move to `/reports/archive/YYYY-MM/`):**
- Complete reports with verified work
- Historical significance
- Reference value for future work

**Delete (document in archive README):**
- Superseded reports (newer version exists)
- Duplicate reports
- Irrelevant reports (work cancelled)

**Action:**
```bash
# Archive
mv /reports/fixes/2026-03-06_old-report.md /reports/archive/2026-03/

# Update archive README
echo "- 2026-03-06_old-report.md - Archived (all work complete)" >> /reports/archive/2026-03/README.md
```

---

## Phase 7: Documentation Updates

### Step 7.1: Update Guidelines.md

**Verify version and date:**

```markdown
**Version:** 2.12  
**Updated:** March 13, 2026
```

**Check for outdated information:**
- File paths mentioned
- Component names
- Task references
- Statistics (file counts, completion percentages)

**Update What's New section** if significant changes made.

---

### Step 7.2: Update Sitemap Component

**File:** `/src/app/components/pages/Sitemap.tsx`

**Update statistics:**

```typescript
// Count actual routes
const totalRoutes = routes.length; // From routes.ts
const staticRoutes = routes.filter(r => !r.path.includes(':')).length;
const dynamicRoutes = routes.filter(r => r.path.includes(':')).length;

// Update SITEMAP_STATS constant
const SITEMAP_STATS = {
  total: totalRoutes,
  static: staticRoutes,
  dynamic: dynamicRoutes,
  sections: ROUTE_SECTIONS.length
};
```

**Verify all routes are listed** in appropriate sections.

---

### Step 7.3: Update DevTools Index

**File:** `/src/app/templates/DevTools.tsx`

**Update tool counts:**

```typescript
const tools = [
  { id: 'dashboard', name: 'Performance Dashboard', count: metricCount },
  { id: 'sitemap', name: 'Site Map', count: routeCount },
  { id: 'guidelines', name: 'Guidelines Index', count: guidelineCount },
  // ...
];
```

**Verify counts match actual files:**
- Guidelines count: `find /guidelines -name "*.md" | wc -l`
- Routes count: Count from routes.ts
- Components count: `find /src/app/components -name "*.tsx" | wc -l`

---

## Phase 8: Final Verification

### Step 8.1: Build Verification

**Verify project builds successfully:**

```bash
# TypeScript check
tsc --noEmit

# Build check (conceptual in Figma Make)
# In real environment: npm run build
```

**Check for:**
- Zero TypeScript errors
- Zero import errors
- Zero missing files

---

### Step 8.2: Generate Cleanup Report

**Create:** `/reports/maintenance/YYYY-MM-DD_cleanup-session.md`

```markdown
# Cleanup Session Report

**Date:** YYYY-MM-DD  
**Trigger:** cleanup prompt  
**Duration:** [X] minutes

## Summary

- Files reviewed: [count]
- Orphaned files removed: [count]
- Broken imports fixed: [count]
- Routes added: [count]
- Root files moved: [count]
- Tasks archived: [count]
- Reports archived: [count]

## File System Changes

### Added
- [List new files]

### Modified
- [List updated files]

### Removed
- [List deleted files]

### Moved
- [List relocated files]

## Task Status Updates

| Task File | Before | After | Status |
|-----------|--------|-------|--------|
| blocks-guidelines-gaps.md | 10/13 | 11/13 | In Progress |
| [etc...] | | | |

## Report Archival

### Archived (5 reports)
- 2026-03-06_css-optimization.md → Complete
- [etc...]

### Deleted (2 reports)
- 2026-03-05_parser-fix-v2.md → Superseded by v7
- [etc...]

## Documentation Updates

- [x] Guidelines.md version updated
- [x] Sitemap statistics refreshed
- [x] DevTools counts updated
- [x] CHANGELOG.md entry added

## Next Steps

[List any items that need manual review]
```

---

### Step 8.3: Update Master Task List

**Update `/tasks/task-list.md`:**

1. **Add cleanup session entry:**

```markdown
## 🗂️ Latest Session — YYYY-MM-DD

### Comprehensive Cleanup ✅ **COMPLETE**

- [x] File system audit
- [x] Import verification
- [x] Route validation
- [x] Root folder cleanup
- [x] Task list maintenance
- [x] Report processing
- [x] Documentation updates

**Cleanup Report:** `/reports/maintenance/YYYY-MM-DD_cleanup-session.md`
```

2. **Update "Last Cleanup" footer:**

```markdown
**Last Cleanup:** YYYY-MM-DD  
**Reports Processed:** [X] archived, [X] deleted  
**Next Cleanup:** [Date + 7 days]
```

---

## Protected Files (DO NOT DELETE)

### ⚠️ NEVER DELETE THESE FILES

**CSS Files:**
- `/styles/globals-minimal.css` - Active CSS entry point
- `/styles/globals.css` - Backup CSS with full imports
- `/src/styles/*.css` - All root CSS files (9 files)
- `/src/styles/blocks/**/*.css` - All block CSS (130+ files)
- `/src/styles/sections/*.css` - All section CSS (42 files)

**Configuration:**
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `vercel.json`
- `.gitignore`
- `.eslintrc.js`

**Core Application:**
- `/src/main.tsx` - Entry point
- `/App.tsx` - Root component
- `/routes.ts` - Full routes (production)
- `/routes.minimal.ts` - Minimal routes (Figma Make preview)

**Protected Components:**
- `/src/app/components/figma/ImageWithFallback.tsx` - Figma-specific

**Documentation:**
- `/guidelines/Guidelines.md` - Main guidelines
- `/guidelines/WRITING_GUIDELINES.md`
- `/guidelines/REPORTING_GUIDELINES.md`
- `/guidelines/_templates.md`
- `/tasks/task-list.md` - Master task list
- `/tasks/README.md`

---

## Execution Checklist

Before considering cleanup complete, verify:

- [ ] All orphaned files identified
- [ ] All broken imports fixed
- [ ] All missing routes added
- [ ] Root folder contains only allowed files
- [ ] Completed tasks archived
- [ ] Task file statuses updated
- [ ] Reports >7 days reviewed and processed
- [ ] Guidelines.md updated
- [ ] Sitemap statistics refreshed
- [ ] DevTools counts updated
- [ ] CHANGELOG.md entry added
- [ ] Cleanup report generated
- [ ] Master task list updated
- [ ] No protected files deleted
- [ ] TypeScript compiles successfully

---

## Common Issues & Solutions

### Issue: File appears orphaned but is dynamically imported

**Solution:** Check for:
- Dynamic imports: `const Component = lazy(() => import('./Component'))`
- Route lazy loading: `Component: lazy(() => import('./Component'))`
- Context providers imported in RootLayout

**Action:** Document as "Dynamically Imported" not "Orphaned"

---

### Issue: CSS file not imported but appears used

**Solution:** Check for:
- CSS imported in component file directly
- CSS loaded via theme system
- CSS in @import chain

**Action:** Trace import chain, document actual usage

---

### Issue: Task marked complete but work not done

**Solution:**
- Re-read task description
- Verify in codebase
- If incomplete, uncheck task: `[x]` → `[ ]`
- Add note: `(Re-opened: work incomplete on YYYY-MM-DD)`

---

### Issue: Report says "Complete" but code doesn't match

**Solution:**
- Verify report date vs current code
- Check if work was reverted
- If truly incomplete, mark report as "Partial"
- Create new task for remaining work

---

## Output Format

**After cleanup, provide:**

1. **Summary Statistics:**
   - Files reviewed: [X]
   - Changes made: [X]
   - Items archived: [X]
   - Time taken: [X] minutes

2. **Key Findings:**
   - [List significant discoveries]

3. **Actions Taken:**
   - [List major changes]

4. **Next Steps:**
   - [List manual review items if any]

5. **Report Location:**
   - `/reports/maintenance/YYYY-MM-DD_cleanup-session.md`

---

**Created:** 2026-03-13  
**Trigger Word:** `cleanup`  
**Frequency:** Weekly recommended  
**Duration:** 20-30 minutes per session
