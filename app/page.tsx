// File: pages/index.js

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome, I'm <span className="text-blue-500">Shahid Shaikh</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          A visionary Front-End Developer driven by purpose and ambition. With a strong foundation in React, Next.js, and Tailwind CSS, I strive to craft impactful digital experiences that merge design, strategy, and emotion. My journey bridges creativity and discipline—from tech to fitness to event leadership. Explore my portfolio and get to know the passion behind every pixel.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
        >
          Explore My Work
        </a>
      </section>

      <section id="projects" className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Professional Experience</h2>

        <div className="space-y-10">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Supervisor - Serendipity Arts Festival</h3>
            <p className="text-gray-400 mb-2">Panaji, Goa | Dec 2022 - Dec 2024 (Seasonal)</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Led multi-venue operations for a prestigious arts event.</li>
              <li>Coordinated 35-40 volunteers with strong leadership and communication.</li>
              <li>Ensured safety, order, and smooth coordination across departments.</li>
              <li>Functioned as a vital point of contact between organizers, artists, and public services.</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Gym Instructor - Norbert's Fitness Studio</h3>
            <p className="text-gray-400 mb-2">Goa, India | Feb 2022 - Dec 2023</p>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Designed and delivered customized fitness plans for diverse clients.</li>
              <li>Created a motivating atmosphere focused on progress and well-being.</li>
              <li>Maintained hygiene, safety, and member satisfaction in all training sessions.</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Sales Consultant - Magsons</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Provided tailored product recommendations and maintained inventory discipline.</li>
              <li>Excelled in customer interaction and driving product awareness.</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold">Receptionist - Chandu Pharmacy</h3>
            <ul className="list-disc ml-5 text-gray-300 space-y-1">
              <li>Managed store records, assisted with medicine tracking, and supported front-desk operations.</li>
              <li>Helped streamline rush-hour processes and customer queries efficiently.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Education</h2>
        <ul className="list-disc ml-5 text-gray-300 space-y-2">
          <li><strong>BCA (2022–2025)</strong> – Don Bosco College, Panjim</li>
          <li><strong>HSCE - Commerce (2020–2022)</strong> – St. Michael's HSS, Taleigao</li>
          <li><strong>SSCE (2012–2020)</strong> – Fr. Agnel High School, Pilar</li>
        </ul>
      </section>

      <section id="skills" className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Core Skills & Attributes</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
          <li>Front-End Development</li>
          <li>Digital Marketing</li>
          <li>Creative Problem Solving</li>
          <li>Leadership & Communication</li>
          <li>Event Management</li>
          <li>Fitness & Coaching</li>
          <li>Customer Engagement Strategy</li>
          <li>Content Creation & Strategy</li>
        </ul>
      </section>

      <section id="languages" className="mt-24 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Languages</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          <li>English</li>
          <li>Hindi</li>
          <li>Konkani</li>
          <li>Portuguese</li>
        </ul>
      </section>

      <section id="contact" className="mt-24 max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2">Let’s Connect</h2>
        <p className="text-lg text-gray-300 mb-5">
          Passionate about collaboration, innovation, and creating impact. Whether it's a design conversation, development project, or marketing initiative — I'm open to connect.
        </p>
        <a
          href="mailto:dragonconquerer20@gmail.com"
          className="text-blue-500 hover:underline text-lg font-semibold"
        >
          dragonconquerer20@gmail.com
        </a>
      </section>
      <section className="mt-24 max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-bold mb-4 border-b border-gray-700 pb-2">Why I Code</h2>
  <p className="text-lg text-gray-300">
    I believe in using design and technology to solve real human problems. Every line of code I write is a step toward creating something meaningful, accessible, and empowering.
  </p>
</section>

<section id="featured-projects" className="mt-24 max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-6 border-b border-gray-700 pb-2 text-center">Featured Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-2">Smart Portfolio App</h3>
      <p className="text-gray-300 mb-3">An interactive, responsive portfolio template built with React and Tailwind, allowing users to customize their digital presence.</p>
      <a href="#" className="text-blue-500 hover:underline">View Project →</a>
    </div>

    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <h3 className="text-2xl font-semibold mb-2">Fitness Tracker UI</h3>
      <p className="text-gray-300 mb-3">A fitness dashboard UI for tracking routines, goals, and stats — combining clean design and React logic for motivation-driven results.</p>
      <a href="#" className="text-blue-500 hover:underline">View Project →</a>
    </div>
  </div>
</section>

<section className="mt-24 max-w-4xl mx-auto text-center">
  <a
    href="/ShahidShaikh_Resume.pdf" // Replace with your actual file path
    download
    className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300"
  >
    Download My Resume
  </a>
</section>

<section className="mt-24 max-w-3xl mx-auto text-center italic text-xl text-gray-400">
  <p>"Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs</p>
</section>
    </main>
  );
}
