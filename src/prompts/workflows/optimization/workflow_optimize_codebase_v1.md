# Code Optimization Workflow

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Workflow  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Optimization Workflow |
| **Target** | Complete codebase optimization |
| **Complexity** | High |
| **Estimated Time** | 4-6 hours (full codebase) |
| **Prerequisites** | Performance audit, code review tools |
| **Output Files** | Optimized code + optimization report |

---

## 🎯 Objective

Systematically optimize the entire codebase for performance, maintainability, and best practices through a structured workflow covering React optimization, bundle size reduction, and code quality improvements.

### What This Workflow Does:
- ✅ Optimizes React component performance
- ✅ Reduces bundle size
- ✅ Eliminates code smells
- ✅ Improves code maintainability
- ✅ Implements best practices
- ✅ Documents optimizations made

### What This Workflow Does NOT Do:
- ❌ Rewrite entire application
- ❌ Change feature functionality
- ❌ Handle server-side optimization
- ❌ Automatically fix all issues

---

## 📚 Context & Background

### Optimization Categories:

1. **React Performance**
   - Unnecessary re-renders
   - Missing memoization
   - Heavy computations
   - Large component trees

2. **Bundle Size**
   - Duplicate dependencies
   - Unused code
   - Large libraries
   - Poor code splitting

3. **Code Quality**
   - Complex functions
   - Duplicate code
   - Poor naming
   - Missing types

4. **Best Practices**
   - Accessibility issues
   - Security vulnerabilities
   - Deprecated APIs
   - Anti-patterns

---

## 📋 Requirements

### Prerequisites:
- Performance audit completed
- Test suite passing
- Code review tools installed
- Baseline metrics documented

### Tools Needed:
- ESLint with React plugins
- React DevTools Profiler
- Bundle analyzer
- TypeScript strict mode
- Chrome DevTools

---

## 🔧 Optimization Workflow

### **Phase 1: React Performance Optimization** (90-120 min)

#### Step 1.1: Identify Slow Components

**Action:** Profile with React DevTools

**Steps:**
1. Open React DevTools → Profiler
2. Start recording
3. Interact with app (typical user flow)
4. Stop recording
5. Sort by render time

**Record:**
```markdown
## Slow Components (> 16ms render time)

| Component | Render Time | Re-renders | Issue |
|-----------|-------------|------------|-------|
| ProductGrid | 85ms | 3x per scroll | Not virtualized |
| FilterSidebar | 45ms | On every keystroke | No debounce |
| ProductCard | 25ms | Unnecessary | Props reference change |
```

---

#### Step 1.2: Optimize with React.memo

**Action:** Wrap pure components with React.memo

**Pattern:**
```tsx
// ❌ Before - Re-renders on every parent render
export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* ... */}
    </div>
  );
};

// ✅ After - Only re-renders when props change
export const ProductCard = React.memo(({ product }) => {
  return (
    <div className="product-card">
      {/* ... */}
    </div>
  );
}, (prevProps, nextProps) => {
  // Custom comparison if needed
  return prevProps.product.id === nextProps.product.id;
});
```

**Checklist:**
- [ ] Identify leaf components (no children)
- [ ] Verify props are primitives or stable references
- [ ] Wrap with React.memo
- [ ] Test that behavior unchanged
- [ ] Measure performance improvement

**Expected Improvement:** 30-50% fewer re-renders

---

#### Step 1.3: Optimize with useMemo

**Action:** Memoize expensive computations

**Pattern:**
```tsx
// ❌ Before - Recalculates on every render
const ExpensiveComponent = ({ products, filters }) => {
  const filteredProducts = products.filter(p => {
    return filters.every(f => matchesFilter(p, f));
  }).sort((a, b) => a.price - b.price);

  return <ProductGrid products={filteredProducts} />;
};

// ✅ After - Only recalculates when dependencies change
const ExpensiveComponent = ({ products, filters }) => {
  const filteredProducts = useMemo(() => {
    return products
      .filter(p => filters.every(f => matchesFilter(p, f)))
      .sort((a, b) => a.price - b.price);
  }, [products, filters]);

  return <ProductGrid products={filteredProducts} />;
};
```

