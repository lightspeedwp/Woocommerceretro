import React from 'react';
import { InstagramLogo as Instagram, Heart, ChatCircle as MessageCircle } from '../../utils/phosphor-compat';
import { Button } from '../blocks/design/Buttons';
import { Typography } from '../common/Typography';

interface SocialPost {
  id: string;
  image: string;
  caption?: string;
  likes?: number;
  comments?: number;
  url?: string;
  timestamp?: string;
}

interface SocialMediaFeedProps {
  posts: SocialPost[];
  heading?: string;
  description?: string;
  instagramHandle?: string;
  instagramUrl?: string;
  columns?: { mobile?: number; tablet?: number; desktop?: number };
  showStats?: boolean;
  showCaptions?: boolean;
  maxPosts?: number;
  className?: string;
}

/**
 * SocialMediaFeed Pattern Component
 */
export const SocialMediaFeed = ({
  posts,
  heading = 'Follow Us on Instagram',
  description,
  instagramHandle,
  instagramUrl,
  columns = { mobile: 3, tablet: 4, desktop: 6 },
  showStats = true,
  showCaptions = false,
  maxPosts = 12,
  className = '',
}: SocialMediaFeedProps) => {
  const mobile = columns.mobile || 3;
  const tablet = columns.tablet || 4;
  const desktop = columns.desktop || 6;
  const displayPosts = posts.slice(0, maxPosts);

  const gridStyle = {
    '--social-cols-mobile': mobile,
    '--social-cols-tablet': tablet,
    '--social-cols-desktop': desktop,
  } as React.CSSProperties;

  return (
    <div className={className}>
      <div className="wp-social-feed__header">
        {heading && (
          <div className="wp-social-feed__heading-row">
            <Instagram size={28} className="wp-social-feed__heading-icon" aria-hidden="true" />
            <Typography variant="h2" className="wp-social-feed__title">{heading}</Typography>
          </div>
        )}
        {description && <Typography variant="p" className="wp-social-feed__description">{description}</Typography>}
        {instagramHandle && instagramUrl && (
          <Button
            variant="outline"
            size="default"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Instagram size={18} />}
            iconPosition="left"
          >
            Follow {instagramHandle}
          </Button>
        )}
      </div>
      <div className="wp-social-feed__grid" style={gridStyle}>
        {displayPosts.map((post) => (
          <a
            key={post.id}
            href={post.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="wp-social-feed__post"
          >
            <img
              src={post.image}
              alt={post.caption || 'Instagram post'}
              className="wp-social-feed__post-image"
              loading="lazy"
            />
            <div className="wp-social-feed__post-overlay">
              {showStats && (post.likes !== undefined || post.comments !== undefined) && (
                <div className="wp-social-feed__post-stats">
                  {post.likes !== undefined && (
                    <div className="wp-social-feed__stat">
                      <Heart size={20} fill="white" aria-hidden="true" />
                      <span>{post.likes}</span>
                    </div>
                  )}
                  {post.comments !== undefined && (
                    <div className="wp-social-feed__stat">
                      <MessageCircle size={20} aria-hidden="true" />
                      <span>{post.comments}</span>
                    </div>
                  )}
                </div>
              )}
              {showCaptions && post.caption && (
                <p className="wp-social-feed__caption"><small>{post.caption}</small></p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}