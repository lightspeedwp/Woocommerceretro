import React from 'react';
import { Envelope as Mail, LinkedinLogo as Linkedin, TwitterLogo as Twitter } from '@phosphor-icons/react';
import * as TypographyModule from '../common/Typography';

var Typography = TypographyModule.Typography;

// TeamMember structure
// - id: string
// - name: string
// - role: string
// - bio?: string
// - image: string
// - email?: string
// - linkedin?: string
// - twitter?: string

// TeamGridSectionProps structure
// - members: TeamMember[]
// - heading?: string
// - description?: string
// - columns?: { mobile?: 1 | 2, tablet?: 2 | 3, desktop?: 3 | 4 }
// - className?: string

/**
 * TeamGridSection Pattern Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declarations
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function TeamGridSection(props) {
  var members = props.members;
  var heading = props.heading === undefined ? 'Meet Our Team' : props.heading;
  var description = props.description;
  var columns = props.columns || { mobile: 1, tablet: 2, desktop: 3 };
  var className = props.className || '';

  var mobile = columns.mobile || 1;
  var tablet = columns.tablet || 2;
  var desktop = columns.desktop || 3;

  var gridClasses = "wp-team-grid wp-team-grid--cols-" + mobile + " wp-team-grid--md-cols-" + tablet + " wp-team-grid--lg-cols-" + desktop;

  var header = (heading || description) ? React.createElement('div', { key: 'header', className: "wp-team-section__header" }, [
    heading ? React.createElement(Typography, { key: 'title', variant: "h2", className: "wp-team-section__title" }, heading) : null,
    description ? React.createElement(Typography, { key: 'desc', variant: "p", className: "wp-team-section__description" }, description) : null
  ]) : null;

  var items = members.map(function(member) {
    var socialLinks = [];
    if (member.email) {
      socialLinks.push(React.createElement('a', {
        key: 'email',
        href: 'mailto:' + member.email,
        className: "wp-team-member__social-link",
        'aria-label': 'Email ' + member.name
      }, React.createElement(Mail, { size: 18 })));
    }
    if (member.linkedin) {
      socialLinks.push(React.createElement('a', {
        key: 'linkedin',
        href: member.linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "wp-team-member__social-link",
        'aria-label': member.name + "'s LinkedIn"
      }, React.createElement(Linkedin, { size: 18 })));
    }
    if (member.twitter) {
      socialLinks.push(React.createElement('a', {
        key: 'twitter',
        href: member.twitter,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "wp-team-member__social-link",
        'aria-label': member.name + "'s Twitter"
      }, React.createElement(Twitter, { size: 18 })));
    }

    var social = socialLinks.length > 0 ? React.createElement('div', { 
      key: 'social', 
      className: "wp-team-member__social" 
    }, socialLinks) : null;

    return React.createElement('div', { key: member.id, className: "wp-team-member" }, [
      React.createElement('div', { key: 'img-wrap', className: "wp-team-member__image-wrapper" }, 
        React.createElement('img', { src: member.image, alt: member.name, className: "wp-team-member__image" })
      ),
      React.createElement(Typography, { key: 'name', variant: "h3", className: "wp-team-member__name" }, member.name),
      React.createElement('div', { key: 'role', className: "wp-team-member__role" }, member.role),
      member.bio ? React.createElement(Typography, { 
        key: 'bio', 
        variant: "p", 
        className: "wp-team-member__bio" 
      }, React.createElement('small', null, member.bio)) : null,
      social
    ]);
  });

  var grid = React.createElement('div', { key: 'grid', className: gridClasses }, items);

  return React.createElement('div', { className: className }, [header, grid]);
}