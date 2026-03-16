/**
 * PageEventsRetro
 *
 * "PlayPocket" FSE theme - Events listing page.
 * In-store and online events with RSVP functionality.
 * WCAG AA 2.2 compliant.
 *
 * @route /events
 */

import { useState } from 'react';
import { Link } from 'react-router';
import { CalendarBlank as Calendar, MapPin, Clock, Users, Ticket } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { EVENTS } from '../../data/newPages';
import { toast } from 'sonner@2.0.3';

export const PageEventsRetro = () => {
  const [rsvps, setRsvps] = useState<Set<string>>(new Set());

  // Google Fonts loading moved to RootLayout.

  const handleRsvp = (event: typeof EVENTS[0]) => {
    if (event.spotsLeft === 0) {
      toast.error('This event is sold out!', { duration: 2000 });
      return;
    }
    setRsvps((prev) => {
      const next = new Set(prev);
      if (next.has(event.id)) {
        next.delete(event.id);
        toast.success('RSVP cancelled.', { duration: 2000 });
      } else {
        next.add(event.id);
        toast.success(`RSVP confirmed for ${event.title}!`, { duration: 3000, position: 'bottom-right' });
      }
      return next;
    });
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-page-shell">
          <div className="retro-page-shell__header">
            <Ticket size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                UPCOMING EVENTS
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Workshops, tournaments, launches, and meetups. Join the community IRL.
              </p>
            </div>
          </div>

          <div className="retro-events__grid" role="list">
            {EVENTS.map((event) => {
              const isFull = event.spotsLeft === 0;
              const hasRsvp = rsvps.has(event.id);
              const spotsPercent = ((event.totalSpots - event.spotsLeft) / event.totalSpots) * 100;
              const isLow = event.spotsLeft > 0 && event.spotsLeft <= 10;

              return (
                <article key={event.id} className="retro-events__card" role="listitem">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="retro-events__card-image"
                    loading="lazy"
                  />
                  <div className="retro-events__card-body">
                    <span className={`retro-font-display retro-events__card-type ${event.type === 'Online' ? 'retro-events__card-type--online' : ''}`}>
                      {event.type}
                    </span>
                    <h2 className="retro-font-display retro-bold retro-events__card-title">
                      {event.title}
                    </h2>
                    <p className="retro-font-body retro-events__card-desc">
                      {event.description}
                    </p>

                    <div className="retro-events__card-meta">
                      <span className="retro-events__card-meta-item">
                        <Calendar size={16} weight="bold" aria-hidden="true" />
                        <span className="retro-font-body">{event.date}</span>
                      </span>
                      <span className="retro-events__card-meta-item">
                        <Clock size={16} weight="bold" aria-hidden="true" />
                        <span className="retro-font-body">{event.time}</span>
                      </span>
                      <span className="retro-events__card-meta-item">
                        <MapPin size={16} weight="bold" aria-hidden="true" />
                        <span className="retro-font-body">{event.location}</span>
                      </span>
                    </div>

                    {/* Capacity Bar */}
                    <div
                      className="retro-achievements__progress-bar"
                      role="progressbar"
                      aria-valuenow={event.totalSpots - event.spotsLeft}
                      aria-valuemin={0}
                      aria-valuemax={event.totalSpots}
                      aria-label={`${event.totalSpots - event.spotsLeft} of ${event.totalSpots} spots taken`}
                    >
                      <div
                        className="retro-achievements__progress-fill"
                        style={{ width: `${spotsPercent}%` }}
                      />
                    </div>

                    <div className="retro-events__card-footer">
                      <span className={`retro-font-display retro-events__card-spots ${isLow ? 'retro-events__card-spots--low' : ''} ${isFull ? 'retro-events__card-spots--full' : ''}`}>
                        <Users size={14} weight="bold" aria-hidden="true" />{' '}
                        {isFull ? 'SOLD OUT' : `${event.spotsLeft} spots left`}
                      </span>
                      <button
                        onClick={() => handleRsvp(event)}
                        disabled={isFull && !hasRsvp}
                        className={`retro-btn ${hasRsvp ? 'retro-btn--secondary' : 'retro-btn--primary'} retro-font-display retro-bold`}
                      >
                        {hasRsvp ? 'CANCEL RSVP' : isFull ? 'SOLD OUT' : 'RSVP NOW'}
                      </button>
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

PageEventsRetro.displayName = 'PageEventsRetro';