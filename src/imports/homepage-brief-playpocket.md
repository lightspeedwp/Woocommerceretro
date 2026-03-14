* **Value:** The codebase already gives you the right foundation for this: `theme-variables.css` is the canonical token source, `ThemeContext` already persists light/dark mode and theme style to `localStorage`, and the desktop header action area is already structured for Search, Account, Theme and Cart.   
* **Risk:** If the homepage redesign adds richer colour without a formal token expansion, it will drift fast. The current token layer is still biased toward the older neutral/funky system, and the current dark mode is functional but not aligned to the new Handheld Mono palette.  
* **Next step:** Lock this as the **official homepage brief**, add a dedicated **expanded global colour system**, and create a **retro-specific dark token layer** that plugs into the existing `.dark` mode and header action structure rather than inventing a second theme mechanism.  

# Homepage Brief — PlayPocket / Handheld Mono

## 1) Creative direction summary

### Theme name

**PlayPocket — Handheld Mono**

### Core feel

A premium retro ecommerce homepage inspired by handheld gaming hardware, collector packaging and clean editorial merchandising.

### What this homepage must communicate

* this is a curated retro-inspired gear store
* the brand is playful but controlled
* the catalogue spans apparel, accessories, games, posters and collectibles
* products are the hero, not decorative nostalgia
* the design system is consistent in both light and dark mode

### Visual principles

* quiet warm backgrounds
* stronger outlines and framed modules
* pixel-inspired display typography
* clean sans body copy
* expanded accent palette used deliberately
* richer colour than the first mono concept, but still disciplined

---

## 2) Important implementation note — expand the global colours

This needs to be a **formal design-system decision**, not an ad hoc homepage tweak.

The current canonical token file already defines the global system and explicitly says components must use the `--wp--preset--*` variables from `theme-variables.css`. 
That means the extra colours you like from the homepage comp should be added as **global semantic tokens**, then mapped into the retro theme, not hardcoded inside section CSS.

## Required note for the brief

**Expand the global colour system before redesigning page templates.**
Add a new PlayPocket retro palette layer on top of the existing global token architecture so homepage, shop, single product, cart, checkout and account pages all pull from the same colour vocabulary. This prevents the homepage from becoming the only page with richer colour expression.

---

## 3) Expanded global colour brief

You said you really like the additional colours in the homepage comp. I agree — they make the system feel more ownable and less flat. The correct approach is to move from strict monochrome to a **controlled expanded retro palette**.

## Palette intent

Keep the base restrained, then add colour through:

* product highlight surfaces
* category icons
* badges
* small decorative pixels
* CTA hierarchy
* merchandising blocks

## Expanded light-mode palette

### Core neutrals

* `--retro-paper`: `#F2EEE6`
* `--retro-paper-deep`: `#E6E0D3`
* `--retro-panel`: `#F7F3EB`
* `--retro-panel-alt`: `#DDD6C8`
* `--retro-ink`: `#1E2630`
* `--retro-ink-soft`: `#495565`
* `--retro-line`: `#8F998F`
* `--retro-line-soft`: `#BCC3B5`

### Expanded accents

* `--retro-screen`: `#B7C9BE`
* `--retro-screen-dark`: `#7E9A8C`
* `--retro-signal`: `#D8B548`
* `--retro-signal-strong`: `#C79A24`
* `--retro-alert`: `#B65E4A`
* `--retro-success`: `#647B61`
* `--retro-accent-coral`: `#D9795B`
* `--retro-accent-sky`: `#86AFC3`
* `--retro-accent-berry`: `#8F6A8F`
* `--retro-accent-olive`: `#8A9A5B`

## Usage rules

* neutrals dominate the page
* screen green is the main identity accent
* signal yellow is reserved for CTA and priority emphasis
* coral/berry/sky are secondary merchandising accents only
* no gradients in default retro light mode
* no neon cyan / neon pink in the homepage retro layer

---

## 4) Recommended CSS token expansion

Because the repo already treats `theme-variables.css` as the canonical token source, use that file or a `theme-retro.css` layer to define and map the new tokens. 

