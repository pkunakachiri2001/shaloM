import { useState } from 'react';
import { useData } from '../context/DataContext';
import '../styles/Quiz.css';

const QUIZ_DATA = [
  {
    id: 'quiz-1',
    title: 'Cyber Law Basics',
    questions: [
      {
        id: 1,
        question: 'What is the primary purpose of cyber law?',
        options: [
          'To regulate internet usage',
          'To protect digital rights and prevent cyber crimes',
          'To control social media',
          'To ban online shopping'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'Which is NOT a type of cybercrime?',
        options: [
          'Phishing',
          'Data encryption',
          'Ransomware',
          'Identity theft'
        ],
        correct: 1
      },
      {
        id: 3,
        question: 'What should you do if you receive a suspicious email?',
        options: [
          'Click all links to verify',
          'Forward to friends',
          'Do not click links and report it',
          'Open all attachments'
        ],
        correct: 2
      },
      {
        id: 4,
        question: 'How often should you update your passwords?',
        options: [
          'Never, they are permanent',
          'Every 2-3 months',
          'Once a year',
          'Only when you remember'
        ],
        correct: 1
      },
      {
        id: 5,
        question: 'What is a strong password?',
        options: [
          'Your name and birth year',
          'Just numbers',
          'Mix of uppercase, lowercase, numbers, and symbols',
          'Any password over 3 characters'
        ],
        correct: 2
      }
    ]
  },
  {
    id: 'quiz-2',
    title: 'Phishing & Social Engineering',
    questions: [
      {
        id: 1,
        question: 'What is phishing?',
        options: [
          'A fishing technique',
          'Scam emails pretending to be legitimate',
          'A type of password',
          'Computer hardware'
        ],
        correct: 1
      },
      {
        id: 2,
        question: 'How can you identify a phishing email?',
        options: [
          'Check for suspicious sender address and grammar errors',
          'All legitimate emails are phishing',
          'Phishing emails always come from known senders',
          'Banks never send emails'
        ],
        correct: 0
      }
    ]
  }
];

export default function Quiz({ quizId = 'quiz-1' }) {
  const { addQuizScore } = useData();
  const quiz = QUIZ_DATA.find(q => q.id === quizId);
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (!quiz) return <div className="quiz-error">Quiz not found</div>;

  const handleAnswer = (optionIndex) => {
    const isCorrect = optionIndex === quiz.questions[currentQuestion].correct;
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
    
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    addQuizScore(quiz.id, score + 1, quiz.questions.length);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnswers({});
    setShowResults(false);
  };

  const percentage = Math.round((score / quiz.questions.length) * 100);

  return (
    <div className="quiz-container">
      {!showResults ? (
        <div className="quiz-content">
          <div className="quiz-header">
            <h2>{quiz.title}</h2>
            <div className="quiz-progress">
              <span>{currentQuestion + 1} of {quiz.questions.length}</span>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`}}
                ></div>
              </div>
            </div>
          </div>

          <div className="question-section">
            <h3 className="question-text">
              {quiz.questions[currentQuestion].question}
            </h3>

            <div className="options-grid">
              {quiz.questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  className="option-btn"
                  onClick={() => handleAnswer(idx)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="option-text">{option}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="quiz-results">
          <div className="result-circle">
            <div className="result-percentage">{percentage}%</div>
          </div>
          <h2>Quiz Complete!</h2>
          <p className="result-message">
            You scored <strong>{score}</strong> out of <strong>{quiz.questions.length}</strong>
          </p>
          
          <div className="result-feedback">
            {percentage === 100 && <p>🎉 Perfect score! You're a cyber law expert!</p>}
            {percentage >= 80 && percentage < 100 && <p>👏 Excellent work! You have a strong understanding.</p>}
            {percentage >= 60 && percentage < 80 && <p>📚 Good effort! Keep learning to improve.</p>}
            {percentage < 60 && <p>💪 Keep practicing! You'll get better with more learning.</p>}
          </div>

          <div className="result-breakdown">
            <h4>Question Breakdown</h4>
            {quiz.questions.map((q, idx) => (
              <div key={idx} className="breakdown-item">
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
    </div>
  );
}

export { QUIZ_DATA };
