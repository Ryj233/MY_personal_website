'use client'

import { motion } from 'framer-motion'
import { careerData } from '@/data/portfolioData'

export default function Career() {
  return (
    <section id="career" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title-en mb-2">{careerData.titleEn}</h2>
          <h3 className="section-title-zh">{careerData.title}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerData.cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 hover-lift group cursor-pointer"
            >
              <span className="text-5xl font-bold text-[#0066cc]/10 group-hover:text-[#0066cc]/20 transition-colors duration-300">
                {card.number}
              </span>
              <h4 className="text-xl font-semibold text-[#1d1d1f] mt-4 mb-3">
                {card.title}
              </h4>
              <p className="text-sm text-[#86868b] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}