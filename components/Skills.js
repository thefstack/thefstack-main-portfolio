"use client"

import { motion } from "framer-motion"
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

  return (
    <section id="skills" className="py-32 bg-black section-transition">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
          >
            <TechStack />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div key={index} className="card p-6 shadow-lg backdrop-blur-lg" variants={itemVariants}>
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{category.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-blue-900/30 text-blue-300 px-4 py-1.5 rounded-full text-sm"
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(37, 99, 235, 0.5)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p className="mt-8 text-gray-400 text-center" variants={itemVariants}>
              With 12+ years of professional experience, I've mastered these technologies and continuously expand my
              skill set.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
