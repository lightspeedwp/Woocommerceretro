/**
 * App.tsx - Main Application Entry Point
 * 
 * Wraps the router with all necessary context providers.
 * Updated: March 2026 - Using minimal routes for Figma Make stability
 */

import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes.minimal'; // FIGMA MAKE FIX: Use minimal routes (2 routes only)
import { ThemeProvider } from './src/app/contexts/ThemeContext';
import { CartProvider } from './src/app/contexts/CartContext';
import { WishlistProvider } from './src/app/contexts/WishlistContext';
import { ComparisonProvider } from './src/app/contexts/ComparisonContext';
import { QuickViewProvider } from './src/app/contexts/QuickViewContext';

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