import React from 'react';
var useState = React.useState;
import { X, Star, Check, CaretUp as ChevronUp, CaretDown as ChevronDown } from '@phosphor-icons/react';

import * as ActiveFiltersModule from './ActiveFilters';
var ActiveFilters = ActiveFiltersModule.ActiveFilters;
import * as TypographyModule from '../../common/Typography';
var Typography = TypographyModule.Typography;
import * as DrawerModule from '../layout/Drawer';
var Drawer = DrawerModule.Drawer;
var DrawerContent = DrawerModule.DrawerContent;
var DrawerHeader = DrawerModule.DrawerHeader;
var DrawerTitle = DrawerModule.DrawerTitle;
var DrawerClose = DrawerModule.DrawerClose;
var DrawerDescription = DrawerModule.DrawerDescription;

/* FilterSidebarProps: { filters, onFilterChange, onClearFilters, isOpenMobile, onCloseMobile, isMobileView } */

function FilterSection(props) {
  var title = props.title;
  var children = props.children;
  var defaultOpen = props.defaultOpen === undefined ? true : props.defaultOpen;
  var _a = useState(defaultOpen);
  var isOpen = _a[0];
  var setIsOpen = _a[1];

  var toggleSection = function() {
    setIsOpen(!isOpen);
  };

  return React.createElement('div', { className: "wp-filter-section funky-filter-section" },
    React.createElement('button', { 
      onClick: toggleSection,
      className: "wp-filter-section__trigger funky-filter-trigger"
    },
      React.createElement('span', { className: "funky-filter-title" }, title),
      isOpen ? 
        React.createElement(ChevronUp, { size: 16, className: "wp-filter-section__icon" }) : 
        React.createElement(ChevronDown, { size: 16, className: "wp-filter-section__icon" })
    ),
    isOpen ? React.createElement('div', { className: "wp-filter-section__content funky-filter-content" }, children) : null
  );
}

