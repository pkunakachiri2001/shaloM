import { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem('cyberguard-bookmarks') || '[]'));
  const [progress, setProgress] = useState(() => JSON.parse(localStorage.getItem('cyberguard-progress') || '{}'));
  const [quizScores, setQuizScores] = useState(() => JSON.parse(localStorage.getItem('cyberguard-quizzes') || '{}'));

  useEffect(() => {
    localStorage.setItem('cyberguard-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    localStorage.setItem('cyberguard-progress', JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem('cyberguard-quizzes', JSON.stringify(quizScores));
  }, [quizScores]);

  const toggleBookmark = (id, title, type) => {
    setBookmarks(prev => 
      prev.some(b => b.id === id) 
        ? prev.filter(b => b.id !== id)
        : [...prev, { id, title, type, savedAt: new Date().toISOString() }]
    );
  };

  const isBookmarked = (id) => bookmarks.some(b => b.id === id);

  const updateProgress = (module, completion) => {
    setProgress(prev => ({ ...prev, [module]: completion }));
  };

  const addQuizScore = (quizId, score, total) => {
    setQuizScores(prev => ({
      ...prev,
      [quizId]: { score, total, date: new Date().toISOString() }
    }));
  };

  const getTotalProgress = () => {
    const values = Object.values(progress);
    return values.length ? Math.round(values.reduce((a, b) => a + b) / values.length) : 0;
  };

  return (
    <DataContext.Provider value={{
      bookmarks, toggleBookmark, isBookmarked,
      progress, updateProgress, getTotalProgress,
      quizScores, addQuizScore
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
}
