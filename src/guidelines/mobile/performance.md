# Mobile Performance Guidelines

**Category**: Mobile Design  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Overview

Mobile performance directly impacts user experience, conversion rates, and SEO rankings. Users expect fast-loading pages even on slower 3G/4G connections. These guidelines ensure optimal performance on mobile devices.

---

## Performance Budgets

### Target Metrics

| Metric | Target (3G) | Target (4G) | Critical |
|--------|-------------|-------------|----------|
| **First Contentful Paint (FCP)** | < 2.5s | < 1.8s | Yes |
| **Largest Contentful Paint (LCP)** | < 2.5s | < 2.0s | Yes |
| **Time to Interactive (TTI)** | < 5.0s | < 3.8s | Yes |
| **Total Blocking Time (TBT)** | < 600ms | < 300ms | Yes |
| **Cumulative Layout Shift (CLS)** | < 0.1 | < 0.1 | Yes |
| **Speed Index** | < 4.0s | < 3.0s | No |

### Page Weight Budgets

| Page Type | Target Weight | Maximum Weight |
|-----------|---------------|----------------|
| Homepage | 500KB | 1MB |
| Product Page | 600KB | 1.2MB |
| Category/Shop | 700KB | 1.5MB |
| Cart/Checkout | 400KB | 800KB |

### Asset Budgets

| Asset Type | Budget | Notes |
|------------|--------|-------|
| HTML | 30KB | Gzipped |
| CSS | 50KB | Critical inline, rest async |
| JavaScript | 150KB | Code-split, lazy load |
| Images | 300KB | Compressed, responsive |
| Fonts | 50KB | WOFF2, subset |
| Total | 500-600KB | Initial page load |

---

## JavaScript Optimization

### Code Splitting

```tsx
// ✅ DO: Lazy load route components
import { lazy, Suspense } from 'react';

const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Suspense>
  );
}
```

### Component-Level Code Splitting

```tsx
// Lazy load heavy components
const ProductCarousel = lazy(() => import('./ProductCarousel'));
const ReviewsSection = lazy(() => import('./ReviewsSection'));

function ProductPage() {
  return (
    <div>
      <ProductDetails /> {/* Loaded immediately */}
      
      <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse" />}>
        <ProductCarousel /> {/* Lazy loaded */}
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse" />}>
        <ReviewsSection /> {/* Lazy loaded */}
      </Suspense>
    </div>
  );
}
```

### Dynamic Imports for Features

```tsx
// Load heavy libraries only when needed
async function handleShare() {
  const { share } = await import('./shareUtils');
  share(product);
}

// Load chart library on demand
function ProductAnalytics() {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    import('recharts').then(module => {
      setChart(() => module.LineChart);
    });
  }, []);

  return Chart ? <Chart data={data} /> : <div>Loading chart...</div>;
}
```

### Tree Shaking & Dead Code Elimination

```tsx
// ✅ DO: Import only what you need
import { Button } from '@/components/ui/button';

// ❌ DON'T: Import entire library
import * as Components from '@/components/ui';
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build -- --stats

# Visualize bundle
npx webpack-bundle-analyzer dist/stats.json
```

---

## CSS Optimization

### Critical CSS Inlining

```tsx
// Inline critical CSS in <head>
<head>
  <style>{criticalCSS}</style>
  <link rel="preload" href="/styles.css" as="style" />
  <link rel="stylesheet" href="/styles.css" media="print" onLoad="this.media='all'" />
</head>
```

### Remove Unused CSS

```css
/* CSS files are scoped to components via BEM naming convention.
   Unused blocks can be removed by deleting the corresponding
   CSS file from /src/styles/blocks/ or /src/styles/sections/. */
```

### CSS-in-JS Performance

```tsx
// ✅ DO: Extract static styles
const styles = {
  container: 'max-w-7xl mx-auto px-4',
  heading: 'text-3xl font-bold mb-4',
};

// ❌ DON'T: Generate styles on every render
function Component() {
  const styles = {
    color: theme.primary, // Generated on each render
  };
}
```

---

## Image Optimization

### Responsive Images

```tsx
<img
  src="product-400.jpg"
  srcSet="
    product-400.jpg 400w,
    product-800.jpg 800w,
    product-1200.jpg 1200w
  "
  sizes="(max-width: 640px) 100vw, 50vw"
  loading="lazy"
  width="400"
  height="400"
  alt="Product"
/>
```

### Modern Image Formats

```tsx
<picture>
  <source type="image/avif" srcSet="image.avif" />
  <source type="image/webp" srcSet="image.webp" />
  <img src="image.jpg" alt="Product" loading="lazy" />
</picture>
```

### Image CDN with Automatic Optimization

