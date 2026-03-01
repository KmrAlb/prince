'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const NAVIGATION_ITEMS = [
  { name: 'About', href: '/about' },
  { name: 'Maternity', href: '/maternity' },
  { name: 'Pre-Baby', href: '/pre-baby-shoot' },
  { name: 'Engagement', href: '/engagement' },
  { name: 'Pre-Wedding', href: '/pre-wedding' },
  { name: 'Wedding', href: '/wedding' },
  { name: 'Birthday', href: '/birthday' },
  { name: 'Baby Shower', href: '/baby-shower' },
  { name: 'Films', href: '/films' },
  { name: 'Reviews', href: '/review' },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500"
        style={{
          background: 'rgba(0,0,0,0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link
              href="/"
              className="font-serif text-lg sm:text-xl tracking-wide text-white whitespace-nowrap"
            >
              Vivaah Tales
            </Link>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="relative text-xs tracking-widest uppercase font-light transition-opacity hover:opacity-60"
                    style={{ color: isActive ? '#c9a882' : '#ffffff' }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] z-50 border-l border-white/10 flex flex-col"
            >
              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-6 py-6">

                {/* Close */}
                <div className="flex justify-end mb-6">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white"
                  >
                    <X size={22} />
                  </button>
                </div>

                {/* Brand */}
                <p className="font-serif text-white text-lg mb-6">
                  Vivaah Tales
                </p>

                <div className="h-px bg-gradient-to-r from-[#c9a882]/60 to-transparent mb-8" />

                {/* Links */}
                <nav className="flex flex-col gap-6">
                  {NAVIGATION_ITEMS.map((item, i) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm uppercase tracking-wider font-light break-words transition-opacity hover:opacity-60"
                          style={{ color: isActive ? '#c9a882' : '#ffffff' }}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;