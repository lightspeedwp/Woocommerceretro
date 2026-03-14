# Quick Start: Running the Comprehensive Cleanup Audit

**Prompt Location:** `/prompts/maintenance/orchestrator_comprehensive-cleanup-audit.md`

**Purpose:** Regular maintenance that cleans file system, validates routes/imports, and updates all documentation.

**Duration:** ~100 minutes (1 hour 40 minutes)

**Recommended Frequency:** Weekly or before major releases

---

## 🚀 How to Run

### Method 1: Direct Prompt (Recommended)

Copy-paste this into your AI assistant:

```
Please run the comprehensive cleanup and audit prompt located at:
/prompts/maintenance/orchestrator_comprehensive-cleanup-audit.md

Today's date is [INSERT TODAY'S DATE in YYYY-MM-DD format]

Execute all 7 phases sequentially:
1. File System Audit & Cleanup (20 min)
2. Route Validation & Sync (15 min)
3. Import Validation (15 min)
4. Documentation Updates (20 min)
5. Live Component Updates (15 min)
6. Final Validation & Report (10 min)
7. Summary & Closure (5 min)

Generate the comprehensive cleanup report at the end.
```

### Method 2: Detailed Prompt

```
Run comprehensive cleanup audit for PlayPocket project.

Current date: YYYY-MM-DD

Tasks:
- Clean up root directory (move/delete orphaned files)
- Archive reports older than 30 days
- Archive completed task files
- Validate all routes in routes.tsx
- Check for broken CSS imports in globals-minimal.css
- Check for broken JS/TS imports
- Update CHANGELOG.md
- Update Guidelines.md with current stats
- Update task-list.md
- Update Sitemap.tsx component with route count
- Update DevTools.tsx component with system stats
- Run TypeScript/ESLint/build checks
- Generate comprehensive report

Execute all phases in single session.
```

---

## ⏱️ What to Expect

### Phase 1: File System Cleanup (20 min)
**You'll see:**
- Files moved from root → proper folders
- Reports archived/deleted (> 30 days)
- Completed tasks archived

**Example output:**
```
✅ Root directory cleaned:
   - Moved: 3 files to /docs/
   - Deleted: 5 temp files

✅ Reports archived:
   - Deleted: 12 reports (> 30 days)
   - Archived: 2 important reports

✅ Tasks archived:
   - Archived: 2 completed task files
```

---

### Phase 2: Route Validation (15 min)
**You'll see:**
- Total routes counted
- Missing routes added to routes.tsx
- Broken routes identified

**Example output:**
```
✅ Routes validated:
   - Total routes: 152
   - New routes added: 3
   - Broken routes fixed: 1
   - Updated routes.tsx
```

---

### Phase 3: Import Validation (15 min)
**You'll see:**
- CSS imports checked (all 280)
- JS/TS imports scanned
- Broken imports fixed

**Example output:**
```
✅ CSS imports validated:
   - Total imports: 280
   - Broken: 0
   - Unused files: 2 (candidates for cleanup)

✅ JS/TS imports validated:
   - Files scanned: 450+
   - Broken imports: 2 (fixed)
   - Deprecated patterns: 1 (updated)
```

---

### Phase 4: Documentation Updates (20 min)
**You'll see:**
- CHANGELOG.md updated
- Guidelines.md stats refreshed
- task-list.md status synced

**Example output:**
```
✅ Documentation updated:
   - CHANGELOG.md (added v2.12 entry)
   - Guidelines.md (updated stats)
   - task-list.md (archived 2 completed files)
```

---

### Phase 5: Component Updates (15 min)
**You'll see:**
- Sitemap.tsx route count updated
- DevTools.tsx system stats refreshed

**Example output:**
```
✅ Components updated:
   - Sitemap.tsx (150 routes → 152 routes)
   - DevTools.tsx (updated all stats)
```

---

### Phase 6: Quality Checks (10 min)
**You'll see:**
- TypeScript check results
- ESLint check results
- Build check results

**Example output:**
```
✅ Quality checks:
   - TypeScript: ✅ 0 errors
   - ESLint: ✅ 0 warnings
   - Build: ✅ Success
```

---

### Phase 7: Report Generation (5 min)
**You'll see:**
- Comprehensive report created
- Summary displayed
- Next cleanup date suggested

**Example output:**
```
✅ Report generated:
   /reports/maintenance/2026-03-20_comprehensive-cleanup-report.md

🎉 Cleanup complete!
Next recommended cleanup: 2026-03-27
```

---

## 📋 Pre-Run Checklist

Before running the cleanup:

- [ ] **Commit pending changes** (cleanup may delete/move files)
- [ ] **Review root directory** - Check for important orphaned files
- [ ] **Check reports folder** - Mark any important reports with `[KEEP]` in filename
- [ ] **Verify date** - Ensure you provide correct date to prompt
- [ ] **Allocate time** - Set aside 100 minutes uninterrupted

---

## 📊 Expected Outputs

### Files Created
- `/reports/maintenance/YYYY-MM-DD_comprehensive-cleanup-report.md`

### Files Updated
- `/CHANGELOG.md`
- `/guidelines/Guidelines.md`
- `/tasks/task-list.md`
- `/src/app/components/pages/Sitemap.tsx`
- `/src/app/components/pages/DevTools.tsx`
- `/routes.tsx` (if missing routes found)
- `/styles/globals-minimal.css` (if broken imports found)

