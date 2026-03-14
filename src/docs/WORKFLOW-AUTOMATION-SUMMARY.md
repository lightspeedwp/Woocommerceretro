# Workflow Automation System — Complete Guide

**Created:** 2026-03-13  
**Status:** ✅ Ready to Use  
**Version:** 1.0

---

## 🎯 Quick Start

**You can now use single words to execute complex workflows:**

```
Say: "cleanup"   → Runs comprehensive project maintenance
Say: "continue"  → Executes next task from task list
```

That's it! No need to explain what you want—the system handles everything.

---

## What Was Built

### Two Core Prompts

**1. Cleanup Prompt** (`/prompts/cleanup.md`)
- **Purpose:** Comprehensive project maintenance in one session
- **Duration:** 20-30 minutes
- **Phases:** 8 comprehensive phases
- **Output:** Cleanup report in `/reports/maintenance/`

**2. Continue Prompt** (`/prompts/continue.md`)
- **Purpose:** Execute next task from master task list
- **Duration:** 10-20 minutes per task
- **Output:** Updated task status, completion report

---

### What Cleanup Does (8 Phases)

**Phase 1: File System Audit**
- Finds orphaned files (not imported anywhere)
- Detects duplicate component names
- Lists files for review

**Phase 2: Import Verification**
- Checks all CSS files are imported
- Verifies JS/TS imports
- Fixes broken import paths

**Phase 3: Route Validation**
- Compares templates to routes
- Adds missing routes to routes.ts
- Verifies route imports

**Phase 4: Root Folder Cleanup**
- Moves misplaced task lists to `/tasks/`
- Moves reports to `/reports/`
- Moves scripts to `/scripts/`
- Moves docs to `/docs/` or `/guidelines/`

**Phase 5: Task List Maintenance**
- Archives completed tasks (>7 days)
- Updates completion percentages
- Deletes 100% complete task files

**Phase 6: Report Processing**
- Reviews reports >7 days old
- Verifies completion in codebase
- Archives or deletes appropriately

**Phase 7: Documentation Updates**
- Updates Guidelines.md
- Refreshes Sitemap statistics
- Updates DevTools counts

**Phase 8: Final Verification**
- TypeScript check
- Generates cleanup report
- Updates master task list

---

### What Continue Does

**Simple 5-Step Process:**

1. Reads `/tasks/task-list.md`
2. Identifies highest priority unchecked task
3. Reads relevant guidelines
4. Executes the task
5. Marks complete and reports

**Supports these task types:**
- Create component guideline
- Create design token guideline
- Fix code issue
- Update documentation
- Create report

---

## Protected Files System

### Never Deleted (180+ files)

**CSS Files (180+ files):**
- `/styles/globals-minimal.css`
- `/styles/globals.css`
- `/src/styles/*.css` (9 root files)
- `/src/styles/blocks/**/*.css` (130+ block files)
- `/src/styles/sections/*.css` (42 section files)

**Configuration:**
- `package.json`, `tsconfig.json`, `vite.config.ts`
- `.gitignore`, `.eslintrc.js`, `vercel.json`

**Core Application:**
- `/src/main.tsx`, `/App.tsx`
- `/routes.ts`, `/routes.minimal.ts`
- `/src/app/components/figma/ImageWithFallback.tsx`

**Documentation:**
- `/guidelines/Guidelines.md`
- `/guidelines/WRITING_GUIDELINES.md`
- `/guidelines/REPORTING_GUIDELINES.md`
- `/guidelines/_templates.md`
- `/tasks/task-list.md`, `/tasks/README.md`

---

## Usage Examples

### Example 1: Monday Morning Routine

```
User: "cleanup"

AI executes cleanup (20 minutes):
✅ 3 files moved to correct locations
✅ 1 broken CSS import fixed
✅ 0 missing routes (all templates covered)
✅ 2 completed tasks archived
✅ 4 reports >7 days old archived
✅ Sitemap updated (152 routes)
✅ DevTools updated (component counts)

Report generated: /reports/maintenance/2026-03-13_cleanup-session.md

User: "continue"

AI executes next task (15 minutes):
✅ Task T4.12: Create ProductPrice.md guideline
✅ Used template from /guidelines/_templates/component-guideline.md
✅ Inspected /src/app/components/blocks/single-product/ProductPrice.tsx
✅ Created /guidelines/blocks/ProductPrice.md (complete)
✅ Task marked complete (12/13 P0 blocks done)

User: "continue"

AI executes next task (20 minutes):
✅ Task T6.2: Create buttons.md design token guideline
✅ Used template from /guidelines/_templates/design-token-guideline.md
✅ Created /guidelines/design-tokens/buttons.md
✅ Task marked complete
```

