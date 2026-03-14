import React from 'react';
import { useNavigate } from 'react-router';
import { Typography } from '../common/Typography';
import { Button } from '../blocks/design/Buttons';
import { Badge } from '../blocks/display/Badge';
import { HeroSection } from './sections/HeroSection';
import { ScrollDownArrow } from '../common/ScrollDownArrow';
import { cn } from '../../utils/cn';

interface HeroAction {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  badge?: { label: string; icon?: React.ComponentType<{ size?: number }> };
  imageSrc?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  overlayColor?: string;
  align?: 'center' | 'left';
  height?: 'full' | 'large' | 'medium' | 'small';
  nextSectionId?: string;
  className?: string;
}

/**
 * Hero Block (Pattern)
 */
export const Hero = ({
  title,
  subtitle,
  badge,
  imageSrc,
  primaryAction,
  secondaryAction,
  overlayColor,
  align = 'center',
  height = 'large',
  nextSectionId,
  className = '',
}: HeroProps) => {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    if (primaryAction) {
      if (primaryAction.onClick) {
        primaryAction.onClick();
      } else if (primaryAction.href) {
        navigate(primaryAction.href);
      }
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryAction) {
      if (secondaryAction.onClick) {
        secondaryAction.onClick();
      } else if (secondaryAction.href) {
        navigate(secondaryAction.href);
      }
    }
  };

  const BadgeIcon = badge?.icon;

  return (
    <HeroSection
      className={cn('wp-hero', `wp-hero--${height}`, className)}
      backgroundImage={imageSrc}
      overlayColor={overlayColor}
    >
      <div className={cn('wp-hero__content', `wp-hero__content--${align}`)}>
        {badge && (
          <Badge className="wp-hero__badge">
            {BadgeIcon && <BadgeIcon size={14} />}
            <span>{badge.label}</span>
          </Badge>
        )}
        <Typography variant="h1" className="wp-hero__title">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body" className="wp-hero__subtitle">
            {subtitle}
          </Typography>
        )}
        {(primaryAction || secondaryAction) && (
          <div className="wp-hero__actions">
            {primaryAction && (
              <Button
                variant="primary"
                size="lg"
                onClick={handlePrimaryClick}
                className="wp-hero__cta-primary"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                className="wp-hero__cta-secondary"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
        {nextSectionId && (
          <ScrollDownArrow targetId={nextSectionId} className="wp-hero__scroll-indicator" />
        )}
      </div>
    </HeroSection>
  );
}