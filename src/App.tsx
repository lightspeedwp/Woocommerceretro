/**
 * App.tsx - Main Application Entry Point
 * 
 * Wraps the router with essential context providers only.
 * Updated: March 2026 - Minimal providers for Figma Make stability
 */

import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ThemeProvider } from './src/app/contexts/ThemeContext';
import { CartProvider } from './src/app/contexts/CartContext';
import { WishlistProvider } from './src/app/contexts/WishlistContext';
import { QuickViewProvider } from './src/app/contexts/QuickViewContext';
import { ComparisonProvider } from './src/app/contexts/ComparisonContext';

const App = () => {
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

export default App;