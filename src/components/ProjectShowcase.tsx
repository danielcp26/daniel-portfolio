"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ShowcaseProject = {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  image: string;
  category: string;
};

interface ProjectShowcaseProps {
  projects: ShowcaseProject[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  return (
    <div className="space-y-24 md:space-y-32">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <motion.article
            key={project.id}
            initial={{
              opacity: 0,
              y: 90,
              scale: 0.94,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={{ once: true, amount: 0.36 }}
            className="relative"
          >
            <Link
              href={`/work/${project.slug}`}
              className="group grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,26rem)]"
            >
              <motion.div
                whileHover={{
                  y: -12,
                  rotate: isEven ? -1.2 : 1.2,
                  scale: 1.015,
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative mx-auto w-full max-w-4xl"
              >
                <div className="absolute -inset-4 rounded-lg bg-[radial-gradient(circle_at_30%_10%,rgba(236,159,77,0.22),transparent_32%),radial-gradient(circle_at_78%_80%,rgba(98,181,168,0.18),transparent_30%)] opacity-70 blur-2xl transition duration-500 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-lg border border-white/12 bg-[#15120f] p-3 shadow-[0_34px_90px_rgba(0,0,0,0.48)]">
                  <div className="relative overflow-hidden rounded-md border border-[#e6c990]/18 bg-black">
                    <div className="relative aspect-[16/9]">
                      <motion.img
                        src={project.image}
                        alt={`${project.title} project cover`}
                        className="h-full w-full object-cover"
                        initial={{ scale: 1.08, opacity: 0.82 }}
                        whileInView={{ opacity: 1 }}
                        animate={{
                          scale: [1.025, 1.075, 1.025],
                          x: isEven ? ["0%", "-1.4%", "0%"] : ["0%", "1.4%", "0%"],
                          y: ["0%", "1%", "0%"],
                        }}
                        transition={{
                          opacity: {
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          scale: {
                            duration: 8.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          x: {
                            duration: 8.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          y: {
                            duration: 8.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        viewport={{ once: true }}
                      />
                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-[#ffe4ad]/20 to-transparent"
                        animate={{ x: ["-140%", "500%"] }}
                        transition={{
                          duration: 4.2,
                          repeat: Infinity,
                          repeatDelay: 2.2,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-screen"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 6px)",
                        }}
                        animate={{ y: [0, 6] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,232,184,0.12),transparent)] opacity-0 transition duration-700 group-hover:opacity-100" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isEven ? 34 : -34 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true, amount: 0.45 }}
                className="mx-auto w-full max-w-4xl lg:max-w-none"
              >
                <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/38">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-px w-10 bg-white/16" />
                  <span>{project.category}</span>
                </div>

                <h3 className="mb-4 text-3xl font-light leading-tight text-white transition-colors group-hover:text-[#f0c27a] md:text-4xl">
                  {project.title}
                </h3>

                <p className="mb-6 max-w-md text-sm leading-relaxed text-white/56 md:text-base">
                  {project.description}
                </p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/62"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-3 text-sm text-white/54 transition group-hover:text-[#f0c27a]">
                  View project
                  <motion.span
                    aria-hidden="true"
                    className="text-lg"
                    initial={false}
                    animate={{ x: 0 }}
                    whileHover={{ x: 6 }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.div>
            </Link>
          </motion.article>
        );
      })}
    </div>
  );
}
