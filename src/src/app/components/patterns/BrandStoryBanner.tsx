import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { brandStory } from '../../data/homepage';

/**
 * BrandStoryBanner Pattern
 * 
 * Full-width banner section for displaying brand messaging and call-to-action.
 * 
 * **Version:** 2.0 (Refactored to use HeroSection)
 * **WordPress Mapping:** Cover Block / Group Block with Background
 * **Used In:** FrontPage, About Page
 * **Dark Mode:** Full support (via HeroSection)
 * 
 * @pattern
 */
export const BrandStoryBanner = () => {
  return (
    <HeroSection
      heading={brandStory.heading}
      subheading={brandStory.body}
      cta={{
        label: brandStory.ctaLabel,
        href: brandStory.ctaHref,
        variant: "secondary"
      }}
      backgroundImage={brandStory.image}
      backgroundAttachment="fixed"
      backgroundOverlay={0.7}
      textColor="white"
      minHeight="50vh"
      centered={false}
      className="wp-brand-story-banner"
    />
  );
}