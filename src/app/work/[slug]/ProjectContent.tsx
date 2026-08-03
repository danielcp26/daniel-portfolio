"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  overview: string;
  context: string;
  objective: string;
  role: string[];
  approach: string[];
  insights: string[];
  technologies: string[];
  results: {
    metric: string;
    bestModel?: string;
    value?: string;
    r2?: string;
    description?: string;
  };
  link?: string;
  dashboardLink?: string;
  image: string;
  images?: {
    cover: string;
    detail1: string;
    detail2?: string;
    detail3?: string;
  };
  period: string;
  category: string;
};

export default function ProjectContent({
  project,
  relatedProjects,
}: {
  project: Project;
  relatedProjects: Project[];
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  function openModal(src?: string) {
    if (!src) return;
    setModalSrc(src);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalSrc("");
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onKey);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", onKey);
      }
    };
  }, []);

  const ImageModal = () => {
    if (!modalOpen) return null;
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
        role="dialog"
        aria-modal="true"
        onClick={closeModal}
      >
        <div
          className="relative max-w-[90vw] max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={modalSrc}
            alt="Enlarged project visual"
            className="max-w-full max-h-[90vh] rounded-lg shadow-lg"
          />
          <button
            onClick={closeModal}
            aria-label="Close image"
            className="absolute -top-3 -right-3 bg-white/10 text-white rounded-full p-2 hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
    );
  };

  // Simple Accordion section for dense text (Context, Objective)
  const AccordionSection = ({
    title,
    children,
    defaultOpen = false,
  }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (
      <div className="rounded-xl border border-white/10 bg-white/5">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 md:px-6 py-3 md:py-4 text-left"
          aria-expanded={open}
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/60 font-medium">
            {title}
          </span>
          <span className="text-white/50">{open ? "−" : "+"}</span>
        </button>
        {open && <div className="px-4 md:px-6 pb-4">{children}</div>}
      </div>
    );
  };

  // Only render visuals if at least one detail image actually loads (preload check)
  const [hasLoadedImages, setHasLoadedImages] = useState(false);

  useEffect(() => {
    if (!project.images) {
      setHasLoadedImages(false);
      return;
    }

    const urls = [
      project.images.detail1,
      project.images.detail2,
      project.images.detail3,
    ].filter(Boolean) as string[];
    if (urls.length === 0) {
      setHasLoadedImages(false);
      return;
    }

    let mounted = true;
    let failures = 0;

    urls.forEach((u) => {
      const img = new window.Image();
      img.onload = () => {
        if (!mounted) return;
        setHasLoadedImages(true);
      };
      img.onerror = () => {
        failures += 1;
        if (!mounted) return;
        if (failures === urls.length) setHasLoadedImages(false);
      };
      img.src = u;
    });

    return () => {
      mounted = false;
    };
  }, [project.images]);
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link
              href="/work"
              className="text-sm text-white/40 hover:text-white/70 transition flex items-center gap-2"
            >
              <span>←</span>
              <span>Back to work</span>
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-sm text-white/60">{project.category}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-white/5"
          >
            <img
              src={project.image}
              alt={`${project.title} - Cover image showing project overview`}
              className="absolute w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-16 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* 1. Overview */}
          <ScrollReveal>
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                Overview
              </h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80">
                {project.overview}
              </p>
            </div>
          </ScrollReveal>

          {/* 2. Context (Accordion) */}
          <ScrollReveal delay={0.1}>
            <AccordionSection title="Context" defaultOpen={false}>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                {project.context}
              </p>
            </AccordionSection>
          </ScrollReveal>

          {/* 3. Objective (Accordion) */}
          <ScrollReveal delay={0.15}>
            <AccordionSection title="Objective" defaultOpen={false}>
              <p className="text-base md:text-lg leading-relaxed text-white/70">
                {project.objective}
              </p>
            </AccordionSection>
          </ScrollReveal>

          {/* 4. My Role */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                My Role
              </h2>
              <ul className="space-y-3">
                {project.role.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 text-white/70"
                  >
                    <span className="text-[#8B7FFF] mt-1.5">•</span>
                    <span className="text-base leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* 5. Live Interactive Dashboard (British Airways only) */}
          {project.slug === "british-airways" && (
            <ScrollReveal delay={0.25}>
              <div className="space-y-6 pt-8 border-t border-white/10">
                <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                  Live Interactive Dashboard
                </h2>
                <p className="text-sm text-white/60 mb-4">
                  Fully interactive. Apply filters and explore the dashboard
                  directly.
                </p>

                {/* Tableau Dashboard Embed - Full Width Breakout */}
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen flex justify-center py-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative bg-white/5 rounded-2xl overflow-hidden shadow-[0_16px_60px_rgb(0,0,0,0.45)]"
                    style={{
                      width: "1200px",
                      height: "700px",
                      maxWidth: "calc(100vw - 2rem)",
                    }}
                  >
                    <iframe
                      src="https://public.tableau.com/views/BritishAirwaysReview_17443423700870/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link&:embed=y&:showVizHome=no&:toolbar=no"
                      className="absolute inset-0 w-full h-full border-0"
                      allowFullScreen
                      title="British Airways Review Dashboard"
                    />
                  </motion.div>
                </div>

                {/* Fallback Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <a
                    href="https://public.tableau.com/views/BritishAirwaysReview_17443423700870/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-white/60 hover:text-white border border-white/10 rounded-full hover:bg-white/5 hover:border-[#8B7FFF]/30 transition"
                  >
                    <span>Open in Tableau Public</span>
                    <span className="text-[#8B7FFF]">↗</span>
                  </a>
                </motion.div>
              </div>
            </ScrollReveal>
          )}

          {/* 6. Approach (Timeline, centered markers) */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                Approach
              </h2>
              <div className="relative pl-12">
                {/* Vertical guide line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />
                <div className="space-y-4">
                  {project.approach.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.45 }}
                      viewport={{ once: true, margin: "-50px" }}
                      className="relative py-2"
                    >
                      {/* Step marker centered on the line */}
                      <span className="absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-[#8B7FFF]/15 border border-[#8B7FFF]/30 text-xs font-medium text-[#8B7FFF]">
                        {i + 1}
                      </span>
                      <div className="ml-12 text-base leading-relaxed text-white/80">
                        {step}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* 7. Results & Insights */}
          <ScrollReveal delay={0.35}>
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                Results & Insights
              </h2>

              {/* Key Metric Card */}
              {(project.results.value ||
                project.results.bestModel ||
                project.results.r2) && (
                <div className="bg-gradient-to-br from-[#8B7FFF]/10 via-transparent to-transparent rounded-2xl p-8 border border-[#8B7FFF]/20 mb-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-white/40 mb-2">
                    {project.results.metric}
                  </p>
                  {/* Prominent R² */}
                  {project.results.r2 && (
                    <div className="mb-3">
                      <p className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#8B7FFF] leading-tight">
                        {project.results.r2}
                      </p>
                      <p className="text-sm text-white/60 mt-1">Test set R²</p>
                    </div>
                  )}
                  {project.results.value && (
                    <p className="text-4xl md:text-5xl font-light text-white mb-2">
                      {project.results.value}
                    </p>
                  )}
                  {project.results.bestModel && (
                    <p className="text-lg text-white/70">
                      Best performing:{" "}
                      <span className="text-[#8B7FFF]">
                        {project.results.bestModel}
                      </span>
                    </p>
                  )}
                  {/* description intentionally hidden to keep Results card concise */}
                </div>
              )}

              {/* Insights Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.insights.map((insight, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-md bg-[#8B7FFF]/15 border border-[#8B7FFF]/30 text-[#8B7FFF] flex items-center justify-center">
                      ✓
                    </span>
                    <span className="text-base leading-relaxed text-white/80">
                      {insight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 8. Tech Stack */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-4 pt-8 border-t border-white/10">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => {
                  const iconMap: Record<string, string> = {
                    Python:
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                    "Pandas & NumPy":
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
                    "Scikit-learn":
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
                    "Neural Networks (MLP)":
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
                    XGBoost:
                      "https://upload.wikimedia.org/wikipedia/commons/6/67/XGBoost_logo.png",
                    "Web scraping":
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                    "Power BI":
                      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg",
                    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                    PostgreSQL:
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                  };
                  const icon = iconMap[tech] || "";
                  return (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-[#8B7FFF]/30 hover:bg-[#8B7FFF]/5 transition cursor-default"
                    >
                      {icon && <img src={icon} alt="" className="w-4 h-4" />}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* 9. Links */}
          <ScrollReveal delay={0.45}>
            <div className="space-y-4 pt-8 border-t border-white/10">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                Links
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white hover:bg-white/10 hover:border-[#8B7FFF]/30 transition"
                  >
                    <span>View Repository</span>
                    <span className="text-[#8B7FFF]">↗</span>
                  </a>
                )}
                {project.dashboardLink && (
                  <a
                    href={project.dashboardLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm text-white hover:bg-white/10 hover:border-[#8B7FFF]/30 transition"
                  >
                    <span>View Dashboard (PDF)</span>
                    <span className="text-[#8B7FFF]">↗</span>
                  </a>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* 10. Visuals / Image Gallery */}
          {hasLoadedImages &&
            project.images &&
            project.slug !== "british-airways" && (
              <ScrollReveal delay={0.5}>
                <div className="space-y-6 pt-8 border-t border-white/10">
                  <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">
                    Project Visuals
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Detail Image 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="relative aspect-video rounded-xl overflow-hidden bg-white/5"
                    >
                      <button
                        onClick={() => openModal(project.images?.detail1)}
                        className="w-full h-full"
                        aria-label="Open image 1"
                      >
                        <img
                          src={project.images.detail1}
                          alt={`${project.title} - Detail view 1`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </motion.div>

                    {/* Detail Image 2 */}
                    {project.images.detail2 && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-xl overflow-hidden bg-white/5"
                      >
                        <button
                          onClick={() => openModal(project.images?.detail2)}
                          className="w-full h-full"
                          aria-label="Open image 2"
                        >
                          <img
                            src={project.images.detail2}
                            alt={`${project.title} - Detail view 2`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      </motion.div>
                    )}

                    {/* Detail Image 3 (optional) */}
                    {project.images.detail3 && (
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-xl overflow-hidden bg-white/5 md:col-span-2"
                      >
                        <button
                          onClick={() => openModal(project.images?.detail3)}
                          className="w-full h-full"
                          aria-label="Open image 3"
                        >
                          <img
                            src={project.images.detail3}
                            alt={`${project.title} - Detail view 3`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            )}

          {/* Image Modal (Lightbox) */}
          {typeof window !== "undefined" && <ImageModal />}
        </div>
      </section>

      {/* More Projects Section */}
      {relatedProjects.length > 0 && (
        <section className="py-24 px-6 md:px-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-light mb-12 text-white">
                More projects
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/work/${related.slug}`} className="group block">
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 mb-4">
                      <img
                        src={related.image}
                        alt={`${related.title} - Project preview`}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-light text-white group-hover:text-[#8B7FFF] transition mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-white/60">
                      {related.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
