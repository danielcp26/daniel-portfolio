"use client";

import { useEffect, useRef } from "react";

export default function FuturisticBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animationFrameId: number;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const time = frame * 0.008;

      ctx.clearRect(0, 0, width, height);

      const grid = 56;
      ctx.lineWidth = 0.6;

      for (let x = 0; x < width + grid; x += grid) {
        const pulse = 0.02 + Math.sin(time + x * 0.01) * 0.01;
        ctx.strokeStyle = `rgba(255,255,255,${pulse})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height + grid; y += grid) {
        const pulse = 0.018 + Math.cos(time + y * 0.01) * 0.01;
        ctx.strokeStyle = `rgba(255,255,255,${pulse})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      const nodes = 42;
      for (let i = 0; i < nodes; i++) {
        const x =
          width * 0.48 +
          Math.cos(i * 1.7 + time * 0.75) * width * (0.16 + (i % 5) * 0.035);
        const y =
          height * 0.48 +
          Math.sin(i * 1.23 + time) * height * (0.12 + (i % 7) * 0.02);
        const alpha = 0.18 + Math.sin(time * 2 + i) * 0.08;

        ctx.fillStyle = `rgba(240,194,122,${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, i % 6 === 0 ? 2.2 : 1.35, 0, Math.PI * 2);
        ctx.fill();

        if (i % 3 === 0) {
          const nextX =
            width * 0.48 +
            Math.cos((i + 4) * 1.7 + time * 0.75) *
              width *
              (0.16 + ((i + 4) % 5) * 0.035);
          const nextY =
            height * 0.48 +
            Math.sin((i + 4) * 1.23 + time) *
              height *
              (0.12 + ((i + 4) % 7) * 0.02);

          ctx.strokeStyle = `rgba(98,181,168,${alpha * 0.28})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(nextX, nextY);
          ctx.stroke();
        }
      }

      const scanY = (height * ((time * 0.12) % 1)) | 0;
      const gradient = ctx.createLinearGradient(0, scanY - 70, 0, scanY + 70);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.5, "rgba(255,255,255,0.035)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 70, width, 140);

      frame += 1;
      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-80"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_42%,rgba(98,181,168,0.16),transparent_30%),radial-gradient(circle_at_28%_58%,rgba(240,194,122,0.1),transparent_24%),linear-gradient(90deg,rgba(11,11,11,0.38),rgba(11,11,11,0.76))]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.6)_0,rgba(255,255,255,0.6)_1px,transparent_1px,transparent_7px)]" />
    </>
  );
}
