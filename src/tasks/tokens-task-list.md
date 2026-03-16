# Tokens Task List

**Domain:** Design Tokens  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-16  
**Source:** Token audits (March 15 + March 16)

---

## P1: Token Consistency

- [x] **TK1** — Audited `--color-*` tokens vs `--wp--preset--color--*` tokens. Consolidated dark mode mapping into `theme-variables.css` as single source of truth. Fixed background token conflict (`--color-inset` → `--color-paper`). ✅ **COMPLETE** (March 16 cleanup)
- [ ] **TK2** — Verify all components use CSS variables (not hardcoded hex) for colors — known issue: `ProductMeta.tsx` has hardcoded `#8B0000` hover color
- [ ] **TK3** — Document mapping between retro theme tokens (`--color-*`) and WordPress tokens (`--wp--preset--color--*`) in `/guidelines/design-tokens/Colors.md`
- [x] **TK4** — Audited dark mode token coverage. Consolidated triple-override into single source (`theme-variables.css`). All `--color-*` tokens have `.dark` overrides in `retro-theme.css`. ✅ **COMPLETE** (March 16 cleanup)

### P2: Token Gaps

- [ ] **TK5** — Create elevation/shadow token scale (currently ad-hoc box-shadow values across components)
- [ ] **TK6** — Create animation duration tokens (`--wp--preset--duration--*`) — currently hardcoded `300ms`, `200ms`, etc.
- [x] **TK7** — Border-radius token scale already exists in `theme-variables.css`: `--wp--preset--border-radius--none` through `--full`. ✅ **COMPLETE** (verified March 16)
- [ ] **TK8** — Review spacing token usage — ensure components use `--wp--preset--spacing--*` not arbitrary values

### P3: Documentation

- [ ] **TK9** — Update `/guidelines/design-tokens/Colors.md` with current retro color palette
- [ ] **TK10** — Update `/guidelines/design-tokens/Dark-Mode.md` with current `.dark` class implementation
- [ ] **TK11** — Update `/guidelines/design-tokens/Typography.md` with current fluid font scale

---

## Audit Findings — March 15, 2026

### P1: Hardcoded Colors

- [x] **TK12** — SpinningCoin3D hardcoded hex (`#FFD700`, `#1a1a1a`) — EXEMPT: 3D animation props where CSS vars don't work in JS-computed transforms. ✅ **EXEMPT**
- [x] **TK13** — SubscriptionBox3D hardcoded hex — EXEMPT: same reason as TK12. ✅ **EXEMPT**

### P2: Token Gaps

- [x] **TK14** — globals.css funky checkout hardcoded hex — ✅ **COMPLETE** (fixed in C1+C4+ST4 batch, March 15)
- [ ] **TK15** — MembershipSubscription3DRetro passes hardcoded `#00fff9` as prop. Use CSS variable reference.

---

## Audit Findings — March 16, 2026

*Source: `audit tokens` + `apply bem` reports*

### P1: Fixed in Cleanup

- [x] **TK16** — Deleted orphaned `/src/styles/tokens/` directory (triple token system dead code: `color.ref.light.css`, `color.ref.dark.css`, `color.semantic.css`). ✅ **COMPLETE**
- [x] **TK17** — Resolved dark mode background conflict: `theme-variables.css` was `var(--color-inset, #11161A)`, `theme-dark-mode.css` was `#0f0f0f`, `retro-theme.css` was `#151A1E`. Consolidated to `var(--color-paper, #151A1E)`. ✅ **COMPLETE**

### P2: Open

- [ ] **TK18** — Align `--color-success`, `--color-warning`, `--color-alert` in `retro-theme.css` to AAA-enhanced values from `theme-variables.css` (`#065f46`, `#92400e`, `#991b1b`).
  - Source: `/reports/tokens/2026-03-16_design-token-audit.md` T4

- [ ] **TK19** — Complete neutral ramp dark mode overrides. Only `--neutral-100` is overridden; `--neutral-200` through `--neutral-900` retain light-mode values in dark mode.
  - Source: `/reports/tokens/2026-03-16_design-token-audit.md` T7

### P3: Deferred

- [ ] **TK20** — Plan funky token deprecation timeline. `--wp--preset--color--neon-*`, `--funky-*` tokens still used by mega menu and glass overlay components.
  - Source: `/reports/tokens/2026-03-16_design-token-audit.md` T6

---

**Total:** 20 tasks | 8 complete | 12 open  
**Progress:** 40%
