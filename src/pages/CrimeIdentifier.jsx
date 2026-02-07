import { useState } from 'react';

const iprDatabase = [
  {
    keywords: ['patent', 'invention copied', 'utility patent', 'process copied', 'product copied'],
    issue: 'Patent Infringement',
    law: 'Patent laws (country-specific)',
    severity: 'High',
    description: 'A product or process appears to use your patented invention without authorization.',
    actions: [
      'Confirm your patent status and claims scope',
      'Collect product samples, listings, and technical comparisons',
      'Document dates of first discovery and sales',
      'Send a cease-and-desist notice (if appropriate)',
      'Consult an IP attorney for infringement analysis',
      'Use the Report page for country-specific routes'
    ],
    remedies: 'Injunctions, damages, account of profits (varies by country)'
  },
  {
    keywords: ['trademark', 'logo copied', 'brand copied', 'counterfeit', 'fake brand', 'lookalike'],
    issue: 'Trademark Infringement / Counterfeiting',
    law: 'Trademark laws (country-specific)',
    severity: 'High',
    description: 'Someone is using a confusingly similar brand, logo, or name, or selling counterfeits.',
    actions: [
      'Collect listings, screenshots, and product photos',
      'Document proof of trademark ownership and use',
      'File platform/marketplace takedown requests',
      'Consider customs recordation for border seizures',
      'Consult counsel for enforcement or litigation'
    ],
    remedies: 'Takedowns, injunctions, damages, seizure of counterfeit goods'
  },
  {
    keywords: ['copyright', 'copied content', 'piracy', 'reuploaded', 'copied code', 'copied design'],
    issue: 'Copyright Infringement',
    law: 'Copyright laws (country-specific)',
    severity: 'Medium-High',
    description: 'Your original creative work (text, art, music, code) is being used without permission.',
    actions: [
      'Document original creation and publication dates',
      'Capture infringing URLs and screenshots',
      'Submit DMCA-style takedown to platforms',
      'Register the work if required for enforcement',
      'Seek legal advice for repeat or commercial infringement'
    ],
    remedies: 'Takedowns, damages, statutory damages (where applicable)'
  },
  {
    keywords: ['trade secret', 'confidential', 'nda breached', 'formula leaked', 'source code stolen'],
    issue: 'Trade Secret Misappropriation',
    law: 'Trade secret laws (country-specific)',
    severity: 'Very High',
    description: 'Confidential business information was acquired, disclosed, or used without permission.',
    actions: [
      'Preserve access logs, emails, and device records',
      'Document confidentiality measures (NDAs, policies)',
      'Limit further access and preserve evidence',
      'Engage counsel for emergency relief and claims'
    ],
    remedies: 'Injunctions, damages, criminal penalties in some jurisdictions'
  },
  {
    keywords: ['design copied', 'product design copied', 'industrial design', 'look copied'],
    issue: 'Design Infringement',
    law: 'Design/industrial design laws (country-specific)',
    severity: 'Medium',
    description: 'The visual appearance or design of your product has been copied.',
    actions: [
      'Collect side-by-side comparison images',
      'Verify design registration (if applicable)',
      'Submit takedown requests where available',
      'Seek counsel for enforcement steps'
    ],
    remedies: 'Injunctions, damages, destruction of infringing goods'
  },
  {
    keywords: ['domain', 'cybersquatting', 'domain copied', 'brand domain', 'typosquatting'],
    issue: 'Cybersquatting / Domain Abuse',
    law: 'Domain dispute policies (UDRP/ccTLD rules)',
    severity: 'Medium',
    description: 'A domain name is using your brand in bad faith.',
    actions: [
      'Capture WHOIS records and website screenshots',
      'Document your trademark rights and use',
      'Consider UDRP or local dispute procedures',
      'Consult counsel for domain recovery'
    ],
    remedies: 'Domain transfer or cancellation'
  }
];

