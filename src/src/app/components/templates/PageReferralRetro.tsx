/**
 * PageReferralRetro
 *
 * "PlayPocket" FSE theme - Referral Program page.
 * Share-and-earn with retro invite code generator.
 * WCAG AA 2.2 compliant.
 *
 * @route /referral
 */

import { Link } from 'react-router';
import { ShareNetwork, Copy, Gift, CheckCircle } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { REFERRAL_USER, REFERRAL_TIERS } from '../../data/newPages';
import { toast } from 'sonner@2.0.3';

export const PageReferralRetro = () => {
  // Google Fonts loading moved to RootLayout.

  const handleCopy = () => {
    navigator.clipboard.writeText(REFERRAL_USER.code).then(() => {
      toast.success('Code copied to clipboard!', { duration: 2000, position: 'bottom-right' });
    }).catch(() => {
      toast.success('Code: ' + REFERRAL_USER.code, { duration: 3000 });
    });
  };

  const handleShare = () => {
    toast.success('Share link ready! (Demo mode)', { duration: 2000, position: 'bottom-right' });
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-page-shell">
          <div className="retro-page-shell__header">
            <Gift size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                INVITE FRIENDS, GET LOOT
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Share your code. When friends buy, you both earn credits.
              </p>
            </div>
          </div>

          {/* Referral Code Box */}
          <div className="retro-referral__code-box">
            <p className="retro-font-display retro-referral__code-label">YOUR REFERRAL CODE</p>
            <p className="retro-font-display retro-bold retro-referral__code-value" aria-label={`Referral code: ${REFERRAL_USER.code}`}>
              {REFERRAL_USER.code}
            </p>
            <div className="retro-referral__code-actions">
              <button
                onClick={handleCopy}
                className="retro-btn retro-btn--primary retro-font-display retro-bold"
              >
                <Copy size={18} weight="bold" aria-hidden="true" /> COPY CODE
              </button>
              <button
                onClick={handleShare}
                className="retro-btn retro-btn--signal retro-font-display retro-bold"
              >
                <ShareNetwork size={18} weight="bold" aria-hidden="true" /> SHARE LINK
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="retro-referral__stats">
            <div className="retro-referral__stat">
              <span className="retro-font-display retro-bold retro-referral__stat-value">
                {REFERRAL_USER.totalReferred}
              </span>
              <span className="retro-font-display retro-referral__stat-label">FRIENDS REFERRED</span>
            </div>
            <div className="retro-referral__stat">
              <span className="retro-font-display retro-bold retro-referral__stat-value">
                ${REFERRAL_USER.earnedTotal.toFixed(0)}
              </span>
              <span className="retro-font-display retro-referral__stat-label">TOTAL EARNED</span>
            </div>
            <div className="retro-referral__stat">
              <span className="retro-font-display retro-bold retro-referral__stat-value">
                ${REFERRAL_USER.pendingRewards.toFixed(0)}
              </span>
              <span className="retro-font-display retro-referral__stat-label">PENDING</span>
            </div>
          </div>

          {/* Reward Tiers */}
          <h2 className="retro-font-display retro-bold retro-page-shell__title">REWARD TIERS</h2>
          <div className="retro-referral__tiers">
            {REFERRAL_TIERS.map((tier) => {
              const achieved = REFERRAL_USER.totalReferred >= tier.friends;
              return (
                <div
                  key={tier.friends}
                  className={`retro-referral__tier-card ${achieved ? 'retro-referral__tier-card--achieved' : ''}`}
                >
                  <span className="retro-referral__tier-icon" aria-hidden="true">{tier.icon}</span>
                  <h3 className="retro-font-display retro-bold retro-referral__tier-friends">
                    {tier.friends} FRIEND{tier.friends > 1 ? 'S' : ''}
                  </h3>
                  <p className="retro-font-body retro-referral__tier-reward">{tier.reward}</p>
                  {achieved && (
                    <CheckCircle size={20} weight="fill" color="var(--color-success)" aria-label="Achieved" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Referral History */}
          <div className="retro-referral__history">
            <h3 className="retro-font-display retro-bold retro-referral__history-title">
              REFERRAL LOG
            </h3>
            <ul className="retro-referral__history-list">
              {REFERRAL_USER.referrals.map((ref, idx) => (
                <li key={idx} className="retro-referral__history-item">
                  <span className="retro-font-body">{ref.name}</span>
                  <span className="retro-font-body">{ref.date}</span>
                  <span className="retro-font-display retro-bold">+${ref.reward}</span>
                  <span className={`retro-font-display retro-referral__history-status retro-referral__history-status--${ref.status}`}>
                    {ref.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <BottomGridRetro />
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

PageReferralRetro.displayName = 'PageReferralRetro';