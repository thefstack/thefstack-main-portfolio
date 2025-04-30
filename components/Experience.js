"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { experience } from "@/data/portfolio-data"

export default function Experience() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Calculate parallax values outside the map function
  const floatingCircleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])
  const floatingSquareY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  const jobMotionY = experience.map((job, index) =>
    useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? "10%" : "5%", index % 2 === 0 ? "-10%" : "-5%"]),
  )

  return (
    <section id="experience" ref={sectionRef} className="py-32 bg-black section-transition parallax-container">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        {/* Decorative elements with parallax */}
        <motion.div className="floating-circle w-80 h-80 right-[5%] top-[10%]" style={{ y: floatingCircleY }} />
        <motion.div className="floating-square w-64 h-64 left-[8%] bottom-[20%]" style={{ y: floatingSquareY }} />

        <div className="max-w-4xl mx-auto relative z-10">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="mb-16 relative pl-12 border-l-2 border-blue-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                y: jobMotionY[index],
              }}
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-blue-600 shadow-lg shadow-blue-600/50"></div>

              <div className="card p-8 shadow-xl backdrop-blur-lg">
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <h4 className="text-blue-400 mb-3">{job.company}</h4>
                <p className="text-gray-400 mb-6 inline-block px-4 py-1 bg-gray-800/50 rounded-full text-sm">
                  {job.period}
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>

                <h5 className="text-lg font-medium mb-4 gradient-text">Key Responsibilities:</h5>
                <ul className="list-disc pl-6 space-y-3 text-gray-300">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
