# Master Task List

**Last Updated:** 2026-03-16  
**Status:** Active  
**Guidelines Version:** v3.1

---

## Sub-Task List Registry

| Task List | Domain | Status | Progress | Last Updated |
|-----------|--------|--------|----------|-------------|
| `/tasks/css-task-list.md` | CSS Architecture | ⏳ Active | 31/34 (91%) | 2026-03-16 |
| `/tasks/tokens-task-list.md` | Design Tokens | ⏳ Active | 8/20 (40%) | 2026-03-16 |
| `/tasks/routes-task-list.md` | Routes / Sitemap | ⏳ Active | 3/14 (21%) | 2026-03-15 |
| `/tasks/a11y-task-list.md` | Accessibility | ⏳ Active | 0/16 (0%) | 2026-03-15 |
| `/tasks/data-task-list.md` | Data Files | ⏳ Active | 0/3 (0%) | 2026-03-15 |
| `/tasks/responsive-task-list.md` | Responsive | ⏳ Active | 0/2 (0%) | 2026-03-15 |
| `/tasks/2026-03-16-audit-task-list.md` | Combined Audit | ⏳ Active | 14/16 (88%) | 2026-03-16 |
| `/tasks/phosphor-migration-task-list.md` | Icon Migration | ⏳ Active | Phase 1 (2/3) | 2026-03-16 |
| `/tasks/blocks-guidelines-gaps.md` | Block Guidelines | ⏳ Active | P0-P2 100%, structural 1/3 | 2026-03-15 |
| `/tasks/patterns-guidelines-gaps.md` | Pattern Guidelines | 🆕 Not Started | 0% | 2026-02-21 |
| `/tasks/guidelines-remediation.md` | Guideline Rewrites | ⏳ Partial | ~20% | 2026-03-12 |
| `/tasks/data-types-remediation.md` | Data & Types | 🆕 Not Started | 0% | 2026-02-21 |
| `/tasks/stylesheet-architecture-migration-tasks.md` | CSS Migration | ⏳ Partial | Phase 1-2 done | 2026-03-13 |
| `/tasks/css-gradual-reenable-testing-plan.md` | CSS Testing | ⏳ Partial | Phase 1 done | 2026-03-13 |
| `/tasks/reports-cleanup.md` | Reports | ⏳ Near-complete | 3/5 (60%) | 2026-03-13 |

### Archived (complete — see `/tasks/archive/completed-2026-03/`)

| Task List | Domain | Completed |
|-----------|--------|-----------|
| `guidelines-task-list.md` | Guidelines Compliance | 2026-03-16 (5/5) |
| `component-compliance-fixes.md` | Component Compliance | 2026-03-14 (1/1) |
| `2026-03-15-audit-task-list.md` | 9-Domain Audit | 2026-03-16 (21/22, 1 blocked) |
| `lucide-replacement-tasks.md` | Lucide→Phosphor | 2026-03-10 |
| `parts-guidelines-gaps.md` | Parts Guidelines | 2026-02-23 |
| `retro-routing-consolidation.md` | Route Consolidation | 2026-03-11 |
| `product-data-expansion.md` | Product Data | 2026-03-10 |

---

## Priority Summary

### High priority (blocking current work)

| ID | Task | Source | Domain |
|----|------|--------|--------|
| CSS25 | Split `account-dashboard-widgets.css` (471 lines) | css-task-list | CSS |
| TK2 | Verify all components use CSS variables for colors | tokens-task-list | Tokens |
| P1.3 | Verify phosphor-compat renders correctly | phosphor-migration | Icons |

### Medium priority (quality improvements)

| ID | Task | Source | Domain |
|----|------|--------|--------|
| CSS11 | Create CSS file index for `/src/styles/blocks/` | css-task-list | CSS |
| CSS26 | Extract inline mobile menu CSS from globals.css | css-task-list | CSS |
| T13 | Add `--wp--preset--font-size--xs` token | 2026-03-16 audit | Tokens |
| TK3 | Document retro↔WordPress token mapping | tokens-task-list | Tokens |
| TK5 | Create shadow/elevation token scale | tokens-task-list | Tokens |
| TK6 | Create animation duration tokens | tokens-task-list | Tokens |
| TK8 | Review spacing token usage | tokens-task-list | Tokens |
| TK18 | Align success/warning/alert to AAA values | tokens-task-list | Tokens |
| TK19 | Complete neutral ramp dark mode overrides | tokens-task-list | Tokens |
| R4-R6 | Verify navigation data links resolve | routes-task-list | Routes |
| R12 | Orphaned PageDealsRetro.tsx template | routes-task-list | Routes |
| RESP1 | ShopHero 80vh min-height on mobile | responsive-task-list | Responsive |
| DATA1-3 | Data file audits + naming | data-task-list | Data |
| Phase 2 | Migrate 22 direct lucide-react imports | phosphor-migration | Icons |

