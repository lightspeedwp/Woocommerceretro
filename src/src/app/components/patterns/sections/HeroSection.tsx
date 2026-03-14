import React from 'react';
import { Group } from '../../blocks/design/Group';
import { Button } from '../../blocks/design/Buttons';

interface HeroSectionProps {
  heading?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  subheading?: string;
  content?: React.ReactNode;
  cta?: { label: string; href: string; variant?: string };
  secondaryCta?: { label: string; href: string; variant?: string };
  backgroundImage?: string;
  backgroundAttachment?: 'scroll' | 'fixed';
  backgroundOverlay?: number;
  textColor?: 'white' | 'black';
  minHeight?: '50vh' | '60vh' | '80vh' | '100vh';
  centered?: boolean;
  id?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

/**
 * Hero Section Pattern Component
 */
export const HeroSection = ({
  heading,
  headingLevel = 1,
  subheading,
  content,
  cta,
  secondaryCta,
  backgroundImage,
  backgroundAttachment = 'scroll',
  backgroundOverlay = 0.5,
  textColor,
  minHeight,
  centered = true,
  id,
  className,
  ariaLabel,
  children,
}: HeroSectionProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const minHeightClass = minHeight ? `wp-hero-section--${minHeight}` : '';
  const textColorClass = textColor === 'white' ? 'wp-hero-section--white' : textColor === 'black' ? 'wp-hero-section--black' : '';
  const centeredClass = centered ? 'wp-hero-section--centered' : '';
  const attachmentClass = backgroundAttachment === 'fixed' ? 'wp-hero-section--fixed-bg' : '';
  const bgClass = backgroundImage ? 'wp-hero-section--has-background' : '';

  const groupClass = `wp-hero-section ${minHeightClass} ${centeredClass} ${textColorClass} ${attachmentClass} ${className || ''} ${bgClass}`;

  const renderBackground = () => {
    if (!backgroundImage) return null;
    return (
      <>
        <div
          className="wp-hero-section__background-image"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="wp-hero-section__overlay"
          style={{ opacity: backgroundOverlay }}
        />
      </>
    );
  };

  const renderCTA = () => {
    if (!cta && !secondaryCta) return null;
    return (
      <div className={`wp-hero-section__cta-wrapper ${centered ? 'wp-hero-section__cta-wrapper--centered' : ''}`}>
        {cta && (
          <Button
            variant={cta.variant || 'primary'}
            size="lg"
            to={cta.href?.startsWith('/') ? cta.href : undefined}
            href={cta.href && !cta.href.startsWith('/') ? cta.href : undefined}
          >
            {cta.label}
          </Button>
        )}
        {secondaryCta && (
          <Button
            variant={secondaryCta.variant || 'outline'}
            size="lg"
            to={secondaryCta.href?.startsWith('/') ? secondaryCta.href : undefined}
            href={secondaryCta.href && !secondaryCta.href.startsWith('/') ? secondaryCta.href : undefined}
          >
            {secondaryCta.label}
          </Button>
        )}
      </div>
    );
  };

  const headingWhiteClass = backgroundImage && textColor === 'white' ? 'wp-hero-section__heading--white' : '';
  const subheadingWhiteClass = backgroundImage && textColor === 'white' ? 'wp-hero-section__subheading--white' : '';

  return (
    <Group
      as="section"
      sectionStyle="hero"
      paddingPreset="hero"
      width="full"
      className={groupClass}
      ariaLabel={ariaLabel}
      id={id}
    >
      {renderBackground()}
      <div className="wp-hero-section__container">
        <div className={`wp-hero-section__content ${backgroundImage ? 'wp-hero-section__content--relative' : ''} ${minHeight ? 'wp-hero-section__content--centered' : ''}`}>
          {heading && (
            <HeadingTag className={`wp-hero-section__heading ${headingWhiteClass}`}>
              {heading}
            </HeadingTag>
          )}
          {subheading && (
            <p className={`wp-hero-section__subheading ${centered ? 'wp-hero-section__subheading--centered' : ''} ${subheadingWhiteClass}`}>
              {subheading}
            </p>
          )}
          {content && <div className="wp-hero-section__content-block">{content}</div>}
          {children && <div className="wp-hero-section__content-block">{children}</div>}
          {renderCTA()}
        </div>
      </div>
    </Group>
  );
};

HeroSection.displayName = 'HeroSection';
