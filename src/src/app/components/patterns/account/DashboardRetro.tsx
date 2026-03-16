import React from 'react';
import { Link } from 'react-router';
import { Heart, ShieldChevron, Sword, Star } from '../../../utils/phosphor-compat';

/**
 * DashboardRetro
 *
 * "PlayPocket" FSE theme - My Account Dashboard.
 * Strictly WCAG AA 2.2 compliant.
 *
 * Styling: BEM (.retro-dashboard__*) in
 *   /src/styles/sections/retro-page-layouts.css
 */
export const DashboardRetro = () => {
  return (
    <div className="retro-dashboard">
      {/* Welcome Header */}
      <div className="retro-dashboard__welcome">
        <h2 className="retro-font-display retro-bold retro-dashboard__welcome-title">
          WELCOME BACK, PLAYER 1
        </h2>
        <p className="retro-font-body retro-dashboard__welcome-subtitle">
          Level 42 · PlayPocket VIP
        </p>
      </div>

      {/* Stats Grid */}
      <div className="retro-dashboard__stats-grid">
        <div className="retro-dashboard__stat-card">
          <Heart size={48} weight="fill" className="retro-dashboard__stat-icon" />
          <h3 className="retro-font-display retro-bold retro-dashboard__stat-label">HP (Health)</h3>
          <div className="retro-dashboard__stat-bar">
            <div className="retro-dashboard__stat-bar-fill" style={{ width: '85%' }} />
          </div>
        </div>
        <div className="retro-dashboard__stat-card">
          <Star size={48} weight="fill" className="retro-dashboard__stat-icon" />
          <h3 className="retro-font-display retro-bold retro-dashboard__stat-label">COINS</h3>
          <div className="retro-font-display retro-bold retro-dashboard__stat-value">14,050</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="retro-font-display retro-bold retro-dashboard__activity-title">
          RECENT ACTIVITY
        </h3>
        <div className="retro-dashboard__activity-list">
          <div className="retro-dashboard__activity-item">
            <div className="retro-dashboard__activity-icon">
              <Sword size={32} weight="bold" />
            </div>
            <div className="retro-dashboard__activity-body">
              <div className="retro-font-display retro-bold">Equipped: Retro Handheld X</div>
              <div className="retro-font-body retro-dashboard__activity-detail">Order #9942 - Delivered Oct 12</div>
            </div>
            <Link to="/account/orders" className="retro-btn retro-btn--secondary retro-font-display">
              VIEW
            </Link>
          </div>

          <div className="retro-dashboard__activity-item">
            <div className="retro-dashboard__activity-icon">
              <ShieldChevron size={32} weight="bold" />
            </div>
            <div className="retro-dashboard__activity-body">
              <div className="retro-font-display retro-bold">Unlocked: Premium Warranty</div>
              <div className="retro-font-body retro-dashboard__activity-detail">Coverage until Oct 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DashboardRetro.displayName = 'DashboardRetro';