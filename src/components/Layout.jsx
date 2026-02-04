import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChatbotWidget from './ChatbotWidget';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import Breadcrumbs from './Breadcrumbs';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/academy', label: 'Academy', icon: '📚' },
    { path: '/identifier', label: 'Identifier', icon: '🔍' },
    { path: '/emergency', label: 'Emergency', icon: '🚨' },
    { path: '/news', label: 'News', icon: '📰' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/case-studies', label: 'Cases', icon: '📋' },
    { path: '/simulator', label: 'Simulator', icon: '🎯' },
    { path: '/timeline', label: 'Timeline', icon: '📅' },
    { path: '/resources', label: 'Resources', icon: '📚' },
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
          
          <div className="header-right">
            <Search />
            <ThemeToggle />
            <button 
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumbs Navigation */}
      {location.pathname !== '/' && <Breadcrumbs />}

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
        
        <div className="nav-divider"></div>
        
        <div className="nav-section">
          <h4>More</h4>
          <Link to="/bookmarks" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="nav-icon">⭐</span>
            <span className="nav-label">Bookmarks</span>
          </Link>
          <Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="nav-icon">ℹ️</span>
            <span className="nav-label">About</span>
          </Link>
          <Link to="/career" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="nav-icon">🎓</span>
            <span className="nav-label">Career</span>
          </Link>
        </div>
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
              <h4>Learn</h4>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/simulator">Incident Simulator</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/bookmarks">Bookmarks</Link>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <Link to="/news">Latest News</Link>
              <a href="https://www.itu.int/en/ITU-D/Cybersecurity/Pages/Legal-Measures.aspx" target="_blank" rel="noopener noreferrer">Global Cyber Law</a>
              <a href="https://www.unodc.org/unodc/en/cybercrime/" target="_blank" rel="noopener noreferrer">UN Cybercrime</a>
              <a href="https://www.interpol.int" target="_blank" rel="noopener noreferrer">INTERPOL</a>
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
