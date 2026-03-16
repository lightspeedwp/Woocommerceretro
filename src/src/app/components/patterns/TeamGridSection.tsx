import React from 'react';
import { Envelope as Mail, LinkedinLogo as Linkedin, TwitterLogo as Twitter } from '../../utils/phosphor-compat';
import { Typography } from '../common/Typography';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

interface TeamGridSectionProps {
  members: TeamMember[];
  heading?: string;
  description?: string;
  columns?: { mobile?: 1 | 2; tablet?: 2 | 3; desktop?: 3 | 4 };
  className?: string;
}

/**
 * TeamGridSection Pattern Component
 */
export const TeamGridSection = ({
  members,
  heading = 'Meet Our Team',
  description,
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  className = '',
}: TeamGridSectionProps) => {
  const mobile = columns.mobile || 1;
  const tablet = columns.tablet || 2;
  const desktop = columns.desktop || 3;

  return (
    <div className={className}>
      {(heading || description) && (
        <div className="wp-team-section__header">
          {heading && <Typography variant="h2" className="wp-team-section__title">{heading}</Typography>}
          {description && <Typography variant="p" className="wp-team-section__description">{description}</Typography>}
        </div>
      )}
      <div className={`wp-team-grid wp-team-grid--cols-${mobile} wp-team-grid--md-cols-${tablet} wp-team-grid--lg-cols-${desktop}`}>
        {members.map((member) => (
          <div key={member.id} className="wp-team-member">
            <div className="wp-team-member__image-wrapper">
              <img src={member.image} alt={member.name} className="wp-team-member__image" />
            </div>
            <Typography variant="h3" className="wp-team-member__name">{member.name}</Typography>
            <div className="wp-team-member__role">{member.role}</div>
            {member.bio && (
              <Typography variant="p" className="wp-team-member__bio"><small>{member.bio}</small></Typography>
            )}
            {(member.email || member.linkedin || member.twitter) && (
              <div className="wp-team-member__social">
                {member.email && (
                  <a href={`mailto:${member.email}`} className="wp-team-member__social-link" aria-label={`Email ${member.name}`}>
                    <Mail size={18} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="wp-team-member__social-link" aria-label={`${member.name}'s LinkedIn`}>
                    <Linkedin size={18} />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="wp-team-member__social-link" aria-label={`${member.name}'s Twitter`}>
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}