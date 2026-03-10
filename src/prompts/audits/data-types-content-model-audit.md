# Audit Prompt A2: Data & Types Content Model Audit

**Version:** 1.0  
**Created:** February 21, 2026  
**Orchestrator:** `/prompts/funky-redesign-orchestrator.md`  
**Report Output:** `/reports/audits/2026-02-21-data-types-content-model-audit.md`  
**Task Output:** `/tasks/data-types-remediation.md`

---

## Objective

Verify the data layer (`/src/app/data/`, `/src/app/types/`) aligns with WordPress/WooCommerce content model standards. Ensure all data files are consumed by at least one template. Identify orphans, duplicates, and schema gaps.

## Pre-Read (Required)

```
/src/app/types/woocommerce.ts     — WooCommerce TypeScript types
/src/app/types/wordpress.ts       — WordPress TypeScript types
/src/app/types/variants.ts        — Product variant types
/guidelines/Guidelines.md         — Section on data architecture
```

## Procedure

### Step 1: Data File Inventory

List ALL 48 files in `/src/app/data/`. For each:
- Record exports (named exports, default exports)
- Record TypeScript types used
- Note data structure (array of objects, single object, functions)

### Step 2: Import Tracing

For EACH data file, search all `.tsx` files for import statements referencing it:
- Search pattern: `from '../../data/{filename}'` or `from '@/data/{filename}'`
- Record which templates/components import each file
- Flag files imported by ZERO components as **ORPHANED**

### Step 3: Root `/data/` Check

Check if `/data/` exists at project root (outside `/src/`):
- If yes, are these duplicates of `/src/app/data/` files?
- Flag for cleanup/deletion

### Step 4: Duplicate Detection

Identify data files with overlapping content:
- `blogData.ts` vs `posts.ts` — likely duplicate
- Any other files with similar exports

### Step 5: Type Coverage Analysis

Review `/src/app/types/woocommerce.ts` for coverage of:
- Simple products
- Variable products (with variants)
- Grouped products
- External/affiliate products
- Subscription products (WooCommerce Subscriptions)
- Bundle products (WooCommerce Bundles)
- Composite products (WooCommerce Composite)
- Product categories and tags
- Product reviews
- Cart/checkout data structures
- Order data structures

### Step 6: WordPress Content Model Alignment

For each data file, verify:
- Field names follow WordPress conventions (e.g., `post_title` not `title` for posts)
- Or if using custom interface, it maps cleanly to WP REST API response format
- Product data follows WooCommerce REST API schema
- Post data follows WordPress REST API schema

### Step 7: Generate Outputs

Save report and task list to specified locations.

## Success Criteria

- Every data file's consumer (or orphan status) is documented
- All type gaps identified with specific recommendations
- Duplicate files flagged with consolidation plan
- Task list provides actionable remediation steps
