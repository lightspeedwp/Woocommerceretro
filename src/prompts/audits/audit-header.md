# Audit Header — Sub-Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Trigger:** `audit header`
**Duration:** 10-15 min
**Report:** `/reports/audits/YYYY-MM-DD_header-audit.md`

---

## Purpose

Audit that the site uses a single, consistent header **template part** across all routes, with context-appropriate **pattern** variants loaded based on the current section of the site.

## Architecture Expectation

```
Template Part (single component):
  └── HeaderRetro (parts/)
        └── Renders ONE pattern based on route context

Pattern variants (patterns/):
  ├── HeaderRetroPattern       → Main site (shop, blog, info, legal, support, account)
  ├── HeaderHomepagePattern    → Homepage (transparent, no breadcrumbs)
  ├── HeaderDevToolsPattern    → Dev tools section (different nav, different branding)
  ├── HeaderCheckoutPattern    → Checkout flow (minimal, trust-focused)
  └── [future patterns]        → New sections get new patterns, same template part
```

**Key principle:** Every route MUST render the header through the same template part component. The template part selects the correct pattern. No template should import a header pattern directly.

## Files to Read

- `/src/app/components/parts/HeaderRetro.tsx` — primary header template part
- `/src/app/components/parts/Header.tsx` — legacy header (should be retired or aliased)
- `/src/app/components/parts/MainHeader.tsx` — if exists, assess purpose
- `/src/app/components/parts/CheckoutHeader.tsx` — checkout variant
- `/src/app/components/parts/DevToolsSubHeader.tsx` — dev tools variant
- `/src/app/components/patterns/HeaderRetroPattern.tsx` — main header pattern
- `/src/app/contexts/SiteLayoutContext.tsx` — shared chrome system
- `/routes.ts` — all route definitions

## Checks

### 1. Template part consolidation

1. **Single entry point** — Is there exactly ONE header template part that all routes use?
2. **Legacy parts** — Are `Header.tsx`, `MainHeader.tsx` still imported by any route or layout? Should they be retired?
3. **SiteLayout integration** — Does `SiteLayout` render the header template part? Do all routes use `SiteLayout`?
4. **Duplicate rendering** — Any route rendering a header both via `SiteLayout` and inline?

### 2. Pattern selection logic

5. **Context awareness** — Does the header template part select different patterns based on route context?
6. **Homepage pattern** — Does the homepage get a distinct header (transparent background, no breadcrumbs)?
7. **Dev tools pattern** — Do `/dev/*`, `/showcase`, `/style-guide`, `/icons`, `/live-preview` routes get a dev-specific header?
8. **Checkout pattern** — Do `/cart`, `/checkout`, `/order-confirmation` get a minimal header?
9. **Fallback pattern** — Is there a default pattern for routes that don't match any specific context?

### 3. Breadcrumb integration

10. **Homepage exempt** — Homepage must NOT render breadcrumbs
11. **Other pages** — All non-homepage pages should render breadcrumbs (either in the header pattern or immediately below it)
12. **Breadcrumb data** — Is breadcrumb data derived from route context or hardcoded?

### 4. Consistency audit

13. **Direct pattern imports** — Search all template files for direct imports of `HeaderRetroPattern`, `CheckoutHeader`, `DevToolsSubHeader`. These should go through the template part, not be imported directly.
14. **Orphaned header parts** — Any header-related components in `parts/` with zero consumers?
15. **Nav data consistency** — Do all header patterns use the same navigation data source (`megaMenuData.ts`), or do different patterns use different data?

## Severity Classification

| Priority | Description |
|----------|-------------|
| P0 | Route renders no header at all |
| P0 | Route bypasses template part and imports pattern directly |
| P1 | No pattern selection logic (same header everywhere) |
| P1 | Homepage shows breadcrumbs or non-transparent header |
| P2 | Legacy header components still imported somewhere |
| P2 | Dev tools using main site header instead of dev pattern |
| P3 | Orphaned header parts, minor inconsistencies |

## Guidelines Referenced

- `/guidelines/overview-parts.md`
- `/guidelines/overview-patterns.md`
- `/guidelines/ROUTING_GUIDE.md`
- `/guidelines/NAVIGATION_QUICK_REFERENCE.md`

---