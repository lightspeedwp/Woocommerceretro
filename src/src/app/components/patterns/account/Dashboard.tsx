import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Package, MapPin, User, Trophy, ArrowRight } from '@phosphor-icons/react';
import * as AccountDataModule from '../../../data/account';
import * as LoyaltyDataModule from '../../../data/loyalty';

var Link = ReactRouterModule.Link;
var mockUserProfile = AccountDataModule.mockUserProfile;
var loyaltyUser = LoyaltyDataModule.loyaltyUser;
var getLoyaltyProgress = LoyaltyDataModule.getLoyaltyProgress;

/**
 * Account Dashboard Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function Dashboard() {
  var loyaltyProgress = getLoyaltyProgress();
  var progressPct = loyaltyProgress.progressPct;
  var pointsRemaining = loyaltyProgress.pointsRemaining;

  var greeting = React.createElement('div', { key: 'greet', className: "account-dash__greeting-section" }, [
    React.createElement('h2', { key: 'h', className: "account-dash__greeting" }, [
      "Hello, ",
      React.createElement('span', { key: 'n', className: "account-dash__greeting-name" }, mockUserProfile.firstName + "!")
    ]),
    React.createElement('p', { key: 'p', className: "account-dash__intro" }, [
      "From your account dashboard you can view your ",
      React.createElement(Link, { key: 'o', to: "/account/orders", className: "account-dash__link" }, "recent orders"),
      ", manage your ",
      React.createElement(Link, { key: 'a', to: "/account/addresses", className: "account-dash__link" }, "shipping and billing addresses"),
      ", and ",
      React.createElement(Link, { key: 'd', to: "/account/details", className: "account-dash__link" }, "edit your password and account details"),
      "."
    ])
  ]);

  var loyaltyWidget = React.createElement(Link, {
    key: 'loyalty',
    to: "/account/loyalty",
    className: "account-dash__loyalty-widget funky-glass-panel funky-spring-hover",
    'aria-label': "View your loyalty dashboard"
  }, [
    React.createElement('div', { key: 'h', className: "account-dash__loyalty-header" }, [
      React.createElement('div', { key: 'b', className: "account-dash__loyalty-badge" }, [
        React.createElement(Trophy, { size: 18, weight: 'duotone', 'aria-hidden': "true" }),
        React.createElement('span', null, loyaltyUser.tier + " Member")
      ]),
      React.createElement('span', { key: 'c', className: "account-dash__loyalty-cta" }, [
        "View dashboard ",
        React.createElement(ArrowRight, { size: 14, weight: 'bold', 'aria-hidden': "true" })
      ])
    ]),
    React.createElement('div', { key: 's', className: "account-dash__loyalty-stats" }, [
      React.createElement('div', { key: 'p', className: "account-dash__loyalty-points" }, [
        React.createElement('span', { className: "account-dash__loyalty-points-value funky-section__heading--gradient" }, loyaltyUser.points.toLocaleString()),
        React.createElement('span', { className: "account-dash__loyalty-points-label" }, "points available")
      ]),
      React.createElement('div', { key: 'prog', className: "account-dash__loyalty-progress-wrap" }, [
        React.createElement('div', { key: 'i', className: "account-dash__loyalty-progress-info" }, [
          React.createElement('span', null, progressPct + "% to " + loyaltyUser.nextTier),
          React.createElement('span', null, pointsRemaining + " pts to go")
        ]),
        React.createElement('div', { key: 't', className: "account-dash__loyalty-track" }, 
          React.createElement('div', {
            className: "account-dash__loyalty-fill",
            style: { width: Math.min(progressPct, 100) + "%", background: 'linear-gradient(90deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-lime))' },
            role: "progressbar",
            'aria-valuenow': loyaltyUser.points,
            'aria-valuemin': 0,
            'aria-valuemax': loyaltyUser.nextTierThreshold,
            'aria-label': progressPct + "% progress to " + loyaltyUser.nextTier
          })
        )
      ])
    ])
  ]);

  var ordersCard = React.createElement(Link, { key: 'o', to: "/account/orders", className: "account-dash__card funky-glass-panel funky-spring-hover" }, [
    React.createElement('div', { key: 'i', className: "account-dash__card-icon account-dash__card-icon--cyan" }, 
      React.createElement(Package, { size: 24, weight: 'duotone', 'aria-hidden': "true" })
    ),
    React.createElement('div', { key: 'b' }, [
      React.createElement('h3', { className: "account-dash__card-title" }, "Orders"),
      React.createElement('p', { className: "account-dash__card-desc" }, "View and track your recent orders."),
      React.createElement('span', { className: "account-dash__card-action", style: { color: 'var(--wp--preset--color--neon-cyan)' } }, "View orders ->")
    ])
  ]);

  var addressesCard = React.createElement(Link, { key: 'a', to: "/account/addresses", className: "account-dash__card funky-glass-panel funky-spring-hover" }, [
    React.createElement('div', { key: 'i', className: "account-dash__card-icon account-dash__card-icon--pink" }, 
      React.createElement(MapPin, { size: 24, weight: 'duotone', 'aria-hidden': "true" })
    ),
    React.createElement('div', { key: 'b' }, [
      React.createElement('h3', { className: "account-dash__card-title" }, "Addresses"),
      React.createElement('p', { className: "account-dash__card-desc" }, "Edit addresses for orders and gifts."),
      React.createElement('span', { className: "account-dash__card-action", style: { color: 'var(--wp--preset--color--neon-pink)' } }, "Manage addresses ->")
    ])
  ]);

  var detailsCard = React.createElement(Link, { key: 'd', to: "/account/details", className: "account-dash__card funky-glass-panel funky-spring-hover" }, [
    React.createElement('div', { key: 'i', className: "account-dash__card-icon account-dash__card-icon--lime" }, 
      React.createElement(User, { size: 24, weight: 'duotone', 'aria-hidden': "true", style: { color: 'var(--wp--preset--color--neon-lime)' } })
    ),
    React.createElement('div', { key: 'b' }, [
      React.createElement('h3', { className: "account-dash__card-title" }, "Account details"),
      React.createElement('p', { className: "account-dash__card-desc" }, "Edit password and account details."),
      React.createElement('span', { className: "account-dash__card-action", style: { color: 'var(--wp--preset--color--neon-lime)' } }, "Edit details ->")
    ])
  ]);

  var cards = React.createElement('div', { key: 'cards', className: "account-dash__cards" }, [ordersCard, addressesCard, detailsCard]);

  return React.createElement('div', { className: "account-dash" }, [
    greeting,
    loyaltyWidget,
    cards
  ]);
}