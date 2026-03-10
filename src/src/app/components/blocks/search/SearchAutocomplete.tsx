import React from 'react';
import * as ReactRouterModule from 'react-router';
import { MagnifyingGlass, Clock, TrendUp, X, ArrowRight } from '@phosphor-icons/react';
import * as DebounceModule from '../../../hooks/useDebounce';
import * as RecentSearchesModule from '../../../hooks/useRecentSearches';
import * as PopularSearchesData from '../../../data/popularSearches';
import * as ProductsData from '../../../data/products';

var Link = ReactRouterModule.Link;
var useNavigate = ReactRouterModule.useNavigate;

var useState = React.useState;
var useRef = React.useRef;
var useEffect = React.useEffect;

var useDebounce = DebounceModule.useDebounce;
var useRecentSearches = RecentSearchesModule.useRecentSearches;
var POPULAR_SEARCHES = PopularSearchesData.POPULAR_SEARCHES;
var PRODUCTS = ProductsData.products || ProductsData.PRODUCTS;

var SearchIcon = MagnifyingGlass;

/* SearchAutocompleteProps: { placeholder, onSearch, className, autoFocus } */

/**
 * SearchAutocomplete Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declarations
 * 2. No arrow functions
 * 3. React.createElement for complexity
 * 4. ASCII only
 */
