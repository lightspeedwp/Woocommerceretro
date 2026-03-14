import React from 'react';
import { Group } from '../../blocks/design/Group';
import { Button } from '../../blocks/design/Buttons';

interface BorderedSectionProps {
  heading?: string;
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  subheading?: string;
  content?: React.ReactNode;
  cta?: { label: string; href: string; variant?: 'default' | 'secondary' | 'outline' | 'ghost' };
  borderPosition?: 'all' | 'top' | 'bottom' | 'y';
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  id?: string;
  className?: string;
  ariaLabel?: string;
  children?: React.ReactNode;
}

/**
 * Bordered Section Pattern Component
 */
export const BorderedSection = ({
  heading,
  headingLevel = 2,
  subheading,
  content,
  cta,
  borderPosition = 'all',
  borderStyle = 'solid',
  id,
  className = '',
  ariaLabel,
  children,
}: BorderedSectionProps) => {
  const HeadingTag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  const borderPositionClasses: Record<string, string> = {
    all: 'border',
    top: 'border-t',
    bottom: 'border-b',
    y: 'border-y',
  };

  const borderStyleClass = borderStyle !== 'solid' ? `border-${borderStyle}` : '';
  const combinedClassName = `${borderPositionClasses[borderPosition]} ${borderStyleClass} ${className}`;

  return (
    <Group
      as="section"
      sectionStyle="bordered"
      paddingPreset="section"
      width="constrained"
      className={combinedClassName}
      ariaLabel={ariaLabel}
      id={id}
    >
      {heading && <HeadingTag className="wp-section-bordered__heading">{heading}</HeadingTag>}
      {subheading && <p className="wp-section-bordered__subheading">{subheading}</p>}
      {content && <div className="wp-section-bordered__content">{content}</div>}
      {children && <div className="wp-section-bordered__content">{children}</div>}
      {cta && (
        <div className="wp-section-bordered__cta">
          <Button
            variant={cta.variant || 'default'}
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

BorderedSection.displayName = 'BorderedSection';
