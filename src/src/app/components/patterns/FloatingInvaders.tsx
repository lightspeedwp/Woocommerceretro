/**
 * FloatingInvaders — Site-wide decorative Space Invader background
 *
 * Renders scattered pixel-art invaders across the viewport in three
 * sizes (S / M / L) with gentle floating animation. Purely decorative,
 * fully hidden from assistive tech.
 *
 * **Styling:** `/src/styles/sections/floating-invaders.css`
 * **WCAG:** aria-hidden on container, decorative only
 * **Reduced Motion:** Animation disabled via prefers-reduced-motion
 *
 * @pattern
 */

import React, { useMemo } from 'react';
import { SpaceInvader } from './SpaceInvaders';

type InvaderSize = 'sm' | 'md' | 'lg';
type InvaderVariant = 'crab' | 'squid' | 'octopus';

interface PlacedInvader {
  id: string;
  variant: InvaderVariant;
  size: InvaderSize;
  top: string;
  left: string;
  animationDelay: string;
  opacity: number;
}

/** Pixel sizes for each tier — smallest current up to 3x */
const SIZE_MAP: Record<InvaderSize, number> = {
  sm: 16,
  md: 32,
  lg: 48,
};

const VARIANTS: InvaderVariant[] = ['crab', 'squid', 'octopus'];

/**
 * Seeded pseudo-random number generator for deterministic placement.
 * Ensures invaders don't shift on re-renders.
 */
const seededRandom = (seed: number): number => {
  const x = Math.sin(seed * 9301 + 49297) * 49979;
  return x - Math.floor(x);
};

/**
 * Generates a deterministic set of invader placements.
 * Distributes invaders across the full viewport height in bands
 * so they don't cluster.
 */
const generatePlacements = (count: number): PlacedInvader[] => {
  const invaders: PlacedInvader[] = [];
  const bandHeight = 100 / count;

  for (let i = 0; i < count; i++) {
    const r1 = seededRandom(i * 3 + 1);
    const r2 = seededRandom(i * 3 + 2);
    const r3 = seededRandom(i * 3 + 3);
    const r4 = seededRandom(i * 3 + 4);
    const r5 = seededRandom(i * 3 + 5);

    const variant = VARIANTS[Math.floor(r1 * VARIANTS.length)];

    // Distribute sizes: ~50% small, ~30% medium, ~20% large
    let size: InvaderSize;
    if (r2 < 0.5) size = 'sm';
    else if (r2 < 0.8) size = 'md';
    else size = 'lg';

    // Place within band, with random offset
    const top = `${bandHeight * i + r3 * bandHeight * 0.8}%`;

    // Alternate sides with some randomness
    const isLeftSide = i % 2 === 0;
    const left = isLeftSide
      ? `${1 + r4 * 6}%`
      : `${93 - r4 * 6}%`;

    // Larger invaders get slightly lower opacity to not overwhelm
    const baseOpacity = size === 'lg' ? 0.08 : size === 'md' ? 0.12 : 0.15;
    const opacity = baseOpacity + r5 * 0.04;

    const animationDelay = `${-(r4 * 8).toFixed(1)}s`;

    invaders.push({
      id: `inv-${i}`,
      variant,
      size,
      top,
      left,
      animationDelay,
      opacity,
    });
  }

  return invaders;
};

const INVADER_COUNT = 14;

export const FloatingInvaders = () => {
  const placements = useMemo(() => generatePlacements(INVADER_COUNT), []);

  return (
    <div className="floating-invaders" aria-hidden="true">
      {placements.map((inv) => (
        <div
          key={inv.id}
          className={`floating-invaders__item floating-invaders__item--${inv.size}`}
          style={{
            top: inv.top,
            left: inv.left,
            opacity: inv.opacity,
            animationDelay: inv.animationDelay,
          }}
        >
          <SpaceInvader
            variant={inv.variant}
            size={SIZE_MAP[inv.size]}
            color="var(--color-paper, var(--wp--preset--color--background, #F2EEE6))"
          />
        </div>
      ))}
    </div>
  );
};

FloatingInvaders.displayName = 'FloatingInvaders';