---

### Example 2: After Completing Major Feature

```
User: "cleanup"

AI executes:
✅ Archives last week's completed work
✅ Moves 5 task lists to archive (all 100% complete)
✅ Archives 8 completion reports
✅ Updates documentation with new component counts
✅ Syncs Sitemap with new routes

User: "continue"

AI executes:
✅ Finds next priority: Create forms.md design token guideline
✅ Executes and completes
✅ Ready for next "continue"
```

---

### Example 3: Returning After Break

```
User returns after 3 days off

User: "cleanup"

AI executes:
✅ Organizes files created while away
✅ Updates task statuses
✅ Archives old reports
✅ Brings documentation up to date

User: "continue"

AI executes:
✅ Resumes exactly where you left off
✅ No context lost
✅ Reads fresh guidelines
✅ Executes next task
```

---

## How the Trigger System Works

### Technical Flow

**1. User says trigger word:**
```
User: "cleanup"
```

**2. AI recognizes trigger:**
- AI reads `/guidelines/PROMPT_TRIGGER_SYSTEM.md`
- Sees: "cleanup" → Execute `/prompts/cleanup.md`

**3. AI loads and executes:**
- Reads full cleanup.md file
- Follows all 8 phases
- Completes all checklist items

**4. AI reports completion:**
```
✅ Cleanup complete.
   - 12 files organized
   - 3 imports fixed
   - Task list updated

Ready to continue? (Say 'continue' to resume work)
```

---

## Recommended Workflow

### Daily Active Development

```
Morning:
- Say: "cleanup" (organize overnight work)
- Say: "continue" (start first task)
- Say: "continue" (second task)
- Say: "continue" (third task)

End of day:
- Say: "cleanup" (archive day's progress)
```

---

### Weekly Intermittent Work

```
Monday:
- Say: "cleanup" (organize week's work)
- Say: "continue" (first task)
- Say: "continue" (second task)

Friday:
- Say: "cleanup" (archive week's progress)
```

---

### Monthly Maintenance

```
First Monday of month:
- Say: "cleanup" (deep clean)
- Review cleanup report
- Say: "continue" (resume work)
```

---

## Figma Make Environment

**Both prompts include special handling for Figma Make:**

❌ **Never suggests:**
- "Refresh your browser"
- "Clear your cache"
- "Restart dev server"
- "Run npm install"

✅ **Instead:**
- Makes code changes directly
- Updates files in place
- Verifies via code inspection
- Works within Figma Make preview

---

## Report Naming Standards

**Format:** `YYYY-MM-DD_[category]_[description].md`

**Categories:**
- `cleanup` → `/reports/maintenance/`
- `fixes` → `/reports/fixes/`
- `audits` → `/reports/audits/`
- `accessibility` → `/reports/accessibility/`
- `performance` → `/reports/performance/`

**Examples:**
```
✅ 2026-03-13_cleanup_weekly-maintenance.md
✅ 2026-03-13_fixes_broken-import.md
✅ 2026-03-13_audits_component-compliance.md

❌ Cleanup Session.md (spaces, no date)
❌ 2026-03-13_CLEANUP_AUDIT.md (uppercase)
❌ cleanup-report.md (no date)
```

---

## Task List Cleanup Policies

### Master Task List (`/tasks/task-list.md`)

**Rules:**
- Update daily if active development
- Move completed sections to archive after 7 days
- Consolidate duplicate tasks
- Keep priority markers current (P0/P1/P2/P3)

---

### Individual Task Lists

**Archive when:**
- All tasks ✅ complete
- File age >30 days
- No longer referenced by master

**Archive to:** `/tasks/archive/completed-YYYY-MM.md`

---

### Reports

**Retention periods:**
- Cleanup reports: 30 days
- Fix reports: 60 days
- Audit reports: 90 days
- Migration reports: Permanent
- Historical reports: Permanent

**Archive to:** `/reports/archive/YYYY/MM-month/`

---

## Integration with Existing Systems

### Works With These Systems

**1. Guidelines Templates** (`/guidelines/_templates/`)
- Continue prompt uses templates when creating guidelines
- Cleanup prompt verifies template compliance

**2. Report Processor** (`/prompts/orchestrators/report-processor.md`)
- Cleanup implements same report processing logic
- But runs in single session instead of multi-session

**3. Guidelines Audit** (`/prompts/audits/guidelines-comprehensive-audit.md`)
- Cleanup prepares clean baseline
- Then audit reviews against standards

