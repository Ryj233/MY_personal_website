'use client'

import { motion } from 'framer-motion'
import { projectsData } from '@/data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title-en mb-2">{projectsData.titleEn}</h2>
          <h3 className="section-title-zh">{projectsData.title}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#f5f5f7] to-[#e5e5e5] aspect-video mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <i className="fas fa-folder-open text-5xl text-[#c7c7cc] group-hover:scale-110 transition-transform duration-500"></i>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h4 className="text-lg font-semibold text-[#1d1d1f] mb-3 group-hover:text-[#0066cc] transition-colors duration-300">
                {project.title}
              </h4>
              <p className="text-sm text-[#86868b] leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-[#f5f5f7] text-[#86868b] text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#0066cc] hover:text-[#0077ed] transition-colors duration-300"
                whileHover={{ x: 4 }}
              >
                查看详情
                <i className="fas fa-arrow-right text-xs"></i>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}