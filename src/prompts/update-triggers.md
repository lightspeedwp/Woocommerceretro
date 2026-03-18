# Update Triggers — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update triggers`
**Duration:** 15-30 minutes

---

## Objective

Synchronise the trigger registry (`/guidelines/PROMPT-TRIGGERS.md`) and the main guidelines hub (`/guidelines/Guidelines.md`) with the actual prompt files on disk. Detect new prompts without triggers, stale triggers pointing to deleted prompts, and version/date drift.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — current trigger tables (Section 6)
2. Read `/guidelines/PROMPT-TRIGGERS.md` — full trigger registry

**Do NOT read individual prompt files yet** — Phase 1 discovers them.

---

## Execution Steps

### Phase 1: Inventory (5 min)

1. List all `.md` files in `/prompts/` (recursive)
2. For each file, extract:
   - **Trigger word** (from `**Trigger:**` or `**Trigger Word:**` frontmatter)
   - **Version** (from `**Version:**` frontmatter)
   - **Type** (workflow / audit / code-quality / orchestrator)
   - **File path**
3. Build a lookup table: `trigger → prompt path`

### Phase 2: Cross-reference (5 min)

Compare the disk inventory against the two registry files:

**Check 1 — Missing triggers:**
- Prompt file exists in `/prompts/` but has no matching row in `PROMPT-TRIGGERS.md`
- Action: Add a new row to the correct trigger table

**Check 2 — Stale triggers:**
- Row exists in `PROMPT-TRIGGERS.md` but prompt file is missing from disk
- Action: Remove the row and note in change log

**Check 3 — Path mismatches:**
- Trigger row exists but points to wrong file path
- Action: Correct the path

**Check 4 — Version drift:**
- Prompt file version doesn't match the version implied by `PROMPT-TRIGGERS.md` header
- Action: Update version numbers

**Check 5 — Guidelines.md sync:**
- Trigger exists in `PROMPT-TRIGGERS.md` but missing from `Guidelines.md` Section 6 tables
- Action: Add to Guidelines.md

**Check 6 — Quick Reference Card:**
- Verify the Quick Reference Card in `PROMPT-TRIGGERS.md` Section 9 lists all triggers
- Action: Add missing entries

### Phase 3: Circular reference scan (5 min)

For every prompt file, trace its references:

1. Extract all file paths mentioned in the prompt (guidelines, other prompts, data files)
2. Build a directed graph: `prompt → references`
3. Check for cycles: If prompt A references prompt B, and prompt B references prompt A, flag as circular

**Rules:**
- Prompts MAY reference guidelines (one-way: prompt → guideline). This is expected.
- Prompts MAY suggest follow-up triggers by name (e.g., "consider running `audit css`"). This is a weak reference, not a hard dependency, and is allowed.
- Prompts MUST NOT import/read another prompt that reads them back (hard circular dependency).
- The orchestrator (`audit.md`) MAY list sub-audit prompt paths — this is a parent→child relationship, not circular.
- `PROMPT-TRIGGERS.md` is a registry (lookup table), not a prompt — prompts should not read it to discover their own path.

**If circular reference found:**
- Document the cycle
- Recommend which reference to remove
- Apply the fix

### Phase 4: Update files (5-10 min)

1. Update `PROMPT-TRIGGERS.md`:
   - Add/remove rows in trigger tables
   - Update version number and date in header and footer
   - Update total trigger count
   - Update Quick Reference Card
   - Update audit execution order if new audits were added

2. Update `Guidelines.md`:
   - Sync Section 6 trigger tables with `PROMPT-TRIGGERS.md`
   - Verify Section 7 sub-guidelines directory is current

3. Update `audit.md` (orchestrator):
   - If new audit sub-triggers were added, add them to the execution phases
   - Update the total audit count

### Phase 5: Verify (2 min)

- Re-read both registry files
- Confirm every trigger has a valid prompt file
- Confirm every prompt file has a trigger entry
- Confirm zero circular references
- Report summary to user

---

## Output

No report file created. Changes are applied directly to:
- `/guidelines/PROMPT-TRIGGERS.md`
- `/guidelines/Guidelines.md`
- `/prompts/audit.md` (if new audits found)

**After completion, suggest:**
```
Trigger registry updated. [X] triggers registered, [Y] added, [Z] removed.
→ Next: Say "audit guidelines" to verify all guideline cross-references.
→ Or: Say "status" for a project overview.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/Core-Repository-Guidelines.md`
- `/guidelines/WRITING_GUIDELINES.md`

---

**Version:** 1.0
**Trigger Word:** `update triggers`
