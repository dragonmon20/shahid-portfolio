// File: app/page.tsx

'use client';

import Link from 'next/link';

const projects = [
  {
    slug: 'smart-portfolio',
    title: 'Smart Portfolio App',
    description:
      'A modern, customizable portfolio template built with React + Tailwind. Optimized for performance and style.',
  },
  {
    slug: 'fitness-tracker-ui',
    title: 'Fitness Tracker UI',
    description:
      'A responsive dashboard UI for tracking workouts and progress. Built with Next.js and Tailwind CSS.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome, I'm <span className="text-blue-500">Shahid Shaikh</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          A visionary Front-End Developer building purposeful digital experiences. Explore my work across tech, design,
          fitness, and creativity.
        </p>
        <a
          href="#featured-projects"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Explore My Work
        </a>
      </section>

      {/* Technologies */}
      <section className="mt-24 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Technologies I Work With</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[
            ['HTML5', '🟧', 'Structured semantic markup for web content.'],
            ['Tailwind CSS', '🔵', 'Utility-first design for fast prototyping.'],
            ['React.js', '⚛️', 'Component-driven UI development.'],
            ['Next.js', '⏩', 'SSR, SSG, routing and full-stack tooling.'],
          ].map(([name, icon, desc]) => (
            <div key={name} className="bg-gray-900 p-6 rounded-lg shadow hover:shadow-blue-600/30 transition-all">
              <h3 className="text-2xl font-semibold mb-2">
                {icon} {name}
              </h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.slug} className="bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <Link href={`/projects/${project.slug}`} className="text-blue-500 hover:underline">
                View Project →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Download */}
      <section className="mt-24 max-w-4xl mx-auto text-center">
        <a
          href="/ShahidShaikh_Resume.pdf"
          download
          className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Download My Resume
        </a>
      </section>

      {/* Quote */}
      <section className="mt-24 max-w-3xl mx-auto text-center italic text-xl text-gray-400">
        <p>"Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs</p>
      </section>
    </main>
  );
}
