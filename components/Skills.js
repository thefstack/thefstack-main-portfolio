"use client"

import { skills } from "@/data/portfolio-data"
import TechStack from "./3d/TechStack"

export default function Skills() {
  const skillCategories = [
    { name: "Languages", items: skills.languages },
    { name: "Frameworks", items: skills.frameworks },
    { name: "Databases", items: skills.databases },
    { name: "Tools", items: skills.tools },
    { name: "Other", items: skills.other },
    { name: "Soft Skills", items: skills.soft },
  ]

  return (
    <section id="skills" className="py-32 bg-black section-transition">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="flex justify-center">
            <TechStack />
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div key={index} className="card p-6 shadow-lg backdrop-blur-lg">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{category.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, idx) => (
                      <span key={idx} className="bg-blue-900/30 text-blue-300 px-4 py-1.5 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
