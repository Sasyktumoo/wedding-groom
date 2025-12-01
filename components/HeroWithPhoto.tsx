"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn, scaleIn } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroWithPhoto() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2c3e50] via-[#34495e] to-[#2c3e50]">
      {/* Full-screen photo */}
      <motion.div 
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/main photo.jpg"
          alt="Wedding invitation"
          fill
          priority
          className="object-cover opacity-40"
          quality={90}
          sizes="100vw"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </motion.div>

      {/* Content overlay */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 text-center"
      >
        {/* Names - Large and elegant */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="heading-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#d4af37] mb-12 sm:mb-16 leading-tight"
          style={{
            textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.7), 2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8)',
            WebkitTextStroke: '1px rgba(0,0,0,0.3)'
          }}
        >
          {t.hero.groomName} & {t.hero.brideName}
        </motion.h1>

        {/* Decorative divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12 sm:mb-16"
        >
          <div className="h-px w-16 sm:w-24 bg-[#d4af37]"></div>
          <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
          <div className="h-px w-16 sm:w-24 bg-[#d4af37]"></div>
        </motion.div>

        {/* Minimal event details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Date */}
          <div className="text-white">
            <p 
              className="heading-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-wider"
              style={{
                textShadow: '0 0 15px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8)'
              }}
            >
              {t.eventDetails.dateFull}
            </p>
          </div>

          {/* Time */}
          <div className="text-white/90">
            <p 
              className="body-text text-lg sm:text-xl md:text-2xl font-light tracking-wide"
              style={{
                textShadow: '0 0 15px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8)'
              }}
            >
              {t.eventDetails.time}
            </p>
            <p 
              className="body-text text-lg sm:text-xl md:text-2xl font-light tracking-wide mt-2"
              style={{
                textShadow: '0 0 15px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8)'
              }}
            >
              {t.eventDetails.time2}
            </p>
          </div>

          {/* Venue */}
          <div className="text-white/90">
            <p 
              className="body-text text-lg sm:text-xl md:text-2xl font-light tracking-wide"
              style={{
                textShadow: '0 0 15px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8)'
              }}
            >
              {t.eventDetails.venueName}
            </p>
            <p 
              className="body-text text-base sm:text-lg md:text-xl font-light tracking-wide mt-2"
              style={{
                textShadow: '0 0 15px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.8)'
              }}
            >
              {t.eventDetails.venueAddress}
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-[#d4af37]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

