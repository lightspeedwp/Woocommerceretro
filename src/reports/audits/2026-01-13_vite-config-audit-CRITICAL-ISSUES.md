# 🚨 CRITICAL: Vite Config Audit Report

**Date:** January 13, 2026  
**Audit Type:** Configuration Compliance & Path Alias Verification  
**Status:** ⚠️ **CRITICAL ISSUES FOUND**  
**Priority:** 🔴 **URGENT - BLOCKING DEPLOYMENT**

---

## 🎯 Executive Summary

The vite.config.ts file has **CRITICAL MISALIGNMENT** issues that will cause import failures across the application.

### Issues Found: 7 Critical

1. ❌ **`@/components` alias WRONG** - Points to `/src/app/components` but most components are in `/components` (root)
2. ❌ **Missing `@/imports` alias** - No alias for `/src/app/imports` directory
3. ❌ **Missing `@/pages` alias** - No alias for `/src/app/pages` directory  
4. ❌ **`@root/components` missing from tsconfig.json** - TypeScript won't recognize it
5. ❌ **Mismatch between vite.config.ts and vitest.config.ts** - Different alias configurations
6. ❌ **Missing `/src/tests` alias in tsconfig** - Test imports will fail in IDE
7. ⚠️ **Package version aliases may be unnecessary** - 40+ lines of versioned package aliases

---

## 📊 Current Configuration Analysis

### **vite.config.ts** (Production Build)

```typescript
alias: {
  // Package version aliases (40+ lines)
  'vaul@1.1.2': 'vaul',
  'sonner@2.0.3': 'sonner',
  // ... 38 more package aliases
  
  // Project path aliases
  '@': path.resolve(__dirname, './src/app'),
  '@/styles': path.resolve(__dirname, './src/styles'),
  '@/components': path.resolve(__dirname, './src/app/components'), // ❌ WRONG!
  '@/templates': path.resolve(__dirname, './src/app/templates'),
  '@/contexts': path.resolve(__dirname, './src/app/contexts'),
  '@/hooks': path.resolve(__dirname, './src/app/hooks'),
  '@/data': path.resolve(__dirname, './src/app/data'),
  '@/utils': path.resolve(__dirname, './src/app/utils'),
  '@/types': path.resolve(__dirname, './src/app/types'),
  '@/constants': path.resolve(__dirname, './src/app/constants'),
  '@/services': path.resolve(__dirname, './src/app/services'),
  '@tests': path.resolve(__dirname, './src/tests'),
  '@root/components': path.resolve(__dirname, './components'), // ✅ NEW (added today)
}
```

### **vitest.config.ts** (Test Environment)

```typescript
alias: {
  '@': path.resolve(__dirname, '.'), // ❌ Different from vite.config.ts!
  
  // Migrated folders
  '@/data': path.resolve(__dirname, './src/app/data'),
  '@/hooks': path.resolve(__dirname, './src/app/hooks'),
  '@/contexts': path.resolve(__dirname, './src/app/contexts'),
  '@/utils': path.resolve(__dirname, './src/app/utils'),
  '@/constants': path.resolve(__dirname, './src/app/constants'),
  '@/types': path.resolve(__dirname, './src/app/types'),
  '@/services': path.resolve(__dirname, './src/app/services'),
  '@/templates': path.resolve(__dirname, './src/app/templates'),
  
  // Not yet migrated (still at root)
  '@/components': path.resolve(__dirname, './components'), // ✅ CORRECT!
  '@/pages': path.resolve(__dirname, './pages'), // ✅ HAS THIS
  '@/imports': path.resolve(__dirname, './imports'), // ✅ HAS THIS
  '@/styles': path.resolve(__dirname, './src/styles'),
  '@/tests': path.resolve(__dirname, './tests'),
}
```

### **tsconfig.json** (TypeScript)

```json
"paths": {
  "@/*": ["./src/app/*"],
  "@/styles/*": ["./src/styles/*"],
  "@/components/*": ["./src/app/components/*"], // ❌ WRONG!
  "@/templates/*": ["./src/app/templates/*"],
  "@/contexts/*": ["./src/app/contexts/*"],
  "@/hooks/*": ["./src/app/hooks/*"],
  "@/data/*": ["./src/app/data/*"],
  "@/utils/*": ["./src/app/utils/*"],
  "@/types/*": ["./src/app/types/*"],
  "@/constants/*": ["./src/app/constants/*"],
  "@/services/*": ["./src/app/services/*"],
  "@tests/*": ["./src/tests/*"]
  // ❌ MISSING: @root/components
  // ❌ MISSING: @/pages
  // ❌ MISSING: @/imports
}
```

