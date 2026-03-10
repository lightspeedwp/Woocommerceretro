import React from 'react';
import * as ReactRouterModule from 'react-router';

var useParams = ReactRouterModule.useParams;
var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as PostCardModule from '../blog/PostCard';
import * as PostsDataModule from '../../data/posts';
import * as CategoriesDataModule from '../../data/categories';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var PostCard = PostCardModule.PostCard;
var posts = PostsDataModule.posts;
var postCategories = CategoriesDataModule.postCategories;
var blogCategoryBaseHero = HeroDataModule.blogCategoryBaseHero;

/**
 * ArchiveCategory Template — Funky Redesign
 *
 * Displays a list of blog posts filtered by category.
 * Maps to the WordPress category.php template.
 *
 * @template
 */
export function ArchiveCategory() {
  var params = useParams();
  var categorySlug = params.categorySlug;

  var category = React.useMemo(function() {
    return postCategories.find(function(c) { return c.slug === categorySlug; });
  }, [categorySlug]);

  var categoryPosts = React.useMemo(function() {
    if (!category) return [];
    return posts.filter(function(post) { return post.categories && post.categories.includes(category.id); });
  }, [category]);

  var categoryName = category ? category.name : (categorySlug ? categorySlug.replace(/-/g, ' ') : '');

  var heroConfig = Object.assign({}, blogCategoryBaseHero, {
    title: categoryName || 'Category',
    subtitle: categoryPosts.length > 0
      ? categoryPosts.length + ' ' + (categoryPosts.length === 1 ? 'article' : 'articles')
      : undefined
  });

  return React.createElement(Layout, null,
    React.createElement('div', { className: 'blog-archive' },
      React.createElement(FunkyHero, { config: heroConfig }),
      React.createElement('div', { className: 'blog-index__divider', 'aria-hidden': 'true' }),
      React.createElement('div', { className: 'blog-archive__body' },
        categoryPosts.length > 0 ? (
          React.createElement('div', { className: 'blog-archive__grid' },
            categoryPosts.map(function(post) {
              return React.createElement(PostCard, { key: post.id, post: post });
            })
          )
        ) : (
          React.createElement('div', { className: 'blog-archive__empty' },
            React.createElement('p', null, 'No posts found in this category.'),
            React.createElement(Link, { to: '/blog', className: 'blog-archive__empty-cta' }, 'View All Posts')
          )
        )
      )
    )
  );
}