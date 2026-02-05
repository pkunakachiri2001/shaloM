import { useState } from 'react';

const lessons = [
  {
    id: 1,
    category: 'Fundamentals',
    title: 'Introduction to Cyber Law',
    duration: '15 min',
    topics: ['What is cyber law?', 'Why it matters', 'Global overview', 'India & Zimbabwe perspectives'],
    content: `
      <h3>Welcome to Cyber Law 101</h3>
      <p><strong>Cyber Law</strong> refers to the legal framework that governs activities in cyberspace, including internet usage, digital communications, and online transactions.</p>
      
      <h4>Key Areas Covered:</h4>
      <ul>
        <li><strong>Data Protection:</strong> Privacy rights, GDPR, Indian data protection laws</li>
        <li><strong>Cybercrime:</strong> Hacking, identity theft, online fraud, cyberbullying</li>
        <li><strong>E-commerce:</strong> Online contracts, consumer protection, digital payments</li>
        <li><strong>Intellectual Property:</strong> Copyright, patents in digital space</li>
      </ul>

      <h4>India's IT Act 2000</h4>
      <p>The Information Technology Act, 2000 is the primary law dealing with cybercrime and electronic commerce in India.</p>
      <ul>
        <li>Section 66: Computer-related offenses</li>
        <li>Section 66A: Offensive messages (struck down in 2015)</li>
        <li>Section 67: Publishing obscene material</li>
        <li>Section 43: Penalty for damage to computer systems</li>
      </ul>

      <div class="case-study">
        <h4>🔍 Case Study: Shreya Singhal v. Union of India (2015)</h4>
        <p>Supreme Court struck down Section 66A of IT Act as unconstitutional, protecting free speech online.</p>
        <p><strong>Key Takeaway:</strong> Freedom of expression applies online, but not for speech that incites violence.</p>
      </div>
    `
  },
  {
    id: 2,
    category: 'Cyber Crimes',
    title: 'Hacking & Unauthorized Access',
    duration: '20 min',
    topics: ['What is hacking?', 'Legal definitions', 'Penalties', 'Real cases'],
    content: `
      <h3>Understanding Hacking as a Crime</h3>
      
      <h4>Legal Definition</h4>
      <p>Under Section 66 of IT Act 2000, hacking is defined as deliberately accessing a computer resource without authorization or exceeding authorized access.</p>

      <h4>Types of Hacking:</h4>
      <ul>
        <li><strong>Black Hat:</strong> Malicious hacking for personal gain or damage</li>
        <li><strong>White Hat:</strong> Ethical hacking with permission (legal)</li>
        <li><strong>Grey Hat:</strong> Hacking without permission but no malicious intent</li>
      </ul>

      <h4>Penalties in India</h4>
      <ul>
        <li>Imprisonment up to 3 years</li>
        <li>Fine up to ₹5 lakh</li>
        <li>Both imprisonment and fine</li>
      </ul>

      <div class="warning-box">
        <h4>⚠️ Warning Signs You've Been Hacked:</h4>
        <ul>
          <li>Unauthorized transactions in your accounts</li>
          <li>Passwords not working suddenly</li>
          <li>Strange emails sent from your account</li>
          <li>Unfamiliar activity on social media</li>
        </ul>
      </div>

      <div class="case-study">
        <h4>🔍 Famous Case: 2016 Demonetization Hackers</h4>
        <p>Hackers compromised bank systems during demonetization. Multiple arrests made under IT Act Sections 66 and 43.</p>
      </div>

      <h4>What to Do If You're Hacked:</h4>
      <ol>
        <li>Change all passwords immediately</li>
        <li>Enable two-factor authentication</li>
        <li>Report to local cyber cell</li>
        <li>File complaint on cybercrime.gov.in</li>
        <li>Inform your bank if financial info compromised</li>
      </ol>
    `
  },
  {
    id: 3,
    category: 'Cyber Crimes',
    title: 'Cyberbullying & Online Harassment',
    duration: '18 min',
    topics: ['Definition', 'Legal protections', 'How to respond', 'Prevention tips'],
    content: `
      <h3>Cyberbullying: Know Your Rights</h3>
      
      <h4>What is Cyberbullying?</h4>
      <p>Using digital platforms to harass, threaten, embarrass, or target another person, especially minors.</p>

      <h4>Forms of Cyberbullying:</h4>
      <ul>
        <li>Sending threatening messages</li>
        <li>Spreading rumors or lies online</li>
        <li>Sharing private photos without consent</li>
        <li>Creating fake profiles to humiliate</li>
        <li>Exclusion from online groups</li>
      </ul>

      <h4>Legal Provisions in India:</h4>
      <ul>
        <li><strong>Section 66E IT Act:</strong> Violation of privacy (punishment up to 3 years)</li>
        <li><strong>Section 67 IT Act:</strong> Publishing obscene material</li>
        <li><strong>Section 354D IPC:</strong> Stalking (including online)</li>
        <li><strong>Section 509 IPC:</strong> Word, gesture or act intended to insult modesty</li>
      </ul>

      <div class="important-box">
        <h4>🛡️ Your Digital Rights:</h4>
        <ul>
          <li>Right to privacy online</li>
          <li>Right to remove content about you</li>
          <li>Right to block and report</li>
          <li>Right to legal action against perpetrators</li>
        </ul>
      </div>

      <h4>Immediate Actions:</h4>
      <ol>
        <li><strong>Don't respond:</strong> Engaging may escalate the situation</li>
        <li><strong>Save evidence:</strong> Screenshots with dates and times</li>
        <li><strong>Block the person:</strong> On all platforms</li>
        <li><strong>Report to platform:</strong> Use built-in reporting tools</li>
        <li><strong>Tell someone:</strong> Parent, teacher, counselor, friend</li>
        <li><strong>Report to police:</strong> If threats or serious harassment</li>
      </ol>

      <h4>Prevention Tips:</h4>
      <ul>
        <li>Keep profiles private</li>
        <li>Be careful what you share</li>
        <li>Think before you post</li>
        <li>Don't share passwords</li>
        <li>Be kind online - don't be the bully</li>
      </ul>
    `
  },
  {
    id: 4,
    category: 'Cyber Crimes',
    title: 'Identity Theft & Online Fraud',
    duration: '22 min',
    topics: ['Types of identity theft', 'Phishing scams', 'Legal remedies', 'Protection strategies'],
    content: `
      <h3>Identity Theft & Online Fraud</h3>
      
      <h4>What is Identity Theft?</h4>
      <p>Stealing someone's personal information (name, Aadhaar, PAN, passwords) to commit fraud or other crimes.</p>

      <h4>Common Scams:</h4>
      <ul>
        <li><strong>Phishing:</strong> Fake emails/SMS pretending to be banks</li>
        <li><strong>Vishing:</strong> Phone calls claiming to be from banks/government</li>
        <li><strong>Smishing:</strong> SMS-based scams</li>
        <li><strong>Card Cloning:</strong> Copying credit/debit card information</li>
        <li><strong>Social Engineering:</strong> Manipulating people to reveal information</li>
      </ul>

      <div class="danger-box">
        <h4>🚨 Red Flags - Never Trust:</h4>
        <ul>
          <li>Emails/SMS asking for passwords or OTPs</li>
          <li>"Urgent" messages about account suspension</li>
          <li>Lottery/prize winnings you didn't enter</li>
          <li>Calls asking for card CVV or PIN</li>
          <li>Too-good-to-be-true offers</li>
        </ul>
      </div>

      <h4>Legal Provisions:</h4>
      <ul>
        <li><strong>Section 66C IT Act:</strong> Identity theft (punishment up to 3 years + fine)</li>
        <li><strong>Section 66D IT Act:</strong> Cheating by personation using computer</li>
        <li><strong>Section 420 IPC:</strong> Cheating and dishonestly inducing delivery of property</li>
      </ul>

      <h4>If You're a Victim:</h4>
      <ol>
        <li><strong>Contact bank immediately:</strong> Freeze accounts/cards</li>
        <li><strong>File FIR:</strong> At local police station or cybercrime.gov.in</li>
        <li><strong>Report to banks:</strong> All your banks, even if not affected</li>
        <li><strong>Credit alert:</strong> Place fraud alert on credit reports</li>
        <li><strong>Change passwords:</strong> All online accounts</li>
        <li><strong>Monitor accounts:</strong> Regularly check for unauthorized transactions</li>
      </ol>

      <h4>Protection Strategies:</h4>
      <ul>
        <li>Use strong, unique passwords for each account</li>
        <li>Enable two-factor authentication everywhere</li>
        <li>Never share OTPs or CVV with anyone</li>
        <li>Use secure networks (avoid public WiFi for banking)</li>
        <li>Regularly check bank statements</li>
        <li>Be skeptical of unsolicited communications</li>
      </ul>
    `
  },
  {
    id: 5,
    category: 'Digital Rights',
    title: 'Privacy & Data Protection',
    duration: '25 min',
    topics: ['Right to privacy', 'Data protection laws', 'GDPR vs Indian laws', 'Your rights'],
    content: `
      <h3>Your Digital Privacy Rights</h3>
      
      <h4>Constitutional Right to Privacy</h4>
      <p>In 2017, Supreme Court of India declared privacy as a fundamental right under Article 21 (Right to Life and Personal Liberty).</p>

      <h4>Data Protection in India:</h4>
      <ul>
        <li><strong>Digital Personal Data Protection Act, 2023:</strong> India's new privacy law</li>
        <li><strong>IT Act Section 43A:</strong> Compensation for negligence in protecting sensitive data</li>
        <li><strong>IT Act Section 72:</strong> Penalty for breach of confidentiality</li>
      </ul>

      <h4>What is Personal Data?</h4>
      <ul>
        <li>Name, address, phone number</li>
        <li>Email addresses</li>
        <li>Aadhaar, PAN, passport numbers</li>
        <li>Financial information</li>
        <li>Health records</li>
        <li>Biometric data</li>
        <li>Location data</li>
        <li>Online identifiers (IP address, cookies)</li>
      </ul>

      <div class="important-box">
        <h4>✅ Your Data Rights:</h4>
        <ul>
          <li><strong>Right to Access:</strong> Know what data companies have about you</li>
          <li><strong>Right to Correction:</strong> Fix inaccurate information</li>
          <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
          <li><strong>Right to Data Portability:</strong> Transfer your data to another service</li>
          <li><strong>Right to Withdraw Consent:</strong> Stop companies from using your data</li>
        </ul>
      </div>

      <h4>Comparison: India vs GDPR (Europe) vs Zimbabwe:</h4>
      <table class="comparison-table">
        <tr>
          <th>Aspect</th>
          <th>India (DPDP Act 2023)</th>
          <th>EU (GDPR)</th>
          <th>Zimbabwe</th>
        </tr>
        <tr>
          <td>Coverage</td>
          <td>Digital personal data</td>
          <td>All personal data</td>
          <td>Cyber & Data Protection Act 2021</td>
        </tr>
        <tr>
          <td>Penalties</td>
          <td>Up to ₹250 crore</td>
          <td>Up to €20 million or 4% revenue</td>
          <td>Up to $5000 or 5 years jail</td>
        </tr>
        <tr>
          <td>Consent</td>
          <td>Required for processing</td>
          <td>Explicit consent needed</td>
          <td>Required for processing</td>
        </tr>
      </table>

      <h4>Practical Privacy Tips:</h4>
      <ul>
        <li>Read privacy policies before accepting</li>
        <li>Limit app permissions (location, contacts, camera)</li>
        <li>Use privacy-focused browsers and search engines</li>
        <li>Clear cookies and browsing history regularly</li>
        <li>Use VPN on public networks</li>
        <li>Review social media privacy settings</li>
        <li>Think before sharing personal information</li>
      </ul>
    `
  }
];

