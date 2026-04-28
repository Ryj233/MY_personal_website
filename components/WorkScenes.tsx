'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { workScenesData } from '@/data/portfolioData'
import ImageModal from './ImageModal'

export default function WorkScenes() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState('')

  return (
    <>
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
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => {
                  setSelectedImage(image.src)
                  setSelectedAlt(image.title)
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7fa] to-[#e8eaed]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-lg bg-[#0066cc]/[0.06] flex items-center justify-center">
                    <i className="fas fa-image text-[#86868b]/50 text-sm"></i>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="font-medium text-white text-sm">
                    {image.title}
                  </p>
                  <p className="text-xs text-white/70 mt-0.5">{image.tag}</p>
                </div>
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        src={selectedImage || ''}
        alt={selectedAlt}
      />
    </>
  )
}