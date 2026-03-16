import React, { useEffect, useState } from 'react';
import { InstagramLogo as Instagram, Heart, ChatCircle as MessageCircle } from '../../utils/phosphor-compat';
import { fetchInstagramFeed } from '../../services/instagram';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Container } from '../common/Container';
import { Heading } from '../common/Heading';

interface InstagramPost {
  id: string;
  image: string;
  caption?: string;
  url?: string;
  likes?: number;
  comments?: number;
}

interface InstagramFeedProps {
  heading?: string;
  description?: string;
  username?: string;
  limit?: number;
  columns?: 3 | 4 | 5 | 6;
  showFollowButton?: boolean;
  className?: string;
}

/**
 * Instagram Feed Pattern
 */
export const InstagramFeed = ({
  heading = 'Follow Us on Instagram',
  description,
  username = 'ourshop',
  limit = 12,
  columns = 6,
  showFollowButton = true,
  className = '',
}: InstagramFeedProps) => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchInstagramFeed(username, limit)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to load Instagram feed:', error);
        setLoading(false);
      });
  }, [username, limit]);

  if (loading) {
    return (
      <div className={`wp-instagram-feed wp-instagram-feed--loading ${className}`}>
        <p>Loading Instagram feed...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className={`wp-instagram-feed ${className}`}>
      <Container>
        {(heading || description || showFollowButton) && (
          <div className="wp-instagram-header">
            {heading && <Heading level={2} className="wp-instagram-title">{heading}</Heading>}
            {description && <p className="wp-instagram-description">{description}</p>}
            {showFollowButton && (
              <a
                href={`https://instagram.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="wp-instagram-follow-button"
              >
                <Instagram size={18} />
                <span>Follow @{username}</span>
              </a>
            )}
          </div>
        )}
        <div className={`wp-instagram-grid wp-instagram-grid--cols-${columns}`}>
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="wp-instagram-post"
            >
              <ImageWithFallback
                src={post.image}
                alt={post.caption || 'Instagram post'}
                className="wp-instagram-post-image"
              />
              <div className="wp-instagram-post-overlay">
                <div className="wp-instagram-stat">
                  <Heart size={20} fill="white" />
                  <span>{post.likes || 0}</span>
                </div>
                <div className="wp-instagram-stat">
                  <MessageCircle size={20} />
                  <span>{post.comments || 0}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}