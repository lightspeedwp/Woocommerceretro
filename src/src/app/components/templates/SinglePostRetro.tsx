/**
 * SinglePostRetro
 *
 * "PlayPocket" FSE theme — Single Blog Post.
 * Full retro redesign with scanline header, pixel-bordered images,
 * tag pills, author card, related posts, and breadcrumbs.
 * WCAG AA 2.2 compliant.
 */

import { Link, useParams } from 'react-router';
import { Clock, User, Tag, ArrowLeft, ArrowRight, Folder } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { BLOG_POSTS } from '../../data/blogData';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1696621629216-dfed30d4427d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080';

export const SinglePostRetro = () => {
  const { slug } = useParams<{ slug: string }>();
  const postIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = postIndex >= 0 ? BLOG_POSTS[postIndex] : null;

  if (!post) {
    return (
      <div className="retro-home theme-retro">
        <div className="retro-container">
          <HeaderRetro />
          <div className="retro-blog-404">
            <div className="retro-blog-404__icon" aria-hidden="true">?</div>
            <h1 className="retro-font-display retro-bold retro-blog-404__title">ERROR 404: LOG NOT FOUND</h1>
            <p className="retro-font-body retro-blog-404__desc">
              The requested data log could not be located in the archives.
            </p>
            <Link to="/blog" className="retro-btn retro-btn--primary retro-font-display retro-bold">
              <ArrowLeft weight="bold" size={14} /> RETURN TO ARCHIVE
            </Link>
          </div>
          <FooterRetro />
        </div>
      </div>
    );
  }

  const prevPost = postIndex > 0 ? BLOG_POSTS[postIndex - 1] : null;
  const nextPost = postIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[postIndex + 1] : null;

  /** Find 3 related posts from the same category */
  const relatedPosts = BLOG_POSTS
    .filter((p) => p.id !== post.id && p.categories.some((c) => post.categories.some((pc) => pc.slug === c.slug)))
    .slice(0, 3);

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-single-post" id="main-content">
          {/* Article Header */}
          <header className="retro-single-post__header">
            <div className="retro-single-post__cats">
              {post.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={'/blog/category/' + cat.slug}
                  className="retro-single-post__cat-pill retro-font-display retro-bold"
                >
                  <Folder weight="bold" size={12} /> {cat.name.toUpperCase()}
                </Link>
              ))}
            </div>
            <h1 className="retro-single-post__title retro-font-display retro-bold">
              {post.title}
            </h1>
            <div className="retro-single-post__meta">
              <Link
                to={'/blog/author/' + post.author.toLowerCase().replace(/\s+/g, '-')}
                className="retro-single-post__meta-item retro-font-display"
              >
                <User weight="bold" size={16} />
                <span>{post.author.toUpperCase()}</span>
              </Link>
              <span className="retro-single-post__meta-item retro-font-display">
                <Clock weight="bold" size={16} />
                <span>{post.date}</span>
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="retro-single-post__hero-img">
            <img
              src={post.featuredImage || FALLBACK_IMAGE}
              alt=""
              className="retro-single-post__img"
              loading="eager"
            />
            <div className="retro-single-post__img-scanline" aria-hidden="true" />
          </figure>

          {/* Post Content */}
          <article className="retro-single-post__content retro-font-body">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="retro-single-post__tags">
              <span className="retro-single-post__tags-label retro-font-display retro-bold">
                <Tag weight="bold" size={14} /> TAGS:
              </span>
              <div className="retro-single-post__tags-list">
                {post.tags.map((tag) => (
                  <Link
                    key={tag.slug}
                    to={'/blog/tag/' + tag.slug}
                    className="retro-single-post__tag retro-font-display"
                  >
                    #{tag.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Card */}
          <aside className="retro-single-post__author-card" aria-label="About the author">
            <div className="retro-single-post__author-avatar">
              <User size={36} weight="fill" />
            </div>
            <div className="retro-single-post__author-info">
              <h3 className="retro-font-display retro-bold retro-single-post__author-name">
                WRITTEN BY: {post.author.toUpperCase()}
              </h3>
              <p className="retro-font-body retro-single-post__author-bio">
                Contributing writer at PlayPocket. Covering the latest in retro gaming, culture, and community.
              </p>
              <Link
                to={'/blog/author/' + post.author.toLowerCase().replace(/\s+/g, '-')}
                className="retro-single-post__author-link retro-font-display retro-bold"
              >
                VIEW ALL POSTS <ArrowRight weight="bold" size={12} />
              </Link>
            </div>
          </aside>

          {/* Post Navigation */}
          <nav className="retro-single-post__nav" aria-label="Post navigation">
            {prevPost ? (
              <Link to={'/blog/' + prevPost.slug} className="retro-single-post__nav-link retro-single-post__nav-link--prev">
                <span className="retro-font-display retro-bold retro-single-post__nav-dir">
                  <ArrowLeft weight="bold" size={12} /> PREV LOG
                </span>
                <span className="retro-font-display retro-single-post__nav-title">{prevPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link to={'/blog/' + nextPost.slug} className="retro-single-post__nav-link retro-single-post__nav-link--next">
                <span className="retro-font-display retro-bold retro-single-post__nav-dir">
                  NEXT LOG <ArrowRight weight="bold" size={12} />
                </span>
                <span className="retro-font-display retro-single-post__nav-title">{nextPost.title}</span>
              </Link>
            ) : (
              <div />
            )}
          </nav>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="retro-single-post__related" aria-label="Related posts">
              <h2 className="retro-single-post__related-heading retro-font-display retro-bold">
                RELATED TRANSMISSIONS
              </h2>
              <div className="retro-single-post__related-grid">
                {relatedPosts.map((rp) => (
                  <article key={rp.id} className="retro-blog-card retro-blog-card--compact">
                    <Link to={'/blog/' + rp.slug} className="retro-blog-card__img-link">
                      <img src={rp.featuredImage || FALLBACK_IMAGE} alt="" className="retro-blog-card__img" loading="lazy" />
                    </Link>
                    <div className="retro-blog-card__body">
                      <span className="retro-blog-card__date retro-font-display">{rp.date}</span>
                      <h3 className="retro-blog-card__title retro-font-display retro-bold">
                        <Link to={'/blog/' + rp.slug}>{rp.title}</Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </main>

        <FooterRetro />
      </div>
    </div>
  );
};

SinglePostRetro.displayName = 'SinglePostRetro';