### Files Moved
- Root orphans → `/docs/`, `/scripts/`, `/prompts/`, `/reports/`, `/tasks/`

### Files Deleted
- Stale reports (> 30 days)
- Duplicate files
- Temp files (`.DS_Store`, `Thumbs.db`)

### Files Archived
- Completed task files → `/tasks/archive/`
- Important historical reports → `/reports/archive/`

---

## ✅ Success Criteria

**Cleanup successful when:**

1. ✅ Root directory contains ONLY allowed files
2. ✅ All routes in routes.tsx have matching templates
3. ✅ All templates have registered routes
4. ✅ Zero broken CSS imports
5. ✅ Zero broken JS/TS imports
6. ✅ All documentation updated with current stats
7. ✅ TypeScript check passes (0 errors)
8. ✅ ESLint check passes (0 warnings)
9. ✅ Build succeeds
10. ✅ Comprehensive report generated

---

## 🔄 After Cleanup

### 1. Review the Report

**Open:** `/reports/maintenance/YYYY-MM-DD_comprehensive-cleanup-report.md`

**Check:**
- Files moved/deleted (verify nothing important lost)
- Routes added/fixed (verify correct)
- Imports fixed (verify correct paths)
- Quality check results

### 2. Test the App

```bash
# Start dev server
npm run dev

# Visit key routes
# - Homepage (/)
# - Shop (/shop)
# - Product (/product/sample-product)
# - Cart (/cart)
# - Checkout (/checkout)
# - Sitemap (/sitemap)
# - DevTools (/dev-tools)
```

**Verify:**
- No console errors
- All routes work
- Sitemap shows updated count
- DevTools shows updated stats
- Dark mode toggle works

### 3. Commit Changes

```bash
git add .
git commit -m "chore: comprehensive cleanup and audit [YYYY-MM-DD]"
```

**Commit message format:**
```
chore: comprehensive cleanup and audit [2026-03-20]

- Cleaned root directory (moved 5 files)
- Archived 12 stale reports
- Archived 2 completed task files
- Added 3 missing routes
- Fixed 2 broken imports
- Updated all documentation
- Quality checks: ✅ TypeScript, ✅ ESLint, ✅ Build

Report: /reports/maintenance/2026-03-20_comprehensive-cleanup-report.md
```

### 4. Schedule Next Cleanup

**Add to calendar:**
- Date: 7 days from today
- Time: 100 minutes allocated
- Reminder: 1 day before

---

## ⚠️ Troubleshooting

### Issue: Prompt stops mid-execution

**Cause:** Token limit reached or session timeout

**Solution:**
1. Note which phase completed last
2. Resume with: "Continue from Phase X"
3. Or re-run entire prompt (it's safe to run multiple times)

---

### Issue: TypeScript errors after cleanup

**Cause:** Broken imports fixed incorrectly

**Solution:**
1. Check the report for "Broken imports fixed"
2. Manually verify each fix
3. Run: `npx tsc --noEmit` to see specific errors
4. Fix incorrect paths

---

### Issue: Routes not working after cleanup

**Cause:** Template paths in routes.tsx incorrect

**Solution:**
1. Check `/routes.tsx` for newly added routes
2. Verify `Component: lazy(() => import('./path/to/Template'))`
3. Ensure path matches actual file location
4. Restart dev server

---

### Issue: CSS styling missing

**Cause:** CSS imports removed incorrectly

**Solution:**
1. Check report for "CSS imports fixed"
2. Open `/styles/globals-minimal.css`
3. Verify all 280 imports present
4. If missing, restore from git: `git checkout styles/globals-minimal.css`

---

## 🎯 Common Scenarios

### Scenario 1: First Time Running Cleanup

**Expect:**
- More files moved/deleted (root was never cleaned)
- More stale reports archived
- Possibly more broken imports (legacy code)
- Longer duration (~120 minutes)

**Action:**
- Review report carefully
- Verify nothing important deleted
- Test thoroughly before committing

---

### Scenario 2: Regular Weekly Cleanup

**Expect:**
- Minimal files moved (root kept clean)
- Few reports archived
- Few or no broken imports
- Standard duration (~100 minutes)

**Action:**
- Quick review of report
- Verify quality checks pass
- Commit and continue

---

### Scenario 3: Pre-Release Cleanup

**Expect:**
- Documentation updates (version bump)
- CHANGELOG.md updated with release notes
- All quality checks must pass
- Critical to verify everything works

**Action:**
- Thorough testing
- Deploy to staging first
- Run E2E tests if available
- Get team review before production

---

## 📚 Related Documentation

- **[Cleanup Prompt](/prompts/maintenance/orchestrator_comprehensive-cleanup-audit.md)** - Full prompt
- **[Prompts README](/prompts/README.md)** - Prompt directory guide
- **[Guidelines](/guidelines/Guidelines.md)** - Project architecture
- **[Task List](/tasks/task-list.md)** - Current tasks

---

## 💡 Tips

1. **Run on Fridays:** End the week with a clean codebase
2. **Before releases:** Always run before deploying to production
3. **After major work:** Run after completing large features
4. **Keep reports:** Don't delete `[KEEP]` marked reports
5. **Review changes:** Always review the report before committing
6. **Test thoroughly:** Test the app after cleanup
7. **Commit immediately:** Don't leave cleanup uncommitted

---

**Last Updated:** March 13, 2026  
**Prompt Version:** 1.0  
**Status:** Active
