'use client'

import { motion } from 'framer-motion'
import { workScenesData } from '@/data/portfolioData'

export default function WorkScenes() {
  return (
    <section id="scenes" className="py-14 lg:py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title-en mb-2">{workScenesData.titleEn}</h2>
          <h3 className="section-title-zh">{workScenesData.title}</h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {workScenesData.images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="relative aspect-square rounded-2xl overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                <p className="font-semibold text-white text-sm lg:text-base drop-shadow">
                  {image.title}
                </p>
                <p className="text-[10px] lg:text-xs text-white/80 mt-0.5 font-en tracking-wide">
                  {image.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
