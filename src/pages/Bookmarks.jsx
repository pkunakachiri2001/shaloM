import { useData } from '../context/DataContext';
import '../styles/Bookmarks.css';

export default function Bookmarks() {
  const { bookmarks, toggleBookmark } = useData();

  const removeBookmark = (id) => {
    toggleBookmark(id, '', '');
  };

  const groupedByType = bookmarks.reduce((acc, bookmark) => {
    if (!acc[bookmark.type]) acc[bookmark.type] = [];
    acc[bookmark.type].push(bookmark);
    return acc;
  }, {});

  return (
    <div className="bookmarks-page">
      <div className="bookmarks-header">
        <h1>⭐ My Bookmarks</h1>
        <p>Your saved lessons, resources, and important content</p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="empty-bookmarks">
          <div className="empty-icon">📋</div>
          <h2>No Bookmarks Yet</h2>
          <p>Start bookmarking your favorite lessons and resources!</p>
          <a href="/academy" className="browse-btn">Browse Lessons</a>
        </div>
      ) : (
        <div className="bookmarks-container">
          {Object.entries(groupedByType).map(([type, items]) => (
            <div key={type} className="bookmarks-section">
              <h2 className="section-title">
                {type === 'lesson' && '📚'} 
                {type === 'tool' && '🔧'} 
                {type === 'resource' && '📄'} 
                {type === 'emergency' && '🚨'} 
                {' '}{type.charAt(0).toUpperCase() + type.slice(1)}s
              </h2>
              <div className="bookmarks-list">
                {items.map(bookmark => (
                  <div key={bookmark.id} className="bookmark-item">
                    <div className="bookmark-content">
                      <h3>{bookmark.title}</h3>
                      <p className="bookmark-date">
                        Saved on {new Date(bookmark.savedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeBookmark(bookmark.id)}
                      title="Remove bookmark"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="bookmarks-stats">
        <div className="stat">
          <span className="stat-icon">⭐</span>
          <span className="stat-count">{bookmarks.length}</span>
          <span className="stat-label">Total Bookmarks</span>
        </div>
        <div className="stat">
          <span className="stat-icon">⏱️</span>
          <span className="stat-count">
            {bookmarks.length > 0 
              ? Math.round((new Date() - new Date(bookmarks[bookmarks.length - 1].savedAt)) / (1000 * 60 * 60)) 
              : 0}h
          </span>
          <span className="stat-label">Since Last Save</span>
        </div>
      </div>
    </div>
  );
}
