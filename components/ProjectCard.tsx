import Link from 'next/link';
import { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl hover:shadow-xl hover:scale-105 transition-transform">
      <img src={project.image} alt={project.title} className="rounded-lg border border-gray-800 mb-4" />
      <h3 className="text-2xl font-semibold text-blue-400">{project.title}</h3>
      <p className="text-sm text-gray-300 mb-2">{project.description}</p>
      <Link
        href={`/projects/${project.slug}`}
        className="text-blue-500 hover:underline text-sm"
      >
        View Case Study →
      </Link>
    </div>
  );
}
