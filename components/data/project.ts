export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: 'smart-portfolio',
    title: 'Smart Portfolio App',
    description: 'Modern, animated portfolio with React + Tailwind.',
    image: '/images/profile.png',
    link: 'https://shahid-smartportfolio.vercel.app',
  },
  {
    slug: 'fitness-tracker-ui',
    title: 'Fitness Tracker UI',
    description: 'Track workouts & goals in a beautiful dashboard.',
    image: '/images/fitness.png',
    link: 'https://shahid-fitnesstracker.vercel.app',
  },
];
