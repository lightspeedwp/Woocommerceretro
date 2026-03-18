# Audit Hero — Sub-Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Trigger:** `audit hero`
**Duration:** 15-25 min
**Report:** `/reports/audits/YYYY-MM-DD_hero-audit.md`

---

## Purpose

Audit that ALL pages and templates use a single, consistent hero **template part** component, with context-appropriate hero **pattern** variants and dedicated **data files** powering each pattern.

## Architecture Expectation

```
Template Part (single component):
  └── HeroPart (parts/)
        └── Selects ONE hero pattern based on route context + data

Pattern variants (patterns/):
  ├── HeroRetro              → Homepage hero (product collage, "EXPLORE. COLLECT. LEVEL UP.")
  ├── HeroShopPattern        → Shop pages (category-aware, filterable)
  ├── HeroBlogPattern        → Blog archive (latest post featured)
  ├── HeroDevToolsPattern    → Dev tools pages (title + description, code aesthetic)
  ├── HeroInfoPattern        → Info pages (about, contact, careers, stores)
  ├── HeroAccountPattern     → Account pages (welcome back, user context)
  ├── HeroLegalPattern       → Legal pages (minimal, title-only)
  └── HeroMinimalPattern     → Checkout, error pages (no hero or ultra-minimal)

Data files (data/):
  ├── heroHomepageData.ts    → Homepage hero content (images, titles, CTAs)
  ├── heroShopData.ts        → Shop hero variants by category
  ├── heroBlogData.ts        → Blog hero content
  ├── heroDevToolsData.ts    → Dev tools hero data (title, subtitle, icon per page)
  ├── heroInfoData.ts        → Info page hero data (about, contact, FAQ, etc.)
  └── heroAccountData.ts     → Account page hero data
```

**Key principle:** Every page that has a hero section MUST render it through the same template part. The template part reads route context, selects the matching pattern, and passes the correct data. No template should render hero markup directly or import a hero pattern directly.

## Files to Read

- `/src/app/components/patterns/Hero.tsx` — legacy hero pattern
- `/src/app/components/patterns/HeroRetro.tsx` — retro homepage hero
- `/src/app/components/patterns/sections/HeroSection.tsx` — generic hero section wrapper
- `/src/app/components/patterns/shop/` — shop-specific patterns (look for ShopHero)
- `/src/app/components/patterns/ArchiveHeader.tsx` — archive page hero
- All template files in `/src/app/components/templates/` — scan for inline hero sections
- `/src/app/data/` — existing hero-related data files

## Checks

### Phase 1 — Hero template part existence

1. **Template part exists** — Is there a single `HeroPart` (or equivalent) in `/parts/` that all pages use?
2. **If missing** — Document what exists today and recommend the consolidation path.

### Phase 2 — Current hero usage audit

Scan EVERY template in `/src/app/components/templates/` for hero sections. For each template, document:

3. **Hero method** — How is the hero rendered?
   - `HeroPart` template part (correct)
   - Direct pattern import (needs refactoring)
   - Inline hero markup (needs extraction)
   - No hero at all (may be intentional — document)

4. **Hero data source** — Where does hero content come from?
   - Dedicated data file (correct)
   - Hardcoded in template (needs extraction)
   - Hardcoded in pattern (needs extraction)
   - Props from parent (acceptable if parent uses data file)

Create a full matrix:

```
| Template | Hero Present? | Method | Pattern Used | Data Source | Status |
|----------|--------------|--------|--------------|-------------|--------|
```

### Phase 3 — Pattern inventory

5. **List all hero-like patterns** — Find every component that renders a hero section, even if not named "hero"
6. **Consolidation candidates** — Which patterns could share a common hero pattern with different data?
7. **Unique layouts** — Which hero patterns are genuinely unique (homepage collage, shop with filters) vs. which are just title + subtitle + background with different content?

### Phase 4 — Data file analysis

8. **Existing hero data** — List all data files that contain hero-related content
9. **Missing data files** — Which hero patterns have content hardcoded instead of in data files?
10. **Shared data opportunities** — Can multiple pages share one data file? (e.g., `heroDevToolsData.ts` could power showcase, style guide, icons, live preview pages with a keyed lookup)

### Phase 5 — Dev tools hero audit

11. **Dev tools pages** — List all dev tool routes (`/showcase`, `/style-guide`, `/icons`, `/live-preview`, `/dev/*`)
12. **Dev tools hero consistency** — Do all dev tool pages use the same hero pattern?
13. **Dev tools hero data** — Is there a single `heroDevToolsData.ts` (or equivalent) with entries keyed by page?

### Phase 6 — Template consistency

14. **Inline hero markup** — Search all templates for hero-like sections rendered as raw JSX (look for patterns: banner section at top of page with heading + description + optional CTA)
15. **Direct pattern imports** — Templates importing `HeroRetro`, `Hero`, `HeroSection`, `ArchiveHeader`, `ShopHero` directly instead of through a template part

## Severity Classification

| Priority | Description |
|----------|-------------|
| P0 | No hero template part exists (architecture gap) |
| P1 | Template renders hero via direct pattern import (bypasses template part) |
| P1 | Hero content hardcoded in template (not in data file) |
| P2 | Hero content hardcoded in pattern (not in data file) |
| P2 | Inconsistent hero layout for pages in the same section |
| P3 | Missing hero data file for a section (content works but not data-driven) |
| P3 | Minor visual inconsistencies between hero patterns |

## Output

Write report to `/reports/audits/YYYY-MM-DD_hero-audit.md` with `Status: Unprocessed`.
Do NOT create task lists.

The report should include the full template-by-template matrix from Phase 2, plus a recommended consolidation plan.

---

## Guidelines Referenced

- `/guidelines/overview-parts.md`
- `/guidelines/overview-patterns.md`
- `/guidelines/overview-sections.md`
- `/guidelines/design-tokens/Typography.md`
- `/guidelines/design-tokens/Spacing.md`

---