"use client";

import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

interface StarfieldProps {
  starCount?: number;
  speed?: number;
  starColor?: string;
}

const Starfield: React.FC<StarfieldProps> = ({
  starCount = 1000,
  speed = 2,
  starColor = "white",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  // 🌟 التعديل هنا: ضفنا null كقيمة ابتدائية
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initializeStars();
    };

    const initializeStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * width,
          px: 0,
          py: 0,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(width / 2, height / 2);

      const colorRGB = hexToRgb(starColor);
      
      starsRef.current.forEach(star => {
        star.z -= speed;

        if (star.z < 1) {
          star.z = width;
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
        }

        const perspective = width / star.z;
        const x2d = star.x * perspective;
        const y2d = star.y * perspective;

        const size = (1 - star.z / width) * 2.5;

        if (star.px !== 0) {
          ctx.beginPath();
          ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
          const alpha = (1 - star.z / width);
          ctx.fillStyle = `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${alpha})`;
          ctx.fill();
        }
        
        star.px = x2d;
        star.py = y2d;
      });

      ctx.restore();
      animationFrameId.current = requestAnimationFrame(draw);
    };

    const hexToRgb = (hex: string) => {
      if(hex === "white") return {r: 255, g: 255, b: 255};
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : {r: 255, g: 255, b: 255};
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [starCount, speed, starColor]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, display: 'block' }} />;
};

export default Starfield;