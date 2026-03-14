/**
 * MutedSection.tsx - Pattern
 *
 * Subtle gray background section for alternating content areas.
 */

import React from 'react';
import { Group } from '../../blocks/design/Group';
import { Button } from '../../blocks/design/Buttons';

interface MutedSectionProps {
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
 * MutedSection Pattern Component
 */
export const MutedSection = ({
  heading,
  headingLevel = 2,
  subheading,
  content,
  cta,
  id,
  className,
  ariaLabel,
  children,
}: MutedSectionProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <Group
      as="section"
      sectionStyle="muted"
      paddingPreset="section"
      width="full"
      className={className}
      ariaLabel={ariaLabel}
      id={id}
    >
      <div className="wp-section-muted__content">
        {heading && (
          <HeadingTag className="wp-section-muted__heading funky-title-neon">
            {heading}
          </HeadingTag>
        )}
        {subheading && <p className="wp-section-muted__subheading">{subheading}</p>}
        {content && <div className="wp-section-muted__content">{content}</div>}
        {children && <div className="wp-section-muted__content">{children}</div>}
        {cta && (
          <div className="wp-section-muted__cta">
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

MutedSection.displayName = 'MutedSection';
