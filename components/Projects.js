"use client"

import { useState } from "react"
import { projects } from "@/data/portfolio-data"
import ProjectCube from "./3d/ProjectCube"

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="py-32 bg-gray-900 section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {projects.map((project, index) => (
            <div key={index} className="card p-8 h-full flex flex-col shadow-xl backdrop-blur-lg">
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
                  <span key={idx} className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-6 mt-auto">
                <button
                  onClick={() => setActiveProject(activeProject === index ? null : index)}
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  {activeProject === index ? "Hide Details" : "View Details"}
                </button>

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    Live Demo
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                  >
                    GitHub
                  </a>
                )}
              </div>

              {activeProject === index && (
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <ul className="list-disc pl-6 space-y-3 text-gray-300">
                    {project.points.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
