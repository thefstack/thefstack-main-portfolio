"use client"

import { experience } from "@/data/portfolio-data"

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading">Work Experience</h2>

        <div className="max-w-4xl mx-auto relative z-10">
          {experience.map((job, index) => (
            <div key={index} className="mb-16 relative pl-12 border-l-2 border-blue-600">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
