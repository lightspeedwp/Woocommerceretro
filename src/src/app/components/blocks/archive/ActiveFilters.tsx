import React from 'react';
import { X } from '@phosphor-icons/react';

/**
 * ActiveFilters Block Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function ActiveFilters(props) {
  var filters = props.filters;
  var onClear = props.onClear;
  var onClearAll = props.onClearAll;

  var hasActiveFilters = 
    filters.categories.length > 0 || 
    filters.colors.length > 0 || 
    filters.sizes.length > 0 || 
    filters.rating !== null ||
    filters.inStock ||
    filters.priceRange[0] > 0 || filters.priceRange[1] < 500;

  if (!hasActiveFilters) return null;

  var chips = [];

  filters.categories.forEach(function(cat) {
    chips.push(React.createElement('span', { key: cat, className: "wp-filter-chip funky-filter-chip" },
      React.createElement('span', { className: "wp-filter-chip__text" }, cat),
      React.createElement('button', { 
        onClick: function() { onClear('categories', cat); },
        className: "wp-filter-chip__remove funky-chip-remove",
        'aria-label': "Remove " + cat + " filter"
      }, React.createElement(X, { className: "wp-filter-chip__icon" }))
    ));
  });

  filters.colors.forEach(function(color) {
    chips.push(React.createElement('span', { key: color, className: "wp-filter-chip funky-filter-chip" },
      React.createElement('span', { className: "wp-filter-chip__text" }, color),
      React.createElement('button', { 
        onClick: function() { onClear('colors', color); },
        className: "wp-filter-chip__remove funky-chip-remove",
        'aria-label': "Remove " + color + " filter"
      }, React.createElement(X, { className: "wp-filter-chip__icon" }))
    ));
  });

  filters.sizes.forEach(function(size) {
    chips.push(React.createElement('span', { key: size, className: "wp-filter-chip funky-filter-chip" },
      React.createElement('span', { className: "wp-filter-chip__text" }, size),
      React.createElement('button', { 
        onClick: function() { onClear('sizes', size); },
        className: "wp-filter-chip__remove funky-chip-remove",
        'aria-label': "Remove " + size + " filter"
      }, React.createElement(X, { className: "wp-filter-chip__icon" }))
    ));
  });

  if (filters.rating !== null) {
    chips.push(React.createElement('span', { key: "rating", className: "wp-filter-chip funky-filter-chip" },
      React.createElement('span', { className: "wp-filter-chip__text" }, filters.rating + "+ stars"),
      React.createElement('button', { 
        onClick: function() { onClear('rating', null); },
        className: "wp-filter-chip__remove funky-chip-remove",
        'aria-label': "Remove rating filter"
      }, React.createElement(X, { className: "wp-filter-chip__icon" }))
    ));
  }

  if (filters.inStock) {
    chips.push(React.createElement('span', { key: "inStock", className: "wp-filter-chip funky-filter-chip" },
      React.createElement('span', { className: "wp-filter-chip__text" }, "In Stock"),
      React.createElement('button', { 
        onClick: function() { onClear('inStock', false); },
        className: "wp-filter-chip__remove funky-chip-remove",
        'aria-label': "Remove in stock filter"
      }, React.createElement(X, { className: "wp-filter-chip__icon" }))
    ));
  }

  if (filters.priceRange[0] > 0 || filters.priceRange[1] < 500) {
    chips.push(React.createElement('span', { key: "price", className: "wp-filter-chip funky-filter-chip" },
      React.createElement('span', { className: "wp-filter-chip__text" }, 
        "$" + filters.priceRange[0] + " - $" + filters.priceRange[1]
      ),
      React.createElement('button', { 
        onClick: function() { onClear('priceRange', [0, 500]); },
        className: "wp-filter-chip__remove funky-chip-remove",
        'aria-label': "Remove price filter"
      }, React.createElement(X, { className: "wp-filter-chip__icon" }))
    ));
  }

  return React.createElement('div', { className: "wp-active-filters funky-active-filters" },
    React.createElement('div', { className: "wp-active-filters__header" },
      React.createElement('span', { className: "wp-active-filters__label" }, "Active Filters:"),
      React.createElement('button', { 
        onClick: onClearAll,
        className: "wp-active-filters__clear funky-clear-btn"
      }, "Clear All")
    ),
    React.createElement('div', { className: "wp-active-filters__chips" }, chips)
  );
}

ActiveFilters.displayName = 'ActiveFilters';