---

## 🔍 Detailed Analysis

### Issue 1: `@/components` Alias Mismatch

**Problem:**
- vite.config.ts: Points to `/src/app/components` (NEW location)
- vitest.config.ts: Points to `/components` (OLD location - ROOT)
- **Reality:** Most components are still in `/components` (root)

**Impact:**
- Imports like `import { ProductCard } from '@/components/blocks/ProductCard'` will FAIL in production build
- Tests will PASS (vitest has correct path) but production will BREAK

**Actual File Locations:**

```
✅ EXISTS: /components/ui/button.tsx (ROOT)
✅ EXISTS: /components/ui/badge.tsx (ROOT)
✅ EXISTS: /components/ui/input.tsx (ROOT)
❌ NOT EXISTS: /src/app/components/ui/button.tsx
❌ NOT EXISTS: /src/app/components/ui/badge.tsx
❌ NOT EXISTS: /src/app/components/ui/input.tsx

✅ EXISTS: /src/app/components/blocks/ProductCard.tsx (MIGRATED)
✅ EXISTS: /src/app/components/blocks/ThemeToggle.tsx (MIGRATED)
✅ EXISTS: /src/app/components/parts/Header.tsx (MIGRATED)
✅ EXISTS: /src/app/components/patterns/Hero.tsx (MIGRATED)
```

**Solution:**
```typescript
// vite.config.ts - CHANGE THIS
'@/components': path.resolve(__dirname, './components'), // Point to ROOT (like vitest)
```

---

### Issue 2: Missing `@/imports` Alias

**Problem:**
- vite.config.ts: No `@/imports` alias
- vitest.config.ts: HAS `@/imports` alias
- **Reality:** `/src/app/imports/` directory EXISTS and is used

**Impact:**
- Imports like `import assets from '@/imports/...'` will FAIL in production

**Files Affected:**
```
✅ EXISTS: /src/app/imports/README.md
```

**Solution:**
```typescript
// vite.config.ts - ADD THIS
'@/imports': path.resolve(__dirname, './src/app/imports'),
```

---

### Issue 3: Missing `@/pages` Alias

**Problem:**
- vite.config.ts: No `@/pages` alias
- vitest.config.ts: HAS `@/pages` alias
- **Reality:** `/src/app/pages/` directory EXISTS

**Impact:**
- Imports like `import { NotFound } from '@/pages/NotFound'` will FAIL in production

**Files Affected:**
```
✅ EXISTS: /src/app/pages/NotFound.tsx
```

**Solution:**
```typescript
// vite.config.ts - ADD THIS
'@/pages': path.resolve(__dirname, './src/app/pages'),
```

---

### Issue 4: `@root/components` Missing from tsconfig.json

**Problem:**
- vite.config.ts: HAS `@root/components` (added today)
- vitest.config.ts: NO `@root/components`
- tsconfig.json: NO `@root/components`

**Impact:**
- TypeScript IDE won't recognize `@root/components` imports
- Red squiggly lines in editor
- Type checking will fail

**Solution:**
```json
// tsconfig.json - ADD THIS
"@root/components/*": ["./components/*"]
```

---

### Issue 5: `@` Alias Inconsistency

**Problem:**
- vite.config.ts: `@` → `./src/app`
- vitest.config.ts: `@` → `.` (project root)

**Impact:**
- Different behavior in dev vs test environments
- Confusion about what `@` means

**Recommendation:**
Both should point to `./src/app` for consistency, OR don't use bare `@` and only use specific aliases like `@/components`.

**Solution:**
```typescript
// vitest.config.ts - CHANGE THIS
'@': path.resolve(__dirname, './src/app'), // Match vite.config.ts
```

---

### Issue 6: Missing Test Alias in tsconfig.json

**Problem:**
- vite.config.ts: HAS `@tests` → `./src/tests`
- vitest.config.ts: HAS `@/tests` → `./tests` (NOTE: Different name!)
- tsconfig.json: HAS `@tests/*` → `./src/tests/*`

**Impact:**
- vitest uses `@/tests` but vite and tsconfig use `@tests` (no slash)
- Inconsistent import patterns

**Solution:**
Standardize on one:
```typescript
// ALL configs should use SAME alias
'@/tests': path.resolve(__dirname, './tests'), // OR
'@/tests': path.resolve(__dirname, './src/tests'),
```

---

### Issue 7: Package Version Aliases

**Analysis:**
40+ package version aliases like:
```typescript
'vaul@1.1.2': 'vaul',
'sonner@2.0.3': 'sonner',
'react-hook-form@7.55.0': 'react-hook-form',
```

