'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { navData } from '@/data/portfolioData'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['about', 'career', 'scenes', 'skills', 'projects', 'contact']
      const sectionElements = sections.map((id) => document.getElementById(id))

      const scrollPosition = window.scrollY + 200

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="text-lg font-semibold text-[#1d1d1f] hover:text-[#0066cc] transition-colors">
            {navData.brand}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navData.links.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 relative group ${
                    isActive ? 'text-[#0066cc]' : 'text-[#86868b] hover:text-[#0066cc]'
                  }`}
                >
                  {link.text}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#0066cc] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          <button className="md:hidden text-[#1d1d1f]">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </motion.nav>
  )
}