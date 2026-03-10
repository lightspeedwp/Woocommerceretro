"use client";

import * as React from "react";
import * as ReactDOMModule from "react-dom";
import { Check, CaretRight as ChevronRight, Circle } from '@phosphor-icons/react';
import * as cnModule from "@/utils/cn";
import * as ClickOutsideModule from "../../../hooks/useClickOutside";

var createPortal = ReactDOMModule.createPortal;
var cn = cnModule.cn;
var useClickOutside = ClickOutsideModule.useClickOutside;

// Context
var DropdownMenuContext = React.createContext(undefined);

function useDropdownMenu() {
  var context = React.useContext(DropdownMenuContext);
  if (!context) {
    throw new Error("useDropdownMenu must be used within a DropdownMenu");
  }
  return context;
}

// Root
export function DropdownMenu(props) {
  var children = props.children;
  var defaultOpen = props.defaultOpen === undefined ? false : props.defaultOpen;
  var controlledOpen = props.open;
  var onOpenChange = props.onOpenChange;

  var _uo = React.useState(defaultOpen);
  var uncontrolledOpen = _uo[0];
  var setUncontrolledOpen = _uo[1];
  var triggerRef = React.useRef(null);
  var contentRef = React.useRef(null);
  
  var isOpen = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;

  var setIsOpen = function(value) {
    if (onOpenChange) {
      onOpenChange(value);
    } else {
      setUncontrolledOpen(value);
    }
  };

  var contextValue = { isOpen: isOpen, setIsOpen: setIsOpen, triggerRef: triggerRef, contentRef: contentRef };

  return React.createElement(DropdownMenuContext.Provider, { value: contextValue },
    children
  );
}

export var DropdownMenuTrigger = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var asChild = props.asChild === undefined ? false : props.asChild;
    var onClick = props.onClick;
    var id = props.id;
    var style = props.style;

    var context = useDropdownMenu();
    var isOpen = context.isOpen;
    var setIsOpen = context.setIsOpen;
    var triggerRef = context.triggerRef;

    React.useImperativeHandle(ref, function() { return triggerRef.current; });

    var handleClick = function(e) {
      setIsOpen(!isOpen);
      if (onClick) {
        onClick(e);
      }
    };

    if (asChild && React.isValidElement(children)) {
      var child = children;
      return React.cloneElement(child, {
        ref: function(node) {
          // @ts-ignore
          triggerRef.current = node;
          var originalRef = child.ref;
          if (typeof originalRef === 'function') {
            originalRef(node);
          } else if (originalRef) {
            originalRef.current = node;
          }
        },
        onClick: function(e) {
            handleClick(e);
            if (child.props.onClick) {
              child.props.onClick(e);
            }
        },
        id: id,
        style: style,
        "data-state": isOpen ? "open" : "closed",
        className: cn(className, child.props.className)
      });
    }

    return React.createElement('button', {
      id: id,
      style: style,
      ref: triggerRef,
      onClick: handleClick,
      "data-state": isOpen ? "open" : "closed",
      className: className
    }, children);
  }
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

// Portal (Wrapper)
export function DropdownMenuPortal(props) {
  var children = props.children;
  return React.createElement(React.Fragment, null, children);
}

export var DropdownMenuContent = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var sideOffset = props.sideOffset === undefined ? 4 : props.sideOffset;
    var align = props.align === undefined ? "center" : props.align;
    var style = props.style;
    var children = props.children;
    var id = props.id;

    var context = useDropdownMenu();
    var isOpen = context.isOpen;
    var setIsOpen = context.setIsOpen;
    var triggerRef = context.triggerRef;
    var contentRef = context.contentRef;

    var _pos = React.useState({ top: 0, left: 0 });
    var position = _pos[0];
    var setPosition = _pos[1];

    useClickOutside(contentRef, function() { setIsOpen(false); }, [triggerRef]);

    React.useEffect(function() {
        var handleKeyDown = function(e) {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return function() { document.removeEventListener("keydown", handleKeyDown); };
    }, [isOpen, setIsOpen]);

    React.useEffect(function() {
      if (isOpen && triggerRef.current && contentRef.current) {
        var updatePosition = function() {
            if (!triggerRef.current || !contentRef.current) return;
            var triggerRect = triggerRef.current.getBoundingClientRect();
            var contentRect = contentRef.current.getBoundingClientRect();
            
            var top = triggerRect.bottom + window.scrollY + sideOffset;
            var left = triggerRect.left + window.scrollX + (triggerRect.width / 2) - (contentRect.width / 2);

            if (align === "start") {
                left = triggerRect.left + window.scrollX;
            } else if (align === "end") {
                left = triggerRect.right + window.scrollX - contentRect.width;
            }

            if (left < 5) {
              left = 5;
            }
            if (left + contentRect.width > window.innerWidth - 5) {
                left = window.innerWidth - contentRect.width - 5;
            }
            
            if (top + contentRect.height > window.scrollY + window.innerHeight) {
                 var topSpace = triggerRect.top - sideOffset;
                 if (topSpace > contentRect.height) {
                     top = triggerRect.top + window.scrollY - contentRect.height - sideOffset;
                 }
            }

            setPosition({ top: top, left: left });
        };

        updatePosition();
        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);

        return function() {
          window.removeEventListener("resize", updatePosition);
          window.removeEventListener("scroll", updatePosition, true);
        };
      }
    }, [isOpen, sideOffset, align, triggerRef, contentRef]);

    if (!isOpen) return null;

    var combinedStyle = {
      top: position.top,
      left: position.left,
      position: "absolute",
    };
    if (style) {
      if (style.marginTop) combinedStyle.marginTop = style.marginTop;
      if (style.marginBottom) combinedStyle.marginBottom = style.marginBottom;
      if (style.marginLeft) combinedStyle.marginLeft = style.marginLeft;
      if (style.marginRight) combinedStyle.marginRight = style.marginRight;
    }

    return createPortal(
      React.createElement('div', {
        id: id,
        ref: function(node) {
             // @ts-ignore
             contentRef.current = node;
             if (typeof ref === 'function') {
               ref(node);
             } else if (ref) {
               ref.current = node;
             }
        },
        className: cn("wp-block-dropdown-content", className),
        style: combinedStyle,
        "data-state": isOpen ? "open" : "closed"
      }, children),
      document.body
    );
  }
);
DropdownMenuContent.displayName = "DropdownMenuContent";

