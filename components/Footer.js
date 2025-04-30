"use client"

import { motion } from "framer-motion"
import { personalInfo } from "@/data/portfolio-data"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12 text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <motion.div
              className="text-2xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl mr-1">&lt;</span>
              theFstack
              <span className="text-3xl ml-1">/&gt;</span>
            </motion.div>
            <motion.p
              className="text-gray-400 mb-6 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              Crafting digital experiences with passion. I specialize in creating user-friendly websites and
              applications.
            </motion.p>
          </div>

          <div>
            <motion.h4
              className="font-semibold text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Links
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <li className="mb-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li className="mb-2">
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </motion.ul>
          </div>

          <div>
            <motion.h4
              className="font-semibold text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Social
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <li className="mb-2">
                <a
                  href={`https://${personalInfo.links.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <a
                  href={`https://${personalInfo.links.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  Email
                </a>
              </li>
            </motion.ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8">
          <motion.p
            className="text-gray-500 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            &copy; {currentYear} theFstack. All rights reserved.
          </motion.p>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">
              Terms
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

\
Let's update the Experience component for a more professional look:
