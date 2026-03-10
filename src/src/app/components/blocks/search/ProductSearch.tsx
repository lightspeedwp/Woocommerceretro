import React from 'react';
import { MagnifyingGlass, X } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as CnModule from '../../../utils/cn';

var useState = React.useState;
var useNavigate = ReactRouterModule.useNavigate;
var cn = CnModule.cn;

/* ProductSearchProps: { placeholder, className, initialQuery } */

/**
 * ProductSearch Block Component
 * 
 * Product search input with icon button and submit navigation.
 * Redirects to search results page with query parameter.
 */
export function ProductSearch(props) {
  var placeholder = props.placeholder || "Search for products...";
  var className = props.className;
  var initialQuery = props.initialQuery || '';

  var _q = useState(initialQuery);
  var query = _q[0];
  var setQuery = _q[1];
  var navigate = useNavigate();

  var handleSearch = function(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate('/shop/search?q=' + encodeURIComponent(query));
    }
  };

  return React.createElement('form', { 
    onSubmit: handleSearch, 
    className: cn("wp-block-product-search", className) 
  },
    React.createElement('div', { className: "wp-block-product-search__container" },
      React.createElement('input', { 
        type: "text", 
        value: query,
        onChange: function(e) { setQuery(e.target.value); },
        placeholder: placeholder, 
        className: "wp-block-product-search__input"
      }),
      React.createElement('button', { 
        type: "submit",
        className: "wp-block-product-search__submit",
        'aria-label': "Search"
      },
        React.createElement(MagnifyingGlass, { size: 20 })
      )
    )
  );
}