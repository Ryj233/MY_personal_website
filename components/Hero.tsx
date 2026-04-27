'use client'

import { motion } from 'framer-motion'
import { heroData } from '@/data/portfolioData'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#fafafa] pt-20">
      <div className="section-container w-full py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-[#1d1d1f] mb-3 leading-tight">
              {heroData.name}
            </h1>
            <p className="text-xl lg:text-2xl text-[#0066cc] mb-6 font-medium">
              {heroData.title}
            </p>
            <p className="text-lg lg:text-xl text-[#1d1d1f] mb-4 leading-relaxed">
              {heroData.tagline}
            </p>
            <p className="text-sm text-[#86868b] mb-8 tracking-wide">
              {heroData.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              {heroData.buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  href={btn.href}
                  download={btn.download}
                  className={btn.download ? 'btn-secondary' : 'btn-primary'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  {btn.text}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/10 to-[#0077ed]/10 rounded-[40px] blur-3xl" />
              <motion.div
                className="relative w-full h-full"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ background: 'transparent' }}
                  >
                    <source src={heroData.videoUrl} type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}