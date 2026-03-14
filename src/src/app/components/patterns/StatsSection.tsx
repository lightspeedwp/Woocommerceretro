import React from 'react';
import { Typography } from '../common/Typography';

interface Stat {
  id: string;
  value: string;
  label: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  suffix?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  heading?: string;
  description?: string;
  layout?: 'horizontal' | 'grid';
  dark?: boolean;
  className?: string;
}

/**
 * StatsSection Pattern Component
 */
export const StatsSection = ({
  stats,
  heading,
  description,
  layout = 'horizontal',
  dark = false,
  className = '',
}: StatsSectionProps) => {
  const gridClasses = layout === 'horizontal' ? 'wp-stats-grid' : 'wp-stats-grid--grid';

  return (
    <div className={`wp-stats-section ${dark ? 'wp-stats-section--dark' : ''} ${className}`}>
      {(heading || description) && (
        <div className="wp-stats-header">
          {heading && <Typography variant="h2" className="wp-stats-header__title">{heading}</Typography>}
          {description && <Typography variant="p" className="wp-stats-header__description">{description}</Typography>}
        </div>
      )}
      <div className={gridClasses}>
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.id} className="wp-stat-item">
              {Icon && (
                <div className="wp-stat-item__icon-wrapper">
                  <Icon size={32} className="wp-stat-item__icon" />
                </div>
              )}
              <div className="wp-stat-item__value">{stat.value}{stat.suffix || ''}</div>
              <div className="wp-stat-item__label">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}