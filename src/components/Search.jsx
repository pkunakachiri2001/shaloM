import { useState } from 'react';
import { useData } from '../context/DataContext';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { bookmarks } = useData();

  const searchData = [
    { id: 'acad-1', title: 'Cyber Law Academy', category: 'Academy', path: '/academy' },
    { id: 'ident-1', title: 'Crime Identifier', category: 'Tools', path: '/identifier' },
    { id: 'emerg-1', title: 'Emergency Tools', category: 'Emergency', path: '/emergency' },
    { id: 'news-1', title: 'Latest News', category: 'News', path: '/news' },
    { id: 'career-1', title: 'Career Hub', category: 'Career', path: '/career' },
    { id: 'about-1', title: 'About CyberGuard', category: 'Info', path: '/about' },
    { id: 'quiz-1', title: 'Cyber Law Quiz', category: 'Learning', path: '/academy?quiz=1' },
    { id: 'phishing-1', title: 'Phishing Detection Guide', category: 'Academy', path: '/academy?lesson=phishing' },
    { id: 'fraud-1', title: 'Online Fraud Prevention', category: 'Academy', path: '/academy?lesson=fraud' },
    { id: 'harassment-1', title: 'Cyberbullying & Harassment Laws', category: 'Academy', path: '/academy?lesson=harassment' },
  ];

  const handleSearch = (value) => {
    setQuery(value);
    if (value.trim().length < 2) {
      setResults([]);
      return;
    }
    
    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase()) ||
      item.category.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="🔍 Search lessons, tools, careers..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="search-input"
        />
      </div>

      {showResults && results.length > 0 && (
        <div className="search-results">
          {results.map(result => (
            <a key={result.id} href={result.path} className="search-result-item">
              <div className="result-main">
                <h4>{result.title}</h4>
                <span className="result-category">{result.category}</span>
              </div>
              {bookmarks.some(b => b.id === result.id) && <span className="bookmark-badge">⭐</span>}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
