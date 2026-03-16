# Guidelines Task List

**Domain:** Guidelines Compliance  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Source:** process reports — from `/reports/audits/2026-03-15_guidelines-audit.md`

---

## P1: High

- [x] **GL1** — Create `StoreNotices.md` guideline (T6.8) ✅ **COMPLETE**
  - Component: `/src/app/components/blocks/single-product/StoreNotices.tsx`
  - Target: `/guidelines/blocks/single-product/StoreNotices.md`
  - Created: 2026-03-15

- [x] **GL2** — Create `ProductBreadcrumbs.md` guideline (T6.9) ✅ **COMPLETE**
  - Component: `/src/app/components/blocks/single-product/ProductBreadcrumbs.tsx`
  - Target: `/guidelines/blocks/single-product/ProductBreadcrumbs.md`
  - Created: 2026-03-15
  - Replaces outdated `/guidelines/blocks/woocommerce/utility/breadcrumbs.md`

## P2: Medium

- [x] **GL3** — Move block guidelines from `/guidelines/blocks/` root to `/guidelines/blocks/single-product/`. ProductMeta, ProductRating, ProductSummary, ProductTitle already in place. Moved RelatedProducts.md (condensed from 1000+ to ~140 lines per 500-line limit). Old file replaced with redirect. **DONE**
  - Files: `ProductMeta.md`, `ProductRating.md`, `ProductSummary.md`, `ProductTitle.md`, `RelatedProducts.md`
  - Source: `/reports/audits/2026-03-15_guidelines-audit.md`

- [x] **GL4** — Update Guidelines.md to reference `PROMPT-TRIGGERS.md` instead of `PROMPT_TRIGGER_SYSTEM.md` ✅ **COMPLETE**
  - Fixed during cleanup session 2026-03-15
  - File: `/guidelines/Guidelines.md` Section 7, Process sub-section
  - Source: `/reports/audits/2026-03-15_guidelines-audit.md`

## P3: Low

- [x] **GL5** — Condensed `/guidelines/README.md` from 745 lines to ~55 lines. Removed outdated v2.10 references, @phosphor-icons mentions, and redundant content already covered by Guidelines.md v3.0. Now a minimal directory pointer. ✅ **COMPLETE**
  - Source: `/reports/audits/2026-03-15_guidelines-audit.md`

---

**Total:** 5 tasks | 5 complete | 0 open  
**Progress:** 100% ✅ **DOMAIN COMPLETE**