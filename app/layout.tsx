// File: app/layout.tsx

import './globals.css';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Shahid Shaikh | Front-End Portfolio',
  description: 'Ambitious front-end developer building with Next.js, React, and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}

