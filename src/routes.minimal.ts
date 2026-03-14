/**
 * routes.minimal.ts - MINIMAL Router Configuration for Figma Make
 *
 * Defines only essential routes to reduce initial bundle parse time.
 * This is a temporary workaround for the IframeMessageAbortError.
 * Full routes.ts preserved for production use.
 */

import { createBrowserRouter, Navigate } from 'react-router';
import React from 'react';
import { RootLayout } from './src/app/RootLayout';

// Only load homepage + 404 for Figma Make preview
const FrontPageRetro = React.lazy(() => import('./src/app/components/templates/FrontPageRetro').then((m) => ({ default: m.FrontPageRetro })));
const PageNotFoundRetro = React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then((m) => ({ default: m.PageNotFoundRetro })));

const HydrateFallback = () => {
  return React.createElement(
    'div',
    { className: 'wp-page-loading' },
    React.createElement(
      'div',
      { className: 'wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center' },
      React.createElement('div', { className: 'wp-page-loading__spinner' }),
      React.createElement('small', { className: 'wp-page-loading__text' }, 'Loading...')
    )
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(RootLayout),
    HydrateFallback,
    children: [
      {
        index: true,
        element: React.createElement(FrontPageRetro),
      },
      {
        path: '*',
        element: React.createElement(PageNotFoundRetro),
      },
    ],
  },
]);
