'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaMicrochip,
  FaBolt,
  FaCogs,
  FaSolarPanel,
  FaTools,
} from 'react-icons/fa'
import {
  SiArduino,
  SiRaspberrypi,
  SiPython,
  SiCplusplus,
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: 'Circuit Design', icon: FaMicrochip, color: '#FFD700' },
    { name: 'Power Systems', icon: FaBolt, color: '#FFA500' },
    { name: 'Arduino', icon: SiArduino, color: '#00979D' },
    { name: 'Raspberry Pi', icon: SiRaspberrypi, color: '#C51A4A' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'C/C++', icon: SiCplusplus, color: '#00599C' },
    { name: 'PCB Design', icon: FaTools, color: '#34A853' },
    { name: 'Renewable Energy', icon: FaSolarPanel, color: '#4CAF50' },
    { name: 'Control Systems', icon: FaCogs, color: '#9C27B0' },
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
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, rgba(251, 191, 36, 0.1) 1px, transparent 1px)`,
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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
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
                className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-lg border border-slate-700 hover:border-amber-500/70 transition-all group cursor-pointer"
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
                  className="mt-4 w-full bg-slate-700 rounded-full h-2 overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
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
              title: 'Core Engineering',
              items: ['Circuit Analysis', 'Digital Electronics', 'Signal Processing', 'Electromagnetic Theory'],
            },
            {
              title: 'Specialized Areas',
              items: ['Power Distribution', 'Motor Control', 'IoT Systems', 'Smart Grids'],
            },
            {
              title: 'Tools & Software',
              items: ['MATLAB/Simulink', 'Proteus', 'LTspice', 'Eagle PCB'],
            },
          ].map((category) => (
            <motion.div
              key={category.title}
              className="bg-slate-900/70 backdrop-blur-md rounded-2xl p-8 border border-slate-700"
              whileHover={{ y: -10, borderColor: 'rgba(251, 191, 36, 0.7)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 text-amber-400">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full" />
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
