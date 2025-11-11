import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import './Hero.css'

const BrowserPreview = () => {
  const [activeTab, setActiveTab] = useState(0)
  
  const examples = [
    {
      title: 'Memory Recall',
      icon: '🧠',
      prompt: 'Show me what I was working on yesterday',
      response: 'You were debugging a React performance issue. I found 3 Stack Overflow threads, the React docs on useMemo, and your notes from last week.',
      details: 'Context-aware intelligence • Local memory engine',
      tags: ['Memory Web', 'Context-Aware']
    },
    {
      title: 'Smart Collections',
      icon: '📚',
      prompt: 'Organize my research tabs',
      response: 'I\'ve grouped your 12 tabs into: "TypeScript Learning" (5 tabs), "Portfolio Inspiration" (4 tabs), and "API Documentation" (3 tabs).',
      details: 'AI-powered organization • Auto-grouped by context',
      tags: ['Collections', 'AI Organization']
    },
    {
      title: 'Command Bar',
      icon: '⌘',
      prompt: '⌘K → "reopen backend testing session"',
      response: 'Reopened your workspace with: Localhost:3000, Postman API tests, MongoDB Compass, and your terminal logs from 2 days ago.',
      details: 'Universal command palette • Instant workspace',
      tags: ['⌘K', 'Workspace Mode']
    },
    {
      title: 'Probe Spaces',
      icon: '👥',
      prompt: 'Share this debugging session with my team',
      response: 'Sharing session created! Your team can now see your tabs, scroll together, and collaborate in real-time. Link copied.',
      details: 'Multiplayer browsing • Real-time collaboration',
      tags: ['Spaces', 'Collaboration']
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % examples.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const currentExample = examples[activeTab]

  return (
    <div className="browser-window">
      <div className="window-header">
        <div className="window-controls">
          <div className="control-dot close"></div>
          <div className="control-dot minimize"></div>
          <div className="control-dot maximize"></div>
        </div>
        <div className="window-title">
          <span className="title-icon">🌐</span>
          <span>Probe Browser</span>
        </div>
        <div className="window-status">
          <div className="status-dot"></div>
          <span>Memory Active</span>
        </div>
      </div>
      
      <div className="window-tabs">
        {examples.map((example, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            <span className="tab-icon">{example.icon}</span>
            <span>{example.title}</span>
          </button>
        ))}
      </div>

      <div className="window-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="demo-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="demo-prompt">
              <div className="prompt-icon">💭</div>
              <div className="prompt-text">{currentExample.prompt}</div>
            </div>
            
            <div className="demo-response">
              <div className="response-icon">✨</div>
              <div className="response-text">{currentExample.response}</div>
            </div>

            <div className="demo-details">{currentExample.details}</div>

            <div className="demo-tags">
              {currentExample.tags.map((tag, idx) => (
                <span key={idx} className="demo-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="window-footer">
        <div className="progress-indicators">
          {examples.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  const heroRef = React.useRef(null)
  const [viewportHeight, setViewportHeight] = React.useState(800)
  
  React.useEffect(() => {
    setViewportHeight(window.innerHeight)
    const handleResize = () => setViewportHeight(window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  const { scrollY } = useScroll()
  
  const scrollYProgress = useTransform(
    scrollY,
    [0, viewportHeight * 0.8],
    [0, 1]
  )

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5
  })

  const heroOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.3, 0])
  const heroY = useTransform(smoothProgress, [0, 1], [0, -100])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="grid-pattern"></div>
      </div>
      
      <motion.div
        className="hero-wrapper"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="hero-container">
          <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="badge-icon">🧠</span>
              <span>Introducing Memory Web</span>
            </motion.div>

            <motion.h1
              className="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Browser That Remembers You
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Probe connects your entire web activity with intelligence and context. 
              It remembers what you do, understands how you work, and helps you pick up 
              exactly where you left off — securely, locally, and privately.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button className="btn-primary">
                Register for Early Access
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="btn-secondary">
                Learn More
              </button>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <BrowserPreview />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
