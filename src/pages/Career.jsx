const careerData = {
  internships: [
    {
      title: 'IP Research Intern',
      company: 'Major Law Firm',
      location: 'Mumbai / Pune',
      duration: '3-6 months',
      stipend: '₹10,000 - ₹15,000/month',
      description: 'Research on patents, trademarks, and infringement cases across jurisdictions.',
      skills: ['Legal Research', 'IPR Fundamentals', 'Case Analysis']
    },
    {
      title: 'IP Strategy Intern',
      company: 'LegalTech Startup',
      location: 'Bangalore / Remote',
      duration: '6 months',
      stipend: '₹15,000 - ₹20,000/month',
      description: 'Support prior art searches, portfolio audits, and IP risk assessments.',
      skills: ['IP Research', 'Analytical Skills', 'Problem Solving']
    },
    {
      title: 'Trademark Enforcement Intern',
      company: 'Brand Protection Agency',
      location: 'Various Cities',
      duration: '6 months',
      stipend: 'Unpaid / Certificate',
      description: 'Assist in marketplace monitoring, takedowns, and evidence documentation.',
      skills: ['Trademark Law', 'Investigation', 'Documentation']
    },
    {
      title: 'Copyright Clearance Intern',
      company: 'Media Company',
      location: 'Remote',
      duration: '3 months',
      stipend: '₹12,000 - ₹18,000/month',
      description: 'Assist with rights clearance, licensing records, and takedown coordination.',
      skills: ['Copyright Law', 'Licensing', 'Policy Writing']
    }
  ],
  careerPaths: [
    {
      title: 'Patent Attorney',
      description: 'Draft and prosecute patents, handle office actions, and advise on invention strategy.',
      salary: '₹6-15 LPA',
      growth: 'Very High',
      skills: ['Patent law', 'Technical knowledge', 'Drafting skills']
    },
    {
      title: 'Trademark Counsel',
      description: 'Manage brand protection, oppositions, infringement actions, and enforcement strategy.',
      salary: '₹8-20 LPA',
      growth: 'Excellent',
      skills: ['Trademark law', 'Investigation', 'Negotiation']
    },
    {
      title: 'IP Portfolio Manager',
      description: 'Oversee patent/trademark portfolios, filings, renewals, and strategy.',
      salary: '₹10-25 LPA',
      growth: 'Rapidly Growing',
      skills: ['Portfolio management', 'IP strategy', 'Risk assessment']
    },
    {
      title: 'IP Litigation Associate',
      description: 'Support infringement disputes, remedies, and enforcement in courts.',
      salary: '₹5-12 LPA',
      growth: 'Stable',
      skills: ['Litigation', 'Evidence handling', 'Legal writing']
    },
    {
      title: 'Trade Secret Counsel',
      description: 'Protect confidential information, NDAs, and misappropriation claims.',
      salary: '₹7-18 LPA',
      growth: 'High',
      skills: ['Trade secret law', 'Compliance', 'Incident response']
    },
    {
      title: 'IP Due Diligence Analyst',
      description: 'Audit IP assets for investments, M&A, or licensing deals.',
      salary: '₹12-30 LPA',
      growth: 'Explosive',
      skills: ['Due diligence', 'IP analysis', 'Research']
    }
  ],
  resources: [
    {
      category: 'Certifications',
      items: [
        'WIPO General Course on IP',
        'Patent Agent Preparation Programs',
        'Trademark Law Certification',
        'IP Licensing Professional Courses'
      ]
    },
    {
      category: 'Online Courses',
      items: [
        'WIPO Learn - IP Basics',
        'Coursera - Intellectual Property Law',
        'edX - Patent Law Fundamentals',
        'NPTEL - Patent and Trademark Law'
      ]
    },
    {
      category: 'Books',
      items: [
        '"Intellectual Property" by Cornish, Llewelyn & Aplin',
        '"Patent Law Essentials" by Alan L. Durham',
        '"Trademark Law" by Irene Calboli & Jane C. Ginsburg',
        '"Copyright Law" by Paul Goldstein'
      ]
    },
    {
      category: 'Organizations to Join',
      items: [
        'International Trademark Association (INTA)',
        'AIPPI (International Association for IP)',
        'WIPO Academy Alumni Network',
        'Local Bar Council IP Committees'
      ]
    }
  ],
  interviewTips: [
    {
      question: 'What are the core requirements for patentability?',
      answer: 'Novelty, inventive step (non-obviousness), and industrial applicability. Requirements vary by jurisdiction.'
    },
    {
      question: 'Difference between trademark and copyright?',
      answer: 'Trademarks protect brand identifiers (names, logos), while copyright protects original creative expression (text, art, code).'
    },
    {
      question: 'How is jurisdiction determined in IP disputes?',
      answer: 'Typically based on where infringement occurred, where rights are registered, and where the defendant is located.'
    },
    {
      question: 'How is IP evidence handled in court?',
      answer: 'Maintain chain of custody, preserve originals, document first use/publication, and collect screenshots with timestamps.'
    }
  ]
};

