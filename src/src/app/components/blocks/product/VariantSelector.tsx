import React from 'react';
// Type references (JSDoc only - no runtime import needed):
// ProductAttribute, SelectedVariant
import { Check } from '@phosphor-icons/react';

/**
 * VariantSelector Block
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 */
export function VariantSelector(props) {
  var attribute = props.attribute;
  var selected = props.selected;
  var onChange = props.onChange;
  var className = props.className || '';

  var currentValue = selected[attribute.slug];

  var IconCheck = Check || (function() {
    return React.createElement('span', { 'aria-hidden': 'true' }, '\u2713');
  });

  var renderButtonSelector = function() {
    var buttons = attribute.options.map(function(option) {
      var isSelected = currentValue === option.value;
      var isDisabled = option.available === false;

      return React.createElement('button', {
        key: option.value,
        onClick: function() { if (!isDisabled) { onChange(attribute.slug, option.value); } },
        disabled: isDisabled,
        className: 'wc-block-variant-selector__button' + 
          (isSelected ? ' wc-block-variant-selector__button--selected' : '') + 
          (isDisabled ? ' wc-block-variant-selector__button--disabled' : ''),
        'aria-label': 'Select ' + option.label,
        'aria-pressed': isSelected
      }, option.label);
    });

    return React.createElement('div', { className: 'wc-block-variant-selector__buttons' }, buttons);
  };

  var renderSwatchSelector = function() {
    var swatches = attribute.options.map(function(option) {
      var isSelected = currentValue === option.value;
      var isDisabled = option.available === false;

      var swatchContent = isSelected ? React.createElement('div', { className: 'wc-block-variant-selector__swatch-check' },
        React.createElement(IconCheck, { 
          size: 18, 
          className: option.colorHex && isLightColor(option.colorHex) 
            ? 'wc-block-variant-selector__swatch-check--light' 
            : 'wc-block-variant-selector__swatch-check--dark',
          strokeWidth: 3
        })
      ) : null;

      var disabledLine = isDisabled ? React.createElement('div', { className: 'wc-block-variant-selector__swatch-disabled-line' },
        React.createElement('div', { className: 'wc-block-variant-selector__swatch-strike' })
      ) : null;

      return React.createElement('button', {
        key: option.value,
        onClick: function() { if (!isDisabled) { onChange(attribute.slug, option.value); } },
        disabled: isDisabled,
        className: 'wc-block-variant-selector__swatch' + 
          (isSelected ? ' wc-block-variant-selector__swatch--selected' : '') + 
          (isDisabled ? ' wc-block-variant-selector__swatch--disabled' : ''),
        style: {
          backgroundColor: option.colorHex || 'var(--wp--preset--color--neutral-300)'
        },
        'aria-label': 'Select ' + option.label,
        'aria-pressed': isSelected,
        title: option.label
      }, swatchContent, disabledLine);
    });

    return React.createElement('div', { className: 'wc-block-variant-selector__swatches' }, swatches);
  };

  var renderSelectDropdown = function() {
    var options = attribute.options.map(function(option) {
      return React.createElement('option', {
        key: option.value,
        value: option.value,
        disabled: option.available === false
      }, option.label + (option.available === false ? ' (Out of Stock)' : ''));
    });

    return React.createElement('select', {
      value: currentValue || '',
      onChange: function(e) { onChange(attribute.slug, e.target.value); },
      className: 'wc-block-variant-selector__select',
      'aria-label': 'Select ' + attribute.name
    },
      React.createElement('option', { value: '' }, 'Choose ' + attribute.name),
      options
    );
  };

  var labelValue = (function() {
    if (!currentValue) return null;
    var foundOption = attribute.options.find(function(opt) { return opt.value === currentValue; });
    if (!foundOption) return null;
    return React.createElement('span', { className: 'wc-block-variant-selector__label-value' }, foundOption.label);
  })();

  var labelElement = React.createElement('label', { className: 'wc-block-variant-selector__label' },
    React.createElement('span', { className: 'wc-block-variant-selector__label-name' }, attribute.name),
    labelValue
  );

  var selectorUI;
  if (attribute.displayType === 'button') {
    selectorUI = renderButtonSelector();
  } else if (attribute.displayType === 'swatch') {
    selectorUI = renderSwatchSelector();
  } else if (attribute.displayType === 'select') {
    selectorUI = renderSelectDropdown();
  }

  return React.createElement('div', { className: 'wc-block-variant-selector ' + className },
    labelElement,
    selectorUI
  );
}

function isLightColor(hex) {
  var color = hex.replace('#', '');
  var r = parseInt(color.substr(0, 2), 16);
  var g = parseInt(color.substr(2, 2), 16);
  var b = parseInt(color.substr(4, 2), 16);
  var luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5;
}