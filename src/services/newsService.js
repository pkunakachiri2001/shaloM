// News Service - Integrates with GNews API for real-time IPR news
// Free tier: 100 requests per hour, unlimited requests per day
// API docs: https://gnews.io

const GNEWS_API_KEY = 'demo'; // Replace with actual API key from gnews.io (free tier available)
const CACHE_DURATION = 30 * 60 * 1000; // Cache for 30 minutes
const CACHE_KEY = 'amicus_ipr_news_cache';

// Fallback data for when API fails
const FALLBACK_NEWS = [
  {
    id: 'fallback-1',
    category: 'Enforcement Alert',
    title: 'Customs Seizes Record Counterfeit Shipments in 2026 Crackdown',
    date: '2026-01-23',
    summary: 'Border enforcement actions intensified against counterfeit luxury goods and electronics.',
    content: 'Brands urged to refresh customs recordation to improve seizure rates.',
    tags: ['Counterfeit', 'Customs', 'Enforcement'],
    importance: 'critical',
    source: 'Amicus IPR'
  },
  {
    id: 'fallback-2',
    category: 'Policy Update',
    title: 'Global Patent Harmonization Talks Resume',
    date: '2026-01-20',
    summary: 'Policy discussions focus on cross-border enforcement and examination standards.',
    content: 'Stakeholders emphasize clearer pathways for international filings.',
    tags: ['Policy', 'Patents', 'International'],
    importance: 'high',
    source: 'Amicus IPR'
  },
  {
    id: 'fallback-3',
    category: 'Court Decision',
    title: 'Landmark Trademark Dilution Ruling Strengthens Brand Protections',
    date: '2026-01-18',
    summary: 'Court clarifies standard for likelihood of dilution in online marketplaces.',
    content: 'Decision reinforces the value of evidence-based takedown submissions.',
    tags: ['Trademark', 'Court', 'Marketplace'],
    importance: 'high',
    source: 'Amicus IPR'
  },
  {
    id: 'fallback-4',
    category: 'Copyright',
    title: 'Streaming Platforms Expand Automated Takedown Tools',
    date: '2026-01-15',
    summary: 'Rights holders gain faster DMCA-style workflows and improved dispute tracking.',
    content: 'Creators advised to maintain proof of authorship and publication dates.',
    tags: ['Copyright', 'DMCA', 'Platforms'],
    importance: 'medium',
    source: 'Amicus IPR'
  },
  {
    id: 'fallback-5',
    category: 'Patent',
    title: 'AI-Assisted Prior Art Search Reduces Examination Time',
    date: '2026-01-10',
    summary: 'Patent offices pilot AI tools to speed up novelty and prior art checks.',
    content: 'Applicants encouraged to submit structured disclosures for faster review.',
    tags: ['Patent', 'Innovation', 'AI'],
    importance: 'medium',
    source: 'Amicus IPR'
  }
];

/**
 * Get cached news if available and not expired
 */
function getCachedNews() {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    const { data, timestamp } = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid
    if (now - timestamp < CACHE_DURATION) {
      console.log('📰 Using cached news data');
      return data;
    }

    // Cache expired, remove it
    localStorage.removeItem(CACHE_KEY);
    return null;
  } catch (error) {
    console.error('Cache read error:', error);
    return null;
  }
}

/**
 * Save news to cache
 */
