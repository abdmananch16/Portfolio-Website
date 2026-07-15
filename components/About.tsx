'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const stats = [
    { number: '25+', label: 'Projects Completed' },
    { number: '3.8', label: 'GPA' },
    { number: '10+', label: 'Technical Skills' },
    { number: '100%', label: 'Dedication' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
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

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-violet-500 text-sm font-mono tracking-wider">
            02. ABOUT ME
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Circuit Analysis
              <br />
              Enthusiast &
              <br />
              <span className="text-violet-500">Electronics Explorer.</span>
            </h2>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                I&apos;m an Electrical Engineering student with a deep passion for circuit analysis, 
                electronics exploration, and practical problem-solving. As a prompt engineer and 
                lifelong learner, I continuously seek to expand my knowledge and apply it to 
                real-world challenges.
              </p>
              <p>
                My engineering journey includes hands-on projects such as developing an Arduino 
                Bluetooth-Controlled Smart Car, designing a 5V regulated power supply, creating 
                digital logic circuits on veroboard, implementing an automatic LDR-based lighting 
                system, and building Python desktop applications.
              </p>
              <p>
                As a Python developer and electronics enthusiast, I enjoy working on projects 
                that combine hardware and software, exploring IoT solutions, and continuously 
                learning new technologies to stay at the forefront of electrical engineering innovation.
              </p>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-violet-500 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6"
            >
              <h3 className="text-white font-semibold mb-4">Core Skills</h3>
              <div className="space-y-3">
                {[
                  { name: 'Circuit Design & Analysis', level: 90 },
                  { name: 'Arduino & Embedded Systems', level: 85 },
                  { name: 'Python Development', level: 80 },
                  { name: 'Digital Electronics', level: 88 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">{skill.name}</span>
                      <span className="text-violet-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-violet-600"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 1 + index * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