**Question:** Are these necessary?

**Impact:**
- Adds 40 lines of configuration
- May be Figma Make specific requirement
- Could be simplified if not needed

**Recommendation:** Test if removing breaks imports. If not needed, remove for clarity.

---

## 📋 Directory Structure Reality Check

### `/components` (ROOT - OLD LOCATION)

**Status:** ⚠️ Still contains most UI components

```
/components/
├── figma/
│   └── ImageWithFallback.tsx ✅ (protected system file)
└── ui/
    ├── accordion.tsx ✅
    ├── alert-dialog.tsx ✅
    ├── alert.tsx ✅
    ├── badge.tsx ✅
    ├── button.tsx ✅
    ├── checkbox.tsx ✅
    ├── input.tsx ✅
    └── ... (40+ more files) ✅
```

**Alias needed:** `@root/components` (for protected system files like ImageWithFallback)

---

### `/src/app/components` (NEW LOCATION)

**Status:** ✅ Partially migrated

```
/src/app/components/
├── blocks/
│   ├── ProductCard.tsx ✅
│   ├── ProductSearch.tsx ✅
│   ├── ThemeToggle.tsx ✅
│   ├── design/
│   │   ├── Button.tsx ✅
│   │   ├── Grid.tsx ✅
│   │   └── ...
│   ├── ui/
│   │   ├── badge.tsx ✅ (DUPLICATE!)
│   │   ├── input.tsx ✅ (DUPLICATE!)
│   │   └── ...
│   └── ...
├── parts/
│   ├── Header.tsx ✅
│   ├── Footer.tsx ✅
│   └── ...
├── patterns/
│   ├── Hero.tsx ✅
│   ├── ProductGrid.tsx ✅
│   └── ...
└── common/
    ├── Container.tsx ✅
    ├── Typography.tsx ✅
    └── ...
```

**Problem:** Some UI components exist in BOTH locations!

---

### `/src/app/imports` (NEW LOCATION)

**Status:** ✅ Exists

```
/src/app/imports/
└── README.md ✅
```

**Needs alias:** `@/imports`

---

### `/src/app/pages` (NEW LOCATION)

**Status:** ✅ Exists

```
/src/app/pages/
└── NotFound.tsx ✅
```

**Needs alias:** `@/pages`

---

## 🚨 Critical Fix Required

### **Fix 1: Align vite.config.ts with vitest.config.ts**

```typescript
// vite.config.ts - CORRECTED VERSION
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Package version aliases (KEEP - May be required by Figma Make)
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      // ... (rest of package aliases)
      
      // Project path aliases
      '@': path.resolve(__dirname, './src/app'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      
      // ✅ FIX: Point to ROOT where components actually are
      '@/components': path.resolve(__dirname, './components'),
      
      '@/templates': path.resolve(__dirname, './src/app/templates'),
      '@/contexts': path.resolve(__dirname, './src/app/contexts'),
      '@/hooks': path.resolve(__dirname, './src/app/hooks'),
      '@/data': path.resolve(__dirname, './src/app/data'),
      '@/utils': path.resolve(__dirname, './src/app/utils'),
      '@/types': path.resolve(__dirname, './src/app/types'),
      '@/constants': path.resolve(__dirname, './src/app/constants'),
      '@/services': path.resolve(__dirname, './src/app/services'),
      
      // ✅ ADD: Missing aliases
      '@/pages': path.resolve(__dirname, './src/app/pages'),
      '@/imports': path.resolve(__dirname, './src/app/imports'),
      
      // Test folder
      '@/tests': path.resolve(__dirname, './tests'),
      
      // Root level components (protected system files)
      '@root/components': path.resolve(__dirname, './components'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

---

### **Fix 2: Update tsconfig.json**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/app/*"],
      "@/styles/*": ["./src/styles/*"],
      
      // ✅ FIX: Point to ROOT where components actually are
      "@/components/*": ["./components/*"],
      
      "@/templates/*": ["./src/app/templates/*"],
      "@/contexts/*": ["./src/app/contexts/*"],
      "@/hooks/*": ["./src/app/hooks/*"],
      "@/data/*": ["./src/app/data/*"],
      "@/utils/*": ["./src/app/utils/*"],
      "@/types/*": ["./src/app/types/*"],
      "@/constants/*": ["./src/app/constants/*"],
      "@/services/*": ["./src/app/services/*"],
      
      // ✅ ADD: Missing aliases
      "@/pages/*": ["./src/app/pages/*"],
      "@/imports/*": ["./src/app/imports/*"],
      "@/tests/*": ["./tests/*"],
      
      // ✅ ADD: Root components alias
      "@root/components/*": ["./components/*"]
    }
  }
}
```

