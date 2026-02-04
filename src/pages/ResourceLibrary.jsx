import '../styles/ResourceLibrary.css';

const RESOURCES = [
  {
    id: 1,
    category: 'Laws & Acts',
    icon: '📖',
    items: [
      {
        title: 'GDPR (General Data Protection Regulation)',
        description: 'European Union\'s comprehensive data protection regulation',
        link: 'https://gdpr-info.eu/',
        tags: ['EU', 'Privacy', 'Data Protection']
      },
      {
        title: 'US Computer Fraud & Abuse Act (CFAA)',
        description: 'Federal law addressing computer-related crimes in the US',
        link: 'https://www.justice.gov/criminal-ccips',
        tags: ['USA', 'Cybercrime', 'Federal']
      },
      {
        title: 'India Information Technology Act 2000',
        description: 'Indian law governing electronic commerce and cybercrime',
        link: 'https://www.meity.gov.in',
        tags: ['India', 'Cybercrime', 'E-commerce']
      }
    ]
  },
  {
    id: 2,
    category: 'Organizations',
    icon: '🏢',
    items: [
      {
        title: 'INTERPOL - International Police',
        description: 'Global law enforcement cybercrime operations',
        link: 'https://www.interpol.int',
        tags: ['International', 'Law Enforcement']
      },
      {
        title: 'UN Office on Drugs & Crime (UNODC)',
        description: 'United Nations cybercrime initiatives and resources',
        link: 'https://www.unodc.org/unodc/en/cybercrime/',
        tags: ['UN', 'International', 'Crime']
      },
      {
        title: 'National Cybersecurity Centers (CISA - USA)',
        description: 'US government cybersecurity agency',
        link: 'https://www.cisa.gov',
        tags: ['USA', 'Government', 'Security']
      }
    ]
  },
  {
    id: 3,
    category: 'Security Resources',
    icon: '🛡️',
    items: [
      {
        title: 'NIST Cybersecurity Framework',
        description: 'Comprehensive cybersecurity standards and best practices',
        link: 'https://www.nist.gov/cyberframework',
        tags: ['Standards', 'Best Practices']
      },
      {
        title: 'OWASP (Open Web Application Security Project)',
        description: 'Web application security testing and standards',
        link: 'https://owasp.org',
        tags: ['Web Security', 'Application Security']
      },
      {
        title: 'ISO 27001 Information Security Standard',
        description: 'International standard for information security management',
        link: 'https://www.iso.org/isoiec-27001-information-security-management.html',
        tags: ['Standards', 'ISO', 'Management']
      }
    ]
  },
  {
    id: 4,
    category: 'Educational Resources',
    icon: '📚',
    items: [
      {
        title: 'Coursera Cybersecurity Courses',
        description: 'Free and paid cybersecurity and law courses',
        link: 'https://www.coursera.org/search?query=cybersecurity',
        tags: ['Learning', 'Online Courses']
      },
      {
        title: 'IEEE Cybersecurity & Privacy',
        description: 'IEEE publications on cybersecurity and legal topics',
        link: 'https://www.ieee.org',
        tags: ['Research', 'Publications']
      },
      {
        title: 'World Economic Forum Cyber Resources',
        description: 'Global insights on cybercrime and cybersecurity laws',
        link: 'https://www.weforum.org',
        tags: ['Global', 'Trends', 'Reports']
      }
    ]
  }
];

export default function ResourceLibrary() {
  return (
    <div className="resource-library-page">
      <div className="library-header">
        <h1>📚 Cyber Law Resource Library</h1>
        <p>Curated collection of laws, organizations, and learning resources</p>
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
          <li>Start with GDPR or your country's cyber laws for foundational knowledge</li>
          <li>NIST and ISO standards provide industry best practices</li>
          <li>INTERPOL and UNODC offer international cyber law resources</li>
          <li>Regular training through OWASP and Coursera keeps you updated</li>
          <li>Bookmark resources for quick reference during incident response</li>
        </ul>
      </div>
    </div>
  );
}
