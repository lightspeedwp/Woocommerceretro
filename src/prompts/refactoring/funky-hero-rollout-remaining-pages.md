# FunkyHero Rollout - Remaining Pages

**Created:** 2026-03-09
**Category:** Refactoring
**Priority:** P1
**Status:** COMPLETE
**Scope:** Migrate all templates from inline hero patterns to shared FunkyHero component
**Prerequisite:** Hero refactor Phase 1 complete (see `/prompts/refactoring/hero-refactor-redesign.md`)

---

## Completion Summary (2026-03-09)

**22 templates** now use `<FunkyHero config={...} />`:
- Phase 1 (original): FrontPage, PageAbout, PageContact (3)
- Phase 2 (info-hero batch): PageFAQ, PageOurStory, PageSustainability, PageCareers, PageTeam, PageStores, PagePressMedia (7)
- Phase 2 (createElement batch): ArchiveProduct, BlogIndex (2)
- Phase 3 (legal-hero batch): PagePrivacyPolicy, PageTermsConditions, PageShippingReturns, PageSizeGuide, PageHelpCenter, PageReturnsPortal, PageBuyingGuide, PageCareInstructions, PageAccessibilityStatement, PageWarranty (10)

**23 hero data entries** in `/src/app/data/heroData.ts` (including genericHero).
**18 Phosphor icons** in FunkyHero icon map.
**Zero** remaining `info-hero` or `legal-hero` references in templates.

**Remaining hero patterns NOT migrated** (intentionally left as custom):
- `commerce-hero` (8 templates) -- complex heroes with page-specific content
- `blog-archive__hero` (2 templates) -- dynamic titles from route params
- Single-post heroes (3 templates) -- content-specific layouts
- `page-performance-header` (1 template) -- dev tool

---

## Objective

Replace ALL remaining inline hero implementations (`info-hero` classes, `archive-product__hero*` classes, `blog-index__hero*` classes) with the shared, data-driven `<FunkyHero config={...} />` component, exactly matching the pattern already established in `FrontPage.tsx`, `PageAbout.tsx`, and `PageContact.tsx`.

---

## Current State

### Already Migrated (3 templates - DO NOT TOUCH)

| Template | Hero Data Key | Status |
|----------|--------------|--------|
| `FrontPage.tsx` | `homepageHero` | Done |
| `PageAbout.tsx` | `aboutHero` | Done |
| `PageContact.tsx` | `contactHero` | Done |

### Remaining - `info-hero` Pattern (7 templates)

These use the old `info-hero` BEM block with inline JSX. Each needs converting to `<FunkyHero config={...} />`.

| # | Template | Current Pattern | Hero Data Key | Data Exists? |
|---|----------|----------------|---------------|-------------|
| 1 | `PageFAQ.tsx` | `info-hero info-hero--purple` | `faqHero` | YES |
| 2 | `PageOurStory.tsx` | `info-hero` | `ourStoryHero` | YES |
| 3 | `PageSustainability.tsx` | `info-hero` | `sustainabilityHero` | YES |
| 4 | `PageCareers.tsx` | `info-hero` | `careersHero` | YES |
| 5 | `PageTeam.tsx` | `info-hero` | `teamHero` | NO - CREATE |
| 6 | `PageStores.tsx` | `info-hero` | `storesHero` | NO - CREATE |
| 7 | `PagePressMedia.tsx` | `info-hero` | `pressHero` | NO - CREATE |

### Remaining - Custom Hero Patterns (2 templates)

These use unique BEM blocks with React.createElement (no JSX). Replace the entire hero section with `React.createElement(FunkyHero, { config: ... })`.

| # | Template | Current Pattern | Hero Data Key | Data Exists? |
|---|----------|----------------|---------------|-------------|
| 8 | `ArchiveProduct.tsx` | `archive-product__hero*` (createElement) | `shopHero` | YES |
| 9 | `BlogIndex.tsx` | `blog-index__hero*` (createElement) | `blogHero` | YES |

