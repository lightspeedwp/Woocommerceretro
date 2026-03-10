# Performance Optimization Audit

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Audit  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Performance Audit |
| **Target** | Complete application performance |
| **Complexity** | High |
| **Estimated Time** | 3-4 hours |
| **Prerequisites** | Chrome DevTools, Lighthouse knowledge |
| **Output Files** | Performance audit report in `/reports/audits/` |

---

## 🎯 Objective

Perform a comprehensive performance audit of the entire application, identify bottlenecks, and provide actionable recommendations for optimization.

### What This Audit Does:
- ✅ Measures load time and rendering performance
- ✅ Identifies performance bottlenecks
- ✅ Audits bundle size and code splitting
- ✅ Reviews image optimization
- ✅ Tests React component performance
- ✅ Provides specific optimization recommendations

### What This Audit Does NOT Do:
- ❌ Optimize server-side performance
- ❌ Test database queries
- ❌ Handle CDN configuration
- ❌ Automatically implement fixes

---

## 📚 Context & Background

### Performance Targets:

**Google Core Web Vitals:**
- **LCP (Largest Contentful Paint):** < 2.5s (Good)
- **FID (First Input Delay):** < 100ms (Good)
- **CLS (Cumulative Layout Shift):** < 0.1 (Good)

**Additional Metrics:**
- **First Contentful Paint (FCP):** < 1.8s
- **Time to Interactive (TTI):** < 3.8s
- **Total Blocking Time (TBT):** < 200ms
- **Speed Index:** < 3.4s

**Bundle Size:**
- Initial bundle: < 200KB (gzipped)
- Total bundle: < 500KB (gzipped)

---

## 📋 Requirements

### Audit Scope:
1. **Load Performance**
   - Initial page load time
   - Time to Interactive
   - First Contentful Paint
   - Largest Contentful Paint

2. **Runtime Performance**
   - React component render times
   - JavaScript execution time
   - Layout thrashing
   - Memory leaks

3. **Asset Optimization**
   - Image sizes and formats
   - JavaScript bundle size
   - CSS bundle size
   - Font loading strategy

4. **Network Performance**
   - Number of requests
   - Request sizes
   - Caching strategy
   - Resource compression

---

## 🔧 Audit Instructions

### **Phase 1: Baseline Measurements** (30 min)

#### Step 1.1: Run Lighthouse Audit

**Action:** Generate Lighthouse performance report

**Steps:**
1. Open Chrome DevTools (F12)
2. Navigate to Lighthouse tab
3. Select "Performance" category
4. Check "Desktop" and "Mobile" modes
5. Run audit
6. Save report

**Record:**
```markdown
## Lighthouse Scores

### Desktop
- Performance: [score]/100
- FCP: [time]s
- LCP: [time]s
- TBT: [time]ms
- CLS: [score]
- Speed Index: [time]s

### Mobile
- Performance: [score]/100
- FCP: [time]s
- LCP: [time]s
- TBT: [time]ms
- CLS: [score]
- Speed Index: [time]s
```

---

#### Step 1.2: Measure Bundle Sizes

**Action:** Analyze JavaScript bundle

**Tools:**
```bash
# Build for production
npm run build

# Analyze bundle size
npm run build -- --analyze

# Or use webpack-bundle-analyzer
npx webpack-bundle-analyzer dist/stats.json
```

**Record:**
```markdown
## Bundle Analysis

### Main Bundle
- **Size (uncompressed):** [size] KB
- **Size (gzipped):** [size] KB
- **Status:** ✅ Good / ⚠️ Warning / ❌ Too Large

### Vendor Bundle
- **Size (uncompressed):** [size] KB
- **Size (gzipped):** [size] KB
- **Largest dependencies:** [list top 5]

### Total Bundle
- **Size (uncompressed):** [size] KB
- **Size (gzipped):** [size] KB
- **Target:** < 500KB (gzipped)
```

---

#### Step 1.3: Profile React Components

**Action:** Use React DevTools Profiler

