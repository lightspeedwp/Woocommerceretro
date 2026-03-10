"use client";

import * as React from "react";
import * as cnModule from "@/utils/cn";

var cn = cnModule.cn;

/**
 * ScrollArea Component
 * Native implementation using standard overflow and custom scrollbar styling.
 * 
 * Replaces: components/ui/scroll-area.tsx (which used @radix-ui/react-scroll-area)
 * 
 * Optimized for Figma Make parser:
 * No TypeScript syntax (no interfaces, no type annotations, no generics)
 */

var ScrollArea = React.forwardRef(
  function(props, ref) {
    var className = props.className;
    var children = props.children;
    var viewportClassName = props.viewportClassName;
    var orientation = props.orientation || "vertical";
    var id = props.id;
    var style = props.style;

    return React.createElement('div', {
      ref: ref,
      id: id,
      style: style,
      className: cn("wp-block-scroll-area", className),
      "data-orientation": orientation
    },
      React.createElement('div', { className: cn("wp-block-scroll-area-viewport", viewportClassName) },
        children
      )
    );
  }
);
ScrollArea.displayName = "ScrollArea";

/**
 * ScrollBar Component
 * 
 * No-op component maintained for backward compatibility with Radix API.
 */
var ScrollBar = React.forwardRef(function(props, ref) {
  return null;
});
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
