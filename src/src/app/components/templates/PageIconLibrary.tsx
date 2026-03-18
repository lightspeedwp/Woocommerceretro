import React, { useState, useMemo } from 'react';
import { Container } from '../common/Container';
import * as PhosphorIcons from '@phosphor-icons/react';
import { copyToClipboard } from '../../utils/clipboard';

/**
 * PageIconLibrary Template — Retro Redesign
 *
 * Comprehensive icon library browser for Phosphor React icons.
 * Searchable, copyable, with duotone weight showcase and neon hover accents.
 *
 * @template
 * @route /dev-tools/icons
 */

type PhosphorWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

const WEIGHTS: PhosphorWeight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

/**
 * Curated icon registry — all icons used across PlayPocket + popular extras.
 * Organized by functional category for browsing.
 */
const ICON_CATEGORIES: { name: string; icons: string[] }[] = [
  {
    name: 'E-commerce',
    icons: [
      'ShoppingCart', 'ShoppingBag', 'CreditCard', 'Package', 'Truck', 'Tag',
      'CurrencyDollar', 'Storefront', 'Wallet', 'Scales', 'Percent', 'Gift',
      'Ticket', 'TagSimple', 'Bank', 'Barcode',
    ],
  },
  {
    name: 'Navigation',
    icons: [
      'List', 'X', 'House', 'MagnifyingGlass', 'User', 'GearSix',
      'CaretRight', 'CaretDown', 'CaretLeft', 'CaretUp',
      'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowSquareOut',
      'SidebarSimple', 'DotsThree', 'FadersHorizontal', 'Funnel',
    ],
  },
  {
    name: 'Social',
    icons: [
      'FacebookLogo', 'TwitterLogo', 'InstagramLogo', 'LinkedinLogo',
      'YoutubeLogo', 'TiktokLogo', 'PinterestLogo', 'ShareNetwork',
    ],
  },
  {
    name: 'Actions',
    icons: [
      'Plus', 'Minus', 'PencilSimple', 'Trash', 'Download', 'DownloadSimple',
      'Copy', 'ArrowsClockwise', 'ArrowCounterClockwise', 'MagicWand',
      'PaperPlaneTilt', 'SignIn', 'SignOut', 'CursorClick',
    ],
  },
  {
    name: 'Status',
    icons: [
      'Check', 'CheckCircle', 'XCircle', 'WarningCircle', 'Warning',
      'Info', 'Question', 'SpinnerGap', 'Circle', 'CircleHalf',
      'ShieldCheck', 'Gauge', 'Lightning', 'Fire',
    ],
  },
  {
    name: 'Gaming & Retro',
    icons: [
      'GameController', 'Joystick', 'Ghost', 'Sword', 'ShieldChevron',
      'Trophy', 'Medal', 'Crown', 'Flag', 'Target', 'Rocket', 'Sparkle',
    ],
  },
  {
    name: 'Media',
    icons: [
      'Camera', 'VideoCamera', 'Microphone', 'Headphones', 'Play', 'Pause',
      'SkipBack', 'SkipForward', 'SpeakerHigh', 'SpeakerSlash',
      'PlayCircle', 'MonitorPlay', 'Image', 'Images',
    ],
  },
  {
    name: 'Content',
    icons: [
      'FileText', 'Article', 'BookOpen', 'BookOpenText', 'Newspaper',
      'Quotes', 'Scroll', 'Folder', 'Code', 'GitCommit',
    ],
  },
  {
    name: 'Communication',
    icons: [
      'EnvelopeSimple', 'Envelope', 'ChatCircle', 'Chat', 'ChatDots',
      'ChatText', 'ChatCircleDots', 'Bell', 'Megaphone', 'Phone',
    ],
  },
  {
    name: 'People',
    icons: [
      'User', 'Users', 'UsersThree', 'UserPlus', 'UserCircle',
      'Smiley', 'Handshake', 'GraduationCap', 'Briefcase',
    ],
  },
  {
    name: 'Design & Layout',
    icons: [
      'Palette', 'PaintBrush', 'TextT', 'TextAa', 'Ruler', 'Drop',
      'GridFour', 'SquaresFour', 'Layout', 'Stack', 'Cube', 'ArrowsOut',
    ],
  },
  {
    name: 'Misc',
    icons: [
      'Sun', 'Moon', 'Globe', 'MapPin', 'MapTrifold', 'Calendar',
      'CalendarBlank', 'Timer', 'Clock', 'Watch', 'Key', 'Lock', 'Shield',
      'Lightbulb', 'Thermometer', 'Wind', 'Recycle', 'Leaf', 'Tree',
      'Coffee', 'Cookie', 'Keyboard', 'Monitor', 'Desktop', 'DeviceMobile',
      'TShirt', 'Couch', 'Buildings', 'Airplane', 'Lifebuoy',
    ],
  },
];