### Low priority (deferred/documentation)

| ID | Task | Source | Domain |
|----|------|--------|--------|
| CSS27-28 | Dev page inline styles, funky mega menu hex | css-task-list | CSS |
| T15-T16 | Tailwind comments cleanup, missing tokens | 2026-03-16 audit | CSS |
| TK9-11 | Update Colors/Dark-Mode/Typography docs | tokens-task-list | Tokens |
| TK20 | Plan funky token deprecation | tokens-task-list | Tokens |
| R7-R14 | Route optimization, docs, consistency | routes-task-list | Routes |
| A11Y1-16 | Full accessibility audit (16 items) | a11y-task-list | A11y |
| RESP2 | Mobile menu hardcoded max-width | responsive-task-list | Responsive |
| T4.37-38 | Block guideline reorganization | blocks-guidelines-gaps | Guidelines |
| T5.1-T5.21 | Pattern guidelines (21 items) | patterns-guidelines-gaps | Guidelines |
| T1.1-T1.15 | Guideline remediation (15 items) | guidelines-remediation | Guidelines |
| T2.1-T2.11 | Data & types remediation (11 items) | data-types-remediation | Data |
| Phase 3-6 | Stylesheet migration remaining phases | stylesheet-migration | CSS |
| T3.6-T3.7 | Reports README update | reports-cleanup | Reports |

---

## Aggregate Stats

| Metric | Count |
|--------|-------|
| **Active task lists** | 15 |
| **Archived task lists** | 7 |
| **Total open tasks** | ~120 |
| **High priority open** | 3 |
| **Medium priority open** | 14 |
| **Low priority open** | ~99 |
| **Domains with 0% progress** | 4 (a11y, data, responsive, pattern guidelines) |

---

## 🗂️ Latest Session — March 16, 2026 (BEM + CSS10 audit + T9 font tokens)

### SingleProductRetro BEM re-alignment ✅ **COMPLETE**

- [x] Created `/src/styles/sections/single-product-retro.css` with proper BEM naming (`retro-sp__element--modifier`)
- [x] Fixed TSX↔CSS class name mismatch (TSX had `retro-sp__*`, CSS had flat `retro-sp-*`)
- [x] Fixed 2 BEM nesting violations: `retro-sp__info-table__label` → `retro-sp__info-label`, `retro-sp__related__heading` → `retro-sp__related-heading`
- [x] Added @import to globals.css
- [x] All hardcoded values replaced with `--wp--preset--*` CSS variables with fallbacks

### CSS10 — Dark mode `!important` audit ✅ **COMPLETE**

- [x] Scanned 280+ CSS files — found 60 `!important` instances across 8 files
- [x] 4 acceptable (prefers-reduced-motion), 3 acceptable (utility classes with CSS vars), 53 deferred (funky-* per CSS28/TK20)
- [x] **Zero** non-funky `.dark` rules use `!important` — dark mode CSS variable system is clean
- [x] Report: `/reports/css/2026-03-16_dark-mode-important-audit.md`

### T9 — Hardcoded font-size tokenization ✅ **COMPLETE**

- [x] Replaced 12 hardcoded `font-size` values across 4 section CSS files with `--wp--preset--font-size--*` tokens
- [x] `hero.css` (2): heading `--900`, mobile override `--700`
- [x] `flash-sale.css` (7): title/discount/description/button tokenized
- [x] `instagram-feed.css` (1): badge `--xs`
- [x] `comparison-table.css` (2): badge + description `--xs`
- [x] Remaining ~40 in `front-page-funky.css` are mostly dead code from legacy single product styles

**2026-03-16 audit progress:** 14/16 (88%)
**CSS task list progress:** 31/34 (91%)

**Next Task:** CSS25 — Split `account-dashboard-widgets.css`, or TK2 — Verify CSS variable usage for colors