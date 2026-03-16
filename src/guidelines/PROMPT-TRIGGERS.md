# Prompt Trigger System

**Version:** 4.1
**Updated:** March 16, 2026
**Purpose:** Trigger words for workflow automation with audit/report/task separation
**Status:** Active
**Supersedes:** `/guidelines/PROMPT_TRIGGER_SYSTEM.md` (v3.1)

---

## Overview

Users trigger complex prompts using short keywords. The AI reads this file, locates the corresponding prompt, and executes it.

**Core Principle:** Audits produce reports. Reports produce task lists. Never skip the report step.

```
audit → reports only
process reports → task lists only
audit && process reports → both in sequence
```

---

## 1. Registered Triggers

### 1a. Workflow Triggers

| Trigger | Prompt File | Purpose | Duration |
|---------|-------------|---------|----------|
| `cleanup` | `/prompts/cleanup.md` | Project maintenance (files, imports, routes) | 20-30 min |
| `continue` | `/prompts/continue.md` | Execute next task from task list | 10-20 min |
| `optimize` | `/prompts/optimize.md` | Performance and file size optimization | 20-40 min |
| `status` | `/prompts/status.md` | Project status summary (no files created) | 5-10 min |
| `document` | `/prompts/document.md` | Create or update guideline documentation | 15-30 min |
| `update guidelines` | `/prompts/update-guidelines.md` | Refresh guidelines content and frontmatter | 15-30 min |
| `cleanup guidelines` | `/prompts/cleanup-guidelines.md` | Merge duplicates, delete outdated guidelines | 20-40 min |
| `process reports` | `/prompts/process-reports.md` | Convert unprocessed reports to domain task lists | 15-30 min |
| `fix routes` | `/prompts/routes.md` | Validate and repair all routes, links, and nav data | 20-40 min |

**Aliases:** `clean` = `cleanup`, `next` = `continue`, `routes` = `fix routes`

### 1b. Code Quality Triggers

| Trigger | Prompt File | Purpose | Duration |
|---------|-------------|---------|----------|
| `apply bem` | `/prompts/apply-bem.md` | Full BEM compliance audit + fix workflow across all `.tsx` files | 30-60 min |

**Behaviour:** Scans all `.tsx` components for 6 violation types (missing BEM blocks, inline styles, Tailwind classes, inconsistent naming, orphan classes, missing dark mode). Applies fixes directly using 100% CSS variables. Performs a token gap analysis and recommends `audit tokens` and/or `audit css` when the design system needs expansion. Verifies WCAG 2.2 AA/AAA contrast ratios for all new colour pairings. See `/guidelines/development/bem-methodology.md` for the full BEM naming convention and retro design rules.

**Aliases:** `bem` = `apply bem`, `fix bem` = `apply bem`

### 1c. Audit Triggers

**`audit`** (bare) runs ALL sub-audits in sequence. Each sub-audit can also be run individually.

| Trigger | Prompt File | Report Output | Domain |
|---------|-------------|---------------|--------|
| `audit` | Orchestrator -- runs all below | All 9 reports | All |
| `audit routes` | `/prompts/audits/audit-routes.md` | `/reports/audits/YYYY-MM-DD_routes-audit.md` | Routes |
| `audit sitemap` | `/prompts/audits/audit-sitemap.md` | `/reports/audits/YYYY-MM-DD_sitemap-audit.md` | Sitemap |
| `audit tokens` | `/prompts/audits/audit-tokens.md` | `/reports/audits/YYYY-MM-DD_tokens-audit.md` | Tokens |
| `audit css` | `/prompts/audits/audit-css.md` | `/reports/audits/YYYY-MM-DD_css-audit.md` | CSS |
| `audit a11y` | `/prompts/audits/audit-a11y.md` | `/reports/audits/YYYY-MM-DD_a11y-audit.md` | A11y |
| `audit data` | `/prompts/audits/audit-data.md` | `/reports/audits/YYYY-MM-DD_data-audit.md` | Data |
| `audit responsive` | `/prompts/audits/audit-responsive.md` | `/reports/audits/YYYY-MM-DD_responsive-audit.md` | Responsive |
| `audit styles` | `/prompts/audits/audit-styles.md` | `/reports/audits/YYYY-MM-DD_styles-audit.md` | Styles |
| `audit guidelines` | `/prompts/audits/audit-guidelines.md` | `/reports/audits/YYYY-MM-DD_guidelines-audit.md` | Guidelines |
| `audit images` | `/prompts/audits/audit-images.md` | `/reports/audits/YYYY-MM-DD_images-audit.md` | Images |

### 1d. Orchestrator Triggers

| Trigger | Prompt File | Report Output | Domain |
|---------|-------------|---------------|--------|
| `audit retro` | `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md` | 9 reports in `/reports/retro-shop-audit-v2/` | Retro Redesign |

