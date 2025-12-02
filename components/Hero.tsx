"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import TypewriterText from "./TypewriterText";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  showIntro?: boolean;
}

export default function Hero({ showIntro = false }: HeroProps) {
  const [textStage, setTextStage] = useState(0);
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-[#faf8f3] via-[#f5f3ed] to-[#faf8f3]">
      
      {/* Animated Golden Flowers in Corners */}
      <div className="absolute inset-0">
        {/* Top Left Corner - Animated Flower */}
        <motion.div 
          className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-50"
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1, 1.05, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <g stroke="#d4af37" fill="none" strokeWidth="0.8">
              {/* Flower petals */}
              <ellipse cx="30" cy="25" rx="8" ry="12" transform="rotate(-20 30 25)" opacity="0.6"/>
              <ellipse cx="45" cy="20" rx="8" ry="12" transform="rotate(0 45 20)" opacity="0.6"/>
              <ellipse cx="38" cy="35" rx="8" ry="12" transform="rotate(45 38 35)" opacity="0.6"/>
              {/* Center */}
              <circle cx="38" cy="25" r="3" fill="#d4af37" opacity="0.4"/>
              {/* Leaves */}
              <path d="M35,35 Q30,45 28,55" opacity="0.5"/>
              <ellipse cx="25" cy="52" rx="5" ry="10" transform="rotate(-30 25 52)" opacity="0.5"/>
            </g>
          </svg>
        </motion.div>

        {/* Top Right Corner - Animated Flower */}
        <motion.div 
          className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-50"
          animate={{ 
            rotate: [0, -5, 0, 5, 0],
            scale: [1, 1.05, 1, 1.05, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full transform scale-x-[-1]">
            <g stroke="#d4af37" fill="none" strokeWidth="0.8">
              <ellipse cx="30" cy="25" rx="8" ry="12" transform="rotate(-20 30 25)" opacity="0.6"/>
              <ellipse cx="45" cy="20" rx="8" ry="12" transform="rotate(0 45 20)" opacity="0.6"/>
              <ellipse cx="38" cy="35" rx="8" ry="12" transform="rotate(45 38 35)" opacity="0.6"/>
              <circle cx="38" cy="25" r="3" fill="#d4af37" opacity="0.4"/>
              <path d="M35,35 Q30,45 28,55" opacity="0.5"/>
              <ellipse cx="25" cy="52" rx="5" ry="10" transform="rotate(-30 25 52)" opacity="0.5"/>
            </g>
          </svg>
        </motion.div>

        {/* Bottom Left Corner - Animated Flower */}
        <motion.div 
          className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 md:bottom-16 md:left-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-50"
          animate={{ 
            rotate: [0, 5, 0, -5, 0],
            scale: [1, 1.05, 1, 1.05, 1]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full transform scale-y-[-1]">
            <g stroke="#d4af37" fill="none" strokeWidth="0.8">
              <ellipse cx="30" cy="25" rx="8" ry="12" transform="rotate(-20 30 25)" opacity="0.6"/>
              <ellipse cx="45" cy="20" rx="8" ry="12" transform="rotate(0 45 20)" opacity="0.6"/>
              <ellipse cx="38" cy="35" rx="8" ry="12" transform="rotate(45 38 35)" opacity="0.6"/>
              <circle cx="38" cy="25" r="3" fill="#d4af37" opacity="0.4"/>
              <path d="M35,35 Q30,45 28,55" opacity="0.5"/>
              <ellipse cx="25" cy="52" rx="5" ry="10" transform="rotate(-30 25 52)" opacity="0.5"/>
            </g>
          </svg>
        </motion.div>

        {/* Bottom Right Corner - Animated Flower */}
        <motion.div 
          className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-50"
          animate={{ 
            rotate: [0, -5, 0, 5, 0],
            scale: [1, 1.05, 1, 1.05, 1]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 3
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full transform rotate-180">
            <g stroke="#d4af37" fill="none" strokeWidth="0.8">
              <ellipse cx="30" cy="25" rx="8" ry="12" transform="rotate(-20 30 25)" opacity="0.6"/>
              <ellipse cx="45" cy="20" rx="8" ry="12" transform="rotate(0 45 20)" opacity="0.6"/>
              <ellipse cx="38" cy="35" rx="8" ry="12" transform="rotate(45 38 35)" opacity="0.6"/>
              <circle cx="38" cy="25" r="3" fill="#d4af37" opacity="0.4"/>
              <path d="M35,35 Q30,45 28,55" opacity="0.5"/>
              <ellipse cx="25" cy="52" rx="5" ry="10" transform="rotate(-30 25 52)" opacity="0.5"/>
            </g>
          </svg>
        </motion.div>
      </div>
      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial={showIntro ? { opacity: 0, y: 20 } : "hidden"}
        animate={showIntro ? { opacity: 1, y: 0 } : "visible"}
        transition={showIntro ? { duration: 1.5, delay: 0.5, ease: "easeOut" } : {}}
        className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl"
      >
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Text Content - Centered */}
          <div className="px-2 sm:px-0">
            {/* Invitation Title */}
            <motion.div 
              variants={!showIntro ? fadeInUp : undefined}
              initial={showIntro ? { opacity: 0 } : undefined}
              animate={showIntro ? { opacity: 1 } : undefined}
              transition={showIntro ? { delay: 1.0, duration: 0.5 } : undefined}
              className="mb-6 sm:mb-8"
            >
              {showIntro ? (
                <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-0 font-semibold tracking-wider uppercase">
                  <TypewriterText 
                    text={t.hero.intro} 
                    delay={1000}
                    speed={80}
                    onComplete={() => setTextStage(1)}
                  />
                </h2>
              ) : (
                <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-[#2c3e50] mb-0 font-semibold tracking-wider uppercase">
                  {t.hero.intro}
                </h2>
              )}
            </motion.div>

            {/* Invitation Greeting */}
            {(!showIntro || textStage >= 1) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6"
              >
                {showIntro ? (
                  <p className="heading-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#2c3e50] mb-0 tracking-wide">
                    <TypewriterText 
                      text={t.hero.greeting} 
                      delay={300}
                      speed={80}
                      onComplete={() => setTextStage(2)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-xl sm:text-2xl md:text-3xl font-medium text-[#2c3e50] mb-0 tracking-wide">
                    {t.hero.greeting}
                  </p>
                )}
              </motion.div>
            )}

            {/* Invitation Message */}
            {(!showIntro || textStage >= 2) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    <TypewriterText 
                      text={t.hero.invitation} 
                      delay={300}
                      speed={40}
                      onComplete={() => setTextStage(3)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    {t.hero.invitation}
                  </p>
                )}
              </motion.div>
            )}

            {/* Names */}
            {(!showIntro || textStage >= 3) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                {showIntro ? (
                  <h1 className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight">
                    <TypewriterText 
                      text={`${t.hero.groomName} ${t.hero.ampersand} ${t.hero.brideName}`} 
                      delay={300}
                      speed={100}
                      onComplete={() => setTextStage(t.hero.weddingText ? 4 : 5)}
                    />
                  </h1>
                ) : (
                  <h1 className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight">
                    {t.hero.groomName} {t.hero.ampersand} {t.hero.brideName}
                  </h1>
                )}
              </motion.div>
            )}

            {/* Wedding Text (continuation after names) */}
            {t.hero.weddingText && (!showIntro || textStage >= 4) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-4 sm:mb-6 md:mb-8"
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    <TypewriterText 
                      text={t.hero.weddingText} 
                      delay={300}
                      speed={40}
                      onComplete={() => setTextStage(5)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide">
                    {t.hero.weddingText}
                  </p>
                )}
              </motion.div>
            )}

            {/* Divider */}
            {(!showIntro || textStage >= 5) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0, scaleX: 0 } : undefined}
                animate={showIntro ? { opacity: 1, scaleX: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.8 } : undefined}
                className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                onAnimationComplete={() => showIntro && setTextStage(6)}
              >
                <div className="h-px w-16 sm:w-24 bg-[#d4af37]"></div>
                <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                <div className="h-px w-16 sm:w-24 bg-[#d4af37]"></div>
              </motion.div>
            )}

            {/* Closing Message */}
            {(!showIntro || textStage >= 6) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide italic">
                    <TypewriterText 
                      text={t.hero.honor} 
                      delay={300}
                      speed={35}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl font-normal text-[#2c3e50] leading-relaxed mb-0 tracking-wide italic">
                    {t.hero.honor}
                  </p>
                )}
              </motion.div>
            )}

          </div>

        </div>
      </motion.div>
    </section>
  );
}

