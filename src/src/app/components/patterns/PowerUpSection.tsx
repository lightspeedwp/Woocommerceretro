/**
 * PowerUpSection
 *
 * "POWER UP YOUR COLLECTION" section with 3 steps and JOIN THE CLUB CTA.
 * Matches the design reference with pixel-art icons and retro styling.
 *
 * **Styling:** BEM (.pp-powerup__*)
 * **WCAG:** Semantic headings, adequate contrast, 44px touch targets
 * **Icons:** Inline pixel-art SVGs inspired by imported retro icon designs
 */

import React from 'react';
import { Link } from 'react-router';
import { PixelHeart } from './SpaceInvaders';

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

/**
 * Pixel art icon for each step
 * Inspired by the imported retro SVG designs:
 * - retro-discover-new-drops.svg (running explorer character)
 * - retro-unlock-exclusives-icon.svg (gift box with bow)
 * - retro-level-up.svg (golden upward arrow)
 *
 * Uses CSS custom properties for dark mode adaptability:
 * --pp-icon-outline: dark outlines (navy in light, softened in dark)
 * --pp-icon-fill-warm: warm brown tones
 * --pp-icon-fill-tan: light tan/skin tones
 * --pp-icon-fill-gold: gold accents
 * --pp-icon-fill-teal: teal highlights
 * --pp-icon-fill-cream: cream/white highlights
 */
const StepIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'discover':
      return (
        /* Running pixel explorer — inspired by retro-discover-new-drops.svg */
        <svg viewBox="0 0 32 32" width="64" height="64" fill="none" aria-hidden="true" className="pp-powerup__step-svg">
          {/* Speed lines */}
          <rect x="1" y="11" width="4" height="2" className="pp-icon__teal" />
          <rect x="0" y="15" width="3" height="2" className="pp-icon__teal" />
          <rect x="2" y="19" width="3" height="2" className="pp-icon__teal" />

          {/* Head outline */}
          <rect x="18" y="3" width="8" height="2" className="pp-icon__outline" />
          <rect x="16" y="5" width="2" height="2" className="pp-icon__outline" />
          <rect x="26" y="5" width="2" height="4" className="pp-icon__outline" />
          {/* Head fill */}
          <rect x="18" y="5" width="8" height="2" className="pp-icon__tan" />
          <rect x="18" y="7" width="6" height="2" className="pp-icon__tan" />
          {/* Eye */}
          <rect x="22" y="5" width="2" height="2" className="pp-icon__outline" />
          <rect x="24" y="5" width="2" height="2" className="pp-icon__cream" />
          {/* Visor */}
          <rect x="20" y="3" width="6" height="2" className="pp-icon__teal" />

          {/* Body */}
          <rect x="14" y="9" width="12" height="2" className="pp-icon__warm" />
          <rect x="12" y="11" width="14" height="2" className="pp-icon__warm" />
          <rect x="22" y="11" width="4" height="2" className="pp-icon__outline" />
          {/* Backpack */}
          <rect x="24" y="7" width="2" height="4" className="pp-icon__brown" />

          {/* Arm reaching forward */}
          <rect x="24" y="9" width="4" height="2" className="pp-icon__tan" />
          <rect x="26" y="7" width="2" height="2" className="pp-icon__tan" />

          {/* Legs */}
          <rect x="10" y="13" width="4" height="2" className="pp-icon__warm" />
          <rect x="18" y="13" width="4" height="2" className="pp-icon__warm" />
          <rect x="8" y="15" width="4" height="2" className="pp-icon__outline" />
          <rect x="20" y="15" width="4" height="2" className="pp-icon__outline" />

          {/* Shoes */}
          <rect x="6" y="17" width="6" height="2" className="pp-icon__brown" />
          <rect x="22" y="17" width="4" height="2" className="pp-icon__brown" />
          <rect x="6" y="19" width="2" height="2" className="pp-icon__outline" />
          <rect x="24" y="17" width="2" height="2" className="pp-icon__outline" />

          {/* Ground shadow */}
          <rect x="6" y="21" width="20" height="1" className="pp-icon__outline" opacity="0.1" />
        </svg>
      );
    case 'unlock':
      return (
        /* Gift box with bow — inspired by retro-unlock-exclusives-icon.svg */
        <svg viewBox="0 0 32 32" width="64" height="64" fill="none" aria-hidden="true" className="pp-powerup__step-svg">
          {/* Bow loops */}
          <rect x="8" y="1" width="2" height="2" className="pp-icon__outline" />
          <rect x="22" y="1" width="2" height="2" className="pp-icon__outline" />
          <rect x="10" y="1" width="4" height="2" className="pp-icon__gold" />
          <rect x="18" y="1" width="4" height="2" className="pp-icon__gold" />
          <rect x="8" y="3" width="2" height="2" className="pp-icon__outline" />
          <rect x="22" y="3" width="2" height="2" className="pp-icon__outline" />
          <rect x="10" y="3" width="4" height="2" className="pp-icon__gold" />
          <rect x="18" y="3" width="4" height="2" className="pp-icon__gold" />
          {/* Bow center knot */}
          <rect x="14" y="3" width="4" height="4" className="pp-icon__gold-dark" />
          <rect x="12" y="5" width="2" height="2" className="pp-icon__outline" />
          <rect x="18" y="5" width="2" height="2" className="pp-icon__outline" />

          {/* Lid */}
          <rect x="4" y="7" width="24" height="4" className="pp-icon__gold" />
          <rect x="4" y="7" width="24" height="2" className="pp-icon__gold-dark" />
          <rect x="2" y="7" width="2" height="4" className="pp-icon__outline" />
          <rect x="28" y="7" width="2" height="4" className="pp-icon__outline" />
          <rect x="4" y="7" width="24" height="1" className="pp-icon__outline" />

          {/* Box body */}
          <rect x="4" y="11" width="24" height="16" className="pp-icon__gold" />
          <rect x="2" y="11" width="2" height="16" className="pp-icon__outline" />
          <rect x="28" y="11" width="2" height="16" className="pp-icon__outline" />
          <rect x="4" y="27" width="24" height="2" className="pp-icon__outline" />

          {/* Ribbon vertical */}
          <rect x="14" y="7" width="4" height="22" className="pp-icon__gold-dark" />

          {/* Sparkle on lid */}
          <rect x="8" y="9" width="2" height="1" className="pp-icon__cream" opacity="0.6" />
          <rect x="22" y="9" width="2" height="1" className="pp-icon__cream" opacity="0.6" />

          {/* Box shadow details */}
          <rect x="4" y="25" width="10" height="2" className="pp-icon__gold-dark" opacity="0.4" />
          <rect x="18" y="25" width="10" height="2" className="pp-icon__gold-dark" opacity="0.4" />
        </svg>
      );
    case 'levelup':
      return (
        /* Upward pixel arrow — inspired by retro-level-up.svg */
        <svg viewBox="0 0 32 32" width="64" height="64" fill="none" aria-hidden="true" className="pp-powerup__step-svg">
          {/* Arrow head — large golden triangle pointing up */}
          <rect x="14" y="2" width="4" height="2" className="pp-icon__outline" />
          <rect x="12" y="4" width="8" height="2" className="pp-icon__gold" />
          <rect x="10" y="6" width="12" height="2" className="pp-icon__gold" />
          <rect x="8" y="8" width="16" height="2" className="pp-icon__gold" />
          <rect x="6" y="10" width="20" height="2" className="pp-icon__gold" />

          {/* Arrow head outlines */}
          <rect x="12" y="4" width="2" height="2" className="pp-icon__outline" />
          <rect x="10" y="6" width="2" height="2" className="pp-icon__outline" />
          <rect x="8" y="8" width="2" height="2" className="pp-icon__outline" />
          <rect x="6" y="10" width="2" height="2" className="pp-icon__outline" />
          <rect x="18" y="4" width="2" height="2" className="pp-icon__outline" />
          <rect x="20" y="6" width="2" height="2" className="pp-icon__outline" />
          <rect x="22" y="8" width="2" height="2" className="pp-icon__outline" />
          <rect x="24" y="10" width="2" height="2" className="pp-icon__outline" />
          {/* Arrow tip */}
          <rect x="14" y="2" width="4" height="2" className="pp-icon__gold-dark" />

          {/* Horizontal bar under arrow head */}
          <rect x="6" y="12" width="20" height="2" className="pp-icon__outline" />

          {/* Arrow shaft */}
          <rect x="12" y="14" width="8" height="2" className="pp-icon__gold" />
          <rect x="12" y="16" width="8" height="2" className="pp-icon__gold" />
          <rect x="12" y="18" width="8" height="2" className="pp-icon__gold" />
          <rect x="12" y="20" width="8" height="2" className="pp-icon__gold" />
          <rect x="12" y="22" width="8" height="2" className="pp-icon__gold" />
          <rect x="12" y="24" width="8" height="2" className="pp-icon__gold" />

          {/* Shaft outlines */}
          <rect x="10" y="14" width="2" height="12" className="pp-icon__outline" />
          <rect x="20" y="14" width="2" height="12" className="pp-icon__outline" />
          <rect x="12" y="26" width="8" height="2" className="pp-icon__outline" />

          {/* Highlight on shaft */}
          <rect x="14" y="14" width="2" height="10" className="pp-icon__cream" opacity="0.3" />
        </svg>
      );
    default:
      return null;
  }
};

