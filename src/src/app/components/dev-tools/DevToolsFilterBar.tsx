/**
 * DevToolsFilterBar Component
 *
 * Search and filter bar for dev tools pages with responsive mobile drawer.
 */

import { useState, type ReactNode } from 'react';
import { MagnifyingGlass as Search, Funnel as Filter, X, CaretDown as ChevronDown } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerClose } from '../blocks/layout/Drawer';
import { Button } from '../blocks/design/Buttons';

interface FilterItem {
  id: string;
  label: string;
  count: number;
  icon?: ReactNode;
}

interface DevToolsFilterBarProps {
  searchPlaceholder?: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
  filters: FilterItem[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
  showSearch?: boolean;
  actions?: ReactNode;
}

export const DevToolsFilterBar = ({
  searchPlaceholder = 'Search...',
  searchValue,
  onSearchChange,
  filters,
  activeFilter,
  onFilterChange,
  showSearch = true,
  actions,
}: DevToolsFilterBarProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const activeFilterData = filters.find((f) => f.id === activeFilter);

  return (
    <div className="wp-devtools-filter">
      <Container variant="site" className="wp-devtools-filter__inner">
        {showSearch && (
          <div className="wp-devtools-filter__search-wrapper">
            <Search className="wp-devtools-filter__search-icon" size={20} />
            <input
              type="search"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="wp-devtools-filter__search"
              aria-label={searchPlaceholder}
            />
            {searchValue && (
              <button
                onClick={() => onSearchChange('')}
                className="wp-devtools-filter__clear"
                aria-label="Clear search"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        <div className="wp-devtools-filter__bar">
          {/* Desktop filters */}
          <div className="wp-devtools-filter__desktop-filters">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => onFilterChange(filter.id)}
                className={`wp-devtools-filter__btn ${activeFilter === filter.id ? 'wp-devtools-filter__btn--active' : 'wp-devtools-filter__btn--inactive'}`}
                aria-label={`Filter by ${filter.label}, ${filter.count} items`}
                aria-pressed={activeFilter === filter.id}
              >
                {filter.icon}
                <span>{filter.label}</span>
                <span className={`wp-devtools-filter__count ${activeFilter === filter.id ? 'wp-devtools-filter__count--active' : 'wp-devtools-filter__count--inactive'}`}>
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>

          {/* Mobile filters */}
          <div className="wp-devtools-filter__mobile-filters">
            <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DrawerTrigger asChild>
                <button
                  className="wp-devtools-filter__mobile-trigger"
                  aria-label={`Open filters. Current filter: ${activeFilterData?.label || ''}`}
                  aria-expanded={isFilterOpen}
                >
                  <div className="wp-devtools-filter__mobile-trigger-label">
                    <Filter size={20} className="wp-text-muted" />
                    <span>{activeFilterData?.label || 'All'}</span>
                    <span className="wp-devtools-filter__count wp-devtools-filter__count--inactive">
                      ({activeFilterData?.count || 0})
                    </span>
                  </div>
                  <ChevronDown size={20} className="wp-text-muted" />
                </button>
              </DrawerTrigger>
              <DrawerContent side="bottom" className="wp-h-80vh wp-overflow-y-auto">
                <DrawerHeader>
                  <DrawerTitle>Filter Options</DrawerTitle>
                </DrawerHeader>
                <div className="wp-devtools-filter__mobile-list">
                  {filters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => {
                        onFilterChange(filter.id);
                        setIsFilterOpen(false);
                      }}
                      className={`wp-devtools-filter__mobile-item ${activeFilter === filter.id ? 'wp-devtools-filter__mobile-item--active' : 'wp-devtools-filter__mobile-item--inactive'}`}
                      aria-label={`Filter by ${filter.label}, ${filter.count} items`}
                      aria-pressed={activeFilter === filter.id}
                    >
                      <div className="wp-devtools-filter__mobile-item-label">
                        {filter.icon && (
                          <span className={activeFilter === filter.id ? 'wp-text-white' : 'wp-text-muted'} aria-hidden="true">
                            {filter.icon}
                          </span>
                        )}
                        <span className="wp-font-medium">{filter.label}</span>
                      </div>
                      <span className={`wp-devtools-filter__count ${activeFilter === filter.id ? 'wp-devtools-filter__count--active' : 'wp-devtools-filter__count--inactive'}`}>
                        {filter.count}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="wp-devtools-filter__drawer-footer">
                  <DrawerClose asChild>
                    <Button className="wp-w-full" size="lg">Apply Filter</Button>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {actions && <div className="wp-devtools-filter__actions">{actions}</div>}
        </div>
      </Container>
    </div>
  );
}