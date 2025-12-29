'use client'; // Needed for interactivity (hover states) in App Router

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          ProducerAI
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link>
          <Link href="/chat" className="hover:text-white transition-colors">Chat</Link>
        </div>

        {/* Action Button */}
        <button className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </div>
    </nav>
  );
}