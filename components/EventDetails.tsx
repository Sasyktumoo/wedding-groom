"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  fadeInUp,
  staggerContainer,
  floatIn,
  revealFromCenter,
  staggerContainerFast,
} from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function EventDetails() {
  const { t } = useLanguage();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Detect mobile for performance optimization
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for background image (reduced on mobile for performance)
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "5%"] : ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div
        style={isMobile ? {} : { y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />
        <Image
          src="/images/sunset.png"
          alt="Beautiful sunset venue"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
          quality={isMobile ? 75 : 90}
          loading="lazy"
        />
      </motion.div>

      {/* Content */}
      <div ref={ref} className="relative z-20 container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12 sm:space-y-16 md:space-y-20"
        >
          {/* Header Section */}
          <motion.div variants={fadeInUp} className="text-center">
            {/* Ornamental Line */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.div
                className="h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-2 h-2 rotate-45 bg-[#d4af37]"
              />
              <motion.div
                className="h-px bg-gradient-to-l from-transparent via-[#d4af37] to-transparent"
                initial={{ width: 0 }}
                animate={inView ? { width: "80px" } : { width: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Main Details Grid - 2 Cards */}
          <motion.div
            variants={staggerContainer}
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
          >
            {/* Card 1: Date & Time */}
            <motion.div
              variants={floatIn}
              className="bg-black/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl"
            >
              <div className="text-center">
                {/* Calendar Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4d03f] shadow-xl mb-4 sm:mb-6 border-3 sm:border-4 border-white/20">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 
                  className="heading-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 sm:mb-6"
                >
                  {t.eventDetails.saveTheDate}
                </h3>

                {/* Date */}
                <p 
                  className="text-xl sm:text-2xl md:text-3xl font-light text-white tracking-wide mb-3 sm:mb-4"
                >
                  {t.eventDetails.dateFull}
                </p>

                {/* Time */}
                <p 
                  className="text-lg sm:text-xl md:text-2xl font-normal text-white mb-0 opacity-90"
                >
                  {t.eventDetails.time}
                </p>
              </div>
            </motion.div>

            {/* Card 2: Venue */}
            <motion.div
              variants={floatIn}
              className="bg-black/60 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl"
            >
              <div className="text-center">
                {/* Location Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#d4af37] to-[#f4d03f] shadow-xl mb-4 sm:mb-6 border-3 sm:border-4 border-white/20">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                {/* Venue Name */}
                <h3 
                  className="heading-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-4 sm:mb-6"
                >
                  {t.eventDetails.venue}
                </h3>

                {/* Address */}
                <p 
                  className="text-lg sm:text-xl md:text-2xl font-light text-white mb-2 sm:mb-3"
                >
                  {t.eventDetails.venueName}
                </p>

                {/* City/State */}
                <p 
                  className="text-base sm:text-lg md:text-xl font-normal text-white mb-0 opacity-90"
                >
                  {t.eventDetails.venueAddress}
                </p>
              </div>
            </motion.div>
          </motion.div>


        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#faf9f6] to-transparent z-10" />
    </section>
  );
}

