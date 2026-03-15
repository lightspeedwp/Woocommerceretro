/**
 * routes.minimal.ts - MINIMAL Router Configuration for Figma Make
 *
 * Defines essential routes to reduce initial bundle parse time.
 * This is a temporary workaround for the IframeMessageAbortError.
 * Full routes.ts preserved for production use.
 *
 * Includes: Homepage, header nav links (Shop, Deals, Community, About,
 * Sitemap), Dev Tools, Retro Demo pages, and 404 catch-all.
 */

import { createBrowserRouter, Navigate } from 'react-router';
import React from 'react';
import { RootLayout } from './src/app/RootLayout';

// Homepage + 404
const FrontPageRetro = React.lazy(() => import('./src/app/components/templates/FrontPageRetro').then((m) => ({ default: m.FrontPageRetro })));
const PageNotFoundRetro = React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then((m) => ({ default: m.PageNotFoundRetro })));

// Header nav destinations
const ArchiveProductRetro = React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then((m) => ({ default: m.ArchiveProductRetro })));
const PageAboutRetro = React.lazy(() => import('./src/app/components/templates/PageAboutRetro').then((m) => ({ default: m.PageAboutRetro })));
const PageCommunityRetro = React.lazy(() => import('./src/app/components/templates/PageCommunityRetro').then((m) => ({ default: m.PageCommunityRetro })));
const Sitemap = React.lazy(() => import('./src/app/components/pages/Sitemap').then((m) => ({ default: m.Sitemap })));

// Dev Tools
const DevToolsLayout = React.lazy(() => import('./src/app/components/templates/DevToolsLayout').then((m) => ({ default: m.DevToolsLayout })));
const DevToolsIndex = React.lazy(() => import('./src/app/components/pages/DevToolsIndex').then((m) => ({ default: m.DevToolsIndex })));

// Retro Demo
const RetroDemoIndex = React.lazy(() => import('./src/app/components/templates/RetroDemoIndex').then((m) => ({ default: m.RetroDemoIndex })));
const RetroDemoLandingPage = React.lazy(() => import('./src/app/components/templates/RetroDemoLandingPage').then((m) => ({ default: m.RetroDemoLandingPage })));

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
      // Home
      { index: true, element: React.createElement(FrontPageRetro) },

      // Header nav: SHOP
      { path: 'shop', element: React.createElement(ArchiveProductRetro) },
      { path: 'shop/all', element: React.createElement(ArchiveProductRetro) },
      { path: 'shop/all-products', element: React.createElement(ArchiveProductRetro) },
      { path: 'shop/category/:categorySlug', element: React.createElement(ArchiveProductRetro) },
      { path: 'shop/filtered', element: React.createElement(ArchiveProductRetro) },

      // Header nav: DEALS
      { path: 'promotions/flash-sale', element: React.createElement(ArchiveProductRetro) },
      { path: 'deals', element: React.createElement(ArchiveProductRetro) },
      { path: 'sale', element: React.createElement(ArchiveProductRetro) },

      // Header nav: COMMUNITY
      { path: 'community', element: React.createElement(PageCommunityRetro) },

      // Header nav: ABOUT
      { path: 'about', element: React.createElement(PageAboutRetro) },

      // Header nav: ALL PAGES (Sitemap)
      { path: 'sitemap', element: React.createElement(Sitemap) },

      // Dev Tools
      {
        path: 'dev-tools',
        element: React.createElement(DevToolsLayout),
        children: [
          { index: true, element: React.createElement(DevToolsIndex) },
        ],
      },

      // Retro Demo
      { path: 'retro-demo', element: React.createElement(RetroDemoIndex) },
      { path: 'retro-demo/landing-page', element: React.createElement(RetroDemoLandingPage) },

      // Catch-all 404
      { path: '*', element: React.createElement(PageNotFoundRetro) },
    ],
  },
]);
