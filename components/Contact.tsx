'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import CircuitBackground from './CircuitBackground'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Circuit Background */}
      <CircuitBackground />

      <motion.div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-violet-500 text-sm font-mono tracking-wider">
            06. GET IN TOUCH
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build
            <br />
            <span className="text-violet-500">Something</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s an electrical engineering project, embedded systems design, or something 
            you haven&apos;t quite figured out yet — I&apos;m open to hearing about it.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto"
        >
          {/* Email Card */}
          <a
            href="mailto:abdmananch16@gmail.com"
            className="group bg-[#111] border border-white/5 hover:border-violet-500/50 rounded-2xl p-6 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                <FaEnvelope size={20} />
              </div>
              <div className="text-left">
                <div className="text-gray-500 text-sm mb-1">Email</div>
                <div className="text-white font-medium">abdmananch16@gmail.com</div>
              </div>
            </div>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+923394198091"
            className="group bg-[#111] border border-white/5 hover:border-violet-500/50 rounded-2xl p-6 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-600/20 text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                <FaPhone size={20} />
              </div>
              <div className="text-left">
                <div className="text-gray-500 text-sm mb-1">Phone</div>
                <div className="text-white font-medium">+92-339-4198091</div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: FaGithub, href: 'https://github.com/abdmananch16/Portfolio-Website.git', label: 'GitHub' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/abdul-mannan-23a0bb3a5', label: 'LinkedIn' },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="bg-[#111] border border-white/5 hover:border-violet-500/50 rounded-2xl px-6 py-3 transition-all flex items-center gap-3 text-gray-400 hover:text-violet-400"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <social.icon size={20} />
              <span className="font-medium">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact
