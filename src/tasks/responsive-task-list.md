# Responsive Task List

**Domain:** Responsive Patterns  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-15  
**Source:** process reports — from `/reports/audits/2026-03-15_responsive-audit.md`

---

## P2: Medium

- [ ] **RESP1** — ShopHero forces 80vh min-height on all screens — verify mobile behavior
  - File: `/src/app/components/patterns/shop/ShopHero.tsx` line 18
  - Consider `clamp()` or mobile-specific override
  - Source: `/reports/audits/2026-03-15_responsive-audit.md`

## P3: Low

- [ ] **RESP2** — globals.css mobile menu has hardcoded `max-width: 380px`
  - File: `/styles/globals.css` line 372
  - Consider `min(85%, 380px)` or CSS variable
  - Source: `/reports/audits/2026-03-15_responsive-audit.md`

---

**Total:** 2 tasks | 0 complete | 2 open  
**Progress:** 0%
