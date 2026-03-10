import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ArrowRight, CheckCircle, Clock, TrendUp as TrendingUp } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as RewardProgramDataModule from '../../../data/rewardProgram';
import * as LoyaltyDataModule from '../../../data/loyalty';

var rewardTiers = RewardProgramDataModule.rewardTiers;
var loyaltyUser = LoyaltyDataModule.loyaltyUser;
var tierIcons = LoyaltyDataModule.tierIcons;
var recentActivity = LoyaltyDataModule.recentActivity;
var quickActions = LoyaltyDataModule.quickActions;
var getLoyaltyProgress = LoyaltyDataModule.getLoyaltyProgress;

/**
 * AccountLoyalty Pattern
 *
 * Loyalty dashboard rendered **inside** the AccountLayout's `<Outlet>`.
 * Reuses the same shared data and BEM classes as PageLoyalty, but skips
 * the standalone `<Layout>` + hero (the AccountLayout already provides those).
 *
 * **Route:**   /account/loyalty
 * **Styling:** BEM (.loyalty-*) in /src/styles/sections/loyalty-funky.css
 *              + account-specific overrides in account-auth-funky.css
 * **Dark Mode:** Full support via CSS variables
 */
export function AccountLoyalty() {
  var progress = getLoyaltyProgress();
  var progressPct = progress.progressPct;
  var pointsRemaining = progress.pointsRemaining;

  return React.createElement('div', { className: "page-loyalty account-loyalty" },
    /* Header with tier badge */
    React.createElement('div', { className: "account-loyalty__header", style: { marginBottom: 'var(--wp--preset--spacing--60)' } },
      React.createElement('div', { className: "account-loyalty__badge", style: { display: 'inline-flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)', padding: 'var(--wp--preset--spacing--10) var(--wp--preset--spacing--20)', background: 'var(--wp--preset--color--surface)', borderRadius: 'var(--wp--preset--border-radius--full)', color: 'var(--wp--preset--color--neon-lime)', marginBottom: 'var(--wp--preset--spacing--20)', fontWeight: 'bold' } },
        tierIcons[loyaltyUser.tier],
        React.createElement('span', null, loyaltyUser.tier + " member")
      ),
      React.createElement('h2', { className: "account-loyalty__title funky-section__heading--gradient", style: { fontSize: 'var(--wp--preset--font-size--xx-large)', marginBottom: 'var(--wp--preset--spacing--20)' } },
        "Loyalty dashboard"
      ),
      React.createElement('p', { className: "account-loyalty__subtitle", style: { color: 'var(--wp--preset--color--muted-foreground)' } },
        "You have ", React.createElement('strong', { style: { color: 'var(--wp--preset--color--foreground)' } }, loyaltyUser.points.toLocaleString() + " points"), " available.",
        " Earn " + pointsRemaining + " more to reach " + loyaltyUser.nextTier + "."
      )
    ),

    /* Points Dashboard */
    React.createElement('div', { className: "loyalty-dashboard__grid", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--wp--preset--spacing--30)', marginBottom: 'var(--wp--preset--spacing--60)' } },
      /* Points Balance */
      React.createElement('div', { className: "loyalty-stat-card loyalty-stat-card--primary funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--40)', background: 'linear-gradient(135deg, rgba(204, 255, 0, 0.05), rgba(0, 255, 255, 0.05))', border: '1px solid var(--wp--preset--color--neon-lime)' } },
        React.createElement('span', { className: "loyalty-stat-card__label", style: { display: 'block', marginBottom: 'var(--wp--preset--spacing--10)', color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, "Available points"),
        React.createElement('span', { className: "loyalty-stat-card__value funky-section__heading--gradient", style: { display: 'block', fontSize: 'var(--wp--preset--font-size--gigantic)', fontWeight: 'bold', lineHeight: 1, marginBottom: 'var(--wp--preset--spacing--10)' } }, loyaltyUser.points.toLocaleString()),
        React.createElement('span', { className: "loyalty-stat-card__subtext", style: { color: 'var(--wp--preset--color--neon-lime)' } },
          "≈ $" + (loyaltyUser.points * 0.02).toFixed(0) + " value"
        )
      ),

      /* Progress */
      React.createElement('div', { className: "loyalty-stat-card loyalty-stat-card--progress funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--40)' } },
        React.createElement('span', { className: "loyalty-stat-card__label", style: { display: 'block', marginBottom: 'var(--wp--preset--spacing--20)', color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, "Progress to " + loyaltyUser.nextTier),
        React.createElement('div', { className: "loyalty-progress" },
          React.createElement('div', { className: "loyalty-progress__track", style: { height: '8px', background: 'var(--wp--preset--color--surface)', borderRadius: '4px', overflow: 'hidden', marginBottom: 'var(--wp--preset--spacing--10)' } },
            React.createElement('div', {
              className: "loyalty-progress__fill",
              style: { width: Math.min(progressPct, 100) + '%', height: '100%', background: 'linear-gradient(90deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-lime))' },
              role: "progressbar",
              'aria-valuenow': loyaltyUser.points,
              'aria-valuemin': 0,
              'aria-valuemax': loyaltyUser.nextTierThreshold,
              'aria-label': progressPct + '% to ' + loyaltyUser.nextTier
            })
          ),
          React.createElement('span', { className: "loyalty-progress__label", style: { fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--muted-foreground)' } }, pointsRemaining + " pts to go")
        )
      ),

      /* Lifetime */
      React.createElement('div', { className: "loyalty-stat-card funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--40)' } },
        React.createElement('span', { className: "loyalty-stat-card__label", style: { display: 'block', marginBottom: 'var(--wp--preset--spacing--10)', color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, "Lifetime earned"),
        React.createElement('span', { className: "loyalty-stat-card__value", style: { display: 'block', fontSize: 'var(--wp--preset--font-size--xx-large)', fontWeight: 'bold', marginBottom: 'var(--wp--preset--spacing--10)' } }, loyaltyUser.lifetimePoints.toLocaleString()),
        React.createElement('span', { className: "loyalty-stat-card__subtext", style: { color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)' } },
          "Member since " + loyaltyUser.memberSince
        )
      ),

      /* Current Tier */
      React.createElement('div', { className: "loyalty-stat-card funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--40)' } },
        React.createElement('span', { className: "loyalty-stat-card__label", style: { display: 'block', marginBottom: 'var(--wp--preset--spacing--10)', color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)', textTransform: 'uppercase', letterSpacing: '0.05em' } }, "Current tier"),
        React.createElement('span', { className: "loyalty-stat-card__value loyalty-stat-card__value--tier", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)', fontSize: 'var(--wp--preset--font-size--xx-large)', fontWeight: 'bold', marginBottom: 'var(--wp--preset--spacing--10)', color: 'var(--wp--preset--color--neon-lime)' } },
          tierIcons[loyaltyUser.tier],
          loyaltyUser.tier
        ),
        React.createElement('span', { className: "loyalty-stat-card__subtext", style: { color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)' } },
          "1.5x points multiplier"
        )
      )
    ),

    /* Quick Actions */
    React.createElement('h3', { className: "loyalty-section__heading" }, "Quick actions"),
    React.createElement('div', { className: "loyalty-actions__grid" },
      quickActions.map(function(action) { return (
        React.createElement(Link, { key: action.label, to: action.link, className: "loyalty-action-card" },
          React.createElement('span', { className: "loyalty-action-card__icon", 'aria-hidden': "true" },
            action.icon
          ),
          React.createElement('div', { className: "loyalty-action-card__text" },
            React.createElement('span', { className: "loyalty-action-card__label" }, action.label),
            React.createElement('span', { className: "loyalty-action-card__desc" }, action.description)
          ),
          React.createElement(ArrowRight, { size: 16, className: "loyalty-action-card__arrow", 'aria-hidden': "true" })
        )
      ); })
    ),

    /* Recent Activity */
    React.createElement('h3', { className: "loyalty-section__heading" }, "Recent activity"),
    React.createElement('div', { className: "loyalty-activity__list" },
      recentActivity.map(function(item) { return (
        React.createElement('div', { key: item.id, className: "loyalty-activity-row" },
          React.createElement('span', {
            className: 'loyalty-activity-row__icon loyalty-activity-row__icon--' + item.type,
            'aria-hidden': "true"
          },
            item.icon
          ),
          React.createElement('div', { className: "loyalty-activity-row__info" },
            React.createElement('span', { className: "loyalty-activity-row__action" }, item.action),
            React.createElement('span', { className: "loyalty-activity-row__date" },
              React.createElement(Clock, { size: 12, 'aria-hidden': "true" }),
              item.date
            )
          ),
          React.createElement('span', { className: 'loyalty-activity-row__points loyalty-activity-row__points--' + item.type },
            item.type === 'earn' ? '+' : '', item.points, " pts"
          )
        )
      ); })
    ),

    /* Tier Benefits */
      React.createElement('h3', { className: "loyalty-section__heading", style: { marginBottom: 'var(--wp--preset--spacing--30)' } }, "Your " + loyaltyUser.tier + " benefits"),
      React.createElement('div', { className: "loyalty-benefits-grid", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--wp--preset--spacing--20)', marginBottom: 'var(--wp--preset--spacing--60)' } },
        rewardTiers
          .filter(function(t) { return t.name === loyaltyUser.tier; })
          .flatMap(function(t) { return t.benefits; })
          .map(function(benefit, i) { return (
            React.createElement('div', { key: i, className: "loyalty-benefit-item funky-glass-panel funky-spring-hover", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)', padding: 'var(--wp--preset--spacing--30)' } },
              React.createElement(CheckCircle, { size: 18, weight: 'fill', className: "loyalty-benefit-item__icon", 'aria-hidden': "true", style: { color: 'var(--wp--preset--color--neon-lime)' } }),
              React.createElement('span', null, benefit)
            )
          ); })
      ),

      /* Upgrade Banner */
      React.createElement('div', { className: "loyalty-upgrade-banner funky-glass-panel", style: { padding: 'var(--wp--preset--spacing--50)', marginBottom: 'var(--wp--preset--spacing--40)', background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))', border: '1px solid var(--wp--preset--color--neon-pink)' } },
        React.createElement('div', { className: "loyalty-upgrade-banner__content", style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--wp--preset--spacing--40)' } },
          React.createElement('div', { className: "loyalty-upgrade-banner__text", style: { flex: 1, minWidth: '300px' } },
            React.createElement('h3', { className: "funky-section__heading--gradient", style: { marginBottom: 'var(--wp--preset--spacing--20)', color: 'var(--wp--preset--color--neon-pink)' } }, "Unlock " + loyaltyUser.nextTier + " perks"),
            React.createElement('p', { style: { margin: 0 } },
              "Earn " + pointsRemaining + " more points to upgrade and enjoy ",
              loyaltyUser.nextTier === 'Gold'
                ? '2x points, free express shipping, and priority support'
                : 'even more exclusive benefits',
              "."
            )
          ),
          React.createElement(Link, { to: "/shop", className: "wp-sales-btn wp-sales-btn--primary funky-spring-hover", style: { display: 'inline-flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--10)' } },
            "Shop now",
            React.createElement(ArrowRight, { size: 18, weight: 'bold' })
          )
        )
      ),

      /* Link to full program */
      React.createElement('div', { className: "account-loyalty__footer", style: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--wp--preset--spacing--10)', padding: 'var(--wp--preset--spacing--40) 0' } },
        React.createElement(TrendingUp, { size: 18, weight: 'duotone', 'aria-hidden': "true", style: { color: 'var(--wp--preset--color--neon-cyan)' } }),
        React.createElement(Link, { to: "/rewards", className: "account-loyalty__footer-link", style: { color: 'var(--wp--preset--color--foreground)', textDecoration: 'none', fontWeight: 'bold' } },
          "View the full rewards program →"
        )
      )
  );
}

export default AccountLoyalty;