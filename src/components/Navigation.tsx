'use client';
import { useState, useEffect, useCallback } from 'react';
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

// Generates a soft, airy chime using the Web Audio API — no audio file needed
const playChime = () => {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    const ctx = new AudioContext();

    // Two sine waves slightly detuned for a warm, breathy tone
    const frequencies = [880, 1108]; // A5 + C#6 — a gentle major third

    frequencies.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Very soft — barely audible, just a whisper
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.01 + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6 + i * 0.1);

      osc.start(ctx.currentTime + i * 0.04);
      osc.stop(ctx.currentTime + 0.8);

      osc.onended = () => {
        gain.disconnect();
        osc.disconnect();
      };
    });

    // Close context after sound finishes to free memory
    setTimeout(() => ctx.close(), 1000);
  } catch {
    // Silently fail if Web Audio API not supported
  }
};

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

  const handleNavClick = useCallback(() => {
    playChime();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.65, 0.05, 0.36, 1] }}
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
              onClick={handleNavClick}
              className="font-serif text-xl tracking-wide text-white whitespace-nowrap flex-shrink-0 hover:opacity-75 transition-opacity duration-300"
            >
              Vivaah Tales
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className="relative whitespace-nowrap text-xs tracking-widest uppercase font-light flex-shrink-0 transition-opacity duration-300 hover:opacity-60"
                    style={{ color: isActive ? '#c9a882' : '#ffffff' }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{
                          background:
                            'linear-gradient(90deg, transparent, #c9a882, transparent)',
                        }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile button */}
            <button
              onClick={() => {
                handleNavClick();
                setIsMobileMenuOpen((p) => !p);
              }}
              className="md:hidden text-white hover:opacity-60 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Spacer */}
      <div className="h-16" />

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40"
              style={{
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(4px)',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.65, 0.05, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 flex flex-col px-8 pt-6 pb-10"
              style={{
                width: 260,
                background: '#0a0a0a',
                borderLeft: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Close */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => {
                    handleNavClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-white hover:opacity-50 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Brand */}
              <p className="font-serif text-white text-lg tracking-wide mb-6">
                Vivaah Tales
              </p>

              {/* Divider */}
              <div
                className="mb-8 h-px"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(201,168,130,0.6), transparent)',
                }}
              />

              {/* Links */}
              <nav className="flex flex-col gap-5">
                {NAVIGATION_ITEMS.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: i * 0.04,
                        ease: 'easeOut',
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          handleNavClick();
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-xs uppercase tracking-widest font-light whitespace-nowrap transition-opacity hover:opacity-50"
                        style={{ color: isActive ? '#c9a882' : '#ffffff' }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;