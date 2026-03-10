# Legacy Syntax Fixes - Progress Report
**Date:** March 3, 2026  
**Error:** "Missing opening {" - Figma Make parser rejecting TypeScript syntax

## Critical Issues
The Figma Make parser cannot handle:
1. ✅ ~~`interface` declarations~~ (PARTIALLY FIXED)
2. ⚠️  Type annotations on function parameters `function(param: Type)`
3. ⚠️  `as` type assertions `value as Type`
4. ⚠️  `const`/`let` in function bodies (should be `var`)
5. ℹ️  JSX in some files (should be `React.createElement`)

## Progress Summary

### Pattern Files Fixed (7/29):
- ✅ ArchiveHeader.tsx - interface → comment, const → var
- ✅ ArchivePagination.tsx - interface → comment, const/let → var, type annotations removed
- ✅ CartFilled.tsx - interface → comment, const/let → var
- ✅ ProductGrid.tsx - interface → comment, const → var
- ✅ PostGrid.tsx - interface → comment, const → var
- ✅ ShopFilterSidebar.tsx - 2 interfaces → comments, const → var
- ✅ ResultsCount.tsx - interface → comment, const → var

### Pattern Files Remaining (22 files, 35 interface blocks):
- ⚠️  CategoryShowcaseGrid.tsx (2 interfaces)
- ⚠️  CheckoutFormSection.tsx (2 interfaces)
- ⚠️  FeaturesComparisonTable.tsx (3 interfaces)
- ⚠️  FlashSaleBanner.tsx (1 interface)
- ⚠️  Hero.tsx (1 interface - file incomplete)
- ⚠️  HowItWorksSection.tsx (2 interfaces)
- ⚠️  InstagramFeed.tsx (1 interface)
- ⚠️  NewsletterSignup.tsx (1 interface)
- ⚠️  PostMeta.tsx (1 interface)
- ⚠️  PostNavigation.tsx (2 interfaces)
- ⚠️  PricingTable.tsx (3 interfaces)
- ⚠️  ProductTabsSection.tsx (2 interfaces)
- ⚠️  QuickEntryTilesGrid.tsx (2 interfaces)
- ⚠️  RecentlyViewedSection.tsx (1 interface)
- ⚠️  RelatedProductsSection.tsx (1 interface)
- ⚠️  SocialMediaFeed.tsx (2 interfaces)
- ⚠️  StatsSection.tsx (2 interfaces)
- ⚠️  TeamGridSection.tsx (2 interfaces)
- ⚠️  TestimonialCarousel.tsx (2 interfaces)
- ⚠️  TrustBand.tsx (1 interface)
- ⚠️  ValuePropositionSection.tsx (2 interfaces)
- ⚠️  ValuesGridSection.tsx (2 interfaces)

### Data Files (.ts) - Not Audited Yet:
All files in `/src/app/data/` contain:
- `export interface` declarations (20+ interfaces)
- `export const` declarations (100+ const exports)

All files in `/src/app/utils/`, `/src/app/services/`, `/src/app/hooks/` contain:
- `const`/`let` declarations
- Type annotations
- Modern syntax

## Transformation Rules

### Interface Declarations:
```typescript
// BEFORE (WRONG):
export interface MyProps {
  name: string;
  age: number;
}

// AFTER (CORRECT):
/*
 * MyProps:
 *   name: string
 *   age: number
 */
```

### Variable Declarations:
```javascript
// BEFORE (WRONG):
const items = props.items;
let count = 0;

// AFTER (CORRECT):
var items = props.items;
var count = 0;
```

### Type Annotations:
```javascript
// BEFORE (WRONG):
function handleClick(page: number) {
  // ...
}

// AFTER (CORRECT):
function handleClick(page) {
  // ...
}
```

### Type Assertions:
```javascript
// BEFORE (WRONG):
const page = value as number;

// AFTER (CORRECT):
var page = value;
```

## Recommended Next Steps

### Option 1: Manual Fixes (High Confidence)
Continue manually fixing pattern files one by one using fast_apply_tool:
- Pros: High accuracy, can verify each fix
- Cons: Time-consuming (22 files remaining)
- Estimated time: 30-45 minutes

### Option 2: Automated Script (Medium Confidence)
Run `/scripts/fix-legacy-syntax-patterns.py`:
- Pros: Fast (processes all files at once)
- Cons: May need manual verification, regex edge cases
- Estimated time: 5 minutes + 10 minutes verification

### Option 3: Hybrid Approach (Recommended)
1. Run automated script to fix interfaces and const/let
2. Manually verify 5-10 most critical files
3. Test in Figma Make
4. Fix any remaining issues individually

## Critical Files Priority

### High Priority (fix first):
1. Hero.tsx - Used on homepage
2. ProductGrid.tsx - ✅ Already fixed
3. PostGrid.tsx - ✅ Already fixed
4. CheckoutFormSection.tsx - Checkout flow
5. PricingTable.tsx - Pricing pages

### Medium Priority:
6-15. Various marketing/feature sections

### Low Priority:
16-29. Utility patterns used less frequently

## Data Files Strategy

### DO NOT FIX (yet):
- `/src/app/data/*.ts` - These are used at build time, not parsed by Figma Make
- `/src/app/utils/*.ts` - Utility functions, not imported by UI components
- `/src/app/services/*.ts` - Service layer, separate from UI

### ONLY FIX if errors persist:
If after fixing all pattern components the error still occurs, then audit data/utils/services files.

## Testing Strategy

1. Fix one batch of pattern files (5-10 files)
2. Test in Figma Make
3. If error persists, continue to next batch
4. If error resolved, stop and document which files were critical

## Completion Estimate

- **Minimum viable fix:** 15-20 pattern files (~30 minutes)
- **Complete fix (all patterns):** 29 pattern files (~60 minutes)
- **Full audit (data/utils/services):** Additional 2-3 hours

## Current Status: 24% Complete (7/29 pattern files fixed)

**Next Action:** Continue fixing remaining pattern files in batches of 5, prioritizing high-use components.
