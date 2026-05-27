"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type OverviewProject = {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  image: string;
  category: string;
  period: string;
};

interface ProjectOverviewGridProps {
  projects: OverviewProject[];
}

export default function ProjectOverviewGrid({
  projects,
}: ProjectOverviewGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.55,
            delay: index * 0.04,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, amount: 0.24 }}
        >
          <Link
            href={`/work/${project.slug}`}
            className="group block h-full rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-[#f0c27a]/36 hover:bg-white/[0.055]"
          >
            <div className="mb-4 overflow-hidden rounded-md border border-white/10 bg-black">
              <div className="relative aspect-[16/9]">
                <motion.img
                  src={project.image}
                  alt={`${project.title} overview`}
                  className="h-full w-full object-cover"
                  animate={{
                    scale: [1.02, 1.065, 1.02],
                    x: ["0%", "-1.2%", "0%"],
                    y: ["0%", "1%", "0%"],
                  }}
                  transition={{
                    duration: 7 + index * 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#f8dfaa]/18 to-transparent"
                  animate={{ x: ["-120%", "360%"] }}
                  transition={{
                    duration: 3.8,
                    delay: index * 0.2,
                    repeat: Infinity,
                    repeatDelay: 2.6,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            <div className="mb-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.16em] text-white/36">
              <span>{project.category}</span>
              <span>{project.period}</span>
            </div>

            <h3 className="mb-3 text-xl font-light leading-tight text-white transition group-hover:text-[#f0c27a]">
              {project.title}
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-white/56">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-white/10 px-2.5 py-1 text-xs text-white/54"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
