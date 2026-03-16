/**
 * RootLayout Component
 *
 * Top-level layout wrapper providing suspense fallback,
 * scroll restoration, and global font loading.
 * WCAG AA 2.2 compliant.
 *
 * NOTE: QuickView, ComparisonBar, and ErrorBoundary overlays are
 * loaded lazily to stay within Figma Make's iframe timeout budget.
 */

import { Suspense, useEffect, lazy, Component, type ReactNode } from 'react';
import { Outlet } from 'react-router';
import { ScrollToTop } from './components/common/ScrollToTop';

const GOOGLE_FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Silkscreen&family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap';

const PageLoadingFallback = () => (
  <div className="wp-page-loading">
    <div className="wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center">
      <div className="wp-page-loading__spinner" />
      <small className="wp-page-loading__text">Loading...</small>
    </div>
  </div>
);

/* Inline lightweight error boundary — avoids importing ErrorBoundary.tsx
   (which pulls in lucide-react + Link) during the critical startup path. */
class LightErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="wp-page-loading">
          <div className="wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center">
            <p>Something went wrong.</p>
            <button onClick={() => window.location.reload()}>Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export const RootLayout = () => {
  useEffect(() => {
    const existing = document.querySelector(
      `link[href="${GOOGLE_FONTS_URL}"]`
    );
    if (existing) return;

    const link = document.createElement('link');
    link.href = GOOGLE_FONTS_URL;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <>
      <ScrollToTop />
      <LightErrorBoundary>
        <Suspense fallback={<PageLoadingFallback />}>
          <Outlet />
        </Suspense>
      </LightErrorBoundary>
    </>
  );
}

RootLayout.displayName = 'RootLayout';
