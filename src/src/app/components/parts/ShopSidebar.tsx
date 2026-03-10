import React from 'react';
import * as TypographyModule from '../common/Typography';
import { X, Star } from '@phosphor-icons/react';
import * as CheckboxModule from '../blocks/forms/Checkbox';
import * as FiltersData from '../../data/filters';

var useState = React.useState;
var Typography = TypographyModule.Typography;
var Checkbox = CheckboxModule.Checkbox;
var SHOP_FILTERS = FiltersData.SHOP_FILTERS;

/**
 * FilterGroup Component
 */
function FilterGroup(props) {
  var title = props.title;
  var children = props.children;

  return React.createElement('div', { className: "wp-filter-section funky-filter-section" },
    React.createElement(Typography, { variant: "h4", className: "wp-filter-section__trigger funky-filter-trigger" }, title),
    React.createElement('div', { className: "wp-filter-section__content funky-filter-content" },
      children
    )
  );
}

/**
 * ShopSidebar Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function ShopSidebar() {
  var _af = useState([
     { type: 'Category', value: 'Tshirts' }
  ]);
  var activeFilters = _af[0];
  var setActiveFilters = _af[1];

  var removeFilter = function(value) {
     var updated = activeFilters.filter(function(f) { return f.value !== value; });
     setActiveFilters(updated);
  };

  var handleCheckboxChange = function(type, value, checked) {
    if (checked) {
      var updated = activeFilters.concat([{ type: type, value: value }]);
      setActiveFilters(updated);
    } else {
      var updated = activeFilters.filter(function(f) { return f.value !== value; });
      setActiveFilters(updated);
    }
  };

  var handleClearAll = function() {
    setActiveFilters([]);
  };

  var renderActiveFilters = function() {
    if (activeFilters.length === 0) return null;

    return React.createElement('div', { className: "wp-active-filters funky-active-filters-panel" },
      React.createElement('div', { className: "wp-active-filters__list" },
        activeFilters.map(function(filter, idx) {
          var handleRemove = function() { removeFilter(filter.value); };
          return React.createElement('div', { key: idx, className: "wp-filter-chip funky-filter-chip" },
            React.createElement('span', null, filter.type + ": " + filter.value),
            React.createElement('button', { 
              onClick: handleRemove, 
              className: "wp-filter-chip__remove", 
              'aria-label': 'Remove filter ' + filter.value 
            },
              React.createElement(X, { size: 14 })
            )
          );
        })
      ),
      React.createElement('button', { 
         className: "wp-active-filters__clear-all funky-clear-all-btn",
         onClick: handleClearAll
      },
         "Clear filters"
      )
    );
  };

  var renderBrands = function() {
    return SHOP_FILTERS.brands.map(function(brand) {
      var isChecked = activeFilters.some(function(f) { return f.value === brand; });
      var handleChange = function(checked) { handleCheckboxChange('Brand', brand, checked); };
      
      return React.createElement('label', { key: brand, className: "wp-filter-checkbox funky-filter-checkbox" },
        React.createElement(Checkbox, { 
            checked: isChecked,
            onCheckedChange: handleChange
        }),
        React.createElement('span', { className: "wp-filter-checkbox__label" }, brand)
      );
    });
  };

  var renderRatings = function() {
    var isChecked = activeFilters.some(function(f) { return f.type === 'Rating' && f.value === '5 Stars'; });
    var handleChange = function(checked) { handleCheckboxChange('Rating', '5 Stars', checked); };
    
    return React.createElement('label', { className: "wp-filter-checkbox funky-filter-checkbox" },
      React.createElement(Checkbox, { 
        checked: isChecked,
        onCheckedChange: handleChange
      }),
      React.createElement('div', { className: "wp-filter-rating-stars" },
        [0, 1, 2, 3, 4].map(function(_, i) {
          return React.createElement(Star, { 
            key: i, 
            size: 16, 
            className: "wp-filter-rating-star funky-star-icon" 
          });
        })
      )
    );
  };

  var renderColors = function() {
    return SHOP_FILTERS.colors.map(function(color) {
      var isChecked = activeFilters.some(function(f) { return f.value === color; });
      var handleChange = function(checked) { handleCheckboxChange('Color', color, checked); };
      
      return React.createElement('label', { key: color, className: "wp-filter-checkbox funky-filter-checkbox" },
        React.createElement(Checkbox, { 
          checked: isChecked,
          onCheckedChange: handleChange
        }),
        React.createElement('span', { className: "wp-filter-checkbox__label" }, color)
      );
    });
  };

  var renderCategories = function() {
    return SHOP_FILTERS.categories.map(function(cat) {
      var isChecked = activeFilters.some(function(f) { return f.value === cat; });
      var handleChange = function(checked) { handleCheckboxChange('Category', cat, checked); };
      
      return React.createElement('label', { key: cat, className: "wp-filter-checkbox funky-filter-checkbox" },
        React.createElement(Checkbox, { 
            checked: isChecked,
            onCheckedChange: handleChange
        }),
        React.createElement('span', { className: "wp-filter-checkbox__label" }, cat)
      );
    });
  };

  var renderStatuses = function() {
    return SHOP_FILTERS.statuses.map(function(status) {
      var isChecked = activeFilters.some(function(f) { return f.value === status.value; });
      var handleChange = function(checked) { handleCheckboxChange('Status', status.value, checked); };
      
      return React.createElement('label', { key: status.value, className: "wp-filter-checkbox funky-filter-checkbox" },
        React.createElement(Checkbox, { 
          checked: isChecked,
          onCheckedChange: handleChange
        }),
        React.createElement('span', { className: "wp-filter-checkbox__label" }, status.label)
      );
    });
  };

  return React.createElement('div', { className: "wp-filter-sidebar funky-shop-sidebar" },
    React.createElement('div', { className: "wp-active-filters__header" },
      React.createElement(Typography, { variant: "h3", className: "wp-filter-sidebar__title funky-sidebar-title" }, "Filters"),
      renderActiveFilters()
    ),

    React.createElement(FilterGroup, { title: "Brands" },
      renderBrands()
    ),

    React.createElement(FilterGroup, { title: "Price" },
      React.createElement('div', { className: "wp-filter-price funky-price-filter" },
        React.createElement('div', { className: "wp-filter-price__slider funky-visual-slider" }),
        React.createElement('div', { className: "wp-filter-price__labels" },
          React.createElement('div', null, "£0"),
          React.createElement('div', null, "£5000")
        )
      )
    ),

    React.createElement(FilterGroup, { title: "Rating" },
      renderRatings()
    ),

    React.createElement(FilterGroup, { title: "Color" },
      renderColors()
    ),

    React.createElement(FilterGroup, { title: "Category" },
      renderCategories()
    ),
    
    React.createElement(FilterGroup, { title: "Status" },
      React.createElement('div', { className: "wp-filter-status-list" },
        renderStatuses()
      )
    )
  );
}

ShopSidebar.displayName = 'ShopSidebar';