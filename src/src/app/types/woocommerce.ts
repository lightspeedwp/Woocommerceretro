/**
 * WooCommerce Extended Type Definitions
 * 
 * Defines standard WooCommerce data structures plus extensions:
 * - Subscriptions
 * - Composite Products
 * - Product Bundles
 * 
 * @module types/woocommerce
 */

/**
 * @typedef {'simple'|'grouped'|'external'|'variable'|'subscription'|'variable-subscription'|'composite'|'bundle'} WCProductType
 */

/**
 * @typedef WCMetaData
 * @property {number} id
 * @property {string} key
 * @property {any} value
 */

/**
 * Base WooCommerce Product
 * Aligns with WC REST API v3
 * 
 * @typedef WCProduct
 * @property {number} id
 * @property {string} name
 * @property {string} slug
 * @property {string} permalink
 * @property {string} date_created
 * @property {string} date_modified
 * @property {WCProductType} type
 * @property {'publish'|'draft'|'pending'|'private'} status
 * @property {boolean} featured
 * @property {'visible'|'catalog'|'search'|'hidden'} catalog_visibility
 * @property {string} description
 * @property {string} short_description
 * @property {string} sku
 * @property {string} price
 * @property {string} regular_price
 * @property {string} sale_price
 * @property {string|null} date_on_sale_from
 * @property {string|null} date_on_sale_to
 * @property {string} price_html
 * @property {boolean} on_sale
 * @property {boolean} purchasable
 * @property {number} total_sales
 * @property {boolean} virtual
 * @property {boolean} downloadable
 * @property {Array<any>} downloads
 * @property {number} download_limit
 * @property {number} download_expiry
 * @property {string} external_url
 * @property {string} button_text
 * @property {'taxable'|'shipping'|'none'} tax_status
 * @property {string} tax_class
 * @property {boolean} manage_stock
 * @property {number|null} stock_quantity
 * @property {'instock'|'outofstock'|'onbackorder'} stock_status
 * @property {'no'|'notify'|'yes'} backorders
 * @property {boolean} backorders_allowed
 * @property {boolean} backordered
 * @property {boolean} sold_individually
 * @property {string} weight
 * @property {{length: string, width: string, height: string}} dimensions
 * @property {boolean} shipping_required
 * @property {boolean} shipping_taxable
 * @property {string} shipping_class
 * @property {number} shipping_class_id
 * @property {boolean} reviews_allowed
 * @property {string} average_rating
 * @property {number} rating_count
 * @property {Array<number>} related_ids
 * @property {Array<number>} upsell_ids
 * @property {Array<number>} cross_sell_ids
 * @property {number} parent_id
 * @property {string} purchase_note
 * @property {Array<{id: number, name: string, slug: string}>} categories
 * @property {Array<{id: number, name: string, slug: string}>} tags
 * @property {Array<{id: number, date_created: string, date_created_gmt: string, date_modified: string, date_modified_gmt: string, src: string, name: string, alt: string}>} images
 * @property {Array<{id: number, name: string, position: number, visible: boolean, variation: boolean, options: Array<string>}>} attributes
 * @property {Array<{id: number, name: string, option: string}>} default_attributes
 * @property {Array<number>} variations
 * @property {Array<number>} grouped_products
 * @property {number} menu_order
 * @property {Array<WCMetaData>} meta_data
 * @property {WCSubscriptionData} [subscription_data] - Custom Extensions Data
 * @property {WCCompositeData} [composite_data]
 * @property {WCBundleData} [bundle_data]
 */

/**
 * WooCommerce Subscriptions Data
 * @see https://woocommerce.com/document/subscriptions/develop/data-structure/
 * 
 * @typedef WCSubscriptionData
 * @property {'day'|'week'|'month'|'year'} billing_period
 * @property {number} billing_interval - e.g. every 2nd month
 * @property {'day'|'week'|'month'|'year'} trial_period
 * @property {number} trial_length
 * @property {string} sign_up_fee
 * @property {number} expire_after - 0 = never
 */

/**
 * WooCommerce Composite Products Data
 * @see https://woocommerce.com/document/composite-products-data-structures-storage/
 * 
 * @typedef WCCompositeData
 * @property {'componentized'|'progressive'} layout
 * @property {Array<WCCompositeComponent>} components
 */

/**
 * @typedef WCCompositeComponent
 * @property {string} id - Component ID
 * @property {string} title
 * @property {string} description
 * @property {'product_ids'|'category_ids'} query_type
 * @property {Array<number>} assigned_ids - IDs of products or categories
 * @property {number} [default_id]
 * @property {number} quantity_min
 * @property {number} quantity_max
 * @property {boolean} priced_individually
 * @property {boolean} shipped_individually
 * @property {number} discount - Percentage
 */

/**
 * WooCommerce Product Bundles Data
 * @see https://woocommerce.com/document/bundles/bundles-data-structures-storage/
 * 
 * @typedef WCBundleData
 * @property {'standard'|'tabular'|'grid'} layout
 * @property {Array<WCBundleItem>} bundled_items
 * @property {number} [min_bundle_size]
 * @property {number} [max_bundle_size]
 */

/**
 * @typedef WCBundleItem
 * @property {number} product_id
 * @property {number} quantity_min
 * @property {number} quantity_max
 * @property {number} quantity_default
 * @property {boolean} priced_individually
 * @property {boolean} shipped_individually
 * @property {number} discount - Percentage
 * @property {string} [override_title]
 * @property {string} [override_description]
 * @property {boolean} optional
 */
