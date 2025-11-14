import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AICodeTerminal from './AICodeTerminal'
import './FeatureShowcase.css'

const FeatureShowcase = () => {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref4, inView4] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref5, inView5] = useInView({ threshold: 0.2, triggerOnce: true })
  const [ref6, inView6] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section 
      id="showcase" 
      className="feature-showcase"
    >
      {/* AI Terminal */}
      <motion.div
        ref={ref1}
        className="showcase-item"
        initial={{ opacity: 0, y: 50 }}
        animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">Developer Tools</span>
            <h2 className="showcase-title">
              AI <span className="gradient-text">Terminal</span>
            </h2>
            <p className="showcase-description">
              Interactive terminal interface for controlling Probe. Execute commands, manage memory, and automate tasks directly from your browser. 
              The terminal provides full access to Probe's API, allowing you to script complex workflows, query your browsing history, and interact with the memory engine programmatically.
            </p>
            <p className="showcase-description mt-4">
              Use commands like <code>probe.remember(context)</code> to save sessions, <code>probe.linkTabs([tab1, tab2])</code> to connect related tabs, 
              and <code>probe.ask("query")</code> to search through your browsing history. Everything is accessible through a familiar terminal interface.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="terminal-visual">
              <AICodeTerminal compact={true} isActive={inView1} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Privacy First */}
      <motion.div
        ref={ref2}
        className="showcase-item reverse"
        initial={{ opacity: 0, y: 50 }}
        animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">Privacy-First</span>
            <h2 className="showcase-title">
              Your Data, <span className="gradient-text">Your Control</span>
            </h2>
            <p className="showcase-description">
              All memory data is stored locally and is fully user-controlled.
              Probe never sends or processes your browsing data externally unless you choose to.
            </p>
            <p className="showcase-description mt-4">
              Your browsing history, context, and memory are encrypted and stored on your device. No telemetry, no analytics, no data collection. 
              You can export your data anytime, delete it completely, or share specific sessions with others—all under your control.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="privacy-visual">
              <div className="lock-icon">
                <i className="fas fa-shield-halved"></i>
              </div>
              <div className="data-flow">
                <div className="data-node local">Local Storage</div>
                <div className="data-arrow">→</div>
                <div className="data-node user">Your Device</div>
                <div className="data-arrow">→</div>
                <div className="data-node cloud blocked">
                  Cloud <i className="fas fa-ban"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Probe Spaces */}
      <motion.div
        ref={ref3}
        className="showcase-item"
        initial={{ opacity: 0, y: 50 }}
        animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">Collaboration</span>
            <h2 className="showcase-title">
              Probe <span className="gradient-text">Spaces</span>
            </h2>
            <p className="showcase-description">
              Collaborate in real-time — like multiplayer browsing. Share your tab session instantly.
              Both can scroll, highlight, and debug together. Great for remote devs, students, or product demos.
            </p>
            <p className="showcase-description mt-4">
              Create a Space and invite others to join. Everyone sees the same tabs, can interact with the page, and share annotations. 
              Perfect for pair programming, code reviews, or teaching. Spaces are end-to-end encrypted and can be password-protected.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="spaces-visual">
              <div className="shared-browser">
                <div className="browser-header-small">
                  <div className="browser-dots-small">
                    <span className="dot-small" />
                    <span className="dot-small" />
                    <span className="dot-small" />
                  </div>
                </div>
                <div className="shared-content">
                  <div className="cursor-1">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  <div className="cursor-2">
                    <i className="fas fa-mouse-pointer"></i>
                  </div>
                  <div className="collab-indicator">2 users collaborating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contextual AI */}
      <motion.div
        ref={ref4}
        className="showcase-item reverse"
        initial={{ opacity: 0, y: 50 }}
        animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">AI Integration</span>
            <h2 className="showcase-title">
              Contextual <span className="gradient-text">AI Everywhere</span>
            </h2>
            <p className="showcase-description">
              AI that lives inside your tabs, not in a chatbox. Highlight code → "Explain this code."
              Highlight text → "Summarize this." Right-click image → "Find similar ones."
              Probe's AI isn't an app — it's part of your browsing flow.
            </p>
            <p className="showcase-description mt-4">
              The AI understands the context of what you're viewing. It can explain complex code, summarize long articles, 
              translate text, find similar images, and answer questions about the current page—all without leaving your workflow. 
              It learns from your browsing patterns to provide increasingly relevant suggestions.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="ai-visual">
              <div className="code-block">
                <div className="code-line highlighted">
                  <span className="code-text">const probe = new MemoryWeb();</span>
                  <div className="ai-popup">Explain this code</div>
                </div>
                <div className="code-line">
                  <span className="code-text">probe.remember(project-x);</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Workspace Mode - Separate Section */}
      <motion.div
        ref={ref5}
        className="showcase-item workspace-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content">
          <div className="showcase-text">
            <span className="showcase-label">Workspace Management</span>
            <h2 className="showcase-title">
              Workspace <span className="gradient-text">Mode</span>
            </h2>
            <p className="showcase-description">
              Type <code>/workspace project-x</code> → Probe creates a focused view just for that project.
              Organize your tabs, context, and memory by workspace. Switch between projects instantly and pick up exactly where you left off.
            </p>
            <p className="showcase-description mt-4">
              Each workspace maintains its own tab groups, memory context, and search history. Switch from your React project to your Python research 
              with a single command. Workspaces can be saved, shared, and restored later. Perfect for developers juggling multiple projects or researchers 
              working on different topics.
            </p>
          </div>
          <div className="showcase-visual">
            <div className="workspace-visual">
              <div className="workspace-preview">
                <div className="workspace-header">
                  <div className="workspace-name">project-x</div>
                  <div className="workspace-status">Active</div>
                </div>
                <div className="workspace-tabs">
                  <div className="workspace-tab active">Tab 1</div>
                  <div className="workspace-tab">Tab 2</div>
                  <div className="workspace-tab">Tab 3</div>
                </div>
                <div className="workspace-memory">
                  <div className="memory-item">React debugging session</div>
                  <div className="memory-item">TypeScript research</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Universal Command Bar - Separate Section */}
      <motion.div
        ref={ref6}
        className="showcase-item command-bar-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        <div className="showcase-content command-bar-layout">
          {/* Left: Command K Input */}
          <div className="command-bar-left">
            <div className="command-bar-primary">
              <div className="command-prefix-btn">⌘K</div>
              <div className="command-input-field">
                <span className="command-prompt">probe.</span>
                <span className="command-input-text">go and open youtube</span>
                <span className="command-cursor">|</span>
              </div>
            </div>
            
            {/* Universal Command Bar Actions */}
            <div className="command-actions-section">
              <div className="command-actions-divider"></div>
              <div className="command-actions-title">Universal Command Bar</div>
              <div className="command-actions-list">
                <div className="command-action-item">
                  <i className="fas fa-search"></i>
                  <span>Search tabs & history</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-bolt"></i>
                  <span>Trigger extensions</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-globe"></i>
                  <span>Google queries</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-envelope"></i>
                  <span>Send emails</span>
                </div>
                <div className="command-action-item">
                  <i className="fas fa-rocket"></i>
                  <span>Open apps & shortcuts</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Text Description */}
          <div className="command-bar-middle">
            <span className="showcase-label">Power Features</span>
            <h2 className="showcase-title">
              Universal <span className="gradient-text">Command Bar</span>
            </h2>
            <p className="showcase-description">
              Universal Command Bar (⌘K) to search tabs, trigger extensions, Google queries, send emails,
              open apps, or run shortcuts — all in one interface. Type <code>probe.</code> followed by your command to get started.
            </p>
            <p className="showcase-description mt-4">
              The command bar learns from your usage patterns. Frequently used commands appear first, and it can autocomplete based on your history. 
              You can create custom commands, chain multiple actions together, and even integrate with external tools and APIs. It's your browser's command center.
            </p>
          </div>

          {/* Right: Example Commands */}
          <div className="command-bar-right">
            <div className="command-examples">
              <div className="command-bar-primary">
                <div className="command-prefix-btn">⌘K</div>
                <div className="command-input-field">
                  <span className="command-prompt">probe.</span>
                  <span className="command-input-text">search for react hooks</span>
                  <span className="command-cursor">|</span>
                </div>
              </div>
              <div className="command-actions-divider"></div>
              <div className="command-actions-title">Example Commands</div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">go and open youtube</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">search for react hooks</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">open my last project</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">open terminal in current project</span>
              </div>
              <div className="example-item">
                <span className="example-prompt">probe.</span>
                <span className="example-query">run python script app.py</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FeatureShowcase
