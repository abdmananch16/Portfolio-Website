'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="contact" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Grid */}
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
            05. GET IN TOUCH
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Let&apos;s work
              <br />
              together on your
              <br />
              <span className="text-violet-500">nextproject.</span>
            </h2>

            <p className="text-gray-400 mb-12 leading-relaxed">
              I&apos;m always interested in discussing electrical engineering projects, 
              research collaborations, and innovative ideas. Whether you have a question 
              or want to connect, feel free to reach out!
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {[
                { icon: FaEnvelope, text: 'your.email@example.com', href: 'mailto:your.email@example.com' },
                { icon: FaPhone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { icon: FaMapMarkerAlt, text: 'Your City, Country', href: '#' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 text-gray-400 hover:text-violet-500 transition-colors group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-violet-500 group-hover:text-black transition-all">
                    <item.icon size={18} />
                  </div>
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-violet-500 text-gray-400 hover:text-black transition-all"
                  whileHover={{ y: -5, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-[#111] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-[#111] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-6 py-4 bg-[#111] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>
              <div>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  className="w-full px-6 py-4 bg-[#111] border border-white/5 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-violet-500 hover:bg-violet-600 text-black font-semibold rounded-full transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