```css
:root,
.theme-retro {
  /* PlayPocket retro base */
  --retro-paper: #F2EEE6;
  --retro-paper-deep: #E6E0D3;
  --retro-panel: #F7F3EB;
  --retro-panel-alt: #DDD6C8;
  --retro-ink: #1E2630;
  --retro-ink-soft: #495565;
  --retro-line: #8F998F;
  --retro-line-soft: #BCC3B5;

  /* PlayPocket expanded accent palette */
  --retro-screen: #B7C9BE;
  --retro-screen-dark: #7E9A8C;
  --retro-signal: #D8B548;
  --retro-signal-strong: #C79A24;
  --retro-alert: #B65E4A;
  --retro-success: #647B61;
  --retro-accent-coral: #D9795B;
  --retro-accent-sky: #86AFC3;
  --retro-accent-berry: #8F6A8F;
  --retro-accent-olive: #8A9A5B;

  /* Map into WP preset system */
  --wp--preset--color--background: var(--retro-paper);
  --wp--preset--color--foreground: var(--retro-ink);
  --wp--preset--color--surface: var(--retro-panel);
  --wp--preset--color--surface-foreground: var(--retro-ink);
  --wp--preset--color--secondary: var(--retro-paper-deep);
  --wp--preset--color--secondary-foreground: var(--retro-ink);
  --wp--preset--color--accent: var(--retro-screen);
  --wp--preset--color--accent-foreground: var(--retro-ink);
  --wp--preset--color--muted: var(--retro-panel-alt);
  --wp--preset--color--muted-foreground: var(--retro-ink-soft);
  --wp--preset--color--brand: var(--retro-screen-dark);
  --wp--preset--color--cta: var(--retro-signal);
  --wp--preset--color--cta-hover: var(--retro-signal-strong);
  --wp--preset--color--success: var(--retro-success);
  --wp--preset--color--error: var(--retro-alert);

  /* Missing shared aliases used around the codebase */
  --wp--preset--color--border: var(--retro-line);
  --wp--preset--color--border-light: var(--retro-line-soft);
  --wp--preset--color--text-secondary: var(--retro-ink-soft);
}
```

---

## 5) Extensive dark mode design tokens

The existing system already supports dark mode through:

* `ThemeContext` storing `theme-mode`
* `.dark` being applied to the root element
* a separate `theme-dark-mode.css` overriding colours and interaction states.  

That means you should not invent a second dark mode architecture. Build the retro dark theme on top of this existing mechanism.

## Dark mode design goal

Dark mode should feel like:

* a powered-on console shell at night
* lower glare than the current generic dark mode
* warmer and more characterful than plain charcoal
* still WCAG-safe

## Dark mode principles

* never invert the light theme literally
* dark surfaces should retain module framing
* accent colours must be slightly muted, not fluorescent
* text contrast remains high
* yellow CTA stays readable without glowing
* green identity accent shifts to a slightly cooler phosphor tone

## Recommended retro dark token layer

```css
.dark.theme-retro,
.dark {
  /* Core dark surfaces */
  --retro-dark-bg: #151A1E;
  --retro-dark-panel: #202830;
  --retro-dark-panel-alt: #2A343D;
  --retro-dark-inset: #11161A;

  /* Text */
  --retro-dark-text: #F2EEE6;
  --retro-dark-text-soft: #C4CBC3;
  --retro-dark-text-muted: #9BA69F;

  /* Lines */
  --retro-dark-line: #56645F;
  --retro-dark-line-soft: #3E4A46;
  --retro-dark-line-strong: #7B8C86;

  /* Retro accents */
  --retro-dark-screen: #8DA89D;
  --retro-dark-screen-strong: #A7C0B6;
  --retro-dark-signal: #D8B548;
  --retro-dark-signal-strong: #E4C96E;
  --retro-dark-alert: #D48068;
  --retro-dark-success: #7EA17A;
  --retro-dark-coral: #D08A72;
  --retro-dark-sky: #8AAFC0;
  --retro-dark-berry: #A083A6;
  --retro-dark-olive: #A0AE73;

  /* Interaction */
  --retro-dark-focus: #E4C96E;
  --retro-dark-shadow-sm: 0 1px 0 rgba(0,0,0,0.35);
  --retro-dark-shadow-md: 0 4px 12px rgba(0,0,0,0.28);
  --retro-dark-shadow-lg: 0 10px 24px rgba(0,0,0,0.32);

  /* WP preset remap */
  --wp--preset--color--background: var(--retro-dark-bg);
  --wp--preset--color--foreground: var(--retro-dark-text);
  --wp--preset--color--surface: var(--retro-dark-panel);
  --wp--preset--color--surface-foreground: var(--retro-dark-text);
  --wp--preset--color--secondary: var(--retro-dark-panel-alt);
  --wp--preset--color--secondary-foreground: var(--retro-dark-text);
  --wp--preset--color--accent: var(--retro-dark-screen);
  --wp--preset--color--accent-foreground: #101417;
  --wp--preset--color--muted: var(--retro-dark-panel-alt);
  --wp--preset--color--muted-foreground: var(--retro-dark-text-muted);
  --wp--preset--color--brand: var(--retro-dark-screen-strong);
  --wp--preset--color--cta: var(--retro-dark-signal);
  --wp--preset--color--cta-hover: var(--retro-dark-signal-strong);
  --wp--preset--color--success: var(--retro-dark-success);
  --wp--preset--color--error: var(--retro-dark-alert);

  --wp--preset--color--border: var(--retro-dark-line);
  --wp--preset--color--border-light: var(--retro-dark-line-soft);
  --wp--preset--color--border-strong: var(--retro-dark-line-strong);
  --wp--preset--color--text-secondary: var(--retro-dark-text-soft);

  --wp--preset--color--link: var(--retro-dark-screen-strong);
  --wp--preset--color--link-hover: var(--retro-dark-signal-strong);
  --wp--preset--color--ring: var(--retro-dark-focus);
  --wp--preset--focus-ring--color: var(--retro-dark-focus);

  --wp--preset--shadow--sm: var(--retro-dark-shadow-sm);
  --wp--preset--shadow--md: var(--retro-dark-shadow-md);
  --wp--preset--shadow--lg: var(--retro-dark-shadow-lg);
}
```

