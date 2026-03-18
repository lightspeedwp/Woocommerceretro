/**
 * App.tsx - Main Application Entry Point
 *
 * The ENTIRE provider + router tree is lazy-loaded so that App.tsx
 * renders instantly (just a Suspense shell). This gives the Figma Make
 * iframe enough time to complete its message-port handshake before
 * the browser starts evaluating routes.ts (100+ lazy imports) and
 * the five context providers.
 *
 * Updated: March 17, 2026 - Lazy shell to fix IframeMessageAbortError
 */

import React, { Suspense } from 'react';

const ProvidedApp = React.lazy(
  () => import('./src/app/ProvidedApp')
);

const AppShellFallback = () => (
  <div className="wp-page-loading">
    <div className="wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center">
      <div className="wp-page-loading__spinner" />
      <small className="wp-page-loading__text">Loading...</small>
    </div>
  </div>
);

const App = () => {
  return (
    <Suspense fallback={<AppShellFallback />}>
      <ProvidedApp />
    </Suspense>
  );
};

export default App;
