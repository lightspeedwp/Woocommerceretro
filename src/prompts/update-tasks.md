# Update Tasks — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update tasks`
**Duration:** 10-20 minutes

---

## Objective

Refresh all task list files. Recalculate completion percentages, verify task statuses against the codebase, update the master task list registry, and flag tasks that are complete but unchecked (or vice versa).

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/PLANNING_GUIDELINES.md` — task planning standards
3. Read `/tasks/task-list.md` — current master task list

---

## Execution Steps

### Phase 1: Inventory all task files (3 min)

1. List every `.md` file under `/tasks/` (excluding `/tasks/archive/` and `/tasks/README.md`)
2. For each task file, calculate:
   - **Total tasks:** count `- [ ]` + `- [x]` lines
   - **Completed:** count `- [x]` lines
   - **Percentage:** `(completed / total) * 100`
   - **Priority breakdown:** P0/P1/P2/P3 counts if tagged

### Phase 2: Verify task accuracy (5-10 min)

For each task file, spot-check 3-5 tasks:

**Checked but incomplete:**
- Task is `- [x]` but the work doesn't exist in codebase
- Action: Uncheck → `- [ ]`, add note `(Re-opened: work not found on 2026-03-18)`

**Unchecked but complete:**
- Task is `- [ ]` but the work IS done in codebase
- Action: Check → `- [x]`, add note `(Auto-completed: verified in codebase on 2026-03-18)`

### Phase 3: Update master task list (3-5 min)

1. Read `/tasks/task-list.md`
2. Update the Sub-Task List Registry with current completion percentages
3. Update priority summaries
4. Ensure every task file under `/tasks/` has a registry entry
5. Remove registry entries for files that no longer exist (moved to archive)

### Phase 4: Flag actionable items (2-3 min)

Identify and report:
- **100% complete task files** → candidates for `archive tasks`
- **Stale task files** → no progress in 14+ days, may need re-prioritization
- **Conflicting tasks** → tasks in different files that contradict each other

### Phase 5: Summary (2 min)

```
Task update complete.
- Task files reviewed: [X]
- Completion recalculated: [Y] files updated
- Tasks re-opened: [Z] (work not found)
- Tasks auto-completed: [W] (work verified)
- Master registry updated: [N] entries
- Ready for archival: [A] files at 100% (run "archive tasks")

→ Next: Say "archive tasks" to archive completed task lists.
→ Or: Say "continue" to execute the next open task.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/PLANNING_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `update tasks`
