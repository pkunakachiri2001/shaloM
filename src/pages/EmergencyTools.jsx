import { useState } from 'react';

export default function EmergencyTools() {
  const [activeTab, setActiveTab] = useState('reporter');
  const [selectedCountry, setSelectedCountry] = useState('india');
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
    if (!reportData.type.trim()) newErrors.type = 'IPR issue type is required';
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
    
    alert('✓ Report prepared! Use the country guidance below to submit officially. Save this information for reference.');
  };

  const countryGuides = [
    {
      id: 'india',
      name: 'India',
      portals: [
        { label: 'IP India (CGPDTM)', url: 'https://ipindia.gov.in/' },
        { label: 'Copyright Office', url: 'https://copyright.gov.in/' }
      ],
      reportTo: [
        'IP India for patents, trademarks, and designs',
        'Copyright Office for copyright registration guidance',
        'Local police for counterfeiting or criminal infringement',
        'Customs IPR recordation for import seizures'
      ],
      laws: [
        'Patents Act, 1970',
        'Trade Marks Act, 1999',
        'Copyright Act, 1957',
        'Designs Act, 2000',
        'Geographical Indications of Goods Act, 1999'
      ]
    },
    {
      id: 'us',
      name: 'United States',
      portals: [
        { label: 'USPTO', url: 'https://www.uspto.gov/' },
        { label: 'U.S. Copyright Office', url: 'https://www.copyright.gov/' }
      ],
      reportTo: [
        'Federal court or counsel for infringement claims',
        'Platform takedown for online infringement (DMCA)',
        'USITC for import-related infringement (Section 337)'
      ],
      laws: [
        'Title 35 (Patents)',
        'Lanham Act (Trademarks)',
        'Title 17 (Copyrights)',
        'Defend Trade Secrets Act (DTSA)'
      ]
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      portals: [
        { label: 'UK Intellectual Property Office', url: 'https://www.gov.uk/government/organisations/intellectual-property-office' }
      ],
      reportTo: [
        'UK IPO guidance and dispute resolution',
        'Trading Standards for counterfeits',
        'Civil courts for infringement claims'
      ],
      laws: [
        'Patents Act 1977',
        'Trade Marks Act 1994',
        'Copyright, Designs and Patents Act 1988'
      ]
    },
    {
      id: 'eu',
      name: 'European Union',
      portals: [
        { label: 'EUIPO', url: 'https://euipo.europa.eu/' }
      ],
      reportTo: [
        'EUIPO for EU trademarks and designs',
        'National patent offices for patents',
        'Local courts for enforcement'
      ],
      laws: [
        'EU Trademark Regulation',
        'EU Design Regulation',
        'EU Copyright Directives'
      ]
    },
    {
      id: 'canada',
      name: 'Canada',
      portals: [
        { label: 'CIPO', url: 'https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en' }
      ],
      reportTo: [
        'CIPO guidance for registrations',
        'Civil courts for enforcement',
        'Border services for counterfeits'
      ],
      laws: [
        'Patent Act',
        'Trademarks Act',
        'Copyright Act',
        'Industrial Design Act'
      ]
    },
    {
      id: 'australia',
      name: 'Australia',
      portals: [
        { label: 'IP Australia', url: 'https://www.ipaustralia.gov.au/' }
      ],
      reportTo: [
        'IP Australia guidance',
        'Federal Court or counsel for enforcement',
        'Customs for border enforcement'
      ],
      laws: [
        'Patents Act 1990',
        'Trade Marks Act 1995',
        'Copyright Act 1968',
        'Designs Act 2003'
      ]
    }
  ];

  const selectedGuide = countryGuides.find((guide) => guide.id === selectedCountry);

  const emergencyContacts = [
    {
      name: 'IP Office Guidance',
      number: 'Official portal',
      description: 'Contact your national IP office for guidance and filings',
      available: 'Business hours',
      icon: '🏛️'
    },
    {
      name: 'Customs IPR Cell',
      number: 'Varies by country',
      description: 'Border enforcement for counterfeit imports',
      available: 'Business hours',
      icon: '🛃'
    },
    {
      name: 'Platform Takedown',
      number: 'Online',
      description: 'Use marketplace/hosting takedown or DMCA forms',
      available: '24/7',
      icon: '🧾'
    },
    {
      name: 'Legal Counsel',
      number: 'Local IP lawyer',
      description: 'For infringement disputes or litigation',
      available: 'By appointment',
      icon: '⚖️'
    }
  ];

  const complaintTemplates = [
    {
      title: 'Patent Infringement Notice',
      template: `To,
[Recipient Name / Company]
[Address]

Subject: Notice of Patent Infringement – [Patent Number/Title]

Dear [Recipient],

I am the owner/authorized licensee of [Patent Number/Title], granted on [Date]. It has come to my attention that [describe infringing product/process] appears to use the patented invention without authorization.

Details:
- Patent: [Number/Title]
- Infringing activity: [Describe product/process and where observed]
- Evidence: [Links, screenshots, product listings, technical comparison]

I request that you immediately cease and desist all infringing activities and confirm in writing within [X days].

This notice is sent without prejudice to my rights and remedies.

Sincerely,
[Your Name]
[Contact Details]
[Date]`
    },
    {
      title: 'Trademark Infringement / Counterfeit Report',
      template: `To,
[Marketplace/Platform/IP Contact]

Subject: Trademark Infringement / Counterfeit Report – [Trademark Name/Reg. No.]

Hello,

I am the owner/representative of the trademark [Name/Reg. No.]. The following listings appear to infringe our trademark or sell counterfeit goods:

- Listing URL(s): [Links]
- Seller/Store: [Name]
- Evidence: [Screenshots, comparison of genuine vs counterfeit]

Please remove the infringing listings and confirm action taken. I can provide additional documentation upon request.

Regards,
[Your Name]
[Brand/Company]
[Contact Details]`
    },
    {
      title: 'Copyright Takedown Request (DMCA-style)',
      template: `To,
[Service Provider/Platform]

Subject: Copyright Infringement Takedown Request

I am the owner/authorized agent of the copyrighted work described below:

- Original work: [Title/URL]
- Infringing material: [URL(s)]
- Statement of good faith: I believe this use is not authorized by the copyright owner, its agent, or the law.
- Statement under penalty of perjury: The information in this notice is accurate and I am authorized to act.

Please remove or disable access to the infringing material.

Sincerely,
[Your Name]
[Contact Details]
[Date]`
    },
    {
      title: 'Trade Secret Misappropriation Report',
      template: `To,
[Legal Counsel / HR / Law Enforcement]

Subject: Report of Trade Secret Misappropriation

I am reporting suspected misappropriation of confidential trade secrets including: [describe trade secrets].

Details:
- Date discovered: [DD/MM/YYYY]
- Suspected party: [Name/Role]
- Evidence: [Access logs, emails, device records]

Please advise on immediate preservation steps and legal remedies.

Sincerely,
[Your Name]
[Contact Details]
[Date]`
    }
  ];

  return (
    <div className="page emergency-page">
      <div className="page-header emergency-header">
        <h1>🚨 Report Intellectual Property Issues</h1>
        <p>Country-specific reporting routes, templates, and enforcement guidance</p>
      </div>

      <section className="emergency-country">
        <div className="info-card">
          <h3>🌍 Select your country</h3>
          <p>We’ll show the most relevant IP offices, reporting routes, and laws. This is educational guidance, not legal advice.</p>
          <select
            className="country-select"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            aria-label="Select country"
          >
            {countryGuides.map((guide) => (
              <option key={guide.id} value={guide.id}>{guide.name}</option>
            ))}
          </select>

          {selectedGuide && (
            <div className="country-guide">
              <div className="country-section">
                <h4>Where to report</h4>
                <ul>
                  {selectedGuide.reportTo.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="country-section">
                <h4>Applicable laws</h4>
                <ul>
                  {selectedGuide.laws.map((law) => (
                    <li key={law}>{law}</li>
                  ))}
                </ul>
              </div>
              <div className="country-section">
                <h4>Official portals</h4>
                <div className="portal-links">
                  {selectedGuide.portals.map((portal) => (
                    <a key={portal.url} href={portal.url} target="_blank" rel="noopener noreferrer">
                      {portal.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="emergency-tabs">
        <button 
          className={`tab-btn ${activeTab === 'reporter' ? 'active' : ''}`}
          onClick={() => setActiveTab('reporter')}
        >
          📝 Report IPR Issue
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
          📞 Key Contacts
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'reporter' && (
          <div className="reporter-section">
            <div className="alert-box">
              <strong>⚠️ Important:</strong> This form helps you organize information. Use the country guidance above and official IP office portals to file or escalate.
            </div>

            <form onSubmit={handleReportSubmit} className="report-form" noValidate>
              {submitted && (
                <div style={{ background: '#d1fae5', color: '#065f46', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem', border: '1px solid #6ee7b7' }}>
                  ✓ Report prepared successfully! Use the country guidance above to file officially.
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="incident-type">Type of IPR Issue *</label>
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
                  <option value="">Select issue type...</option>
                  <option value="patent">Patent Infringement</option>
                  <option value="trademark">Trademark Infringement / Counterfeits</option>
                  <option value="copyright">Copyright Infringement</option>
                  <option value="trade-secret">Trade Secret Theft</option>
                  <option value="design">Design Infringement</option>
                  <option value="domain">Cybersquatting / Domain Abuse</option>
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
                  placeholder="Describe what happened: product/service, where you saw it, dates, parties involved, and how it conflicts with your rights..."
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
                  placeholder="List evidence: registration numbers, certificates, screenshots, URLs, invoices, product photos, source files..."
                  value={reportData.evidence}
                  onChange={(e) => setReportData({...reportData, evidence: e.target.value})}
                  aria-label="Evidence details (optional)"
                />
              </div>

              <div className="evidence-tips">
                <h4>📸 Evidence Collection Tips:</h4>
                <ul>
                  <li>Capture listings with timestamps and seller details</li>
                  <li>Save your registration certificates or filings</li>
                  <li>Keep source files, sketches, and drafts</li>
                  <li>Preserve invoices and proof of first use</li>
                  <li>Record dates and locations of infringement</li>
                  <li>Do not alter originals; keep clean copies</li>
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
                <li>Gather evidence (registrations, URLs, screenshots, proof of use)</li>
                <li>Use the official portals listed for your country</li>
                <li>Submit marketplace or hosting takedown requests if needed</li>
                <li>Consider consulting an IP professional for enforcement</li>
                <li>Keep a copy of your submission acknowledgment</li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="templates-section">
            <div className="info-box">
              <strong>💡 How to use:</strong> Select a template, copy it, fill in your details, and send it to the platform, infringer, or counsel.
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
                <li>Submit to the appropriate IP office, platform, or counsel</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className="contacts-section">
            <div className="urgent-alert">
              <h3>🚨 Counterfeit or high-risk cases?</h3>
              <div className="urgent-actions">
                <button type="button" className="urgent-btn">
                  <span className="btn-icon">🧾</span>
                  <span>File a takedown request</span>
                </button>
                <button type="button" className="urgent-btn">
                  <span className="btn-icon">⚖️</span>
                  <span>Contact IP counsel</span>
                </button>
              </div>
            </div>

            <div className="contacts-grid">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="contact-card-large">
                  <div className="contact-icon-large">{contact.icon}</div>
                  <h3>{contact.name}</h3>
                  <div className="contact-number">{contact.number}</div>
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
                <a href="https://www.wipo.int/" target="_blank" rel="noopener noreferrer" className="resource-link">
                  <span>🔗</span>
                  <div>
                    <strong>WIPO (Global IP Guidance)</strong>
                    <p>International IP resources and dispute resolution</p>
                  </div>
                </a>
                <a href="https://www.wipo.int/amc/en/" target="_blank" rel="noopener noreferrer" className="resource-link">
                  <span>🔗</span>
                  <div>
                    <strong>WIPO Arbitration & Mediation</strong>
                    <p>Dispute resolution options for IP conflicts</p>
                  </div>
                </a>
                <a href="https://www.wipo.int/amc/en/domains/" target="_blank" rel="noopener noreferrer" className="resource-link">
                  <span>🔗</span>
                  <div>
                    <strong>Domain Name Disputes (UDRP)</strong>
                    <p>Resolve cybersquatting disputes</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="local-info">
              <h3>📍 Local IP Offices:</h3>
              <p>Check your national IP office for local contacts and guidance:</p>
              <ul>
                <li>Use the country selector above to access official portals</li>
                <li>Contact customs for counterfeit border enforcement</li>
                <li>Consult a qualified IP attorney for litigation or settlement</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
