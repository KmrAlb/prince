'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

export const NAVIGATION_ITEMS = [
  { name: 'Maternity', href: '/maternity' },
  { name: 'Pre-Baby Shoot', href: '/pre-baby-shoot' },
  { name: 'Engagement', href: '/engagement' },
  { name: 'Pre-Wedding', href: '/pre-wedding' },
  { name: 'Wedding', href: '/wedding' },
  { name: 'Birthday', href: '/birthday' },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="relative">
      <nav className="bg-black text-white z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-3xl font-bold tracking-tight hover:text-purple-400 transition-colors duration-300">
                VivahTales
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 ease-in-out relative
                    ${pathname === item.href 
                      ? 'text-purple-400' 
                      : 'text-white hover:text-purple-400'
                    }
                    hover:shadow-[0_2px_4px_rgba(168,85,247,0.4)]
                    hover:after:opacity-100
                    after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0
                    after:h-[2px] after:bg-gradient-to-r after:from-purple-500/50 after:to-pink-500/50
                    after:opacity-0 after:transition-all after:duration-300`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="text-white hover:text-purple-400 focus:outline-none transition-colors duration-300"
                aria-label="Toggle navigation"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 transition-all duration-300 ease-in-out">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-purple-400 transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col items-center pt-8 pb-4 space-y-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-all duration-300 ease-in-out relative
                  ${pathname === item.href 
                    ? 'text-purple-400' 
                    : 'text-white hover:text-purple-400'
                  }
                  hover:shadow-[0_2px_4px_rgba(168,85,247,0.4)]
                  hover:after:opacity-100
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0
                  after:h-[2px] after:bg-gradient-to-r after:from-purple-500/50 after:to-pink-500/50
                  after:opacity-0 after:transition-all after:duration-300`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;