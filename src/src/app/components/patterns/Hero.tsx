import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as TypographyModule from '../common/Typography';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as BadgeModule from '../blocks/display/Badge';
import * as HeroSectionModule from './sections/HeroSection';
import * as ScrollDownArrowModule from '../common/ScrollDownArrow';
import * as CnModule from '../../utils/cn';

var useNavigate = ReactRouterModule.useNavigate;
var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;
var Badge = BadgeModule.Badge;
var HeroSection = HeroSectionModule.HeroSection;
var ScrollDownArrow = ScrollDownArrowModule.ScrollDownArrow;
var cn = CnModule.cn;

// HeroProps structure
// - title: string
// - subtitle?: string
// - badge?: { label: string, icon?: React.ComponentType }
// - imageSrc?: string
// - primaryAction?: { label: string, onClick?: () => void, href?: string }
// - secondaryAction?: { label: string, onClick?: () => void, href?: string }
// - overlayColor?: string
// - align?: 'center' | 'left'
// - height?: 'full' | 'large' | 'medium' | 'small'
// - nextSectionId?: string
// - className?: string

/**
 * Hero Block (Pattern)
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 */
export function Hero(props) {
  var title = props.title;
  var subtitle = props.subtitle;
  var badge = props.badge;
  var imageSrc = props.imageSrc;
  var primaryAction = props.primaryAction;
  var secondaryAction = props.secondaryAction;
  var overlayColor = props.overlayColor;
  var align = props.align !== undefined ? props.align : 'center';
  var height = props.height !== undefined ? props.height : 'large';
  var nextSectionId = props.nextSectionId;
  var className = props.className || '';

  var navigate = useNavigate();

  function handlePrimaryClick() {
    if (primaryAction) {
      if (primaryAction.onClick) {
        primaryAction.onClick();
      } else if (primaryAction.href) {
        navigate(primaryAction.href);
      }
    }
  }

  function handleSecondaryClick() {
    if (secondaryAction) {
      if (secondaryAction.onClick) {
        secondaryAction.onClick();
      } else if (secondaryAction.href) {
        navigate(secondaryAction.href);
      }
    }
  }

  var badgeElement = badge ? React.createElement(Badge, {
    key: 'badge',
    className: 'wp-hero__badge'
  }, [
    badge.icon ? React.createElement(badge.icon, { key: 'icon', size: 14 }) : null,
    React.createElement('span', { key: 'label' }, badge.label)
  ]) : null;

  var titleElement = React.createElement(Typography, {
    key: 'title',
    variant: 'h1',
    className: 'wp-hero__title'
  }, title);

  var subtitleElement = subtitle ? React.createElement(Typography, {
    key: 'subtitle',
    variant: 'body',
    className: 'wp-hero__subtitle'
  }, subtitle) : null;

  var primaryButton = primaryAction ? React.createElement(Button, {
    key: 'primary',
    variant: 'primary',
    size: 'lg',
    onClick: handlePrimaryClick,
    className: 'wp-hero__cta-primary'
  }, primaryAction.label) : null;

  var secondaryButton = secondaryAction ? React.createElement(Button, {
    key: 'secondary',
    variant: 'outline',
    size: 'lg',
    onClick: handleSecondaryClick,
    className: 'wp-hero__cta-secondary'
  }, secondaryAction.label) : null;

  var actions = (primaryAction || secondaryAction) ? React.createElement('div', {
    key: 'actions',
    className: 'wp-hero__actions'
  }, [primaryButton, secondaryButton]) : null;

  var scrollArrow = nextSectionId ? React.createElement(ScrollDownArrow, {
    key: 'scroll',
    targetId: nextSectionId,
    className: 'wp-hero__scroll-indicator'
  }) : null;

  var content = React.createElement('div', {
    className: cn('wp-hero__content', 'wp-hero__content--' + align)
  }, [
    badgeElement,
    titleElement,
    subtitleElement,
    actions,
    scrollArrow
  ]);

  return React.createElement(HeroSection, {
    className: cn('wp-hero', 'wp-hero--' + height, className),
    backgroundImage: imageSrc,
    overlayColor: overlayColor
  }, content);
}