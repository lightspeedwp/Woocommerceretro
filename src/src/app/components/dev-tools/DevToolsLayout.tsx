import React from 'react';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;

/**
 * DevToolsLayout Component
 */
export function DevToolsLayout(props) {
  var title = props.title;
  var description = props.description;
  var category = props.category;
  var badgeIcon = props.badgeIcon;
  var badgeText = props.badgeText;
  var stats = props.stats || [];
  var children = props.children;
  var footer = props.footer;

  var categoryConfig = {
    testing: {
      gradient: 'from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900',
      badgeColor: 'bg-blue-600',
      defaultBadgeText: 'Testing & QA'
    },
    components: {
      gradient: 'from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900',
      badgeColor: 'bg-purple-600',
      defaultBadgeText: 'Components & APIs'
    },
    design: {
      gradient: 'from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900',
      badgeColor: 'bg-green-600',
      defaultBadgeText: 'Design System'
    },
    showcases: {
      gradient: 'from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900',
      badgeColor: 'bg-orange-600',
      defaultBadgeText: 'Component Showcases'
    }
  };

  var config = categoryConfig[category];
  var finalBadgeText = badgeText || config.defaultBadgeText;

  var statColorMap = {
    blue: 'text-blue-600 dark:text-blue-400',
    purple: 'text-purple-600 dark:text-purple-400',
    green: 'text-green-600 dark:text-green-400',
    orange: 'text-orange-600 dark:text-orange-400',
    pink: 'text-pink-600 dark:text-pink-400'
  };

  var statElements = stats.map(function(stat, idx) {
    var colorClass = stat.color ? statColorMap[stat.color] : 'text-gray-600 dark:text-gray-400';
    return React.createElement('div', {
      key: idx,
      className: 'flex flex-col'
    },
      React.createElement('span', {
        className: 'text-2xl font-bold ' + colorClass
      }, stat.value),
      React.createElement('span', {
        className: 'text-sm text-gray-600 dark:text-gray-400'
      }, stat.label)
    );
  });

  var statsBar = stats.length > 0 ? React.createElement('div', {
    className: 'flex gap-8 mb-8 pb-6 border-b border-gray-200 dark:border-gray-700'
  }, statElements) : null;

  var badge = React.createElement('div', {
    className: 'inline-flex items-center gap-2 px-3 py-1.5 rounded-full ' + config.badgeColor + ' text-white text-sm font-medium mb-4'
  },
    badgeIcon,
    React.createElement('span', null, finalBadgeText)
  );

  var heading = React.createElement('h1', {
    className: 'text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4'
  }, title);

  var desc = React.createElement('p', {
    className: 'text-lg text-gray-600 dark:text-gray-400 mb-8'
  }, description);

  var header = React.createElement('div', {
    className: 'bg-gradient-to-br ' + config.gradient + ' border-b border-gray-200 dark:border-gray-700 py-12'
  },
    React.createElement(Container, { variant: 'site' },
      badge,
      heading,
      desc,
      statsBar
    )
  );

  var main = React.createElement('div', {
    className: 'py-12'
  },
    React.createElement(Container, { variant: 'site' }, children)
  );

  return React.createElement(Layout, null,
    header,
    main,
    footer
  );
}