export var DropdownMenuItem = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var inset = props.inset;
    var disabled = props.disabled;
    var id = props.id;
    var style = props.style;
    var children = props.children;
    var onClick = props.onClick;

    return React.createElement('div', {
      id: id,
      style: style,
      ref: ref,
      onClick: onClick,
      className: cn(
        "wp-block-dropdown-item",
        inset && "wp-block-dropdown-item--inset",
        className
      ),
      "data-disabled": disabled,
      tabIndex: disabled ? -1 : 0
    }, children);
  }
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export var DropdownMenuCheckboxItem = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var checked = props.checked;
    var disabled = props.disabled;
    var id = props.id;
    var style = props.style;
    var onClick = props.onClick;

    return React.createElement('div', {
      id: id,
      style: style,
      ref: ref,
      onClick: onClick,
      className: cn("wp-block-dropdown-checkbox-item", className),
      "data-disabled": disabled,
      tabIndex: disabled ? -1 : 0
    },
      React.createElement('span', { className: "wp-block-dropdown-item-indicator" },
        checked ? React.createElement(Check, { size: 16 }) : null
      ),
      children
    );
  }
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

var DropdownMenuRadioGroupContext = React.createContext(undefined);

export var DropdownMenuRadioItem = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var value = props.value;
    var disabled = props.disabled;
    var id = props.id;
    var style = props.style;

    var radioGroupContext = React.useContext(DropdownMenuRadioGroupContext);
    var groupValue = radioGroupContext ? radioGroupContext.value : undefined;
    var onValueChange = radioGroupContext ? radioGroupContext.onValueChange : undefined;
    var checked = groupValue === value;

    return React.createElement('div', {
      id: id,
      style: style,
      ref: ref,
      className: cn("wp-block-dropdown-radio-item", className),
      "data-disabled": disabled,
      tabIndex: disabled ? -1 : 0,
      onClick: function() { if (!disabled && onValueChange) { onValueChange(value); } }
    },
      React.createElement('span', { className: "wp-block-dropdown-item-indicator" },
        checked ? React.createElement(Circle, { size: 8, className: "fill-current" }) : null
      ),
      children
    );
  }
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export var DropdownMenuRadioGroup = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var value = props.value;
    var onValueChange = props.onValueChange;
    var id = props.id;
    var style = props.style;

    return React.createElement(DropdownMenuRadioGroupContext.Provider, { value: { value: value, onValueChange: onValueChange } },
      React.createElement('div', { 
        id: id,
        style: style,
        ref: ref, 
        className: cn("", className), 
        role: "group"
      }, children)
    );
  }
);
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";

export var DropdownMenuLabel = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var inset = props.inset;
    var children = props.children;
    var id = props.id;
    var style = props.style;

    return React.createElement('div', {
      ref: ref,
      id: id,
      style: style,
      className: cn("wp-block-dropdown-label", inset && "wp-block-dropdown-label--inset", className)
    }, children);
  }
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";

export var DropdownMenuSeparator = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var id = props.id;
    var style = props.style;

    return React.createElement('div', {
      ref: ref,
      id: id,
      style: style,
      className: cn("wp-block-dropdown-separator", className)
    });
  }
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export function DropdownMenuShortcut(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('span', {
    id: id,
    style: style,
    className: cn("wp-block-dropdown-shortcut", className)
  }, children);
}

export var DropdownMenuGroup = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var id = props.id;
    var style = props.style;

    return React.createElement('div', { 
      ref: ref, 
      id: id,
      style: style,
      className: className
    }, children);
  }
);
DropdownMenuGroup.displayName = "DropdownMenuGroup";

export function DropdownMenuSub(props) {
  var children = props.children;
  return React.createElement(React.Fragment, null, children);
}

export var DropdownMenuSubTrigger = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var inset = props.inset;
    var children = props.children;
    var id = props.id;
    var style = props.style;

    return React.createElement('div', {
      ref: ref,
      id: id,
      style: style,
      className: cn("wp-block-dropdown-sub-trigger", inset && "wp-block-dropdown-sub-trigger--inset", className)
    },
      children,
      React.createElement(ChevronRight, { size: 16, className: "wp-block-dropdown-sub-trigger-icon" })
    );
  }
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export var DropdownMenuSubContent = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var id = props.id;
    var style = props.style;

    return React.createElement('div', { 
      ref: ref, 
      id: id,
      style: style,
      className: cn("wp-block-dropdown-menu-sub-content", className)
    }, children);
  }
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";


export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};