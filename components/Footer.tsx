"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <footer ref={ref} className="bg-[#2c3e50] text-white py-12 sm:py-16 md:py-20">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4 sm:px-6 max-w-4xl"
      >
        <div className="text-center">
          {/* Invitation Message */}
          <p 
            className="heading-serif text-base sm:text-lg md:text-xl font-light text-white mb-3 sm:mb-4 opacity-90"
          >
            {t.footer.invitedBy}
          </p>

          {/* Parents' Names */}
          <h3 
            className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] mb-6 sm:mb-8"
          >
            {t.footer.fatherName} & {t.footer.motherName}
          </h3>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <div className="h-px w-10 sm:w-12 bg-[#d4af37]/50"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/50"></div>
            <div className="h-px w-10 sm:w-12 bg-[#d4af37]/50"></div>
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} {t.footer.gratitude}
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
