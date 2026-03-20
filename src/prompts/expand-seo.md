# Expand SEO — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand seo`
**Duration:** 15-25 minutes

---

## Objective

Scan all templates and pages for missing SEO patterns — document titles, meta descriptions, Open Graph tags, structured data (JSON-LD schema markup), canonical URLs, and internal linking opportunities. Recommend a centralised SEO data system and missing page-level metadata.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — project structure
2. Scan `/src/app/templates/` — all page templates
3. Scan `/src/app/data/` — check for existing SEO/meta data files
4. Check for any existing `<Helmet>`, `useDocumentTitle`, or `<head>` management

---

## Execution Steps

### Phase 1: Audit current SEO patterns (5-10 min)

For each template/page, check:

| Page | `<title>` | Meta Description | OG Tags | Schema/JSON-LD | Canonical | H1 Present |
|------|-----------|-----------------|---------|---------------|-----------|------------|
| Home | ? | ? | ? | ? | ? | ? |
| Product | ? | ? | ? | ? | ? | ? |

### Phase 2: Check SEO infrastructure (3-5 min)

- [ ] Document title management (react-helmet, useDocumentTitle hook, or document.title)
- [ ] Meta tag component or utility
- [ ] SEO data file with per-page metadata
- [ ] Structured data component (JSON-LD output)
- [ ] Sitemap.xml generation (or static sitemap component)
- [ ] robots.txt equivalent
- [ ] Canonical URL pattern
- [ ] Breadcrumb structured data (BreadcrumbList schema)
- [ ] Product structured data (Product schema for WooCommerce)

### Phase 3: Analyse internal linking (3-5 min)

1. Pages with no internal links to other content
2. Key pages not linked from enough other pages (e.g., product categories)
3. Missing "related content" sections that would improve link equity
4. Blog posts without category/tag links

### Phase 4: Recommend SEO additions (5-10 min)

```markdown
### SEO [N]: [Feature]

**Type:** Meta / Schema / Linking / Infrastructure
**Affected pages:** [list or "all"]
**Priority:** P0 (missing titles/descriptions) / P1 (missing schema) / P2 (optimisation)
**Implementation:** [Data file entry / Component / Hook / Utility]
```

**Recommended SEO data structure:**
```typescript
// /src/app/data/seo-data.ts
export interface PageSEO {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
  schema?: object; // JSON-LD
}
```

### Phase 5: Summary (2 min)

```
SEO expansion analysis complete.
- Pages audited: [X]
- Pages with complete SEO: [A]
- Pages missing titles: [B]
- Pages missing meta descriptions: [C]
- Pages missing schema markup: [D]
- Internal linking gaps: [E]
- Recommendations: P0: [N] | P1: [N] | P2: [N]

→ Next: Say "continue" to implement SEO improvements.
→ Or: Say "update data" to create the SEO data file.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/overview-templates.md`

---

**Version:** 1.0
**Trigger Word:** `expand seo`
