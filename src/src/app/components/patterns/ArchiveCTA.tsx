import React, { useState } from 'react';
import { AccentSection } from './sections/AccentSection';
import { DarkSection } from './sections/DarkSection';
import { MutedSection } from './sections/MutedSection';
import { Button } from '../blocks/design/Buttons';
import { EnquiryModal } from '../blocks/overlay/EnquiryModal';
import { getVariant, trackConversion } from '../../services/abTest';

interface CTAContent {
  title: string;
  description: string;
  buttonText: string;
  formTitle?: string;
  formDescription?: string;
  successMessage?: string;
}

interface ArchiveCTAProps {
  content: CTAContent;
  variant?: 'gradient' | 'dark' | 'default';
  abTest?: any;
  testId?: string;
}

/**
 * ArchiveCTA Pattern
 * 
 * Reusable CTA section for archive templates (shop, blog, category pages).
 */
export const ArchiveCTA = ({ content, variant = 'gradient', abTest, testId }: ArchiveCTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Apply A/B test variant if provided
  const testResult = abTest ? getVariant(abTest) : null;
  let finalContent = content;
  if (testResult?.variant?.content) {
    finalContent = {
      ...content,
      ...testResult.variant.content,
    };
  }

  // CTA content component
  const ctaContent = (
    <>
      <p
        className={`wp-archive-cta__description ${
          variant === 'default'
            ? 'wp-archive-cta__description--default'
            : 'wp-archive-cta__description--accent'
        }`}
      >
        {finalContent.description}
      </p>
      <div className="wp-archive-cta__button-wrapper">
        <Button
          variant={variant === 'gradient' || variant === 'dark' ? 'default' : 'cta'}
          size="lg"
          onClick={() => {
            setIsModalOpen(true);
            if (testId) trackConversion(testId);
          }}
          className={
            variant === 'gradient' || variant === 'dark'
              ? 'wp-archive-cta__button--light'
              : 'wp-archive-cta__button'
          }
          aria-label={`${finalContent.buttonText} - opens enquiry form`}
        >
          {finalContent.buttonText}
        </Button>
      </div>
    </>
  );

  // Render with appropriate section pattern based on variant
  let sectionComponent;
  if (variant === 'gradient') {
    sectionComponent = (
      <AccentSection
        heading={finalContent.title}
        content={ctaContent}
        className="wp-archive-cta--centered"
        ariaLabel="Call to action"
        emphasis
      />
    );
  } else if (variant === 'dark') {
    sectionComponent = (
      <DarkSection
        heading={finalContent.title}
        content={ctaContent}
        className="wp-archive-cta--centered wp-section-divider"
        ariaLabel="Call to action"
      />
    );
  } else {
    sectionComponent = (
      <MutedSection
        heading={finalContent.title}
        content={ctaContent}
        className="wp-archive-cta--centered wp-section-divider"
        ariaLabel="Call to action"
      />
    );
  }

  return (
    <>
      {sectionComponent}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={finalContent.formTitle}
        description={finalContent.formDescription}
        successMessage={finalContent.successMessage}
      />
    </>
  );
}

export default ArchiveCTA;