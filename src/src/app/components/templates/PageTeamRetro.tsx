/**
 * PageTeamRetro - Retro-Styled Team Page
 *
 * Team page with retro handheld gaming aesthetic.
 * Features leadership cards, department stats, and careers CTA.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Team member cards with avatar initials and glow effects
 * - Department statistics grid
 * - Careers call-to-action
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/team-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Briefcase, Users } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { teamMembers, departments, teamPageContent } from '../../data/team';

export const PageTeamRetro = () => {
  const [activeDept, setActiveDept] = useState('all');

  const filteredMembers = activeDept === 'all'
    ? teamMembers
    : teamMembers.filter((m) => m.department.toLowerCase() === activeDept.toLowerCase());

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero Section */}
        <HeroRetro
          titleLines={['MEET', 'OUR', 'TEAM']}
          highlight={teamMembers.length + ' PLAYERS'}
          description="The passionate people behind our products. A diverse team united by a shared commitment to quality."
          images={{
            main: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwZGl2ZXJzZSUyMG9mZmljZSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzczMzQyMTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub1: 'https://images.unsplash.com/photo-1759884247160-27b8465544b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwYnJhaW5zdG9ybWluZyUyMG1lZXRpbmclMjB3aGl0ZWJvYXJkfGVufDF8fHx8MTc3MzM0MjE0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
            sub2: 'https://images.unsplash.com/photo-1600508774764-4ce704363d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3dvcmtpbmclMjBzcGFjZSUyMG9mZmljZSUyMGludGVyaW9yJTIwZGVzaWdufGVufDF8fHx8MTc3MzM0MjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          }}
        />

        {/* Department Stats */}
        <section className="retro-section retro-section--stats" aria-label="Department statistics">
          <div className="retro-container">
            <div className="retro-stats-grid">
              {departments.filter((d) => d.id !== 'all').map((dept) => (
                <div key={dept.id} className="retro-stat">
                  <div className="retro-stat-value retro-font-display">{dept.count}</div>
                  <p className="retro-stat-label retro-font-body retro-uppercase">{dept.name.toUpperCase()}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Department Filter */}
        <section className="retro-section" aria-labelledby="team-members-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="team-members-heading" className="retro-font-display retro-bold retro-section-title">
                {teamPageContent.leadershipHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-section-desc">
                {teamPageContent.departmentsText}
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="retro-team-filters" role="group" aria-label="Filter by department">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  type="button"
                  className={`retro-team-filter-btn retro-font-display ${activeDept === (dept.id === 'all' ? 'all' : dept.name) ? 'retro-team-filter-btn--active' : ''}`}
                  onClick={() => setActiveDept(dept.id === 'all' ? 'all' : dept.name)}
                  aria-pressed={activeDept === (dept.id === 'all' ? 'all' : dept.name)}
                >
                  {dept.name.toUpperCase()} ({dept.count})
                </button>
              ))}
            </div>

            {/* Team Grid */}
            <div className="retro-grid retro-grid-3">
              {filteredMembers.map((member) => (
                <div key={member.id} className="retro-card retro-team-card">
                  <div className="retro-team-avatar">
                    <span className="retro-team-avatar-initials retro-font-display">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="retro-card__title retro-font-display retro-bold">
                    {member.name.toUpperCase()}
                  </h3>
                  <span className="retro-team-role retro-font-body">
                    {member.role}
                  </span>
                  {member.bio && (
                    <p className="retro-card__desc retro-font-body">
                      {member.bio}
                    </p>
                  )}
                  {member.expertise && (
                    <div className="retro-team-tags">
                      {member.expertise.map((skill: string, i: number) => (
                        <span key={i} className="retro-badge">{skill.toUpperCase()}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Join our team">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Briefcase size={64} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                {teamPageContent.ctaHeading.toUpperCase()}
              </h2>
              <p className="retro-font-body retro-cta-desc">
                {teamPageContent.ctaText}
              </p>
              <Link to="/about/careers" className="retro-btn retro-btn--primary retro-font-display">
                {teamPageContent.ctaButton.toUpperCase()} <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};