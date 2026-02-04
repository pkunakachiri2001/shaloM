import { useState } from 'react';
import '../styles/IncidentSimulator.css';

const INCIDENTS = [
  {
    id: 1,
    title: 'Phishing Email Attack',
    icon: '📧',
    description: 'You receive an email claiming to be from your bank asking you to verify account details.',
    scenario: 'An employee received an email that looks like it\'s from the company\'s CEO asking to transfer money urgently.',
    choices: [
      {
        text: 'Click the link and enter your credentials',
        consequence: '❌ CRITICAL: You\'ve been compromised! The attacker now has your credentials and can access sensitive data.',
        impact: 'Account takeover, financial loss, data breach',
        correct: false
      },
      {
        text: 'Report it to IT and verify directly with the sender',
        consequence: '✓ CORRECT: You\'ve prevented a phishing attack! Smart security practices protect the organization.',
        impact: 'Attack prevented, organization alerted, security maintained',
        correct: true
      },
      {
        text: 'Delete the email without reading',
        consequence: '⚠️ PARTIAL: You avoided the attack but didn\'t report it, so others might be vulnerable.',
        impact: 'Personal safety but others at risk',
        correct: false
      }
    ]
  },
  {
    id: 2,
    title: 'Ransomware Detection',
    icon: '🦠',
    description: 'Your system files are suddenly encrypted and you see a ransom demand.',
    scenario: 'A colleague opened a malicious attachment and ransomware began encrypting files on the network.',
    choices: [
      {
        text: 'Pay the ransom to get files back',
        consequence: '❌ WRONG: Paying funds criminal activity and doesn\'t guarantee file recovery.',
        impact: 'Financial loss, no guarantee of recovery, supports criminals',
        correct: false
      },
      {
        text: 'Immediately isolate infected system and notify IT/authorities',
        consequence: '✓ CORRECT: You\'ve contained the threat! Proper incident response limits damage.',
        impact: 'Attack contained, data partially recovered, authorities alerted',
        correct: true
      },
      {
        text: 'Wait and see if it resolves itself',
        consequence: '❌ DANGEROUS: The ransomware spreads to other systems causing massive damage.',
        impact: 'Widespread damage, data loss, operational downtime',
        correct: false
      }
    ]
  },
  {
    id: 3,
    title: 'Social Engineering Attack',
    icon: '🎭',
    description: 'Someone calls claiming to be from IT support asking for your password.',
    scenario: 'A caller claims there\'s a security issue and needs your password to fix it immediately.',
    choices: [
      {
        text: 'Provide your password immediately',
        consequence: '❌ CRITICAL: This is social engineering! You\'ve given attackers access to your account.',
        impact: 'Account compromise, identity theft, unauthorized access',
        correct: false
      },
      {
        text: 'Hang up and call your IT department directly',
        consequence: '✓ CORRECT: You\'ve verified the caller\'s legitimacy! This is proper security protocol.',
        impact: 'Attack prevented, confirmed legitimate request, security maintained',
        correct: true
      },
      {
        text: 'Ask them to send an email with instructions',
        consequence: '⚠️ PARTIAL: Better but not ideal. They could send a phishing email. Direct contact is safest.',
        impact: 'Lower risk but still vulnerable to follow-up attacks',
        correct: false
      }
    ]
  },
  {
    id: 4,
    title: 'Data Breach Discovery',
    icon: '💾',
    description: 'You discover unauthorized access to customer data on your servers.',
    scenario: 'During routine security audit, you find logs showing suspicious data access.',
    choices: [
      {
        text: 'Keep it quiet and patch the vulnerability silently',
        consequence: '❌ ILLEGAL: This violates data protection laws! You must notify authorities and customers.',
        impact: 'Legal consequences, fines, loss of trust, regulatory penalties',
        correct: false
      },
      {
        text: 'Document evidence, notify management, authorities, and affected users per law',
        consequence: '✓ CORRECT: You\'ve followed proper incident response and legal requirements!',
        impact: 'Proper handling, legal compliance, damage control, restored trust over time',
        correct: true
      },
      {
        text: 'Only tell the customers without telling authorities',
        consequence: '❌ INCOMPLETE: You forgot authorities! Most jurisdictions require legal notification.',
        impact: 'Possible legal violations, incomplete compliance',
        correct: false
      }
    ]
  }
];

