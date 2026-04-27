'use client'

import { motion } from 'framer-motion'
import { contactData } from '@/data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#fafafa]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="section-title-en mb-2">{contactData.titleEn}</h2>
          <h3 className="section-title-zh mb-6">{contactData.title}</h3>
          <p className="text-[#86868b] text-lg mb-12">
            {contactData.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href={`mailto:${contactData.email}`}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope mr-2"></i>
              邮箱联系
            </motion.a>
            <motion.a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </motion.a>
            <motion.a
              href={contactData.cvUrl}
              download
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i>
              下载简历
            </motion.a>
          </div>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg text-[#86868b] hover:text-[#0066cc] hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-arrow-up"></i>
          </motion.button>
          <p className="text-xs text-[#86868b] mt-4">返回顶部</p>
        </motion.div>
      </div>
    </section>
  )
}