'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CircuitBackground from './CircuitBackground'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      period: '2024',
      title: 'Arduino Smart Car Project',
      company: 'NUST Electrical Engineering',
      description: 'Designed and built a Bluetooth-controlled autonomous vehicle with real-time sensor integration.',
      achievements: [
        'Developed C/C++ code for Arduino microcontroller with wireless communication',
        'Integrated ultrasonic and IR sensors for obstacle detection and navigation',
        'Assembled and tested complete hardware setup with motor controls and power management',
      ],
    },
    {
      period: '2024',
      title: '5V Regulated Power Supply Design',
      company: 'NUST Electrical Engineering Lab',
      description: 'Designed and implemented a regulated power supply with comprehensive circuit analysis.',
      achievements: [
        'Analyzed transformer specifications and rectification circuits',
        'Implemented voltage regulation using IC 7805 with filtering components',
        'Conducted load testing and measured voltage stability across different current ranges',
      ],
    },
    {
      period: '2023 - 2024',
      title: 'Digital Logic Circuits & LDR Lighting System',
      company: 'NUST First Year Projects',
      description: 'Hands-on laboratory work with digital electronics and sensor-based automation.',
      achievements: [
        'Mastered logic gates, combinational and sequential circuits through practical implementation',
        'Designed and built LDR-based automatic lighting system with switching circuits',
        'Applied Ohm\'s law, Kirchhoff\'s theorems, and network analysis techniques to real circuits',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Circuit Background */}
      <CircuitBackground />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-violet-500 text-sm font-mono tracking-wider">
            04. WORK EXPERIENCE
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-tight max-w-3xl"
        >
          Professional
          <br />
          journey &
          <br />
          <span className="text-violet-500">achievements.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 * index, ease: "easeOut" }}
              className="group"
            >
              <div className="grid md:grid-cols-12 gap-8 items-start">
                {/* Content */}
                <motion.div 
                  className="md:col-span-12"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 * index + 0.1 }}
                >
                  <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] border border-white/5 hover:border-violet-500/50 rounded-2xl p-8 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/10">
                    <motion.h3 
                      className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 * index + 0.2 }}
                    >
                      {exp.title}
                    </motion.h3>
                    
                    <motion.div 
                      className="text-violet-500 font-semibold mb-3 text-sm"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 * index + 0.25 }}
                    >
                      {exp.company}
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-400 mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 * index + 0.3 }}
                    >
                      {exp.description}
                    </motion.p>

                    <motion.div 
                      className="space-y-3 pt-4 border-t border-white/5"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 * index + 0.35 }}
                    >
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: 0.3 * index + 0.4 + idx * 0.1 }}
                          className="flex items-start gap-3 group/item"
                        >
                          <motion.div 
                            className="w-2 h-2 rounded-full bg-violet-500 mt-2 flex-shrink-0"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-gray-300 text-sm group-hover/item:text-white transition-colors">{achievement}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
