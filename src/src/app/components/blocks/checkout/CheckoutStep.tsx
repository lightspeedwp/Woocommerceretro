import React from 'react';
import * as TypographyModule from '../../common/Typography';
import { CaretDown as ChevronDown, CheckCircle } from '@phosphor-icons/react';

var Typography = TypographyModule.Typography;

/**
 * CheckoutStep Component (Block)
 * 
 * Layout wrapper for individual steps in multi-step checkout flow.
 */
export function CheckoutStep(props) {
  var number = props.number;
  var title = props.title;
  var children = props.children;
  var isLast = props.isLast !== undefined ? props.isLast : false;
  var headerRight = props.headerRight;
  var isOpen = props.isOpen !== undefined ? props.isOpen : true;
  var isCompleted = props.isCompleted !== undefined ? props.isCompleted : false;
  var onToggle = props.onToggle;
  var className = props.className !== undefined ? props.className : '';

  var handleKeyDown = function(e) {
    if (onToggle && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onToggle();
    }
  };

  var stepClasses = [
    'wp-checkout-step',
    isLast ? 'wp-checkout-step--last' : '',
    isOpen ? 'wp-checkout-step--open' : '',
    isCompleted ? 'wp-checkout-step--completed' : '',
    className,
    'funky-checkout-step'
  ].filter(function(c) { return !!c; }).join(' ');

  var headerClasses = [
    'wp-checkout-step__header',
    onToggle ? 'wp-checkout-step__header--clickable' : '',
    'funky-step-header'
  ].filter(function(c) { return !!c; }).join(' ');

  var circleClasses = [
    'wp-checkout-step__circle',
    isCompleted ? 'wp-checkout-step__circle--completed' : '',
    'funky-step-circle'
  ].filter(function(c) { return !!c; }).join(' ');

  return React.createElement('div', { className: stepClasses },
    React.createElement('div', { className: "wp-checkout-step__indicator" },
      React.createElement('div', { className: circleClasses },
        isCompleted ? 
          React.createElement(CheckCircle, { size: 20, className: "wp-checkout-step__check-icon" }) : 
          React.createElement(Typography, { variant: "h3", className: "wp-checkout-step__number" }, number)
      ),
      !isLast ? React.createElement('div', { className: "wp-checkout-step__connector funky-step-connector" }) : null
    ),
    
    React.createElement('div', { className: "wp-checkout-step__body" },
      React.createElement('div', { 
        className: headerClasses,
        onClick: onToggle,
        role: onToggle ? 'button' : undefined,
        tabIndex: onToggle ? 0 : undefined,
        onKeyDown: handleKeyDown
      },
        React.createElement('div', { className: "wp-checkout-step__header-main" },
          React.createElement(Typography, { variant: "h3", className: "wp-checkout-step__title funky-step-title" }, title),
          isCompleted && !isOpen ? React.createElement('span', { className: "wp-checkout-step__summary-text" }, "Completed") : null
        ),
        
        React.createElement('div', { className: "wp-checkout-step__header-actions" },
          headerRight,
          onToggle ? React.createElement(ChevronDown, { 
            size: 20, 
            className: "wp-checkout-step__chevron " + (isOpen ? 'wp-checkout-step__chevron--open' : '')
          }) : null
        )
      ),

      React.createElement('div', { className: "wp-checkout-step__content " + (isOpen ? 'wp-checkout-step__content--open' : 'wp-checkout-step__content--closed') },
        React.createElement('div', { className: "wp-checkout-step__content-inner" },
          children
        )
      )
    )
  );
}

CheckoutStep.displayName = 'CheckoutStep';