# Retro Shop (Playpocket) Finalisation Orchestrator -- Audit + Report System

**Version:** 2.0
**Created:** 2026-03-15
**Type:** Orchestrator
**Trigger Word:** `audit retro` (if registered)
**Duration:** 3-5 hours (all 9 subprompts)
**Output:** Reports only. Tasks are created ONLY after all reports are written.

---

## Objective

Run a comprehensive 9-part audit of the Playpocket retro prototype, producing one report per subprompt, then (and only then) a single consolidated task list.

---

## Context

This repo was duplicated from an earlier prototype and contains mixed brand systems (legacy "funky/bento" palettes and inconsistent dark mode patterns). The goal is to finalise the Playpocket prototype with a consistent retro design system, WordPress-aligned tokens, solid routing, and stable UX.

### Current State (as of 2026-03-15)

- **Templates:** All 23 template conversions from funky to retro are complete
- **Token files created:** `/src/styles/tokens/color.ref.light.css`, `color.ref.dark.css`, `color.semantic.css`
- **Legacy overlap:** Old token files (`theme-variables.css`, `theme-dark-mode.css`) still exist and may conflict with the new canonical token files
- **Legacy v1 variables:** The v1 conversion prompt used `--retro-*` custom variables (e.g., `--retro-neon-cyan`, `--retro-bg-primary`) which are NOT WordPress-aligned and must be migrated to `--wp--preset--color--*`
- **Font drift:** v1 references `Press Start 2P` as display font; current system uses `Space Grotesk` for brand/display via `--wp--preset--font-family--brand`
- **Component guideline drift:** Known drifting guidelines include `Logo.md`, `Container.md`, `BrandLogoGrid.md`, `SectionPresets.md` (paths, props, and token names don't match current code)
- **Prior prompts:** `/prompts/redesign/PROMPT_RETRO_CONVERSION_v1.md` (template conversion playbook) and `/prompts/redesign/PROMPT_RETRO_CONVERSION_v2.md` (comprehensive scope + WebGL plan)

---

## Prerequisites

Before running this orchestrator:

1. Read: `/guidelines/Guidelines.md` (project rules)
2. Read: `/guidelines/design-tokens/Playpocket-Tokens.md` (canonical token map)
3. Read: `/guidelines/design-tokens/Dark-Mode.md` (mode switching rules)
4. Read: `/guidelines/PROMPT-TRIGGERS.md` (audit/report/task separation)
5. Verify: All design token guidelines are current and match implementation files
6. Update: Any guidelines that have drifted from the actual codebase

---

## Hard Rules (Non-Negotiable)

- **Before auditing:** update any relevant guidelines so they match the new token/mode requirements.
- **During audits:** do not invent requirements; cite existing guidelines.
- **Outputs:**
  - Each subprompt produces exactly one report at the required path.
  - Do NOT create task lists until ALL 9 subprompt reports exist.
- **No literals outside token files:** hex/rgb/hsl values are only allowed in token ref files (`color.ref.light.css`, `color.ref.dark.css`).
- **WordPress alignment:** all CSS must use `--wp--preset--*` or `--wp--custom--*` variables.

---

## Execution Order

Run subprompts in this order. Stop only if a subprompt reveals guideline gaps; fix guidelines, then re-run that subprompt.

| # | Subprompt | File | Est. Time |
|---|-----------|------|-----------|
| 1 | Tokens & Light/Dark Mode | `subprompts/01_audit_tokens_light-dark.md` | 30 min |
| 2 | Retro Design Consistency | `subprompts/02_audit_retro_consistency.md` | 30 min |
| 3 | WebGL Opportunities | `subprompts/03_audit_webgl_opportunities.md` | 20 min |
| 4 | Routing & 404s | `subprompts/04_audit_routing_404s.md` | 20 min |
| 5 | Layout Breakage | `subprompts/05_audit_layout_breakage.md` | 20 min |
| 6 | Functionality Flows | `subprompts/06_audit_functionality_flows.md` | 30 min |
| 7 | Dark Mode Switching | `subprompts/07_audit_dark_mode_switching.md` | 20 min |
| 8 | Accessibility | `subprompts/08_audit_accessibility.md` | 30 min |
| 9 | Performance | `subprompts/09_audit_performance.md` | 20 min |

---

## Report Output Contract

Each subprompt MUST write its report to:

```
/reports/retro-shop-audit-v2/<subprompt-slug>/YYYY-MM-DD_<subprompt-slug>.md
```

Example:
```
/reports/retro-shop-audit-v2/01_audit_tokens_light-dark/2026-03-15_01_audit_tokens_light-dark.md
```

Reports MUST use the template at `/guidelines/_templates/report-template.md`.

---

## After All Reports Exist

Only then: generate ONE consolidated task list at:

```
/tasks/retro-shop-audit-v2-task-list.md
```

This task list MUST:
- Reference findings from the reports (no speculation)
- Use priority ordering: P0 > P1 > P2 > P3
- Follow the template at `/guidelines/_templates/task-list-template.md`
- Group tasks by subprompt/domain

---

## Success Criteria

- [ ] All 9 reports exist at the correct paths
- [ ] Each report contains at least the minimum findings specified in its subprompt
- [ ] No report was created before its prerequisite guidelines were verified
- [ ] Consolidated task list references actual report findings
- [ ] Zero task lists created before all reports are complete

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/design-tokens/Playpocket-Tokens.md`
- `/guidelines/design-tokens/Colors.md`
- `/guidelines/design-tokens/Dark-Mode.md`
- `/guidelines/design-tokens/Typography.md`
- `/guidelines/design-tokens/Spacing.md`
- `/guidelines/PROMPT-TRIGGERS.md`
- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/REDUCED_MOTION_GUIDELINES.md`
- `/guidelines/development/modern-react-coding-standards.md`
- `/guidelines/development/css-optimization-guidelines.md`

---

**Prompt Version:** 2.0
**Last Updated:** 2026-03-15
**Status:** Ready to Execute