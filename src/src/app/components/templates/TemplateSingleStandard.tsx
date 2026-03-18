import React from 'react';
import { useParams } from 'react-router';
import { Tag, Calendar as CalendarIcon, User, Chat as MessageSquare } from '../../utils/phosphor-compat';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { getPostBySlug, getMediaSource } from '../../data/posts';
import { postCategories } from '../../data/categories';
import { tags } from '../../data/tags';
import { getUserById } from '../../data/users';

/**
 * TemplateSingleStandard — Standard Blog Post Format
 *
 * Funky Phase 6 treatment: full-bleed hero with deep gradient overlay,
 * neon gradient category badges, glow tag pills on hover.
 *
 * **CSS:** `/src/styles/sections/blog-funky.css` (Section 14)
 */
export const TemplateSingleStandard = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug || '');

  if (!post) return <div className="single-post__not-found">Post not found</div>;

  const author = getUserById(post.author);
  const authorName = author ? author.name : 'Unknown Author';

  return (
    <Layout>
      <article>
        {/* Hero with featured image */}
        {post.featured_media > 0 && (
          <div className="single-standard__hero">
            <img
              src={getMediaSource(post.featured_media)}
              alt={post.title.rendered}
              className="single-standard__hero-img"
            />
            <div className="single-standard__hero-overlay" aria-hidden="true" />
            <Container>
              <div className="single-standard__hero-content">
                <div className="single-standard__categories">
                  {post.categories.map((catId) => {
                    const category = postCategories.find((c) => c.id === catId);
                    return category ? (
                      <span key={catId} className="single-standard__category-badge">
                        {category.name}
                      </span>
                    ) : null;
                  })}
                </div>
                <h1 className="single-standard__hero-title">
                  {post.title.rendered}
                </h1>
                <div className="single-standard__hero-meta">
                  <span className="single-standard__hero-meta-item">
                    <User size={16} aria-hidden="true" /> {authorName}
                  </span>
                  <span className="single-standard__hero-meta-item">
                    <CalendarIcon size={16} aria-hidden="true" /> {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Container>
          </div>
        )}

        {/* Content */}
        <section className="single-standard__content">
          <Container>
            <div
              className="single-standard__body"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="single-standard__tags">
                <div className="single-standard__tags-label">
                  <Tag size={16} aria-hidden="true" />
                  <span>Tags</span>
                </div>
                <div className="single-standard__tags-list">
                  {post.tags.map((tagId) => {
                    const tag = tags.find((t) => t.id === tagId);
                    return tag ? (
                      <span key={tagId} className="single-standard__tag">
                        {tag.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* Discussion */}
            <div className="single-standard__discussion">
              <div className="single-standard__discussion-header">
                <MessageSquare size={20} />
                <Heading level="3">Discussion</Heading>
              </div>
              <div className="single-standard__discussion-empty">
                <p>Comments are closed for this post.</p>
              </div>
            </div>
          </Container>
        </section>
      </article>
    </Layout>
  );
}