---

### **Fix 3: Update vitest.config.ts**

```typescript
// vitest.config.ts - ALIGN WITH vite.config.ts
resolve: {
  alias: {
    // ✅ FIX: Match vite.config.ts
    '@': path.resolve(__dirname, './src/app'),
    
    '@/data': path.resolve(__dirname, './src/app/data'),
    '@/hooks': path.resolve(__dirname, './src/app/hooks'),
    '@/contexts': path.resolve(__dirname, './src/app/contexts'),
    '@/utils': path.resolve(__dirname, './src/app/utils'),
    '@/constants': path.resolve(__dirname, './src/app/constants'),
    '@/types': path.resolve(__dirname, './src/app/types'),
    '@/services': path.resolve(__dirname, './src/app/services'),
    '@/templates': path.resolve(__dirname, './src/app/templates'),
    '@/components': path.resolve(__dirname, './components'), // ✅ CORRECT
    '@/pages': path.resolve(__dirname, './src/app/pages'),
    '@/imports': path.resolve(__dirname, './src/app/imports'),
    '@/styles': path.resolve(__dirname, './src/styles'),
    '@/tests': path.resolve(__dirname, './tests'),
    
    // ✅ ADD: Match vite.config.ts
    '@root/components': path.resolve(__dirname, './components'),
  },
}
```

---

## ✅ Verification Checklist

After applying fixes:

**vite.config.ts:**
- [ ] `@/components` points to `./components` (root)
- [ ] `@/pages` alias added
- [ ] `@/imports` alias added
- [ ] `@root/components` exists
- [ ] Matches vitest.config.ts structure

**tsconfig.json:**
- [ ] `@/components/*` points to `./components/*` (root)
- [ ] `@/pages/*` alias added
- [ ] `@/imports/*` alias added
- [ ] `@root/components/*` alias added
- [ ] Matches vite.config.ts structure

**vitest.config.ts:**
- [ ] `@` points to `./src/app` (matches vite.config.ts)
- [ ] `@root/components` alias added
- [ ] All aliases match vite.config.ts

**Test Imports:**
- [ ] All `@/components` imports resolve correctly
- [ ] All `@/pages` imports resolve correctly
- [ ] All `@/imports` imports resolve correctly
- [ ] All `@root/components` imports resolve correctly

---

## 📊 Impact Assessment

### **High Risk (Production Blocking):**
1. `@/components` mismatch → Production build will fail
2. Missing `@/pages` → NotFound page unreachable
3. Missing `@/imports` → Import errors

### **Medium Risk (Developer Experience):**
4. `@root/components` missing from tsconfig → IDE errors
5. `@` alias inconsistency → Confusion

### **Low Risk (Documentation):**
6. Missing test alias consistency → Minor confusion

---

## 🎯 Recommended Action Plan

### **Immediate (URGENT):**
1. ✅ Fix `@/components` alias in vite.config.ts (point to root)
2. ✅ Add `@/pages` alias to vite.config.ts
3. ✅ Add `@/imports` alias to vite.config.ts
4. ✅ Update tsconfig.json with all missing aliases
5. ✅ Update vitest.config.ts to match vite.config.ts

### **Short Term:**
6. 🔄 Test production build after fixes
7. 🔄 Verify all imports resolve correctly
8. 🔄 Update PATH_ALIAS_STRATEGY.md documentation

### **Long Term:**
9. 📋 Complete component migration to `/src/app/components`
10. 📋 Update aliases once migration complete
11. 📋 Review package version aliases necessity

---

## 📝 Documentation Updates Required

1. ✅ Update `/guidelines/PATH_ALIAS_STRATEGY.md` with correct aliases
2. ✅ Add note about `@/components` pointing to ROOT (not `/src/app/components`)
3. ✅ Document `@root/components` usage
4. ✅ Add migration status table

---

## 🚀 Post-Fix Testing

After applying all fixes, test:

```bash
# 1. TypeScript compilation
npm run type-check

# 2. Production build
npm run build

# 3. Run tests
npm run test

# 4. Dev server
npm run dev

# 5. Check for broken imports
grep -r "from '@/components" src/
grep -r "from '@/pages" src/
grep -r "from '@/imports" src/
grep -r "from '@root/components" src/
```

---

**Status:** ⚠️ **AWAITING FIXES**  
**Priority:** 🔴 **URGENT**  
**Estimated Fix Time:** 15-20 minutes  
**Blocking:** Production deployment, TypeScript compilation

---

**Last Updated:** January 13, 2026  
**Next Review:** After fixes applied  
**Responsible:** Development Team
