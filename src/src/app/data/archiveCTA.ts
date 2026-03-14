/**
 * Archive CTA Data
 * 
 * Mock data for CTA sections used across archive templates.
 * Each archive type has its own CTA content optimized for conversion.
 * 
 * **Usage:**
 * Import the relevant CTA data for your archive template:
 * ```tsx
 * import * as ArchiveCTAModule from '@/data/archiveCTA';
 * var productArchiveCTA = ArchiveCTAModule.productArchiveCTA;
 * var blogArchiveCTA = ArchiveCTAModule.blogArchiveCTA;
 * ```
 * 
 * **CTA Types:**
 * - Product Archive: Encourage shopping, special offers
 * - Category Archive: Category-specific promotions
 * - Sale Archive: Urgency-driven conversions
 * - Blog Archive: Newsletter signups, content engagement
 * 
 * @module data/archiveCTA
 */

/**
 * @typedef CTAContent
 * @property {string} title - Main headline - short, action-oriented (max 60 chars)
 * @property {string} description - Supporting text - explain the benefit (max 120 chars)
 * @property {string} buttonText - Primary CTA button text - verb-driven (max 25 chars)
 * @property {string} formTitle - Form headline shown in modal
 * @property {string} formDescription - Form description shown in modal
 * @property {string} successMessage - Success message after form submission
 */

/**
 * Product Archive CTA
 * Used on: /shop, /shop/category/:slug
 * @type {CTAContent}
 */
export const productArchiveCTA = {
  title: "Can't find what you're looking for?",
  description: "Get personalized product recommendations from our team. Tell us what you need and we'll find it for you.",
  buttonText: "Get expert help",
  formTitle: "Let us help you find it",
  formDescription: "Share a few details about what you're searching for, and our team will get back to you with tailored recommendations within 24 hours.",
  successMessage: "Thanks! We'll send you personalized recommendations within 24 hours."
};

/**
 * Sale Archive CTA
 * Used on: /shop/sale
 * @type {CTAContent}
 */
export const saleArchiveCTA = {
  title: "Want early access to sales?",
  description: "Join our VIP list and get notified 24 hours before sales go live, plus exclusive discount codes.",
  buttonText: "Join VIP list",
  formTitle: "Get VIP sale access",
  formDescription: "Be the first to know about upcoming sales and receive exclusive early-bird discounts not available to regular customers.",
  successMessage: "You're in! Watch your inbox for exclusive sale alerts and VIP discount codes."
};

/**
 * New Arrivals CTA
 * Used on: /new-arrivals
 * @type {CTAContent}
 */
export const newArrivalsArchiveCTA = {
  title: "Never miss new drops",
  description: "Get instant notifications when new products launch. Be the first to shop our latest collections.",
  buttonText: "Get launch alerts",
  formTitle: "Stay ahead of the curve",
  formDescription: "Join our community and get exclusive first access to new products, limited editions, and restocks before they sell out.",
  successMessage: "Perfect! You'll be the first to know about new arrivals and exclusive launches."
};

/**
 * Category-Specific CTA
 * Used on: /shop/category/:slug with dynamic content
 * @type {CTAContent}
 */
export const categoryArchiveCTA = {
  title: "Need help choosing?",
  description: "Not sure which product is right for you? Our specialists can guide you to the perfect choice.",
  buttonText: "Talk to a specialist",
  formTitle: "Expert product guidance",
  formDescription: "Share your requirements and preferences, and our product specialists will recommend the best options for your specific needs.",
  successMessage: "Great! Our specialist team will reach out with personalized recommendations shortly."
};

/**
 * Blog Archive CTA
 * Used on: /blog, /blog/category/:slug
 * @type {CTAContent}
 */
export const blogArchiveCTA = {
  title: "Want more content like this?",
  description: "Get our latest guides, tips, and industry insights delivered straight to your inbox every week.",
  buttonText: "Subscribe now",
  formTitle: "Join our newsletter",
  formDescription: "Stay informed with expert articles, how-to guides, and exclusive content you won't find anywhere else.",
  successMessage: "You're subscribed! Check your inbox for a welcome message and our latest content."
};

/**
 * Tag Archive CTA
 * Used on: /shop/tag/:slug, /blog/tag/:slug
 * @type {CTAContent}
 */
export const tagArchiveCTA = {
  title: "Discover more like this",
  description: "Want personalized recommendations based on your interests? Let us curate a collection just for you.",
  buttonText: "Get personalized picks",
  formTitle: "Curated just for you",
  formDescription: "Tell us about your preferences and we'll handpick products that match your style and interests.",
  successMessage: "Awesome! We'll curate a personalized collection and send it your way soon."
};

/**
 * Author Archive CTA
 * Used on: /blog/author/:slug
 * @type {CTAContent}
 */
export const authorArchiveCTA = {
  title: "Follow this author",
  description: "Get notified when this author publishes new articles and exclusive insights from their expertise.",
  buttonText: "Follow author",
  formTitle: "Stay updated",
  formDescription: "Never miss an article from this author. Get email notifications for new posts and exclusive content.",
  successMessage: "You're now following this author! You'll receive notifications for new posts."
};

/**
 * Search Results CTA
 * Used on: /shop?s=query
 * @type {CTAContent}
 */
export const searchArchiveCTA = {
  title: "Didn't find what you need?",
  description: "We're constantly expanding our catalog. Let us know what you're searching for and we'll source it.",
  buttonText: "Request product",
  formTitle: "Product request",
  formDescription: "Can't find what you're looking for? Share details about the product you need and we'll do our best to add it to our store.",
  successMessage: "Request received! We'll explore sourcing options and notify you if we add it to our catalog."
};