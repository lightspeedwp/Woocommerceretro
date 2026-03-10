# Audit Prompt A7: Templates Completeness Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-templates-completeness-audit.md`  
**Task Output:** `/tasks/templates-remediation.md`

---

## Objective

Audit all 59+ templates for data wiring, funky styling status, BEM compliance, dark mode support, mobile responsiveness, and route connectivity.

## Pre-Read (Required)

```
/guidelines/overview-templates.md      — Template architecture overview
/guidelines/Guidelines.md             — Template standards
/App.tsx                               — Route definitions (first 100 lines for structure)
```

## Procedure

### Step 1: Template Inventory

List ALL files in `/src/app/components/templates/` (59+ files including `/blog/` subdir).

### Step 2: Route Cross-Reference

Read `/App.tsx` to extract all route definitions.
Map each route to its template component.
Identify:
- Templates without routes (dead templates)
- Routes without templates (broken routes)

### Step 3: Per-Template Analysis

For EACH template file, perform these checks:

#### 3a. Data Wiring
- Does the template import from `/src/app/data/`?
- Or does it contain hardcoded content strings?
- Score: DATA_DRIVEN / PARTIALLY_WIRED / HARDCODED

#### 3b. Layout Compliance
- Does it wrap content in `<Layout>` component?
- Score: COMPLIANT / NON_COMPLIANT

#### 3c. BEM Compliance
- Scan `className` props for:
  - WordPress BEM classes (`wc-block-*`, `wp-block-*`, `page-*__*`)
  - Tailwind utility classes (`flex`, `p-4`, `text-center`, `bg-white`, etc.)
  - Count of each type
- Score: FULL_BEM / MIXED / MOSTLY_TAILWIND

#### 3d. Guideline Status
- Does `/guidelines/templates/{name}.md` exist?
- Score: HAS_GUIDELINE / MISSING_GUIDELINE

#### 3e. Funky Status
- Does the template use any funky design elements?
  - Glassmorphism (`.funky-glass-panel`)
  - Glow cards (`.funky-card-glow`)
  - Orbs (`.funky-orb`)
  - Animations (`.funky-animate-*`)
  - Neon colours (`--wp--preset--color--neon-*`)
  - Gradient overlays
- Score: FUNKY (2+ elements) / PARTIAL (1 element) / PLAIN (0 elements)

#### 3f. Dark Mode
- Does the CSS reference `.dark` selectors?
- Are all text/bg colours using CSS variables?
- Score: PASS / PARTIAL / FAIL / UNKNOWN

#### 3g. Mobile
- Are there responsive breakpoints in the CSS?
- Do layouts collapse to single column?
- Score: PASS / PARTIAL / FAIL / UNKNOWN

### Step 4: Summary Statistics

Calculate:
- Total templates
- Data-driven vs hardcoded
- BEM compliant vs Tailwind
- Has guideline vs missing
- Funky vs plain
- Dark mode pass vs fail
- Mobile pass vs fail

### Step 5: Generate Outputs

Save comprehensive report and prioritised task list.
Task list should be grouped by:
1. Critical (broken routes, missing layout wrapper)
2. High (hardcoded content, mostly Tailwind)
3. Medium (partial BEM, partial funky)
4. Low (missing guidelines, minor polish)

## Success Criteria

- 100% of templates analysed
- Route connectivity verified
- Clear funky redesign priority order established
- Task list feeds directly into implementation phases
