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
          <p className="text-base text-[#6e6e73] leading-relaxed mb-4">
            {aboutData.intro}
          </p>
          <ul className="text-left max-w-xl mx-auto mb-6 space-y-2">
            {aboutData.points.map((point, index) => (
              <motion.li
                key={index}
                className="text-sm text-[#6e6e73] leading-relaxed flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0066cc]/60 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
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