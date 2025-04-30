"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { personalInfo } from "@/data/portfolio-data"

export default function About() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-gray-900 section-transition parallax-container">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Decorative elements with parallax */}
        <motion.div
          className="floating-circle w-72 h-72 left-[5%] top-[20%]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]) }}
        />
        <motion.div
          className="floating-square w-56 h-56 right-[10%] bottom-[10%]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]) }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ y: y1 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg overflow-hidden shadow-xl shadow-blue-600/20">
                <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold">
                  {personalInfo.displayName.substring(0, 2).toUpperCase()}
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ y: y2 }}
          >
            <h3 className="text-3xl font-semibold mb-6 gradient-text">Full Stack Developer</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              I'm a passionate Full Stack Developer with experience in building web applications using modern
              technologies. I specialize in JavaScript, React, Next.js, Node.js, and more. I'm dedicated to creating
              efficient, scalable, and user-friendly solutions.
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

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-block transition-all hover:shadow-lg hover:shadow-blue-600/30"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
