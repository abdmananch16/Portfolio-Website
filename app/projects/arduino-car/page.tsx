'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaArrowLeft, FaLinkedin } from 'react-icons/fa'

export default function ArduinoCarProject() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <nav className="border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/#projects"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
          >
            <FaArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-violet-500 text-sm font-mono tracking-wider mb-4">
            01. PROJECT SHOWCASE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Bluetooth-Controlled
            <br />
            <span className="text-violet-500">Arduino Car</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
            Remote-controlled car using Arduino Uno, HC-05 Bluetooth module, and L298N motor driver 
            with Android app interface for wireless control.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden border border-white/10">
            <video
              src="/arduino-car-demo.mp4"
              className="w-full h-full object-cover"
              controls
              muted
              playsInline
              preload="auto"
              onVolumeChange={(e) => {
                const video = e.target as HTMLVideoElement;
                video.muted = true;
                video.volume = 0;
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-500 text-sm text-center mt-3">
            * Video is muted (no audio)
          </p>
        </motion.div>

        {/* Project Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {/* Technical Specifications */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-violet-400 mb-6">Technical Specifications</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Microcontroller:</strong> Arduino Uno (ATmega328P)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Wireless Module:</strong> HC-05 Bluetooth Module</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Motor Driver:</strong> L298N Dual H-Bridge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Power Supply:</strong> 12V Battery Pack</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span><strong>Programming Language:</strong> C/C++ (Arduino IDE)</span>
              </li>
            </ul>
          </div>

          {/* Key Features */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-violet-400 mb-6">Key Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span>Wireless control via Android smartphone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span>Bi-directional motor control</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                <span>Custom Android app interface</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#111] border border-white/5 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-xl font-bold text-violet-400 mb-6">Project Description</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              This project demonstrates the integration of embedded systems, wireless communication, 
              and mobile application development. The car is controlled remotely via Bluetooth using 
              a custom Android application that sends commands to the Arduino microcontroller.
            </p>
            <p>
              The L298N motor driver provides the necessary power and control for the DC motors, 
              enabling forward, backward, left, and right movements. The HC-05 Bluetooth module 
              establishes a reliable wireless connection with the smartphone, allowing real-time 
              control from up to 10 meters away.
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3">
            {['Arduino', 'Bluetooth HC-05', 'L298N Driver', 'Android App', 'C/C++', 'Embedded Systems'].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-violet-600/20 text-violet-400 text-sm rounded-full border border-violet-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* View on LinkedIn Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <a
            href="https://www.linkedin.com/posts/abdul-mannan-23a0bb3a5_arduino-electricalengineering-embeddedsystems-ugcPost-7477583637329338368-KEjn/?utm_source=share&utm_medium=member_desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full transition-all"
          >
            <FaLinkedin size={20} />
            View Post on LinkedIn
          </a>
        </motion.div>
      </div>
    </div>
  )
}
