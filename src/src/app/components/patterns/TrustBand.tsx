import React from 'react';
import { trustFeatures } from '../../data/trustFeatures';

interface TrustBandProps {
  features?: any[];
  layout?: 'horizontal' | 'grid';
  compact?: boolean;
  className?: string;
}

/**
 * TrustBand Pattern Component
 */
export const TrustBand = ({
  features = trustFeatures,
  layout = 'horizontal',
  compact = false,
  className = '',
}: TrustBandProps) => {
  const containerClass = `wp-trust-band wp-trust-band--${layout} ${compact ? 'wp-trust-band--gap-compact' : 'wp-trust-band--gap-normal'}`;
  const itemGapClass = compact ? 'wp-trust-band__item--gap-compact' : 'wp-trust-band__item--gap-normal';
  const titleClass = compact ? 'wp-trust-band__title--compact' : 'wp-trust-band__title--normal';
  const descClass = compact ? 'wp-trust-band__description--compact' : 'wp-trust-band__description--normal';
  const iconSize = compact ? 20 : 24;

  return (
    <div className={`${containerClass} ${className}`}>
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.id} className={`wp-trust-band__item ${itemGapClass}`}>
            <Icon size={iconSize} className="wp-trust-band__icon funky-text-neon" aria-hidden="true" />
            <div className={`wp-trust-band__title ${titleClass}`}><strong>{feature.title}</strong></div>
            <div className={`wp-trust-band__description ${descClass}`}>{feature.description}</div>
          </div>
        );
      })}
    </div>
  );
}