import { useData } from '../context/DataContext';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const { progress, quizScores, bookmarks, getTotalProgress } = useData();
  
  const totalProgress = getTotalProgress();
  const averageQuizScore = quizScores.length > 0 
    ? (quizScores.reduce((sum, q) => sum + (q.score / q.total * 100), 0) / quizScores.length).toFixed(1)
    : 0;

  const modules = [
    { name: 'Cyber Laws & Rights', icon: '⚖️' },
    { name: 'Crime Identification', icon: '🔍' },
    { name: 'Emergency Response', icon: '🚨' },
    { name: 'Digital Safety', icon: '🛡️' },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>📊 Your Learning Dashboard</h1>
        <p>Track your progress towards becoming a cyber law expert</p>
      </div>

      {/* Progress Overview */}
      <div className="dashboard-grid">
        <div className="dashboard-card-large">
          <h2>Overall Progress</h2>
          <div className="progress-circle">
            <svg viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#e5e7eb" strokeWidth="8"/>
              <circle 
                cx="100" 
                cy="100" 
                r="90" 
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 90}`}
                strokeDashoffset={`${2 * Math.PI * 90 * (1 - totalProgress / 100)}`}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1"/>
                  <stop offset="100%" stopColor="#a855f7"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="progress-text">
              <span className="progress-number">{totalProgress}%</span>
              <span className="progress-label">Complete</span>
            </div>
          </div>
        </div>

        <div className="dashboard-card-large">
          <h2>Quiz Performance</h2>
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">{quizScores.length}</span>
              <span className="stat-label">Quizzes Taken</span>
            </div>
            <div className="stat">
              <span className="stat-number">{averageQuizScore}%</span>
              <span className="stat-label">Avg Score</span>
            </div>
            <div className="stat">
              <span className="stat-number">{bookmarks.length}</span>
              <span className="stat-label">Bookmarks</span>
            </div>
          </div>
        </div>
      </div>

      {/* Module Progress */}
      <div className="modules-section">
        <h2>📚 Module Progress</h2>
        <div className="modules-grid">
          {modules.map((module, idx) => {
            const moduleProgress = progress[module.name] || 0;
            return (
              <div key={idx} className="module-card">
                <div className="module-icon">{module.icon}</div>
                <h3>{module.name}</h3>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${moduleProgress}%`}}></div>
                </div>
                <p className="progress-text">{moduleProgress}% Complete</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Quiz Scores */}
      {quizScores.length > 0 && (
        <div className="recent-quizzes">
          <h2>📝 Recent Quiz Scores</h2>
          <div className="quiz-list">
            {quizScores.slice(-5).reverse().map((quiz, idx) => (
              <div key={idx} className="quiz-item">
                <span className="quiz-date">
                  {new Date(quiz.date).toLocaleDateString()}
                </span>
                <span className="quiz-score">
                  {quiz.score}/{quiz.total} ({(quiz.score/quiz.total*100).toFixed(0)}%)
                </span>
                <div className="score-bar">
                  <div 
                    className="score-fill" 
                    style={{width: `${quiz.score/quiz.total*100}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Motivational Message */}
      <div className="motivation-card">
        <h3>✨ Keep Learning!</h3>
        <p>
          {totalProgress < 25 && "Great start! Keep exploring to build your cyber law knowledge."}
          {totalProgress >= 25 && totalProgress < 50 && "You're making solid progress! Continue with the modules."}
          {totalProgress >= 50 && totalProgress < 75 && "Excellent work! You're over halfway there!"}
          {totalProgress >= 75 && totalProgress < 100 && "Almost complete! Finish strong!"}
          {totalProgress === 100 && "🎉 You've completed all modules! You're a cyber law expert!"}
        </p>
      </div>
    </div>
  );
}
