# CSS Stability Testing Guide

**Version:** 1.0  
**Created:** March 13, 2026  
**Status:** Phase 1 Active (Batches 1-8)

---

## Quick Start

### 1. Run Stability Check

```bash
# Make script executable
chmod +x scripts/test-css-stability.sh

# Run stability check
./scripts/test-css-stability.sh
```

Expected output:
```
✓ CSS configuration appears stable
Total active imports: 100
Total commented imports: 180
```

### 2. Start Figma Make

1. Open your Figma Make environment
2. Load the PlayPocket project
3. Open browser DevTools console (F12)
4. Navigate to homepage

### 3. Monitor Console

**Watch for:**
- ❌ `IframeMessageAbortError` - STOP, revert batch
- ❌ `TypeError: Cannot read properties of undefined` - Hook issue
- ❌ `Warning: Cannot update during render` - Infinite render loop
- ✅ Clean console = success

---

## Phase 1: Batches 1-8 Testing (Current)

### Critical Routes Testing Checklist

Test each route in order. Mark ✅ if stable, ❌ if errors occur.

#### Core E-Commerce Routes

```
[ ] / (Homepage)
    - Retro hero section renders
    - Product grids display
    - Mega menu accessible
    - Dark mode toggle works
    
[ ] /shop (Product Archive)
    - Filter sidebar visible
    - Product cards styled
    - Pagination works
    - Sorting dropdown functional
    
[ ] /product/wireless-retro-controller (Single Product)
    - Product gallery works
    - Add to cart button styled
    - Product tabs functional
    - Reviews section styled
    
[ ] /cart (Cart Page)
    - Cart items display
    - Quantity selectors work
    - Totals calculate correctly
    - Retro cart styling applied
    
[ ] /checkout (Checkout)
    - Multi-step checkout renders
    - Form inputs styled
    - Payment methods display
    - Retro checkout theme active
```

#### Navigation & Global Elements

```
[ ] Header Mega Menu
    - SHOP dropdown opens/closes
    - DEALS dropdown styled
    - COMMUNITY dropdown functional
    - ABOUT dropdown renders
    - ALL PAGES link works
    
[ ] Mobile Menu
    - Hamburger icon visible
    - Menu slides out correctly
    - Links styled properly
    - Dark mode works in menu
    
[ ] MiniCart Drawer
    - Opens on "Add to Cart"
    - Cart items display
    - Drawer closes properly
    - Retro styling applied
    
[ ] Dark Mode Toggle
    - Toggle switches modes
    - Retro theme adapts
    - CRT scanlines adjust
    - Neon glows change color
    
[ ] Search
    - Search input styled
    - Search dropdown appears
    - Autocomplete works
    - Results styled correctly
```

#### Account Pages

```
[ ] /account (Dashboard)
    - Retro account hub renders
    - Navigation tabs work
    - Order summary displays
    - Account info styled
    
[ ] /account/orders (Order History)
    - Order list displays
    - Order cards styled
    - Filter/sort works
    
[ ] /account/wishlist (Wishlist)
    - Wishlist items render
    - Product cards styled
    - Remove button works
    
[ ] /account/addresses (Addresses)
    - Address cards display
    - Edit/delete buttons work
    - Add new address form styled
```

#### Retro Theme Pages

```
[ ] /membership (Membership)
    - Retro pricing cards render
    - CRT effect applied
    - Buttons styled correctly
    - Dark mode adapts
    
[ ] /subscription (Subscription)
    - Subscription tiers display
    - Feature lists styled
    - CTA buttons work
    
[ ] /deals (Deals/Flash Sale)
    - Countdown timer works
    - Product grids styled
    - Retro badges display
    
[ ] /rewards (Loyalty/Rewards)
    - Points display styled
    - Rewards tiers render
    - Retro progress bars work
    
[ ] /our-story (About)
    - Story sections render
    - Timeline styled correctly
    - Images display properly
    
[ ] /team (Team)
    - Team cards display
    - Avatars styled
    - Retro frames applied
    
[ ] /help-center (Help)
    - FAQ accordion works
    - Search bar styled
    - Categories display
```

#### Information Pages