### 1e. Combo Triggers

| Trigger | Expands To | Purpose |
|---------|-----------|---------|
| `audit && process reports` | Run all 9 audits, then convert reports to task lists | Full audit-to-task pipeline |
| `cleanup && continue` | Run cleanup, then execute next task | Maintenance + progress |

---

## 2. How It Works

1. User says a trigger (e.g., `audit css`)
2. AI reads this file and finds the matching prompt path
3. AI reads and executes the prompt file
4. AI reports completion and suggests the next trigger

**For combo triggers (`&&`):**
1. AI splits on `&&`
2. Executes left side fully (all phases)
3. Then executes right side fully
4. Reports combined summary

---

## 3. Audit System Architecture

### 3a. Separation of Concerns

```
+----------------------------------------------+
|  AUDIT PHASE (audit triggers)                |
|  Input: codebase + guidelines                |
|  Output: reports ONLY (never task lists)      |
|  Location: /reports/audits/                   |
+----------------------+-----------------------+
                       |
                       v
+----------------------------------------------+
|  PROCESS PHASE (process reports trigger)     |
|  Input: unprocessed reports                  |
|  Output: domain task lists + registry update |
|  Location: /tasks/{domain}-task-list.md      |
+----------------------------------------------+
```

**Why separate?**
- Audits can run independently without creating premature tasks
- Multiple audits can accumulate before processing
- Reports can be reviewed/validated before tasks are created
- Task lists are always based on complete report data
- Follows Rule 5: Reports Before Tasks

### 3b. Audit Execution Order

When `audit` (bare) is triggered, sub-audits run in this fixed order:

1. `audit routes` -- route/template alignment
2. `audit sitemap` -- sitemap component vs routes.ts sync
3. `audit tokens` -- design token usage and consistency
4. `audit css` -- CSS architecture and file health
5. `audit a11y` -- WCAG AA 2.2 compliance
6. `audit data` -- data file sizes and types
7. `audit responsive` -- responsive pattern compliance
8. `audit styles` -- hardcoded style detection
9. `audit guidelines` -- guideline freshness and compliance

Each writes one report. The `audit` orchestrator does NOT create task lists.

### 3c. Report Format

Every audit report follows this structure:

```markdown
# [Domain] Audit Report

**Date:** YYYY-MM-DD
**Trigger:** audit [domain]
**Status:** Unprocessed | Processed
**Guidelines Referenced:** [list]

## Summary
- Files scanned: [N]
- Violations found: [N]
- P0 Critical: [N]
- P1 High: [N]
- P2 Medium: [N]
- P3 Low: [N]

## Findings

### P0: Critical
[Findings with file paths, line numbers, rule references]

### P1: High
[...]

### P2: Medium
[...]

### P3: Low
[...]

## Recommendations
[Prioritized action items -- these become tasks during processing]
```

**Key field:** `Status: Unprocessed` -- flipped to `Processed` by `process reports`.

### 3d. Process Reports Execution

When `process reports` is triggered:

1. Scan `/reports/audits/` for reports with `Status: Unprocessed`
2. For each unprocessed report:
   a. Read findings and recommendations
   b. Create or update the matching `/tasks/{domain}-task-list.md`
   c. Register in `/tasks/task-list.md` Sub-Task List Registry
   d. Update report status to `Status: Processed`
3. Report summary of all tasks created

---

## 4. Audit Sub-Trigger Details

### audit routes

**Scope:** Compare templates in `/src/app/components/templates/` against routes in `/routes.ts`
**Checks:**
- Templates without routes (orphaned)
- Routes pointing to missing components
- Redirect chains (> 1 hop)
- Route naming convention compliance
- Dynamic route parameter consistency

**Report:** `/reports/audits/YYYY-MM-DD_routes-audit.md`
**Task Domain:** `routes`

---

### audit sitemap

**Scope:** Compare `/src/app/components/pages/Sitemap.tsx` ROUTE_SECTIONS against `/routes.ts`
**Checks:**
- Routes in routes.ts missing from Sitemap
- Routes in Sitemap not in routes.ts (stale entries)
- Route descriptions accuracy
- Section grouping logic
- Statistics accuracy (total/static/dynamic counts)
- Navigation data (`/src/app/data/navigation.ts`) link validity

**Report:** `/reports/audits/YYYY-MM-DD_sitemap-audit.md`
**Task Domain:** `routes`

---

### audit tokens

**Scope:** Design token files in `/src/styles/theme-variables.css` and `/src/styles/retro-theme.css`
**Checks:**
- Orphaned tokens (defined but never referenced)
- Missing dark mode overrides
- Hardcoded hex/rgb values in components that should use tokens
- Token naming convention (`--wp--preset--*` vs `--color-*`)
- Typography scale consistency
- Spacing scale gaps

