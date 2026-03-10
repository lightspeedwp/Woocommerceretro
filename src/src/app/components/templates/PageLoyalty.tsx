import React from 'react';
import * as ReactRouterModule from 'react-router';
import { TrendUp as TrendingUp, ArrowRight, CheckCircle, Clock } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as RewardProgramDataModule from '../../data/rewardProgram';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as LoyaltyDataModule from '../../data/loyalty';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var rewardTiers = RewardProgramDataModule.rewardTiers;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var loyaltyUser = LoyaltyDataModule.loyaltyUser;
var tierIcons = LoyaltyDataModule.tierIcons;
var recentActivity = LoyaltyDataModule.recentActivity;
var quickActions = LoyaltyDataModule.quickActions;
var getLoyaltyProgress = LoyaltyDataModule.getLoyaltyProgress;

/**
 * PageLoyalty Template - Funky Redesign
 * @route /loyalty
 * @template
 */

export function PageLoyalty() {
  var prefersReduced = usePrefersReducedMotion();
  var progress = getLoyaltyProgress();
  var progressPct = progress.progressPct;
  var pointsRemaining = progress.pointsRemaining;

  return React.createElement(Layout, null, 
    React.createElement('div', { className: 'page-loyalty' }, 
      /* Hero */
      React.createElement('section', { className: 'commerce-hero', 'aria-labelledby': 'loyalty-title' }, 
        React.createElement('div', { className: 'commerce-hero__bg', 'aria-hidden': 'true' }),
        !prefersReduced && React.createElement(React.Fragment, null, 
          React.createElement('div', { className: 'commerce-hero__orb commerce-hero__orb--1', 'aria-hidden': 'true' }),
          React.createElement('div', { className: 'commerce-hero__orb commerce-hero__orb--2', 'aria-hidden': 'true' })
        ),
        React.createElement(Container, null, 
          React.createElement('div', { className: 'commerce-hero__content' }, 
            React.createElement('div', { className: 'commerce-hero__badge' }, 
              tierIcons[loyaltyUser.tier],
              React.createElement('span', null, loyaltyUser.tier + ' member')
            ),
            React.createElement('h1', { id: 'loyalty-title', className: 'commerce-hero__title' }, 
              'Welcome back, ' + loyaltyUser.name.split(' ')[0]
            ),
            React.createElement('p', { className: 'commerce-hero__subtitle' }, 
              'You have ', React.createElement('strong', null, loyaltyUser.points.toLocaleString() + ' points'), ' to spend.',
              ' Keep earning to reach ' + loyaltyUser.nextTier + '!'
            ),
            React.createElement('div', { className: 'commerce-hero__actions' }, 
              React.createElement(Link, { to: '/shop', className: 'wp-sales-btn wp-sales-btn--primary' }, 
                'Start shopping',
                React.createElement(ArrowRight, { size: 18 })
              ),
              React.createElement(Link, { to: '/rewards', className: 'wp-sales-btn wp-sales-btn--outline' }, 
                'View full program'
              )
            )
          )
        )
      ),

      /* Points Dashboard */
      React.createElement('section', { className: 'loyalty-dashboard', 'aria-label': 'Your points overview' }, 
        React.createElement(Container, null, 
          React.createElement('div', { className: 'loyalty-dashboard__grid' }, 
            React.createElement('div', { className: 'loyalty-stat-card loyalty-stat-card--primary' }, 
              React.createElement('span', { className: 'loyalty-stat-card__label' }, 'Available points'),
              React.createElement('span', { className: 'loyalty-stat-card__value' }, loyaltyUser.points.toLocaleString()),
              React.createElement('span', { className: 'loyalty-stat-card__subtext' }, 
                '≈ $' + (loyaltyUser.points * 0.02).toFixed(0) + ' value'
              )
            ),
            React.createElement('div', { className: 'loyalty-stat-card loyalty-stat-card--progress' }, 
              React.createElement('span', { className: 'loyalty-stat-card__label' }, 'Progress to ' + loyaltyUser.nextTier),
              React.createElement('div', { className: 'loyalty-progress' }, 
                React.createElement('div', { className: 'loyalty-progress__track' }, 
                  React.createElement('div', { 
                    className: 'loyalty-progress__fill', 
                    style: { width: Math.min(progressPct, 100) + '%' },
                    role: 'progressbar',
                    'aria-valuenow': loyaltyUser.points,
                    'aria-valuemin': 0,
                    'aria-valuemax': loyaltyUser.nextTierThreshold,
                    'aria-label': progressPct + '% to ' + loyaltyUser.nextTier
                  })
                ),
                React.createElement('span', { className: 'loyalty-progress__label' }, pointsRemaining + ' pts to go')
              )
            ),
            React.createElement('div', { className: 'loyalty-stat-card' }, 
              React.createElement('span', { className: 'loyalty-stat-card__label' }, 'Lifetime earned'),
              React.createElement('span', { className: 'loyalty-stat-card__value' }, loyaltyUser.lifetimePoints.toLocaleString()),
              React.createElement('span', { className: 'loyalty-stat-card__subtext' }, 
                'Member since ' + loyaltyUser.memberSince
              )
            ),
            React.createElement('div', { className: 'loyalty-stat-card' }, 
              React.createElement('span', { className: 'loyalty-stat-card__label' }, 'Current tier'),
              React.createElement('span', { className: 'loyalty-stat-card__value loyalty-stat-card__value--tier' }, 
                tierIcons[loyaltyUser.tier],
                loyaltyUser.tier
              ),
              React.createElement('span', { className: 'loyalty-stat-card__subtext' }, '1.5x points multiplier')
            )
          )
        )
      ),

      /* Quick Actions */
      React.createElement('section', { className: 'loyalty-actions', 'aria-label': 'Quick actions' }, 
        React.createElement(Container, null, 
          React.createElement('h2', { className: 'loyalty-section__heading' }, 'Quick actions'),
          React.createElement('div', { className: 'loyalty-actions__grid' }, 
            quickActions.map(function(action) { 
              return React.createElement(Link, { key: action.label, to: action.link, className: 'loyalty-action-card' }, 
                React.createElement('span', { className: 'loyalty-action-card__icon', 'aria-hidden': 'true' }, action.icon),
                React.createElement('div', { className: 'loyalty-action-card__text' }, 
                  React.createElement('span', { className: 'loyalty-action-card__label' }, action.label),
                  React.createElement('span', { className: 'loyalty-action-card__desc' }, action.description)
                ),
                React.createElement(ArrowRight, { size: 16, className: 'loyalty-action-card__arrow', 'aria-hidden': 'true' })
              );
            })
          )
        )
      ),

      /* Recent Activity */
      React.createElement('section', { className: 'loyalty-activity', 'aria-label': 'Recent activity' }, 
        React.createElement(Container, null, 
          React.createElement('h2', { className: 'loyalty-section__heading' }, 'Recent activity'),
          React.createElement('div', { className: 'loyalty-activity__list' }, 
            recentActivity.map(function(item) { 
              return React.createElement('div', { key: item.id, className: 'loyalty-activity-row' }, 
                React.createElement('span', { className: 'loyalty-activity-row__icon loyalty-activity-row__icon--' + item.type, 'aria-hidden': 'true' }, item.icon),
                React.createElement('div', { className: 'loyalty-activity-row__info' }, 
                  React.createElement('span', { className: 'loyalty-activity-row__action' }, item.action),
                  React.createElement('span', { className: 'loyalty-activity-row__date' }, 
                    React.createElement(Clock, { size: 12, 'aria-hidden': 'true' }),
                    item.date
                  )
                ),
                React.createElement('span', { className: 'loyalty-activity-row__points loyalty-activity-row__points--' + item.type }, 
                  item.type === 'earn' ? '+' : '', item.points, ' pts'
                )
              );
            })
          )
        )
      ),

      /* Tier Benefits */
      React.createElement('section', { className: 'loyalty-tiers', 'aria-label': 'Your tier benefits' }, 
        React.createElement(Container, null, 
          React.createElement('h2', { className: 'loyalty-section__heading' }, 'Your ' + loyaltyUser.tier + ' benefits'),
          React.createElement('div', { className: 'loyalty-benefits-grid' }, 
            rewardTiers
              .filter(function(t) { return t.name === loyaltyUser.tier; })
              .flatMap(function(t) { return t.benefits; })
              .map(function(benefit, i) { 
                return React.createElement('div', { key: i, className: 'loyalty-benefit-item' }, 
                  React.createElement(CheckCircle, { size: 18, className: 'loyalty-benefit-item__icon', 'aria-hidden': 'true' }),
                  React.createElement('span', null, benefit)
                );
              })
          ),
          React.createElement('div', { className: 'loyalty-upgrade-banner' }, 
            React.createElement('div', { className: 'loyalty-upgrade-banner__content' }, 
              React.createElement('div', { className: 'loyalty-upgrade-banner__text' }, 
                React.createElement('h3', null, 'Unlock ' + loyaltyUser.nextTier + ' perks'),
                React.createElement('p', null, 
                  'Earn ' + pointsRemaining + ' more points to upgrade and enjoy ',
                  loyaltyUser.nextTier === 'Gold' ? '2x points, free express shipping, and priority support' : 'even more exclusive benefits',
                  '.'
                )
              ),
              React.createElement(Link, { to: '/shop', className: 'wp-sales-btn wp-sales-btn--primary' }, 
                'Shop now',
                React.createElement(ArrowRight, { size: 18 })
              )
            )
          )
        )
      ),

      /* CTA */
      React.createElement('section', { className: 'commerce-cta', 'aria-label': 'Explore rewards program' }, 
        React.createElement('div', { className: 'commerce-cta__bg', 'aria-hidden': 'true' }),
        !prefersReduced && React.createElement(React.Fragment, null, 
          React.createElement('div', { className: 'commerce-cta__orb commerce-cta__orb--1', 'aria-hidden': 'true' }),
          React.createElement('div', { className: 'commerce-cta__orb commerce-cta__orb--2', 'aria-hidden': 'true' })
        ),
        React.createElement(Container, null, 
          React.createElement('div', { className: 'commerce-cta__content' }, 
            React.createElement(TrendingUp, { size: 32, className: 'commerce-cta__icon', 'aria-hidden': 'true' }),
            React.createElement('h3', { className: 'commerce-cta__title' }, 'Want to learn more?'),
            React.createElement('p', { className: 'commerce-cta__text' }, 'Explore the full rewards program with tiers, earning methods, and redemption options.'),
            React.createElement('div', { className: 'commerce-cta__actions' }, 
              React.createElement(Link, { to: '/rewards', className: 'commerce-cta__btn commerce-cta__btn--primary' }, 'View full program'),
              React.createElement(Link, { to: '/shop', className: 'commerce-cta__btn commerce-cta__btn--outline' }, 'Start earning')
            )
          )
        )
      )
    )
  );
}

export default PageLoyalty;