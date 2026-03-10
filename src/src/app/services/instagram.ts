/**
 * Instagram Graph API Service
 * 
 * Service for fetching Instagram feed data using the Instagram Graph API.
 * Handles authentication, caching, and automatic refresh.
 * 
 * @module services/instagram
 */

/**
 * @typedef InstagramPost
 * @property {string} id
 * @property {string} [caption]
 * @property {'IMAGE'|'VIDEO'|'CAROUSEL_ALBUM'} media_type
 * @property {string} media_url
 * @property {string} permalink
 * @property {string} timestamp
 * @property {number} [like_count]
 * @property {number} [comments_count]
 * @property {string} [thumbnail_url]
 */

/**
 * @typedef InstagramFeedResponse
 * @property {Array<InstagramPost>} data
 * @property {Object} [paging]
 * @property {Object} [paging.cursors]
 * @property {string} [paging.cursors.before]
 * @property {string} [paging.cursors.after]
 * @property {string} [paging.next]
 */

var INSTAGRAM_GRAPH_API = 'https://graph.instagram.com';
var CACHE_KEY = 'instagram_feed_cache';
var CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

/**
 * Get Instagram Access Token from environment
 */
function getAccessToken() {
  return import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN || '';
}

/**
 * Get cached feed data if available and not expired
 */
function getCachedFeed() {
  try {
    var cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    var parsed = JSON.parse(cached);
    var data = parsed.data;
    var timestamp = parsed.timestamp;
    var now = Date.now();

    if (now - timestamp < CACHE_DURATION) {
      return data;
    }

    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.error('Error reading Instagram cache:', error);
    return null;
  }
}

/**
 * Save feed data to cache
 */
function setCachedFeed(data) {
  try {
    var cacheData = {
      data: data,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error saving Instagram cache:', error);
  }
}

/**
 * Fetch Instagram feed from Graph API
 * 
 * Retrieves user's media with engagement metrics.
 * Automatically caches results for 24 hours.
 * 
 * @param {number} limit - Number of posts to fetch (default: 12)
 * @returns Array of Instagram posts
 */
export function fetchInstagramFeed(limit) {
  var accessToken = getAccessToken();

  if (!accessToken) {
    console.warn('Instagram API: No access token configured. Using mock data.');
    return Promise.resolve(getMockInstagramFeed());
  }

  var cached = getCachedFeed();
  if (cached) {
    return Promise.resolve(cached.slice(0, limit));
  }

  var fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'permalink',
    'timestamp',
    'thumbnail_url',
    'like_count',
    'comments_count',
  ].join(',');

  var url = INSTAGRAM_GRAPH_API + '/me/media?fields=' + fields + '&limit=' + limit + '&access_token=' + accessToken;
  
  return fetch(url).then(function(response) {
    if (!response.ok) {
      throw new Error('Instagram API error: ' + response.status + ' ' + response.statusText);
    }
    return response.json();
  }).then(function(result) {
    setCachedFeed(result.data);
    return result.data;
  }).catch(function(error) {
    console.error('Error fetching Instagram feed:', error);
    
    var fallbackCached = getCachedFeed();
    if (fallbackCached) {
      console.warn('Instagram API: Using expired cache due to API error');
      return fallbackCached.slice(0, limit);
    }
    
    return getMockInstagramFeed();
  });
}

/**
 * Refresh Instagram feed cache
 * 
 * Forces a fresh fetch from the API, bypassing cache.
 */
export function refreshInstagramFeed() {
  localStorage.removeItem(CACHE_KEY);
  return fetchInstagramFeed();
}

/**
 * Get mock Instagram feed for development/fallback
 */
export function getMockInstagramFeed() {
  return [
    {
      id: 'mock-1',
      caption: 'New arrivals are here! Shop the latest collection now.',
      media_type: 'IMAGE',
      media_url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock1',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 1234,
      comments_count: 56,
    },
    {
      id: 'mock-2',
      caption: 'Behind the scenes at our latest photoshoot',
      media_type: 'CAROUSEL_ALBUM',
      media_url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock2',
      timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 2345,
      comments_count: 89,
    },
    {
      id: 'mock-3',
      caption: 'Weekend vibes #ShopLocal',
      media_type: 'IMAGE',
      media_url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock3',
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 3456,
      comments_count: 123,
    },
    {
      id: 'mock-4',
      caption: 'Flash sale alert! 50% off selected items',
      media_type: 'IMAGE',
      media_url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock4',
      timestamp: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 4567,
      comments_count: 234,
    },
    {
      id: 'mock-5',
      caption: 'Customer favorites! Thank you for all the love!',
      media_type: 'IMAGE',
      media_url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock5',
      timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 5678,
      comments_count: 345,
    },
    {
      id: 'mock-6',
      caption: 'Styling tips for the season',
      media_type: 'VIDEO',
      media_url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600',
      thumbnail_url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock6',
      timestamp: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 6789,
      comments_count: 456,
    },
    {
      id: 'mock-7',
      caption: 'Unboxing our latest collaboration',
      media_type: 'IMAGE',
      media_url: 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock7',
      timestamp: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 7890,
      comments_count: 567,
    },
    {
      id: 'mock-8',
      caption: 'Meet our amazing team!',
      media_type: 'CAROUSEL_ALBUM',
      media_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=600',
      permalink: 'https://instagram.com/p/mock8',
      timestamp: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
      like_count: 8901,
      comments_count: 678,
    },
  ];
}

/**
 * Schedule automatic feed refresh
 * 
 * Sets up a timer to refresh the Instagram feed every 24 hours.
 * 
 * @returns Cleanup function to cancel the scheduled refresh
 */
export function scheduleAutoRefresh() {
  var intervalId = setInterval(function() {
    refreshInstagramFeed();
  }, CACHE_DURATION);

  return function() { clearInterval(intervalId); };
}