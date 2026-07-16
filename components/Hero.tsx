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
              <div className="flex items-center gap-4 mb-4">
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
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="block"
                >
                  Abdul
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="block text-violet-500"
                >
                  Mannan
                </motion.span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="text-violet-400 font-semibold block mb-2"
              >
                Electrical Engineering Student
              </motion.span>
              Specializing in circuit design, Arduino projects, and Python applications. 
              Creating innovative hardware and software solutions for real-world challenges.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
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
              transition={{ delay: 1.5 }}
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

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Dashboard Card */}
            <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="border-b border-white/5 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-500 text-xs font-mono">Project Dashboard — Live stats and recent work</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Projects</div>
                    <div className="text-3xl font-bold text-white">25+</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">Success Rate</div>
                    <div className="text-3xl font-bold text-violet-500">98.4%</div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-3 mb-6">
                  {[
                    { label: 'Arduino Projects', value: 90 },
                    { label: 'Circuit Design', value: 85 },
                    { label: 'Python Apps', value: 80 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>{skill.label}</span>
                        <span>{skill.value}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-violet-500"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.value}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="space-y-2">
                  <div className="text-gray-500 text-xs mb-2">► Recent Activity</div>
                  {[
                    'Bluetooth Smart Car',
                    'LDR Lighting System',
                    'Python Desktop App',
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                      <span className="text-gray-400">{activity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer Stats */}
              <div className="border-t border-white/5 p-4 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">1,284</div>
                  <div className="text-xs text-gray-500">hours this week</div>
                </div>
                <div className="flex gap-1">
                  {[60, 40, 80, 45, 90, 55, 75].map((height, index) => (
                    <motion.div
                      key={index}
                      className="w-2 bg-violet-500 rounded-t"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2"
            >
              <div className="bg-violet-500 text-black px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                ✓ Active
              </div>
            </motion.div>
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