### Remaining - Legal Hero Patterns (10 templates)

These use the `legal-hero` BEM block with inline JSX. Each needs converting to `<FunkyHero config={...} />`.

| # | Template | Current Pattern | Hero Data Key | Data Exists? |
|---|----------|----------------|---------------|-------------|
| 10 | `PagePrivacyPolicy.tsx` | `legal-hero` | `privacyPolicyHero` | YES |
| 11 | `PageTermsConditions.tsx` | `legal-hero` | `termsConditionsHero` | YES |
| 12 | `PageShippingReturns.tsx` | `legal-hero` | `shippingReturnsHero` | YES |
| 13 | `PageSizeGuide.tsx` | `legal-hero` | `sizeGuideHero` | YES |
| 14 | `PageHelpCenter.tsx` | `legal-hero` | `helpCenterHero` | YES |
| 15 | `PageReturnsPortal.tsx` | `legal-hero` | `returnsPortalHero` | YES |
| 16 | `PageBuyingGuide.tsx` | `legal-hero` | `buyingGuideHero` | YES |
| 17 | `PageCareInstructions.tsx` | `legal-hero` | `careInstructionsHero` | YES |
| 18 | `PageAccessibilityStatement.tsx` | `legal-hero` | `accessibilityStatementHero` | YES |
| 19 | `PageWarranty.tsx` | `legal-hero` | `warrantyHero` | YES |

---

## Implementation Steps

### Step 1: Add Missing Hero Data Entries

Add 3 new hero configs to `/src/app/data/heroData.ts`. Follow the exact format of existing entries (legacy JS, `export var`, JSDoc `@type`).

#### `teamHero`

```js
/** @type {HeroConfig} */
export var teamHero = {
  id: 'team',
  backgroundImage: 'https://images.unsplash.com/photo-1758518731468-98e90ffd7430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcHJvZmVzc2lvbmFsJTIwdGVhbSUyMHBvcnRyYWl0JTIwY29ycG9yYXRlfGVufDF8fHx8MTc3MTc0ODc2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.35) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(0, 255, 255, 0.1) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Users',
    text: 'Our People'
  },
  title: 'Meet the team',
  subtitle: 'The people behind the products - passionate, creative, and committed to quality.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Team hero'
};
```

#### `storesHero`

```js
/** @type {HeroConfig} */
export var storesHero = {
  id: 'stores',
  backgroundImage: 'https://images.unsplash.com/photo-1635930376155-4ee50db13cca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMGludGVyaW9yJTIwZmxhZ3NoaXB8ZW58MXx8fHwxNzcxNzQ4NzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#030213',
  backgroundGradient: 'linear-gradient(135deg, rgba(45, 0, 89, 0.3) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(0, 200, 200, 0.1) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Storefront',
    text: 'Retail'
  },
  title: 'Our stores',
  subtitle: 'Visit us in person - explore our curated spaces and discover products hands-on.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Stores hero'
};
```

#### `pressHero`

```js
/** @type {HeroConfig} */
export var pressHero = {
  id: 'press',
  backgroundImage: 'https://images.unsplash.com/photo-1554941829-1a16e65a02b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzcyUyMGNvbmZlcmVuY2UlMjBtZWRpYSUyMGpvdXJuYWxpc20lMjBtaWNyb3Bob25lfGVufDF8fHx8MTc3MTc0ODc2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  backgroundColor: '#0d1b2a',
  backgroundGradient: 'linear-gradient(135deg, rgba(13, 27, 42, 0.5) 0%, rgba(3, 2, 19, 0.85) 50%, rgba(255, 0, 255, 0.08) 100%)',
  overlayOpacity: 1,
  badge: {
    icon: 'Megaphone',
    text: 'Newsroom'
  },
  title: 'Press and media',
  subtitle: 'News, press releases, and media resources from our team.',
  showScrollArrow: false,
  heroGraphic: 'orbs',
  pattern: 'centered',
  height: 'medium',
  textAlign: 'center',
  ariaLabel: 'Press and media hero'
};
```

