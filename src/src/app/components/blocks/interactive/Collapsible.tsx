"use client";

import * as React from "react";
import * as cnModule from "@/utils/cn";

var cn = cnModule.cn;

var CollapsibleContext = React.createContext(undefined);

var Collapsible = React.forwardRef(
  function(props, ref) {
    var controlledOpen = props.open;
    var defaultOpen = props.defaultOpen === undefined ? false : props.defaultOpen;
    var onOpenChange = props.onOpenChange;
    var disabled = props.disabled;
    var className = props.className;
    var children = props.children;
    var id = props.id;
    var style = props.style;

    var _uo = React.useState(defaultOpen);
    var uncontrolledOpen = _uo[0];
    var setUncontrolledOpen = _uo[1];
    var open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

    var handleOpenChange = function(newOpen) {
      if (disabled) return;
      if (onOpenChange) {
        onOpenChange(newOpen);
      }
      if (controlledOpen === undefined) {
        setUncontrolledOpen(newOpen);
      }
    };

    return React.createElement(CollapsibleContext.Provider, { value: { open: open, onOpenChange: handleOpenChange } },
      React.createElement('div', {
        ref: ref,
        id: id,
        style: style,
        "data-state": open ? "open" : "closed",
        className: cn("wp-block-collapsible", className)
      }, children)
    );
  }
);
Collapsible.displayName = "Collapsible";

var CollapsibleTrigger = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var onClick = props.onClick;
    var id = props.id;
    var style = props.style;

    var context = React.useContext(CollapsibleContext);
    if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible");

    return React.createElement('button', {
      ref: ref,
      id: id,
      style: style,
      type: "button",
      "data-state": context.open ? "open" : "closed",
      className: cn("wp-block-collapsible-trigger", className),
      onClick: function(e) {
        context.onOpenChange(!context.open);
        if (onClick) {
          onClick(e);
        }
      }
    }, children);
  }
);
CollapsibleTrigger.displayName = "CollapsibleTrigger";

var CollapsibleContent = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var id = props.id;
    var style = props.style;

    var context = React.useContext(CollapsibleContext);
    if (!context) throw new Error("CollapsibleContent must be used within Collapsible");

    return React.createElement('div', {
      ref: ref,
      id: id,
      style: style,
      "data-state": context.open ? "open" : "closed",
      className: cn("wp-block-collapsible-content", className)
    },
      React.createElement('div', { className: "wp-block-collapsible-content-inner" }, children)
    );
  }
);
CollapsibleContent.displayName = "CollapsibleContent";

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