## Dark mode component guidance

### Header

* background becomes dark panel, not black
* inner icons sit on subtle inset hover surfaces
* logo mark keeps yellow + off-white contrast
* nav text stays light but not stark white

### Hero

* background becomes dark shell/panel
* right-side product stage becomes dark phosphor grid
* yellow CTA remains warm and dominant
* small accent pixels may use muted berry/coral/green

### Cards

* card backgrounds become dark panels
* borders remain visible
* product imagery can stay bright to preserve merch clarity
* badges retain colour but use darker foundations

### Forms

The current light and dark theme files already treat body, links, inputs, buttons and focus states as mode-aware system elements. Keep that pattern for the retro redesign.  

---

## 6) Header brief — add light/dark switcher

The existing `ThemeContext` already supports:

* `mode`
* `toggleMode()`
* `setMode()`
* persisted `theme-mode`
* root `light` / `dark` classes. 

The existing header CSS also explicitly describes the desktop action area as:
**Search, Account, Theme, Cart**, with a compact icon bar structure already in place. 

## Requirement

Add a visible **Light / Dark switcher** to the header, rather than hiding theme mode behind settings.

## Placement

### Desktop

Right action cluster:

* Search
* Theme mode switch
* Account
* Cart

### Mobile

Inside right actions:

* Search
* Theme toggle
* Cart

## Switcher behaviour

### Desktop version

Use a segmented toggle:

* left: sun / `LIGHT`
* right: moon / `DARK`

Style:

* framed hardware toggle
* 40–44 px tall
* active segment filled
* inactive segment transparent
* animated thumb movement optional but subtle

### Mobile version

Use a single icon toggle if space is tight:

* sun in light mode
* moon in dark mode

Tap target:

* 44 × 44 minimum

## Header content structure

### Left

* logo
* optional small “beta” or drop-status badge

### Centre

* nav: Shop, Collections, New Drops, Accessories, About

### Right

* search
* light/dark switch
* account
* cart count

## Header design notes

* header must feel compact and device-like
* maintain sticky behaviour from current CSS
* use outline and filled states instead of glow
* no separate floating toolbar

---

## 7) Homepage section brief

## 7.1 Hero

### Goal

Introduce PlayPocket as a retro-inspired product brand, not just a generic store.

### Copy structure

* Eyebrow: `RETRO-INSPIRED GEAR`
* Headline:

  * `EXPLORE.`
  * `COLLECT.`
  * `LEVEL UP.`
* Supporting line:

  * `Retro-inspired gear made for every day play.`
* CTA:

  * `Shop Now`
* Secondary CTA:

  * `Browse Collections`

### Visual structure

Left:

* stacked type
* CTA group
* small pixel motifs

Right:

* staged product composition
* hoodie, cap, handheld accessories
* grid board background
* stronger colour accents than the first mono version

### Colour use

* hero base stays neutral
* stage board uses green
* products introduce yellow, coral and dark navy
* avoid full rainbow treatment

## 7.2 Category row

Show:

* Apparel
* Accessories
* Games
* Posters
* Collectibles

Each tile:

* framed module
* icon-led
* single accent colour
* concise label
* hover state slight tint shift

## 7.3 Featured items

Primary conversion module.

Rules:

* 4-up desktop
* card titles in display/body hybrid
* stronger CTA fills
* allow one or two badges per row, not every card

## 7.4 Collection explainer

