import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { Tag } from '@phosphor-icons/react';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { PostMeta } from '../patterns/PostMeta';
import { PostNavigation } from '../patterns/PostNavigation';
import { BlogSidebar } from '../patterns/BlogSidebar';
import { RelatedPosts } from '../patterns/RelatedPosts';
import { NewsletterCTA } from '../patterns/NewsletterCTA';
import { posts, resolvedPosts, getResolvedPostBySlug } from '../../data/posts';

/**
 * SinglePostWithSidebar Template — Funky Redesign
 *
 * Single blog post with sidebar layout and related posts.
 *
 * @template
 */
export const SinglePostWithSidebar = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const foundPost = getResolvedPostBySlug(slug || '') || null;
    setTimeout(() => {
      setPost(foundPost);
      setLoading(false);
    }, 300);
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div className="blog-skeleton">
          <div className="blog-skeleton__bar blog-skeleton__bar--title" />
          <div className="blog-skeleton__bar blog-skeleton__bar--subtitle" />
          <div className="blog-skeleton__bar blog-skeleton__bar--image" />
          <div className="blog-skeleton__bar blog-skeleton__bar--text" />
          <div className="blog-skeleton__bar blog-skeleton__bar--text" />
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="blog-archive__empty">
          <h2>Post not found</h2>
          <p>The article you are looking for does not exist.</p>
          <Link to="/blog" className="blog-archive__empty-cta">Return to Blog</Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = resolvedPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? resolvedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < resolvedPosts.length - 1 ? resolvedPosts[currentIndex + 1] : null;

  return (
    <Layout>
      <div className="single-post-sb">
        <div className="single-post-sb__layout">
          <article>
            <header className="single-post-sb__article-header">
              <div className="single-post-sb__categories">
                {post.categories.map((cat: any, i: number) => (
                  <span key={cat.slug}>
                    <Link to={`/blog/category/${cat.slug}`} className="single-post__category-link">{cat.name}</Link>
                    {i < post.categories.length - 1 ? <span className="single-post__category-sep">&bull;</span> : null}
                  </span>
                ))}
              </div>
              <h1 className="single-post-sb__title">{post.title}</h1>
              <PostMeta
                author={post.author}
                authorSlug={post.authorSlug}
                date={post.date}
                commentCount={post.comments?.length || 0}
                postSlug={post.slug}
              />
            </header>
            <div className="single-post-sb__featured">
              <img src={post.featuredImage} alt="" loading="lazy" />
            </div>
            <div className="single-post-sb__content">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
            {post.tags.length > 0 && (
              <div className="single-post-sb__tags">
                <Tag size={18} weight="duotone" className="single-post-sb__tags-icon" aria-hidden="true" />
                <span className="sr-only">Tags:</span>
                <div className="single-post-sb__tags-list">
                  {post.tags.map((tag: any) => (
                    <Link key={tag.slug} to={`/blog/tag/${tag.slug}`} className="single-post__tag">{tag.name}</Link>
                  ))}
                </div>
              </div>
            )}
            <PostNavigation prevPost={prevPost} nextPost={nextPost} />
            <NewsletterCTA variant="compact" className="single-post-sb__newsletter" />
          </article>
          <BlogSidebar currentPostSlug={post.slug} />
        </div>
        <Container>
          <RelatedPosts currentPost={post} allPosts={posts} maxPosts={3} />
        </Container>
        <section id="comments" className="blog-comments" aria-labelledby="comments-heading-sb">
          <h3 id="comments-heading-sb" className="blog-comments__title">
            {`Comments (${post.comments?.length || 0})`}
          </h3>
          <div className="blog-comments__list">
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment: any) => (
                <div key={comment.id} className="blog-comments__item">
                  <div className="blog-comments__avatar" aria-hidden="true">{comment.author.charAt(0)}</div>
                  <div>
                    <div className="blog-comments__item-header">
                      <span className="blog-comments__author">{comment.author}</span>
                      <span className="blog-comments__date">{comment.date}</span>
                    </div>
                    <p className="blog-comments__text">{comment.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="blog-comments__empty">No comments yet. Be the first to share your thoughts!</p>
            )}
          </div>
          <div className="blog-comments__form-wrapper">
            <h4 className="blog-comments__form-title">Leave a Reply</h4>
            <form className="blog-comments__form wp-block-form" onSubmit={(e) => e.preventDefault()}>
              <div className="blog-comments__form-row">
                <div className="wp-block-form-item">
                  <label htmlFor="sb-comment-name" className="wp-block-form-label">Name</label>
                  <input type="text" id="sb-comment-name" className="wp-block-input funky-input-glow" required />
                </div>
                <div className="wp-block-form-item">
                  <label htmlFor="sb-comment-email" className="wp-block-form-label">Email</label>
                  <input type="email" id="sb-comment-email" className="wp-block-input funky-input-glow" required />
                </div>
              </div>
              <div className="wp-block-form-item">
                <label htmlFor="sb-comment-body" className="wp-block-form-label">Comment</label>
                <textarea id="sb-comment-body" rows={4} className="wp-block-textarea funky-input-glow" required />
              </div>
              <button type="submit" className="wp-block-button__link wp-element-button blog-comments__form-submit funky-spring-hover">
                Post Comment
              </button>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
}