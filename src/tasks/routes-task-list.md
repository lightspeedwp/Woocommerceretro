# Routes Task List

**Domain:** Routes / Sitemap  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Source:** Sitemap trigger — route audit against routes.ts

---

## Completed — March 15, 2026

- [x] **R1** — Add `/membership/3d/:id` route to Sitemap component ✅ **COMPLETE**
- [x] **R2** — Add 5 missing legal redirect aliases to Sitemap (`/policies`, `/legal/privacy`, `/legal/terms`, `/legal/privacy-policy`, `/legal/terms-conditions`) ✅ **COMPLETE**
- [x] **R3** — Fix Dev Tools Icon Library description: "Phosphor icons browser" → "Lucide icons browser" ✅ **COMPLETE**

---

## Open Tasks

### P1: Route Consistency

- [ ] **R4** — Verify all navigation data (`/src/app/data/navigation.ts`) links resolve to valid routes
  - `/shop/category/electronics`, `/shop/category/clothing`, `/shop/category/home-living`, `/shop/category/sports-fitness` — these categories exist in nav menu but may not have product data
- [ ] **R5** — Verify blog mega menu links: `/blog/format/standard`, `/blog/category/development`, `/blog/category/design`, `/blog/category/news` — ensure these routes work (standard format archive not in routes.ts)
- [ ] **R6** — Add featured blog post links from mega menu to routes validation: `/blog/open-channels-ash-shaw`, `/blog/lightspeed-dev-workflow`

### P2: Route Optimization

- [ ] **R7** — Consider consolidating legal redirect routes into a single redirect handler component
- [ ] **R8** — Add route metadata (page titles, meta descriptions) for SEO
- [ ] **R9** — Review promotion routes — 7 routes all use `ArchiveProductRetro` with no differentiation

### P3: Documentation

- [ ] **R10** — Update `/guidelines/ROUTING_GUIDE.md` with current route count (112 total routes including redirects)
- [ ] **R11** — Document route naming conventions in routing guide

---

## Audit Findings — March 15, 2026

*Source: `audit routes` + `audit sitemap` reports*

### P2: Route Issues

- [ ] **R12** — Orphaned template: `PageDealsRetro.tsx` has no route in routes.ts
  - File: `/src/app/components/templates/PageDealsRetro.tsx`
  - The `/deals` route uses `ArchiveProductRetro` — either add a route or remove the template
  - Source: `/reports/audits/2026-03-15_routes-audit.md`

- [ ] **R13** — Sitemap component uses `@/utils/phosphor-compat` instead of `lucide-react`
  - File: `/src/app/components/pages/Sitemap.tsx` line 19
  - Migrate to direct lucide-react imports for icon consistency
  - Source: `/reports/audits/2026-03-15_sitemap-audit.md`

### P3: Consistency

- [ ] **R14** — Inconsistent lazy import patterns in routes.ts
  - Some use `.then((m) => ({ default: m.X }))`, others use bare `import()`
  - Standardize all to named-export pattern
  - Source: `/reports/audits/2026-03-15_routes-audit.md`

---

**Total:** 14 tasks | 3 complete | 11 open  
**Progress:** 21%