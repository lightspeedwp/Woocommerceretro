# Report Processor Orchestrator Prompt

**Purpose:** Process all reports in `/reports/` folder, identify completed vs actionable work, create/update task lists, and archive obsolete reports.

**Version:** 1.0  
**Created:** 2026-03-13

---

## Overview

This orchestrator systematically reviews all reports in `/reports/`, determines their current status, and takes appropriate actions:

1. **Archive** completed reports (older than 7 days, no open issues)
2. **Create tasks** for actionable reports with outstanding work
3. **Update** existing task lists with new findings
4. **Delete** superseded/duplicate reports
5. **Update** master task list with consolidated status

---

## Prerequisites

Before running this orchestrator, ensure:

- [ ] You have read `/guidelines/REPORTING_GUIDELINES.md`
- [ ] You have read `/guidelines/PLANNING_GUIDELINES.md`
- [ ] You have read `/tasks/task-list.md` (master task list)
- [ ] You have access to all subdirectories in `/reports/`

---

## Phase 1: Discovery & Classification

### Step 1.1: Scan All Reports

```bash
# List all reports by date
find /reports -name "*.md" -type f | grep -E "20[0-9]{2}-[0-9]{2}-[0-9]{2}" | sort
```

For each report file found:

1. **Read the report** completely
2. **Extract metadata:**
   - Date created (from filename)
   - Report type (audit, fix, documentation, etc.)
   - Status (Complete, In Progress, Blocked, etc.)
   - Related tasks (if mentioned)
3. **Classify** the report:
   - **ACTIONABLE** - Has open tasks or ongoing work
   - **COMPLETED** - All work done, can be archived
   - **SUPERSEDED** - Replaced by newer report
   - **DUPLICATE** - Redundant information

### Step 1.2: Age Threshold Check

Calculate days since report creation:

```
Days Old = Today (2026-03-13) - Report Date
```

**Classification Rules:**

| Age | Actionable | Completed | Action |
|-----|-----------|-----------|--------|
| < 7 days | Keep | Keep | Review for tasks |
| 7-14 days | Keep | Archive | Review carefully |
| 14-30 days | Keep if active | Archive | Verify relevance |
| > 30 days | Archive unless critical | Archive | Likely obsolete |

---

## Phase 2: Validation & Verification

### Step 2.1: Verify Report Contents

For each **ACTIONABLE** report:

1. **Check if issues are resolved:**
   - Read the report's problem description
   - Search codebase for mentioned files/issues
   - Verify current state vs reported state
   - Example:
     ```bash
     # If report mentions "QuickView hook violation"
     grep -n "useVariantSelection" /src/app/components/overlay/QuickView.tsx
     # Verify hook is now at top level
     ```

2. **Check if related code exists:**
   - Verify files mentioned still exist
   - Check if suggested fixes were applied
   - Search for related patterns

3. **Classify resolution status:**
   - ✅ **RESOLVED** - Issue no longer exists
   - ⏳ **PARTIAL** - Some work done, more needed
   - ❌ **OPEN** - Issue still present
   - 🔄 **CHANGED** - Different solution implemented

### Step 2.2: Cross-Reference Task Lists

For each report, check if it's already tracked:

```bash
# Search for report mentions in task files
grep -r "2026-03-10_p0-css-optimization" /tasks/
```

**Outcomes:**
- **Found in task list** → Verify task status matches report
- **Not found** → May need new task created
- **Task marked complete** → Report can be archived

---

## Phase 3: Task Generation

### Step 3.1: Create New Tasks

For **ACTIONABLE** reports NOT in task lists:

1. **Determine task file:**
   - CSS optimization → `/tasks/stylesheet-architecture-migration-tasks.md`
   - Block guidelines → `/tasks/blocks-guidelines-gaps.md`
   - Data issues → `/tasks/data-types-remediation.md`
   - Guidelines issues → `/tasks/guidelines-remediation.md`
   - General work → `/tasks/task-list.md`

2. **Extract action items from report:**
   - Look for "TODO", "Next Steps", "Outstanding", "Remaining" sections
   - Convert to task format:
     ```markdown
     - [ ] **T#.#** - [Task description] (from [report reference])
     ```

3. **Add priority level:**
   - **P0** - Critical, blocks other work
   - **P1** - High priority, needed soon
   - **P2** - Medium priority
   - **P3** - Low priority, nice-to-have

### Step 3.2: Update Existing Tasks

For reports with existing tasks:

1. **Verify task status is accurate:**
   - If report says "Complete" but task unchecked → Check mark task
   - If report says "Partial" → Update task description with remaining work
   - If report says "Blocked" → Add blocker note to task

2. **Add report reference:**
   ```markdown
   - [ ] **T#.#** - Task description
     - **Report:** `/reports/fixes/2026-03-10_fix-name.md`
     - **Status:** In Progress (60% complete)
   ```

---

## Phase 4: Report Archival

### Step 4.1: Archive Completed Reports

For reports classified as **COMPLETED** and older than 7 days:

1. **Verify completion:**
   - All tasks from report are checked off ✅
   - Code mentioned in report exists and is correct
   - No open questions or TODOs in report

2. **Determine archive location:**
   ```
   Original: /reports/fixes/2026-03-10_p0-css-optimization-complete.md
   Archive:  /reports/archive/2026-03/2026-03-10_p0-css-optimization-complete.md
   ```

3. **Move file:**
   - **DO NOT DELETE** - Always move to archive
   - Use appropriate year-month folder: `/reports/archive/YYYY-MM/`
   - Create folder if it doesn't exist

