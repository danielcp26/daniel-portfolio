"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  text: string;
  delay?: number;
  speed?: number;
  cursor?: boolean;
  cursorClassName?: string;
  onComplete?: () => void;
}

export default function TypingEffect({
  text,
  delay = 0,
  speed = 50,
  cursor = true,
  cursorClassName = "bg-white/80",
  onComplete,
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText === text) {
      setIsComplete(true);
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(text.slice(0, displayedText.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed, onComplete]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setDisplayedText(text.slice(0, 1));
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [text, delay]);

  return (
    <span>
      {displayedText}
      {cursor && !isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className={`inline-block w-0.5 h-[1.2em] ml-1 align-text-bottom ${cursorClassName}`}
        />
      )}
    </span>
  );
}
