"use client";

import * as React from "react";
import * as ReactDOMModule from "react-dom";
import * as cnModule from "@/utils/cn";

var createPortal = ReactDOMModule.createPortal;
var cn = cnModule.cn;

// Context
var TooltipContext = React.createContext(undefined);

function useTooltip() {
  var context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a TooltipProvider");
  }
  return context;
}

// Provider
export function TooltipProvider(props) {
  var children = props.children;
  return React.createElement(React.Fragment, null, children);
}

// Root
export function Tooltip(props) {
  var children = props.children;
  var defaultOpen = props.defaultOpen === undefined ? false : props.defaultOpen;
  var controlledOpen = props.open;
  var onOpenChange = props.onOpenChange;
  
  var _so = React.useState(defaultOpen);
  var uncontrolledOpen = _so[0];
  var setUncontrolledOpen = _so[1];
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

  return React.createElement(TooltipContext.Provider, {
    value: { isOpen: isOpen, setIsOpen: setIsOpen, triggerRef: triggerRef, contentRef: contentRef }
  }, children);
}

// Trigger
export var TooltipTrigger = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var asChild = props.asChild === undefined ? false : props.asChild;
    var id = props.id;
    var style = props.style;

    var context = useTooltip();
    var setIsOpen = context.setIsOpen;
    var triggerRef = context.triggerRef;

    React.useImperativeHandle(ref, function() { return triggerRef.current; });

    var handleMouseEnter = function() {
      setIsOpen(true);
    };

    var handleMouseLeave = function() {
      setIsOpen(false);
    };

    var handleFocus = function() {
      setIsOpen(true);
    };

    var handleBlur = function() {
      setIsOpen(false);
    };

    if (asChild && React.isValidElement(children)) {
      var child = children;
      return React.cloneElement(child, {
        ref: function(node) {
          triggerRef.current = node;
          var originalRef = child.ref;
          if (typeof originalRef === 'function') {
            originalRef(node);
          } else if (originalRef) {
            originalRef.current = node;
          }
        },
        onMouseEnter: function(e) {
           handleMouseEnter();
           if (child.props.onMouseEnter) {
             child.props.onMouseEnter(e);
           }
        },
        onMouseLeave: function(e) {
           handleMouseLeave();
           if (child.props.onMouseLeave) {
             child.props.onMouseLeave(e);
           }
        },
        onFocus: function(e) {
           handleFocus();
           if (child.props.onFocus) {
             child.props.onFocus(e);
           }
        },
        onBlur: function(e) {
           handleBlur();
           if (child.props.onBlur) {
             child.props.onBlur(e);
           }
        },
        id: id,
        style: style,
        className: cn(className, child.props.className)
      });
    }

    return React.createElement('button', {
      id: id,
      style: style,
      ref: triggerRef,
      className: className,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur
    }, children);
  }
);
TooltipTrigger.displayName = "TooltipTrigger";

// Content
export var TooltipContent = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var sideOffset = props.sideOffset === undefined ? 4 : props.sideOffset;
    var side = props.side === undefined ? "top" : props.side;
    var style = props.style;
    var children = props.children;
    var id = props.id;

    var context = useTooltip();
    var isOpen = context.isOpen;
    var triggerRef = context.triggerRef;
    var contentRef = context.contentRef;

    var _sp = React.useState({ top: 0, left: 0 });
    var position = _sp[0];
    var setPosition = _sp[1];

    React.useEffect(function() {
      if (isOpen && triggerRef.current && contentRef.current) {
        var updatePosition = function() {
            if (!triggerRef.current || !contentRef.current) return;
            var triggerRect = triggerRef.current.getBoundingClientRect();
            var contentRect = contentRef.current.getBoundingClientRect();
            
            var top = triggerRect.top + window.scrollY - contentRect.height - sideOffset;
            var left = triggerRect.left + window.scrollX + (triggerRect.width / 2) - (contentRect.width / 2);

            if (left < 5) {
              left = 5;
            }
            if (left + contentRect.width > window.innerWidth - 5) {
                left = window.innerWidth - contentRect.width - 5;
            }

            if (top < window.scrollY + 5) {
                 top = triggerRect.bottom + window.scrollY + sideOffset;
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
    }, [isOpen, sideOffset, triggerRef, contentRef]);

    if (!isOpen) return null;

    return createPortal(
      React.createElement('div', {
        id: id,
        ref: function(node) {
             contentRef.current = node;
             if (typeof ref === 'function') {
               ref(node);
             } else if (ref) {
               ref.current = node;
             }
        },
        className: cn("wp-block-tooltip-content", className),
        style: {
          top: position.top,
          left: position.left,
          position: "absolute",
          marginTop: style && style.marginTop,
          marginBottom: style && style.marginBottom,
          marginLeft: style && style.marginLeft,
          marginRight: style && style.marginRight
        },
        'data-state': isOpen ? "delayed-open" : "closed"
      }, children),
      document.body
    );
  }
);
TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
