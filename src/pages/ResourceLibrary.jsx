import '../styles/ResourceLibrary.css';

const RESOURCES = [
  {
    id: 1,
    category: 'IP Offices',
    icon: '🏛️',
    items: [
      {
        title: 'WIPO (World Intellectual Property Organization)',
        description: 'Global IP treaties, resources, and filing guidance',
        link: 'https://www.wipo.int/',
        tags: ['Global', 'IPR']
      },
      {
        title: 'USPTO (United States)',
        description: 'Patent and trademark filings, guidance, and tools',
        link: 'https://www.uspto.gov/',
        tags: ['USA', 'Patents', 'Trademarks']
      },
      {
        title: 'EUIPO (European Union)',
        description: 'EU trademarks and design registrations',
        link: 'https://euipo.europa.eu/',
        tags: ['EU', 'Trademarks', 'Designs']
      }
    ]
  },
  {
    id: 2,
    category: 'National Portals',
    icon: '📍',
    items: [
      {
        title: 'UK Intellectual Property Office',
        description: 'UK patents, trademarks, and designs',
        link: 'https://www.gov.uk/government/organisations/intellectual-property-office',
        tags: ['UK', 'IPR']
      },
      {
        title: 'IP India (CGPDTM)',
        description: 'Patents, trademarks, designs, and GI in India',
        link: 'https://ipindia.gov.in/',
        tags: ['India', 'IPR']
      },
      {
        title: 'Copyright Office (India)',
        description: 'Copyright registration and guidance',
        link: 'https://copyright.gov.in/',
        tags: ['India', 'Copyright']
      }
    ]
  },
  {
    id: 3,
    category: 'Dispute Resolution',
    icon: '⚖️',
    items: [
      {
        title: 'WIPO Arbitration & Mediation',
        description: 'IP dispute resolution and mediation services',
        link: 'https://www.wipo.int/amc/en/',
        tags: ['Disputes', 'Mediation']
      },
      {
        title: 'WIPO Domain Disputes (UDRP)',
        description: 'Domain name dispute resolution guidance',
        link: 'https://www.wipo.int/amc/en/domains/',
        tags: ['Domains', 'Cybersquatting']
      },
      {
        title: 'USITC Section 337',
        description: 'US import-related IP enforcement',
        link: 'https://www.usitc.gov/',
        tags: ['USA', 'Enforcement']
      }
    ]
  },
  {
    id: 4,
    category: 'Learning Resources',
    icon: '📚',
    items: [
      {
        title: 'WIPO Learn',
        description: 'Free IP courses and certifications',
        link: 'https://welc.wipo.int/',
        tags: ['Learning', 'Courses']
      },
      {
        title: 'IPO Academy (India)',
        description: 'Training and awareness programs on IP',
        link: 'https://ipindia.gov.in/ipo-academy.htm',
        tags: ['India', 'Training']
      },
      {
        title: 'Copyright Office (US) - Education',
        description: 'Copyright basics and FAQs',
        link: 'https://www.copyright.gov/education/',
        tags: ['USA', 'Copyright']
      }
    ]
  }
];

export default function ResourceLibrary() {
  return (
    <div className="resource-library-page">
      <div className="library-header">
        <h1>📚 IPR Resource Library</h1>
        <p>Curated collection of IP offices, dispute resolution, and learning resources</p>
      </div>

      <div className="resources-container">
        {RESOURCES.map(category => (
          <div key={category.id} className="resource-category">
            <h2 className="category-title">
              {category.icon} {category.category}
            </h2>
            
            <div className="resources-grid">
              {category.items.map((item, idx) => (
                <div key={idx} className="resource-card">
                  <h3>{item.title}</h3>
                  <p className="resource-description">{item.description}</p>
                  
                  <div className="resource-tags">
                    {item.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    Visit Resource →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="library-footer">
        <h3>💡 Pro Tips</h3>
        <ul>
          <li>Start with your national IP office resources for local rules</li>
          <li>Keep registration certificates and proof of use organized</li>
          <li>Use WIPO guidance for cross-border strategy</li>
          <li>Follow platform takedown procedures for online infringements</li>
          <li>Bookmark key portals for quick reporting</li>
        </ul>
      </div>
    </div>
  );
}