const quizzes = [
  {
    lessonId: 1,
    questions: [
      {
        question: 'Which act primarily governs cyber law in India?',
        options: ['IT Act 2000', 'IPC 1860', 'Companies Act 2013', 'Consumer Protection Act'],
        correct: 0
      },
      {
        question: 'Section 66A of IT Act was struck down by Supreme Court. What did it deal with?',
        options: ['Hacking', 'Offensive messages online', 'Data theft', 'Copyright violation'],
        correct: 1
      },
      {
        question: 'Cyber law covers which of the following?',
        options: ['Only criminal activities', 'Only e-commerce', 'Both criminal and civil matters', 'Only data protection'],
        correct: 2
      }
    ]
  },
  {
    lessonId: 2,
    questions: [
      {
        question: 'What is the maximum imprisonment for hacking under IT Act Section 66?',
        options: ['1 year', '3 years', '5 years', '7 years'],
        correct: 1
      },
      {
        question: 'Which type of hacking is legal?',
        options: ['Black Hat', 'Grey Hat', 'White Hat (with permission)', 'All types'],
        correct: 2
      },
      {
        question: 'What should be your FIRST action if you suspect being hacked?',
        options: ['Post on social media', 'Change all passwords', 'Delete your account', 'Ignore it'],
        correct: 1
      }
    ]
  },
  {
    lessonId: 3,
    questions: [
      {
        question: 'Which IT Act section deals with violation of privacy?',
        options: ['Section 66', 'Section 66E', 'Section 67', 'Section 43'],
        correct: 1
      },
      {
        question: 'If someone is cyberbullying you, you should:',
        options: ['Respond aggressively', 'Ignore and don\'t save evidence', 'Save evidence and report', 'Delete your account'],
        correct: 2
      },
      {
        question: 'Online stalking is covered under which IPC section?',
        options: ['Section 354D', 'Section 420', 'Section 302', 'Section 120'],
        correct: 0
      }
    ]
  }
];

