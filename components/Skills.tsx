'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaCode,
  FaVideo,
  FaLayerGroup,
  FaMicrochip,
  FaServer,
} from 'react-icons/fa'
import {
  SiArduino,
  SiPython,
  SiCplusplus,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Video Editing', icon: FaVideo, color: '#E74C3C' },
    { name: 'Streamlit', icon: FaLayerGroup, color: '#FF4B4B' },
    { name: 'Circuit Design', icon: FaMicrochip, color: '#F39C12' },
    { name: 'C', icon: SiCplusplus, color: '#A8B9CC' },
    { name: 'C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'Arduino Programming', icon: SiArduino, color: '#00979D' },
    { name: 'Embedded Systems', icon: FaServer, color: '#3498DB' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <span className="text-violet-500 text-sm font-mono tracking-wider">
            05. TECHNICAL SKILLS
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl">
            Skills &<br />
            <span className="text-violet-500">Technologies.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Technical expertise in electrical engineering principles and modern technologies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                className="bg-[#111] backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-white/5 hover:border-violet-500/50 transition-all group cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    className="text-6xl md:text-7xl"
                    style={{ color: skill.color }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent />
                  </motion.div>
                  <h3 className="text-white font-semibold text-center text-sm md:text-base">
                    {skill.name}
                  </h3>
                </div>

                {/* Skill level indicator */}
                <motion.div
                  className="mt-4 w-full bg-white/5 rounded-full h-2 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 + Math.random() * 15}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Skills Categories */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'First Year Engineering',
              items: ['Basic Circuit Analysis', 'Digital Logic Design', 'Programming Fundamentals', 'Engineering Drawing'],
            },
            {
              title: 'Hands-On Projects',
              items: ['Arduino Programming', 'Basic Motor Control', 'Sensor Integration', 'Power Supply Design'],
            },
            {
              title: 'Software & Tools',
              items: ['Python', 'C/C++', 'Git/GitHub', 'Streamlit'],
            },
          ].map((category) => (
            <motion.div
              key={category.title}
              className="bg-[#111] backdrop-blur-md rounded-2xl p-8 border border-white/5"
              whileHover={{ y: -10, borderColor: 'rgba(139, 92, 246, 0.5)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 text-violet-400">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-violet-400 rounded-full" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
