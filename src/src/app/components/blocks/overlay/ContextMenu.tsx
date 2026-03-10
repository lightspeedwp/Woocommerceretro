"use client";

import React from "react";
import * as ReactDOMModule from "react-dom";
import { Check, CaretRight as ChevronRight, Circle } from '@phosphor-icons/react';
import * as cnModule from "@/utils/cn";
import * as ClickOutsideModule from "../../../hooks/useClickOutside";

var createContext = React.createContext;
var useContext = React.useContext;
var useEffect = React.useEffect;
var useState = React.useState;
var useRef = React.useRef;

var createPortal = ReactDOMModule.createPortal;
var cn = cnModule.cn;
var useClickOutside = ClickOutsideModule.useClickOutside;

/**
 * ContextMenu Component
 * Custom WordPress-aligned implementation replacing Radix UI.
 */

var ContextMenuContext = createContext(undefined);

function useContextMenu() {
  var context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error("useContextMenu must be used within a ContextMenu");
  }
  return context;
}

// Root
export function ContextMenu(props) {
  var children = props.children;
  var _so = useState(false);
  var open = _so[0];
  var setOpen = _so[1];
  var _sp = useState({ x: 0, y: 0 });
  var position = _sp[0];
  var setPosition = _sp[1];

  return React.createElement(ContextMenuContext.Provider, {
    value: { open: open, setOpen: setOpen, position: position, setPosition: setPosition }
  }, children);
}

// Trigger
export function ContextMenuTrigger(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContextMenu();
  var setOpen = context.setOpen;
  var setPosition = context.setPosition;

  var handleContextMenu = function(e) {
    e.preventDefault();
    setOpen(true);
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-context-menu-trigger", className),
    onContextMenu: handleContextMenu
  }, children);
}

// Portal
export function ContextMenuPortal(props) {
  var children = props.children;
  var _sm = useState(false);
  var mounted = _sm[0];
  var setMounted = _sm[1];
  useEffect(function() { setMounted(true); }, []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}

// Content
export var ContextMenuContent = React.forwardRef(
  function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContextMenu();
  var open = context.open;
  var setOpen = context.setOpen;
  var position = context.position;
  var contentRef = useRef(null);

  useClickOutside(contentRef, function() { setOpen(false); });

  useEffect(function() {
    var handleKeyDown = function(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return function() { document.removeEventListener("keydown", handleKeyDown); };
  }, [open, setOpen]);

  if (!open) return null;

  return React.createElement(ContextMenuPortal, null,
    React.createElement('div', {
      ref: function(node) {
        contentRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      id: id,
      className: cn("wp-context-menu-content", className),
      style: {
        top: position.y,
        left: position.x,
        marginTop: style && style.marginTop,
        marginBottom: style && style.marginBottom,
        marginLeft: style && style.marginLeft,
        marginRight: style && style.marginRight,
        position: "fixed"
      },
      'data-state': open ? "open" : "closed"
    }, children)
  );
});
ContextMenuContent.displayName = "ContextMenuContent";

// Item
export var ContextMenuItem = React.forwardRef(function(props, ref) {
  var className = props.className;
  var inset = props.inset;
  var disabled = props.disabled;
  var onClick = props.onClick;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var context = useContextMenu();
  var setOpen = context.setOpen;

  return React.createElement('div', {
    id: id,
    style: style,
    ref: ref,
    className: cn(
      "wp-context-menu-item",
      inset && "wp-context-menu-item--inset",
      className
    ),
    onClick: function(e) {
      if (!disabled) {
        if (onClick) { onClick(e); }
        setOpen(false);
      }
    },
    'data-disabled': disabled
  }, children);
});
ContextMenuItem.displayName = "ContextMenuItem";

// CheckboxItem
export var ContextMenuCheckboxItem = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var checked = props.checked;
  var disabled = props.disabled;
  var onClick = props.onClick;
  var id = props.id;
  var style = props.style;

  var context = useContextMenu();
  var setOpen = context.setOpen;

  return React.createElement('div', {
    id: id,
    style: style,
    ref: ref,
    className: cn("wp-context-menu-item wp-context-menu-checkbox-item", className),
    onClick: function(e) {
      if (!disabled) {
        if (onClick) { onClick(e); }
        setOpen(false);
      }
    },
    'data-disabled': disabled
  },
    React.createElement('span', { className: "wp-block-context-menu-item-indicator" },
      checked ? React.createElement(Check, { className: "wp-block-context-menu-item-indicator__icon" }) : null
    ),
    children
  );
});
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";

// RadioItem
export var ContextMenuRadioItem = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    ref: ref,
    className: cn("wp-context-menu-item wp-context-menu-checkbox-item", className)
  },
    React.createElement('span', { className: "wp-block-context-menu-item-indicator" },
      React.createElement(Circle, { className: "wp-block-context-menu-item-indicator__icon--sm" })
    ),
    children
  );
});
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";

// Label
export var ContextMenuLabel = React.forwardRef(function(props, ref) {
  var className = props.className;
  var inset = props.inset;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: cn("wp-block-context-menu-label", inset && "wp-block-context-menu-label--inset", className)
  }, children);
});
ContextMenuLabel.displayName = "ContextMenuLabel";

// Separator
export var ContextMenuSeparator = React.forwardRef(function(props, ref) {
  var className = props.className;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: cn("wp-block-context-menu-separator", className)
  });
});
ContextMenuSeparator.displayName = "ContextMenuSeparator";

// Shortcut
export function ContextMenuShortcut(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('span', {
    id: id,
    style: style,
    className: cn("wp-block-context-menu-shortcut", className)
  }, children);
}
ContextMenuShortcut.displayName = "ContextMenuShortcut";

// Group
export var ContextMenuGroup = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    ref: ref,
    className: cn("", className)
  }, children);
});
ContextMenuGroup.displayName = "ContextMenuGroup";

// SubMenu Stub
export function ContextMenuSub(props) {
  var children = props.children;
  return React.createElement(React.Fragment, null, children);
}

export var ContextMenuSubTrigger = React.forwardRef(function(props, ref) {
  var className = props.className;
  var inset = props.inset;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: cn("wp-context-menu-item", inset && "wp-context-menu-item--inset", className)
  },
    children,
    React.createElement(ChevronRight, { className: "wp-context-menu-sub-trigger__icon" })
  );
});
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";

export var ContextMenuSubContent = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: cn("wp-context-menu-content", className)
  }, children);
});
ContextMenuSubContent.displayName = "ContextMenuSubContent";

export var ContextMenuRadioGroup = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    ref: ref,
    className: cn("", className)
  }, children);
});
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";