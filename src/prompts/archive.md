# Archive — Orchestrator Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Orchestrator
**Trigger Word:** `archive`
**Duration:** 45-90 minutes

---

## Objective

Run all four `archive *` sub-triggers in sequence. Each sub-trigger reviews its domain, generalizes reusable content, and archives completed/superseded/orphaned items.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/PROMPT-TRIGGERS.md` — verify all archive sub-triggers are registered

**Do NOT read individual archive prompt files yet** — each phase reads its own.

---

## Execution Order

Run sub-triggers in this fixed order (dependencies flow downward):

### Phase 1: Archive prompts (20-40 min)

1. Read and execute `/prompts/archive-prompts.md`
2. This MUST run first because it may generalize prompts and register new triggers
3. Wait for completion before proceeding

### Phase 2: Archive reports (15-30 min)

1. Read and execute `/prompts/archive-reports.md`
2. This runs second because archived prompts may have produced reports that are now archivable

### Phase 3: Archive tasks (15-30 min)

1. Read and execute `/prompts/archive-tasks.md`
2. This runs third because archived reports may have task lists that are now 100% complete

### Phase 4: Archive guidelines (15-30 min)

1. Read and execute `/prompts/archive-guidelines.md`
2. This runs last because archived prompts/reports may reference guidelines that are now orphaned

---

## Summary Phase

After all 4 sub-triggers complete, report combined totals:

```
Archive orchestrator complete.

Prompts:  [X] archived, [Y] generalized, [Z] registered
Reports:  [X] archived, [Y] flagged
Tasks:    [X] archived, [Y] flagged
Guidelines: [X] archived, [Y] registered in hub

Total items archived: [sum]
Total items generalized/registered: [sum]

→ Next: Say "update triggers" to sync the trigger registry.
→ Or: Say "cleanup" for full project maintenance.
```

---

## Output Rules

- Each sub-trigger produces its own summary inline (no separate report files)
- The orchestrator does NOT create a report — the individual sub-triggers handle their own output
- If any sub-trigger finds zero items to archive, report "0 archived" and move on

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `archive`
