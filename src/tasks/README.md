# Tasks Directory

**Purpose:** Centralized task tracking for the PlayPocket project.

**Organization:** Master task list with references to specific task files for detailed work.

---

## 📂 Folder Structure

```
/tasks/
├── README.md                                    # This file
├── task-list.md                                 # ⭐ MASTER task list (start here)
├── blocks-guidelines-gaps.md                    # Block guideline coverage gaps
├── patterns-guidelines-gaps.md                  # Pattern guideline coverage gaps
├── guidelines-remediation.md                    # Guidelines documentation cleanup
├── data-types-remediation.md                    # Data file type audits
└── archive/                                     # Completed task files
    └── [archived-tasks].md
```

---

## 🎯 Start Here: Master Task List

**File:** `/tasks/task-list.md`

**Purpose:** Single source of truth for all project tasks.

**What it contains:**
- ✅ Recently completed work (last 3 sessions)
- 🎯 **Next priority task** (highlighted)
- 📋 Active task files (with priorities)
- ✅ Completed task files (archived)
- 📊 Production ready state summary
- 📈 All previously completed work

**How to use:**
1. Open `/tasks/task-list.md`
2. Look for **🎯 Next Priority** section
3. Follow the referenced task file
4. Complete the tasks
5. Update task-list.md with progress

---

## 📋 Task File Types

### 1. Master Task List
**File:** `task-list.md`  
**Type:** Overview and orchestrator  
**Update:** After every session

**Structure:**
```markdown
## Latest Session
- Completed tasks

## Open Tasks
- Next priority (highlighted)
- Active task files table

## Production State
- Current status

## Completed Work
- Historical summary
```

---

### 2. Specific Task Files
**Examples:**
- `blocks-guidelines-gaps.md` - Block guideline coverage
- `patterns-guidelines-gaps.md` - Pattern guideline coverage
- `guidelines-remediation.md` - Documentation cleanup
- `data-types-remediation.md` - Data file audits

**Structure:**
```markdown
# [Task Category] Task List

**Status:** IN PROGRESS / NOT STARTED / COMPLETE
**Updated:** YYYY-MM-DD
**Priority:** P0 / P1 / P2

## Tasks

### P0: Critical
- [ ] Task 1
- [ ] Task 2

### P1: High Priority
- [ ] Task 3

### P2: Nice to Have
- [ ] Task 4
```

---

## 🔄 Task Workflow

### Step 1: Check Master List
```bash
# Read master task list
cat /tasks/task-list.md

# Look for "Next Priority" section
```

### Step 2: Open Referenced Task File
```bash
# Example: Next priority is checkout blocks
cat /tasks/blocks-guidelines-gaps.md
```

### Step 3: Work on Tasks
```bash
# Complete tasks in priority order (P0 → P1 → P2)
```

### Step 4: Update Task Files
```markdown
# Mark completed tasks
- [x] Task 1 ✅ **COMPLETE** (YYYY-MM-DD)

# Update status at top
**Updated:** YYYY-MM-DD
**Completed:** 3/8 tasks
```

### Step 5: Update Master List
```markdown
# In task-list.md, update session and priority
## Latest Session — YYYY-MM-DD
- [x] Completed task X

## Next Priority
- Updated to reflect next task
```

### Step 6: Archive When Complete
```bash
# When task file 100% complete
mv /tasks/completed-task.md /tasks/archive/YYYY-MM-DD_completed-task.md
```

---

## 📊 Current Status (as of 2026-03-13)

### Next Priority: Checkout Block Guidelines

**Focus:** Complete P0 checkout block guidelines (5 remaining)

**Task File:** `/tasks/blocks-guidelines-gaps.md`  
**Progress:** 3/8 checkout blocks complete

**Remaining Tasks:**
1. T4.3 - ShippingAddressForm.md
2. T4.4 - BillingAddressForm.md
3. T4.6 - CouponInput.md
4. T4.7 - ContactInfo.md
5. T4.8 - DeliveryMethodSelector.md

---

### Active Task Files (4 remaining)

| File | Status | Priority | Tasks |
|------|--------|----------|-------|
| `blocks-guidelines-gaps.md` | IN PROGRESS | P0 | 5 checkout blocks |
| `guidelines-remediation.md` | Partial | P1 | Tailwind examples |
| `data-types-remediation.md` | Not Started | P2 | Type audits |
| `patterns-guidelines-gaps.md` | Not Started | P2 | Pattern guidelines |

---

### Completed & Archived

**Recent completions:**
- ✅ CSS Full Restoration (280 imports) - March 13, 2026
- ✅ IframeMessageAbortError Resolution - March 13, 2026
- ✅ Retro Conversion (23 templates) - March 12, 2026
- ✅ Context Memoization - March 12, 2026

**Archived task files:**
- See `/tasks/archive/` for completed task files

---

## 🎯 Task Priorities Explained

### P0: Critical (Must Complete)
- Blocks project completion
- Required for production
- High user impact
- Dependency for other work

**Example:** Checkout block guidelines (needed for checkout flow documentation)

---

### P1: High Priority (Should Complete Soon)
- Important for quality
- Improves maintainability
- Reduces technical debt
- Enhances developer experience

