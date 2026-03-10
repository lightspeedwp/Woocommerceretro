import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;
import * as ContainerModule from '../../common/Container';

var Container = ContainerModule.Container;

/**
 * CategoryTilesGrid Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function CategoryTilesGrid(props) {
  var categories = props.categories;

  var tiles = categories.map(function(cat) {
    return React.createElement(Link, {
      key: cat,
      to: "/shop/category/" + cat.toLowerCase(),
      className: "wp-category-tiles__tile"
    }, React.createElement('span', { className: "wp-category-tiles__label" }, 
      React.createElement('strong', null, cat)
    ));
  });

  var grid = React.createElement('div', { key: 'grid', className: "wp-category-tiles__grid" }, tiles);

  var heading = React.createElement('h2', { key: 'h', className: "wp-category-tiles__heading" }, "Browse by Category");

  var inner = React.createElement(Container, null, [heading, grid]);

  return React.createElement('section', { className: "wp-category-tiles" }, inner);
}