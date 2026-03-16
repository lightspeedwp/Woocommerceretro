import React, { useState } from 'react';
import { MagnifyingGlass } from '../../../utils/phosphor-compat';
import { useNavigate } from 'react-router';
import { cn } from '../../../utils/cn';

/**
 * ProductSearch Block Component
 *
 * Product search input with icon button and submit navigation.
 * Redirects to search results page with query parameter.
 */
export const ProductSearch = ({
  placeholder = 'Search for products...',
  className,
  initialQuery = '',
}: {
  placeholder?: string;
  className?: string;
  initialQuery?: string;
}) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/shop/search?q=' + encodeURIComponent(query));
    }
  };

  return (
    <form onSubmit={handleSearch} className={cn('wp-block-product-search', className)}>
      <div className="wp-block-product-search__container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="wp-block-product-search__input"
        />
        <button
          type="submit"
          className="wp-block-product-search__submit"
          aria-label="Search"
        >
          <MagnifyingGlass size={20} />
        </button>
      </div>
    </form>
  );
};