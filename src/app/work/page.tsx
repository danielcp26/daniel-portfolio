"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectOverviewGrid from "@/components/ProjectOverviewGrid";
import { projects } from "@/content/projects";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 pb-16 pt-32 md:px-16">
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

      {/* Work Overview */}
      <section className="border-t border-white/10 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
              <div>
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                  OVERVIEW
                </p>
                <h2 className="text-4xl font-light text-white md:text-5xl">
                  Project Archive
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
                A quick scan of the full body of work, with each project framed
                by its domain, year, stack, and outcome.
              </p>
            </div>
          </ScrollReveal>

          <ProjectOverviewGrid projects={projects} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
