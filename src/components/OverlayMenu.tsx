"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { profile } from "@/content/profile";
import WaveMesh from "./WaveMesh";
import Image from "next/image";
import { withBasePath } from "@/lib/basePath";

interface OverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OverlayMenu({ isOpen, onClose }: OverlayMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: `mailto:${profile.email}` },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="fixed inset-0 md:inset-8 bg-[#0B0B0B] z-50 overflow-hidden flex"
            style={{ maxHeight: "calc(100vh - 4rem)" }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-3xl text-white/80 hover:text-white transition z-10"
            >
              ×
            </button>

            {/* Left Side - Image Strip */}
            <div className="hidden md:block w-1/3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0B0B]/60 z-10" />
              <Image
                src={withBasePath("/images/CR_Rainforest.webp")}
                alt="Costa Rica rainforest"
                fill
                className="object-cover grayscale"
                priority
                sizes="(min-width: 768px) 33vw, 0vw"
              />
            </div>

            {/* Right Side - Menu Content + Wave Mesh */}
            <div className="flex-1 relative flex items-center justify-center p-8 md:p-16">
              {/* Wave Mesh Background */}
              <WaveMesh />

              {/* Menu Content */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 max-w-md w-full"
              >
                {/* Headline */}
                <motion.h2
                  variants={itemVariants}
                  className="text-5xl md:text-7xl font-light text-white mb-16 leading-tight"
                >
                  Let's create
                  <br />
                  something
                  <br />
                  <span className="text-[#8B7FFF]">together</span>
                </motion.h2>

                {/* Navigation Links */}
                <nav className="space-y-6 mb-12">
                  {menuItems.map((item, i) => (
                    <motion.div key={i} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="text-2xl md:text-3xl font-light text-white/90 hover:text-[#8B7FFF] transition block group"
                      >
                        <span className="inline-block group-hover:translate-x-2 transition-transform">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Social Links */}
                <motion.div
                  variants={itemVariants}
                  className="pt-8 border-t border-white/10"
                >
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                    Connect
                  </p>
                  <div className="flex gap-6">
                    {profile.socials.map((social, i) => (
                      <a
                        key={i}
                        href={social.url}
                        target={social.icon !== "mail" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-white/60 hover:text-[#8B7FFF] transition"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
