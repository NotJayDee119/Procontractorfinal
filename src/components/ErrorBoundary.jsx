import React from 'react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ error });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center px-8 max-w-md">
            <h1 className="text-4xl font-custom text-primary mb-4">Oops! Something went wrong</h1>
            <p className="text-accent mb-6">We're sorry for the inconvenience. Please refresh the page or contact us if the problem persists.</p>
            {this.state.error && (
              <details className="mb-6 text-left bg-red-50 p-4 rounded-lg">
                <summary className="cursor-pointer text-sm font-semibold text-red-700 mb-2">Error Details (for debugging)</summary>
                <pre className="text-xs text-red-600 overflow-auto">{this.state.error.toString()}</pre>
              </details>
            )}
            <button
              onClick={this.handleReset}
              className="px-8 py-3 bg-primary text-white hover:bg-accent transition-all duration-300 rounded-lg font-wix-madefor font-semibold"
            >
              Go to Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
