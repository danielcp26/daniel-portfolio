'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface WorkCardProps {
  title: string;
  slug: string;
  tags: string[];
  description: string;
  delay?: number;
}

export default function WorkCard({ title, slug, tags, description, delay = 0 }: WorkCardProps) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <Link href={`/work/${slug}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="group pb-8 border-b border-white/10 cursor-pointer transition"
        >
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-light mb-2 text-white group-hover:text-[#8B7FFF] transition">
                {title}
              </h3>
              <p className="text-sm text-white/60 mb-4 line-clamp-2">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-white/5 text-white/60 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-xs text-white/40 whitespace-nowrap group-hover:text-[#8B7FFF] transition">
              View →
            </div>
          </div>
        </motion.div>
      </Link>
    </ScrollReveal>
  );
}
