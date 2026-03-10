import React from 'react';
var useState = React.useState;
var useContext = React.useContext;
var createContext = React.createContext;
var forwardRef = React.forwardRef;

var ToggleGroupContext = createContext(undefined);

/**
 * ToggleGroup Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export var ToggleGroup = forwardRef(function ToggleGroup(props, ref) {
  var className = props.className || '';
  var variant = props.variant || 'default';
  var size = props.size || 'default';
  var children = props.children;
  var type = props.type;
  var value = props.value;
  var defaultValue = props.defaultValue;
  var onValueChange = props.onValueChange;
  var disabled = props.disabled;
  var id = props.id;
  var style = props.style;

  var _lv = useState(
    defaultValue || (type === "multiple" ? [] : "")
  );
  var localValue = _lv[0];
  var setLocalValue = _lv[1];
  var actualValue = value !== undefined ? value : localValue;

  var handleValueChange = function(itemValue) {
    var newValue;
    
    if (type === "single") {
      newValue = actualValue === itemValue ? "" : itemValue;
    } else {
      var list = Array.isArray(actualValue) ? actualValue.slice() : [];
      var index = list.indexOf(itemValue);
      if (index !== -1) {
        list.splice(index, 1);
        newValue = list;
      } else {
        list.push(itemValue);
        newValue = list;
      }
    }

    if (value === undefined) {
      setLocalValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  var contextValue = { 
    type: type, 
    value: actualValue, 
    onValueChange: handleValueChange, 
    variant: variant, 
    size: size, 
    disabled: disabled 
  };

  var combinedClassName = [
    'wp-block-toggle-group',
    'funky-toggle-group',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(ToggleGroupContext.Provider, { value: contextValue },
    React.createElement('div', {
      id: id,
      style: style,
      ref: ref,
      role: type === "single" ? "radiogroup" : "group",
      className: combinedClassName
    }, children)
  );
});

ToggleGroup.displayName = "ToggleGroup";

export var ToggleGroupItem = forwardRef(function ToggleGroupItem(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var variant = props.variant || 'default';
  var size = props.size || 'default';
  var value = props.value;
  var disabled = props.disabled;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  var context = useContext(ToggleGroupContext);

  if (!context) {
    throw new Error("ToggleGroupItem must be used within a ToggleGroup");
  }

  var isSelected = Array.isArray(context.value) 
    ? context.value.indexOf(value) !== -1
    : context.value === value;

  var isDisabled = disabled || context.disabled;

  var handleClick = function(e) {
    if (!isDisabled) {
      context.onValueChange(value);
    }
    if (onClick) {
      onClick(e);
    }
  };

  var itemVariant = context.variant || variant;
  var itemSize = context.size || size;

  var combinedClassName = [
    'wp-block-toggle',
    'wp-block-toggle--' + itemVariant,
    'wp-block-toggle--size-' + itemSize,
    'wp-block-toggle-group-item',
    isSelected ? 'is-pressed funky-toggle--active' : '',
    className,
    'funky-toggle-item'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('button', {
    id: id,
    style: style,
    ref: ref,
    type: "button",
    disabled: isDisabled,
    'aria-pressed': isSelected,
    'data-state': isSelected ? "on" : "off",
    className: combinedClassName,
    onClick: handleClick
  }, children);
});

ToggleGroupItem.displayName = "ToggleGroupItem";
