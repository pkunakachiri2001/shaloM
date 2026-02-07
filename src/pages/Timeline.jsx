import '../styles/Timeline.css';

const TIMELINE_EVENTS = [
  {
    year: 1883,
    icon: '🌍',
    title: 'Paris Convention',
    description: 'Foundational treaty for patents, trademarks, and industrial designs.'
  },
  {
    year: 1886,
    icon: '📚',
    title: 'Berne Convention',
    description: 'Establishes international copyright protection standards.'
  },
  {
    year: 1994,
    icon: '⚖️',
    title: 'TRIPS Agreement',
    description: 'Integrates IP protection into global trade rules under the WTO.'
  },
  {
    year: 1996,
    icon: '🔗',
    title: 'WIPO Internet Treaties',
    description: 'Modernizes copyright for the digital environment.'
  },
  {
    year: 1998,
    icon: '💻',
    title: 'DMCA (United States)',
    description: 'Introduces digital copyright enforcement and takedown procedures.'
  },
  {
    year: 2000,
    icon: '🇮🇳',
    title: 'IP India Modernization',
    description: 'Expanded filing systems and reforms for patents and trademarks.'
  },
  {
    year: 2011,
    icon: '🔬',
    title: 'America Invents Act',
    description: 'US shifts to a first-inventor-to-file patent system.'
  },
  {
    year: 2017,
    icon: '🛃',
    title: 'Stronger Customs Enforcement',
    description: 'Global focus on counterfeit seizure and border protection.'
  },
  {
    year: 2021,
    icon: '💡',
    title: 'Oracle v. Google Decision',
    description: 'Clarifies fair use for software interfaces in the US.'
  },
  {
    year: 2024,
    icon: '🤖',
    title: 'AI & IP Policy Debates',
    description: 'Governments refine IP policies for AI-generated content.'
  }
];

export default function Timeline() {
  return (
    <div className="timeline-page">
      <div className="timeline-header">
        <h1>📅 Intellectual Property Timeline</h1>
        <p>Key milestones in global IP protection and enforcement</p>
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
        <p>This timeline highlights major milestones that shaped modern intellectual property frameworks.</p>
      </div>
    </div>
  );
}