export default function Career() {
  return (
    <div className="page career-page">
      <div className="page-header">
        <h1>🎓 IP Career Hub</h1>
        <p>Build your future at the intersection of law, innovation, and creativity</p>
      </div>

      {/* Internships Section */}
      <section className="career-section">
        <h2 className="section-title">💼 Current Internship Opportunities</h2>
        <div className="internships-grid">
          {careerData.internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <h3>{internship.title}</h3>
              <div className="internship-meta">
                <span className="company">🏢 {internship.company}</span>
                <span className="location">📍 {internship.location}</span>
              </div>
              <div className="internship-details">
                <span className="duration">⏱️ {internship.duration}</span>
                <span className="stipend">💰 {internship.stipend}</span>
              </div>
              <p className="internship-desc">{internship.description}</p>
              <div className="skills-required">
                <strong>Skills:</strong>
                <div className="skill-tags">
                  {internship.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <button className="btn-primary">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Career Paths Section */}
      <section className="career-section">
        <h2 className="section-title">🚀 Career Paths in IP Law & Innovation</h2>
        <div className="careers-grid">
          {careerData.careerPaths.map((career, index) => (
            <div key={index} className="career-card">
              <div className="career-header">
                <h3>{career.title}</h3>
                <span className={`growth-badge ${career.growth.toLowerCase().replace(' ', '-')}`}>
                  {career.growth}
                </span>
              </div>
              <p className="career-desc">{career.description}</p>
              <div className="career-salary">
                <strong>💰 Salary Range:</strong> {career.salary}
              </div>
              <div className="career-skills">
                <strong>🎯 Key Skills:</strong>
                <ul>
                  {career.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="career-section">
        <h2 className="section-title">📚 Learning Resources</h2>
        <div className="resources-grid">
          {careerData.resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3>{resource.category}</h3>
              <ul className="resource-list">
                {resource.items.map((item, idx) => (
                  <li key={idx}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Prep Section */}
      <section className="career-section">
        <h2 className="section-title">💡 Interview Preparation</h2>
        <div className="interview-prep">
          <div className="prep-intro">
            <p>Common questions asked in IP law and legal tech interviews:</p>
          </div>
          <div className="interview-questions">
            {careerData.interviewTips.map((tip, index) => (
              <div key={index} className="interview-qa">
                <div className="question">
                  <strong>Q: {tip.question}</strong>
                </div>
                <div className="answer">
                  <strong>A:</strong> {tip.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="career-section">
        <div className="career-cta">
          <h2>🌟 Ready to Start Your Journey?</h2>
          <div className="cta-steps">
            <div className="cta-step">
              <div className="step-number">1</div>
              <h4>Build Knowledge</h4>
              <p>Master IPR through our Academy</p>
            </div>
            <div className="cta-step">
              <div className="step-number">2</div>
              <h4>Get Certified</h4>
              <p>Complete courses and certifications</p>
            </div>
            <div className="cta-step">
              <div className="step-number">3</div>
              <h4>Gain Experience</h4>
              <p>Apply for internships and projects</p>
            </div>
            <div className="cta-step">
              <div className="step-number">4</div>
              <h4>Network</h4>
              <p>Join professional organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zimbabwe-India Bridge Section */}
      <section className="career-section special-section">
        <h2 className="section-title">🇿🇼 🤝 🇮🇳 Zimbabwe-India Legal Tech Opportunities</h2>
        <div className="bridge-content">
          <p>As a Zimbabwean student studying in India, you have unique advantages:</p>
          <div className="advantages-grid">
            <div className="advantage-card">
              <h4>🌍 International Perspective</h4>
              <p>Understanding both African and Asian legal systems makes you valuable for international firms</p>
            </div>
            <div className="advantage-card">
              <h4>💼 Cross-border Practice</h4>
              <p>Opportunities in cross-border IP strategy and licensing</p>
            </div>
            <div className="advantage-card">
              <h4>🚀 Pioneer Advantage</h4>
              <p>Legal tech is growing in both regions - be among the first experts</p>
            </div>
            <div className="advantage-card">
              <h4>🎓 Education Edge</h4>
              <p>Indian BALLB + tech skills = competitive advantage in both markets</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
