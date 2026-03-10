import React from "react";
import { SidebarSimple as PanelLeftIcon } from '@phosphor-icons/react';

var useState = React.useState;
var useEffect = React.useEffect;
var useContext = React.useContext;
var createContext = React.createContext;
var useCallback = React.useCallback;
var useMemo = React.useMemo;
var isValidElement = React.isValidElement;
var cloneElement = React.cloneElement;

import * as MobileHookModule from "@/hooks/useMobile";
import * as ButtonsModule from "@/components/blocks/design/Buttons";
import * as InputModule from "@/components/blocks/forms/Input";
import * as SeparatorModule from "@/components/blocks/design/Separator";
import * as SheetModule from "@/components/blocks/layout/Sheet";
import * as SkeletonModule from "@/components/blocks/feedback/Skeleton";
import * as TooltipModule from "@/components/blocks/overlay/Tooltip";

var useIsMobile = MobileHookModule.useIsMobile;
var Button = ButtonsModule.Button;
var Input = InputModule.Input;
var Separator = SeparatorModule.Separator;
var Sheet = SheetModule.Sheet;
var SheetContent = SheetModule.SheetContent;
var SheetDescription = SheetModule.SheetDescription;
var SheetHeader = SheetModule.SheetHeader;
var SheetTitle = SheetModule.SheetTitle;
var Skeleton = SkeletonModule.Skeleton;
var Tooltip = TooltipModule.Tooltip;
var TooltipContent = TooltipModule.TooltipContent;
var TooltipProvider = TooltipModule.TooltipProvider;
var TooltipTrigger = TooltipModule.TooltipTrigger;

var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";

var SidebarContext = createContext(null);

export function useSidebar() {
  var context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}

