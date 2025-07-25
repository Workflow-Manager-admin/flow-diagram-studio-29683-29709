import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App is the root component.
 * - Provides a top navigation bar with a theme switcher.
 * - Contains a large canvas area for flow diagrams.
 * - Contains a responsive AI controls + metadata side panel.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="App">
      {/* Top Navigation */}
      <nav className="top-nav">
        <span className="brand-title">Flow Diagram Studio</span>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
      </nav>
      {/* Main Content Area */}
      <main className="main-content">
        {/* Large Canvas Area */}
        <section className="diagram-canvas" tabIndex={0} aria-label="Flow Diagram Canvas">
          {/* Placeholder for canvas-based interactive diagram */}
          <div className="canvas-placeholder">
            <h2>🖉 Canvas Area</h2>
            <p>This is where the flow diagram will be visualized and edited interactively.</p>
          </div>
        </section>
        {/* Side Panel: AI Controls and Metadata */}
        <aside className="side-panel" aria-label="AI Controls and Metadata">
          <div className="side-panel-section">
            <h3>AI Controls</h3>
            <button className="btn-fullwidth" disabled>
              Generate Flow Diagram (AI)
            </button>
            <button className="btn-fullwidth" disabled>
              Edit Selection (AI)
            </button>
          </div>
          <hr className="side-divider" />
          <div className="side-panel-section">
            <h4>Diagram Metadata</h4>
            <ul>
              <li><strong>Nodes:</strong> 0</li>
              <li><strong>Connections:</strong> 0</li>
              <li><strong>Export:</strong> <button className="btn-small" disabled>Export Image</button></li>
            </ul>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
