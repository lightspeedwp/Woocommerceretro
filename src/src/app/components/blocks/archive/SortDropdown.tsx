import React from 'react';
import { CaretDown as ChevronDown } from '@phosphor-icons/react';

/**
 * SortDropdown Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function SortDropdown(props) {
  var value = props.value;
  var onChange = props.onChange;
  var className = props.className || '';

  var options = [
    { value: 'featured', label: 'Featured' },
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Rating' },
    { value: 'popularity', label: 'Popularity' }
  ];

  var handleChange = function(e) {
    onChange(e.target.value);
  };

  return React.createElement('div', { className: "wp-sort-dropdown funky-sort-dropdown " + className },
    React.createElement('label', { 
      htmlFor: "sort-select",
      className: "wp-sort-dropdown__label"
    }, "Sort by:"),
    React.createElement('div', { className: "wp-sort-dropdown__wrapper" },
      React.createElement('select', {
        id: "sort-select",
        value: value,
        onChange: handleChange,
        className: "wp-sort-dropdown__select funky-select"
      }, options.map(function(option) {
        return React.createElement('option', { 
          key: option.value,
          value: option.value
        }, option.label);
      })),
      React.createElement(ChevronDown, { className: "wp-sort-dropdown__icon" })
    )
  );
}

SortDropdown.displayName = 'SortDropdown';