```tsx
// Cloudinary example
const optimizedUrl = `https://res.cloudinary.com/demo/image/upload/
  f_auto,          // Auto format (WebP/AVIF)
  q_auto,          // Auto quality
  w_400,           // Width 400px
  dpr_2.0          // 2x for retina
  /product.jpg`;

<img src={optimizedUrl} alt="Product" loading="lazy" />
```

---

## Font Optimization

### Font Loading Strategy

```tsx
// 1. Preload critical fonts
<head>
  <link
    rel="preload"
    href="/fonts/inter-var.woff2"
    as="font"
    type="font/woff2"
    crossOrigin="anonymous"
  />
</head>

// 2. Use font-display: swap
<style>
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-var.woff2') format('woff2');
    font-display: swap; /* Show fallback immediately */
    font-weight: 100 900;
  }
</style>
```

### Subset Fonts

```css
/* Include only Latin characters */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153;
}
```

### Variable Fonts

```css
/* One file for all weights */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
}
```

---

## Animation Performance

### Use CSS Transforms (Hardware Accelerated)

```tsx
// ✅ DO: Transform and opacity (GPU accelerated)
<div className="transition-transform hover:scale-105">
  <img src="product.jpg" alt="Product" />
</div>

// ❌ DON'T: Animate width, height, top, left
<div className="hover:w-120"> {/* Triggers layout */}
  <img src="product.jpg" alt="Product" />
</div>
```

### Throttle Scroll Listeners

```tsx
import { useEffect } from 'react';
import { throttle } from 'lodash-es';

function ScrollComponent() {
  useEffect(() => {
    const handleScroll = throttle(() => {
      // Handle scroll
    }, 100); // Throttle to 10fps

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
```

### Reduce Motion for Accessibility

```css
/* Disable animations for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Use `will-change` Sparingly

```tsx
// ✅ DO: Only for elements actively animating
<div className="hover:scale-105" style={{ willChange: 'transform' }}>
  {/* During animation */}
</div>

// ❌ DON'T: Apply to everything
<div style={{ willChange: 'transform, opacity' }}>
  {/* Creates performance issues */}
</div>
```

---

## Network Optimization

### Resource Hints

```tsx
<head>
  {/* Preconnect to external domains */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://cdn.example.com" />
  
  {/* DNS prefetch for external resources */}
  <link rel="dns-prefetch" href="https://analytics.google.com" />
  
  {/* Preload critical resources */}
  <link rel="preload" href="/hero.jpg" as="image" />
  <link rel="preload" href="/styles.css" as="style" />
  
  {/* Prefetch next page */}
  <link rel="prefetch" href="/product/123" />
</head>
```

### Service Worker for Offline Support

```tsx
// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

// sw.js - Cache-first strategy for images
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
```

### HTTP/2 Server Push

```nginx
# nginx config
location / {
  http2_push /styles.css;
  http2_push /script.js;
  http2_push /logo.svg;
}
```

---

## React Performance Optimization

### Memoization

```tsx
import { memo, useMemo, useCallback } from 'react';

// Memoize component
const ProductCard = memo(function ProductCard({ product }) {
  return <div>{product.name}</div>;
});

// Memoize expensive calculations
function ProductList({ products, filter }) {
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === filter);
  }, [products, filter]);

  return filteredProducts.map(p => <ProductCard key={p.id} product={p} />);
}

// Memoize callbacks
function Parent() {
  const handleClick = useCallback((id) => {
    console.log(id);
  }, []);

  return <Child onClick={handleClick} />;
}
```

### Virtual Scrolling

```tsx
import { useVirtualizer } from '@tanstack/react-virtual';

