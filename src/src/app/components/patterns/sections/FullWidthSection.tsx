/**
 * Full Width Section Pattern
 *
 * Edge-to-edge section that spans the full viewport width.
 * Perfect for media-rich content, image galleries, and immersive experiences.
 *
 * **Category:** Patterns > Sections
 * **WordPress Equivalent:** Group Block with full-width style
 * **Version:** 3.0 (FSE Aligned)
 */

import React from 'react';
import { Group } from '../../blocks/design/Group';

interface FullWidthSectionProps {
  content?: React.ReactNode;
  backgroundImage?: string;
  overlay?: number;
  backgroundSize?: 'cover' | 'contain' | 'auto';
  backgroundPosition?: 'center' | 'top' | 'bottom' | 'left' | 'right';
  minHeight?: string;
  padding?: boolean;
  id?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

export const FullWidthSection = ({
  content,
  backgroundImage,
  overlay = 0.5,
  backgroundSize = 'cover',
  backgroundPosition = 'center',
  minHeight,
  padding = false,
  id,
  className = '',
  ariaLabel,
  children,
}: FullWidthSectionProps) => {
  const paddingClass = padding ? 'wp-full-width-section--padded' : '';
  const bgClass = backgroundImage ? 'wp-full-width-section--relative wp-full-width-section--overflow-hidden' : '';
  const combinedClass = `wp-full-width-section ${paddingClass} ${className} ${bgClass}`;
  const minHeightStyle = minHeight ? { minHeight } : {};

  return (
    <Group
      as="section"
      sectionStyle="full-width"
      paddingPreset="none"
      width="full"
      className={combinedClass}
      ariaLabel={ariaLabel}
      id={id}
      style={minHeightStyle}
    >
      {backgroundImage && (
        <>
          <div
            className="wp-full-width-section__background"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize,
              backgroundPosition,
            }}
          />
          {overlay > 0 && (
            <div
              className="wp-full-width-section__overlay"
              style={{ opacity: overlay }}
            />
          )}
        </>
      )}
      <div className={backgroundImage ? 'wp-full-width-section__content' : ''}>
        {content}
        {children}
      </div>
    </Group>
  );
};

FullWidthSection.displayName = 'FullWidthSection';