**Steps:**
1. Install React DevTools extension
2. Open DevTools → Profiler tab
3. Start profiling
4. Navigate through app
5. Stop profiling
6. Review flame graph

**Record:**
```markdown
## Component Performance

### Slowest Components (Top 5)
1. **ComponentName** - [time]ms render time
   - Reason: [why slow]
   - Recommendation: [fix]

2. **ComponentName** - [time]ms render time
   - Reason: [why slow]
   - Recommendation: [fix]

[... continue for all slow components]

### Unnecessary Re-renders
- **ComponentName** renders [count] times per interaction
  - Cause: [why]
  - Fix: useMemo/useCallback/React.memo
```

---

### **Phase 2: Asset Optimization Audit** (45 min)

#### Step 2.1: Audit Images

**Action:** Review all image usage

**Checklist:**
```markdown
## Image Optimization

### Image Inventory
| Image | Size | Format | Optimized | Lazy Loaded |
|-------|------|--------|-----------|-------------|
| hero.jpg | 450KB | JPEG | ❌ | ✅ |
| product-1.jpg | 250KB | JPEG | ✅ | ✅ |
| logo.png | 80KB | PNG | ⚠️ | ❌ |

### Issues Found
1. **hero.jpg** - 450KB (should be < 100KB)
   - Recommendation: Compress to WebP format
   - Expected savings: 350KB

2. **logo.png** - Should be SVG
   - Recommendation: Convert to SVG
   - Expected savings: 75KB

### Total Savings Potential
- Current total: [size] MB
- Optimized total: [size] MB
- Savings: [size] MB ([percent]%)
```

---

#### Step 2.2: Audit Fonts

**Action:** Review font loading strategy

**Checklist:**
```markdown
## Font Optimization

### Fonts Used
- **Inter** (weights: 400, 500, 600, 700)
  - Format: WOFF2 ✅
  - Subsetting: ❌
  - Preloading: ❌

### Issues
1. Loading all font weights (400-700)
   - Current: 180KB total
   - Needed: Only 400, 600 (80KB)
   - Savings: 100KB

2. No font preloading
   - FOUT (Flash of Unstyled Text) visible
   - Recommendation: Preload critical fonts

3. No font-display strategy
   - Recommendation: Add `font-display: swap`

### Recommended Changes
\`\`\`css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-400.woff2') format('woff2');
  font-display: swap;
}
\`\`\`

\`\`\`html
<link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossorigin>
\`\`\`
```

---

#### Step 2.3: Audit JavaScript

**Action:** Review JavaScript usage

**Analysis:**
```markdown
## JavaScript Optimization

### Large Dependencies
1. **lodash** - 72KB
   - Used functions: 5
   - Recommendation: Import specific functions only
   - Savings: 60KB
   
   \`\`\`js
   // ❌ Bad
   import _ from 'lodash';
   
   // ✅ Good
   import debounce from 'lodash/debounce';
   \`\`\`

2. **moment.js** - 67KB
   - Recommendation: Replace with date-fns (11KB)
   - Savings: 56KB

3. **react-icons** - 45KB
   - Recommendation: Use lucide-react (tree-shakeable)
   - Savings: 30KB

### Code Splitting Opportunities
- [ ] Split vendor bundle
- [ ] Lazy load routes
- [ ] Lazy load heavy components
- [ ] Dynamic imports for modals

### Tree Shaking Issues
- [ ] Some imports not tree-shakeable
- [ ] Unused exports in utility files
```

---

### **Phase 3: Runtime Performance Audit** (60 min)

#### Step 3.1: Profile JavaScript Execution

**Action:** Use Chrome DevTools Performance tab

**Steps:**
1. Open DevTools → Performance tab
2. Start recording
3. Perform key user actions
4. Stop recording
5. Analyze flame chart

