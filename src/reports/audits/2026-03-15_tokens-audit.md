# Tokens Audit Report

**Date:** 2026-03-15  
**Trigger:** audit tokens  
**Status:** Processed  
**Processed:** 2026-03-15  
**Task List:** `/tasks/tokens-task-list.md`
**Guidelines Referenced:** `/guidelines/design-tokens/Colors.md`, `/guidelines/design-tokens/Typography.md`, `/guidelines/Guidelines.md` Section 2.5

## Summary

- Files scanned: 4 token CSS files, 20 component samples
- Violations found: 5
- P0 Critical: 0
- P1 High: 2
- P2 Medium: 2
- P3 Low: 1

## Findings

### P1: High

- [ ] **TK1** — Hardcoded hex colors in 3D components (not animation-exempt)
  - File: `/src/app/components/blocks/display/SpinningCoin3D.tsx` lines 42, 114, 151
  - Values: `#FFD700` (gold), `#1a1a1a` (dark)
  - Rule: Guidelines Section 2.5 — all colors via `--wp--preset--color--*`
  - Action: Create tokens `--retro-coin-gold`, `--retro-coin-dark` and reference them

- [ ] **TK2** — Hardcoded hex colors in SubscriptionBox3D
  - File: `/src/app/components/blocks/display/SubscriptionBox3D.tsx` lines 46, 92, 367
  - Values: `#00fff9` (neon cyan), `#FFD700` (gold), `#1a1a1a`, `#2a2a2a`
  - Rule: Guidelines Section 2.5
  - Action: Map to existing `--color-neon-cyan`, `--retro-coin-gold` tokens

### P2: Medium

- [ ] **TK3** — Hardcoded colors in globals.css inline funky styles
  - File: `/styles/globals.css` lines 360-365
  - Values: `#000`, `#fff`, `#0f0`, `#0ff`, `#111`, `#222`
  - Rule: All colors should use CSS variables
  - Action: Replace with `--wp--preset--color--foreground`, `--wp--preset--color--background`, etc.

- [ ] **TK4** — MembershipSubscription3DRetro uses hardcoded color prop
  - File: `/src/app/components/templates/MembershipSubscription3DRetro.tsx` lines 95, 144
  - Values: `#00fff9` passed as `glowColor` prop and `color` prop
  - Action: Use `var(--color-neon-cyan)` or pass token reference

### P3: Low

- [ ] **TK5** — `--retro-*` tokens defined alongside `--wp--preset--*` tokens
  - File: `/src/styles/theme-variables.css` lines 52-59
  - Issue: Dual token namespace (`--retro-paper`, `--retro-ink` etc.) alongside WordPress tokens
  - Action: Document the intentional dual namespace in Colors.md, or consolidate

## Clean Findings

- WordPress `--wp--preset--*` token naming is consistent ✅
- Dark mode overrides exist in `theme-dark-mode.css` ✅
- Typography scale uses fluid `clamp()` values ✅
- Spacing scale follows consistent multiplier ✅