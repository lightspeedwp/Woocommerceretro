import React from 'react';
import * as HeaderModule from './Header';
import * as BreadcrumbsBarModule from './BreadcrumbsBar';
import * as FooterModule from './Footer';
import * as BackToTopModule from '../common/BackToTopButton';
import * as SkipNavModule from '../common/SkipNavigation';
import * as CookieModule from '../common/CookieConsent';

var Header = HeaderModule.Header;
var BreadcrumbsBar = BreadcrumbsBarModule.BreadcrumbsBar;
var Footer = FooterModule.Footer;
var BackToTopButton = BackToTopModule.BackToTopButton;
var SkipNavigation = SkipNavModule.SkipNavigation;
var CookieConsent = CookieModule.CookieConsent;

/**
 * Layout Component (Main Template Part)
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
export function Layout(props) {
  var children = props.children;
  
  return React.createElement('div', { className: "wp-layout funky-layout" },
    /* Accessibility: Skip to main content link */
    React.createElement(SkipNavigation, null),
    
    /* Floating back-to-top button */
    React.createElement(BackToTopButton, null),
    
    /* Global site header */
    React.createElement(Header, null),
    
    /* Main content area with proper ARIA landmark */
    React.createElement('main', { 
      id: "main-content", 
      className: "wp-site-main", 
      tabIndex: -1,
      role: "main",
      "aria-label": "Main content"
    },
      /* Dynamic breadcrumb navigation */
      React.createElement(BreadcrumbsBar, null),
      
      /* Page content */
      children
    ),
    
    /* Global site footer with proper ID for skip link */
    React.createElement(Footer, { id: "footer" }),
    
    /* Cookie consent banner */
    React.createElement(CookieConsent, null)
  );
}