**Use useMemo for:**
- [ ] Filtering/sorting large arrays
- [ ] Complex calculations
- [ ] Transforming data
- [ ] Creating derived state

**Expected Improvement:** 20-40% faster rendering

---

#### Step 1.4: Optimize with useCallback

**Action:** Stabilize callback references

**Pattern:**
```tsx
// ❌ Before - Creates new function on every render
const ParentComponent = () => {
  const handleClick = (id) => {
    // Handle click
  };

  return (
    <>
      {items.map(item => (
        <ChildComponent key={item.id} onClick={() => handleClick(item.id)} />
      ))}
    </>
  );
};

// ✅ After - Stable function reference
const ParentComponent = () => {
  const handleClick = useCallback((id) => {
    // Handle click
  }, []);

  return (
    <>
      {items.map(item => (
        <ChildComponent key={item.id} onClick={handleClick} id={item.id} />
      ))}
    </>
  );
};
```

**Use useCallback for:**
- [ ] Event handlers passed to children
- [ ] Functions in useEffect dependencies
- [ ] Callbacks for memoized components
- [ ] Debounced/throttled functions

**Expected Improvement:** 15-25% fewer re-renders

---

#### Step 1.5: Implement Virtualization

**Action:** Virtualize long lists

**Pattern:**
```tsx
// ❌ Before - Renders all 1000 items
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// ✅ After - Only renders visible items
import { FixedSizeList } from 'react-window';

const ProductList = ({ products }) => {
  return (
    <FixedSizeList
      height={600}
      itemCount={products.length}
      itemSize={200}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <ProductCard product={products[index]} />
        </div>
      )}
    </FixedSizeList>
  );
};
```

**Virtualize when:**
- [ ] List has > 100 items
- [ ] Items are uniform size
- [ ] Scrolling is slow
- [ ] Memory usage high

**Expected Improvement:** 60-80% faster scrolling

---

### **Phase 2: Bundle Size Optimization** (60-90 min)

#### Step 2.1: Analyze Bundle Composition

**Action:** Use webpack-bundle-analyzer

**Steps:**
```bash
npm run build -- --analyze
```

**Identify:**
```markdown
## Large Dependencies (Top 10)

| Package | Size | Tree-shakeable | Alternatives |
|---------|------|----------------|--------------|
| lodash | 72KB | ❌ | lodash-es (tree-shakeable) |
| moment | 67KB | ❌ | date-fns (11KB) |
| react-icons | 45KB | ⚠️ | lucide-react (tree-shakeable) |
| chart.js | 62KB | ✅ | recharts (lighter) |
```

---

#### Step 2.2: Replace Heavy Dependencies

**Action:** Swap large libraries for lighter alternatives

**Common Swaps:**

**1. Lodash → Lodash-ES or Native**
```tsx
// ❌ Before - Imports entire library (72KB)
import _ from 'lodash';
const unique = _.uniq(array);

// ✅ Option 1 - Import specific function
import uniq from 'lodash/uniq';
const unique = uniq(array);

// ✅ Option 2 - Use native (0KB)
const unique = [...new Set(array)];
```

**2. Moment.js → date-fns**
```tsx
// ❌ Before - Imports entire library (67KB)
import moment from 'moment';
const formatted = moment(date).format('YYYY-MM-DD');

// ✅ After - Tree-shakeable imports (11KB)
import { format } from 'date-fns';
const formatted = format(date, 'yyyy-MM-dd');
```

**3. react-icons → lucide-react**
```tsx
// ❌ Before - Large icon set (45KB)
import { FaShoppingCart } from 'react-icons/fa';

// ✅ After - Tree-shakeable (5KB)
import { ShoppingCart } from '@phosphor-icons/react';
```

**Expected Savings:** 100-200KB (gzipped)

---

#### Step 2.3: Implement Code Splitting

**Action:** Split code by routes and features

**Pattern:**

