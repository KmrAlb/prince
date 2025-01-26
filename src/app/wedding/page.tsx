'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface WeddingImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

const WEDDING_IMAGES: WeddingImage[] = [
  {
    src: '/images/prewedding/1 (3).webp',
    alt: 'Haldi Ceremony',
    caption: 'A Golden Glow',
    description: 'The ritual of applying turmeric to the bride and groom, signifying purity and blessings.',
  },
  {
    src: '/images/wedding/9 (1).webp',
    alt: 'Mehndi Ceremony',
    caption: 'Patterns of Love',
    description: 'Beautiful henna designs adorn the bride, symbolizing joy and celebration.',
  },
  {
    src: '/images/wedding/9 (2).webp',
    alt: 'Sangeet Night',
    caption: 'Melodies and Dance',
    description: 'An evening of music and dance to celebrate the upcoming union.',
  },
  {
    src: '/images/wedding/7 (2).webp',
    alt: 'Wedding Vows',
    caption: 'Promises of Forever',
    description: 'A sacred ceremony where vows are exchanged, binding two souls as one.',
  },
  {
    src: '/images/wedding/9.webp',
    alt: 'Baraat Procession',
    caption: 'A Royal Entry',
    description: 'The grand entrance, filled with music, dance, and excitement.',
  },
  {
    src: '/images/wedding/1 (10).webp',
    alt: 'Jaimala Ceremony',
    caption: 'A Garland of Love',
    description: 'The exchange of garlands, symbolizing acceptance and mutual respect.',
  },
  {
    src: '/images/wedding/1 (5).webp',
    alt: 'Mandap Rituals',
    caption: 'Sacred Traditions',
    description: 'Traditional rituals performed under the mandap to invoke blessings from the divine.',
  },
  {
    src: '/images/wedding/1 (9).webp',
    alt: 'Sindoor Ceremony',
    caption: 'A Mark of Commitment',
    description: "The groom applies sindoor on the bride's forehead, marking the start of their marital journey.",
  },
  {
    src: '/images/wedding/7 (1).webp',
    alt: 'Reception Night',
    caption: 'A Grand Celebration',
    description: 'A night to celebrate the union with family and friends through dance, laughter, and love.',
  },
];

const Sparkle = () => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-sparkle"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const RainDrop = () => (
  <motion.div
    className="absolute w-1 h-6 bg-white rounded-full opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3, y: 64 }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      delay: Math.random() * 1.5,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * -20}px`,
    }}
  />
);

const WeddingPage = () => {
  const [selectedImage, setSelectedImage] = useState<WeddingImage | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: "url('/images/wedding/1 (2).webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkle key={`sparkle-${i}`} />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <RainDrop key={`rain-${i}`} />
        ))}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="text-center"
            style={{
              color: '#FFFFFF',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Wedding Moments
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Celebrating love, joy, and togetherness
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {WEDDING_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="rounded-none object-cover"
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
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="rounded-none shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
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
    </div>
  );
};

export default WeddingPage;
