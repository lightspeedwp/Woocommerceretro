import React from 'react';
import { Check, CaretDown as ChevronDown, CaretUp as ChevronUp } from '@phosphor-icons/react';

var useState = React.useState;
var useRef = React.useRef;
var useEffect = React.useEffect;
var useContext = React.useContext;
var createContext = React.createContext;
var forwardRef = React.forwardRef;
var useCallback = React.useCallback;

var SelectContext = createContext(undefined);

/**
 * Select Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax
 */
export function Select(props) {
  var controlledValue = props.value;
  var defaultValue = props.defaultValue;
  var onValueChange = props.onValueChange;
  var controlledOpen = props.open;
  var defaultOpen = props.defaultOpen || false;
  var onOpenChange = props.onOpenChange;
  var disabled = props.disabled;
  var children = props.children;

  var _sv = useState(defaultValue || "");
  var uncontrolledValue = _sv[0];
  var setUncontrolledValue = _sv[1];
  var _so = useState(defaultOpen);
  var uncontrolledOpen = _so[0];
  var setUncontrolledOpen = _so[1];
  var _sl = useState(function() { return new Map(); });
  var labelMap = _sl[0];
  var setLabelMap = _sl[1];

  var value = controlledValue !== undefined ? controlledValue : uncontrolledValue;
  var open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  
  var triggerRef = useRef(null);

  var setOpen = function(newOpen) {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  var handleValueChange = function(newValue) {
    if (controlledValue === undefined) {
      setUncontrolledValue(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
    setOpen(false);
  };

  var registerLabel = useCallback(function(val, label) {
    setLabelMap(function(prev) {
      var newMap = new Map(prev);
      newMap.set(val, label);
      return newMap;
    });
  }, []);

  var contextValue = {
    value: value,
    onValueChange: handleValueChange,
    open: open,
    setOpen: setOpen,
    triggerRef: triggerRef,
    labelMap: labelMap,
    registerLabel: registerLabel,
  };

  return React.createElement(SelectContext.Provider, { value: contextValue }, children);
}

export var SelectTrigger = forwardRef(function SelectTrigger(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContext(SelectContext);
  if (!context) throw new Error("SelectTrigger must be used within Select");

  var combinedRef = function(node) {
    context.triggerRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  var handleClick = function() { context.setOpen(!context.open); };

  var combinedClassName = [
    'wp-block-select-trigger',
    'funky-input-glow',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('button', {
    id: id,
    style: style,
    ref: combinedRef,
    type: "button",
    className: combinedClassName,
    onClick: handleClick,
    'aria-expanded': context.open
  },
    children,
    React.createElement(ChevronDown, { className: "wp-block-select-icon" })
  );
});

export var SelectValue = forwardRef(function SelectValue(props, ref) {
  var className = props.className || '';
  var placeholder = props.placeholder;
  var id = props.id;
  var style = props.style;

  var context = useContext(SelectContext);
  if (!context) throw new Error("SelectValue must be used within Select");

  var displayValue = context.value ? context.labelMap.get(context.value) : placeholder;

  return React.createElement('span', {
    id: id,
    style: style,
    ref: ref,
    className: 'wp-block-select-value ' + className
  }, displayValue || placeholder || "");
});

export var SelectContent = forwardRef(function SelectContent(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var position = props.position || "popper";
  var id = props.id;
  var style = props.style;

  var context = useContext(SelectContext);
  if (!context) throw new Error("SelectContent must be used within Select");

  var contentRef = useRef(null);

  useEffect(function() {
    var handleClickOutside = function(event) {
      if (
        context.open &&
        contentRef.current &&
        !contentRef.current.contains(event.target) &&
        context.triggerRef.current &&
        !context.triggerRef.current.contains(event.target)
      ) {
        context.setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return function() { document.removeEventListener("mousedown", handleClickOutside); };
  }, [context.open, context]);

  if (!context.open) return null;

  var combinedStyle = {
    width: context.triggerRef.current ? context.triggerRef.current.offsetWidth : undefined,
    position: 'absolute',
    top: '100%',
  };
  if (style) {
    Object.assign(combinedStyle, style);
  }

  var combinedClassName = [
    'wp-block-select-content',
    'funky-card-glow',
    position === "popper" ? 'wp-block-select-content--popper' : '',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    id: id,
    ref: contentRef,
    className: combinedClassName,
    style: combinedStyle
  },
    React.createElement('div', { className: "wp-block-select-viewport" }, children)
  );
});

export var SelectItem = forwardRef(function SelectItem(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var value = props.value;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  var context = useContext(SelectContext);
  if (!context) throw new Error("SelectItem must be used within Select");

  var isSelected = context.value === value;

  useEffect(function() {
    context.registerLabel(value, children);
  }, [value, children, context]);

  var handleClick = function(e) {
    context.onValueChange(value);
    if (onClick) {
      onClick(e);
    }
  };

  var combinedClassName = [
    'wp-block-select-item',
    'funky-select-item',
    isSelected ? 'wp-block-select-item--selected funky-select-item--active' : '',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    id: id,
    style: style,
    ref: ref,
    className: combinedClassName,
    onClick: handleClick,
    'data-state': isSelected ? "checked" : "unchecked"
  },
    React.createElement('span', { className: "wp-block-select-item-indicator" },
      isSelected ? React.createElement(Check, { className: "wp-block-context-menu-item-indicator__icon" }) : null
    ),
    React.createElement('span', { className: "wp-block-select-item-text" }, children)
  );
});

export var SelectGroup = forwardRef(function SelectGroup(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;
  return React.createElement('div', { id: id, style: style, ref: ref, className: 'wp-block-select-group ' + className }, children);
});

export var SelectLabel = forwardRef(function SelectLabel(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;
  return React.createElement('div', { id: id, style: style, ref: ref, className: 'wp-block-select-label ' + className }, children);
});

export var SelectSeparator = forwardRef(function SelectSeparator(props, ref) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  return React.createElement('div', { id: id, style: style, ref: ref, className: 'wp-block-select-separator ' + className });
});

export var SelectScrollUpButton = forwardRef(function SelectScrollUpButton(props, ref) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  return React.createElement('div', { id: id, style: style, ref: ref, className: 'wp-block-select-scroll-button ' + className },
    React.createElement(ChevronUp, { className: "wp-block-select-icon" })
  );
});

export var SelectScrollDownButton = forwardRef(function SelectScrollDownButton(props, ref) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  return React.createElement('div', { id: id, style: style, ref: ref, className: 'wp-block-select-scroll-button ' + className },
    React.createElement(ChevronDown, { className: "wp-block-select-icon" })
  );
});