import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Heart, UsersThree, GlobeHemisphereWest, Trophy, Sparkle, Leaf, Eye, SunDim, ShieldCheck, ArrowRight, Quotes, Star } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ContainerModule from '../common/Container';
import * as NewsletterCTAModule from '../patterns/NewsletterCTA';
import * as CompanyDataModule from '../../data/company';
import * as TeamDataModule from '../../data/team';
import * as TestimonialsDataModule from '../../data/testimonials';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var Container = ContainerModule.Container;
var NewsletterCTA = NewsletterCTAModule.NewsletterCTA;
var aboutHero = HeroDataModule.aboutHero;
var companyStats = CompanyDataModule.companyStats;
var companyInfo = CompanyDataModule.companyInfo;
var companyValues = CompanyDataModule.companyValues;
var companyTimeline = CompanyDataModule.companyTimeline;
var awards = CompanyDataModule.awards;
var aboutPageContent = CompanyDataModule.aboutPageContent;
var teamMembers = TeamDataModule.teamMembers;
var testimonials = TestimonialsDataModule.testimonials;

var iconMap = {
  Heart: Heart,
  Users: UsersThree,
  Globe: GlobeHemisphereWest,
  Award: Trophy,
  Sparkles: Sparkle,
  Leaf: Leaf,
  Eye: Eye,
  Sun: SunDim,
  ShieldCheck: ShieldCheck
};

/**
 * PageAbout Template - Funky Redesign
 *
 * Sections: Hero | Story | Values | Timeline | Stats | Team | Awards | Testimonials | CTA
 * Design: glassmorphism, neon gradients, glow effects, Phosphor icons
 */
