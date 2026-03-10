import React from 'react';
import * as ReactRouterModule from 'react-router';
import { MagnifyingGlass } from '@phosphor-icons/react';

var useSearchParams = ReactRouterModule.useSearchParams;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as ShopSidebarModule from '../parts/ShopSidebar';
import * as ProductCardModule from '../blocks/product/ProductCard';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var ShopSidebar = ShopSidebarModule.ShopSidebar;
var ProductCard = ProductCardModule.ProductCard;

/**
 * ProductSearchResults Template
 * 
 * Displays search results specifically for the Shop section.
 * Features a sidebar filter and a grid of matching products.
 * 
 * @template
 * @route /shop/search?q=keyword
 */
export function ProductSearchResults() {
  var searchParamsResult = useSearchParams();
  var searchParams = searchParamsResult[0];
  var query = searchParams.get('q') || '';
  var hasResults = query.toLowerCase() !== 'no results';

  var products = [
    {
      id: '1',
      name: 'Roodeberg Classic Red 2021',
      brand: 'Roodeberg',
      price: 129.00,
      image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800',
      inStock: true
    },
    {
      id: '2',
      name: 'KWV 10 Year Old Brandy',
      brand: 'KWV Brandy',
      price: 349.00,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=800',
      inStock: true
    },
    {
      id: '4',
      name: 'Mentors Orchestra 2020',
      brand: 'The Mentors',
      price: 299.00,
      image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=800',
      inStock: true
    }
  ];

  return React.createElement(Layout, null,
    React.createElement('div', { className: "search-results__header funky-hero", style: { minHeight: '30vh', background: 'var(--wp--preset--gradient--commerce)' } },
      React.createElement(Container, { variant: "site" },
        React.createElement(Typography, { variant: "h2", style: { color: '#fff' } }, "Search results: \"" + query + "\"")
      ),
      React.createElement('div', { className: 'funky-orb funky-animate-float', style: { position: 'absolute', right: '10%', top: '10%', width: '200px', height: '200px', background: 'var(--wp--preset--color--neon-pink)', opacity: 0.15, filter: 'blur(60px)' } })
    ),
    React.createElement('hr', { className: "funky-section__divider" }),
    React.createElement(Container, { variant: "site", style: { padding: 'var(--wp--preset--spacing--60) 0' } },
      React.createElement('div', { className: "search-results__layout", style: { display: 'flex', gap: 'var(--wp--preset--spacing--60)' } },
        React.createElement('aside', { className: "search-results__sidebar funky-glass-panel", style: { width: '280px', flexShrink: 0, padding: 'var(--wp--preset--spacing--40)' } },
          React.createElement(ShopSidebar, null)
        ),
        React.createElement('div', { className: "search-results__content", style: { flex: 1 } },
          hasResults ? React.createElement(React.Fragment, null,
            React.createElement('div', { className: "search-results__toolbar", style: { display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--wp--preset--spacing--40)' } },
              React.createElement(Typography, { variant: "body", className: "search-results__count" },
                "Showing all " + products.length + " results"
              ),
              React.createElement('div', { className: "search-results__sort" },
                React.createElement('span', { className: "search-results__sort-label", style: { marginRight: '10px' } },
                  React.createElement('small', null, "Sort by")
                ),
                React.createElement('select', { className: "wp-sort-select funky-input" },
                  React.createElement('option', null, "Default"),
                  React.createElement('option', null, "Popularity"),
                  React.createElement('option', null, "Average Rating"),
                  React.createElement('option', null, "Latest"),
                  React.createElement('option', null, "Price: Low to High"),
                  React.createElement('option', null, "Price: High to Low")
                )
              )
            ),
            React.createElement('div', { className: "search-results__grid", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--wp--preset--spacing--40)' } },
              products.map(function(product) {
                return React.createElement(ProductCard, { key: product.id, product: product });
              })
            )
          ) : React.createElement('div', { className: "search-results__empty", style: { textAlign: 'center', padding: 'var(--wp--preset--spacing--80)' } },
            React.createElement('div', { className: "search-results__empty-icon", style: { marginBottom: 'var(--wp--preset--spacing--40)', color: 'var(--wp--preset--color--neon-cyan)' } },
              React.createElement(MagnifyingGlass, { size: 64, weight: 'duotone' })
            ),
            React.createElement(Typography, { variant: "h2", style: { marginBottom: 'var(--wp--preset--spacing--20)' } },
              "No products found for \"" + query + "\""
            ),
            React.createElement('p', { className: "search-results__empty-text" },
              "Try adjusting your search terms or browse our categories."
            )
          )
        )
      )
    )
  );
}