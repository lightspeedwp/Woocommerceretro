# Hero Refactor & Funky Redesign Prompt

**Created:** 2026-03-09
**Category:** Refactoring / Redesign
**Priority:** P0
**Scope:** Site-wide hero component system

---

## Objective

Refactor ALL hero implementations across the WooCommerce prototype into a single **shared, data-driven `FunkyHero` template part** with support for multiple visual patterns (layout variants), eliminating duplicated hero code across templates.

---

## Current State (Problems)

1. **Fragmented hero implementations** -- at least 4 different hero patterns:
   - `FrontPage.tsx` -- custom inline hero (orbs, badge, image, overlay, scroll arrow)
   - `ArchiveProduct.tsx` -- separate hero with orbs, badge, image, meta
   - `PageAbout.tsx`, `PageContact.tsx`, `PageFAQ.tsx`, etc. -- `info-hero` class pattern
   - `Hero.tsx` pattern component -- uses `HeroSection.tsx` wrapper (rarely consumed)

2. **CSS duplication** -- hero styles scattered across:
   - `/src/styles/sections/front-page-funky.css` (`.front-page__hero*`)
   - `/src/styles/sections/info-pages-funky.css` (`.info-hero*`)
   - `/src/styles/sections/archive-product-funky.css` (`.archive-product__hero*`)
   - Various per-page hero overrides

3. **No shared data model** -- each template hardcodes hero content inline or pulls from unrelated data files

4. **Homepage hero is weak** -- needs full funky redesign with stats, animated graphics, stronger visual impact

---

## Target Architecture

### 1. Data Layer: `/src/app/data/heroData.ts`

A single data file exporting hero configurations for every page. Each entry supports ALL possible hero elements (omit a field to hide that element):

```
HeroConfig {
  id: string                         -- unique key
  backgroundImage?: string           -- parallax bg image URL
  backgroundColor?: string           -- fallback/base bg color
  backgroundGradient?: string        -- CSS gradient overlay
  overlayOpacity?: number            -- overlay opacity (0-1)
  badge?: { icon: string, text: string }  -- glassmorphism badge pill
  title: string                      -- main heading (h1)
  subtitle?: string                  -- supporting paragraph
  button1?: { label, href, variant } -- primary CTA
  button2?: { label, href, variant } -- secondary CTA
  stats?: Array<{ value, label }>    -- stat counters (e.g. "10K+ Customers")
  showScrollArrow?: boolean          -- animated scroll-down indicator
  heroGraphic?: string               -- 'orbs' | 'particles' | 'mesh' | 'none'
  pattern?: string                   -- layout variant: 'centered' | 'split' | 'minimal' | 'immersive'
  height?: string                    -- 'full' | 'large' | 'medium' | 'small'
  textAlign?: string                 -- 'center' | 'left'
  ariaLabel?: string                 -- section aria-label
}
```

Pages export named configs: `homepageHero`, `shopHero`, `aboutHero`, `contactHero`, `faqHero`, `blogHero`, etc.

### 2. Component: `/src/app/components/parts/FunkyHero.tsx`

A shared template part that:
- Accepts a `HeroConfig` object (or individual props)
- Renders ONLY the elements whose data fields are present
- Supports pattern variants via BEM modifier classes
- Handles parallax background, gradient overlays, animated orbs
- Includes stats bar, scroll arrow, badge with icon animation
- Respects `prefers-reduced-motion`
- Uses React.createElement (no JSX) per Figma Make parser rules
- Uses legacy JS syntax (no const/let/arrow/destructuring)

### 3. CSS: `/src/styles/sections/funky-hero.css`