4. **Update archive README:**
   - Add entry to `/reports/archive/YYYY-MM/README.md`
   - Include summary, date archived, reason

### Step 4.2: Delete Superseded Reports

For reports that are **SUPERSEDED** by newer versions:

1. **Verify superseding report exists:**
   - Example: `parser-error-fix-v6-FINAL.md` supersedes `parser-error-fix-v2.md` through `v5.md`
   - Newer report must be more comprehensive

2. **Check for unique information:**
   - If old report has context not in new report → **ARCHIVE** instead
   - If old report is purely redundant → **DELETE**

3. **Document deletion:**
   - Add to `/reports/archive/YYYY-MM/README.md` under "Deleted Reports" section
   - Note reason and which report superseded it

---

## Phase 5: Master Task List Update

### Step 5.1: Consolidate Task Status

Review all task files and update `/tasks/task-list.md`:

1. **Count completed tasks by category:**
   ```markdown
   | Category | Completed | Total | % Done |
   |----------|-----------|-------|--------|
   | Block Guidelines | 11 | 13 | 85% |
   | CSS Optimization | 8 | 10 | 80% |
   ```

2. **Update "Open Tasks" section:**
   - List only ACTIVE task files with open work
   - Remove completed task files

3. **Mark completed items:**
   - Add ✅ to finished tasks
   - Update "Last Updated" date
   - Add completion notes

### Step 5.2: Generate Summary Report

Create report documenting this orchestrator run:

**Report path:** `/reports/maintenance/YYYY-MM-DD_report-processing-summary.md`

**Contents:**
- Reports reviewed (total count)
- Reports archived (count + list)
- Reports deleted (count + reason)
- Tasks created (count + list)
- Tasks updated (count + list)
- Master task list changes

---

## Guidelines Reference

This orchestrator follows these standards:

### Report Processing
- `/guidelines/REPORTING_GUIDELINES.md` - Report structure and naming
- `/guidelines/PLANNING_GUIDELINES.md` - Task list standards

### File Organization
- `/guidelines/Guidelines.md` Section: Project File Organization & Workflow
- `/tasks/README.md` - Task file structure

### Verification Standards
- `/guidelines/development/modern-react-coding-standards.md` - Code verification patterns
- `/scripts/verify-production.sh` - Automated verification commands

---

## Example Workflow

### Example 1: Processing a Completed Fix Report

**Report:** `/reports/fixes/2026-03-06_parser-error-fix-v7.md`  
**Date:** March 6, 2026 (7 days old)  
**Status in report:** "✅ Fixed"

**Steps:**

1. **Read report** - Parser error from destructured imports in routes.ts
2. **Verify fix applied:**
   ```bash
   grep "import.*from.*react-router" /routes.ts
   # Should show: import RouterProvider from 'react-router'
   # (default import, not destructured)
   ```
3. **Check for related tasks:**
   ```bash
   grep -r "parser.*error.*fix" /tasks/
   # Found in task-list.md, marked as complete ✅
   ```
4. **Classification:** COMPLETED (fix verified, task checked off)
5. **Action:** Move to `/reports/archive/2026-03/`
6. **Update archive README** with entry

---

### Example 2: Processing an Actionable Audit Report

**Report:** `/reports/audits/2026-03-08_block-guidelines-audit.md`  
**Date:** March 8, 2026 (5 days old)  
**Status in report:** "13 blocks missing guidelines"

**Steps:**

1. **Read report** - Lists 13 blocks without guideline files
2. **Verify current state:**
   ```bash
   ls -1 /guidelines/blocks/ | wc -l
   # Count how many now exist vs report date
   ```
3. **Cross-reference task list:**
   ```bash
   grep "block.*guidelines" /tasks/blocks-guidelines-gaps.md
   # Check if tasks exist for these 13 blocks
   ```
4. **Classification:** ACTIONABLE (work in progress, 11/13 done)
5. **Action:**
   - Update `/tasks/blocks-guidelines-gaps.md` with progress (11/13 complete)
   - Add note referencing audit report
   - Keep report active (< 7 days old)
6. **When all 13 complete:**
   - Mark task complete ✅
   - Archive report to `/reports/archive/2026-03/`

---

## Output Checklist

After running this orchestrator, verify:

- [ ] All reports older than 7 days have been reviewed
- [ ] Completed reports are archived to `/reports/archive/YYYY-MM/`
- [ ] Superseded reports are deleted (with documentation)
- [ ] Actionable reports have tasks in appropriate task files
- [ ] Master task list (`/tasks/task-list.md`) is updated
- [ ] Archive README files are updated
- [ ] Summary report created in `/reports/maintenance/`

---

## Edge Cases & Considerations

### What if a report has partial completion?

**Solution:** Keep report active, update related task with "X/Y complete" notation

**Example:**
```markdown
- [ ] **T5.2** - CSS optimization (8/10 complete)
  - **Report:** `/reports/css-optimization/2026-03-06_css-optimization.md`
  - **Remaining:** P1.3 dark mode vars, P2.1 unused vars
```

### What if no related task file exists?

**Solution:** Create tasks in master `/tasks/task-list.md` under appropriate section

**Example:**
```markdown
## Open Tasks - Category Name

From `/reports/type/YYYY-MM-DD_report-name.md`:
- [ ] **TNew.1** - First task from report
- [ ] **TNew.2** - Second task from report
```

### What if code was fixed differently than report suggested?

**Classification:** RESOLVED (even if solution differs)  
**Action:** Archive report, add note in archive README about alternative solution

---

**Last Updated:** 2026-03-13  
**Maintainer:** Development Team  
**Next Review:** Weekly on Mondays
