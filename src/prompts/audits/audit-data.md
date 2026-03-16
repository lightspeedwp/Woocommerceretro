# Audit Data — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit data`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_data-audit.md`

---

## Scope

Audit mock data files for size compliance, type safety, and content completeness.

## Files to Read

- `/src/app/data/` — directory listing of all data files
- `/src/app/types/woocommerce.ts` — WooCommerce type definitions
- `/src/app/types/wordpress.ts` — WordPress type definitions

## Checks

1. **File size** — data files exceeding 250-line limit (split by category)
2. **Type compliance** — data objects matching their TypeScript interfaces
3. **Missing fields** — required interface fields with undefined/null values
4. **Unused exports** — exported data not imported anywhere
5. **Duplicate data** — same entity defined in multiple files
6. **ID uniqueness** — duplicate IDs or slugs within a dataset
7. **Content quality** — placeholder text ("Lorem ipsum", "TODO", "TBD") in user-facing data
8. **Naming conventions** — SCREAMING_SNAKE for constants, camelCase for objects

## Output

Write report to `/reports/audits/YYYY-MM-DD_data-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

---

**Trigger:** `audit data`
