# Archive Reports — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `archive reports`
**Duration:** 15-30 minutes

---

## Objective

Review all report files under `/reports/`. Identify reports that are fully processed, superseded, or older than 14 days with no remaining actionable findings. Archive them to `/reports/archive/` and update the master task list.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/REPORTING_GUIDELINES.md` — report standards

---

## Execution Steps

### Phase 1: Inventory all reports (5 min)

1. Recursively list every `.md` file under `/reports/` (excluding `/reports/archive/` and `/reports/README.md`)
2. For each report, extract:
   - **Date** from filename prefix (`YYYY-MM-DD_*`)
   - **Status** from frontmatter (`Unprocessed`, `Processed`, `Complete`, or missing)
   - **Domain** from parent directory (e.g., `audits`, `fixes`, `maintenance`)
   - **Age** in days from today (2026-03-18)

### Phase 2: Classify each report (5-10 min)

Apply this decision tree to each report:

```
Is the report Status: "Processed" or "Complete"?
  ├─ YES → Are ALL findings resolved in the codebase?
  │    ├─ YES → ARCHIVE (fully resolved)
  │    └─ NO  → KEEP (still has open work)
  └─ NO (Unprocessed or missing status)
       ├─ Is the report older than 14 days?
       │    ├─ YES → Has a NEWER report for the same domain been created?
       │    │    ├─ YES → ARCHIVE (superseded)
       │    │    └─ NO  → FLAG for review (old but only report for this domain)
       │    └─ NO → KEEP (recent, may need processing)
       └─ Is the report a duplicate of another report?
            ├─ YES → ARCHIVE the older duplicate
            └─ NO  → KEEP
```

**Classification markers:**

| Classification | Criteria | Action |
|---------------|----------|--------|
| **ARCHIVE** | Fully processed AND resolved, OR superseded by newer report | Move to `/reports/archive/YYYY-MM/` |
| **KEEP** | Has unresolved findings or is recent and unprocessed | Leave in place |
| **FLAG** | Old and unprocessed but no replacement exists | Report to user for decision |

### Phase 3: Verify before archiving (3-5 min)

For each report classified as **ARCHIVE**, verify:

1. **Processed reports** — check that corresponding task list entries are marked complete
2. **Superseded reports** — confirm the newer report covers the same scope
3. **Do NOT archive** if there are task list items still referencing this report as the source

### Phase 4: Archive (3-5 min)

For each verified **ARCHIVE** report:

1. Create target directory `/reports/archive/YYYY-MM/` (using the report's date month)
2. Move the file to the archive directory
3. Add an archive header to the file:
   ```markdown
   > **Archived:** 2026-03-18 | **Reason:** [resolved/superseded/duplicate] | **Original location:** /reports/[original-path]
   ```

### Phase 5: Update references (2-3 min)

1. Check `/tasks/task-list.md` for references to archived report paths — update paths or add archive notes
2. Check domain task lists for references — update if needed
3. If a `/reports/[subdirectory]/` is now empty, note it in the summary

### Phase 6: Summary (2 min)

Report to user:

```
Report archive complete.
- Reviewed: [X] reports across [Y] directories
- Archived: [Z] reports to /reports/archive/
  - Resolved: [A]
  - Superseded: [B]
  - Duplicates: [C]
- Kept: [K] (active/unprocessed)
- Flagged: [F] (old, need your decision)

[If flagged reports exist, list them with age and recommendation]
```

---

## Archive Rules

1. **Never archive unprocessed reports less than 14 days old** — they may still need `process reports`
2. **Never delete reports** — always move to `/reports/archive/YYYY-MM/`
3. **Always verify task list references** before archiving
4. **Preserve the domain context** in the archive note
5. **Check for superseded reports** — when two reports cover the same audit domain, the older one is typically superseded

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/REPORTING_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `archive reports`
