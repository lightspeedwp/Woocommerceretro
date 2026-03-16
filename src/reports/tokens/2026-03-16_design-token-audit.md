---
title: "Design Token Consistency Audit"
date: "2026-03-16"
auditor: "AI"
scope: "All token files, component usage, dark mode parity"
severity_scale: "P0 (critical) > P1 (high) > P2 (medium) > P3 (low)"
---

# Design Token Consistency Audit

## Summary

| Metric | Value | Status |
|--------|-------|--------|
| Token systems active | 3 (conflicting) | P1 |
| Primary system | `retro-theme.css` (`--color-*`) | Active |
| Secondary system | `theme-variables.css` (`--wp--preset--*`) | Active |
| Orphaned system | `tokens/` dir (`--wp--custom--*`) | Dead code |
| Dark mode definitions | 3 files | P1 overlap |
| Hardcoded hex in components | 7 files | P2 |
| Token value conflicts | 6 | P1 |

---

## Findings

### T1. Triple Token System [P1]

Three independent token systems define overlapping color variables:

| System | File(s) | Namespace | Scope |
|--------|---------|-----------|-------|
| A. Retro | `retro-theme.css` | `--color-*` | Retro components |
| B. WordPress | `theme-variables.css` | `--wp--preset--*` | WP-aligned blocks |
| C. Custom (dead) | `tokens/color.*.css` | `--wp--custom--*` | Not imported |

**Conflict examples:**

| Token | System A (retro) | System B (WP) | System C (dead) |
|-------|-----------------|---------------|-----------------|
| Background | `--color-paper: #F2EEE6` | `--wp--preset--color--background: var(--retro-paper)` (= `#F2EEE6`) | `--wp--custom--color--background: #F2EEE6` |
| Success (light) | `--color-success: #2E7D32` | `--wp--preset--color--success: #065f46` | `--wp--custom--color--success: #2ECC71` |
| Border | `--color-border: #C4BAA8` | `--wp--preset--color--border: var(--retro-line)` (= `#8F998F`) | `--wp--custom--color--border: #CBD5C9` |
| Link | `--color-link: #0055AA` | `--wp--preset--color--link: #2563eb` | `--wp--custom--color--link: #0F4C5C` |

**Impact:** Components using `--color-success` get `#2E7D32`; components using `--wp--preset--color--success` get `#065f46`; dead code would give `#2ECC71`. Three different greens for "success."

---

### T2. Dark Mode Triple Override [P1]

Dark mode is defined in THREE places with different values:

| File | Selector | Loaded |
|------|----------|--------|
| `retro-theme.css` | `.dark`, `:root.dark` | Yes (line 55 in globals) |
| `theme-variables.css` | `.dark`, `:root.dark` | Yes (line 49 in globals) |
| `theme-dark-mode.css` | `.dark` | Yes (line 53 in globals) |

**Load order:** `theme-variables.css` -> `theme-dark-mode.css` -> `retro-theme.css`

Because `retro-theme.css` loads LAST and its `.dark` selector matches the same specificity, it overrides `theme-dark-mode.css` for shared tokens. But `theme-variables.css` uses `:root.dark` (higher specificity), so IT overrides `retro-theme.css`.

**Result:** Unpredictable cascade for `--wp--preset--color--*` tokens in dark mode:
- `theme-variables.css` `:root.dark` wins for `--wp--preset--*` tokens (highest specificity)
- `retro-theme.css` `.dark` wins for `--color-*` tokens (loaded last)
- `theme-dark-mode.css` is partially overridden by both

---

### T3. Hardcoded Colors in Components [P2]

| File | Hex Values | Context |
|------|-----------|---------|
| `SpinningCoin3D.tsx` | `#FFD700`, `#1a1a1a` | Default props + inline styles (3D animation) |
| `SubscriptionBox3D.tsx` | `#00fff9`, `#FFD700`, `#1a1a1a`, `#2a2a2a` | Default props + inline (3D animation) |
| `PlayPocketLogo.tsx` | `#0D1117`, `#2C3A4A`, `#1A252F`, `#9A7820`, `#B08A28`, `#DEAD4F`, `#1E2630`, `#B5CFC4` | SVG fill fallbacks with CSS var() |
| `HeroRetro.tsx` | `#1E2630`, `#FFC533` | CSS var() fallbacks |
| `SpaceInvaders.tsx` | `#D4143D`, `#FFC533` | CSS var() fallbacks |
| `PowerUpSection.tsx` | `#FFC533`, `#1E2630` | CSS var() fallbacks |
| `CouponInput.tsx` | Unicode entities only (false positive) | OK |

