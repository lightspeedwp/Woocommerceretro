# Audit -- Dark Mode Switching Failures

**What this is:** Subprompt audit (theme switching)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/07_audit_dark_mode_switching/YYYY-MM-DD_07_audit_dark_mode_switching.md`

---

## Objective

Find UI elements that do not switch properly between light and dark mode: wrong colours, unreadable text, missing borders, invisible icons, broken gradients.

---

## Prerequisites

1. Read: `/guidelines/design-tokens/Playpocket-Tokens.md`
2. Read: `/guidelines/design-tokens/Dark-Mode.md`
3. Read: Subprompt 01 report (if already generated) for token source-of-truth findings
4. Verify: Theme toggle component exists and uses `.dark` class on `<html>`

---

## Execution Steps

### Phase 1: Theme Toggle Verification

**Duration:** 5 min

- [ ] Verify theme toggle component exists and works
- [ ] Confirm `.dark` class is applied to `<html>` element
- [ ] Check for `localStorage` persistence of mode preference
- [ ] Verify `prefers-color-scheme` media query is respected as initial value

### Phase 2: Component-Level Dark Mode Audit

**Duration:** 15 min

- [ ] Scan all section CSS files for `.dark` selectors -- identify components with no dark mode support
- [ ] Search for inline `style={{ color: '...' }}` that bypasses CSS variable switching
- [ ] Check gradient definitions for hardcoded colours that don't change in dark mode
- [ ] Verify SVG/icon colours respond to mode changes
- [ ] Check image/media elements for appropriate dark mode treatment (filters, opacity)
- [ ] Verify form elements (inputs, selects, textareas) have dark mode styles
- [ ] Check for legacy dual-system overlap: variables defined in both `theme-variables.css`/`theme-dark-mode.css` AND the new canonical files (`/src/styles/tokens/color.ref.dark.css`) -- identify which "wins"
- [ ] Search for legacy v1 `--retro-*` dark mode variables that bypass the `.dark` token system
- [ ] Verify semantic tokens auto-switch via `.dark` class without per-component `.dark` overrides (components should use `var(--wp--preset--color--*)` not hardcoded `.dark` selectors)

---

## Output (in report)

- List of components failing in dark mode, grouped by severity:
  - P0: Unreadable text (contrast below 4.5:1)
  - P1: Wrong background (element invisible or jarring)
  - P2: Missing border/shadow (functional but ugly)
  - P3: Minor polish issues
- For each failure: the token that should be used instead of the hardcoded value
- Recommended simplification: fewer `.dark` special-cases, more semantic tokens
- Theme toggle implementation status

---

## Done Criteria

- [ ] Report links each failure to the exact token misuse (or missing token)
- [ ] At least 10 components are checked for dark mode support
- [ ] Contrast ratios are estimated for text-on-background combinations
- [ ] Each fix recommendation uses a specific `--wp--preset--color--*` token
- [ ] Theme toggle implementation is verified as functional

---

## Guidelines Referenced

- `/guidelines/design-tokens/Playpocket-Tokens.md`
- `/guidelines/design-tokens/Dark-Mode.md`
- `/guidelines/design-tokens/Colors.md`