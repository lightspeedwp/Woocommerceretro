import React from 'react';
import * as ContainerModule from '../common/Container';
import * as PhosphorIcons from '@phosphor-icons/react';
import { MagnifyingGlass as Search, Copy, Check, Sparkle as Sparkles, ArrowSquareOut } from '@phosphor-icons/react';
import * as ClipboardModule from '../../utils/clipboard';

var Container = ContainerModule.Container;
var copyToClipboard = ClipboardModule.copyToClipboard;

/**
 * PageIconLibrary Template — Funky Redesign
 *
 * Comprehensive icon library browser for Phosphor Icons.
 * Searchable, copyable, with neon hover accents.
 *
 * @template
 * @route /dev-tools/icons
 */
export default function PageIconLibrary() {
  var searchState = React.useState('');
  var searchQuery = searchState[0];
  var setSearchQuery = searchState[1];
  
  var copiedState = React.useState(null);
  var copiedIcon = copiedState[0];
  var setCopiedIcon = copiedState[1];
  
  var sizeState = React.useState(24);
  var iconSize = sizeState[0];
  var setIconSize = sizeState[1];

  var allIcons = Object.keys(PhosphorIcons).filter(
    function(key) {
      return key !== 'IconBase' &&
        key !== 'IconContext' &&
        key !== 'default' &&
        typeof PhosphorIcons[key] === 'function';
    }
  );

  var filteredIcons = searchQuery
    ? allIcons.filter(function(name) { return name.toLowerCase().includes(searchQuery.toLowerCase()); })
    : allIcons;

  function copyImportCode(iconName) {
    var code = "import { " + iconName + " } from '@phosphor-icons/react';";
    copyToClipboard(code);
    setCopiedIcon(iconName);
    setTimeout(function() {
      setCopiedIcon(null);
    }, 2000);
  }

  function getIcon(name) {
    return PhosphorIcons[name];
  }

  var categories = [
    { name: 'E-commerce', icons: ['ShoppingCart', 'ShoppingBag', 'CreditCard', 'Package', 'Truck', 'Tag', 'CurrencyDollar'] },
    { name: 'Navigation', icons: ['List', 'X', 'House', 'MagnifyingGlass', 'User', 'Gear', 'CaretRight', 'CaretDown'] },
    { name: 'Social', icons: ['FacebookLogo', 'TwitterLogo', 'InstagramLogo', 'LinkedinLogo', 'YoutubeLogo', 'GithubLogo'] },
    { name: 'Actions', icons: ['Plus', 'Minus', 'PencilSimple', 'Trash', 'FloppyDisk', 'DownloadSimple', 'UploadSimple', 'ShareNetwork'] },
    { name: 'Status', icons: ['Check', 'X', 'WarningCircle', 'Info', 'Question', 'CircleDashed'] },
  ];

  return React.createElement('div', { className: "page-rewards" },
    /* Header */
    React.createElement('section', { className: "wp-page-intro-section" },
      React.createElement(Container, null,
        React.createElement('div', { className: "wp-page-intro-content" },
          React.createElement('div', { className: "wp-badge-pill" },
            React.createElement(Sparkles, { size: 16, weight: 'duotone' }),
            React.createElement('span', { className: "wp-badge-pill__text" }, "Phosphor Icons")
          ),
          React.createElement('h1', null, "Icon Library"),
          React.createElement('p', { className: "wp-page-intro-text" },
            "Browse and search through " + allIcons.length + "+ icons from Phosphor React. Click any icon to copy its import code."
          )
        )
      )
    ),

    /* Search + Controls */
    React.createElement('section', { className: "reward-section" },
      React.createElement(Container, null,
        React.createElement('div', { className: "icon-lib__controls" },
          React.createElement('div', { className: "icon-lib__search-wrap" },
            React.createElement(Search, { className: "icon-lib__search-icon", size: 20, weight: 'duotone' }),
            React.createElement('input', {
              type: "text",
              value: searchQuery,
              onChange: function(e) { setSearchQuery(e.target.value); },
              placeholder: "Search icons... (e.g. 'shopping', 'user', 'arrow')",
              className: "icon-lib__search-input funky-input-glow"
            })
          ),
          React.createElement('div', { className: "icon-lib__size-control" },
            React.createElement('span', { className: "icon-lib__size-label" }, "Size:"),
            React.createElement('input', {
              type: "range",
              min: "16",
              max: "48",
              value: iconSize,
              onChange: function(e) { setIconSize(Number(e.target.value)); },
              className: "icon-lib__size-range"
            }),
            React.createElement('span', { className: "icon-lib__size-value" }, iconSize + "px")
          )
        ),

        React.createElement('div', { className: "icon-lib__results-count" },
          "Showing ", React.createElement('strong', null, filteredIcons.length), " icons",
          searchQuery ? React.createElement('span', null, 
            " matching \"", React.createElement('strong', { className: "icon-lib__highlight" }, searchQuery), "\""
          ) : null
        ),

        /* Popular Categories */
        !searchQuery ? React.createElement('div', { className: "icon-lib__categories" },
          React.createElement('h2', { className: "reward-section__heading" }, "Popular Categories"),
          React.createElement('div', { className: "icon-lib__category-grid" },
            categories.map(function(cat) {
              return React.createElement('div', { key: cat.name, className: "icon-lib__category-card funky-glass-panel" },
                React.createElement('h3', { className: "icon-lib__category-name" }, cat.name),
                React.createElement('div', { className: "icon-lib__category-icons" },
                  cat.icons.map(function(iconName) {
                    var Ic = getIcon(iconName);
                    if (!Ic) return null;
                    return React.createElement('button', {
                      key: iconName,
                      onClick: function() { copyImportCode(iconName); },
                      className: "icon-lib__category-btn",
                      title: iconName
                    },
                      React.createElement(Ic, { size: 24, weight: 'duotone' }),
                      copiedIcon === iconName ? React.createElement('span', { className: "icon-lib__copied-tooltip" }, "Copied!") : null
                    );
                  })
                )
              );
            })
          )
        ) : null,

        /* Icon grid */
        React.createElement('div', { className: "icon-lib__all" },
          React.createElement('h2', { className: "reward-section__heading" },
            searchQuery ? 'Search Results' : 'All Icons'
          ),

          filteredIcons.length === 0 ? React.createElement('div', { className: "icon-lib__empty" },
            React.createElement(Search, { size: 48, weight: 'duotone', className: "icon-lib__empty-icon" }),
            React.createElement('p', { className: "icon-lib__empty-text" },
              "No icons found matching \"", React.createElement('strong', null, searchQuery), "\""
            ),
            React.createElement('button', {
              onClick: function() { setSearchQuery(''); },
              className: "icon-lib__clear-btn funky-spring-hover"
            }, "Clear search")
          ) : React.createElement('div', { className: "icon-lib__grid" },
            filteredIcons.map(function(iconName) {
              var Ic = getIcon(iconName);
              if (!Ic) return null;
              return React.createElement('button', {
                key: iconName,
                onClick: function() { copyImportCode(iconName); },
                className: "icon-lib__icon-btn",
                title: iconName
              },
                React.createElement(Ic, { size: iconSize, weight: 'duotone', className: "icon-lib__icon-svg" }),
                React.createElement('span', { className: "icon-lib__icon-name" }, iconName),
                copiedIcon === iconName ? React.createElement('span', { className: "icon-lib__icon-badge icon-lib__icon-badge--done" },
                  React.createElement(Check, { size: 14, weight: 'bold' })
                ) : React.createElement('span', { className: "icon-lib__icon-badge icon-lib__icon-badge--copy" },
                  React.createElement(Copy, { size: 14, weight: 'bold' })
                )
              );
            })
          )
        ),

        /* Usage guide */
        React.createElement('div', { className: "icon-lib__usage funky-glass-panel" },
          React.createElement('h3', { className: "icon-lib__usage-title" }, "How to Use Icons"),
          React.createElement('ol', { className: "icon-lib__usage-steps" },
            React.createElement('li', null, React.createElement('strong', null, "Click any icon"), " to copy its import code"),
            React.createElement('li', null, React.createElement('strong', null, "Paste the import"), " at the top of your component"),
            React.createElement('li', null, React.createElement('strong', null, "Use the icon"), " in your React.createElement calls with size & weight props")
          ),
          React.createElement('div', { className: "icon-lib__usage-footer" },
            React.createElement('a', {
              href: "https://phosphoricons.com/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "icon-lib__docs-link"
            },
              React.createElement(ArrowSquareOut, { size: 16, weight: 'duotone' }),
              "View full Phosphor documentation"
            )
          )
        )
      )
    )
  );
}