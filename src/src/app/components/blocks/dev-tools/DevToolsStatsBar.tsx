/**
 * DevToolsStatsBar
 *
 * Reusable stats card row for all dev tools pages.
 * Displays 2-6 metric cards in a responsive grid with retro styling.
 *
 * **Styling:** BEM (.retro-devtools-stats__*) in /src/styles/blocks/ui/dev-tools-layout.css
 * **WCAG AA 2.2:** Semantic HTML, accessible labels
 */

import type { ReactNode } from 'react';

export interface DevToolsStat {
  value: string | number;
  label: string;
  icon?: ReactNode;
}

interface DevToolsStatsBarProps {
  stats: DevToolsStat[];
}

export const DevToolsStatsBar = ({ stats }: DevToolsStatsBarProps) => {
  return (
    <div className="retro-devtools-stats" role="list" aria-label="Page statistics">
      {stats.map((stat) => (
        <div key={stat.label} className="retro-devtools-stats__card" role="listitem">
          {stat.icon && (
            <span className="retro-devtools-stats__icon" aria-hidden="true">
              {stat.icon}
            </span>
          )}
          <span className="retro-font-display retro-bold retro-devtools-stats__value">
            {stat.value}
          </span>
          <span className="retro-font-body retro-devtools-stats__label">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}

DevToolsStatsBar.displayName = 'DevToolsStatsBar';
