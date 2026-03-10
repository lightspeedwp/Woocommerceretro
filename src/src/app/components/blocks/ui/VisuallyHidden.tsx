"use client";

import * as React from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import * as cnModule from "../../../utils/cn";
var cn = cnModule.cn;

var VH = VisuallyHiddenPrimitive && (VisuallyHiddenPrimitive.default || VisuallyHiddenPrimitive) || {};
var VisuallyHiddenRoot = VH.Root || "span";

/**
 * VisuallyHidden Component
 * Hides content visually while remaining accessible to screen readers.
 * Essential for providing context to assistive technology without affecting layout.
 * No TypeScript syntax for parser compatibility.
 */
var VisuallyHidden = React.forwardRef(function(props, ref) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement(VisuallyHiddenRoot, {
    id: id,
    style: style,
    ref: ref,
    className: cn("wp-visually-hidden", className)
  }, children);
});

export { VisuallyHidden };