Also update the `allHeroes` index at the bottom of the file:

```js
export var allHeroes = {
  homepage: homepageHero,
  shop: shopHero,
  about: aboutHero,
  contact: contactHero,
  faq: faqHero,
  blog: blogHero,
  ourStory: ourStoryHero,
  sustainability: sustainabilityHero,
  careers: careersHero,
  team: teamHero,
  stores: storesHero,
  press: pressHero,
  generic: genericHero
};
```

### Step 2: Migrate info-hero Templates (Batch A - 7 files)

For each template, apply this transformation:

#### Before (info-hero pattern - JSX):

```tsx
import * as LucideIcons from 'lucide-react';
// ... other imports

var HelpCircle = LucideIcons.HelpCircle;

export function PageFAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-faq info-hero info-hero--purple">
        <img src="..." alt="" className="info-hero__bg" />
        <div className="info-hero__overlay" />
        <div className="info-hero__content">
          <span className="info-hero__badge funky-glass-panel">
            <HelpCircle size={14} />
            Help Centre
          </span>
          <h1 className="info-hero__title">{faqPageContent.title}</h1>
          <p className="info-hero__subtitle">{faqPageContent.description}</p>
        </div>
        <div className="info-hero__orb--1 funky-orb funky-animate-float" />
        <div className="info-hero__orb--2 funky-orb funky-animate-float" />
      </section>

      <hr className="funky-section__divider" />
      {/* ... rest of page ... */}
```

#### After (FunkyHero pattern - JSX):

```tsx
import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as HeroDataModule from '../../data/heroData';
// ... other imports (remove unused Lucide hero icon imports)

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var faqHero = HeroDataModule.faqHero;

export function PageFAQ() {
  return (
    <Layout>
      {/* Hero (shared FunkyHero) */}
      <FunkyHero config={faqHero} />

      <hr className="funky-section__divider" />
      {/* ... rest of page unchanged ... */}
```

#### Checklist per template:

1. Add `import * as FunkyHeroModule from '../parts/FunkyHero';`
2. Add `import * as HeroDataModule from '../../data/heroData';`
3. Add `var FunkyHero = FunkyHeroModule.FunkyHero;`
4. Add `var [pageKey]Hero = HeroDataModule.[pageKey]Hero;`
5. Replace entire `<section className="... info-hero ...">...</section>` block with `<FunkyHero config={[pageKey]Hero} />`
6. Remove Lucide icon imports that were ONLY used in the hero (e.g. `HelpCircle`, `BookOpen`, `Users`, `Leaf`, `Briefcase`, `Store`, `Newspaper`)
7. Keep `<hr className="funky-section__divider" />` after the hero
8. Do NOT modify any code below the hero section

#### Template-specific mapping:

| Template | Remove Icon Import | Add Data Import | Config Prop |
|----------|--------------------|-----------------|-------------|
| `PageFAQ.tsx` | `HelpCircle` (if hero-only) | `faqHero` | `config={faqHero}` |
| `PageOurStory.tsx` | `BookOpen` (if hero-only) | `ourStoryHero` | `config={ourStoryHero}` |
| `PageTeam.tsx` | `Users` (if hero-only) | `teamHero` | `config={teamHero}` |
| `PageSustainability.tsx` | `Leaf` (if hero-only) | `sustainabilityHero` | `config={sustainabilityHero}` |
| `PageCareers.tsx` | `Briefcase` (if hero-only) | `careersHero` | `config={careersHero}` |
| `PageStores.tsx` | `Store` (if hero-only) | `storesHero` | `config={storesHero}` |
| `PagePressMedia.tsx` | `Newspaper` (if hero-only) | `pressHero` | `config={pressHero}` |

**IMPORTANT:** Some icons may be used elsewhere in the template (e.g. `Users` might appear in a team grid). Only remove the import if the icon was EXCLUSIVELY used in the hero section. Check the rest of the file before removing.

