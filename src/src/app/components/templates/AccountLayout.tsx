import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as ContainerModule from '../common/Container';
import * as LayoutModule from '../parts/Layout';
import { SignOut } from '@phosphor-icons/react';
import * as AccountDataModule from '../../data/account';

var NavLink = ReactRouterModule.NavLink;
var Outlet = ReactRouterModule.Outlet;
var useNavigate = ReactRouterModule.useNavigate;
var Container = ContainerModule.Container;
var Layout = LayoutModule.Layout;
var accountNavItems = AccountDataModule.accountNavItems;

/**
 * AccountLayout Template
 *
 * Customer account dashboard layout wrapper with sidebar navigation.
 */
export function AccountLayout() {
  var navigate = useNavigate();

  function handleLogout() {
    navigate('/account/login');
  }

  var mainNavItems = accountNavItems.filter(
    function(item) { return !['logout', 'notifications', 'settings'].includes(item.id); }
  );

  return React.createElement(Layout, null,
    React.createElement('div', { className: "account-page" },
      /* Background orbs */
      React.createElement('div', { className: "funky-orb funky-animate-float account-page__orb--1" }),
      React.createElement('div', { className: "funky-orb funky-animate-float account-page__orb--2" }),

      React.createElement(Container, { className: "account-page__inner" },
        React.createElement('h1', { className: "account-page__title" }, "My account"),

        React.createElement('div', { className: "account-page__layout" },
          /* Sidebar Navigation */
          React.createElement('aside', null,
            React.createElement('nav', { className: "account-sidebar funky-glass-panel", 'aria-label': "Account navigation" },
              React.createElement('div', { className: "account-sidebar__nav" },
                mainNavItems.map(function(item) {
                  return React.createElement(NavLink, {
                    key: item.href,
                    to: item.href,
                    end: item.id === 'dashboard',
                    className: function(navProps) {
                      return 'account-sidebar__item funky-spring-hover' + (navProps.isActive ? ' account-sidebar__item--active' : '');
                    }
                  },
                    React.createElement(item.icon, { size: 18, weight: 'duotone', 'aria-hidden': "true" }),
                    React.createElement('span', null, item.label),
                    item.badge && item.badge > 0 ? React.createElement('span', { className: "account-sidebar__badge", 'aria-hidden': "true" },
                      item.badge > 99 ? '99+' : item.badge
                    ) : null
                  );
                }),

                React.createElement('hr', { className: "account-sidebar__divider" }),

                React.createElement('button', {
                  onClick: handleLogout,
                  className: "account-sidebar__item account-sidebar__item--logout funky-spring-hover"
                },
                  React.createElement(SignOut, { size: 18, weight: 'duotone', 'aria-hidden': "true" }),
                  React.createElement('span', null, "Log out")
                )
              )
            )
          ),

          /* Main Content Area */
          React.createElement('main', { className: "account-content" },
            React.createElement(Outlet, null)
          )
        )
      )
    )
  );
}