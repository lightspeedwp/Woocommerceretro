/**
 * PowerUpSection
 *
 * "POWER UP YOUR COLLECTION" section with 3 steps and JOIN THE CLUB CTA.
 * Matches the design reference with pixel-art icons and retro styling.
 *
 * **Styling:** BEM (.pp-powerup__*) 
 * **WCAG:** Semantic headings, adequate contrast, 44px touch targets
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { SpaceInvader, PixelHeart } from './SpaceInvaders';

const steps = [
  {
    id: 'discover',
    icon: 'discover',
    title: 'DISCOVER',
    subtitle: 'NEW DROPS',
  },
  {
    id: 'unlock',
    icon: 'unlock',
    title: 'UNLOCK',
    subtitle: 'EXCLUSIVES',
  },
  {
    id: 'levelup',
    icon: 'levelup',
    title: 'LEVEL UP',
    subtitle: 'YOUR STYLE',
  },
];

/** Pixel art icon for each step */
const StepIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'discover':
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
          {/* Pixel magnifying glass / shopping bag */}
          <rect x="8" y="2" width="8" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="6" y="4" width="2" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="16" y="4" width="2" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="6" y="6" width="12" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="6" y="8" width="12" height="8" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="10" y="10" width="2" height="4" fill="var(--wp--preset--color--foreground, #1E2630)" />
          <rect x="12" y="12" width="2" height="2" fill="var(--wp--preset--color--foreground, #1E2630)" />
          <rect x="8" y="16" width="8" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
        </svg>
      );
    case 'unlock':
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
          {/* Pixel gift box */}
          <rect x="4" y="8" width="16" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="4" y="10" width="16" height="10" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="11" y="8" width="2" height="12" fill="var(--wp--preset--color--foreground, #1E2630)" />
          <rect x="4" y="12" width="16" height="2" fill="var(--wp--preset--color--foreground, #1E2630)" />
          <rect x="10" y="2" width="2" height="6" fill="var(--wp--preset--color--accent, #D4143D)" />
          <rect x="12" y="2" width="2" height="6" fill="var(--wp--preset--color--accent, #D4143D)" />
          <rect x="8" y="4" width="2" height="2" fill="var(--wp--preset--color--accent, #D4143D)" />
          <rect x="14" y="4" width="2" height="2" fill="var(--wp--preset--color--accent, #D4143D)" />
        </svg>
      );
    case 'levelup':
      return (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="none" aria-hidden="true">
          {/* Pixel trophy / arrow up */}
          <rect x="10" y="2" width="4" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="8" y="4" width="8" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="6" y="6" width="12" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="6" y="8" width="12" height="4" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="8" y="12" width="8" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="10" y="14" width="4" height="2" fill="var(--wp--preset--color--primary, #FFC533)" />
          <rect x="10" y="16" width="4" height="2" fill="var(--wp--preset--color--foreground, #1E2630)" />
          <rect x="8" y="18" width="8" height="2" fill="var(--wp--preset--color--foreground, #1E2630)" />
        </svg>
      );
    default:
      return null;
  }
};

export const PowerUpSection = () => {
  return (
    <section className="pp-powerup" aria-labelledby="powerup-heading">
      <div className="pp-powerup__card">
        <h2 id="powerup-heading" className="pp-powerup__heading retro-font-display">
          POWER UP YOUR COLLECTION
        </h2>

        <div className="pp-powerup__steps">
          {steps.map((step, i) => (
            <div key={step.id} className="pp-powerup__step">
              <div className="pp-powerup__step-icon">
                <StepIcon type={step.icon} />
              </div>
              {i < steps.length - 1 && (
                <div className="pp-powerup__step-dots" aria-hidden="true">
                  <span className="pp-powerup__dot" />
                  <span className="pp-powerup__dot" />
                  <span className="pp-powerup__dot" />
                </div>
              )}
              <div className="pp-powerup__step-label retro-font-display">
                <strong>{step.title}</strong>
                <span>{step.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pp-powerup__actions">
          <Link to="/memberships" className="pp-pixel-btn pp-pixel-btn--primary retro-font-display">
            JOIN THE CLUB <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Decorative elements */}
        <div className="pp-powerup__decor" aria-hidden="true">
          <PixelHeart size={20} className="pp-powerup__decor-heart" />
          <SpaceInvader variant="squid" size={18} color="var(--wp--preset--color--primary, #FFC533)" className="pp-powerup__decor-invader" />
        </div>
      </div>
    </section>
  );
};

PowerUpSection.displayName = 'PowerUpSection';
