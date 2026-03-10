"use client";

import React from "react";
import * as ReactDOMModule from "react-dom";
import * as cnModule from "../../../utils/cn";
import * as ButtonsModule from "../design/Buttons";

var createContext = React.createContext;
var useContext = React.useContext;
var useEffect = React.useEffect;
var useState = React.useState;

var createPortal = ReactDOMModule.createPortal;
var cn = cnModule.cn;
var Button = ButtonsModule.Button;

/**
 * AlertDialog Component
 */

var AlertDialogContext = createContext(undefined);

export function AlertDialog(props) {
  var children = props.children;
  var controlledOpen = props.open;
  var defaultOpen = props.defaultOpen === undefined ? false : props.defaultOpen;
  var onOpenChange = props.onOpenChange;

  var _s = useState(defaultOpen);
  var uncontrolledOpen = _s[0];
  var setUncontrolledOpen = _s[1];
  var open = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;

  var handleOpenChange = function(newOpen) {
    if (controlledOpen === undefined) {
      setUncontrolledOpen(newOpen);
    }
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  var contextValue = { open: open, onOpenChange: handleOpenChange };

  return React.createElement(AlertDialogContext.Provider, { value: contextValue },
    children
  );
}

export function AlertDialogTrigger(props) {
  var asChild = props.asChild;
  var children = props.children;
  var className = props.className;
  var id = props.id;
  var style = props.style;

  var context = useContext(AlertDialogContext);
  if (!context) return null;
  var onOpenChange = context.onOpenChange;

  if (asChild && React.isValidElement(children)) {
    var child = children;
    return React.cloneElement(child, {
      onClick: function(e) {
        if (child.props.onClick) {
          child.props.onClick(e);
        }
        onOpenChange(true);
      },
      id: id,
      style: style,
      className: cn(className, child.props.className)
    });
  }

  return React.createElement('button', {
    id: id,
    style: style,
    type: "button",
    onClick: function() { onOpenChange(true); },
    className: className
  }, children);
}

export function AlertDialogPortal(props) {
  var children = props.children;
  var _ms = useState(false);
  var mounted = _ms[0];
  var setMounted = _ms[1];
  useEffect(function() { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

export var AlertDialogOverlay = React.forwardRef(function(props, ref) {
  var className = props.className;
  var id = props.id;
  var style = props.style;

  var context = useContext(AlertDialogContext);
  if (!context) return null;
  var open = context.open;

  if (!open) return null;

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: cn("wp-alert-dialog-overlay", className),
    "data-state": open ? "open" : "closed"
  });
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

export var AlertDialogContent = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContext(AlertDialogContext);
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

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    role: "alertdialog",
    className: cn("wp-alert-dialog-content", className),
    "data-state": open ? "open" : "closed"
  }, children);
});
AlertDialogContent.displayName = "AlertDialogContent";

export function AlertDialogHeader(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-alert-dialog__header flex flex-col space-y-2 text-center sm:text-left", className)
  }, children);
}
AlertDialogHeader.displayName = "AlertDialogHeader";

export function AlertDialogFooter(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-alert-dialog__footer flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
  }, children);
}
AlertDialogFooter.displayName = "AlertDialogFooter";

export var AlertDialogTitle = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('h2', {
    ref: ref,
    id: id,
    style: style,
    className: cn("wp-block-alert-dialog__title text-lg font-semibold", className)
  }, children);
});
AlertDialogTitle.displayName = "AlertDialogTitle";

export var AlertDialogDescription = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('p', {
    ref: ref,
    id: id,
    style: style,
    className: cn("wp-block-alert-dialog__description text-sm text-muted-foreground", className)
  }, children);
});
AlertDialogDescription.displayName = "AlertDialogDescription";

export var AlertDialogAction = React.forwardRef(function(props, ref) {
  var className = props.className;
  var onClick = props.onClick;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  var context = useContext(AlertDialogContext);
  if (!context) return null;
  var onOpenChange = context.onOpenChange;

  return React.createElement(Button, {
    id: id,
    style: style,
    ref: ref,
    className: cn(className),
    onClick: function(e) {
      if (onClick) {
        onClick(e);
      }
      if (!e.defaultPrevented) {
        onOpenChange(false);
      }
    }
  }, children);
});
AlertDialogAction.displayName = "AlertDialogAction";

export var AlertDialogCancel = React.forwardRef(function(props, ref) {
  var className = props.className;
  var onClick = props.onClick;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  var context = useContext(AlertDialogContext);
  if (!context) return null;
  var onOpenChange = context.onOpenChange;

  return React.createElement(Button, {
    id: id,
    style: style,
    ref: ref,
    variant: "outline",
    className: cn("wp-block-alert-dialog__cancel", className),
    onClick: function(e) {
      if (onClick) {
        onClick(e);
      }
      if (!e.defaultPrevented) {
        onOpenChange(false);
      }
    }
  }, children);
});
AlertDialogCancel.displayName = "AlertDialogCancel";