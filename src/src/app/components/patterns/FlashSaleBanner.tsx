import React from 'react';
import * as ReactRouterModule from 'react-router';
import { X } from '@phosphor-icons/react';
import * as CountdownModule from '../blocks/Countdown';
import * as ButtonsModule from '../blocks/design/Buttons';

var useState = React.useState;
var Link = ReactRouterModule.Link;
var Countdown = CountdownModule.Countdown;
var Button = ButtonsModule.Button;

// FlashSaleBannerProps structure
// - title?: string
// - discount?: string
// - endDate: Date | string
// - description?: string
// - ctaText?: string
// - ctaLink?: string
// - variant?: 'purple' | 'red' | 'yellow' | 'gradient'
// - hideWhenExpired?: boolean
// - className?: string

/**
 * FlashSaleBanner Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function FlashSaleBanner(props) {
  var title = props.title || 'Flash Sale!';
  var discount = props.discount || '50% OFF';
  var endDate = props.endDate;
  var description = props.description || 'Limited time offer. Shop now before it\'s gone!';
  var ctaText = props.ctaText || 'Shop Sale';
  var ctaLink = props.ctaLink || '/sale';
  var variant = props.variant || 'purple';
  var hideWhenExpired = props.hideWhenExpired === undefined ? true : props.hideWhenExpired;
  var className = props.className || '';

  var _ex = useState(false);
  var isExpired = _ex[0];
  var setIsExpired = _ex[1];

  function handleExpire() {
    setIsExpired(true);
  }

  if (isExpired && hideWhenExpired) {
    return null;
  }

  var variantClasses = {
    purple: 'wp-flash-sale--purple',
    red: 'wp-flash-sale--red',
    yellow: 'wp-flash-sale--yellow',
    gradient: 'wp-flash-sale--gradient',
  };

  var pattern = React.createElement('div', { key: 'pattern', className: "wp-flash-sale__pattern" });

  var icon = React.createElement('div', { key: 'icon-wrap', className: "wp-flash-sale__icon-wrapper" }, 
    React.createElement(X, { className: "wp-flash-sale__icon", fill: "currentColor" })
  );

  var titleHeading = React.createElement('h2', { key: 'title', className: "wp-flash-sale__title" }, title);

  var discountBadge = React.createElement('div', { key: 'discount', className: "wp-flash-sale__discount" }, discount);

  var descParagraph = description ? React.createElement('p', { key: 'desc', className: "wp-flash-sale__description" }, description) : null;

  var countdownBlock = React.createElement('div', { key: 'countdown', className: "wp-flash-sale__countdown" }, 
    React.createElement(Countdown, {
      targetDate: endDate,
      label: "Sale Ends In:",
      format: "full",
      onExpire: handleExpire,
      hideWhenExpired: false,
      className: "wp-flash-sale__countdown--centered"
    })
  );

  var ctaButton = React.createElement('div', { key: 'cta', className: "wp-flash-sale__cta" }, 
    React.createElement(Link, { to: ctaLink }, 
      React.createElement(Button, {
        variant: "secondary",
        size: "lg",
        className: "wp-flash-sale__button"
      }, ctaText)
    )
  );

  var inner = React.createElement('div', { key: 'inner', className: "wp-flash-sale__inner" }, [
    icon,
    titleHeading,
    discountBadge,
    descParagraph,
    countdownBlock,
    ctaButton
  ]);

  var content = React.createElement('div', { key: 'content', className: "wp-flash-sale__content" }, [inner]);

  return React.createElement('section', {
    className: "wp-flash-sale " + variantClasses[variant] + " " + className,
    role: "banner",
    'aria-label': "Flash sale announcement"
  }, [
    pattern,
    content
  ]);
}

FlashSaleBanner.displayName = 'FlashSaleBanner';