```
[ ] /accessibility-statement
    - Content renders correctly
    - Links styled properly
    - WCAG compliance info displays
    
[ ] /sustainability
    - Sections styled
    - Icons display
    - Retro theme applied
    
[ ] /size-guide
    - Size charts display
    - Tables styled correctly
    - Measurement tool works
    
[ ] /buying-guide
    - Guide sections render
    - Product comparisons styled
    - Recommendations display
    
[ ] /reviews
    - Review cards display
    - Star ratings styled
    - Filter dropdown works
    
[ ] /refunds
    - Policy text styled
    - Process steps display
    - Contact form works
    
[ ] /warranty
    - Warranty tiers display
    - Coverage info styled
    - CTA buttons work
```

#### Special Pages

```
[ ] /sitemap
    - 150+ routes display
    - Search autocomplete works
    - Expand/collapse all functions
    - Category sections styled
    - Statistics display correctly
    
[ ] /404 (Error Page)
    - Retro 404 design renders
    - "LOST? CHECK THE MAP!" banner displays
    - Sitemap CTA button works
    - Suggested links styled
```

---

## Visual Integrity Checks

### Retro Theme Elements

**For each page tested, verify:**

```
[ ] Pixelated borders render correctly
    - Check product cards
    - Check buttons
    - Check containers
    
[ ] CRT scanlines visible
    - Horizontal lines across sections
    - Subtle animation (if enabled)
    - Adjust in dark mode
    
[ ] Neon glow effects
    - Buttons have glow
    - Headings have glow (where applicable)
    - CTAs stand out
    
[ ] Retro color palette
    - Primary colors match theme
    - Secondary colors consistent
    - Accent colors vibrant
    
[ ] Typography
    - Headings use retro font
    - Body text readable
    - Code blocks styled (monospace)
    
[ ] Spacing
    - Consistent padding/margins
    - No layout shifts
    - Responsive breakpoints work
```

### Form Elements

```
[ ] Inputs
    - Border styled correctly
    - Focus states work
    - Placeholder text visible
    - Dark mode adapts
    
[ ] Checkboxes
    - Custom checkboxes render
    - Checked state styled
    - Hover effect works
    
[ ] Radio buttons
    - Custom radios render
    - Selected state styled
    - Group spacing correct
    
[ ] Select dropdowns
    - Dropdown styled
    - Options list renders
    - Selected value displays
    
[ ] Switches
    - Toggle switch styled
    - On/off states clear
    - Animation smooth
    
[ ] Textareas
    - Resizable or fixed
    - Scrollbar styled
    - Character count (if present)
```

### Buttons

```
[ ] Primary buttons
    - Retro styling applied
    - Hover state works
    - Focus ring visible
    - Disabled state styled
    
[ ] Secondary buttons
    - Border variant styled
    - Hover effect correct
    - Icon alignment good
    
[ ] Ghost buttons
    - Transparent background
    - Hover fill effect
    - Text readable
    
[ ] Icon-only buttons
    - Icon centered
    - Proper sizing (44x44px minimum)
    - Tooltip appears on hover
```

### Cards & Containers

```
[ ] Product cards
    - Image displays correctly
    - Title/price styled
    - Add to cart button present
    - Hover effect works
    
[ ] Content cards
    - Border/shadow applied
    - Padding consistent
    - Content aligned
    
[ ] Elevated cards
    - Shadow depth correct
    - Background color right
    - Hover lift effect (if present)
```

### Overlays

```
[ ] Modals
    - Backdrop visible
    - Modal centered
    - Close button works
    - Content styled correctly
    
[ ] Dialogs
    - Alert/confirm styled
    - Buttons aligned
    - Icon displays (if present)
    
[ ] Tooltips
    - Arrow positioned correctly
    - Text readable
    - Appears on hover
    - Dismisses properly
    
[ ] Dropdowns
    - Menu positioned correctly
    - Items styled
    - Hover state works
    - Scrollable if long
```

---

## Dark Mode Testing

### For EVERY page tested, verify dark mode:

