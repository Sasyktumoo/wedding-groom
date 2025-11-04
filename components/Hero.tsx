"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
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
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#faf9f6] via-[#f5f4f1] to-[#faf9f6]">
      <motion.div
        variants={staggerContainer}
        initial={showIntro ? { opacity: 0, y: 20 } : "hidden"}
        animate={showIntro ? { opacity: 1, y: 0 } : "visible"}
        transition={showIntro ? { duration: 1.5, delay: 0.5, ease: "easeOut" } : {}}
        className="container mx-auto px-4 sm:px-6 max-w-7xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Photo */}
          <motion.div 
            variants={scaleIn}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-sm sm:max-w-md lg:max-w-lg mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white/50">
              <Image
                src="/images/main photo.jpg"
                alt="Our proposal moment"
                fill
                priority
                className="object-cover"
                quality={95}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left px-2 sm:px-0">
            {/* Invitation Greeting */}
            <motion.div 
              variants={!showIntro ? fadeInUp : undefined}
              initial={showIntro ? { opacity: 0 } : undefined}
              animate={showIntro ? { opacity: 1 } : undefined}
              transition={showIntro ? { delay: 1.5, duration: 0.5 } : undefined}
              className="mb-6 sm:mb-8"
            >
              {showIntro ? (
                <p className="heading-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#2c3e50] mb-0 tracking-wide">
                  <TypewriterText 
                    text={t.hero.greeting} 
                    delay={1500}
                    speed={80}
                    onComplete={() => setTextStage(1)}
                  />
                </p>
              ) : (
                <p className="heading-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#2c3e50] mb-0 tracking-wide">
                  {t.hero.greeting}
                </p>
              )}
            </motion.div>

            {/* Invitation Message */}
            {(!showIntro || textStage >= 1) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-6 sm:mb-8 md:mb-10"
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#2c3e50] leading-relaxed mb-0">
                    <TypewriterText 
                      text={t.hero.invitation} 
                      delay={300}
                      speed={40}
                      onComplete={() => setTextStage(2)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#2c3e50] leading-relaxed mb-0">
                    {t.hero.invitation}
                  </p>
                )}
              </motion.div>
            )}

            {/* Names */}
            {(!showIntro || textStage >= 2) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-6 sm:mb-8 md:mb-10"
              >
                {showIntro ? (
                  <h1 className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight">
                    <TypewriterText 
                      text={`${t.hero.groomName} & ${t.hero.brideName}`} 
                      delay={300}
                      speed={100}
                      onComplete={() => setTextStage(t.hero.weddingText ? 3 : 4)}
                    />
                  </h1>
                ) : (
                  <h1 className="heading-script text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#d4af37] leading-tight">
                    {t.hero.groomName} & {t.hero.brideName}
                  </h1>
                )}
              </motion.div>
            )}

            {/* Wedding Text (continuation after names) */}
            {t.hero.weddingText && (!showIntro || textStage >= 3) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
                className="mb-6 sm:mb-8 md:mb-10"
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#2c3e50] leading-relaxed mb-0">
                    <TypewriterText 
                      text={t.hero.weddingText} 
                      delay={300}
                      speed={40}
                      onComplete={() => setTextStage(4)}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#2c3e50] leading-relaxed mb-0">
                    {t.hero.weddingText}
                  </p>
                )}
              </motion.div>
            )}

            {/* Divider */}
            {(!showIntro || textStage >= 4) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0, scaleX: 0 } : undefined}
                animate={showIntro ? { opacity: 1, scaleX: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.8 } : undefined}
                className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8"
                onAnimationComplete={() => showIntro && setTextStage(5)}
              >
                <div className="h-px flex-1 max-w-[80px] sm:max-w-none bg-[#d4af37]"></div>
                <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                <div className="h-px flex-1 max-w-[80px] sm:max-w-none bg-[#d4af37]"></div>
              </motion.div>
            )}

            {/* Closing Message */}
            {(!showIntro || textStage >= 5) && (
              <motion.div 
                variants={!showIntro ? fadeInUp : undefined}
                initial={showIntro ? { opacity: 0 } : undefined}
                animate={showIntro ? { opacity: 1 } : undefined}
                transition={showIntro ? { delay: 0.3, duration: 0.5 } : undefined}
              >
                {showIntro ? (
                  <p className="heading-serif text-base sm:text-lg md:text-xl font-light text-[#2c3e50] leading-relaxed mb-0">
                    <TypewriterText 
                      text={t.hero.honor} 
                      delay={300}
                      speed={35}
                    />
                  </p>
                ) : (
                  <p className="heading-serif text-base sm:text-lg md:text-xl font-light text-[#2c3e50] leading-relaxed mb-0">
                    {t.hero.honor}
                  </p>
                )}
              </motion.div>
            )}

            {/* Scroll indicator */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 sm:mt-10 lg:hidden"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block"
              >
                <svg
                  className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4af37]"
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
          </div>

        </div>
      </motion.div>
    </section>
  );
}

