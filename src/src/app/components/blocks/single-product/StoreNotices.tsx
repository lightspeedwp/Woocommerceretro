import React from 'react';
import { WarningCircle, CheckCircle, Info } from '@phosphor-icons/react';

/* Notice: { type: string, message: string } */
/* StoreNoticesProps: { notices: Notice[] } */

/**
 * StoreNotices Block
 * 
 * Displays global or context-specific store alerts (e.g., "Added to cart", "Out of stock").
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 */
export function StoreNotices(props) {
  var notices = props.notices;

  if (!notices || notices.length === 0) {
    return null;
  }

  var noticeElements = notices.map(function(notice, index) {
    var noticeType = notice.type;
    var noticeMessage = notice.message;

    var iconElement = (function() {
      if (noticeType === 'success') {
        return React.createElement(CheckCircle, { size: 18 });
      }
      if (noticeType === 'error') {
        return React.createElement(AlertCircle, { size: 18 });
      }
      if (noticeType === 'info') {
        return React.createElement(Info, { size: 18 });
      }
      return null;
    })();

    return React.createElement('div', {
      key: index,
      className: 'wc-store-notice wc-store-notice--' + noticeType
    }, 
      React.createElement('div', { className: 'wc-store-notice__icon' }, iconElement),
      React.createElement('span', { className: 'wc-store-notice__message' }, noticeMessage)
    );
  });

  return React.createElement('div', { className: 'wc-store-notices' }, noticeElements);
}