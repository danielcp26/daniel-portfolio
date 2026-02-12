"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { withBasePath } from "@/lib/basePath";

function LiveClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Costa Rica time (UTC-6)
      const costaRicaTime = new Date(
        now.toLocaleString("en-US", { timeZone: "America/Costa_Rica" }),
      );
      setTime(
        costaRicaTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return <span className="font-mono text-white/60">{time}</span>;
}

export default function AboutPage() {
  const tools = [
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Power BI",
      icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
    },
    {
      name: "Tableau",
      icon: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    },
    {
      name: "Excel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Pandas",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    },
    {
      name: "NumPy",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Jupyter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      name: "Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
  ];

  const services = [
    "Data Analysis",
    "Machine Learning",
    "Dashboard Design",
    "Data Visualization",
    "ETL Pipelines",
    "Statistical Modeling",
    "Business Intelligence",
    "Data Cleaning",
    "Predictive Analytics",
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left Content */}
            <div>
              <ScrollReveal>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-white mb-8">
                  A page About me.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="mb-10">
                  <Link
                    href="/work"
                    className="text-sm text-white/50 hover:text-[#8B7FFF] transition underline underline-offset-4"
                  >
                    Check out my work →
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-white/60 text-lg leading-relaxed mb-12">
                  Beyond my role, I experiment with data models, automation
                  pipelines, emerging machine learning frameworks and web vibe
                  coding.
                </p>
              </ScrollReveal>

              {/* Location & Time */}
              <ScrollReveal delay={0.3}>
                <div className="border-t border-white/10 pt-8">
                  <p className="text-sm text-white/40 mb-2">From Costa Rica</p>
                  <LiveClock />
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Profile Image */}
            <ScrollReveal delay={0.2} className="lg:pt-16">
              <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden">
                <img
                  src={withBasePath("/projects/Profile%20Picture.jpg")}
                  alt={profile.name}
                  className="w-full h-full object-cover grayscale"
                  style={{ objectPosition: "50% 22%" }}
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Me in Brief Section */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-8">
              <h2 className="text-2xl font-light text-white">Me in brief</h2>
              <span className="text-sm text-white/40">(6)</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-3xl">
              {profile.bio}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="mt-10">
            <a
              href="https://www.linkedin.com/in/daniel-chac%C3%B3n-p%C3%A9rez-1218891b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 hover:bg-white/10 transition group"
            >
              <span className="text-sm text-white/60">Let's connect</span>
              <span className="text-[#8B7FFF] group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools I Love Section */}
      <section className="py-16 px-6 md:px-16 border-t border-white/10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="text-2xl font-light text-white">Tools I love</h2>
              <span className="text-sm text-white/40">({tools.length})</span>
            </div>
          </ScrollReveal>

          {/* Infinite Scrolling Carousel */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--bg)] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--bg)] to-transparent z-10" />

            <div className="flex overflow-hidden">
              <motion.div
                className="flex gap-6 items-center"
                animate={{
                  x: [0, -1920],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
              >
                {/* First set of tools */}
                {tools.map((tool) => (
                  <div
                    key={`${tool.name}-1`}
                    className="flex flex-col items-center gap-3 bg-white/5 rounded-2xl px-8 py-6 border border-white/10 hover:border-white/20 transition min-w-[140px] group cursor-default"
                  >
                    <div className="w-14 h-14 flex items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-sm text-white/70 font-medium whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {tools.map((tool) => (
                  <div
                    key={`${tool.name}-2`}
                    className="flex flex-col items-center gap-3 bg-white/5 rounded-2xl px-8 py-6 border border-white/10 hover:border-white/20 transition min-w-[140px] group cursor-default"
                  >
                    <div className="w-14 h-14 flex items-center justify-center">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-sm text-white/70 font-medium whitespace-nowrap">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="text-2xl font-light text-white">Services</h2>
              <span className="text-sm text-white/40">({services.length})</span>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap gap-3">
            {services.map((service, i) => (
              <motion.span
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="text-sm border border-white/20 text-white/60 px-5 py-2.5 rounded-full hover:border-[#8B7FFF] hover:text-[#8B7FFF] transition cursor-default"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="py-16 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="text-2xl font-light text-white">
                Skills breakdown
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(profile.skills).map(([category, skills], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-xs font-medium uppercase tracking-wider text-white/40 mb-4">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {(skills as string[]).map((skill) => (
                    <li key={skill} className="text-sm text-white/70">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-baseline gap-4 mb-10">
              <h2 className="text-2xl font-light text-white">Let's connect</h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-wrap gap-4">
            {profile.socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-white/5 rounded-full px-6 py-3 border border-white/10 hover:border-[#8B7FFF] hover:bg-[#8B7FFF]/10 transition group"
              >
                <span className="text-sm text-white/70 group-hover:text-white transition">
                  {social.name}
                </span>
                <span className="text-[#8B7FFF]">↗</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
