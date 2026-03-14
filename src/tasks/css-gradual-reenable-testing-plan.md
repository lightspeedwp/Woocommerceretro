# CSS Gradual Re-enablement Testing Plan

**Status:** Phase 1 Complete (Batches 1-8 active)  
**Created:** March 13, 2026  
**Next Phase:** Batch 9 uncommenting

---

## Phase 1: Batches 1-8 Stability Testing ✅

**Current State:**
- ✅ 100 imports active (Batches 1-8)
- ✅ React StrictMode re-enabled
- ✅ `/styles/globals-minimal.css` entry point confirmed
- ⏳ Performance monitoring still disabled (to re-enable after full stability)

### Critical Routes to Test

**Category 1: Core Pages (Essential)**
- [ ] `/` - Homepage (FrontPage with retro hero, product grids)
- [ ] `/shop` - Product Archive (filters, sorting, pagination)
- [ ] `/product/wireless-retro-controller` - Single Product (gallery, tabs, reviews)
- [ ] `/cart` - Cart Page (retro mini-cart styles)
- [ ] `/checkout` - Checkout Page (multi-step retro checkout)
- [ ] `/sitemap` - Sitemap (150+ routes, search, expand/collapse)
- [ ] `/404` - 404 Error Page (retro design with sitemap CTA)

**Category 2: Account & Authentication**
- [ ] `/account` - Account Dashboard (retro account hub)
- [ ] `/account/orders` - Order History
- [ ] `/account/wishlist` - Wishlist
- [ ] `/account/addresses` - Saved Addresses

**Category 3: Retro Theme Pages (New)**
- [ ] `/membership` - Membership Page (retro design)
- [ ] `/subscription` - Subscription Page
- [ ] `/deals` - Deals/Flash Sale Page
- [ ] `/rewards` - Loyalty/Rewards Page
- [ ] `/our-story` - About/Story Page
- [ ] `/team` - Team Page
- [ ] `/help-center` - Help Center

**Category 4: Information Pages**
- [ ] `/accessibility-statement` - Accessibility Page
- [ ] `/sustainability` - Sustainability Page
- [ ] `/size-guide` - Size Guide
- [ ] `/buying-guide` - Buying Guide
- [ ] `/reviews` - Reviews Overview
- [ ] `/refunds` - Refunds Policy
- [ ] `/warranty` - Warranty Information

**Category 5: Navigation & Interactions**
- [ ] Header mega menu dropdowns (5 menus: SHOP, DEALS, COMMUNITY, ABOUT, ALL PAGES)
- [ ] Mobile menu toggle and navigation
- [ ] MiniCart slide-out drawer (add to cart, update quantities)
- [ ] Dark mode toggle (verify all retro sections adapt)
- [ ] Search functionality (header search, sitemap search)

### Stability Checklist

**Console Errors:**
- [ ] No `IframeMessageAbortError` in browser console
- [ ] No React hook warnings
- [ ] No CSS parse errors
- [ ] No 404 errors for missing CSS files

**Visual Integrity:**
- [ ] All retro sections render correctly (pixelated borders, CRT scanlines, neon glows)
- [ ] Forms styled correctly (inputs, checkboxes, selects, switches)
- [ ] Buttons have proper retro styling (primary, secondary, ghost variants)
- [ ] Product cards display correctly (images, prices, add-to-cart)
- [ ] Navigation menus styled correctly (mega menu, mobile menu, breadcrumbs)
- [ ] Overlays styled correctly (modals, dialogs, tooltips, dropdowns)

**Dark Mode Integrity:**
- [ ] All pages render correctly in dark mode
- [ ] Retro theme adapts properly (darker CRT effect, adjusted neon glows)
- [ ] Text contrast meets WCAG AA standards in both modes
- [ ] All borders visible in dark mode

**Interactive Elements:**
- [ ] All buttons clickable and styled
- [ ] All form inputs functional
- [ ] All links navigate correctly
- [ ] MiniCart drawer opens/closes smoothly
- [ ] Modal/dialog overlays open/close properly
- [ ] Accordion sections expand/collapse
- [ ] Tabs switch correctly
- [ ] Pagination works

**Performance:**
- [ ] Page load time < 3 seconds (cold cache)
- [ ] Page load time < 1 second (warm cache)
- [ ] No layout shifts during render
- [ ] Smooth scrolling
- [ ] No janky animations

