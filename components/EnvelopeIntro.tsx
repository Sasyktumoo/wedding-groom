"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import FallingPetals from "./FallingPetals";

interface EnvelopeIntroProps {
  onComplete: () => void;
}

export default function EnvelopeIntro({ onComplete }: EnvelopeIntroProps) {
  const [stage, setStage] = useState<'envelope' | 'opening' | 'plane' | 'done'>('envelope');
  const controls = useAnimation();
  const [showPetals, setShowPetals] = useState(false);

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

      // Stage 3: Petals start falling (2.3-5.3s)
      setStage('plane');
      setShowPetals(true);
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
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1200px" }}>
        
        {/* Envelope Container */}
        <motion.div
          animate={controls}
          className="relative w-full max-w-[400px] sm:max-w-[500px]"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Envelope Body - 3D */}
          <motion.div
            className="relative"
            animate={stage === 'plane' || stage === 'done' ? { 
              opacity: 0, 
              scale: 0.85,
              y: 60 
            } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Main envelope with luxury styling */}
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 400 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ 
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25)) drop-shadow(0 10px 25px rgba(212,175,55,0.15))"
              }}
            >
              <defs>
                {/* Gradients for realistic paper */}
                <linearGradient id="envelopeBody" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#fdfcfa", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#f8f6f1", stopOpacity: 1 }} />
                </linearGradient>
                
                <linearGradient id="flapGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#fffef9", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#f5f1e8", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#ebe7dc", stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="waxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#e8c76a", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#d4af37", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#b8964d", stopOpacity: 1 }} />
                </linearGradient>

                {/* Inner shadow for depth */}
                <filter id="innerShadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                  <feOffset dx="0" dy="2" result="offsetblur"/>
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Envelope back panel with border design */}
              <rect
                x="20"
                y="50"
                width="360"
                height="210"
                rx="4"
                fill="url(#envelopeBody)"
                stroke="#d4af37"
                strokeWidth="1.5"
              />

              {/* Inner decorative border */}
              <rect
                x="30"
                y="60"
                width="340"
                height="190"
                rx="2"
                fill="none"
                stroke="#d4af37"
                strokeWidth="0.5"
                opacity="0.4"
              />

              {/* Ornamental corner decorations */}
              <g opacity="0.7">
                <path d="M 35 65 L 50 65 M 35 65 L 35 80" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="35" cy="65" r="3" fill="#d4af37"/>
                
                <path d="M 365 65 L 350 65 M 365 65 L 365 80" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="365" cy="65" r="3" fill="#d4af37"/>
                
                <path d="M 35 245 L 50 245 M 35 245 L 35 230" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="35" cy="245" r="3" fill="#d4af37"/>
                
                <path d="M 365 245 L 350 245 M 365 245 L 365 230" stroke="#d4af37" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="365" cy="245" r="3" fill="#d4af37"/>
              </g>

              {/* Decorative flourish at bottom center */}
              <g opacity="0.6" transform="translate(200, 240)">
                <path 
                  d="M -30 0 Q -20 -8, 0 -10 Q 20 -8, 30 0" 
                  stroke="#d4af37" 
                  strokeWidth="1" 
                  fill="none"
                />
                <circle cx="-25" cy="-2" r="2" fill="#d4af37"/>
                <circle cx="0" cy="-10" r="2.5" fill="#d4af37"/>
                <circle cx="25" cy="-2" r="2" fill="#d4af37"/>
              </g>

              {/* Letter inside (visible when opening) */}
              <motion.g
                initial={{ opacity: 0, y: 20 }}
                animate={stage === 'opening' || stage === 'plane' || stage === 'done' ? {
                  opacity: 1,
                  y: 0
                } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <rect
                  x="60"
                  y="80"
                  width="280"
                  height="150"
                  rx="3"
                  fill="#fffef9"
                  stroke="#e8e6e0"
                  strokeWidth="1"
                  filter="url(#innerShadow)"
                />
                <text
                  x="200"
                  y="120"
                  textAnchor="middle"
                  fill="#d4af37"
                  fontSize="28"
                  fontFamily="'Great Vibes', cursive"
                  fontWeight="400"
                >
                  M & A
                </text>
                <line x1="120" y1="145" x2="280" y2="145" stroke="#d4af37" strokeWidth="0.5" opacity="0.4"/>
                <text
                  x="200"
                  y="170"
                  textAnchor="middle"
                  fill="#2c3e50"
                  fontSize="14"
                  fontFamily="serif"
                  opacity="0.7"
                >
                  Тойго Чыгарабыз!
                </text>
              </motion.g>

              {/* Animated envelope flap with 3D effect */}
              <motion.path
                d="M20 50 L200 160 L380 50"
                fill="url(#flapGradient)"
                stroke="#d4af37"
                strokeWidth="1.5"
                initial={{ d: "M20 50 L200 160 L380 50" }}
                animate={stage === 'opening' || stage === 'plane' || stage === 'done' ? {
                  d: "M20 50 L200 20 L380 50"
                } : {}}
                transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                style={{ 
                  filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))"
                }}
              />

              {/* Flap crease line for realism */}
              <motion.line
                x1="20"
                y1="50"
                x2="380"
                y2="50"
                stroke="#d4af37"
                strokeWidth="0.5"
                opacity="0.3"
              />

              {/* Luxury wax seal with detailed design */}
              <motion.g
                initial={{ scale: 1, opacity: 1 }}
                animate={stage === 'opening' || stage === 'plane' || stage === 'done' ? {
                  scale: 0,
                  opacity: 0
                } : {}}
                transition={{ duration: 0.6, ease: "backIn" }}
              >
                {/* Wax seal base */}
                <circle
                  cx="200"
                  cy="50"
                  r="28"
                  fill="url(#waxGradient)"
                  style={{ 
                    filter: "drop-shadow(0 4px 8px rgba(180, 140, 50, 0.4))"
                  }}
                />
                
                {/* Wax texture details */}
                <circle cx="200" cy="50" r="26" fill="none" stroke="#c9a962" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="200" cy="50" r="22" fill="none" stroke="#e8c76a" strokeWidth="0.5" opacity="0.4"/>
                
                {/* Monogram in seal */}
                <text
                  x="200"
                  y="58"
                  textAnchor="middle"
                  fill="#2c3e50"
                  fontSize="24"
                  fontFamily="'Great Vibes', cursive"
                  fontWeight="600"
                  opacity="0.9"
                >
                  M&A
                </text>
                
                {/* Decorative seal border */}
                <circle 
                  cx="200" 
                  cy="50" 
                  r="28" 
                  fill="none" 
                  stroke="#b8964d" 
                  strokeWidth="1" 
                  opacity="0.6"
                />
              </motion.g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Falling Petals */}
        {showPetals && <FallingPetals />}

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

