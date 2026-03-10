/**
 * RootLayout Component
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No destructured imports (Legacy syntax)
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
var Suspense = React.Suspense;
import * as ReactRouterModule from 'react-router';
var Outlet = ReactRouterModule.Outlet;
import * as ScrollToTopModule from './components/common/ScrollToTop';
var ScrollToTop = ScrollToTopModule.ScrollToTop;
import * as QuickViewModule from './components/patterns/QuickView';
var QuickView = QuickViewModule.QuickView;
import * as ComparisonBarModule from './components/blocks/product/ComparisonBar';
var ComparisonBar = ComparisonBarModule.ComparisonBar;
import * as ErrorBoundaryModule from './components/common/ErrorBoundary';
var ErrorBoundary = ErrorBoundaryModule.ErrorBoundary;
import * as PerformanceMonitorModule from './components/developer/PerformanceMonitor';
var PerformanceMonitor = PerformanceMonitorModule.PerformanceMonitor;
import * as AccessibilityCheckerModule from './components/developer/AccessibilityChecker';
var AccessibilityChecker = AccessibilityCheckerModule.AccessibilityChecker;

function PageLoadingFallback() {
  var spinner = React.createElement('div', { key: 'spinner', className: "wp-page-loading__spinner" });
  var text = React.createElement('small', { key: 'text', className: "wp-page-loading__text" }, "Loading...");
  
  var inner = React.createElement('div', { 
    key: 'inner',
    className: "wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center" 
  }, [spinner, text]);

  return React.createElement('div', { className: "wp-page-loading" }, [inner]);
}

export function RootLayout() {
  var scroll = React.createElement(ScrollToTop, { key: 'scroll' });
  var perf = React.createElement(PerformanceMonitor, { key: 'perf' });
  var a11y = React.createElement(AccessibilityChecker, { key: 'a11y' });
  
  var outlet = React.createElement(Outlet, { key: 'outlet' });
  var suspense = React.createElement(Suspense, { 
    key: 'suspense',
    fallback: React.createElement(PageLoadingFallback, null) 
  }, [outlet]);

  var errorBoundary = React.createElement(ErrorBoundary, { key: 'error' }, [suspense]);
  
  var quickView = React.createElement(QuickView, { key: 'quick' });
  var comparison = React.createElement(ComparisonBar, { key: 'comp' });

  return React.createElement(React.Fragment, null, [
    scroll,
    perf,
    a11y,
    errorBoundary,
    quickView,
    comparison
  ]);
}

RootLayout.displayName = 'RootLayout';
