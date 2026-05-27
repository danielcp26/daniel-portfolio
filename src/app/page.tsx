"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectShowcase from "@/components/ProjectShowcase";
import ScrollReveal from "@/components/ScrollReveal";
import HeroIntro from "@/components/HeroIntro";
import WaveMesh from "@/components/WaveMesh";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/basePath";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen relative flex flex-col justify-center bg-[var(--bg)] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[#0B0B0B]">
          <WaveMesh />
        </div>

        <div className="relative z-10 px-6 md:px-16 pt-24 pb-32">
          <HeroIntro />
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#featured-work" className="block">
            <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:border-white/60 transition cursor-pointer">
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-1 bg-white/60 rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section
        id="featured-work"
        className="relative overflow-hidden bg-[var(--bg)] px-6 py-24 md:px-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(139,127,255,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%)]" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="relative mb-16 md:mb-24">
              <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
                FEATURED WORK
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                Selected Projects (3)
              </h2>
            </div>
          </ScrollReveal>

          <ProjectShowcase projects={projects.slice(0, 3)} />

          <ScrollReveal delay={0.3} className="mt-2 text-center">
            <Link
              href="/work"
              className="inline-block rounded border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-light text-white/60 hover:border-[#f0c27a]/40 hover:text-[#f0c27a] transition"
            >
              See more projects →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Worked With Section - Clickable Links Style */}
      <section className="py-24 px-6 bg-[var(--bg)]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
                EXPERIENCE
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-white">
                Worked with
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-0">
            {experience.map((exp, i) => (
              <motion.a
                key={exp.id}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border-b border-white/10 py-6 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition block"
              >
                <div className="flex flex-col">
                  <span className="font-light text-white text-xl md:text-2xl group-hover:text-[#8B7FFF] transition">
                    {exp.company}
                  </span>
                  <span className="text-white/40 text-sm mt-1">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <span className="text-white/40 text-sm group-hover:text-[#8B7FFF] transition">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Circular Image */}
      <section className="py-24 px-6 bg-[var(--bg)] border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="flex flex-col items-center text-center">
            {/* Circular Profile Image */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-10">
              <img
                src={withBasePath("/projects/Profile%20Picture.jpg")}
                alt={profile.name}
                className="w-full h-full object-cover grayscale"
                style={{ objectPosition: "50% 22%" }}
              />
            </div>

            {/* Inspirational Quote */}
            <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-white/70 max-w-2xl">
              "{profile.testimonial}"
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
