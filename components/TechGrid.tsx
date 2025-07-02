const technologies = [
  { name: 'React', emoji: '⚛️', desc: 'Component architecture' },
  { name: 'Next.js', emoji: '🚀', desc: 'Full-stack capabilities' },
  { name: 'Tailwind CSS', emoji: '💨', desc: 'Utility-first styling' },
  { name: 'TypeScript', emoji: '📘', desc: 'Type-safe development' },
  { name: 'Node.js', emoji: '🌐', desc: 'Backend power' },
  { name: 'GraphQL', emoji: '🔗', desc: 'Query-based APIs' },
];

export default function TechGrid() {
  return (
    <section className="mt-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Technologies I Use</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {technologies.map((tech) => (
          <div key={tech.name} className="bg-gray-800 p-4 rounded-xl hover:brightness-110 transition">
            <h3 className="text-xl font-semibold">{tech.emoji} {tech.name}</h3>
            <p className="text-sm text-gray-400">{tech.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
