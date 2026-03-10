/**
 * RelatedPosts.tsx - Blog Pattern
 * 
 * Displays related blog posts.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. No optional chaining (?.)
 * 5. Named functions
 * 6. ASCII only
 */

import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as TypographyModule from '../common/Typography';
import * as PostsData from '../../data/posts';
import * as CategoriesData from '../../data/categories';

var Link = ReactRouterModule.Link;
var Typography = TypographyModule.Typography;
var posts = PostsData.posts;
var getMediaSource = PostsData.getMediaSource;
var postCategories = CategoriesData.postCategories;

export function RelatedPosts(props) {
  var currentPost = props.currentPost;
  var allPosts = props.allPosts || posts;
  var maxPosts = props.maxPosts || 3;

  var relatedItems = allPosts
    .filter(function(post) { return post.slug !== currentPost.slug; })
    .map(function(post) {
      var score = 0;
      var sharedCategories = post.categories.filter(function(catId) {
        return currentPost.categories.indexOf(catId) !== -1;
      });
      score += sharedCategories.length * 3;
      var sharedTags = post.tags.filter(function(tagId) {
        return currentPost.tags.indexOf(tagId) !== -1;
      });
      score += sharedTags.length * 1;
      return { post: post, score: score };
    })
    .filter(function(item) { return item.score > 0; })
    .sort(function(a, b) { return b.score - a.score; })
    .slice(0, maxPosts)
    .map(function(item) { return item.post; });

  var postsToShow = relatedItems.length > 0 
    ? relatedItems 
    : allPosts
        .filter(function(post) { return post.slug !== currentPost.slug; })
        .slice(0, maxPosts);

  if (postsToShow.length === 0) {
    return null;
  }

  var titleText = relatedItems.length > 0 ? 'Related Articles' : 'More from Our Blog';
  var heading = React.createElement(Typography, { 
    variant: "h2", 
    className: "wp-related-posts__heading" 
  }, titleText);

  var postCards = postsToShow.map(function(post) {
    var categoryName = null;
    if (post.categories.length > 0) {
      var catId = post.categories[0];
      var foundCat = postCategories.find(function(c) { return c.id === catId; });
      categoryName = foundCat ? foundCat.name : null;
    }

    var imgWrapper = React.createElement('div', { className: "wp-related-posts__image-wrapper" },
      React.createElement('img', { 
        src: getMediaSource(post.featured_media), 
        alt: "", 
        className: "wp-related-posts__image" 
      })
    );

    var categoryLabel = categoryName ? React.createElement('div', { className: "wp-related-posts__category" },
      React.createElement('span', { className: "wp-related-posts__category-label" },
        React.createElement('small', null, React.createElement('strong', null, categoryName))
      )
    ) : null;

    var postTitle = React.createElement(Typography, { 
      variant: "h4", 
      className: "wp-related-posts__title", 
      dangerouslySetInnerHTML: { __html: post.title.rendered } 
    });

    var postExcerpt = React.createElement('div', { 
      className: "wp-related-posts__excerpt", 
      dangerouslySetInnerHTML: { __html: post.excerpt.rendered } 
    });

    var meta = React.createElement('div', { className: "wp-related-posts__meta" }, [
      React.createElement('span', { className: "wp-related-posts__date", key: "d" },
        React.createElement('small', null, new Date(post.date).toLocaleDateString())
      ),
      React.createElement('span', { className: "wp-related-posts__read-more", key: "r" }, [
        React.createElement('small', null, React.createElement('strong', null, 'Read more')),
        React.createElement(ArrowRight, { size: 14 })
      ])
    ]);

    var cardContent = React.createElement('div', { className: "wp-related-posts__content" }, [
      categoryLabel,
      postTitle,
      postExcerpt,
      meta
    ]);

    var cardLink = React.createElement(Link, { to: "/blog/" + post.slug }, [imgWrapper, cardContent]);

    return React.createElement('article', { 
      key: post.slug,
      className: "wp-related-posts__card"
    }, cardLink);
  });

  var grid = React.createElement('div', { className: "wp-related-posts__grid" }, postCards);

  return React.createElement('section', { className: "wp-related-posts" }, [heading, grid]);
}

RelatedPosts.displayName = 'RelatedPosts';