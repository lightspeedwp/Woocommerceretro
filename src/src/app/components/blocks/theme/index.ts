/**
 * Theme Blocks - WordPress Block Library Components
 * 
 * Optimized for Figma Make parser:
 * 1. No modern export-from syntax
 * 2. Named imports/exports
 */

import * as NavigationModule from './Navigation';
import * as SearchModule from './Search';
import * as SiteLogoModule from './SiteLogo';
import * as SiteTaglineModule from './SiteTagline';
import * as SiteTitleModule from './SiteTitle';
import * as TemplatePartModule from './TemplatePart';
import * as ThemeToggleModule from './ThemeToggle';

export var Navigation = NavigationModule.Navigation;
export var Search = SearchModule.Search;
export var SiteLogo = SiteLogoModule.SiteLogo;
export var WooCommerceLogo = SiteLogoModule.WooCommerceLogo;
export var SiteTagline = SiteTaglineModule.SiteTagline;
export var SiteTitle = SiteTitleModule.SiteTitle;
export var TemplatePart = TemplatePartModule.TemplatePart;
export var ThemeToggle = ThemeToggleModule.ThemeToggle;
