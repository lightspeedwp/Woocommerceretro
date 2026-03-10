import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Star, Gift, Lightning as Zap, Crown, TrendUp as TrendingUp, Medal as Award } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as RewardProgramDataModule from '../../data/rewardProgram';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var rewardTiers = RewardProgramDataModule.rewardTiers;
var earnMethods = RewardProgramDataModule.earnMethods;
var redeemOptions = RewardProgramDataModule.redeemOptions;
var rewardProgramPageContent = RewardProgramDataModule.rewardProgramPageContent;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var rewardProgramHero = HeroDataModule.rewardProgramHero;

/**
 * PageRewardProgram Template — Funky Redesign
 *
 * Loyalty rewards program with tiers, benefits, and how to earn points.
 * Uses commerce-hero pattern with Gold/Pink colour identity.
 *
 * @route /rewards
 * @template
 */

var tierIcons: Record<string, React.ReactNode> = {
  'Star': React.createElement(Star, { size: 24 }),
  'Award': React.createElement(Award, { size: 24 }),
  'Crown': React.createElement(Crown, { size: 24 }),
  'Zap': React.createElement(Zap, { size: 24 }),
};

export function PageRewardProgram() {
  var prefersReduced = usePrefersReducedMotion();

  return React.createElement(Layout, null, 
    React.createElement('div', { className: 'page-rewards' }, 
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: rewardProgramHero }),

      /* How It Works */
      React.createElement('section', { className: 'reward-section' }, 
        React.createElement(Container, null, 
          React.createElement('h2', { className: 'reward-section__heading' }, rewardProgramPageContent.howItWorksHeading),
          React.createElement('div', { className: 'reward-steps' }, 
            React.createElement('div', { className: 'reward-steps__item' }, 
              React.createElement('span', { className: 'reward-steps__number' }, '1'),
              React.createElement('h4', { className: 'reward-steps__title' }, 'Join Free'),
              React.createElement('p', { className: 'reward-steps__text' }, 'Create an account to automatically enroll.')
            ),
            React.createElement('div', { className: 'reward-steps__item' }, 
              React.createElement('span', { className: 'reward-steps__number' }, '2'),
              React.createElement('h4', { className: 'reward-steps__title' }, 'Earn Points'),
              React.createElement('p', { className: 'reward-steps__text' }, 'Shop, review, and refer to earn points.')
            ),
            React.createElement('div', { className: 'reward-steps__item' }, 
              React.createElement('span', { className: 'reward-steps__number' }, '3'),
              React.createElement('h4', { className: 'reward-steps__title' }, 'Redeem Rewards'),
              React.createElement('p', { className: 'reward-steps__text' }, 'Use points for discounts on future orders.')
            )
          )
        )
      ),

      /* Tiers */
      React.createElement('section', { className: 'reward-section reward-section--alt' }, 
        React.createElement(Container, null, 
          React.createElement('h2', { className: 'reward-section__heading' }, rewardProgramPageContent.tiersHeading),
          React.createElement('div', { className: 'reward-tiers' }, 
            rewardTiers.map(function(tier, index) { 
              return React.createElement('div', { key: index, className: 'reward-tier-card reward-tier-card--' + tier.color }, 
                React.createElement('span', { className: 'reward-tier-card__icon' }, 
                  tierIcons[tier.icon] || React.createElement(Star, { size: 24 })
                ),
                React.createElement('h3', { className: 'reward-tier-card__name' }, tier.name),
                React.createElement('span', { className: 'reward-tier-card__points' }, tier.points + ' points'),
                React.createElement('ul', { className: 'reward-tier-card__benefits' }, 
                  tier.benefits.map(function(benefit, bIndex) { 
                    return React.createElement('li', { key: bIndex }, benefit);
                  })
                )
              );
            })
          )
        )
      ),

      /* Ways to Earn */
      React.createElement('section', { className: 'reward-section' }, 
        React.createElement(Container, null, 
          React.createElement('h2', { className: 'reward-section__heading' }, rewardProgramPageContent.earnHeading),
          React.createElement('div', { className: 'reward-earn-list' }, 
            earnMethods.map(function(method, index) { 
              return React.createElement('div', { key: index, className: 'reward-earn-item' }, 
                React.createElement('div', { className: 'reward-earn-item__info' }, 
                  React.createElement('h4', { className: 'reward-earn-item__title' }, method.action),
                  React.createElement('p', { className: 'reward-earn-item__desc' }, method.description)
                ),
                React.createElement('span', { className: 'reward-earn-item__points' }, 
                  React.createElement(TrendingUp, { size: 16, 'aria-hidden': 'true' }),
                  method.points
                )
              );
            })
          )
        )
      ),

      /* Redeem */
      React.createElement('section', { className: 'reward-section reward-section--alt' }, 
        React.createElement(Container, null, 
          React.createElement('h2', { className: 'reward-section__heading' }, rewardProgramPageContent.redeemHeading),
          React.createElement('div', { className: 'reward-redeem-table' }, 
            redeemOptions.map(function(option, index) { 
              return React.createElement('div', { key: index, className: 'reward-redeem-row' }, 
                React.createElement('span', { className: 'reward-redeem-row__points' }, option.points + ' pts'),
                React.createElement('span', { className: 'reward-redeem-row__reward' }, option.reward)
              );
            })
          )
        )
      ),

      /* CTA */
      React.createElement('section', { className: 'commerce-cta' }, 
        React.createElement('div', { className: 'commerce-cta__bg', 'aria-hidden': 'true' }),
        !prefersReduced && React.createElement(React.Fragment, null, 
          React.createElement('div', { className: 'commerce-cta__orb commerce-cta__orb--1', 'aria-hidden': 'true' }),
          React.createElement('div', { className: 'commerce-cta__orb commerce-cta__orb--2', 'aria-hidden': 'true' })
        ),
        React.createElement(Container, null, 
          React.createElement('div', { className: 'commerce-cta__content' }, 
            React.createElement(Gift, { size: 32, className: 'commerce-cta__icon', 'aria-hidden': 'true' }),
            React.createElement('h3', { className: 'commerce-cta__title' }, rewardProgramPageContent.ctaHeading),
            React.createElement('p', { className: 'commerce-cta__text' }, rewardProgramPageContent.ctaText),
            React.createElement('div', { className: 'commerce-cta__actions' }, 
              React.createElement(Link, { to: '/account/login', className: 'commerce-cta__btn commerce-cta__btn--primary' }, 
                rewardProgramPageContent.ctaButtonPrimary
              ),
              React.createElement(Link, { to: '/shop', className: 'commerce-cta__btn commerce-cta__btn--outline' }, 
                rewardProgramPageContent.ctaButtonSecondary
              )
            )
          )
        )
      )
    )
  );
};