"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Countdown() {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Wedding date: January 6, 2026 at 18:00 (6 PM) Kyrgyz time (UTC+6)
    const calculateTimeLeft = () => {
      // Create date in Kyrgyz timezone (UTC+6)
      const weddingDate = new Date('2026-01-06T17:00:00+06:00');
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Photo Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/grad.jpg"
            alt="Graduation photo"
            fill
            className="object-cover object-center"
            priority={false}
            sizes="100vw"
            quality={70}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AA//2Q=="
          />
        </div>
      </section>

      {/* Countdown Section with Gradient */}
      <section className="relative bg-gradient-to-b from-[#faf9f6] via-[#3a4d5f] to-[#2c3e50] py-16 sm:py-20 md:py-24 pb-24 sm:pb-28 md:pb-32">
        <div ref={ref} className="relative z-20 container mx-auto px-4 sm:px-6 max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="heading-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 sm:mb-12 md:mb-16"
          >
            {t.countdown.title}
          </motion.h2>

          {/* Countdown Cards */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {/* Days */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#d4af37] mb-2 sm:mb-3">
                {timeLeft.days}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90 uppercase tracking-wider">
                {t.countdown.days}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#d4af37] mb-2 sm:mb-3">
                {timeLeft.hours}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90 uppercase tracking-wider">
                {t.countdown.hours}
              </div>
            </div>

            {/* Minutes */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#d4af37] mb-2 sm:mb-3">
                {timeLeft.minutes}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90 uppercase tracking-wider">
                {t.countdown.minutes}
              </div>
            </div>

            {/* Seconds */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#d4af37] mb-2 sm:mb-3">
                {timeLeft.seconds}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90 uppercase tracking-wider">
                {t.countdown.seconds}
              </div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl md:text-2xl text-white/80 mt-8 sm:mt-12 font-light"
          >
            {t.countdown.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Smooth transition to footer with decorative fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-48 bg-gradient-to-b from-transparent to-[#2c3e50] z-10" />
    </section>
    </>
  );
}

