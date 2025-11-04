"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      className="fixed top-6 right-6 z-50 flex gap-2 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <button
        onClick={() => setLanguage("kgz")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          language === "kgz"
            ? "bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-white shadow-md"
            : "text-[#2c3e50] hover:bg-gray-100"
        }`}
      >
        KGZ
      </button>
      <button
        onClick={() => setLanguage("ru")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          language === "ru"
            ? "bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-white shadow-md"
            : "text-[#2c3e50] hover:bg-gray-100"
        }`}
      >
        RU
      </button>
    </motion.div>
  );
}

