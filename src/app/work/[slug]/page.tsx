import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projects } from '@/content/projects';
import ProjectContent from './ProjectContent';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <Navbar />
      <ProjectContent project={project} relatedProjects={relatedProjects} />
      <Footer />
    </div>
  );
}