export function PageAbout() {
  var displayTeam = teamMembers.slice(0, 6);
  var displayTestimonials = testimonials.slice(0, 3);
  var displayValues = companyValues.map(function(v) {
    return {
      Icon: iconMap[v.icon] || Heart,
      title: v.title,
      description: v.description
    };
  });

  return React.createElement(Layout, null,
    /* Hero */
    React.createElement(FunkyHero, { config: aboutHero }),

    React.createElement('hr', { className: 'funky-section__divider' }),

    /* ========== STORY SPLIT ========== */
    React.createElement('section', { className: 'info-story' },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__story-grid' },
          /* Image */
          React.createElement('div', { className: 'funky-about__story-image-wrap' },
            React.createElement('img', {
              src: 'https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?q=80&w=800&auto=format&fit=crop',
              alt: 'Team collaborating at workshop',
              className: 'funky-about__story-image',
              loading: 'lazy'
            }),
            React.createElement('div', { className: 'funky-about__story-image-glow' })
          ),
          /* Text */
          React.createElement('div', { className: 'funky-about__story-body' },
            React.createElement('h2', { className: 'funky-about__section-heading' },
              aboutPageContent.storyHeading
            ),
            React.createElement('p', { className: 'funky-about__body-text' },
              'Founded in ' + companyInfo.founded + ' by ' + companyInfo.founder + ', ' +
              companyInfo.name + ' began with a simple mission: to make high-quality essentials accessible to everyone.'
            ),
            React.createElement('p', { className: 'funky-about__body-text' },
              companyInfo.description
            ),
            React.createElement('p', { className: 'funky-about__body-text funky-about__body-text--accent' },
              companyInfo.storyIntro
            ),
            React.createElement(Link, {
              to: '/about/team',
              className: 'funky-about__story-cta funky-spring-hover'
            },
              React.createElement('span', null, 'Meet the team'),
              React.createElement(ArrowRight, { size: 16, weight: 'bold' })
            )
          )
        )
      )
    ),

    React.createElement('hr', { className: 'funky-section__divider--subtle' }),

    /* ========== VALUES GRID ========== */
    React.createElement('section', { className: 'info-cards info-cards--alt' },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__section-header' },
          React.createElement('h2', { className: 'funky-about__section-heading funky-section__heading--gradient' },
            aboutPageContent.valuesHeading
          ),
          React.createElement('p', { className: 'funky-about__section-desc' },
            aboutPageContent.valuesDescription
          )
        ),
        React.createElement('div', { className: 'funky-about__values-grid' },
          displayValues.map(function(v, i) {
            return React.createElement('div', {
              key: i,
              className: 'funky-about__value-card'
            },
              React.createElement('div', { className: 'funky-about__value-card-glow' }),
              React.createElement('div', { className: 'funky-about__value-card-inner' },
                React.createElement('div', { className: 'funky-about__value-icon' },
                  React.createElement(v.Icon, { size: 24, weight: 'duotone' })
                ),
                React.createElement('h3', { className: 'funky-about__value-title' }, v.title),
                React.createElement('p', { className: 'funky-about__value-desc' }, v.description)
              )
            );
          })
        )
      )
    ),

    React.createElement('hr', { className: 'funky-section__divider' }),

    /* ========== TIMELINE ========== */
    React.createElement('section', { className: 'funky-about__timeline-section' },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__section-header' },
          React.createElement('h2', { className: 'funky-about__section-heading funky-section__heading--gradient' },
            'Our journey'
          ),
          React.createElement('p', { className: 'funky-about__section-desc' },
            'From a Brooklyn market stall to a global community'
          )
        ),
        React.createElement('div', { className: 'funky-about__timeline' },
          companyTimeline.map(function(milestone, idx) {
            var isEven = idx % 2 === 0;
            return React.createElement('div', {
              key: milestone.id,
              className: 'funky-about__timeline-item' + (isEven ? '' : ' funky-about__timeline-item--alt')
            },
              React.createElement('div', { className: 'funky-about__timeline-marker' },
                React.createElement(Trophy, { size: 16, weight: 'duotone' })
              ),
              React.createElement('div', { className: 'funky-about__timeline-card' },
                React.createElement('div', { className: 'funky-about__timeline-card-glow' }),
                React.createElement('div', { className: 'funky-about__timeline-card-inner' },
                  React.createElement('span', { className: 'funky-about__timeline-year' }, milestone.year),
                  React.createElement('h3', { className: 'funky-about__timeline-title' }, milestone.title),
                  React.createElement('p', { className: 'funky-about__timeline-desc' }, milestone.description)
                )
              )
            );
          })
        )
      ),
      React.createElement('div', { className: 'funky-orb funky-animate-float', style: { position: 'absolute', top: '10%', right: '-80px', width: '180px', height: '180px', background: '#00ffff', filter: 'blur(80px)', opacity: 0.12 } }),
      React.createElement('div', { className: 'funky-orb funky-animate-float', style: { position: 'absolute', bottom: '15%', left: '-60px', width: '140px', height: '140px', background: '#ff00ff', filter: 'blur(70px)', opacity: 0.1 } })
    ),

    React.createElement('hr', { className: 'funky-section__divider' }),

    /* ========== STATS ========== */
    React.createElement('section', { className: 'info-stats', style: { position: 'relative', overflow: 'hidden' } },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__section-header', style: { color: '#fff' } },
          React.createElement('h2', { className: 'funky-about__section-heading', style: { color: '#fff' } },
            aboutPageContent.statsHeading
          ),
          React.createElement('p', { className: 'funky-about__section-desc', style: { color: 'rgba(255,255,255,0.7)' } },
            aboutPageContent.statsDescription
          )
        ),
        React.createElement('div', { className: 'funky-about__stats-grid' },
          companyStats.map(function(s) {
            return React.createElement('div', {
              key: s.id,
              className: 'funky-about__stat-card'
            },
              React.createElement('span', { className: 'funky-about__stat-number' },
                s.value + (s.suffix || '')
              ),
              React.createElement('span', { className: 'funky-about__stat-label' }, s.label),
              s.description
                ? React.createElement('span', { className: 'funky-about__stat-desc' }, s.description)
                : null
            );
          })
        )
      ),
      React.createElement('div', { className: 'funky-orb funky-animate-float', style: { position: 'absolute', top: '-60px', right: '10%', width: '200px', height: '200px', background: '#00ffff', filter: 'blur(80px)', opacity: 0.15 } }),
      React.createElement('div', { className: 'funky-orb funky-animate-float', style: { position: 'absolute', bottom: '-40px', left: '5%', width: '160px', height: '160px', background: '#ff00ff', filter: 'blur(70px)', opacity: 0.12 } })
    ),

    React.createElement('hr', { className: 'funky-section__divider' }),

    /* ========== TEAM ========== */
    React.createElement('section', { className: 'info-team' },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__section-header' },
          React.createElement('h2', { className: 'funky-about__section-heading funky-section__heading--gradient' },
            aboutPageContent.teamHeading
          ),
          React.createElement('p', { className: 'funky-about__section-desc' },
            aboutPageContent.teamDescription
          )
        ),
        React.createElement('div', { className: 'funky-about__team-grid' },
          displayTeam.map(function(m) {
            return React.createElement('div', {
              key: m.id,
              className: 'funky-about__team-card'
            },
              React.createElement('div', { className: 'funky-about__team-card-glow' }),
              React.createElement('div', { className: 'funky-about__team-card-inner' },
                React.createElement('div', { className: 'funky-about__team-avatar-wrap' },
                  React.createElement('img', {
                    src: m.image,
                    alt: m.name,
                    className: 'funky-about__team-avatar',
                    loading: 'lazy'
                  })
                ),
                React.createElement('h3', { className: 'funky-about__team-name' }, m.name),
                React.createElement('span', { className: 'funky-about__team-role' }, m.role),
                m.bio
                  ? React.createElement('p', { className: 'funky-about__team-bio' }, m.bio)
                  : null,
                m.social
                  ? React.createElement('div', { className: 'funky-about__team-social' },
                      m.social.linkedin
                        ? React.createElement('a', {
                            href: m.social.linkedin,
                            'aria-label': m.name + ' on LinkedIn',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: 'funky-about__team-social-link'
                          }, React.createElement(Heart, { size: 18, weight: 'duotone' }))
                        : null,
                      m.social.twitter
                        ? React.createElement('a', {
                            href: m.social.twitter,
                            'aria-label': m.name + ' on Twitter',
                            target: '_blank',
                            rel: 'noopener noreferrer',
                            className: 'funky-about__team-social-link'
                          }, React.createElement(UsersThree, { size: 18, weight: 'duotone' }))
                        : null
                    )
                  : null
              )
            );
          })
        ),
        React.createElement('div', { className: 'funky-about__team-footer' },
          React.createElement(Link, {
            to: '/about/team',
            className: 'funky-about__cta-button funky-spring-hover'
          },
            React.createElement('span', null, 'View full team'),
            React.createElement(ArrowRight, { size: 16, weight: 'bold' })
          )
        )
      )
    ),

    React.createElement('hr', { className: 'funky-section__divider--subtle' }),

    /* ========== AWARDS ========== */
    React.createElement('section', { className: 'info-cards info-cards--alt' },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__section-header' },
          React.createElement('h2', { className: 'funky-about__section-heading funky-section__heading--gradient' },
            'Awards & recognition'
          ),
          React.createElement('p', { className: 'funky-about__section-desc' },
            'Recognised by industry leaders for quality, sustainability, and customer experience'
          )
        ),
        React.createElement('div', { className: 'funky-about__awards-grid' },
          awards.map(function(award) {
            return React.createElement('div', {
              key: award.id,
              className: 'funky-about__award-card'
            },
              React.createElement('div', { className: 'funky-about__award-card-glow' }),
              React.createElement('div', { className: 'funky-about__award-card-inner' },
                React.createElement('div', { className: 'funky-about__award-icon' },
                  React.createElement(Trophy, { size: 24, weight: 'duotone' })
                ),
                React.createElement('span', { className: 'funky-about__award-year' }, award.year),
                React.createElement('h3', { className: 'funky-about__award-title' }, award.title),
                React.createElement('span', { className: 'funky-about__award-org' }, award.organization),
                React.createElement('p', { className: 'funky-about__award-desc' }, award.description)
              )
            );
          })
        )
      )
    ),

    React.createElement('hr', { className: 'funky-section__divider' }),

    /* ========== TESTIMONIALS ========== */
    React.createElement('section', { className: 'info-cards' },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__section-header' },
          React.createElement('h2', { className: 'funky-about__section-heading funky-section__heading--gradient' },
            aboutPageContent.testimonialsHeading
          )
        ),
        React.createElement('div', { className: 'funky-about__testimonials-grid' },
          displayTestimonials.map(function(t) {
            return React.createElement('div', {
              key: t.id,
              className: 'funky-about__testimonial-card'
            },
              React.createElement('div', { className: 'funky-about__testimonial-card-glow' }),
              React.createElement('div', { className: 'funky-about__testimonial-card-inner' },
                React.createElement('div', { className: 'funky-about__testimonial-quote-icon' },
                  React.createElement(Quotes, { size: 28, weight: 'duotone' })
                ),
                React.createElement('p', { className: 'funky-about__testimonial-text' },
                  '"' + t.quote + '"'
                ),
                React.createElement('div', { className: 'funky-about__testimonial-author' },
                  React.createElement('div', { className: 'funky-about__testimonial-avatar' },
                    t.author.split(' ').map(function(n) { return n[0]; }).join('')
                  ),
                  React.createElement('div', null,
                    React.createElement('span', { className: 'funky-about__testimonial-name' }, t.author),
                    React.createElement('span', { className: 'funky-about__testimonial-role' }, t.role)
                  )
                ),
                React.createElement('div', { className: 'funky-about__testimonial-stars' },
                  [1, 2, 3, 4, 5].map(function(s) {
                    return React.createElement(Star, {
                      key: s,
                      size: 14,
                      weight: 'fill',
                      className: 'funky-about__star-icon'
                    });
                  })
                )
              )
            );
          })
        )
      )
    ),

    React.createElement('hr', { className: 'funky-section__divider' }),

    /* ========== NEWSLETTER ========== */
    React.createElement(Container, null,
      React.createElement(NewsletterCTA, { 
        variant: 'banner',
        heading: 'Stay in the loop',
        description: 'Get the latest news and updates from our team.',
        className: 'funky-about__newsletter'
      })
    ),

    React.createElement('hr', { className: 'funky-section__divider' }),

    /* ========== CTA ========== */
    React.createElement('section', { className: 'info-cta' },
      React.createElement(Container, null,
        React.createElement('div', { className: 'funky-about__cta-content' },
          React.createElement(Heart, { size: 48, weight: 'duotone', className: 'funky-about__cta-icon' }),
          React.createElement('h2', { className: 'funky-about__cta-heading' }, aboutPageContent.ctaHeading),
          React.createElement('div', { className: 'funky-about__cta-actions' },
            React.createElement(Link, {
              to: aboutPageContent.ctaButtonHref,
              className: 'funky-about__cta-button funky-about__cta-button--primary funky-spring-hover'
            },
              React.createElement('span', null, aboutPageContent.ctaButtonLabel),
              React.createElement(ArrowRight, { size: 18, weight: 'bold' })
            ),
            React.createElement(Link, {
              to: '/contact',
              className: 'funky-about__cta-button funky-about__cta-button--secondary funky-spring-hover'
            },
              React.createElement('span', null, 'Get in touch'),
              React.createElement(ArrowRight, { size: 18, weight: 'bold' })
            )
          )
        )
      ),
      React.createElement('div', { className: 'funky-orb funky-animate-float', style: { position: 'absolute', top: '10%', left: '-80px', width: '200px', height: '200px', background: '#00ffff', filter: 'blur(90px)', opacity: 0.15 } }),
      React.createElement('div', { className: 'funky-orb funky-animate-float', style: { position: 'absolute', bottom: '5%', right: '-60px', width: '180px', height: '180px', background: '#ff00ff', filter: 'blur(80px)', opacity: 0.12 } })
    )
  );
}