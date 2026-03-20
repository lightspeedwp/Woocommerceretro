# Update Reports — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update reports`
**Duration:** 10-20 minutes

---

## Objective

Review all active report files. Update their statuses based on current codebase state — mark resolved findings as complete, update `Status:` fields, and ensure report metadata is accurate.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand project structure
2. Read `/guidelines/REPORTING_GUIDELINES.md` — report format standards

---

## Execution Steps

### Phase 1: Inventory active reports (3 min)

1. Recursively list all `.md` files under `/reports/` (excluding `/reports/archive/`)
2. For each report, extract:
   - **Date** from filename
   - **Status** from frontmatter (`Unprocessed`, `Processed`, `Complete`)
   - **Domain** from parent directory
   - **Finding count** by priority (P0/P1/P2/P3)

### Phase 2: Verify findings against codebase (5-10 min)

For each report with `Status: Unprocessed` or `Status: Processed`:

1. Read the findings section
2. For each P0/P1 finding, verify whether the issue still exists:
   - Check the file path mentioned in the finding
   - Check if the code pattern described is still present
   - If resolved, note it
3. For P2/P3 findings, spot-check 2-3 items

### Phase 3: Update report statuses (3-5 min)

Based on verification results:

| Current Status | Findings Resolved? | New Status |
|---------------|-------------------|------------|
| `Unprocessed` | All resolved | `Complete` |
| `Unprocessed` | Partially resolved | Keep `Unprocessed` (add resolution notes) |
| `Unprocessed` | None resolved | Keep `Unprocessed` |
| `Processed` | All resolved | `Complete` |
| `Processed` | Partially resolved | Keep `Processed` (update counts) |

For reports updated to `Complete`:
- Add a resolution note: `**Resolved:** 2026-03-18 — All findings addressed`
- These become candidates for `archive reports`

### Phase 4: Update finding counts (2-3 min)

For each report with resolved findings:
1. Update the summary section counts
2. Mark resolved findings inline: ~~strikethrough~~ or `✅ Resolved`
3. Recalculate totals

### Phase 5: Summary (2 min)

```
Report update complete.
- Active reports reviewed: [X]
- Status changes: [Y]
  - Unprocessed → Complete: [A]
  - Processed → Complete: [B]
- Findings verified resolved: [Z] across [W] reports
- Reports ready for archival: [N] (run "archive reports")

→ Next: Say "archive reports" to archive completed reports.
→ Or: Say "process reports" to create task lists from unprocessed reports.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/REPORTING_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `update reports`
