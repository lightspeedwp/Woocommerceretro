# Archive Prompts — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `archive prompts`
**Duration:** 20-40 minutes

---

## Objective

Review all prompt files under `/prompts/`. Classify each as **general** (reusable) or **specific** (one-off/single-page). Generalize useful prompts and register them as triggers. Archive specific prompts that have already been executed.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/PROMPT_GENERATION_GUIDELINES.md` — prompt creation standards

---

## Execution Steps

### Phase 1: Inventory all prompt files (5 min)

1. Recursively list every `.md` file under `/prompts/`
2. Exclude:
   - `/prompts/README.md` (protected)
   - Files that ARE registered triggers (already have trigger words in `PROMPT-TRIGGERS.md`)
3. For each unregistered prompt, read the first 30 lines to extract:
   - **Title**
   - **Version / Created date**
   - **Status** (if present: COMPLETE, IN PROGRESS, etc.)
   - **Scope** (what does it target?)

### Phase 2: Classify each prompt (10 min)

For each unregistered prompt, classify using this decision tree:

```
Is the prompt scoped to a SPECIFIC page, component, or one-time task?
  ├─ YES → Has it been executed (Status: COMPLETE, or work is done in codebase)?
  │    ├─ YES → ARCHIVE
  │    └─ NO  → KEEP (mark as pending, do not archive unfinished work)
  └─ NO → Is the prompt generic/reusable enough to run again on different targets?
       ├─ YES → GENERALIZE & REGISTER
       └─ NO  → Is it an orchestrator sub-prompt?
            ├─ YES → KEEP (belongs to its orchestrator)
            └─ NO  → ARCHIVE (too specific, not reusable)
```

**Classification markers:**

| Classification | Criteria | Action |
|---------------|----------|--------|
| **ARCHIVE** | Specific to one page/component AND already executed | Move to `/prompts/archive/` |
| **GENERALIZE** | Useful pattern but has hardcoded targets | Update to accept parameters, add trigger word |
| **KEEP** | Active orchestrator sub-prompt, or pending unfinished work | Leave in place |
| **REGISTER** | Already generic but missing a trigger word | Add trigger word and register |

### Phase 3: Generalize reusable prompts (5-10 min)

For each prompt classified as **GENERALIZE**:

1. Replace hardcoded component/page names with parameter placeholders:
   - `ProductCard` → `[ComponentName]`
   - `/src/app/components/blocks/ProductCard.tsx` → `[target file path]`
2. Add frontmatter: `**Trigger Word:**`, `**Version:**`, `**Type:**`
3. Add a `## Parameters` section explaining what the user provides
4. Add a `## Guidelines Referenced` section (one-way references only)
5. Move to the appropriate `/prompts/` subdirectory if misplaced

### Phase 4: Archive completed prompts (5-10 min)

For each prompt classified as **ARCHIVE**:

1. Create `/prompts/archive/` directory if it doesn't exist
2. Move the file: `/prompts/[subdir]/file.md` → `/prompts/archive/file.md`
3. Add a header line to the archived file:
   ```markdown
   > **Archived:** 2026-03-18 | **Reason:** [specific/completed] | **Original location:** /prompts/[original-path]
   ```
4. If the prompt was in a subdirectory that is now empty, note the empty directory

### Phase 5: Register new triggers (5 min)

For each prompt classified as **REGISTER** or successfully **GENERALIZED**:

1. Run the `update triggers` logic:
   - Add row to `/guidelines/PROMPT-TRIGGERS.md` workflow table
   - Add row to `/guidelines/Guidelines.md` Section 6
   - Update Quick Reference Card
   - Update trigger count

### Phase 6: Summary (2 min)

Report to user:

```
Prompt archive complete.
- Reviewed: [X] unregistered prompts
- Archived: [Y] (specific/completed)
- Generalized: [Z] (now reusable with trigger words)
- Registered: [W] (existing generic prompts given trigger words)
- Kept: [K] (active sub-prompts or pending work)

Archived files: /prompts/archive/
```

---

## Archive Rules

1. **Never archive registered trigger prompts** — those are active system prompts
2. **Never archive orchestrator files** unless the entire orchestrator is complete AND all its sub-prompts are also archived
3. **Never delete prompts** — always move to `/prompts/archive/`
4. **Always verify completion** before archiving — check if work described in the prompt exists in the codebase
5. **Preserve the original directory structure** in the archive note so prompts can be restored

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/PROMPT_GENERATION_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `archive prompts`
