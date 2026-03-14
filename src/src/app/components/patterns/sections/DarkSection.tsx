/**
 * Dark Section Pattern
 *
 * High-contrast dark background section for CTAs, newsletter signups,
 * and featured content that needs to stand out.
 *
 * **Category:** Patterns > Sections
 * **WordPress Equivalent:** Group Block with dark style
 * **Version:** 3.0 (FSE Aligned)
 */

import React from 'react';
import { Group } from '../../blocks/design/Group';
import { Button } from '../../blocks/design/Buttons';

interface DarkSectionProps {
  heading?: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  subheading?: string;
  content?: React.ReactNode;
  cta?: { label: string; href: string; variant?: 'default' | 'secondary' | 'outline' | 'ghost' };
  id?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

/**
 * Dark Section Pattern Component
 */
export const DarkSection = ({
  heading,
  headingLevel = 2,
  subheading,
  content,
  cta,
  id,
  className = '',
  ariaLabel,
  children,
}: DarkSectionProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <Group
      as="section"
      sectionStyle="dark"
      paddingPreset="section"
      width="constrained"
      className={className}
      ariaLabel={ariaLabel}
      id={id}
    >
      {heading && <HeadingTag className="wp-section-dark__heading">{heading}</HeadingTag>}
      {subheading && <p className="wp-section-dark__subheading">{subheading}</p>}
      {content && <div className="wp-section-dark__content">{content}</div>}
      {children && <div className="wp-section-dark__content">{children}</div>}
      {cta && (
        <div className="wp-section-dark__cta">
          <Button
            variant={cta.variant || 'secondary'}
            size="lg"
            to={cta.href?.startsWith('/') ? cta.href : undefined}
            href={cta.href && !cta.href.startsWith('/') ? cta.href : undefined}
          >
            {cta.label}
          </Button>
        </div>
      )}
    </Group>
  );
};

DarkSection.displayName = 'DarkSection';
