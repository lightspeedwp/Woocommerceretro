/**
 * SpaceInvaders
 *
 * Decorative pixel-art Space Invader creatures for background elements.
 * Pure SVG, no interactivity. Used as scattered decorations.
 *
 * **Styling:** BEM (.space-invader__*) 
 * **WCAG:** aria-hidden, decorative only
 */

import React from 'react';

interface InvaderProps {
  size?: number;
  sizePreset?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
  variant?: 'crab' | 'squid' | 'octopus';
}

/** S/M/L pixel sizes — smallest current to 3x */
const SIZE_PRESETS = { sm: 16, md: 32, lg: 48 };

/** Classic Space Invader "Crab" shape */
const CrabInvader = ({ size, sizePreset, color, className = '' }: InvaderProps) => {
  const px = size ?? SIZE_PRESETS[sizePreset ?? 'sm'];
  return (
    <svg
      className={`space-invader ${className}`}
      width={px}
      height={px}
      viewBox="0 0 11 8"
      fill={color || 'currentColor'}
      aria-hidden="true"
    >
      <rect x="2" y="0" width="1" height="1" />
      <rect x="8" y="0" width="1" height="1" />
      <rect x="3" y="1" width="1" height="1" />
      <rect x="7" y="1" width="1" height="1" />
      <rect x="2" y="2" width="7" height="1" />
      <rect x="1" y="3" width="2" height="1" />
      <rect x="4" y="3" width="3" height="1" />
      <rect x="8" y="3" width="2" height="1" />
      <rect x="0" y="4" width="11" height="1" />
      <rect x="0" y="5" width="1" height="1" />
      <rect x="2" y="5" width="7" height="1" />
      <rect x="10" y="5" width="1" height="1" />
      <rect x="0" y="6" width="1" height="1" />
      <rect x="2" y="6" width="1" height="1" />
      <rect x="8" y="6" width="1" height="1" />
      <rect x="10" y="6" width="1" height="1" />
      <rect x="3" y="7" width="2" height="1" />
      <rect x="6" y="7" width="2" height="1" />
    </svg>
  );
};

/** Classic Space Invader "Squid" shape */
const SquidInvader = ({ size, sizePreset, color, className = '' }: InvaderProps) => {
  const px = size ?? SIZE_PRESETS[sizePreset ?? 'sm'];
  return (
    <svg
      className={`space-invader ${className}`}
      width={px}
      height={px}
      viewBox="0 0 8 8"
      fill={color || 'currentColor'}
      aria-hidden="true"
    >
      <rect x="3" y="0" width="2" height="1" />
      <rect x="2" y="1" width="4" height="1" />
      <rect x="1" y="2" width="6" height="1" />
      <rect x="0" y="3" width="2" height="1" />
      <rect x="3" y="3" width="2" height="1" />
      <rect x="6" y="3" width="2" height="1" />
      <rect x="0" y="4" width="8" height="1" />
      <rect x="1" y="5" width="1" height="1" />
      <rect x="3" y="5" width="2" height="1" />
      <rect x="6" y="5" width="1" height="1" />
      <rect x="0" y="6" width="1" height="1" />
      <rect x="7" y="6" width="1" height="1" />
      <rect x="1" y="7" width="1" height="1" />
      <rect x="6" y="7" width="1" height="1" />
    </svg>
  );
};

/** Classic Space Invader "Octopus" shape */
const OctopusInvader = ({ size, sizePreset, color, className = '' }: InvaderProps) => {
  const px = size ?? SIZE_PRESETS[sizePreset ?? 'sm'];
  return (
    <svg
      className={`space-invader ${className}`}
      width={px}
      height={px}
      viewBox="0 0 12 8"
      fill={color || 'currentColor'}
      aria-hidden="true"
    >
      <rect x="3" y="0" width="2" height="1" />
      <rect x="7" y="0" width="2" height="1" />
      <rect x="2" y="1" width="8" height="1" />
      <rect x="1" y="2" width="10" height="1" />
      <rect x="0" y="3" width="3" height="1" />
      <rect x="4" y="3" width="4" height="1" />
      <rect x="9" y="3" width="3" height="1" />
      <rect x="0" y="4" width="12" height="1" />
      <rect x="1" y="5" width="1" height="1" />
      <rect x="4" y="5" width="1" height="1" />
      <rect x="7" y="5" width="1" height="1" />
      <rect x="10" y="5" width="1" height="1" />
      <rect x="0" y="6" width="2" height="1" />
      <rect x="10" y="6" width="2" height="1" />
      <rect x="2" y="7" width="2" height="1" />
      <rect x="8" y="7" width="2" height="1" />
    </svg>
  );
};

export const SpaceInvader = ({ variant = 'crab', ...props }: InvaderProps) => {
  switch (variant) {
    case 'squid': return <SquidInvader {...props} />;
    case 'octopus': return <OctopusInvader {...props} />;
    default: return <CrabInvader {...props} />;
  }
};

/** Pixel heart decoration */
export const PixelHeart = ({ size = 16, color, className = '' }: Omit<InvaderProps, 'variant'>) => (
  <svg
    className={`space-invader ${className}`}
    width={size}
    height={size}
    viewBox="0 0 7 6"
    fill={color || 'var(--wp--preset--color--accent, #D4143D)'}
    aria-hidden="true"
  >
    <rect x="1" y="0" width="2" height="1" />
    <rect x="4" y="0" width="2" height="1" />
    <rect x="0" y="1" width="7" height="1" />
    <rect x="0" y="2" width="7" height="1" />
    <rect x="1" y="3" width="5" height="1" />
    <rect x="2" y="4" width="3" height="1" />
    <rect x="3" y="5" width="1" height="1" />
  </svg>
);

/** Pixel cursor/arrow decoration */
export const PixelCursor = ({ size = 16, color, className = '' }: Omit<InvaderProps, 'variant'>) => (
  <svg
    className={`space-invader ${className}`}
    width={size}
    height={size}
    viewBox="0 0 6 8"
    fill={color || 'var(--wp--preset--color--primary, #FFC533)'}
    aria-hidden="true"
  >
    <rect x="0" y="0" width="1" height="8" />
    <rect x="1" y="1" width="1" height="6" />
    <rect x="2" y="2" width="1" height="4" />
    <rect x="3" y="3" width="1" height="3" />
    <rect x="4" y="4" width="1" height="2" />
    <rect x="5" y="5" width="1" height="1" />
  </svg>
);

SpaceInvader.displayName = 'SpaceInvader';
PixelHeart.displayName = 'PixelHeart';
PixelCursor.displayName = 'PixelCursor';