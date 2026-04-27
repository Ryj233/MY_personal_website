'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title-en mb-2">{skillsData.titleEn}</h2>
          <h3 className="section-title-zh">{skillsData.title}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 text-center hover-lift group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#0066cc]/10 to-[#0077ed]/10 flex items-center justify-center group-hover:from-[#0066cc]/20 group-hover:to-[#0077ed]/20 transition-all duration-300">
                <i className={`fas ${module.icon} text-2xl text-[#0066cc]`}></i>
              </div>
              <h4 className="text-lg font-semibold text-[#1d1d1f] mb-3">
                {module.title}
              </h4>
              <p className="text-sm text-[#86868b] leading-relaxed">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}