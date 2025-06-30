// app/projects/[slug]/page.tsx
// app/projects/[slug]/page.tsx
import { projects } from "../../projectData";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProjectDetailProps {
  params: { slug: string };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-16">
      <section className="max-w-5xl mx-auto animate-fadeIn">
        <h1 className="text-5xl font-bold text-blue-500 mb-4">{project.title}</h1>
        <p className="text-gray-300 mb-6">{project.description}</p>

        {project.image && (
          <div className="relative w-full h-72 mb-8 rounded-lg overflow-hidden border border-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="flex flex-wrap gap-3 text-sm text-gray-300">
            {project.techStack.map((tech) => (
              <li key={tech} className="bg-gray-800 px-3 py-1 rounded-full">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {project.tags && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-blue-700 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            View GitHub →
          </a>
        )}

        <div className="mt-12">
          <a href="/" className="text-gray-400 hover:text-white hover:underline text-sm">
            ← Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}
