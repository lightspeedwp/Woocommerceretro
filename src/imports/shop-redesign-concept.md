* **Value:** The current shop architecture is already solid: it has a dedicated archive hero, a sidebar/content layout, a results bar, a mobile filter toggle, and a structured `shop-filter` component with sections, counts, ratings, price inputs and stock controls. The redesign should keep that structure and replace the current neon/glass styling with Handheld Mono. 
* **Risk:** The current shop styling leans hard into gradients, blur, glow and neon-active states, which clashes with the quieter handheld direction and will make the page feel inconsistent with the homepage you liked. 
* **Next step:** I’d redesign the shop as a **catalogue-first archive** with a framed filter rail, compact results toolbar, and cleaner product grid, while preserving the existing desktop/mobile behaviour already in the CSS. 

## 1. Recommended shop page concept

### Page name

**PlayPocket Shop / All Gear**

### Core feel

A handheld-console catalogue screen:

* light paper background
* dark ink frames
* muted screen-green accents
* soft yellow for CTA/highlight
* no glow, no blur, no neon hover

### Page objective

Let users:

* understand the collection quickly
* narrow down with filters without feeling overwhelmed
* scan products fast
* switch between browse and refine modes cleanly

## 2. Page structure

### A. Archive header

Keep the existing idea of a dedicated archive header, but strip out the hero-photo/gradient treatment. The current CSS already assumes an archive hero and content block, so this is a reskin rather than a rebuild. 

**Layout**

* small eyebrow: `PLAYPOCKET SHOP`
* H1: `Browse the Collection`
* short line of copy
* compact meta row: `248 items · apparel, accessories, collectibles`

**Visual treatment**

* framed panel, not full-bleed spectacle
* pale screen-green inset strip behind the heading
* optional tiny pixel glyphs in corners
* one supporting product collage or illustrated category strip on the right for desktop

### B. Browse shortcuts row

Before the filter/grid zone, add 5 shortcut tiles:

* New Drops
* Apparel
* Accessories
* Collectibles
* Sale

These should feel like quick category buttons rather than promo banners.

### C. Main archive zone

The existing archive layout already supports a column layout that becomes a row on larger screens, with content separated from the sidebar. Keep that. 

**Desktop**

* left: sticky filter rail
* right: results toolbar + active filters + product grid

**Mobile**

* toolbar first
* filter button opens drawer
* active filters displayed as removable chips below toolbar

## 3. Filter rail design

The current code already has a full shop-filter module with:

* header
* active count
* clear action
* collapsible sections
* checkbox options
* rating display
* price inputs
* stock toggle 

So I’d keep that information architecture and redesign the visual style.

### Filter rail shell

* width: about 280–320 px desktop
* background: `retro panel`
* border: `2px solid retro ink`
* radius: 14–16 px
* inner sections divided by fine rules
* sticky on desktop after the header

### Filter rail header

Top row:

* `FILTERS`
* active filter count in a small badge
* `Clear all` as a text action

Style:

* no cyan text
* use screen-dark green for active count
* use muted yellow underline or micro-badge for `Clear all`

### Section order

1. Category
2. Product type
3. Price
4. Size
5. Colour
6. Rating
7. Availability

### Section treatment

Each section should look like a compact device module:

* title row
* chevron on right
* section body with tight spacing
* collapsed by default for lower-priority groups on mobile

### Control styling

**Checkbox rows**

* square checkboxes
* labels left, count right
* hover fills row background slightly
* active checkboxes use muted screen green

**Price**

* two small inset fields: Min / Max
* optional range rail below
* no neon slider
* show current range in mono/small meta text

**Ratings**

* use simple star row plus review count
* keep stars warm yellow
* everything else neutral

**Stock**

* simple toggle or checkbox:

  * In stock
  * Pre-order
  * Sold out hidden

## 4. Results toolbar

The existing archive CSS already provides a dedicated results bar and mobile filter button. Keep that interaction model. 

### Toolbar content

Left:

* result count
* active category label

Right:

* sort select
* view toggle
* mobile filter button

### Recommended controls

**Sort**

* Featured
* Newest
* Price: Low to High
* Price: High to Low
* Best Selling

**View**

* Grid
* List

**Mobile filter button**
Keep the current dedicated mobile filter CTA, but redesign it as a solid framed button rather than a glassmorphism slab. The current CSS already expects that control. 

## 5. Active filter chips

Add a row directly under the toolbar:

* Apparel
* Green
* Under £50
* In Stock

Style:

* framed chips
* pale screen fill
* dark ink text
* small x icon

This fits the current archive/filter structure, which already tracks active filters conceptually. 

## 6. Product grid

The current archive grid logic already expects responsive grid states and a loading grid that moves from 1 column to 2 and then 4 columns at larger breakpoints. That is a good base to keep. 

### Grid recommendation

**Desktop**

* 3-up by default in the main content column
* 4-up only on very wide screens

**Tablet**

* 2-up

**Mobile**

* 2-up if cards stay legible
* otherwise 1-up for list mode

### Product card rules

* fixed image frame
* clear badge zone
* title
* price
* compact CTA
* wishlist icon in top-right

### Card visual style

* soft paper panel
* dark outline
* subtle hover lift only
* no outer glow
* no shadow bloom

## 7. Suggested shop page wireframe

```text
HEADER

[ Archive Intro Panel ]
PLAYPOCKET SHOP
Browse the Collection
248 items · apparel, accessories, collectibles

[ Shortcut Tiles ]
New Drops | Apparel | Accessories | Collectibles | Sale

[ Toolbar ]
248 results | Sort ▼ | Grid/List | Filters

[ Active Filter Chips ]
Apparel ×  Green ×  Under £50 ×  In stock ×

------------------------------------------------
| FILTERS                | PRODUCT GRID        |
|------------------------|---------------------|
| Category               | Card 1  Card 2  Card 3 |
| Product Type           | Card 4  Card 5  Card 6 |
| Price                  | Card 7  Card 8  Card 9 |
| Size                   |                     |
| Colour                 | Pagination          |
| Rating                 |                     |
| Availability           |                     |
------------------------------------------------

[ Bottom utility strip ]
Free shipping / Easy returns / Rewards

FOOTER
```

## 8. Handheld Mono visual specs for the shop page

### Palette

* page background: warm paper
* filter rail: slightly darker paper panel
* product cards: clean off-white paper
* accent: muted screen green
* CTA: soft yellow
* sale: muted brick/red

### Type

* heading: pixel-ish display
* toolbar/filter labels: bold sans or mono
* body/product text: clean sans

### Borders

* 2 px outer frames
* 1 px inner dividers
* rounded corners, but not pill-heavy everywhere

### Motion

* hover lift 2–3 px max
* border darkens slightly
* no glow or blur

## 9. What to remove from the current shop styling

Based on the current shop stylesheet, I would explicitly remove:

* gradient archive overlay
* hero orbs
* glassmorphism filter panel
* neon-active filter chips
* cyan hover text
* product card glow on hover
* gradient dividers in archive sections 

## 10. What to keep from the current implementation

Keep these structural patterns:

* archive hero/content split
* archive results bar
* desktop sidebar + content layout
* mobile filter toggle
* structured `shop-filter` sections
* responsive archive loading/product grid logic 

## Notes

This is the right page to make feel a bit more practical than the homepage. Homepage can sell the vibe; shop needs to sell navigation, scanning and conversion.

I can turn this into a **full Figma-ready shop page brief** next, with exact section names, filter labels, card states and CSS class mapping for `shop-retro.css`.
