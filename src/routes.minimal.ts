/**
 * routes.minimal.ts - Minimal Router for Figma Make Preview
 *
 * Includes core pages referenced by mega menu navigation.
 * Keep under ~20 routes to prevent IframeMessageAbortError.
 * Full route configuration lives in routes.ts.
 *
 * Updated: March 2026
 */

import { createBrowserRouter } from 'react-router';
import React from 'react';
import { RootLayout } from './src/app/RootLayout';

const HydrateFallback = () =>
  React.createElement('div', { className: 'wp-page-loading' },
    React.createElement('div', { className: 'wp-block-group wp-block-group--vertical wp-block-group--spacing-md has-text-align-center' },
      React.createElement('div', { className: 'wp-page-loading__spinner' }),
      React.createElement('small', { className: 'wp-page-loading__text' }, 'Loading...')
    )
  );

/* ── Lazy-loaded route components ── */

const FrontPage = React.lazy(() => import('./src/app/components/templates/FrontPageRetro').then(m => ({ default: m.FrontPageRetro })));
const Shop = React.lazy(() => import('./src/app/components/templates/ArchiveProductRetro').then(m => ({ default: m.ArchiveProductRetro })));
const SingleProduct = React.lazy(() => import('./src/app/components/templates/SingleProductRetro').then(m => ({ default: m.SingleProductRetro })));
const Cart = React.lazy(() => import('./src/app/components/templates/PageCartRetro').then(m => ({ default: m.PageCartRetro })));
const Blog = React.lazy(() => import('./src/app/components/templates/ArchiveBlogRetro').then(m => ({ default: m.ArchiveBlogRetro })));
const SinglePost = React.lazy(() => import('./src/app/components/templates/SinglePostRetro').then(m => ({ default: m.SinglePostRetro })));
const About = React.lazy(() => import('./src/app/components/templates/PageAboutRetro').then(m => ({ default: m.PageAboutRetro })));
const Contact = React.lazy(() => import('./src/app/components/templates/PageContactRetro').then(m => ({ default: m.PageContactRetro })));
const NotFound = React.lazy(() => import('./src/app/components/templates/PageNotFoundRetro').then(m => ({ default: m.PageNotFoundRetro })));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    HydrateFallback,
    children: [
      { index: true, Component: FrontPage },

      /* Shop */
      { path: 'shop', Component: Shop },
      { path: 'category/:slug', Component: Shop },
      { path: 'sale', Component: Shop },
      { path: 'deals', Component: Shop },
      { path: 'product/:slug', Component: SingleProduct },

      /* Cart */
      { path: 'cart', Component: Cart },

      /* Blog */
      { path: 'blog', Component: Blog },
      { path: 'blog/:slug', Component: SinglePost },

      /* Info */
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },

      /* 404 */
      { path: '*', Component: NotFound },
    ],
  },
]);
