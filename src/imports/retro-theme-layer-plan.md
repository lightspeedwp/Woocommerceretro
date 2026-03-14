Ash,

* **Value:** The current stylesheet system is strong enough to support a full Handheld Mono redesign without a full CSS rewrite; the best route is a **new retro theme layer** that reuses the existing BEM/component architecture.
* **Risk:** The current codebase still mixes clean tokenised styling with a large neon “funky” layer, unresolved hardcoded-value cleanup, and a very long import chain, so dropping a retro skin on top without a clear layer plan will create cascade drift and token inconsistency.   
* **Next step:** Lock the system as **Handheld Mono / Pixel Pocket**, create a dedicated `retro/` layer, remap the tokens first, then redesign page families in order: homepage → shop/archive → single product → cart/checkout → account/search/blog/info pages.

## 1) Codebase stylesheet audit

### What is already good enough to keep

The stylesheet architecture is already modular and worth preserving. `theme-variables.css` is treated as the canonical token file, follows WordPress preset naming, and is explicitly intended to sit alongside a multi-file system with entrypoint CSS, block CSS and section CSS. 

The repo’s own performance audit also describes the system as well-organised, BEM-based, WordPress/WooCommerce aligned, and structurally sound. The problem is not the architecture itself; it is the **current visual direction and token hygiene**. 

Header, footer and product gallery styles are already componentised in a way that suits a visual re-skin:

* `header.css` is clean BEM with mobile/desktop variants and spacing handled mostly by `gap`. 
* `footer.css` is similarly modular and can be visually re-themed without rethinking structure. 
* `product-gallery.css` already has a sensible left-thumbs / main-image structure that fits your chosen retro product page direction. 

### What is currently fighting the new direction

The major visual conflict is the existing “funky” layer. The homepage and shop/product section CSS are built around:

* neon cyan / neon pink / neon lime
* gradient overlays
* glow borders
* glassmorphism panels
* floating orbs
* animated dividers and glow frames

That is the exact opposite of the restrained handheld-mono direction. You can see it directly in `front-page-funky.css` and `shop-funky.css`.  

### Token consistency issues to resolve before styling

The fetched canonical token file defines many colour, spacing and typography tokens, but several consumed token names in other files do not appear in that canonical file snapshot. For example:

* `theme-light-mode.css` uses `--wp--preset--color--border` and focus-ring tokens. 
* `header.css`, `footer.css` and `shop-funky.css` use `--wp--preset--color--border-light` and `--wp--preset--color--text-secondary`.   
* In the fetched `theme-variables.css`, I could see `background`, `foreground`, `surface`, `accent`, `muted`, `brand`, `cta`, gradients and funky colours, but not those border-light / text-secondary / focus-ring definitions. 

That means the retro theme should not just swap hex values. It should also **normalise the token vocabulary**.

### Maintenance and performance constraints

The current audit reports:

* **213 CSS files**
* **211 `@import` statements** in `/styles/globals.css`
* a deprecated redirect file at `/src/styles/globals.css`
* open hardcoded-value remediation across block and section CSS
* remaining verification work for Front Page, Shop, Product, Cart, Checkout and Blog.  

That matters because this redesign is not only cosmetic. It is a chance to simplify the theme layer and reduce future drift.

---

## 2) Strategic recommendation for the redesign

Do **not** replace the whole CSS architecture.

Do this instead:

1. Keep the existing structural layers:

   * canonical WP-style tokens
   * block CSS
   * section CSS
   * BEM naming
   * component structure

2. Add a new retro theme layer for the new art direction.

3. Gradually retire the “funky” page layer for redesigned templates instead of stacking retro on top of it.

4. Start with a **light-first** retro theme. The current visual reference is strongest in light mode. Dark mode can come later once the page family is stable.

### Recommended folder addition

Given the current repo structure, I would add the new layer adjacent to the existing style system:

`src/src/styles/retro/`

Recommended structure:

```text
src/src/styles/retro/
  theme-retro.css
  retro-base.css
  retro-utilities.css
  retro-motion.css
  retro-dark.css               # optional phase 2
  blocks/
    buttons-retro.css
    badges-retro.css
    forms-retro.css
    cards-retro.css
    navigation-retro.css
    filters-retro.css
    tabs-retro.css
    footer-retro.css
  sections/
    front-page-retro.css
    shop-retro.css
    single-product-retro.css
    cart-checkout-retro.css
    account-retro.css
    blog-retro.css
    search-retro.css
    info-retro.css
```

### Import policy

