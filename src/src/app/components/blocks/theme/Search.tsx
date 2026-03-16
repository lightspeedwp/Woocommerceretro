import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { MagnifyingGlass as SearchIcon } from '../../../utils/phosphor-compat';
import { cn } from '../ui/utils';

interface SearchProps {
  placeholder?: string;
  buttonLabel?: string;
  buttonPosition?: 'inside' | 'outside';
  showIcon?: boolean;
  align?: 'start' | 'center' | 'end';
  onSearch?: (query: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Search = ({
  placeholder = 'Search\u2026', buttonLabel = 'Search', buttonPosition = 'inside',
  showIcon = true, align = 'start', onSearch, className, style,
}: SearchProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const alignClasses: Record<string, string> = {
    start: 'wp-block-search--start', center: 'wp-block-search--center', end: 'wp-block-search--end',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    if (onSearch) {
      onSearch(trimmedQuery);
    } else {
      navigate(`/shop?search=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  const inputElement = (
    <input
      id="wp-block-search__input"
      type="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
      className={cn(
        'wp-block-search__input',
        buttonPosition === 'outside' ? 'wp-block-search__input--outside' : '',
        showIcon && buttonPosition === 'inside' ? 'wp-block-search__input--with-icon' : '',
      )}
    />
  );

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={cn('wp-block-search', alignClasses[align], buttonPosition === 'inside' ? 'wp-block-search--inside' : '', className)}
      style={style}
    >
      <label htmlFor="wp-block-search__input" className="sr-only">Search</label>
      {buttonPosition === 'inside' ? (
        <div className="wp-block-search__input-wrapper">
          {inputElement}
          {showIcon && (
            <button type="submit" aria-label={buttonLabel} className="wp-block-search__submit--inside">
              <SearchIcon size={20} />
            </button>
          )}
        </div>
      ) : (
        <>
          {inputElement}
          <button type="submit" className="wp-block-search__submit--outside">
            {showIcon && <SearchIcon size={20} />}
            {buttonLabel}
          </button>
        </>
      )}
    </form>
  );
}

Search.displayName = 'Search';