export function SidebarProvider(props) {
  var defaultOpen = props.defaultOpen === undefined ? true : props.defaultOpen;
  var openProp = props.open;
  var setOpenProp = props.onOpenChange;
  var className = props.className || '';
  var styleProp = props.style;
  var children = props.children;
  var id = props.id;

  var isMobile = useIsMobile();
  var mobileState = useState(false);
  var openMobile = mobileState[0];
  var setOpenMobile = mobileState[1];
  var internalState = useState(defaultOpen);
  var _open = internalState[0];
  var _setOpen = internalState[1];
  var open = openProp !== undefined ? openProp : _open;
  
  var setOpen = useCallback(
    function(value) {
      var openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = SIDEBAR_COOKIE_NAME + "=" + openState + "; path=/; max-age=" + SIDEBAR_COOKIE_MAX_AGE;
    },
    [setOpenProp, open],
  );

  var toggleSidebar = useCallback(function() {
    return isMobile ? setOpenMobile(function(o) { return !o; }) : setOpen(function(o) { return !o; });
  }, [isMobile, setOpen, setOpenMobile]);

  useEffect(function() {
    var handleKeyDown = function(event) {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return function() { window.removeEventListener("keydown", handleKeyDown); };
  }, [toggleSidebar]);

  var state = open ? "expanded" : "collapsed";

  var contextValue = useMemo(
    function() {
      return {
        state: state,
        open: open,
        setOpen: setOpen,
        isMobile: isMobile,
        openMobile: openMobile,
        setOpenMobile: setOpenMobile,
        toggleSidebar: toggleSidebar,
      };
    },
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  var finalStyle = {
    "--sidebar-width": SIDEBAR_WIDTH,
    "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
  };
  if (styleProp) {
    var keys = Object.keys(styleProp);
    for (var i = 0; i < keys.length; i++) {
      finalStyle[keys[i]] = styleProp[keys[i]];
    }
  }

  var combinedClassName = [
    'wp-block-sidebar-wrapper',
    'funky-sidebar-wrapper',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement(SidebarContext.Provider, { value: contextValue },
    React.createElement(TooltipProvider, { delayDuration: 0 },
      React.createElement('div', {
        id: id,
        'data-slot': "sidebar-wrapper",
        style: finalStyle,
        className: combinedClassName
      }, children)
    )
  );
}

export function Sidebar(props) {
  var side = props.side === undefined ? "left" : props.side;
  var variant = props.variant === undefined ? "sidebar" : props.variant;
  var collapsible = props.collapsible === undefined ? "offcanvas" : props.collapsible;
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var sidebar = useSidebar();
  var isMobile = sidebar.isMobile;
  var state = sidebar.state;
  var openMobile = sidebar.openMobile;
  var setOpenMobile = sidebar.setOpenMobile;

  if (collapsible === "none") {
    return React.createElement('div', {
      id: id,
      style: style,
      'data-slot': "sidebar",
      className: 'wp-block-sidebar funky-sidebar ' + className
    }, children);
  }

  if (isMobile) {
    var sheetStyle = { "--sidebar-width": SIDEBAR_WIDTH_MOBILE };
    if (style) {
      var skeys = Object.keys(style);
      for (var si = 0; si < skeys.length; si++) {
        sheetStyle[skeys[si]] = style[skeys[si]];
      }
    }

    return React.createElement(Sheet, { open: openMobile, onOpenChange: setOpenMobile },
      React.createElement(SheetContent, {
        'data-sidebar': "sidebar",
        'data-slot': "sidebar",
        className: "wp-block-sidebar funky-sidebar-mobile",
        style: sheetStyle,
        side: side
      },
        React.createElement(SheetHeader, { className: "sr-only" },
          React.createElement(SheetTitle, null, "Sidebar"),
          React.createElement(SheetDescription, null, "Displays the mobile sidebar.")
        ),
        React.createElement('div', { className: "wp-block-sidebar-inner" }, children)
      )
    );
  }

  var wrapperClassName = [
    'wp-block-sidebar-desktop-wrapper',
    'funky-sidebar-desktop',
    side === 'left' ? 'is-left' : 'is-right'
  ].join(' ');

  var containerClassName = [
    'wp-block-sidebar-container',
    side === 'left' ? 'wp-block-sidebar-container--left' : 'wp-block-sidebar-container--right',
    (variant === "floating" || variant === "inset") ? 'wp-block-sidebar-container--floating' : '',
    className,
    'funky-sidebar-container'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    id: id,
    style: style,
    className: wrapperClassName,
    'data-state': state,
    'data-collapsible': state === "collapsed" ? collapsible : "",
    'data-variant': variant,
    'data-side': side,
    'data-slot': "sidebar"
  },
    React.createElement('div', { 'data-slot': "sidebar-gap", className: "wp-block-sidebar-gap" }),
    React.createElement('div', {
      'data-slot': "sidebar-container",
      className: containerClassName,
      'data-side': side
    },
      React.createElement('div', {
        'data-sidebar': "sidebar",
        'data-slot': "sidebar-inner",
        className: "wp-block-sidebar-inner"
      }, children)
    )
  );
}

export function SidebarTrigger(props) {
  var className = props.className || '';
  var onClick = props.onClick;
  var id = props.id;
  var style = props.style;

  var sidebar = useSidebar();
  var toggleSidebar = sidebar.toggleSidebar;

  var handleClick = function(event) {
    if (onClick) onClick(event);
    toggleSidebar();
  };

  return React.createElement(Button, {
    id: id,
    style: style,
    'data-sidebar': "trigger",
    'data-slot': "sidebar-trigger",
    variant: "ghost",
    size: "icon",
    className: 'wp-block-sidebar-trigger funky-sidebar-trigger ' + className,
    onClick: handleClick
  },
    React.createElement(PanelLeftIcon, null),
    React.createElement('span', { className: "sr-only" }, "Toggle Sidebar")
  );
}

export function SidebarRail(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;

  var sidebar = useSidebar();
  var toggleSidebar = sidebar.toggleSidebar;

  return React.createElement('button', {
    id: id,
    style: style,
    'data-sidebar': "rail",
    'data-slot': "sidebar-rail",
    'aria-label': "Toggle Sidebar",
    tabIndex: -1,
    onClick: toggleSidebar,
    title: "Toggle Sidebar",
    className: 'wp-block-sidebar-rail funky-sidebar-rail ' + className
  });
}

export function SidebarInset(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('main', {
    id: id,
    style: style,
    'data-slot': "sidebar-inset",
    className: 'wp-block-sidebar-inset funky-sidebar-inset ' + className
  }, children);
}

export function SidebarInput(props) {
  var className = props.className || '';
  var value = props.value;
  var onChange = props.onChange;
  var placeholder = props.placeholder;
  var type = props.type;
  var id = props.id;
  var style = props.style;

  return React.createElement(Input, {
    id: id,
    style: style,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    'data-slot': "sidebar-input",
    'data-sidebar': "input",
    className: 'wp-block-sidebar-input funky-sidebar-input ' + className
  });
}

export function SidebarHeader(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "sidebar-header",
    'data-sidebar': "header",
    className: 'wp-block-sidebar-header funky-sidebar-header ' + className
  }, children);
}

