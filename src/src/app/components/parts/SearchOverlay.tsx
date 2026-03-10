import React from 'react';
import { X } from '@phosphor-icons/react';
import * as SearchAutocompleteModule from '../blocks/search/SearchAutocomplete';

var SearchAutocomplete = SearchAutocompleteModule.SearchAutocomplete;

/**
 * SearchOverlay Component (Block)
 * Full-screen search overlay for mobile devices.
 */
export function SearchOverlay(props) {
  var isOpen = props.isOpen;
  var onClose = props.onClose;

  React.useEffect(function() {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return function() { document.body.style.overflow = ''; };
  }, [isOpen]);

  React.useEffect(function() {
    function handleEscape(e) {
      if (e.key === 'Escape' && isOpen) { onClose(); }
    }
    document.addEventListener('keydown', handleEscape);
    return function() { document.removeEventListener('keydown', handleEscape); };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return React.createElement(React.Fragment, null,
    React.createElement('div', {
      className: 'wp-search-overlay__backdrop',
      onClick: onClose
    }),
    React.createElement('div', { className: 'wp-search-overlay__container' },
      React.createElement('div', { className: 'wp-search-overlay__content' },
        React.createElement('div', { className: 'wp-search-overlay__header' },
          React.createElement('h2', { className: 'wp-search-overlay__title' }, 'Search Products'),
          React.createElement('button', { onClick: onClose, 'aria-label': 'Close search', className: 'wp-search-overlay__close' },
            React.createElement(X, { size: 24 })
          )
        ),
        React.createElement('div', { className: 'wp-search-overlay__body' },
          React.createElement(SearchAutocomplete, {
            placeholder: 'What are you looking for?',
            autoFocus: true,
            onSearch: function() { onClose(); }
          })
        )
      )
    )
  );
}