**Route-based splitting:**
```tsx
// ❌ Before - All routes loaded upfront
import { FrontPage } from './templates/FrontPage';
import { ProductArchive } from './templates/ProductArchive';
import { SingleProduct } from './templates/SingleProduct';

// ✅ After - Lazy load routes
const FrontPage = lazy(() => import('./templates/FrontPage'));
const ProductArchive = lazy(() => import('./templates/ProductArchive'));
const SingleProduct = lazy(() => import('./templates/SingleProduct'));

<Routes>
  <Route path="/" element={
    <Suspense fallback={<LoadingSpinner />}>
      <FrontPage />
    </Suspense>
  } />
</Routes>
```

**Feature-based splitting:**
```tsx
// ❌ Before - Heavy component always loaded
import { EnquiryModal } from './blocks/EnquiryModal';

// ✅ After - Load only when needed
const EnquiryModal = lazy(() => import('./blocks/EnquiryModal'));

const Component = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button onClick={() => setShowModal(true)}>Enquire</button>
      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <EnquiryModal />
        </Suspense>
      )}
    </>
  );
};
```

**Split these:**
- [ ] Route components
- [ ] Modal components
- [ ] Heavy third-party integrations
- [ ] Feature flags

**Expected Improvement:** 40-60% smaller initial bundle

---

#### Step 2.4: Remove Unused Code

**Action:** Find and eliminate dead code

**Tools:**
```bash
# Find unused exports
npx ts-prune

# Find unused dependencies
npx depcheck

# Remove unused imports
npx eslint --fix
```

**Manual Check:**
```markdown
## Unused Code Audit

### Unused Functions
- [ ] `formatCurrency()` - replaced by native Intl
- [ ] `debounce()` - using lodash version
- [ ] `validateEmail()` - using library

### Unused Components
- [ ] `OldProductCard` - replaced by new version
- [ ] `LegacyButton` - using design system button

### Unused Dependencies
- [ ] `classnames` - not used anywhere
- [ ] `prop-types` - using TypeScript
- [ ] `redux-thunk` - not using Redux
```

**Expected Savings:** 20-40KB (gzipped)

---

### **Phase 3: Code Quality Optimization** (90-120 min)

#### Step 3.1: Simplify Complex Functions

**Action:** Break down complex logic

**Pattern:**
```tsx
// ❌ Before - Complex, hard to test (Cyclomatic Complexity: 15)
const processOrder = (order, user, inventory) => {
  if (order.items.length > 0) {
    if (user.isAuthenticated) {
      for (const item of order.items) {
        if (inventory.hasStock(item.id)) {
          if (item.quantity <= inventory.getStock(item.id)) {
            if (user.balance >= item.price * item.quantity) {
              // Process payment
              // Update inventory
              // Send email
              // ... 50 more lines
            } else {
              throw new Error('Insufficient funds');
            }
          } else {
            throw new Error('Insufficient stock');
          }
        } else {
          throw new Error('Product not found');
        }
      }
    } else {
      throw new Error('User not authenticated');
    }
  } else {
    throw new Error('Empty order');
  }
};

// ✅ After - Simple, testable (Cyclomatic Complexity: 3)
const validateOrder = (order) => {
  if (order.items.length === 0) {
    throw new Error('Empty order');
  }
};

const validateUser = (user) => {
  if (!user.isAuthenticated) {
    throw new Error('User not authenticated');
  }
};

const validateInventory = (item, inventory) => {
  if (!inventory.hasStock(item.id)) {
    throw new Error('Product not found');
  }
  if (item.quantity > inventory.getStock(item.id)) {
    throw new Error('Insufficient stock');
  }
};

const validatePayment = (item, user) => {
  if (user.balance < item.price * item.quantity) {
    throw new Error('Insufficient funds');
  }
};

const processOrderItem = (item, user, inventory) => {
  validateInventory(item, inventory);
  validatePayment(item, user);
  // Process single item
};

const processOrder = (order, user, inventory) => {
  validateOrder(order);
  validateUser(user);
  order.items.forEach(item => processOrderItem(item, user, inventory));
};
```

**Simplification Rules:**
- [ ] Max 15 lines per function
- [ ] Max Cyclomatic Complexity: 10
- [ ] Max nesting depth: 3
- [ ] Single Responsibility Principle
- [ ] Early returns for validation