For any page converted to retro:

* keep structural block CSS active
* keep required WooCommerce / WordPress core CSS active
* load `theme-retro.css`
* load the relevant `retro/blocks/*.css`
* load the relevant `retro/sections/*.css`
* remove or bypass the equivalent `*-funky.css` for that page family

Do not leave both `front-page-funky.css` and `front-page-retro.css` trying to own the same presentation layer. 

---

## 3) Creative brief: Handheld Mono / Pixel Pocket

### Theme name

**Handheld Mono**

### Brand expression

A modern ecommerce catalogue styled like a premium reinterpretation of a late-80s / 90s handheld console UI.

### Tone

Collectible, clever, minimal, nostalgic, tidy, product-led, editorial.

### Not the vibe

Not arcade neon.
Not Mario-platformer.
Not fan-art.
Not chaotic pixel overload.
Not toyish for the sake of it.

### Core visual premise

The interface should feel like:

* a handheld screen
* printed product packaging
* a collector’s catalogue
* a slightly technical but warm retail UI

### Design principles

1. **Quiet background, strong framing**
   Every section feels contained by lines, panels and modules.

2. **Ink-first hierarchy**
   Most information is carried by dark ink, not colour noise.

3. **Retro accents are garnish**
   Pixel moments, dither texture and small icons appear selectively.

4. **Product imagery does the selling**
   The theme supports the catalogue; it does not overpower it.

5. **One main accent, one support accent**
   Sage/screen green leads. Soft yellow highlights priority actions.

6. **Mechanical clarity**
   Buttons, tabs, cards, filters and pricing should look deliberate, almost hardware-like.

---

## 4) Palette system

### Primary palette

Use a restrained light base with dark ink and muted screen tones.

| Role                |       Hex | Use                               |
| ------------------- | --------: | --------------------------------- |
| Retro Paper         | `#F2EEE6` | page background                   |
| Retro Paper Deep    | `#E6E0D3` | alternating section fill          |
| Retro Panel         | `#DDD6C8` | cards, contained modules          |
| Retro Screen        | `#B7C9BE` | accent surfaces, tags, soft fills |
| Retro Screen Dark   | `#7E9A8C` | links, active states, icons       |
| Retro Ink           | `#1E2630` | main text, borders, headings      |
| Retro Ink Soft      | `#495565` | secondary text                    |
| Retro Line          | `#8F998F` | default stroke                    |
| Retro Line Soft     | `#BCC3B5` | light stroke / separators         |
| Retro Signal        | `#D8B548` | primary CTA / highlight           |
| Retro Signal Strong | `#C79A24` | hover / active                    |
| Retro Alert         | `#B65E4A` | sale / low-stock / error          |
| Retro Success       | `#647B61` | in-stock / confirmation           |

### Usage ratio

* 65% paper tones
* 20% ink tones
* 10% screen green family
* 5% signal/highlight

### Colour rules

* Never use more than two coloured UI accents in one module.
* No gradients in the default light theme.
* No cyan/magenta glows in the retro layer.
* Sale styling uses muted brick/red, not neon pink.
* Category differentiation should rely on icons, labels and imagery before colour.

---

## 5) CSS token plan for `theme-retro.css`

This is the most important file. It should both:

* introduce a retro namespace
* map back into the WordPress-style preset tokens already used across the codebase 

### Recommended token block

