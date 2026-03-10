import React from 'react';
import { X } from '@phosphor-icons/react';
import * as ButtonsModule from '../design/Buttons';
import * as TypographyModule from '../../common/Typography';
import * as FilterSidebarModule from './FilterSidebar';

var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;
var FilterSidebar = FilterSidebarModule.FilterSidebar;

/**
 * FiltersMobileDrawer Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function FiltersMobileDrawer(props) {
  var isOpen = props.isOpen;
  var onClose = props.onClose;
  var filters = props.filters;
  var onFilterChange = props.onFilterChange;
  var onClearAll = props.onClearAll;
  var className = props.className || '';

  if (!isOpen) return null;

  return React.createElement('div', { className: "wp-filters-mobile-drawer funky-mobile-drawer " + className },
    React.createElement('div', { 
      className: "wp-filters-mobile-drawer__backdrop",
      onClick: onClose
    }),
    React.createElement('div', { className: "wp-filters-mobile-drawer__panel animate-slide-in-right" },
      React.createElement('div', { className: "wp-filters-mobile-drawer__header" },
        React.createElement(Typography, { variant: "h4", className: "wp-filters-mobile-drawer__title" }, 
          "Filters"
        ),
        React.createElement('button', {
          onClick: onClose,
          className: "wp-filters-mobile-drawer__close funky-close-btn",
          'aria-label': "Close filters"
        }, React.createElement(X, { className: "wp-filters-mobile-drawer__close-icon" }))
      ),
      React.createElement('div', { className: "wp-filters-mobile-drawer__content" },
        React.createElement(FilterSidebar, {
          filters: filters,
          onFilterChange: onFilterChange,
          onClearAll: onClearAll
        })
      ),
      React.createElement('div', { className: "wp-filters-mobile-drawer__footer" },
        React.createElement(Button, {
          variant: "primary",
          onClick: onClose,
          className: "wp-filters-mobile-drawer__apply funky-primary-btn"
        }, "Apply Filters")
      )
    )
  );
}

FiltersMobileDrawer.displayName = 'FiltersMobileDrawer';