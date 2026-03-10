import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Users, CurrencyDollar as DollarSign, ShareNetwork as Share2, ChartBar as BarChart3, CheckCircle, Lightning as Zap } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as AffiliateProgramDataModule from '../../data/affiliateProgram';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var affiliateBenefits = AffiliateProgramDataModule.affiliateBenefits;
var commissionTiers = AffiliateProgramDataModule.commissionTiers;
var affiliateProgramPageContent = AffiliateProgramDataModule.affiliateProgramPageContent;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var affiliateProgramHero = HeroDataModule.affiliateProgramHero;

/**
 * PageAffiliateProgram Template — Funky Redesign
 *
 * Affiliate and partner program with commission structure and benefits.
 * Uses commerce-hero pattern with Gold/Pink colour identity.
 *
 * @route /affiliate
 * @template
 */

var benefitIcons = {
  'commission': React.createElement(DollarSign, { size: 28 }),
  'analytics': React.createElement(BarChart3, { size: 28 }),
  'cookie': React.createElement(Zap, { size: 28 }),
  'resources': React.createElement(Share2, { size: 28 }),
  'support': React.createElement(Users, { size: 28 }),
  'payouts': React.createElement(CheckCircle, { size: 28 }),
};

export function PageAffiliateProgram() {
  var prefersReduced = usePrefersReducedMotion();

  return (
    React.createElement(Layout, null,
      React.createElement('div', { className: "page-affiliate" },
        /* Hero (shared FunkyHero) */
        React.createElement(FunkyHero, { config: affiliateProgramHero }),

        /* Benefits */
        React.createElement('section', { className: "reward-section" },
          React.createElement(Container, null,
            React.createElement('h2', { className: "reward-section__heading" }, affiliateProgramPageContent.benefitsHeading),
            React.createElement('div', { className: "affiliate-benefits-grid" },
              affiliateBenefits.map(function(benefit) { return (
                React.createElement('div', { key: benefit.id, className: "affiliate-benefit-card" },
                  React.createElement('span', { className: "affiliate-benefit-card__icon" },
                    benefitIcons[benefit.id]
                  ),
                  React.createElement('h4', { className: "affiliate-benefit-card__title" }, benefit.title),
                  React.createElement('p', { className: "affiliate-benefit-card__text" }, benefit.description)
                )
              )})
            )
          )
        ),

        /* Commission Structure */
        React.createElement('section', { className: "reward-section reward-section--alt" },
          React.createElement(Container, null,
            React.createElement('h2', { className: "reward-section__heading" }, affiliateProgramPageContent.commissionHeading),
            React.createElement('div', { className: "affiliate-commission-table" },
              React.createElement('div', { className: "affiliate-commission-table__header" },
                React.createElement('span', null, "Tier"),
                React.createElement('span', null, "Monthly Sales"),
                React.createElement('span', null, "Commission")
              ),
              commissionTiers.map(function(tier) { return (
                React.createElement('div', { key: tier.id, className: "affiliate-commission-table__row" },
                  React.createElement('span', { className: "affiliate-commission-table__tier" }, tier.tier),
                  React.createElement('span', { className: "affiliate-commission-table__sales" }, tier.sales),
                  React.createElement('span', { className: "affiliate-commission-table__rate" }, tier.rate)
                )
              )})
            )
          )
        ),

        /* How to Join */
        React.createElement('section', { className: "reward-section" },
          React.createElement(Container, null,
            React.createElement('h2', { className: "reward-section__heading" }, affiliateProgramPageContent.howToJoinHeading),
            React.createElement('div', { className: "reward-steps" },
              React.createElement('div', { className: "reward-steps__item" },
                React.createElement('span', { className: "reward-steps__number" }, "1"),
                React.createElement('h4', { className: "reward-steps__title" }, "Apply"),
                React.createElement('p', { className: "reward-steps__text" }, "Submit a brief application with your platform details.")
              ),
              React.createElement('div', { className: "reward-steps__item" },
                React.createElement('span', { className: "reward-steps__number" }, "2"),
                React.createElement('h4', { className: "reward-steps__title" }, "Get Approved"),
                React.createElement('p', { className: "reward-steps__text" }, "We review applications within 48 hours.")
              ),
              React.createElement('div', { className: "reward-steps__item" },
                React.createElement('span', { className: "reward-steps__number" }, "3"),
                React.createElement('h4', { className: "reward-steps__title" }, "Share & Earn"),
                React.createElement('p', { className: "reward-steps__text" }, "Use your unique links to promote products and earn commissions.")
              )
            )
          )
        ),

        /* CTA */
        React.createElement('section', { className: "commerce-cta" },
          React.createElement('div', { className: "commerce-cta__bg", "aria-hidden": "true" }),
          !prefersReduced && (
            React.createElement(React.Fragment, null,
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--1", "aria-hidden": "true" }),
              React.createElement('div', { className: "commerce-cta__orb commerce-cta__orb--2", "aria-hidden": "true" })
            )
          ),
          React.createElement(Container, null,
            React.createElement('div', { className: "commerce-cta__content" },
              React.createElement('h3', { className: "commerce-cta__title" }, affiliateProgramPageContent.ctaHeading),
              React.createElement('p', { className: "commerce-cta__text" }, affiliateProgramPageContent.ctaText),
              React.createElement('div', { className: "commerce-cta__actions" },
                React.createElement(Link, { to: "/contact", className: "commerce-cta__btn commerce-cta__btn--primary" },
                  affiliateProgramPageContent.ctaButtonPrimary
                ),
                React.createElement(Link, { to: "/faq", className: "commerce-cta__btn commerce-cta__btn--outline" },
                  affiliateProgramPageContent.ctaButtonSecondary
                )
              )
            )
          )
        )
      )
    )
  );
}
