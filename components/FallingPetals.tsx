"use client";

import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export default function FallingPetals() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const numberOfPetals = 25;
    const petals: Petal[] = [];

    const random = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    for (let i = 0; i < numberOfPetals; i++) {
      petals.push({
        x: random(0, width),
        y: random(-height, 0),
        size: random(15, 35),
        speedX: random(-0.8, 0.8),
        speedY: random(1.5, 3.5),
        rotation: random(0, Math.PI * 2),
        rotationSpeed: random(-0.03, 0.03),
        opacity: random(0.6, 0.9),
      });
    }

    const drawPetal = (petal: Petal) => {
      ctx.save();
      ctx.translate(petal.x, petal.y);
      ctx.rotate(petal.rotation);
      ctx.globalAlpha = petal.opacity;

      // Draw rose petal shape
      ctx.beginPath();
      ctx.moveTo(0, -petal.size / 2);
      ctx.bezierCurveTo(
        petal.size / 2,
        -petal.size / 2,
        petal.size / 2,
        petal.size / 2,
        0,
        petal.size / 2
      );
      ctx.bezierCurveTo(
        -petal.size / 2,
        petal.size / 2,
        -petal.size / 2,
        -petal.size / 2,
        0,
        -petal.size / 2
      );

      // Gradient fill for petal
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, petal.size / 2);
      gradient.addColorStop(0, "#f5d887");
      gradient.addColorStop(0.5, "#d4af37");
      gradient.addColorStop(1, "#c9a962");
      
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add subtle edge
      ctx.strokeStyle = "#c9a962";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.restore();
    };

    const updatePetal = (petal: Petal) => {
      petal.x += petal.speedX;
      petal.y += petal.speedY;
      petal.rotation += petal.rotationSpeed;

      // Wrap around horizontally
      if (petal.x < -petal.size) petal.x = width + petal.size;
      if (petal.x > width + petal.size) petal.x = -petal.size;

      // Reset at top when falling off bottom
      if (petal.y > height + petal.size) {
        petal.y = -petal.size;
        petal.x = random(0, width);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((petal) => {
        drawPetal(petal);
        updatePetal(petal);
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}

