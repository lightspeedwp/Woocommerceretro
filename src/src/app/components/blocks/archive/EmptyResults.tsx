import React from 'react';
import { MagnifyingGlass as SearchX } from '@phosphor-icons/react';
import * as ButtonsModule from '../design/Buttons';
import * as TypographyModule from '../../common/Typography';

var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;

/**
 * EmptyResults Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function EmptyResults(props) {
  var onReset = props.onReset;
  var className = props.className || '';

  return React.createElement('div', { className: "wp-empty-results funky-empty-results " + className },
    React.createElement('div', { className: "wp-empty-results__icon-wrapper" },
      React.createElement(SearchX, { className: "wp-empty-results__icon funky-empty-icon" })
    ),
    React.createElement(Typography, { variant: "h3", className: "wp-empty-results__title" }, 
      "No products found"
    ),
    React.createElement(Typography, { variant: "body", className: "wp-empty-results__description" }, 
      "Try adjusting your filters or search terms to find what you're looking for."
    ),
    React.createElement('div', { className: "wp-empty-results__actions" },
      React.createElement(Button, { 
        variant: "primary",
        onClick: onReset,
        className: "funky-primary-btn"
      }, "Clear All Filters")
    )
  );
}

EmptyResults.displayName = 'EmptyResults';