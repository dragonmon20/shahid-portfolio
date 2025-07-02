// Path: components/GitHubStats.tsx

'use client';

export default function GitHubStats() {
  return (
    <section className="mt-24 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-green-400 mb-8">📊 GitHub Stats</h2>
      <div className="space-y-6">
        <img
          src="https://github-readme-stats.vercel.app/api?username=shahidcodes&show_icons=true&theme=radical"
          alt="GitHub Stats"
          className="mx-auto rounded-lg shadow-md"
        />
        <img
          src="https://streak-stats.demolab.com/?user=shahidcodes&theme=radical"
          alt="GitHub Streak"
          className="mx-auto rounded-lg shadow-md"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=shahidcodes&layout=compact&theme=radical"
          alt="Top Languages"
          className="mx-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  );
}
