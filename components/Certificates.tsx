'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCertificate, FaAward, FaGraduationCap, FaCode } from 'react-icons/fa'
import { SiArduino, SiPython, SiAutodesk } from 'react-icons/si'

const Certificates = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const certificates = [
    {
      title: 'Programming for Everybody (Getting Started with Python)',
      issuer: 'University of Michigan via Coursera',
      type: 'Programming Certification',
      icon: SiPython,
      description: 'Successfully completed online course authorized by University of Michigan',
      skills: ['Python', 'Programming Fundamentals', 'Getting Started', 'Coursera Verified'],
      link: 'https://coursera.org/verify/GM1JCLV1XTJO'
    },
    {
      title: 'Prompt Engineering',
      issuer: 'SoloLearn',
      type: 'AI Certification',
      icon: FaCertificate,
      description: 'Professional certification in prompt engineering and AI techniques',
      skills: ['Prompt Engineering', 'AI', 'Language Models', 'AI Integration'],
      certificateId: 'CC-2XKUDQIF',
      link: 'https://www.sololearn.com/certificates/CC-2XKUDQIF'
    },
    {
      title: 'Social Media Marketing with AI',
      issuer: 'SoloLearn',
      type: 'Marketing Certification',
      icon: FaCode,
      description: 'Advanced techniques in social media marketing using AI tools',
      skills: ['Social Media Marketing', 'AI Tools', 'Content Strategy', 'Marketing Automation'],
      certificateId: 'CC-BHFUCH0D',
      link: 'https://www.sololearn.com/certificates/CC-BHFUCH0D'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="certificates" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-violet-500 text-sm font-mono tracking-wider mb-4 block">
            05. CERTIFICATIONS & ACHIEVEMENTS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Certified
            <br />
            <span className="text-violet-500">expertise.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Professional certifications and academic achievements that validate my technical skills 
            and commitment to continuous learning in electrical engineering.
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300 group cursor-pointer"
                onClick={() => {
                  window.open(cert.link, '_blank')
                }}
              >
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-violet-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{cert.type}</div>
                    {cert.certificateId && (
                      <div className="text-xs text-gray-600 mt-1">ID: {cert.certificateId}</div>
                    )}
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="mb-4">
                  <h3 className="text-white text-xl font-bold mb-2 group-hover:text-violet-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-violet-400 font-semibold mb-2">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certificate Badge */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ rotate: 15 }}
                >
                  <FaCertificate className="w-4 h-4 text-violet-500" />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '3', label: 'Professional Certifications' },
            { number: '100%', label: 'Course Completion' },
            { number: '20+', label: 'Skills Validated' },
            { number: '∞', label: 'Continuous Learning' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-violet-500 mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  )
}

export default Certificates