**Expected Improvement:** 50-70% easier to test and maintain

---

#### Step 3.2: Eliminate Duplicate Code

**Action:** Extract common patterns

**Pattern:**
```tsx
// ❌ Before - Duplicate logic
const ProductCard = ({ product }) => {
  const imageUrl = product.images?.[0] || '/placeholder.jpg';
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);
  
  return (
    <div>
      <img src={imageUrl} alt={product.title} />
      <span>{formattedPrice}</span>
    </div>
  );
};

const CartItem = ({ item }) => {
  const imageUrl = item.product.images?.[0] || '/placeholder.jpg';
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(item.product.price);
  
  return (
    <div>
      <img src={imageUrl} alt={item.product.title} />
      <span>{formattedPrice}</span>
    </div>
  );
};

// ✅ After - Extracted utilities
// /utils/product.ts
export const getProductImage = (product, fallback = '/placeholder.jpg') => {
  return product.images?.[0] || fallback;
};

export const formatPrice = (price, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency
  }).format(price);
};

// Components use utilities
const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={getProductImage(product)} alt={product.title} />
      <span>{formatPrice(product.price)}</span>
    </div>
  );
};
```

**Find duplicates:**
- [ ] Similar component patterns
- [ ] Repeated calculations
- [ ] Common validation logic
- [ ] Formatting functions

**Expected Improvement:** 30-40% less code, easier maintenance

---

#### Step 3.3: Improve TypeScript Coverage

**Action:** Add missing types and fix any types

**Pattern:**
```tsx
// ❌ Before - Loose typing
const processData = (data: any) => {
  return data.map((item: any) => item.value);
};

// ✅ After - Strict typing
interface DataItem {
  id: string;
  value: number;
  label: string;
}

const processData = (data: DataItem[]): number[] => {
  return data.map(item => item.value);
};
```

**Enable strict mode:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

**Fix all:**
- [ ] `any` types
- [ ] Missing return types
- [ ] Implicit any parameters
- [ ] Unsafe null/undefined access

**Expected Improvement:** 80-100% type safety

---

### **Phase 4: Best Practices Implementation** (60-90 min)

#### Step 4.1: Add Error Boundaries

**Action:** Implement error handling

**Pattern:**
```tsx
// /components/common/ErrorBoundary.tsx
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
<ErrorBoundary>
  <ProductGrid />
</ErrorBoundary>
```

**Add error boundaries:**
- [ ] Around route components
- [ ] Around async data fetching
- [ ] Around third-party integrations
- [ ] Around complex features

---

#### Step 4.2: Implement Loading States

**Action:** Add proper loading indicators

**Pattern:**
```tsx
// ❌ Before - No loading state
const Component = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  return <div>{data?.map(...)}</div>;
};

// ✅ After - Proper loading/error states
const Component = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) return <Skeleton />;
  if (error) return <ErrorMessage error={error} />;
  if (!data) return <EmptyState />;
  
  return <div>{data.map(...)}</div>;
};
```

**Add loading states for:**
- [ ] Data fetching
- [ ] Form submission
- [ ] Image loading
- [ ] Route transitions

---

#### Step 4.3: Optimize Accessibility

**Action:** Fix accessibility issues

**Checklist:**
```markdown
## Accessibility Improvements

### Keyboard Navigation
- [ ] All interactive elements tabbable
- [ ] Logical tab order
- [ ] Skip links implemented
- [ ] Focus traps in modals

### Screen Readers
- [ ] All images have alt text
- [ ] ARIA labels on icon buttons
- [ ] Live regions for dynamic content
- [ ] Proper heading hierarchy

### Forms
- [ ] Labels associated with inputs
- [ ] Error messages linked
- [ ] Required fields marked
- [ ] Validation feedback accessible

### Color & Contrast
- [ ] All text meets WCAG AA
- [ ] Color not only indicator
- [ ] Focus indicators visible
```

---

## 📊 Generate Optimization Report

**Action:** Document all optimizations made

**Report Location:** `/reports/optimizations/YYYY-MM-DD_optimization-report.md`

