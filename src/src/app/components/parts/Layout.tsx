import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { BackToTopButton } from '../common/BackToTopButton';
import { SkipNavigation } from '../common/SkipNavigation';
import { CookieConsent } from '../common/CookieConsent';

/**
 * Layout Component (Main Template Part)
 *
 * Root layout wrapper providing global header, footer,
 * accessibility skip links, back-to-top button, and cookie consent.
 * Breadcrumbs are now handled sitewide by SiteLayout > SiteBreadcrumb.
 */

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="wp-layout funky-layout">
      {/* Accessibility: Skip to main content link */}
      <SkipNavigation />

      {/* Floating back-to-top button */}
      <BackToTopButton />

      {/* Global site header */}
      <Header />

      {/* Main content area with proper ARIA landmark */}
      <main
        id="main-content"
        className="wp-site-main"
        tabIndex={-1}
        role="main"
        aria-label="Main content"
      >
        {/* Page content */}
        {children}
      </main>

      {/* Global site footer with proper ID for skip link */}
      <Footer id="footer" />

      {/* Cookie consent banner */}
      <CookieConsent />
    </div>
  );
}