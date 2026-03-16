# Sitemap Audit Report

**Date:** 2026-03-15  
**Trigger:** audit sitemap  
**Status:** Processed  
**Processed:** 2026-03-15  
**Task List:** `/tasks/routes-task-list.md`
**Guidelines Referenced:** `/guidelines/NAVIGATION_QUICK_REFERENCE.md`

## Summary

- Files scanned: 3 (routes.ts, Sitemap.tsx, navigation.ts)
- Violations found: 3
- P0 Critical: 0
- P1 High: 0
- P2 Medium: 2
- P3 Low: 1

## Findings

### P2: Medium

- [ ] **SM1** — Sitemap uses `@/utils/phosphor-compat` instead of `lucide-react` directly
  - File: `/src/app/components/pages/Sitemap.tsx` line 19
  - Issue: Import uses phosphor-compat shim with Phosphor icon names (House, Storefront, etc.)
  - While functional via shim, this adds an unnecessary abstraction layer
  - Action: Migrate to direct `lucide-react` imports (Home, Store, ShoppingBag, etc.)

- [ ] **SM2** — Navigation data has stale category links
  - File: `/src/app/data/navigation.ts` lines 32-36
  - Issue: MAIN_MENU references categories (`electronics`, `clothing`, `home-living`, `sports-fitness`) that don't match the PlayPocket retro theme categories (`apparel`, `accessories`, `games`, `posters`, `collectibles`)
  - Action: Update MAIN_MENU to match actual product categories

### P3: Low

- [ ] **SM3** — Sitemap statistics auto-computed but could be stale if routes change
  - File: `/src/app/components/pages/Sitemap.tsx` line 269-283
  - Issue: SITEMAP_STATS are computed from ROUTE_SECTIONS, not from routes.ts. If a route is added to routes.ts but not to ROUTE_SECTIONS, stats will be incorrect.
  - Action: Add a comment documenting this dependency, or cross-validate

## Clean Findings

- All routes.ts entries are represented in Sitemap ROUTE_SECTIONS ✅
- No dead links in Sitemap (all paths resolve to valid routes) ✅
- Section grouping is logical ✅
- Dynamic routes are properly marked with `dynamic: true` ✅
- 14 sections covering all route groups ✅