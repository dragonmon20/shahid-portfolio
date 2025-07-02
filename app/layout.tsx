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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white scroll-smooth`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
