import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    {
      icon: '📚',
      title: 'IPR Academy',
      description: 'Learn patents, trademarks, copyrights, trade secrets, and enforcement basics in clear steps.',
      items: ['Practical lessons', 'Real-world case studies', 'Actionable checklists'],
      className: 'card-primary',
      path: '/academy'
    },
    {
      icon: '🔍',
      title: 'IPR Issue Identifier',
      description: 'Describe your problem and get a likely IPR category with immediate next steps.',
      items: ['Situation analyzer', 'Likely infringement type', 'Evidence & action steps'],
      className: 'card-secondary',
      path: '/identifier'
    },
    {
      icon: '🚨',
      title: 'Report & Enforcement',
      description: 'Country-specific reporting routes, IP office links, and escalation guidance.',
      items: ['Where to report', 'Templates & checklists', 'Local law references'],
      className: 'card-accent',
      path: '/emergency'
    },
    {
      icon: '📰',
      title: 'IPR News & Updates',
      description: 'Track major IPR rulings, policy updates, and enforcement trends worldwide.',
      items: ['Curated summaries', 'Policy highlights', 'Global trends'],
      className: 'card-success',
      path: '/news'
    },
    {
      icon: '🎓',
      title: 'IP Career Hub',
      description: 'Resources for IP students and innovators: internships, clinics, and skill paths.',
      items: ['Clinic listings', 'Career guidance', 'Portfolio prep'],
      className: 'card-warning',
      path: '/career'
    },
    {
      icon: '💬',
      title: 'Resources & Support',
      description: 'Guides, templates, and chatbot help for protecting your IP assets.',
      items: ['Resource library', 'Takedown templates', 'Chatbot assistance'],
      className: 'card-info',
      path: '/resources'
    }
  ];

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Protect Your <span className="gradient-text">Intellectual Property</span> Worldwide
          </h1>
          <p className="hero-subtitle">
            Practical guidance for patents, trademarks, copyrights, and trade secrets — tailored to your country
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">IP Topics</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Reporting Paths</div>
            </div>
            <div className="stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Free Guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features">
        <h2 className="section-title">Everything You Need for IPR</h2>
        
        <div className="feature-grid">
          {features.map((feature) => (
            <Link key={feature.title} to={feature.path} className="feature-card-link">
              <div className={`feature-card ${feature.className}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-list">
                  {feature.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
                <span className="feature-cta">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/academy" className="action-btn btn-primary">
            <span className="btn-icon">🎯</span>
            <span>Learn IPR</span>
          </Link>
          <Link to="/emergency" className="action-btn btn-danger">
            <span className="btn-icon">🚨</span>
            <span>Report Infringement</span>
          </Link>
          <Link to="/identifier" className="action-btn btn-info">
            <span className="btn-icon">❓</span>
            <span>Identify IPR Issue</span>
          </Link>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="home-footer">
        <div className="footer-content">
          <p className="footer-tagline">
            <strong>Built for Amicus IPR</strong>
          </p>
          <p className="footer-text">
            Practical IPR guidance for creators, founders, and legal learners
          </p>
          <p className="footer-legal">
            Law & Innovation | Educational Project
          </p>
        </div>
      </footer>
    </div>
  );
}
