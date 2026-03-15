# Audit — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-15
**Type:** Single Prompt
**Trigger Word:** `audit`
**Duration:** 30-60 minutes

---

## Objective

Run a targeted compliance audit against project guidelines, produce a report, then generate a task list from findings.

---

## Prerequisites — Guidelines First

Before auditing, verify that all referenced guidelines are current:

1. Read `/guidelines/Guidelines.md` — check version and date
2. Read the specific guideline for the audit target (e.g., `/guidelines/blocks/ProductCard.md`)
3. If the guideline is outdated or missing, UPDATE the guideline FIRST
4. Only proceed to auditing after guidelines are confirmed current

---

## Execution Steps

### Phase 1: Scope Selection (2 min)

- [ ] Ask user what to audit (or auto-detect from context)
- [ ] Options: `components`, `css`, `accessibility`, `routes`, `imports`, `dark-mode`, `all`
- [ ] Read relevant guidelines for the selected scope

### Phase 2: Guideline Verification (5 min)

- [ ] Confirm all referenced guidelines exist and are up to date
- [ ] If any guideline needs updating, update it now before auditing
- [ ] Document which guidelines are being audited against

### Phase 3: Execute Audit (15-40 min)

- [ ] Scan files in scope
- [ ] Compare against guideline rules
- [ ] Record violations with file path, line, and rule reference
- [ ] Classify each violation: P0 (critical), P1 (high), P2 (medium), P3 (low)

### Phase 4: Generate Report (5 min)

- [ ] Create report at `/reports/audits/YYYY-MM-DD_[scope]-audit.md`
- [ ] Use template: `/guidelines/_templates/report-template.md`
- [ ] Include violation count, file list, and priority breakdown

### Phase 5: Generate Task List (5 min)

- [ ] Only after the report is complete
- [ ] Create task list at `/tasks/[scope]-audit-task-list.md`
- [ ] Use template: `/guidelines/_templates/task-list-template.md`
- [ ] Add summary entry to `/tasks/task-list.md`

---

## Success Criteria

- [ ] Guidelines verified current before auditing
- [ ] Report created in `/reports/audits/`
- [ ] Task list created in `/tasks/` (only after report is complete)
- [ ] Summary added to master task list
- [ ] Zero false positives (all violations reference a specific guideline rule)

---

## Output

**Report:** `/reports/audits/YYYY-MM-DD_[scope]-audit.md`
**Task list:** `/tasks/[scope]-audit-task-list.md`
