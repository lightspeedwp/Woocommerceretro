/**
 * DevToolsLayout Component
 *
 * Shared layout wrapper for dev tools pages with header, stats, and content area.
 */

import { type ReactNode } from 'react';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';

interface StatItem {
  value: string | number;
  label: string;
  color?: 'blue' | 'purple' | 'green' | 'orange' | 'pink';
}

interface DevToolsLayoutProps {
  title: string;
  description: string;
  category: 'testing' | 'components' | 'design' | 'showcases';
  badgeIcon?: ReactNode;
  badgeText?: string;
  stats?: StatItem[];
  children: ReactNode;
  footer?: ReactNode;
}

export const DevToolsLayout = ({
  title,
  description,
  category,
  badgeIcon,
  badgeText,
  stats = [],
  children,
  footer,
}: DevToolsLayoutProps) => {
  const defaultBadgeTexts: Record<string, string> = {
    testing: 'Testing & QA',
    components: 'Components & APIs',
    design: 'Design System',
    showcases: 'Component Showcases',
  };
  const finalBadgeText = badgeText || defaultBadgeTexts[category];

  return (
    <Layout>
      <div className={`wp-dev-layout__banner wp-dev-layout__banner--${category}`}>
        <Container variant="site">
          <div className="wp-dev-layout__banner-content">
            <div className={`wp-dev-layout__badge wp-dev-layout__badge--${category}`}>
              {badgeIcon}
              <span>{finalBadgeText}</span>
            </div>
            <h1 className="wp-dev-layout__title">{title}</h1>
            <p className="wp-dev-layout__description">{description}</p>

            {stats.length > 0 && (
              <div className="wp-dev-layout__stats">
                {stats.map((stat, idx) => {
                  const colorMod = stat.color || 'blue';
                  return (
                    <div key={idx} className="wp-dev-layout__stat">
                      <span className={`wp-dev-layout__stat-value wp-dev-layout__stat-value--${colorMod}`}>{stat.value}</span>
                      <span className="wp-dev-layout__stat-label">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </div>

      <div className="wp-dev-layout__content">
        <Container variant="site">{children}</Container>
      </div>

      {footer}
    </Layout>
  );
}