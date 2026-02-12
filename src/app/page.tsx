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

      {/* Selected Work Section */}
      <section id="work" className="py-24 px-6 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
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

          <div className="space-y-32">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                {/* Large background text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                  <span className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-black/[0.03] uppercase whitespace-nowrap tracking-tighter select-none">
                    {project.title.split(" ")[0]}
                  </span>
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="group block relative z-10"
                >
                  {/* Device mockup card */}
                  <div className="bg-[#1a1a1a] rounded-3xl p-6 md:p-10 overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 to-transparent rounded-3xl pointer-events-none" />

                    {/* Device frames container */}
                    <div className="relative flex items-center justify-center gap-4 py-8">
                      {/* Laptop mockup */}
                      <div className="relative w-[280px] md:w-[400px] lg:w-[500px]">
                        <div className="bg-[#2a2a2a] rounded-lg p-2 shadow-2xl">
                          <div className="bg-white rounded overflow-hidden aspect-[16/10]">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        {/* Laptop base */}
                        <div className="h-3 bg-[#2a2a2a] rounded-b-xl mx-8 -mt-1" />
                      </div>

                      {/* Tablet mockup - offset */}
                      <div className="hidden md:block relative w-[200px] lg:w-[250px] -ml-20 mt-16">
                        <div className="bg-[#2a2a2a] rounded-xl p-2 shadow-2xl">
                          <div className="bg-white rounded overflow-hidden aspect-[4/3]">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h3 className="text-xl md:text-2xl font-medium text-white mb-4 group-hover:text-[#8B7FFF] transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-3 flex-wrap">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs border border-white/20 text-white/70 px-4 py-1.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-block text-sm font-light text-black/60 hover:text-[#8B7FFF] transition"
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
