'use client'

import { motion } from 'framer-motion'
import { careerData } from '@/data/portfolioData'

export default function Career() {
  return (
    <section id="career" className="py-14 lg:py-20 bg-[#fafbfc]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title-en mb-2">{careerData.titleEn}</h2>
          <h3 className="section-title-zh">{careerData.title}</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 max-w-4xl mx-auto">
          {careerData.cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 lg:p-6 border border-black/[0.03] shadow-sm card-hover"
            >
              <div className="text-3xl lg:text-4xl font-bold text-[#0066cc]/[0.08] mb-3">
                {card.number}
              </div>
              <h4 className="text-base font-semibold text-[#1d1d1f] mb-1.5">
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