import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as ContainerModule from '../../common/Container';
import * as TypographyModule from '../../common/Typography';

var Link = ReactRouterModule.Link;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;

var BRANDS = [
  { name: 'KWV Classic Collection', logo: null, link: '/shop/brands/kwv-classic-collection' },
  { name: 'Laborie', logo: null, link: '/shop/brands/laborie' },
  { name: 'Roodeberg', logo: null, link: '/shop/brands/roodeberg' },
  { name: 'Cathedral Cellar', logo: null, link: '/shop/brands/cathedral-cellar' },
  { name: 'Annabelle', logo: null, link: '/shop/brands/annabelle' },
  { name: 'KWV House of Brandy', logo: null, link: '/shop/brands/kwv-brandy' },
  { name: 'Imagin', logo: null, link: '/shop/brands/imagin-gin' },
  { name: 'Cruxland', logo: null, link: '/shop/brands/cruxland-gin' },
  { name: 'Wild Africa Cream', logo: null, link: '/shop/brands/wild-africa-cream' },
];

/**
 * ShopBrandGrid Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 */
export function ShopBrandGrid() {
  var header = React.createElement('div', { key: 'header', className: "wp-shop-brand-grid__header" }, [
    React.createElement(Typography, { key: 't', variant: "h2", className: "wp-shop-brand-grid__title" }, "Shop Our Famous Brands"),
    React.createElement('div', { key: 'd', className: "wp-shop-brand-grid__divider" })
  ]);

  var cards = BRANDS.map(function(brand, idx) {
    return React.createElement(Link, {
      key: idx,
      to: brand.link,
      className: "wp-brand-card group"
    }, 
      React.createElement('div', { className: "wp-brand-card__inner" }, [
        React.createElement(Typography, { key: 'n', variant: "h3", className: "wp-brand-card__name" }, brand.name),
        React.createElement('div', { key: 'd', className: "wp-brand-card__divider" }),
        React.createElement('span', { key: 'e', className: "wp-brand-card__established" }, "Est. 1918")
      ])
    );
  });

  var grid = React.createElement('div', { key: 'grid', className: "wp-shop-brand-grid__grid" }, cards);

  return React.createElement('div', { className: "wp-shop-brand-grid" }, 
    React.createElement(Container, { variant: "site" }, [header, grid])
  );
}