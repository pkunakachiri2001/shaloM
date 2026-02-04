import { useLocation } from 'react-router-dom';
import '../styles/Breadcrumbs.css';

const BREADCRUMB_LABELS = {
  '/': 'Home',
  '/academy': 'Academy',
  '/identifier': 'Crime Identifier',
  '/emergency': 'Emergency Tools',
  '/news': 'News',
  '/career': 'Career',
  '/about': 'About',
  '/dashboard': 'Dashboard',
  '/bookmarks': 'Bookmarks',
  '/case-studies': 'Case Studies',
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    ...pathnames.map((name, index) => {
      const path = '/' + pathnames.slice(0, index + 1).join('/');
      const label = BREADCRUMB_LABELS[path] || name.charAt(0).toUpperCase() + name.slice(1);
      return { label, path };
    })
  ];

  return (
    <nav className="breadcrumbs-nav">
      <div className="breadcrumbs-container">
        {breadcrumbs.map((crumb, index) => (
          <div key={index} className="breadcrumb-item">
            {index === breadcrumbs.length - 1 ? (
              <span className="breadcrumb-current">{crumb.label}</span>
            ) : (
              <a href={crumb.path} className="breadcrumb-link">{crumb.label}</a>
            )}
            {index < breadcrumbs.length - 1 && <span className="breadcrumb-separator">/</span>}
          </div>
        ))}
      </div>
    </nav>
  );
}
