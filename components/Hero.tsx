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
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                <span className="text-violet-500 text-sm font-mono tracking-wider">
                  01. ELECTRICAL ENGINEERING STUDENT
                </span>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-mono">Available for Work</span>
                </div>
              </div>
            </motion.div>

            {/* Large Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.9] mb-4">
                <motion.span
                  initial={{ opacity: 0, x: -30, rotateX: -90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="block"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
                  }}
                >
                  <motion.span
                    animate={{
                      background: [
                        "linear-gradient(45deg, #fff, #fff)",
                        "linear-gradient(45deg, #fff, #e5e7eb)",
                        "linear-gradient(45deg, #fff, #fff)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Abdul
                  </motion.span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 30, rotateX: 90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{ 
                    delay: 0.7, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="block text-violet-500"
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(139, 92, 246, 0.8)"
                  }}
                >
                  <motion.span
                    animate={{
                      background: [
                        "linear-gradient(45deg, #8B5CF6, #A855F7)",
                        "linear-gradient(45deg, #A855F7, #C084FC)",
                        "linear-gradient(45deg, #8B5CF6, #A855F7)"
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Mannan
                  </motion.span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="text-violet-400 font-semibold block mb-2"
              >
                Electrical Engineering Student - NUST, Islamabad
              </motion.span>
              Specializing in embedded systems, Arduino programming, and Python development. 
              Creating innovative hardware and software solutions with expertise in circuit design, 
              automation, and web development.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex items-center gap-4 mb-8 justify-center lg:justify-start"
            >
              {/* Hire Me Button */}
              <motion.a
                href="mailto:abdmananch16@gmail.com?subject=Job Opportunity&body=Hi Abdul Mannan, I would like to discuss a job opportunity with you."
                className="group px-8 py-4 bg-violet-500 hover:bg-violet-600 text-black font-semibold rounded-full transition-all flex items-center gap-2"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(139, 92, 246, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <motion.span
                  animate={{ 
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ✉️
                </motion.span>
                <motion.span
                  animate={{
                    background: [
                      "linear-gradient(45deg, #000, #000)",
                      "linear-gradient(45deg, #4a5568, #000)",
                      "linear-gradient(45deg, #000, #000)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Hire Me
                </motion.span>
              </motion.a>

              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {[
                  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/abdul-mannan-23a0bb3a5', label: 'LinkedIn' },
                  { icon: FaEnvelope, href: 'mailto:abdmananch16@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.label}
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
              transition={{ delay: 1.5 }}
              className="mt-12 text-gray-500 text-sm font-mono"
            >
              <motion.div
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.02, 1],
                  textShadow: [
                    "0 0 0px rgba(139, 92, 246, 0)",
                    "0 0 10px rgba(139, 92, 246, 0.5)",
                    "0 0 0px rgba(139, 92, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-transparent blur-sm"
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <TypeAnimation
                  sequence={[
                    'Embedded Systems Developer',
                    2000,
                    'Arduino Programmer', 
                    2000,
                    'Python Developer',
                    2000,
                    'Circuit Designer',
                    2000,
                    'NUST Engineering Student',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="relative z-10"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
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