# Audit Icons — Sub-Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Trigger:** `audit icons`
**Duration:** 10-15 min
**Report:** `/reports/audits/YYYY-MM-DD_icons-audit.md`

---

## Purpose

Runtime health check for icon imports. Phosphor Icons occasionally rename icons between versions. This audit catches broken imports, name mismatches, and import path errors before they cause runtime failures.

This is a **fast, focused audit** — run it after any `@phosphor-icons/react` package version bump, or whenever icon rendering breaks.

## Files to Read

- `/src/app/utils/phosphor-compat.ts` — canonical barrel file
- `/guidelines/overview-icons.md` — icon conventions

## Checks

### 1. Import resolution

For every icon name exported from `phosphor-compat.ts`:

1. Verify it exists in the installed `@phosphor-icons/react` package
2. Flag any `export { X } from "@phosphor-icons/react"` where `X` is not a valid export from the package
3. Check alias re-exports (`export { A as B }`) — verify source name `A` is valid

### 2. Consumer import health

Scan all `.tsx` files importing from `phosphor-compat`:

1. **Missing names** — Component imports an icon not exported by the barrel file
2. **Typo detection** — Fuzzy-match import names against known Phosphor icons (e.g., `MagnifyingGlas` → `MagnifyingGlass`, `ShoppingBag` → valid)
3. **Destructuring errors** — `import { default as X }` or other non-standard patterns

### 3. Phosphor version changelog scan

If the `@phosphor-icons/react` version has changed since last audit:

1. List all renamed icons in the changelog
2. Cross-reference against `phosphor-compat.ts` exports
3. Flag any breaking renames

### 4. Known Phosphor rename patterns

These icon names have historically changed between Phosphor versions. Verify current status:

| Old Name | New Name | Status |
|----------|----------|--------|
| `CircleWavyCheck` | `SealCheck` | Verify |
| `CircleWavyWarning` | `SealWarning` | Verify |
| `Columns` | `ColumnsPlusLeft` / `ColumnsPlusRight` | Verify |
| `FadersHorizontal` | Still valid? | Verify |
| `GearSix` | Still valid? | Verify |
| `TextAa` | Still valid? | Verify |
| `TwitterLogo` | `XLogo` (post-rebrand) | Verify |

## Severity Classification

| Priority | Description |
|----------|-------------|
| P0 | Icon export will throw `undefined` at runtime (renamed/removed) |
| P0 | Consumer imports non-existent name from barrel |
| P1 | Deprecated name still works but will break on next upgrade |
| P2 | Stale alias, unused import, minor inconsistency |

## Output

Write report to `/reports/audits/YYYY-MM-DD_icons-audit.md` with `Status: Unprocessed`.
Do NOT create task lists.

---

## Guidelines Referenced

- `/guidelines/overview-icons.md`

---