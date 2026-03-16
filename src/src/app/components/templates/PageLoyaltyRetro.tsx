/**
 * PageLoyaltyRetro - Retro-Styled Loyalty Dashboard Page
 *
 * Personal loyalty dashboard with retro handheld gaming aesthetic.
 * Features points overview, quick actions, recent activity,
 * tier benefits, and upgrade CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Points dashboard with neon stat cards
 * - Quick actions grid with hover glow
 * - Recent activity timeline (earn/redeem)
 * - Tier benefits + upgrade banner
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*, .loyalty-*) in /src/styles/sections/loyalty-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @route /loyalty
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { TrendUp as TrendingUp, ArrowRight, CheckCircle, Clock, ShoppingCart, Trophy } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { rewardTiers } from '../../data/rewardProgram';
import { loyaltyUser, tierIcons, recentActivity, quickActions, getLoyaltyProgress } from '../../data/loyalty';

export const PageLoyaltyRetro = () => {
  const { progressPct, pointsRemaining } = getLoyaltyProgress();

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['YOUR', 'LOYALTY']}
          highlight={`${loyaltyUser.points.toLocaleString()} PTS`}
          description={`Welcome back, ${loyaltyUser.name.split(' ')[0]}! You have ${loyaltyUser.points.toLocaleString()} points to spend. Keep earning to reach ${loyaltyUser.nextTier}!`}
          images={{
            main: 'https://images.unsplash.com/photo-1754300681803-61eadeb79d10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZyUyMHRyb3BoeSUyMGFjaGlldmVtZW50JTIwZ29sZHxlbnwxfHx8fDE3NzMzNDQwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1646992914433-de93d0d06c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3lhbHR5JTIwY2FyZCUyMHJld2FyZHMlMjBwb2ludHMlMjBwcm9ncmFtfGVufDF8fHx8MTc3MzM0NDA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1721372261034-525a25737f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGFyY2FkZSUyMG5lb24lMjBnYW1pbmclMjBjb250cm9sbGVyfGVufDF8fHx8MTc3MzM0NDA5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Points Dashboard */}
        <section className="retro-section retro-section--dashboard" aria-label="Your points overview">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              POINTS DASHBOARD
            </h2>
            <div className="loyalty-dashboard__grid">
              <div className="loyalty-stat-card loyalty-stat-card--neon-lime">
                <span className="loyalty-stat-card__label retro-font-body">Available points</span>
                <span className="loyalty-stat-card__value retro-font-display">{loyaltyUser.points.toLocaleString()}</span>
                <span className="loyalty-stat-card__subtext retro-font-body">
                  {'\u2248'} ${(loyaltyUser.points * 0.02).toFixed(0)} value
                </span>
              </div>
              <div className="loyalty-stat-card loyalty-stat-card--neon-cyan">
                <span className="loyalty-stat-card__label retro-font-body">Progress to {loyaltyUser.nextTier}</span>
                <div className="loyalty-progress">
                  <div className="loyalty-progress__track">
                    <div
                      className="loyalty-progress__fill"
                      style={{ width: `${Math.min(progressPct, 100)}%` }}
                      role="progressbar"
                      aria-valuenow={loyaltyUser.points}
                      aria-valuemin={0}
                      aria-valuemax={loyaltyUser.nextTierThreshold}
                      aria-label={`${progressPct}% to ${loyaltyUser.nextTier}`}
                    />
                  </div>
                  <span className="loyalty-progress__label retro-font-body">{pointsRemaining} pts to go</span>
                </div>
              </div>
              <div className="loyalty-stat-card loyalty-stat-card--neon-pink">
                <span className="loyalty-stat-card__label retro-font-body">Lifetime earned</span>
                <span className="loyalty-stat-card__value retro-font-display">{loyaltyUser.lifetimePoints.toLocaleString()}</span>
                <span className="loyalty-stat-card__subtext retro-font-body">
                  Member since {loyaltyUser.memberSince}
                </span>
              </div>
              <div className="loyalty-stat-card loyalty-stat-card--neon-yellow">
                <span className="loyalty-stat-card__label retro-font-body">Current tier</span>
                <span className="loyalty-stat-card__value loyalty-stat-card__value--tier retro-font-display">
                  {tierIcons[loyaltyUser.tier]}
                  {loyaltyUser.tier}
                </span>
                <span className="loyalty-stat-card__subtext retro-font-body">1.5x points multiplier</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="retro-section retro-section--actions" aria-label="Quick actions">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              QUICK ACTIONS
            </h2>
            <div className="loyalty-actions__grid">
              {quickActions.map((action) => (
                <Link key={action.label} to={action.link} className="loyalty-action-card">
                  <span className="loyalty-action-card__icon" aria-hidden="true">{action.icon}</span>
                  <div className="loyalty-action-card__text">
                    <span className="loyalty-action-card__label retro-font-display retro-bold">{action.label.toUpperCase()}</span>
                    <span className="loyalty-action-card__desc retro-font-body">{action.description}</span>
                  </div>
                  <ArrowRight size={16} className="loyalty-action-card__arrow" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="retro-section retro-section--activity" aria-label="Recent activity">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              RECENT ACTIVITY
            </h2>
            <div className="loyalty-activity__list">
              {recentActivity.map((item) => (
                <div key={item.id} className="loyalty-activity-row">
                  <span className={`loyalty-activity-row__icon loyalty-activity-row__icon--${item.type}`} aria-hidden="true">{item.icon}</span>
                  <div className="loyalty-activity-row__info">
                    <span className="loyalty-activity-row__action retro-font-body">{item.action}</span>
                    <span className="loyalty-activity-row__date retro-font-body">
                      <Clock size={12} aria-hidden="true" />
                      {item.date}
                    </span>
                  </div>
                  <span className={`loyalty-activity-row__points loyalty-activity-row__points--${item.type} retro-font-display retro-bold`}>
                    {item.type === 'earn' ? '+' : ''}{item.points} pts
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tier Benefits */}
        <section className="retro-section" aria-label="Your tier benefits">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              YOUR {loyaltyUser.tier.toUpperCase()} BENEFITS
            </h2>
            <div className="loyalty-benefits-grid">
              {rewardTiers
                .filter((t) => t.name === loyaltyUser.tier)
                .flatMap((t) => t.benefits)
                .map((benefit, i) => (
                  <div key={i} className="loyalty-benefit-item">
                    <CheckCircle size={18} weight="fill" className="loyalty-benefit-item__icon" aria-hidden="true" />
                    <span className="retro-font-body">{benefit}</span>
                  </div>
                ))}
            </div>
            <div className="loyalty-upgrade-banner">
              <div className="loyalty-upgrade-banner__content">
                <div className="loyalty-upgrade-banner__text">
                  <h3 className="retro-font-display retro-bold">UNLOCK {loyaltyUser.nextTier.toUpperCase()} PERKS</h3>
                  <p className="retro-font-body">
                    Earn {pointsRemaining} more points to upgrade and enjoy{' '}
                    {loyaltyUser.nextTier === 'Gold'
                      ? '2x points, free express shipping, and priority support'
                      : 'even more exclusive benefits'}
                    .
                  </p>
                </div>
                <Link to="/shop" className="retro-btn retro-btn--primary retro-font-display">
                  SHOP NOW <ArrowRight size={18} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Explore rewards program">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Trophy size={64} weight="fill" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                WANT TO LEARN MORE?
              </h2>
              <p className="retro-font-body retro-cta-desc">
                Explore the full rewards program with tiers, earning methods, and redemption options.
              </p>
              <div className="retro-cta-actions">
                <Link to="/rewards" className="retro-btn retro-btn--primary retro-font-display">
                  VIEW FULL PROGRAM <ArrowRight size={20} weight="bold" />
                </Link>
                <Link to="/shop" className="retro-btn retro-btn--secondary retro-font-display">
                  START EARNING <ShoppingCart size={20} weight="bold" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};