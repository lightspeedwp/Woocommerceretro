import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router';
import { MagnifyingGlass, Clock, TrendUp, X, ArrowRight } from '../../../utils/phosphor-compat';
import { useDebounce } from '../../../hooks/useDebounce';
import { useRecentSearches } from '../../../hooks/useRecentSearches';
import { POPULAR_SEARCHES } from '../../../data/popularSearches';
import { products as PRODUCTS } from '../../../data/products';

const SearchIcon = MagnifyingGlass;

/**
 * SearchAutocomplete Component
 *
 * Full-featured search input with autocomplete dropdown,
 * recent searches, popular searches, and product results.
 */
export const SearchAutocomplete = ({
  placeholder = 'Search products...',
  onSearch,
  className = '',
  autoFocus = false,
}: {
  placeholder?: string;
  onSearch?: (term: string) => void;
  className?: string;
  autoFocus?: boolean;
}) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebounce(query, 300);
  const { recentSearches, addRecentSearch, removeRecentSearch, clearRecentSearches } = useRecentSearches(5);

  const searchResults = debouncedQuery.trim()
    ? PRODUCTS.filter((product) => {
        const q = debouncedQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(q) ||
          (product.category && product.category.toLowerCase().includes(q)) ||
          (product.brand && product.brand.toLowerCase().includes(q))
        );
      }).slice(0, 5)
    : [];

  const totalSuggestions = query.trim()
    ? searchResults.length
    : recentSearches.length + POPULAR_SEARCHES.length;

  const handleSearch = (searchTerm?: string) => {
    const trimmedTerm = searchTerm?.trim() || '';
    if (!trimmedTerm) return;

    addRecentSearch(trimmedTerm);
    setIsOpen(false);
    setQuery(trimmedTerm);

    if (onSearch) {
      onSearch(trimmedTerm);
    } else {
      navigate('/shop?search=' + encodeURIComponent(trimmedTerm));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown') setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < totalSuggestions - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        if (query.trim()) {
          if (highlightedIndex < searchResults.length) {
            const product = searchResults[highlightedIndex];
            navigate('/product/' + product.slug);
            setIsOpen(false);
          }
        } else {
          const allSuggestions = [...recentSearches, ...POPULAR_SEARCHES];
          const selectedTerm = allSuggestions[highlightedIndex];
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
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current && !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (autoFocus && inputRef.current) inputRef.current.focus();
  }, [autoFocus]);

  const renderDropdownContent = () => {
    if (!isOpen) return null;

    if (query.trim()) {
      if (searchResults.length > 0) {
        return (
          <div>
            <div className="woocommerce-search-autocomplete__section">
              <div className="woocommerce-search-autocomplete__section-title">
                Products ({searchResults.length})
              </div>
              {searchResults.map((product, index) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  onClick={() => { addRecentSearch(query); setIsOpen(false); }}
                  className={`woocommerce-search-autocomplete__product ${highlightedIndex === index ? 'woocommerce-search-autocomplete__product--highlighted' : ''}`}
                >
                  <div className="woocommerce-search-autocomplete__product-image">
                    <img src={product.image} alt={product.name} className="woocommerce-search-autocomplete__product-img" />
                  </div>
                  <div className="woocommerce-search-autocomplete__product-info">
                    <div className="woocommerce-search-autocomplete__product-name">{product.name}</div>
                    <div className="woocommerce-search-autocomplete__product-category">{product.category}</div>
                  </div>
                  <div className="woocommerce-search-autocomplete__product-price">
                    &pound;{(product.salePrice || product.price).toFixed(2)}
                  </div>
                </Link>
              ))}
            </div>
            <div className="woocommerce-search-autocomplete__footer">
              <button onClick={() => handleSearch(query)} className="woocommerce-search-autocomplete__view-all">
                <span>See all results for &quot;{query}&quot;</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        );
      }

      return (
        <div className="woocommerce-search-autocomplete__no-results">
          <div className="woocommerce-search-autocomplete__no-results-icon">
            <SearchIcon size={24} />
          </div>
          <p className="woocommerce-search-autocomplete__no-results-title">
            No products found for &quot;{query}&quot;
          </p>
        </div>
      );
    }

    return (
      <div>
        {recentSearches.length > 0 && (
          <div className="woocommerce-search-autocomplete__section">
            <div className="woocommerce-search-autocomplete__section-header">
              <div className="woocommerce-search-autocomplete__section-title">Recent Searches</div>
              <button onClick={clearRecentSearches} className="woocommerce-search-autocomplete__clear-recent">
                Clear
              </button>
            </div>
            {recentSearches.map((term, index) => (
              <div
                key={term}
                className={`woocommerce-search-autocomplete__suggestion ${highlightedIndex === index ? 'woocommerce-search-autocomplete__suggestion--highlighted' : ''}`}
              >
                <button onClick={() => handleSearch(term)} className="woocommerce-search-autocomplete__suggestion-text-btn">
                  <Clock size={16} />
                  <span>{term}</span>
                </button>
                <button onClick={() => removeRecentSearch(term)} className="woocommerce-search-autocomplete__suggestion-remove" aria-label={`Remove ${term} from recent searches`}>
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="woocommerce-search-autocomplete__section">
          <div className="woocommerce-search-autocomplete__section-title">Popular Searches</div>
          {POPULAR_SEARCHES.slice(0, 8).map((term, index) => {
            const adjIdx = recentSearches.length + index;
            return (
              <button
                key={term}
                onClick={() => handleSearch(term)}
                className={`woocommerce-search-autocomplete__suggestion ${highlightedIndex === adjIdx ? 'woocommerce-search-autocomplete__suggestion--highlighted' : ''}`}
              >
                <TrendUp size={16} />
                <span>{term}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className={`woocommerce-search-autocomplete ${className}`}>
      <form onSubmit={handleSubmit} className="woocommerce-search-autocomplete__form">
        <div className="woocommerce-search-autocomplete__input-wrapper">
          <SearchIcon className="woocommerce-search-autocomplete__icon" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            className="woocommerce-search-autocomplete__input"
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); setHighlightedIndex(-1); inputRef.current?.focus(); }}
              className="woocommerce-search-autocomplete__clear"
              aria-label="Clear search"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </form>
      {isOpen && (
        <div ref={dropdownRef} className="woocommerce-search-autocomplete__dropdown">
          {renderDropdownContent()}
        </div>
      )}
    </div>
  );
};