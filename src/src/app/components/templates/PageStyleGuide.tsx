import React from 'react';
import * as ContainerModule from '../common/Container';
import * as DarkModeToggleModule from '../common/DarkModeToggle';
import { Palette, TextT, Stack as Layers, GridFour, Check, Copy, Sparkle } from '@phosphor-icons/react';

var Container = ContainerModule.Container;
var DarkModeToggle = DarkModeToggleModule.DarkModeToggle;

/**
 * PageStyleGuide Template — Funky Redesign
 *
 * Design system style guide overview with colors, typography, spacing, and components.
 *
 * @template
 * @route /dev-tools/style-guide
 */
export default function PageStyleGuide() {
  var tabState = React.useState('colors');
  var activeTab = tabState[0];
  var setActiveTab = tabState[1];

  function handleCopyColor(color) {
    navigator.clipboard.writeText(color);
  }

  return React.createElement(React.Fragment, null,
    React.createElement(DarkModeToggle, null),
    React.createElement('div', { className: 'page-rewards' },
      React.createElement('section', { className: 'wp-page-intro-section' },
        React.createElement(Container, null,
          React.createElement('div', { className: 'wp-page-intro-content' },
            React.createElement('div', { className: 'wp-badge-pill' },
              React.createElement(Sparkle, { size: 16, weight: 'duotone' }),
              React.createElement('span', { className: 'wp-badge-pill__text' }, 'Design System')
            ),
            React.createElement('h1', null, 'Style Guide'),
            React.createElement('p', { className: 'wp-page-intro-text' },
              'Interactive design system reference with colors, typography, spacing, and component examples.'
            )
          )
        )
      ),
      React.createElement('section', { className: 'reward-section' },
        React.createElement(Container, null,
          React.createElement('div', { className: 'showcase-stats-grid' },
            React.createElement('div', { className: 'style-guide-card' },
              React.createElement(Palette, { size: 48, weight: 'duotone', className: 'style-guide-card__icon' }),
              React.createElement('h3', { className: 'style-guide-card__title' }, 'Colors'),
              React.createElement('p', { className: 'style-guide-card__desc' }, 'Brand palette & semantic neon colors')
            ),
            React.createElement('div', { className: 'style-guide-card' },
              React.createElement(TextT, { size: 48, weight: 'duotone', className: 'style-guide-card__icon' }),
              React.createElement('h3', { className: 'style-guide-card__title' }, 'Typography'),
              React.createElement('p', { className: 'style-guide-card__desc' }, 'Fluid type scale & fonts')
            ),
            React.createElement('div', { className: 'style-guide-card' },
              React.createElement(Layers, { size: 48, weight: 'duotone', className: 'style-guide-card__icon' }),
              React.createElement('h3', { className: 'style-guide-card__title' }, 'Spacing'),
              React.createElement('p', { className: 'style-guide-card__desc' }, '4px base spacing system')
            ),
            React.createElement('div', { className: 'style-guide-card' },
              React.createElement(GridFour, { size: 48, weight: 'duotone', className: 'style-guide-card__icon' }),
              React.createElement('h3', { className: 'style-guide-card__title' }, 'Components'),
              React.createElement('p', { className: 'style-guide-card__desc' }, 'UI component library')
            )
          )
        )
      ),
      React.createElement('section', { className: 'reward-section reward-section--alt' },
        React.createElement(Container, null,
          React.createElement('h2', { className: 'reward-section__heading' }, 'Color Palette'),
          React.createElement('p', { className: 'reward-section__subheading' },
            'Click any color to copy its hex value to your clipboard'
          ),
          React.createElement('div', { className: 'color-section' },
            React.createElement('div', { className: 'color-group' },
              React.createElement('h3', { className: 'color-group__title' }, 'Funky Neon'),
              React.createElement('div', { className: 'color-swatches' },
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--neon-cyan' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Cyan'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--neon-cyan'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Primary accent & interactive elements')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--neon-lime' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Lime'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--neon-lime'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Secondary accent & success states')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--neon-pink' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Pink'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--neon-pink'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Tertiary accent & highlights')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--neon-yellow' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Gold'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--neon-yellow'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Loyalty, rewards, premium features')
                  )
                )
              )
            ),
            React.createElement('div', { className: 'color-group' },
              React.createElement('h3', { className: 'color-group__title' }, 'Base Colors'),
              React.createElement('div', { className: 'color-swatches' },
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--navy' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Navy'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--navy'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Dark backgrounds & surfaces')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--deep-purple' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Deep Purple'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--deep-purple'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Gradient overlays & accents')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--white' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'White'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--white'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Light mode backgrounds')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--surface' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Surface'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--surface'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Cards, panels (light mode)')
                  )
                )
              )
            ),
            React.createElement('div', { className: 'color-group' },
              React.createElement('h3', { className: 'color-group__title' }, 'Semantic'),
              React.createElement('div', { className: 'color-swatches' },
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--success' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Success'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--success'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Positive actions & confirmations')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--error' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Error'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--error'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Errors, warnings, destructive actions')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--foreground' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Text Primary (Light)'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--foreground'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Body text in light mode')
                  )
                ),
                React.createElement('button', { className: 'color-swatch' },
                  React.createElement('div', { className: 'color-swatch__block color-swatch__block--background' }),
                  React.createElement('div', { className: 'color-swatch__info' },
                    React.createElement('strong', { className: 'color-swatch__name' }, 'Text Primary (Dark)'),
                    React.createElement('code', { className: 'color-swatch__value' }, '--background'),
                    React.createElement('span', { className: 'color-swatch__usage' }, 'Body text in dark mode')
                  )
                )
              )
            )
          )
        )
      ),
      React.createElement('section', { className: 'reward-section' },
        React.createElement(Container, null,
          React.createElement('h2', { className: 'reward-section__heading' }, 'Typography Scale'),
          React.createElement('p', { className: 'reward-section__subheading' },
            'Fluid typography system with responsive scaling across all device sizes'
          ),
          React.createElement('div', { className: 'typography-section' },
            React.createElement('div', { className: 'type-specimen' },
              React.createElement('div', { className: 'type-specimen__info' },
                React.createElement('strong', null, 'Display'),
                React.createElement('code', null, '<h1> .text-display</code>')
              ),
              React.createElement('h1', { className: 'text-display' }, 'The quick brown fox jumps')
            ),
            React.createElement('div', { className: 'type-specimen' },
              React.createElement('div', { className: 'type-specimen__info' },
                React.createElement('strong', null, 'Heading 1'),
                React.createElement('code', null, '<h1></code>')
              ),
              React.createElement('h1', null, 'over the lazy dog')
            ),
            React.createElement('div', { className: 'type-specimen' },
              React.createElement('div', { className: 'type-specimen__info' },
                React.createElement('strong', null, 'Heading 2'),
                React.createElement('code', null, '<h2></code>')
              ),
              React.createElement('h2', null, 'Pack my box with five')
            ),
            React.createElement('div', { className: 'type-specimen' },
              React.createElement('div', { className: 'type-specimen__info' },
                React.createElement('strong', null, 'Heading 3'),
                React.createElement('code', null, '<h3></code>')
              ),
              React.createElement('h3', null, 'dozen liquor jugs')
            ),
            React.createElement('div', { className: 'type-specimen' },
              React.createElement('div', { className: 'type-specimen__info' },
                React.createElement('strong', null, 'Heading 4'),
                React.createElement('code', null, '<h4></code>')
              ),
              React.createElement('h4', null, 'How vexingly quick daft')
            ),
            React.createElement('div', { className: 'type-specimen' },
              React.createElement('div', { className: 'type-specimen__info' },
                React.createElement('strong', null, 'Body'),
                React.createElement('code', null, '<p></code>')
              ),
              React.createElement('p', null, 'zebras jump! Sphinx of black quartz, judge my vow.')
            ),
            React.createElement('div', { className: 'type-specimen' },
              React.createElement('div', { className: 'type-specimen__info' },
                React.createElement('strong', null, 'Small'),
                React.createElement('code', null, '<small></code>')
              ),
              React.createElement('small', null, 'The five boxing wizards jump quickly')
            )
          )
        )
      ),
      React.createElement('section', { className: 'reward-section reward-section--alt' },
        React.createElement(Container, null,
          React.createElement('h2', { className: 'reward-section__heading' }, 'Spacing Scale'),
          React.createElement('p', { className: 'reward-section__subheading' },
            '4px-based spacing system with CSS custom properties for consistent layouts'
          ),
          React.createElement('div', { className: 'spacing-scale' },
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '4px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '100'),
                React.createElement('code', null, 'var(--space--100)'),
                React.createElement('span', null, '4px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '8px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '200'),
                React.createElement('code', null, 'var(--space--200)'),
                React.createElement('span', null, '8px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '12px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '300'),
                React.createElement('code', null, 'var(--space--300)'),
                React.createElement('span', null, '12px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '16px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '400'),
                React.createElement('code', null, 'var(--space--400)'),
                React.createElement('span', null, '16px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '20px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '500'),
                React.createElement('code', null, 'var(--space--500)'),
                React.createElement('span', null, '20px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '24px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '600'),
                React.createElement('code', null, 'var(--space--600)'),
                React.createElement('span', null, '24px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '32px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '700'),
                React.createElement('code', null, 'var(--space--700)'),
                React.createElement('span', null, '32px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '40px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '800'),
                React.createElement('code', null, 'var(--space--800)'),
                React.createElement('span', null, '40px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '48px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '900'),
                React.createElement('code', null, 'var(--space--900)'),
                React.createElement('span', null, '48px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '56px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '1000'),
                React.createElement('code', null, 'var(--space--1000)'),
                React.createElement('span', null, '56px')
              )
            ),
            React.createElement('div', { className: 'spacing-item' },
              React.createElement('div', { className: 'spacing-item__visual', style: { width: '64px', height: '40px' } }),
              React.createElement('div', { className: 'spacing-item__info' },
                React.createElement('strong', null, '1100'),
                React.createElement('code', null, 'var(--space--1100)'),
                React.createElement('span', null, '64px')
              )
            )
          )
        )
      )
    )
  );
}