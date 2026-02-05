import { useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';
import '../styles/CaseStudies.css';

const CASE_STUDIES = [
  {
    id: 1,
    title: 'WannaCry Ransomware Attack (2017)',
    year: 2017,
    severity: 'Critical',
    icon: '🦠',
    summary: 'A global ransomware attack affecting hundreds of thousands of computers across 150+ countries.',
    timeline: [
      { date: 'May 12, 2017', event: 'Initial detection of WannaCry propagation', impact: 'First reported cases in UK hospitals' },
      { date: 'May 13, 2017', event: 'Rapid global spread', impact: 'Spread to 100+ countries' },
      { date: 'May 15, 2017', event: 'Kill switch activated', impact: 'Spread halted but damage done' }
    ],
    lessons: [
      '💡 Regular software updates are critical security measures',
      '💡 Exploit mitigation prevents known vulnerability attacks',
      '💡 Backup systems enable recovery from ransomware',
      '💡 Employee training reduces infection vectors'
    ],
    applicableLaws: ['GDPR', 'Computer Crime & Cybersecurity Laws', 'Data Protection Act'],
    question: 'What would you do if your organization was hit by ransomware?',
    answers: [
      'Pay the ransom immediately',
      'Isolate affected systems, backup unencrypted data, notify authorities, restore from backups',
      'Delete all files to prevent spread',
      'Ignore and hope it goes away'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    title: 'Equifax Data Breach (2017)',
    year: 2017,
    severity: 'Critical',
    icon: '🔓',
    summary: 'Unauthorized access to sensitive personal data of 147 million people.',
    timeline: [
      { date: 'March-April 2017', event: 'Breach occurs', impact: '147M records exposed' },
      { date: 'July 2017', event: 'Equifax discovers breach', impact: '3 months later' },
      { date: 'September 7, 2017', event: 'Public disclosure', impact: 'Massive public exposure' }
    ],
    lessons: [
      '💡 Timely vulnerability patching is essential',
      '💡 Breach notification laws require disclosure within specific timeframes',
      '💡 Companies must implement robust access controls',
      '💡 Data minimization principle: collect only necessary data'
    ],
    applicableLaws: ['GDPR Article 33-34', 'Personal Data Protection Laws', 'Breach Notification Laws'],
    question: 'How long should companies take to notify users of a data breach?',
    answers: [
      'Within 1 year',
      'Whenever they feel like it',
      'Within 72 hours (per GDPR)',
      'Only if requested'
    ],
    correctAnswer: 2
  },
  {
    id: 3,
    title: 'Facebook-Cambridge Analytica Scandal (2018)',
    year: 2018,
    severity: 'High',
    icon: '📊',
    summary: 'Unauthorized collection and misuse of 87 million Facebook users\' personal data.',
    timeline: [
      { date: '2013-2015', event: 'Data collection begins', impact: 'Unauthorized data access' },
      { date: 'March 2018', event: 'Story breaks', impact: 'Public outcry' },
      { date: 'April 2018', event: 'Congressional hearing', impact: 'Mark Zuckerberg testifies' }
    ],
    lessons: [
      '💡 Users must provide explicit informed consent for data usage',
      '💡 Third-party app access requires strict verification',
      '💡 Data sharing agreements must be transparent',
      '💡 Platform responsibility for user data'
    ],
    applicableLaws: ['GDPR Consent Principles', 'Personal Privacy Laws', 'FTC Act'],
    question: 'What is the key principle violated in this scandal?',
    answers: [
      'Users gave explicit consent',
      'Data was used without proper authorization',
      'Data was encrypted',
      'No personal data was involved'
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    title: 'Zoom Privacy Issues (2020)',
    year: 2020,
    severity: 'Medium',
    icon: '🎥',
    summary: 'Multiple security vulnerabilities and privacy concerns in Zoom video conferencing.',
    timeline: [
      { date: 'April 2020', event: 'Zoom-bombing incidents reported', impact: 'Unauthorized meeting access' },
      { date: 'April 2020', event: 'Privacy concerns highlighted', impact: 'Data encryption issues' },
      { date: 'April-May 2020', event: 'Zoom enhances security', impact: 'Fixes implemented' }
    ],
    lessons: [
      '💡 End-to-end encryption must be default for sensitive communications',
      '💡 Password protection should be required for public meetings',
      '💡 Rapid security response is critical',
      '💡 Public communication during issues builds trust'
    ],
    applicableLaws: ['Communication Privacy Laws', 'Consumer Protection Regulations', 'Accessibility Laws'],
    question: 'How can meeting organizers prevent unauthorized access?',
    answers: [
      'Share meeting IDs publicly',
      'Use strong passwords and waiting rooms',
      'Send links on public social media',
      'Allow any user to join'
    ],
    correctAnswer: 1
  }
];

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(null);
  const [userAnswer, setUserAnswer] = useState(null);

  const handleAnswer = (idx) => {
    setUserAnswer(idx);
  };

  return (
    <div className="case-studies-page">
      <div className="case-studies-header">
        <h1>📋 Real Cyber Crime Case Studies</h1>
        <p>Learn from major incidents that shaped cyber law</p>
      </div>

      {!selectedCase ? (
        <div className="cases-grid">
          {CASE_STUDIES.map(caseStudy => {
            const details = (
              <div className="case-modal-details">
                <section className="detail-section">
                  <h3>Case Summary</h3>
                  <p>{caseStudy.summary}</p>
                </section>

                <section className="detail-section">
                  <h3>Timeline of Events</h3>
                  <div className="timeline">
                    {caseStudy.timeline.map((event, idx) => (
                      <div key={idx} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                          <h4>{event.date}</h4>
                          <p><strong>{event.event}</strong></p>
                          <p className="impact">Impact: {event.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="detail-section">
                  <h3>Key Lessons Learned</h3>
                  <div className="lessons">
                    {caseStudy.lessons.map((lesson, idx) => (
                      <div key={idx} className="lesson-item">
                        {lesson}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="detail-section">
                  <h3>Applicable Laws & Regulations</h3>
                  <div className="laws-grid">
                    {caseStudy.applicableLaws.map((law, idx) => (
                      <div key={idx} className="law-badge">{law}</div>
                    ))}
                  </div>
                </section>

                <section className="detail-section scenario-section">
                  <h3>What Would You Do?</h3>
                  <p className="scenario-question">{caseStudy.question}</p>
                  <div className="scenario-options">
                    {caseStudy.answers.map((answer, idx) => (
                      <button
                        key={idx}
                        className="scenario-btn"
                        onClick={() => handleAnswer(idx, caseStudy)}
                      >
                        <span className="option-label">{String.fromCharCode(65 + idx)}</span>
                        {answer}
                      </button>
                    ))}
                  </div>
                </section>
              </div>
            );

            return (
              <InteractiveCard
                key={caseStudy.id}
                title={caseStudy.title}
                description={caseStudy.summary}
                icon={caseStudy.icon}
                severity={caseStudy.severity}
                badge={caseStudy.year}
                metadata={{
                  'Year': caseStudy.year,
                  'Impact Level': caseStudy.severity,
                  'Affected': '100K+'
                }}
                details={details}
              />
            );
          })}
        </div>
      ) : (
        <div className="case-detail">
          <button className="back-btn" onClick={() => { setSelectedCase(null); setUserAnswer(null); }}>
            ← Back to Cases
          </button>

          <div className="detail-header">
            <span className="detail-icon">{selectedCase.icon}</span>
            <div>
              <h1>{selectedCase.title}</h1>
              <p className="detail-year">{selectedCase.year}</p>
            </div>
            <div className="detail-severity" data-severity={selectedCase.severity.toLowerCase()}>
              {selectedCase.severity}
            </div>
          </div>

          <section className="detail-section">
            <h2>📖 Case Summary</h2>
            <p>{selectedCase.summary}</p>
          </section>

          <section className="detail-section">
            <h2>📅 Timeline of Events</h2>
            <div className="timeline">
              {selectedCase.timeline.map((event, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{event.date}</h4>
                    <p><strong>{event.event}</strong></p>
                    <p className="impact">Impact: {event.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>💡 Key Lessons Learned</h2>
            <div className="lessons">
              {selectedCase.lessons.map((lesson, idx) => (
                <div key={idx} className="lesson-item">
                  {lesson}
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h2>⚖️ Applicable Laws & Regulations</h2>
            <div className="laws-grid">
              {selectedCase.applicableLaws.map((law, idx) => (
                <div key={idx} className="law-badge">{law}</div>
              ))}
            </div>
          </section>

          <section className="detail-section scenario-section">
            <h2>❓ What Would You Do?</h2>
            <p className="scenario-question">{selectedCase.question}</p>
            <div className="scenario-options">
              {selectedCase.answers.map((answer, idx) => (
                <button
                  key={idx}
                  className={`scenario-btn ${userAnswer === idx ? 'selected' : ''} ${
                    userAnswer !== null && idx === selectedCase.correctAnswer ? 'correct' : ''
                  } ${
                    userAnswer !== null && userAnswer === idx && idx !== selectedCase.correctAnswer ? 'incorrect' : ''
                  }`}
                  onClick={() => handleAnswer(idx)}
                >
                  <span className="option-label">{String.fromCharCode(65 + idx)}</span>
                  {answer}
                </button>
              ))}
            </div>
            {userAnswer !== null && (
              <div className={`feedback ${userAnswer === selectedCase.correctAnswer ? 'correct-feedback' : 'incorrect-feedback'}`}>
                {userAnswer === selectedCase.correctAnswer
                  ? '✓ Correct! This is the proper cybersecurity and legal response.'
                  : '✗ Not quite right. The best approach considers legal requirements and security best practices.'}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
