import React from "react";
import * as ReactDOMModule from "react-dom";
import { X } from '@phosphor-icons/react';

var createContext = React.createContext;
var useContext = React.useContext;
var useEffect = React.useEffect;
var useState = React.useState;
var forwardRef = React.forwardRef;
var createPortal = ReactDOMModule.createPortal;

var DialogContext = createContext(undefined);

/**
 * Dialog Component (Modal)
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript-specific syntax
 */
export function Dialog(props) {
  var children = props.children;
  var controlledOpen = props.open;
  var defaultOpen = props.defaultOpen === undefined ? false : props.defaultOpen;
  var onOpenChange = props.onOpenChange;

  var state = useState(defaultOpen);
  var uncontrolledOpen = state[0];
  var setUncontrolledOpen = state[1];
  var open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

  var handleOpenChange = function(newOpen) {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  var contextValue = { open: open, onOpenChange: handleOpenChange };

  return React.createElement(DialogContext.Provider, { value: contextValue }, children);
}

export function DialogTrigger(props) {
  var asChild = props.asChild;
  var children = props.children;
  var className = props.className || '';
  var id = props.id;
  var style = props.style;

  var context = useContext(DialogContext);
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
      style: style,
      className: (className ? className + ' ' : '') + (child.props.className || '')
    };
    return React.cloneElement(child, childProps);
  }

  return React.createElement('button', {
    id: id,
    style: style,
    type: "button",
    className: 'wp-dialog-trigger ' + className,
    onClick: function() { onOpenChange(true); }
  }, children);
}

export function DialogPortal(props) {
  var mountState = useState(false);
  var mounted = mountState[0];
  var setMounted = mountState[1];
  useEffect(function() { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(props.children, document.body);
}

export var DialogOverlay = forwardRef(function DialogOverlay(props, ref) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;

  var context = useContext(DialogContext);
  if (!context) return null;
  var open = context.open;
  var onOpenChange = context.onOpenChange;

  if (!open) return null;

  var handleOverlayClick = function() { onOpenChange(false); };

  var combinedClassName = [
    'wp-block-dialog__overlay',
    'funky-overlay',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: combinedClassName,
    onClick: handleOverlayClick,
    "data-state": open ? "open" : "closed"
  });
});

DialogOverlay.displayName = "DialogOverlay";

export var DialogClose = forwardRef(function DialogClose(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContext(DialogContext);
  if (!context) return null;
  var onOpenChange = context.onOpenChange;

  var handleClick = function() { onOpenChange(false); };

  return React.createElement('button', {
    id: id,
    style: style,
    type: "button",
    ref: ref,
    className: 'wp-block-dialog__close ' + className,
    onClick: handleClick
  }, children);
});

DialogClose.displayName = "DialogClose";

export var DialogContent = forwardRef(function DialogContent(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContext(DialogContext);
  if (!context) return null;
  var open = context.open;
  var onOpenChange = context.onOpenChange;

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

  useEffect(function() {
    var handleKeyDown = function(e) {
      if (e.key === "Escape" && open) {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function() { document.removeEventListener("keydown", handleKeyDown); };
  }, [open, onOpenChange]);

  if (!open) return null;

  var combinedClassName = [
    'wp-block-dialog__content',
    'funky-dialog',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  var handleClose = function() { onOpenChange(false); };

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: combinedClassName,
    "data-state": open ? "open" : "closed"
  },
    children,
    React.createElement(DialogClose, { className: "wp-radix-close-button funky-dialog-close" },
      React.createElement(X, { className: "wp-radix-close-button__icon", size: 18 }),
      React.createElement('span', { className: "sr-only" }, "Close")
    )
  );
});

DialogContent.displayName = "DialogContent";

export function DialogHeader(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: 'wp-block-dialog__header funky-dialog-header ' + className
  }, children);
}

export function DialogFooter(props) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: 'wp-block-dialog__footer funky-dialog-footer ' + className
  }, children);
}

export var DialogTitle = forwardRef(function DialogTitle(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('h2', {
    ref: ref,
    id: id,
    style: style,
    className: 'wp-block-dialog__title funky-dialog-title ' + className
  }, children);
});

export var DialogDescription = forwardRef(function DialogDescription(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('p', {
    ref: ref,
    id: id,
    style: style,
    className: 'wp-block-dialog__description funky-dialog-desc ' + className
  }, children);
});