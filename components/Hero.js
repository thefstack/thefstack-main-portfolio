"use client"

import { personalInfo } from "@/data/portfolio-data"
import TechSphere from "./3d/TechSphere"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-lg md:text-xl text-blue-400 mb-6 font-light tracking-wider">Hello, I'm</p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="gradient-text">{personalInfo.displayName}</span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-10 font-light">{personalInfo.title}</h2>

            <div className="space-x-6">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-full inline-block transition-all hover:shadow-lg hover:shadow-blue-600/30"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="bg-transparent border-2 border-white text-white font-medium py-4 px-10 rounded-full inline-block hover:bg-white/10 transition-all hover:shadow-lg"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <TechSphere />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="mb-2">Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
