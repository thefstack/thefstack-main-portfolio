"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { skills } from "@/data/portfolio-data"
import TechStack from "./3d/TechStack"

export default function Skills() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"])

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillCategories = [
    { name: "Languages", items: skills.languages },
    { name: "Frameworks", items: skills.frameworks },
    { name: "Databases", items: skills.databases },
    { name: "Tools", items: skills.tools },
    { name: "Other", items: skills.other },
    { name: "Soft Skills", items: skills.soft },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-32 bg-black section-transition parallax-container">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-16 text-center section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        {/* Decorative elements with parallax */}
        <motion.div
          className="floating-circle w-80 h-80 left-[8%] top-[15%]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]) }}
        />
        <motion.div
          className="floating-square w-64 h-64 right-[5%] bottom-[25%]"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]) }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ y: y1 }}
          >
            <TechStack />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ y: y2 }}
          >
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="card p-6 shadow-lg backdrop-blur-lg"
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-xl font-semibold mb-4 gradient-text">{category.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {category.items.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        className="bg-blue-900/30 text-blue-300 px-4 py-1.5 rounded-full text-sm"
                        whileHover={{
                          backgroundColor: "rgba(59, 130, 246, 0.3)",
                          scale: 1.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
