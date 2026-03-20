# Update Status — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update status`
**Duration:** 10-15 minutes

---

## Objective

Actively update all project status indicators — component counts, route counts, CSS file counts, task completion totals, guideline counts — across all files that display project metrics. Unlike `status` (read-only summary), this trigger writes updated numbers.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — current project structure and counts

---

## Execution Steps

### Phase 1: Count current assets (5 min)

Scan the codebase and build a metrics table:

| Metric | Source | Count |
|--------|--------|-------|
| Templates | `/src/app/templates/*.tsx` | ? |
| Parts | `/src/app/components/parts/**/*.tsx` | ? |
| Patterns | `/src/app/components/patterns/**/*.tsx` | ? |
| Blocks | `/src/app/components/blocks/**/*.tsx` | ? |
| Common | `/src/app/components/common/**/*.tsx` | ? |
| Contexts | `/src/app/contexts/*.tsx` | ? |
| Hooks | `/src/app/hooks/*.ts` | ? |
| Data files | `/src/app/data/*.ts` | ? |
| Routes (total) | `/routes.ts` | ? |
| CSS root files | `/src/styles/*.css` | ? |
| CSS block files | `/src/styles/blocks/**/*.css` | ? |
| CSS section files | `/src/styles/sections/*.css` | ? |
| Guidelines | `/guidelines/**/*.md` | ? |
| Prompts | `/prompts/**/*.md` | ? |
| Active task files | `/tasks/*.md` | ? |
| Active reports | `/reports/**/*.md` (excl. archive) | ? |
| Registered triggers | Count from PROMPT-TRIGGERS.md | ? |

### Phase 2: Update Guidelines.md (3-5 min)

Update Section 4.2 Source Code table with current counts:
- Templates count
- Parts count
- Patterns count
- Blocks count
- Common count
- Contexts count
- Hooks count
- Data files count

Update Section 4.3 CSS Architecture with current counts:
- Block CSS file count
- Section CSS file count

### Phase 3: Update DevTools/Sitemap components (3-5 min)

1. Find and update any component that displays project statistics:
   - Sitemap component — route counts, section counts
   - DevTools index — tool counts, metric counts
   - Any dashboard component — file counts

2. Update constants/data files that store these metrics

### Phase 4: Update README.md (2 min)

If `/README.md` contains project statistics, update them to match current counts.

### Phase 5: Summary (2 min)

```
Status updated.
- Metrics recalculated across [X] source directories
- Files updated: [list files with updated counts]
- Key changes:
  - Templates: [old] → [new]
  - Components: [old] → [new]
  - CSS files: [old] → [new]
  - Routes: [old] → [new]
  - Triggers: [old] → [new]

→ Next: Say "status" for a read-only summary.
→ Or: Say "update guidelines" to refresh guideline content.
```

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `update status`