**4. Master Task List** (`/tasks/task-list.md`)
- Continue reads from master list
- Cleanup updates master list status

---

## Files Created

### Prompts (2 files)
- `/prompts/cleanup.md` (1,400 lines)
- `/prompts/continue.md` (750 lines)

### Guidelines (1 updated)
- `/guidelines/PROMPT_TRIGGER_SYSTEM.md` (v1.0 → v2.0, 850+ lines)

### Reports (1 file)
- `/reports/maintenance/2026-03-13_cleanup-continue-prompts-implementation.md`

### Already Existed in Guidelines.md
- Quick Workflow Commands section (lines 1218-1262)

**Total:** 3,000+ lines of new documentation

---

## Future Enhancements

### Planned Triggers

**Documented but not yet implemented:**

| Trigger | Prompt File | Purpose |
|---------|-------------|---------|
| `audit` | `/prompts/audits/comprehensive-audit.md` | Full system audit |
| `test` | `/prompts/testing/run-tests.md` | Execute test suite |
| `document` | `/prompts/documentation/update-docs.md` | Update all docs |
| `optimize` | `/prompts/optimization/performance.md` | Performance tuning |

---

### Advanced Features (Future)

- **Trigger chains:** `cleanup → continue → cleanup`
- **Conditional triggers:** `cleanup if dirty`
- **Scheduled triggers:** `cleanup every Monday`
- **Trigger parameters:** `cleanup --deep`
- **Trigger history:** Track cleanup sessions

---

## Troubleshooting

### Q: What if cleanup reports errors?

**A:** 
1. Read the error message
2. Check if protected files were affected
3. Review cleanup report for details
4. Fix manually if needed
5. Run cleanup again

---

### Q: What if continue can't find next task?

**A:**
1. Check `/tasks/task-list.md` for open tasks
2. Verify task list file exists
3. Manually specify task if needed
4. Update task list if empty

---

### Q: Can I run cleanup multiple times?

**A:** Yes! It's idempotent—safe to run as often as you want.

---

### Q: Can I run continue without cleanup?

**A:** Yes! Continue works standalone, but runs best after cleanup.

---

## Best Practices

### Do's ✅

- ✅ Run cleanup weekly minimum
- ✅ Run cleanup before major milestones
- ✅ Use continue for routine tasks
- ✅ Review cleanup reports
- ✅ Trust the system with file organization

### Don'ts ❌

- ❌ Skip cleanup for months
- ❌ Manually organize files (let cleanup do it)
- ❌ Delete protected files
- ❌ Ignore cleanup warnings
- ❌ Mix manual organization with automated

---

## Success Metrics

**System is working when:**

- ✅ Files always in correct locations
- ✅ Zero broken imports
- ✅ All templates have routes
- ✅ Task lists current
- ✅ Reports archived appropriately
- ✅ Documentation synced with code
- ✅ Protected files never deleted

---

## Quick Reference

### Common Commands

```bash
# Weekly maintenance
User: "cleanup"

# Resume work
User: "continue"

# Complete multiple tasks
User: "continue"  # Task 1
User: "continue"  # Task 2
User: "continue"  # Task 3

# End of week
User: "cleanup"
```

---

### File Locations

**Prompts:**
- Cleanup: `/prompts/cleanup.md`
- Continue: `/prompts/continue.md`

**Guidelines:**
- Trigger system: `/guidelines/PROMPT_TRIGGER_SYSTEM.md`
- Main guidelines: `/guidelines/Guidelines.md` (lines 1218-1262)

**Tasks:**
- Master list: `/tasks/task-list.md`

**Reports:**
- Cleanup reports: `/reports/maintenance/`
- Implementation: `/reports/maintenance/2026-03-13_cleanup-continue-prompts-implementation.md`

---

## Support Documentation

**For detailed information, see:**

1. **Cleanup Prompt:** `/prompts/cleanup.md` - All 8 phases explained
2. **Continue Prompt:** `/prompts/continue.md` - Task execution details
3. **Trigger System:** `/guidelines/PROMPT_TRIGGER_SYSTEM.md` - Full system docs
4. **Main Guidelines:** `/guidelines/Guidelines.md` - Quick Workflow Commands section
5. **Implementation Report:** `/reports/maintenance/2026-03-13_cleanup-continue-prompts-implementation.md`

---

## Ready to Use!

**Try it now:**

```
Say: "cleanup"
```

The system will organize your project and prepare for productive work.

Then:

```
Say: "continue"
```

The system will execute your next priority task.

---

**Last Updated:** 2026-03-13  
**Status:** ✅ Production Ready  
**Next Action:** Try "cleanup" now!
