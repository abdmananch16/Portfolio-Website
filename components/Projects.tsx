'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Arduino Bluetooth-Controlled Smart Car',
      description: 'Wireless-controlled smart car using Arduino and HC-05 Bluetooth module with obstacle detection and motor control.',
      tags: ['Arduino', 'Bluetooth HC-05', 'Motor Control', 'Mobile App'],
      github: '#',
      live: '#',
    },
    {
      title: '5V Regulated Power Supply',
      description: 'Stable 5V power supply circuit using transformer, bridge rectifier, voltage regulator IC, and filtering capacitors.',
      tags: ['Power Electronics', 'Voltage Regulation', 'Circuit Design', 'PCB'],
      github: '#',
      live: '#',
    },
    {
      title: 'Digital Logic Circuits on Veroboard',
      description: 'Implementation of combinational and sequential circuits demonstrating Boolean algebra and logic gates.',
      tags: ['Digital Logic', 'Veroboard', 'Logic Gates', 'Boolean Algebra'],
      github: '#',
      live: '#',
    },
    {
      title: 'Automatic LDR-Based Lighting System',
      description: 'Smart lighting system with Light Dependent Resistor for automatic brightness control and energy efficiency.',
      tags: ['LDR Sensor', 'Automation', 'Relay Control', 'Energy Efficient'],
      github: '#',
      live: '#',
    },
    {
      title: 'Python Desktop Application',
      description: 'Feature-rich desktop application with GUI framework for data management and visualization.',
      tags: ['Python', 'Tkinter/PyQt', 'GUI Design', 'Data Management'],
      github: '#',
      live: '#',
    },
    {
      title: 'Circuit Analysis & Simulation',
      description: 'Comprehensive circuit analysis using simulation tools for AC/DC circuits and frequency domain analysis.',
      tags: ['Circuit Analysis', 'MATLAB', 'Proteus', 'Simulation'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle Grid */}
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
            03. FEATURED PROJECTS
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-16 leading-tight max-w-3xl"
        >
          Engineering projects
          <br />
          that <span className="text-violet-500">makeanimpact.</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
              className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-white/5">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl font-bold text-violet-500/20">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-violet-500 hover:text-black text-gray-400 transition-all"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaGithub size={16} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-violet-500 hover:text-black text-gray-400 transition-all"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaExternalLinkAlt size={14} />
                    </motion.a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/5 group-hover:border-violet-500/30 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-violet-500 text-white hover:text-black font-semibold rounded-full transition-all border border-white/10 hover:border-violet-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <span>→</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