export default function CrimeIdentifier() {
  const [situation, setSituation] = useState('');
  const [result, setResult] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);

  const analyzeSituation = () => {
    if (!situation.trim()) {
      alert('Please describe your situation first.');
      return;
    }

    setAnalyzing(true);

    // Simulate AI analysis delay
    setTimeout(() => {
      const lowerSituation = situation.toLowerCase();
      
      // Find matching IPR issue based on keywords
      const match = iprDatabase.find(issue =>
        issue.keywords.some(keyword => lowerSituation.includes(keyword))
      );

      if (match) {
        setResult(match);
      } else {
        setResult({
          issue: 'Unable to Determine / General IPR Issue',
          law: 'Country-specific IPR laws',
          severity: 'Unknown',
          description: 'Based on your description, we cannot determine a specific IPR category. It may still be an infringement issue.',
          actions: [
            'Collect and preserve evidence (screenshots, registrations)',
            'Identify the country where infringement occurs',
            'Use the Report page for country-specific guidance',
            'Consider contacting an IP attorney for review'
          ],
          remedies: 'Varies based on actual infringement and jurisdiction'
        });
      }

      setAnalyzing(false);
    }, 1500);
  };

  const handleReset = () => {
    setSituation('');
    setResult(null);
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Very High': return '#dc2626';
      case 'High': return '#ea580c';
      case 'Medium-High': return '#f59e0b';
      case 'Medium': return '#eab308';
      default: return '#6b7280';
    }
  };

  return (
    <div className="page identifier-page">
      <div className="page-header">
        <h1>🔍 IPR Issue Identifier</h1>
        <p>Describe what happened and get practical IPR guidance</p>
      </div>

      <div className="identifier-container">
        {!result ? (
          <div className="input-section">
            <div className="info-card">
              <h3>🛡️ How it works:</h3>
              <ol>
                <li>Describe your IPR issue in detail</li>
                <li>We classify the likely IPR category</li>
                <li>Get practical steps and reporting guidance</li>
                <li>Learn immediate actions to protect your rights</li>
              </ol>
              <p className="privacy-note">🔒 Your privacy is protected. This analysis is done locally.</p>
            </div>

            <div className="situation-input">
              <label htmlFor="situation">
                <strong>Describe what happened:</strong>
              </label>
              <textarea
                id="situation"
                rows="8"
                placeholder="Example: A seller is using my registered trademark on a product listing, or a competitor copied my patented design..."
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
              />
            </div>

            <button 
              className="btn-primary btn-large"
              onClick={analyzeSituation}
              disabled={analyzing}
            >
              {analyzing ? 'Analyzing...' : 'Analyze IPR Issue →'}
            </button>

            <div className="examples-section">
              <h4>Example situations you can describe:</h4>
              <div className="example-tags">
                <span onClick={() => setSituation('A marketplace seller is using my registered trademark on listings')}>Trademark Infringement</span>
                <span onClick={() => setSituation('A competitor copied the design of my patented product')}>Patent Infringement</span>
                <span onClick={() => setSituation('My artwork was reposted without permission on a commercial site')}>Copyright Infringement</span>
                <span onClick={() => setSituation('A former employee shared our confidential formula')}>Trade Secret Theft</span>
                <span onClick={() => setSituation('Someone registered a domain that matches my brand name')}>Cybersquatting</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="result-section">
            <div className="result-header">
              <div className="result-badge" style={{ borderColor: getSeverityColor(result.severity) }}>
                <span className="severity-label">Severity</span>
                <span className="severity-value" style={{ color: getSeverityColor(result.severity) }}>
                  {result.severity}
                </span>
              </div>
              <h2 className="crime-name">{result.issue}</h2>
              <div className="legal-section">
                <strong>Applicable Law:</strong> {result.law}
              </div>
            </div>

            <div className="result-description">
              <h3>📋 What This Means:</h3>
              <p>{result.description}</p>
            </div>

            <div className="result-penalty">
              <h3>⚖️ Remedies & Outcomes:</h3>
              <p className="penalty-text">{result.remedies}</p>
            </div>

            <div className="result-actions">
              <h3>🎯 Immediate Actions You Should Take:</h3>
              <ol className="action-list">
                {result.actions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ol>
            </div>

            <div className="important-contacts">
              <h3>📞 Helpful Resources:</h3>
              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-icon">🏛️</div>
                  <div className="contact-info">
                    <strong>IP Office Portal</strong>
                    <a href="https://www.wipo.int/" target="_blank" rel="noopener noreferrer">WIPO</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">🧾</div>
                  <div className="contact-info">
                    <strong>Domain Disputes</strong>
                    <a href="https://www.wipo.int/amc/en/domains/" target="_blank" rel="noopener noreferrer">UDRP Guidance</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">📄</div>
                  <div className="contact-info">
                    <strong>Takedown Info</strong>
                    <a href="https://www.copyright.gov/dmca/" target="_blank" rel="noopener noreferrer">DMCA Basics</a>
                  </div>
                </div>
                <div className="contact-card">
                  <div className="contact-icon">⚖️</div>
                  <div className="contact-info">
                    <strong>Find Counsel</strong>
                    <span>Local IP attorney</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="result-actions-buttons">
              <button className="btn-secondary" onClick={handleReset}>
                ← Analyze Another Situation
              </button>
              <button className="btn-danger">
                🚨 Report This Issue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
