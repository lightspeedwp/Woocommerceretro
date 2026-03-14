import React from 'react';
import { useParams } from 'react-router';
import { Play, SkipBack, SkipForward, SpeakerHigh as Volume2, ShareNetwork as Share2, DownloadSimple as Download } from '@phosphor-icons/react';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { getPostBySlug, getMediaSource } from '../../data/posts';

/**
 * TemplateSingleAudio — Podcast / Audio Post Format
 *
 * Funky Phase 6 treatment: dark gradient hero with glassmorphism player,
 * neon accent controls, gradient progress bar.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css`
 */
export const TemplateSingleAudio = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) return <div className="single-post__not-found">Post not found</div>;

  const episodeNumber = post.format_data?.podcast_episode_number || 1;
  const seasonNumber = post.format_data?.podcast_season || 1;

  return (
    <Layout>
      <article className="single-audio">
        {/* Audio Player Hero */}
        <section className="single-audio__hero">
          <div className="single-audio__hero-bg" aria-hidden="true" />
          <Container>
            <div className="single-audio__player">
              {/* Cover Art */}
              <div className="single-audio__cover">
                <img
                  src={getMediaSource(post.featured_media)}
                  alt={post.title.rendered}
                  className="single-audio__cover-img"
                />
              </div>

              {/* Player Controls */}
              <div className="single-audio__controls">
                <div className="single-audio__meta">
                  <span className="single-audio__episode-label">
                    {`Season ${seasonNumber}, Episode ${episodeNumber}`}
                  </span>
                  <h1 className="single-audio__title">{post.title.rendered}</h1>
                  <p className="single-audio__excerpt">
                    {post.excerpt.rendered.replace(/<[^>]*>/g, '')}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="single-audio__progress">
                  <div className="single-audio__progress-track">
                    <div className="single-audio__progress-fill" />
                  </div>
                  <div className="single-audio__progress-times">
                    <span>12:45</span>
                    <span>45:30</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="single-audio__buttons">
                  <div className="single-audio__transport">
                    <button className="single-audio__transport-btn" aria-label="Skip back">
                      <SkipBack size={24} />
                    </button>
                    <button className="single-audio__play-btn" aria-label="Play">
                      <Play size={24} />
                    </button>
                    <button className="single-audio__transport-btn" aria-label="Skip forward">
                      <SkipForward size={24} />
                    </button>
                  </div>

                  <div className="single-audio__actions">
                    <button className="single-audio__transport-btn" aria-label="Volume">
                      <Volume2 size={20} />
                    </button>
                    <button className="single-audio__subscribe-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Show Notes */}
        <section className="single-audio__content">
          <Container>
            <div className="single-audio__toolbar">
              <div className="single-audio__toolbar-left">
                <button className="single-audio__action-btn">
                  <Share2 size={16} aria-hidden="true" /> Share
                </button>
                <button className="single-audio__action-btn">
                  <Download size={16} aria-hidden="true" /> Download MP3
                </button>
              </div>
              <span className="single-audio__date">
                {`Published ${new Date(post.date).toLocaleDateString()}`}
              </span>
            </div>

            <div className="single-audio__body">
              <h3>Show Notes</h3>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </Container>
        </section>
      </article>
    </Layout>
  );
}