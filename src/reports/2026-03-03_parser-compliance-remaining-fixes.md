# Parser Compliance - Remaining Fixes Required

**Date:** March 3, 2026  
**Status:** 🔄 In Progress (10/37 files fixed)  
**Priority:** P0 - CRITICAL (Blocking parser)

## Summary

The Figma Make parser is throwing "Missing opening {" errors due to TypeScript-specific syntax in data files. We've successfully fixed 10 critical infrastructure files (navigation.ts, faq.ts, reviews.ts, testimonials.ts, site.ts, footer.ts, homepage.ts, company.ts, team.ts, contact.ts) and memberships.ts, but 26 data files remain with ~47 interface/type declarations that need conversion to JSDoc typedefs.

## Files Fixed (11/37)

✅ **Batch 1 - Core Infrastructure (10 files)**
- `/src/app/data/navigation.ts` - 2 interfaces removed
- `/src/app/data/faq.ts` - 2 interfaces removed
- `/src/app/data/reviews.ts` - 2 interfaces removed
- `/src/app/data/testimonials.ts` - 2 interfaces removed
- `/src/app/data/site.ts` - 2 interfaces removed
- `/src/app/data/footer.ts` - 2 interfaces removed
- `/src/app/data/homepage.ts` - 2 interfaces removed
- `/src/app/data/company.ts` - 2 interfaces removed
- `/src/app/data/team.ts` - 2 interfaces removed
- `/src/app/data/contact.ts` - 2 interfaces removed

✅ **Batch 2 - Commerce Templates (1 file)**
- `/src/app/data/memberships.ts` - 6 interfaces removed

## Remaining Files (26 files, 47 interfaces)

### HIGH PRIORITY (Used by main templates - Fix First)

1. **`/src/app/data/subscriptions.ts`** - 4 interfaces
   - `SubscriptionPlan`
   - `SubscriptionFeature`
   - `SubscriptionFAQ`
   - `SubscriptionBenefit`
   - Used by: SingleSubscription.tsx, SubscriptionLanding.tsx

2. **`/src/app/data/shopBrands.ts`** - 1 interface
   - `BrandData`
   - Used by: Shop templates, brand pages

3. **`/src/app/data/posts.ts`** - 1 interface
   - `ResolvedPost`
   - Used by: Blog templates, SinglePost.tsx

4. **`/src/app/data/users.ts`** - 1 interface
   - `User`
   - Used by: Account templates, comments

5. **`/src/app/data/trustFeatures.ts`** - 1 interface
   - `TrustFeature`
   - Used by: Trust bands, homepage

### MEDIUM PRIORITY (Page-specific data - Fix Second)

6. **`/src/app/data/shipping.ts`** - 2 interfaces
   - `ShippingMethod`
   - `ReturnProcessStep`

7. **`/src/app/data/sustainability.ts`** - 3 interfaces
   - `SustainabilityInitiative`
   - `SustainabilityStat`
   - `SustainabilityGoal`

8. **`/src/app/data/sizeGuide.ts`** - 1 interface + 1 type
   - `SizeChart`
   - `SizeCategory` (type alias)

9. **`/src/app/data/careers.ts`** - 2 interfaces
   - `CareerBenefit`
   - `OpenPosition`

10. **`/src/app/data/stores.ts`** - 1 interface
    - `StoreLocation`

11. **`/src/app/data/warranty.ts`** - 1 interface
    - `WarrantyClaimStep`

12. **`/src/app/data/pressMedia.ts`** - 2 interfaces
    - `PressRelease`
    - `MediaKitItem`

13. **`/src/app/data/helpCenter.ts`** - 2 interfaces
    - `HelpCategory`
    - `HelpArticle`

14. **`/src/app/data/legalContent.ts`** - 1 interface + 2 `as` casts
    - `LegalSection`
    - Line 68: `as LegalSection[]`
    - Line 123: `as LegalSection[]`

15. **`/src/app/data/accessibilityStatement.ts`** - 1 interface
    - `AccessibilityFeature`

16. **`/src/app/data/rewardProgram.ts`** - 3 interfaces
    - `RewardTier`
    - `EarnMethod`
    - `RedeemOption`

17. **`/src/app/data/affiliateProgram.ts`** - 2 interfaces
    - `AffiliateBenefit`
    - `CommissionTier`

18. **`/src/app/data/buyingGuide.ts`** - 2 interfaces
    - `BuyingGuideTip`
    - `CategoryGuide`

19. **`/src/app/data/careInstructions.ts`** - 1 interface
    - `CareGuide`

20. **`/src/app/data/ourStory.ts`** - 2 interfaces
    - `StoryMilestone`
    - `StoryValue`

21. **`/src/app/data/returnsPortal.ts`** - 2 interfaces
    - `ReturnStep`
    - `ReturnPolicyHighlight`

22. **`/src/app/data/wishlist.ts`** - 1 interface
    - `WishlistItem`

