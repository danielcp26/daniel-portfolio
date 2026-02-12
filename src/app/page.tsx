"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import WorkCard from "@/components/WorkCard";
import ExperienceRow from "@/components/ExperienceRow";
import ScrollReveal from "@/components/ScrollReveal";
// TypingEffect removed; using static hero copy per request
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

      {/* Hero Section - Dark with Wave Mesh */}
      <section className="min-h-screen relative flex flex-col justify-center bg-[var(--bg)] overflow-hidden">
        {/* Wave Mesh Background */}
        <div className="absolute inset-0 pointer-events-none">
          <WaveMesh />
        </div>

        <div className="relative z-10 px-6 md:px-16 pt-24 pb-32">
          <div className="max-w-5xl">
            {/* Main Headline - updated copy */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-white mb-4"
            >
              Hi, I'm <span className="font-medium">Daniel.</span>
            </motion.h1>

            {/* Large supporting line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white/60 mb-6"
            >
              I turn complex data into operational clarity.
            </motion.div>

            {/* Short descriptor */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-base md:text-lg text-white/50 max-w-md font-light leading-relaxed"
            >
              Building KPI systems, automation pipelines, and decision
              intelligence.
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#work" className="block">
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

      {/* Selected Work Section (mirrors Work page design) */}
      <section id="work" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-4">
                SELECTED WORK
              </p>
              <h2 className="text-4xl md:text-5xl font-light text-black">
                Featured Projects (3)
              </h2>
            </div>
          </ScrollReveal>

          {projects.slice(0, 3).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative mb-24"
            >
              {/* Moving background text marquee */}
              <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
                <motion.div
                  className="flex items-center gap-24 opacity-[0.15]"
                  initial={{ x: 0 }}
                  animate={{ x: [0, -800] }}
                  transition={{ duration: 12, ease: "linear", repeat: Infinity }}
                  style={{ willChange: "transform" }}
                >
                  {[...Array(8)].map((_, idx) => (
                    <span
                      key={`home-marquee-a-${idx}`}
                      className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold uppercase tracking-tight text-black"
                    >
                      {project.title.split(" ")[0]}
                    </span>
                  ))}
                  {[...Array(8)].map((_, idx) => (
                    <span
                      key={`home-marquee-b-${idx}`}
                      className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold uppercase tracking-tight text-black"
                    >
                      {project.title.split(" ")[0]}
                    </span>
                  ))}
                </motion.div>
              </div>

              <Link href={`/work/${project.slug}`} className="group block relative z-10">
                {/* Centered framed image card */}
                <div className="mx-auto w-full max-w-3xl rounded-2xl bg-black shadow-[0_20px_60px_rgba(0,0,0,0.25)] overflow-hidden">
                  <div className="p-4">
                    <div className="relative rounded-xl overflow-hidden border border-black/30 bg-[#111]">
                      <div className="aspect-[16/9]">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Title and tags */}
                <div className="mx-auto max-w-3xl mt-6">
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-3 group-hover:text-[#5F54FF] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-black/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          <ScrollReveal delay={0.3} className="mt-2 text-center">
            <Link
              href="/work"
              className="inline-block text-sm font-light text-black/60 hover:text-[#5F54FF] transition"
            >
              View all projects →
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