### Step 3: Migrate Custom Hero Templates (Batch B - 2 files)

These use `React.createElement` syntax (no JSX). The hero replacement follows the same pattern but uses createElement.

#### ArchiveProduct.tsx

**Current hero block** (lines ~232-252): Uses `archive-product__hero*` classes with `React.createElement`.

**Replace with:**

```js
// Add imports at top
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as HeroDataModule from '../../data/heroData';

var FunkyHero = FunkyHeroModule.FunkyHero;
var shopHero = HeroDataModule.shopHero;

// Replace the entire hero <section> createElement with:
React.createElement(FunkyHero, { config: shopHero }),
```

Remove the old hero `React.createElement('section', { className: "archive-product__hero" ... })` block entirely (lines ~232-252).

Keep everything after the hero (filter bar, product grid, pagination, etc.) unchanged.

#### BlogIndex.tsx

**Current hero block** (lines ~118-131): Uses `blog-index__hero*` classes with `React.createElement`.

**Replace with:**

```js
// Add imports at top
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as HeroDataModule from '../../data/heroData';

var FunkyHero = FunkyHeroModule.FunkyHero;
var blogHero = HeroDataModule.blogHero;

// Replace the entire hero <section> createElement with:
React.createElement(FunkyHero, { config: blogHero }),
```

Remove the old hero section and its orb elements. Keep everything after unchanged.

### Step 4: Migrate Legal Hero Templates (Batch C - 10 files)

These use the `legal-hero` BEM block with inline JSX. Each needs converting to `<FunkyHero config={...} />`.

#### Before (legal-hero pattern - JSX):

```tsx
import * as LucideIcons from 'lucide-react';
// ... other imports

var HelpCircle = LucideIcons.HelpCircle;

export function PageFAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-faq legal-hero">
        <img src="..." alt="" className="legal-hero__bg" />
        <div className="legal-hero__overlay" />
        <div className="legal-hero__content">
          <span className="legal-hero__badge funky-glass-panel">
            <HelpCircle size={14} />
            Help Centre
          </span>
          <h1 className="legal-hero__title">{faqPageContent.title}</h1>
          <p className="legal-hero__subtitle">{faqPageContent.description}</p>
        </div>
        <div className="legal-hero__orb--1 funky-orb funky-animate-float" />
        <div className="legal-hero__orb--2 funky-orb funky-animate-float" />
      </section>

      <hr className="funky-section__divider" />
      {/* ... rest of page ... */}
```

#### After (FunkyHero pattern - JSX):

```tsx
import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as HeroDataModule from '../../data/heroData';
// ... other imports (remove unused Lucide hero icon imports)

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var faqHero = HeroDataModule.faqHero;

export function PageFAQ() {
  return (
    <Layout>
      {/* Hero (shared FunkyHero) */}
      <FunkyHero config={faqHero} />

      <hr className="funky-section__divider" />
      {/* ... rest of page unchanged ... */}
```

#### Checklist per template:

1. Add `import * as FunkyHeroModule from '../parts/FunkyHero';`
2. Add `import * as HeroDataModule from '../../data/heroData';`
3. Add `var FunkyHero = FunkyHeroModule.FunkyHero;`
4. Add `var [pageKey]Hero = HeroDataModule.[pageKey]Hero;`
5. Replace entire `<section className="... legal-hero ...">...</section>` block with `<FunkyHero config={[pageKey]Hero} />`
6. Remove Lucide icon imports that were ONLY used in the hero (e.g. `HelpCircle`, `BookOpen`, `Users`, `Leaf`, `Briefcase`, `Store`, `Newspaper`)
7. Keep `<hr className="funky-section__divider" />` after the hero
8. Do NOT modify any code below the hero section

#### Template-specific mapping:

