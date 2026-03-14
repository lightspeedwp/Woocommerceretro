/**
 * ContentSection.tsx - Pattern
 *
 * Standard white/dark background section for general content areas.
 */

import React from 'react';
import { Group } from '../../blocks/design/Group';
import { Button } from '../../blocks/design/Buttons';

interface ContentSectionProps {
  heading?: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  subheading?: string;
  content?: React.ReactNode;
  cta?: { label: string; href: string; variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'cta' };
  id?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

/**
 * ContentSection Pattern Component
 */
export const ContentSection = ({
  heading,
  headingLevel = 2,
  subheading,
  content,
  cta,
  id,
  className,
  ariaLabel,
  children,
}: ContentSectionProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <Group
      as="section"
      sectionStyle="default"
      paddingPreset="section"
      width="full"
      className={className}
      ariaLabel={ariaLabel}
      id={id}
    >
      <div className="wp-section-content__wrapper">
        {heading && (
          <HeadingTag className="wp-section-content__heading funky-title-neon">
            {heading}
          </HeadingTag>
        )}
        {subheading && <p className="wp-section-content__subheading">{subheading}</p>}
        {content && <div className="wp-section-content__content alignwide">{content}</div>}
        {children && <div className="wp-section-content__content">{children}</div>}
        {cta && (
          <div className="wp-section-content__cta">
            <Button
              variant={cta.variant || 'cta'}
              size="lg"
              to={cta.href?.startsWith('/') ? cta.href : undefined}
              href={cta.href && !cta.href.startsWith('/') ? cta.href : undefined}
              className="wp-glow funky-btn"
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </Group>
  );
};

ContentSection.displayName = 'ContentSection';
