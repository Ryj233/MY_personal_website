'use client'

import { motion } from 'framer-motion'
import { aboutData } from '@/data/portfolioData'

export default function About() {
  return (
    <section id="about" className="py-14 lg:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title-en mb-2">{aboutData.titleEn}</h2>
          <h3 className="section-title-zh">{aboutData.title}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center px-2"
        >
          <p className="text-base text-[#6e6e73] leading-relaxed mb-3">
            {aboutData.intro}
          </p>
          <p className="text-sm text-[#86868b] leading-relaxed mb-6">
            {aboutData.intro2}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {aboutData.tags.map((tag, index) => (
              <motion.span
                key={index}
                className="tag-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
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