/**
 * FilterSidebar Component (Block)
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function FilterSidebar(props) {
  var filters = props.filters;
  var onFilterChange = props.onFilterChange;
  var onClearFilters = props.onClearFilters;
  var isOpenMobile = props.isOpenMobile;
  var onCloseMobile = props.onCloseMobile;
  var isMobileView = props.isMobileView;
  
  function toggleArrayFilter(key, value) {
    var current = filters[key];
    var updated = current.indexOf(value) !== -1
      ? current.filter(function(item) { return item !== value; })
      : current.concat([value]);
    
    var newFilters = Object.assign({}, filters);
    newFilters[key] = updated;
    onFilterChange(newFilters);
  }

  function handleClear(key, value) {
     if (key === 'price') {
        var newFilters1 = Object.assign({}, filters);
        newFilters1.priceRange = [0, 500];
        onFilterChange(newFilters1);
     }
     else if (key === 'rating') {
        var newFilters2 = Object.assign({}, filters);
        newFilters2.rating = null;
        onFilterChange(newFilters2);
     }
     else if (key === 'inStock') {
        var newFilters3 = Object.assign({}, filters);
        newFilters3.inStock = false;
        onFilterChange(newFilters3);
     }
     else if (key === 'categories' || key === 'colors' || key === 'sizes') {
        toggleArrayFilter(key, value);
     }
  }

  var handleInStockChange = function(e) {
    var newFilters = Object.assign({}, filters);
    newFilters.inStock = e.target.checked;
    onFilterChange(newFilters);
  };

  var handlePriceChange = function(e) {
    var newFilters = Object.assign({}, filters);
    newFilters.priceRange = [0, parseInt(e.target.value)];
    onFilterChange(newFilters);
  };

  var categories = ['Clothing', 'Accessories', 'Shoes', 'Home', 'Gifts'];
  var colors = ['Black', 'White', 'Blue', 'Red', 'Green', 'Beige'];
  var sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  var ratings = [4, 3, 2, 1];

  var renderCategories = function() {
    return categories.map(function(cat) {
      var isChecked = filters.categories.indexOf(cat) !== -1;
      var handleChange = function() { toggleArrayFilter('categories', cat); };
      
      return React.createElement('label', { key: cat, className: "wp-filter-checkbox funky-filter-checkbox" },
        React.createElement('div', { className: isChecked ? 'wp-filter-checkbox__box wp-filter-checkbox__box--checked funky-checkbox--active' : 'wp-filter-checkbox__box' },
          isChecked ? React.createElement(Check, { size: 10, className: "wp-color-text-inverse" }) : null
        ),
        React.createElement('input', { 
          type: "checkbox", 
          className: "wp-filter-checkbox__input", 
          onChange: handleChange, 
          checked: isChecked 
        }),
        React.createElement('span', { className: "wp-filter-checkbox__label" }, cat)
      );
    });
  };

  var renderColors = function() {
    return colors.map(function(color) {
      var isSelected = filters.colors.indexOf(color) !== -1;
      var handleClick = function() { toggleArrayFilter('colors', color); };
      
      return React.createElement('button', {
        key: color,
        onClick: handleClick,
        className: (isSelected ? 'wp-filter-color-swatch wp-filter-color-swatch--selected funky-color-swatch--active' : 'wp-filter-color-swatch') + ' funky-color-swatch',
        'data-color': color,
        'aria-label': 'Filter by ' + color,
        title: color
      },
        color === 'White' ? React.createElement('span', { className: "sr-only" }, "White") : null
      );
    });
  };

  var renderSizes = function() {
    return sizes.map(function(size) {
      var isSelected = filters.sizes.indexOf(size) !== -1;
      var handleClick = function() { toggleArrayFilter('sizes', size); };
      
      return React.createElement('button', {
        key: size,
        onClick: handleClick,
        className: (isSelected ? 'wp-filter-size-button wp-filter-size-button--selected funky-size-btn--active' : 'wp-filter-size-button') + ' funky-size-btn'
      }, size);
    });
  };

  var renderRatings = function() {
    return ratings.map(function(stars) {
      var isSelected = filters.rating === stars;
      var handleClick = function() {
        var newFilters = Object.assign({}, filters);
        newFilters.rating = isSelected ? null : stars;
        onFilterChange(newFilters);
      };
      
      return React.createElement('button', {
        key: stars,
        onClick: handleClick,
        className: (isSelected ? 'wp-filter-rating-button wp-filter-rating-button--selected funky-rating-btn--active' : 'wp-filter-rating-button') + ' funky-rating-btn'
      },
        React.createElement('div', { className: "wp-filter-rating-stars" },
          [0, 1, 2, 3, 4].map(function(i) {
            var isFilled = i < stars;
            return React.createElement(Star, { 
              key: i, 
              size: 14, 
              fill: isFilled ? "currentColor" : "none", 
              className: isFilled ? "wp-filter-rating__star--filled" : "wp-filter-rating__star--empty" 
            });
          })
        ),
        React.createElement('span', null, React.createElement('small', null, "& Up"))
      );
    });
  };

  var contentElement = React.createElement('div', { className: "wp-filter-container funky-filter-container" },
    React.createElement(ActiveFilters, { filters: filters, onClear: handleClear, onClearAll: onClearFilters }),
    React.createElement(FilterSection, { title: "Availability" },
      React.createElement('label', { className: "wp-filter-checkbox funky-filter-checkbox" },
        React.createElement('div', { className: filters.inStock ? 'wp-filter-checkbox__box wp-filter-checkbox__box--checked funky-checkbox--active' : 'wp-filter-checkbox__box' },
          filters.inStock ? React.createElement(Check, { size: 12, className: "wp-color-text-inverse" }) : null
        ),
        React.createElement('input', { 
          type: "checkbox", 
          className: "wp-filter-checkbox__input",
          checked: filters.inStock,
          onChange: handleInStockChange
        }),
        React.createElement('span', { className: "wp-filter-checkbox__label" }, "In Stock Only")
      )
    ),
    React.createElement(FilterSection, { title: "Categories" },
      renderCategories()
    ),
    React.createElement(FilterSection, { title: "Price" },
      React.createElement('div', { className: "wp-filter-price funky-price-filter" },
        React.createElement('input', { 
          type: "range", 
          min: "0", max: "500", 
          value: filters.priceRange[1],
          onChange: handlePriceChange,
          className: "wp-filter-price__slider funky-range-slider"
        }),
        React.createElement('div', { className: "wp-filter-price__labels" },
          React.createElement('small', null, "£0"),
          React.createElement('small', null, "£" + filters.priceRange[1] + "+")
        )
      )
    ),
    React.createElement(FilterSection, { title: "Color" },
      React.createElement('div', { className: "wp-filter-colors" },
        renderColors()
      )
    ),
    React.createElement(FilterSection, { title: "Size" },
      React.createElement('div', { className: "wp-filter-sizes" },
        renderSizes()
      )
    ),
    React.createElement(FilterSection, { title: "Rating" },
      React.createElement('div', { className: "wp-filter-ratings" },
        renderRatings()
      )
    )
  );

  return React.createElement(React.Fragment, null,
    !isMobileView ? React.createElement('aside', { className: "wp-filter-sidebar funky-filter-sidebar" },
      React.createElement(Typography, { variant: "h3", className: "wp-filter-sidebar__title" }, "Filters"),
      contentElement
    ) : null,
    React.createElement(Drawer, { open: isOpenMobile, onOpenChange: onCloseMobile },
      React.createElement(DrawerContent, { side: "left", className: "wp-filter-sheet__content funky-filter-drawer" },
        React.createElement(DrawerHeader, { className: "wp-filter-sheet__header" },
          React.createElement('div', { className: "wp-filter-sheet__header-row" },
            React.createElement(DrawerTitle, null, "Filter Products"),
            React.createElement(DrawerClose, { className: "wp-filter-sheet__close" },
              React.createElement(X, { className: "wp-filter-sheet__icon" }),
              React.createElement('span', { className: "sr-only" }, "Close")
            )
          ),
          React.createElement(DrawerDescription, { className: "sr-only" }, "Refine your product search by price, category, color, size, rating, and availability.")
        ),
        contentElement
      )
    )
  );
}

FilterSidebar.displayName = 'FilterSidebar';