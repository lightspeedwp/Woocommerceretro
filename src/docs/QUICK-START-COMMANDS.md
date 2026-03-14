# Quick Start Commands — Phase 1 Testing

**Date:** March 13, 2026  
**Phase:** 1 (Batches 1-8 Active)

---

## Step 1: Verify Configuration

```bash
# Make script executable (first time only)
chmod +x scripts/test-css-stability.sh

# Run stability check
./scripts/test-css-stability.sh
```

**Expected Output:**
```
✓ CSS configuration appears stable
Total active imports: 100
Total commented imports: 180
```

---

## Step 2: Count Active Imports (Manual Verification)

```bash
# Count active @import statements
grep -c "^@import" styles/globals-minimal.css

# Expected: 100
```

```bash
# Count commented @import statements
grep -c "@import.*\.css\";$" styles/globals-minimal.css | grep -v "^@import"

# Expected: ~180
```

---

## Step 3: Verify Source Files Exist

```bash
# Check critical files (Batch 1)
ls -la src/styles/theme-variables.css
ls -la src/styles/critical.css
ls -la src/styles/retro-theme.css
ls -la src/styles/layout-grid.css
ls -la src/styles/utilities.css

# All should exist and show file sizes
```

---

## Step 4: Verify Entry Point

```bash
# Check main.tsx imports globals-minimal.css
grep "globals-minimal.css" src/main.tsx

# Expected: import '../styles/globals-minimal.css';
```

```bash
# Verify StrictMode enabled
grep -A3 "createRoot" src/main.tsx

# Should show:
# createRoot(rootElement).render(
#   <StrictMode>
#     <App />
#   </StrictMode>
# );
```

---

## Step 5: Start Figma Make

1. Open Figma Make in your browser
2. Load PlayPocket project
3. **Immediately open DevTools** (F12) → Console tab
4. Monitor for errors during initial load

---

## Step 6: Test Critical Routes (Quick Test)

### Homepage
```
URL: http://localhost:XXXX/
Check: Retro hero, product grids, mega menu
```

### Shop
```
URL: http://localhost:XXXX/shop
Check: Filters, product cards, pagination
```

### Product
```
URL: http://localhost:XXXX/product/wireless-retro-controller
Check: Gallery, tabs, add to cart
```

### Cart
```
URL: http://localhost:XXXX/cart
Check: Items, quantities, totals
```

### Checkout
```
URL: http://localhost:XXXX/checkout
Check: Steps, forms, payment methods
```

---

## Step 7: Monitor Console

### ❌ STOP if you see:
```
IframeMessageAbortError
```

**Action:** Re-comment Batch 8 immediately

### ⚠️ Monitor if you see:
```
TypeError: Cannot read properties of undefined
Warning: Cannot update during render
```

**Action:** Document in testing log, continue testing

### ✅ Normal (ignore):
```
[HMR] Waiting for update signal...
Download React DevTools for...
```

---

## Step 8: Test Dark Mode

For EACH route tested:

1. Click dark mode toggle
2. Wait for transition
3. Verify:
   - Background darkens
   - Text readable
   - Borders visible
   - Retro theme adapts (CRT, neon glows)
4. Toggle back to light mode
5. Verify restoration

---

## Troubleshooting Commands

### If IframeMessageAbortError Occurs

```bash
# 1. Open globals-minimal.css
# 2. Find Batch 8 (lines 154-191)
# 3. Add /* before line 154
# 4. Add */ after line 191
# 5. Save file
# 6. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
```

### Check for Missing CSS Files

```bash
# Find any 404 errors in Network tab, then verify file exists
ls -la src/styles/blocks/[category]/[filename].css

# If file missing, remove that @import from globals-minimal.css
```

### Verify No Duplicate Imports

```bash
# Check for duplicates
grep "^@import" styles/globals-minimal.css | sort | uniq -d

# Should return nothing (no duplicates)
```

### Check All Imports Have Semicolons

```bash
# Find imports missing semicolons
grep "^@import" styles/globals-minimal.css | grep -v ";$"

# Should return nothing (all have semicolons)
```

---

## Performance Checks

### Measure Homepage Load Time

1. Open DevTools → Network tab
2. Click "Disable cache" checkbox
3. Hard refresh (Ctrl+Shift+R)
4. Look at "Load" time at bottom
5. **Target:** < 3 seconds

### Measure Warm Cache Load

1. Open DevTools → Network tab
2. Uncheck "Disable cache"
3. Refresh normally (F5)
4. Look at "Load" time
5. **Target:** < 1 second

---

## Logging Test Results

### Create Testing Log

```bash
# Copy template
cp docs/TESTING-LOG-TEMPLATE.md reports/css-stability/2026-03-13_phase-1-testing-log.md

# Open in editor and fill out as you test
```

### Quick Notes Template

```
[HH:MM] Route: / → Status: PASS | Console: Clean | Dark Mode: OK
[HH:MM] Route: /shop → Status: PASS | Console: Clean | Dark Mode: OK
[HH:MM] Route: /cart → Status: FAIL | Error: [description]
```

---

## Success Criteria Checklist

```
[ ] All 5 critical routes tested (/, /shop, /product, /cart, /checkout)
[ ] All 5 navigation tests passed
[ ] All 7 retro theme pages tested
[ ] Sitemap and 404 tested
[ ] Dark mode verified on all routes
[ ] Zero IframeMessageAbortError for 2+ hours
[ ] Performance acceptable (< 3s cold, < 1s warm)
[ ] All retro visual elements render correctly
```

**When all ✅ → Mark T10.7 complete → Wait 24 hours → Proceed to Phase 2**

---

## Next Phase Commands (When Ready)

### Batch 9 Uncommenting (Phase 2)

```bash
# 1. Open globals-minimal.css
# 2. Find line 198 (Batch 9 comment start: /*)
# 3. Delete /* on line 198
# 4. Find line 239 (Batch 9 comment end: */)
# 5. Delete */ on line 239
# 6. Save file
# 7. Hard refresh browser
# 8. Run stability script again
# 9. Test critical routes again
# 10. Monitor console for 1 hour
```

**Expected after uncommenting Batch 9:**
- Total imports: 141 (50% of original 280)
- Blog pages should have full styling
- Search autocomplete styled
- Archive filters working

---

## Rollback Commands (If Needed)

### Revert Batch 8

```bash
# Open globals-minimal.css
# Add /* before line 154
# Add */ after line 191
# Save and hard refresh
```

### Revert to Minimal (Nuclear Option)

```bash
# Backup current state
cp styles/globals-minimal.css styles/globals-minimal-backup.css

# Open globals-minimal.css
# Add /* before line 48 (Batch 2 start)
# Add */ after line 191 (Batch 8 end)
# This leaves only Batch 1 active (5 imports)
# Save and hard refresh
```

---

## Resources

- **Full Testing Guide:** `/docs/CSS-STABILITY-TESTING-GUIDE.md`
- **Testing Plan:** `/tasks/css-gradual-reenable-testing-plan.md`
- **Quick Checklist:** `/docs/QUICK-TEST-CHECKLIST.md`
- **Testing Log Template:** `/docs/TESTING-LOG-TEMPLATE.md`
- **Task List:** `/tasks/task-list.md` (T10.7)

---

**Last Updated:** March 13, 2026  
**Current Status:** Ready for Phase 1 Testing
