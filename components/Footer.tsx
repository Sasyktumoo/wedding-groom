"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, fadeInUp } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <footer ref={ref} className="relative bg-gradient-to-b from-[#2c3e50] via-[#1e2d3d] to-[#0f1419] text-white py-16 sm:py-20 md:py-28 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle sparkling dots */}
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#d4af37]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            style={{
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl"
      >
        <div className="text-center">
          {/* Top Decorative Border */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]"></div>
            <motion.div 
              className="relative"
              animate={inView ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-3 h-3 rotate-45 bg-[#d4af37]"></div>
            </motion.div>
            <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]"></div>
          </motion.div>

          {/* Invitation Message */}
          <motion.p 
            variants={fadeInUp}
            className="heading-serif text-lg sm:text-xl md:text-2xl font-light text-white/90 mb-8 sm:mb-10 tracking-wide"
          >
            {t.footer.invitedBy}
          </motion.p>

          {/* Decorative Frame for Parents' Names */}
          <motion.div
            className="relative max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            variants={fadeInUp}
          >
            {/* Corner decorations */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#d4af37]/50"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#d4af37]/50"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#d4af37]/50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#d4af37]/50"></div>

            {/* Parents' Names */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl py-10 sm:py-12 md:py-16 px-6 sm:px-8 border border-[#d4af37]/20">
              <h3 
                className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight"
              >
                {t.footer.fatherName}
                <span className="text-white/40 mx-3 sm:mx-4">&</span>
                {t.footer.motherName}
              </h3>
            </div>
          </motion.div>

          {/* Bottom Decorative Divider */}
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
            variants={fadeInUp}
          >
            <div className="h-px w-16 sm:w-20 bg-gradient-to-r from-transparent to-[#d4af37]/60"></div>
            <div className="flex gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/60"></div>
            </div>
            <div className="h-px w-16 sm:w-20 bg-gradient-to-l from-transparent to-[#d4af37]/60"></div>
          </motion.div>

          {/* Gratitude Message */}
          <motion.p 
            className="text-sm sm:text-base text-white/60 font-light tracking-wider"
            variants={fadeInUp}
          >
            {t.footer.gratitude}
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom elegant fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent z-0" />
    </footer>
  );
}
