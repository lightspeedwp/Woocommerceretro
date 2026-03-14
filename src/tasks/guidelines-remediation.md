# Guidelines Remediation Task List

**Source:** A1 Guidelines Freshness Audit (2026-02-21)  
**Status:** PARTIALLY ADDRESSED  
**Updated:** March 12, 2026  
**Note:** T1.1 partially addressed by Guidelines.md v2.9 updates (Section 4 now has BEM examples alongside legacy Tailwind "WRONG" examples). Remaining sections 5-8 still contain Tailwind class references as negative examples. Full rewrite deferred -- Tailwind elimination is 100% complete in codebase, guidelines examples serve as "what NOT to do" reference.  
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md` Appendix C

---

## P0: Immediate (Blocking funky redesign)

### T1.1 — Rewrite `Guidelines.md` sections 4-8

**File:** `/guidelines/Guidelines.md`  
**Issue:** Contains 200+ Tailwind class references (`flex`, `p-4`, `bg-white`, `dark:bg-gray-900`, etc.) across sections 4–8.  
**Action:** Replace ALL Tailwind class examples with BEM + CSS variable examples aligned to funky redesign.  
**Scope of Changes:**

| Section | Current Problem | Replacement Pattern |
|---------|----------------|---------------------|
| §4 Styling System | Tailwind utility examples | BEM `.wc-*` / `.wp-*` classes + `var(--wp--preset--*)` |
| §5 Dark Mode | `dark:bg-gray-900` etc. | `.dark .component { }` CSS selectors |
| §6 Font Weight | Tailwind `font-semibold` | `var(--wp--preset--font-weight--semibold)` |
| §7 Architecture | Tailwind in button/input examples | BEM class + CSS file location |
| §8 Interactive | `bg-black dark:bg-gray-50` button patterns | `.wp-button--primary { }` BEM pattern |

**Component-Level Impact:** This update affects the examples that EVERY new component will be based on. Must be correct before any Phase 2+ work.

---

### T1.2 — Merge dark mode guideline duplicates

**Files:**
- `/guidelines/design-tokens/dark-mode.md`
- `/guidelines/design-tokens/dark-mode-styles.md`

**Action:** Merge into single `/guidelines/design-tokens/dark-mode.md` with funky-aligned content:
- Add funky dark mode specifics (neon glow opacity differences, glass transparency shifts)
- Add `.dark` selector patterns for BEM components
- Add funky colour token dark mode values
- Remove all Tailwind `dark:` prefix references

---

### T1.3 — Fix Buttons guideline Tailwind reference

**File:** `/guidelines/blocks/design/Buttons.md` (line ~349)  
**Issue:** States "Uses Tailwind CSS utility classes"  
**Action:** Rewrite to describe BEM `.wp-button--*` system with funky variants:
- `.wp-button--primary` (neon glow hover)
- `.wp-button--secondary` (glass + border)
- `.wp-button--ghost` (neon text hover)
- `.wp-button--accent` (gradient background)

---

## P1: High Priority

### T1.4 — Archive Tailwind quick reference

**File:** `/guidelines/TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md`  
**Action:** Move to `/guidelines/archive/TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md`  
**Reason:** Historical reference only — Tailwind fully removed.

---

### T1.5 — Delete 7 duplicate guideline files

| Duplicate File | Keep Instead | Action |
|----------------|-------------|--------|
| `blocks/text/heading.md` | `blocks/text/Heading.md` | DELETE lowercase |
| `blocks/text/list.md` | `blocks/text/List.md` | DELETE lowercase |
| `blocks/text/paragraph.md` | `blocks/text/Paragraph.md` | DELETE lowercase |
| `blocks/design/buttons.md` | `blocks/design/Buttons.md` | DELETE lowercase |
| `components/ProductCard.md` | `blocks/woocommerce/ProductCard.md` | DELETE from components/ |
| `components/Hero.md` | `patterns/Hero.md` | MERGE then DELETE from components/ |

---

### T1.6 — Update `design-tokens/colors.md` for funky tokens

**File:** `/guidelines/design-tokens/colors.md`  
**Issue:** References `--color-*` variable naming (old system)  
**Action:**
1. Change ALL `--color-*` refs to `--wp--preset--color--*`
2. Add funky neon colour tokens:
   - `--wp--preset--color--neon-pink: #ff00ff`
   - `--wp--preset--color--neon-cyan: #00ffff`
   - `--wp--preset--color--neon-lime: #00ff00`
   - `--wp--preset--color--neon-yellow: #ffff00`
   - `--wp--preset--color--deep-purple: #2d0059`
