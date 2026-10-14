'use client'

import { motion } from 'framer-motion'
import { heroData } from '@/data/portfolioData'

export default function Hero() {
  return (
    <section className="min-h-screen bg-transparent pt-16">
      <div className="section-container w-full py-4 px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[280px] md:max-w-xs lg:max-w-sm lg:hidden"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/6 to-[#0077ed]/6 rounded-[24px] blur-lg" />
              <motion.div
                className="relative w-full h-full"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden shadow-md">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="w-full text-center lg:text-left mt-4 lg:mt-0"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1d1d1f] mb-2 tracking-tight">
              {heroData.name}
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#0066cc] mb-2 font-medium">
              {heroData.title}
            </p>
            <p className="text-sm md:text-base text-[#6e6e73] mb-2 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {heroData.tagline}
            </p>
            <p className="text-xs text-[#86868b] mb-4 tracking-wider uppercase font-en">
              {heroData.subtitle}
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
              {heroData.badges.map((badge, index) => (
                <motion.span
                  key={index}
                  className="badge-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  {badge.value}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {heroData.buttons.map((btn, index) => (
                <motion.a
                  key={index}
                  href={btn.href}
                  {...('download' in btn && btn.download ? { download: true } : {})}
                  className={'download' in btn && btn.download ? 'btn-secondary-sm' : 'btn-primary-sm'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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
            className="hidden lg:block w-full max-w-md xl:max-w-lg"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/8 to-[#0077ed]/8 rounded-[32px] blur-2xl" />
              <motion.div
                className="relative w-full h-full"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-full h-full rounded-[32px] overflow-hidden shadow-lg">
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