---

## Phase 2: Batch 9 Rollout (Pending)

**Files to Uncomment (41 imports):**

### Text Blocks (11 files)
- `blocks/text/heading.css`
- `blocks/text/paragraph.css`
- `blocks/text/list.css`
- `blocks/text/quote.css`
- `blocks/text/code.css`
- `blocks/text/details.css`
- `blocks/text/math.css`
- `blocks/text/preformatted.css`
- `blocks/text/pullquote.css`
- `blocks/text/table.css`
- `blocks/text/verse.css`

### Display Blocks (7 files)
- `blocks/display/accordion.css`
- `blocks/display/aspect-ratio.css`
- `blocks/display/avatar.css`
- `blocks/display/badge.css`
- `blocks/display/chart.css`
- `blocks/display/countdown.css`
- `blocks/display/table.css`

### Search Blocks (2 files)
- `blocks/search/autocomplete.css`
- `blocks/search/product-search.css`

### Blog Blocks (5 files)
- `blocks/blog/blog-sidebar.css`
- `blocks/blog/category-filter.css`
- `blocks/blog/post-grid.css`
- `blocks/blog/post-meta.css`
- `blocks/blog/post-navigation.css`

### Archive Blocks (10 files)
- `blocks/archive/archive-product.css`
- `blocks/archive/cta.css`
- `blocks/archive/filter-drawer.css`
- `blocks/archive/filter-sidebar.css`
- `blocks/archive/header.css`
- `blocks/archive/pagination.css`
- `blocks/archive/product.css`
- `blocks/archive/results-count.css`
- `blocks/sections/archive-cta.css`
- `blocks/sections/quick-entry-tiles.css`

### Batch 9 Testing Plan

**Prerequisites:**
- ✅ All Phase 1 tests passing
- ✅ No console errors for 24 hours
- ✅ Figma Make iframe stable

**Rollout Strategy:**
1. Uncomment Batch 9 imports (lines 199-239 in globals-minimal.css)
2. Save file and reload Figma Make
3. Test critical routes again (homepage, shop, product, cart, checkout)
4. Monitor console for errors
5. Test blog pages specifically (archive, single post, category filters)
6. If stable for 1 hour → proceed to Batch 10
7. If errors occur → re-comment Batch 9, document issue, investigate

---

## Phase 3: Batch 10 Rollout (Pending)

**Files to Uncomment (139 imports):**

### Embed Blocks (8 files)
- `blocks/embed/embed.css`
- `blocks/embed/flickr.css`
- `blocks/embed/soundcloud.css`
- `blocks/embed/spotify.css`
- `blocks/embed/vimeo.css`
- `blocks/embed/wordpress-embed.css`
- `blocks/embed/x.css`
- `blocks/embed/youtube.css`

### Interactive Blocks (6 files)
- `blocks/interactive/back-to-top.css`
- `blocks/interactive/carousel.css`
- `blocks/interactive/collapsible.css`
- `blocks/interactive/command.css`
- `blocks/interactive/resizable.css`
- `blocks/interactive/scroll-area.css`

### Media Blocks (8 files)
- `blocks/media/audio.css`
- `blocks/media/cover.css`
- `blocks/media/file.css`
- `blocks/media/gallery.css`
- `blocks/media/image.css`
- `blocks/media/media-text.css`
- `blocks/media/video-testimonial.css`
- `blocks/media/video.css`

### Widget Blocks (12 files)
- `blocks/widgets/archives.css`
- `blocks/widgets/calendar.css`
- `blocks/widgets/categories.css`
- `blocks/widgets/html.css`
- `blocks/widgets/latest-comments.css`
- `blocks/widgets/latest-posts.css`
- `blocks/widgets/page-list.css`
- `blocks/widgets/rss.css`
- `blocks/widgets/search.css`
- `blocks/widgets/shortcode.css`
- `blocks/widgets/social-icons.css`
- `blocks/widgets/tag-cloud.css`

### UI Dev Tools (4 files)
- `blocks/ui/dev-checker.css`
- `blocks/ui/dev-monitor.css`
- `blocks/ui/dev-tools-layout.css`
- `blocks/ui/visually-hidden.css`

