import { useState } from 'react';
import InteractiveCard from '../components/InteractiveCard';
import '../styles/CaseStudies.css';

const CASE_STUDIES = [
  {
    id: 1,
    title: 'Apple v. Samsung – Design & Utility Patents',
    year: 2011,
    severity: 'High',
    icon: '📱',
    summary: 'A landmark dispute over smartphone design and utility patents across multiple jurisdictions.',
    timeline: [
      { date: '2011', event: 'Initial filings', impact: 'Global litigation begins' },
      { date: '2012', event: 'Major jury verdict', impact: 'Large damages awarded' },
      { date: '2016', event: 'Supreme Court review', impact: 'Design patent damages clarified' }
    ],
    lessons: [
      '💡 Design patents can drive significant damages',
      '💡 Claim scope and evidence are critical',
      '💡 Litigation can span multiple jurisdictions',
      '💡 Early portfolio strategy matters'
    ],
    applicableLaws: ['Patent law', 'Design protection rules'],
    question: 'What is a key takeaway from this case?',
    answers: [
      'Design protection is irrelevant',
      'Portfolio strategy and evidence drive outcomes',
      'Only trademarks matter',
      'Patents cannot be enforced globally'
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    title: 'Oracle v. Google – API Copyright',
    year: 2010,
    severity: 'High',
    icon: '💻',
    summary: 'A high-profile dispute on whether API declarations are copyrightable and fair use.',
    timeline: [
      { date: '2010', event: 'Complaint filed', impact: 'Developer community attention' },
      { date: '2016', event: 'Jury fair use verdict', impact: 'Google wins at trial' },
      { date: '2021', event: 'US Supreme Court decision', impact: 'Fair use affirmed' }
    ],
    lessons: [
      '💡 Fair use can apply to software interfaces',
      '💡 Licensing strategies should be explicit',
      '💡 Documentation and intent matter'
    ],
    applicableLaws: ['Copyright law', 'Fair use doctrine'],
    question: 'What was central to the final decision?',
    answers: [
      'Trademark confusion',
      'Fair use analysis',
      'Trade secret theft',
      'Patent invalidity'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    title: 'Adidas Three-Stripes – Trademark Protection',
    year: 2022,
    severity: 'Medium',
    icon: '👟',
    summary: 'Ongoing enforcement actions to protect distinctive brand identifiers.',
    timeline: [
      { date: '2010-2022', event: 'Multiple enforcement actions', impact: 'Refined standards for distinctiveness' },
      { date: '2022', event: 'Key rulings', impact: 'Clarity on scope of protection' }
    ],
    lessons: [
      '💡 Distinctiveness must be proven and maintained',
      '💡 Evidence of use is essential',
      '💡 Consistent enforcement protects brand value'
    ],
    applicableLaws: ['Trademark law', 'Unfair competition'],
    question: 'Which factor is crucial for trademark enforcement?',
    answers: [
      'Public domain use',
      'Distinctiveness and evidence of use',
      'Patent filings',
      'Trade secret measures'
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
        <h1>📋 Real IPR Case Studies</h1>
        <p>Learn from landmark IP disputes and enforcement outcomes</p>
      </div>

      {!selectedCase ? (
        <div className="cases-grid">
          {CASE_STUDIES.map(caseStudy => (
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
              onClick={() => {
                setSelectedCase(caseStudy);
                setUserAnswer(null);
              }}
            />
          ))}
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
                  ? '✓ Correct! This is the proper IPR and legal response.'
                  : '✗ Not quite right. The best approach considers legal requirements and security best practices.'}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
