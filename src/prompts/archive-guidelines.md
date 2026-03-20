# Archive Guidelines — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `archive guidelines`
**Duration:** 15-30 minutes

---

## Objective

Review all guideline files under `/guidelines/`. Archive guidelines that are outdated, superseded, or no longer relevant to the current codebase. Ensure the Guidelines Hub (`Guidelines.md`) and Sub-Guidelines Directory stay accurate.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — current sub-guidelines directory (Section 7)
2. Read `/guidelines/WRITING_GUIDELINES.md` — documentation standards
3. Read `/guidelines/Core-Repository-Guidelines.md` — file organization rules

---

## Execution Steps

### Phase 1: Inventory all guideline files (5 min)

1. Recursively list every `.md` file under `/guidelines/` (excluding `/guidelines/archive/`)
2. For each guideline, extract:
   - **Title** (from first heading or frontmatter)
   - **Version / Updated date** (from frontmatter)
   - **Age** in days since last update
   - **Referenced by** — is this file mentioned in `Guidelines.md` Section 7?
   - **Line count** — flag if over 500 lines

### Phase 2: Classify each guideline (10 min)

For each guideline, apply this decision tree:

```
Is the guideline listed in Guidelines.md Section 7 (Sub-Guidelines Directory)?
  ├─ YES → Is the content still accurate for the current codebase?
  │    ├─ YES → KEEP
  │    └─ NO  → Has it been replaced by a newer guideline?
  │         ├─ YES → ARCHIVE (superseded)
  │         └─ NO  → FLAG (needs update, not archive — run `update guidelines` instead)
  └─ NO (not listed in hub)
       ├─ Is it a template file in `/guidelines/_templates/`?
       │    ├─ YES → KEEP (templates are always needed)
       │    └─ NO  → Does any prompt, report, or other guideline reference it?
       │         ├─ YES → REGISTER (add to Guidelines.md Section 7)
       │         └─ NO  → Is the content still relevant?
       │              ├─ YES → REGISTER
       │              └─ NO  → ARCHIVE (orphaned and outdated)
```

**Additional checks:**

- **Duplicate detection:** If two guidelines cover the same topic, keep the newer/more complete one, archive the other
- **Superseded markers:** If a guideline says "Supersedes: [other file]", verify the old one is archived
- **Migration artifacts:** Guidelines about completed migrations (e.g., Tailwind→WordPress, Lucide→Phosphor) that are historical only → ARCHIVE

**Classification markers:**

| Classification | Criteria | Action |
|---------------|----------|--------|
| **ARCHIVE** | Superseded, orphaned+outdated, or migration complete | Move to `/guidelines/archive/` |
| **KEEP** | Listed in hub, content accurate, actively referenced | Leave in place |
| **REGISTER** | Useful but missing from Guidelines.md Section 7 | Add to hub |
| **FLAG** | Listed in hub but content is stale | Report to user (needs `update guidelines`) |

### Phase 3: Verify before archiving (5 min)

For each guideline classified as **ARCHIVE**, verify:

1. **No active prompt references it** — search `/prompts/` for the guideline's path
2. **No other guideline cross-references it** — search `/guidelines/` for the filename
3. **Not in the protected files list** — check Guidelines.md Section 3
4. **If referenced by active prompts** — reclassify as KEEP, update the prompt instead

### Phase 4: Archive (3-5 min)

For each verified **ARCHIVE** guideline:

1. Create `/guidelines/archive/` directory if it doesn't exist
2. Move the file to `/guidelines/archive/`
3. Add an archive header:
   ```markdown
   > **Archived:** 2026-03-18 | **Reason:** [superseded/orphaned/migration-complete] | **Original location:** /guidelines/[original-path]
   ```

### Phase 5: Update Guidelines Hub (3-5 min)

1. Read `/guidelines/Guidelines.md`
2. For each archived guideline:
   - Remove the row from Section 7 tables
   - If the guideline was the only entry in a sub-section, remove the sub-section header too
3. For each **REGISTER** guideline:
   - Add a row to the appropriate Section 7 table
4. Update the version and date in frontmatter

### Phase 6: Summary (2 min)

Report to user:

```
Guideline archive complete.
- Reviewed: [X] guideline files
- Archived: [Y]
  - Superseded: [A]
  - Orphaned/outdated: [B]
  - Migration artifacts: [C]
- Registered: [R] (added to Guidelines.md hub)
- Kept: [K]
- Flagged: [F] (stale content, needs `update guidelines`)

[If flagged guidelines exist:]
Stale guidelines needing update:
- [filepath] — last updated [date] ([age] days ago)
```

---

## Archive Rules

1. **Never archive protected files** — see Guidelines.md Section 3
2. **Never archive `_templates/` files** — templates are always needed
3. **Never archive `Guidelines.md` itself** — it is the hub
4. **Never delete guidelines** — always move to `/guidelines/archive/`
5. **Always check for prompt references** before archiving — a guideline referenced by an active trigger prompt must not be archived
6. **Always update the Hub** after archiving — stale links in Section 7 are a P0 issue

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/WRITING_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `archive guidelines`
