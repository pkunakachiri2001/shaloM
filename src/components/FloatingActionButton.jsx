import { useState } from 'react';
import { Link } from 'react-router-dom';

const FloatingActionButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const fabMenuItems = [
    {
      icon: '🚨',
      label: 'Report Issue',
      to: '/emergency-tools',
      color: '#dc2626'
    },
    {
      icon: '📚',
      label: 'Learn IPR',
      to: '/academy',
      color: '#7c3aed'
    },
    {
      icon: '🔍',
      label: 'IPR Checker',
      to: '/crime-identifier',
      color: '#0891b2'
    },
    {
      icon: '📰',
      label: 'Latest News',
      to: '/news',
      color: '#059669'
    }
  ];

  return (
    <>
      {/* FAB Menu */}
      <div className={`fab-menu ${isExpanded ? 'active' : ''}`}>
        {fabMenuItems.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="fab-menu-item"
            style={{ 
              transitionDelay: isExpanded ? `${index * 50}ms` : '0ms'
            }}
            onClick={() => setIsExpanded(false)}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Main FAB Button */}
      <button 
        className={`fab ${isExpanded ? 'expanded' : ''}`}
        onClick={toggleMenu}
        aria-label="Quick Actions"
        title="Quick Actions"
      >
        <span style={{
          transform: isExpanded ? 'rotate(45deg)' : 'rotate(0)',
          transition: 'transform 0.3s ease',
          display: 'inline-block'
        }}>
          {isExpanded ? '✕' : '⚡'}
        </span>
      </button>
    </>
  );
};

export default FloatingActionButton;
