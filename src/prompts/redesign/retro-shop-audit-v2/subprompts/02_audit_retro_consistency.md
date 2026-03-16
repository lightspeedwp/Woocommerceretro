# Audit -- Retro Design Consistency

**What this is:** Subprompt audit (visual consistency)
**Version:** 1.0
**Created:** 2026-03-15
**Type:** Orchestrator Subprompt
**Parent:** `/prompts/redesign/retro-shop-audit-v2/PROMPT_RETRO_AUDIT_ORCHESTRATOR.md`
**Report path:** `/reports/retro-shop-audit-v2/02_audit_retro_consistency/YYYY-MM-DD_02_audit_retro_consistency.md`

---

## Objective

Identify pages, sections, and components still using "funky/bento/legacy" styling patterns rather than the Playpocket retro design system.

---

## Prerequisites

1. Read: `/guidelines/design-tokens/Playpocket-Tokens.md`
2. Read: `/guidelines/styles/section-styles.md`
3. Read: `/guidelines/components/SectionPresets.md`
4. Read: `/prompts/redesign/PROMPT_RETRO_CONVERSION_v2.md` (scope of retro conversion)

---

## Execution Steps

### Phase 1: Legacy Pattern Detection

**Duration:** 15 min

- [ ] Search global stylesheet entrypoint for "funky" imports or overrides
- [ ] Search section CSS files for mixed naming conventions (funky vs retro BEM)
- [ ] Identify CSS files still referencing legacy colour palettes (blue/teal "Bento News")
- [ ] Search for legacy v1 `--retro-*` CSS variables that should now be `--wp--preset--color--*`
- [ ] Check for inconsistent font usage: legacy `Press Start 2P` references vs current `Space Grotesk` (`--wp--preset--font-family--brand`)
- [ ] Identify inline hex values in section CSS (especially gradients in `front-page.css` and similar)

### Phase 2: Template/Component Review

**Duration:** 15 min

- [ ] Review template components for inconsistent layout primitives
- [ ] Check pattern components for mixed design languages
- [ ] Identify components that have been partially converted (retro class names but legacy colours)
- [ ] Verify all "Retro" suffixed components actually use retro styling
- [ ] Check for drifting component guidelines (`Logo.md`, `Container.md`, `BrandLogoGrid.md`, `SectionPresets.md`) where docs don't match current code
- [ ] Verify component CSS uses `--wp--preset--color--*` tokens (not `--retro-*` or literal hex)

---

## Output (in report)

- Inventory of inconsistent pages/components with file paths
- Classification: fully legacy, partially converted, fully retro
- Recommended consolidation: which classes/tokens should replace legacy ones
- Quick wins (P1) vs larger refactors (P2)
- Top 10 inconsistency hotspots ranked by user-facing impact

---

## Done Criteria

- [ ] Report includes a "top 10 inconsistency hotspots" list with file paths
- [ ] Each hotspot identifies the specific legacy pattern and its retro replacement
- [ ] At least 5 CSS files are audited for naming convention consistency
- [ ] Legacy colour references are catalogued with replacement tokens

---

## Guidelines Referenced

- `/guidelines/design-tokens/Playpocket-Tokens.md`
- `/guidelines/styles/section-styles.md`
- `/guidelines/components/SectionPresets.md`
- `/guidelines/design-tokens/Funky-Theme.md` (to identify what to remove)