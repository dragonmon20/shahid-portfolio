// Path: components/Navbar.tsx

'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Now', href: '#now' },
  { label: 'GitHub', href: '#github' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-6 py-3 transition backdrop-blur-lg ${scrolled ? 'bg-gray-900/90 shadow-md' : 'bg-transparent'}`}>
      <ul className="flex items-center justify-center gap-6 text-sm text-white">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-blue-400 transition">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
