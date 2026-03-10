import React from 'react';
import * as ContainerModule from '../common/Container';
import * as DarkModeToggleModule from '../common/DarkModeToggle';
import { AppWindow, Package, Cube, Code, ShoppingBag, BookOpen, Info, Question, FileText, User, CreditCard, Megaphone, Wrench, MagnifyingGlass, Faders, Sparkle, TextT, GridFour, Check, ArrowSquareOut, ShoppingCart, CursorClick, Image as ImageIcon, Palette } from '@phosphor-icons/react';

var Container = ContainerModule.Container;
var DarkModeToggle = DarkModeToggleModule.DarkModeToggle;

/**
 * PageShowcase Template — Funky Redesign
 *
 * Visual component showcase and design system documentation page.
 *
 * @template
 * @route /showcase
 */
export default function PageShowcase() {
  var searchState = React.useState('');
  var searchTerm = searchState[0];
  var setSearchTerm = searchState[1];
  
  var catState = React.useState('All');
  var selectedCategory = catState[0];
  var setSelectedCategory = catState[1];

  var stats = [
    { icon: AppWindow, count: 63, label: 'Templates' },
    { icon: Package, count: 21, label: 'Parts' },
    { icon: Cube, count: 43, label: 'Patterns' },
    { icon: Code, count: 200, label: 'Blocks' },
  ];

  var coverage = [
    { value: '100%', label: 'Template Guidelines', desc: 'All 63 templates documented' },
    { value: '100%', label: 'JSDoc Coverage', desc: 'All 200+ blocks documented' },
    { value: '100%', label: 'WCAG 2.1 AA', desc: 'All components accessible' },
    { value: '100%', label: 'Dark Mode Support', desc: 'Complete coverage' },
    { value: '100%', label: 'Funky Redesign', desc: 'Phase 10 complete' },
  ];

  var templateCategories = [
    { icon: ShoppingBag, name: 'Shop', count: 8, desc: 'Product archives & single pages' },
    { icon: BookOpen, name: 'Blog', count: 11, desc: 'Blog archives & post formats' },
    { icon: Info, name: 'Info Pages', count: 11, desc: 'About, team, careers, stores' },
    { icon: Question, name: 'Support', count: 9, desc: 'Help, returns, reviews, rewards' },
    { icon: FileText, name: 'Legal', count: 3, desc: 'Privacy, terms, shipping policy' },
    { icon: User, name: 'Account', count: 5, desc: 'Login, wishlist, dashboard' },
    { icon: CreditCard, name: 'Commerce', count: 7, desc: 'Cart, checkout, subscriptions' },
    { icon: Megaphone, name: 'Marketing', count: 3, desc: 'Homepage, loyalty, newsletter' },
    { icon: Wrench, name: 'Dev Tools', count: 6, desc: 'Style guide, showcase, icons' },
  ];

  var components = [
    { name: 'FrontPage', category: 'Templates', type: 'Page', path: '/templates/FrontPage.tsx', desc: 'Homepage with hero, features, and products' },
    { name: 'ArchiveProduct', category: 'Templates', type: 'Archive', path: '/templates/ArchiveProduct.tsx', desc: 'Product listing with filters and pagination' },
    { name: 'SingleProduct', category: 'Templates', type: 'Single', path: '/templates/SingleProduct.tsx', desc: 'Product detail page with gallery and tabs' },
    { name: 'PageCart', category: 'Templates', type: 'Commerce', path: '/templates/PageCart.tsx', desc: 'Shopping cart with line items and totals' },
    { name: 'PageCheckout', category: 'Templates', type: 'Commerce', path: '/templates/PageCheckout.tsx', desc: 'Checkout flow with shipping and payment' },
    { name: 'ArchiveBlog', category: 'Templates', type: 'Archive', path: '/templates/ArchiveBlog.tsx', desc: 'Blog posts grid with filters' },
    { name: 'SinglePost', category: 'Templates', type: 'Single', path: '/templates/SinglePost.tsx', desc: 'Blog post with sidebar and related posts' },
    { name: 'Header', category: 'Parts', type: 'Navigation', path: '/parts/Header.tsx', desc: 'Main navigation with mega menu and cart' },
    { name: 'Footer', category: 'Parts', type: 'Navigation', path: '/parts/Footer.tsx', desc: 'Site footer with links and newsletter' },
    { name: 'MiniCart', category: 'Parts', type: 'Commerce', path: '/parts/MiniCart.tsx', desc: 'Slide-over cart drawer with items' },
    { name: 'MegaMenu', category: 'Parts', type: 'Navigation', path: '/parts/MegaMenu.tsx', desc: 'Rich navigation overlay with previews' },
    { name: 'Hero', category: 'Patterns', type: 'Marketing', path: '/patterns/Hero.tsx', desc: 'Large hero section with CTA' },
    { name: 'ProductGrid', category: 'Patterns', type: 'Commerce', path: '/patterns/ProductGrid.tsx', desc: 'Responsive product grid layout' },
    { name: 'PostGrid', category: 'Patterns', type: 'Content', path: '/patterns/PostGrid.tsx', desc: 'Blog posts grid with previews' },
    { name: 'ProductCard', category: 'Blocks', type: 'Commerce', path: '/blocks/product/ProductCard.tsx', desc: 'Individual product display unit' },
    { name: 'PostCard', category: 'Blocks', type: 'Content', path: '/blocks/blog/PostCard.tsx', desc: 'Individual blog post display unit' },
    { name: 'Button', category: 'Blocks', type: 'UI', path: '/blocks/design/Button.tsx', desc: 'Interactive button component' },
    { name: 'Input', category: 'Blocks', type: 'UI', path: '/blocks/forms/Input.tsx', desc: 'Form text input field' },
  ];

  var blockCategories = [
    { name: 'UI Primitives', count: 18, desc: 'Buttons, badges, avatars, tooltips', icon: Faders },
    { name: 'Forms', count: 14, desc: 'Inputs, selects, checkboxes, radios', icon: TextT },
    { name: 'Layout', count: 12, desc: 'Containers, grids, stacks, wrappers', icon: GridFour },
    { name: 'Product', count: 24, desc: 'Cards, galleries, prices, variants', icon: ShoppingBag },
    { name: 'Cart', count: 15, desc: 'Line items, totals, shipping calculators', icon: ShoppingCart },
    { name: 'Checkout', count: 19, desc: 'Steps, payment methods, order summary', icon: CreditCard },
    { name: 'Archive', count: 11, desc: 'Filters, pagination, active constraints', icon: Faders },
    { name: 'Blog', count: 16, desc: 'Post cards, meta info, author bios', icon: FileText },
    { name: 'Account', count: 22, desc: 'Orders, addresses, profile edits', icon: User },
    { name: 'Theme', count: 9, desc: 'Logo, search, navigation, toggles', icon: Palette },
    { name: 'Interactive', count: 13, desc: 'Accordions, tabs, modals, drawers', icon: CursorClick },
    { name: 'Media', count: 8, desc: 'Images, video players, carousels', icon: ImageIcon },
  ];

  var categories = ['All', 'Templates', 'Parts', 'Patterns', 'Blocks'];

  var filteredComponents = components.filter(function(comp) {
    var matchesSearch = comp.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        comp.desc.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'All' || comp.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return React.createElement(React.Fragment, null,
    React.createElement(DarkModeToggle, null),
    React.createElement('div', { className: 'page-rewards' },
      
      /* Header */
      React.createElement('section', { className: 'wp-page-intro-section' },
        React.createElement(Container, null,
          React.createElement('div', { className: 'wp-page-intro-content' },
            React.createElement('div', { className: 'wp-badge-pill' },
              React.createElement(Sparkle, { size: 16, weight: 'duotone' }),
              React.createElement('span', { className: 'wp-badge-pill__text' }, 'Component Library')
            ),
            React.createElement('h1', null, 'Component Showcase'),
            React.createElement('p', { className: 'wp-page-intro-text' },
              'Explore the complete collection of templates, parts, patterns, and blocks.'
            )
          )
        )
      ),

      /* Stats */
      React.createElement('section', { className: 'reward-section' },
        React.createElement(Container, null,
          React.createElement('div', { className: 'showcase-stats-grid' },
            stats.map(function(stat, index) {
              return React.createElement('div', { key: index, className: 'showcase-stat-card' },
                React.createElement(stat.icon, { size: 32, weight: 'duotone', className: 'showcase-stat-card__icon' }),
                React.createElement('span', { className: 'showcase-stat-card__count' }, stat.count),
                React.createElement('span', { className: 'showcase-stat-card__label' }, stat.label)
              );
            })
          )
        )
      ),

      /* Coverage */
      React.createElement('section', { className: 'reward-section reward-section--alt' },
        React.createElement(Container, null,
          React.createElement('h2', { className: 'reward-section__heading' }, 'Audit Coverage'),
          React.createElement('div', { className: 'showcase-coverage-grid' },
            coverage.map(function(item, index) {
              return React.createElement('div', { key: index, className: 'showcase-coverage-item' },
                React.createElement('div', { className: 'showcase-coverage-item__header' },
                  React.createElement(Check, { size: 16, weight: 'bold', className: 'showcase-coverage-item__icon' }),
                  React.createElement('span', { className: 'showcase-coverage-item__value' }, item.value)
                ),
                React.createElement('h3', { className: 'showcase-coverage-item__label' }, item.label),
                React.createElement('p', { className: 'showcase-coverage-item__desc' }, item.desc)
              );
            })
          )
        )
      ),

      /* Templates by Category */
      React.createElement('section', { className: 'reward-section' },
        React.createElement(Container, null,
          React.createElement('h2', { className: 'reward-section__heading' }, 'Template Categories'),
          React.createElement('p', { className: 'reward-section__subheading' }, '63 templates organized into 9 semantic groups'),
          React.createElement('div', { className: 'template-categories-grid' },
            templateCategories.map(function(category, index) {
              return React.createElement('div', { key: index, className: 'template-category-card' },
                React.createElement('div', { className: 'template-category-card__header' },
                  React.createElement('div', { className: 'template-category-card__icon' },
                    React.createElement(category.icon, { size: 24, weight: 'duotone' })
                  ),
                  React.createElement('span', { className: 'template-category-card__count' }, category.count)
                ),
                React.createElement('h3', { className: 'template-category-card__name' }, category.name),
                React.createElement('p', { className: 'template-category-card__desc' }, category.desc)
              );
            })
          )
        )
      ),

      /* Component Browser */
      React.createElement('section', { className: 'reward-section reward-section--alt' },
        React.createElement(Container, null,
          React.createElement('h2', { className: 'reward-section__heading' }, 'Component Directory'),
          React.createElement('p', { className: 'reward-section__subheading' }, 'Search and filter all available React components'),
          
          React.createElement('div', { className: 'component-browser-controls' },
            React.createElement('div', { className: 'component-search' },
              React.createElement(MagnifyingGlass, { size: 20, weight: 'duotone', className: 'component-search__icon' }),
              React.createElement('input', {
                type: 'text',
                placeholder: 'Search components...',
                value: searchTerm,
                onChange: function(e) { setSearchTerm(e.target.value); },
                className: 'component-search__input funky-input-glow',
                'aria-label': 'Search components'
              })
            ),
            
            React.createElement('div', { className: 'component-filter' },
              React.createElement(Faders, { size: 18, weight: 'duotone', className: 'component-filter__icon' }),
              React.createElement('div', { className: 'component-filter__buttons' },
                categories.map(function(cat) {
                  return React.createElement('button', {
                    key: cat,
                    onClick: function() { setSelectedCategory(cat); },
                    className: 'component-filter__button' + (selectedCategory === cat ? ' component-filter__button--active' : ''),
                    'aria-pressed': selectedCategory === cat
                  }, 
                    cat + (cat === 'All' ? ' (' + components.length + ')' : ' (' + components.filter(function(c) { return c.category === cat; }).length + ')')
                  );
                })
              )
            )
          ),

          /* Results Count */
          React.createElement('div', { className: 'component-browser-results' },
            React.createElement('p', null, 
              'Showing ', React.createElement('strong', null, filteredComponents.length), 
              ' of ', React.createElement('strong', null, components.length), ' components'
            )
          ),

          /* Component Grid */
          filteredComponents.length > 0 ? React.createElement('div', { className: 'component-grid' },
            filteredComponents.map(function(comp) {
              return React.createElement('div', { key: comp.name, className: 'component-card funky-glass-panel' },
                React.createElement('div', { className: 'component-card__header' },
                  React.createElement('h3', { className: 'component-card__name' }, comp.name),
                  React.createElement('span', { className: 'component-card__type' }, comp.type)
                ),
                React.createElement('p', { className: 'component-card__desc' }, comp.desc),
                React.createElement('div', { className: 'component-card__footer' },
                  React.createElement('code', { className: 'component-card__path' }, comp.path),
                  React.createElement('a', {
                    href: '#' + comp.path,
                    className: 'component-card__link',
                    'aria-label': 'View ' + comp.name + ' source'
                  },
                    React.createElement(ArrowSquareOut, { size: 14, weight: 'duotone' })
                  )
                )
              );
            })
          ) : React.createElement('div', { className: 'component-browser-empty' },
            React.createElement(Cube, { size: 48, weight: 'duotone' }),
            React.createElement('h3', null, 'No components found'),
            React.createElement('p', null, 'Try adjusting your search or filter criteria')
          )
        )
      ),

      /* Block Categories */
      React.createElement('section', { className: 'reward-section' },
        React.createElement(Container, null,
          React.createElement('h2', { className: 'reward-section__heading' }, 'Block Categories'),
          React.createElement('p', { className: 'reward-section__subheading' }, '200+ blocks organized into 21 functional categories'),
          React.createElement('div', { className: 'block-categories-grid' },
            blockCategories.map(function(category) {
              return React.createElement('div', { key: category.name, className: 'block-category-card funky-glass-panel' },
                React.createElement('div', { className: 'block-category-card__header' },
                  React.createElement('div', { className: 'block-category-card__icon' },
                    React.createElement(category.icon, { size: 24, weight: 'duotone' })
                  ),
                  React.createElement('span', { className: 'block-category-card__count' }, category.count)
                ),
                React.createElement('h3', { className: 'block-category-card__name' }, category.name),
                React.createElement('p', { className: 'block-category-card__desc' }, category.desc)
              );
            })
          )
        )
      )
    )
  );
}