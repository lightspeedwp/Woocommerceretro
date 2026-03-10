/**
 * App.tsx - Entry Point
 * 
 * Bootstraps the application with Context Providers and RouterProvider.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No trailing commas
 * 4. No destructured imports (Legacy syntax with named exports)
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
var RouterProvider = ReactRouterModule.RouterProvider;
import * as RouterModule from '../routes';
var router = RouterModule.router;

// Context Providers (named exports)
import * as ThemeContextModule from './app/contexts/ThemeContext';
var ThemeProvider = ThemeContextModule.ThemeProvider;
import * as CartContextModule from './app/contexts/CartContext';
var CartProvider = CartContextModule.CartProvider;
import * as WishlistContextModule from './app/contexts/WishlistContext';
var WishlistProvider = WishlistContextModule.WishlistProvider;
import * as ComparisonContextModule from './app/contexts/ComparisonContext';
var ComparisonProvider = ComparisonContextModule.ComparisonProvider;
import * as QuickViewContextModule from './app/contexts/QuickViewContext';
var QuickViewProvider = QuickViewContextModule.QuickViewProvider;

function App() {
  var routerProvider = React.createElement(RouterProvider, { router: router });
  
  var comparisonProvider = React.createElement(ComparisonProvider, null, routerProvider);
  var quickViewProvider = React.createElement(QuickViewProvider, null, comparisonProvider);
  var wishlistProvider = React.createElement(WishlistProvider, null, quickViewProvider);
  var cartProvider = React.createElement(CartProvider, null, wishlistProvider);
  var themeProvider = React.createElement(ThemeProvider, null, cartProvider);
  
  return themeProvider;
}

export default App;
// Trigger Vite rebuild 2
