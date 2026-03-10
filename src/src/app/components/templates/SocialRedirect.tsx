/**
 * SocialRedirect Template — Funky Redesign (Phase 10)
 * 
 * Redirects users to social media platforms with a brief loading state.
 * Minimal funky treatment — utility page.
 */

import React from 'react';
import * as ReactRouterModule from 'react-router';
import { InstagramLogo, TwitterLogo, FacebookLogo, LinkedinLogo, PinterestLogo, YoutubeLogo } from '@phosphor-icons/react';

var useEffect = React.useEffect;
var useNavigate = ReactRouterModule.useNavigate;
var useParams = ReactRouterModule.useParams;

import * as SiteDataModule from '../../data/site';

var iconMap = {
  Instagram: InstagramLogo,
  Twitter: TwitterLogo,
  Facebook: FacebookLogo,
  Linkedin: LinkedinLogo,
  Pin: PinterestLogo,
  Youtube: YoutubeLogo
};
var socialLinks = SiteDataModule.socialLinks;

export default function SocialRedirect() {
  var params = useParams<{ platform: string }>();
  var platform = params.platform;
  var navigate = useNavigate();
  
  // Find the matching social link from data
  // Default to Instagram if not found or platform param missing
  var social = socialLinks.find(function(s) { return s.id === platform; }) || socialLinks[0];
  var Icon = iconMap[social.icon] || InstagramLogo;

  useEffect(function() {
    // In a real app, this would redirect to your actual social media profile
    var timer = setTimeout(function() {
      // Redirect to external URL
      // window.location.href = social.url;
      
      // For prototype, go back to home
      navigate('/');
    }, 2000);

    return function() { clearTimeout(timer); };
  }, [navigate, social.url]);

  return React.createElement('div', { className: "wp-redirect-page", style: { minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--wp--preset--color--base)' } },
    React.createElement('div', { className: "wp-redirect-card funky-glass-panel", style: { textAlign: 'center', padding: 'var(--wp--preset--spacing--60)', maxWidth: '400px', margin: '0 auto' } },
      React.createElement('div', { className: "wp-redirect-icon-wrapper", style: { marginBottom: 'var(--wp--preset--spacing--40)', color: 'var(--wp--preset--color--neon-pink)' } },
        React.createElement(Icon, { size: 64, weight: 'duotone', className: "wp-redirect-icon funky-animate-float" })
      ),
      
      React.createElement('h1', { className: "wp-redirect-title funky-section__heading--gradient", style: { marginBottom: 'var(--wp--preset--spacing--20)' } },
        "Redirecting to " + social.platform
      ),
      
      React.createElement('p', { className: "wp-redirect-text", style: { color: 'var(--wp--preset--color--muted-foreground)', marginBottom: 'var(--wp--preset--spacing--40)' } },
        "Taking you to our " + social.platform + " page..."
      ),
      
      React.createElement('div', { className: "wp-loading-dots", style: { display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: 'var(--wp--preset--spacing--40)' } },
        React.createElement('div', { className: "wp-loading-dot", style: { width: '12px', height: '12px', borderRadius: '50%', background: 'var(--wp--preset--color--neon-cyan)', animation: 'bounce 1.4s infinite ease-in-out both' } }),
        React.createElement('div', { className: "wp-loading-dot", style: { width: '12px', height: '12px', borderRadius: '50%', background: 'var(--wp--preset--color--neon-cyan)', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.16s' } }),
        React.createElement('div', { className: "wp-loading-dot", style: { width: '12px', height: '12px', borderRadius: '50%', background: 'var(--wp--preset--color--neon-cyan)', animation: 'bounce 1.4s infinite ease-in-out both', animationDelay: '0.32s' } })
      ),

      React.createElement('div', { className: "wp-redirect-actions" },
        React.createElement('button', {
          onClick: function() { navigate('/'); },
          className: "wp-link-simple",
          'aria-label': "Cancel redirect and return to homepage",
          style: { color: 'var(--wp--preset--color--foreground)', textDecoration: 'underline' }
        },
          React.createElement('small', null, "Cancel and return to homepage")
        )
      )
    )
  );
}