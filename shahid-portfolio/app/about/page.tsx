// File: app/about/page.tsx

export default function About() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Professional Experience</h1>
        <p className="text-xl text-gray-400 mb-12">
          Learn more about my background and career journey.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-10">
        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold">Supervisor - Serendipity Arts Festival</h2>
          <p className="text-gray-400 mb-2">Panaji, Goa | Dec 2022 - Dec 2024 (Seasonal)</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-1">
            <li>Led multi-venue operations and team coordination.</li>
            <li>Managed 35-40 volunteers ensuring performance and logistics.</li>
            <li>Maintained event safety and guest experience.</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold">Gym Instructor - Norbert's Fitness Studio</h2>
          <p className="text-gray-400 mb-2">Goa, India | Feb 2022 - Dec 2023</p>
          <ul className="list-disc ml-5 text-gray-300 space-y-1">
            <li>Designed custom fitness programs.</li>
            <li>Delivered motivating, results-driven workouts.</li>
            <li>Fostered a culture of discipline and encouragement.</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold">Sales Consultant - Magsons</h2>
          <ul className="list-disc ml-5 text-gray-300 space-y-1">
            <li>Engaged customers with tailored product advice.</li>
            <li>Maintained clean records and high service quality.</li>
          </ul>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold">Receptionist - Chandu Pharmacy</h2>
          <ul className="list-disc ml-5 text-gray-300 space-y-1">
            <li>Organized store data and supported rush-hour sales.</li>
            <li>Maintained friendly customer interactions and store workflow.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

