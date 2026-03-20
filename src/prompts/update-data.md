# Update Data — Trigger Prompt

**Version:** 1.0
**Created:** 2026-03-18
**Type:** Single Prompt
**Trigger Word:** `update data`
**Duration:** 30-60 minutes

---

## Objective

Audit the entire codebase for hardcoded content within templates, pages, and components. Migrate ALL hardcoded strings, labels, descriptions, URLs, prices, and display values to centralised data files in `/src/app/data/`. Every component MUST dynamically import and render content from data files — zero hardcoded display content in `.tsx` files.

---

## Environment Notice

**You are running in Figma Make.** Make changes directly — do not suggest terminal commands.

---

## Prerequisites

1. Read `/guidelines/Guidelines.md` — understand data file organisation
2. Read `/src/app/data/` directory listing — understand existing data file patterns
3. Read 2-3 existing data files to understand the established data structure conventions

---

## Execution Steps

### Phase 1: Inventory existing data files (5 min)

1. List all files in `/src/app/data/`
2. For each data file, document:
   - **Filename and exports** — what data shapes exist
   - **Consumers** — which components import this data
   - **Coverage** — what content domain it covers (products, navigation, hero, etc.)
3. Build a coverage map: `data domain → data file → consuming components`

### Phase 2: Scan for hardcoded content (10-15 min)

Scan ALL `.tsx` files under `/src/app/` for hardcoded display content:

**What counts as hardcoded content (MUST be extracted):**

| Type | Example | Data File Pattern |
|------|---------|-------------------|
| **Display text** | `<h2>Featured products</h2>` | `sectionData.heading` |
| **Descriptions** | `<p>Browse our latest collection</p>` | `sectionData.description` |
| **Button labels** | `<button>Add to cart</button>` | `sectionData.ctaLabel` |
| **Image URLs** | `src="/images/hero.jpg"` | `sectionData.image` |
| **Alt text** | `alt="Product image"` | `sectionData.imageAlt` |
| **Prices** | `<span>$29.99</span>` | `productData.price` |
| **Product names** | `<h3>Retro Controller</h3>` | `productData.name` |
| **Category names** | `"Electronics"` | `categoryData.name` |
| **Navigation labels** | `"Shop All"` | `navData.label` |
| **Feature lists** | `["Fast shipping", "Easy returns"]` | `featureData.items` |
| **Testimonials** | `"Great product!" — John` | `testimonialData.items` |
| **FAQ content** | Question/answer pairs | `faqData.items` |
| **Social links** | `href="https://twitter.com/..."` | `socialData.links` |
| **Contact info** | Email, phone, address | `contactData` |
| **SEO metadata** | Page titles, meta descriptions | `pageData.meta` |
| **Stat numbers** | `"500+ products"` | `statsData.items` |

**What is EXEMPT (may stay in `.tsx`):**

| Type | Example | Reason |
|------|---------|--------|
| **aria-labels** | `aria-label="Close menu"` | Accessibility, tightly coupled to component |
| **CSS class names** | `className="wp-block-button"` | Styling, not display content |
| **Technical strings** | `type="submit"`, `role="dialog"` | HTML attributes |
| **Component prop defaults** | `variant="primary"` | Component API |
| **Console messages** | `console.error("Failed")` | Debug, not user-facing |
| **Import paths** | `from "@/data/products"` | Code structure |

### Phase 3: Categorise findings (5 min)

Group hardcoded content by data domain:

```
Product data     → /src/app/data/products.ts (or product-data.ts)
Hero content     → /src/app/data/hero-data.ts
Navigation       → /src/app/data/nav-data.ts
Section content  → /src/app/data/section-data.ts (or per-section files)
Page metadata    → /src/app/data/page-data.ts
Testimonials     → /src/app/data/testimonials.ts
FAQ content      → /src/app/data/faq-data.ts
Footer content   → /src/app/data/footer-data.ts
[new domains]    → /src/app/data/[domain]-data.ts
```

### Phase 4: Create or update data files (10-20 min)

For each group of hardcoded content:

1. **If a data file already exists for this domain:**
   - Read the existing file
   - Add new entries using the same structure/types
   - Export new constants

2. **If no data file exists:**
   - Create a new file in `/src/app/data/`
   - Follow the naming pattern: `[domain]-data.ts`
   - Define TypeScript interfaces for the data shape
   - Export named constants (not default exports)
   - Keep under 250 lines (split if larger per Guidelines.md 6.2)

**Data file template:**

```typescript
// /src/app/data/[domain]-data.ts

export interface [DomainItem] {
  id: string;
  [fields]: [types];
}

export const [DOMAIN_DATA]: [DomainItem][] = [
  {
    id: '[unique-id]',
    // ... extracted values
  },
];
```

### Phase 5: Update components (10-20 min)

For each component with hardcoded content:

1. Add the data import: `import { DOMAIN_DATA } from '@/data/[domain]-data';`
2. Replace hardcoded strings with data references
3. Use `.map()` for list rendering with proper `key` props
4. Verify the component renders identically after the change

**Before:**
```tsx
<section>
  <h2>Featured products</h2>
  <p>Browse our latest items</p>
  <div>
    <ProductCard name="Retro Controller" price="$29.99" />
    <ProductCard name="Pixel Headset" price="$49.99" />
  </div>
</section>
```

**After:**
```tsx
import { FEATURED_SECTION } from '@/data/section-data';
import { FEATURED_PRODUCTS } from '@/data/products';

<section>
  <h2>{FEATURED_SECTION.heading}</h2>
  <p>{FEATURED_SECTION.description}</p>
  <div>
    {FEATURED_PRODUCTS.map((product) => (
      <ProductCard key={product.id} name={product.name} price={product.price} />
    ))}
  </div>
</section>
```

### Phase 6: Verify (3-5 min)

1. Check that every updated component still has valid imports
2. Verify no TypeScript errors in data file types
3. Spot-check 3-5 components to confirm data renders correctly
4. Verify data files are under 250 lines

### Phase 7: Summary (2 min)

```
Data migration complete.
- Components scanned: [X]
- Components with hardcoded content: [Y]
- Components updated: [Z]
- Data files created: [A]
- Data files updated: [B]
- Content strings extracted: [C]
- Remaining hardcoded content: [D] (all exempt)

→ Next: Say "audit data" to verify data file health.
→ Or: Say "update status" to refresh project metrics.
```

---

## Rules

1. **Never remove content** — always extract to a data file first, then replace with a reference
2. **Preserve exact text** — do not rewrite, edit, or "improve" content during extraction
3. **Maintain sentence case** — headings must remain sentence case per Guidelines.md 2.6
4. **Type everything** — every data file must have TypeScript interfaces
5. **Use existing patterns** — match the data structure of existing data files in the project
6. **Split large files** — data files over 250 lines must be split by category

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/development/modern-react-coding-standards.md`
- `/guidelines/Core-Repository-Guidelines.md`

---

**Version:** 1.0
**Trigger Word:** `update data`
