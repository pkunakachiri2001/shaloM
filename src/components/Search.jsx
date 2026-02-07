import { useState } from 'react';
import { useData } from '../context/DataContext';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const { bookmarks } = useData();

  const searchData = [
    { id: 'acad-1', title: 'IPR Academy', category: 'Academy', path: '/academy' },
    { id: 'ident-1', title: 'IPR Issue Identifier', category: 'Tools', path: '/identifier' },
    { id: 'emerg-1', title: 'Report IPR Issue', category: 'Reporting', path: '/emergency' },
    { id: 'news-1', title: 'IPR News', category: 'News', path: '/news' },
    { id: 'career-1', title: 'IP Career Hub', category: 'Career', path: '/career' },
    { id: 'about-1', title: 'About Amicus IPR', category: 'Info', path: '/about' },
    { id: 'quiz-1', title: 'IPR Basics Quiz', category: 'Learning', path: '/academy?quiz=1' },
    { id: 'patent-1', title: 'Patent Protection Guide', category: 'Academy', path: '/academy?lesson=patents' },
    { id: 'trademark-1', title: 'Trademark Enforcement Guide', category: 'Academy', path: '/academy?lesson=trademarks' },
    { id: 'copyright-1', title: 'Copyright Takedown Guide', category: 'Academy', path: '/academy?lesson=copyright' },
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
          placeholder="🔍 Search IPR lessons, tools, reporting..."
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
