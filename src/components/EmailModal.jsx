import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'
import './EmailModal.css'

const EmailModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      setLoading(false)
      return
    }

    try {
      const { data, error: supabaseError } = await supabase
        .from('early_access')
        .insert([
          { 
            email: email,
            created_at: new Date().toISOString()
          }
        ])

      if (supabaseError) {
        // Check if it's a duplicate email error
        if (supabaseError.code === '23505') {
          setError('This email is already registered!')
        } else {
          setError('Something went wrong. Please try again.')
        }
        setLoading(false)
        return
      }

      setSuccess(true)
      setEmail('')
      
      // Close modal after 2 seconds
      setTimeout(() => {
        setSuccess(false)
        onClose()
      }, 2000)

    } catch (err) {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="email-modal"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button className="modal-close" onClick={onClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {!success ? (
              <>
                <div className="modal-header">
                  <div className="modal-icon"><img src='src/assets/probe.png'></img></div>
                  <h2>Join the Waitlist</h2>
                  <p>Be among the first to experience Probe's Memory Web</p>
                </div>

                <form onSubmit={handleSubmit} className="modal-form">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      disabled={loading}
                      autoFocus
                    />
                  </div>

                  {error && (
                    <motion.div
                      className="error-message"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {error}
                    </motion.div>
                  )}

                  <button 
                    type="submit" 
                    className="submit-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loading-spinner">
                        <svg className="spinner" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/>
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                        </svg>
                        Registering...
                      </span>
                    ) : (
                      <>
                        Register for Early Access
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>

                <div className="modal-footer">
                  <p>We'll notify you when Probe launches. No spam, ever.</p>
                </div>
              </>
            ) : (
              <motion.div
                className="success-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="success-icon">
                  <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="32" fill="rgba(46, 213, 115, 0.1)"/>
                    <path d="M20 32l8 8 16-16" stroke="#2ed573" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2>You're on the list! 🎉</h2>
                <p>We'll send you an email when Probe is ready to launch.</p>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return createPortal(modalContent, document.body)
}

export default EmailModal
