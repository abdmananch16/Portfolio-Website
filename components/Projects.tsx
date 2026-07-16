'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import CircuitBackground from './CircuitBackground'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Bluetooth-Controlled Arduino Car',
      description: 'Remote-controlled car using Arduino Uno, HC-05 Bluetooth module, and L298N motor driver with Android app interface for wireless control.',
      tags: ['Arduino', 'Bluetooth HC-05', 'L298N Driver', 'Android App', 'C/C++'],
      live: 'https://www.linkedin.com/posts/abdul-mannan-23a0bb3a5_arduino-electricalengineering-embeddedsystems-ugcPost-7477583637329338368-KEjn/?utm_source=share&utm_medium=member_desktop',
      projectPage: '/projects/arduino-car',
    },
    {
      title: 'AWAAZ360 Pro - Pakistan Civic Platform',
      description: 'Full-stack civic utility platform featuring complaint filing with AI duplicate detection, fuel price tracking, electricity bill calculator, and civic chatbot.',
      tags: ['Python', 'Streamlit', 'Web Scraping', 'AI', 'Vercel Deployment'],
      live: 'https://www.linkedin.com/posts/abdul-mannan-23a0bb3a5_civictech-pakistan-nust-ugcPost-7475461478507278337-sBkj/?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: '5V DC Regulated Power Supply',
      description: 'Complete power supply design using step-down transformer, bridge rectifier, filter capacitor, and 7805 voltage regulator with oscilloscope testing.',
      tags: ['Power Electronics', 'Voltage Regulation', '7805 IC', 'Circuit Design'],
      live: 'https://www.linkedin.com/posts/abdul-mannan-23a0bb3a5_electricalengineering-studentproject-circuitdesign-ugcPost-7428826686483353602-2K-C/?utm_source=share&utm_medium=member_desktop',
    },
    {
      title: 'Python Task Automation Script',
      description: 'Automated file organization and batch-rename tool for media assets with error handling and logging, saving hours of manual work.',
      tags: ['Python', 'Automation', 'File Handling', 'Error Handling'],
      github: '#',
      live: '#',
    },
    {
      title: 'Logic Gates Implementation (OR Gate)',
      description: 'OR logic gate constructed on breadboard using 74LS32 TTL IC, with Boolean algebra simplification and timing analysis.',
      tags: ['Digital Logic', '74LS Series', 'Boolean Algebra', 'OR Gate'],
      live: 'https://www.linkedin.com/posts/abdul-mannan-23a0bb3a5_electricalengineering-digitallogic-electronics-ugcPost-7430035097648668672-4Dy4/?utm_source=share&utm_medium=member_desktop',
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative overflow-hidden">
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
                    {project.github && (
                      <motion.a
                        href={project.github}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-600/20 hover:bg-violet-600 text-violet-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaGithub size={16} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-violet-600/20 hover:bg-violet-600 text-violet-400 hover:text-white transition-all"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaExternalLinkAlt size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-500 transition-colors">
                  {project.projectPage ? (
                    <Link href={project.projectPage} className="hover:underline">
                      {project.title}
                    </Link>
                  ) : (
                    project.title
                  )}
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
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-full transition-all"
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
