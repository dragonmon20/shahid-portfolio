// Path: app/layout.tsx

import '../styles/globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shahid Shaikh | Portfolio',
  description: 'Frontend portfolio built with Next.js, Tailwind, and animation.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${poppins.className} bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white scroll-smooth selection:bg-blue-600/80 selection:text-white`}
      >
        <Navbar />
        <div className="relative z-0">{children}</div>
        <div className="pointer-events-none fixed inset-0 z-[-1] bg-gradient-radial from-blue-800/10 via-transparent to-transparent" />
      </body>
    </html>
  );
}
