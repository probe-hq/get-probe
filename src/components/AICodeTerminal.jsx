import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const AICodeTerminal = ({ compact = false, isActive = true }) => {
  const [lines, setLines] = useState([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)

  const codeLines = [
    { type: 'command', text: '~/probe/experiment_', showCursor: true },
    { type: 'output', text: 'Initializing Probe Memory Engine...', color: 'text-yellow-400' },
    { type: 'diff', text: 'const memory = new LocalMemoryEngine()', color: 'text-green-400', prefix: '+' },
    { type: 'diff', text: 'const oldHistory = chrome.history', color: 'text-red-400', prefix: '-' },
    { type: 'output', text: 'Memory engine initialized successfully', color: 'text-green-400' },
    { type: 'command', text: 'probe.remember(context)', showCursor: false },
    { type: 'output', text: 'Context saved: React debugging session', color: 'text-blue-400' },
    { type: 'diff', text: 'probe.linkTabs([tab1, tab2, tab3])', color: 'text-green-400', prefix: '+' },
    { type: 'output', text: 'Cross-tab intelligence activated', color: 'text-yellow-400' },
    { type: 'command', text: 'probe.ask("Show TypeScript research")', showCursor: false },
    { type: 'output', text: 'Found 5 relevant sessions from yesterday', color: 'text-green-400' },
    { type: 'success', text: 'Probe is ready. Memory Web active.', color: 'text-green-400' },
  ]

  useEffect(() => {
    if (!isActive) {
      return
    }

    if (currentLineIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, codeLines[currentLineIndex]])
        setCurrentLineIndex((prev) => prev + 1)
      }, currentLineIndex === 0 ? 500 : 300)

      return () => clearTimeout(timer)
    }
  }, [currentLineIndex, isActive])

  useEffect(() => {
    if (!isActive) {
      setLines([])
      setCurrentLineIndex(0)
    }
  }, [isActive])

  const resetTerminal = () => {
    setLines([])
    setCurrentLineIndex(0)
  }

  const containerClass = compact 
    ? "w-full"
    : "min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4 py-32"

  const wrapperClass = compact
    ? "w-full"
    : "w-full max-w-4xl"

  return (
    <div className={containerClass}>
      <motion.div
        className={wrapperClass}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-black/20 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[#a0a0a0] text-sm font-mono">
                probe-terminal
              </span>
            </div>
            <p className="text-[#a0a0a0] text-sm font-mono">cLick on the button to reset the terminal</p>
            <button
              onClick={resetTerminal}
              className="text-[#a0a0a0] hover:text-white transition-colors text-sm"
            >
              <i className="fas fa-redo"></i>
            </button>
          </div>

          {/* Terminal Content */}
          <div className={`font-mono text-sm ${compact ? 'p-4 max-h-[500px] overflow-y-auto' : 'p-6'}`}>
            <div className="space-y-2">
              <AnimatePresence>
                {lines.map((line, index) => {
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      {line.prefix && (
                        <span className={`${line.color} font-bold w-4`}>
                          {line.prefix}
                        </span>
                      )}
                      {!line.prefix && line.type === 'command' && (
                        <span className="text-white">$</span>
                      )}
                      {!line.prefix && line.type === 'output' && (
                        <span className="text-[#a0a0a0]">→</span>
                      )}
                      {!line.prefix && line.type === 'success' && (
                        <span className="text-green-400">✓</span>
                      )}
                      <span className={`flex-1 ${line.color || 'text-white'} ${compact ? 'text-xs' : ''}`}>
                        {line.text}
                      </span>
                      {line.showCursor && index === lines.length - 1 && (
                        <motion.span
                          className="inline-block w-2 h-5 bg-white ml-1"
                          animate={{ opacity: [1, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                        />
                      )}
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {lines.length === 0 && (
              <div className="text-[#a0a0a0] text-center py-8">
                <i className="fas fa-terminal text-4xl mb-4 opacity-50"></i>
                <p>Initializing terminal...</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AICodeTerminal
