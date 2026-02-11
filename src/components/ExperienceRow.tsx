'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface ExperienceRowProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  delay?: number;
}

export default function ExperienceRow({
  title,
  company,
  startDate,
  endDate,
  location,
  delay = 0,
}: ExperienceRowProps) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <motion.div className="border-b border-black/5 pb-8 hover:opacity-70 transition">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-light mb-1">{title}</h3>
            <p className="text-sm opacity-70">{company}</p>
          </div>
          <div className="flex flex-col md:text-right text-xs opacity-60 whitespace-nowrap">
            <span>
              {startDate} – {endDate}
            </span>
            <span>{location}</span>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