3. Add funky gradient tokens documentation
4. Add page colour identity table (from orchestrator §4.2)

**Component Impact:** Every component that references colours must use the `--wp--preset--color--*` system. The funky neon tokens are ACCENT only — never for body text.

---

### T1.7 — Update `design-tokens/typography.md` for WP variables

**File:** `/guidelines/design-tokens/typography.md`  
**Issue:** May reference Tailwind text size classes or old font-size variables  
**Action:**
1. Ensure ALL font-size refs use `var(--wp--preset--font-size--100)` through `var(--wp--preset--font-size--900)`
2. Add gradient text documentation for funky headings
3. Document font-weight tokens: `var(--wp--preset--font-weight--{light|normal|medium|semibold|bold})`
4. Add funky typography patterns (gradient text, glow text shadow)

---

### T1.8 — Update `design-tokens/spacing.md` for WP variables

**File:** `/guidelines/design-tokens/spacing.md`  
**Issue:** May reference old spacing system  
**Action:**
1. Ensure ALL spacing refs use `var(--wp--preset--spacing--10)` through `var(--wp--preset--spacing--100)`
2. Document "no margins" rule — use `gap` in flex/grid only
3. Add section padding standards for funky pages
4. Document funky-specific spacing (orb positioning, glass panel padding)

---

## P2: Medium Priority

### T1.9 — Archive superseded audit reports

**Files:** 4 files in `guidelines/audits/`  
**Action:** Move to `guidelines/archive/audits/` — superseded by orchestrator audits A1-A8.

---

### T1.10 — Update PATH_ALIAS_STRATEGY.md

**File:** `/guidelines/PATH_ALIAS_STRATEGY.md`  
**Action:** Update with current alias configuration from `vitest.config.ts`. Document that `@/components` points to root `/components/` (migration in progress).

---

### T1.11 — Update ROUTING_GUIDE.md

**File:** `/guidelines/ROUTING_GUIDE.md`  
**Action:** Update with current route structure from `/App.tsx`. Document all 63+ template routes.

---

### T1.12 — Update STALE component guidelines with current paths

**Scope:** All component guidelines that reference old file paths.  
**Action:** Batch find-replace:
- `/components/blocks/` → `/src/app/components/blocks/` (where migrated)
- `/components/patterns/` → `/src/app/components/patterns/` (where migrated)
- Remove any `tailwind.config.js` references
- Update CSS file locations to `/src/styles/` structure

---

## P3: Low Priority

### T1.13 — Update mobile guidelines

**Files:** `/guidelines/mobile/buttons.md`, `/guidelines/mobile/typography.md`  
**Action:** Update with funky mobile considerations:
- Touch targets remain 48x48px minimum (unchanged)
- Orb opacity reduced on mobile (0.08)
- Glass blur intensity reduced on low-end devices
- Neon accents may be more subtle on mobile (battery consideration)

---

### T1.14 — Update README.md index

**File:** `/guidelines/README.md`  
**Action:** Add references to:
- New funky design system guideline
- Orchestrator prompt location
- Phase 0 audit report locations
- New task document locations

---

### T1.15 — Ensure all guidelines use `--wp--preset--*` exclusively

**Scope:** ALL 172+ guideline files  
**Action:** Grep for any non-`--wp--preset--*` CSS variable references and update to unified system.

---

## Funky Design System Guideline Status

| Guideline | Path | Status |
|-----------|------|--------|
| Main funky design system | `/guidelines/design-tokens/funky-woocommerce-design-system.md` | EXISTS |
| Funky theme tokens | `/guidelines/design-tokens/funky-theme.md` | EXISTS |
| Funky section styles | `/guidelines/styles/funky-section-styles.md` | NEEDS CREATION |
| Colors (with funky) | `/guidelines/design-tokens/colors.md` | NEEDS UPDATE (T1.6) |
| Typography (with funky) | `/guidelines/design-tokens/typography.md` | NEEDS UPDATE (T1.7) |
| Spacing (with funky) | `/guidelines/design-tokens/spacing.md` | NEEDS UPDATE (T1.8) |
| Dark mode (with funky) | `/guidelines/design-tokens/dark-mode.md` | NEEDS MERGE + UPDATE (T1.2) |