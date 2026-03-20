# Expand Data — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `expand data`
**Duration:** 20-30 minutes

---

## Objective

Analyse mock data coverage across the project. Identify data files that are missing, incomplete, or have insufficient sample entries. Ensure every content domain (products, categories, blog posts, testimonials, etc.) has realistic, diverse mock data with enough items for pagination, filtering, and edge cases.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — data file organisation
2. Scan `/src/app/data/` — existing data files
3. Read 2-3 data files to understand established patterns

---

## Execution Steps

### Phase 1: Inventory data files (5 min)

| Data File | Domain | Items | TypeScript Interface | Consumers |
|-----------|--------|-------|---------------------|-----------|
| products.ts | Products | 12 | Product | ProductGrid, ProductCard |
| ... | ... | ... | ... | ... |

### Phase 2: Assess coverage (5-10 min)

**Minimum data requirements for a realistic prototype:**

| Domain | Min Items | Min Categories | Edge Cases Needed |
|--------|-----------|---------------|-------------------|
| Products | 24+ | 4+ categories | Out of stock, on sale, new, variable, no image |
| Categories | 8+ | 2 levels deep | Empty category, single-product category |
| Blog posts | 12+ | 3+ categories | No image, long title, short excerpt |
| Authors | 4+ | — | No avatar, long bio |
| Testimonials | 6+ | — | 1-star, 5-star, long quote, short quote |
| FAQ items | 10+ | 3+ categories | Long answer, multi-paragraph |
| Team members | 4+ | — | No photo, long bio |
| Navigation | All routes | All sections | Deep nesting, external links |
| Footer links | All columns | — | |
| Social links | 4+ platforms | — | |

For each domain, mark: ✅ COMPLETE | ⚠️ PARTIAL (items < minimum) | ❌ MISSING

### Phase 3: Check data quality (5-10 min)

For existing data files, check:

1. **Type safety** — does every file have TypeScript interfaces?
2. **Unique IDs** — does every item have a unique `id` field?
3. **Realistic content** — are names/descriptions realistic (not "Lorem ipsum")?
4. **Image references** — do image fields reference real assets or valid placeholders?
5. **Consistent shape** — do all items in an array have the same fields?
6. **Edge cases** — are there items that test boundary conditions?
7. **File size** — any files over 250 lines that need splitting?

### Phase 4: Recommend data additions (5-10 min)

```markdown
### Data [N]: [domain]-data.ts

**Status:** Missing / Incomplete
**Current items:** [N] (need [M]+)
**Missing fields:** [list]
**Missing edge cases:** [list]
**Action:** Create / Add [N] items / Add fields / Split file
**Priority:** P0 (blocks component rendering) / P1 (needed for UX) / P2 (polish)
```

### Phase 5: Summary (2 min)

```
Data expansion analysis complete.
- Data files: [X] existing, [Y] missing
- Coverage: [A] ✅ complete | [B] ⚠️ partial | [C] ❌ missing
- Total items needed: [N] across [M] domains
- Recommendations: P0: [N] | P1: [N] | P2: [N]

→ Next: Say "update data" to migrate hardcoded content and create missing data files.
→ Or: Say "continue" to build the highest-priority data file.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/development/modern-react-coding-standards.md`

---

**Version:** 1.0
**Trigger Word:** `expand data`
