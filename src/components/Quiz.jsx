import { useMemo, useState } from 'react';
import '../styles/Quiz.css';

const QUIZ_DATA = [
  {
    id: 'quiz-1',
    title: 'IPR Basics',
    questions: [
      {
        id: 1,
        question: 'What does a patent protect?',
        options: [
          'A brand name',
          'An invention or process',
          'A song or book',
          'A logo only'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'Which right protects original creative expression?',
        options: [
          'Trademark',
          'Copyright',
          'Patent',
          'Trade secret'
        ],
        correct: 1
      },
      {
        id: 3,
        question: 'What is a trademark?',
        options: [
          'A technical invention',
          'A brand identifier like name or logo',
          'A confidential formula',
          'A court order'
        ],
        correct: 1
      },
      {
        id: 4,
        question: 'A trade secret is protected by:',
        options: [
          'Public disclosure',
          'Keeping information confidential',
          'Automatic registration',
          'Patent filing'
        ],
        correct: 1
      },
      {
        id: 5,
        question: 'Which is a key step before enforcing IP rights?',
        options: [
          'Delete evidence',
          'Collect proof and document infringement',
          'Ignore the issue',
          'Post on social media only'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 'quiz-2',
    title: 'Patents & Trademarks',
    questions: [
      {
        id: 1,
        question: 'Which is required for patentability?',
        options: [
          'Novelty',
          'Popularity',
          'Marketing budget',
          'Public disclosure first'
        ],
        correct: 0
      },
      {
        id: 2,
        question: 'A trademark infringement often involves:',
        options: [
          'Confusingly similar branding',
          'Copying a secret formula',
          'Using an invention without permission',
          'Publishing a book'
        ],
        correct: 0
      },
      {
        id: 3,
        question: 'What is a common first step for online trademark violations?',
        options: [
          'Send a takedown request to the platform',
          'Do nothing',
          'Delete your own listing',
          'Pay the infringer'
        ],
        correct: 0
      },
      {
        id: 4,
        question: 'Which is an example of evidence for IP infringement?',
        options: [
          'Screenshots with timestamps',
          'A phone wallpaper',
          'A rumor',
          'A blank document'
        ],
        correct: 0
      },
      {
        id: 5,
        question: 'Which body handles EU trademarks?',
        options: [
          'WIPO',
          'EUIPO',
          'USPTO',
          'CIPO'
        ],
        correct: 1
      }
    ]
  }
];

export default function Quiz() {
  const [activeQuizId, setActiveQuizId] = useState(QUIZ_DATA[0]?.id ?? '');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const quiz = useMemo(
    () => QUIZ_DATA.find(item => item.id === activeQuizId) ?? QUIZ_DATA[0],
    [activeQuizId]
  );

  const totalQuestions = quiz?.questions?.length ?? 0;
  const progress = totalQuestions ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;

  const handleOptionSelect = (optionIndex) => {
    if (!quiz) return;
    setAnswers(prev => ({ ...prev, [currentQuestion]: optionIndex }));

    if (currentQuestion + 1 >= totalQuestions) {
      setShowResults(true);
      return;
    }

    setCurrentQuestion(prev => prev + 1);
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const score = quiz
    ? quiz.questions.reduce((total, q, idx) => total + (answers[idx] === q.correct ? 1 : 0), 0)
    : 0;
  const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;

  if (!quiz) {
    return (
      <div className="quiz-container">
        <p className="quiz-error">No quiz data available.</p>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{quiz.title}</h2>
        <div className="quiz-progress">
          <span>
            Question {Math.min(currentQuestion + 1, totalQuestions)} of {totalQuestions}
          </span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {!showResults && (
        <div className="question-section">
          <p className="question-text">{quiz.questions[currentQuestion]?.question}</p>
          <div className="options-grid">
            {quiz.questions[currentQuestion]?.options.map((option, index) => (
              <button
                key={option}
                type="button"
                className="option-btn"
                onClick={() => handleOptionSelect(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {showResults && (
        <div className="quiz-results">
          <div className="result-circle">
            <span className="result-percentage">{percentage}%</span>
          </div>
          <h2>Results</h2>
          <p className="result-message">
            You scored <strong>{score}</strong> out of <strong>{totalQuestions}</strong>
          </p>

          <div className="result-feedback">
            {percentage === 100 && <p>🎉 Perfect score! You're an IPR expert!</p>}
            {percentage >= 80 && percentage < 100 && <p>👏 Excellent work! You have a strong understanding.</p>}
            {percentage >= 60 && percentage < 80 && <p>📚 Good effort! Keep learning to improve.</p>}
            {percentage < 60 && <p>💪 Keep practicing! You'll get better with more learning.</p>}
          </div>

          <div className="result-breakdown">
            <h4>Question Breakdown</h4>
            {quiz.questions.map((q, idx) => (
              <div key={q.id} className="breakdown-item">
                <span className={answers[idx] === q.correct ? 'correct' : 'incorrect'}>
                  {answers[idx] === q.correct ? '✓' : '✗'} Question {idx + 1}
                </span>
              </div>
            ))}
          </div>

          <button className="retry-btn" onClick={resetQuiz}>
            Retake Quiz
          </button>
        </div>
      )}

      <div className="quiz-progress" style={{ marginTop: '1.5rem' }}>
        <span>Switch quiz</span>
        <div className="options-grid">
          {QUIZ_DATA.map(item => (
            <button
              key={item.id}
              type="button"
              className="option-btn"
              onClick={() => {
                setActiveQuizId(item.id);
                resetQuiz();
              }}
            >
              <span className="option-letter">{item.title.charAt(0)}</span>
              <span className="option-text">{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export { QUIZ_DATA };
