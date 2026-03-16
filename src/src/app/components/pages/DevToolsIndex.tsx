/**
 * DevToolsIndex Page
 *
 * Hub page for all developer tools with retro-styled cards and stats bar.
 * **Styling:** BEM (.retro-devtools-index__*) in /src/styles/blocks/ui/dev-tools-layout.css
 */

import React from 'react';
import { Link } from 'react-router';
import { DevToolsStatsBar } from '../blocks/dev-tools/DevToolsStatsBar';
import {
  Palette, Code, BookOpen, Eye,
  Stack as Layers, MapTrifold as Map,
  AppWindow as LayoutIcon, Heartbeat as Activity,
  TextAa as FormInput, Rocket
} from '../../utils/phosphor-compat';

interface DevTool {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  badge?: string;
}

const devTools: DevTool[] = [
  {
    title: 'Style Guide',
    description: 'Complete design system reference with colors, typography, spacing, and component tokens.',
    icon: <Palette size={28} weight="bold" />,
    link: '/dev-tools/style-guide',
  },
  {
    title: 'Component Showcase',
    description: 'Visual showcase of all available components, patterns, and blocks with live previews.',
    icon: <Layers size={28} weight="bold" />,
    link: '/dev-tools/showcase',
  },
  {
    title: 'Performance Dashboard',
    description: 'Real-time Web Vitals monitoring, performance metrics, and optimization insights.',
    icon: <Activity size={28} weight="bold" />,
    link: '/dev-tools/performance',
    badge: 'NEW',
  },
  {
    title: 'Form Showcase',
    description: 'Complete form elements reference with all input types, validation states, and patterns.',
    icon: <FormInput size={28} weight="bold" />,
    link: '/dev-tools/forms',
  },
  {
    title: 'Icon Library',
    description: 'Browse and search all available Phosphor icons with copy-to-clipboard functionality.',
    icon: <Eye size={28} weight="bold" />,
    link: '/dev-tools/icons',
  },
  {
    title: 'Component API',
    description: 'Comprehensive API reference for all React components including props, types, and examples.',
    icon: <Code size={28} weight="bold" />,
    link: '/dev-tools/api',
  },
  {
    title: 'Live Preview',
    description: 'Interactive template previewer with real-time customization and theme switching.',
    icon: <BookOpen size={28} weight="bold" />,
    link: '/dev-tools/live-preview',
  },
  {
    title: 'Sitemap',
    description: 'Visual route map showing all pages and navigation structure in the application.',
    icon: <Map size={28} weight="bold" />,
    link: '/sitemap',
  },
  {
    title: 'Template Tester',
    description: 'Direct access to all page templates for rapid testing and QA verification.',
    icon: <LayoutIcon size={28} weight="bold" />,
    link: '/template-tester',
  },
  {
    title: 'Retro Demo Hub',
    description: 'Comprehensive showcase of 15+ retro patterns with Hero, Stats, Pricing, 3D effects, FAQ, and Canvas graphics.',
    icon: <Rocket size={28} weight="bold" />,
    link: '/retro-demo',
    badge: 'NEW',
  },
];

const stats = [
  { value: devTools.length, label: 'TOOLS' },
  { value: '176+', label: 'COMPONENTS' },
  { value: '280', label: 'CSS IMPORTS' },
  { value: '100', label: 'PRODUCTS' },
  { value: 'v2.13', label: 'VERSION' },
];

export const DevToolsIndex = () => {
  return (
    <div className="retro-devtools-index">
      {/* Header */}
      <section className="retro-devtools-index__hero">
        <div className="retro-devtools-index__hero-card">
          <h1 className="retro-font-display retro-bold retro-devtools-index__hero-title">
            DEVELOPER TOOLS
          </h1>
          <p className="retro-font-body retro-devtools-index__hero-desc">
            Design system documentation, component references, and development utilities.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <DevToolsStatsBar stats={stats} />

      {/* Tools Grid */}
      <section className="retro-devtools-index__grid-section">
        <div className="retro-devtools-index__grid">
          {devTools.map((tool) => (
            <Link
              key={tool.link}
              to={tool.link}
              className="retro-devtools-index__card"
            >
              <div className="retro-devtools-index__card-header">
                <span className="retro-devtools-index__card-icon">{tool.icon}</span>
                {tool.badge && (
                  <span className="retro-font-display retro-bold retro-devtools-index__card-badge">
                    {tool.badge}
                  </span>
                )}
              </div>
              <h3 className="retro-font-display retro-bold retro-devtools-index__card-title">
                {tool.title.toUpperCase()}
              </h3>
              <p className="retro-font-body retro-devtools-index__card-desc">
                {tool.description}
              </p>
              <span className="retro-font-display retro-bold retro-devtools-index__card-link">
                VIEW TOOL &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

DevToolsIndex.displayName = 'DevToolsIndex';