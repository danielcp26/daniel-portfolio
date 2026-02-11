'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 px-6 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Credits */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-white/40"
          >
            D.C. — {new Date().getFullYear()}
          </motion.p>

          {/* Back to top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            onClick={scrollToTop}
            className="text-sm text-white/40 hover:text-[#8B7FFF] transition"
          >
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
