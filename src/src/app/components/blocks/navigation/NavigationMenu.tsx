"use client";

import * as React from "react";
import * as ReactDOMModule from "react-dom";
import { CaretDown as ChevronDown } from '@phosphor-icons/react';
import * as cnModule from "@/utils/cn";

var createPortal = ReactDOMModule.createPortal;
var cn = cnModule.cn;

// --- Contexts ---

var NavigationMenuContext = React.createContext(null);
var NavigationMenuItemContext = React.createContext(null);

// --- Components ---

function NavigationMenu(props) {
  var className = props.className;
  var children = props.children;
  var viewport = props.viewport === undefined ? true : props.viewport;
  var defaultValue = props.defaultValue;
  var value = props.value;
  var onValueChange = props.onValueChange;
  var id = props.id;
  var style = props.style;

  var stateArr = React.useState(defaultValue);
  var internalValue = stateArr[0];
  var setInternalValue = stateArr[1];
  var viewportMountedArr = React.useState(false);
  var isViewportMounted = viewportMountedArr[0];
  var setIsViewportMounted = viewportMountedArr[1];
  var viewportRef = React.useRef(null);

  var isControlled = value !== undefined;
  var actualValue = isControlled ? value : internalValue;

  var handleSetValue = React.useCallback(function(newValue) {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    if (onValueChange && newValue !== undefined) {
      onValueChange(newValue);
    }
  }, [isControlled, onValueChange]);

  var handleSetViewportRef = React.useCallback(function(node) {
    viewportRef.current = node;
    setIsViewportMounted(!!node);
  }, []);

  var handleMouseLeave = function() {
    handleSetValue(undefined);
  };

  var contextValue = {
    value: actualValue,
    setValue: handleSetValue,
    viewportRef: viewportRef,
    setViewportRef: handleSetViewportRef,
    isViewportMounted: isViewportMounted
  };

  var navChildren = [children];
  if (viewport) {
    navChildren.push(React.createElement(NavigationMenuViewport, { key: "__viewport" }));
  }

  return React.createElement(NavigationMenuContext.Provider, { value: contextValue },
    React.createElement('nav', {
      id: id,
      style: style,
      'data-slot': "navigation-menu",
      'data-viewport': viewport,
      className: cn("wp-block-navigation-menu", className),
      onMouseLeave: handleMouseLeave
    }, navChildren)
  );
}

function NavigationMenuList(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('ul', {
    id: id,
    style: style,
    'data-slot': "navigation-menu-list",
    className: cn("wp-block-navigation-menu-list", className)
  }, children);
}

function NavigationMenuItem(props) {
  var className = props.className;
  var value = props.value;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var uniqueId = React.useId();
  var itemValue = value || uniqueId;

  return React.createElement(NavigationMenuItemContext.Provider, { value: { value: itemValue } },
    React.createElement('li', {
      id: id,
      style: style,
      'data-slot': "navigation-menu-item",
      className: cn("wp-block-navigation-menu-item", className)
    }, children)
  );
}

function NavigationMenuTrigger(props) {
  var className = props.className;
  var children = props.children;
  var onClick = props.onClick;
  var onMouseEnter = props.onMouseEnter;
  var id = props.id;
  var style = props.style;

  var navContext = React.useContext(NavigationMenuContext);
  var itemContext = React.useContext(NavigationMenuItemContext);

  if (!navContext || !itemContext) return null;

  var isOpen = navContext.value === itemContext.value;

  var handleClick = function(e) {
    navContext.setValue(isOpen ? undefined : itemContext.value);
    if (onClick) {
      onClick(e);
    }
  };

  var handleMouseEnter = function(e) {
    navContext.setValue(itemContext.value);
    if (onMouseEnter) {
      onMouseEnter(e);
    }
  };

  return React.createElement('button', {
    id: id,
    style: style,
    'data-slot': "navigation-menu-trigger",
    'data-state': isOpen ? "open" : "closed",
    className: cn("wp-block-navigation-menu-trigger", "group", className),
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    'aria-expanded': isOpen
  },
    children,
    " ",
    React.createElement(ChevronDown, {
      className: "wp-block-navigation-menu-icon",
      'aria-hidden': "true"
    })
  );
}

function NavigationMenuContent(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var navContext = React.useContext(NavigationMenuContext);
  var itemContext = React.useContext(NavigationMenuItemContext);

  if (!navContext || !itemContext) return null;

  var isOpen = navContext.value === itemContext.value;

  if (!isOpen) return null;

  var content = React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "navigation-menu-content",
    'data-state': isOpen ? "open" : "closed",
    className: cn("wp-block-navigation-menu-content", className)
  }, children);

  // If viewport is mounted, render into it via Portal
  if (navContext.isViewportMounted && navContext.viewportRef.current) {
    return createPortal(content, navContext.viewportRef.current);
  }

  // Fallback if no viewport
  return content;
}

function NavigationMenuViewport(props) {
  var className = props ? props.className : undefined;
  var id = props ? props.id : undefined;
  var style = props ? props.style : undefined;

  var navContext = React.useContext(NavigationMenuContext);

  return React.createElement('div', { className: cn("wp-block-navigation-menu-viewport-container") },
    React.createElement('div', {
      id: id,
      style: style,
      'data-slot': "navigation-menu-viewport",
      ref: navContext === null ? null : navContext.setViewportRef,
      className: cn("wp-block-navigation-menu-viewport", className)
    })
  );
}

function NavigationMenuLink(props) {
  var className = props.className;
  var active = props.active;
  var href = props.href;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;
  var children = props.children;

  return React.createElement('a', {
    id: id,
    style: style,
    onClick: onClick,
    'data-slot': "navigation-menu-link",
    'data-active': active,
    href: href,
    className: cn("wp-block-navigation-menu-link", className)
  }, children);
}

function NavigationMenuIndicator(props) {
  // Stub implementation - complex indicator animations removed
  return null;
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport
};