import React, { useState } from 'react';
import { Container } from '../common/Container';
import { icons as lucideIcons } from 'lucide-react';
import { Search, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

/**
 * PageIconLibrary Template — Retro Redesign
 *
 * Comprehensive icon library browser for Lucide React icons.
 * Searchable, copyable, with neon hover accents.
 *
 * @template
 * @route /dev-tools/icons
 */
const PageIconLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIcon, setCopiedIcon] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState(24);

  const allIcons = Object.keys(lucideIcons).filter(
    (key) => typeof (lucideIcons as any)[key] === 'object'
  );

  const filteredIcons = searchQuery
    ? allIcons.filter((name) => name.toLowerCase().includes(searchQuery.toLowerCase()))
    : allIcons;

  const copyImportCode = (iconName: string) => {
    const code = `import { ${iconName} } from 'lucide-react';`;
    copyToClipboard(code);
    setCopiedIcon(iconName);
    setTimeout(() => {
      setCopiedIcon(null);
    }, 2000);
  };

  const getIcon = (name: string): React.ComponentType<any> | undefined => {
    return (lucideIcons as any)[name];
  };

  const categories = [
    { name: 'E-commerce', icons: ['ShoppingCart', 'ShoppingBag', 'CreditCard', 'Package', 'Truck', 'Tag', 'DollarSign'] },
    { name: 'Navigation', icons: ['Menu', 'X', 'Home', 'Search', 'User', 'Settings', 'ChevronRight', 'ChevronDown'] },
    { name: 'Social', icons: ['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube', 'Github'] },
    { name: 'Actions', icons: ['Plus', 'Minus', 'Pencil', 'Trash2', 'Save', 'Download', 'Upload', 'Share2'] },
    { name: 'Status', icons: ['Check', 'X', 'AlertCircle', 'Info', 'HelpCircle', 'Circle'] },
  ];

  return (
    <div className="page-rewards">
      {/* Header */}
      <section className="wp-page-intro-section">
        <Container>
          <div className="wp-page-intro-content">
            <div className="wp-badge-pill">
              <Sparkles size={16} />
              <span className="wp-badge-pill__text">Lucide React</span>
            </div>
            <h1>Icon Library</h1>
            <p className="wp-page-intro-text">
              {`Browse and search through ${allIcons.length}+ icons from Lucide React. Click any icon to copy its import code.`}
            </p>
          </div>
        </Container>
      </section>

      {/* Search + Controls */}
      <section className="reward-section">
        <Container>
          <div className="icon-lib__controls">
            <div className="icon-lib__search-wrap">
              <Search className="icon-lib__search-icon" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search icons... (e.g. 'shopping', 'user', 'arrow')"
                className="icon-lib__search-input funky-input-glow"
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
              />
              <span className="icon-lib__size-value">{`${iconSize}px`}</span>
            </div>
          </div>

          <div className="icon-lib__results-count">
            Showing <strong>{filteredIcons.length}</strong> icons
            {searchQuery && (
              <span>
                {' '}matching "<strong className="icon-lib__highlight">{searchQuery}</strong>"
              </span>
            )}
          </div>

          {/* Popular Categories */}
          {!searchQuery && (
            <div className="icon-lib__categories">
              <h2 className="reward-section__heading">Popular Categories</h2>
              <div className="icon-lib__category-grid">
                {categories.map((cat) => (
                  <div key={cat.name} className="icon-lib__category-card funky-glass-panel">
                    <h3 className="icon-lib__category-name">{cat.name}</h3>
                    <div className="icon-lib__category-icons">
                      {cat.icons.map((iconName) => {
                        const Ic = getIcon(iconName);
                        if (!Ic) return null;
                        return (
                          <button
                            key={iconName}
                            onClick={() => copyImportCode(iconName)}
                            className="icon-lib__category-btn"
                            title={iconName}
                          >
                            <Ic size={24} />
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
              {searchQuery ? 'Search Results' : 'All Icons'}
            </h2>

            {filteredIcons.length === 0 ? (
              <div className="icon-lib__empty">
                <Search size={48} className="icon-lib__empty-icon" />
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
                    >
                      <Ic size={iconSize} className="icon-lib__icon-svg" />
                      <span className="icon-lib__icon-name">{iconName}</span>
                      {copiedIcon === iconName ? (
                        <span className="icon-lib__icon-badge icon-lib__icon-badge--done">
                          <Check size={14} />
                        </span>
                      ) : (
                        <span className="icon-lib__icon-badge icon-lib__icon-badge--copy">
                          <Copy size={14} />
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
            <h3 className="icon-lib__usage-title">How to Use Icons</h3>
            <ol className="icon-lib__usage-steps">
              <li><strong>Click any icon</strong> to copy its import code</li>
              <li><strong>Paste the import</strong> at the top of your component</li>
              <li><strong>Use the icon</strong> in your JSX with size props</li>
            </ol>
            <div className="icon-lib__usage-footer">
              <a
                href="https://lucide.dev/icons/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-lib__docs-link"
              >
                <ExternalLink size={16} />
                View full Lucide documentation
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default PageIconLibrary;