```css
/* src/src/styles/retro/theme-retro.css */

html[data-brand-theme="retro"],
.theme-retro {
  /* --------------------------------------------------
     Retro semantic tokens
  -------------------------------------------------- */
  --retro-paper: #F2EEE6;
  --retro-paper-deep: #E6E0D3;
  --retro-panel: #DDD6C8;
  --retro-screen: #B7C9BE;
  --retro-screen-dark: #7E9A8C;
  --retro-ink: #1E2630;
  --retro-ink-soft: #495565;
  --retro-line: #8F998F;
  --retro-line-soft: #BCC3B5;
  --retro-signal: #D8B548;
  --retro-signal-strong: #C79A24;
  --retro-alert: #B65E4A;
  --retro-success: #647B61;

  /* --------------------------------------------------
     Surface tokens
  -------------------------------------------------- */
  --retro-surface-page: var(--retro-paper);
  --retro-surface-section: var(--retro-paper-deep);
  --retro-surface-card: #F7F3EB;
  --retro-surface-card-alt: var(--retro-panel);
  --retro-surface-inset: #D3CCBD;
  --retro-surface-screen: var(--retro-screen);

  /* --------------------------------------------------
     Border / line tokens
  -------------------------------------------------- */
  --retro-border-default: 2px solid var(--retro-line);
  --retro-border-strong: 3px solid var(--retro-ink);
  --retro-border-soft: 1px solid var(--retro-line-soft);

  /* --------------------------------------------------
     Radius / shadow tokens
  -------------------------------------------------- */
  --retro-radius-xs: 4px;
  --retro-radius-sm: 8px;
  --retro-radius-md: 12px;
  --retro-radius-lg: 16px;

  --retro-shadow-card: 0 2px 0 rgba(30, 38, 48, 0.18);
  --retro-shadow-press: inset 0 2px 0 rgba(30, 38, 48, 0.08);
  --retro-shadow-focus: 0 0 0 2px var(--retro-paper), 0 0 0 4px var(--retro-signal);

  /* --------------------------------------------------
     Typography tokens
  -------------------------------------------------- */
  --retro-font-display: "Pixelify Sans", "Tiny5", "Silkscreen", monospace;
  --retro-font-body: "Inter", "IBM Plex Sans", "Segoe UI", sans-serif;
  --retro-font-mono: "IBM Plex Mono", "SFMono-Regular", monospace;

  --retro-letter-tight: -0.03em;
  --retro-letter-label: 0.06em;

  /* --------------------------------------------------
     Motion tokens
  -------------------------------------------------- */
  --retro-motion-fast: 120ms;
  --retro-motion-base: 180ms;
  --retro-motion-slow: 240ms;

  /* --------------------------------------------------
     Missing compatibility tokens used elsewhere
  -------------------------------------------------- */
  --wp--preset--color--border: var(--retro-line);
  --wp--preset--color--border-light: var(--retro-line-soft);
  --wp--preset--color--text-secondary: var(--retro-ink-soft);

  --wp--preset--focus-ring--color: var(--retro-signal);
  --wp--preset--focus-ring--width: 2px;
  --wp--preset--focus-ring--offset: 2px;

  /* --------------------------------------------------
     WordPress preset remap
  -------------------------------------------------- */
  --wp--preset--color--background: var(--retro-paper);
  --wp--preset--color--foreground: var(--retro-ink);
  --wp--preset--color--surface: var(--retro-surface-card);
  --wp--preset--color--surface-foreground: var(--retro-ink);

  --wp--preset--color--primary: var(--retro-ink);
  --wp--preset--color--primary-foreground: var(--retro-paper);

  --wp--preset--color--secondary: var(--retro-paper-deep);
  --wp--preset--color--secondary-foreground: var(--retro-ink);

  --wp--preset--color--accent: var(--retro-screen);
  --wp--preset--color--accent-foreground: var(--retro-ink);

  --wp--preset--color--muted: var(--retro-panel);
  --wp--preset--color--muted-foreground: var(--retro-ink-soft);

  --wp--preset--color--brand: var(--retro-screen-dark);
  --wp--preset--color--cta: var(--retro-signal);
  --wp--preset--color--cta-hover: var(--retro-signal-strong);
  --wp--preset--color--link: var(--retro-screen-dark);
  --wp--preset--color--link-hover: var(--retro-ink);

  --wp--preset--color--success: var(--retro-success);
  --wp--preset--color--error: var(--retro-alert);

  --wp--preset--font-family--base: var(--retro-font-body);
  --wp--preset--font-family--heading: var(--retro-font-display);
  --wp--preset--font-family--mono: var(--retro-font-mono);

  --wp--preset--border-radius--sm: var(--retro-radius-xs);
  --wp--preset--border-radius--md: var(--retro-radius-sm);
  --wp--preset--border-radius--lg: var(--retro-radius-md);
  --wp--preset--border-radius--xl: var(--retro-radius-lg);

  --wp--preset--shadow--sm: var(--retro-shadow-card);
  --wp--preset--transition--fast: var(--retro-motion-fast);
  --wp--preset--transition--base: var(--retro-motion-base);
  --wp--preset--transition--slow: var(--retro-motion-slow);
}
```

### Why this matters

This does three jobs:

1. preserves the WordPress token contract already in use 
2. fills the naming gaps currently referenced elsewhere (`border`, `border-light`, `text-secondary`, focus ring)    
3. gives you a proper retro namespace for future variant work

---

## 6) Typography brief

### Font roles

**Display / headings / badges / prices / nav labels**

* Use a square, pixel-adjacent display face.
* Best options for Figma/web prototype:

  * Pixelify Sans
  * Tiny5
  * Silkscreen
