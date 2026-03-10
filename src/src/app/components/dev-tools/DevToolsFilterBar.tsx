import React from 'react';
import { MagnifyingGlass as Search, Funnel as Filter, X, CaretDown as ChevronDown } from '@phosphor-icons/react';
import * as ContainerModule from '../common/Container';
import * as DrawerModule from '../blocks/layout/Drawer';
import * as ButtonsModule from '../blocks/design/Buttons';

var Container = ContainerModule.Container;
var Drawer = DrawerModule.Drawer;
var DrawerContent = DrawerModule.DrawerContent;
var DrawerTrigger = DrawerModule.DrawerTrigger;
var DrawerHeader = DrawerModule.DrawerHeader;
var DrawerTitle = DrawerModule.DrawerTitle;
var DrawerClose = DrawerModule.DrawerClose;
var Button = ButtonsModule.Button;

/**
 * DevToolsFilterBar Component
 */
export function DevToolsFilterBar(props) {
  var searchPlaceholder = props.searchPlaceholder || 'Search...';
  var searchValue = props.searchValue;
  var onSearchChange = props.onSearchChange;
  var filters = props.filters;
  var activeFilter = props.activeFilter;
  var onFilterChange = props.onFilterChange;
  var showSearch = props.showSearch !== undefined ? props.showSearch : true;
  var actions = props.actions;

  var filterState = React.useState(false);
  var isFilterOpen = filterState[0];
  var setIsFilterOpen = filterState[1];

  var activeFilterData = filters.find(function(f) { return f.id === activeFilter; });

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
                onChange={function(e) { onSearchChange(e.target.value); }}
                className="wp-devtools-filter__search"
                aria-label={searchPlaceholder}
              />
              {searchValue && (
                <button
                  onClick={function() { onSearchChange(''); }}
                  className="wp-devtools-filter__clear"
                  aria-label="Clear search"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          )}

          <div className="wp-devtools-filter__bar">
            <div className="wp-devtools-filter__desktop-filters">
              {filters.map(function(filter) { return (
                <button
                  key={filter.id}
                  onClick={function() { onFilterChange(filter.id); }}
                  className={'wp-devtools-filter__btn ' + (activeFilter === filter.id ? 'wp-devtools-filter__btn--active' : 'wp-devtools-filter__btn--inactive')}
                  aria-label={'Filter by ' + filter.label + ', ' + filter.count + ' items'}
                  aria-pressed={activeFilter === filter.id}
                >
                  {filter.icon}
                  <span>{filter.label}</span>
                  <span className={'wp-devtools-filter__count ' + (activeFilter === filter.id ? 'wp-devtools-filter__count--active' : 'wp-devtools-filter__count--inactive')}>
                    ({filter.count})
                  </span>
                </button>
              ); })}
            </div>

            <div className="wp-devtools-filter__mobile-filters">
              <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <DrawerTrigger asChild>
                  <button
                    className="wp-devtools-filter__mobile-trigger"
                    aria-label={'Open filters. Current filter: ' + ((activeFilterData && activeFilterData.label) || '')}
                    aria-expanded={isFilterOpen}
                  >
                    <div className="wp-devtools-filter__mobile-trigger-label">
                      <Filter size={20} className="wp-text-muted" />
                      <span>
                        {(activeFilterData && activeFilterData.label) || 'All'}
                      </span>
                      <span className="wp-devtools-filter__count wp-devtools-filter__count--inactive">
                        ({(activeFilterData && activeFilterData.count) || 0})
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
                    {filters.map(function(filter) { return (
                      <button
                        key={filter.id}
                        onClick={function() {
                          onFilterChange(filter.id);
                          setIsFilterOpen(false);
                        }}
                        className={'wp-devtools-filter__mobile-item ' + (activeFilter === filter.id ? 'wp-devtools-filter__mobile-item--active' : 'wp-devtools-filter__mobile-item--inactive')}
                        aria-label={'Filter by ' + filter.label + ', ' + filter.count + ' items'}
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
                        <span className={'wp-devtools-filter__count ' + (activeFilter === filter.id ? 'wp-devtools-filter__count--active' : 'wp-devtools-filter__count--inactive')}>
                          {filter.count}
                        </span>
                      </button>
                    ); })}
                  </div>

                  <div className="wp-mt-50 wp-pt-50 wp-border-t">
                    <DrawerClose asChild>
                      <Button className="wp-w-full" size="lg">
                        Apply Filter
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            {actions && (
              <div className="wp-devtools-filter__actions">
                {actions}
              </div>
            )}
          </div>
      </Container>
    </div>
  );
}