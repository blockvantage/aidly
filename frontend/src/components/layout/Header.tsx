import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                aidly
              </span>
              <span className="text-sm text-gray-600">by Blockvantage</span>
            </Link>
          </div>
          <div className="ml-10 flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#impact"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              Impact
            </Link>
            <Link
              href="#about"
              className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
            >
              About
            </Link>
            <ConnectButton />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
