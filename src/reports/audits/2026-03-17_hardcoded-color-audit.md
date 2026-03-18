# Hardcoded color audit

**Date:** March 17, 2026
**Scope:** All CSS files in `/src/styles/blocks/` and `/src/styles/sections/`
**Source task:** stylesheet-architecture-migration Phase 4 (tasks 4.1, 4.6, 4.7)

---

## Summary

| Category | Count | Status |
|----------|-------|--------|
| Block CSS — variable fallbacks | ~20 | OK (acceptable pattern) |
| Block CSS — chart attribute selectors | ~5 | OK (library override) |
| Block CSS — mega menu decorative | ~30 | Deferred (TK20 mega menu redesign) |
| Block CSS — dev tools | ~3 | OK (dev only) |
| Section CSS — `#fff`/`#ffffff` | ~6 | Low priority (dark bg context) |
| Section CSS — `#030213`/`#000` | ~8 | Low priority (dark theme-specific) |
| Section CSS — status colors | ~6 | Should use `--wp--preset--color--success/info/accent` |
| Section CSS — category accent colors | ~12 | Intentional decorative (exempt) |

## Fixed this session

1. **cart.css** — `#16a34a` / `#4ade80` discount row → `var(--wp--preset--color--success)` (auto-adapts, removed `.dark` override)
2. **utilities.css** — `wp-text-green-600`, `wp-text-green-400`, `wp-text-red-600`, `wp-text-red-400` → CSS variables (removed 4 `.dark` overrides)

## Exempt categories

- **CSS variable fallbacks** (`var(--token, #hex)`) — correct pattern, fallback only used if variable undefined
- **Chart attribute selectors** (`[stroke='#ccc']`) — targeting Recharts internals, not styling declarations
- **Category accent colors** (front-page-funky archive headers) — intentional per-category branding
- **Dev tools** — development-only components

## Remaining (deferred)

- **Mega menu** (~30 instances) — deferred to TK20 mega menu retro redesign
- **Section `#fff`** — mostly used inside dark-background retro sections where `var(--wp--preset--color--background)` would be wrong (it adapts to dark mode, but these elements need white specifically)
- **Section `#030213`** — old dark purple, used in retro-specific contexts

## Recommendation

No further action needed at this time. The critical dark-mode-breaking hardcoded colors are fixed. Remaining instances are either:
- In deferred-redesign components (mega menu)
- Intentionally fixed values (category accents, dark-bg-specific white text)
- Dev-only components