* Use in uppercase or title case depending on section.

**Body / product text / filters / descriptions / forms**

* Use a clean sans:

  * Inter
  * IBM Plex Sans
  * Manrope
* Prioritise readability over style.

**Monospace / metadata / SKU / utility labels**

* IBM Plex Mono or similar.

### Typography behaviour

* Pixel/display font only for:

  * H1–H4
  * price blocks
  * CTA labels
  * small badges
  * tab labels
  * category tiles
* Never use pixel font for:

  * paragraph text
  * long descriptions
  * legal text
  * filters with dense options
  * checkout form labels longer than a word or two

### Type scale recommendation

* Hero H1: 64–72 px desktop / 40–48 px mobile
* Section H2: 36–44 px desktop / 28–32 px mobile
* Card title: 20–24 px
* Price: 28–36 px
* Body large: 18 px
* Body default: 16 px
* Small meta: 12–14 px

### Letter spacing

* Headlines: `-0.02em` to `-0.04em`
* Labels/badges: `0.04em` to `0.08em`
* Body: normal

---

## 7) Core UI component brief

### 7.1 Buttons

#### Primary button

Purpose: add to cart, shop now, proceed to checkout, subscribe.

Style:

* Fill: `--retro-signal`
* Text: `--retro-ink`
* Border: `2px solid --retro-ink`
* Radius: 10–12 px
* Padding: 14 px vertical / 20–24 px horizontal
* Font: display font or strong small caps
* Shadow: short “pressed hardware” shadow, not soft floating shadow

States:

* Hover: darken fill to `--retro-signal-strong`
* Active: translate down 1 px, reduce shadow
* Focus: use `--retro-shadow-focus`
* Disabled: `--retro-panel` fill + 60% opacity, no shadow

#### Secondary button

Purpose: browse, learn more, wishlist, compare.

Style:

* Fill: `--retro-surface-card`
* Text: `--retro-ink`
* Border: `2px solid --retro-ink`
* Hover fill: `--retro-paper-deep`

#### Tertiary/text button

Purpose: meta links, small module actions, “View all”.

Style:

* No heavy fill
* Underline or contained chip treatment
* Use body font or mono label font

#### Icon button

Purpose: search, account, cart, quick actions.

Style:

* 44 × 44 min target
* 2 px outline
* light background
* hover swaps to `--retro-screen`

### 7.2 Inputs and forms

* Inputs should feel like inset device fields
* Background: `--retro-surface-card`
* Border: `1px solid --retro-line`
* Inner shadow optional
* Focus ring: signal yellow
* Placeholder text: `--retro-ink-soft`
* Labels in body sans, not display font

### 7.3 Tabs

* Styled as hardware tabs, not glossy UI
* Active tab gets:

  * thicker bottom rule
  * subtle screen fill
  * bold display label
* Avoid neon underlines from current funky layer 

### 7.4 Badges

Badge types:

* New
* Best Seller
* Limited
* Sale
* Back in Stock

Rules:

* max 2 per product card
* background fill should be solid, not gradient
* use signal, screen dark, alert, or panel fills
* compact corner placement
* no starburst shapes

### 7.5 Filter chips

* pill or squared chip with 2 px border
* active state uses screen fill
* removable “x” must stay visible at small sizes

---

## 8) Product card rules

This is the most important reusable commerce module.

### Card structure

1. media frame
2. badge layer
3. wishlist/quick action
4. title
5. variant/meta line
6. pricing row
7. CTA row

### Layout rules

* Desktop grid default: 4-up
* Tablet: 2-up
* Mobile: 2-up where possible, 1-up for long-copy layouts
* Fixed internal card structure across all pages

### Card shell

* Background: `--retro-surface-card`
* Border: `2px solid --retro-line`
* Radius: 14 px
* Inner padding: 16 px
* Use a contained frame around the image area
* Avoid soft modern shadow stacking

### Image frame

* Aspect ratio: 1:1 for most apparel/accessories
* Use `--retro-paper-deep` or `--retro-screen` behind transparent PNG product shots
* Keep generous padding around product images
* Add subtle pixel-corner ornament optionally, but only one per card

### Typography inside card

* Title: body sans or square display, depending on range
* Price: display font or mono-bold
* Meta: mono small
* CTA: compact primary or secondary button

### Hover behaviour

* Lift by 2–4 px max
* Border darkens slightly
* Image scales 1–2%
* No glow, no big blur, no glass effect

### Wishlist / compare

