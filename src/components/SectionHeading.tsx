"use client";

import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  count?: number;
}

export default function SectionHeading({ title, count }: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight">
          {title}
        </h2>
        {count !== undefined && (
          <p className="text-sm opacity-60 mt-2">({count})</p>
        )}
      </div>
    </ScrollReveal>
  );
}
