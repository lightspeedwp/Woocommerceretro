# Guidelines Templates

**Purpose:** Standard templates for all project documentation.
**Location:** `/guidelines/_templates/`
**Updated:** 2026-03-15

---

## Available Templates

| Template File | Use For | Example Output |
|---------------|---------|----------------|
| `component-guideline.md` | Block, Pattern, Part component docs | `/guidelines/blocks/ProductCard.md` |
| `design-token-guideline.md` | Design system token docs | `/guidelines/design-tokens/Colors.md` |
| `general-guideline.md` | Process, workflow, standard docs | `/guidelines/WRITING_GUIDELINES.md` |
| `prompt-template.md` | New AI prompt files | `/prompts/audit.md` |
| `report-template.md` | Audit reports, fix reports | `/reports/audits/YYYY-MM-DD_*.md` |
| `task-list-template.md` | Initiative-specific task lists | `/tasks/*-task-list.md` |
| `CHANGELOG-template.md` | Project changelog | `/CHANGELOG.md` |
| `README-template.md` | Project and directory READMEs | `/README.md` |
| `ATTRIBUTIONS-template.md` | License attributions | `/ATTRIBUTIONS.md` |

---

## How to Use

1. Identify what you are creating (component doc, report, task list, etc.)
2. Copy the matching template from `/guidelines/_templates/`
3. Replace all `[PLACEHOLDER]` values with real content
4. Fill all sections marked `(REQUIRED)`
5. Save to the correct directory (see table above)
6. Keep file under the max line limit (see `/guidelines/PROMPT_TRIGGER_SYSTEM.md` Rule 6)

---

## Decision Tree

**Creating documentation for a component?** Use `component-guideline.md`

**Creating documentation for colors, spacing, or typography?** Use `design-token-guideline.md`

**Creating a process or workflow guideline?** Use `general-guideline.md`

**Creating an AI prompt?** Use `prompt-template.md`

**Writing an audit or fix report?** Use `report-template.md`

**Creating a task list from a report?** Use `task-list-template.md`

**Setting up a new project README?** Use `README-template.md`

**Setting up a changelog?** Use `CHANGELOG-template.md`
