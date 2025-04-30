"use client"

import { useRef } from "react"
import { personalInfo } from "@/data/portfolio-data"
import { motion } from "framer-motion"
import TechSphere from "./3d/TechSphere"

export default function Hero() {
  const containerRef = useRef(null)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
    },
  }

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1], delay: 1.2 },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="container mx-auto px-6 z-10 relative">
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.p
              className="text-lg md:text-xl text-blue-400 mb-6 font-light tracking-wider"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              variants={itemVariants}
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 font-light"
              variants={itemVariants}
            >
              {personalInfo.title} <span className="text-blue-400">with 12+ years of experience</span>
            </motion.h2>

            <motion.div className="space-x-6" variants={buttonVariants}>
              <a href="#contact" className="btn-primary inline-block">
                Contact Me
              </a>
              <a href="#projects" className="btn-secondary inline-block">
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.165, 0.84, 0.44, 1], delay: 0.5 }}
          >
            <TechSphere />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut" }}
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="mb-2 text-sm font-light tracking-wider">Scroll Down</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </a>
      </motion.div>
    </section>
  )
}
