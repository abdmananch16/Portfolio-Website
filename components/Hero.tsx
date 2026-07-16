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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -50, rotateY: -90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 30px rgba(255, 255, 255, 0.8)",
                    rotateZ: 2
                  }}
                  className="block inline-block"
                >
                  <motion.span
                    animate={{
                      letterSpacing: [0, 2, 0],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Abdul
                  </motion.span>
                </motion.span>
                {" "}
                <motion.span
                  initial={{ opacity: 0, x: 50, rotateY: 90 }}
                  animate={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ 
                    delay: 0.7, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    textShadow: "0 0 30px rgba(139, 92, 246, 1)",
                    rotateZ: -2
                  }}
                  className="block inline-block text-violet-500"
                >
                  <motion.span
                    animate={{
                      letterSpacing: [0, 2, 0],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    Mannan
                  </motion.span>
                </motion.span>
              </h1>

              {/* Python Developer - Below Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="mt-4"
              >
                <motion.p
                  animate={{
                    opacity: [0.6, 1, 0.6],
                    scale: [0.95, 1.05, 0.95],
                    textShadow: [
                      "0 0 20px rgba(139, 92, 246, 0)",
                      "0 0 25px rgba(139, 92, 246, 0.8)",
                      "0 0 20px rgba(139, 92, 246, 0)"
                    ],
                    rotateZ: [-0.5, 0.5, -0.5]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    rotateZ: 0
                  }}
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-400"
                >
                  Python Developer
                </motion.p>
              </motion.div>

              {/* Three Titles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-6 flex flex-wrap gap-3 items-center"
              >
                {['Electrical Engineering Student', 'Circuit Analysis Enthusiast', 'Arduino Developer'].map((title, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      delay: 1.4 + index * 0.2, 
                      duration: 2 + index * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1
                    }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
                    }}
                    className="px-4 py-2 rounded-full border border-violet-400/30 text-xs sm:text-sm md:text-base text-violet-400 font-semibold"
                  >
                    {title}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-12 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-400 mb-6"
              >
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="mb-3"
                >
                  Electrical Engineering Student
                </motion.p>
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="text-white"
                >
                  Circuit Analysis Enthusiast
                </motion.p>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 1 }}
                className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                Specializing in embedded systems, Arduino programming, and Python development. 
                Creating innovative hardware and software solutions with expertise in circuit design, 
                automation, and web development.
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex items-center gap-6 mb-16 justify-center lg:justify-start"
            >
              {/* Hire Me Button */}
              <motion.a
                href="mailto:abdmananch16@gmail.com?subject=Job Opportunity&body=Hi Abdul Mannan, I would like to discuss a job opportunity with you."
                className="group px-10 py-4 bg-violet-500 hover:bg-violet-600 text-black font-bold rounded-full transition-all flex items-center gap-3 text-lg shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 }}
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
                  className="text-xl"
                >
                  📧
                </motion.span>
                Hire Me
              </motion.a>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                {[
                  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/abdul-mannan-23a0bb3a5', label: 'LinkedIn' },
                  { icon: FaEnvelope, href: 'mailto:abdmananch16@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-violet-500/20 text-gray-400 hover:text-violet-400 transition-all border border-white/10 hover:border-violet-500/50"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.9 + index * 0.1 }}
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Typing Roles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
              className="text-gray-500 text-lg font-mono text-center lg:text-left"
            >
              <motion.div
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.01, 1],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <TypeAnimation
                  sequence={[
                    'Arduino Programmer',
                    2000,
                    'Embedded Systems Developer',
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