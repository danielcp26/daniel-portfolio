"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/content/projects";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">
              ALL PROJECTS
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-6 text-white">
              Work ({projects.length})
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-white/60">
              A collection of projects spanning machine learning, data analysis,
              and data engineering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Showcase (inspired by reference design) */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative mb-24"
            >
              {/* Large background text repeating the first word */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <div className="flex gap-24 opacity-[0.06]">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <span
                      key={idx}
                      className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-extrabold uppercase tracking-tight text-black"
                    >
                      {project.title.split(" ")[0]}
                    </span>
                  ))}
                </div>
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

                {/* Title and tags under the card */}
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
