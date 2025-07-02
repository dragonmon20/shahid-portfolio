import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-400 mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="rounded-lg mb-4 border border-gray-800" />
      <p className="text-lg text-gray-300 mb-6">{project.description}</p>
    </main>
  );
}
