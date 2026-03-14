/**
 * App.tsx - Main Application Entry Point
 * 
 * Wraps the router with all necessary context providers.
 * Updated: March 2026 - Restored full routes after CSS optimization
 */

import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes'; // Using full routes (CSS optimized, safe to use)
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