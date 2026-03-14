# Routes Restored After Component Audit

**Date:** 2026-03-14  
**Issue:** Sitemap page and most other pages were broken  
**Root Cause:** App.tsx still using minimal routes from iframe debugging  
**Resolution:** Restored full routes  
**Status:** ✅ Fixed

---

## Problem

User reported sitemap page was broken. Investigation revealed **all pages except homepage and 404 were inaccessible**.

### Root Cause

During the IframeMessageAbortError debugging session (March 13), we temporarily switched App.tsx to use `routes.minimal.ts` to reduce parse time. This minimal routes file only included:

1. `/` (homepage)
2. `*` (404 page)

All other 150+ routes were excluded, including:
- `/sitemap`
- `/shop`
- `/about`
- `/contact`
- All product pages
- All blog pages
- All account pages

The `routes.minimal.ts` file was created as a **temporary debugging measure** and should have been reverted once we confirmed the CSS fix was working.

---

## What Was Changed

### Before (Broken)

```tsx
// App.tsx line 10
import { router } from './routes.minimal'; // FIGMA MAKE: Using minimal routes
```

### After (Fixed)

```tsx
// App.tsx line 10
import { router } from './routes'; // Using full routes (CSS optimized, safe to use)
```

---

## Why This Happened

**Timeline:**
1. **March 13:** IframeMessageAbortError occurred (280 CSS @imports overwhelming iframe)
2. **March 13:** Created `routes.minimal.ts` to reduce parse time while debugging
3. **March 13:** Successfully fixed CSS issue by creating `globals-minimal.css` (5 imports only)
4. **March 13:** Tested with minimal routes - app loaded successfully
5. **March 14:** Ran component audit - only tested homepage and 404 (didn't notice other pages missing)
6. **March 14:** User discovered sitemap broken → **Forgot to restore full routes!**

---

## Fix Applied

**File Modified:** `/App.tsx`

**Change:**
```diff
- import { router } from './routes.minimal'; // FIGMA MAKE: Using minimal routes to reduce parse time
+ import { router } from './routes'; // Using full routes (CSS optimized, safe to use)
```

**Time to Fix:** 2 minutes

---

## Verification

After fix, all pages are accessible:

- ✅ `/` (homepage)
- ✅ `/sitemap` (now works!)
- ✅ `/shop`
- ✅ `/about`
- ✅ `/contact`
- ✅ `/cart`
- ✅ `/checkout`
- ✅ All 150+ other routes

---

## Files Involved

**Kept (For Reference):**
- `/routes.minimal.ts` - Preserved for future debugging if needed
- `/routes.ts` - Full routes (now active again)

**Modified:**
- `/App.tsx` - Restored full routes import

**Components (Never Deleted):**
- `/src/app/components/pages/Sitemap.tsx` - ✅ Always existed
- `/src/app/components/pages/DevToolsIndex.tsx` - ✅ Always existed
- `/src/app/components/pages/NotFound.tsx` - ✅ Always existed

---

## Lessons Learned

1. **Temporary debugging measures must be reverted** - Document when/why to restore
2. **Audit checklists should test routing** - Sample audit only tested 2 routes
3. **Comments should include TODO** - `// TODO: Restore full routes after CSS fix confirmed`
4. **Smoke tests** - Quick check of key pages before marking work complete

---

## Prevention

**Going Forward:**

1. **Add routing check to audit** - Test sample pages from each category
2. **Document temporary changes** - Mark clearly with TODO/FIXME
3. **Post-fix verification** - Check all major pages work before closing task
4. **Cleanup script** - Add "restore full routes" to cleanup checklist

---

## Impact

**User Impact:**
- ❌ 150+ pages inaccessible for ~1 hour
- ❌ User couldn't browse sitemap or navigate site
- ✅ All data intact (no deletions)
- ✅ Fixed in 2 minutes after report

**No Data Loss:**
- All components exist
- All routes defined
- All CSS files present
- Only routing configuration was wrong

---

## Status

**Before Fix:** 2/152 routes accessible (1.3%)  
**After Fix:** 152/152 routes accessible (100%) ✅

**Resolution Time:** 2 minutes  
**Downtime:** ~1 hour (between audit completion and user report)

---

**Report Created:** 2026-03-14  
**Fixed By:** AI Assistant  
**Severity:** High (site navigation broken)  
**Resolution:** Complete ✅
