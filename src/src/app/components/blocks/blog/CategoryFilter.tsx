import React from 'react';
import { X } from '@phosphor-icons/react';

/* Category: { slug: string, name: string } */
/* CategoryFilterProps: { categories, selectedCategory, onCategoryChange, isOpenMobile, onCloseMobile } */

/**
 * CategoryFilter Block
 * 
 * Displays category filter buttons with mobile sheet support.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. No destructuring in parameters
 */
export function CategoryFilter(props) {
  var categories = props.categories;
  var selectedCategory = props.selectedCategory;
  var onCategoryChange = props.onCategoryChange;
  var isOpenMobile = props.isOpenMobile;
  var onCloseMobile = props.onCloseMobile;

  var handleCategoryClick = function(slug) {
    onCategoryChange(slug);
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  var renderCategoryButtons = function() {
    var buttons = [
      React.createElement('button', {
        key: 'all',
        onClick: function() { handleCategoryClick('all'); },
        className: 'wp-button--filter ' + (selectedCategory === 'all' ? 'is-active' : '')
      }, "All Posts")
    ];

    for (var i = 0; i < categories.length; i++) {
      var category = categories[i];
      buttons.push(
        React.createElement('button', {
          key: category.slug,
          onClick: function() { handleCategoryClick(category.slug); },
          className: 'wp-button--filter ' + (selectedCategory === category.slug ? 'is-active' : '')
        }, category.name)
      );
    }

    return buttons;
  };

  var desktopFilter = React.createElement('div', { 
    className: "wp-category-filter wp-category-filter--desktop" 
  }, renderCategoryButtons());

  var mobileFilter = isOpenMobile ? React.createElement('div', { className: "wp-category-filter-mobile" },
    React.createElement('div', { 
      className: "wp-category-filter-mobile__backdrop",
      onClick: onCloseMobile,
      'aria-hidden': "true"
    }),
    React.createElement('div', { className: "wp-category-filter-mobile__drawer" },
      React.createElement('div', { className: "wp-category-filter-mobile__header" },
        React.createElement('h2', { className: "wp-category-filter-mobile__title" }, "Filter by Category"),
        React.createElement('button', {
          onClick: onCloseMobile,
          className: "wp-category-filter-mobile__close",
          'aria-label': "Close filter"
        },
          React.createElement(X, { size: 20 })
        )
      ),
      React.createElement('div', { className: "wp-category-filter-mobile__content" },
        renderCategoryButtons()
      )
    )
  ) : null;

  return React.createElement(React.Fragment, null,
    desktopFilter,
    mobileFilter
  );
}

CategoryFilter.displayName = 'CategoryFilter';