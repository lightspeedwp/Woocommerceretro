# Audit Footer — Sub-Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Trigger:** `audit footer`
**Duration:** 10-15 min
**Report:** `/reports/audits/YYYY-MM-DD_footer-audit.md`

---

## Purpose

Audit that the site uses a single, consistent footer **template part** across all routes, with context-appropriate **pattern** variants for the main site and dev tools sections.

## Architecture Expectation

```
Template Part (single component):
  └── FooterRetro (parts/)
        └── Renders ONE pattern based on route context

Pattern variants (patterns/):
  ├── FooterRetroPattern       → Main site (full footer with links, newsletter, social)
  ├── FooterDevToolsPattern    → Dev tools section (minimal, different links)
  ├── FooterCheckoutPattern    → Checkout flow (minimal trust/legal links only)
  └── [future patterns]        → New sections get new patterns, same template part
```

**Key principle:** Every route MUST render the footer through the same template part component. The template part selects the correct pattern. No template should import a footer pattern directly.

## Files to Read

- `/src/app/components/parts/FooterRetro.tsx` — primary footer template part
- `/src/app/components/parts/Footer.tsx` — legacy footer
- `/src/app/components/parts/MainFooter.tsx` — legacy or alternate footer
- `/src/app/components/parts/CheckoutFooter.tsx` — checkout variant
- `/src/app/components/parts/DevToolsSubFooter.tsx` — dev tools variant
- `/src/app/components/parts/ShopInfoFooter.tsx` — shop info strip
- `/src/app/components/patterns/FooterRetroPattern.tsx` — main footer pattern
- `/src/app/contexts/SiteLayoutContext.tsx` — shared chrome system
- `/routes.ts` — all route definitions

## Checks

### 1. Template part consolidation

1. **Single entry point** — Is there exactly ONE footer template part that all routes use?
2. **Legacy parts** — Are `Footer.tsx`, `MainFooter.tsx` still imported by any route or layout? Should they be retired?
3. **SiteLayout integration** — Does `SiteLayout` render the footer template part? Do all routes use `SiteLayout`?
4. **Duplicate rendering** — Any route rendering a footer both via `SiteLayout` and inline?

### 2. Pattern selection logic

5. **Context awareness** — Does the footer template part select different patterns based on route context?
6. **Main site pattern** — Does the main site footer include navigation links, newsletter signup, social links, legal links?
7. **Dev tools pattern** — Do dev tool routes get a distinct footer (different links, simpler layout)?
8. **Checkout pattern** — Do checkout routes get a minimal footer (trust badges, legal links only)?
9. **Fallback pattern** — Is there a default pattern for routes that don't match any specific context?

### 3. Content audit

10. **Newsletter integration** — Is the newsletter signup in the footer wired to a shared data source?
11. **Social links** — Are social links sourced from `/src/app/data/site.ts` or hardcoded?
12. **Legal links** — Do footer legal links (privacy, terms, shipping) match actual routes in `routes.ts`?
13. **Copyright year** — Is the copyright year dynamic or hardcoded?

### 4. Consistency audit

14. **Direct pattern imports** — Search all template files for direct imports of `FooterRetroPattern`, `CheckoutFooter`, `DevToolsSubFooter`. These should go through the template part.
15. **Orphaned footer parts** — Any footer-related components in `parts/` with zero consumers?
16. **ShopInfoFooter** — Is this a separate component or integrated into the footer pattern? Should it be?

## Severity Classification

| Priority | Description |
|----------|-------------|
| P0 | Route renders no footer at all |
| P0 | Route bypasses template part and imports pattern directly |
| P1 | No pattern selection logic (same footer everywhere) |
| P1 | Dev tools rendering main site footer with irrelevant links |
| P2 | Legacy footer components still imported somewhere |
| P2 | Hardcoded social links or copyright year |
| P3 | Orphaned footer parts, minor content inconsistencies |

## Guidelines Referenced

- `/guidelines/overview-parts.md`
- `/guidelines/overview-patterns.md`
- `/guidelines/ROUTING_GUIDE.md`

---