export default function Academy() {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
    setShowQuiz(false);
    setQuizSubmitted(false);
    setQuizAnswers({});
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setQuizSubmitted(false);
    setQuizAnswers({});
  };

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: optionIndex
    });
  };

  const handleQuizSubmit = () => {
    const currentQuiz = quizzes.find(q => q.lessonId === selectedLesson.id);
    let correctCount = 0;
    currentQuiz.questions.forEach((q, index) => {
      if (quizAnswers[index] === q.correct) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setQuizSubmitted(true);
  };

  const currentQuiz = selectedLesson ? quizzes.find(q => q.lessonId === selectedLesson.id) : null;

  return (
    <div className="page academy-page">
      <div className="page-header">
        <h1>📚 Cyber Law Academy</h1>
        <p>Interactive lessons on cyber law, digital rights, and online safety</p>
      </div>

      {!selectedLesson ? (
        <div className="lessons-grid">
          {lessons.map(lesson => (
            <div key={lesson.id} className="lesson-card" onClick={() => handleLessonClick(lesson)}>
              <div className="lesson-category">{lesson.category}</div>
              <h3 className="lesson-title">{lesson.title}</h3>
              <div className="lesson-meta">
                <span className="lesson-duration">⏱️ {lesson.duration}</span>
              </div>
              <div className="lesson-topics">
                {lesson.topics.map((topic, index) => (
                  <span key={index} className="topic-tag">{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="lesson-view">
          <button className="back-btn" onClick={() => setSelectedLesson(null)}>
            ← Back to Lessons
          </button>

          {!showQuiz ? (
            <>
              <div className="lesson-header">
                <span className="lesson-category">{selectedLesson.category}</span>
                <h2>{selectedLesson.title}</h2>
                <div className="lesson-meta">
                  <span>⏱️ {selectedLesson.duration}</span>
                </div>
              </div>

              <div className="lesson-content" dangerouslySetInnerHTML={{ __html: selectedLesson.content }} />

              <div className="lesson-actions">
                <button className="btn-primary" onClick={handleStartQuiz}>
                  Take Quiz 📝
                </button>
              </div>
            </>
          ) : (
            <div className="quiz-section">
              <h2>Quiz: {selectedLesson.title}</h2>
              
              {!quizSubmitted ? (
                <>
                  {currentQuiz.questions.map((q, qIndex) => (
                    <div key={qIndex} className="quiz-question">
                      <p className="question-text"><strong>Q{qIndex + 1}.</strong> {q.question}</p>
                      <div className="quiz-options">
                        {q.options.map((option, oIndex) => (
                          <label key={oIndex} className="quiz-option">
                            <input
                              type="radio"
                              name={`question-${qIndex}`}
                              checked={quizAnswers[qIndex] === oIndex}
                              onChange={() => handleAnswerSelect(qIndex, oIndex)}
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <button 
                    className="btn-primary" 
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length !== currentQuiz.questions.length}
                  >
                    Submit Quiz
                  </button>
                </>
              ) : (
                <div className="quiz-results">
                  <h3>Quiz Results</h3>
                  <div className={`score-display ${score === currentQuiz.questions.length ? 'perfect-score' : ''}`}>
                    <div className="score-number">{score}/{currentQuiz.questions.length}</div>
                    <div className="score-percentage">{Math.round((score / currentQuiz.questions.length) * 100)}%</div>
                  </div>
                  
                  {score === currentQuiz.questions.length ? (
                    <p className="result-message success">🎉 Perfect score! You've mastered this topic!</p>
                  ) : score >= currentQuiz.questions.length * 0.7 ? (
                    <p className="result-message good">👍 Good job! You have a solid understanding.</p>
                  ) : (
                    <p className="result-message retry">📖 Consider reviewing the lesson and trying again.</p>
                  )}

                  <div className="quiz-actions">
                    <button className="btn-secondary" onClick={() => setShowQuiz(false)}>
                      Review Lesson
                    </button>
                    <button className="btn-primary" onClick={handleStartQuiz}>
                      Retake Quiz
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
