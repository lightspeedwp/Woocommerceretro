import React from 'react';
import { Check } from '@phosphor-icons/react';
import { Button } from '../blocks/design/Buttons';
import { Typography } from '../common/Typography';

interface ValuePropositionFeature {
  id: string;
  text: string;
  icon?: React.ComponentType<{ size?: number; 'aria-hidden'?: string }>;
}

interface ValuePropositionSectionProps {
  heading: string;
  subheading?: string;
  description: string;
  features: ValuePropositionFeature[];
  mediaType?: 'image' | 'video';
  mediaSrc?: string;
  mediaAlt?: string;
  mediaPosition?: 'left' | 'right';
  cta?: { label: string; href?: string; onClick?: () => void; variant?: 'primary' | 'cta' | 'outline' };
  className?: string;
}

/**
 * ValuePropositionSection Pattern Component
 */
export const ValuePropositionSection = ({
  heading,
  subheading,
  description,
  features,
  mediaType = 'image',
  mediaSrc,
  mediaAlt,
  mediaPosition = 'right',
  cta,
  className = '',
}: ValuePropositionSectionProps) => {
  const contentColumn = (
    <div className="wp-value-prop__content">
      {subheading && (
        <div className="wp-value-prop__subheading"><small><strong>{subheading}</strong></small></div>
      )}
      <Typography variant="h2" className="wp-value-prop__heading funky-text-neon">{heading}</Typography>
      <Typography variant="p" className="wp-value-prop__description">{description}</Typography>
      <ul className="wp-value-prop__features">
        {features.map((feature) => {
          const FeatureIcon = feature.icon || Check;
          return (
            <li key={feature.id} className="wp-value-prop__feature-item">
              <div className="wp-value-prop__feature-icon">
                <FeatureIcon size={16} aria-hidden="true" />
              </div>
              <span className="wp-value-prop__feature-text">{feature.text}</span>
            </li>
          );
        })}
      </ul>
      {cta && (
        <div>
          <Button variant={cta.variant || 'cta'} size="lg" to={cta.href} onClick={cta.onClick}>
            {cta.label}
          </Button>
        </div>
      )}
    </div>
  );

  const mediaColumn = mediaSrc ? (
    <div className="wp-value-prop__media">
      {mediaType === 'video' ? (
        <video src={mediaSrc} controls className="wp-value-prop__video" aria-label={mediaAlt || 'Product video'}>
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={mediaSrc} alt={mediaAlt || 'Product illustration'} className="wp-value-prop__image" loading="lazy" />
      )}
    </div>
  ) : null;

  return (
    <div className={`wp-value-prop funky-promise-grid ${className}`}>
      {mediaPosition === 'left' ? (
        <>{mediaColumn}{contentColumn}</>
      ) : (
        <>{contentColumn}{mediaColumn}</>
      )}
    </div>
  );
}