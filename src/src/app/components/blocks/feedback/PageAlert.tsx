/**
 * PageAlert.tsx - Feedback Block
 * 
 * Contextual alert component for displaying success, error, and informational messages.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import { CheckCircle, WarningCircle as AlertCircle, Info, X } from '@phosphor-icons/react';

var iconClass = "wp-block-page-alert__icon";
  
var icons = {
  success: React.createElement(CheckCircle, { size: 20, className: iconClass }),
  error: React.createElement(AlertCircle, { size: 20, className: iconClass }),
  info: React.createElement(Info, { size: 20, className: iconClass })
};

export function PageAlert(props) {
  var type = props.type;
  var message = props.message;
  var onDismiss = props.onDismiss;

  var containerClassName = "wp-block-page-alert wp-block-page-alert--" + type;
  
  var children = [
    icons[type],
    React.createElement('p', { className: "wp-block-page-alert__message" }, message)
  ];

  if (onDismiss) {
    children.push(
      React.createElement('button', {
        onClick: onDismiss,
        className: "wp-block-page-alert__dismiss",
        "aria-label": "Dismiss alert"
      }, React.createElement(X, { size: 16 }))
    );
  }

  return React.createElement('div', {
    className: containerClassName,
    role: "alert"
  }, children);
}