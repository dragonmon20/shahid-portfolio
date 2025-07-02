// Path: app/projects/page.tsx — project index page if needed

import Link from 'next/link';
import { projects } from '../../projects';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center border-b border-gray-700 pb-4">
          All Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects
            .filter((p) => p.slug !== 'fitness-tracker-ui')
            .map((project) => (
              <div
                key={project.slug}
                className="bg-gray-900 p-6 rounded-xl hover:shadow-lg transition duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md mb-4 border border-gray-800"
                />
                <h2 className="text-xl font-semibold text-blue-400 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-blue-500 hover:underline text-sm"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}
