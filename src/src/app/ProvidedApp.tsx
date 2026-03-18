/**
 * ProvidedApp.tsx — Deferred Provider + Router Shell
 *
 * Lazy-loaded by App.tsx so the iframe handshake completes BEFORE
 * React parses the context providers, router config, and route tree.
 * This prevents the IframeMessageAbortError caused by the message port
 * timing out while the browser is busy evaluating 100+ lazy route imports.
 */

import { RouterProvider } from 'react-router';
import { router } from '../../routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { QuickViewProvider } from './contexts/QuickViewContext';
import { ComparisonProvider } from './contexts/ComparisonContext';

export const ProvidedApp = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <QuickViewProvider>
            <ComparisonProvider>
              <RouterProvider router={router} />
            </ComparisonProvider>
          </QuickViewProvider>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default ProvidedApp;