* Place top-right
* simple outline icon button
* active wishlist state may use muted alert colour, not neon pink

### Price styling

* Current price large and dark
* Sale price uses alert tone
* Original price struck through in `--retro-ink-soft`

### Quick rules for variants

* Apparel cards can surface size/colour count in metadata
* Collectibles can surface “edition” or “drop”
* Digital/game-like items can show release or format metadata

---

## 9) Homepage section structure for the Figma prototype

### Page objective

The homepage should communicate:

* what the store is
* what kind of products it sells
* what the mood is
* where to start browsing
* why to join/return

### Recommended structure

#### A. Top utility/header band

Contains:

* brand/logo
* nav
* search
* account
* cart
* optional small rewards/status badge

Design:

* very clean, single line
* quiet background
* thin bottom rule
* icon bar on right
* no giant promo strip at top by default

#### B. Hero

Two-column desktop, stacked mobile.

Left:

* H1
* short supporting line
* primary CTA
* secondary CTA

Right:

* curated product grouping or featured drop imagery
* styled like a staged “collector flat lay”

Rules:

* no photographic clutter
* hero should feel editorial, not like a banner ad
* use one accent block behind imagery, likely screen green

#### C. Category tile row

5–6 framed tiles:

* Apparel
* Accessories
* Games / Collectibles
* Posters / Prints
* Bundles
* Sale / New Drops

Rules:

* equal height
* icon-led
* concise labels
* subtle hover state only

#### D. Featured products

Primary product grid.

Header row:

* section title
* small supporting copy
* “View all”

Grid:

* 4-up desktop
* first 4 or 8 featured SKUs
* consistent card height

#### E. “Power up your collection” explainer module

This worked well in the image direction you chose.

Three steps:

* Discover
* Unlock
* Level up

This is the right place for:

* loyalty/rewards intro
* newsletter-lite logic
* bundle/club explanation

#### F. Best sellers side module or strip

Keep this narrow and editorial, not giant.
Could be:

* list panel on desktop beside explainer
* stacked below on mobile

#### G. New drops / curated collection banner

One horizontal promotional module:

* new arrivals
* limited drop
* seasonal collection
* collaboration capsule

This should feel like packaging art, not a loud promo banner.

#### H. Newsletter / club signup

Compact and useful.

* title
* one-line value proposition
* email field + CTA
* no oversized gradient section

#### I. Footer

* utility links
* socials
* email signup or support CTA
* shipping / returns / rewards row
* clean framed fields

---

## 10) Shop landing page brief

This page should be more than a standard archive. It needs to act like a category entry point.

### Goal

Help the user choose where to browse before dumping them into filters.

### Structure

#### A. Archive intro header

* page title
* 1–2 line summary
* optional category illustration or featured flat lay
* product count / sorting summary

#### B. Collection tiles

Feature key subcategories before the grid:

* New Drops
* Apparel
* Accessories
* Collectibles
* Posters
* Sale

#### C. Browse + filter + product grid zone

Desktop:

* left sidebar
* right main grid

Mobile:

* sticky filter/sort bar
* drawer for full filters

### Filter design

Filters should look mechanical and tidy:

* sections framed by thin rules
* checkbox / toggle / range controls
* active states use screen green or signal yellow
* avoid glass panels from current funky archive styling 

### Sorting bar

Include:

* result count
* sort select
* view toggle (grid/list)
* applied filters summary

### Grid

Default:

* 3-up or 4-up based on container width
* same card rules as homepage

Optional list view:

* image left
* info right
* more space for description and CTAs

### Supporting modules below grid

* newsletter strip
* collection explainer
* recently viewed
* editorial story block

---

## 11) Single product page brief

### Goal

Make the product feel collectible and premium while keeping buying friction low.

### Structure

#### A. Breadcrumb

Minimal, mono, quiet.

#### B. Main product layout

Desktop:

* left gallery
* right details

Mobile:

* gallery first
* sticky purchase actions below pricing

### Gallery

Your existing product gallery structure is usable as-is from a layout standpoint. 

Retro art direction:

* large framed hero image
* thumbnail rail
* subtle screen/panel background
* sale/new badge placed top-left
* no neon glow frame

### Details stack

1. title
2. reviews
3. price
4. short description
5. variant selectors
6. quantity + add to cart
7. buy now / wishlist / compare
8. trust / shipping / stock
9. SKU / category / tags

### Variant selectors

#### Colour

* small square or rounded-square swatches
* selected state gets ink border + signal focus

#### Size

