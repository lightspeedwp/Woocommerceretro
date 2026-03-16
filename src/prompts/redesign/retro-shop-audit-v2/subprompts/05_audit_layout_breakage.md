# Audit -- Layout Problems / Broken Design / Missing Components

**What this is:** Subprompt audit (layout integrity)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/05_audit_layout_breakage/YYYY-MM-DD_05_audit_layout_breakage.md`

---

## Objective

Identify layout breakpoints, overflow issues, missing spacing, and component gaps across all templates and key sections.

---

## Prerequisites

1. Read: `/guidelines/design-tokens/Spacing.md`
2. Read: `/guidelines/styles/layout-grid.md`
3. Read: `/guidelines/responsive/breakpoints.md`
4. Read: `/guidelines/overview-sections.md`

---

## Execution Steps

### Phase 1: CSS Layout Scan

**Duration:** 10 min

- [ ] Search section CSS files for fixed `height`/`width` values that may cause overflow
- [ ] Identify `overflow: hidden` that may clip content unexpectedly
- [ ] Check for missing `max-width` on content containers
- [ ] Look for `position: absolute` without proper containment
- [ ] Verify spacing uses `--wp--preset--spacing--*` tokens (not px literals)

### Phase 2: Component Gap Analysis

**Duration:** 10 min

- [ ] Check for components referenced in templates but not yet created
- [ ] Verify layout primitives (Container, Section, Grid) are used consistently
- [ ] Check responsive behaviour at 4 breakpoints (320px, 768px, 1024px, 1920px)
- [ ] Identify pages with broken visual hierarchy (missing headings, orphaned sections)
- [ ] Check for empty or stub components that render nothing useful

---

## Output (in report)

- List of broken layouts by route/template and likely root cause
- Overflow issues with specific CSS properties causing them
- Missing components referenced but not implemented
- Fix recommendations using spacing tokens (no literals)
- Responsive breakpoint failures by page
- At least 5 breakpoint-related findings

---

## Done Criteria

- [ ] Report includes at least 5 breakpoint-related findings with remediation guidance
- [ ] Each finding includes the specific CSS property/value causing the issue
- [ ] Fix recommendations use only token-based values
- [ ] Missing component inventory is complete
- [ ] At least 3 templates are checked at mobile and desktop breakpoints

---

## Guidelines Referenced

- `/guidelines/design-tokens/Spacing.md`
- `/guidelines/styles/layout-grid.md`
- `/guidelines/responsive/breakpoints.md`
- `/guidelines/mobile/spacing.md`
