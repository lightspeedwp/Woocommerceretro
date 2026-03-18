# Routes Task List

**Domain:** Routes / Sitemap  
**Status:** ✅ Complete  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-17  
**Source:** Sitemap trigger — route audit against routes.ts

---

## Completed — March 15, 2026

- [x] **R1** — Add `/membership/3d/:id` route to Sitemap component ✅ **COMPLETE**
- [x] **R2** — Add 5 missing legal redirect aliases to Sitemap (`/policies`, `/legal/privacy`, `/legal/terms`, `/legal/privacy-policy`, `/legal/terms-conditions`) ✅ **COMPLETE**
- [x] **R3** — Fix Dev Tools Icon Library description: "Phosphor icons browser" → "Lucide icons browser" ✅ **COMPLETE**

---

## Open Tasks

### P1: Route Consistency

- [x] **R4** — Verified all navigation data (`/src/app/data/navigation.ts`) links resolve to valid routes. All 38 URLs (main menu + footer menus) validated against routes.ts. ✅ **COMPLETE** (March 17)
- [x] **R5** — Verified blog mega menu links: `/blog/format/standard` (line 254), `/blog/category/*` (`:slug` route), featured post slugs — all resolve. ✅ **COMPLETE** (March 17)
- [x] **R6** — Featured blog post links (`/blog/open-channels-ash-shaw`, `/blog/lightspeed-dev-workflow`) resolve via `blog/:slug` catch-all route. ✅ **COMPLETE** (March 17)

### P2: Route Optimization

- [x] **R7** — Consolidated all redirect components into a `createRedirect()` factory function — reduced 10 one-off redirect components to single factory + declarations ✅ **COMPLETE** (March 17)
- [x] **R8** — Added centralised route metadata via `RouteDocumentTitle` component in SiteLayout — 100+ static route titles + 14 dynamic slug patterns, automatic `document.title` on every navigation ✅ **COMPLETE** (March 17)
- [x] **R9** — Verified: promo routes already differentiated in `ArchiveProductRetro` via `getRouteContext()` (unique title, subtitle, icon, accent class, badge per route) and `getFilteredProducts()` (different product sets per route). No further work needed. ✅ **COMPLETE** (March 17)

### P3: Documentation

- [x] **R10** — Updated `/guidelines/ROUTING_GUIDE.md` v3.0 with current route count (134 total: 112 page + 10 redirects + 5 error + 7 format routes). ✅ **COMPLETE** (March 17)
- [x] **R11** — Added "Route naming conventions" section to ROUTING_GUIDE.md covering URL paths (kebab-case, singular/plural), dynamic parameters (`:slug` vs `:id`), component naming (`Page[Name]Retro`, `Archive[Type]Retro`), lazy imports, and alias routes. ✅ **COMPLETE** (March 17)

---

## Audit Findings — March 15, 2026

*Source: `audit routes` + `audit sitemap` reports*

### P2: Route Issues

- [x] **R12** — Wired orphaned `PageDealsRetro.tsx` to `/deals` route (was using `ArchiveProductRetro`). ✅ **COMPLETE** (March 17)

- [x] **R13** — Sitemap.tsx migrated from `lucide-react` to `@phosphor-icons/react` (24 icons, direct Phosphor names, no aliases). Icon Library description updated to "Phosphor icons browser". ✅ **COMPLETE** (March 17)

### P3: Consistency

- [x] **R14** — Standardized all lazy import patterns in routes.ts to named-export `.then((m) => ({ default: m.X }))` pattern. Added `export const` to 5 dev tools templates that only had `export default`. ✅ **COMPLETE** (March 17)

---

**Total:** 14 tasks | 14 complete | 0 open  
**Progress:** 100%

---

## Completed — March 17, 2026

- [x] **R4** — Verified all navigation data (`/src/app/data/navigation.ts`) links resolve to valid routes. All 38 URLs (main menu + footer menus) validated against routes.ts. ✅ **COMPLETE** (March 17)
- [x] **R5** — Verified blog mega menu links: `/blog/format/standard` (line 254), `/blog/category/*` (`:slug` route), featured post slugs — all resolve. ✅ **COMPLETE** (March 17)
- [x] **R6** — Featured blog post links (`/blog/open-channels-ash-shaw`, `/blog/lightspeed-dev-workflow`) resolve via `blog/:slug` catch-all route. ✅ **COMPLETE** (March 17)
- [x] **R12** — Wired orphaned `PageDealsRetro.tsx` to `/deals` route (was using `ArchiveProductRetro`). ✅ **COMPLETE** (March 17)
- [x] **R13** — Sitemap.tsx migrated from `lucide-react` to `@phosphor-icons/react` (24 icons, direct Phosphor names, no aliases). Icon Library description updated to "Phosphor icons browser". ✅ **COMPLETE** (March 17)
- [x] **R14** — Standardized all lazy import patterns in routes.ts to named-export `.then((m) => ({ default: m.X }))` pattern. Added `export const` to 5 dev tools templates that only had `export default`. ✅ **COMPLETE** (March 17)
- [x] **R10** — Updated `/guidelines/ROUTING_GUIDE.md` v3.0 with current route count (134 total: 112 page + 10 redirects + 5 error + 7 format routes). ✅ **COMPLETE** (March 17)
- [x] **R11** — Added "Route naming conventions" section to ROUTING_GUIDE.md covering URL paths (kebab-case, singular/plural), dynamic parameters (`:slug` vs `:id`), component naming (`Page[Name]Retro`, `Archive[Type]Retro`), lazy imports, and alias routes. ✅ **COMPLETE** (March 17)

---

**Total:** 14 tasks | 14 complete | 0 open  
**Progress:** 100%