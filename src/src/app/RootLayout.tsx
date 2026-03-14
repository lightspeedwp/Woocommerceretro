/**
 * RootLayout Component
 *
 * Top-level layout wrapper providing error boundary, suspense fallback,
 * scroll restoration, quick view overlay, comparison bar, and global
 * font loading (single Google Fonts link for entire app lifecycle).
 * WCAG AA 2.2 compliant.
 */

import { Suspense, useEffect, lazy } from 'react';
import { Outlet } from 'react-router';
import { ScrollToTop } from './components/common/ScrollToTop';
import { ErrorBoundary } from './components/common/ErrorBoundary';

// Lazy load heavy overlay components to reduce initial bundle parse time
const QuickView = lazy(() => import('./components/patterns/QuickView').then(m => ({ default: m.QuickView })));
const ComparisonBar = lazy(() => import('./components/blocks/product/ComparisonBar').then(m => ({ default: m.ComparisonBar })));

// Dev tools remain disabled — only needed during development, not in production preview.
// import { PerformanceMonitor } from './components/developer/PerformanceMonitor';
// import { AccessibilityChecker } from './components/developer/AccessibilityChecker';

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Silkscreen&family=Inter:wght@400;500;700&display=swap';

const PageLoadingFallback = () => {
  return (
    <div className="wp-page-loading">
      <div className="wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center">
        <div className="wp-page-loading__spinner" />
        <small className="wp-page-loading__text">Loading...</small>
      </div>
    </div>
  );
}

export const RootLayout = () => {
  // Load Google Fonts once for the entire app lifecycle.
  // Previously each of the 16 retro templates injected and removed
  // this link independently, causing DOM churn on every navigation.
  useEffect(() => {
    const existing = document.querySelector(
      `link[href="${GOOGLE_FONTS_URL}"]`
    );
    if (existing) return;

    const link = document.createElement('link');
    link.href = GOOGLE_FONTS_URL;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    // Intentionally no cleanup — fonts should persist for the app's lifetime.
  }, []);

  return (
    <>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<PageLoadingFallback />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
      <Suspense fallback={null}>
        <QuickView />
        <ComparisonBar />
      </Suspense>
    </>
  );
}

RootLayout.displayName = 'RootLayout';