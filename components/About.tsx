'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CircuitBackground from './CircuitBackground'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const stats = [
    { number: '5', label: 'Projects Completed' },
    { number: '10+', label: 'Technical Skills' },
    { number: '100%', label: 'Dedication' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Circuit Background */}
      <CircuitBackground />

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
            <motion.h2 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block"
              >
                About
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block text-violet-500"
              >
                Abdul Mannan
              </motion.span>
            </motion.h2>

            <motion.div 
              className="space-y-8 text-gray-400 leading-relaxed text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9, duration: 1 }}
              >
                Motivated Electrical Engineering student at NUST, Islamabad with a strong aptitude for 
                embedded systems, Python programming, and creative video production. Passionate about 
                leveraging technology to design efficient hardware and software solutions, automate 
                workflows, and deliver impactful visual content.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.1, duration: 1 }}
              >
                Currently enrolled in core courses including Electrical Network Analysis, Engineering Drawing, 
                and Programming Fundamentals. Active participant in NUST technical societies and engineering 
                competitions, consistently applying classroom concepts to hands-on lab projects and prototyping challenges.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.3, duration: 1 }}
              >
                First-year achievements include developing a Bluetooth-controlled Arduino car with real-time sensor integration, 
                designing and implementing a 5V regulated power supply with PCB layouts, and mastering digital logic circuits through 
                hands-on laboratory experimentation. Demonstrated proficiency in circuit analysis using Ohm&apos;s law, Kirchhoff&apos;s theorems, 
                and network reduction techniques across multiple AC/DC circuits.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5, duration: 1 }}
              >
                Experienced in Arduino programming (C/C++), circuit design, Python development, and web scraping. 
                Skilled in tools like Git/GitHub, Streamlit, and Vercel for cloud deployment. Also proficient 
                in video editing with Wondershare Filmora and CapCut.
              </motion.p>
            </motion.div>
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
