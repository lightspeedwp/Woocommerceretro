# Status — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-15
**Type:** Single Prompt
**Trigger Word:** `status`
**Duration:** 5-10 minutes

---

## Objective

Produce a concise project status summary by reading the master task list and recent reports.

---

## Execution Steps

### Phase 1: Read Current State (3 min)

- [ ] Read `/tasks/task-list.md` — identify open tasks, latest session, next priority
- [ ] Read `/guidelines/Guidelines.md` — check current version number
- [ ] Count open vs completed tasks

### Phase 2: Summarize (2 min)

Report to the user:

1. **Version:** Current project version
2. **Open tasks:** Count of unchecked items in task-list.md
3. **Next priority:** The highest-priority unchecked task
4. **Recent work:** Last completed session summary (1-2 lines)
5. **Suggestion:** Recommend `continue`, `cleanup`, `audit`, or `optimize` as next action

---

## Output

No files created. Status is reported directly to the user in chat.

---

## Success Criteria

- [ ] User receives a clear, concise status summary
- [ ] Next action is recommended
