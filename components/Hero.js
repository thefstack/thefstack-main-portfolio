"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { personalInfo } from "@/data/portfolio-data"
import TechSphere from "./3d/TechSphere"

export default function Hero() {
  const sectionRef = useRef(null)

  // Parallax effect with framer-motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  // Text animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Decorative elements with parallax */}
      <motion.div
        className="floating-circle w-[600px] h-[600px] left-[-10%] top-[10%] opacity-30"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]) }}
      />
      <motion.div
        className="floating-square w-[400px] h-[400px] right-[-5%] bottom-[20%] opacity-30"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]) }}
      />

      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-center lg:text-left" style={{ y, opacity, scale }}>
            <motion.p
              className="text-lg md:text-xl text-blue-400 mb-6 font-light tracking-wider"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              <span className="gradient-text">{personalInfo.displayName}</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 font-light"
              custom={3}
              initial="hidden"
              animate="visible"
              variants={titleVariants}
            >
              {personalInfo.title}
            </motion.h2>

            <motion.div custom={4} initial="hidden" animate="visible" variants={titleVariants} className="space-x-6">
              <motion.a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-full inline-block transition-all hover:shadow-lg hover:shadow-blue-600/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="bg-transparent border-2 border-white text-white font-medium py-4 px-10 rounded-full inline-block hover:bg-white/10 transition-all hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
              opacity: useTransform(scrollYProgress, [0, 0.8], [1, 0.3]),
            }}
            className="hidden lg:block"
          >
            <TechSphere />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
        >
          <span className="mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  )
}
