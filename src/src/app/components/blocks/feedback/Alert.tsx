import React from "react";
var forwardRef = React.forwardRef;

/**
 * Alert Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export var Alert = forwardRef(function Alert(props, ref) {
  var className = props.className || '';
  var variant = props.variant || "default";
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;
  var role = props.role || "alert";
  var children = props.children;

  var combinedClassName = [
    'wp-block-alert',
    'wp-block-alert--' + variant,
    'funky-alert',
    className
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    onClick: onClick,
    role: role,
    className: combinedClassName
  }, children);
});

Alert.displayName = "Alert";

export var AlertTitle = forwardRef(function AlertTitle(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('h5', {
    ref: ref,
    id: id,
    style: style,
    className: 'wp-block-alert__title funky-alert-title ' + className
  }, children);
});

AlertTitle.displayName = "AlertTitle";

export var AlertDescription = forwardRef(function AlertDescription(props, ref) {
  var className = props.className || '';
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    ref: ref,
    id: id,
    style: style,
    className: 'wp-block-alert__description funky-alert-desc ' + className
  }, children);
});

AlertDescription.displayName = "AlertDescription";