```
[ ] Toggle dark mode ON
    - Wait for transition (if animated)
    - Verify background darkens
    - Check text contrast
    
[ ] Page elements adapt
    - Background colors inverted
    - Text colors adjusted
    - Borders visible
    - Icons visible
    
[ ] Retro theme adjusts
    - CRT effect darkens
    - Neon glows change color
    - Scanlines adjust opacity
    - Pixelated borders visible
    
[ ] Interactive elements
    - Buttons still visible
    - Form inputs styled
    - Links readable
    - Focus states clear
    
[ ] Images & media
    - Images visible
    - Video players styled
    - Icon colors adjusted
    
[ ] Toggle dark mode OFF
    - Transition back smooth
    - Light mode restores correctly
    - No stuck dark mode elements
```

---

## Performance Checks

### Page Load Performance

```
[ ] Cold cache load (first visit)
    - Homepage < 3 seconds
    - Shop page < 3 seconds
    - Product page < 3 seconds
    
[ ] Warm cache load (repeat visit)
    - Homepage < 1 second
    - Shop page < 1 second
    - Product page < 1 second
    
[ ] Layout stability
    - No layout shifts during load
    - Images load without jumping
    - Text doesn't reflow excessively
```

### Interaction Performance

```
[ ] Mega menu
    - Opens instantly (< 100ms)
    - No lag on hover
    - Closes smoothly
    
[ ] MiniCart drawer
    - Slides out smoothly
    - Add to cart instant feedback
    - Update quantity smooth
    
[ ] Modals/Dialogs
    - Opens without delay
    - Backdrop fades in smoothly
    - Closes instantly
    
[ ] Form interactions
    - Input focus instant
    - Validation feedback immediate
    - Submit button responsive
```

### Scroll Performance

```
[ ] Page scrolling
    - Smooth scroll on all pages
    - No jank during scroll
    - Fixed header stable
    
[ ] Long lists
    - Product grid scrolls smoothly
    - Infinite scroll works (if present)
    - No memory leaks
```

---

## Console Monitoring

### What to Watch For

**Critical Errors (STOP and revert):**
```
❌ IframeMessageAbortError
   → CSS import chain too long
   → ACTION: Re-comment last batch, investigate
   
❌ TypeError: Cannot read properties of undefined
   → Hook dependency issue
   → ACTION: Check recent hook changes, fix dependencies
   
❌ Warning: Cannot update during render
   → Infinite render loop
   → ACTION: Check setState calls in render, add useCallback
   
❌ ChunkLoadError
   → Build issue
   → ACTION: Clear cache, rebuild, test again
```

**Warning Errors (Monitor, may be acceptable):**
```
⚠️ React does not recognize the `XYZ` prop
   → Prop forwarding issue
   → ACTION: Log for future cleanup, not critical
   
⚠️ Warning: Each child in a list should have a unique "key" prop
   → Missing keys in mapped arrays
   → ACTION: Log for future cleanup, not critical
   
⚠️ Deprecation warning: ...
   → Library using deprecated API
   → ACTION: Note for future upgrade, not critical
```

**Info Messages (Normal):**
```
✅ [HMR] Waiting for update signal from WDS...
   → Hot module replacement working
   
✅ Download the React DevTools for a better development experience
   → Helpful suggestion, not an error
```

### Console Filtering

**To focus on errors:**
1. Open DevTools Console (F12)
2. Click filter dropdown
3. Select "Errors" only
4. Test all routes
5. Switch to "Warnings" and review
6. Switch to "All levels" for full log

---

## Troubleshooting

### Issue: IframeMessageAbortError appears

**Symptoms:**
- Console shows `IframeMessageAbortError`
- Page may load slowly or hang
- Some styles may not apply

**Solution:**
1. Stop testing immediately
2. Open `/styles/globals-minimal.css`
3. Re-comment the most recently uncommented batch
4. Save file
5. Hard refresh browser (Ctrl+Shift+R)
6. Test again
7. If error persists, re-comment previous batch
8. Document which batch caused issue in `/tasks/css-gradual-reenable-testing-plan.md`

### Issue: Styles not applying correctly

**Symptoms:**
- Elements look unstyled
- Colors wrong
- Layout broken

**Solution:**
1. Check browser DevTools Network tab
2. Look for 404 errors on CSS files
3. Verify CSS file paths in `globals-minimal.css` are correct
4. Check that source CSS files exist in `/src/styles/`
5. Hard refresh browser (Ctrl+Shift+R)
6. If issue persists, check for typos in @import statements

### Issue: Dark mode not working

