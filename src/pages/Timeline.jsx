import '../styles/Timeline.css';

const TIMELINE_EVENTS = [
  {
    year: 1998,
    icon: '💻',
    title: 'Digital Millennium Copyright Act (DMCA)',
    description: 'United States enacts DMCA, establishing first comprehensive cybercrime law framework globally.'
  },
  {
    year: 2000,
    icon: '⚖️',
    title: 'IT Act 2000 (India)',
    description: 'India passes Information Technology Act, landmark cyber law in Asia-Pacific region.'
  },
  {
    year: 2001,
    icon: '🦠',
    title: 'ILOVEYOU Worm Attack',
    description: 'Global computer worm causes $5.6B in damages, highlights need for cyber laws.'
  },
  {
    year: 2003,
    icon: '📋',
    title: 'EU Directive 2002/58/EC',
    description: 'European Union establishes privacy rights for electronic communications.'
  },
  {
    year: 2012,
    icon: '🔐',
    title: 'LinkedIn Data Breach',
    description: '6.5 million user passwords leaked, triggers stronger data protection laws.'
  },
  {
    year: 2016,
    icon: '🇪🇺',
    title: 'GDPR Adopted',
    description: 'European Union adopts GDPR, becomes global benchmark for data protection.'
  },
  {
    year: 2017,
    icon: '🌍',
    title: 'WannaCry Ransomware',
    description: 'Global ransomware attack affects 200,000+ computers in 150 countries.'
  },
  {
    year: 2018,
    icon: '📊',
    title: 'Cambridge Analytica Scandal',
    description: 'Facebook data misuse scandal leads to renewed focus on privacy laws.'
  },
  {
    year: 2020,
    icon: '🛡️',
    title: 'Zoom Security Upgrades',
    description: 'Video conferencing security issues lead to privacy regulation updates.'
  },
  {
    year: 2024,
    icon: '🔮',
    title: 'AI & Cybersecurity Laws',
    description: 'Nations develop laws for AI-powered cyber threats and defenses.'
  }
];

export default function Timeline() {
  return (
    <div className="timeline-page">
      <div className="timeline-header">
        <h1>📅 Cyber Law & Crime Timeline</h1>
        <p>Evolution of cybersecurity regulations and major incidents</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        
        {TIMELINE_EVENTS.map((event, idx) => (
          <div key={idx} className={`timeline-event ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-marker"></div>
            <div className="timeline-card">
              <span className="event-icon">{event.icon}</span>
              <h3 className="event-year">{event.year}</h3>
              <h4 className="event-title">{event.title}</h4>
              <p className="event-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-footer">
        <p>This timeline shows key milestones in cyber law development and major security events that shaped regulations.</p>
      </div>
    </div>
  );
}
