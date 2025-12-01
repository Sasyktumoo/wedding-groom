"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PhotoGallery() {
  const { t, language } = useLanguage();
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  // Define quotes for both sections in both languages
  const quotes = {
    picnic: {
      kgz: "Биз бирге өткөргөн ар бир учур, жашообузду кубанычка бөлөйт.",
      ru: "Каждое мгновение, проведённое вместе, наполняет нашу жизнь счастьем."
    },
    cute: {
      kgz: "Сүйүү-бул биз бирге кура турган келечек.",
      ru: "Любовь - это будущее, которое мы строим вместе."
    }
  };

  return (
    <>
      {/* First photo section - Picnic - HIDDEN */}
      {/* <section ref={ref1} className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#faf9f6] via-[#f5f4f1] to-[#faf9f6]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white/50 w-full max-w-2xl mx-auto lg:max-w-none">
                <Image
                  src="/images/picnic.jpg"
                  alt="Our beautiful moment together"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 60vw"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="order-1 lg:order-2 text-center lg:text-left"
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <div className="h-px w-12 sm:w-16 bg-[#d4af37]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                  <div className="h-px w-12 sm:w-16 bg-[#d4af37]"></div>
                </div>
                
                <blockquote className="heading-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#2c3e50] leading-relaxed italic">
                  "{quotes.picnic[language]}"
                </blockquote>
              </div>
            </motion.div>

          </div>
        </div>
      </section> */}

      {/* Second photo section - Cute */}
      <section ref={ref2} className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#f5f4f1] via-[#faf9f6] to-[#f5f4f1]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Quote/Text - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 text-center lg:text-right"
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center justify-center lg:justify-end gap-4">
                  <div className="h-px w-12 sm:w-16 bg-[#d4af37]"></div>
                  <div className="w-2 h-2 rounded-full bg-[#d4af37]"></div>
                  <div className="h-px w-12 sm:w-16 bg-[#d4af37]"></div>
                </div>
                
                <blockquote className="heading-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#2c3e50] leading-relaxed italic">
                  "{quotes.cute[language]}"
                </blockquote>
              </div>
            </motion.div>

            {/* Photo - Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="order-2"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl ring-4 sm:ring-8 ring-white/50 w-full max-w-2xl mx-auto lg:max-w-none">
                <Image
                  src="/images/cute.jpg"
                  alt="Our love story continues"
                  fill
                  className="object-cover"
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 60vw"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

