# Path Alias Strategy - Project Import Standards

**Version:** 2.0  
**Updated:** January 13, 2026  
**Status:** ✅ **ACTIVE** - Use aliases for all imports

---

## 🎯 Import Path Strategy

**ALWAYS use path aliases defined in `/vite.config.ts`**

### ✅ Correct Import Patterns

```tsx
// ✅ CORRECT - Using path aliases
import { Layout } from '@/components/parts/Layout';
import { Container } from '@/components/common/Container';
import { ProductCard } from '@/components/blocks/ProductCard';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { formatCurrency } from '@/utils/currency';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
```

### ❌ Incorrect Import Patterns

```tsx
// ❌ WRONG - Using relative paths
import { Layout } from '../components/parts/Layout';
import { Container } from '../../components/common/Container';
import { ProductCard } from '../../../components/blocks/ProductCard';
import { useCart } from '../../../../contexts/CartContext';
import { products } from '../../../../../data/products';
import { formatCurrency } from '../../../../../../utils/currency';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
```

---

## 📋 Available Path Aliases

### Main Aliases (vite.config.ts)

| Alias | Resolves To | Purpose |
|-------|-------------|---------|
| `@` | `./src/app` | Base app directory |
| `@/styles` | `./src/styles` | Global stylesheets |
| `@/components` | `./components` | React components (ROOT - all components including protected system files) |
| `@/templates` | `./src/app/templates` | Page templates |
| `@/contexts` | `./src/app/contexts` | React contexts |
| `@/hooks` | `./src/app/hooks` | Custom hooks |
| `@/data` | `./src/app/data` | Mock data |
| `@/utils` | `./src/app/utils` | Utility functions |
| `@/types` | `./src/app/types` | TypeScript types |
| `@/constants` | `./src/app/constants` | Constants |
| `@/services` | `./src/app/services` | API services |
| `@/pages` | `./src/app/pages` | Route pages |
| `@/imports` | `./src/app/imports` | Imported assets |
| `@/tests` | `./tests` | Test files |

**⚠️ IMPORTANT:** `@/components` currently points to `/components` (root level) where ALL components live, including protected system files like `ImageWithFallback.tsx`.

---

## 🔑 Key Rules

### Rule 1: NEVER Use Relative Paths

```tsx
// ❌ WRONG
import { Header } from '../../../components/parts/Header';

// ✅ CORRECT
import { Header } from '@/components/parts/Header';
```

**Why?** Relative paths break when files move. Aliases are stable.

---

### Rule 2: Use Full Paths with Aliases

```tsx
// ❌ WRONG - Missing subfolder
import { ProductCard } from '@/components/ProductCard';

// ✅ CORRECT - Full path
import { ProductCard } from '@/components/blocks/ProductCard';
```

**Why?** Full paths make it clear where the component lives.

---

### Rule 3: Protected System Files Use `@/components`

```tsx
// Protected system files (e.g., ImageWithFallback) use standard alias
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
```

**Why?** All components (including system files) are in `/components` root folder.

---

## 📁 Component Location Reference

### Components by Type

| Component Type | Alias Path | Example |
|----------------|-----------|---------|
| **Parts** (Global) | `@/components/parts/` | `@/components/parts/Header` |
| **Patterns** (Sections) | `@/components/patterns/` | `@/components/patterns/Hero` |
| **Blocks** (Functional) | `@/components/blocks/` | `@/components/blocks/ProductCard` |
| **Common** (Shared) | `@/components/common/` | `@/components/common/Container` |
| **UI** (Primitives) | `@/components/blocks/ui/` | `@/components/blocks/ui/Button` |
| **Design** (System) | `@/components/blocks/design/` | `@/components/blocks/design/Grid` |

### Data & Logic

| Category | Alias Path | Example |
|----------|-----------|---------|
| **Contexts** | `@/contexts/` | `@/contexts/CartContext` |
| **Hooks** | `@/hooks/` | `@/hooks/useCart` |
| **Utils** | `@/utils/` | `@/utils/formatCurrency` |
| **Data** | `@/data/` | `@/data/products` |
| **Services** | `@/services/` | `@/services/api` |
| **Types** | `@/types/` | `@/types/Product` |

---

## 🎓 Real-World Examples

### Example 1: Template File

**File:** `/src/app/templates/SingleProduct.tsx`

