'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 text-sm"
          >
            © 2026 Abdul Mannan. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 text-sm text-gray-500"
          >
            {['Privacy', 'Terms', 'Sitemap'].map((link, index) => (
              <motion.a
                key={link}
                href="#"
                className="hover:text-violet-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