**Report Template:**
```markdown
# Code Optimization Report

**Date:** YYYY-MM-DD
**Duration:** [hours] hours
**Status:** ✅ Complete

---

## Summary

### Metrics Before/After

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| **Lighthouse Score** | 75 | 92 | +23% |
| **Bundle Size (gzipped)** | 380KB | 210KB | -45% |
| **LCP** | 3.2s | 1.8s | -44% |
| **Render Time (avg)** | 45ms | 18ms | -60% |
| **Test Coverage** | 68% | 82% | +14% |

---

## Optimizations Implemented

### React Performance (8 optimizations)
1. ✅ Wrapped ProductCard with React.memo (-40% re-renders)
2. ✅ Memoized filtered products with useMemo (-35% computation time)
3. ✅ Stabilized callbacks with useCallback (-25% re-renders)
4. ✅ Implemented virtualization for ProductGrid (-70% render time)
[... continue]

### Bundle Size (6 optimizations)
1. ✅ Replaced moment.js with date-fns (-56KB)
2. ✅ Switched to tree-shakeable lodash-es (-60KB)
3. ✅ Implemented route-based code splitting (-120KB initial)
[... continue]

### Code Quality (12 optimizations)
1. ✅ Simplified processOrder function (-50 lines, complexity 15→3)
2. ✅ Extracted common product utilities (DRY)
3. ✅ Fixed all TypeScript `any` types (100% type safety)
[... continue]

### Best Practices (7 optimizations)
1. ✅ Added error boundaries (5 components)
2. ✅ Implemented loading states (8 components)
3. ✅ Fixed accessibility issues (15 fixes)
[... continue]

---

## Total Impact

**Time Saved:** 13 hours/month (maintenance)
**Performance Gain:** 43% faster
**Bundle Size Reduction:** 170KB (-45%)
**Code Reduction:** 850 lines removed
**Type Safety:** 100% (from 65%)
**Test Coverage:** 82% (from 68%)

---

## Recommendations for Next Sprint

1. Implement service worker for offline support
2. Add visual regression testing
3. Optimize images with WebP format
4. Implement performance monitoring

---

**Prepared by:** [Name]
**Status:** ✅ Complete
```

---

## ✅ Optimization Completion Checklist

**React Performance:**
- [ ] Slow components identified
- [ ] React.memo applied where beneficial
- [ ] useMemo for expensive computations
- [ ] useCallback for stable callbacks
- [ ] Virtualization for long lists

**Bundle Size:**
- [ ] Bundle analyzed
- [ ] Heavy dependencies replaced
- [ ] Code splitting implemented
- [ ] Unused code removed
- [ ] Tree-shaking verified

**Code Quality:**
- [ ] Complex functions simplified
- [ ] Duplicate code eliminated
- [ ] TypeScript strict mode enabled
- [ ] All `any` types fixed

**Best Practices:**
- [ ] Error boundaries added
- [ ] Loading states implemented
- [ ] Accessibility issues fixed
- [ ] Documentation updated

**Reporting:**
- [ ] Before/after metrics documented
- [ ] All optimizations listed
- [ ] Impact measured
- [ ] Report generated

---

## 📖 Related Documentation

- **Performance Guidelines:** `/guidelines/performance.md`
- **Performance Audit:** `/prompts/audits/performance/audit_performance_optimization_v1.md`
- **Testing Standards:** `/guidelines/testing.md`

---

## 📝 Notes & Tips

### Best Practices:

💡 **Measure first** - Always profile before optimizing

💡 **Test after** - Verify optimizations don't break functionality

💡 **Document changes** - Future you will thank present you

💡 **Prioritize impact** - Focus on high-impact, low-effort wins first

💡 **Automate checks** - Add performance budgets to CI/CD

### Common Mistakes:

⚠️ **Premature optimization** - Profile first, optimize second

⚠️ **Over-memoization** - Not all components need React.memo

⚠️ **Breaking functionality** - Always test after optimizing

⚠️ **Ignoring bundle size** - Small changes compound quickly

⚠️ **No benchmarking** - Can't improve what you don't measure

---

**Status:** ✅ Active  
**Created:** 2026-01-10