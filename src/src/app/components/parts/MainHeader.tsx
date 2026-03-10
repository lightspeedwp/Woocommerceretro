import React from 'react';
import * as ReactRouterModule from 'react-router';
import { List as Menu, MagnifyingGlass as Search, UserCircle as UserRound, X } from '@phosphor-icons/react';
import * as ContainerModule from '../common/Container';
import * as MiniCartModule from './MiniCart';
import * as MobileMenuModule from './MobileMenu';
import * as LogoModule from '../common/Logo';
import * as ThemeToggleModule from '../blocks/theme/ThemeToggle';
import * as NavigationModule from '../blocks/theme/Navigation';
import * as NavigationData from '../../data/navigation';

var useState = React.useState;
var useNavigate = ReactRouterModule.useNavigate;
var Link = ReactRouterModule.Link;
var Container = ContainerModule.Container;
var MiniCart = MiniCartModule.MiniCart;
var MobileMenu = MobileMenuModule.MobileMenu;
var ShopLogo = LogoModule.ShopLogo;
var ThemeToggle = ThemeToggleModule.ThemeToggle;
var Navigation = NavigationModule.Navigation;
var MAIN_MENU = NavigationData.MAIN_MENU;

/**
 * MainHeader Component (Global Template Part) — Funky Redesign (Phase 2)
 */
export function MainHeader() {
  var isSearchOpenState = useState(false);
  var isSearchOpen = isSearchOpenState[0];
  var setIsSearchOpen = isSearchOpenState[1];
  
  var searchQueryState = useState('');
  var searchQuery = searchQueryState[0];
  var setSearchQuery = searchQueryState[1];
  
  var isMenuOpenState = useState(false);
  var isMenuOpen = isMenuOpenState[0];
  var setIsMenuOpen = isMenuOpenState[1];
  
  var navigate = useNavigate();
  
  var navigationMenu = MAIN_MENU.map(function(item) {
    return {
      id: item.id,
      title: item.label,
      url: item.url,
      megaMenu: item.megaMenu ? item.id : undefined
    };
  }).filter(function(item) {
    return item.id !== 'home';
  });

  var handleSearch = function(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/shop/search?q=' + encodeURIComponent(searchQuery));
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  var toggleMenu = function() {
    if (isSearchOpen) setIsSearchOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };

  var toggleSearch = function() {
    if (isMenuOpen) setIsMenuOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  return React.createElement('header', { className: 'wp-site-header wp-site-header--funky' },
    React.createElement('a', { href: '#main-content', className: 'sr-only wp-skip-link' }, 'Skip to main content'),
    React.createElement(Container, { variant: 'site' },
      React.createElement('div', { className: 'wp-site-header__inner' },
        /* MOBILE: Menu Toggle + Logo + Actions */
        React.createElement('div', { className: 'wp-header-mobile' },
          React.createElement('button', {
            type: 'button',
            className: 'wp-header-mobile__menu-toggle funky-spring-hover',
            'aria-label': isMenuOpen ? 'Close menu' : 'Open menu',
            onClick: toggleMenu
          },
            isMenuOpen ? React.createElement(X, { size: 28 }) : React.createElement(Menu, { size: 28 })
          ),
          React.createElement('div', { className: 'wp-header-mobile__logo' },
            React.createElement(Link, { to: '/', 'aria-label': 'Home' },
              React.createElement(ShopLogo, { variant: 'current', className: 'wp-site-logo' })
            )
          ),
          React.createElement('div', { className: 'wp-header-mobile__actions' },
            React.createElement('button', {
              type: 'button',
              className: 'wp-header-mobile__search-toggle funky-spring-hover',
              onClick: toggleSearch,
              'aria-label': 'Toggle search'
            },
              isSearchOpen ? React.createElement(X, { size: 24 }) : React.createElement(Search, { size: 24 })
            ),
            React.createElement('div', { className: 'wp-header-mobile__cart' },
              React.createElement(MiniCart, null)
            )
          )
        ),
        /* DESKTOP: Logo + Nav + Actions */
        React.createElement('div', { className: 'wp-header-desktop' },
          React.createElement('div', { className: 'wp-header-desktop__logo' },
            React.createElement(Link, { to: '/', 'aria-label': 'Home' },
              React.createElement(ShopLogo, { variant: 'current', className: 'wp-site-logo' })
            )
          ),
          React.createElement('nav', { className: 'wp-header-desktop__nav' },
            React.createElement(Navigation, { 
              menu: navigationMenu,
              orientation: 'horizontal',
              spacing: 'lg',
              align: 'center',
              showMobileToggle: false,
              enableMegaMenus: true,
              className: 'wp-header-desktop__navigation'
            })
          ),
          React.createElement('div', { className: 'wp-header-desktop__actions wp-header-desktop__actions--icon-bar' },
            /* Search */
            React.createElement('div', { className: 'wp-header-desktop__search wp-header-desktop__action-item' },
              isSearchOpen && React.createElement('div', { className: 'wp-header-desktop__search-form' },
                React.createElement('form', { onSubmit: handleSearch },
                  React.createElement('input', {
                    type: 'search',
                    value: searchQuery,
                    onChange: function(e) { setSearchQuery(e.target.value); },
                    placeholder: 'Search...',
                    className: 'wp-header-desktop__search-input funky-input-glow',
                    autoFocus: true
                  })
                )
              ),
              React.createElement('button', {
                type: 'button',
                'aria-label': 'Toggle search',
                className: 'wp-header-desktop__action-button funky-spring-hover',
                onClick: toggleSearch
              },
                isSearchOpen ? React.createElement(X, { size: 20 }) : React.createElement(Search, { size: 20 })
              )
            ),
            /* Account */
            React.createElement('div', { className: 'wp-header-desktop__action-item' },
              React.createElement(Link, { 
                to: '/account', 
                className: 'wp-header-desktop__account funky-spring-hover',
                'aria-label': 'My Account'
              }, React.createElement(UserRound, { size: 20 }))
            ),
            /* Theme Toggle */
            React.createElement('div', { className: 'wp-header-desktop__action-item' },
              React.createElement(ThemeToggle, null)
            ),
            /* Cart */
            React.createElement('div', { className: 'wp-header-desktop__action-item wp-header-desktop__cart funky-spring-hover' },
              React.createElement(MiniCart, null)
            )
          )
        )
      )
    ),
    /* Mobile Search Panel */
    isSearchOpen && React.createElement('div', { className: 'wp-header-mobile__search-panel' },
      React.createElement('form', { onSubmit: handleSearch, className: 'wp-header-mobile__search-form' },
        React.createElement('div', { className: 'wp-header-mobile__search-wrapper' },
          React.createElement(Search, { size: 18, className: 'wp-header-mobile__search-icon' }),
          React.createElement('input', {
            type: 'search',
            value: searchQuery,
            onChange: function(e) { setSearchQuery(e.target.value); },
            placeholder: 'Search products...',
            className: 'wp-header-mobile__search-input funky-input-glow',
            autoFocus: true
          }),
          searchQuery && React.createElement('button', {
            type: 'button',
            className: 'wp-header-mobile__search-clear',
            onClick: function() { setSearchQuery(''); },
            'aria-label': 'Clear search'
          }, React.createElement(X, { size: 16 }))
        )
      )
    ),
    /* Mobile Menu Overlay */
    React.createElement(MobileMenu, { isOpen: isMenuOpen, onOpenChange: setIsMenuOpen })
  );
}