export function SidebarFooter(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "sidebar-footer",
    'data-sidebar': "footer",
    className: 'wp-block-sidebar-footer funky-sidebar-footer ' + className
  }, children);
}

export function SidebarSeparator(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;

  return React.createElement(Separator, {
    id: id,
    style: style,
    'data-slot': "sidebar-separator",
    'data-sidebar': "separator",
    className: 'wp-block-sidebar-separator funky-sidebar-sep ' + className
  });
}

export function SidebarContent(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "sidebar-content",
    'data-sidebar': "content",
    className: 'wp-block-sidebar-content funky-sidebar-content ' + className
  }, children);
}

export function SidebarGroup(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "sidebar-group",
    'data-sidebar': "group",
    className: 'wp-block-sidebar-group funky-sidebar-group ' + className
  }, children);
}

export function SidebarGroupLabel(props) {
  var className = props.className || '';
  var asChild = props.asChild === undefined ? false : props.asChild;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  var combinedClassName = [
    'wp-block-sidebar-group-label',
    'funky-sidebar-group-label',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  if (asChild && isValidElement(children)) {
    var child = children;
    return cloneElement(child, {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      id: id,
      style: style,
      className: combinedClassName + ' ' + (child.props.className || '')
    });
  }

  return React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "sidebar-group-label",
    'data-sidebar': "group-label",
    className: combinedClassName
  }, children);
}

export function SidebarGroupAction(props) {
  var className = props.className || '';
  var asChild = props.asChild === undefined ? false : props.asChild;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  var combinedClassName = [
    'wp-block-sidebar-group-action',
    'funky-sidebar-group-action',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  if (asChild && isValidElement(children)) {
    var child = children;
    return cloneElement(child, {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      id: id,
      style: style,
      onClick: onClick,
      className: combinedClassName + ' ' + (child.props.className || '')
    });
  }

  return React.createElement('button', {
    id: id,
    style: style,
    onClick: onClick,
    'data-slot': "sidebar-group-action",
    'data-sidebar': "group-action",
    className: combinedClassName
  }, children);
}

export function SidebarGroupContent(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "sidebar-group-content",
    'data-sidebar': "group-content",
    className: 'wp-block-sidebar-group-content funky-sidebar-group-content ' + className
  }, children);
}

export function SidebarMenu(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('ul', {
    id: id,
    style: style,
    'data-slot': "sidebar-menu",
    'data-sidebar': "menu",
    className: 'wp-block-sidebar-menu funky-sidebar-menu ' + className
  }, children);
}

export function SidebarMenuItem(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('li', {
    id: id,
    style: style,
    'data-slot': "sidebar-menu-item",
    'data-sidebar': "menu-item",
    className: 'wp-block-sidebar-menu-item funky-sidebar-menu-item ' + className
  }, children);
}

