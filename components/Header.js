"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold gradient-text"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#hero" className="flex items-center">
            <span className="text-3xl mr-1">&lt;</span>
            theFstack
            <span className="text-3xl ml-1">/&gt;</span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors relative ${
                activeSection === item.href.substring(1) ? "text-white" : "text-gray-400 hover:text-white"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {item.name}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400"
                  layoutId="navIndicator"
                />
              )}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg py-6 md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-6 px-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium transition-colors ${
                      activeSection === item.href.substring(1) ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 * index }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
