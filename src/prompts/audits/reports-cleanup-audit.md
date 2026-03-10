# Audit Prompt A3: Reports Cleanup Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-reports-cleanup-audit.md`  
**Task Output:** `/tasks/reports-cleanup.md`

---

## Objective

Review all files in `/reports/`, identify reports older than one week (before February 14, 2026), verify compliance with reporting guidelines, and recommend cleanup actions.

## Pre-Read (Required)

```
/guidelines/REPORTING_GUIDELINES.md   — Reporting standards
/reports/README.md                    — Reports directory documentation
```

## Procedure

### Step 1: Full Inventory

Scan ALL files in `/reports/` recursively, including subdirectories:
- `/reports/architecture/`
- `/reports/audits/`
- `/reports/documentation/`
- `/reports/fixes/`
- `/reports/migration/`
- `/reports/refactoring/`
- `/reports/releases/`
- Any other subdirectories

Record for each file:
- Full path
- Date from filename (if present) or content header
- File size (approximate)

### Step 2: Age Assessment

Flag reports older than February 14, 2026 as archive candidates.
The cutoff is one week from today (February 21, 2026).

### Step 3: Naming Compliance

Check each file against the standard naming convention:
```
YYYY-MM-DD_report-type_brief-description.md
```

Flag non-compliant filenames.

### Step 4: Category Compliance

Check each file is in the correct subdirectory per REPORTING_GUIDELINES.md:
- Releases → `/reports/releases/`
- Architecture audits → `/reports/architecture/`
- Test results → `/reports/testing/`
- Performance audits → `/reports/performance/`
- etc.

### Step 5: Content Quality

For each report, verify:
- Has a date header
- Has a summary/executive summary
- Uses markdown formatting
- Is not a duplicate of another report

### Step 6: Generate Outputs

Create report with per-file analysis and recommended actions:
- **KEEP** — Current, well-formatted, useful
- **ARCHIVE** — Older than 1 week but has historical value
- **DELETE** — Superseded, duplicate, or empty
- **RENAME** — Non-compliant naming
- **MOVE** — Wrong category directory

## Success Criteria

- Every file in `/reports/` is catalogued
- Clear action recommendation for each file
- `/reports/README.md` update recommendations provided
