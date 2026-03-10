import React from 'react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as TeamDataModule from '../../data/team';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var teamMembers = TeamDataModule.teamMembers;
var departments = TeamDataModule.departments;
var teamPageContent = TeamDataModule.teamPageContent;
var teamHero = HeroDataModule.teamHero;

/**
 * PageTeam Template — Funky Redesign
 *
 * Team page with hero, glow team cards with gradient avatars,
 * department stats with gradient numbers, and commerce CTA.
 *
 * @route /about/team
 */
export function PageTeam() {
  return React.createElement(Layout, null,
    /* ── Hero (shared FunkyHero) ── */
    React.createElement(FunkyHero, { config: teamHero }),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── Leadership ── */
    React.createElement('section', { className: "info-team" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-team__content" },
          React.createElement('h2', { className: "info-team__heading funky-section__heading--gradient" },
            teamPageContent.leadershipHeading
          ),
          React.createElement('div', { className: "info-team__grid" },
            teamMembers.filter(function(m) { return m.department === 'Leadership'; }).map(function(member) {
              return React.createElement('div', { key: member.id, className: "info-team__card funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--50)' } },
                React.createElement('div', { className: "info-team__card-inner" },
                  React.createElement('div', { className: "info-team__avatar", style: { width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--wp--preset--color--neon-pink), var(--wp--preset--color--neon-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--wp--preset--font-size--x-large)', fontWeight: 'bold', color: '#fff', marginBottom: 'var(--wp--preset--spacing--30)' } },
                    member.name.split(' ').map(function(n) { return n[0]; }).join('')
                  ),
                  React.createElement('h3', { className: "info-team__name", style: { marginBottom: 'var(--wp--preset--spacing--10)' } }, member.name),
                  React.createElement('span', { className: "info-team__role", style: { display: 'block', color: 'var(--wp--preset--color--neon-cyan)', marginBottom: 'var(--wp--preset--spacing--20)' } }, member.role),
                  React.createElement('p', { className: "info-team__bio", style: { color: 'var(--wp--preset--color--muted-foreground)', fontSize: 'var(--wp--preset--font-size--small)' } }, member.bio)
                )
              );
            })
          )
        )
      )
    ),

    React.createElement('hr', { className: "funky-section__divider--subtle" }),

    /* ── Departments Stats ── */
    React.createElement('section', { className: "info-stats" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-stats__content" },
          React.createElement('h2', { className: "info-stats__heading funky-section__heading--gradient" }, teamPageContent.departmentsHeading),
          React.createElement('p', { className: "info-stats__subheading" }, teamPageContent.departmentsText),
          React.createElement('div', { className: "info-stats__grid", style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 'var(--wp--preset--spacing--40)' } },
            departments.filter(function(d) { return d.id !== 'all'; }).map(function(dept) {
              return React.createElement('div', { key: dept.id, className: "info-stats__item funky-glass-panel funky-spring-hover", style: { padding: 'var(--wp--preset--spacing--40)', textAlign: 'center' } },
                React.createElement('span', { className: "info-stats__number", style: { display: 'block', fontSize: 'var(--wp--preset--font-size--gigantic)', fontWeight: 'bold', color: 'var(--wp--preset--color--neon-lime)', marginBottom: 'var(--wp--preset--spacing--10)' } }, dept.count),
                React.createElement('span', { className: "info-stats__label", style: { display: 'block', color: 'var(--wp--preset--color--muted-foreground)' } }, dept.name)
              );
            })
          )
        )
      ),
      React.createElement('div', { className: "info-stats__orb--1 funky-orb funky-animate-float" }),
      React.createElement('div', { className: "info-stats__orb--2 funky-orb funky-animate-float" })
    ),

    React.createElement('hr', { className: "funky-section__divider" }),

    /* ── CTA ── */
    React.createElement('section', { className: "info-cta" },
      React.createElement(Container, null,
        React.createElement('div', { className: "info-cta__content" },
          React.createElement('h2', { className: "info-cta__heading funky-section__heading--gradient" }, teamPageContent.ctaHeading),
          React.createElement('p', { className: "info-cta__text" }, teamPageContent.ctaText),
          React.createElement('div', { className: "info-cta__actions" },
            React.createElement(Link, { to: "/about/careers", className: "info-cta__btn--primary funky-spring-hover", style: { display: 'inline-block', padding: 'var(--wp--preset--spacing--30) var(--wp--preset--spacing--60)', background: 'var(--wp--preset--color--neon-pink)', color: '#000', fontWeight: 'bold', borderRadius: 'var(--wp--preset--border-radius--full)', textDecoration: 'none' } }, teamPageContent.ctaButton)
          )
        )
      ),
      React.createElement('div', { className: "info-cta__orb--1 funky-orb funky-animate-float" }),
      React.createElement('div', { className: "info-cta__orb--2 funky-orb funky-animate-float" })
    )
  );
}

export default PageTeam;