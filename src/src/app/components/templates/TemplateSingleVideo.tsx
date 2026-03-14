import React from 'react';
import { useParams } from 'react-router';
import { ShareNetwork as Share2, Calendar, User } from '@phosphor-icons/react';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { getPostBySlug } from '../../data/posts';
import { getUserById } from '../../data/users';

/**
 * TemplateSingleVideo — Video Post Format
 *
 * Funky Phase 6 treatment: dark cinema-style hero with embedded video,
 * gradient accent details, neon subscribe button.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css`
 */
export const TemplateSingleVideo = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) return <div className="single-post__not-found">Post not found</div>;

  const author = getUserById(post.author);
  const authorName = author?.name || 'Unknown Author';
  const videoUrl = post.format_data?.video_url;

  return (
    <Layout>
      <article className="single-video">
        {/* Video Player Header */}
        <section className="single-video__hero">
          <Container>
            <div className="single-video__wrapper">
              {/* Video Container */}
              <div className="single-video__player">
                {videoUrl ? (
                  <iframe
                    src={videoUrl}
                    className="single-video__iframe"
                    title={post.title.rendered}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="single-video__placeholder">
                    <span>Video Placeholder</span>
                  </div>
                )}
              </div>

              {/* Info Row */}
              <div className="single-video__info">
                <div className="single-video__info-left">
                  <h1 className="single-video__title">{post.title.rendered}</h1>
                  <div className="single-video__meta">
                    <span className="single-video__meta-item">
                      <Calendar size={16} aria-hidden="true" />{' '}
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="single-video__meta-item">
                      <User size={16} aria-hidden="true" />{' '}
                      {authorName}
                    </span>
                  </div>
                </div>

                <div className="single-video__actions">
                  <button className="single-video__subscribe-btn">Subscribe</button>
                  <button className="single-video__share-btn">
                    <Share2 size={18} aria-hidden="true" /> Share
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Content */}
        <section className="single-video__content">
          <Container>
            <div
              className="single-video__body"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </Container>
        </section>
      </article>
    </Layout>
  );
}