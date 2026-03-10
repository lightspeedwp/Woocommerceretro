/**
 * App.tsx - Entry Point
 * 
 * Bootstraps the application with Context Providers and RouterProvider.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No trailing commas
 * 4. No destructured imports (Legacy syntax with named exports)
 * 5. No re-exports (direct component definition)
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
var RouterProvider = ReactRouterModule.RouterProvider;
import * as RouterModule from './routes';
var router = RouterModule.router;

import * as ThemeContextModule from './src/app/contexts/ThemeContext';
var ThemeProvider = ThemeContextModule.ThemeProvider;
import * as CartContextModule from './src/app/contexts/CartContext';
var CartProvider = CartContextModule.CartProvider;
import * as WishlistContextModule from './src/app/contexts/WishlistContext';
var WishlistProvider = WishlistContextModule.WishlistProvider;
import * as ComparisonContextModule from './src/app/contexts/ComparisonContext';
var ComparisonProvider = ComparisonContextModule.ComparisonProvider;
import * as QuickViewContextModule from './src/app/contexts/QuickViewContext';
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
