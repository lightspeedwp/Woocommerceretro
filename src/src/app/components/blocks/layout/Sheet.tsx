import React from "react";
import * as ReactDOMModule from "react-dom";
import { X } from '@phosphor-icons/react';

var createContext = React.createContext;
var useContext = React.useContext;
var useEffect = React.useEffect;
var useState = React.useState;
var createPortal = ReactDOMModule.createPortal;

var SheetContext = createContext(undefined);

/**
 * Sheet Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript-specific syntax
 */
export function Sheet(props) {
  var controlledOpen = props.open;
  var onOpenChange = props.onOpenChange;
  var defaultOpen = props.defaultOpen === undefined ? false : props.defaultOpen;
  var children = props.children;

  var openState = useState(defaultOpen);
  var uncontrolledOpen = openState[0];
  var setUncontrolledOpen = openState[1];
  var open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  var handleOpenChange = function(newOpen) {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return React.createElement(
    SheetContext.Provider,
    { value: { open: open, onOpenChange: handleOpenChange } },
    children
  );
}

export function SheetTrigger(props) {
  var asChild = props.asChild;
  var children = props.children;
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var ariaLabel = props['aria-label'];

  var context = useContext(SheetContext);
  if (!context) return null;
  var onOpenChange = context.onOpenChange;

  if (asChild && React.isValidElement(children)) {
    var child = children;
    var childProps = {
      onClick: function(e) {
        if (child.props.onClick) {
          child.props.onClick(e);
        }
        onOpenChange(true);
      },
      id: id,
      className: (className ? className + ' ' : '') + (child.props.className || ''),
      style: style,
      'aria-label': ariaLabel
    };
    return React.cloneElement(child, childProps);
  }

  return React.createElement('button', {
    type: "button", 
    id: id,
    style: style,
    'aria-label': ariaLabel,
    className: 'wp-sheet-trigger ' + className,
    onClick: function() { onOpenChange(true); }
  }, children);
}

export var SheetContent = React.forwardRef(function SheetContent(props, ref) {
  var side = props.side === undefined ? "right" : props.side;
  var className = props.className || '';
  var children = props.children;

  var context = useContext(SheetContext);
  var open = context ? context.open : false;
  var onOpenChange = context ? context.onOpenChange : function() {};
  var mountState = useState(false);
  var mounted = mountState[0];
  var setMounted = mountState[1];

  useEffect(function() {
    setMounted(true);
  }, []);

  useEffect(function() {
    var handleKeyDown = function(e) {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function() { document.removeEventListener("keydown", handleKeyDown); };
  }, [open, onOpenChange]);

  useEffect(function() {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return function() {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!mounted || !open) return null;

  var combinedClassName = [
    'wp-sheet-content',
    'funky-sheet',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  var handleClose = function() { onOpenChange(false); };

  return createPortal(
    React.createElement('div', { className: "wp-sheet-portal" },
      React.createElement('div', {
        className: "wp-sheet-overlay funky-overlay",
        onClick: handleClose
      }),
      React.createElement('div', {
        ref: ref,
        className: combinedClassName,
        'data-state': open ? "open" : "closed",
        'data-side': side
      },
        React.createElement('button', {
          className: "wp-sheet-close funky-sheet-close",
          onClick: handleClose,
          'aria-label': "Close"
        },
          React.createElement(X, { className: "wp-sheet-close__icon", size: 18 })
        ),
        children
      )
    ),
    document.body
  );
});

SheetContent.displayName = "SheetContent";

export function SheetClose(props) {
  var asChild = props.asChild;
  var children = props.children;
  var className = props.className || '';
  var id = props.id;
  var style = props.style;

  var context = useContext(SheetContext);
  if (!context) return null;
  var onOpenChange = context.onOpenChange;

  if (asChild && React.isValidElement(children)) {
    var child = children;
    var childProps = {
      onClick: function(e) {
        if (child.props.onClick) {
          child.props.onClick(e);
        }
        onOpenChange(false);
      },
      id: id,
      className: (className ? className + ' ' : '') + (child.props.className || ''),
      style: style
    };
    return React.cloneElement(child, childProps);
  }

  return React.createElement('button', {
    type: "button", 
    id: id,
    className: 'wp-sheet-close-btn ' + className,
    style: style,
    onClick: function() { onOpenChange(false); }
  }, children);
}

export function SheetHeader(props) {
  var className = props.className || '';
  var children = props.children;
  return React.createElement('div', { className: 'wp-sheet-header funky-sheet-header ' + className }, children);
}

export function SheetFooter(props) {
  var className = props.className || '';
  var children = props.children;
  return React.createElement('div', { className: 'wp-sheet-footer funky-sheet-footer ' + className }, children);
}

export function SheetTitle(props) {
  var className = props.className || '';
  var children = props.children;
  return React.createElement('h2', { className: 'wp-sheet-title funky-sheet-title ' + className }, children);
}

export function SheetDescription(props) {
  var className = props.className || '';
  var children = props.children;
  return React.createElement('p', { className: 'wp-sheet-description funky-sheet-desc ' + className }, children);
}