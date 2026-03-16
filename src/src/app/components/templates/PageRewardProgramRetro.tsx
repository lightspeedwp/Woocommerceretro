/**
 * PageRewardProgramRetro - Retro-Styled Rewards Program Page
 *
 * Loyalty rewards program with retro handheld gaming aesthetic.
 * Features reward tiers, earn methods, redemption options, and how-it-works steps.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Tiered loyalty system with 4 levels
 * - Earn methods grid
 * - Redemption options table
 * - 3-step how-it-works process
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/rewards-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @route /rewards
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { 
  Star, 
  Gift, 
  Lightning as Zap, 
  Crown, 
  TrendUp as TrendingUp, 
  Medal as Award,
  ArrowRight,
  ShoppingCart
} from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { rewardTiers, earnMethods, redeemOptions, rewardProgramPageContent } from '../../data/rewardProgram';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

const tierIcons: Record<string, React.ComponentType<any>> = {
  'Star': Star,
  'Award': Award,
  'Crown': Crown,
  'Zap': Zap,
};

export const PageRewardProgramRetro = () => {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">
        
        {/* Hero Section */}
        <HeroRetro
          titleLines={['REWARDS', 'PROGRAM!']}
          highlight="LOYALTY REWARDS"
          description="Earn points with every purchase and redeem them for discounts, exclusive products, and more."
        />

        {/* How It Works Section */}
        <section className="retro-section retro-section--steps">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              {rewardProgramPageContent.howItWorksHeading.toUpperCase()}
            </h2>

            <div className="retro-steps-grid">
              <div className="retro-step-card">
                <span className="retro-step-number retro-font-display">1</span>
                <h4 className="retro-step-title retro-font-display retro-bold">
                  JOIN FREE
                </h4>
                <p className="retro-step-desc retro-font-body">
                  Create an account to automatically enroll.
                </p>
              </div>
              <div className="retro-step-card">
                <span className="retro-step-number retro-font-display">2</span>
                <h4 className="retro-step-title retro-font-display retro-bold">
                  EARN POINTS
                </h4>
                <p className="retro-step-desc retro-font-body">
                  Shop, review, and refer to earn points.
                </p>
              </div>
              <div className="retro-step-card">
                <span className="retro-step-number retro-font-display">3</span>
                <h4 className="retro-step-title retro-font-display retro-bold">
                  REDEEM REWARDS
                </h4>
                <p className="retro-step-desc retro-font-body">
                  Use points for discounts on future orders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tiers Section */}
        <section className="retro-section retro-section--tiers">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              {rewardProgramPageContent.tiersHeading.toUpperCase()}
            </h2>

            <div className="retro-grid retro-grid-4">
              {rewardTiers.map((tier, index) => {
                const IconComponent = tierIcons[tier.icon] || Star;
                return (
                  <div 
                    key={index} 
                    className={`retro-tier-card retro-tier-card--${tier.color}`}
                  >
                    <div className="retro-tier-icon">
                      <IconComponent size={32} weight="fill" aria-hidden="true" />
                    </div>
                    <h3 className="retro-tier-name retro-font-display retro-bold">
                      {tier.name.toUpperCase()}
                    </h3>
                    <span className="retro-tier-points retro-font-body">
                      {tier.points} POINTS
                    </span>
                    <ul className="retro-tier-benefits">
                      {tier.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="retro-tier-benefit retro-font-body">
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Ways to Earn Section */}
        <section className="retro-section retro-section--earn">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              {rewardProgramPageContent.earnHeading.toUpperCase()}
            </h2>

            <div className="retro-earn-list">
              {earnMethods.map((method, index) => (
                <div key={index} className="retro-earn-item">
                  <div className="retro-earn-info">
                    <h4 className="retro-earn-title retro-font-display retro-bold">
                      {method.action.toUpperCase()}
                    </h4>
                    <p className="retro-earn-desc retro-font-body">
                      {method.description}
                    </p>
                  </div>
                  <span className="retro-earn-points retro-font-display">
                    <TrendingUp size={20} weight="bold" aria-hidden="true" />
                    {method.points}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Redeem Section */}
        <section className="retro-section retro-section--redeem">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              {rewardProgramPageContent.redeemHeading.toUpperCase()}
            </h2>

            <div className="retro-redeem-table">
              {redeemOptions.map((option, index) => (
                <div key={index} className="retro-redeem-row">
                  <span className="retro-redeem-points retro-font-display">
                    {option.points} PTS
                  </span>
                  <span className="retro-redeem-reward retro-font-body">
                    {option.reward}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Join rewards program">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Gift size={64} weight="fill" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h3 className="retro-font-display retro-bold retro-cta-title">
                {rewardProgramPageContent.ctaHeading.toUpperCase()}
              </h3>
              <p className="retro-font-body retro-cta-desc">
                {rewardProgramPageContent.ctaText}
              </p>
              <div className="retro-cta-actions">
                <Link to="/account/login" className="retro-btn retro-btn--primary retro-font-display">
                  {rewardProgramPageContent.ctaButtonPrimary.toUpperCase()} <ArrowRight size={20} weight="bold" />
                </Link>
                <Link to="/shop" className="retro-btn retro-btn--secondary retro-font-display">
                  {rewardProgramPageContent.ctaButtonSecondary.toUpperCase()} <ShoppingCart size={20} weight="bold" />
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