"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { projects } from "@/data/portfolio-data"
import ProjectCube from "./3d/ProjectCube"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Calculate parallax values outside the map function
  const floatingCircleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
  const floatingSquareY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  }

  return (
    <section id="projects" ref={sectionRef} className="py-32 bg-gray-900 section-transition parallax-container">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        {/* Decorative elements with parallax */}
        <motion.div className="floating-circle w-96 h-96 left-[2%] top-[30%]" style={{ y: floatingCircleY }} />
        <motion.div className="floating-square w-72 h-72 right-[5%] bottom-[5%]" style={{ y: floatingSquareY }} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card p-8 h-full flex flex-col shadow-xl backdrop-blur-lg"
              variants={itemVariants}
              whileHover={{ y: "-10px", transition: { duration: 0.3 } }}
            >
              <div className="mb-6 h-48 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <ProjectCube />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-cyan-400/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1.5 rounded-full"
                    whileHover={{
                      backgroundColor: "rgba(59, 130, 246, 0.3)",
                      scale: 1.05,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="flex space-x-6 mt-auto">
                <motion.button
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeProject === index ? "Hide Details" : "View Details"}
                </motion.button>

                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                )}

                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                )}
              </div>

              {activeProject === index && (
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="list-disc pl-6 space-y-3 text-gray-300">
                    {project.points.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
