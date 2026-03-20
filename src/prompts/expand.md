# Expand — Orchestrator Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Orchestrator
**Trigger Word:** `expand`
**Duration:** 90-180 minutes

---

## Objective

Run all `expand *` sub-triggers in sequence to perform a comprehensive project expansion analysis. This orchestrator identifies gaps across prompts, guidelines, functionality, pages, templates, and patterns — then generates a unified build plan. Each sub-trigger produces recommendations; no code is built until the user approves.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/PROMPT-TRIGGERS.md` — verify all expand sub-triggers are registered

**Do NOT read individual expand prompt files yet** — each phase reads its own.

---

## Execution Order

Run sub-triggers in this fixed order (analysis flows from infrastructure → content):

### Phase 1: Expand prompts (20-40 min)

1. Read and execute `/prompts/expand-prompts.md`
2. Identifies missing automation triggers and improvements to existing prompts
3. Creates new triggers if approved — these may be used by later phases

### Phase 2: Expand guidelines (20-40 min)

1. Read and execute `/prompts/expand-guidelines.md`
2. Identifies missing or vague guidelines that would support building new content
3. Creates/expands guidelines if approved

### Phase 3: Expand functionality (20-40 min)

1. Read and execute `/prompts/expand-functionality.md`
2. Identifies missing WooCommerce features, incomplete user flows, and feature gaps
3. Maps capabilities: ✅ EXISTS | ⚠️ PARTIAL | ❌ MISSING

### Phase 4: Expand patterns (15-30 min)

1. Read and execute `/prompts/expand-patterns.md`
2. Identifies missing reusable section patterns
3. Patterns are building blocks — must be identified before templates/pages

### Phase 5: Expand templates (15-30 min)

1. Read and execute `/prompts/expand-templates.md`
2. Identifies missing WordPress FSE template equivalents and variations
3. Templates compose patterns — depends on Phase 4

### Phase 6: Expand pages (15-30 min)

1. Read and execute `/prompts/expand-pages.md`
2. Identifies missing pages for a complete store
3. Pages use templates and patterns — depends on Phases 4 and 5

---

## Consolidation Phase

After all 6 sub-triggers complete, produce a unified expansion plan:

### Priority matrix

```
                    INFRASTRUCTURE          CONTENT
P0 (Essential)     [prompts/guidelines]    [patterns/templates/pages]
P1 (Expected)      [prompts/guidelines]    [patterns/templates/pages]
P2 (Enhanced)      [prompts/guidelines]    [patterns/templates/pages]
```

### Build order

The recommended execution order for approved items:

```
1. New prompts / guidelines  → run: expand prompts / expand guidelines
2. New blocks (if needed)    → run: continue
3. New data files            → run: update data
4. New patterns              → run: new patterns
5. New templates             → run: new templates
6. New pages                 → run: new pages
7. Route / sitemap sync      → run: update routes && update sitemap
8. Final audit               → run: audit
```

### Summary

```
Expansion analysis complete.

Phase 1 — Prompts:       [X] new triggers recommended
Phase 2 — Guidelines:    [X] guidelines to create/expand
Phase 3 — Functionality: [X] features ✅ | [Y] ⚠️ | [Z] ❌
Phase 4 — Patterns:      [X] existing | [Y] missing | [Z] recommended
Phase 5 — Templates:     [X] existing | [Y] missing | [Z] recommended
Phase 6 — Pages:         [X] existing | [Y] missing | [Z] recommended

Total new items to build: [N]
Estimated sessions to complete: [N]

→ Next: Say "continue" to start building from the top of the priority list.
→ Or: Say "new patterns" / "new templates" / "new pages" to scaffold a specific item.
→ Or: Say "archive" to clear completed items first.
```

---

## Output Rules

- Each sub-trigger produces recommendations inline — no separate report files
- The orchestrator does NOT build anything — it only analyses and plans
- All recommendations are presented for user approval before any code is written
- The build plan is added to `/tasks/task-list.md` for items the user approves
- Use the `new patterns` / `new templates` / `new pages` triggers to execute approved items

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `expand`