**Report:** `/reports/audits/YYYY-MM-DD_tokens-audit.md`
**Task Domain:** `tokens`

---

### audit css

**Scope:** All CSS files in `/src/styles/` and `/styles/globals.css`
**Checks:**
- Files exceeding 200-line limit
- Broken @import paths in globals.css
- Unused CSS classes (defined but not referenced in components)
- BEM naming violations
- Tailwind utility classes in components (should be zero)
- Duplicate CSS rules across files
- Missing `@import` entries for new CSS files

**Report:** `/reports/audits/YYYY-MM-DD_css-audit.md`
**Task Domain:** `css`

---

### audit a11y

**Scope:** All interactive components in `/src/app/components/`
**Checks:**
- Missing `aria-label` on icon-only buttons
- Touch targets below 44x44px
- Color contrast violations (4.5:1 minimum)
- Missing `aria-expanded` on toggles
- Heading hierarchy skips (h1 to h3)
- Missing form label associations (`htmlFor`/`id`)
- Focus management in modals/drawers
- `prefers-reduced-motion` compliance
- Missing `alt` text on images
- Keyboard navigation gaps

**Report:** `/reports/audits/YYYY-MM-DD_a11y-audit.md`
**Task Domain:** `a11y`

---

### audit data

**Scope:** All data files in `/src/app/data/`
**Checks:**
- Files exceeding 250-line limit
- TypeScript interface compliance
- Mock data completeness (missing required fields)
- Data duplication across files
- Unused data exports
- Consistent ID/slug naming conventions

**Report:** `/reports/audits/YYYY-MM-DD_data-audit.md`
**Task Domain:** `data`

---

### audit responsive

**Scope:** Templates and patterns with responsive layout
**Checks:**
- Missing mobile breakpoint styles
- Fixed pixel widths that should be fluid
- Text that overflows on small screens
- Images without responsive sizing
- Touch target sizes on mobile
- Navigation patterns at mobile breakpoints

**Report:** `/reports/audits/YYYY-MM-DD_responsive-audit.md`
**Task Domain:** `responsive`

---

### audit styles

**Scope:** All `.tsx` component files
**Checks:**
- Inline `style={{}}` attributes (except animation/dynamic)
- Hardcoded hex/rgb color values in className or style
- Hardcoded pixel values that should use spacing tokens
- Tailwind utility classes (should be zero)
- Missing BEM class names (unstyled elements)
- `!important` usage

**Report:** `/reports/audits/YYYY-MM-DD_styles-audit.md`
**Task Domain:** `css`

---

### audit guidelines

**Scope:** All guideline files in `/guidelines/`
**Checks:**
- Guideline files without valid frontmatter (version, date)
- Guidelines older than 30 days without updates
- Cross-references to moved/deleted files
- Guidelines referencing obsolete component names
- Template compliance (uses correct template)
- Coverage gaps (components without guidelines)

**Report:** `/reports/audits/YYYY-MM-DD_guidelines-audit.md`
**Task Domain:** `guidelines`

---

### audit images

**Scope:** All image files in `/src/app/assets/images/`
**Checks:**
- Missing alt text
- Incorrect file format (should be webp)
- Large file sizes (over 100KB)
- Unused images
- Incorrect file paths

**Report:** `/reports/audits/YYYY-MM-DD_images-audit.md`
**Task Domain:** `images`

---

## 5. Workflow Rules

### Rule 1: Prompts Go in /prompts/

```
/prompts/cleanup.md                          (workflow trigger)
/prompts/apply-bem.md                        (code quality trigger)
/prompts/audits/audit-css.md                 (audit sub-trigger)
/prompts/process-reports.md                  (report processor)
```

### Rule 2: Reports Go in /reports/

```
/reports/audits/YYYY-MM-DD_css-audit.md      (audit report)
/reports/maintenance/YYYY-MM-DD_cleanup.md   (maintenance report)
```

### Rule 3: Task Lists Go in /tasks/

Created ONLY by `process reports` or workflow triggers -- never by audit triggers.

| Domain | Task List File | Created By |
|--------|---------------|-----------|
| `routes` | `/tasks/routes-task-list.md` | `process reports`, `cleanup` |
| `cleanup` | `/tasks/cleanup-task-list.md` | `cleanup` |
| `tokens` | `/tasks/tokens-task-list.md` | `process reports` |
| `release` | `/tasks/release-task-list.md` | `optimize` |
| `changelog` | `/tasks/changelog-task-list.md` | `document` |
| `reports` | `/tasks/reports-task-list.md` | `cleanup` |
| `status` | `/tasks/status-task-list.md` | `status` |
| `data` | `/tasks/data-task-list.md` | `process reports` |
| `responsive` | `/tasks/responsive-task-list.md` | `process reports` |
| `a11y` | `/tasks/a11y-task-list.md` | `process reports` |
| `css` | `/tasks/css-task-list.md` | `process reports`, `optimize` |
| `patterns` | `/tasks/patterns-task-list.md` | `process reports`, `document` |
| `blocks` | `/tasks/blocks-task-list.md` | `process reports`, `document` |
| `guidelines` | `/tasks/guidelines-task-list.md` | `process reports` |

