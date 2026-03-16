# Data Task List

**Domain:** Data Files  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Source:** process reports — from `/reports/audits/2026-03-15_data-audit.md`

---

## P2: Medium

- [ ] **DATA1** — Verify `products.ts` vs `products/` directory — check for duplication
  - Files: `/src/app/data/products.ts` and `/src/app/data/products/`
  - If `products.ts` re-exports from `products/`, keep; if duplicate, remove
  - Source: `/reports/audits/2026-03-15_data-audit.md`

- [ ] **DATA2** — Audit data file line counts — split files over 250 lines
  - Candidates: `products.ts`, `blogData.ts`, `megaMenuData.ts`, `homepage.ts`
  - Source: `/reports/audits/2026-03-15_data-audit.md`

## P3: Low

- [ ] **DATA3** — Standardize data file naming (camelCase for multi-word, lowercase for single-word)
  - Current mix: `blogData.ts`, `heroData.ts` vs `brands.ts`, `filters.ts`
  - Source: `/reports/audits/2026-03-15_data-audit.md`

---

**Total:** 3 tasks | 0 complete | 3 open  
**Progress:** 0%
