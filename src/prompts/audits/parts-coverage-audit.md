# Audit Prompt A6: Parts Coverage Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-parts-coverage-audit.md`  
**Task Output:** `/tasks/parts-guidelines-gaps.md`

---

## Objective

Verify every part component in `/src/app/components/parts/` has a corresponding guideline in `/guidelines/parts/`. Parts are the most critical components (Header, Footer, Layout) — significant gaps are expected.

## Pre-Read (Required)

```
/guidelines/overview-parts.md          — Parts architecture overview
/guidelines/WRITING_GUIDELINES.md      — Standards for writing guidelines
```

## Procedure

### Step 1: Component Inventory

List ALL 21 files in `/src/app/components/parts/`:
- AboutMegaMenu.tsx, BlogMegaMenu.tsx, Breadcrumbs.tsx, BreadcrumbsBar.tsx
- CheckoutFooter.tsx, CheckoutHeader.tsx, CheckoutLayout.tsx
- ContactMegaMenu.tsx, Footer.tsx, Header.tsx, Layout.tsx
- MainFooter.tsx, MainHeader.tsx, MiniCart.tsx, MobileMenu.tsx
- PromotionsMegaMenu.tsx, SearchOverlay.tsx, ShopInfoFooter.tsx
- ShopMegaMenu.tsx, ShopSidebar.tsx, StoreNotices.tsx

### Step 2: Guideline Inventory

List ALL files in `/guidelines/parts/` (currently 4 files + menus subdir):
- CheckoutHeader.md, CheckoutLayout.md, Footer.md, Header.md
- `/menus/` subdirectory contents

### Step 3: Gap Analysis

Expected significant gaps — 21 components, only ~5 guidelines.
Missing guidelines likely include:
- Layout.tsx, MiniCart.tsx, MobileMenu.tsx, SearchOverlay.tsx
- All MegaMenu components (5 files)
- BreadcrumbsBar.tsx, StoreNotices.tsx
- MainHeader.tsx vs Header.tsx distinction
- MainFooter.tsx vs Footer.tsx distinction

### Step 4: Duplication Analysis

Identify potential component duplication:
- Footer.tsx vs MainFooter.tsx — are these the same?
- Header.tsx vs MainHeader.tsx — are these the same?
- Breadcrumbs.tsx vs BreadcrumbsBar.tsx — overlap?

### Step 5: Priority Assessment

ALL parts are high priority since they appear on every page:
- P0: Layout, MainHeader, MainFooter, MiniCart (every page)
- P1: MobileMenu, SearchOverlay, BreadcrumbsBar (most pages)
- P2: CheckoutHeader, CheckoutFooter, CheckoutLayout (checkout only)
- P3: MegaMenu components, StoreNotices, ShopSidebar

### Step 6: Generate Outputs

Save report and task list per orchestrator format.

## Success Criteria

- All 21 parts catalogued with guideline status
- Duplication issues identified
- Priority-ordered task list for missing guidelines
