# CSS Task List

**Domain:** CSS Architecture & Optimization  
**Status:** ⏳ Active  
**Created:** 2026-03-15  
**Last Updated:** 2026-03-16  
**Source:** CSS audits (March 15 + March 16)

---

## P1: Critical CSS Issues

- [x] **CSS1** — Verified all 288 CSS @imports in `/styles/globals.css` resolve correctly — zero 404s. Found 8 PlayPocket section CSS files that existed but were NOT imported. Added all 8 @imports. ✅ **COMPLETE**
- [x] **CSS2** — Audited all component files for remaining Tailwind utility classes. Found only 3 `flex-1` instances in `CookieConsent.tsx` — replaced with BEM class. Zero other Tailwind classes found. ✅ **COMPLETE**
- [x] **CSS3** — Added missing `.wc-related-products__grid` styles to related-products.css. ✅ **COMPLETE**

### P2: CSS Optimization

- [x] **CSS4** — Reviewed sweep-cleanup.css — file IS needed. Flagged for splitting. ✅ **COMPLETE**
- [x] **CSS5** — Split `sweep-cleanup.css` (1980 lines) into 10 domain-aligned files under 200 lines each. ✅ **COMPLETE**
- [x] **CSS6** — Reviewed all 9 legacy section CSS files. All actively used and under 200 lines. ✅ **COMPLETE**
- [x] **CSS7** — Audited all CSS variables. Removed 9 unused variables. Count: 278 → 269. ✅ **COMPLETE**

### P3: CSS Architecture

- [x] **CSS8** — BEM naming consistency audit. 5 active conventions, all intentional. 92% BEM compliant. ✅ **COMPLETE**
- [x] **CSS9** — Rewrote `/guidelines/development/css-optimization-guidelines.md` v2.0. Updated from generic LightSpeed scope to PlayPocket-specific. Added "Current Architecture Overview" section with actual file counts (280 @imports, 130+ block files, 97 section files, 20 block subdirectories), naming conventions table, token resolution chain, dark mode architecture, and file size limits. Condensed from 610+ lines to ~280 lines. ✅ **COMPLETE**
- [x] **CSS10** — Dark mode `!important` audit complete. 60 instances across 8 files: 4 acceptable (prefers-reduced-motion), 3 acceptable (utility overrides with CSS variables), 53 deferred (funky-* files per CSS28/TK20). Zero non-funky `.dark` rules use `!important`. ✅ **COMPLETE**
- [ ] **CSS11** — Create CSS file index documenting what each file in `/src/styles/blocks/` covers

---

## Audit Findings — March 15, 2026

### P1: Critical

- [x] **CSS12** — Missing @import: `loyalty-retro.css` not imported in globals.css ✅ **COMPLETE**
- [x] **CSS13** — `text-neon-*` utility classes across 8 order block components (25+ occurrences) ✅ **COMPLETE**

### P2: Architecture

- [x] **CSS14** — Extracted funky checkout from globals.css. ✅ **COMPLETE**
- [x] **CSS15** — Removed duplicate accordion CSS. ✅ **COMPLETE**
- [x] **CSS16** — Replaced inline style in CartTotals.tsx. ✅ **COMPLETE**
- [x] **CSS17** — Removed inline style from MainFooter.tsx. ✅ **COMPLETE**
- [x] **CSS18** — Removed Tailwind-style breakpoint prefixes from order components. ✅ **COMPLETE**

---

## Audit Findings — March 16, 2026

*Source: `audit css` + `audit tokens` + `apply bem` reports*

### P1: Fixed in Cleanup

- [x] **CSS19** — Merged duplicate footer CSS: `blocks/theme/footer.css` → `blocks/layout/footer.css` (canonical). Deleted duplicate, removed @import. Fixed hardcoded hex → CSS variables. ✅ **COMPLETE**
- [x] **CSS20** — Resolved dark mode triple override: consolidated `--wp--preset--*` dark tokens into `theme-variables.css` single source. Fixed background token: `--color-inset` → `--color-paper`. ✅ **COMPLETE**
- [x] **CSS21** — Deleted orphaned `/src/styles/tokens/` directory (3 dead files never imported). ✅ **COMPLETE**
- [x] **CSS22** — Fixed Logo.tsx inline `style={{ height: '48px' }}` → `.wp-site-logo` CSS class. ✅ **COMPLETE**
- [x] **CSS23** — Updated stale "42 files" comment → "95 files" in globals.css. ✅ **COMPLETE**

### P1: Fixed in Apply BEM

- [x] **CSS24** — Replaced 26 hardcoded hex values across 10 section CSS files (hero, flash-sale, stats, how-it-works, instagram-feed, social-feed, patterns, category-grid, comparison-table, product-comparison) with CSS variables. Zero new hardcoded values. ✅ **COMPLETE**

### P2: Open

- [ ] **CSS25** — Split `account-dashboard-widgets.css` (471 lines → 200-line limit). Needs splitting by BEM block.
  - Source: `/reports/css/2026-03-16_css-architecture-audit.md` F6

- [ ] **CSS26** — Extract inline mobile menu CSS (lines 390-430 of globals.css) to block file. Verify no duplication with `blocks/navigation/mobile-menu.css`.
  - Source: `/reports/css/2026-03-16_css-architecture-audit.md` F4

### P3: Deferred

- [ ] **CSS27** — Extract inline styles from `PageLivePreview.tsx` (24+) and `PageShowcase.tsx` (10+) to CSS. Dev-only pages, low user impact.
  - Source: `/reports/bem/2026-03-16_apply-bem-report.md`

- [ ] **CSS28** — Funky mega menu has 40+ hardcoded hex values in `blocks/navigation/mega-menu.css`. Deferred until funky component retirement.
  - Source: `/reports/bem/2026-03-16_apply-bem-report.md`

---

### Apply BEM: Blog Format Archives (March 16)

- [x] **CSS29** — Fixed PageNewsletter.tsx: removed inline `style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}` → `.wp-newsletter-page` CSS class in `newsletter.css`. ✅ **COMPLETE**
- [x] **CSS30** — Renamed `archive-audio` → `wp-archive-audio` (BEM prefix compliance). Updated ArchiveAudio.tsx (25 class refs) + created `blog-archive-audio.css` (282 lines). Replaced hardcoded `white` → `var(--wp--preset--color--white)`, `#cc00cc` → `var(--page-secondary)`. ✅ **COMPLETE**
- [x] **CSS31** — Renamed `archive-video` → `wp-archive-video` (BEM prefix compliance). Updated ArchiveVideo.tsx (24 class refs) + created `blog-archive-video.css` (261 lines). Replaced `#ff4444` → `var(--page-youtube-red)` scoped token. ✅ **COMPLETE**
- [x] **CSS32** — Renamed `archive-gallery` → `wp-archive-gallery` (BEM prefix compliance). Updated ArchiveGallery.tsx (16 class refs) + created `blog-archive-gallery.css` (218 lines). Replaced `#2d0059` → `var(--page-primary)`, `white` → `var(--wp--preset--color--white)`. ✅ **COMPLETE**
- [x] **CSS33** — Split `blog-format-archives-funky.css` (1074 lines) → 3 standalone files + reduced original to aside-only overrides (83 lines). Added 3 @imports to globals.css. ✅ **COMPLETE**
- [x] **CSS34** — ArchiveAside.tsx already BEM-compliant with `wp-archive-aside` prefix. No changes needed. Base styles in `sweep-shop-misc.css`, funky overrides in `blog-format-archives-funky.css`. ✅ **COMPLETE**

---

**Total:** 34 tasks | 31 complete | 3 open  
**Progress:** 91.2%