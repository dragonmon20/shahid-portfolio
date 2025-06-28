export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-12">
      
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Hello, I'm <span className="text-blue-500">Shahid</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          A passionate Front-End Developer specializing in building responsive, user-friendly interfaces with <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>. I enjoy turning complex problems into elegant web experiences.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
        >
          View Projects
        </a>
      </section>

      <section id="projects" className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">MyApp Clone</h3>
            <p className="text-gray-400">A responsive clone built using React and Tailwind CSS. Features include modern layout and real-time interactivity.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400">This very portfolio — built using Next.js, showcasing my work and skills as a front-end developer.</p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
<section id="contact" className="mt-20 w-full max-w-2xl text-center">
  <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
  <p className="text-gray-300 mb-6">
    Interested in working together? Let’s connect! 👇
  </p>
  <a
    href="1910shahidshaikh@gmail.com"
    className="inline-block px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
  >
    Email Me
  </a>
</section>

    </main>
  );
}
