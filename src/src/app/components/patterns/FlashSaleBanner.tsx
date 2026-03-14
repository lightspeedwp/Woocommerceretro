import React, { useState } from 'react';
import { Link } from 'react-router';
import { X } from '@phosphor-icons/react';
import { Countdown } from '../blocks/Countdown';
import { Button } from '../blocks/design/Buttons';

interface FlashSaleBannerProps {
  title?: string;
  discount?: string;
  endDate: Date | string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  variant?: 'purple' | 'red' | 'yellow' | 'gradient';
  hideWhenExpired?: boolean;
  className?: string;
}

/**
 * FlashSaleBanner Pattern Component
 */
export const FlashSaleBanner = ({
  title = 'Flash Sale!',
  discount = '50% OFF',
  endDate,
  description = "Limited time offer. Shop now before it's gone!",
  ctaText = 'Shop Sale',
  ctaLink = '/sale',
  variant = 'purple',
  hideWhenExpired = true,
  className = '',
}: FlashSaleBannerProps) => {
  const [isExpired, setIsExpired] = useState(false);

  if (isExpired && hideWhenExpired) {
    return null;
  }

  const variantClasses: Record<string, string> = {
    purple: 'wp-flash-sale--purple',
    red: 'wp-flash-sale--red',
    yellow: 'wp-flash-sale--yellow',
    gradient: 'wp-flash-sale--gradient',
  };

  return (
    <section
      className={`wp-flash-sale ${variantClasses[variant]} ${className}`}
      role="banner"
      aria-label="Flash sale announcement"
    >
      <div className="wp-flash-sale__pattern" />
      <div className="wp-flash-sale__content">
        <div className="wp-flash-sale__inner">
          <div className="wp-flash-sale__icon-wrapper">
            <X className="wp-flash-sale__icon" fill="currentColor" />
          </div>
          <h2 className="wp-flash-sale__title">{title}</h2>
          <div className="wp-flash-sale__discount">{discount}</div>
          {description && <p className="wp-flash-sale__description">{description}</p>}
          <div className="wp-flash-sale__countdown">
            <Countdown
              targetDate={endDate}
              label="Sale Ends In:"
              format="full"
              onExpire={() => setIsExpired(true)}
              hideWhenExpired={false}
              className="wp-flash-sale__countdown--centered"
            />
          </div>
          <div className="wp-flash-sale__cta">
            <Link to={ctaLink}>
              <Button variant="secondary" size="lg" className="wp-flash-sale__button">
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

FlashSaleBanner.displayName = 'FlashSaleBanner';