// Build a flat, deduplicated list of all icon names
const ALL_ICON_NAMES = (() => {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const cat of ICON_CATEGORIES) {
    for (const name of cat.icons) {
      if (!seen.has(name)) {
        seen.add(name);
        result.push(name);
      }
    }
  }
  return result.sort();
})();

const getIcon = (name: string): React.ComponentType<any> | undefined => {
  return (PhosphorIcons as any)[name];
};

export const PageIconLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState(24);
  const [activeWeight, setActiveWeight] = useState<PhosphorWeight>('regular');

  const filteredIcons = useMemo(() => {
    if (!searchQuery) return ALL_ICON_NAMES;
    const lower = searchQuery.toLowerCase();
    return ALL_ICON_NAMES.filter((name) => name.toLowerCase().includes(lower));
  }, [searchQuery]);

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return ICON_CATEGORIES;
    const lower = searchQuery.toLowerCase();
    return ICON_CATEGORIES
      .map((cat) => ({
        ...cat,
        icons: cat.icons.filter((name) => name.toLowerCase().includes(lower)),
      }))
      .filter((cat) => cat.icons.length > 0);
  }, [searchQuery]);

  const copyImportCode = (iconName: string) => {
    const code = `import { ${iconName} } from '@phosphor-icons/react';`;
    copyToClipboard(code);
    setCopiedIcon(iconName);
    setTimeout(() => {
      setCopiedIcon(null);
    }, 2000);
  };

  return (
    <div className="page-rewards">
      {/* Header */}
      <section className="wp-page-intro-section">
        <Container>
          <div className="wp-page-intro-content">
            <div className="wp-badge-pill">
              <PhosphorIcons.Sparkle size={16} weight="fill" />
              <span className="wp-badge-pill__text">Phosphor Icons</span>
            </div>
            <h1>Icon library</h1>
            <p className="wp-page-intro-text">
              {`Browse and search through ${ALL_ICON_NAMES.length}+ icons from Phosphor React. Click any icon to copy its import code. Supports 6 weights including duotone.`}
            </p>
          </div>
        </Container>
      </section>

      {/* Search + Controls */}
      <section className="reward-section">
        <Container>
          <div className="icon-lib__controls">
            <div className="icon-lib__search-wrap">
              <PhosphorIcons.MagnifyingGlass className="icon-lib__search-icon" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search icons... (e.g. 'shopping', 'user', 'arrow')"
                className="icon-lib__search-input funky-input-glow"
                aria-label="Search icons"
              />
            </div>
            <div className="icon-lib__size-control">
              <span className="icon-lib__size-label">Size:</span>
              <input
                type="range"
                min="16"
                max="48"
                value={iconSize}
                onChange={(e) => setIconSize(Number(e.target.value))}
                className="icon-lib__size-range"
                aria-label="Icon size"
              />
              <span className="icon-lib__size-value">{`${iconSize}px`}</span>
            </div>
          </div>

          {/* Weight selector */}
          <div className="icon-lib__weight-bar">
            <span className="icon-lib__weight-label">Weight:</span>
            <div className="icon-lib__weight-options">
              {WEIGHTS.map((w) => (
                <button
                  key={w}
                  onClick={() => setActiveWeight(w)}
                  className={`icon-lib__weight-btn${activeWeight === w ? ' icon-lib__weight-btn--active' : ''}`}
                  aria-pressed={activeWeight === w}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="icon-lib__results-count">
            Showing <strong>{filteredIcons.length}</strong> icons
            {searchQuery && (
              <span>
                {' '}matching "<strong className="icon-lib__highlight">{searchQuery}</strong>"
              </span>
            )}
            {' '}in <strong>{activeWeight}</strong> weight
          </div>

          {/* Category cards (no search) */}
          {!searchQuery && (
            <div className="icon-lib__categories">
              <h2 className="reward-section__heading">Browse by category</h2>
              <div className="icon-lib__category-grid">
                {ICON_CATEGORIES.map((cat) => (
                  <div key={cat.name} className="icon-lib__category-card funky-glass-panel">
                    <h3 className="icon-lib__category-name">{cat.name}</h3>
                    <div className="icon-lib__category-icons">
                      {cat.icons.slice(0, 8).map((iconName) => {
                        const Ic = getIcon(iconName);
                        if (!Ic) return null;
                        return (
                          <button
                            key={iconName}
                            onClick={() => copyImportCode(iconName)}
                            className="icon-lib__category-btn"
                            title={iconName}
                            aria-label={`Copy import for ${iconName}`}
                          >
                            <Ic size={24} weight={activeWeight} />
                            {copiedIcon === iconName && (
                              <span className="icon-lib__copied-tooltip">Copied!</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Icon grid */}
          <div className="icon-lib__all">
            <h2 className="reward-section__heading">
              {searchQuery ? 'Search results' : 'All icons'}
            </h2>

            {filteredIcons.length === 0 ? (
              <div className="icon-lib__empty">
                <PhosphorIcons.MagnifyingGlass size={48} className="icon-lib__empty-icon" weight="duotone" />
                <p className="icon-lib__empty-text">
                  No icons found matching "<strong>{searchQuery}</strong>"
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="icon-lib__clear-btn funky-spring-hover"
                >
                  Clear search
                </button>
              </div>
            ) : (
              <div className="icon-lib__grid">
                {filteredIcons.map((iconName) => {
                  const Ic = getIcon(iconName);
                  if (!Ic) return null;
                  return (
                    <button
                      key={iconName}
                      onClick={() => copyImportCode(iconName)}
                      className="icon-lib__icon-btn"
                      title={iconName}
                      aria-label={`Copy import for ${iconName}`}
                    >
                      <Ic size={iconSize} weight={activeWeight} className="icon-lib__icon-svg" />
                      <span className="icon-lib__icon-name">{iconName}</span>
                      {copiedIcon === iconName ? (
                        <span className="icon-lib__icon-badge icon-lib__icon-badge--done">
                          <PhosphorIcons.Check size={14} />
                        </span>
                      ) : (
                        <span className="icon-lib__icon-badge icon-lib__icon-badge--copy">
                          <PhosphorIcons.Copy size={14} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Usage guide */}
          <div className="icon-lib__usage funky-glass-panel">
            <h3 className="icon-lib__usage-title">How to use icons</h3>
            <ol className="icon-lib__usage-steps">
              <li><strong>Click any icon</strong> to copy its import code</li>
              <li><strong>Paste the import</strong> at the top of your component</li>
              <li><strong>Use the icon</strong> in your JSX with <code>size</code> and <code>weight</code> props</li>
            </ol>
            <div className="icon-lib__usage-example">
              <code className="icon-lib__code-block">
                {`<ShoppingCart size={24} weight="duotone" />`}
              </code>
            </div>
            <div className="icon-lib__usage-footer">
              <a
                href="https://phosphoricons.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-lib__docs-link"
              >
                <PhosphorIcons.ArrowSquareOut size={16} />
                View full Phosphor documentation
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default PageIconLibrary;
