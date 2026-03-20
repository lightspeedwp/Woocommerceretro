# Archive Tasks — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `archive tasks`
**Duration:** 15-30 minutes

---

## Objective

Review all task list files under `/tasks/`. Archive task lists that are 100% complete. For partially complete lists, summarize remaining work. Update the master task list registry.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/PLANNING_GUIDELINES.md` — task planning standards
3. Read `/tasks/task-list.md` — current master task list and sub-task registry

---

## Execution Steps

### Phase 1: Inventory all task files (3 min)

1. List every `.md` file under `/tasks/` (excluding `/tasks/archive/`, `/tasks/README.md`, and `/tasks/task-list.md` which is protected)
2. For each task file, calculate:
   - **Total tasks:** count lines matching `- [ ]` and `- [x]`
   - **Completed tasks:** count lines matching `- [x]`
   - **Completion percentage:** `(completed / total) * 100`
   - **Last modified date** (from frontmatter or content dates)

### Phase 2: Classify each task file (5 min)

```
Is the task file 100% complete (all items checked)?
  ├─ YES → ARCHIVE
  └─ NO
       ├─ Is the task file > 80% complete?
       │    ├─ YES → FLAG (nearly done — list remaining items for user)
       │    └─ NO  → KEEP
       └─ Is the task file referenced by an active report or prompt?
            ├─ YES → KEEP (still feeding active work)
            └─ NO  → Is every remaining task P3 or lower?
                 ├─ YES → FLAG (low-priority leftovers)
                 └─ NO  → KEEP
```

**Classification markers:**

| Classification | Criteria | Action |
|---------------|----------|--------|
| **ARCHIVE** | 100% complete, all `[x]` | Move to `/tasks/archive/` |
| **KEEP** | Active work remains (> 0 unchecked P0-P2 tasks) | Leave in place |
| **FLAG** | Nearly complete (>80%) or only P3 leftovers | Report to user for decision |

### Phase 3: Verify completion (5-10 min)

For each task file classified as **ARCHIVE**, verify:

1. **Spot-check 3-5 completed tasks** — confirm the work actually exists in the codebase
2. **Check for dangling references** — does any other file (report, prompt, guideline) point to this task list?
3. **If verification fails** — uncheck the task: `[x]` → `[ ]`, add note `(Re-opened: work incomplete on 2026-03-18)`, reclassify as KEEP

### Phase 4: Archive (3-5 min)

For each verified **ARCHIVE** task file:

1. Create `/tasks/archive/` directory if it doesn't exist
2. Move the file to `/tasks/archive/`
3. Add an archive header:
   ```markdown
   > **Archived:** 2026-03-18 | **Completion:** 100% ([X]/[X] tasks) | **Original location:** /tasks/[filename]
   ```

### Phase 5: Update master task list (3-5 min)

1. Read `/tasks/task-list.md`
2. For each archived file:
   - Update the Sub-Task List Registry: mark as `✅ ARCHIVED (2026-03-18)`
   - Do NOT remove the row — keep for historical reference
3. For each flagged file:
   - Add a note in the master task list with remaining task count
4. Update completion statistics

### Phase 6: Summary (2 min)

Report to user:

```
Task archive complete.
- Reviewed: [X] task files
- Archived: [Y] (100% complete)
- Kept: [K] (active work remains)
- Flagged: [F] (nearly complete or low-priority leftovers)

[If flagged files exist:]
Flagged for review:
- [filename] — [X]/[Y] complete ([Z]%) — remaining: [list unchecked items]
```

---

## Archive Rules

1. **Never archive `/tasks/task-list.md`** — it is the master registry and is protected
2. **Never archive `/tasks/README.md`** — protected documentation
3. **Never delete task files** — always move to `/tasks/archive/`
4. **Always verify completion** before archiving — at least spot-check that work exists
5. **Always update the master task list** after archiving
6. **Task files with 0 items** (empty or header-only) — archive immediately

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/PLANNING_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `archive tasks`