Use the structure you already like:

* Discover new drops
* Unlock exclusives
* Level up your style

Purpose:

* introduces rewards / loyalty / club system
* bridges catalogue and newsletter

## 7.5 Best sellers panel

Compact right-side module on desktop, stacked below on mobile.

## 7.6 Footer signup

Keep the footer clean but brand-consistent:

* follow prompt
* social icons
* email signup
* utility links

---

## 8) Clear content brief — product content

You asked for a clear content brief describing product content. Since the repo search did not surface reliable mock catalogue copy, I’m basing this content model on the approved homepage direction you supplied.

## Product content model

Every product should support these fields:

### Core ecommerce fields

* Product name
* Short description
* Long description
* Price
* Sale price
* SKU
* Stock status
* Product category
* Product images
* Tags
* Shipping class
* Featured / Best Seller / New / Limited flags

### Merchandising fields

* Collection name
* Drop name
* Badge label
* Colourway
* Size options
* Material
* Care instructions
* Packaging note
* Related products
* Cross-sell collection

### Content-writing tone

* concise
* playful but not cheesy
* collector-aware
* benefit-led
* lightly nostalgic
* avoids direct references to Nintendo/Mario IP

## Product copy format

### Product name

2–4 words preferred.

Examples:

* Pixel Hoodie
* 8-Bit Cap
* Retro Keychain
* Pocket Tote
* Dungeon Desk Mat

### Short description

1 sentence:

* what it is
* why it is cool
* who it is for

Example:
“A heavyweight everyday hoodie with handheld-inspired artwork for retro fans who want clean, wearable nostalgia.”

### Long description

3 small paragraphs:

1. overview / vibe
2. material or construction
3. fit, use or collection context

### Meta copy blocks

* Material
* Fit / sizing
* Shipping
* Care
* Limited / restock / preorder note

---

## 9) Clear content brief — product categories

## Primary categories

### 1. Apparel

Purpose:
Core wearable range.

Includes:

* hoodies
* tees
* sweatshirts
* caps
* socks
* jackets
* totes if fashion-led

Content angle:
Streetwear meets retro console culture.

### 2. Accessories

Purpose:
Smaller add-to-cart-friendly items.

Includes:

* keychains
* lanyards
* pins
* badges
* mugs
* water bottles
* stickers
* desk accessories

Content angle:
Affordable collectible items and giftable add-ons.

### 3. Games

Purpose:
Editorial / culture category, or productised software/props depending on the prototype.

Includes:

* boxed game-inspired items
* cartridge-style props
* indie-inspired merch sets
* game-themed desk goods
* possibly digital/downloadable extras if needed later

Content angle:
A category that broadens the universe beyond clothing.

### 4. Posters

Purpose:
Art and print-oriented range.

Includes:

* art prints
* posters
* mini prints
* collector cards
* packaging art reproductions

Content angle:
For fans who want the world on display, not just worn.

### 5. Collectibles

Purpose:
Higher-desire, limited-edition range.

Includes:

* enamel pins
* boxed items
* limited drops
* numbered editions
* bundle-exclusive pieces
* display objects

Content angle:
Scarcity, curation and collector value.

---

## 10) Recommended homepage content modules by category

## Hero

Feature:

* Apparel + accessory hero products together

## Category row

Surface all five primary categories

## Featured items

Mix:

* 2 apparel
* 1 accessory
* 1 collectible
  then rotate

## Best sellers

Prefer smaller/giftable products:

* mug
* tote
* socks
* poster

## New drops

Lead with:

* latest apparel or cap
* limited keychain/pin
* poster or collectible variant

## Club / rewards panel

Copy focus:

* early access
* limited drops
* members-only discounts
* restock alerts

---

## 11) Homepage content-writing rules

### Headlines

* short
* punchy
* modular
* visually stackable

### Product names

* simple and iconic
* no overdescribing
* use retro cues sparingly

### Category descriptions

Keep to 4–8 words if shown on tiles.

### CTA labels

Use:

* Shop Now
* Explore Collection
* View All
* Join the Club
* See New Drops

Avoid:

* generic “Learn More”
* gimmicky platformer references everywhere

---

## 12) Final recommendation

This homepage should now be treated as the **master visual reference** for the rest of the prototype.

Priority decisions to lock:

1. expand global colours into formal tokens
2. create retro-specific dark tokens, using the existing `.dark` system
3. add the light/dark switcher to the header action area
4. standardise product content fields and category language before deeper template redesign

If you want, I’ll turn this into the next step as a **Figma-ready homepage spec with exact section copy, token list, and component inventory**.
