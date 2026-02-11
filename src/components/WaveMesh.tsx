'use client';

import { useEffect, useRef } from 'react';

export default function WaveMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Draw flowing mesh lines - positioned on right side
      const lineCount = 25;
      
      for (let i = 0; i < lineCount; i++) {
        ctx.beginPath();
        const opacity = 0.08 + (i / lineCount) * 0.12;
        ctx.strokeStyle = `rgba(180, 180, 180, ${opacity})`;
        ctx.lineWidth = 0.8;

        const startX = width * 0.3;
        const phase = time * 0.4 + i * 0.15;
        
        for (let x = startX; x <= width + 50; x += 3) {
          // Create flowing wave pattern
          const progress = (x - startX) / (width - startX);
          const baseY = height * 0.1 + (i / lineCount) * height * 0.9;
          
          // Multiple wave frequencies for organic feel
          const wave1 = Math.sin(progress * 4 + phase) * 60 * progress;
          const wave2 = Math.sin(progress * 2 + phase * 0.7) * 40 * progress;
          const wave3 = Math.cos(progress * 6 + phase * 1.3) * 20 * progress;
          
          // Curve that flows from top-right toward bottom
          const curveOffset = Math.pow(progress, 1.5) * height * 0.3;
          
          const y = baseY + wave1 + wave2 + wave3 + curveOffset;
          
          if (x === startX) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      // Add some connecting vertical-ish lines for mesh effect
      const vertLineCount = 15;
      for (let i = 0; i < vertLineCount; i++) {
        ctx.beginPath();
        const opacity = 0.04 + (i / vertLineCount) * 0.06;
        ctx.strokeStyle = `rgba(180, 180, 180, ${opacity})`;
        ctx.lineWidth = 0.5;

        const baseX = width * 0.4 + (i / vertLineCount) * width * 0.6;
        const phase = time * 0.3 + i * 0.2;

        for (let y = 0; y <= height; y += 4) {
          const progress = y / height;
          const wave = Math.sin(progress * 3 + phase) * 30 + Math.cos(progress * 5 + phase * 0.8) * 20;
          const x = baseX + wave;

          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      time += 0.008;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
}