**Symptoms:**
- Toggle switches but styles don't change
- Some elements stuck in light/dark mode
- Contrast issues

**Solution:**
1. Check if dark mode CSS files are imported:
   - `theme-dark-mode.css` should be in Batch 2
2. Verify HTML element has `.dark` class when toggled
3. Check browser DevTools → Elements → `<html>` tag
4. Inspect specific element for dark mode class application
5. Verify CSS variables are defined for both light and dark modes

### Issue: Performance degradation

**Symptoms:**
- Pages load slowly
- Scrolling janky
- Interactions laggy

**Solution:**
1. Open DevTools Performance tab
2. Start recording
3. Perform problematic action
4. Stop recording and analyze
5. Look for long tasks (> 50ms)
6. Check for memory leaks (Memory tab)
7. Consider re-commenting latest batch to test if CSS-related

---

## Success Criteria

### Phase 1 Complete When:

```
✅ All critical routes tested (homepage, shop, product, cart, checkout)
✅ All retro theme pages tested
✅ All account pages tested
✅ Dark mode works on all tested pages
✅ Zero IframeMessageAbortError in console
✅ Zero React hook warnings
✅ All interactive elements functional
✅ Performance acceptable (< 3s cold, < 1s warm)
✅ Visual integrity verified (retro theme renders correctly)
✅ Forms work correctly
✅ Navigation works correctly
✅ Stable for 24 hours
```

### Ready for Phase 2 (Batch 9) When:

```
✅ All Phase 1 success criteria met
✅ No console errors for 24 hours
✅ Figma Make iframe confirmed stable
✅ Testing plan documented
✅ Rollback plan prepared
✅ Team approval (if applicable)
```

---

## Reporting Issues

### Issue Template

When documenting issues, use this format:

```markdown
## Issue: [Brief Description]

**Batch:** [Which batch was active when issue occurred]
**Route:** [URL/page where issue appeared]
**Browser:** [Chrome/Firefox/Safari + version]
**Dark Mode:** [Yes/No]

### Console Error:
```
[Paste exact error message]
```

### Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

### Expected Behavior:
[What should happen]

### Actual Behavior:
[What actually happened]

### Screenshots:
[Attach screenshots if helpful]

### Temporary Fix:
[What you did to resolve temporarily]

### Permanent Fix Needed:
[What needs to be done to prevent recurrence]
```

### Where to Document

- **Critical Issues:** `/tasks/css-gradual-reenable-testing-plan.md`
- **General Issues:** Create new file `/reports/css-stability/YYYY-MM-DD_issue-description.md`
- **Quick Notes:** Add to `/tasks/task-list.md` under "CSS Stability Testing"

---

## Next Steps After Phase 1

Once all Phase 1 tests pass and system is stable for 24 hours:

1. **Review Results:**
   - Document success metrics
   - Note any minor issues (non-blocking)
   - Update testing plan with findings

2. **Prepare Batch 9:**
   - Review Batch 9 files to uncomment
   - Estimate testing time (~2 hours)
   - Schedule testing session

3. **Uncomment Batch 9:**
   - Open `/styles/globals-minimal.css`
   - Remove comment markers from lines 199-239
   - Save file
   - Hard refresh browser
   - Begin Phase 2 testing

4. **Test Batch 9:**
   - Run stability script again
   - Test critical routes
   - Focus on blog pages (Batch 9 includes blog blocks)
   - Test search autocomplete (Batch 9 includes search blocks)
   - Monitor console for 1 hour

5. **If Stable:**
   - Document success
   - Proceed to Batch 10 preparation

6. **If Issues:**
   - Re-comment Batch 9
   - Document specific problematic imports
   - Investigate and fix
   - Retry

---

## Resources

- **Testing Plan:** `/tasks/css-gradual-reenable-testing-plan.md`
- **Stability Script:** `/scripts/test-css-stability.sh`
- **CSS Entry Point:** `/styles/globals-minimal.css`
- **Full CSS Backup:** `/styles/globals.css`
- **Guidelines:** `/guidelines/Guidelines.md`

---

## Change Log

**v1.0 - March 13, 2026:**
- Initial testing guide created
- Phase 1 (Batches 1-8) testing documented
- Console monitoring guide added
- Troubleshooting section added
