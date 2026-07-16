'use client'

import { motion } from 'framer-motion'

export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Refined Circuit Grid Base */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* SVG Circuit Components and Traces */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(139, 92, 246, 0.9)" />
            <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* RESISTORS */}
        <g transform="translate(120, 80)">
          <line x1="0" y1="20" x2="15" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <rect x="15" y="12" width="55" height="16" fill="none" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3" rx="3" filter="url(#glow)"/>
          <line x1="70" y1="20" x2="100" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <circle cx="85" cy="20" r="3" fill="rgba(139, 92, 246, 0.8)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>

        <g transform="translate(1000, 450)">
          <line x1="0" y1="20" x2="15" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <rect x="15" y="12" width="55" height="16" fill="none" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3" rx="3" filter="url(#glow)"/>
          <line x1="70" y1="20" x2="100" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
        </g>

        {/* CAPACITORS */}
        <g transform="translate(350, 150)">
          <line x1="0" y1="20" x2="18" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <line x1="18" y1="4" x2="18" y2="36" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3.5" filter="url(#glow)"/>
          <line x1="26" y1="4" x2="26" y2="36" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3.5" filter="url(#glow)"/>
          <line x1="26" y1="20" x2="44" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <circle cx="33" cy="20" r="3" fill="rgba(139, 92, 246, 0.8)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* IC CHIPS */}
        <g transform="translate(600, 120)">
          <rect x="8" y="8" width="80" height="80" fill="rgba(10, 10, 10, 0.95)" stroke="rgba(139, 92, 246, 0.8)" strokeWidth="3.5" rx="5" filter="url(#glow)"/>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={`ic1pin-${i}`}>
              <line x1="0" y1={18 + i * 12} x2="8" y2={18 + i * 12} stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3"/>
              <line x1="88" y1={18 + i * 12} x2="96" y2={18 + i * 12} stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3"/>
            </g>
          ))}
          <circle cx="48" cy="48" r="8" fill="rgba(139, 92, 246, 0.6)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="35" y="53" fill="rgba(139, 92, 246, 0.8)" fontSize="10" fontFamily="monospace" fontWeight="bold">IC</text>
        </g>

        {/* TRANSISTORS */}
        <g transform="translate(950, 250)">
          <circle cx="32" cy="32" r="24" fill="none" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3" filter="url(#glow)"/>
          <line x1="22" y1="16" x2="22" y2="48" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3.5"/>
          <line x1="0" y1="32" x2="22" y2="32" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3"/>
          <line x1="22" y1="22" x2="46" y2="8" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3"/>
          <line x1="22" y1="42" x2="46" y2="56" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3"/>
          <polygon points="40,8 46,8 46,15" fill="rgba(139, 92, 246, 0.7)"/>
          <circle cx="32" cy="32" r="4" fill="rgba(139, 92, 246, 0.8)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* DIODES */}
        <g transform="translate(500, 420)">
          <line x1="0" y1="20" x2="12" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <polygon points="12,8 12,32 32,20" fill="none" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3" filter="url(#glow)"/>
          <line x1="32" y1="8" x2="32" y2="32" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3.5"/>
          <line x1="32" y1="20" x2="44" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <circle cx="22" cy="20" r="3" fill="rgba(139, 92, 246, 0.8)">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="2.7s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* INDUCTORS */}
        <g transform="translate(150, 500)">
          <line x1="0" y1="20" x2="8" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
          <path d="M 8 20 Q 14 8, 20 20 Q 26 32, 32 20 Q 38 8, 44 20 Q 50 32, 56 20 Q 62 8, 68 20 Q 74 32, 80 20" 
                fill="none" stroke="rgba(139, 92, 246, 0.7)" strokeWidth="3" filter="url(#glow)"/>
          <line x1="80" y1="20" x2="88" y2="20" stroke="url(#traceGrad)" strokeWidth="3"/>
        </g>

        {/* POWER/GROUND SYMBOLS */}
        <g transform="translate(1100, 150)">
          <line x1="0" y1="30" x2="0" y2="18" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="3"/>
          <circle cx="0" cy="12" r="6" fill="rgba(139, 92, 246, 0.6)">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="10" y="30" fill="rgba(139, 92, 246, 0.6)" fontSize="13" fontFamily="monospace" fontWeight="bold">+5V</text>
        </g>

        <g transform="translate(450, 580)">
          <line x1="0" y1="0" x2="0" y2="18" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="3"/>
          <line x1="-18" y1="18" x2="18" y2="18" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="3"/>
          <line x1="-12" y1="24" x2="12" y2="24" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="3"/>
          <line x1="-6" y1="30" x2="6" y2="30" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="3"/>
          <text x="24" y="22" fill="rgba(139, 92, 246, 0.6)" fontSize="13" fontFamily="monospace" fontWeight="bold">GND</text>
        </g>

        {/* CONNECTING TRACES WITH FLOW */}
        <motion.path
          d="M 220 100 L 350 100 L 350 170"
          stroke="url(#traceGrad)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          animate={{ strokeDashoffset: [0, -15] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 394 170 L 500 170 L 500 300 L 600 300 L 600 220"
          stroke="url(#traceGrad)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          animate={{ strokeDashoffset: [0, -15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.path
          d="M 696 200 L 800 200 L 800 420 L 844 420"
          stroke="url(#traceGrad)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10 5"
          animate={{ strokeDashoffset: [0, -15] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Animated Signal Flow Particles */}
      {[
        { start: [270, 140], end: [400, 200], delay: 0 },
        { start: [437, 200], end: [650, 240], delay: 0.8 },
        { start: [740, 230], end: [887, 440], delay: 1.6 },
        { start: [580, 460], end: [980, 308], delay: 2.4 },
      ].map((route, i) => (
        <motion.div
          key={`signal-${i}`}
          className="absolute w-2 h-2 bg-violet-400/60 rounded-full"
          style={{
            left: route.start[0],
            top: route.start[1],
          }}
          animate={{
            left: [route.start[0], route.end[0]],
            top: [route.start[1], route.end[1]],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: route.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Refined Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-violet-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120 - Math.random() * 80],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Sophisticated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[900px] h-[900px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.06, 0.04],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[900px] h-[900px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.04, 0.06, 0.04],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Elegant Corner Accents */}
      <motion.div 
        className="absolute top-0 left-0 w-32 h-32 border-l border-t border-violet-500/10"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 border-r border-t border-violet-500/10"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-violet-500/10"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-violet-500/10"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, delay: 3 }}
      />

      {/* Refined Scan Line */}
      <motion.div
        className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
