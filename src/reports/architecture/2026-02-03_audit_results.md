# Architecture Audit & Restructuring Plan

**Date:** February 3, 2026
**Type:** Architecture Audit
**Status:** ✅ Phase 1 Complete

## Executive Summary
This audit addresses the structural realignment of the codebase to match WordPress Block Theme standards. Phase 1 (Directory Setup & File Migration) is complete. Phase 2 (Content Generation & cleanup) is ready to begin.

## 1. Directory Structure Audit

### Status: ✅ Complete
- **Guideline Folders Created**:
  - `/guidelines/blocks/design/`
  - `/guidelines/blocks/media/`
  - `/guidelines/blocks/text/`
  - `/guidelines/blocks/theme/`
  - `/guidelines/blocks/widgets/`
  - `/guidelines/blocks/woocommerce/`
  - `/guidelines/blocks/embed/`
  - `/guidelines/parts/menus/`
  - `/guidelines/patterns/woocommerce/`
- **Styles Folders Created**:
  - `/src/styles/blocks/design/`
  - `/src/styles/blocks/widgets/`
  - (and aligned with block structure)

## 2. Component Migration

### Status: ✅ Phase 1 Complete
| Component | New Location | Status |
|-----------|-------------|--------|
| `Accordion` | `/src/app/components/blocks/design/Accordion.tsx` | ✅ Migrated |
| `Buttons` | `/src/app/components/blocks/design/Buttons.tsx` | ✅ Migrated |
| `Search` | `/guidelines/blocks/widgets/Search.md` | ✅ Consolidated |

*Note: `/src/app/components/ui/` still contains legacy Shadcn components that will need future migration.*

## 3. Guideline Reorganization

### Status: ✅ Complete
All requested guidelines have been moved to their correct subfolders:
- **Core Blocks**: Moved to `design`, `text`, `media`, `theme`.
- **WooCommerce Blocks**: Moved to `/guidelines/blocks/woocommerce/`.
- **Parts**: Moved to `/guidelines/parts/`.
- **Patterns**: Moved to `/guidelines/patterns/`.

## 4. CSS Architecture

### Status: ⚠️ In Progress
- **Completed**: `Buttons.css` aligned with `Buttons.tsx`.
- **Pending**: Verify CSS files for all other blocks (text, media, etc.) exist and are linked.

## 5. Missing Core Block Guidelines

The following guidelines need to be created to complete the WordPress Core Block alignment:

**Text Blocks:**
- Quote, Code, Details, Math, Preformatted, Pullquote, Table, Verse, Classic.

**Media Blocks:**
- Gallery, Audio, File, Media & Text, Video.

**Design Blocks:**
- Columns (exists?), More, Page Break, Separator (exists?), Stack (exists?), Row (exists?), Grid (exists?).

**Widgets Blocks:**
- Archives, Calendar, Categories List, Custom HTML, Latest Comments, Latest Posts, Page List, RSS, Shortcode, Tag Cloud.

**Theme Blocks:**
- Navigation, Site Logo, Site Title, Site Tagline, Query Loop, Post Template, Avatar, Title, Excerpt, Featured Image, Author, Date, Categories, Tags, Next/Prev Post, Read More, Comments, Login/out, Term Description, Archive Title, Search Results Title.

**Embed Blocks:**
- Embed, X, YouTube, WordPress, SoundCloud, Spotify, Flickr, Vimeo.

## 6. Next Steps
1. Create placeholder/full guidelines for the missing Core Blocks listed above.
2. Continue migrating `/src/app/components/ui/*.tsx` components to Blocks.
3. Validate CSS file existence for all blocks.
