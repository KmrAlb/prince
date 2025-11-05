// ./src/app/pre-baby-shoot/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Image from 'next/image'; // Importing Image from next/image

interface PreBabyImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
    orientation?: 'vertical' | 'landscape';

}

const PREBABY_IMAGES: PreBabyImage[] = [

  {
    src: '/images/prebaby/1 (6).webp',
    alt: 'Pre-Baby Photoshoot 1',
    caption: 'Tiny toes, big beginnings.',
    description: 'Celebrating the early days of life with simple and heartfelt moments.',
  },
  {
    src: '/images/prebaby/1 (4).webp',
    alt: 'Pre-Baby Photoshoot 2',
    caption: 'Joy in every little moment.',
    description: 'Capturing genuine expressions and milestones as your little one grows.',
  },
  {
    src: '/images/prebaby/1 (8).webp',
    alt: 'Pre-Baby Photoshoot 3',
    caption: 'First smiles, unforgettable memories.',
    description: "Documenting the unique charm of your baby's first year with care and attention.",
  },
  {
    src: '/images/prebaby/1 (2).webp',
    alt: 'Pre-Baby Photoshoot 4',
    caption: 'Cherishing the moments that matter.',
    description: 'From their first laugh to their tiny steps, we help you treasure these milestones forever.',
  },
  {
    src: '/images/prebaby/1 (3).webp',
    alt: 'Pre-Baby Photoshoot 5',
    caption: 'Big love for little ones.',
    description: "Creating timeless portraits that celebrate your child's first year.",
  },
  {
    src: '/images/prebaby/1 (1).webp',
    alt: 'Pre-Baby Photoshoot 6',
    caption: 'Moments to hold onto.',
    description: 'Capturing early childhood moments with warmth and authenticity.',
  },
  {
    src: '/images/prebaby/41.webp',
    alt: '4-Month Baby Photoshoot',
    caption: 'Four months of pure wonder.',
    description: 'Capturing growing curiosity, brighter smiles, and beautiful early milestones.',
  },
  {
    src: '/images/prebaby/1 (5).webp',
    alt: '4-Month Baby Photoshoot 2',
    caption: 'Little giggles, big smiles.',
    description: 'Another glimpse of four-month milestones full of joy and curiosity.',
  },
  {
    src: '/images/prebaby/5.webp',
    alt: '5-Month Baby Photoshoot',
    caption: 'Little hands, big happiness.',
    description: 'Celebrating the fifth month with adorable expressions and playful personality.',
  },
  {
    src: '/images/prebaby/102.webp',
    alt: '6-Month Baby Photoshoot',
    caption: 'Halfway to one, full of love.',
    description: 'Documenting the exciting half-year mark with warm and lively portraits.',
  },
  {
    src: '/images/prebaby/11.webp',
    alt: '1-Year Birthday Photoshoot',
    caption: 'One year of joy and giggles.',
    description: 'A special milestone filled with laughter, innocence, and big first adventures.',
  },
  {
    src: '/images/prebaby/101.webp',
    alt: '2-Year Toddler Photoshoot',
    caption: 'Two years of growing wonder.',
    description: 'Capturing the energetic, curious, and heartwarming moments of toddlerhood.',
        orientation: 'vertical',

  },
  {
    src: '/images/prebaby/104.webp',
    alt: '2-Year Toddler Photoshoot 3',
    caption: 'Tiny adventurer.',
    description: 'Exploring the world one step at a time with curiosity and joy.',
  },
  {
    src: '/images/prebaby/103.webp',
    alt: '2-Year Toddler Photoshoot 4',
    caption: 'Little explorer.',
    description: 'Capturing their playful spirit and heartwarming antics at two years old.',
  },
  {
    src: '/images/prebaby/55.webp',
    alt: '5-Year Kids Photoshoot',
    caption: 'Five and full of dreams.',
    description: 'Celebrating personality, imagination, and childhood magic at five years old.',
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

const PreBabyPage = () => {
  const [selectedImage, setSelectedImage] = useState<PreBabyImage | null>(null);
  
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
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: "url('/images/prebaby/1 (7).webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
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
              Pre-Baby Moments
            </motion.h1>
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5" />
              <p className="text-lg md:text-xl"> 
                Capturing the joy of their first year  
              </p>
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Section */}

            <div className="max-w-6xl mx-auto px-4 py-16">
              {PREBABY_IMAGES.map((image, index) => (
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

export default PreBabyPage;
