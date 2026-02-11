'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import OverlayMenu from './OverlayMenu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="w-full px-6 md:px-10 py-6 flex justify-between items-center">
          {/* Menu button - left */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-2 text-white/90 hover:text-white transition group"
          >
            <span className="text-lg">≡</span>
            <span className="text-sm font-light">Menu</span>
          </button>

          {/* Initials - right */}
          <Link 
            href="/" 
            className="text-sm font-medium tracking-wider text-white/90 hover:text-white transition border border-white/20 px-3 py-1.5 rounded"
          >
            D.C.
          </Link>
        </div>
      </nav>

      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
