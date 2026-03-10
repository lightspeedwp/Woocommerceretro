import React from 'react';
import * as ReactRouterModule from 'react-router';

var useParams = ReactRouterModule.useParams;
var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as PostCardModule from '../blog/PostCard';
import * as ArchivePaginationModule from '../patterns/ArchivePagination';
import * as ResultsCountModule from '../patterns/ResultsCount';
import * as PostsDataModule from '../../data/posts';
import * as UsersDataModule from '../../data/users';
import * as HeroDataModule from '../../data/heroData';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var PostCard = PostCardModule.PostCard;
var ArchivePagination = ArchivePaginationModule.ArchivePagination;
var ResultsCount = ResultsCountModule.ResultsCount;
var posts = PostsDataModule.posts;
var USERS = UsersDataModule.USERS;
var blogAuthorBaseHero = HeroDataModule.blogAuthorBaseHero;

/**
 * ArchiveAuthor Template — Funky Redesign
 *
 * Displays a list of blog posts filtered by author with pagination.
 * Maps to the WordPress author.php template.
 *
 * @template
 */
export function ArchiveAuthor() {
  var params = useParams();
  var authorSlug = params.authorSlug;
  var pageState = React.useState(1);
  var currentPage = pageState[0];
  var setCurrentPage = pageState[1];
  var postsPerPage = 9;

  var author = React.useMemo(function() {
    return USERS.find(function(u) { return u.slug === authorSlug; });
  }, [authorSlug]);

  var authorPosts = React.useMemo(function() {
    if (!author) return [];
    return posts.filter(function(post) { return post.author === author.id; });
  }, [author]);

  var authorName = author ? author.name : (authorSlug ? authorSlug.replace(/-/g, ' ').replace(/\b\w/g, function(char) { return char.toUpperCase(); }) : '');

  var postCount = authorPosts.length;
  var latestPostDate = authorPosts.length > 0 ? new Date(authorPosts[0].date).toLocaleDateString() : null;

  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = authorPosts.slice(indexOfFirstPost, indexOfLastPost);
  var totalPages = Math.ceil(authorPosts.length / postsPerPage);

  function handlePageChange(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var paginatedPosts = authorPosts.slice(indexOfFirstPost, indexOfLastPost);

  var heroConfig = Object.assign({}, blogAuthorBaseHero, {
    title: authorName || 'Author',
    subtitle: postCount > 0
      ? postCount + ' ' + (postCount === 1 ? 'article' : 'articles') + ' published' + (latestPostDate ? ' — Latest: ' + latestPostDate : '')
      : 'No posts found by this author.'
  });

  return React.createElement(Layout, null,
    React.createElement('div', { className: 'blog-archive' },
      React.createElement(FunkyHero, { config: heroConfig }),
      React.createElement('div', { className: 'blog-index__divider', 'aria-hidden': 'true' }),
      React.createElement('div', { className: 'blog-archive__body' },
        authorPosts.length > 0 && React.createElement(ResultsCount, {
          start: indexOfFirstPost + 1,
          end: Math.min(indexOfLastPost, authorPosts.length),
          total: postCount,
          itemType: 'article'
        }),
        paginatedPosts.length > 0 ? (
          React.createElement('div', { className: 'blog-archive__grid' },
            paginatedPosts.map(function(post) {
              return React.createElement(PostCard, { key: post.id, post: post });
            })
          )
        ) : (
          React.createElement('div', { className: 'blog-archive__empty' },
            React.createElement('p', null, "This author hasn't published any articles yet."),
            React.createElement(Link, { to: '/blog', className: 'blog-archive__empty-cta' }, 'View All Posts')
          )
        ),
        totalPages > 1 && React.createElement(ArchivePagination, {
          currentPage: currentPage,
          totalPages: totalPages,
          onPageChange: handlePageChange,
          ariaLabel: 'Author archive pagination'
        })
      )
    )
  );
}