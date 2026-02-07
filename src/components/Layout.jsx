import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import ChatbotWidget from './ChatbotWidget';
import Search from './Search';
import ThemeToggle from './ThemeToggle';
import Breadcrumbs from './Breadcrumbs';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const backPromptActive = useRef(false);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/academy', label: 'IPR Academy', icon: '📚' },
    { path: '/identifier', label: 'IPR Identifier', icon: '🔍' },
    { path: '/emergency', label: 'Report IPR', icon: '🚨' },
    { path: '/news', label: 'IPR News', icon: '📰' },
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/case-studies', label: 'Cases', icon: '📋' },
    { path: '/simulator', label: 'Simulator', icon: '🎯' },
    { path: '/timeline', label: 'Timeline', icon: '📅' },
    { path: '/resources', label: 'Resources', icon: '📘' },
  ];

  useEffect(() => {
    if (!Capacitor.isNativePlatform()) {
      return undefined;
    }

    const backListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (menuOpen) {
        setMenuOpen(false);
        return;
      }

      if (canGoBack && location.pathname !== '/') {
        navigate(-1);
        return;
      }

      if (backPromptActive.current) {
        return;
      }

      backPromptActive.current = true;
      const shouldExit = window.confirm('Do you want to close Amicus IPR?');
      backPromptActive.current = false;
      if (shouldExit) {
        CapacitorApp.exitApp();
      }
    });

    return () => {
      backListener.remove();
    };
  }, [location.pathname, menuOpen, navigate]);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span className="logo-icon">⚖️</span>
            <span className="logo-text">Amicus IPR</span>
          </Link>
          
          {/* Quick Action Buttons - Desktop */}
          <div className="header-actions">
            <Link to="/academy" className="header-action-btn header-btn-primary">
              <span>🎯</span>
              <span>Learn IPR</span>
            </Link>
            <Link to="/emergency" className="header-action-btn header-btn-danger">
              <span>🚨</span>
              <span>Report</span>
            </Link>
            <Link to="/identifier" className="header-action-btn header-btn-info">
              <span>❓</span>
              <span>Identify IPR</span>
            </Link>
          </div>
          
          <div className="header-right">
            <Search />
            <ThemeToggle />
            <button 
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="navigation-menu"
              title={menuOpen ? 'Close menu' : 'Open menu'}
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
        <div 
          className="menu-overlay" 
          onClick={() => setMenuOpen(false)}
          role="presentation"
          aria-hidden="true"
        ></div>
      )}

      {/* Navigation */}
      <nav 
        className={`nav ${menuOpen ? 'nav-open' : ''}`}
        id="navigation-menu"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-header">
          <h3>Navigation Menu</h3>
          <button 
            className="nav-close" 
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            title="Close menu"
          >✕</button>
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
      <nav 
        className="bottom-nav"
        role="navigation"
        aria-label="Mobile navigation"
      >
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
              <span className="footer-logo-icon">⚖️</span>
              <span className="footer-logo-text">Amicus IPR</span>
            </div>
            <p className="footer-tagline">Your Intellectual Property Rights Companion</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <Link to="/academy">IPR Academy</Link>
              <Link to="/identifier">IPR Identifier</Link>
              <Link to="/emergency">Report IPR</Link>
              <Link to="/career">IP Career Hub</Link>
            </div>

            <div className="footer-column">
              <h4>Learn</h4>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/simulator">Scenario Simulator</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/bookmarks">Bookmarks</Link>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <Link to="/news">IPR News</Link>
              <a href="https://www.wipo.int/" target="_blank" rel="noopener noreferrer">WIPO</a>
              <a href="https://euipo.europa.eu/" target="_blank" rel="noopener noreferrer">EUIPO</a>
              <a href="https://www.uspto.gov/" target="_blank" rel="noopener noreferrer">USPTO</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-creator">
            <p className="creator-text">
              <strong>Amicus IPR</strong> ⚖️
            </p>
            <p className="creator-details">
              Intellectual Property Rights Guidance | Law & Innovation Initiative
            </p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Amicus IPR. Educational Project.</p>
            <p className="footer-disclaimer">For educational purposes. Consult qualified IP counsel for advice.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
