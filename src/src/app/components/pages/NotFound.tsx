/**
 * NotFound.tsx - Page Block
 * 
 * 404 Not Found Page template.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import { House as Home, MagnifyingGlass as Search, Bag as ShoppingBag } from '@phosphor-icons/react';
import * as ProductCardModule from '../blocks/product/ProductCard';
import * as ProductsModule from '../../data/products';

var Link = ReactRouterModule.Link;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var ProductCard = ProductCardModule.ProductCard;
var products = ProductsModule.products;

export function NotFound() {
  var suggestedProducts = products
    .filter(function(p) { return p.inStock; })
    .sort(function() { return 0.5 - Math.random(); })
    .slice(0, 4);

  var title = React.createElement('h1', { className: "wp-404-title" }, 'Page Not Found');
  var description = React.createElement('p', { className: "wp-404-description" }, "Oops! The page you're looking for doesn't exist. It might have been moved or deleted.");

  var primaryAction = React.createElement(Link, { to: "/", className: "wp-404-action-primary" }, [
    React.createElement(Home, { size: 20 }),
    ' Go to Homepage'
  ]);

  var secondaryAction = React.createElement(Link, { to: "/shop", className: "wp-404-action-secondary" }, [
    React.createElement(ShoppingBag, { size: 20 }),
    ' Browse Shop'
  ]);

  var actions = React.createElement('div', { className: "wp-404-actions" }, [primaryAction, secondaryAction]);

  var searchLabel = React.createElement('label', { htmlFor: "search-404", className: "wp-404-search-label" }, 
    React.createElement('small', { className: "wp-404-search-hint" }, 'Looking for something specific?')
  );

  var searchInput = React.createElement('input', {
    id: "search-404",
    type: "text",
    placeholder: "Search for products...",
    className: "wp-404-search-input"
  });

  var searchButton = React.createElement('button', {
    className: "wp-404-search-button",
    "aria-label": "Search"
  }, React.createElement(Search, { size: 20 }));

  var searchWrapper = React.createElement('div', { className: "wp-404-search-wrapper" }, [searchInput, searchButton]);
  var searchSection = React.createElement('div', { className: "wp-404-search" }, [searchLabel, searchWrapper]);

  var content = React.createElement('div', { className: "wp-404-content" }, [title, description, actions, searchSection]);

  var suggestionsTitle = React.createElement('h2', { className: "wp-404-suggestions-title" }, 'You Might Be Interested In');
  var suggestionsGrid = React.createElement('div', { className: "wp-404-suggestions-grid" }, 
    suggestedProducts.map(function(product) {
      return React.createElement(ProductCard, { key: product.id, product: product });
    })
  );

  var viewAllLink = React.createElement('div', { className: "wp-404-suggestions-link" },
    React.createElement(Link, { to: "/shop", className: "wp-404-view-all-link" }, 'View All Products \u2192')
  );

  var suggestions = React.createElement('div', { className: "wp-404-suggestions" }, [suggestionsTitle, suggestionsGrid, viewAllLink]);

  var mainContainer = React.createElement(Container, { variant: "content", className: "wp-404-container" }, [content, suggestions]);

  // Help Section
  var helpItems = [
    {
      icon: ShoppingBag,
      title: 'Browse Categories',
      desc: 'Explore our product categories',
      link: '/shop',
      linkText: 'Shop Now \u2192',
      color: 'purple'
    },
    {
      icon: Search,
      title: 'Search Products',
      desc: 'Find exactly what you need',
      link: '/shop/search',
      linkText: 'Start Searching \u2192',
      color: 'blue'
    }
  ].map(function(item) {
    return React.createElement('div', { className: "wp-404-help-item", key: item.title }, [
      React.createElement('div', { className: "wp-404-help-icon wp-404-help-icon-" + item.color }, 
        React.createElement(item.icon, { className: "wp-404-help-icon-svg", size: 24 })
      ),
      React.createElement('h3', null, item.title),
      React.createElement('p', { className: "wp-404-help-description" }, React.createElement('small', null, item.desc)),
      React.createElement(Link, { to: item.link, className: "wp-404-help-link" }, React.createElement('small', null, item.linkText))
    ]);
  });

  var helpGrid = React.createElement('div', { className: "wp-404-help-grid" }, helpItems);
  var helpContainer = React.createElement(Container, { variant: "site", className: "wp-404-help-container" }, helpGrid);
  var helpSection = React.createElement('div', { className: "wp-404-help-section" }, helpContainer);

  return React.createElement(Layout, null, [mainContainer, helpSection]);
}

NotFound.displayName = 'NotFound';