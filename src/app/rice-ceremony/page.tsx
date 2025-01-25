'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RICE_CEREMONY_IMAGES = [
  {
    src: '/images/rice-ceremony1.jpg',
    alt: 'Rice Ceremony 1',
    caption: 'A blessing for the future.',
    description:
      'The first grains of rice signify prosperity, love, and nourishment for the little one’s future.',
  },
  {
    src: '/api/placeholder/800/600',
    alt: 'Rice Ceremony 2',
    caption: 'A moment of tradition.',
    description:
      'Celebrating the deep-rooted customs that bond families and create lasting memories.',
  },
  {
    src: '/api/placeholder/800/600',
    alt: 'Rice Ceremony 3',
    caption: 'Laughter and joy all around.',
    description:
      'The joy of the rice ceremony fills the air as families unite in celebration of new beginnings.',
  },
  {
    src: '/api/placeholder/800/600',
    alt: 'Rice Ceremony 4',
    caption: 'A cherished milestone.',
    description:
      'Marking an important cultural milestone, filled with love, laughter, and blessings.',
  },
  {
    src: '/api/placeholder/800/600',
    alt: 'Rice Ceremony 5',
    caption: 'A lifetime of blessings.',
    description:
      'Capturing the start of a new chapter, filled with prayers and well-wishes from loved ones.',
  },
];

const RiceCeremonyPage = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center text-white space-y-4 px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Rice Ceremony Celebration
            </motion.h1>
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-lg md:text-xl">Honoring traditions and blessings</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {RICE_CEREMONY_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 mb-24 relative`}
          >
            <div className="w-full md:w-1/2 relative group">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover rounded-none"
                />
              </motion.div>
            </div>
            <motion.div
              className="w-full md:w-1/2 space-y-4"
              whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800">{image.caption}</h2>
              <p className="text-gray-600 leading-relaxed">{image.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-none shadow-2xl"
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-2">{selectedImage.caption}</h3>
                <p className="text-white/90">{selectedImage.description}</p>
              </motion.div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
    </div>
  );
};

export default RiceCeremonyPage;
