import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar'; // Import from your local components folder

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ProducerAI',
  description: 'AI-powered video generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Navbar sits here */}
        <Navbar />
        {/* Children is the page content */}
        {children}
      </body>
    </html>
  );
}
