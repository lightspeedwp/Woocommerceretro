import React from 'react';
import { X, FadersHorizontal as SlidersHorizontal } from '@phosphor-icons/react';
import * as ButtonsModule from '../design/Buttons';
import * as TypographyModule from '../../common/Typography';
import * as FilterSidebarModule from './FilterSidebar';

var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;
var FilterSidebar = FilterSidebarModule.FilterSidebar;

/**
 * MobileFilterDrawer Component
 */

/* MobileFilterDrawerProps: { isOpen, onClose, filters, onFilterChange, onClearFilters, resultCount } */

export function MobileFilterDrawer(props) {
  var isOpen = props.isOpen;
  var onClose = props.onClose;
  var filters = props.filters;
  var onFilterChange = props.onFilterChange;
  var onClearFilters = props.onClearFilters;
  var resultCount = props.resultCount;

  // Prevent body scroll when drawer is open
  React.useEffect(function() {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return function() {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return React.createElement('div', { className: "woocommerce-mobile-filter-drawer" },
    /* Backdrop */
    React.createElement('div', { 
      className: "woocommerce-mobile-filter-drawer__backdrop",
      onClick: onClose,
      'aria-hidden': "true"
    }),

    /* Drawer */
    React.createElement('div', { className: "woocommerce-mobile-filter-drawer__content" },
      /* Header */
      React.createElement('div', { className: "woocommerce-mobile-filter-drawer__header" },
        React.createElement('div', { className: "woocommerce-mobile-filter-drawer__header-title" },
          React.createElement(SlidersHorizontal, { size: 20, className: "woocommerce-mobile-filter-drawer__icon", 'aria-hidden': "true" }),
          React.createElement(Typography, { className: "woocommerce-mobile-filter-drawer__title" }, "Filters & Sort")
        ),
        
        React.createElement('button', {
          onClick: onClose,
          className: "woocommerce-mobile-filter-drawer__close",
          'aria-label': "Close filters"
        },
          React.createElement(X, { size: 20, 'aria-hidden': "true" })
        )
      ),

      /* Scrollable Content - FilterSidebar */
      React.createElement('div', { className: "woocommerce-mobile-filter-drawer__body" },
        React.createElement('div', { className: "woocommerce-mobile-filter-drawer__body-inner" },
          React.createElement(FilterSidebar, { 
            filters: filters,
            onFilterChange: onFilterChange,
            onClearFilters: onClearFilters,
            isMobileView: true
          })
        )
      ),

      /* Footer Actions */
      React.createElement('div', { className: "woocommerce-mobile-filter-drawer__footer" },
        resultCount !== undefined ? React.createElement('div', { className: "woocommerce-mobile-filter-drawer__result-count" },
          React.createElement(Typography, { variant: "caption", className: "woocommerce-mobile-filter-drawer__result-text" },
            resultCount + ' ' + (resultCount === 1 ? 'result' : 'results') + ' found'
          )
        ) : null,
        
        React.createElement('div', { className: "woocommerce-mobile-filter-drawer__actions" },
          React.createElement(Button, {
            variant: "outline",
            onClick: function() { onClearFilters(); },
            className: "woocommerce-mobile-filter-drawer__action-clear"
          }, "Clear All"),
          
          React.createElement(Button, {
            onClick: onClose,
            className: "woocommerce-mobile-filter-drawer__action-show"
          }, 
            React.createElement('strong', null, "Show Results")
          )
        )
      )
    )
  );
}