**Example:** Guidelines Tailwind example cleanup (documentation quality)

---

### P2: Nice to Have (Complete When Time Allows)
- Quality of life improvements
- Optional enhancements
- Future-proofing
- Low urgency

**Example:** Data type audits (ensures type safety)

---

## 📝 Task File Template

When creating new task files, use this template:

```markdown
# [Category] Task List

**Source:** [Audit report or request]  
**Status:** NOT STARTED / IN PROGRESS / COMPLETE  
**Updated:** YYYY-MM-DD  
**Priority:** P0 / P1 / P2  
**Coverage:** [If applicable - e.g., 3/10 complete]

---

## P0: Critical

### T1.1 — [Task Name] ⏳ **IN PROGRESS**

**File:** [Path to file]  
**Description:** [What needs to be done]  
**Acceptance Criteria:**
- [ ] Criterion 1
- [ ] Criterion 2

**Status:** Started YYYY-MM-DD  
**Assignee:** [If applicable]

---

### T1.2 — [Task Name]

**File:** [Path]  
**Description:** [What]  
**Acceptance Criteria:**
- [ ] Criterion

---

## P1: High Priority

### T2.1 — [Task Name]

[Same structure]

---

## P2: Nice to Have

### T3.1 — [Task Name]

[Same structure]

---

## Progress Summary

**Completed:** 0/X tasks  
**In Progress:** 0 tasks  
**Not Started:** X tasks

**Last Updated:** YYYY-MM-DD
```

---

## 🔍 Finding Tasks

### By Priority
```bash
# P0 tasks
grep -r "## P0:" /tasks/*.md

# P1 tasks
grep -r "## P1:" /tasks/*.md
```

### By Status
```bash
# In progress tasks
grep -r "IN PROGRESS" /tasks/*.md

# Not started tasks
grep -r "NOT STARTED" /tasks/*.md
```

### By Category
```bash
# Block guidelines
cat /tasks/blocks-guidelines-gaps.md

# Pattern guidelines
cat /tasks/patterns-guidelines-gaps.md
```

---

## 📦 Archiving Tasks

### When to Archive

Archive a task file when:
- ✅ All tasks marked complete
- ✅ No open items remaining
- ✅ No longer relevant

### How to Archive

```bash
# 1. Verify all tasks complete
grep "\[ \]" /tasks/task-file.md  # Should return nothing

# 2. Move to archive with date prefix
mv /tasks/task-file.md /tasks/archive/YYYY-MM-DD_task-file.md

# 3. Update task-list.md
# Remove from "Active Task Files" table
# Add to "Completed Task Files" section with completion date
```

### Archive Naming Convention
```
YYYY-MM-DD_original-filename.md

Examples:
2026-03-13_css-restoration-tasks.md
2026-03-12_retro-conversion-tasks.md
```

---

## 🚨 Task List Maintenance

### Weekly Review (Every Friday)

**Run comprehensive cleanup audit:**
```
Run comprehensive cleanup audit.
Current date: YYYY-MM-DD
```

**This will:**
- Archive completed task files
- Update task-list.md
- Clean up stale reports
- Sync documentation

---

### Manual Maintenance (When Needed)

**Update task-list.md:**
1. Mark completed tasks with ✅ and date
2. Update "Next Priority" section
3. Update "Active Task Files" table
4. Add to "Latest Session" section

**Update specific task files:**
1. Mark completed tasks: `[x] Task ✅ COMPLETE (YYYY-MM-DD)`
2. Update status at top: `**Updated:** YYYY-MM-DD`
3. Update progress counters: `**Completed:** X/Y`

---

## 💡 Best Practices

### 1. Always Start with task-list.md
Don't dive into specific tasks without checking the master list first.

### 2. Update as You Go
Mark tasks complete immediately, don't wait until end of session.

### 3. Keep Tasks Atomic
Each task should be completable in 1-4 hours max.

### 4. Use Clear Acceptance Criteria
Every task should have measurable completion criteria.

### 5. Reference Files and Code
Always include file paths and code references in tasks.

### 6. Update Status Regularly
Keep "Updated" date current (update with each change).

### 7. Archive When Done
Don't let completed task files clutter the main folder.

### 8. Cross-Reference
Link related tasks, reports, and guidelines.

---

## 📚 Related Documentation

- **Master Task List:** `/tasks/task-list.md` ⭐ Start here
- **Continue Prompt:** `/prompts/CONTINUE-PROMPT.md` - How to resume work
- **Cleanup Audit:** `/prompts/maintenance/orchestrator_comprehensive-cleanup-audit.md`
- **Guidelines:** `/guidelines/Guidelines.md` - Project standards

---

## 🎯 Quick Reference

**Check current status:**
```
cat /tasks/task-list.md | grep "Next Priority" -A 10
```

**List active tasks:**
```
ls /tasks/*.md | grep -v "task-list.md" | grep -v "README.md"
```

**Count remaining tasks:**
```
grep -r "\[ \]" /tasks/*.md | wc -l
```

**Find in-progress tasks:**
```
grep -r "IN PROGRESS" /tasks/*.md
```

---

**Last Updated:** March 13, 2026  
**Active Tasks:** 4 task files  
**Next Priority:** Checkout block guidelines (5 remaining)