export default function IncidentSimulator() {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [stats, setStats] = useState({ correct: 0, total: 0 });

  const handleChoice = (choiceIndex) => {
    const isCorrect = INCIDENTS[selectedIncident].choices[choiceIndex].correct;
    setSelectedChoice(choiceIndex);
    setStats({
      correct: stats.correct + (isCorrect ? 1 : 0),
      total: stats.total + 1
    });
  };

  const resetSimulator = () => {
    setSelectedIncident(null);
    setSelectedChoice(null);
  };

  if (selectedIncident === null) {
    return (
      <div className="simulator-container">
        <div className="simulator-header">
          <h1>🎯 Incident Response Simulator</h1>
          <p>Test your cybersecurity decision-making skills in realistic scenarios</p>
        </div>

        {stats.total > 0 && (
          <div className="simulator-stats">
            <div className="stat-item">
              <span className="stat-label">Scenarios Completed</span>
              <span className="stat-value">{stats.total}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Correct Decisions</span>
              <span className="stat-value">{stats.correct}/{stats.total}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Success Rate</span>
              <span className="stat-value">{Math.round(stats.correct / stats.total * 100)}%</span>
            </div>
          </div>
        )}

        <div className="incidents-grid">
          {INCIDENTS.map((incident, idx) => (
            <div
              key={incident.id}
              className="incident-card"
              onClick={() => setSelectedIncident(idx)}
            >
              <div className="incident-icon">{incident.icon}</div>
              <h3>{incident.title}</h3>
              <p>{incident.description}</p>
              <button className="start-btn">Start Scenario →</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const incident = INCIDENTS[selectedIncident];
  const choice = selectedChoice !== null ? incident.choices[selectedChoice] : null;

  return (
    <div className="simulator-container">
      <button className="back-btn-sim" onClick={resetSimulator}>← Back to Scenarios</button>

      <div className="scenario-view">
        <div className="scenario-header">
          <span className="scenario-icon">{incident.icon}</span>
          <h1>{incident.title}</h1>
        </div>

        <div className="scenario-panel">
          <h2>Scenario</h2>
          <p className="scenario-text">{incident.scenario}</p>
        </div>

        <div className="choices-panel">
          <h2>What would you do?</h2>
          <div className="choices-list">
            {incident.choices.map((choice, idx) => (
              <button
                key={idx}
                className={`choice-btn ${selectedChoice === idx ? 'selected' : ''}`}
                onClick={() => handleChoice(idx)}
                disabled={selectedChoice !== null}
              >
                <span className="choice-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="choice-text">{choice.text}</span>
              </button>
            ))}
          </div>
        </div>

        {choice && (
          <div className={`consequence-panel ${choice.correct ? 'correct' : 'incorrect'}`}>
            <h3>Decision Consequence</h3>
            <p className="consequence-text">{choice.consequence}</p>
            
            <div className="impact-section">
              <h4>Impact:</h4>
              <p>{choice.impact}</p>
            </div>

            <div className="legal-info">
              <h4>💡 Cyber Law Insight:</h4>
              <p>
                {choice.correct
                  ? 'Your decision aligns with cybersecurity best practices and legal requirements for incident response.'
                  : 'This action could violate data protection laws and expose your organization to legal liability.'}
              </p>
            </div>

            <button className="next-btn" onClick={resetSimulator}>
              {stats.total < INCIDENTS.length ? 'Try Another Scenario' : 'View All Scenarios'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
