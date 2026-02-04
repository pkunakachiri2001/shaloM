import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    { icon: '📚', title: 'Legal Education', desc: 'Comprehensive lessons on cyber law, IT Act 2000, DPDP Act 2023, and digital rights with interactive quizzes.', path: '/academy' },
    { icon: '🔍', title: 'Crime Analysis', desc: 'AI-powered tool to identify cyber crimes and provide instant legal guidance and action steps.', path: '/identifier' },
    { icon: '🚨', title: 'Emergency Support', desc: 'Quick access to incident reporting, complaint templates, and emergency contacts.', path: '/emergency' },
    { icon: '📰', title: 'Latest Updates', desc: 'Stay informed about new laws, court verdicts, cyber crime trends, and legal developments.', path: '/news' },
    { icon: '🎓', title: 'Career Guidance', desc: 'Resources for law students pursuing careers in legal tech and cyber law specialization.', path: '/career' },
    { icon: '🌍', title: 'Global Perspective', desc: 'International legal frameworks and comparisons from cyber law systems worldwide.', path: '/about' }
  ];

  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>ℹ️ About CyberGuard Pro</h1>
        <p>Your trusted companion for cyber law education and digital protection</p>
      </div>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            CyberGuard Pro was created to bridge the gap between complex cyber laws and everyday citizens worldwide. 
            We believe that understanding your digital rights shouldn't require a law degree. Our mission is to empower 
            people with knowledge, tools, and resources to navigate the digital world safely and confidently, regardless 
            of their location or legal jurisdiction.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="about-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="feature-grid">
          {features.map((feature, idx) => (
            <Link key={idx} to={feature.path} className="about-feature-card-link">
              <div className="about-feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Project Origin Section */}
      <section className="about-section creator-section">
        <div className="creator-showcase">
          <div className="creator-badge">
            <span className="creator-flag">🛡️</span>
            <div className="creator-info-main">
              <h2>Innovative Project</h2>
              <h3 className="creator-name-large">Global Legal Protection</h3>
              <p className="creator-title">Law & Technology Educational Initiative</p>
            </div>
          </div>

          <div className="creator-story">
            <h3>About the Project</h3>
            <p>
              CyberGuard Pro represents an innovative approach to making cyber law accessible to everyone, 
              regardless of their location or background. This project addresses the universal challenges of 
              navigating digital security and the critical need for accessible legal education in the internet age.
            </p>
            <p>
              Developed as part of a <strong>Law & Technology</strong> initiative, this platform combines 
              legal expertise with technical innovation to create a practical solution for cyber law education 
              and digital protection that transcends borders.
            </p>
            
            <div className="creator-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🌐</span>
                <div>
                  <strong>Universal Access</strong>
                  <p>Designed for global use across jurisdictions</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔗</span>
                <div>
                  <strong>International Standards</strong>
                  <p>Based on global cyber law principles</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <div>
                  <strong>Focus Areas</strong>
                  <p>Cyber Law, Legal Tech, Data Protection</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <strong>Vision</strong>
                  <p>Making legal knowledge accessible to everyone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="about-section">
        <h2 className="section-title">Technology Stack</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <h4>⚛️ React 18</h4>
            <p>Modern UI framework for interactive interfaces</p>
          </div>
          <div className="tech-card">
            <h4>📱 PWA</h4>
            <p>Progressive Web App for offline functionality</p>
          </div>
          <div className="tech-card">
            <h4>🎨 CSS3</h4>
            <p>Modern styling with animations and responsiveness</p>
          </div>
          <div className="tech-card">
            <h4>⚡ Vite</h4>
            <p>Lightning-fast build tool and dev server</p>
          </div>
        </div>
      </section>

      {/* Why CyberGuard Pro */}
      <section className="about-section">
        <div className="about-card highlight-card">
          <h2>Why Choose CyberGuard Pro?</h2>
          <div className="why-list">
            <div className="why-item">
              <span className="why-icon">✅</span>
              <div>
                <strong>Comprehensive Coverage</strong>
                <p>From basic concepts to complex legal scenarios</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">✅</span>
              <div>
                <strong>Practical Tools</strong>
                <p>Not just information - actionable resources you can use immediately</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">✅</span>
              <div>
                <strong>Always Updated</strong>
                <p>Latest laws including DPDP Act 2023 and recent judgments</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">✅</span>
              <div>
                <strong>Accessible Everywhere</strong>
                <p>Works on any device, even offline</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">✅</span>
              <div>
                <strong>Student-Friendly</strong>
                <p>Designed with law students and career seekers in mind</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-icon">✅</span>
              <div>
                <strong>100% Free</strong>
                <p>No subscriptions, no hidden costs, completely free forever</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-section">
        <div className="contact-card">
          <h2>📞 Important Contacts</h2>
          <div className="emergency-contacts-grid">
            <a href="tel:1930" className="emergency-contact-item">
              <span className="contact-icon-large">🚨</span>
              <strong>Cyber Crime Helpline</strong>
              <span className="contact-number">1930</span>
            </a>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="emergency-contact-item">
              <span className="contact-icon-large">💻</span>
              <strong>National Portal</strong>
              <span className="contact-link">cybercrime.gov.in</span>
            </a>
            <a href="tel:100" className="emergency-contact-item">
              <span className="contact-icon-large">👮</span>
              <strong>Police Emergency</strong>
              <span className="contact-number">100</span>
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="about-section">
        <div className="disclaimer-box">
          <h3>⚠️ Disclaimer</h3>
          <p>
            IndoZim Legal Guard is an educational platform for Law & Technology learning. 
            While we strive for accuracy, this app does not constitute legal advice. For specific 
            legal matters, please consult qualified legal professionals.
          </p>
          <p>
            All information is provided for educational purposes only. Users are encouraged 
            to verify information with official sources and seek professional legal counsel 
            for their specific situations.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-section">
        <div className="cta-box">
          <h2>Ready to Get Started?</h2>
          <p>Explore our features and empower yourself with legal knowledge</p>
          <div className="cta-buttons">
            <a href="/academy" className="btn-primary">Start Learning 📚</a>
            <a href="/identifier" className="btn-secondary">Identify Crime 🔍</a>
          </div>
        </div>
      </section>
    </div>
  );
}
