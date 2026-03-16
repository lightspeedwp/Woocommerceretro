/**
 * LatestVideoPost Block
 *
 * Displays the most recent video post as a compact card with play overlay.
 * Drop into homepage, blog archive, or sidebar.
 *
 * BEM block: .retro-latest-video
 * @block
 */
import React from 'react';
import { Link } from 'react-router';
import { Play, Clock } from '../../../utils/phosphor-compat';
import { getLatestVideo } from '../../../data/videos';

export const LatestVideoPost = () => {
  const video = getLatestVideo();
  if (!video) return null;

  const viewsFormatted = video.views >= 1000
    ? (video.views / 1000).toFixed(1) + 'K'
    : String(video.views);

  return (
    <article className="retro-latest-video">
      <div className="retro-latest-video__label retro-font-display retro-bold">
        <Play weight="fill" size={14} /> LATEST VIDEO
      </div>
      <Link to="/blog/format/video" className="retro-latest-video__link">
        <div className="retro-latest-video__image-wrap">
          <img
            src={video.featuredImage}
            alt=""
            className="retro-latest-video__image"
            loading="lazy"
          />
          <div className="retro-latest-video__play-overlay">
            <Play weight="fill" size={32} />
          </div>
          <span className="retro-latest-video__duration retro-font-display retro-bold">
            <Clock weight="bold" size={10} /> {video.duration}
          </span>
        </div>
        <div className="retro-latest-video__body">
          <h3 className="retro-latest-video__title retro-font-display retro-bold">
            {video.title}
          </h3>
          <p className="retro-latest-video__excerpt retro-font-body">
            {video.excerpt.length > 100 ? video.excerpt.substring(0, 100) + '...' : video.excerpt}
          </p>
          <div className="retro-latest-video__stats retro-font-display">
            <span>{viewsFormatted} views</span>
            <span>{video.date}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};