### Additional Theme Blocks (16 files)
- `blocks/theme/archive-title.css`
- `blocks/theme/comments.css`
- `blocks/theme/devtools.css`
- `blocks/theme/login-out.css`
- `blocks/theme/post-author.css`
- `blocks/theme/post-categories.css`
- `blocks/theme/post-date.css`
- `blocks/theme/post-excerpt.css`
- `blocks/theme/post-featured-image.css`
- `blocks/theme/post-navigation-link.css`
- `blocks/theme/post-tags.css`
- `blocks/theme/post-template.css`
- `blocks/theme/post-title.css`
- `blocks/theme/query-loop.css`
- `blocks/theme/read-more.css`
- `blocks/theme/search-results-title.css`
- `blocks/theme/term-description.css`

### Cleanup & Legacy (1 file)
- `blocks/sweep-cleanup.css`

### Section Styles (84 files)
- All funky-themed sections (account, blog, cart, commerce, etc.)
- All legacy section files
- Additional patterns, testimonials, hero variants, etc.

### Batch 10 Testing Plan

**Prerequisites:**
- ✅ All Phase 2 (Batch 9) tests passing
- ✅ No console errors for 24 hours
- ✅ Figma Make iframe stable with ~140 imports

**Rollout Strategy:**
1. Uncomment Batch 10 imports (lines 246-364 in globals-minimal.css)
2. Save file and reload Figma Make
3. Test ALL critical routes again
4. Monitor console for errors
5. Test blog post pages with embeds (YouTube, Spotify, etc.)
6. Test legacy funky-themed pages (if any remain)
7. If stable for 1 hour → mark as complete
8. If errors occur → identify specific problematic imports, re-comment, investigate

---

## Phase 4: Full Restoration (Final Goal)

**Target State:**
- All 280 imports active
- `/styles/globals.css` as entry point (with inline styles for critical path)
- Performance monitoring re-enabled
- Zero console errors
- All features working correctly

**Migration Path:**
1. Copy all active imports from `globals-minimal.css` to `globals.css`
2. Add inline critical styles to `globals.css` (currently missing)
3. Update `/src/main.tsx` to import `globals.css` instead of `globals-minimal.css`
4. Test thoroughly
5. Archive `globals-minimal.css` for reference

---

## Rollback Plan

**If Issues Occur:**

1. **Immediate Rollback:**
   - Re-comment problematic batch
   - Save file
   - Reload Figma Make
   - Verify previous batch still stable

2. **Investigation:**
   - Identify specific CSS file causing issue
   - Check for syntax errors in that file
   - Check for circular @import dependencies
   - Check for missing source files

3. **Isolation Testing:**
   - Create temporary test file with ONLY problematic import
   - Test in isolation
   - Fix identified issue
   - Re-attempt batch uncommenting

4. **Nuclear Option:**
   - Revert to original `globals-minimal.css` (5 imports)
   - Restore stability
   - Start gradual re-enablement from scratch with smaller batches

---

## Success Metrics

**Phase 1 (Current):**
- [ ] All critical routes load without errors
- [ ] Dark mode works correctly
- [ ] Retro theme sections render properly
- [ ] No `IframeMessageAbortError` for 24 hours

**Phase 2 (Batch 9):**
- [ ] Blog pages render correctly
- [ ] Archive filters work
- [ ] Search autocomplete styled
- [ ] No new console errors

**Phase 3 (Batch 10):**
- [ ] Embeds render correctly (YouTube, Spotify, etc.)
- [ ] All legacy sections work (if used)
- [ ] Dev tools styled correctly
- [ ] Zero missing styles across entire site

**Phase 4 (Full Restoration):**
- [ ] All 280 imports active
- [ ] Performance monitoring enabled
- [ ] Load time < 2 seconds (cold cache)
- [ ] Production-ready

---

## Notes

**Why This Gradual Approach?**
- Figma Make has iframe message port limitations
- 280 simultaneous @imports overwhelmed the system
- Gradual re-enablement allows monitoring for threshold
- Batches prioritized by visual impact and user-facing features

**What We Learned:**
- CSS @import chain length matters in iframe contexts
- Performance monitoring can trigger iframe errors (disabled for now)
- React StrictMode safe to re-enable after CSS optimization
- Priority-based batching more stable than arbitrary chunking

**Next Review:** March 14, 2026 (after 24 hours of Phase 1 stability)
