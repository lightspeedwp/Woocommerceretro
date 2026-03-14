/**
 * Compact Section Pattern
 *
 * White/dark background section with reduced padding for dense information bands,
 * supplementary content, and space-efficient layouts.
 *
 * **Category:** Patterns > Sections
 * **WordPress Equivalent:** Group Block with compact style
 * **Version:** 3.0 (FSE Aligned)
 */

import React from 'react';
import { Group } from '../../blocks/design/Group';
import { Button } from '../../blocks/design/Buttons';

interface CompactSectionProps {
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
 * Compact Section Pattern Component
 */
export const CompactSection = ({
  heading,
  headingLevel = 2,
  subheading,
  content,
  cta,
  id,
  className = '',
  ariaLabel,
  children,
}: CompactSectionProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <Group
      as="section"
      sectionStyle="compact"
      paddingPreset="compact"
      width="constrained"
      className={className}
      ariaLabel={ariaLabel}
      id={id}
    >
      {heading && <HeadingTag className="wp-section-compact__heading">{heading}</HeadingTag>}
      {subheading && <p className="wp-section-compact__subheading">{subheading}</p>}
      {content && <div className="wp-section-compact__content">{content}</div>}
      {children && <div className="wp-section-compact__content">{children}</div>}
      {cta && (
        <div className="wp-section-compact__cta">
          <Button
            variant={cta.variant || 'default'}
            size="default"
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

CompactSection.displayName = 'CompactSection';
