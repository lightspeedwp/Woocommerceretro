/**
 * SinglePost Component
 *
 * Full blog post view with comments section.
 * Maps to the WordPress `single.php` template.
 */

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Calendar, User, Tag, ChatCircle } from '../../utils/phosphor-compat';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { BLOG_POSTS } from '../../data/blogData';
import { Button } from '../blocks/design/Buttons';
import { Layout } from '../parts/Layout';

export const SinglePost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const foundPost = BLOG_POSTS.find((p) => p.slug === slug);

    const timer = setTimeout(() => {
      setPost(foundPost || null);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <Container className="blog-single blog-single--narrow">
          <div className="blog-single__skeleton">
            <div className="blog-single__skeleton-bar blog-single__skeleton-bar--title" />
            <div className="blog-skeleton__bar blog-skeleton__bar--subtitle" />
            <div className="blog-single__skeleton-bar blog-single__skeleton-bar--hero" />
            <div className="blog-single__skeleton-lines">
              <div className="blog-single__skeleton-bar blog-single__skeleton-bar--line" />
              <div className="blog-single__skeleton-bar blog-single__skeleton-bar--line" />
              <div className="blog-single__skeleton-bar blog-single__skeleton-bar--line-short" />
            </div>
          </div>
        </Container>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <Container className="blog-single__not-found">
          <Typography variant="h2">Post not found</Typography>
          <p className="blog-single__not-found-text">The article you are looking for does not exist.</p>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <article>
        <Container className="blog-single blog-single--wide">
          <header className="blog-single__header">
            <div className="blog-single__categories">
              {post.categories.map((cat: any, i: number) => (
                <span key={cat.slug}>
                  <Link to={`/blog/category/${cat.slug}`} className="blog-single__category-link">
                    {cat.name}
                  </Link>
                  {i < post.categories.length - 1 && (
                    <span className="blog-single__category-sep">&bull;</span>
                  )}
                </span>
              ))}
            </div>
            <Typography variant="h1" className="blog-single__title">{post.title}</Typography>
            <div className="blog-single__meta">
              <span className="blog-single__meta-item">
                <User size={16} weight="duotone" /> {post.author}
              </span>
              <span className="blog-single__meta-item">
                <Calendar size={16} weight="duotone" /> {post.date}
              </span>
              <span className="blog-single__meta-item">
                <ChatCircle size={16} weight="duotone" /> {post.comments?.length ?? 0} Comments
              </span>
            </div>
          </header>

          <div className="blog-single__featured">
            <img src={post.featuredImage} alt="" className="blog-single__featured-img" />
          </div>

          <div className="blog-single__content">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {post.tags.length > 0 && (
            <div className="blog-single__tags">
              <Tag size={18} weight="duotone" className="blog-single__tags-icon" />
              <span className="sr-only">Tags:</span>
              <div className="blog-single__tag-list">
                {post.tags.map((tag: any) => (
                  <Link key={tag.slug} to={`/blog/tag/${tag.slug}`} className="blog-single__tag">
                    <small>{tag.name}</small>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <section className="blog-single__comments" aria-labelledby="comments-heading">
            <Typography variant="h3" id="comments-heading" className="blog-single__comments-heading">
              Comments ({post.comments?.length ?? 0})
            </Typography>

            <div className="blog-single__comments-list">
              {post.comments?.length > 0 ? (
                post.comments.map((comment: any) => (
                  <div key={comment.id} className="blog-single__comment">
                    <div className="blog-single__comment-avatar">{comment.author.charAt(0)}</div>
                    <div className="blog-single__comment-body">
                      <div className="blog-single__comment-header">
                        <h4 className="blog-single__comment-author">{comment.author}</h4>
                        <span className="blog-single__comment-date">{comment.date}</span>
                      </div>
                      <p className="blog-single__comment-text">{comment.content}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="blog-single__no-comments">
                  No comments yet. Be the first to share your thoughts!
                </p>
              )}
            </div>

            <div className="blog-single__comment-form-wrapper">
              <Typography variant="h4" className="blog-single__comment-form-heading">Leave a Reply</Typography>
              <form className="blog-single__comment-form wp-block-form" onSubmit={(e) => e.preventDefault()}>
                <div className="blog-single__comment-form-grid">
                  <div className="wp-block-form-item">
                    <label htmlFor="comment-name" className="wp-block-form-label">Name</label>
                    <input type="text" id="comment-name" className="wp-block-input funky-input-glow" required />
                  </div>
                  <div className="wp-block-form-item">
                    <label htmlFor="comment-email" className="wp-block-form-label">Email</label>
                    <input type="email" id="comment-email" className="wp-block-input funky-input-glow" required />
                  </div>
                </div>
                <div className="wp-block-form-item">
                  <label htmlFor="comment-body" className="wp-block-form-label">Comment</label>
                  <textarea id="comment-body" rows={4} className="wp-block-textarea funky-input-glow" required />
                </div>
                <Button type="submit">Post Comment</Button>
              </form>
            </div>
          </section>
        </Container>
      </article>
    </Layout>
  );
}

export default SinglePost;