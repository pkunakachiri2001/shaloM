import { useState, useEffect } from 'react';
import { getNews, clearNewsCache, getCacheInfo } from '../services/newsService';

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [refreshing, setRefreshing] = useState(false);

  // Fetch news on component mount
  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getNews();
      setNewsData(data);
    } catch (err) {
      setError('Failed to load news. Please try again later.');
      console.error('News loading error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      clearNewsCache();
      await loadNews();
    } finally {
      setRefreshing(false);
    }
  };

  // Get unique categories from loaded news
  const categories = ['all', ...new Set(newsData.map(n => n.category))];

  // Filter news by selected category
  const filteredNews = selectedCategory === 'all' 
    ? newsData 
    : newsData.filter(n => n.category === selectedCategory);
  const getImportanceBadge = (importance) => {
    const badges = {
      critical: { color: '#dc2626', label: '🚨 Critical' },
      high: { color: '#ea580c', label: '⚠️ Important' },
      medium: { color: '#eab308', label: '📌 Notable' },
      low: { color: '#059669', label: '💡 Info' }
    };
    return badges[importance] || badges.medium;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Policy Update': '#3b82f6',
      'Enforcement Alert': '#dc2626',
      'Court Decision': '#7c3aed',
      'Patent': '#0ea5e9',
      'Trademark': '#059669',
      'Copyright': '#d97706',
      'Trade Secret': '#8b5cf6',
      'International': '#ec4899'
    };
    return colors[category] || '#6b7280';
  };

  return (
    <div className="page news-page">
      <div className="page-header">
        <h1>📰 IPR News & Updates</h1>
        <p>Stay informed about patents, trademarks, copyrights, enforcement, and policy changes</p>
        
        {/* Refresh and Status Info */}
        <div className="news-controls" style={{ marginTop: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button 
            onClick={handleRefresh} 
            disabled={refreshing || loading}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: refreshing || loading ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              opacity: refreshing || loading ? 0.6 : 1
            }}
          >
            {refreshing ? '🔄 Refreshing...' : '🔄 Refresh News'}
          </button>
          
          <span style={{ fontSize: '12px', color: '#666' }}>
            {loading ? '⏳ Loading news...' : `✅ ${newsData.length} articles loaded`}
          </span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div style={{
          backgroundColor: '#fee2e2',
          borderLeft: '4px solid #dc2626',
          padding: '12px',
          margin: '20px',
          borderRadius: '4px',
          color: '#991b1b'
        }}>
          <strong>⚠️ Error:</strong> {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          padding: '20px'
        }}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} style={{
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              padding: '20px',
              height: '300px',
              animation: 'pulse 2s infinite'
            }}>
              <div style={{ height: '16px', backgroundColor: '#d1d5db', borderRadius: '4px', marginBottom: '12px', width: '60%' }} />
              <div style={{ height: '12px', backgroundColor: '#d1d5db', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ height: '12px', backgroundColor: '#d1d5db', borderRadius: '4px', width: '80%' }} />
            </div>
          ))}
        </div>
      )}

      {/* Category Filter */}
      {!loading && newsData.length > 0 && (
        <div className="category-filter" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          padding: '20px',
          borderBottom: '1px solid #e5e7eb'
        }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              style={{
                padding: '6px 14px',
                backgroundColor: selectedCategory === category ? '#2563eb' : '#f3f4f6',
                color: selectedCategory === category ? 'white' : '#374151',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: selectedCategory === category ? '600' : '500',
                transition: 'all 0.2s'
              }}
            >
              {category === 'all' ? '📰 All News' : category}
            </button>
          ))}
        </div>
      )}

      {/* News Grid */}
      <div className="news-grid">
        {filteredNews.length > 0 ? (
          filteredNews.map(news => {
          const badge = getImportanceBadge(news.importance);
          return (
            <article key={news.id} className="news-card">
              <div className="news-header">
                <span 
                  className="news-category"
                  style={{ backgroundColor: getCategoryColor(news.category) }}
                >
                  {news.category}
                </span>
                <span 
                  className="news-importance"
                  style={{ color: badge.color }}
                >
                  {badge.label}
                </span>
              </div>
              
              <h2 className="news-title">{news.title}</h2>
              
              <p className="news-date">📅 {new Date(news.date).toLocaleDateString('en-IN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</p>
              
              <p className="news-summary">{news.summary}</p>
              
              <div className="news-content">
                <p>{news.content}</p>
              </div>
              
              <div className="news-tags">
                {news.tags.map((tag, index) => (
                  <span key={index} className="news-tag">#{tag}</span>
                ))}
              </div>

              {/* Source attribution if available */}
              {news.source && (
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '10px', borderTop: '1px solid #e5e7eb', paddingTop: '10px' }}>
                  📰 Source: {news.source}
                </div>
              )}

              {/* Read more link if available */}
              {news.link && (
                <a 
                  href={news.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#2563eb', textDecoration: 'none', fontSize: '13px', marginTop: '10px', display: 'block' }}
                >
                  Read full article →
                </a>
              )}
            </article>
          );
          })
        ) : !loading && (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '40px',
            color: '#6b7280'
          }}>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>📭 No news articles found in this category</p>
            <button 
              onClick={() => setSelectedCategory('all')}
              style={{
                padding: '8px 16px',
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              View All News
            </button>
          </div>
        )}
      </div>

      <div className="news-sources">
        <h3>📚 Stay Updated - Follow These Sources:</h3>
        <div className="sources-grid">
          <div className="source-item">
            <strong>🌐 WIPO</strong>
            <p>wipo.int - Global IP resources and treaties</p>
          </div>
          <div className="source-item">
            <strong>⚖️ EUIPO</strong>
            <p>euipo.europa.eu - EU trademarks and designs</p>
          </div>
          <div className="source-item">
            <strong>🏛️ USPTO</strong>
            <p>uspto.gov - US patents and trademarks</p>
          </div>
          <div className="source-item">
            <strong>📱 Brand Protection Updates</strong>
            <p>Follow official IP office channels for alerts</p>
          </div>
        </div>
      </div>

      <div className="subscribe-section">
        <h3>🔔 Want Daily Updates?</h3>
        <p>In a full version, you'd be able to subscribe for push notifications about important legal updates!</p>
      </div>
    </div>
  );
}
