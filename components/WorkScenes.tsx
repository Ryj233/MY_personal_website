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
      <section id="scenes" className="py-24 lg:py-32 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="section-title-en mb-2">{workScenesData.titleEn}</h2>
            <h3 className="section-title-zh">{workScenesData.title}</h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {workScenesData.images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                onClick={() => {
                  setSelectedImage(image.src)
                  setSelectedAlt(image.title)
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f5f5f7] to-[#e5e5e5] flex items-center justify-center">
                  <i className="fas fa-image text-4xl text-[#c7c7cc] group-hover:scale-110 transition-transform duration-500"></i>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={false}
                >
                  <p className="font-medium text-white text-sm lg:text-base">
                    {image.title}
                  </p>
                  <p className="text-xs text-white/70 mt-1">{image.tag}</p>
                </motion.div>
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  style={{ originX: 0.5, originY: 0.5 }}
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