"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectOverviewGrid from "@/components/ProjectOverviewGrid";
import { projects } from "@/content/projects";
import { capabilities } from "@/content/capabilities";

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
              A collection of projects grouped across data analysis, data
              engineering, and data science.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Work Overview */}
      <section className="border-t border-white/10 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-20">
            {capabilities.map((capability) => {
              const capabilityProjects = projects.filter(
                (project) => project.category === capability.projectCategory,
              );

              return (
                <section key={capability.id} id={capability.id}>
                  <ScrollReveal>
                    <div className="mb-10 grid gap-6 lg:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] lg:items-end">
                      <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
                          {capability.label}
                        </p>
                        <h2 className="text-4xl font-light text-white md:text-5xl">
                          {capabilityProjects.length} Projects
                        </h2>
                      </div>
                      <p className="max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
                        {capability.summary}
                      </p>
                    </div>
                  </ScrollReveal>

                  <ProjectOverviewGrid projects={capabilityProjects} />
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
