import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={styles.container}>
          <div style={styles.content}>
            <h1 style={styles.title}>⚠️ Something Went Wrong</h1>
            <p style={styles.message}>
              We're sorry, but something unexpected happened. The error has been logged.
            </p>
            <details style={styles.details}>
              <summary style={styles.summary}>Error Details</summary>
              <pre style={styles.pre}>
                {this.state.error && this.state.error.toString()}
                {'\n\n'}
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </pre>
            </details>
            <button 
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/';
              }}
              style={styles.button}
              aria-label="Go back to home page"
            >
              ← Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    padding: '2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  content: {
    background: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    maxWidth: '600px',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
    textAlign: 'center'
  },
  title: {
    color: '#dc2626',
    fontSize: '1.8rem',
    marginBottom: '1rem',
    fontWeight: '700'
  },
  message: {
    color: '#64748b',
    fontSize: '1.1rem',
    marginBottom: '1.5rem',
    lineHeight: '1.6'
  },
  details: {
    marginBottom: '2rem',
    textAlign: 'left',
    background: '#f3f4f6',
    padding: '1rem',
    borderRadius: '0.5rem',
    border: '1px solid #e5e7eb'
  },
  summary: {
    cursor: 'pointer',
    color: '#2563eb',
    fontWeight: '600',
    userSelect: 'none'
  },
  pre: {
    marginTop: '1rem',
    background: '#1f2937',
    color: '#10b981',
    padding: '1rem',
    borderRadius: '0.5rem',
    overflow: 'auto',
    fontSize: '0.85rem',
    fontFamily: '"Courier New", monospace'
  },
  button: {
    background: 'linear-gradient(135deg, #1e40af, #2563eb)',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  }
};

export default ErrorBoundary;
