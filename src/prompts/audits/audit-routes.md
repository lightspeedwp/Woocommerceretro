# Audit Routes — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit routes`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_routes-audit.md`

---

## Scope

Compare template files against route definitions to find orphaned templates, missing routes, and naming violations.

## Files to Read

- `/routes.ts` — all route definitions
- `/src/app/components/templates/` — directory listing of all template files
- `/guidelines/ROUTING_GUIDE.md` — route structure conventions
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md` — navigation architecture

## Checks

1. **Orphaned templates** — `.tsx` files in `/templates/` not referenced in any route
2. **Missing components** — routes referencing components that don't exist as files
3. **Redirect chains** — redirects that point to other redirects (> 1 hop)
4. **Naming convention** — routes should use kebab-case paths, PascalCase components
5. **Dynamic route consistency** — `:id` vs `:slug` parameter naming
6. **Duplicate routes** — multiple paths resolving to the same component (intentional vs accidental)
7. **Lazy loading** — all route components should be `React.lazy()` wrapped

## Output

Write report to `/reports/audits/YYYY-MM-DD_routes-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

## Guidelines Referenced

- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`

---

**Trigger:** `audit routes`