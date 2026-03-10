/**
 * WordPress Core Type Definitions
 * 
 * Defines standard WordPress data structures including Post Formats,
 * Taxonomies, and Post Types.
 * 
 * @module types/wordpress
 */

/**
 * WordPress Post Formats
 * @typedef {'standard'|'aside'|'gallery'|'link'|'image'|'quote'|'status'|'video'|'audio'|'chat'} WPPostFormat
 * @see https://developer.wordpress.org/advanced-administration/wordpress/post-formats/
 */

/**
 * WordPress Taxonomy: Category
 * 
 * @typedef WPCategory
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [description]
 * @property {number} [parent]
 * @property {number} [count]
 * @property {string} [link]
 */

/**
 * WordPress Taxonomy: Tag
 * 
 * @typedef WPTag
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} [description]
 * @property {number} [count]
 * @property {string} [link]
 */

/**
 * WordPress Author
 * 
 * @typedef WPAuthor
 * @property {number} id
 * @property {string} name
 * @property {string} [url]
 * @property {string} [description]
 * @property {Object<string, string>} [avatar_urls]
 */

/**
 * WordPress Standard Post
 * Extended with format-specific fields
 * 
 * @typedef WPPost
 * @property {number} id
 * @property {string} date
 * @property {string} date_gmt
 * @property {string} modified
 * @property {string} modified_gmt
 * @property {string} slug
 * @property {'publish'|'future'|'draft'|'pending'|'private'} status
 * @property {'post'|'page'|'attachment'|'revision'|'nav_menu_item'} type
 * @property {string} link
 * @property {{rendered: string}} title
 * @property {{rendered: string, protected: boolean}} content
 * @property {{rendered: string, protected: boolean}} excerpt
 * @property {number} author - ID
 * @property {number} featured_media - ID
 * @property {'open'|'closed'} comment_status
 * @property {'open'|'closed'} ping_status
 * @property {boolean} sticky
 * @property {string} template
 * @property {WPPostFormat} format
 * @property {Array<any>} meta
 * @property {Array<number>} categories - IDs
 * @property {Array<number>} tags - IDs
 * @property {Object} [format_data] - Format Specific Data (Mocking how themes might handle them via custom fields or block data)
 * @property {string} [format_data.audio_url] - Audio Format
 * @property {number} [format_data.podcast_episode_number]
 * @property {number} [format_data.podcast_season]
 * @property {string} [format_data.video_url] - Video Format (YouTube/Vimeo)
 * @property {string} [format_data.video_duration]
 * @property {Array<number>} [format_data.gallery_images] - Gallery Format (Media IDs)
 * @property {string} [format_data.instagram_link]
 * @property {string} [format_data.aside_text] - Aside Format
 * @property {string} [format_data.link_url] - Link Format
 */

/**
 * Media Item
 * 
 * @typedef WPMedia
 * @property {number} id
 * @property {string} date
 * @property {string} slug
 * @property {'attachment'} type
 * @property {string} link
 * @property {{rendered: string}} title
 * @property {number} author
 * @property {string} alt_text
 * @property {'image'|'file'} media_type
 * @property {string} mime_type
 * @property {Object} media_details
 * @property {number} media_details.width
 * @property {number} media_details.height
 * @property {string} media_details.file
 * @property {Object<string, {file: string, width: number, height: number, mime_type: string, source_url: string}>} media_details.sizes
 * @property {string} source_url
 */