**Assessment:**
- **Logo/SVG components** (`PlayPocketLogo`, `HeroRetro`, `SpaceInvaders`, `PowerUpSection`): Use `var(--token, #fallback)` pattern — this is CORRECT and follows best practices for SVG fill attributes.
- **3D components** (`SpinningCoin3D`, `SubscriptionBox3D`): Use hardcoded hex for 3D rendering props. These are EXEMPT (CSS variables don't work in JS-computed 3D transforms).

**Actionable:** None — all hex usage is properly justified.

---

### T4. Success/Warning Color Contrast Conflict [P2]

Light mode has conflicting success/warning values across systems:

| Token | `retro-theme.css` | `theme-variables.css` | Contrast on Paper |
|-------|-------------------|----------------------|-------------------|
| Success | `#2E7D32` | `#065f46` (AAA) | Both pass AA |
| Warning | `#E65100` | `#92400e` (AAA) | WP version is AAA |
| Alert/Error | `#C0533A` | `#991b1b` (AAA) | WP version is AAA |

**Impact:** The `--wp--preset--` versions were intentionally enhanced for AAA (noted in comments), but `--color-*` versions are only AA. Components using different systems get different contrast levels.

**Fix:** Align `--color-success`, `--color-warning`, `--color-alert` in `retro-theme.css` to the AAA-enhanced values from `theme-variables.css`.

---

### T5. Retro Token Indirection Gaps [P2]

`theme-variables.css` maps `--wp--preset--color--background: var(--retro-paper)`, but `--retro-paper` is defined in the SAME file (not in `retro-theme.css`). Meanwhile, `retro-theme.css` defines `--color-paper: #F2EEE6` with the same value but a different name.

**Token indirection chain:**
```
theme-variables.css: --retro-paper: #F2EEE6
theme-variables.css: --wp--preset--color--background: var(--retro-paper)
retro-theme.css:     --color-paper: #F2EEE6 (duplicate literal)
```

Components use EITHER `--wp--preset--color--background` OR `--color-paper` depending on which system they were built with. Both resolve to `#F2EEE6` in light mode, but diverge in dark mode:

- `--wp--preset--color--background` in dark: `var(--color-inset, #11161A)` (from theme-variables.css `:root.dark`)
- `--color-paper` in dark: `#151A1E` (from retro-theme.css `.dark`)

These are DIFFERENT dark backgrounds (`#11161A` vs `#151A1E`).

---

### T6. Funky Theme Variables Still Present [P3]

`theme-variables.css` still defines funky-era tokens that were partially cleaned up:
- `--wp--preset--color--neon-cyan: #00ffff`
- `--wp--preset--color--neon-pink: #ff00ff`
- `--wp--preset--color--neon-lime: #ccff00`
- `--wp--preset--color--navy: #030213`
- `--wp--preset--color--deep-purple: #2d0059`
- `--funky-interactive-color` / `--funky-interactive-focus`
- `--wp--preset--gradient--neon-glow` / `--wp--preset--gradient--commerce`

**Impact:** These are still used by funky mega menu and glass overlay components. No action needed until funky components are fully retired.

---

### T7. Neutral Ramp Partially Overridden [P3]

`theme-variables.css` defines `--wp--preset--color--neutral-100` through `--neutral-900` (10 tokens). In dark mode, `theme-dark-mode.css` only overrides `--neutral-100`. The other 8 neutral tokens retain their light-mode values in dark mode.

**Impact:** Any component using `--neutral-200` through `--neutral-900` will show light-mode gray values on dark backgrounds. Low severity because most components use `--color-*` or `--wp--preset--color--surface` instead.

---

## Token Health Score

| Category | Score | Notes |
|----------|-------|-------|
| Single source of truth | 4/10 | Triple system, needs consolidation |
| Light mode consistency | 7/10 | Works but values conflict between systems |
| Dark mode consistency | 5/10 | Triple override with specificity issues |
| Component token usage | 8/10 | Most components use correct variables |
| Contrast compliance | 8/10 | AA minimum met; AAA inconsistent between systems |
| Naming conventions | 7/10 | Two naming conventions (`--color-*` vs `--wp--preset--*`) |
| **Overall** | **6.5/10** | Needs token consolidation |

---

## Recommended Actions (Priority Order)

1. **[P1]** Consolidate to ONE canonical token source
   - Recommend keeping `retro-theme.css` as THE color authority
   - Have `theme-variables.css` map `--wp--preset--*` FROM `--color-*` (not from `--retro-*`)
   - Remove duplicate dark mode blocks (keep ONE `.dark` definition)
2. **[P1]** Resolve dark background conflict (`#11161A` vs `#151A1E`)
3. **[P2]** Delete orphaned `/src/styles/tokens/` directory (dead code)
4. **[P2]** Align success/warning/alert colors to AAA values across both systems
5. **[P2]** Complete neutral ramp dark mode overrides (8 missing tokens)
6. **[P3]** Document which system components should use (add to coding standards)
7. **[P3]** Plan funky token deprecation timeline
