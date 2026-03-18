# Audit — Orchestrator Trigger Prompt

**Version:** 3.0
**Updated:** 2026-03-18
**Type:** Orchestrator
**Trigger Word:** `audit`
**Duration:** 60-90 minutes
**Supersedes:** v2.0

---

## Objective

Run all 16 audit sub-triggers in sequence. Each audit reads the codebase, compares against guidelines, and writes a report. **No task lists are created during auditing** — use `process reports` afterward.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — verify project rules are current
2. Verify referenced guidelines are not stale (Rule 4 of trigger system)

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/development/modern-react-coding-standards.md`
- `/guidelines/overview-icons.md`
- `/guidelines/overview-parts.md`
- `/guidelines/overview-patterns.md`

---

## Execution: Bare `audit`

When the user says `audit` with no qualifier, run ALL sub-audits in this order:

### Phase 1: Routes & Sitemap (5-10 min)

1. Run `audit routes` — read `/prompts/audits/audit-routes.md`
2. Run `audit sitemap` — read `/prompts/audits/audit-sitemap.md`

### Phase 2: Design System (10-15 min)

3. Run `audit tokens` — read `/prompts/audits/audit-tokens.md`
4. Run `audit css` — read `/prompts/audits/audit-css.md`
5. Run `audit styles` — read `/prompts/audits/audit-styles.md`

### Phase 3: Quality & Compliance (15-25 min)

6. Run `audit a11y` — read `/prompts/audits/audit-a11y.md`
7. Run `audit data` — read `/prompts/audits/audit-data.md`
8. Run `audit responsive` — read `/prompts/audits/audit-responsive.md`
9. Run `audit images` — read `/prompts/audits/audit-images.md`

### Phase 4: Icons (10-15 min)

10. Run `audit phosphor` — read `/prompts/audits/audit-phosphor.md`
11. Run `audit icons` — read `/prompts/audits/audit-icons.md`

### Phase 5: Template Parts (15-25 min)

12. Run `audit header` — read `/prompts/audits/audit-header.md`
13. Run `audit footer` — read `/prompts/audits/audit-footer.md`
14. Run `audit hero` — read `/prompts/audits/audit-hero.md`

### Phase 6: Documentation (5-10 min)

15. Run `audit guidelines` — read `/prompts/audits/audit-guidelines.md`

### Phase 7: Summary (2 min)

- List all 15 reports created with file paths (icons audit produces 2 reports from 2 sub-audits)
- Show total findings by priority (P0/P1/P2/P3)
- Suggest `process reports` as next step

---

## Execution: `audit <domain>`

When the user says `audit` with a qualifier (e.g., `audit css`):

1. Read the matching prompt file from `/prompts/audits/audit-<domain>.md`
2. Read and execute that single audit prompt
3. Write the single report
4. Suggest `process reports` or another `audit <domain>` as next step

**Do NOT read `/guidelines/PROMPT-TRIGGERS.md` to look up prompt paths** — use the direct path convention `/prompts/audits/audit-<domain>.md`.

---

## Output Rules

**Audits produce reports ONLY:**
- Report path: `/reports/audits/YYYY-MM-DD_[domain]-audit.md`
- Report status: `Status: Unprocessed`
- No task lists created
- No updates to `/tasks/task-list.md`

**After all audits, suggest:**
```
Audit complete. 15 reports written to /reports/audits/.
→ Next: Say "process reports" to convert findings into task lists.
→ Or: Say "audit && process reports" to do both in one step.
```

---

## Combo: `audit && process reports`

When the user says `audit && process reports`:

1. Execute all 15 audits (Phase 1-6 above)
2. Then execute `/prompts/process-reports.md`
3. Report combined summary

---

## Environment Notice

**You are running in Figma Make, NOT a local development environment.**

- Make code changes directly
- Verify via code inspection and file search
- Do not suggest terminal commands, npm install, or browser refresh

---

**Version:** 3.0
**Last Updated:** 2026-03-18
