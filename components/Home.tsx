// Path: components/Home.tsx

'use client';
import Link from 'next/link';
import { projects } from '@/data/projects';
import AnimatedText from './AnimatedText';
import ProjectCard from './ProjectCard';
import TechGrid from './TechGrid';
import NowWorkingOn from './NowWorkingOn';
import Timeline from './Timeline';
import GitHubStats from './GitHubStats';

export default function Home() {
  return (
    <main className="px-6 py-20 max-w-7xl mx-auto">
      <section className="text-center mb-20">
        <AnimatedText text="Hey, I'm Shahid Shaikh" className="text-5xl md:text-7xl font-extrabold" />
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
          Crafting modern web experiences with Next.js, React, and Tailwind CSS.
        </p>
        <Link
          href="#projects"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 text-white font-medium hover:scale-105 transition"
        >
          🚀 View Projects
        </Link>
      </section>

      <TechGrid />

      <section id="projects" className="mt-32">
        <h2 className="text-4xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <Timeline />
      <NowWorkingOn />
      <GitHubStats />
    </main>
  );
}
