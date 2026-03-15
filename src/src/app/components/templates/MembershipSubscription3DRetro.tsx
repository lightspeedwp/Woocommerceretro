/**
 * MembershipSubscription3DRetro - 3D Subscription Experience Page
 * 
 * Interactive membership subscription page featuring 3D WebGL elements:
 * - Step 1: Subscribe (spinning coin)
 * - Step 2: Confirmation (3D mystery box)
 * - Step 3: Monthly surprise (box opening animation)
 * 
 * **Features:**
 * - 3-step subscription flow
 * - CSS 3D animations
 * - Particle effects
 * - Retro handheld gaming aesthetic
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * 
 * **Styling:** BEM classes in /src/styles/sections/membership-3d-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 * 
 * @template
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Check, Gift, Star } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { SubscriptionBox3D } from '../blocks/display/SubscriptionBox3D';

export const MembershipSubscription3DRetro: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    setCurrentStep(2);
    
    // Auto-advance to step 3 after 3 seconds
    setTimeout(() => {
      setCurrentStep(3);
    }, 3000);
  };

  const handleStepComplete = () => {
    console.log('Subscription flow complete!');
  };

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">
        {/* Hero */}
        <HeroRetro
          titleLines={['MONTHLY', 'MYSTERY BOX']}
          highlight="SUBSCRIBE NOW!"
          description="Join our exclusive club and receive a surprise box of retro gaming goodies every month."
          images={{
            main: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=1080',
            sub1: 'https://images.unsplash.com/photo-1605487903737-4e0935f16115?w=1080',
            sub2: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=1080',
          }}
        />

        {/* 3D Subscription Flow */}
        <section className="retro-section">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              {currentStep === 1 && 'STEP 1: SUBSCRIBE'}
              {currentStep === 2 && 'STEP 2: CONFIRMATION'}
              {currentStep === 3 && 'STEP 3: SURPRISE!'}
            </h2>

            {/* Step indicator */}
            <div className="retro-step-indicator">
              <div className={`retro-step-dot ${currentStep >= 1 ? 'retro-step-dot--active' : ''}`}>
                {currentStep > 1 ? <Check size={16} weight="bold" /> : '1'}
              </div>
              <div className="retro-step-line" />
              <div className={`retro-step-dot ${currentStep >= 2 ? 'retro-step-dot--active' : ''}`}>
                {currentStep > 2 ? <Check size={16} weight="bold" /> : '2'}
              </div>
              <div className="retro-step-line" />
              <div className={`retro-step-dot ${currentStep >= 3 ? 'retro-step-dot--active' : ''}`}>
                {currentStep === 3 ? <Gift size={16} weight="bold" /> : '3'}
              </div>
            </div>

            {/* 3D Component */}
            <div className="retro-subscription-showcase">
              <SubscriptionBox3D
                step={currentStep}
                onComplete={handleStepComplete}
                autoRotate={true}
                glowColor="#00fff9"
                size={280}
              />
            </div>

            {/* Action buttons */}
            <div className="retro-subscription-actions">
              {currentStep === 1 && !subscribed && (
                <button
                  onClick={handleSubscribe}
                  className="retro-button retro-font-display"
                >
                  SUBSCRIBE NOW <ArrowRight size={20} weight="bold" />
                </button>
              )}

              {currentStep === 2 && (
                <div className="retro-subscription-message">
                  <p className="retro-font-body" style={{ textAlign: 'center' }}>
                    Thank you for subscribing! Your first mystery box is being prepared...
                  </p>
                </div>
              )}

              {currentStep === 3 && (
                <div className="retro-subscription-message">
                  <p className="retro-font-body" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    🎉 Your first box is ready! Check your email for tracking info.
                  </p>
                  <Link to="/account/subscriptions" className="retro-button retro-font-display">
                    VIEW MY SUBSCRIPTIONS <ArrowRight size={20} weight="bold" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="retro-section">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              WHY SUBSCRIBE?
            </h2>

            <div className="retro-grid retro-grid-3">
              {/* Benefit 1 */}
              <div className="retro-card">
                <div className="retro-card-icon">
                  <Star size={48} weight="fill" color="#00fff9" />
                </div>
                <h3 className="retro-card-title retro-font-display retro-bold">
                  EXCLUSIVE ITEMS
                </h3>
                <p className="retro-card-desc retro-font-body">
                  Get limited-edition retro gaming collectibles you won't find anywhere else.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="retro-card">
                <div className="retro-card-icon">
                  <Gift size={48} weight="fill" color="#ff00ff" />
                </div>
                <h3 className="retro-card-title retro-font-display retro-bold">
                  SURPRISE & DELIGHT
                </h3>
                <p className="retro-card-desc retro-font-body">
                  Every month brings a new surprise. We curate each box with love.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="retro-card">
                <div className="retro-card-icon">
                  <ArrowRight size={48} weight="bold" color="#ffff00" />
                </div>
                <h3 className="retro-card-title retro-font-display retro-bold">
                  CANCEL ANYTIME
                </h3>
                <p className="retro-card-desc retro-font-body">
                  No long-term commitment. Skip or cancel your subscription whenever you want.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="retro-section">
          <div className="retro-container">
            <h2 className="retro-font-display retro-bold retro-section-title">
              CHOOSE YOUR PLAN
            </h2>

            <div className="retro-grid retro-grid-3">
              {/* Monthly */}
              <div className="retro-card">
                <h3 className="retro-card-title retro-font-display retro-bold">
                  MONTHLY
                </h3>
                <div className="retro-price retro-font-display">
                  $29<span className="retro-price-period">/mo</span>
                </div>
                <ul className="retro-features-list retro-font-body">
                  <li><Check size={16} weight="bold" /> 1 mystery box per month</li>
                  <li><Check size={16} weight="bold" /> 4-6 curated items</li>
                  <li><Check size={16} weight="bold" /> Cancel anytime</li>
                </ul>
                <Link to="/subscribe?plan=monthly" className="retro-button-outline retro-font-display">
                  SELECT PLAN
                </Link>
              </div>

              {/* Quarterly */}
              <div className="retro-card retro-card-highlight">
                <div className="retro-badge" style={{ position: 'absolute', top: '-12px', right: '12px' }}>
                  POPULAR
                </div>
                <h3 className="retro-card-title retro-font-display retro-bold">
                  QUARTERLY
                </h3>
                <div className="retro-price retro-font-display">
                  $79<span className="retro-price-period">/3mo</span>
                </div>
                <div className="retro-price-save retro-font-body">
                  Save $8!
                </div>
                <ul className="retro-features-list retro-font-body">
                  <li><Check size={16} weight="bold" /> 3 mystery boxes</li>
                  <li><Check size={16} weight="bold" /> 4-6 curated items each</li>
                  <li><Check size={16} weight="bold" /> Bonus exclusive item</li>
                  <li><Check size={16} weight="bold" /> Cancel anytime</li>
                </ul>
                <Link to="/subscribe?plan=quarterly" className="retro-button retro-font-display">
                  SELECT PLAN <ArrowRight size={20} weight="bold" />
                </Link>
              </div>

              {/* Annual */}
              <div className="retro-card">
                <h3 className="retro-card-title retro-font-display retro-bold">
                  ANNUAL
                </h3>
                <div className="retro-price retro-font-display">
                  $299<span className="retro-price-period">/yr</span>
                </div>
                <div className="retro-price-save retro-font-body">
                  Save $49!
                </div>
                <ul className="retro-features-list retro-font-body">
                  <li><Check size={16} weight="bold" /> 12 mystery boxes</li>
                  <li><Check size={16} weight="bold" /> 4-6 curated items each</li>
                  <li><Check size={16} weight="bold" /> 4 bonus exclusive items</li>
                  <li><Check size={16} weight="bold" /> VIP early access</li>
                  <li><Check size={16} weight="bold" /> Free shipping</li>
                </ul>
                <Link to="/subscribe?plan=annual" className="retro-button-outline retro-font-display">
                  SELECT PLAN
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="retro-section">
          <div className="retro-container">
            <div className="retro-cta">
              <h2 className="retro-cta-title retro-font-display retro-bold">
                READY TO START YOUR COLLECTION?
              </h2>
              <p className="retro-cta-desc retro-font-body">
                Join thousands of retro gaming fans and get your first mystery box today.
              </p>
              <Link to="/subscribe" className="retro-button retro-font-display">
                START SUBSCRIPTION <ArrowRight size={24} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterRetro />

      {/* Page-specific styles */}
      <style>{`
        .retro-subscription-showcase {
          max-width: 400px;
          margin: 3rem auto;
          padding: 2rem;
        }

        .retro-subscription-actions {
          text-align: center;
          margin-top: 2rem;
        }

        .retro-subscription-message {
          padding: 2rem;
          background: var(--retro-surface);
          border: 2px solid var(--retro-border);
          border-radius: 8px;
          margin: 0 auto;
          max-width: 500px;
        }

        .retro-step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
        }

        .retro-step-dot {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid var(--retro-border);
          background: var(--retro-surface);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--retro-font-display);
          font-size: 1rem;
          font-weight: bold;
          color: var(--retro-text-muted);
          transition: all 0.3s ease;
        }

        .retro-step-dot--active {
          border-color: var(--retro-neon-cyan);
          background: var(--retro-neon-cyan);
          color: #1a1a1a;
          box-shadow: 0 0 20px var(--retro-neon-cyan);
        }

        .retro-step-line {
          width: 60px;
          height: 2px;
          background: var(--retro-border);
        }

        .retro-card-icon {
          margin: 0 auto 1.5rem;
          text-align: center;
        }

        .retro-price {
          font-size: 3rem;
          color: var(--retro-neon-cyan);
          text-align: center;
          margin: 1.5rem 0;
          text-shadow: 0 0 10px var(--retro-neon-cyan);
        }

        .retro-price-period {
          font-size: 1.5rem;
          color: var(--retro-text-muted);
        }

        .retro-price-save {
          text-align: center;
          color: var(--retro-neon-magenta);
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .retro-features-list {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        .retro-features-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: var(--retro-text-secondary);
        }

        .retro-features-list svg {
          color: var(--retro-neon-cyan);
          flex-shrink: 0;
        }

        .retro-cta {
          text-align: center;
          padding: 4rem 2rem;
          background: var(--retro-surface);
          border: 2px solid var(--retro-neon-cyan);
          border-radius: 8px;
          box-shadow: 0 0 30px rgba(0, 255, 249, 0.2);
        }

        .retro-cta-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--retro-neon-cyan);
          text-shadow: 0 0 10px var(--retro-neon-cyan);
        }

        .retro-cta-desc {
          font-size: 1.125rem;
          color: var(--retro-text-secondary);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (max-width: 768px) {
          .retro-grid-3 {
            grid-template-columns: 1fr;
          }

          .retro-subscription-showcase {
            padding: 1rem;
          }

          .retro-price {
            font-size: 2rem;
          }

          .retro-cta {
            padding: 2rem 1rem;
          }

          .retro-cta-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};