* hardware-like segmented buttons
* active fill = screen green or signal

### Price styling

* prominent
* display font allowed
* strike-through original price smaller
* sale badge muted alert, not loud red

### Product tabs / accordions

For prototype, use accordions on mobile and tabs on desktop:

* Description
* Specs
* Shipping
* Care / Materials
* Reviews

### Cross-sell blocks

Below main product:

* related products
* recently viewed
* “complete the collection”
* loyalty / rewards reminder

---

## 12) All remaining page families that should inherit the redesign

You said every page needs redesigning. This is the correct approach. The retro language has to feel systemic.

### Cart

* framed cart table or stacked item cards
* quantity steppers match product page
* order summary panel feels like a device side panel
* promo code field styled as inset control
* shipping and trust row simplified

### Checkout

* reduce decoration
* strongest emphasis on field clarity
* payment methods use framed selectors
* keep typography more body-led here
* confirmation / progress steps can use pixel-ish small labels

### Account

* dashboard cards
* orders table as framed module
* side navigation with active state using screen fill
* saved addresses and profile settings as clean panels

### Wishlist / Compare / Quick View

* must inherit same card shell
* quick view should be a solid framed panel, not glass modal
* compare table uses device-grid logic and restrained colour

### Search results

* archive rules apply
* top query summary
* filters left / results right
* empty states use quiet illustration and sensible copy

### Blog / editorial pages

* use same palette and type, but lighter on pixel motifs
* article cards should feel like catalogue cards
* blog hero can use flat graphic or printed texture, not neon orbs

### Info / about / FAQ / legal pages

* keep these cleanest
* strong readability
* subtle module framing
* almost no decorative pixel garnish

---

## 13) Figma system setup

### Figma file organisation

1. **Foundations**

   * colours
   * typography
   * spacing
   * radius
   * shadows
   * iconography
   * texture rules

2. **Components**

   * header
   * buttons
   * fields
   * tabs
   * chips
   * product cards
   * list items
   * filter groups
   * newsletter module
   * footer

3. **Commerce modules**

   * hero
   * category row
   * product grid
   * mini list
   * collection banner
   * rewards module
   * related products
   * cart summary
   * account cards

4. **Templates**

   * homepage
   * shop landing
   * archive grid
   * single product
   * cart
   * checkout
   * search
   * account
   * blog archive
   * article
   * legal/info

### Component naming in Figma

Use something like:

* `Retro/Header/Desktop`
* `Retro/Product Card/Grid`
* `Retro/Button/Primary/Large`
* `Retro/Filter Group/Checkbox`
* `Retro/Section/Collection Banner`

### Texture usage

Use texture in Figma sparingly:

* light paper grain
* subtle dither pattern
* no obvious “game screenshot” background

### Icon style

* outline or filled pixel-adjacent icons
* consistent stroke weight
* avoid glossy app-store icon style

---

## 14) File-by-file implementation priority

### Phase 1: token and compatibility cleanup

1. `theme-retro.css`
2. add missing compatibility tokens
3. define `.theme-retro` scope
4. stop using funky palette on converted templates

### Phase 2: global chrome

1. header retro skin
2. footer retro skin
3. buttons/forms/cards/filter primitives

### Phase 3: core commerce templates

1. homepage
2. shop landing / archive
3. single product

### Phase 4: conversion pages

1. cart
2. checkout
3. search
4. account
5. wishlist / compare / quick view

### Phase 5: content pages

1. blog archive
2. single article
3. about/info/FAQ/legal

---

## 15) Specific do / don’t list for the retro layer

### Keep

* quiet backgrounds
* dark linework
* modular card frames
* pixel-inspired headings
* consistent spacing rhythm
* product-led imagery
* strong CTA hierarchy

### Remove

* neon glows
* cyan/pink/magenta gradients
* glassmorphism
* floating orbs
* heavy parallax
* exaggerated hover lift
* Mario/platform scenery
* novelty-first icon overload

---

## 16) Final recommendation

The current repo is already structurally ready for this move. The strongest path is:

* **retain the architecture**
* **introduce a scoped retro token layer**
* **replace the funky page skins**
* **normalise missing/shared tokens**
* **rebuild every template around the same restrained handheld system**

That gives you a theme that is:

* ownable
* safer legally
* more coherent commercially
* easier to maintain than the current retro-neon hybrid

The next best move is a **file-by-file migration map** from the current `front-page-funky.css`, `shop-funky.css` and related styles into `retro/` equivalents, using the existing header, footer and gallery structures as the base.
