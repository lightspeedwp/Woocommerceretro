"use client";

import * as React from "react";
import * as ReactDOMModule from "react-dom";
import * as cnModule from "@/utils/cn";

var createPortal = ReactDOMModule.createPortal;
var cn = cnModule.cn;

// Context
var HoverCardContext = React.createContext(undefined);

function useHoverCard() {
  var context = React.useContext(HoverCardContext);
  if (!context) {
    throw new Error("useHoverCard must be used within a HoverCard");
  }
  return context;
}

// Root
export function HoverCard(props) {
  var children = props.children;
  var defaultOpen = props.defaultOpen === undefined ? false : props.defaultOpen;
  var controlledOpen = props.open;
  var onOpenChange = props.onOpenChange;
  var openDelay = props.openDelay === undefined ? 700 : props.openDelay;
  var closeDelay = props.closeDelay === undefined ? 300 : props.closeDelay;

  var _so = React.useState(defaultOpen);
  var uncontrolledOpen = _so[0];
  var setUncontrolledOpen = _so[1];
  var triggerRef = React.useRef(null);
  var contentRef = React.useRef(null);
  var openTimeoutRef = React.useRef(undefined);
  var closeTimeoutRef = React.useRef(undefined);
  
  var isOpen = controlledOpen === undefined ? uncontrolledOpen : controlledOpen;

  var setIsOpen = function(value) {
    if (onOpenChange) {
      onOpenChange(value);
    } else {
      setUncontrolledOpen(value);
    }
  };

  var handleMouseEnter = function() {
    clearTimeout(closeTimeoutRef.current);
    if (!isOpen) {
        openTimeoutRef.current = setTimeout(function() { setIsOpen(true); }, openDelay);
    }
  };

  var handleMouseLeave = function() {
    clearTimeout(openTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(function() { setIsOpen(false); }, closeDelay);
  };

  return React.createElement(HoverCardContext.Provider, {
    value: { 
        isOpen: isOpen, 
        setIsOpen: setIsOpen, 
        triggerRef: triggerRef, 
        contentRef: contentRef, 
        openDelay: openDelay, 
        closeDelay: closeDelay,
        openTimeoutRef: openTimeoutRef,
        closeTimeoutRef: closeTimeoutRef,
        handleMouseEnter: handleMouseEnter,
        handleMouseLeave: handleMouseLeave
    }
  }, children);
}

// Trigger
export var HoverCardTrigger = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var asChild = props.asChild === undefined ? false : props.asChild;
    var id = props.id;
    var style = props.style;

    var context = useHoverCard();
    var triggerRef = context.triggerRef;
    var handleMouseEnter = context.handleMouseEnter;
    var handleMouseLeave = context.handleMouseLeave;

    React.useImperativeHandle(ref, function() { return triggerRef.current; });

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
        id: id,
        style: style,
        className: cn(className, child.props.className)
      });
    }

    return React.createElement('a', {
      id: id,
      style: style,
      ref: triggerRef,
      className: className,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }, children);
  }
);
HoverCardTrigger.displayName = "HoverCardTrigger";

// Content
export var HoverCardContent = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var sideOffset = props.sideOffset === undefined ? 4 : props.sideOffset;
    var align = props.align === undefined ? "center" : props.align;
    var style = props.style;
    var children = props.children;
    var id = props.id;

    var context = useHoverCard();
    var isOpen = context.isOpen;
    var triggerRef = context.triggerRef;
    var contentRef = context.contentRef;
    var handleMouseEnter = context.handleMouseEnter;
    var handleMouseLeave = context.handleMouseLeave;

    var _sp = React.useState({ top: 0, left: 0 });
    var position = _sp[0];
    var setPosition = _sp[1];

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
        className: cn("wp-block-hover-card-content", className),
        style: {
          top: position.top,
          left: position.left,
          position: "absolute",
          marginTop: style && style.marginTop,
          marginBottom: style && style.marginBottom,
          marginLeft: style && style.marginLeft,
          marginRight: style && style.marginRight
        },
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        'data-state': isOpen ? "open" : "closed"
      }, children),
      document.body
    );
  }
);
HoverCardContent.displayName = "HoverCardContent";

export { HoverCard, HoverCardTrigger, HoverCardContent };
