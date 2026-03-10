import React from 'react';

var useState = React.useState;
var useMemo = React.useMemo;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as PostCardModule from '../blog/PostCard';
import * as ArchivePaginationModule from '../patterns/ArchivePagination';
import * as ResultsCountModule from '../patterns/ResultsCount';
import * as NewsletterModule from '../patterns/NewsletterCTA';
import * as PostsDataModule from '../../data/posts';
import * as CategoriesDataModule from '../../data/categories';
import { Funnel as Filter } from '@phosphor-icons/react';

import * as CategoryFilterModule from '../blocks/blog/CategoryFilter';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var PostCard = PostCardModule.PostCard;
var ArchivePagination = ArchivePaginationModule.ArchivePagination;
var ResultsCount = ResultsCountModule.ResultsCount;
var NewsletterCTA = NewsletterModule.NewsletterCTA;
var posts = PostsDataModule.posts;
var postCategories = CategoriesDataModule.postCategories;
var CategoryFilter = CategoryFilterModule.CategoryFilter;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var blogHero = HeroDataModule.blogHero;

/**
 * BlogIndex Template — Funky Redesign
 *
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
function BlogIndex() {
  var prefersReduced = usePrefersReducedMotion();
  var pageState = useState(1);
  var currentPage = pageState[0];
  var setCurrentPage = pageState[1];
  var catState = useState('all');
  var selectedCategory = catState[0];
  var setSelectedCategory = catState[1];
  var filterState = useState(false);
  var isMobileFilterOpen = filterState[0];
  var setIsMobileFilterOpen = filterState[1];
  var postsPerPage = 9;

  var safePosts = Array.isArray(posts) ? posts : [];

  var allCategories = useMemo(function() {
    var cats = [];
    for (var i = 0; i < postCategories.length; i++) {
      cats.push({ slug: postCategories[i].slug, name: postCategories[i].name });
    }
    return cats;
  }, []);

  var filteredPosts = useMemo(function() {
    if (selectedCategory === 'all') return safePosts;
    
    var category = null;
    for (var i = 0; i < postCategories.length; i++) {
      if (postCategories[i].slug === selectedCategory) {
        category = postCategories[i];
        break;
      }
    }
    
    if (!category) return [];
    
    var filtered = [];
    for (var i = 0; i < safePosts.length; i++) {
      var post = safePosts[i];
      if (post.categories && Array.isArray(post.categories)) {
        var hasCategory = false;
        for (var j = 0; j < post.categories.length; j++) {
          if (post.categories[j] === category.id) {
            hasCategory = true;
            break;
          }
        }
        if (hasCategory) {
          filtered.push(post);
        }
      }
    }
    return filtered;
  }, [selectedCategory, safePosts]);

  var totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  function handleCategoryChange(categorySlug) {
    setSelectedCategory(categorySlug);
    setCurrentPage(1);
  }

  var currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return React.createElement(Layout, null,
    React.createElement('div', { className: "blog-index" },
      /* Hero (shared FunkyHero) */
      React.createElement(FunkyHero, { config: blogHero }),

      /* Gradient Divider */
      React.createElement('div', { className: "blog-index__divider", "aria-hidden": "true" }),

      /* Body */
      React.createElement('div', { className: "blog-index__body" },
        /* Category Filter */
        React.createElement('div', { className: "blog-index__filter-section" },
          React.createElement('div', { className: "blog-index__mobile-filter" },
            React.createElement('button', {
              onClick: function() { setIsMobileFilterOpen(true); },
              className: "blog-index__filter-button",
              "aria-label": "Open category filter"
            },
              React.createElement(Filter, { size: 18, "aria-hidden": "true" }),
              React.createElement('strong', null, "Filter by Category")
            )
          ),

          React.createElement(CategoryFilter, {
            categories: allCategories,
            selectedCategory: selectedCategory,
            onCategoryChange: handleCategoryChange,
            isOpenMobile: isMobileFilterOpen,
            onCloseMobile: function() { setIsMobileFilterOpen(false); }
          })
        ),

        /* Results Count */
        React.createElement(ResultsCount, {
          start: filteredPosts.length === 0 ? 0 : (currentPage - 1) * postsPerPage + 1,
          end: Math.min(currentPage * postsPerPage, filteredPosts.length),
          total: filteredPosts.length,
          itemType: "post"
        }),

        /* Post Grid — glow cards */
        currentPosts.length > 0 ? React.createElement('div', { className: "blog-index__grid" },
          currentPosts.map(function(post, index) {
            var postCard = React.createElement(PostCard, { key: post.id, post: post });
            if (index === 5) {
              return React.createElement(React.Fragment, { key: post.id + '_with_cta' },
                postCard,
                React.createElement('div', { className: 'blog-index__newsletter-wrapper', style: { gridColumn: '1 / -1', margin: 'var(--wp--preset--spacing--60) 0' } },
                  React.createElement(NewsletterCTA, { variant: 'compact' })
                )
              );
            }
            return postCard;
          })
        ) : React.createElement('div', { className: "blog-index__empty" },
          React.createElement('p', null, "No posts found in this category.")
        ),

        /* Pagination */
        totalPages > 1 ? React.createElement(ArchivePagination, {
          currentPage: currentPage,
          totalPages: totalPages,
          onPageChange: function(page) { setCurrentPage(page); },
          ariaLabel: "Blog pagination"
        }) : null
      )
    )
  );
}

export { BlogIndex };
export default BlogIndex;