/** Dotted arrow connector between steps */
const StepArrow = () => (
  <div className="pp-powerup__arrow" aria-hidden="true">
    <svg viewBox="0 0 40 12" width="40" height="12" fill="none" aria-hidden="true">
      <rect x="0" y="5" width="3" height="2" fill="currentColor" opacity="0.35" />
      <rect x="6" y="5" width="3" height="2" fill="currentColor" opacity="0.35" />
      <rect x="12" y="5" width="3" height="2" fill="currentColor" opacity="0.35" />
      <rect x="18" y="5" width="3" height="2" fill="currentColor" opacity="0.35" />
      <rect x="24" y="5" width="3" height="2" fill="currentColor" opacity="0.35" />
      {/* Arrow head */}
      <rect x="30" y="5" width="3" height="2" fill="currentColor" opacity="0.35" />
      <rect x="33" y="3" width="2" height="2" fill="currentColor" opacity="0.35" />
      <rect x="33" y="7" width="2" height="2" fill="currentColor" opacity="0.35" />
      <rect x="35" y="5" width="2" height="2" fill="currentColor" opacity="0.35" />
    </svg>
  </div>
);

/** Small pixel sparkle decoration */
const PixelSparkle = () => (
  <svg viewBox="0 0 14 14" width="14" height="14" fill="none" aria-hidden="true">
    <rect x="6" y="0" width="2" height="2" fill="currentColor" opacity="0.2" />
    <rect x="6" y="12" width="2" height="2" fill="currentColor" opacity="0.2" />
    <rect x="0" y="6" width="2" height="2" fill="currentColor" opacity="0.2" />
    <rect x="12" y="6" width="2" height="2" fill="currentColor" opacity="0.2" />
    <rect x="4" y="4" width="2" height="2" fill="currentColor" opacity="0.15" />
    <rect x="8" y="4" width="2" height="2" fill="currentColor" opacity="0.15" />
    <rect x="4" y="8" width="2" height="2" fill="currentColor" opacity="0.15" />
    <rect x="8" y="8" width="2" height="2" fill="currentColor" opacity="0.15" />
  </svg>
);

/** Pixel folder icon */
const PixelFolder = () => (
  <svg viewBox="0 0 16 14" width="20" height="17" fill="none" aria-hidden="true">
    <rect x="0" y="2" width="6" height="2" fill="var(--pp-powerup-signal, #D8B548)" />
    <rect x="6" y="4" width="2" height="2" fill="var(--pp-powerup-signal, #D8B548)" />
    <rect x="0" y="4" width="16" height="10" fill="var(--pp-powerup-signal, #D8B548)" />
    <rect x="0" y="4" width="16" height="2" fill="var(--pp-powerup-signal-dark, #C79A24)" />
    <rect x="0" y="2" width="1" height="12" fill="currentColor" opacity="0.15" />
    <rect x="15" y="4" width="1" height="10" fill="currentColor" opacity="0.15" />
    <rect x="0" y="13" width="16" height="1" fill="currentColor" opacity="0.15" />
  </svg>
);

export const PowerUpSection = () => {
  return (
    <section className="pp-powerup" aria-labelledby="powerup-heading">
      <div className="pp-powerup__card">
        <h2 id="powerup-heading" className="pp-powerup__heading retro-font-display">
          POWER UP YOUR COLLECTION
        </h2>

        {/* Dotted separator */}
        <div className="pp-powerup__separator" aria-hidden="true" />

        <div className="pp-powerup__steps">
          {steps.map((step, i) => (
            <div key={step.id} className="pp-powerup__step-group">
              <div className="pp-powerup__step">
                <div className="pp-powerup__step-icon">
                  <StepIcon type={step.icon} />
                </div>
                <div className="pp-powerup__step-label retro-font-display">
                  <strong>{step.title}</strong>
                  <span>{step.subtitle}</span>
                </div>
              </div>
              {i < steps.length - 1 && <StepArrow />}
            </div>
          ))}
        </div>

        <div className="pp-powerup__actions">
          <Link to="/memberships" className="pp-powerup__cta-btn retro-font-display">
            <span className="pp-powerup__cta-inner">
              JOIN THE CLUB
              <svg viewBox="0 0 16 12" width="14" height="10" fill="none" aria-hidden="true" className="pp-powerup__cta-arrow">
                <rect x="0" y="5" width="12" height="2" fill="currentColor" />
                <rect x="10" y="3" width="2" height="2" fill="currentColor" />
                <rect x="10" y="7" width="2" height="2" fill="currentColor" />
                <rect x="12" y="5" width="2" height="2" fill="currentColor" />
              </svg>
            </span>
          </Link>
          <div className="pp-powerup__decor-icons" aria-hidden="true">
            <PixelFolder />
            <PixelHeart size={20} className="pp-powerup__decor-heart" />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="pp-powerup__decor" aria-hidden="true">
          <div className="pp-powerup__decor-sparkle">
            <PixelSparkle />
          </div>
        </div>
      </div>
    </section>
  );
};

PowerUpSection.displayName = 'PowerUpSection';