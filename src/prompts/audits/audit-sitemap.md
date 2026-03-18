# Audit Sitemap — Sub-Trigger Prompt

**Version:** 1.0  
**Created:** 2026-03-15  
**Trigger:** `audit sitemap`  
**Duration:** 5-10 min  
**Report:** `/reports/audits/YYYY-MM-DD_sitemap-audit.md`

---

## Scope

Verify the Sitemap component's `ROUTE_SECTIONS` data matches the actual routes in `routes.ts` and navigation data is consistent.

## Files to Read

- `/routes.ts` — source of truth for all routes
- `/src/app/components/pages/Sitemap.tsx` — `ROUTE_SECTIONS` constant
- `/src/app/data/navigation.ts` — header/footer navigation links
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md` — navigation architecture

## Checks

1. **Missing from Sitemap** — routes in `routes.ts` not listed in `ROUTE_SECTIONS`
2. **Stale in Sitemap** — routes in `ROUTE_SECTIONS` not in `routes.ts` (dead links)
3. **Statistics accuracy** — total/static/dynamic counts match actual data
4. **Section grouping** — routes in logical sections (shop routes in Shop section, etc.)
5. **Navigation link validity** — all `MAIN_MENU` and `FOOTER_MENU_*` urls resolve to valid routes
6. **Description accuracy** — spot-check descriptions match actual page content

## Output

Write report to `/reports/audits/YYYY-MM-DD_sitemap-audit.md` with `Status: Unprocessed`.  
Do NOT create task lists.

---

## Guidelines Referenced

- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`
- `/guidelines/ROUTING_GUIDE.md`

---

**Trigger:** `audit sitemap`