**Record:**
```markdown
## JavaScript Performance

### Long Tasks (> 50ms)
1. **handleSubmit** - 180ms
   - Location: CheckoutForm.tsx
   - Cause: Synchronous validation
   - Fix: Move to Web Worker or debounce

2. **filterProducts** - 120ms
   - Location: ProductArchive.tsx
   - Cause: Not memoized
   - Fix: useMemo hook

3. **updateCart** - 95ms
   - Location: CartContext.tsx
   - Cause: Unnecessary re-renders
   - Fix: useCallback + React.memo

### Main Thread Blocking
- Total blocking time: [time]ms
- Target: < 200ms
- **Status:** ✅ Good / ⚠️ Warning / ❌ Needs Work
```

---

#### Step 3.2: Check for Memory Leaks

**Action:** Profile memory usage

**Steps:**
1. Open DevTools → Memory tab
2. Take heap snapshot
3. Navigate through app
4. Take another snapshot
5. Compare snapshots

**Record:**
```markdown
## Memory Performance

### Heap Size
- Initial: [size] MB
- After navigation: [size] MB
- After return: [size] MB
- **Status:** ✅ No leaks / ❌ Memory leak detected

### Potential Leaks
1. **Event listeners not cleaned up**
   - Component: [name]
   - Fix: Add cleanup in useEffect

2. **Timers not cleared**
   - Component: [name]
   - Fix: clearTimeout/clearInterval

3. **Refs not released**
   - Component: [name]
   - Fix: Set refs to null on unmount
```

---

### **Phase 4: Network Performance Audit** (30 min)

#### Step 4.1: Analyze Network Requests

**Action:** Review all network activity

**Record:**
```markdown
## Network Performance

### Request Summary
- Total requests: [count]
- Total size: [size] MB
- Total time: [time]s
- Target: < 50 requests, < 3MB

### Request Breakdown
| Type | Count | Size | Cacheable |
|------|-------|------|-----------|
| HTML | 1 | 15KB | ❌ |
| CSS | 2 | 45KB | ✅ |
| JS | 8 | 380KB | ✅ |
| Images | 12 | 2.1MB | ✅ |
| Fonts | 3 | 180KB | ✅ |

### Issues
1. **Too many small requests**
   - 8 separate JS files
   - Recommendation: Bundle main + vendor only

2. **No compression**
   - JS files not gzipped
   - Recommendation: Enable gzip/brotli

3. **No caching headers**
   - Static assets reload every time
   - Recommendation: Add Cache-Control headers
```

---

#### Step 4.2: Audit Caching Strategy

**Action:** Review caching implementation

**Checklist:**
```markdown
## Caching Strategy

### Static Assets
- [ ] Long cache time (1 year) for versioned assets
- [ ] Short cache time (1 hour) for HTML
- [ ] Service worker for offline support

### API Responses
- [ ] Cache GET requests
- [ ] Invalidate on mutations
- [ ] Stale-while-revalidate strategy

### Recommendations
\`\`\`
# Static assets (1 year)
Cache-Control: public, max-age=31536000, immutable

# HTML (1 hour, must revalidate)
Cache-Control: public, max-age=3600, must-revalidate

# API (5 minutes)
Cache-Control: private, max-age=300
\`\`\`
```

---

## 📊 Generate Complete Report

**Action:** Create comprehensive audit report

**Report Location:** `/reports/audits/YYYY-MM-DD_performance-audit.md`

**Report Structure:**

