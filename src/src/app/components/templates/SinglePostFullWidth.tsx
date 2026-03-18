import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { Tag, TwitterLogo, FacebookLogo, LinkedinLogo, LinkBreak, Clock } from '../../utils/phosphor-compat';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';
import { PostMeta } from '../patterns/PostMeta';
import { PostNavigation } from '../patterns/PostNavigation';
import { RelatedPosts } from '../patterns/RelatedPosts';
import { NewsletterCTA } from '../patterns/NewsletterCTA';
import { posts, resolvedPosts, getResolvedPostBySlug } from '../../data/posts';
import { copyToClipboard } from '../../utils/clipboard';

/**
 * SinglePostFullWidth Template — Funky Redesign
 *
 * Full-width blog post template optimized for longform content.
 *
 * @template
 */

interface ShareButtonProps {
  href?: string;
  label: string;
  icon: React.ReactNode;
  shareUrl: string;
}

const ShareButton = ({ href, label, icon, shareUrl }: ShareButtonProps) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="single-post-fw__share-btn"
        aria-label={label}
      >
        {icon}
      </a>
    );
  }
  return (
    <button
      onClick={() => copyToClipboard(shareUrl)}
      className="single-post-fw__share-btn"
      aria-label={label}
    >
      {icon}
    </button>
  );
}

export const SinglePostFullWidth = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    const foundPost = getResolvedPostBySlug(slug || '') || null;
    setTimeout(() => {
      setPost(foundPost);
      setLoading(false);
    }, 300);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="single-post-fw__progress">
          <div className="single-post-fw__progress-bar" style={{ '--reading-progress': '0%' } as React.CSSProperties} />
        </div>
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
          <Heading level="2">Post not found</Heading>
          <p>The article you are looking for does not exist.</p>
          <Link to="/blog" className="blog-archive__empty-cta">Return to Blog</Link>
        </div>
      </Layout>
    );
  }

  const currentIndex = resolvedPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? resolvedPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < resolvedPosts.length - 1 ? resolvedPosts[currentIndex + 1] : null;

  const wordCount = post.content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  const shareTitle = post.title;

  const shareLinks = [
    { href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, label: 'Share on Twitter', icon: <TwitterLogo size={18} weight="fill" /> },
    { href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, label: 'Share on Facebook', icon: <FacebookLogo size={18} weight="fill" /> },
    { href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`, label: 'Share on LinkedIn', icon: <LinkedinLogo size={18} weight="fill" /> },
    { href: undefined, label: 'Copy link', icon: <LinkBreak size={18} weight="duotone" /> },
  ];

  return (
    <Layout>
      <div className="single-post-fw__progress">
        <div className="single-post-fw__progress-bar" style={{ '--reading-progress': `${readingProgress}%` } as React.CSSProperties} />
      </div>
      <article className="single-post-fw">
        <header className="single-post-fw__header">
          <div className="single-post-fw__categories">
            {post.categories.map((cat: any, i: number) => (
              <span key={cat.slug}>
                <Link to={`/blog/category/${cat.slug}`} className="single-post-fw__category-link">{cat.name}</Link>
                {i < post.categories.length - 1 ? <span className="single-post__category-sep">&bull;</span> : null}
              </span>
            ))}
          </div>
          <h1 className="single-post-fw__title">{post.title}</h1>
          <p className="single-post-fw__excerpt">{post.excerpt}</p>
          <div className="single-post-fw__meta-row">
            <PostMeta
              author={post.author}
              authorSlug={post.authorSlug}
              date={post.date}
              commentCount={post.comments?.length || 0}
              postSlug={post.slug}
            />
            <span className="single-post-fw__reading-time">
              <Clock size={16} weight="duotone" aria-hidden="true" />
              <small>{`${readingTime} min read`}</small>
            </span>
          </div>
          <div className="single-post-fw__share-mobile">
            <small className="single-post-fw__share-label">Share:</small>
            {shareLinks.map((link) => (
              <ShareButton key={link.label} href={link.href} label={link.label} icon={link.icon} shareUrl={shareUrl} />
            ))}
          </div>
        </header>
        <div className="single-post-fw__featured">
          <div className="single-post-fw__featured-image">
            <img src={post.featuredImage} alt={post.title} loading="lazy" />
          </div>
        </div>
        <div className="single-post-fw__share-floating">
          <div className="single-post-fw__share-group">
            <span className="single-post-fw__share-label">Share</span>
            {shareLinks.map((link) => (
              <ShareButton key={link.label} href={link.href} label={link.label} icon={link.icon} shareUrl={shareUrl} />
            ))}
          </div>
        </div>
        <div className="single-post-fw__content">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        {post.tags.length > 0 && (
          <div className="single-post-fw__tags">
            <Tag size={18} weight="duotone" className="single-post__tags-icon" aria-hidden="true" />
            <span className="sr-only">Tagged:</span>
            <span className="single-post-fw__tags-label">Tagged:</span>
            {post.tags.map((tag: any) => (
              <Link key={tag.slug} to={`/blog/tag/${tag.slug}`} className="single-post__tag">{tag.name}</Link>
            ))}
          </div>
        )}
        <div className="single-post-fw__nav">
          <PostNavigation prevPost={prevPost} nextPost={nextPost} />
        </div>
      </article>
      <Container>
        <RelatedPosts currentPost={post} allPosts={posts} maxPosts={3} />
      </Container>
      <Container>
        <NewsletterCTA variant="compact" className="single-post-fw__newsletter" />
      </Container>
      <section id="comments" className="blog-comments" aria-labelledby="comments-heading-fw">
        <h3 id="comments-heading-fw" className="blog-comments__title">
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
                <label htmlFor="fw-comment-name" className="wp-block-form-label">Name</label>
                <input type="text" id="fw-comment-name" className="wp-block-input funky-input-glow" required />
              </div>
              <div className="wp-block-form-item">
                <label htmlFor="fw-comment-email" className="wp-block-form-label">Email</label>
                <input type="email" id="fw-comment-email" className="wp-block-input funky-input-glow" required />
              </div>
            </div>
            <div className="wp-block-form-item">
              <label htmlFor="fw-comment-body" className="wp-block-form-label">Comment</label>
              <textarea id="fw-comment-body" rows={4} className="wp-block-textarea funky-input-glow" required />
            </div>
            <button type="submit" className="wp-block-button__link wp-element-button blog-comments__form-submit funky-spring-hover">
              Post Comment
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}