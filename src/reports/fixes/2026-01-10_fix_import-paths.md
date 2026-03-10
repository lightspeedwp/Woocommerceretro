# Import Path Fixes - Runtime Error Resolution

**Date:** 2026-01-10  
**Status:** 🔄 **In Progress**  
**Issue:** TypeScript path aliases (`@/data`) don't work at runtime

---

## 🐛 Problem

TypeScript path aliases like `@/data/` work during compilation but fail at runtime in the browser, causing:
```
TypeError: Cannot read properties of undefined (reading 'map')
```

**Root Cause:** Browser cannot resolve TypeScript path aliases - needs relative imports.

---

## 📊 Files to Fix

### **Phase 1: Critical Files** ✅ **COMPLETE**

**Contexts (Used Throughout App):**
- ✅ `/src/app/contexts/CartContext.tsx` - Changed to `../data/products`
- ✅ `/src/app/contexts/WishlistContext.tsx` - Changed to `../data/products`

**Hooks:**
- ✅ `/src/app/hooks/useRecentlyViewed.ts` - Changed to `../data/products`

**Services:**
- ✅ `/src/app/services/abTest.ts` - Changed to `../data/archiveCTA`

**Patterns:**
- ✅ `/src/app/components/patterns/TrustBand.tsx` - Changed to `../../data/trustFeatures`
- ✅ `/src/app/components/patterns/TrustBand.test.tsx` - Changed to `../../data/trustFeatures`

**Blocks:**
- ✅ `/src/app/components/blocks/order/OrderDetails.tsx` - Changed to `../../../data/orderSamples`

---

### **Phase 2: Blog Components** 🔄 **IN PROGRESS**

Files using `@/data/blogData`:
- `/src/app/components/blog/BlogArchive.tsx` (2 imports)
- `/src/app/components/blog/CategoryArchive.tsx`
- `/src/app/components/blog/PostCard.tsx`
- `/src/app/components/blog/SinglePost.tsx`
- `/src/app/components/blog/TagArchive.tsx`

**Relative Path:** `../../data/blogData` (from `/src/app/components/blog/`)

---

### **Phase 3: Templates** ⏳ **PENDING**

Files using `@/data/`:
- `/src/app/templates/PageVariableProduct.tsx` → `../data/variableProducts`
- `/src/app/templates/MembershipLanding.tsx` → `../data/memberships`
- `/src/app/templates/SubscriptionLanding.tsx` → `../data/subscriptions`
- `/src/app/templates/SingleMembership.tsx` → `../data/memberships`
- `/src/app/templates/SingleSubscription.tsx` → `../data/subscriptions`
- `/src/app/templates/MembershipLanding.test.tsx` → `../data/memberships`

**Relative Path:** `../data/` (from `/src/app/templates/`)

---

### **Phase 4: Pages** ⏳ **PENDING**

Files using `@/data/`:
- `/src/app/pages/NotFound.tsx` → `../data/products`

**Relative Path:** `../data/` (from `/src/app/pages/`)

---

## 🔧 Fix Pattern

**Before:**
```tsx
import { PRODUCTS } from '@/data/products';
```

**After:**
```tsx
import { PRODUCTS } from '../data/products';  // From templates/
import { PRODUCTS } from '../../data/products';  // From components/blog/
import { PRODUCTS } from '../../../data/products';  // From components/blocks/order/
```

---

## ✅ Files Fixed (7/18)

1. ✅ CartContext.tsx
2. ✅ WishlistContext.tsx
3. ✅ useRecentlyViewed.ts
4. ✅ abTest.ts
5. ✅ TrustBand.tsx
6. ✅ TrustBand.test.tsx
7. ✅ OrderDetails.tsx

**Remaining:** 11 files

---

## 📝 Next Steps

1. Fix blog components (5 files)
2. Fix templates (6 files)
3. Fix pages (1 file)
4. Test all imports at runtime
5. Update guidelines about path aliases

---

**Status:** Phase 1 complete, proceeding to Phase 2
