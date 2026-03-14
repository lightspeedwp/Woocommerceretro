/**
 * PagePerformance Template
 *
 * Real-time performance monitoring and Web Vitals dashboard.
 * Displays current performance metrics, optimization tips, and historical data.
 *
 * @template
 * @route /dev-tools/performance
 *
 * **Styling:** BEM (.retro-devtools-index__*) in /src/styles/blocks/ui/dev-tools-layout.css
 */

import React from 'react';
import { PerformanceDashboard } from '../dev-tools/PerformanceDashboard';
import { DevToolsStatsBar } from '../blocks/dev-tools/DevToolsStatsBar';
import { Heartbeat as Activity, Lightning, Target, TrendUp, Timer, ChartBar } from '@phosphor-icons/react';

const tips = [
  {
    icon: Target,
    title: 'OPTIMIZE IMAGES',
    desc: 'Use lazy loading for below-fold images and responsive srcSet for different screen sizes.',
    bullets: ['Set priority for hero images', 'Use loading="lazy" for below-fold', 'Provide srcSet for responsive images', 'Consider WebP format']
  },
  {
    icon: TrendUp,
    title: 'REDUCE BUNDLE SIZE',
    desc: 'Code splitting and lazy loading reduce initial bundle size and improve load times.',
    bullets: ['Lazy load route components', 'Use dynamic imports', 'Tree-shake unused dependencies', 'Monitor bundle size']
  },
  {
    icon: Lightning,
    title: 'OPTIMIZE RUNTIME',
    desc: 'Minimize re-renders and heavy computations to maintain 60fps.',
    bullets: ['Use useMemo for expensive calculations', 'Use useCallback for prop functions', 'Debounce scroll/resize handlers', 'Use CSS transitions over JS']
  }
];

const vitals = [
  { abbr: 'LCP', title: 'Largest Contentful Paint', target: '< 2.5s', desc: 'Measures loading performance. Good user experience occurs when LCP happens within 2.5 seconds.' },
  { abbr: 'FID', title: 'First Input Delay', target: '< 100ms', desc: 'Measures interactivity. Pages should have an FID of less than 100 milliseconds.' },
  { abbr: 'CLS', title: 'Cumulative Layout Shift', target: '< 0.1', desc: 'Measures visual stability. Pages should maintain a CLS of less than 0.1.' },
  { abbr: 'FCP', title: 'First Contentful Paint', target: '< 1.8s', desc: 'Measures perceived loading speed. Good FCP is less than 1.8 seconds.' },
  { abbr: 'TTFB', title: 'Time to First Byte', target: '< 800ms', desc: 'Measures server response time. Good TTFB is less than 800 milliseconds.' }
];

const stats = [
  { value: 5, label: 'CORE VITALS', icon: <Activity size={18} weight="bold" /> },
  { value: 3, label: 'OPT. TIPS', icon: <Lightning size={18} weight="bold" /> },
  { value: '60fps', label: 'TARGET', icon: <Timer size={18} weight="bold" /> },
  { value: 'AA', label: 'WCAG', icon: <ChartBar size={18} weight="bold" /> },
];

export const PagePerformance = () => {
  return (
    <>
      {/* Page Header */}
      <section className="retro-devtools-index__hero">
        <div className="retro-devtools-index__hero-card">
          <h1 className="retro-font-display retro-bold retro-devtools-index__hero-title">
            <Activity size={28} weight="bold" />
            PERFORMANCE MONITOR
          </h1>
          <p className="retro-font-body retro-devtools-index__hero-desc">
            Real-time Web Vitals tracking and performance optimization insights.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <DevToolsStatsBar stats={stats} />

      {/* Performance Dashboard */}
      <section className="retro-devtools-index__grid-section">
        <PerformanceDashboard />
      </section>

      {/* Quick Tips */}
      <section className="retro-devtools-index__grid-section">
        <h2 className="retro-font-display retro-bold retro-devtools-index__hero-title">
          <Lightning size={24} weight="bold" className="retro-devtools-index__card-icon" />
          QUICK TIPS
        </h2>

        <div className="retro-devtools-index__grid">
          {tips.map((tip, idx) => (
            <div key={idx} className="retro-devtools-index__card">
              <div className="retro-devtools-index__card-header">
                <span className="retro-devtools-index__card-icon">
                  <tip.icon size={32} weight="bold" />
                </span>
              </div>
              <h3 className="retro-font-display retro-bold retro-devtools-index__card-title">
                {tip.title}
              </h3>
              <p className="retro-font-body retro-devtools-index__card-desc">
                {tip.desc}
              </p>
              <ul className="retro-font-body retro-devtools-index__card-desc">
                {tip.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Web Vitals Targets */}
      <section className="retro-devtools-index__grid-section">
        <h2 className="retro-font-display retro-bold retro-devtools-index__hero-title">
          <Target size={24} weight="bold" className="retro-devtools-index__card-icon" />
          WEB VITALS TARGETS
        </h2>

        <div className="retro-devtools-index__grid">
          {vitals.map((vital, idx) => (
            <div key={idx} className="retro-devtools-index__card">
              <div className="retro-devtools-index__card-header">
                <span className="retro-font-display retro-bold retro-devtools-index__card-icon">
                  {vital.abbr}
                </span>
                <span className="retro-font-display retro-bold retro-devtools-index__card-badge">
                  {vital.target}
                </span>
              </div>
              <h3 className="retro-font-display retro-bold retro-devtools-index__card-title">
                {vital.title}
              </h3>
              <p className="retro-font-body retro-devtools-index__card-desc">
                {vital.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PagePerformance;