These files are **protected** -- never delete them. Mark as `Status: Complete` when done.

### Rule 4: Guidelines Updated Before Auditing

Before any audit: verify referenced guidelines are current. Update stale guidelines FIRST.

### Rule 5: Reports Before Tasks

```
audit → reports ONLY
process reports → task lists ONLY
```

Never create task lists during an audit trigger. The AI needs the complete picture from all reports to create accurate, prioritized tasks.

### Rule 6: Keep Files Small

| File Type | Max Lines | Action When Over |
|-----------|-----------|-----------------|
| `.tsx` component | 300 | Split into sub-components |
| `.css` stylesheet | 200 | Split by BEM block |
| `.ts` data file | 250 | Split by data category |
| `.md` guideline | 500 | Split into sub-guidelines |
| `.md` report | 400 | Summarize; move details to appendix |
| `.md` task list | 300 | Archive completed tasks |

### Rule 7: Trigger Execution Flow

**Audit triggers:**
```
1. Read prompt file
2. Read relevant guidelines (verify current)
3. Scan codebase in scope
4. Record findings with priorities
5. Write report to /reports/audits/
6. Report summary to user (do NOT create task lists)
```

**Workflow triggers (cleanup, continue, optimize, etc.):**
```
1. Read prompt file
2. Execute work
3. Write report if significant
4. Update relevant task lists
5. Register in /tasks/task-list.md
6. Report summary to user
```

**Code quality triggers (apply bem):**
```
1. Read prompt file
2. Read required guidelines (verify current)
3. Scan CSS inventory and token definitions
4. Scan all .tsx components for violations
5. Apply fixes directly (CSS + TSX edits)
6. Perform token gap analysis
7. Report summary with follow-up trigger recommendations
```

### Rule 8: Master Task List Registration

After creating or updating a domain task list, update the **Sub-Task List Registry** in `/tasks/task-list.md`.

---

## 6. Root Directory Rules

Only these `.md` files are allowed in the project root:

- `ATTRIBUTIONS.md`
- `README.md`
- `CHANGELOG.md`

All other `.md` files go in designated folders.

---

## 7. Protected Files

Never delete:

```
/guidelines/Guidelines.md
/guidelines/PROMPT-TRIGGERS.md    (this file)
/tasks/task-list.md
/tasks/*-task-list.md
/README.md
/CHANGELOG.md
/ATTRIBUTIONS.md
/src/styles/**/*.css
/src/app/components/figma/
```

---

## 8. Adding New Triggers

1. Create prompt file in `/prompts/` (or `/prompts/audits/` for audit sub-triggers)
2. Add a row to the appropriate trigger table in this file
3. Test the trigger
4. Update `/guidelines/Guidelines.md` workflow commands section

**Requirements:**
- Lowercase keywords
- Descriptive action
- Not already registered
- Has corresponding prompt file

---

## 9. Quick Reference Card

```
AUDITING:
  audit                    → Run all 9 audits (reports only)
  audit css                → CSS architecture audit (report only)
  audit a11y               → Accessibility audit (report only)
  audit tokens             → Design token audit (report only)
  audit routes             → Route/template audit (report only)
  audit sitemap            → Sitemap sync audit (report only)
  audit data               → Data file audit (report only)
  audit responsive         → Responsive pattern audit (report only)
  audit styles             → Hardcoded styles audit (report only)
  audit guidelines         → Guideline compliance audit (report only)
  audit images             → Image file audit (report only)

PROCESSING:
  process reports          → Convert unprocessed reports → task lists

COMBOS:
  audit && process reports → Full pipeline: audit everything → create tasks
  cleanup && continue      → Maintenance → next task

WORKFLOW:
  cleanup                  → Project maintenance
  continue                 → Execute next task
  optimize                 → Performance scan
  status                   → Status summary (no file output)
  document                 → Create/update documentation
  update guidelines        → Refresh guideline frontmatter
  cleanup guidelines       → Merge/delete outdated guidelines
  fix routes               → Validate and repair all routes, links, and nav data

CODE QUALITY:
  apply bem                → Full BEM compliance audit + fix (direct code fixes)
```

---

**Version:** 4.1
**Last Updated:** March 16, 2026
**Total Triggers:** 13 (9 workflow + 1 code quality + 9 audit + 1 orchestrator + 2 combo = 22 including sub-audits)
**Lines:** ~400
**Supersedes:** `/guidelines/PROMPT_TRIGGER_SYSTEM.md` v3.1