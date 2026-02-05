import { useState } from 'react';

export default function EmergencyTools() {
  const [activeTab, setActiveTab] = useState('reporter');
  const [reportData, setReportData] = useState({
    type: '',
    description: '',
    evidence: '',
    urgency: 'medium'
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!reportData.type.trim()) newErrors.type = 'Incident type is required';
    if (!reportData.description.trim()) newErrors.description = 'Description is required (minimum 20 characters)';
    if (reportData.description.trim().length < 20) newErrors.description = 'Description must be at least 20 characters';
    return newErrors;
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setReportData({ type: '', description: '', evidence: '', urgency: 'medium' });
    }, 3000);
    
    alert('✓ Report prepared! Visit cybercrime.gov.in to submit officially. Save this information for reference.');
  };

  const emergencyContacts = [
    {
      name: 'Cyber Crime Helpline',
      number: '1930',
      description: 'National cyber crime reporting & helpline',
      available: '24/7',
      icon: '🚨'
    },
    {
      name: 'Police Emergency',
      number: '100',
      description: 'General police emergency services',
      available: '24/7',
      icon: '👮'
    },
    {
      name: 'Women Helpline',
      number: '181',
      description: 'For women facing cyber harassment',
      available: '24/7',
      icon: '👩'
    },
    {
      name: 'Child Helpline',
      number: '1098',
      description: 'For children facing online abuse',
      available: '24/7',
      icon: '👶'
    },
    {
      name: 'National Cyber Coordination',
      number: '155260',
      description: 'Cyber security incidents',
      available: 'Business hours',
      icon: '💻'
    },
    {
      name: 'Banking Fraud',
      number: '1800-425-3800',
      description: 'Reserve Bank of India - Banking fraud',
      available: 'Business hours',
      icon: '🏦'
    }
  ];

  const complaintTemplates = [
    {
      title: 'Hacking / Unauthorized Access',
      template: `To,
The Cyber Crime Cell,
[Your City]

Subject: Complaint regarding Unauthorized Access to [Account/System]

Respected Sir/Madam,

I, [Your Name], resident of [Your Address], would like to file a complaint regarding unauthorized access to my [specify: email account/social media account/computer system].

Details of the incident:
- Date and Time: [DD/MM/YYYY, HH:MM]
- Platform/Account affected: [Specify]
- Description: [Describe what happened]
- Evidence: [List evidence: screenshots, emails, transaction records]

This is in violation of Section 66 of the Information Technology Act, 2000.

I request you to kindly investigate this matter and take necessary legal action against the perpetrator.

Thanking you,
[Your Name]
[Contact Number]
[Email Address]
Date: [DD/MM/YYYY]`
    },
    {
      title: 'Cyberbullying / Online Harassment',
      template: `To,
The Cyber Crime Cell,
[Your City]

Subject: Complaint regarding Cyberbullying and Online Harassment

Respected Sir/Madam,

I, [Your Name], resident of [Your Address], would like to file a complaint regarding cyberbullying and online harassment.

Details:
- Date harassment started: [DD/MM/YYYY]
- Platform: [Facebook/Instagram/WhatsApp/Other]
- Perpetrator's details: [Username/Phone number if known]
- Nature of harassment: [Describe: threats, abusive messages, etc.]
- Evidence: Attached screenshots with timestamps

This constitutes an offense under Section 66E of IT Act, 2000 and Section 354D & 509 of IPC.

I request immediate action to stop this harassment and legal proceedings against the perpetrator.

Thanking you,
[Your Name]
[Contact Number]
[Email Address]
Date: [DD/MM/YYYY]`
    },
    {
      title: 'Online Financial Fraud',
      template: `To,
The Cyber Crime Cell,
[Your City]

Subject: Urgent - Online Financial Fraud

Respected Sir/Madam,

I, [Your Name], would like to report an online financial fraud that occurred on [Date].

Transaction Details:
- Date & Time: [DD/MM/YYYY, HH:MM]
- Amount: ₹[Amount]
- Account/Card: [Last 4 digits]
- Mode: [UPI/Card/Net Banking]
- Transaction ID: [If available]

Details of fraud:
[Describe how the fraud occurred: phishing call, fake website, etc.]

I have immediately:
- Blocked my card/account
- Informed my bank
- Called 1930 cyber fraud helpline

This is punishable under Section 66C & 66D of IT Act and Section 420 of IPC.

I request urgent action to trace and recover my money.

Evidence attached: [List screenshots, call records, etc.]

Thanking you,
[Your Name]
[Contact Number]
[Email Address]
Date: [DD/MM/YYYY]`
    },
    {
      title: 'Identity Theft / Impersonation',
      template: `To,
The Cyber Crime Cell,
[Your City]

Subject: Complaint regarding Identity Theft and Impersonation

Respected Sir/Madam,

I, [Your Name], would like to report that someone has created a fake profile/account using my personal information and photographs without my consent.

Details:
- Platform: [Facebook/Instagram/Other]
- Fake account URL: [Link]
- My real account: [Link]
- Date discovered: [DD/MM/YYYY]
- Misuse: [Describe how it's being misused]

This is a clear case of identity theft under Section 66C & 66D of the Information Technology Act, 2000.

I have:
- Reported to the platform
- Requested removal
- Saved screenshots as evidence

I request immediate action to remove the fake account and legal action against the perpetrator.

Evidence attached: [Screenshots, comparison photos]

Thanking you,
[Your Name]
[Contact Number]
[Email Address]
Date: [DD/MM/YYYY]`
    }
  ];

  return (
    <div className="page emergency-page">
      <div className="page-header emergency-header">
        <h1>🚨 Emergency Tools</h1>
        <p>Quick access to reporting, complaints, and emergency contacts</p>
      </div>

      <div className="emergency-tabs">
        <button 
          className={`tab-btn ${activeTab === 'reporter' ? 'active' : ''}`}
          onClick={() => setActiveTab('reporter')}
        >
          📝 Report Incident
        </button>
        <button 
          className={`tab-btn ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          📄 Complaint Templates
        </button>
        <button 
          className={`tab-btn ${activeTab === 'contacts' ? 'active' : ''}`}
          onClick={() => setActiveTab('contacts')}
        >
          📞 Emergency Contacts
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'reporter' && (
          <div className="reporter-section">
            <div className="alert-box">
              <strong>⚠️ Important:</strong> This form helps you organize information. For official reporting, visit <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a> or call 1930.
            </div>

            <form onSubmit={handleReportSubmit} className="report-form" noValidate>
              {submitted && (
                <div style={{ background: '#d1fae5', color: '#065f46', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #6ee7b7' }}>
                  ✓ Report prepared successfully! Now visit cybercrime.gov.in to file officially.
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="incident-type">Type of Incident *</label>
                <select 
                  id="incident-type"
                  value={reportData.type}
                  onChange={(e) => {
                    setReportData({...reportData, type: e.target.value});
                    if (errors.type) setErrors({...errors, type: ''});
                  }}
                  className={errors.type ? 'error' : ''}
                  aria-invalid={!!errors.type}
                  aria-describedby={errors.type ? 'incident-type-error' : undefined}
                >
                  <option value="">Select incident type...</option>
                  <option value="hacking">Hacking / Unauthorized Access</option>
                  <option value="harassment">Cyberbullying / Harassment</option>
                  <option value="fraud">Financial Fraud</option>
                  <option value="identity">Identity Theft</option>
                  <option value="phishing">Phishing / Scam</option>
                  <option value="stalking">Cyberstalking</option>
                  <option value="privacy">Privacy Violation</option>
                  <option value="other">Other</option>
                </select>
                {errors.type && <span id="incident-type-error" className="error-message">{errors.type}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="urgency-level">Urgency Level *</label>
                <div id="urgency-level" className="urgency-buttons">
                  <button
                    type="button"
                    className={`urgency-btn ${reportData.urgency === 'low' ? 'active' : ''}`}
                    onClick={() => setReportData({...reportData, urgency: 'low'})}
                  >
                    Low
                  </button>
                  <button
                    type="button"
                    className={`urgency-btn ${reportData.urgency === 'medium' ? 'active' : ''}`}
                    onClick={() => setReportData({...reportData, urgency: 'medium'})}
                  >
                    Medium
                  </button>
                  <button
                    type="button"
                    className={`urgency-btn ${reportData.urgency === 'high' ? 'active' : ''}`}
                    onClick={() => setReportData({...reportData, urgency: 'high'})}
                  >
                    High
                  </button>
                  <button
                    type="button"
                    className={`urgency-btn ${reportData.urgency === 'critical' ? 'active' : ''}`}
                    onClick={() => setReportData({...reportData, urgency: 'critical'})}
                  >
                    Critical
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description * <span style={{ color: '#64748b', fontSize: '0.9rem' }}>(min 20 chars)</span></label>
                <textarea
                  id="description"
                  rows="6"
                  placeholder="Describe what happened in detail: date, time, how it occurred, who was involved (if known)..."
                  value={reportData.description}
                  onChange={(e) => {
                    setReportData({...reportData, description: e.target.value});
                    if (errors.description) setErrors({...errors, description: ''});
                  }}
                  className={errors.description ? 'error' : ''}
                  aria-invalid={!!errors.description}
                  aria-describedby={errors.description ? 'description-error' : undefined}
                />
                {errors.description && <span id="description-error" className="error-message">{errors.description}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="evidence">Evidence Details</label>
                <textarea
                  id="evidence"
                  rows="4"
                  placeholder="List evidence you have: screenshots (with timestamps), emails, messages, transaction IDs, URLs, phone numbers..."
                  value={reportData.evidence}
                  onChange={(e) => setReportData({...reportData, evidence: e.target.value})}
                  aria-label="Evidence details (optional)"
                />
              </div>

              <div className="evidence-tips">
                <h4>📸 Evidence Collection Tips:</h4>
                <ul>
                  <li>Take screenshots with visible timestamps</li>
                  <li>Save original emails and messages</li>
                  <li>Note down URLs and usernames</li>
                  <li>Keep transaction IDs and receipts</li>
                  <li>Record dates and times of incidents</li>
                  <li>Don't delete anything - it's evidence!</li>
                </ul>
              </div>

              <button type="submit" className="btn-primary btn-large">
                Prepare Report →
              </button>
            </form>

            <div className="next-steps">
              <h3>📋 Next Steps:</h3>
              <ol>
                <li>Save this information in a document</li>
                <li>Gather all evidence (screenshots, emails, etc.)</li>
                <li>Visit <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a> to file official complaint</li>
                <li>Or visit your nearest cyber crime police station</li>
                <li>Keep a copy of your complaint acknowledgment</li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="templates-section">
            <div className="info-box">
              <strong>💡 How to use:</strong> Select a template, copy it, fill in your details, and use it to file your complaint at the cyber cell or online portal.
            </div>

            <div className="templates-grid">
              {complaintTemplates.map((template, index) => (
                <div key={index} className="template-card">
                  <h3>{template.title}</h3>
                  <div className="template-content">
                    <pre>{template.template}</pre>
                  </div>
                  <button 
                    className="btn-secondary"
                    onClick={() => {
                      navigator.clipboard.writeText(template.template);
                      alert('Template copied to clipboard!');
                    }}
                  >
                    📋 Copy Template
                  </button>
                </div>
              ))}
            </div>

            <div className="template-guide">
              <h3>✍️ How to Fill the Template:</h3>
              <ul>
                <li>Replace all text in [square brackets] with your information</li>
                <li>Be specific with dates, times, and descriptions</li>
                <li>Attach all relevant evidence</li>
                <li>Keep a copy for your records</li>
                <li>Submit at cyber cell or upload to cybercrime.gov.in</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="contacts-section">
            <div className="urgent-alert">
              <h3>🚨 In Immediate Danger?</h3>
              <div className="urgent-actions">
                <a href="tel:100" className="urgent-btn">
                  <span className="btn-icon">👮</span>
                  <span>Call Police: 100</span>
                </a>
                <a href="tel:1930" className="urgent-btn">
                  <span className="btn-icon">💻</span>
                  <span>Cyber Helpline: 1930</span>
                </a>
              </div>
            </div>

            <div className="contacts-grid">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="contact-card-large">
                  <div className="contact-icon-large">{contact.icon}</div>
                  <h3>{contact.name}</h3>
                  <div className="contact-number">
                    <a href={`tel:${contact.number}`}>{contact.number}</a>
                  </div>
                  <p className="contact-desc">{contact.description}</p>
                  <div className="contact-availability">
                    <span className="availability-badge">{contact.available}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="online-resources">
              <h3>🌐 Online Resources:</h3>
              <div className="resources-list">
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="resource-link">
                  <span>🔗</span>
                  <div>
                    <strong>National Cyber Crime Portal</strong>
                    <p>File online complaints, track status</p>
                  </div>
                </a>
                <a href="https://www.ncw.nic.in" target="_blank" rel="noopener noreferrer" className="resource-link">
                  <span>🔗</span>
                  <div>
                    <strong>National Commission for Women</strong>
                    <p>For women facing cyber harassment</p>
                  </div>
                </a>
                <a href="https://www.incometax.gov.in" target="_blank" rel="noopener noreferrer" className="resource-link">
                  <span>🔗</span>
                  <div>
                    <strong>Income Tax Department</strong>
                    <p>Report tax-related cyber fraud</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="local-info">
              <h3>📍 Local Cyber Crime Cells:</h3>
              <p>Find your nearest cyber crime police station:</p>
              <ul>
                <li><strong>Pune Cyber Cell:</strong> Shivajinagar Police Station - 020-26126296</li>
                <li><strong>Mumbai Cyber Cell:</strong> BKC - 022-26471101</li>
                <li>Visit your local police station and ask for cyber crime wing</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
