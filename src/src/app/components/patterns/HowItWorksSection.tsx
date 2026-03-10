import React from 'react';
import * as HeadingModule from '../common/Heading';
import * as TypographyModule from '../common/Typography';
import * as ContainerModule from '../common/Container';

var Heading = HeadingModule.Heading;
var Typography = TypographyModule.Typography;
var Container = ContainerModule.Container;

// HowItWorksStep structure
// - id: string
// - step: string
// - title: string
// - description: string
// - icon?: any

// HowItWorksSectionProps structure
// - heading?: string
// - description?: string
// - steps: HowItWorksStep[]
// - columns?: 2 | 3 | 4
// - showConnectors?: boolean
// - showNumbers?: boolean
// - numberColor?: string
// - className?: string

/**
 * HowItWorksSection Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function HowItWorksSection(props) {
  var heading = props.heading === undefined ? 'How It Works' : props.heading;
  var description = props.description;
  var steps = props.steps;
  var columns = props.columns || 3;
  var showConnectors = props.showConnectors === undefined ? true : props.showConnectors;
  var showNumbers = props.showNumbers === undefined ? true : props.showNumbers;
  var className = props.className || '';

  var gridClass = "wp-how-it-works__grid wp-how-it-works__grid--cols-" + columns;

  var header = (heading || description) ? React.createElement('div', { key: 'header', className: "wp-how-it-works__header" }, [
    heading ? React.createElement(Heading, { key: 'h', level: 2, className: "wp-how-it-works__heading" }, heading) : null,
    description ? React.createElement(Typography, { key: 'd', className: "wp-how-it-works__description" }, description) : null
  ]) : null;

  var stepItems = steps.map(function(item, index) {
    var Icon = item.icon;
    var isNotLast = index < steps.length - 1;

    var badge = showNumbers ? React.createElement('div', { key: 'n', className: "wp-how-it-works__badge" }, item.step) : 
      (Icon ? React.createElement('div', { key: 'i', className: "wp-how-it-works__badge wp-how-it-works__badge--animated" }, 
        React.createElement(Icon, { size: 40, 'aria-hidden': "true" })
      ) : null);

    var badgeWrapper = React.createElement('div', { key: 'bw', className: "wp-how-it-works__badge-wrapper" }, badge);

    var card = React.createElement('div', { key: 'card', className: "wp-hero-section--relative wp-how-it-works__card funky-spring-hover" }, [
      badgeWrapper,
      React.createElement(Heading, { key: 't', level: 3, className: "wp-how-it-works__title funky-text-neon" }, item.title),
      React.createElement(Typography, { key: 'd', className: "wp-how-it-works__description" }, item.description)
    ]);

    var cardGlow = React.createElement('div', { key: 'glow', className: "funky-card-glow wp-how-it-works__card-glow" }, card);

    var connector = (showConnectors && isNotLast) ? React.createElement('div', { key: 'conn', className: "wp-how-it-works__connector", 'aria-hidden': "true" }) : null;

    return React.createElement('div', { key: item.id, className: "wp-how-it-works__step" }, [
      cardGlow,
      connector
    ]);
  });

  var grid = React.createElement('div', { key: 'grid', className: gridClass }, stepItems);

  var inner = React.createElement('div', { key: 'inner', className: "wp-how-it-works__content" }, [
    header,
    grid
  ]);

  return React.createElement('section', { className: "wp-how-it-works " + className }, 
    React.createElement(Container, null, inner)
  );
}