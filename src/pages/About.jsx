import { Link } from 'react-router-dom';

export default function About() {
  const features = [
    { icon: '📚', title: 'IPR Education', desc: 'Clear lessons on patents, trademarks, copyrights, and trade secrets with practical checklists.', path: '/academy' },
    { icon: '🔍', title: 'IPR Issue Identifier', desc: 'Describe your situation and get a likely infringement category with next steps.', path: '/identifier' },
    { icon: '🚨', title: 'Reporting Guidance', desc: 'Country-specific reporting routes, templates, and enforcement pathways.', path: '/emergency' },
    { icon: '📰', title: 'IPR Updates', desc: 'Track policy changes, court rulings, and enforcement trends worldwide.', path: '/news' },
    { icon: '🎓', title: 'Career Guidance', desc: 'Resources for IP students, innovators, and legal professionals.', path: '/career' },
    { icon: '🌍', title: 'Global Perspective', desc: 'International IP frameworks and filing strategies across jurisdictions.', path: '/about' }
  ];

  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>ℹ️ About Amicus IPR</h1>
        <p>Your trusted companion for Intellectual Property Rights protection</p>
      </div>

      {/* Mission Section */}
      <section className="about-section">
        <div className="about-card">
          <h2>🎯 Our Mission</h2>
          <p>
            Amicus IPR bridges the gap between complex intellectual property laws and creators, startups, and students worldwide. 
            We believe protecting inventions, brands, and creative works should be practical and accessible. Our mission is to equip 
            users with clear steps, country-specific guidance, and trustworthy resources for reporting and enforcement.
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
              <h3 className="creator-name-large">Intellectual Property Rights</h3>
              <p className="creator-title">Law & Innovation Educational Initiative</p>
            </div>
          </div>

          <div className="creator-story">
            <h3>About the Project</h3>
            <p>
              Amicus IPR represents an innovative approach to making IP law accessible to everyone, 
              regardless of their location or background. This project addresses the universal challenge of 
              protecting creative and technical work in a fast-moving global market.
            </p>
            <p>
              Developed as part of a <strong>Law & Innovation</strong> initiative, this platform combines 
              legal expertise with technical innovation to create a practical solution for IPR education 
              and enforcement guidance that transcends borders.
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
                  <p>Based on global IP law principles</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💼</span>
                <div>
                  <strong>Focus Areas</strong>
                  <p>Patents, Trademarks, Copyright, Trade Secrets</p>
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

      {/* Why Amicus IPR */}
      <section className="about-section">
        <div className="about-card highlight-card">
          <h2>Why Choose Amicus IPR?</h2>
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
                <p>Latest IP policy changes and court decisions</p>
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
                <p>Designed for innovators, creators, and IP learners</p>
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
            <a href="https://www.wipo.int/" target="_blank" rel="noopener noreferrer" className="emergency-contact-item">
              <span className="contact-icon-large">🏛️</span>
              <strong>WIPO</strong>
              <span className="contact-link">wipo.int</span>
            </a>
            <a href="https://www.wipo.int/amc/en/" target="_blank" rel="noopener noreferrer" className="emergency-contact-item">
              <span className="contact-icon-large">⚖️</span>
              <strong>WIPO Arbitration</strong>
              <span className="contact-link">wipo.int/amc</span>
            </a>
            <a href="https://www.uspto.gov/" target="_blank" rel="noopener noreferrer" className="emergency-contact-item">
              <span className="contact-icon-large">🇺🇸</span>
              <strong>USPTO</strong>
              <span className="contact-link">uspto.gov</span>
            </a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="about-section">
        <div className="disclaimer-box">
          <h3>⚠️ Disclaimer</h3>
          <p>
            Amicus IPR is an educational platform for Law & Innovation learning. 
            While we strive for accuracy, this app does not constitute legal advice. For specific 
            legal matters, please consult qualified IP professionals.
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
          <p>Explore our features and protect your intellectual property</p>
          <div className="cta-buttons">
            <a href="/academy" className="btn-primary">Start Learning 📚</a>
            <a href="/identifier" className="btn-secondary">Identify IPR Issue 🔍</a>
          </div>
        </div>
      </section>
    </div>
  );
}
