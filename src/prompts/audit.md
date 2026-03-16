# Audit — Orchestrator Trigger Prompt

**Version:** 2.0  
**Updated:** 2026-03-15  
**Type:** Orchestrator  
**Trigger Word:** `audit`  
**Duration:** 30-60 minutes  
**Supersedes:** v1.0

---

## Objective

Run all 9 audit sub-triggers in sequence. Each audit reads the codebase, compares against guidelines, and writes a report. **No task lists are created during auditing** — use `process reports` afterward.

---

## Prerequisites

1. Read `/guidelines/PROMPT-TRIGGERS.md` — understand trigger system
2. Read `/guidelines/Guidelines.md` — verify project rules are current

---

## Execution: Bare `audit`

When the user says `audit` with no qualifier, run ALL sub-audits in this order:

### Phase 1: Routes & Sitemap (5-10 min)

1. Run `audit routes` — read `/prompts/audits/audit-routes.md`
2. Run `audit sitemap` — read `/prompts/audits/audit-sitemap.md`

### Phase 2: Design System (5-10 min)

3. Run `audit tokens` — read `/prompts/audits/audit-tokens.md`
4. Run `audit css` — read `/prompts/audits/audit-css.md`

### Phase 3: Quality & Compliance (10-20 min)

5. Run `audit a11y` — read `/prompts/audits/audit-a11y.md`
6. Run `audit data` — read `/prompts/audits/audit-data.md`
7. Run `audit responsive` — read `/prompts/audits/audit-responsive.md`
8. Run `audit styles` — read `/prompts/audits/audit-styles.md`

### Phase 4: Documentation (5-10 min)

9. Run `audit guidelines` — read `/prompts/audits/audit-guidelines.md`

### Phase 5: Summary (2 min)

- List all 9 reports created with file paths
- Show total findings by priority (P0/P1/P2/P3)
- Suggest `process reports` as next step

---

## Execution: `audit <domain>`

When the user says `audit` with a qualifier (e.g., `audit css`):

1. Look up the matching prompt file in `/guidelines/PROMPT-TRIGGERS.md`
2. Read and execute that single audit prompt
3. Write the single report
4. Suggest `process reports` or another `audit <domain>` as next step

---

## Output Rules

**Audits produce reports ONLY:**
- Report path: `/reports/audits/YYYY-MM-DD_[domain]-audit.md`
- Report status: `Status: Unprocessed`
- No task lists created
- No updates to `/tasks/task-list.md`

**After all audits, suggest:**
```
Audit complete. 9 reports written to /reports/audits/.
→ Next: Say "process reports" to convert findings into task lists.
→ Or: Say "audit && process reports" to do both in one step.
```

---

## Combo: `audit && process reports`

When the user says `audit && process reports`:

1. Execute all 9 audits (Phase 1-4 above)
2. Then execute `/prompts/process-reports.md`
3. Report combined summary

---

## Environment Notice

**You are running in Figma Make, NOT a local development environment.**

- Make code changes directly
- Verify via code inspection and file search
- Do not suggest terminal commands, npm install, or browser refresh

---

**Version:** 2.0  
**Last Updated:** 2026-03-15
