# Fix Routes Prompt

**Trigger:** `fix routes`
**Version:** 1.0
**Created:** March 15, 2026
**Duration:** 20-40 min
**Type:** Action (modifies files)

---

## Purpose

Validate and repair all routes, navigation links, and dynamic content slugs across the entire codebase. This prompt fixes broken links, syncs route definitions with data files, and ensures all navigation menus point to valid routes.

---

## URL Pattern Rules

All routes follow these canonical patterns. No `/slug/` segment in URLs.

| Content Type | Pattern | Example |
|-------------|---------|---------|
| Product | `/product/:slug` | `/product/pixel-power-tee` |
| Product Category | `/category/:slug` | `/category/accessories` |
| Product Tag | `/tag/:slug` | `/tag/retro` |
| Blog Post | `/blog/:slug` | `/blog/open-channels-ash-shaw` |
| Blog Category | `/blog/category/:slug` | `/blog/category/development` |
| Blog Tag | `/blog/tag/:slug` | `/blog/tag/wordpress` |
| Blog Author | `/blog/author/:slug` | `/blog/author/alex-morgan` |
| Subscription | `/subscription/:slug` | `/subscription/monthly-box` |
| Membership | `/membership/:slug` | `/membership/premium` |

**Key rules:**
- All dynamic route params use `:slug` (never `:id`, `:categorySlug`, `:tagSlug`, `:authorSlug`)
- Components resolve the param via `useParams<{ slug: string }>()`
- Data lookups use `getBySlug()` helpers with `getById()` as fallback
- Every data entry must have both `id` and `slug` fields

---

## Execution Steps

### Phase 1: Data File Validation (5-10 min)

Scan all data files in `/src/app/data/` and verify:

1. **Every content entry has `id` and `slug`:**
   - `products/*.ts` — all 100 products
   - `posts.ts` — all blog posts
   - `categories.ts` — post and product categories
   - `tags.ts` — post and product tags
   - `users.ts` — all authors (for blog author routes)
   - `subscriptions.ts` — subscription plans
   - `memberships.ts` — membership tiers

2. **Slugs are valid:**
   - Lowercase, hyphenated (no spaces, no special characters)
   - Unique within their content type
   - Match the URL pattern rules above

3. **Lookup helpers exist:**
   - `getProductBySlug()`, `getProductById()`
   - `getPostBySlug()`
   - Category/tag lookups by slug

**Fix:** Add missing `slug` or `id` fields. Create missing lookup helpers.

### Phase 2: Route Definition Sync (5-10 min)

Compare `/routes.ts` against the URL pattern rules:

1. **Verify all dynamic routes use `:slug` param**
2. **Verify no orphaned routes** (routes pointing to non-existent components)
3. **Verify no missing routes** (templates without routes)
4. **Remove dead routes** (e.g., `/variable-product/:id`)
5. **Verify redirect chains are max 1 hop**

**Fix:** Update route definitions, remove dead routes, add missing routes.

### Phase 3: Component Link Audit (10-15 min)

Search all `.tsx` files for links using old patterns and update:

1. **Product links:** `product/${item.id}` -> `product/${item.slug || item.id}`
2. **Category links:** `/shop/category/` -> `/category/`
3. **Tag links:** `/shop/tag/` -> `/tag/`
4. **Blog category links:** verify `/blog/category/:slug` pattern
5. **Blog tag links:** verify `/blog/tag/:slug` pattern

**Search patterns:**
```
/shop/category/
/shop/tag/
variable-product/
product/${product.id
product/${item.id
'/product/' + product.id
```

**Fix:** Update all link `to=` and `href=` attributes.

### Phase 4: Navigation Data Sync (5-10 min)

Update all navigation data files to use canonical routes:

1. `/src/app/data/navigation.ts` — MAIN_MENU, FOOTER_MENU_*
2. `/src/app/data/megaMenuData.ts` — all mega menu panels
3. `/src/app/data/footer.ts` — footerColumns, footerLegalLinks
4. Any component-level hardcoded nav data (e.g., `ShopMegaMenu.tsx`)

**Fix:** Update all `url` and `href` values to match canonical patterns.

### Phase 5: Sitemap & DevTools Sync (5 min)

Update route references in:

1. `/src/app/components/pages/Sitemap.tsx` — ROUTE_SECTIONS data
2. `/src/app/components/pages/DevToolsIndex.tsx` — tool links
3. Verify example slugs in Sitemap match actual data file entries

**Fix:** Replace stale/placeholder slugs with real data slugs.

### Phase 6: Template Param Alignment (5 min)

Verify templates that use `useParams()` match the route param name:

1. `SingleProductRetro.tsx` — `useParams<{ slug: string }>()`
2. `SingleProductSticky.tsx` — `useParams<{ slug: string }>()`
3. `ArchiveProductRetro.tsx` — path-based detection for category vs tag
4. `ArchiveBlogRetro.tsx` — `useParams<{ slug: string }>()`
5. `SinglePostRetro.tsx` — `useParams<{ slug: string }>()`

**Fix:** Update param types and lookup logic.

---

## Verification

After all fixes, run these searches to confirm zero violations:

```
/shop/category/     (should be 0 matches in .tsx/.ts)
/shop/tag/          (should be 0 matches in .tsx/.ts)
variable-product/   (should be 0 matches in .tsx/.ts)
product/${product.id  (should be 0 matches — use slug)
categorySlug        (should be 0 in useParams — use slug)
tagSlug             (should be 0 in useParams — use slug)
```

---

## Output

- Modified files listed with change summary
- Verification search results (all should be 0 matches)
- Any remaining issues flagged for manual review

---

## Related

- **Audit version:** `audit routes` (report only, no fixes)
- **Guidelines:** `/guidelines/ROUTING_GUIDE.md`
- **Route file:** `/routes.ts`
- **Navigation data:** `/src/app/data/navigation.ts`, `/src/app/data/megaMenuData.ts`