```markdown
# Performance Audit Report

**Date:** YYYY-MM-DD
**Auditor:** [Name]
**Status:** ✅ Complete

---

## Executive Summary

### Overall Performance Score

| Metric | Desktop | Mobile | Target | Status |
|--------|---------|--------|--------|--------|
| Lighthouse | [score] | [score] | > 90 | [status] |
| LCP | [time]s | [time]s | < 2.5s | [status] |
| FID | [time]ms | [time]ms | < 100ms | [status] |
| CLS | [score] | [score] | < 0.1 | [status] |
| Bundle Size | [size]KB | [size]KB | < 200KB | [status] |

### Key Findings

**Critical Issues (P0):**
- [Issue 1 - blocking performance]
- [Issue 2 - significant impact]

**High Priority (P1):**
- [Issue 1 - noticeable impact]
- [Issue 2 - easy wins]

**Medium Priority (P2):**
- [Issue 1 - minor impact]
- [Issue 2 - future optimization]

---

## Detailed Findings

### 1. Load Performance

[Complete load performance analysis]

### 2. Runtime Performance

[Complete runtime analysis]

### 3. Asset Optimization

[Complete asset analysis]

### 4. Network Performance

[Complete network analysis]

---

## Recommendations

### Priority 0 - Critical (Implement Immediately)

#### 1. Compress Images
**Issue:** Hero image is 450KB (should be < 100KB)
**Impact:** High - blocks LCP
**Effort:** Low
**Savings:** 350KB, 1.2s faster LCP

**Implementation:**
\`\`\`bash
# Convert to WebP
cwebp -q 80 hero.jpg -o hero.webp

# Use responsive images
<picture>
  <source srcset="hero-mobile.webp" media="(max-width: 640px)">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero">
</picture>
\`\`\`

[Continue with all P0 recommendations]

---

### Priority 1 - High (Implement This Sprint)

[All P1 recommendations]

---

### Priority 2 - Medium (Implement Next Sprint)

[All P2 recommendations]

---

## Implementation Plan

### Week 1: Critical Issues (P0)
- [ ] Compress all images
- [ ] Enable code splitting
- [ ] Fix memory leaks

### Week 2: High Priority (P1)
- [ ] Optimize fonts
- [ ] Lazy load routes
- [ ] Add caching headers

### Week 3: Medium Priority (P2)
- [ ] Replace heavy dependencies
- [ ] Implement service worker
- [ ] Add resource hints

---

## Re-test Checklist

- [ ] Lighthouse score improved
- [ ] LCP < 2.5s
- [ ] FID < 100ms
- [ ] CLS < 0.1
- [ ] Bundle size reduced
- [ ] All P0 issues resolved

---

**Status:** ✅ Complete
**Next Review:** [Date]
```

---

## ✅ Audit Completion Checklist

- [ ] Lighthouse audit complete (desktop + mobile)
- [ ] Bundle size analyzed
- [ ] React components profiled
- [ ] Images audited
- [ ] Fonts reviewed
- [ ] JavaScript optimizations identified
- [ ] Network performance measured
- [ ] Memory leaks checked
- [ ] Complete report generated
- [ ] Recommendations prioritized
- [ ] Implementation plan created

---

## 📖 Related Documentation

- **Performance Guidelines:** `/guidelines/performance.md`
- **Optimization Guide:** `/guidelines/PERFORMANCE_OPTIMIZATION_GUIDE.md`
- **Testing Standards:** `/guidelines/testing.md`

---

## 📝 Notes & Tips

### Best Practices:

💡 **Test on real devices** - Lighthouse simulates throttling, but real devices reveal more

💡 **Test on slow networks** - Use Chrome DevTools network throttling

💡 **Profile in production mode** - Development builds are much slower

💡 **Use Web Vitals library** - Monitor real user metrics

💡 **Benchmark competitors** - Compare your performance to similar sites

### Common Issues:

⚠️ **Large images** - Usually the #1 performance killer

⚠️ **Unoptimized fonts** - Causes layout shifts and blocking

⚠️ **Too many dependencies** - Bundle bloat from unused code

⚠️ **No code splitting** - Loading everything upfront

⚠️ **Unnecessary re-renders** - React performance issues

---

## 🔄 Continuous Monitoring

### Set Up Performance Monitoring

```typescript
// Install web-vitals
npm install web-vitals

// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### Performance Budget

```json
{
  "budget": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 200 },
        { "resourceType": "image", "budget": 300 },
        { "resourceType": "font", "budget": 100 }
      ]
    }
  ]
}
```

---

**Status:** ✅ Active  
**Created:** 2026-01-10
