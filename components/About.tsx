'use client'

import { motion } from 'framer-motion'
import { aboutData } from '@/data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title-en mb-2">{aboutData.titleEn}</h2>
          <h3 className="section-title-zh mb-12">{aboutData.title}</h3>

          <div className="space-y-6 text-lg text-[#1d1d1f] leading-relaxed mb-12">
            <p>{aboutData.intro}</p>
            <p>{aboutData.intro2}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {aboutData.tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-5 py-2.5 bg-[#f5f5f7] text-[#1d1d1f] rounded-full text-sm font-medium hover:bg-[#0066cc] hover:text-white transition-colors duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}