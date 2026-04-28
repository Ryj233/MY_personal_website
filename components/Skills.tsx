'use client'

import { motion } from 'framer-motion'
import { skillsData } from '@/data/portfolioData'

export default function Skills() {
  return (
    <section id="skills" className="py-14 lg:py-20 bg-[#fafbfc]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title-en mb-2">{skillsData.titleEn}</h2>
          <h3 className="section-title-zh">{skillsData.title}</h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {skillsData.modules.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-4 lg:p-5 border border-black/[0.03] shadow-sm card-hover"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0066cc]/[0.06] flex items-center justify-center mb-3">
                <i className={`fas ${skill.icon} text-[#0066cc] text-sm`}></i>
              </div>
              <h4 className="text-sm font-semibold text-[#1d1d1f] mb-1.5">
                {skill.title}
              </h4>
              <p className="text-xs text-[#86868b] leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}