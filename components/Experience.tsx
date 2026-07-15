'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      period: '2024',
      title: 'Electrical Engineering Intern',
      company: 'Power Systems Corporation',
      description: 'Working on power distribution systems and renewable energy integration projects.',
      achievements: [
        'Designed and tested solar power integration circuits',
        'Conducted power flow analysis for distribution networks',
        'Assisted in smart grid monitoring system development',
      ],
    },
    {
      period: '2023',
      title: 'Research Assistant',
      company: 'University Electrical Lab',
      description: 'Collaborated on embedded systems and IoT applications research.',
      achievements: [
        'Developed Arduino-based automation systems',
        'Published research paper on energy optimization',
        'Designed PCB layouts for laboratory equipment',
      ],
    },
    {
      period: '2022',
      title: 'Student Engineer',
      company: 'Campus Innovation Center',
      description: 'Engineering design competitions and sustainable energy projects.',
      achievements: [
        'Won 1st place in Circuit Design Competition',
        'Built autonomous line-following robot',
        'Mentored junior students in electronics',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Grid Background */}
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
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="grid md:grid-cols-12 gap-8">
                {/* Period */}
                <div className="md:col-span-2">
                  <div className="text-violet-500 font-mono text-sm">{exp.period}</div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <div className="bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-violet-500/30 transition-all">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-500 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="text-gray-400 mb-4">{exp.company}</div>
                    <p className="text-gray-500 mb-6">{exp.description}</p>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + index * 0.1 + idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
