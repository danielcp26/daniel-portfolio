'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import { motion } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  slug: string;
  tags: string[];
  description: string;
  fullDescription: string;
  technologies: string[];
  models?: string[];
  techniques?: string[];
  results: {
    metric: string;
    bestModel?: string;
    value?: string;
    description?: string;
  };
  link?: string;
  image: string;
  period: string;
  category: string;
};

export default function ProjectContent({ 
  project, 
  relatedProjects 
}: { 
  project: Project; 
  relatedProjects: Project[];
}) {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="pt-40 pb-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-white"
          >
            {project.title}
          </motion.h1>
        </div>
      </section>

      {/* Metadata Section */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-20 border-b border-white/10"
          >
            <div>
              <p className="text-xs text-white/40 uppercase tracking-[0.15em] mb-3 font-medium">Project</p>
              <p className="text-white/90 font-light text-lg">{project.category}</p>
            </div>
            <div>
              <p className="text-xs text-white/40 uppercase tracking-[0.15em] mb-3 font-medium">Year</p>
              <p className="text-white/90 font-light text-lg">{project.period}</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-white/40 uppercase tracking-[0.15em] mb-3 font-medium">Services</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-white/70 font-light text-sm">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image - Full Width */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-gradient-to-br from-[#8B7FFF]/10 to-transparent"
          >
            <img
              src={project.image}
              alt={project.title}
              className="absolute w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Background Section */}
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">Background</h2>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/80">
                {project.fullDescription}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#8B7FFF] hover:text-[#9D8FFF] transition pt-4"
                >
                  <span>View project repository</span>
                  <span>↗</span>
                </a>
              )}
            </div>
          </ScrollReveal>

          {/* Challenge Section */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">Challenge</h2>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70">
                {project.description} The goal was to build a robust solution that could handle real-world data complexity while maintaining high accuracy and interpretability for stakeholders.
              </p>
            </div>
          </ScrollReveal>

          {/* Key Findings Section */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-10">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">Key Findings</h2>
              <div className="space-y-12">
                {(project.models || project.techniques || project.technologies).slice(0, 4).map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl md:text-2xl font-light text-white">{item}</h3>
                    <p className="text-white/60 leading-relaxed max-w-2xl">
                      Utilized {item} to achieve optimal results in the project pipeline, ensuring efficiency and accuracy throughout the development process.
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Key Results Section */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-10">
              <h2 className="text-sm uppercase tracking-[0.2em] text-white/40 font-medium">Key Results</h2>
              <div className="bg-gradient-to-br from-[#8B7FFF]/10 via-transparent to-transparent rounded-3xl p-10 md:p-12 border border-[#8B7FFF]/10">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-white/40 mb-3 font-medium">
                      {project.results.metric}
                    </p>
                    {'value' in project.results && (
                      <p className="text-5xl md:text-6xl font-light text-white mb-4">{project.results.value}</p>
                    )}
                    {'bestModel' in project.results && (
                      <p className="text-xl text-white/70">Best performing: <span className="text-[#8B7FFF]">{project.results.bestModel}</span></p>
                    )}
                    {'description' in project.results && (
                      <p className="text-xl text-white/70">{project.results.description}</p>
                    )}
                  </div>
                  <div className="pt-6 border-t border-white/10">
                    <p className="text-white/60 leading-relaxed text-lg">
                      Successfully delivered a production-ready solution demonstrating expertise in {project.category.toLowerCase()} with measurable outcomes and actionable insights for stakeholders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Technologies Used */}
          <ScrollReveal delay={0.4}>
            <div className="space-y-6 pt-12 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">Technologies</p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-[#8B7FFF]/30 hover:bg-[#8B7FFF]/5 transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

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
                  <Link
                    href={`/work/${related.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 mb-4">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-light text-white group-hover:text-[#8B7FFF] transition mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-white/60">{related.description}</p>
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
