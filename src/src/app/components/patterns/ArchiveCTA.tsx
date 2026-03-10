import React from 'react';
import * as AccentSectionModule from './sections/AccentSection';
import * as DarkSectionModule from './sections/DarkSection';
import * as MutedSectionModule from './sections/MutedSection';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as EnquiryModalModule from '../blocks/overlay/EnquiryModal';
import * as abTestModule from '../../services/abTest';

var useState = React.useState;
var AccentSection = AccentSectionModule.AccentSection;
var DarkSection = DarkSectionModule.DarkSection;
var MutedSection = MutedSectionModule.MutedSection;
var Button = ButtonsModule.Button;
var EnquiryModal = EnquiryModalModule.EnquiryModal;
var getVariant = abTestModule.getVariant;
var trackConversion = abTestModule.trackConversion;

/**
 * ArchiveCTA Pattern
 * 
 * Reusable CTA section for archive templates (shop, blog, category pages).
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
function ArchiveCTA(props) {
  var content = props.content;
  var variant = props.variant || 'gradient';
  var abTest = props.abTest;
  var testId = props.testId;
  
  var stateArray = useState(false);
  var isModalOpen = stateArray[0];
  var setIsModalOpen = stateArray[1];

  // Apply A/B test variant if provided
  var testResult = abTest ? getVariant(abTest) : null;
  var finalContent = content;
  if (testResult && testResult.variant && testResult.variant.content) {
    // Manual merge instead of spread
    finalContent = {
      title: testResult.variant.content.title || content.title,
      description: testResult.variant.content.description || content.description,
      buttonText: testResult.variant.content.buttonText || content.buttonText,
      formTitle: testResult.variant.content.formTitle || content.formTitle,
      formDescription: testResult.variant.content.formDescription || content.formDescription,
      successMessage: testResult.variant.content.successMessage || content.successMessage
    };
  }

  // CTA content component
  var ctaContent = React.createElement(React.Fragment, null,
    React.createElement('p', { 
      className: "wp-archive-cta__description " + (
        variant === 'default' 
          ? 'wp-archive-cta__description--default'
          : 'wp-archive-cta__description--accent'
      )
    }, finalContent.description),

    React.createElement('div', { className: "wp-archive-cta__button-wrapper" },
      React.createElement(Button, {
        variant: (variant === 'gradient' || variant === 'dark') ? 'default' : 'cta',
        size: "lg",
        onClick: function() {
          setIsModalOpen(true);
          if (testId) trackConversion(testId);
        },
        className: (variant === 'gradient' || variant === 'dark')
          ? 'wp-archive-cta__button--light'
          : 'wp-archive-cta__button',
        "aria-label": finalContent.buttonText + " - opens enquiry form"
      }, finalContent.buttonText)
    )
  );

  // Render with appropriate section pattern based on variant
  var sectionComponent;

  if (variant === 'gradient') {
    sectionComponent = React.createElement(AccentSection, {
      heading: finalContent.title,
      content: ctaContent,
      className: "wp-archive-cta--centered",
      ariaLabel: "Call to action",
      emphasis: true
    });
  } else if (variant === 'dark') {
    sectionComponent = React.createElement(DarkSection, {
      heading: finalContent.title,
      content: ctaContent,
      className: "wp-archive-cta--centered wp-section-divider",
      ariaLabel: "Call to action"
    });
  } else {
    sectionComponent = React.createElement(MutedSection, {
      heading: finalContent.title,
      content: ctaContent,
      className: "wp-archive-cta--centered wp-section-divider",
      ariaLabel: "Call to action"
    });
  }

  return React.createElement(React.Fragment, null,
    sectionComponent,
    React.createElement(EnquiryModal, {
      isOpen: isModalOpen,
      onClose: function() { setIsModalOpen(false); },
      title: finalContent.formTitle,
      description: finalContent.formDescription,
      successMessage: finalContent.successMessage
    })
  );
}

export { ArchiveCTA };
export default ArchiveCTA;
