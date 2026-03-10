import React from 'react';
var useState = React.useState;

import * as ReactRouterModule from 'react-router';
import { CaretDown, List, X } from '@phosphor-icons/react';

var useLocation = ReactRouterModule.useLocation;
var Link = ReactRouterModule.Link;

// Safe icon fallbacks
var IconMenu = List || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, '='); });
var IconX = X || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, 'x'); });
var IconChevronDown = CaretDown || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, 'v'); });

// Import mega menu components
import * as ShopMegaMenuModule from '../../parts/ShopMegaMenu';
import * as BlogMegaMenuModule from '../../parts/BlogMegaMenu';
import * as AboutMegaMenuModule from '../../parts/AboutMegaMenu';
import * as DealsMegaMenuModule from '../../parts/DealsMegaMenu';
import * as ContactMegaMenuModule from '../../parts/ContactMegaMenu';

var ShopMegaMenu = ShopMegaMenuModule.ShopMegaMenu;
var BlogMegaMenu = BlogMegaMenuModule.BlogMegaMenu;
var AboutMegaMenu = AboutMegaMenuModule.AboutMegaMenu;
var DealsMegaMenu = DealsMegaMenuModule.DealsMegaMenu;
var ContactMegaMenu = ContactMegaMenuModule.ContactMegaMenu;

var MEGA_MENU_COMPONENTS = {
  shop: ShopMegaMenu,
  blog: BlogMegaMenu,
  about: AboutMegaMenu,
  deals: DealsMegaMenu,
  contact: ContactMegaMenu
};

export function Navigation(props) {
  var menu = props.menu;
  var orientation = props.orientation || 'horizontal';
  var spacing = props.spacing || 'md';
  var align = props.align || 'start';
  var showMobileToggle = props.showMobileToggle !== undefined ? props.showMobileToggle : true;
  var enableMegaMenus = props.enableMegaMenus || false;
  var className = props.className || '';
  var style = props.style;
  var ariaLabel = props.ariaLabel || 'Main navigation';

  var _sm = useState(false);
  var isMobileMenuOpen = _sm[0];
  var setIsMobileMenuOpen = _sm[1];
  var _ss = useState({});
  var openSubmenus = _ss[0];
  var setOpenSubmenus = _ss[1];
  var location = useLocation();
  
  // Toggle submenu
  var toggleSubmenu = function(itemId) {
    var newState = Object.assign({}, openSubmenus);
    newState[itemId] = !newState[itemId];
    setOpenSubmenus(newState);
  };
  
  // Check if link is active
  var isActive = function(url) {
    return location.pathname === url;
  };
  
  // Render regular menu item
  var renderMenuItem = function(item, level) {
    var hasChildren = item.children && item.children.length > 0;
    var active = isActive(item.url);
    var isSubmenuOpen = !!openSubmenus[item.id];
    
    var linkEl = React.createElement(Link, {
      to: item.url,
      className: 'wp-block-navigation-item__link funky-link ' + (active ? 'wp-block-navigation-item__link--active funky-text-cyan' : ''),
      'aria-current': active ? 'page' : undefined
    }, item.title);
    
    return React.createElement('li', {
      key: item.id,
      className: 'wp-block-navigation-item ' + (level > 0 ? 'wp-block-navigation-item--nested' : '')
    },
      React.createElement('div', { className: '' },
        linkEl,
        
        hasChildren ? React.createElement('button', {
          onClick: function() { toggleSubmenu(String(item.id)); },
          'aria-expanded': isSubmenuOpen,
          'aria-label': 'Toggle ' + item.title + ' submenu',
          className: 'wp-block-navigation-item__submenu-toggle ' + (isSubmenuOpen ? 'wp-block-navigation-item__submenu-toggle--open' : '')
        },
          React.createElement(IconChevronDown, { size: 16 })
        ) : null
      ),
      
      /* Submenu */
      hasChildren && isSubmenuOpen ? React.createElement('ul', {
        className: 'wp-block-navigation-submenu funky-glass-panel ' + 
                   (level === 0 ? 'wp-block-navigation-submenu--top-level ' : '') +
                   (level === 0 && orientation === 'horizontal' ? 'wp-block-navigation-submenu--horizontal ' : '') +
                   (level > 0 ? 'wp-block-navigation-submenu--nested' : '')
      },
        item.children.map(function(child) { return renderMenuItem(child, level + 1); })
      ) : null
    );
  };
  
  // Render menu items
  var renderMenu = function() {
    return menu.map(function(item) {
      if (enableMegaMenus && item.megaMenu && MEGA_MENU_COMPONENTS[item.megaMenu]) {
        var MegaMenuComponent = MEGA_MENU_COMPONENTS[item.megaMenu];
        return React.createElement('li', { 
          key: item.id, 
          className: 'wp-block-navigation-item wp-block-navigation-item--has-mega-menu' 
        },
          React.createElement(MegaMenuComponent, null)
        );
      }
      return renderMenuItem(item);
    });
  };
  
  var containerClass = 'wp-block-navigation__container ' +
                         'wp-block-navigation__container--spacing-' + spacing + ' ' +
                         'wp-block-navigation__container--align-' + align + ' ' +
                         (orientation === 'horizontal' ? 'wp-block-navigation__container--horizontal ' : '') +
                         (orientation === 'vertical' ? 'wp-block-navigation__container--vertical ' : '') +
                         (showMobileToggle ? 'wp-block-navigation__container--with-toggle ' : '') +
                         (showMobileToggle && isMobileMenuOpen ? 'wp-block-navigation__container--mobile-open' : '');

  return React.createElement('nav', {
    className: 'wp-block-navigation ' + className,
    style: style,
    'aria-label': ariaLabel
  },
    showMobileToggle ? React.createElement('button', {
      onClick: function() { setIsMobileMenuOpen(!isMobileMenuOpen); },
      'aria-expanded': isMobileMenuOpen,
      'aria-label': 'Toggle navigation menu',
      className: 'wp-block-navigation__mobile-toggle'
    },
      isMobileMenuOpen ? React.createElement(IconX, { size: 24 }) : React.createElement(IconMenu, { size: 24 })
    ) : null,
    
    React.createElement('ul', { className: containerClass },
      renderMenu()
    )
  );
}