```tsx
// ✅ ALL CORRECT - Using aliases
import React from 'react';
import { Layout } from '@/components/parts/Layout';
import { Container } from '@/components/common/Container';
import { Typography } from '@/components/common/Typography';
import { Button } from '@/components/blocks/design';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ProductCard } from '@/components/blocks/ProductCard';
import { RelatedProductsSection } from '@/components/patterns/RelatedProductsSection';
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed';
```

---

### Example 2: Component File

**File:** `/src/app/components/blocks/ProductCard.tsx`

```tsx
// ✅ ALL CORRECT - Using aliases
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { useQuickView } from '@/contexts/QuickViewContext';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Button } from './design/Button'; // ✅ Same directory exception
```

**Note:** Same-directory imports can use `./` for sibling files.

---

### Example 3: Pattern File

**File:** `/src/app/components/patterns/Hero.tsx`

```tsx
// ✅ ALL CORRECT - Using aliases
import React from 'react';
import { Container } from '@/components/common/Container';
import { Typography } from '@/components/common/Typography';
import { Button } from '@/components/blocks/design/Button';
import { ProductSearch } from '@/components/blocks/ProductSearch';
```

---

## 🚀 Benefits of Alias Strategy

### 1. **Refactor-Proof**

Move files anywhere without updating imports:

```tsx
// Works regardless of where the file is!
import { Header } from '@/components/parts/Header';
```

### 2. **Readable & Clear**

Aliases show exactly where files live:

```tsx
// Instantly know this is a context
import { useCart } from '@/contexts/CartContext';

// Instantly know this is a utility
import { formatPrice } from '@/utils/formatting';
```

### 3. **Consistent Across Project**

Everyone uses the same import pattern:

```tsx
// Developer A
import { ProductCard } from '@/components/blocks/ProductCard';

// Developer B
import { ProductCard } from '@/components/blocks/ProductCard';

// Same! ✅
```

---

## 🔧 Configuration Files

### vite.config.ts

```typescript
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/app'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/components': path.resolve(__dirname, './components'),
      '@/templates': path.resolve(__dirname, './src/app/templates'),
      '@/contexts': path.resolve(__dirname, './src/app/contexts'),
      '@/hooks': path.resolve(__dirname, './src/app/hooks'),
      '@/data': path.resolve(__dirname, './src/app/data'),
      '@/utils': path.resolve(__dirname, './src/app/utils'),
      '@/types': path.resolve(__dirname, './src/app/types'),
      '@/constants': path.resolve(__dirname, './src/app/constants'),
      '@/services': path.resolve(__dirname, './src/app/services'),
      '@/pages': path.resolve(__dirname, './src/app/pages'),
      '@/imports': path.resolve(__dirname, './src/app/imports'),
      '@/tests': path.resolve(__dirname, './tests'),
    },
  },
});
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/app/*"],
      "@/styles/*": ["./src/styles/*"],
      "@/components/*": ["./components/*"],
      "@/templates/*": ["./src/app/templates/*"],
      "@/contexts/*": ["./src/app/contexts/*"],
      "@/hooks/*": ["./src/app/hooks/*"],
      "@/data/*": ["./src/app/data/*"],
      "@/utils/*": ["./src/app/utils/*"],
      "@/types/*": ["./src/app/types/*"],
      "@/constants/*": ["./src/app/constants/*"],
      "@/services/*": ["./src/app/services/*"],
      "@/pages/*": ["./src/app/pages/*"],
      "@/imports/*": ["./src/app/imports/*"],
      "@/tests/*": ["./tests/*"]
    }
  }
}
```

---

## ✅ Migration Checklist

When updating existing files:

- [ ] Replace all `../` imports with `@/` aliases
- [ ] Use full paths (include subfolders)
- [ ] Use `@/components` for all component imports (including system files)
- [ ] Verify imports still work after change
- [ ] Update all files in same batch together

---

## 🎯 Quick Reference

**Need to import from...** | **Use this alias**
---|---
Blocks | `@/components/blocks/`
Patterns | `@/components/patterns/`
Parts | `@/components/parts/`
Common | `@/components/common/`
Figma system files | `@/components/figma/`
Contexts | `@/contexts/`
Hooks | `@/hooks/`
Utils | `@/utils/`
Data | `@/data/`
Styles | `@/styles/`

---

**Last Updated:** January 13, 2026  
**Status:** ✅ Active Standard  
**Next Review:** As needed during refactoring