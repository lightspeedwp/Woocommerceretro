# Quick Test Checklist — Phase 1

**Status:** Batches 1-8 Active (100 imports)  
**Goal:** 24 hours stable, zero iframe errors

---

## Before Testing

```bash
# 1. Run stability script
chmod +x scripts/test-css-stability.sh
./scripts/test-css-stability.sh

# Expected output:
# ✓ CSS configuration appears stable
# Total active imports: 100
```

---

## Critical Routes (Test in Order)

### E-Commerce Core (5 routes)

```
[ ] / (Homepage)
    ✓ Retro hero loads
    ✓ Product grids styled
    ✓ Mega menu works

[ ] /shop (Archive)
    ✓ Filters visible
    ✓ Product cards styled
    ✓ Pagination works

[ ] /product/wireless-retro-controller
    ✓ Gallery works
    ✓ Tabs functional
    ✓ Reviews styled

[ ] /cart
    ✓ Items display
    ✓ Quantities work
    ✓ Totals correct

[ ] /checkout
    ✓ Steps render
    ✓ Forms styled
    ✓ Payment methods show
```

### Navigation (5 tests)

```
[ ] Header mega menu
    ✓ All 5 dropdowns open/close

[ ] Mobile menu
    ✓ Hamburger toggles
    ✓ Links styled

[ ] MiniCart drawer
    ✓ Opens on "Add to Cart"
    ✓ Retro styling

[ ] Dark mode toggle
    ✓ Switches modes
    ✓ Retro theme adapts

[ ] Search
    ✓ Input styled
    ✓ Results show
```

### Retro Pages (7 routes)

```
[ ] /membership
[ ] /subscription
[ ] /deals
[ ] /rewards
[ ] /our-story
[ ] /team
[ ] /help-center
```

**Quick Check:** Retro pixelated borders, CRT scanlines, neon glows

### Account Pages (4 routes)

```
[ ] /account (Dashboard)
[ ] /account/orders
[ ] /account/wishlist
[ ] /account/addresses
```

### Special Pages (2 routes)

```
[ ] /sitemap
    ✓ 150+ routes display
    ✓ Search works
    ✓ Expand/collapse functions

[ ] /404
    ✓ Retro 404 design
    ✓ Sitemap CTA banner
```

---

## Console Monitoring

**Open DevTools (F12) → Console**

### STOP Testing If You See:

```
❌ IframeMessageAbortError
   → Re-comment Batch 8, reload, test again

❌ TypeError: Cannot read properties of undefined
   → Check hook dependencies

❌ Warning: Cannot update during render
   → Check setState in render
```

### Normal (Ignore):

```
✅ [HMR] Waiting for update signal...
✅ Download React DevTools for...
```

---

## Dark Mode Testing

**For EACH page tested:**

```
[ ] Toggle dark mode ON
    ✓ Background darkens
    ✓ Text contrast good
    ✓ Borders visible

[ ] Retro theme adapts
    ✓ CRT effect darkens
    ✓ Neon glows change
    ✓ Scanlines adjust

[ ] Toggle dark mode OFF
    ✓ Light mode restores
    ✓ No stuck elements
```

---

## Performance Quick Check

```
[ ] Homepage loads < 3 seconds (cold cache)
[ ] Homepage loads < 1 second (warm cache)
[ ] Mega menu opens instantly (< 100ms)
[ ] MiniCart slides smoothly
[ ] Scrolling smooth (no jank)
```

---

## Success Criteria

```
✅ All 23 routes tested
✅ All navigation works
✅ Dark mode verified
✅ Zero IframeMessageAbortError
✅ Zero React warnings
✅ Performance good
✅ Stable for 24 hours
```

**When all ✅ → Mark T10.7 complete → Proceed to Batch 9**

---

## Rollback If Issues

```bash
# 1. Open globals-minimal.css
# 2. Re-comment Batch 8 (lines 154-191)
# 3. Save file
# 4. Hard refresh browser (Ctrl+Shift+R)
# 5. Test again
# 6. Document issue in testing plan
```

---

## Full Documentation

- **Detailed Guide:** `/docs/CSS-STABILITY-TESTING-GUIDE.md`
- **Testing Plan:** `/tasks/css-gradual-reenable-testing-plan.md`
- **Task List:** `/tasks/task-list.md` (T10.7)

---

**Last Updated:** March 13, 2026  
**Next Review:** March 14, 2026
