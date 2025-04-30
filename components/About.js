"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/portfolio-data"

export default function About() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.165, 0.84, 0.44, 1] },
    },
  }

  return (
    <section id="about" className="py-32 bg-gray-900 section-transition">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl overflow-hidden shadow-xl shadow-blue-600/20 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold opacity-30">
                  {personalInfo.name.substring(0, 2).toUpperCase()}
                </div>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold mb-4 text-white">12+ Years</h3>
                    <p className="text-xl text-white/80">Professional Experience</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-semibold mb-6 gradient-text">Senior Full Stack Developer</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              With over 12 years of experience in the industry, I've mastered the art of building scalable,
              high-performance web applications. My expertise spans the entire development lifecycle, from
              conceptualization and architecture to deployment and maintenance. I specialize in creating elegant
              solutions to complex problems, with a focus on user experience and code quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="card p-4">
                <p className="text-gray-400 text-sm">Name:</p>
                <p className="text-white font-medium">{personalInfo.displayName}</p>
              </div>
              <div className="card p-4">
                <p className="text-gray-400 text-sm">Email:</p>
                <p className="text-white font-medium">{personalInfo.email}</p>
              </div>
              <div className="card p-4">
                <p className="text-gray-400 text-sm">Location:</p>
                <p className="text-white font-medium">{personalInfo.location}</p>
              </div>
              <div className="card p-4">
                <p className="text-gray-400 text-sm">Availability:</p>
                <p className="text-white font-medium">{personalInfo.availability}</p>
              </div>
            </div>

            <motion.a
              href="#contact"
              className="btn-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
