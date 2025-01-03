'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as Icons from 'lucide-react';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div>
      {/* Theme Toggle Button (Globally Placed) */}

      <nav className="bg-white dark:bg-black text-black dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-extrabold tracking-tight">
                VivahTales
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => {
                const Icon = Icons[item.icon as keyof typeof Icons];
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 text-sm font-medium transition duration-200 ease-in-out
                      ${
                        pathname === item.href
                          ? 'text-yellow-500'
                          : 'text-gray-600 dark:text-gray-300 hover:text-yellow-500'
                      }`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 dark:text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 rounded"
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? (
                  <Icons.X className="h-6 w-6" />
                ) : (
                  <Icons.Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {NAVIGATION_ITEMS.map((item) => {
              const Icon = Icons[item.icon as keyof typeof Icons];
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium
                    ${
                      pathname === item.href
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
