# Prompt Trigger System

**Version:** 3.0
**Updated:** March 15, 2026
**Purpose:** Single-word prompt triggers for workflow automation
**Status:** Active (8 triggers registered)

---

## Overview

Users can trigger complex prompts using single words instead of providing full instructions. The AI reads this file, locates the corresponding prompt, and executes it.

---

## Registered Trigger Words

| Trigger | Prompt File | Purpose | Duration |
|---------|-------------|---------|----------|
| `cleanup` | `/prompts/cleanup.md` | Project maintenance (files, imports, routes) | 20-30 min |
| `continue` | `/prompts/continue.md` | Execute next task from task list | 10-20 min |
| `audit` | `/prompts/audit.md` | Compliance audit against guidelines | 30-60 min |
| `optimize` | `/prompts/optimize.md` | Performance and file size optimization | 20-40 min |
| `status` | `/prompts/status.md` | Project status summary (no files created) | 5-10 min |
| `document` | `/prompts/document.md` | Create or update guideline documentation | 15-30 min |
| `update guidelines` | `/prompts/update-guidelines.md` | Refresh guidelines content and frontmatter | 15-30 min |
| `cleanup guidelines` | `/prompts/cleanup-guidelines.md` | Merge duplicates, delete outdated guidelines | 20-40 min |

**Aliases:** `clean` = `cleanup`, `next` = `continue`

---

## How It Works

1. User says a trigger word (e.g., `audit`)
2. AI reads this file and finds the matching prompt path
3. AI reads and executes the full prompt file
4. AI reports completion and suggests the next trigger

---

## Execution Rules for AI

When a trigger word is recognized:

1. Read the full prompt file from the path listed above
2. Follow every checklist item in order
3. Do not skip phases
4. Create outputs only in designated folders (see Workflow Rules below)
5. Report a summary when complete
6. Suggest the next logical trigger word

---

## Workflow Rules

These rules apply to all triggered prompts and to manually created prompts.

### Rule 1: Prompts Go in /prompts/

**Single prompts:** Save in the root of `/prompts/` or in a category subfolder.

```
/prompts/audit.md                          (single prompt)
/prompts/audits/css-architecture-audit.md  (categorized single prompt)
```

**Orchestrator prompts:** Create a dedicated subfolder inside `/prompts/` containing the orchestrator and its sub-prompts.

```
/prompts/retro-redesign/                   (orchestrator folder)
  orchestrator.md                          (main prompt)
  sub-prompt-phase-1.md                    (sub-prompt 1)
  sub-prompt-phase-2.md                    (sub-prompt 2)
```

### Rule 2: Reports Go in /reports/

**Single prompt reports:** Save in the root of `/reports/` or in a category subfolder.

```
/reports/audits/YYYY-MM-DD_css-audit.md    (single prompt report)
```

**Orchestrator reports:** Create a matching subfolder inside `/reports/` with one report per sub-prompt.

```
/reports/retro-redesign/                   (orchestrator folder)
  YYYY-MM-DD_phase-1-report.md             (sub-prompt 1 report)
  YYYY-MM-DD_phase-2-report.md             (sub-prompt 2 report)
```

### Rule 3: Task Lists Go in /tasks/

Task lists are created only AFTER all reports are complete.

**Format:** `/tasks/{initiative-name}-task-list.md`

```
/tasks/css-audit-task-list.md
/tasks/retro-redesign-task-list.md
```

After creating the specific task list, add a summary entry to `/tasks/task-list.md`.

### Rule 4: Guidelines Updated Before Auditing

Before running any audit prompt:

1. Identify all guidelines the audit will reference
2. Verify each guideline is current (check version, date, content)
3. If a guideline is outdated, update it FIRST
4. Then run the audit against the updated guideline
5. This ensures all violations are real, not caused by stale guidelines

### Rule 5: Reports Before Tasks

The correct sequence is always:

```
1. Update guidelines (if needed)
2. Run prompt / execute audit
3. Create report with findings
4. ONLY THEN create task list from report findings
```

Never create a task list before the audit report is complete. The AI needs the full picture from the report to create accurate, prioritized tasks.

### Rule 6: Keep Files Small

| File Type | Max Lines | Action When Over |
|-----------|-----------|-----------------|
| `.tsx` component | 300 | Split into sub-components |
| `.css` stylesheet | 200 | Split by BEM block or section |
| `.ts` data file | 250 | Split by data category |
| `.md` guideline | 500 | Split into sub-guideline files |
| `.md` report | 400 | Summarize; move details to appendix file |
| `.md` task list | 300 | Archive completed tasks to `/tasks/archive/` |

Large files degrade AI processing quality. Always prefer more smaller files over fewer large files.

---

## Root Directory Rules

Only these `.md` files are allowed in the project root (`/`):

- `ATTRIBUTIONS.md`
- `README.md`
- `CHANGELOG.md`

All other `.md` files must be in their designated folders: `/guidelines/`, `/reports/`, `/tasks/`, `/prompts/`, `/docs/`.

---

## Protected Files

These files must never be deleted:

```
/guidelines/Guidelines.md
/tasks/task-list.md
/README.md
/CHANGELOG.md
/ATTRIBUTIONS.md
/src/styles/**/*.css         (all 280+ CSS files)
/src/app/components/figma/   (system components)
```

---

## Templates

All templates are in `/guidelines/_templates/`:

| Template | Use For |
|----------|---------|
| `component-guideline.md` | Block, pattern, part guidelines |
| `design-token-guideline.md` | Design system token guidelines |
| `general-guideline.md` | Process, workflow, standard guidelines |
| `prompt-template.md` | New prompt files |
| `report-template.md` | Audit and fix reports |
| `task-list-template.md` | Initiative task lists |
| `CHANGELOG-template.md` | Changelog format |
| `README-template.md` | README format |
| `ATTRIBUTIONS-template.md` | Attributions format |

---

## Adding New Triggers

1. Create the prompt file in `/prompts/`
2. Add a row to the trigger table in this file
3. Test the trigger word
4. Update `/guidelines/Guidelines.md` Quick Workflow Commands section

**Requirements for trigger words:**
- Single word, lowercase
- Descriptive action verb
- Not already registered
- Has a corresponding prompt file in `/prompts/`

---

**Last Updated:** March 15, 2026