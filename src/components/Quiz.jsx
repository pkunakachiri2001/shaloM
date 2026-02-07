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
          <p className="result-message">
            You scored <strong>{score}</strong> out of <strong>{quiz.questions.length}</strong>
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
