# Tokens Task List

**Domain:** Design Tokens  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Source:** Tokens trigger — design token audit

---

## P1: Token Consistency

- [ ] **TK1** — Audit `--color-*` tokens in `/src/styles/retro-theme.css` against WordPress `--wp--preset--color--*` tokens in `/src/styles/theme-variables.css` — ensure no conflicts or orphaned tokens
- [ ] **TK2** — Verify all components use CSS variables (not hardcoded hex values) for colors — known issue: `ProductMeta.tsx` has hardcoded `#8B0000` hover color
- [ ] **TK3** — Document mapping between retro theme tokens (`--color-*`) and WordPress tokens (`--wp--preset--color--*`) in `/guidelines/design-tokens/Colors.md`
- [ ] **TK4** — Audit dark mode token coverage — ensure every `--color-*` token has a `.dark` override in `/src/styles/retro-theme.css`

### P2: Token Gaps

- [ ] **TK5** — Create elevation/shadow token scale (currently ad-hoc box-shadow values across components)
- [ ] **TK6** — Create animation duration tokens (`--wp--preset--duration--*`) — currently hardcoded `300ms`, `200ms`, etc.
- [ ] **TK7** — Create border-radius token scale — currently mix of `4px`, `8px`, `12px`, `16px` hardcoded
- [ ] **TK8** — Review spacing token usage — ensure components use `--wp--preset--spacing--*` not arbitrary values

### P3: Documentation

- [ ] **TK9** — Update `/guidelines/design-tokens/Colors.md` with current retro color palette
- [ ] **TK10** — Update `/guidelines/design-tokens/Dark-Mode.md` with current `.dark` class implementation
- [ ] **TK11** — Update `/guidelines/design-tokens/Typography.md` with current fluid font scale

---

## Audit Findings — March 15, 2026

*Source: `audit tokens` report*

### P1: Hardcoded Colors

- [ ] **TK12** — SpinningCoin3D has hardcoded hex colors (`#FFD700`, `#1a1a1a`)
  - File: `/src/app/components/blocks/display/SpinningCoin3D.tsx` lines 42, 114, 151
  - Create `--retro-coin-gold`, `--retro-coin-dark` tokens
  - Source: `/reports/audits/2026-03-15_tokens-audit.md`

- [ ] **TK13** — SubscriptionBox3D has hardcoded hex colors (`#00fff9`, `#FFD700`, `#1a1a1a`, `#2a2a2a`)
  - File: `/src/app/components/blocks/display/SubscriptionBox3D.tsx` lines 46, 92, 367
  - Map to existing `--color-neon-cyan` and new tokens
  - Source: `/reports/audits/2026-03-15_tokens-audit.md`

### P2: Token Gaps

- [ ] **TK14** — globals.css funky checkout uses hardcoded hex (`#000`, `#fff`, `#0f0`, `#0ff`, `#111`, `#222`)
  - File: `/styles/globals.css` lines 360-365
  - Replace with `--wp--preset--color--*` variables
  - Source: `/reports/audits/2026-03-15_tokens-audit.md`

- [ ] **TK15** — MembershipSubscription3DRetro passes hardcoded `#00fff9` as prop
  - File: `/src/app/components/templates/MembershipSubscription3DRetro.tsx` lines 95, 144
  - Use `var(--color-neon-cyan)` token reference
  - Source: `/reports/audits/2026-03-15_tokens-audit.md`

---

**Total:** 15 tasks | 0 complete | 15 open  
**Progress:** 0%