23. **`/src/app/data/loyalty.ts`** - 3 interfaces
    - `LoyaltyUser`
    - `ActivityItem`
    - `QuickAction`

24. **`/src/app/data/giftCards.ts`** - 3 interfaces
    - `GiftCardDenomination`
    - `GiftCardOccasion`
    - `GiftCardFeature`

25. **`/src/app/data/trackOrder.ts`** - 2 interfaces
    - `TrackingStep`
    - `HelpCard`

26. **`/src/app/data/checkout.ts`** - 2 `as` type assertions
    - Line 292: `(country as any).states`
    - Line 297: `(country as any).shippingAvailable`

## Additional TypeScript Syntax Issues

### Utility Files with `as` Casts

27. **`/src/app/utils/a11y.ts`** - 4 `as` type assertions
    - Line 37: `as HTMLElement`
    - Line 53: `as HTMLElement`
    - Line 54: `as HTMLElement`
    - Line 229: `as HTMLElement`

28. **`/src/app/utils/performance.ts`** - 1 `as any` cast
    - Line 78: `(window as any).PerformanceObserver`

### Import Syntax Issues

29. **`/src/app/components/blocks/index.ts`** - Multiple `import * as` statements
    - Lines 9-28: 20 `import * as` statements
    - These may or may not cause parser issues, but worth monitoring

## Required Transformations

### 1. Convert `export interface` to JSDoc typedef

**BEFORE:**
```typescript
export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features?: string[];
}
```

**AFTER:**
```typescript
/**
 * @typedef {Object} SubscriptionPlan
 * @property {string} id
 * @property {string} name
 * @property {number} price
 * @property {string[]} [features]
 */
```

### 2. Convert `export type` to JSDoc typedef

**BEFORE:**
```typescript
export type SizeCategory = 'tops' | 'bottoms' | 'shoes';
```

**AFTER:**
```typescript
/**
 * @typedef {string} SizeCategory
 */
```

### 3. Remove `as` type assertions

**BEFORE:**
```typescript
var state = (country as any).states;
var result = items as LegalSection[];
```

**AFTER:**
```typescript
var state = country.states;
var result = items;
```

### 4. Remove function return type annotations

**BEFORE:**
```typescript
export function getUser(id: string): User | undefined {
  return users.find(u => u.id === id);
}
```

**AFTER:**
```typescript
/**
 * @param {string} id
 * @returns {Object|undefined}
 */
export function getUser(id) {
  return users.find(function(u) { return u.id === id; });
}
```

## Batch Fix Script

A Python script has been created at `/scripts/fix-data-interfaces.py` to automate these transformations. However, for accuracy and safety, manual fixes are recommended for critical files.

## Recommended Fix Order

**Phase 1 (IMMEDIATE - 5 files):**
1. subscriptions.ts
2. shopBrands.ts
3. posts.ts
4. users.ts
5. trustFeatures.ts

**Phase 2 (HIGH PRIORITY - 7 files):**
6. shipping.ts
7. sustainability.ts
8. sizeGuide.ts
9. careers.ts
10. stores.ts
11. warranty.ts
12. legalContent.ts (includes `as` casts)

**Phase 3 (MEDIUM PRIORITY - 13 files):**
13-25. All remaining data files

**Phase 4 (UTILITY FIXES - 2 files):**
26. utils/a11y.ts
27. utils/performance.ts

**Phase 5 (MONITOR - 1 file):**
28. components/blocks/index.ts (if parser still fails)

## Success Criteria

- ✅ All `export interface` declarations removed
- ✅ All `export type` aliases removed
- ✅ All `as` type assertions removed
- ✅ All function return type annotations removed
- ✅ All parameter type annotations removed
- ✅ Parser successfully compiles all files
- ✅ No "Missing opening {" errors

## Estimated Effort

- **Phase 1:** ~30 minutes (5 files, simple interfaces)
- **Phase 2:** ~45 minutes (7 files, includes type casts)
- **Phase 3:** ~90 minutes (13 files, many interfaces)
- **Phase 4:** ~20 minutes (2 files, utility fixes)
- **Total:** ~3 hours for complete compliance

## Next Steps

1. **Fix Phase 1 files** (subscriptions, shopBrands, posts, users, trustFeatures)
2. **Test parser** - If errors persist, continue to Phase 2
3. **Fix Phase 2 files** - Medium priority data files
4. **Test parser** - If errors persist, continue to Phase 3
5. **Fix remaining files** - Complete all data files
6. **Fix utility files** - Remove all type assertions
7. **Final parser test** - Verify no errors remain

## Files Created This Session

- `/scripts/fix-data-interfaces.py` - Automated batch fix script
- `/reports/2026-03-03_parser-compliance-remaining-fixes.md` - This report

## Related Documentation

- Original session notes: `/reports/2026-03-03_legacy-syntax-fixes-progress.md`
- Legacy syntax standards: Funky Redesign requirements (no const/let, no arrow functions, no TS syntax)
