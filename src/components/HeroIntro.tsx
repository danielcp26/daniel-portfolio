"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import TypingEffect from "./TypingEffect";

export default function HeroIntro() {
  const [lineOneDone, setLineOneDone] = useState(false);
  const [lineTwoDone, setLineTwoDone] = useState(false);

  return (
    <div className="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/38"
      >
        <span className="h-px w-8 bg-white/20" />
        <span>Data Systems / ML / Analytics</span>
      </motion.div>

      <div className="space-y-5">
        <h1 className="min-h-[1.08em] text-5xl font-light leading-[1.1] text-white md:text-7xl lg:text-8xl">
          <TypingEffect
            text="Hi, I'm Daniel."
            speed={42}
            cursor={!lineOneDone}
            cursorClassName="bg-[#f0c27a]"
            onComplete={() => setLineOneDone(true)}
          />
        </h1>

        <div className="min-h-[2.25em] text-4xl font-light leading-tight text-white/60 md:text-5xl lg:text-6xl">
          {lineOneDone && (
            <TypingEffect
              text="I turn complex data into operational clarity."
              speed={26}
              cursor={!lineTwoDone}
              cursorClassName="bg-[#62b5a8]"
              onComplete={() => setLineTwoDone(true)}
            />
          )}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(5px)" }}
          animate={
            lineTwoDone
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 16, filter: "blur(5px)" }
          }
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md text-base font-light leading-relaxed text-white/50 md:text-lg"
        >
          Building KPI systems, automation pipelines, and decision intelligence.
        </motion.p>
      </div>
    </div>
  );
}
