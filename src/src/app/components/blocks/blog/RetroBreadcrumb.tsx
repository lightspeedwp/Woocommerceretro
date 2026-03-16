/**
 * RetroBreadcrumb
 *
 * Shared breadcrumb for all blog templates.
 * Uses WordPress BEM breadcrumb classes with retro overrides.
 * WCAG AA 2.2 compliant.
 */

import { Link } from 'react-router';
import { CaretRight } from '../../../utils/phosphor-compat';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface RetroBreadcrumbProps {
  items: BreadcrumbItem[];
}

export const RetroBreadcrumb = ({ items }: RetroBreadcrumbProps) => {
  return (
    <nav className="retro-breadcrumb" aria-label="Breadcrumb">
      <ol className="retro-breadcrumb__list">
        <li className="retro-breadcrumb__item">
          <Link to="/" className="retro-breadcrumb__link retro-font-display retro-bold">
            HOME
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="retro-breadcrumb__item">
              <span className="retro-breadcrumb__separator" aria-hidden="true">
                <CaretRight size={10} weight="bold" />
              </span>
              {isLast || !item.href ? (
                <span
                  className="retro-breadcrumb__current retro-font-display retro-bold"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="retro-breadcrumb__link retro-font-display retro-bold"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

RetroBreadcrumb.displayName = 'RetroBreadcrumb';
