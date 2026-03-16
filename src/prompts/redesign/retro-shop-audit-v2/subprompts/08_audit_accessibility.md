# Audit -- Accessibility (focus, ARIA, contrast, motion)

**What this is:** Subprompt audit (a11y)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/08_audit_accessibility/YYYY-MM-DD_08_audit_accessibility.md`

---

## Objective

Identify accessibility violations prioritised by user impact: focus states, text contrast, ARIA labels, keyboard traps, and reduced motion coverage.

---

## Prerequisites

1. Read: `/guidelines/REDUCED_MOTION_GUIDELINES.md`
2. Read: `/guidelines/interactions/focus-management.md`
3. Read: `/guidelines/design-tokens/Playpocket-Tokens.md` (ring/focus token values)
4. Read: `/guidelines/mobile/buttons.md` (44x44px touch targets)

---

## Execution Steps

### Phase 1: Focus & Keyboard Navigation

**Duration:** 10 min

- [ ] Check all interactive elements for visible focus indicators
- [ ] Verify focus ring uses `--wp--preset--color--ring` token
- [ ] Check focus ring contrast meets WCAG 1.4.11 (3:1 against adjacent colours)
- [ ] Identify keyboard traps in overlays, modals, drawers, and menus
- [ ] Verify logical focus order in navigation and form components
- [ ] Check for missing `tabindex` or incorrect tab order

### Phase 2: ARIA & Semantic HTML

**Duration:** 10 min

- [ ] Check all icon-only buttons for `aria-label`
- [ ] Verify toggle components have `aria-expanded`
- [ ] Check for semantic HTML usage (`<nav>`, `<main>`, `<article>`, `<footer>`)
- [ ] Verify form labels are associated with inputs (`htmlFor`/`id` or wrapping)
- [ ] Check dynamic content updates for `aria-live` regions
- [ ] Verify dialog/modal components have proper `role` and focus management

### Phase 3: Contrast & Motion

**Duration:** 10 min

- [ ] Estimate text contrast ratios for primary text/background combinations
- [ ] Check muted text contrast (must hit 4.5:1 on intended background)
- [ ] Verify neon decorative colours are never used for body text
- [ ] Check all animated components for `prefers-reduced-motion` support
- [ ] Verify touch targets meet 44x44px minimum
- [ ] Check link distinguishability (underline or non-colour cue beyond colour alone)

---

## Output (in report)

- Violations table with columns: WCAG criterion, component/file, problem, fix
- Organised by WCAG success criterion:
  - 1.4.3 Contrast (Minimum) -- text contrast 4.5:1
  - 1.4.11 Non-text Contrast -- UI boundaries/focus 3:1
  - 2.1.1 Keyboard -- all functionality keyboard accessible
  - 2.1.2 No Keyboard Trap -- escape from all components
  - 2.4.7 Focus Visible -- visible focus indicators
  - 2.5.5 Target Size -- 44x44px minimum
  - 4.1.2 Name, Role, Value -- ARIA labels
- Fix patterns using tokens (ring colour, focus outlines)
- At least 10 concrete issues or explicit "pass" evidence

---

## Done Criteria

- [ ] Report includes at least 10 concrete issues (or explicit "pass" evidence)
- [ ] Each violation references a specific WCAG success criterion
- [ ] Fix recommendations use token-based values
- [ ] Focus ring implementation is verified against both light and dark mode
- [ ] Reduced motion coverage is checked for all animated sections
- [ ] Touch target sizes are verified for mobile-critical components

---

## Guidelines Referenced

- `/guidelines/REDUCED_MOTION_GUIDELINES.md`
- `/guidelines/interactions/focus-management.md`
- `/guidelines/mobile/buttons.md`
- `/guidelines/design-tokens/Playpocket-Tokens.md`
