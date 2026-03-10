import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as HeadingModule from '../common/Heading';
import { Palette, Code, BookOpen, Eye, Stack as Layers, MapTrifold as Map, AppWindow as LayoutIcon, Heartbeat as Activity } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Heading = HeadingModule.Heading;

/**
 * DevToolsIndex Page
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No JSX
 */

var devTools = [
  {
    title: 'Style Guide',
    description: 'Complete design system reference with colors, typography, spacing, and component tokens.',
    icon: React.createElement(Palette, { size: 32 }),
    link: '/dev-tools/style-guide',
  },
  {
    title: 'Component Showcase',
    description: 'Visual showcase of all available components, patterns, and blocks with live previews.',
    icon: React.createElement(Layers, { size: 32 }),
    link: '/dev-tools/showcase',
  },
  {
    title: 'Performance Dashboard',
    description: 'Real-time Web Vitals monitoring, performance metrics, and optimization insights.',
    icon: React.createElement(Activity, { size: 32 }),
    link: '/dev-tools/performance',
    badge: 'NEW',
  },
  {
    title: 'Icon Library',
    description: 'Browse and search all available Phosphor icons with copy-to-clipboard functionality.',
    icon: React.createElement(Eye, { size: 32 }),
    link: '/dev-tools/icons',
  },
  {
    title: 'Component API',
    description: 'Comprehensive API reference for all React components including props, types, and examples.',
    icon: React.createElement(Code, { size: 32 }),
    link: '/dev-tools/api',
  },
  {
    title: 'Live Preview',
    description: 'Interactive template previewer with real-time customization and theme switching.',
    icon: React.createElement(BookOpen, { size: 32 }),
    link: '/dev-tools/live-preview',
  },
  {
    title: 'Sitemap',
    description: 'Visual route map showing all pages and navigation structure in the application.',
    icon: React.createElement(Map, { size: 32 }),
    link: '/sitemap',
  },
  {
    title: 'Template Tester',
    description: 'Direct access to all page templates for rapid testing and QA verification.',
    icon: React.createElement(LayoutIcon, { size: 32 }),
    link: '/template-tester',
  },
];

export function DevToolsIndex() {
  var introHeader = React.createElement('section', { key: 'intro', className: "wp-page-intro-section" }, 
    React.createElement(Container, { className: "wp-page-intro-content" }, [
      React.createElement(Typography, { key: 't', variant: "h1", className: "wp-page-intro-title" }, "Developer tools"),
      React.createElement(Typography, { key: 'd', variant: "body", className: "wp-page-intro-text" }, 
        "Design system documentation, component references, and development utilities."
      )
    ])
  );

  var toolCards = devTools.map(function(tool, index) {
    var badge = tool.badge ? React.createElement('span', { key: 'b', className: "wp-devtool-card__badge" }, tool.badge) : null;
    
    return React.createElement(Link, { key: index, to: tool.link, className: "wp-devtool-card" }, [
      React.createElement('div', { key: 'h', className: "wp-devtool-card__header" }, [
        React.createElement('span', { key: 'i', className: "wp-devtool-card__icon" }, tool.icon),
        badge
      ]),
      React.createElement(Heading, { key: 't', level: "3" }, tool.title),
      React.createElement(Typography, { key: 'd', variant: "body" }, tool.description),
      React.createElement('span', { key: 'a', className: "wp-devtool-card__arrow" }, "View Tool ->")
    ]);
  });

  var toolsGrid = React.createElement('section', { key: 'grid', className: "wp-content-section" }, 
    React.createElement(Container, null, 
      React.createElement('div', { className: "wp-devtools-grid" }, toolCards)
    )
  );

  return React.createElement(React.Fragment, null, [
    introHeader,
    toolsGrid
  ]);
}