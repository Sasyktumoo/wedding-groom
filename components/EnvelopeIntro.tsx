"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface EnvelopeIntroProps {
  onComplete: () => void;
}

export default function EnvelopeIntro({ onComplete }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<'envelope' | 'opening' | 'plane' | 'done'>('envelope');
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Stage 1: Envelope appears (0-1s)
      await controls.start({
        scale: [0, 1.1, 1],
        opacity: [0, 1],
        rotate: [0, 5, 0],
        transition: { duration: 1, ease: "easeOut" }
      });

      await new Promise(resolve => setTimeout(resolve, 300));

      // Stage 2: Envelope opens (1.3-2.3s)
      setStage('opening');
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Stage 3: Paper plane flies out (2.3-5.3s)
      setStage('plane');
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Stage 4: Fade out and complete (5.3-6.3s)
      setStage('done');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onComplete();
    };

    sequence();
  }, [controls, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-b from-[#faf9f6] via-[#f5f4f1] to-[#faf9f6] flex items-center justify-center px-4"
      initial={{ opacity: 1 }}
      animate={stage === 'done' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Envelope */}
        <motion.div
          animate={controls}
          className="relative w-full max-w-[320px] sm:max-w-[400px]"
        >
          {/* Envelope Body */}
          <motion.div
            className="relative"
            animate={stage === 'plane' || stage === 'done' ? { 
              opacity: 0, 
              scale: 0.8,
              y: 50 
            } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Back of envelope */}
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 320 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-2xl"
            >
              {/* Envelope back */}
              <rect
                x="10"
                y="30"
                width="300"
                height="180"
                fill="#fdfbf7"
                stroke="#d4af37"
                strokeWidth="2"
              />
              
              {/* Envelope flap - animates open */}
              <motion.path
                d="M10 30 L160 120 L310 30"
                fill="#f5f1e8"
                stroke="#d4af37"
                strokeWidth="2"
                initial={{ d: "M10 30 L160 120 L310 30" }}
                animate={stage === 'opening' || stage === 'plane' || stage === 'done' ? {
                  d: "M10 30 L160 10 L310 30"
                } : {}}
                transition={{ duration: 1, ease: "easeInOut" }}
              />

              {/* Decorative wax seal */}
              <motion.circle
                cx="160"
                cy="30"
                r="20"
                fill="#d4af37"
                opacity="0.9"
                initial={{ scale: 1 }}
                animate={stage === 'opening' || stage === 'plane' || stage === 'done' ? {
                  scale: 0,
                  opacity: 0
                } : {}}
                transition={{ duration: 0.5 }}
              />
              <motion.text
                x="160"
                y="38"
                textAnchor="middle"
                fill="#2c3e50"
                fontSize="20"
                fontFamily="serif"
                fontWeight="bold"
                initial={{ scale: 1, opacity: 1 }}
                animate={stage === 'opening' || stage === 'plane' || stage === 'done' ? {
                  scale: 0,
                  opacity: 0
                } : {}}
                transition={{ duration: 0.5 }}
              >
                M & A
              </motion.text>

              {/* Decorative corner flourishes */}
              <path
                d="M 20 40 Q 25 40 25 45 Q 25 40 30 40"
                stroke="#d4af37"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
              <path
                d="M 290 40 Q 295 40 295 45 Q 295 40 300 40"
                stroke="#d4af37"
                strokeWidth="1"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Falling Rose Petals */}
        {(stage === 'plane' || stage === 'done') && (
          <>
            {/* Petal 1 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, -80, -120, -100],
                y: [0, 150, 350, 500],
                scale: [0, 1, 1, 0.8],
                opacity: [0, 0.9, 0.8, 0],
                rotate: [0, 180, 360, 540],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
              }}
            >
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.85"
                />
              </svg>
            </motion.div>

            {/* Petal 2 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, 60, 100, 90],
                y: [0, 180, 380, 520],
                scale: [0, 1.2, 1.2, 0.9],
                opacity: [0, 0.8, 0.7, 0],
                rotate: [0, -150, -300, -450],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                delay: 0.1,
              }}
            >
              <svg width="28" height="32" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.8"
                />
              </svg>
            </motion.div>

            {/* Petal 3 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, 20, -40, -60],
                y: [0, 140, 320, 480],
                scale: [0, 0.9, 0.9, 0.7],
                opacity: [0, 0.85, 0.75, 0],
                rotate: [0, 120, 280, 400],
              }}
              transition={{
                duration: 2.7,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                delay: 0.2,
              }}
            >
              <svg width="20" height="24" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.9"
                />
              </svg>
            </motion.div>

            {/* Petal 4 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, -40, -80, -70],
                y: [0, 160, 360, 500],
                scale: [0, 1.1, 1.1, 0.85],
                opacity: [0, 0.9, 0.8, 0],
                rotate: [0, -200, -380, -560],
              }}
              transition={{
                duration: 2.9,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                delay: 0.15,
              }}
            >
              <svg width="26" height="30" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.8"
                />
              </svg>
            </motion.div>

            {/* Petal 5 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, 90, 140, 130],
                y: [0, 170, 370, 510],
                scale: [0, 1, 1, 0.8],
                opacity: [0, 0.85, 0.75, 0],
                rotate: [0, 160, 340, 500],
              }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                delay: 0.25,
              }}
            >
              <svg width="22" height="26" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.85"
                />
              </svg>
            </motion.div>

            {/* Petal 6 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, -10, 30, 40],
                y: [0, 150, 340, 490],
                scale: [0, 0.95, 0.95, 0.75],
                opacity: [0, 0.9, 0.8, 0],
                rotate: [0, -180, -340, -520],
              }}
              transition={{
                duration: 2.75,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                delay: 0.3,
              }}
            >
              <svg width="20" height="24" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.9"
                />
              </svg>
            </motion.div>

            {/* Petal 7 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, 50, 70, 60],
                y: [0, 190, 390, 530],
                scale: [0, 1.15, 1.15, 0.9],
                opacity: [0, 0.85, 0.75, 0],
                rotate: [0, 200, 400, 580],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                delay: 0.05,
              }}
            >
              <svg width="27" height="31" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.8"
                />
              </svg>
            </motion.div>

            {/* Petal 8 */}
            <motion.div
              className="absolute"
              initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: 0 }}
              animate={{
                x: [0, -60, -90, -80],
                y: [0, 165, 365, 505],
                scale: [0, 1.05, 1.05, 0.85],
                opacity: [0, 0.9, 0.8, 0],
                rotate: [0, -170, -350, -510],
              }}
              transition={{
                duration: 2.85,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
                delay: 0.35,
              }}
            >
              <svg width="23" height="27" viewBox="0 0 24 28" fill="none">
                <path
                  d="M12 2C12 2 4 8 4 14C4 18 7 22 12 24C17 22 20 18 20 14C20 8 12 2 12 2Z"
                  fill="#d4af37"
                  opacity="0.85"
                />
              </svg>
            </motion.div>
          </>
        )}

        {/* Subtle sparkles */}
        {stage === 'plane' && (
          <>
            <motion.div
              className="absolute w-2 h-2 bg-[#d4af37] rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                x: [0, -100, -150],
                y: [0, -50, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-[#d4af37] rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                x: [0, 50, 100],
                y: [0, -80, -120],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 2, delay: 0.7 }}
            />
            <motion.div
              className="absolute w-2 h-2 bg-[#d4af37] rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                x: [0, 120, 180],
                y: [0, 30, 10],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ duration: 2, delay: 0.9 }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}

