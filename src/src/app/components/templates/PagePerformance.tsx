/**
 * PagePerformance Template
 * 
 * Real-time performance monitoring and Web Vitals dashboard.
 * Displays current performance metrics, optimization tips, and historical data.
 * 
 * @template
 * @route /dev-tools/performance
 * 
 * Location: /src/app/components/templates/PagePerformance.tsx
 */

import React from 'react';
import * as ContainerModule from '../common/Container';
import * as PerformanceDashboardModule from '../dev-tools/PerformanceDashboard';
import { Heartbeat as Activity, Lightning, Target, TrendUp } from '@phosphor-icons/react';

var Container = ContainerModule.Container;
var PerformanceDashboard = PerformanceDashboardModule.PerformanceDashboard;

export default function PagePerformance() {
  return React.createElement(React.Fragment, null,
    /* Page Header */
    React.createElement('section', { className: "page-performance-header wp-page-intro-section" },
      React.createElement(Container, null,
        React.createElement('div', { className: "page-performance-header__content wp-page-intro-content" },
          React.createElement('div', { className: "wp-badge-pill" },
            React.createElement(Activity, { size: 16, weight: "duotone" }),
            React.createElement('span', { className: "wp-badge-pill__text" }, "Performance")
          ),
          React.createElement('h1', null,
            "Performance Monitoring"
          ),
          React.createElement('p', { className: "wp-page-intro-text" },
            "Real-time Web Vitals tracking and performance optimization insights."
          )
        )
      )
    ),

    /* Performance Dashboard */
    React.createElement('section', { className: "page-performance-dashboard reward-section" },
      React.createElement(Container, null,
        React.createElement(PerformanceDashboard, null)
      )
    ),

    /* Quick Tips */
    React.createElement('section', { className: "page-performance-tips reward-section reward-section--alt" },
      React.createElement(Container, null,
        React.createElement('h2', { className: "reward-section__heading", style: { display: 'flex', alignItems: 'center', gap: 'var(--wp--preset--spacing--20)' } },
          React.createElement(Lightning, { size: 24, weight: "duotone" }),
          "Quick Performance Tips"
        ),
        
        React.createElement('div', { className: "showcase-stats-grid" },
          React.createElement('div', { className: "style-guide-card funky-glass-panel" },
            React.createElement(Target, { size: 48, weight: "duotone", className: "style-guide-card__icon" }),
            React.createElement('h3', { className: "style-guide-card__title" }, "Optimize Images"),
            React.createElement('p', { className: "style-guide-card__desc", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              "Use lazy loading for below-fold images and responsive srcSet for different screen sizes."
            ),
            React.createElement('ul', { className: "performance-tip__list", style: { paddingLeft: 'var(--wp--preset--spacing--40)', margin: 0, fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--muted-foreground)' } },
              React.createElement('li', null, "Set ", React.createElement('code', null, "priority"), " for hero images"),
              React.createElement('li', null, "Use ", React.createElement('code', null, "loading=\"lazy\""), " for below-fold"),
              React.createElement('li', null, "Provide srcSet for responsive images"),
              React.createElement('li', null, "Consider WebP format for better compression")
            )
          ),

          React.createElement('div', { className: "style-guide-card funky-glass-panel" },
            React.createElement(TrendUp, { size: 48, weight: "duotone", className: "style-guide-card__icon" }),
            React.createElement('h3', { className: "style-guide-card__title" }, "Reduce Bundle Size"),
            React.createElement('p', { className: "style-guide-card__desc", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              "Code splitting and lazy loading reduce initial bundle size and improve load times."
            ),
            React.createElement('ul', { className: "performance-tip__list", style: { paddingLeft: 'var(--wp--preset--spacing--40)', margin: 0, fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--muted-foreground)' } },
              React.createElement('li', null, "Lazy load route components"),
              React.createElement('li', null, "Use dynamic imports for heavy components"),
              React.createElement('li', null, "Tree-shake unused dependencies"),
              React.createElement('li', null, "Monitor bundle size with build tools")
            )
          ),

          React.createElement('div', { className: "style-guide-card funky-glass-panel" },
            React.createElement(Lightning, { size: 48, weight: "duotone", className: "style-guide-card__icon" }),
            React.createElement('h3', { className: "style-guide-card__title" }, "Optimize Runtime"),
            React.createElement('p', { className: "style-guide-card__desc", style: { marginBottom: 'var(--wp--preset--spacing--30)' } },
              "Minimize re-renders and heavy computations to maintain 60fps."
            ),
            React.createElement('ul', { className: "performance-tip__list", style: { paddingLeft: 'var(--wp--preset--spacing--40)', margin: 0, fontSize: 'var(--wp--preset--font-size--small)', color: 'var(--wp--preset--color--muted-foreground)' } },
              React.createElement('li', null, "Use useMemo for expensive calculations"),
              React.createElement('li', null, "Use useCallback for prop functions"),
              React.createElement('li', null, "Debounce scroll and resize handlers"),
              React.createElement('li', null, "Use CSS transitions instead of JS animation")
            )
          )
        )
      )
    ),

    /* Web Vitals Targets */
    React.createElement('section', { className: "page-performance-targets reward-section" },
      React.createElement(Container, null,
        React.createElement('h2', { className: "reward-section__heading" },
          "🎯 Web Vitals Targets"
        ),
        
        React.createElement('div', { className: "block-categories-grid" },
          React.createElement('div', { className: "block-category-card funky-glass-panel" },
            React.createElement('div', { className: "block-category-card__header" },
              React.createElement('div', { className: "block-category-card__icon", style: { fontWeight: 'bold' } }, "LCP"),
              React.createElement('span', { className: "block-category-card__count" }, "< 2.5s")
            ),
            React.createElement('h3', { className: "block-category-card__name" }, "Largest Contentful Paint"),
            React.createElement('p', { className: "block-category-card__desc" },
              "Measures loading performance. Good user experience occurs when LCP happens within 2.5 seconds."
            )
          ),

          React.createElement('div', { className: "block-category-card funky-glass-panel" },
            React.createElement('div', { className: "block-category-card__header" },
              React.createElement('div', { className: "block-category-card__icon", style: { fontWeight: 'bold' } }, "FID"),
              React.createElement('span', { className: "block-category-card__count" }, "< 100ms")
            ),
            React.createElement('h3', { className: "block-category-card__name" }, "First Input Delay"),
            React.createElement('p', { className: "block-category-card__desc" },
              "Measures interactivity. Pages should have an FID of less than 100 milliseconds."
            )
          ),

          React.createElement('div', { className: "block-category-card funky-glass-panel" },
            React.createElement('div', { className: "block-category-card__header" },
              React.createElement('div', { className: "block-category-card__icon", style: { fontWeight: 'bold' } }, "CLS"),
              React.createElement('span', { className: "block-category-card__count" }, "< 0.1")
            ),
            React.createElement('h3', { className: "block-category-card__name" }, "Cumulative Layout Shift"),
            React.createElement('p', { className: "block-category-card__desc" },
              "Measures visual stability. Pages should maintain a CLS of less than 0.1."
            )
          ),

          React.createElement('div', { className: "block-category-card funky-glass-panel" },
            React.createElement('div', { className: "block-category-card__header" },
              React.createElement('div', { className: "block-category-card__icon", style: { fontWeight: 'bold' } }, "FCP"),
              React.createElement('span', { className: "block-category-card__count" }, "< 1.8s")
            ),
            React.createElement('h3', { className: "block-category-card__name" }, "First Contentful Paint"),
            React.createElement('p', { className: "block-category-card__desc" },
              "Measures perceived loading speed. Good FCP is less than 1.8 seconds."
            )
          ),

          React.createElement('div', { className: "block-category-card funky-glass-panel" },
            React.createElement('div', { className: "block-category-card__header" },
              React.createElement('div', { className: "block-category-card__icon", style: { fontWeight: 'bold' } }, "TTFB"),
              React.createElement('span', { className: "block-category-card__count" }, "< 800ms")
            ),
            React.createElement('h3', { className: "block-category-card__name" }, "Time to First Byte"),
            React.createElement('p', { className: "block-category-card__desc" },
              "Measures server response time. Good TTFB is less than 800 milliseconds."
            )
          )
        )
      )
    )
  );
}