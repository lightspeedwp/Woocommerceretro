# Update — Orchestrator Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Orchestrator
**Trigger Word:** `update`
**Duration:** 60-120 minutes

---

## Objective

Run all `update *` sub-triggers in sequence. Each sub-trigger refreshes its domain to match the current state of the codebase. This is a comprehensive synchronisation pass — no auditing, no archiving, just ensuring everything is current and accurate.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/PROMPT-TRIGGERS.md` — verify all update sub-triggers are registered

**Do NOT read individual update prompt files yet** — each phase reads its own.

---

## Execution Order

Run sub-triggers in this fixed order (dependencies flow downward):

### Phase 1: Update data (30-60 min)

1. Read and execute `/prompts/update-data.md`
2. This MUST run first — it may create new data files that affect all other phases
3. Wait for completion before proceeding

### Phase 2: Update routes (20-40 min)

1. Read and execute `/prompts/update-routes.md`
2. Routes must be current before sitemap and navigation can be synced

### Phase 3: Update sitemap (10-20 min)

1. Read and execute `/prompts/update-sitemap.md`
2. Depends on Phase 2 — sitemap reflects routes

### Phase 4: Update guidelines (15-30 min)

1. Read and execute `/prompts/update-guidelines.md`
2. Refreshes guideline content and frontmatter

### Phase 5: Update prompts (15-30 min)

1. Read and execute `/prompts/update-prompts.md`
2. Refreshes prompt file frontmatter and guideline references

### Phase 6: Update reports (10-20 min)

1. Read and execute `/prompts/update-reports.md`
2. Updates report statuses based on current codebase state

### Phase 7: Update tasks (10-20 min)

1. Read and execute `/prompts/update-tasks.md`
2. Recalculates task completion and updates master registry

### Phase 8: Update triggers (15-30 min)

1. Read and execute `/prompts/update-triggers.md`
2. Syncs trigger registry — runs LAST because earlier phases may have created new triggers

### Phase 9: Update status (10-15 min)

1. Read and execute `/prompts/update-status.md`
2. Runs LAST — captures final counts after all updates are applied

---

## Execution: `update <domain>`

When the user says `update` with a qualifier (e.g., `update data`):

1. Read the matching prompt file from `/prompts/update-<domain>.md`
2. Execute that single update prompt
3. Suggest the next logical update as follow-up

**Special aliases:**
- `update routes` = also available as `fix routes`

---

## Summary Phase

After all 9 sub-triggers complete, report combined totals:

```
Update orchestrator complete.

Phase 1 — Data:       [X] components updated, [Y] data files created
Phase 2 — Routes:     [X] routes fixed, [Y] links repaired
Phase 3 — Sitemap:    [X] entries added, [Y] removed
Phase 4 — Guidelines: [X] guidelines refreshed
Phase 5 — Prompts:    [X] prompts updated
Phase 6 — Reports:    [X] statuses changed
Phase 7 — Tasks:      [X] completions recalculated
Phase 8 — Triggers:   [X] triggers registered, total [Y]
Phase 9 — Status:     All metrics current

→ Next: Say "archive" to clean up completed/superseded items.
→ Or: Say "audit" for a full compliance audit.
→ Or: Say "cleanup" for comprehensive project maintenance.
```

---

## Output Rules

- Each sub-trigger produces its own summary inline
- The orchestrator does NOT create a separate report
- If a sub-trigger finds nothing to update, report "0 changes" and move on
- If a sub-trigger fails or hits an error, log the error and continue to the next phase

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `update`