| Template | Remove Icon Import | Add Data Import | Config Prop |
|----------|--------------------|-----------------|-------------|
| `PagePrivacyPolicy.tsx` | `HelpCircle` (if hero-only) | `privacyPolicyHero` | `config={privacyPolicyHero}` |
| `PageTermsConditions.tsx` | `BookOpen` (if hero-only) | `termsConditionsHero` | `config={termsConditionsHero}` |
| `PageShippingReturns.tsx` | `Users` (if hero-only) | `shippingReturnsHero` | `config={shippingReturnsHero}` |
| `PageSizeGuide.tsx` | `Leaf` (if hero-only) | `sizeGuideHero` | `config={sizeGuideHero}` |
| `PageHelpCenter.tsx` | `Briefcase` (if hero-only) | `helpCenterHero` | `config={helpCenterHero}` |
| `PageReturnsPortal.tsx` | `Store` (if hero-only) | `returnsPortalHero` | `config={returnsPortalHero}` |
| `PageBuyingGuide.tsx` | `Newspaper` (if hero-only) | `buyingGuideHero` | `config={buyingGuideHero}` |
| `PageCareInstructions.tsx` | `HelpCircle` (if hero-only) | `careInstructionsHero` | `config={careInstructionsHero}` |
| `PageAccessibilityStatement.tsx` | `BookOpen` (if hero-only) | `accessibilityStatementHero` | `config={accessibilityStatementHero}` |
| `PageWarranty.tsx` | `Users` (if hero-only) | `warrantyHero` | `config={warrantyHero}` |

**IMPORTANT:** Some icons may be used elsewhere in the template (e.g. `Users` might appear in a team grid). Only remove the import if the icon was EXCLUSIVELY used in the hero section. Check the rest of the file before removing.

---

## Batch Execution Order

Process in this order to minimize risk:

### Batch A (info-hero JSX templates) - Do all 7 together
1. `PageFAQ.tsx`
2. `PageOurStory.tsx`
3. `PageSustainability.tsx`
4. `PageCareers.tsx`
5. `PageTeam.tsx`
6. `PageStores.tsx`
7. `PagePressMedia.tsx`

### Batch B (Custom createElement templates) - Do both together
8. `ArchiveProduct.tsx`
9. `BlogIndex.tsx`

### Batch C (Legal Hero JSX templates) - Do all 10 together
10. `PagePrivacyPolicy.tsx`
11. `PageTermsConditions.tsx`
12. `PageShippingReturns.tsx`
13. `PageSizeGuide.tsx`
14. `PageHelpCenter.tsx`
15. `PageReturnsPortal.tsx`
16. `PageBuyingGuide.tsx`
17. `PageCareInstructions.tsx`
18. `PageAccessibilityStatement.tsx`
19. `PageWarranty.tsx`

---

## Constraints (MUST FOLLOW)

1. **Legacy JS syntax only** in all `/src/app/` files -- no `const`, `let`, arrow functions, or destructuring
2. **React.createElement** for files already using it (ArchiveProduct, BlogIndex) -- do NOT convert them to JSX
3. **JSX is OK** for files already using JSX (all info-hero templates use JSX)
4. **ASCII characters only** -- no unicode/emoji in code
5. **WordPress BEM classes** only -- no Tailwind, no inline styles
6. **NEVER modify** files in `/src/styles/` or `/src/app/components/figma/ImageWithFallback.tsx`
7. **NEVER modify** the `FunkyHero.tsx` component or `funky-hero.css` -- they are stable
8. **Preserve all code below the hero** -- only replace the hero `<section>` block
9. **Keep `<hr className="funky-section__divider" />`** after each hero
10. **Import pattern must match** the PageAbout.tsx reference implementation exactly

---

## Reference Implementation (FOLLOW THIS EXACTLY)

**File:** `/src/app/components/templates/PageAbout.tsx`

