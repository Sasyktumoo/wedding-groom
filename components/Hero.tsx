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
    <section className="relative min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #faf8f3 0%, #f5f3ed 50%, #faf8f3 100%)',
      }}>
      
      {/* Watercolor Texture Overlay */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `radial-gradient(ellipse at 10% 20%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
                         radial-gradient(ellipse at 90% 80%, rgba(212, 175, 55, 0.08) 0%, transparent 40%),
                         radial-gradient(ellipse at 50% 50%, rgba(245, 235, 220, 0.3) 0%, transparent 60%)`
      }}></div>

      {/* Elegant Botanical Decorations */}
      <div className="absolute inset-0">
        {/* Top Left - Delicate Branch */}
        <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-60">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <g stroke="#d4af37" fill="none" strokeWidth="1" strokeLinecap="round">
              <path d="M20,80 Q40,60 60,80 Q80,100 100,90" opacity="0.7"/>
              <path d="M30,70 L35,55 L40,70" opacity="0.6"/>
              <path d="M50,75 L52,60 L54,75" opacity="0.6"/>
              <path d="M70,82 L73,68 L76,82" opacity="0.6"/>
              <ellipse cx="35" cy="50" rx="8" ry="15" opacity="0.5"/>
              <ellipse cx="52" cy="55" rx="7" ry="14" opacity="0.5"/>
              <ellipse cx="73" cy="63" rx="8" ry="15" opacity="0.5"/>
              <path d="M15,90 Q25,85 35,95" opacity="0.6"/>
              <path d="M18,92 C20,88 22,88 24,92" opacity="0.5"/>
            </g>
          </svg>
        </div>

        {/* Top Right - Elegant Leaves */}
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-60 transform scale-x-[-1]">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <g stroke="#d4af37" fill="none" strokeWidth="1" strokeLinecap="round">
              <path d="M20,80 Q40,60 60,80 Q80,100 100,90" opacity="0.7"/>
              <path d="M30,70 L35,55 L40,70" opacity="0.6"/>
              <path d="M50,75 L52,60 L54,75" opacity="0.6"/>
              <ellipse cx="35" cy="50" rx="8" ry="15" opacity="0.5"/>
              <ellipse cx="52" cy="55" rx="7" ry="14" opacity="0.5"/>
              <path d="M15,90 Q25,85 35,95" opacity="0.6"/>
            </g>
          </svg>
        </div>

        {/* Bottom Left - Botanical Corner */}
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-60 transform scale-y-[-1]">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <g stroke="#d4af37" fill="none" strokeWidth="1" strokeLinecap="round">
              <path d="M20,80 Q40,60 60,80 Q80,100 100,90" opacity="0.7"/>
              <path d="M30,70 L35,55 L40,70" opacity="0.6"/>
              <path d="M50,75 L52,60 L54,75" opacity="0.6"/>
              <ellipse cx="35" cy="50" rx="8" ry="15" opacity="0.5"/>
              <ellipse cx="52" cy="55" rx="7" ry="14" opacity="0.5"/>
            </g>
          </svg>
        </div>

        {/* Bottom Right - Mirrored Branch */}
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 opacity-60 transform rotate-180">
          <svg viewBox="0 0 300 300" className="w-full h-full">
            <g stroke="#d4af37" fill="none" strokeWidth="1" strokeLinecap="round">
              <path d="M20,80 Q40,60 60,80 Q80,100 100,90" opacity="0.7"/>
              <path d="M30,70 L35,55 L40,70" opacity="0.6"/>
              <path d="M50,75 L52,60 L54,75" opacity="0.6"/>
              <ellipse cx="35" cy="50" rx="8" ry="15" opacity="0.5"/>
              <ellipse cx="52" cy="55" rx="7" ry="14" opacity="0.5"/>
            </g>
          </svg>
        </div>

        {/* Gold Sparkles/Confetti */}
        <div className="absolute top-10 right-20 sm:top-16 sm:right-32 md:top-20 md:right-40">
          <div className="w-2 h-2 bg-[#d4af37] rounded-full opacity-50"></div>
        </div>
        <div className="absolute top-24 right-16 sm:top-32 sm:right-24 md:top-40 md:right-32">
          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-40"></div>
        </div>
        <div className="absolute top-16 right-40 sm:top-24 sm:right-56 md:top-32 md:right-72">
          <div className="w-1 h-1 bg-[#d4af37] rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 left-16 sm:bottom-28 sm:left-24 md:bottom-36 md:left-32">
          <div className="w-2 h-2 bg-[#d4af37] rounded-full opacity-50"></div>
        </div>
        <div className="absolute bottom-32 left-32 sm:bottom-40 sm:left-44 md:bottom-48 md:left-56">
          <div className="w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-16 left-24 sm:bottom-20 sm:left-32 md:bottom-24 md:left-40">
          <div className="w-1 h-1 bg-[#d4af37] rounded-full opacity-60"></div>
        </div>
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

