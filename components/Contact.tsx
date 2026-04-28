'use client'

import { motion } from 'framer-motion'
import { contactData, footerData } from '@/data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="py-14 lg:py-20 bg-[#fafbfc]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title-en mb-2">{contactData.titleEn}</h2>
          <h3 className="section-title-zh">{contactData.title}</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-base text-[#6e6e73] mb-1.5">
            {contactData.subtitle}
          </p>
          <p className="text-sm text-[#86868b] mb-6">
            {contactData.subtitle2}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              href={`mailto:${contactData.email}`}
              className="btn-primary"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-envelope mr-2 text-sm"></i>
              邮箱联系
            </motion.a>
            <motion.a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fab fa-github mr-2 text-sm"></i>
              GitHub
            </motion.a>
            <motion.a
              href={contactData.cvUrl}
              download
              className="btn-secondary"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="fas fa-download mr-2 text-sm"></i>
              下载简历
            </motion.a>
          </div>

          <div className="mt-12 pt-8 border-t border-black/[0.03]">
            <p className="text-sm text-[#6e6e73] font-medium">
              {footerData.copyright}
            </p>
            <p className="text-xs text-[#86868b] mt-1 font-en">
              {footerData.subtitle}
            </p>
            <p className="text-xs text-[#86868b]/60 mt-2 font-en">
              {footerData.tagline}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}