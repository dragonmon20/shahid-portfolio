// Path: components/Timeline.tsx

'use client';
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2022',
    title: 'Started Front-End Journey',
    description: 'Learned HTML, CSS, JavaScript. Built my first portfolio and responsive layout.',
  },
  {
    year: '2023',
    title: 'React & Next.js Era',
    description: 'Built projects using React, Tailwind. Deployed several apps using Vercel.',
  },
  {
    year: '2024',
    title: 'AI Learning Tool',
    description: 'Designing code-learning platform with AI. Using TypeScript, Framer Motion, API services.',
  },
];

export default function Timeline() {
  return (
    <section className="mt-28 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-teal-400">🕒 Dev Journey</h2>
      <div className="relative border-l border-gray-700 pl-6 space-y-10">
        {timelineData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-3 top-1.5 w-4 h-4 bg-teal-400 rounded-full" />
            <h3 className="text-xl font-semibold text-white">{item.year} — {item.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