function cacheNews(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

/**
 * Map GNews API response to our news format
 */
function mapGNewsToAppFormat(articles) {
  return articles.slice(0, 10).map((article, index) => {
    // Determine category based on keywords in title/description
    let category = 'International';
    const text = `${article.title} ${article.description}`.toLowerCase();

    if (text.includes('patent')) {
      category = 'Patent';
    } else if (text.includes('trademark') || text.includes('brand')) {
      category = 'Trademark';
    } else if (text.includes('copyright') || text.includes('dmca')) {
      category = 'Copyright';
    } else if (text.includes('trade secret') || text.includes('confidential')) {
      category = 'Trade Secret';
    } else if (text.includes('counterfeit') || text.includes('enforcement') || text.includes('seizure')) {
      category = 'Enforcement Alert';
    } else if (text.includes('policy') || text.includes('regulation') || text.includes('act') || text.includes('directive')) {
      category = 'Policy Update';
    } else if (text.includes('court') || text.includes('ruling') || text.includes('judgment')) {
      category = 'Court Decision';
    }

    // Determine importance based on keywords
    let importance = 'medium';
    if (text.includes('critical') || text.includes('alert') || text.includes('urgent') || text.includes('alert')) {
      importance = 'critical';
    } else if (text.includes('important') || text.includes('major')) {
      importance = 'high';
    }

    return {
      id: `gnews-${index}`,
      category,
      title: article.title,
      date: new Date(article.publishedAt).toISOString().split('T')[0],
      summary: article.description || article.title,
      content: article.content || article.description || 'Read more at source.',
      link: article.url,
      image: article.image,
      source: article.source.name,
      tags: [article.source.name, ...extractTags(article.title)],
      importance
    };
  });
}

/**
 * Extract relevant tags from article title
 */
function extractTags(title) {
  const keywords = ['intellectual property', 'patent', 'trademark', 'copyright', 'trade secret', 'counterfeit', 'enforcement'];
  return keywords.filter(keyword => title.toLowerCase().includes(keyword)).slice(0, 2);
}

/**
 * Fetch news from GNews API
 * @param {string} query - Search query (default: 'intellectual property law')
 * @returns {Promise<Array>} News articles
 */
export async function fetchNewsFromAPI(query = 'intellectual property law') {
  try {
    // Check cache first
    const cached = getCachedNews();
    if (cached) return cached;

    // For demo purposes, if using demo key, return fallback
    if (GNEWS_API_KEY === 'demo') {
      console.warn('⚠️ Using demo API key. Get free key from https://gnews.io');
      cacheNews(FALLBACK_NEWS);
      return FALLBACK_NEWS;
    }

    const url = new URL('https://gnews.io/api/v4/search');
    url.searchParams.append('q', query);
    url.searchParams.append('token', GNEWS_API_KEY);
    url.searchParams.append('lang', 'en');
    url.searchParams.append('max', '10');
    url.searchParams.append('sortby', 'publishedAt');

    console.log('📡 Fetching news from GNews API...');
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.articles || data.articles.length === 0) {
      throw new Error('No articles found');
    }

    const mappedNews = mapGNewsToAppFormat(data.articles);
    cacheNews(mappedNews);
    console.log(`✅ Fetched ${mappedNews.length} news articles from GNews API`);
    return mappedNews;
  } catch (error) {
    console.error('❌ Error fetching from API:', error.message);
    console.log('📦 Using fallback news data');
    cacheNews(FALLBACK_NEWS);
    return FALLBACK_NEWS;
  }
}

/**
 * Get news with optional filtering
 * @param {Object} options - Filter options
 * @returns {Promise<Array>} Filtered news articles
 */
export async function getNews(options = {}) {
  try {
    const news = await fetchNewsFromAPI(options.query);
    let filtered = news;

    // Filter by category if specified
    if (options.category) {
      filtered = filtered.filter(article => article.category === options.category);
    }

    // Filter by importance if specified
    if (options.importance) {
      filtered = filtered.filter(article => article.importance === options.importance);
    }

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    return filtered;
  } catch (error) {
    console.error('Error in getNews:', error);
    return FALLBACK_NEWS;
  }
}

/**
 * Clear news cache (useful for forcing refresh)
 */
export function clearNewsCache() {
  try {
    localStorage.removeItem(CACHE_KEY);
    console.log('✅ News cache cleared');
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
}

/**
 * Get cache info (for debugging)
 */
export function getCacheInfo() {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return { cached: false };

  const { timestamp } = JSON.parse(cached);
  const now = Date.now();
  const age = Math.round((now - timestamp) / 1000 / 60); // minutes
  const remaining = Math.round((CACHE_DURATION - (now - timestamp)) / 1000 / 60); // minutes

  return {
    cached: true,
    age: `${age}m`,
    expiresIn: `${remaining}m`,
    autoRefreshAt: new Date(timestamp + CACHE_DURATION).toLocaleTimeString()
  };
}

/**
 * Setup instructions for using real GNews API
 */
export function getSetupInstructions() {
  return `
🚀 To use real news with GNews API:

1. Visit https://gnews.io
2. Click "Register" (free tier available)
3. Copy your API key
4. Update GNEWS_API_KEY in src/services/newsService.js
5. Restart the dev server

Free tier limits:
- 100 requests/hour
- Unlimited requests/day
- News articles refreshed every 30 minutes

Alternative APIs (if GNews down):
- NewsAPI.org: 100/day free
- Guardian API: Unlimited legal news
- Mediastack: 100/month free
  `;
}
