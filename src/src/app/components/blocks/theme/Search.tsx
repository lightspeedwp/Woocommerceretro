/**
 * Search Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
import { MagnifyingGlass as Search } from '@phosphor-icons/react';
import * as UiUtils from '../ui/utils';

var useState = React.useState;
var useNavigate = ReactRouterModule.useNavigate;
var SearchIcon = Search;
var cn = UiUtils.cn;

export function Search(props) {
  var placeholder = props.placeholder || 'Search\u2026';
  var buttonLabel = props.buttonLabel || 'Search';
  var buttonPosition = props.buttonPosition || 'inside';
  var showIcon = props.showIcon !== undefined ? props.showIcon : true;
  var align = props.align || 'start';
  var onSearch = props.onSearch;
  var className = props.className;
  var style = props.style;

  var navigate = useNavigate();
  var _q = useState('');
  var query = _q[0];
  var setQuery = _q[1];
  
  var alignClasses = {
    start: 'wp-block-search--start',
    center: 'wp-block-search--center',
    end: 'wp-block-search--end'
  };
  
  var handleSubmit = function(e) {
    e.preventDefault();
    var trimmedQuery = query.trim();
    
    if (!trimmedQuery) {
      return;
    }
    
    if (onSearch) {
      onSearch(trimmedQuery);
    } else {
      navigate('/shop?search=' + encodeURIComponent(trimmedQuery));
    }
  };

  var inputElement = React.createElement('input', {
    id: 'wp-block-search__input',
    type: 'search',
    value: query,
    onChange: function(e) { setQuery(e.target.value); },
    placeholder: placeholder,
    className: cn(
      'wp-block-search__input',
      buttonPosition === 'outside' ? 'wp-block-search__input--outside' : '',
      showIcon && buttonPosition === 'inside' ? 'wp-block-search__input--with-icon' : ''
    )
  });

  var labelElement = React.createElement('label', {
    htmlFor: 'wp-block-search__input',
    className: 'sr-only'
  }, 'Search');

  var content;
  if (buttonPosition === 'inside') {
    content = React.createElement('div', { className: 'wp-block-search__input-wrapper' },
      inputElement,
      showIcon ? React.createElement('button', {
        type: 'submit',
        'aria-label': buttonLabel,
        className: 'wp-block-search__submit--inside'
      }, React.createElement(SearchIcon, { size: 20 })) : null
    );
  } else {
    content = React.createElement(React.Fragment, null,
      inputElement,
      React.createElement('button', {
        type: 'submit',
        className: 'wp-block-search__submit--outside'
      }, 
        showIcon ? React.createElement(SearchIcon, { size: 20 }) : null,
        buttonLabel
      )
    );
  }

  return React.createElement('form', {
    onSubmit: handleSubmit,
    role: 'search',
    className: cn(
      'wp-block-search',
      alignClasses[align],
      buttonPosition === 'inside' ? 'wp-block-search--inside' : '',
      className
    ),
    style: style
  }, 
    labelElement,
    content
  );
}

Search.displayName = 'Search';