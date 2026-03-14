/**
 * PageAchievementsRetro
 *
 * "PlayPocket" FSE theme - Achievements/Badges page.
 * Gamified customer page showing unlocked badges with retro pixel trophies.
 * WCAG AA 2.2 compliant.
 *
 * @route /achievements
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { Trophy, Star, Lightning as Zap } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { ACHIEVEMENTS } from '../../data/newPages';

type FilterType = 'all' | 'unlocked' | 'locked';

export const PageAchievementsRetro = () => {
  const [filter, setFilter] = useState<FilterType>('all');

  // Google Fonts loading moved to RootLayout.

  const unlockedCount = ACHIEVEMENTS.filter((a) => a.unlocked).length;
  const totalXP = ACHIEVEMENTS.filter((a) => a.unlocked).reduce((sum, a) => sum + a.xp, 0);

  const filtered = filter === 'all'
    ? ACHIEVEMENTS
    : filter === 'unlocked'
      ? ACHIEVEMENTS.filter((a) => a.unlocked)
      : ACHIEVEMENTS.filter((a) => !a.unlocked);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        {/* Breadcrumb */}
        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">ACHIEVEMENTS</span>
        </div>

        <div className="retro-page-shell">
          {/* Header */}
          <div className="retro-page-shell__header">
            <Trophy size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                TROPHY ROOM
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Your collection of hard-earned achievements.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="retro-achievements__stats">
            <div className="retro-achievements__stat-card">
              <span className="retro-font-display retro-bold retro-achievements__stat-value">
                {unlockedCount}/{ACHIEVEMENTS.length}
              </span>
              <span className="retro-font-display retro-achievements__stat-label">Unlocked</span>
            </div>
            <div className="retro-achievements__stat-card">
              <span className="retro-font-display retro-bold retro-achievements__stat-value">
                {totalXP.toLocaleString()}
              </span>
              <span className="retro-font-display retro-achievements__stat-label">Total XP</span>
            </div>
            <div className="retro-achievements__stat-card">
              <span className="retro-font-display retro-bold retro-achievements__stat-value">
                {Math.round((unlockedCount / ACHIEVEMENTS.length) * 100)}%
              </span>
              <span className="retro-font-display retro-achievements__stat-label">Complete</span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="retro-bundle__category-tabs" role="tablist" aria-label="Achievement filters">
            {(['all', 'unlocked', 'locked'] as FilterType[]).map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`retro-font-display retro-bold retro-bundle__category-tab ${filter === f ? 'retro-bundle__category-tab--active' : ''}`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Achievement Grid */}
          <div className="retro-achievements__grid" role="list">
            {filtered.map((ach) => (
              <div
                key={ach.id}
                className={`retro-achievements__card ${!ach.unlocked ? 'retro-achievements__card--locked' : ''}`}
                role="listitem"
              >
                <div className="retro-achievements__card-header">
                  <span className="retro-achievements__card-icon" aria-hidden="true">
                    {ach.icon}
                  </span>
                  <div className="retro-achievements__card-info">
                    <h3 className="retro-font-display retro-bold retro-achievements__card-title">
                      {ach.title}
                    </h3>
                    <span className={`retro-font-display retro-achievements__card-rarity retro-achievements__card-rarity--${ach.rarity.toLowerCase()}`}>
                      {ach.rarity}
                    </span>
                  </div>
                </div>
                <div className="retro-achievements__card-body">
                  <p className="retro-font-body retro-achievements__card-desc">{ach.description}</p>
                  <span className="retro-font-display retro-bold retro-achievements__card-xp">
                    <Zap size={14} weight="fill" aria-hidden="true" /> +{ach.xp} XP
                  </span>
                  {ach.progress && (
                    <div>
                      <div
                        className="retro-achievements__progress-bar"
                        role="progressbar"
                        aria-valuenow={ach.progress.current}
                        aria-valuemin={0}
                        aria-valuemax={ach.progress.total}
                        aria-label={`Progress: ${ach.progress.current} of ${ach.progress.total}`}
                      >
                        <div
                          className="retro-achievements__progress-fill"
                          style={{ width: `${(ach.progress.current / ach.progress.total) * 100}%` }}
                        />
                      </div>
                      <span className="retro-font-body retro-achievements__progress-text">
                        {ach.progress.current} / {ach.progress.total}
                      </span>
                    </div>
                  )}
                </div>
                <div className="retro-achievements__card-footer">
                  {ach.unlocked ? (
                    <span className="retro-font-body retro-achievements__card-date">
                      <Star size={12} weight="fill" aria-hidden="true" /> Unlocked {ach.unlockedDate}
                    </span>
                  ) : (
                    <span className="retro-font-display retro-achievements__card-date">LOCKED</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <BottomGridRetro />
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

PageAchievementsRetro.displayName = 'PageAchievementsRetro';