export function SidebarMenuButton(props) {
  var asChild = props.asChild === undefined ? false : props.asChild;
  var isActive = props.isActive === undefined ? false : props.isActive;
  var variant = props.variant === undefined ? "default" : props.variant;
  var size = props.size === undefined ? "default" : props.size;
  var tooltipProp = props.tooltip;
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  var sidebar = useSidebar();
  var sidebarState = sidebar.state;
  var isMobile = sidebar.isMobile;

  var combinedClassName = [
    'wp-block-sidebar-menu-button',
    'wp-block-sidebar-menu-button--' + variant,
    'wp-block-sidebar-menu-button--' + size,
    'funky-sidebar-menu-btn',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  var button;

  if (asChild && isValidElement(children)) {
    var child = children;
    button = cloneElement(child, {
      id: id,
      style: style,
      onClick: onClick,
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: combinedClassName + ' ' + (child.props ? child.props.className || '' : '')
    });
  } else {
    button = React.createElement('button', {
      id: id,
      style: style,
      onClick: onClick,
      'data-slot': "sidebar-menu-button",
      'data-sidebar': "menu-button",
      'data-size': size,
      'data-active': isActive,
      className: combinedClassName
    }, children);
  }

  if (!tooltipProp) return button;

  var tooltipContent = typeof tooltipProp === "string" ? tooltipProp : tooltipProp.children;

  return React.createElement(Tooltip, null,
    React.createElement(TooltipTrigger, { asChild: true }, button),
    React.createElement(TooltipContent, {
      side: "right",
      align: "center",
      hidden: sidebarState !== "collapsed" || isMobile
    }, tooltipContent)
  );
}

export function SidebarMenuAction(props) {
  var className = props.className || '';
  var asChild = props.asChild === undefined ? false : props.asChild;
  var showOnHover = props.showOnHover === undefined ? false : props.showOnHover;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  var combinedClassName = [
    'wp-block-sidebar-menu-action',
    showOnHover ? 'wp-block-sidebar-menu-action--show-on-hover' : '',
    'funky-sidebar-menu-action',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  if (asChild && isValidElement(children)) {
    var child = children;
    return cloneElement(child, {
      id: id,
      style: style,
      onClick: onClick,
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: combinedClassName + ' ' + (child.props.className || '')
    });
  }

  return React.createElement('button', {
    id: id,
    style: style,
    onClick: onClick,
    'data-slot': "sidebar-menu-action",
    'data-sidebar': "menu-action",
    className: combinedClassName
  }, children);
}

export function SidebarMenuBadge(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('div', {
    id: id,
    style: style,
    'data-slot': "sidebar-menu-badge",
    'data-sidebar': "menu-badge",
    className: 'wp-block-sidebar-menu-badge funky-sidebar-menu-badge ' + className
  }, children);
}

export function SidebarMenuSkeleton(props) {
  var className = props.className || '';
  var showIcon = props.showIcon === undefined ? false : props.showIcon;
  var id = props.id;
  var styleProp = props.style;

  var width = useMemo(function() {
    return (Math.floor(Math.random() * 40) + 50) + "%";
  }, []);

  var finalStyle = { "--skeleton-width": width };
  if (styleProp) {
    var keys = Object.keys(styleProp);
    for (var i = 0; i < keys.length; i++) {
      finalStyle[keys[i]] = styleProp[keys[i]];
    }
  }

  return React.createElement('div', {
    id: id,
    'data-slot': "sidebar-menu-skeleton",
    'data-sidebar': "menu-skeleton",
    className: 'wp-block-sidebar-menu-skeleton funky-sidebar-skeleton ' + className
  },
    showIcon ? React.createElement(Skeleton, { className: "wp-block-sidebar-skeleton-icon" }) : null,
    React.createElement(Skeleton, {
      className: "wp-block-sidebar-skeleton-text",
      style: finalStyle
    })
  );
}

export function SidebarMenuSub(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('ul', {
    id: id,
    style: style,
    'data-slot': "sidebar-menu-sub",
    'data-sidebar': "menu-sub",
    className: 'wp-block-sidebar-menu-sub funky-sidebar-menu-sub ' + className
  }, children);
}

export function SidebarMenuSubItem(props) {
  var className = props.className || '';
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('li', {
    id: id,
    style: style,
    'data-slot': "sidebar-menu-sub-item",
    'data-sidebar': "menu-sub-item",
    className: 'wp-block-sidebar-menu-sub-item funky-sidebar-menu-sub-item ' + className
  }, children);
}

export function SidebarMenuSubButton(props) {
  var asChild = props.asChild === undefined ? false : props.asChild;
  var size = props.size === undefined ? "md" : props.size;
  var isActive = props.isActive === undefined ? false : props.isActive;
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var href = props.href;

  var combinedClassName = [
    'wp-block-sidebar-menu-sub-button',
    'wp-block-sidebar-menu-sub-button--' + size,
    'funky-sidebar-menu-sub-btn',
    isActive ? 'is-active' : '',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  if (asChild && isValidElement(children)) {
    var child = children;
    return cloneElement(child, {
        id: id,
        style: style,
        "data-slot": "sidebar-menu-sub-button",
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: combinedClassName + ' ' + (child.props.className || '')
    });
  }

  return React.createElement('a', {
    id: id,
    style: style,
    href: href,
    'data-slot': "sidebar-menu-sub-button",
    'data-sidebar': "menu-sub-button",
    'data-size': size,
    'data-active': isActive,
    className: combinedClassName
  }, children);
}