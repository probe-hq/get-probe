import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import FeatureShowcase from './components/FeatureShowcase'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Expose Lenis instance globally so components can access it
    window.lenis = lenis

    // Animation frame loop for smooth scrolling
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
      delete window.lenis
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      {/* Spacer to push content below fixed hero */}
      <div style={{ height: '100vh' }} />
      <Features />
      <FeatureShowcase />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
