import React from 'react';
import { Group } from '../../blocks/design/Group';
import { Button } from '../../blocks/design/Buttons';

interface AccentSectionProps {
  heading?: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  subheading?: string;
  content?: React.ReactNode;
  cta?: { label: string; href: string; variant?: 'default' | 'secondary' | 'outline' | 'ghost' };
  emphasis?: boolean;
  id?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

/**
 * Accent Section Pattern Component
 */
export const AccentSection = ({
  heading,
  headingLevel = 2,
  subheading,
  content,
  cta,
  emphasis = false,
  id,
  className = '',
  ariaLabel,
  children,
}: AccentSectionProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <Group
      as="section"
      sectionStyle="accent"
      paddingPreset={emphasis ? 'hero' : 'section'}
      width="full"
      className={className}
      ariaLabel={ariaLabel}
      id={id}
    >
      <div className="wp-section-accent__content">
        {heading && <HeadingTag className="wp-section-accent__heading">{heading}</HeadingTag>}
        {subheading && <p className="wp-section-accent__subheading">{subheading}</p>}
        {content && <div className="wp-section-accent__content">{content}</div>}
        {children && <div className="wp-section-accent__content">{children}</div>}
        {cta && (
          <div className="wp-section-accent__cta">
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
      </div>
    </Group>
  );
};

AccentSection.displayName = 'AccentSection';