function ProductGrid({ products }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: products.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 400, // Estimated item height
  });

  return (
    <div ref={parentRef} className="h-screen overflow-auto">
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualItem.size}px`,
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <ProductCard product={products[virtualItem.index]} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Debounce Input

```tsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchInput() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      fetchResults(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

---

## 3G Testing

### Simulate 3G in Chrome DevTools

1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Select "Slow 3G" or "Fast 3G" from throttling dropdown
4. Test page load and interactions

### 3G Performance Targets

| Connection | Download | Upload | Latency | Target LCP |
|------------|----------|--------|---------|------------|
| Slow 3G | 400 Kbps | 400 Kbps | 2000ms | < 4.0s |
| Fast 3G | 1.6 Mbps | 750 Kbps | 562ms | < 2.5s |
| 4G | 4 Mbps | 3 Mbps | 170ms | < 2.0s |

### WebPageTest Configuration

```
Test Settings:
- Location: Mobile 3G (Dulles, VA)
- Browser: Chrome Mobile
- Connection: 3G (1.6 Mbps/768 Kbps, 300ms RTT)
- Number of Tests: 3 (median result)
```

---

## Core Web Vitals Optimization

### Largest Contentful Paint (LCP)

**Target: < 2.5s**

Optimize:
- ✅ Preload hero images
- ✅ Use CDN for images
- ✅ Optimize server response time (< 600ms)
- ✅ Eliminate render-blocking resources
- ✅ Lazy load below-fold content

```tsx
// Preload LCP image
<head>
  <link rel="preload" as="image" href="hero.jpg" fetchpriority="high" />
</head>

// Hero image
<img
  src="hero.jpg"
  alt="Hero"
  loading="eager"
  fetchpriority="high"
  width="1920"
  height="1080"
/>
```

### First Input Delay (FID) / Interaction to Next Paint (INP)

**Target FID: < 100ms**  
**Target INP: < 200ms**

Optimize:
- ✅ Minimize JavaScript execution time
- ✅ Break up long tasks (< 50ms)
- ✅ Use web workers for heavy computations
- ✅ Defer non-critical JavaScript

```tsx
// Break up long tasks
async function processItems(items) {
  for (let i = 0; i < items.length; i++) {
    processItem(items[i]);
    
    // Yield to main thread every 50 items
    if (i % 50 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
}
```

### Cumulative Layout Shift (CLS)

**Target: < 0.1**

Optimize:
- ✅ Set width/height on images and videos
- ✅ Reserve space for ads and embeds
- ✅ Avoid inserting content above existing content
- ✅ Use CSS `aspect-ratio`

```tsx
// ✅ DO: Set dimensions
<img
  src="product.jpg"
  alt="Product"
  width="400"
  height="400"
  className="w-full h-auto"
/>

// ✅ DO: Reserve space with aspect-ratio
<div className="aspect-square">
  <img src="product.jpg" alt="Product" className="w-full h-full object-cover" />
</div>

// ❌ DON'T: No dimensions
<img src="product.jpg" alt="Product" className="w-full" />
```

---

## Monitoring & Measurement

### Real User Monitoring (RUM)

```tsx
// Web Vitals library
import { getCLS, getFID, getLCP } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

// Send to analytics
function sendToAnalytics(metric) {
  const body = JSON.stringify(metric);
  
  // Use sendBeacon for reliability
  if (navigator.sendBeacon) {
    navigator.sendBeacon('/analytics', body);
  } else {
    fetch('/analytics', { body, method: 'POST', keepalive: true });
  }
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
```

### Performance Observer

```tsx
// Monitor long tasks
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 50) {
      console.warn('Long task detected:', entry);
    }
  }
});

observer.observe({ entryTypes: ['longtask'] });
```

### Lighthouse CI

```bash
# Run Lighthouse in CI
npm install -g @lhci/cli

# Configure
# lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000/"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}

# Run
lhci autorun
```

---

## Performance Checklist

### Initial Load

- [ ] HTML < 30KB (gzipped)
- [ ] CSS < 50KB (critical inline, rest async)
- [ ] JavaScript < 150KB (initial bundle)
- [ ] Images < 300KB (total for visible content)
- [ ] Total page weight < 600KB
- [ ] LCP < 2.5s on Fast 3G
- [ ] FCP < 1.8s on Fast 3G
- [ ] TTI < 3.8s on Fast 3G

### Images

- [ ] Responsive images with `srcset`
- [ ] Modern formats (WebP/AVIF) with fallbacks
- [ ] Lazy loading for below-fold images
- [ ] Width/height attributes set
- [ ] Hero images preloaded
- [ ] Images served from CDN

### JavaScript

- [ ] Code splitting by route
- [ ] Lazy load non-critical components
- [ ] Tree shaking enabled
- [ ] No unused dependencies
- [ ] Minified and gzipped

### CSS

- [ ] Critical CSS inlined
- [ ] Unused CSS purged
- [ ] Minified and gzipped

### Fonts

- [ ] WOFF2 format
- [ ] Font subsetting
- [ ] `font-display: swap`
- [ ] Preload critical fonts

### Network

- [ ] HTTP/2 or HTTP/3
- [ ] Compression enabled (gzip/brotli)
- [ ] CDN for static assets
- [ ] Resource hints (preconnect, dns-prefetch)

---

## Common Mistakes

❌ Loading all JavaScript upfront (no code splitting)  
❌ Not optimizing images (serving full-size images)  
❌ Lazy loading hero images (delays LCP)  
❌ Not setting image dimensions (causes CLS)  
❌ Blocking render with CSS/JS  
❌ Not testing on 3G connections  
❌ Loading heavy libraries for simple features  
❌ Animating layout properties (width, height, top, left)  
❌ No performance monitoring  
❌ Not using compression (gzip/brotli)

---

## Resources

- [web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Can I Use](https://caniuse.com/)
- [Bundlephobia](https://bundlephobia.com/) - Check npm package sizes