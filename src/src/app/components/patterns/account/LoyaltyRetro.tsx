/**
 * LoyaltyRetro
 *
 * "PlayPocket" FSE theme - Account Loyalty/XP sub-page.
 * Shows XP progress, tier status, and activity history.
 * WCAG AA 2.2 compliant.
 *
 * Rendered inside AccountLayoutRetro <Outlet />.
 */

import { Link } from 'react-router';
import { Trophy, Star, Lightning as Zap, Fire } from '@phosphor-icons/react';
import { loyaltyUser, recentActivity, getLoyaltyProgress } from '../../../data/loyalty';

export const LoyaltyRetro = () => {
  const { progressPct, pointsRemaining } = getLoyaltyProgress();

  return (
    <div>
      <div className="retro-page-shell__header">
        <Trophy size={28} weight="bold" aria-hidden="true" />
        <h2 className="retro-font-display retro-bold retro-page-shell__title">
          ACHIEVEMENTS & XP
        </h2>
      </div>

      {/* XP Progress Bar */}
      <div className="retro-acct-loyalty__xp-bar">
        <div className="retro-acct-loyalty__xp-header">
          <span className="retro-font-display retro-bold retro-acct-loyalty__tier-name">
            <Star size={18} weight="fill" aria-hidden="true" /> {loyaltyUser.tier} TIER
          </span>
          <span className="retro-font-display retro-bold retro-acct-loyalty__xp-count">
            {loyaltyUser.points.toLocaleString()} XP
          </span>
        </div>
        <div
          className="retro-acct-loyalty__progress"
          role="progressbar"
          aria-valuenow={loyaltyUser.points}
          aria-valuemin={0}
          aria-valuemax={loyaltyUser.nextTierThreshold}
          aria-label={`${progressPct}% progress to ${loyaltyUser.nextTier}`}
        >
          <div
            className="retro-acct-loyalty__progress-fill"
            style={{ width: `${Math.min(progressPct, 100)}%` }}
          />
        </div>
        <div className="retro-acct-loyalty__progress-label">
          <span className="retro-font-display">{loyaltyUser.tier}</span>
          <span className="retro-font-body">{pointsRemaining} XP to {loyaltyUser.nextTier}</span>
          <span className="retro-font-display">{loyaltyUser.nextTier}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="retro-acct-loyalty__stats">
        <div className="retro-acct-loyalty__stat">
          <span className="retro-font-display retro-bold retro-acct-loyalty__stat-value">
            {loyaltyUser.points.toLocaleString()}
          </span>
          <span className="retro-font-display retro-acct-loyalty__stat-label">AVAILABLE XP</span>
        </div>
        <div className="retro-acct-loyalty__stat">
          <span className="retro-font-display retro-bold retro-acct-loyalty__stat-value">
            {loyaltyUser.lifetimePoints.toLocaleString()}
          </span>
          <span className="retro-font-display retro-acct-loyalty__stat-label">LIFETIME XP</span>
        </div>
        <div className="retro-acct-loyalty__stat">
          <span className="retro-font-display retro-bold retro-acct-loyalty__stat-value">
            ${(loyaltyUser.points * 0.02).toFixed(0)}
          </span>
          <span className="retro-font-display retro-acct-loyalty__stat-label">CREDIT VALUE</span>
        </div>
        <div className="retro-acct-loyalty__stat">
          <span className="retro-font-display retro-bold retro-acct-loyalty__stat-value">
            {loyaltyUser.memberSince}
          </span>
          <span className="retro-font-display retro-acct-loyalty__stat-label">MEMBER SINCE</span>
        </div>
      </div>

      {/* Quick Links */}
      <div className="retro-acct-loyalty__quick-links">
        <Link to="/achievements" className="retro-btn retro-btn--secondary retro-font-display retro-bold">
          <Zap size={16} weight="bold" aria-hidden="true" /> VIEW BADGES
        </Link>
        <Link to="/leaderboard" className="retro-btn retro-btn--secondary retro-font-display retro-bold">
          <Fire size={16} weight="bold" aria-hidden="true" /> LEADERBOARD
        </Link>
      </div>

      {/* Activity History */}
      <h3 className="retro-font-display retro-bold retro-acct-loyalty__history-title">
        RECENT XP ACTIVITY
      </h3>
      <div className="retro-acct-loyalty__history-list">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="retro-acct-loyalty__history-item">
            <span className="retro-font-body retro-acct-loyalty__history-action">
              {activity.action}
            </span>
            <span
              className={`retro-font-display retro-bold ${
                activity.type === 'earn'
                  ? 'retro-acct-loyalty__history-points--earn'
                  : 'retro-acct-loyalty__history-points--redeem'
              }`}
            >
              {activity.type === 'earn' ? '+' : ''}{activity.points} XP
            </span>
            <span className="retro-font-body retro-acct-loyalty__history-date">
              {activity.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

LoyaltyRetro.displayName = 'LoyaltyRetro';