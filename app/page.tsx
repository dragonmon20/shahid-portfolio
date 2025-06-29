// File: pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome, I'm <span className="text-blue-500">Shahid Shaikh</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          A visionary Front-End Developer driven by purpose and ambition. I build meaningful digital experiences using React, Next.js, and Tailwind CSS. Explore my journey from tech to fitness and events.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Explore My Work
        </a>
      </section>

      {/* Professional Experience */}
      <section id="projects" className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">
          Professional Experience
        </h2>
        <div className="space-y-10">
          {/* Job 1 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Supervisor – Serendipity Arts Festival</h3>
            <p className="text-gray-400 mb-2">Panaji, Goa | Dec 2022 – Dec 2024 (Seasonal)</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Managed multi-venue event ops with 35+ volunteers.</li>
              <li>Led safety, coordination, and real-time conflict handling.</li>
            </ul>
          </div>
          {/* Job 2 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Gym Instructor – Norbert’s Fitness Studio</h3>
            <p className="text-gray-400 mb-2">Goa | Feb 2022 – Dec 2023</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Designed personalized training plans.</li>
              <li>Fostered a client-focused, motivating environment.</li>
            </ul>
          </div>
          {/* Job 3 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Sales Consultant – Magsons</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Upsold products, handled inventory, and assisted customers.</li>
            </ul>
          </div>
          {/* Job 4 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Receptionist – Chandu Pharmacy</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Tracked inventory and handled customer needs efficiently.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Languages</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          <li>English</li>
          <li>Hindi</li>
          <li>Konkani</li>
          <li>Portuguese</li>
        </ul>
      </section>

      {/* Why I Code */}
      <section className="mt-24 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 border-b border-gray-700 pb-2">Why I Code</h2>
        <p className="text-lg text-gray-300">
          I use design & development to solve real-world challenges. My goal is to make everything I build accessible, purposeful, and beautiful.
        </p>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Smart Portfolio App</h3>
            <p className="text-gray-300 mb-3">
              A portfolio template built with React + Tailwind, offering smooth interaction and mobile responsiveness.
            </p>
            <a href="#" className="text-blue-500 hover:underline">View Project →</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Fitness Tracker UI</h3>
            <p className="text-gray-300 mb-3">
              A fitness dashboard UI for tracking progress, routines, and client goals.
            </p>
            <a href="#" className="text-blue-500 hover:underline">View Project →</a>
          </div>
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

