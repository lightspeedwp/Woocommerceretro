# Audit Guidelines — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit guidelines`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_guidelines-audit.md`

---

## Scope

Verify guideline freshness, template compliance, cross-reference validity, and coverage.

## Files to Read

- `/guidelines/` — full directory listing (recursive)
- `/guidelines/Guidelines.md` — master hub
- `/guidelines/_templates/` — all templates
- `/guidelines/WRITING_GUIDELINES.md`
- `/guidelines/Core-Repository-Guidelines.md`
- `/guidelines/_templates.md`

## Checks

1. **Stale guidelines** — files with `Updated` date older than 30 days
2. **Missing frontmatter** — guidelines without version, date, or status fields
3. **Broken references** — cross-references to files that have been moved or deleted
4. **Obsolete names** — references to old component names (pre-retro, pre-migration)
5. **Template compliance** — guidelines that don't follow the template structure
6. **Coverage gaps** — components in `/src/app/components/` without matching guidelines
7. **Duplicate guidelines** — same component documented in multiple locations
8. **Hub accuracy** — links in Guidelines.md Sub-Guidelines Directory that don't resolve

## Output

Write report to `/reports/audits/YYYY-MM-DD_guidelines-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

---

**Trigger:** `audit guidelines`