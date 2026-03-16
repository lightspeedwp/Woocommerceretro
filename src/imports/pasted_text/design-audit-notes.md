## **Three-Font Strategy**

Based on the design images, I recommend:

| Role | Font | Usage | Google Fonts? |
| :---- | :---- | :---- | :---- |
| Display (large headings, logo) | Pixelify Sans (700 weight) | Logo wordmark, Hero H1, section titles like "POWER UP YOUR COLLECTION" | ✅ Yes — supports 400-700 weights, designed to look good at all sizes |
| UI (small headings, labels) | Silkscreen (current) | Nav items, button labels, category names, product names, badges, "VIEW ALL" links | ✅ Already loaded |
| Body (readable text) | Inter (current) | Product descriptions, prices, paragraphs, form fields | ✅ Already loaded |

Why Pixelify Sans? It's the only Google pixel font with variable weight (400-700) and is specifically designed to remain crisp and legible at larger display sizes. Press Start 2P is another option but it's fixed-weight and extremely chunky — it may be *too* heavy.

---

## **WCAG 2.2 Color Contrast Audit**

Here are the current color pairings with calculated contrast ratios:

### **Light Mode (bg: \#F2EEE6)**

| Pair | Foreground | Background | Ratio | AA (4.5:1) | AAA (7:1) | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Body text | \#1E2630 | \#F2EEE6 | 12.2:1 | ✅ | ✅ | Good |
| Soft text | \#3D4A56 | \#F2EEE6 | 6.8:1 | ✅ | ❌ | AA only |
| Muted text | \#6B7A89 | \#F2EEE6 | 3.7:1 | ❌ | ❌ | FAIL |
| Link blue | \#0055AA | \#F2EEE6 | 7.3:1 | ✅ | ✅ | Good |
| Gold CTA text | \#1E2630 | \#FFC533 | 9.3:1 | ✅ | ✅ | Good |
| Primary btn (dark bg) | \#F2EEE6 | \#1E2630 | 12.2:1 | ✅ | ✅ | Good |
| Card btn (surface) | \#1E2630 | \#FFFFFF | 15.5:1 | ✅ | ✅ | Good |
| Muted fg on muted bg | \#6B7A89 | \#DDD6C8 | 2.8:1 | ❌ | ❌ | FAIL |
| Border as text | \#C4BAA8 | \#F2EEE6 | 1.5:1 | ❌ | ❌ | FAIL (decorative only OK) |

### **Dark Mode (bg: \#151A1E)**

| Pair | Foreground | Background | Ratio | AA (4.5:1) | AAA (7:1) | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| Body text | \#E8E2D8 | \#151A1E | 12.2:1 | ✅ | ✅ | Good |
| Soft text | \#C4CBC3 | \#151A1E | 10.0:1 | ✅ | ✅ | Good |
| Muted text | \#8A9499 | \#151A1E | 4.9:1 | ✅ | ❌ | AA only |
| Muted text on panel | \#8A9499 | \#232A32 | 3.5:1 | ❌ | ❌ | FAIL |
| Link blue (dark) | \#5DA0E0 | \#151A1E | 6.4:1 | ✅ | ❌ | AA only |
| Gold CTA dark | \#E8C054 | \#151A1E | 8.7:1 | ✅ | ✅ | Good |
| Primary btn dark | \#111111 | \#f9fafb | 18.1:1 | ✅ | ✅ | But loses gold identity\! |
| Dark featured header | \#E8E2D8 | \#232A32 | 8.6:1 | ✅ | ✅ | Good |

### **Known Problems**

1. \--color-muted (\#6B7A89) on light paper (\#F2EEE6) — 3.7:1 FAILS AA. Needs darkening to at least \#5A6878 (\~4.5:1).  
2. \--color-muted (\#8A9499) on dark panel (\#232A32) — 3.5:1 FAILS AA. Needs lightening to at least \#9FAAAF (\~4.5:1).  
3. Dark mode \--primary is white (\#f9fafb) — technically passes contrast but loses the gold/retro brand identity. Should be gold (\#E8C054 or \#D8B548) with dark text.  
4. Hover states — No hover color changes are defined for .pp-pixel-btn--accent or .pp-pixel-btn--card. Need explicit :hover colors with guaranteed contrast.  
5. Subscribe button — Uses dark bg but no dark-mode override; blends into dark background.

---

## **Questions for You**

1. Pixelify Sans vs Press Start 2P: Do you want me to prototype both display fonts so you can compare, or does Pixelify Sans (which has weight variation 400-700) sound right for the logo \+ hero headlines?  
   * No, just implement the fonts the way you suggest  
2. Gold in dark mode: The current dark mode swaps \--primary to white, which kills the retro gold aesthetic. Should I keep the gold (\#E8C054) with dark text (\#151A1E) in dark mode too? The contrast ratio is 8.7:1 (AAA), so it's perfectly accessible.  
   * In light mode the button can use gold (\#E8C054) with dark text (\#151A1E), not sure what the hover colours should be.  
   * In dark mode you need to choose suitable dark button background and light text  
3. Muted text fix: I need to darken light-mode muted from \#6B7A89 → \#5A6878 and lighten dark-mode muted from \#8A9499 → \#9FAAAF. These are subtle shifts. OK to proceed, or do you want different target values?  
   * Ok, proceed  
4. Hero layout: The design shows a styled flat-lay collage on a teal grid background (right side). The current implementation uses plain Unsplash photos in a simple grid. Do you want me to match the teal grid background treatment, or is the content/layout the priority first?  
   * Match the teal background treatment in light mode, not sure what will work for dark mode  
   * Next step will be to add yellow behind the “LEVEL UP.” text  
   * The current button height could be increased andf the button is too wide, it should not fill the width of the column   
5. Nav items: The design shows SHOP, COLLECTIONS, NEW DROPS, ACCESSORIES, ABOUT — the current header has mega menus for Shop, Deals, Memberships, Community, About \+ ALL PAGES. Should I update the nav labels to match the design, or keep the current structure?  
   * keep the current structure  
6. Category icons: The design uses detailed pixel-art icons (shirt, gameboy, game cartridge, poster frame, treasure chest). Currently using Lucide line icons. Should I create custom SVG pixel-art icons, or are the Lucide icons acceptable for now?  
   * I would like you to create icons for the category section on homepage:  
     * APPAREL  
     * ACCESSORIES  
     * GAMES  
     * POSTERS  
     * COLLECTIBLES  
   * I would like you to create custom SVG icons for the three icons in the “POWER UP YOUR COLLECTION” section above the footer:  
     * DISCOVER NEW DROPS  
     * UNLOCK EXCLUSIVES  
     * LEVEL UP YOUR STYLE  
7. Audit prompt scope: For the color contrast audit prompt, should it cover only the homepage components, or the entire site (all 28 templates, all patterns/blocks)?  
   * The colour contrast audit should cover the entire site in both light and dark mode\]
