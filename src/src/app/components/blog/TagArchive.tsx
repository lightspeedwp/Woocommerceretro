import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Tag } from '@phosphor-icons/react';

var useMemo = React.useMemo;
var useParams = ReactRouterModule.useParams;
var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as ArchiveHeaderModule from '../patterns/ArchiveHeader';
import * as PostGridModule from '../patterns/PostGrid';
import * as PostsDataModule from '../../data/posts';
import * as TagsDataModule from '../../data/tags';
import * as ButtonsModule from '../blocks/design/Buttons';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var ArchiveHeader = ArchiveHeaderModule.ArchiveHeader;
var PostGrid = PostGridModule.PostGrid;
var posts = PostsDataModule.posts;
var tags = TagsDataModule.tags;
var Button = ButtonsModule.Button;

/**
 * TagArchive Template
 * 
 * Displays a list of blog posts filtered by tag.
 * Maps to the WordPress `tag.php` template.
 * 
 * @template
 * @example
 * Route: /blog/tag/productivity
 */
export function TagArchive() {
  var params = useParams();
  var tagSlug = params.tagSlug;
  
  // Resolve tag from slug
  var tag = useMemo(function() {
    return tags.find(function(t) { return t.slug === tagSlug; });
  }, [tagSlug]);

  // Find posts with this tag
  var tagPosts = useMemo(function() {
    if (!tag) return [];
    return posts.filter(function(post) { 
      return post.tags.indexOf(tag.id) !== -1;
    });
  }, [tag]);
  
  // Derive tag name
  var tagName = tag ? tag.name : (tagSlug ? tagSlug.replace(/-/g, ' ') : '');

  var metadataLabel = tagPosts.length > 0 ? [tagPosts.length, ' ', tagPosts.length === 1 ? 'article' : 'articles'].join('') : undefined;

  return (
    React.createElement(Layout, null,
      React.createElement(Container, { className: "wp-blog-archive__container" },
        /* Archive Header */
        React.createElement(ArchiveHeader, {
          icon: React.createElement(Tag, { size: 40 }),
          iconColor: "blue",
          label: "Tag",
          title: tagName || 'Tag',
          metadata: metadataLabel
        }),

        /* Post Grid */
        tagPosts.length > 0 ? (
          React.createElement(PostGrid, { posts: tagPosts })
        ) : (
          React.createElement('div', { className: "has-text-align-center" },
            React.createElement('p', { className: "wp-text-muted wp-mb-50" },
              "No posts found for this tag."
            ),
            React.createElement(Link, { to: "/blog" },
              React.createElement(Button, null, "View All Posts")
            )
          )
        )
      )
    )
  );
}
