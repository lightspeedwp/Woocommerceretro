/**
 * SocialRedirect Template — Funky Redesign (Phase 10)
 * 
 * Redirects users to social media platforms with a brief loading state.
 * Minimal funky treatment — utility page.
 */

import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { InstagramLogo, TwitterLogo, FacebookLogo, LinkedinLogo, PinterestLogo, YoutubeLogo } from '../../utils/phosphor-compat';

import { socialLinks } from '../../data/site';

const iconMap: Record<string, React.ComponentType<any>> = {
  Instagram: InstagramLogo,
  Twitter: TwitterLogo,
  Facebook: FacebookLogo,
  Linkedin: LinkedinLogo,
  Pin: PinterestLogo,
  Youtube: YoutubeLogo
};

export const SocialRedirect = () => {
  const { platform } = useParams<{ platform: string }>();
  const navigate = useNavigate();
  
  // Find the matching social link from data
  // Default to Instagram if not found or platform param missing
  const social = socialLinks.find((s) => s.id === platform) || socialLinks[0];
  const Icon = iconMap[social.icon] || InstagramLogo;

  useEffect(() => {
    // In a real app, this would redirect to your actual social media profile
    const timer = setTimeout(() => {
      // Redirect to external URL
      // window.location.href = social.url;
      
      // For prototype, go back to home
      navigate('/');
    }, 2000);

    return () => { clearTimeout(timer); };
  }, [navigate, social.url]);

  return (
    <div className="wp-redirect-page">
      <div className="wp-redirect-card funky-glass-panel">
        <div className="wp-redirect-icon-wrapper">
          <Icon size={64} weight="duotone" className="wp-redirect-icon funky-animate-float" />
        </div>
        
        <h1 className="wp-redirect-title funky-section__heading--gradient">
          {`Redirecting to ${social.platform}`}
        </h1>
        
        <p className="wp-redirect-text">
          {`Taking you to our ${social.platform} page...`}
        </p>
        
        <div className="wp-loading-dots">
          <div className="wp-loading-dot" />
          <div className="wp-loading-dot" />
          <div className="wp-loading-dot" />
        </div>

        <div className="wp-redirect-actions">
          <button
            onClick={() => navigate('/')}
            className="wp-link-simple"
            aria-label="Cancel redirect and return to homepage"
          >
            <small>Cancel and return to homepage</small>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SocialRedirect;