Consolidated hero CSS with BEM block `.funky-hero`:
- `.funky-hero` -- base container
- `.funky-hero--full`, `--large`, `--medium`, `--small` -- height variants
- `.funky-hero--centered`, `--split`, `--minimal`, `--immersive` -- layout patterns
- `.funky-hero__bg` -- parallax background image
- `.funky-hero__overlay` -- gradient overlay
- `.funky-hero__orb` -- animated neon orbs
- `.funky-hero__content` -- text/action container
- `.funky-hero__badge` -- glassmorphism pill
- `.funky-hero__title` -- gradient text heading
- `.funky-hero__subtitle` -- description
- `.funky-hero__actions` -- button group
- `.funky-hero__stats` -- stat counter bar
- `.funky-hero__scroll` -- bounce arrow
- Light/dark mode for ALL elements
- Reduced motion guards
- Mobile responsive (stacked on mobile, full viewport on desktop)

### 4. Template Updates

Update ALL templates that have hero sections to use `<FunkyHero config={pageHero} />`:

| Template | Current Hero | New Data Key |
|----------|-------------|--------------|
| `FrontPage.tsx` | Custom inline | `homepageHero` |
| `ArchiveProduct.tsx` | Custom inline | `shopHero` |
| `PageAbout.tsx` | `info-hero` class | `aboutHero` |
| `PageContact.tsx` | `info-hero` class | `contactHero` |
| `PageFAQ.tsx` | `info-hero` class | `faqHero` |
| `PageOurStory.tsx` | `info-hero` class | `ourStoryHero` |
| `BlogIndex.tsx` | varies | `blogHero` |
| Other info pages | `info-hero` class | `[page]Hero` |

---

## Funky Redesign Specifics (Homepage Hero)

The homepage hero should be the most visually impactful:

1. **Full viewport height** with parallax background
2. **Neon gradient overlay** (pink -> deep purple -> cyan)
3. **3 animated orbs** (pink, cyan, lime) floating with `funky-float`
4. **Glassmorphism badge** with animated sparkle icon
5. **Large gradient text title** with text-shadow glow
6. **Stat counters** (e.g. "10K+ Products", "50K+ Customers", "4.9 Rating")
7. **Two CTAs** -- primary neon button + outline ghost button
8. **Scroll-down arrow** with bounce animation
9. **Dark mode** -- orbs brighter, deeper overlay, neon text glow enhanced

---

## Implementation Order

1. Create `/src/app/data/heroData.ts` with all page configs
2. Create `/src/styles/sections/funky-hero.css` with consolidated styles
3. Add `@import` to `/styles/globals.css`
4. Create `/src/app/components/parts/FunkyHero.tsx`
5. Update `FrontPage.tsx` to use new component
6. (Future) Update remaining templates one by one

---

## Constraints

- **Legacy JS syntax** in all `/src/app/` files (no const, let, arrow functions, destructuring)
- **React.createElement** only (no JSX) for Figma Make parser compatibility
- **WordPress BEM classes** only (no Tailwind, no inline styles)
- **CSS variables** from theme-variables.css and funky tokens
- **Protected files** -- never modify `/src/styles/` existing files
- **Phosphor Icons** (`@phosphor-icons/react`) for icon system
- **WCAG 2.1 AA** accessibility minimum
- **prefers-reduced-motion** respected for all animations

---

## Success Criteria

- [ ] Single `FunkyHero` component renders all hero variants
- [ ] Data file drives all content (no hardcoded text in components)
- [ ] Homepage hero has full funky treatment (orbs, stats, gradient text, parallax)
- [ ] All hero elements hideable by omitting data fields
- [ ] Dark mode fully supported
- [ ] Reduced motion respected
- [ ] Mobile responsive (stacked, auto-height on small screens)
- [ ] No duplicate hero CSS across section files
- [ ] All templates can adopt the shared component

---

## References

- `/guidelines/design-tokens/Funky-Theme.md` -- neon palette, animation tokens
- `/guidelines/design-tokens/Funky-Woocommerce-Design-System.md` -- glassmorphism, glow cards
- `/src/styles/sections/front-page-funky.css` -- current homepage hero CSS
- `/src/styles/sections/info-pages-funky.css` -- current info-page hero CSS
- `/guidelines/patterns/Hero.md` -- hero pattern specification
