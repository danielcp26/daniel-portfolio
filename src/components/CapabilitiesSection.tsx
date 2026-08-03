"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { capabilities, type CapabilityId } from "@/content/capabilities";

type CapabilityProject = {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  image: string;
  category: string;
};

interface CapabilitiesSectionProps {
  projects: CapabilityProject[];
}

type ViewMode = "projects" | "certifications";

export default function CapabilitiesSection({
  projects,
}: CapabilitiesSectionProps) {
  const [activeViews, setActiveViews] = useState<Record<CapabilityId, ViewMode>>(
    {
      analysis: "projects",
      engineering: "projects",
      science: "projects",
    },
  );

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[var(--bg)] px-6 py-24 md:px-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(139,127,255,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="mb-14 grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:items-end"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">
              CAPABILITIES
            </p>
            <h2 className="text-4xl font-light text-white md:text-5xl">
              Three ways I work with data
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-white/58 md:text-lg">
            Explore my projects and certifications across analytics,
            engineering, and data science.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const view = activeViews[capability.id];
            const capabilityProjects = projects.filter(
              (project) => project.category === capability.projectCategory,
            );

            return (
              <motion.article
                key={capability.id}
                initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.62,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.24 }}
                className="flex min-h-[36rem] flex-col rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="mb-5">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-light text-white">
                      {capability.label}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.18em] text-white/30">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/56">
                    {capability.summary}
                  </p>
                </div>

                <div className="mb-5 grid grid-cols-2 gap-2">
                  {(["projects", "certifications"] as ViewMode[]).map(
                    (mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() =>
                          setActiveViews((current) => ({
                            ...current,
                            [capability.id]: mode,
                          }))
                        }
                        className={`rounded border px-3 py-2 text-sm transition ${
                          view === mode
                            ? "border-[#f0c27a]/50 bg-[#f0c27a]/10 text-[#f0c27a]"
                            : "border-white/10 bg-white/[0.03] text-white/52 hover:border-white/20 hover:text-white/72"
                        }`}
                      >
                        {mode === "projects" ? "Projects" : "Certifications"}
                      </button>
                    ),
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  {view === "projects" ? (
                    capabilityProjects.map((project) => (
                      <Link
                        key={project.id}
                        href={`/work/${project.slug}`}
                        className="group grid grid-cols-[5.5rem_minmax(0,1fr)] gap-3 rounded-md border border-white/10 bg-black/16 p-2 transition hover:border-[#f0c27a]/35 hover:bg-white/[0.045]"
                      >
                        <div className="overflow-hidden rounded bg-black">
                          <div className="aspect-[4/3]">
                            <img
                              src={project.image}
                              alt={`${project.title} preview`}
                              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="min-w-0 py-1">
                          <h4 className="mb-1 text-sm leading-snug text-white transition group-hover:text-[#f0c27a]">
                            {project.title}
                          </h4>
                          <p className="line-clamp-2 text-xs leading-relaxed text-white/48">
                            {project.description}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    capability.certifications.map((certification) => (
                      <a
                        key={certification.url}
                        href={certification.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group grid grid-cols-[3.25rem_minmax(0,1fr)] gap-3 rounded-md border border-white/10 bg-black/16 p-3 transition hover:border-[#f0c27a]/35 hover:bg-white/[0.045]"
                      >
                        <div className="flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded bg-white/[0.035] p-1.5">
                          <img
                            src={certification.thumbnail}
                            alt=""
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 py-0.5">
                          <p className="mb-2 text-sm leading-snug text-white transition group-hover:text-[#f0c27a]">
                            {certification.title}
                          </p>
                          <p className="text-xs uppercase tracking-[0.14em] text-white/36">
                            {certification.issuer}
                          </p>
                        </div>
                      </a>
                    ))
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
