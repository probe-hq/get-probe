import React, { useEffect, useRef } from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'
import './Features.css'

const Features = () => {
  const sectionRef = useRef(null)
  const leftContentRef = useRef(null)

  useEffect(() => {
    // Simple fade-in animation for left content
    if (leftContentRef.current) {
      const children = Array.from(leftContentRef.current.children)
      children.forEach((child, index) => {
        child.style.opacity = '0'
        child.style.transform = 'translateY(30px)'
        child.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        
        setTimeout(() => {
          child.style.opacity = '1'
          child.style.transform = 'translateY(0)'
        }, index * 150)
      })
    }
  }, [])

  const features = [
    {
      visual: (
        <div className="feature-visual">
          <div className="memory-dashboard">
            <div className="memory-header">
              <div className="memory-status-indicator">
                <div className="status-pulse"></div>
                <div className="status-dot"></div>
              </div>
              <div className="memory-title">Probe Memory Engine</div>
            </div>
            
            <div className="memory-stats">
              <div className="stat-item">
                <div className="stat-label">Context Sessions</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: '85%' }}></div>
                </div>
                <div className="stat-value">127 saved</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Tab Connections</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: '72%' }}></div>
                </div>
                <div className="stat-value">43 linked</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Search Queries</div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: '58%' }}></div>
                </div>
                <div className="stat-value">892 indexed</div>
              </div>
            </div>

            <div className="memory-recent">
              <div className="recent-header">Recent Context</div>
              <div className="recent-items">
                <div className="recent-item">
                  <div className="recent-icon"><i className="fas fa-search"></i></div>
                  <div className="recent-content">
                    <div className="recent-title">React debugging session</div>
                    <div className="recent-meta">12 tabs • 3 searches • 2 hours ago</div>
                  </div>
                </div>
                <div className="recent-item">
                  <div className="recent-icon"><i className="fas fa-book-open"></i></div>
                  <div className="recent-content">
                    <div className="recent-title">TypeScript research</div>
                    <div className="recent-meta">8 tabs • 5 searches • Yesterday</div>
                  </div>
                </div>
                <div className="recent-item">
                  <div className="recent-icon"><i className="fas fa-laptop-code"></i></div>
                  <div className="recent-content">
                    <div className="recent-title">API documentation review</div>
                    <div className="recent-meta">6 tabs • 2 searches • 3 days ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="memory-graph">
              <div className="graph-bars">
                <div className="graph-bar" style={{ height: '60%' }}></div>
                <div className="graph-bar" style={{ height: '80%' }}></div>
                <div className="graph-bar" style={{ height: '45%' }}></div>
                <div className="graph-bar" style={{ height: '90%' }}></div>
                <div className="graph-bar" style={{ height: '70%' }}></div>
                <div className="graph-bar" style={{ height: '55%' }}></div>
                <div className="graph-bar" style={{ height: '85%' }}></div>
              </div>
              <div className="graph-label">Activity Timeline</div>
            </div>
          </div>
        </div>
      ),
      title: 'Probe Memory',
      description: 'Intelligent context tracking that remembers not just what pages you visited, but how you interacted with them.',
      detailedDescription: 'Probe Memory captures search queries, form inputs, scroll positions, and your thought process. When you return, it surfaces relevant context automatically, helping you continue your work seamlessly. Every interaction is indexed and searchable, creating a comprehensive memory of your browsing journey.',
    },
    {
      visual: (
        <div className="feature-visual">
          <div className="local-storage-visual">
            <div className="storage-icon-wrapper">
              <i className="fas fa-database"></i>
              <div className="storage-badge">
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="storage-info">
              <div className="storage-title">Local Storage</div>
              <div className="storage-subtitle">100% On-Device</div>
            </div>
            <div className="storage-features">
              <div className="storage-feature">
                <i className="fas fa-check-circle"></i>
                <span>Encrypted at rest</span>
              </div>
              <div className="storage-feature">
                <i className="fas fa-check-circle"></i>
                <span>No cloud sync</span>
              </div>
              <div className="storage-feature">
                <i className="fas fa-check-circle"></i>
                <span>Full user control</span>
              </div>
            </div>
          </div>
        </div>
      ),
      title: 'Local Memory Engine',
      description: 'All data is stored locally on your device. Your browsing context, intent, and state are saved securely with full user control.',
      detailedDescription: 'Probe\'s memory engine runs entirely on your device. No cloud sync, no external servers. Every tab, every search, every interaction is stored locally using advanced compression and indexing. Your data never leaves your machine unless you explicitly choose to share it.',
    },
    {
      visual: (
        <div className="feature-visual">
          <div className="cross-tab-visual">
            <div className="tabs-container">
              <div className="tab-item active">
                <div className="tab-icon"><i className="fab fa-react"></i></div>
                <div className="tab-content">
                  <div className="tab-title">React Docs</div>
                  <div className="tab-status">Active</div>
                </div>
              </div>
              <div className="tab-item">
                <div className="tab-icon"><i className="fas fa-book-reader"></i></div>
                <div className="tab-content">
                  <div className="tab-title">Stack Overflow</div>
                  <div className="tab-status">Related</div>
                </div>
              </div>
              <div className="tab-item">
                <div className="tab-icon"><i className="fas fa-laptop-code"></i></div>
                <div className="tab-content">
                  <div className="tab-title">GitHub Repo</div>
                  <div className="tab-status">Linked</div>
                </div>
              </div>
            </div>
            <div className="connection-lines">
              <div className="connection-line"></div>
              <div className="connection-line"></div>
            </div>
            <div className="intelligence-indicator">
              <div className="intelligence-pulse"></div>
              <span>Cross-Tab Intelligence Active</span>
            </div>
          </div>
        </div>
      ),
      title: 'Cross-Tab Intelligence',
      description: 'Your browser connects activities across tabs. Automatically surfaces related documentation and resources.',
      detailedDescription: 'Probe understands relationships between your tabs. Working on a React project? It automatically suggests relevant documentation, Stack Overflow threads, and GitHub repos you\'ve visited before. The browser learns your workflow patterns and proactively helps you find what you need, when you need it.',
    },
  ]

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="features-section"
    >
      <div className="features-container">
        {/* Key Features Section - Overlay on top of cards */}
        <div ref={leftContentRef} className="features-left">
          <div className="features-label">Key Features</div>
          <h2 className="features-title">
            Everything You Need for a <span className="gradient-text">Smarter Browsing</span> Experience
          </h2>
          <p className="features-subtitle">
            Probe transforms your browser into an intelligent workspace that remembers, learns, and adapts to your workflow.
          </p>
          <div className="features-highlights">
            <div className="highlight-item">
              <i className="fas fa-brain"></i>
              <span>Intelligent Memory</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-shield-alt"></i>
              <span>100% Private</span>
            </div>
            <div className="highlight-item">
              <i className="fas fa-bolt"></i>
              <span>Lightning Fast</span>
            </div>
          </div>
        </div>

        {/* Features List with ScrollStack */}
        <div className="features-right">
          <ScrollStack
            className="features-scroll-stack"
            itemDistance={120}
            itemScale={0.04}
            itemStackDistance={40}
            stackPosition="50%"
            scaleEndPosition="40%"
            baseScale={0.88}
            rotationAmount={0}
            blurAmount={2}
            useWindowScroll={true}
          >
            {features.map((feature, index) => (
              <ScrollStackItem key={index} itemClassName="feature-stack-item">
                <div className="feature-card">
                  {feature.visual}
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <p className="feature-detailed">{feature.detailedDescription}</p>
                  </div>
                </div>
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}

export default Features
