// ./src/app/pre-wedding/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image'; // Importing Image from next/image

interface PreWeddingImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
    orientation?: 'vertical' | 'landscape';

}

const PREWEDDING_IMAGES: PreWeddingImage[] = [
  {
    src: '/images/prewedding/1 (7).webp',
    alt: 'Pre-Wedding Photo 1',
    caption: 'A love story begins, framed in elegance.',
    description:
      'Capturing the tender moments before the big day, where every glance and smile speaks of promises and dreams shared.',
  },
  {
    src: '/images/prewedding/787.webp',
    alt: 'Pre-Wedding Photo 2',
    caption: 'Cherishing every moment together.',
    description:
      'Every frame tells the story of two hearts coming together, celebrating love, laughter, and the journey ahead.',
  },
  {
    src: '/images/prewedding/1 (8).webp',
    alt: 'Pre-Wedding Photo 4',
    caption: 'The beginning of forever.',
    description:
      'From candid smiles to serene embraces, we immortalize the beauty of your journey to forever.',
  },
  {
    src: '/images/prewedding/1 (4).webp',
    alt: 'Pre-Wedding Photo 5',
    caption: 'A celebration of love and togetherness.',
    description:
      'We craft imagery that celebrates your unique connection, blending elegance with authenticity.',
  },
  {
    src: '/images/prewedding/3.webp',
    alt: 'Pre-Wedding Photo 6',
    caption: 'In every frame, love shines bright.',
    description:
      'Our sessions are designed to bring out the beauty of your love story, capturing its every nuance and detail.',
  },
  {
  src: '/images/prewedding/1 (5).webp',
  alt: 'Pre-Wedding Photo 7',
  caption: 'Moments that feel like magic.',
  description:
    'Every glance, every touch, every smile—captured naturally to reflect the magic of your love.',
},
{
  src: '/images/prewedding/785.webp',
  alt: 'Pre-Wedding Photo 8',
  caption: 'Where love meets timeless beauty.',
  description:
    'We create elegant and heartfelt portraits that highlight your bond in the most authentic way.',
},
{
  src: '/images/prewedding/2.webp',
  alt: 'Pre-Wedding Photo 9',
  caption: 'Together is a beautiful place to be.',
  description:
    'Capturing tender moments and natural emotions that tell your love story beautifully.',
},
{
  src: '/images/prewedding/0.webp',
  alt: 'Pre-Wedding Photo 10',
  caption: 'A journey captured in frames.',
  description:
    'From intimate moments to grand expressions, we document your story with passion and artistry.',
        orientation: 'vertical',

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

const PreWeddingPage = () => {
  const [selectedImage, setSelectedImage] = useState<PreWeddingImage | null>(null);
  
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
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
          backgroundImage: "url('/images/prewedding/00-1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40" />
        {/* Sparkles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkle key={`sparkle-${i}`} />
        ))}
        {/* Rain */}
        {Array.from({ length: 30 }).map((_, i) => (
          <RainDrop key={`rain-${i}`} />
        ))}
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
              Pre-Wedding Moments
            </motion.h1>
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5" />
              <p className="text-lg md:text-xl">Crafting timeless love stories</p>
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}{/* Gallery Section */}
            <div className="max-w-6xl mx-auto px-4 py-16">
              {PREWEDDING_IMAGES.map((image, index) => (
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
                        width={image.orientation === 'vertical' ? 600 : 800}
                        height={image.orientation === 'vertical' ? 800 : 600}
                        className={`rounded-none ${image.orientation === 'vertical' ? 'object-contain' : 'object-cover'}`}
                      />
                    </motion.div>
                  </div>
                  <motion.div className="w-full md:w-1/2 space-y-4" whileHover={{ x: index % 2 === 0 ? 10 : -10 }}>
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
                    className="relative w-full max-w-3xl max-h-[90vh] flex justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      width={selectedImage.orientation === 'vertical' ? 600 : 800}
                      height={selectedImage.orientation === 'vertical' ? 800 : 600}
                      className={`rounded-none shadow-2xl ${selectedImage.orientation === 'vertical' ? 'object-contain' : 'object-cover'}`}
                    />
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      };
export default PreWeddingPage;
