# Figma Make Fix - March 13, 2026

**Issue:** IframeMessageAbortError caused by 280 CSS @import statements

**Solution:** Reduced `/styles/globals-minimal.css` back to 5 critical imports

**Status:** ✅ RESOLVED

---

## Root Cause

280 CSS @import statements in `globals-minimal.css` overwhelmed the Figma Make iframe message port during initialization, causing `IframeMessageAbortError`.

## Fix Applied

Reduced CSS imports from 280 → 5 critical imports:

```css
/* 1. Theme Variables */
@import "../src/styles/theme-variables.css";

/* 2. Critical Base Styles */
@import "../src/styles/critical.css";

/* 3. Retro Theme */
@import "../src/styles/retro-theme.css";

/* 4. Layout Grid */
@import "../src/styles/layout-grid.css";

/* 5. Essential Utilities */
@import "../src/styles/utilities.css";
```

## Files Modified

- `/styles/globals-minimal.css` - Reduced to 5 imports
- `/src/main.tsx` - Removed unused performance monitoring import

## Result

- ✅ Zero IframeMessageAbortError
- ✅ App loads successfully in Figma Make
- ✅ Core retro design system active
- ✅ Full 280-import version preserved at `/styles/globals.css` for production

---

**Date:** March 13, 2026  
**Status:** Complete
