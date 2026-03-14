/**
 * BlogMegaMenu - Funky Redesign
 * 3-column: formats | topics | latest posts
 * Glassmorphism, neon accents, Phosphor icons.
 */
import React from 'react';
import { Link } from 'react-router';
import { Article, Microphone, VideoCamera, Images, ChatDots, TagSimple, ArrowRight } from '@phosphor-icons/react';
import { posts, mediaItems } from '../../data/posts';
import { MegaMenuWrapper } from './MegaMenuWrapper';

interface MegaLink {
  title: string;
  href: string;
  Icon: React.ElementType;
  desc?: string;
  badge?: string;
}

const formatLinks: MegaLink[] = [
  { title: 'All Posts', href: '/blog', Icon: Article, desc: 'Browse everything' },
  { title: 'Podcasts', href: '/blog/format/audio', Icon: Microphone, desc: 'Audio conversations', badge: 'new' },
  { title: 'Videos', href: '/blog/format/video', Icon: VideoCamera, desc: 'Watch tutorials' },
  { title: 'Gallery', href: '/blog/format/gallery', Icon: Images, desc: 'Visual stories' },
  { title: 'Updates', href: '/blog/format/aside', Icon: ChatDots, desc: 'Quick status updates' }
];

const topicLinks: MegaLink[] = [
  { title: 'Development', href: '/blog/category/development', Icon: TagSimple },
  { title: 'Design', href: '/blog/category/design', Icon: TagSimple },
  { title: 'News', href: '/blog/category/news', Icon: TagSimple }
];

const renderLink = (link: MegaLink) => {
  const hasDesc = !!link.desc;
  return (
    <Link key={link.title} to={link.href} className="funky-mega__link">
      <span className="funky-mega__link-icon">
        <link.Icon size={16} weight="duotone" />
      </span>
      {hasDesc ? (
        <span className="funky-mega__link-text">
          <span className="funky-mega__link-label">{link.title}</span>
          <span className="funky-mega__link-desc">{link.desc}</span>
        </span>
      ) : (
        <span className="funky-mega__link-label">{link.title}</span>
      )}
      {link.badge && (
        <span className={`funky-mega__badge funky-mega__badge--${link.badge}`}>
          {link.badge === 'new' ? 'New' : link.badge}
        </span>
      )}
    </Link>
  );
};

export const BlogMegaMenu = () => {
  const recentPosts = posts.slice(0, 3);

  const renderContent = (closeMenu: () => void) => (
    <div className="wp-mega-menu__content">
      <div className="funky-mega__orb funky-mega__orb--cyan" style={{ top: '-70px', right: '-50px' }} />
      <div className="funky-mega__orb funky-mega__orb--pink" style={{ bottom: '-60px', left: '-40px' }} />
      <div className="funky-mega__inner funky-mega__inner--blog">
        {/* Formats column */}
        <div className="funky-mega__column funky-mega__column--bordered">
          <h4 className="funky-mega__title">Formats</h4>
          <div>{formatLinks.map(renderLink)}</div>
        </div>

        {/* Topics column */}
        <div className="funky-mega__column funky-mega__column--bordered">
          <h4 className="funky-mega__title">Topics</h4>
          <div>{topicLinks.map(renderLink)}</div>
        </div>

        {/* Latest posts column */}
        <div className="funky-mega__column">
          <h4 className="funky-mega__title">Latest</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
            {recentPosts.map((post) => {
              const media = post.featured_media ? mediaItems[post.featured_media] : null;
              const imageUrl = media ? media.source_url : '';

              return (
                <Link key={post.id} to={post.link} className="funky-mega__post">
                  <div className="funky-mega__post-img-wrap">
                    {imageUrl ? (
                      <img src={imageUrl} alt={post.title.rendered} loading="lazy" />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Article size={24} weight="duotone" />
                      </div>
                    )}
                  </div>
                  <span className="funky-mega__post-cat">{post.format || 'article'}</span>
                  <h5 className="funky-mega__post-title">
                    {post.title.rendered || 'Untitled Post'}
                  </h5>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="funky-mega__footer">
        <Link to="/blog" className="funky-mega__footer-link" onClick={closeMenu}>
          <span>View all posts</span>
          <ArrowRight size={14} weight="bold" />
        </Link>
      </div>
    </div>
  );

  return (
    <MegaMenuWrapper
      triggerLabel="Blog"
      triggerHref="/blog"
      renderContent={renderContent}
    />
  );
}

BlogMegaMenu.displayName = 'BlogMegaMenu';