Key patterns to replicate:
- Import style: `import * as FunkyHeroModule from '../parts/FunkyHero';`
- Var assignment: `var FunkyHero = FunkyHeroModule.FunkyHero;`
- Data import: `import * as HeroDataModule from '../../data/heroData';`
- Data assignment: `var aboutHero = HeroDataModule.aboutHero;`
- Usage: `<FunkyHero config={aboutHero} />`

**Data file:** `/src/app/data/heroData.ts`
- All entries use `export var` (not `export const`)
- JSDoc `@type {HeroConfig}` on each
- Section comment headers with `/* === ... === */` pattern

**Component:** `/src/app/components/parts/FunkyHero.tsx`
- Accepts `props.config` (HeroConfig object)
- Accepts optional `props.className` and `props.children`
- Renders only elements whose config fields are present

---

## Verification Checklist

After completing all 9 templates:

- [ ] All 9 templates render their hero via `<FunkyHero config={...} />`
- [ ] No `info-hero` class references remain in any template file
- [ ] No `archive-product__hero` class references remain in ArchiveProduct.tsx
- [ ] No `blog-index__hero` class references remain in BlogIndex.tsx
- [ ] 3 new hero data entries added (teamHero, storesHero, pressHero)
- [ ] `allHeroes` index updated with 3 new keys
- [ ] Each hero renders correct title, subtitle, badge, background
- [ ] No orphaned Lucide icon imports (icons removed if hero-only)
- [ ] Dark mode renders correctly on all 9 heroes
- [ ] No console errors on any page
- [ ] `<hr className="funky-section__divider" />` preserved after each hero
- [ ] Rest of each page content is completely unchanged

---

## Files Modified

| File | Action |
|------|--------|
| `/src/app/data/heroData.ts` | Add 3 entries + update allHeroes index |
| `/src/app/components/templates/PageFAQ.tsx` | Replace hero section |
| `/src/app/components/templates/PageOurStory.tsx` | Replace hero section |
| `/src/app/components/templates/PageSustainability.tsx` | Replace hero section |
| `/src/app/components/templates/PageCareers.tsx` | Replace hero section |
| `/src/app/components/templates/PageTeam.tsx` | Replace hero section |
| `/src/app/components/templates/PageStores.tsx` | Replace hero section |
| `/src/app/components/templates/PagePressMedia.tsx` | Replace hero section |
| `/src/app/components/templates/ArchiveProduct.tsx` | Replace hero section |
| `/src/app/components/templates/BlogIndex.tsx` | Replace hero section |
| `/src/app/components/templates/PagePrivacyPolicy.tsx` | Replace hero section |
| `/src/app/components/templates/PageTermsConditions.tsx` | Replace hero section |
| `/src/app/components/templates/PageShippingReturns.tsx` | Replace hero section |
| `/src/app/components/templates/PageSizeGuide.tsx` | Replace hero section |
| `/src/app/components/templates/PageHelpCenter.tsx` | Replace hero section |
| `/src/app/components/templates/PageReturnsPortal.tsx` | Replace hero section |
| `/src/app/components/templates/PageBuyingGuide.tsx` | Replace hero section |
| `/src/app/components/templates/PageCareInstructions.tsx` | Replace hero section |
| `/src/app/components/templates/PageAccessibilityStatement.tsx` | Replace hero section |
| `/src/app/components/templates/PageWarranty.tsx` | Replace hero section |

**Files NOT modified:**
- `/src/app/components/parts/FunkyHero.tsx` (stable)
- `/src/styles/sections/funky-hero.css` (stable, protected)
- `/styles/globals.css` (no new imports needed)
- Any files in `/src/styles/` (protected)

---

## Success Criteria

- [ ] Zero inline hero implementations remain across the entire template directory
- [ ] Every page with a hero uses `<FunkyHero config={...} />`
- [ ] All hero content is driven by `/src/app/data/heroData.ts`
- [ ] Visual appearance matches the current info-hero look (same bg images, colors, text)
- [ ] FunkyHero upgrades the visuals (3 orbs instead of 2, glassmorphism badge with icon animation, gradient title text, proper reduced-motion support)