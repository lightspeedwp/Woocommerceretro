/**
 * PageNewReleasesRetro
 *
 * "PlayPocket" FSE theme - New Releases Calendar / Pre-Orders page.
 * Upcoming product drops with countdown timers, retro calendar grid.
 * WCAG AA 2.2 compliant.
 *
 * @route /new-releases
 * @route /pre-orders
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { CalendarBlank as Calendar, Bell, Clock, Rocket } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { NEW_RELEASES } from '../../data/newPages';
import { toast } from 'sonner@2.0.3';

const getCountdown = (dateStr: string) => {
  const target = new Date(dateStr).getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  return { days, hours, mins, secs };
};

export const PageNewReleasesRetro = () => {
  const [now, setNow] = useState(Date.now());

  // Google Fonts loading moved to RootLayout.

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <Link to="/shop" className="retro-breadcrumb-link">SHOP</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">NEW RELEASES</span>
        </div>

        <div className="retro-page-shell">
          <div className="retro-page-shell__header">
            <Rocket size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                INCOMING DROPS
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Upcoming releases and pre-order exclusives. Be first in line!
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="retro-releases__timeline" role="list">
            {NEW_RELEASES.map((item) => {
              const cd = getCountdown(item.releaseDate);
              return (
                <article key={item.id} className="retro-releases__card" role="listitem">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="retro-releases__card-image"
                    loading="lazy"
                  />
                  <div className="retro-releases__card-body">
                    <span className="retro-font-display retro-releases__card-category">
                      {item.category}
                    </span>
                    <h2 className="retro-font-display retro-bold retro-releases__card-name">
                      {item.name}
                    </h2>
                    <p className="retro-font-body retro-releases__card-desc">
                      {item.description}
                    </p>

                    {/* Countdown */}
                    <div className="retro-releases__countdown" aria-label={`Launches in ${cd.days} days`}>
                      <div className="retro-releases__countdown-unit">
                        <span className="retro-font-display retro-bold retro-releases__countdown-num">{cd.days}</span>
                        <span className="retro-font-display retro-releases__countdown-label">DAYS</span>
                      </div>
                      <div className="retro-releases__countdown-unit">
                        <span className="retro-font-display retro-bold retro-releases__countdown-num">{cd.hours}</span>
                        <span className="retro-font-display retro-releases__countdown-label">HRS</span>
                      </div>
                      <div className="retro-releases__countdown-unit">
                        <span className="retro-font-display retro-bold retro-releases__countdown-num">{cd.mins}</span>
                        <span className="retro-font-display retro-releases__countdown-label">MIN</span>
                      </div>
                      <div className="retro-releases__countdown-unit">
                        <span className="retro-font-display retro-bold retro-releases__countdown-num">{cd.secs}</span>
                        <span className="retro-font-display retro-releases__countdown-label">SEC</span>
                      </div>
                    </div>

                    <div className="retro-releases__card-meta">
                      <span className="retro-font-display retro-bold retro-releases__card-price">
                        ${item.price.toFixed(2)}
                      </span>
                      <span className="retro-font-display retro-releases__card-date">
                        <Calendar size={14} weight="bold" aria-hidden="true" /> {item.releaseDate}
                      </span>
                      {item.status === 'pre-order' ? (
                        <span className="retro-font-display retro-releases__status-badge retro-releases__status-badge--preorder">
                          PRE-ORDER
                        </span>
                      ) : (
                        <span className="retro-font-display retro-releases__status-badge retro-releases__status-badge--coming">
                          COMING SOON
                        </span>
                      )}
                      {item.preOrderCount > 0 && (
                        <span className="retro-font-body retro-releases__preorder-count">
                          {item.preOrderCount} pre-ordered
                        </span>
                      )}
                    </div>

                    <div className="retro-releases__card-meta">
                      {item.status === 'pre-order' ? (
                        <button
                          onClick={() => handlePreOrder(item.name)}
                          className="retro-btn retro-btn--signal retro-font-display retro-bold"
                        >
                          <Clock size={16} weight="bold" aria-hidden="true" /> PRE-ORDER NOW
                        </button>
                      ) : (
                        <button
                          onClick={() => handleNotify(item.name)}
                          className="retro-btn retro-btn--secondary retro-font-display retro-bold"
                        >
                          <Bell size={16} weight="bold" aria-hidden="true" /> NOTIFY ME
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <BottomGridRetro />
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

PageNewReleasesRetro.displayName = 'PageNewReleasesRetro';