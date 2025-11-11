import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import probeLogo from '../assets/probe.png'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Detect active section
      const sections = ['features', 'showcase']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Features', id: 'features' },
    { href: '#documentation', label: 'Documentation', id: 'documentation' },
  ]

  const stats = [
    { icon: 'fa-brands fa-linkedin', value: '12.5K' },
    { icon: 'fa-brands fa-twitter', value: '26.3K' },
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <motion.a
            href="#"
            className="navbar-logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={probeLogo} 
              alt="Probe Logo" 
              className="navbar-logo-img"
            />
            <span className="navbar-logo-text">Probe</span>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                className={`navbar-link ${activeSection === link.id ? 'navbar-link-active' : ''}`}
                whileHover={{ opacity: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Stats */}
          <div className="navbar-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="navbar-stat"
                whileHover={{ y: -2 }}
              >
                <i className={stat.icon}></i>
                <span>{stat.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={mobileMenuOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="navbar-mobile-links">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className={`navbar-mobile-link ${activeSection === link.id ? 'navbar-mobile-link-active' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div className="navbar-mobile-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="navbar-mobile-stat">
                    <i className={stat.icon}></i>
                    <span>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
