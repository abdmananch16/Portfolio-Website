'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiChevronDown } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="text-violet-500 text-sm font-mono tracking-wider">
                01. ELECTRICAL ENGINEERING STUDENT
              </span>
            </motion.div>

            {/* Large Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-4">
                Circuit&
                <br />
                automation
                <br />
                projects
                <br />
                <span className="text-violet-500">thatwork.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              I&apos;m Abdul Mannan, an electrical engineering student. I design circuits, build Arduino projects, and develop Python applications — plus the hardware and software solutions around them.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4"
            >
              <motion.a
                href="#projects"
                className="group px-8 py-4 bg-violet-500 hover:bg-violet-600 text-black font-semibold rounded-full transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>▶</span>
                See how it works
              </motion.a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: FaGithub, href: 'https://github.com' },
                  { icon: FaLinkedin, href: 'https://linkedin.com' },
                  { icon: FaEnvelope, href: '#contact' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Typing Roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-gray-500 text-sm font-mono"
            >
              <TypeAnimation
                sequence={[
                  'Circuit Analysis Enthusiast',
                  2000,
                  'Electronics Explorer',
                  2000,
                  'Python Developer',
                  2000,
                  'Lifelong Learner',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Network Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Network Container */}
            <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
              {/* Animated SVG Network */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Connecting Lines */}
                {[
                  { x1: 200, y1: 50, x2: 320, y2: 150 },
                  { x1: 200, y1: 50, x2: 80, y2: 150 },
                  { x1: 320, y1: 150, x2: 300, y2: 280 },
                  { x1: 80, y1: 150, x2: 100, y2: 280 },
                  { x1: 300, y1: 280, x2: 100, y2: 280 },
                  { x1: 200, y1: 200, x2: 320, y2: 150 },
                  { x1: 200, y1: 200, x2: 80, y2: 150 },
                  { x1: 200, y1: 200, x2: 300, y2: 280 },
                  { x1: 200, y1: 200, x2: 100, y2: 280 },
                ].map((line, index) => (
                  <motion.line
                    key={index}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="url(#gradient)"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.5 + index * 0.1,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Network Nodes */}
                {[
                  { x: 200, y: 50, size: 8, label: 'Arduino' },
                  { x: 320, y: 150, size: 6, label: 'Sensors' },
                  { x: 80, y: 150, size: 6, label: 'Actuators' },
                  { x: 200, y: 200, size: 10, label: 'MCU' },
                  { x: 300, y: 280, size: 5, label: 'Output' },
                  { x: 100, y: 280, size: 5, label: 'Input' },
                ].map((node, index) => (
                  <g key={index}>
                    {/* Node Pulse Animation */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size + 4}
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="1"
                      strokeOpacity="0.4"
                      initial={{ scale: 0 }}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{
                        duration: 2,
                        delay: 1 + index * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                    {/* Main Node */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      fill="#8B5CF6"
                      filter="url(#glow)"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                  </g>
                ))}

                {/* Floating Particles */}
                {Array.from({ length: 8 }).map((_, index) => (
                  <motion.circle
                    key={`particle-${index}`}
                    cx={50 + (index * 40)}
                    cy={350}
                    r="1"
                    fill="#8B5CF6"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      y: [350, 50, 350],
                      x: [50 + (index * 40), 50 + (index * 40) + Math.sin(index) * 20]
                    }}
                    transition={{
                      duration: 4,
                      delay: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </svg>

              {/* Floating Labels */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <span className="text-violet-400 text-xs font-mono">Circuit Network</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
                className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full"
              >
                <span className="text-violet-400 text-xs font-mono">Live Data Flow</span>
              </motion.div>

              {/* Central Glow Effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>

            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.5 }}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2"
            >
              <div className="bg-violet-500 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 bg-black rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
                Active System
              </div>
            </motion.div>

            {/* Floating Data Points */}
            {[
              { label: 'Voltage: 5.2V', delay: 4, x: -20, y: -60 },
              { label: 'Current: 1.8A', delay: 4.5, x: 20, y: 60 },
              { label: 'Temp: 24°C', delay: 5, x: -40, y: 40 },
            ].map((data, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1, 1, 0.8],
                  y: [0, -10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  delay: data.delay,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-violet-300 font-mono"
                style={{ 
                  left: `calc(50% + ${data.x}px)`,
                  top: `calc(50% + ${data.y}px)`
                }}
              >
                {data.label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiChevronDown className="text-gray-600 w-8 h-8" />
      </motion.a>
    </section>
  )
}

export default Hero
