'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface WeddingImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
  orientation?: 'vertical' | 'landscape';

}
const WEDDING_IMAGES: WeddingImage[] = [

  {
    src: '/images/wedding/9.webp',
    alt: 'Haldi Ceremony',
    caption: 'A Golden Glow',
    description: 'A joyful moment as laughter fills the air and love surrounds the couple.',
  },
  {
    src: '/images/prewedding/1 (3).webp',
    alt: 'Mehndi Ceremony',
    caption: 'Patterns of Love',
    description: 'Henna on hands, smiles on faces, and hearts full of excitement.',
  },
  {
    src: '/images/wedding/9 (2).webp',
    alt: 'Sangeet Night',
    caption: 'Melodies and Dance',
    description: 'Music, laughter, and dance make the night unforgettable.',
  },
  {
    src: '/images/wedding/592.webp',
    alt: 'Wedding Vows',
    caption: 'Promises of Forever',
    description: 'Two souls sharing a quiet, heartfelt moment of commitment.',
  },
  {
    src: '/images/wedding/982.webp',
    alt: 'Baraat Procession',
    caption: 'A Grand Arrival',
    description: 'Excitement and celebration fill the air as the couple makes their entrance.',
    orientation: 'vertical',
  },
  {
    src: '/images/wedding/892a.webp',
    alt: 'Jaimala Ceremony',
    caption: 'A Garland of Love',
    description: 'Exchanging garlands, smiles, and playful glances.',
  },
  {
    src: '/images/engagement/5.webp',
    alt: 'Engagement 4',
    caption: 'Surrounded by love.',
    description:
      "Loved ones gather to share in the happiness of the couple's engagement.",
  },
  {
    src: '/images/wedding/656.webp',
    alt: 'Bridal Portrait',
    caption: 'Elegance in Frame',
    description: 'Capturing her calm, graceful, and radiant presence.',
  },
  {
    src: '/images/wedding/091.webp',
    alt: 'Joyful Celebration',
    caption: 'Moments of Happiness',
    description: 'Genuine smiles and laughter shared among loved ones.',
  },
  {
    src: '/images/wedding/102.webp',
    alt: 'Couple Shoot',
    caption: 'Together Forever',
    description: 'A quiet, intimate moment of connection between the couple.',
    orientation: 'vertical',
  },
  {
    src: '/images/wedding/103.webp',
    alt: 'Bridal Jewellery',
    caption: 'Adorned in Tradition',
    description: 'Beautiful details adding charm to a special day.',
    orientation: 'vertical',
  },
  {
    src: '/images/wedding/1.webp',
    alt: 'Groom Portrait',
    caption: 'Royal Charm',
    description: 'A confident, joyful look capturing the groom’s personality.',
  },
  {
    src: '/images/wedding/7 (1).webp',
    alt: 'Family Rituals',
    caption: 'Blessings and Togetherness',
    description: 'Heartwarming moments shared with family and friends.',
  },
  {
    src: '/images/wedding/7 (2).webp',
    alt: 'Bridal Mehndi Close-up',
    caption: 'Art in Detail',
    description: 'A close-up of intricate patterns full of care and love.',
  },
  {
    src: '/images/wedding/1 (10).webp',
    alt: 'Couple Entrance',
    caption: 'A Magical Arrival',
    description: 'Cheerful smiles and excited glances as the couple arrives.',
  },
  {
    src: '/images/wedding/1 (11).webp',
    alt: 'Cultural Rituals',
    caption: 'Timeless Moments',
    description: 'Capturing small gestures that mean so much.',
  },
  {
    src: '/images/wedding/1 (9).webp',
    alt: 'Flower Shower',
    caption: 'Showered with Love',
    description: 'Joy and laughter as friends celebrate with petals.',
  },
  {
    src: '/images/wedding/75.webp',
    alt: 'Emotional Moments',
    caption: 'Heartfelt Joy',
    description: 'Tears of happiness, hugs, and genuine emotions shared.',
  },
  {
    src: '/images/wedding/7 (2).webp',
    alt: 'Candid Bride',
    caption: 'Unfiltered Beauty',
    description: 'Spontaneous moments that show her true personality.',
  },
  {
    src: '/images/wedding/94.webp',
    alt: 'Guest Portrait',
    caption: 'Smiles All Around',
    description: 'Loved ones sharing laughter and happiness.',
  },
  {
    src: '/images/wedding/983.webp',
    alt: 'Celebration Moment',
    caption: 'Bright & Beautiful',
    description: 'Vibrant energy and warmth from the day’s celebration.',
    orientation: 'vertical',
  },

  
];

const Sparkle = () => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-sparkle"
    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
  />
);

const RainDrop = () => (
  <motion.div
    className="absolute w-1 h-6 bg-white rounded-full opacity-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.3, y: 64 }}
    transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 1.5 }}
    style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * -20}px` }}
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
          <div className="text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            <motion.h1 className="text-4xl md:text-5xl font-bold" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Wedding Moments
            </motion.h1>
            <motion.p className="text-lg md:text-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
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

export default WeddingPage;