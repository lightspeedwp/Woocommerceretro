# Audit Tokens — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit tokens`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_tokens-audit.md`

---

## Scope

Audit design token definitions and usage for consistency, completeness, and dark mode coverage.

## Files to Read

- `/src/styles/theme-variables.css` — WordPress `--wp--preset--*` tokens
- `/src/styles/retro-theme.css` — Retro theme `--color-*` tokens
- `/src/styles/theme-dark-mode.css` — Dark mode overrides
- `/src/styles/theme-light-mode.css` — Light mode definitions
- `/guidelines/design-tokens/Colors.md` — Color token documentation
- `/guidelines/design-tokens/Typography.md` — Typography documentation
- `/guidelines/design-tokens/Spacing.md` — Spacing documentation
- `/guidelines/design-tokens/Dark-Mode.md` — Dark mode documentation
- `/guidelines/Guidelines.md` Section 2.5

## Checks

1. **Orphaned tokens** — CSS variables defined but never referenced in any component or CSS file
2. **Missing dark mode** — tokens with no `.dark` override (every `--color-*` must have a dark variant)
3. **Hardcoded values** — components using hex/rgb colors instead of CSS variables (sample 10-20 component files)
4. **Naming conflicts** — `--color-*` tokens vs `--wp--preset--color--*` tokens with overlapping purposes
5. **Typography scale** — verify fluid `clamp()` values are consistent across font-size tokens
6. **Spacing scale** — verify `--wp--preset--spacing--*` uses consistent multiplier (e.g., 4px base)
7. **Missing token categories** — elevation/shadow, animation duration, border-radius (currently ad-hoc)

## Output

Write report to `/reports/audits/YYYY-MM-DD_tokens-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

---

**Trigger:** `audit tokens`