/**
 * LatestPodcastEpisode Block
 *
 * Displays the most recent podcast episode as a compact card.
 * Drop into homepage, blog archive, or sidebar.
 *
 * BEM block: .retro-latest-episode
 * @block
 */
import React from 'react';
import { Link } from 'react-router';
import { Headphones, Play } from '../../../utils/phosphor-compat';
import { getLatestEpisode } from '../../../data/podcasts';

export const LatestPodcastEpisode = () => {
  const episode = getLatestEpisode();
  if (!episode) return null;

  return (
    <article className="retro-latest-episode">
      <div className="retro-latest-episode__label retro-font-display retro-bold">
        <Headphones weight="bold" size={14} /> LATEST EPISODE
      </div>
      <Link to="/blog/format/audio" className="retro-latest-episode__link">
        <div className="retro-latest-episode__image-wrap">
          <img
            src={episode.featuredImage}
            alt={episode.title}
            className="retro-latest-episode__image"
            loading="lazy"
          />
          <div className="retro-latest-episode__play-badge">
            <Play weight="fill" size={16} />
          </div>
        </div>
        <div className="retro-latest-episode__body">
          <div className="retro-latest-episode__meta retro-font-display">
            <span className="retro-latest-episode__ep">EP {episode.episodeNumber}</span>
            <span className="retro-latest-episode__duration">{episode.duration}</span>
          </div>
          <h3 className="retro-latest-episode__title retro-font-display retro-bold">
            {episode.title}
          </h3>
          <p className="retro-latest-episode__excerpt retro-font-body">
            {episode.excerpt.length > 100 ? episode.excerpt.substring(0, 100) + '...' : episode.excerpt}
          </p>
          {episode.guests.length > 0 && (
            <div className="retro-latest-episode__guests retro-font-display">
              WITH: {episode.guests.join(', ')}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};