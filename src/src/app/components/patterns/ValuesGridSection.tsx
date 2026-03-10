import React from 'react';
import { Heart, Users, Globe, ShieldCheck } from '@phosphor-icons/react';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as HeadingModule from '../common/Heading';

var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Heading = HeadingModule.Heading;

// ValueItem structure
// - icon: React.ComponentType (Phosphor icon)
// - title: string
// - description: string

// ValuesGridSectionProps structure
// - heading?: string
// - description?: string
// - values?: ValueItem[]
// - className?: string

var defaultValues = [
  {
    icon: Heart,
    title: "Curated with Love",
    description: "Every item is hand-picked for quality and style."
  },
  {
    icon: Users,
    title: "Community First",
    description: "We listen to our customers and grow together."
  },
  {
    icon: Globe,
    title: "Sustainable Choices",
    description: "Committed to eco-friendly packaging and ethical sourcing."
  },
  {
    icon: ShieldCheck,
    title: "Trust & Security",
    description: "Your data and payments are always safe with us."
  }
];

/**
 * ValuesGridSection Pattern
 * 
 * Grid of icon-based value proposition cards.
 * 
 * @pattern
 */
export function ValuesGridSection(props) {
  var heading = props.heading !== undefined ? props.heading : "Why Shop With Us?";
  var description = props.description !== undefined ? props.description : "We take pride in offering more than just great products. Here is what sets us apart.";
  var values = props.values || defaultValues;
  var className = props.className || "";

  var header = React.createElement('div', { className: "wp-about-values-header" }, [
    React.createElement(Typography, { key: 'h', variant: "h2", className: "wp-about-values-title" }, heading),
    React.createElement(Typography, { key: 'd', variant: "body", className: "wp-about-values-description" }, description)
  ]);

  var cards = values.map(function(item, index) {
    var Icon = item.icon;
    
    var iconWrapper = React.createElement('div', { key: 'icon', className: "wp-about-values-icon wp-about-values-icon--animated" },
      React.createElement(Icon, { size: 32, 'aria-hidden': "true" })
    );

    var cardInner = React.createElement('div', { className: "wp-about-values-card__inner funky-spring-hover" }, [
      iconWrapper,
      React.createElement(Heading, { key: 'title', level: 3, className: "wp-about-values-card-title wp-about-values-card-title--spaced funky-text-neon" }, item.title),
      React.createElement(Typography, { key: 'desc', variant: "small", className: "wp-about-values-card-text" }, item.description)
    ]);

    return React.createElement('div', { key: index, className: "wp-about-values-card funky-card-glow group" }, cardInner);
  });

  var grid = React.createElement('div', { className: "wp-about-values-grid" }, cards);

  var containerContent = React.createElement(Container, null, [
    header,
    grid
  ]);

  return React.createElement('section', { className: 'wp-about-values-section ' + className }, containerContent);
}