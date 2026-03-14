/**
 * PageLeaderboardRetro
 *
 * "PlayPocket" FSE theme - Leaderboard page.
 * Top customers by XP/loyalty points with retro scoreboard aesthetic.
 * WCAG AA 2.2 compliant.
 *
 * @route /leaderboard
 */

import { Link } from 'react-router';
import { Trophy, Crown, Lightning as Zap, Fire } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { LEADERBOARD_PLAYERS, CURRENT_PLAYER } from '../../data/newPages';

export const PageLeaderboardRetro = () => {
  // Google Fonts loading moved to RootLayout.

  const topThree = LEADERBOARD_PLAYERS.slice(0, 3);
  const rest = LEADERBOARD_PLAYERS.slice(3);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">LEADERBOARD</span>
        </div>

        <div className="retro-page-shell">
          <div className="retro-page-shell__header">
            <Crown size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                HIGH SCORES
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Top players this season. Earn XP to climb the ranks!
              </p>
            </div>
          </div>

          {/* Your Rank Banner */}
          <div className="retro-leaderboard__your-rank" aria-label="Your current ranking">
            <div>
              <span className="retro-font-display retro-leaderboard__your-rank-label">YOUR RANK</span>
              <span className="retro-font-display retro-bold retro-leaderboard__your-rank-value">
                #{CURRENT_PLAYER.rank}
              </span>
            </div>
            <div>
              <span className="retro-font-display retro-leaderboard__your-rank-label">XP</span>
              <span className="retro-font-display retro-bold retro-leaderboard__your-rank-value">
                {CURRENT_PLAYER.xp.toLocaleString()}
              </span>
            </div>
            <div>
              <span className="retro-font-display retro-leaderboard__your-rank-label">TIER</span>
              <span className="retro-font-display retro-bold retro-leaderboard__your-rank-value">
                {CURRENT_PLAYER.tier}
              </span>
            </div>
            <div>
              <span className="retro-font-display retro-leaderboard__your-rank-label">STREAK</span>
              <span className="retro-font-display retro-bold retro-leaderboard__your-rank-value">
                <Fire size={18} weight="fill" aria-hidden="true" /> {CURRENT_PLAYER.streak}d
              </span>
            </div>
          </div>

          {/* Podium */}
          <div className="retro-leaderboard__podium" aria-label="Top 3 players">
            {/* 2nd Place */}
            <div className="retro-leaderboard__podium-card retro-leaderboard__podium-card--silver">
              <span className="retro-leaderboard__podium-rank" aria-hidden="true">🥈</span>
              <h3 className="retro-font-display retro-bold retro-leaderboard__podium-name">{topThree[1].name}</h3>
              <span className="retro-font-display retro-bold retro-leaderboard__podium-xp">
                {topThree[1].xp.toLocaleString()} XP
              </span>
            </div>
            {/* 1st Place */}
            <div className="retro-leaderboard__podium-card retro-leaderboard__podium-card--gold">
              <span className="retro-leaderboard__podium-rank" aria-hidden="true">🥇</span>
              <h3 className="retro-font-display retro-bold retro-leaderboard__podium-name">{topThree[0].name}</h3>
              <span className="retro-font-display retro-bold retro-leaderboard__podium-xp">
                {topThree[0].xp.toLocaleString()} XP
              </span>
            </div>
            {/* 3rd Place */}
            <div className="retro-leaderboard__podium-card retro-leaderboard__podium-card--bronze">
              <span className="retro-leaderboard__podium-rank" aria-hidden="true">🥉</span>
              <h3 className="retro-font-display retro-bold retro-leaderboard__podium-name">{topThree[2].name}</h3>
              <span className="retro-font-display retro-bold retro-leaderboard__podium-xp">
                {topThree[2].xp.toLocaleString()} XP
              </span>
            </div>
          </div>

          {/* Full Table */}
          <table className="retro-leaderboard__table" aria-label="Full leaderboard">
            <thead>
              <tr>
                <th className="retro-font-display">RANK</th>
                <th className="retro-font-display">PLAYER</th>
                <th className="retro-font-display">TIER</th>
                <th className="retro-font-display">XP</th>
                <th className="retro-font-display">STREAK</th>
              </tr>
            </thead>
            <tbody>
              {rest.map((player) => (
                <tr
                  key={player.rank}
                  className={player.name === CURRENT_PLAYER.name ? 'retro-leaderboard__table-row--current' : ''}
                >
                  <td className="retro-font-display retro-bold retro-leaderboard__rank-cell">
                    #{player.rank}
                  </td>
                  <td>
                    <div className="retro-leaderboard__player-cell">
                      <span aria-hidden="true">{player.avatar}</span>
                      <span className="retro-font-body">{player.name}</span>
                    </div>
                  </td>
                  <td>
                    <span className="retro-font-display retro-leaderboard__tier-badge">
                      {player.tier}
                    </span>
                  </td>
                  <td className="retro-font-display retro-bold">
                    {player.xp.toLocaleString()}
                  </td>
                  <td className="retro-font-body">
                    <Fire size={14} weight="fill" aria-hidden="true" /> {player.streak}d
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <BottomGridRetro />
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

PageLeaderboardRetro.displayName = 'PageLeaderboardRetro';