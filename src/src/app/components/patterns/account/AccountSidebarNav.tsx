import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;
var useLocation = ReactRouterModule.useLocation;

import * as AccountDataModule from '../../../data/account';
import * as TypographyModule from '../../common/Typography';

var accountNavItems = AccountDataModule.accountNavItems;
var Typography = TypographyModule.Typography;

/**
 * AccountSidebarNav Pattern Component
 * 
 * Sidebar navigation for customer account pages with active states,
 * badge counts, and responsive behavior.
 * 
 * **Version:** 1.1 (Tailwind-free)
 * **WordPress Mapping:** Navigation Block / Account Menu
 * **Used In:** AccountLayout.tsx
 * **Dark Mode:** ✅ Full support via CSS variables
 * 
 * @pattern
 */

export function AccountSidebarNav(props) {
  var currentPage = props.currentPage;
  var className = props.className || '';
  var location = useLocation();
  var activePage = currentPage || location.pathname;

  function isActive(item) {
    return activePage === item.href || activePage.startsWith(item.href + '/');
  }

  function getAriaLabel(item) {
    if (item.badge && item.badge > 0) {
      return item.label + ', ' + item.badge + ' new';
    }
    return item.label;
  }

  var mainNavItems = accountNavItems.filter(function(item) { return item.id !== 'logout'; });
  var logoutItem = accountNavItems.find(function(item) { return item.id === 'logout'; });

  var navItems = mainNavItems.map(function(item) {
    var Icon = item.icon;
    var active = isActive(item);

    var badge = item.badge && item.badge > 0 ? React.createElement('span', {
      className: 'wp-account-nav__badge ' + (active ? 'wp-account-nav__badge--active' : ''),
      'aria-hidden': 'true'
    }, item.badge > 99 ? '99+' : item.badge) : null;

    var icon = React.createElement(Icon, {
      size: 20,
      className: 'wp-account-nav__icon ' + (active ? 'wp-account-nav__icon--active' : ''),
      'aria-hidden': 'true'
    });

    var label = React.createElement(Typography, {
      className: 'wp-account-nav__label ' + (active ? 'wp-account-nav__label--active' : '')
    }, item.label);

    var linkContent = React.createElement('div', {
      className: 'wp-account-nav__link-content'
    }, [icon, label]);

    var link = React.createElement(Link, {
      to: item.href,
      className: 'wp-account-nav__link ' + (active ? 'wp-account-nav__link--active' : ''),
      'aria-current': active ? 'page' : undefined,
      'aria-label': getAriaLabel(item),
      title: item.description
    }, [linkContent, badge]);

    return React.createElement('li', { key: item.id }, link);
  });

  var logoutListItem = null;
  if (logoutItem) {
    var logoutIcon = React.createElement(logoutItem.icon, {
      size: 20,
      className: 'wp-account-nav__icon wp-account-nav__icon--logout',
      'aria-hidden': 'true'
    });

    var logoutLabel = React.createElement(Typography, {
      className: 'wp-account-nav__label wp-account-nav__label--logout'
    }, logoutItem.label);

    var logoutContent = React.createElement('div', {
      className: 'wp-account-nav__link-content'
    }, [logoutIcon, logoutLabel]);

    var logoutLink = React.createElement(Link, {
      to: logoutItem.href,
      className: 'wp-account-nav__link wp-account-nav__link--logout',
      'aria-label': logoutItem.label,
      title: logoutItem.description
    }, logoutContent);

    var separator = React.createElement('li', {
      className: 'wp-account-nav__separator',
      role: 'separator'
    });

    var logoutLi = React.createElement('li', null, logoutLink);

    logoutListItem = [separator, logoutLi];
  }

  var allItems = navItems.concat(logoutListItem || []);

  var list = React.createElement('ul', {
    className: 'wp-account-nav__list',
    role: 'list'
  }, allItems);

  return React.createElement('nav', {
    className: 'wp-account-nav ' + className,
    'aria-label': 'Account navigation'
  }, list);
}

export default AccountSidebarNav;