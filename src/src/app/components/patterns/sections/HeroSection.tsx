import React from 'react';
import * as GroupModule from '../../blocks/design/Group';
import * as ButtonsModule from '../../blocks/design/Buttons';

var Group = GroupModule.Group;
var Button = ButtonsModule.Button;

// HeroSectionProps structure
// - heading?: string
// - headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
// - subheading?: string
// - content?: React.ReactNode
// - cta?: { label: string, href: string, variant?: string }
// - secondaryCta?: { label: string, href: string, variant?: string }
// - backgroundImage?: string
// - backgroundAttachment?: 'scroll' | 'fixed'
// - backgroundOverlay?: number
// - textColor?: 'white' | 'black'
// - minHeight?: '50vh' | '60vh' | '80vh' | '100vh'
// - centered?: boolean
// - id?: string
// - className?: string
// - ariaLabel?: string
// - children?: React.ReactNode

/**
 * Hero Section Pattern Component
 */
export function HeroSection(props) {
  var heading = props.heading;
  var headingLevel = props.headingLevel === undefined ? 1 : props.headingLevel;
  var subheading = props.subheading;
  var content = props.content;
  var cta = props.cta;
  var secondaryCta = props.secondaryCta;
  var backgroundImage = props.backgroundImage;
  var backgroundAttachment = props.backgroundAttachment || 'scroll';
  var backgroundOverlay = props.backgroundOverlay === undefined ? 0.5 : props.backgroundOverlay;
  var textColor = props.textColor;
  var minHeight = props.minHeight;
  var centered = props.centered === undefined ? true : props.centered;
  var id = props.id;
  var className = props.className;
  var ariaLabel = props.ariaLabel;
  var children = props.children;

  var HeadingTag = "h" + headingLevel;
  
  var minHeightClass = minHeight ? ("wp-hero-section--" + minHeight) : '';
  var textColorClass = textColor === 'white' ? 'wp-hero-section--white' : textColor === 'black' ? 'wp-hero-section--black' : '';
  var centeredClass = centered ? 'wp-hero-section--centered' : '';
  var attachmentClass = backgroundAttachment === 'fixed' ? 'wp-hero-section--fixed-bg' : '';
  
  var groupClass = "wp-hero-section " + minHeightClass + " " + centeredClass + " " + textColorClass + " " + attachmentClass + " " + (className || "") + " " + (backgroundImage ? 'wp-hero-section--has-background' : '');

  var renderBackground = function() {
    if (!backgroundImage) return null;
    return React.createElement(React.Fragment, null,
      React.createElement('div', { 
        className: "wp-hero-section__background-image",
        style: {
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
      }),
      React.createElement('div', { 
        className: "wp-hero-section__overlay",
        style: { opacity: backgroundOverlay }
      })
    );
  };

  var renderCTA = function() {
    if (!cta && !secondaryCta) return null;
    return React.createElement('div', { className: "wp-hero-section__cta-wrapper " + (centered ? 'wp-hero-section__cta-wrapper--centered' : '') },
      cta ? React.createElement(Button, { 
        variant: cta.variant || 'primary',
        size: "lg",
        to: cta.href && cta.href.indexOf('/') === 0 ? cta.href : undefined,
        href: cta.href && cta.href.indexOf('/') !== 0 ? cta.href : undefined
      }, cta.label) : null,
      secondaryCta ? React.createElement(Button, { 
        variant: secondaryCta.variant || 'outline',
        size: "lg",
        to: secondaryCta.href && secondaryCta.href.indexOf('/') === 0 ? secondaryCta.href : undefined,
        href: secondaryCta.href && secondaryCta.href.indexOf('/') !== 0 ? secondaryCta.href : undefined
      }, secondaryCta.label) : null
    );
  };

  return React.createElement(Group, {
    as: "section",
    sectionStyle: "hero",
    paddingPreset: "hero",
    width: "full",
    className: groupClass,
    ariaLabel: ariaLabel,
    id: id
  },
    renderBackground(),
    React.createElement('div', { className: "wp-hero-section__container" },
      React.createElement('div', { className: "wp-hero-section__content " + (backgroundImage ? 'wp-hero-section__content--relative' : '') + " " + (minHeight ? 'wp-hero-section__content--centered' : '') },
        heading ? React.createElement(HeadingTag, { className: "wp-hero-section__heading " + (backgroundImage && textColor === 'white' ? 'wp-hero-section__heading--white' : '') }, heading) : null,
        subheading ? React.createElement('p', { className: "wp-hero-section__subheading " + (centered ? 'wp-hero-section__subheading--centered' : '') + " " + (backgroundImage && textColor === 'white' ? 'wp-hero-section__subheading--white' : '') }, subheading) : null,
        content ? React.createElement('div', { className: "wp-hero-section__content-block" }, content) : null,
        children ? React.createElement('div', { className: "wp-hero-section__content-block" }, children) : null,
        renderCTA()
      )
    )
  );
}

HeroSection.displayName = 'HeroSection';