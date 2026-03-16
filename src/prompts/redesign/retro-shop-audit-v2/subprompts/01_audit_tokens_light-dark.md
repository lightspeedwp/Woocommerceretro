# Audit -- Light/Dark Mode Tokens + WordPress Variable Alignment

**What this is:** Subprompt audit (tokens + mode switching)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/01_audit_tokens_light-dark/YYYY-MM-DD_01_audit_tokens_light-dark.md`

---

## Objective

Verify that all UI styling uses WordPress-aligned CSS variables, that light/dark mode use one consistent switch pattern, and that token docs match implementation files.

---

## Prerequisites

1. Read: `/guidelines/design-tokens/Playpocket-Tokens.md`
2. Read: `/guidelines/design-tokens/Dark-Mode.md`
3. Read: `/guidelines/design-tokens/Colors.md`
4. Verify: Token guideline lists the canonical implementation files

---

## Execution Steps

### Phase 1: Token Source Audit

**Duration:** 15 min

- [ ] Identify all files that contain literal colour values (hex/rgb/hsl)
- [ ] Classify each as: token ref file (allowed) or non-token file (violation)
- [ ] Verify the new canonical token files exist and are correctly structured:
  - `/src/styles/tokens/color.ref.light.css` (`:root` with `--wp--custom--color--*` literals)
  - `/src/styles/tokens/color.ref.dark.css` (`.dark` with `--wp--custom--color--*` literals)
  - `/src/styles/tokens/color.semantic.css` (`:root` mapping `--wp--preset--color--*` to `var(--wp--custom--color--*)`, zero literals)
- [ ] Check for duplicate/conflicting token definitions in legacy files: `theme-variables.css`, `theme-dark-mode.css`, `theme-light-mode.css`
- [ ] Search for legacy v1 `--retro-*` variables (e.g., `--retro-neon-cyan`, `--retro-bg-primary`, `--retro-text-primary`) that must be migrated to `--wp--preset--color--*`
- [ ] Verify the `.dark` class toggle is the single mode-switch pattern (no `@media (prefers-color-scheme: dark)` overrides competing)
- [ ] Check `globals.css` entrypoint for correct `@import` order of token files

### Phase 2: Alignment Check

**Duration:** 15 min

- [ ] Compare the Playpocket semantic token map (from `/guidelines/design-tokens/Playpocket-Tokens.md`) against actual CSS variable definitions in `/src/styles/tokens/`
- [ ] Identify missing tokens, renamed tokens, or tokens with wrong values
- [ ] Check section CSS files for hard-coded colours (gradients, backgrounds, borders)
- [ ] Check component `.tsx` files for inline `style={{ color: '#...' }}` usage
- [ ] Verify token docs list correct file paths (not legacy `src/src/styles/` paths)
- [ ] Check for font-family literals outside typography token files (legacy `Press Start 2P` references vs current `Space Grotesk`)

---

## Output (in report)

- Current token source-of-truth file(s) and any conflicts between them
- Table of violations: file, literal usage, recommended token replacement
- Recommended minimal refactor plan: consolidate to 1 token system and 1 mode switch
- Explicit list of all Playpocket semantic tokens with current vs expected values
- Gap analysis: tokens defined in guideline but missing from CSS, and vice versa

---

## Report Format

Use `/guidelines/_templates/report-template.md`. Findings table MUST include:

| Severity | File | Problem | Expected (guideline rule) | Fix |
|----------|------|---------|---------------------------|-----|

---

## Done Criteria

- [ ] Report includes at least 10 concrete findings with file-level evidence
- [ ] A clear "single source of truth" recommendation is stated
- [ ] Every violation links to a specific guideline rule
- [ ] Token map comparison table is complete (all 20+ semantic tokens checked)

---

## Guidelines Referenced

- `/guidelines/design-tokens/Playpocket-Tokens.md`
- `/guidelines/design-tokens/Dark-Mode.md`
- `/guidelines/design-tokens/Colors.md`
- `/guidelines/development/modern-react-coding-standards.md` Section 9