export function SearchAutocomplete(props) {
  var placeholder = props.placeholder === undefined ? 'Search products...' : props.placeholder;
  var onSearch = props.onSearch;
  var className = props.className === undefined ? '' : props.className;
  var autoFocus = props.autoFocus === undefined ? false : props.autoFocus;

  var navigate = useNavigate();
  var _q = useState('');
  var query = _q[0];
  var setQuery = _q[1];
  var _o = useState(false);
  var isOpen = _o[0];
  var setIsOpen = _o[1];
  var _h = useState(-1);
  var highlightedIndex = _h[0];
  var setHighlightedIndex = _h[1];
  var inputRef = useRef(null);
  var dropdownRef = useRef(null);
  
  var debouncedQuery = useDebounce(query, 300);
  var recentSearchesContext = useRecentSearches(5);
  var recentSearches = recentSearchesContext.recentSearches;
  var addRecentSearch = recentSearchesContext.addRecentSearch;
  var removeRecentSearch = recentSearchesContext.removeRecentSearch;
  var clearRecentSearches = recentSearchesContext.clearRecentSearches;

  var searchResults = debouncedQuery.trim()
    ? PRODUCTS.filter(function(product) {
        var q = debouncedQuery.toLowerCase();
        return product.name.toLowerCase().indexOf(q) !== -1 ||
        (product.category && product.category.toLowerCase().indexOf(q) !== -1) ||
        (product.brand && product.brand.toLowerCase().indexOf(q) !== -1);
      }).slice(0, 5)
    : [];

  var totalSuggestions = query.trim() ? searchResults.length : (recentSearches.length + POPULAR_SEARCHES.length);

  function handleSearch(searchTerm) {
    var trimmedTerm = searchTerm ? searchTerm.trim() : '';
    if (!trimmedTerm) return;

    addRecentSearch(trimmedTerm);
    setIsOpen(false);
    setQuery(trimmedTerm);
    
    if (onSearch) {
      onSearch(trimmedTerm);
    } else {
      navigate('/shop?search=' + encodeURIComponent(trimmedTerm));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(query);
  }

  function handleInputChange(e) {
    setQuery(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  }

  function handleFocus() {
    setIsOpen(true);
  }

  function handleKeyDown(e) {
    if (!isOpen) {
      if (e.key === 'ArrowDown') setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(function(prev) { return prev < totalSuggestions - 1 ? prev + 1 : prev; });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(function(prev) { return prev > 0 ? prev - 1 : -1; });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        if (query.trim()) {
          if (highlightedIndex < searchResults.length) {
            var product = searchResults[highlightedIndex];
            navigate('/product/' + product.slug);
            setIsOpen(false);
          }
        } else {
          var allSuggestions = recentSearches.concat(POPULAR_SEARCHES);
          var selectedTerm = allSuggestions[highlightedIndex];
          if (selectedTerm) handleSearch(selectedTerm);
        }
      } else {
        handleSearch(query);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
      setHighlightedIndex(-1);
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    }
  }

  useEffect(function() {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function() { document.removeEventListener('mousedown', handleClickOutside); };
  }, []);

  useEffect(function() {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  /* UI Renderers */
  var iconSearch = React.createElement(SearchIcon, { key: 'i', className: "woocommerce-search-autocomplete__icon", size: 20 });
  var input = React.createElement('input', {
    key: 'input',
    ref: inputRef,
    type: "text",
    value: query,
    onChange: handleInputChange,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    placeholder: placeholder,
    role: "combobox",
    'aria-expanded': isOpen,
    'aria-autocomplete': "list",
    className: "woocommerce-search-autocomplete__input"
  });

  var clearBtn = query ? React.createElement('button', {
    key: 'clear',
    type: "button",
    onClick: function() { setQuery(''); setHighlightedIndex(-1); if (inputRef.current) inputRef.current.focus(); },
    className: "woocommerce-search-autocomplete__clear"
  }, React.createElement(X, { size: 18 })) : null;

  var form = React.createElement('form', { key: 'form', onSubmit: handleSubmit, className: "woocommerce-search-autocomplete__form" },
    React.createElement('div', { className: "woocommerce-search-autocomplete__input-wrapper" }, [iconSearch, input, clearBtn])
  );

  var dropdownContent = null;
  if (isOpen) {
    if (query.trim()) {
      if (searchResults.length > 0) {
        var results = searchResults.map(function(product, index) {
          var isHigh = highlightedIndex === index;
          return React.createElement(Link, {
            key: product.id,
            to: '/product/' + product.slug,
            onClick: function() { addRecentSearch(query); setIsOpen(false); },
            className: 'woocommerce-search-autocomplete__product ' + (isHigh ? 'woocommerce-search-autocomplete__product--highlighted' : '')
          }, [
            React.createElement('div', { key: 'img', className: "woocommerce-search-autocomplete__product-image" }, 
              React.createElement('img', { src: product.image, alt: product.name, className: "woocommerce-search-autocomplete__product-img" })
            ),
            React.createElement('div', { key: 'info', className: "woocommerce-search-autocomplete__product-info" }, [
              React.createElement('div', { key: 'n', className: "woocommerce-search-autocomplete__product-name" }, product.name),
              React.createElement('div', { key: 'c', className: "woocommerce-search-autocomplete__product-category" }, product.category)
            ]),
            React.createElement('div', { key: 'p', className: "woocommerce-search-autocomplete__product-price" }, '£' + (product.salePrice || product.price).toFixed(2))
          ]);
        });

        dropdownContent = React.createElement('div', { key: 'results' }, [
          React.createElement('div', { key: 'sec', className: "woocommerce-search-autocomplete__section" }, [
            React.createElement('div', { key: 't', className: "woocommerce-search-autocomplete__section-title" }, "Products (" + searchResults.length + ")"),
            results
          ]),
          React.createElement('div', { key: 'foot', className: "woocommerce-search-autocomplete__footer" }, 
            React.createElement('button', { onClick: function() { handleSearch(query); }, className: "woocommerce-search-autocomplete__view-all" }, [
              React.createElement('span', { key: 's' }, 'See all results for "' + query + '"'),
              React.createElement(ArrowRight, { key: 'i', size: 16 })
            ])
          )
        ]);
      } else {
        dropdownContent = React.createElement('div', { key: 'none', className: "woocommerce-search-autocomplete__no-results" }, [
          React.createElement('div', { key: 'i', className: "woocommerce-search-autocomplete__no-results-icon" }, React.createElement(SearchIcon, { size: 24 })),
          React.createElement('p', { key: 't', className: "woocommerce-search-autocomplete__no-results-title" }, 'No products found for "' + query + '"')
        ]);
      }
    } else {
      var recent = recentSearches.length > 0 ? React.createElement('div', { key: 'rec', className: "woocommerce-search-autocomplete__section" }, [
        React.createElement('div', { key: 'h', className: "woocommerce-search-autocomplete__section-header" }, [
          React.createElement('div', { key: 't', className: "woocommerce-search-autocomplete__section-title" }, "Recent Searches"),
          React.createElement('button', { key: 'c', onClick: clearRecentSearches, className: "woocommerce-search-autocomplete__clear-recent" }, "Clear")
        ]),
        recentSearches.map(function(term, index) {
          var isHigh = highlightedIndex === index;
          return React.createElement('div', { key: term, className: 'woocommerce-search-autocomplete__suggestion ' + (isHigh ? 'woocommerce-search-autocomplete__suggestion--highlighted' : '') }, [
            React.createElement('button', { key: 't', onClick: function() { handleSearch(term); }, className: "woocommerce-search-autocomplete__suggestion-text-btn" }, [
              React.createElement(Clock, { size: 16 }),
              React.createElement('span', null, term)
            ]),
            React.createElement('button', { key: 'r', onClick: function() { removeRecentSearch(term); }, className: "woocommerce-search-autocomplete__suggestion-remove" }, React.createElement(X, { size: 14 }))
          ]);
        })
      ]) : null;

      var popular = React.createElement('div', { key: 'pop', className: "woocommerce-search-autocomplete__section" }, [
        React.createElement('div', { key: 't', className: "woocommerce-search-autocomplete__section-title" }, "Popular Searches"),
        POPULAR_SEARCHES.slice(0, 8).map(function(term, index) {
          var adjIdx = recentSearches.length + index;
          var isHigh = highlightedIndex === adjIdx;
          return React.createElement('button', {
            key: term,
            onClick: function() { handleSearch(term); },
            className: 'woocommerce-search-autocomplete__suggestion ' + (isHigh ? 'woocommerce-search-autocomplete__suggestion--highlighted' : '')
          }, [
            React.createElement(TrendUp, { key: 'i', size: 16 }),
            React.createElement('span', { key: 's' }, term)
          ]);
        })
      ]);

      dropdownContent = React.createElement('div', { key: 'static' }, [recent, popular]);
    }
  }

  var dropdown = isOpen ? React.createElement('div', { ref: dropdownRef, className: "woocommerce-search-autocomplete__dropdown" }, dropdownContent) : null;

  return React.createElement('div', { className: "woocommerce-search-autocomplete " + className }, [form, dropdown]);
}