import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChatbotWidget from './ChatbotWidget';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/academy', label: 'Academy', icon: '📚' },
    { path: '/identifier', label: 'Identifier', icon: '🔍' },
    { path: '/emergency', label: 'Emergency', icon: '🚨' },
    { path: '/news', label: 'News', icon: '📰' },
    { path: '/career', label: 'Career', icon: '🎓' },
    { path: '/about', label: 'About', icon: 'ℹ️' }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="logo-icon">🛡️</span>
            <span className="logo-text">CyberGuard Pro</span>
          </Link>
          <button 
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>
      )}

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <div className="nav-header">
          <h3>Menu</h3>
          <button className="nav-close" onClick={() => setMenuOpen(false)}>✕</button>
        </div>
        {navItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Main Content */}
      <main className="main">
        {children}
      </main>

      <ChatbotWidget />

      {/* Bottom Navigation for Mobile */}
      <nav className="bottom-nav">
        {navItems.slice(0, 5).map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`bottom-nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🛡️</span>
              <span className="footer-logo-text">CyberGuard Pro</span>
            </div>
            <p className="footer-tagline">Your Global Digital Legal Companion</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <Link to="/academy">Cyber Law Academy</Link>
              <Link to="/identifier">Crime Identifier</Link>
              <Link to="/emergency">Emergency Tools</Link>
              <Link to="/career">Career Hub</Link>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/about">About</Link>
              <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">Cyber Crime Portal</a>
              <a href="tel:1930">Emergency: 1930</a>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <Link to="/news">Latest News</Link>
              <a href="https://meity.gov.in" target="_blank" rel="noopener noreferrer">IT Act 2000</a>
              <a href="https://www.cert-in.org.in" target="_blank" rel="noopener noreferrer">CERT-In</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-creator">
            <p className="creator-text">
              <strong>CyberGuard Pro</strong> 🛡️
            </p>
            <p className="creator-details">
              Global Cyber Law Education & Protection | Law & Technology Initiative
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} CyberGuard Pro. Educational Project.</p>
            <p className="footer-disclaimer">For educational purposes. Consult legal professionals for advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
