/**
 * badge.tsx - UI Block
 * 
 * Small status indicator or label.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

"use client";

import * as React from "react";
import * as cnModule from "./utils";
var cn = cnModule.cn;

export function Badge(props) {
  var className = props.className || '';
  var variant = props.variant || 'default';
  var size = props.size || 'md';
  var children = props.children;
  var style = props.style;
  var id = props.id;

  var compClass = cn(
    "wp-block-badge",
    "wp-block-badge--variant-" + variant,
    "wp-block-badge--size-" + size,
    className
  );

  return React.createElement('span', {
    id: id,
    style: style,
    "data-slot": "badge",
    className: compClass
  }, children);
}

Badge.displayName = 'Badge';