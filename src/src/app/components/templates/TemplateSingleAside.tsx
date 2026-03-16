import React from 'react';
import { useParams } from 'react-router';
import { Chat as MessageSquare, ThumbsUp, ShareNetwork as Share2 } from '../../utils/phosphor-compat';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { getPostBySlug } from '../../data/posts';

/**
 * TemplateSingleAside — Status Update / Aside Post Format
 *
 * Funky Phase 6 treatment: glassmorphism card with subtle glow,
 * neon cyan icon circle, gradient accent on hover interactions.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css` (Section 15)
 */
export const TemplateSingleAside = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) return <div className="single-post__not-found">Post not found</div>;

  return (
    <Layout>
      <article className="single-aside">
        <Container>
          <div className="single-aside__card">
            {/* Decorative background icon */}
            <div className="single-aside__bg-icon" aria-hidden="true">
              <MessageSquare size={200} strokeWidth={0.5} />
            </div>

            <div className="single-aside__content">
              <div className="single-aside__icon-circle">
                <MessageSquare size={32} />
              </div>

              <div className="single-aside__quote">
                &ldquo;{post.content.rendered.replace(/<[^>]*>/g, '')}&rdquo;
              </div>

              <div className="single-aside__footer">
                <span className="single-aside__date">
                  {new Date(post.date).toLocaleDateString()} at{' '}
                  {new Date(post.date).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <div className="single-aside__actions">
                  <button className="single-aside__action-btn" aria-label="Like">
                    <ThumbsUp size={20} />
                  </button>
                  <button className="single-aside__action-btn" aria-label="Share">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </Layout>
  );
}