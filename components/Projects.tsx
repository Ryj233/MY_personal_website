'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { projectsData } from '@/data/portfolioData'

export default function Projects() {
  return (
    <section id="projects" className="py-14 lg:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title-en mb-2">{projectsData.titleEn}</h2>
          <h3 className="section-title-zh">{projectsData.title}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {projectsData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="bg-[#fafbfc] rounded-2xl overflow-hidden border border-black/[0.03] shadow-sm card-hover"
            >
              <div className="aspect-video bg-gradient-to-br from-[#f5f7fa] to-[#e8eaed] relative overflow-hidden">
                {project.cover ? (
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-xl bg-[#0066cc]/[0.06] flex items-center justify-center">
                      <i className="fas fa-folder-open text-[#0066cc]/40 text-lg"></i>
                    </div>
                  </div>
                )}
                {(project as { placeholder?: boolean }).placeholder && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-[#ff9500]/10 text-[#ff9500] text-[10px] font-medium rounded-full">
                    待更新
                  </span>
                )}
              </div>
              <div className="p-4 lg:p-5">
                <h4 className="text-sm font-semibold text-[#1d1d1f] mb-1.5">
                  {project.title}
                </h4>
                <p className="text-xs text-[#86868b] leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 bg-white text-[#86868b] text-xs rounded-full border border-black/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.div whileHover={{ x: 2 }}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0066cc] hover:text-[#0077ed] transition-colors"
                  >
                    查看详情
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
