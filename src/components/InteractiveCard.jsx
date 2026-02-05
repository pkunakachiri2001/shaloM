import { useState } from 'react';
import '../styles/InteractiveCard.css';

export default function InteractiveCard({ 
  title, 
  description, 
  icon, 
  children, 
  onClick,
  badge,
  severity,
  metadata = {},
  details = null
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        className={`interactive-card ${severity ? `severity-${severity.toLowerCase()}` : ''}`}
        onClick={() => {
          setIsExpanded(!isExpanded);
          onClick?.();
        }}
      >
        {/* Badge */}
        {badge && <div className="card-badge">{badge}</div>}

        {/* Card Header */}
        <div className="card-header">
          <div className="card-icon">{icon}</div>
          <div className="card-title-section">
            <h3 className="card-title">{title}</h3>
            {severity && <span className={`severity-badge severity-${severity.toLowerCase()}`}>{severity}</span>}
          </div>
        </div>

        {/* Card Description */}
        <p className="card-description">{description}</p>

        {/* Metadata */}
        {Object.keys(metadata).length > 0 && (
          <div className="card-metadata">
            {Object.entries(metadata).map(([key, value]) => (
              <div key={key} className="metadata-item">
                <span className="metadata-label">{key}:</span>
                <span className="metadata-value">{value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Expand Button */}
        {details && (
          <button className="card-expand-btn">
            {isExpanded ? '▼ Less' : '▶ More Details'}
          </button>
        )}

        {children}
      </div>

      {/* Expanded Modal */}
      {isExpanded && details && (
        <div className="card-modal-overlay" onClick={() => setIsExpanded(false)}>
          <div className="card-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsExpanded(false)}>✕</button>
            
            <div className="modal-header">
              <div className="modal-icon">{icon}</div>
              <h2>{title}</h2>
            </div>

            <div className="modal-content">
              {details}
            </div>

            <button className="modal-close-btn" onClick={() => setIsExpanded(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
