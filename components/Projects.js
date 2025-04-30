"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "@/data/portfolio-data"
import ProjectCube from "./3d/ProjectCube"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)
  const [filter, setFilter] = useState("all")

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) => tech.toLowerCase().includes(filter.toLowerCase())),
        )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.165, 0.84, 0.44, 1] },
    },
  }

  const filters = ["all", "React", "Next.js", "Node.js", "MongoDB"]

  return (
    <section id="projects" className="py-32 bg-gray-900 section-transition">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filterName) => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === filterName
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {filterName === "all" ? "All Projects" : filterName}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="card p-8 h-full flex flex-col shadow-xl backdrop-blur-lg"
              variants={itemVariants}
            >
              <div className="mb-6 h-48 bg-gradient-to-br from-blue-600/20 to-cyan-400/20 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <ProjectCube />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-cyan-400/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-6 mt-auto">
                <motion.button
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeProject === index ? "Hide Details" : "View Details"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ml-1 transition-transform ${activeProject === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>

                {project.demoLink && (
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                )}

                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.a>
                )}
              </div>

              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-700"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
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
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
